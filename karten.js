/* Karten – one card per screen, shared by every section (first built in A1).

   A section calls  Karten({...})  once and gets a cards button to put in its
   tool bar. The list stays the default; the button opens the cards at what is
   on screen, the list icon goes back there. While open, the app's header and
   tab bar step aside (message {dlCards} to index.html), the text is fitted to
   the screen so a card does not scroll, swipes and the glass pill move (double
   tap = first / last of the group), and the counter opens first / last and a
   part chooser.

   The card lives inside the section's <main>, so the section's own click
   handlers (play, translate, reveal …) work on it unchanged.

   Options
     mount    element the overlay goes in (the section's main)
     deck()   → [{part:"label", key:"part id", group:"first/last range"}, …]
              built each time the cards open
     render(item,i) → card HTML. Convention: .fc-q (question side) and .fc-a
              (answer side) become two columns on a phone held sideways.
     start(deck)    → index to open at (default 0)
     shown(item,i,body)  after a card is drawn
     leave()  before a card is replaced or the cards close (stop sound …)
     close(item,i)  after closing (scroll the list there)
     meta(item)     → a strip of facts always on top of the card (optional)
     info(item)     → HTML for the ⓘ panel (optional): it drops down over the
              top of the card and scrolls on its own, so the card keeps its
              size; a tap on the card closes it.
              Strip and panel are styled apart from the content, so facts
              never read as part of the question.
     tools    [{id,icon|text,label,color,pressed:()=>bool,click(api)}]
              icon names: see ICON; {builtin:"practice"} blurs every .fc-hide
              in the card until tapped. Tools refit the card after a click.
   Returns { button, refit, redraw, body, fc } */
