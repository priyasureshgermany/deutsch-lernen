/* Hilfe – how the buttons are explained, without any extra button on the page:

   1. Press and hold a button (or rest the mouse on it): a small bubble says what
      it does. Letting go does not press the button.
   2. A short tour the first time a tab is opened: it points at each button in
      turn (Weiter / Überspringen) and is never shown by itself again. The ⋯ menu
      of the app replays it ({dlTour:true} from index.html).

     Hilfe.setup({tab, tours:[{id, steps:[step…], need?}]})
       step  {sel, t, de, en, hold?=true, tour?=true}
             sel  CSS selector – the first visible match is shown in the tour;
                  every match gets the hold bubble (unless hold:false)
       need  a selector: this tour waits until it is on screen (e.g. the
             controls of an opened situation) – checked after taps */
(function(){
const CSS=`
.hlp-bub{position:fixed;z-index:9998;max-width:min(280px,calc(100vw - 24px));padding:9px 12px;border-radius:12px;background:var(--ink);color:var(--paper);
 font:14px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;box-shadow:0 10px 28px rgba(0,0,0,.3);pointer-events:none;opacity:0;transform:translateY(4px);transition:opacity .15s,transform .15s}
.hlp-bub.on{opacity:1;transform:none}
.hlp-bub b{font-weight:800}
.hlp-tour{position:fixed;inset:0;z-index:9999;touch-action:none}
.hlp-hole{position:fixed;border-radius:12px;box-shadow:0 0 0 9999px rgba(8,12,20,.68);outline:3px solid #fff;outline-offset:2px;transition:all .25s ease;pointer-events:none}
.hlp-hole.none{box-shadow:0 0 0 9999px rgba(8,12,20,.68);outline:none;width:0!important;height:0!important}
.hlp-card{position:fixed;width:min(330px,calc(100vw - 24px));padding:13px 15px 12px;border-radius:16px;background:var(--paper);color:var(--ink);border:1px solid var(--line);
 box-shadow:0 18px 40px rgba(0,0,0,.35);font:15px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif;transition:top .25s ease,left .25s ease}
.hlp-card .tt{font-weight:800;font-size:16px;margin-bottom:3px}
.hlp-card .en{display:block;color:var(--muted);font-size:13px;font-style:italic;margin-top:4px}
.hlp-card .row{display:flex;align-items:center;gap:8px;margin-top:12px}
.hlp-card .n{font-size:12px;color:var(--muted);margin-right:auto}
.hlp-card button{touch-action:manipulation;font:inherit;font-size:14px;font-weight:800;border-radius:999px;padding:8px 14px;cursor:pointer;border:1.5px solid var(--line);background:transparent;color:var(--ink)}
.hlp-card button.go{background:var(--b1);border-color:var(--b1);color:#fff}
@media (prefers-reduced-motion:reduce){.hlp-hole,.hlp-card,.hlp-bub{transition:none}}`;
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const vis=el=>{if(!el||!el.isConnected)return false;const r=el.getBoundingClientRect();if(!r.width||!r.height)return false;
 for(let n=el;n&&n!==document.body;n=n.parentElement){const s=getComputedStyle(n);if(s.display==="none"||s.visibility==="hidden")return false;if(n.hidden)return false}return true};
const first=sel=>[...document.querySelectorAll(sel)].find(vis)||null;
/* something else covers the page (a test, cards): no tour then */
const busy=()=>document.body.classList.contains("testing")||!!document.querySelector(".fc:not([hidden]),.fc-ov:not([hidden]),.tz:not([hidden]),dialog[open]");

function setup(o){
 if(!o||!o.tab||!o.tours)return;
 const st=document.createElement("style");
 const all=o.tours.flatMap(t=>t.steps),holds=all.filter(s=>s.hold!==false);
 const holdSel=holds.map(s=>s.sel).join(",");
 st.textContent=CSS+(holdSel?`\n:is(${holdSel}){-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}`:"");
 document.head.appendChild(st);
 const KEY=id=>"dl:tour:"+o.tab+":"+id;

 /* ---- 1. press and hold ---- */
 const bub=document.createElement("div");bub.className="hlp-bub";bub.setAttribute("role","tooltip");document.body.appendChild(bub);
 let tHold=0,from=null,held=null,hideT=0;
 const stepOf=el=>{for(const s of holds){const m=el.closest(s.sel);if(m)return [m,s]}return null};
 function place(box,r,gap){const w=box.offsetWidth,h=box.offsetHeight;
  let top=r.top-h-gap;if(top<8)top=r.bottom+gap;if(top+h>innerHeight-8)top=Math.max(8,innerHeight-h-8);
  const left=Math.min(Math.max(8,r.left+r.width/2-w/2),innerWidth-w-8);box.style.top=top+"px";box.style.left=left+"px"}
 function showBub(el,s){clearTimeout(hideT);bub.innerHTML=`<b>${s.t}</b>${s.de?" – "+s.de:""}`;bub.classList.add("on");place(bub,el.getBoundingClientRect(),10)}
 function hideBub(ms){clearTimeout(hideT);hideT=setTimeout(()=>bub.classList.remove("on"),ms||0)}
 document.addEventListener("pointerdown",e=>{if(tour||e.pointerType==="mouse")return;hideBub();const f=stepOf(e.target);if(!f)return;
  from=[e.clientX,e.clientY];clearTimeout(tHold);tHold=setTimeout(()=>{held=f[0];showBub(f[0],f[1]);if(navigator.vibrate)try{navigator.vibrate(12)}catch(x){}},450)},true);
 document.addEventListener("pointermove",e=>{if(from&&Math.hypot(e.clientX-from[0],e.clientY-from[1])>10){clearTimeout(tHold);from=null}},true);
 const up=()=>{clearTimeout(tHold);from=null;if(held)hideBub(2600)};
 document.addEventListener("pointerup",up,true);document.addEventListener("pointercancel",up,true);
 /* the tap that ends a long press is not a press of the button */
 document.addEventListener("click",e=>{if(held&&(e.target===held||held.contains(e.target))){e.preventDefault();e.stopImmediatePropagation()}held=null},true);
 document.addEventListener("contextmenu",e=>{if(held||stepOf(e.target)&&from)e.preventDefault()},true);
 addEventListener("scroll",()=>hideBub(),{passive:true,capture:true});
 /* laptop: rest the mouse on a button */
 if(matchMedia("(hover:hover)").matches){let tHover=0,over=null;
  document.addEventListener("mouseover",e=>{if(tour)return;const f=stepOf(e.target);if(!f||f[0]===over)return;over=f[0];clearTimeout(tHover);
   tHover=setTimeout(()=>{if(over===f[0])showBub(f[0],f[1])},650)});
  document.addEventListener("mouseout",e=>{if(!over||over.contains(e.relatedTarget))return;over=null;clearTimeout(tHover);hideBub()})}

 /* ---- 2. the tour ---- */
 let tour=null;
 function end(){if(!tour)return;tour.el.remove();removeEventListener("resize",tour.re);document.removeEventListener("keydown",tour.key,true);tour=null}
 function start(list,ids,intro){if(tour||busy())return;
  const steps=list.filter(s=>s.tour!==false&&first(s.sel));if(!steps.length)return;
  ids.forEach(id=>set(KEY(id),"1"));
  const el=document.createElement("div");el.className="hlp-tour";el.setAttribute("role","dialog");el.setAttribute("aria-label","Tour");
  el.innerHTML=`<div class="hlp-hole"></div><div class="hlp-card" aria-live="polite"></div>`;document.body.appendChild(el);
  const hole=el.querySelector(".hlp-hole"),card=el.querySelector(".hlp-card");
  const seq=(intro?[{intro:true}]:[]).concat(steps);let i=0;
  function draw(){const s=seq[i],last=i===seq.length-1,n=intro?i:i+1,tot=intro?seq.length-1:seq.length;
   if(s.intro){hole.className="hlp-hole none";hole.style.cssText=`top:50%;left:50%`;
    card.innerHTML=`<div class="tt">Kurze Tour</div>So funktionieren die Knöpfe auf dieser Seite – ${tot} kurze Schritte.<span class="en">A short tour of the buttons on this page.</span>
     <div style="margin-top:8px;font-size:14px">💡 Später: <b>Knopf gedrückt halten</b> – dann erklärt er sich selbst.<span class="en">Later: press and hold any button to see what it does.</span></div>
     <div class="row"><span class="n"></span><button type="button" data-x>Überspringen</button><button type="button" class="go" data-n>Los ›</button></div>`;
    card.style.top=Math.max(12,innerHeight/2-card.offsetHeight/2)+"px";card.style.left=Math.max(12,innerWidth/2-card.offsetWidth/2)+"px";return}
   const t=first(s.sel);if(!t){i++;if(i<seq.length)draw();else end();return}
   t.scrollIntoView({block:"center",inline:"nearest"});
   requestAnimationFrame(()=>{const r=t.getBoundingClientRect(),p=6;hole.className="hlp-hole";
    hole.style.cssText=`top:${r.top-p}px;left:${r.left-p}px;width:${r.width+2*p}px;height:${r.height+2*p}px`;
    card.innerHTML=`<div class="tt">${s.t}</div>${s.de}${s.en?`<span class="en">${s.en}</span>`:""}
     <div class="row"><span class="n">${n} / ${tot}</span>${last?"":`<button type="button" data-x>Überspringen</button>`}<button type="button" class="go" data-n>${last?"Fertig ✓":"Weiter ›"}</button></div>`;
    if(last)card.insertAdjacentHTML("beforeend",`<div class="en" style="margin-top:8px">Noch einmal ansehen: ⋯ oben → Tour.</div>`);
    const h=card.offsetHeight,w=card.offsetWidth;let top=r.bottom+p+14;if(top+h>innerHeight-10)top=r.top-p-14-h;if(top<10)top=Math.max(10,innerHeight-h-10);
    card.style.top=top+"px";card.style.left=Math.min(Math.max(12,r.left+r.width/2-w/2),innerWidth-w-12)+"px"})}
  el.addEventListener("click",e=>{const b=e.target.closest("button");e.stopPropagation();if(!b)return;
   if(b.hasAttribute("data-x")){end();return}if(b.hasAttribute("data-n")){i++;if(i>=seq.length)end();else draw()}});
  const re=()=>draw(),key=e=>{if(e.key==="Escape"){end();e.stopPropagation()}else if(e.key==="ArrowRight"||e.key==="Enter"){i++;if(i>=seq.length)end();else draw();e.preventDefault()}};
  addEventListener("resize",re);document.addEventListener("keydown",key,true);
  tour={el,re,key};draw()}
 /* first visit: the page tour (with the cards' tours that are on screen too);
    a tour that waits for something (need) starts when it appears */
 function check(auto){if(tour||busy())return;
  const due=o.tours.filter(t=>!get(KEY(t.id))&&(!t.need||first(t.need)));if(!due.length)return;
  start(due.flatMap(t=>t.steps),due.map(t=>t.id),due.some(t=>!t.need))}
 setTimeout(()=>{if(document.visibilityState==="visible")check()},900);
 document.addEventListener("click",()=>setTimeout(check,500),true);
 /* ⋯ → Tour: everything on screen now */
 addEventListener("message",e=>{if(e.origin!==location.origin||!e.data||!e.data.dlTour)return;end();
  const now=o.tours.filter(t=>!t.need||first(t.need));start(now.flatMap(t=>t.steps),now.map(t=>t.id),true)});
 return {start:()=>{const now=o.tours.filter(t=>!t.need||first(t.need));start(now.flatMap(t=>t.steps),now.map(t=>t.id),true)}}}
window.Hilfe={setup};
})();