(function(){
const ICON={
 play:'<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>',
 en:'<path d="M3 5h9M7.5 3v2M10 5c-1 4-3.5 7-6.5 8.5M5.5 8.5c1.2 2 3 3.6 5 4.5"/><path d="M12 21l4.5-10L21 21M13.6 17.5h5.8"/>',
 ans:'<circle cx="12" cy="12" r="9"/><path d="M7.5 12.5l3 3 6-6.5"/>',
 practice:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 20L20 4"/>',
 multi:'<rect x="2.5" y="8" width="8" height="8" rx="2"/><rect x="13.5" y="8" width="8" height="8" rx="2"/><path d="M10.5 12h3" stroke-dasharray="1.5 1.5"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
 cards:'<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/>',
 palette:'<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.9-.7-1.2-.7-2s.6-1.4 1.5-1.4H17a4 4 0 0 0 4-4c0-5-4-9-9-9z"/><circle cx="7.5" cy="11.5" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="15" cy="7.5" r="1"/>',
 brush:'<path d="M14.5 4.5l5 5-7.5 7.5-5-5z"/><path d="M7 12.5c-2.5.3-3.5 2-3.5 4 0 1.3-.5 2.5-1.5 3 3 .8 6.5.2 7.5-2.5"/>',
 eraser:'<path d="M4 16l9-9 6 6-6.5 6.5H7.5z"/><path d="M10 19.5h10"/>',
 role:'<circle cx="8" cy="8" r="3"/><path d="M2.5 19c.5-3 2.7-5 5.5-5s5 2 5.5 5"/><path d="M15 6h6M15 10h6M17 14h4"/>',
 prev:'<path d="M15 5l-7 7 7 7"/>',
 next:'<path d="M9 5l7 7-7 7"/>'};
const svg=(k,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||2.2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]||""}</svg>`;
const escA=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
Karten.svg=svg;

function Karten(o){
 const tools=(o.tools||[]).map(t=>t.builtin==="practice"?Object.assign({id:"_pr",icon:"practice",label:"Übungsmodus",color:"var(--ink)",pressed:()=>fc.classList.contains("fc-pr"),
  click:()=>{fc.classList.toggle("fc-pr");redraw()}},t):t);
 if(o.info)tools.push({id:"_info",icon:"info",label:"Anweisung",color:"var(--b1)",pressed:()=>infoOn,click:()=>{infoOn=!infoOn;redraw()}});
 const tb=t=>`<button class="ib" type="button" data-tool="${t.id}" aria-label="${escA(t.label)}" title="${escA(t.label)}"${t.pressed?' aria-pressed="false"':""}${t.color?` style="--c:${t.color}"`:""}>${t.text?`<b class="ibt">${escA(t.text)}</b>`:svg(t.icon)}</button>`;
 const fc=document.createElement("div");fc.className="fc";fc.hidden=true;fc.setAttribute("role","region");fc.setAttribute("aria-label","Karten");
 fc.innerHTML=`<div class="fc-top">${tools.map(tb).join("")}<span class="sp"></span>${tb({id:"_close",icon:"list",label:"Zurück zur Liste"})}</div>
<div class="fc-ins fc-info" hidden></div>
<div class="fc-body"></div>
<div class="fc-menu" hidden><div class="row"><button type="button" data-go="first">⏮ Erste</button><button type="button" data-go="last">Letzte ⏭</button></div><select aria-label="Teil wählen"></select></div>
<div class="fc-nav"><button class="ib" type="button" data-go="prev" aria-label="Zurück (doppelt tippen: erste)" title="Doppelt tippen: erste">${svg("prev",2.6)}</button><button type="button" class="fc-cnt" aria-label="Erste, letzte oder Teil wählen" aria-expanded="false"></button><button class="ib" type="button" data-go="next" aria-label="Weiter (doppelt tippen: letzte)" title="Doppelt tippen: letzte">${svg("next",2.6)}</button></div>`;
 o.mount.appendChild(fc);
 const body=fc.querySelector(".fc-body"),infoEl=fc.querySelector(".fc-info"),menu=fc.querySelector(".fc-menu"),sel=menu.querySelector("select"),cnt=fc.querySelector(".fc-cnt");
 const q=s=>fc.querySelector(s);
 const button=document.createElement("button");button.type="button";button.className="fc-open";
 button.setAttribute("aria-label","Karten: eine Karte pro Seite");button.title="Karten: eine Karte pro Seite";button.innerHTML=svg("cards",2);
 let D=[],i=0,infoOn=false,keep={},lastTap={go:"",t:0};

 function range(n){const g=D[n].group;let a=n,b=n;while(a>0&&D[a-1].group===g)a--;while(b+1<D.length&&D[b+1].group===g)b++;return[a,b]}
 function sync(){tools.forEach(t=>{if(t.pressed)q(`[data-tool="${t.id}"]`).setAttribute("aria-pressed",String(!!t.pressed()))})}
 /* Largest size (13–24px) at which the card fits without scrolling. */
 function fit(){const c=body.querySelector(".fc-card");if(!c||fc.hidden)return;
  const ok=()=>body.scrollHeight<=body.clientHeight+1;let lo=13,hi=24;
  c.style.setProperty("--fs",hi+"px");if(ok())return;
  while(hi-lo>.5){const m=(lo+hi)/2;c.style.setProperty("--fs",m+"px");if(ok())lo=m;else hi=m}
  c.style.setProperty("--fs",lo+"px")}
 const refit=()=>requestAnimationFrame(fit);
 function menuOpen(on){menu.hidden=!on;cnt.setAttribute("aria-expanded",String(on))}
 function show(n,dir){
  if(n<0||n>=D.length)return;
  body.querySelectorAll("details[data-keep]").forEach(d=>keep[d.dataset.keep]=d.open);
  if(D[i]&&D[n]&&D[i].key!==D[n].key)keep={};
  if(o.leave)o.leave();menuOpen(false);
  i=n;const it=D[n],[a,b]=range(n);
  sel.value=String(D.findIndex(x=>x.key===it.key));
  cnt.textContent=`${n-a+1} / ${b-a+1}`;cnt.title=it.part;
  q('[data-go="prev"]').disabled=n===0;q('[data-go="next"]').disabled=n===D.length-1;
  menu.querySelector('[data-go="first"]').disabled=n===a;menu.querySelector('[data-go="last"]').disabled=n===b;
  body.innerHTML=`<div class="fc-card${dir?" in-"+dir:""}">${o.meta?`<div class="fc-meta">${o.meta(it)}</div>`:""}${o.render(it,n)}</div>`;
  infoEl.hidden=!(infoOn&&o.info);infoEl.innerHTML=infoEl.hidden?"":o.info(it);infoEl.scrollTop=0;
  const card=body.firstElementChild;if(card.querySelector(":scope > .fc-a"))card.classList.add("two");
  body.querySelectorAll("details[data-keep]").forEach(d=>{if(keep[d.dataset.keep])d.open=true;d.addEventListener("toggle",refit)});
  if(o.shown)o.shown(it,n,body);
  body.scrollTop=0;sync();fit()}
 function redraw(){show(i)}
 const toShell=on=>{try{if(parent!==window)parent.postMessage({dlCards:on},location.origin)}catch(e){}};
 function open(){
  D=o.deck();if(!D.length)return;
  const seen={};sel.innerHTML=D.map((d,n)=>{if(seen[d.key])return"";seen[d.key]=1;return`<option value="${n}">${escA(d.part)}</option>`}).join("");
  const n=Math.max(0,Math.min(D.length-1,o.start?o.start(D)|0:0));
  document.body.classList.add("cards");fc.hidden=false;toShell(true);i=n;keep={};show(n);
  setTimeout(fit,150)}/* again once the app's bars have gone and the frame is taller */
 function close(){if(o.leave)o.leave();menuOpen(false);fc.hidden=true;document.body.classList.remove("cards");toShell(false);
  const it=D[i];if(o.close)setTimeout(()=>o.close(it,i),60)}
 function go(k){const[a,b]=range(i);({first:()=>show(a,"r"),prev:()=>show(i-1,"r"),next:()=>show(i+1,"l"),last:()=>show(b,"l")})[k]()}
 button.onclick=open;
 fc.querySelector(".fc-top").addEventListener("click",e=>{const b=e.target.closest("[data-tool]");if(!b)return;
  if(b.dataset.tool==="_close"){close();return}
  const t=tools.find(x=>x.id===b.dataset.tool);if(t){t.click(api);sync();refit()}});
 /* Arrows: one tap moves one card; a second tap within 350ms goes on to the
    first / last of the group. No waiting on single taps. */
 fc.querySelector(".fc-nav").addEventListener("click",e=>{const b=e.target.closest("[data-go]");
  if(b){const k=b.dataset.go,now=Date.now(),dbl=lastTap.go===k&&now-lastTap.t<350;lastTap=dbl?{go:"",t:0}:{go:k,t:now};go(dbl?(k==="prev"?"first":"last"):k);return}
  if(e.target.closest(".fc-cnt"))menuOpen(menu.hidden)});
 menu.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go)});
 sel.onchange=()=>show(+sel.value,+sel.value<i?"r":"l");
 /* Practice: a blurred part opens on the first tap, before anything else sees it. */
 body.addEventListener("click",e=>{menuOpen(false);
  if(infoOn){infoOn=false;infoEl.hidden=true;sync();e.stopPropagation();e.preventDefault();return}
  const h=fc.classList.contains("fc-pr")&&e.target.closest(".fc-hide:not(.shown)");
  if(h){h.classList.add("shown");e.stopPropagation();e.preventDefault()}
  refit()},true);
 addEventListener("resize",refit);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(refit);
 /* Swipe: a mostly sideways move of 50px or more, not while text is selected. */
 let sx=null,sy=0;
 body.addEventListener("touchstart",e=>{if(e.touches.length!==1){sx=null;return}sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
 body.addEventListener("touchend",e=>{if(sx===null)return;const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;sx=null;
  if(Math.abs(dx)<50||Math.abs(dx)<Math.abs(dy)*1.5)return;
  const s=getSelection();if(s&&String(s).trim())return;
  go(dx<0?"next":"prev")},{passive:true});
 document.addEventListener("keydown",e=>{if(fc.hidden||/SELECT|INPUT|TEXTAREA/.test(e.target.tagName))return;
  if(e.key==="Escape"){menuOpen(false);return}
  const k={ArrowRight:"next",ArrowLeft:"prev",Home:"first",End:"last"}[e.key];if(k){e.preventDefault();go(k)}});
 const api={button,refit,redraw,body,fc,sync,get open(){return!fc.hidden},get item(){return D[i]}};
 return api}
window.Karten=Karten;
})();
