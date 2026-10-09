/* Modelltests for A1 and B1: a whole exam, every Teil with its own clock,
   marked like the real one, with the right answer and the reason for every
   mistake.

   Time: each Teil has part.time minutes (the real section time split up). Its
   clock runs only while that Teil is open; when it reaches 0 the Teil is handed
   in and the next one opens. ⏸ stops the clock and covers the questions;
   leaving the test (✕, another app, the phone closing the page) pauses it too,
   so no time is lost while away.

   A page calls  Pruefung({...})  once and gets an entry card (and a button).

   Options
     mount   element the overlay goes in (the section's main)
     level   "A1" | "B1" – also the storage key
     tests   [{id, title, sub, sections:[{id, de, en, time (minutes),
               parts:[part …]}]}]
     scale   {factor, max, pass, rawLabel, note}
             points shown = raw × factor; passed from scale.pass shown points
     rate()  speaking rate of the page (Tempo)

   A part is {t, intro, type, per, text?, audio?, plays?, items:[…]}:
     mc       item {q, o:[…], a: index}            a), b), c) …
     rf       item {q, a: true|false}               Richtig / Falsch
     match    part.list:[…] (a, b, …), part.x (allow "x");
              item {q, text?, a: index | -1 for x}
     gapmc    part.text with (n); item {n, o:[…], a: index}
     gapbank  part.text with (n), part.list:[…]; item {n, a: index}
     form     part.text; item {q, a:[accepted …]} or {q, o:[…], a: index}
     write    {task, points:[…], words, model, crit:"a1"|"b1"} – self-marked
   item.audio / part.audio: a recording ("Name: line" lines get voices);
   part.plays: how often it may be played. item.why: the reason. */
(function(){
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const fill=s=>window.Me&&Me.fill?Me.plain(Me.fill(String(s))):String(s);
const T=s=>esc(fill(s));
const L="abcdefghijklmnopqrstuvwxyz";
const num=x=>String(Math.round(x*10)/10).replace(".",",");
const ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M8.5 13l2.5 2.5 4.5-5"/></svg>';
const store={get(k){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}},
 set(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

/* Writing: the criteria the result page asks you to tick. */
const CRIT={
 a1:{max:10,rows:p=>p.points.map((x,i)=>({id:"p"+i,label:x,opts:[[3,"vollständig und verständlich"],[1.5,"teilweise"],[0,"fehlt"]]})).concat([{id:"ag",label:"Anrede und Gruß",opts:[[1,"ja"],[0,"nein"]]}])},
 b1:{max:45,rows:p=>[{id:"lp",label:"Leitpunkte behandelt",check:p.points},
  {id:"k2",label:"Kommunikative Gestaltung (Anrede, Einleitung, Schluss, Gruß, Sätze verbunden, passendes Register)",opts:[[15,"A – ganz angemessen"],[10,"B – weitgehend"],[5,"C – kaum"],[0,"D – nicht"]]},
  {id:"k3",label:"Formale Richtigkeit (Grammatik, Wortschatz, Rechtschreibung)",opts:[[15,"A – kaum Fehler"],[10,"B – einige Fehler, gut verständlich"],[5,"C – viele Fehler"],[0,"D – kaum verständlich"]]}]}};
function writeScore(p,sa){const c=CRIT[p.crit||"a1"];if(!sa)return null;let s=0,all=true;
 /* telc: all four Leitpunkte = A (15), three = B (10), two = C (5), fewer = D (0) */
 c.rows(p).forEach(r=>{if(r.check){const n=r.check.filter((_,i)=>sa[r.id+i]).length;s+=[0,0,5,10,15][Math.min(n,4)]}
  else if(sa[r.id]==null)all=false;else s+=+sa[r.id]});
 return all?Math.min(s,c.max):null}

function Pruefung(o){
 const K="dl:test:"+o.level.toLowerCase(),RUN=K+":run",RES=K+":res";
 const ov=document.createElement("div");ov.className="tz";ov.hidden=true;ov.setAttribute("role","region");ov.setAttribute("aria-label","Modelltest");
 ov.innerHTML=`<div class="tz-top"><b class="tz-title"></b><span class="tz-time" hidden></span><span class="sp"></span><button type="button" class="tz-pause" aria-label="Pause" title="Pause" hidden>❚❚</button><button type="button" class="tz-x" aria-label="Schließen">✕</button></div><div class="tz-body"></div>`;
 o.mount.appendChild(ov);
 const body=ov.querySelector(".tz-body"),title=ov.querySelector(".tz-title"),clock=ov.querySelector(".tz-time"),pauseB=ov.querySelector(".tz-pause");
 const button=document.createElement("button");button.type="button";button.className="tz-open";
 button.title="Modelltest mit Punkten";button.setAttribute("aria-label","Modelltest mit Punkten");button.innerHTML=ICON+"<span>Test</span>";
 /* The entry: its own card on the page, apart from the practice tools. */
 const entry=document.createElement("button");entry.type="button";entry.className="tz-entry";
 entry.innerHTML=`${ICON}<span><b>Modelltests</b><small>3 Prüfungen mit Zeit und Punkten</small></span><i aria-hidden="true">›</i>`;
 const label=()=>{const r=store.get(RUN),sm=entry.querySelector("small");entry.classList.toggle("paused",!!r);
  sm.textContent=r&&test(r.tid)?`Pausiert: ${test(r.tid).title} – weitermachen`:"3 Prüfungen mit Zeit und Punkten"};
 let run=null,timer=0,view="home";
 const test=id=>o.tests.find(t=>t.id===id);
 const save=()=>store.set(RUN,run);
 const toShell=on=>{try{if(parent!==window)parent.postMessage({dlCards:on},location.origin)}catch(e){}};
 const ans=(si,p,i)=>run.ans[si+"."+p+"."+i];

 /* ---- speech: a recording plays a set number of times ---- */
 const synth=window.speechSynthesis;let speaking=null;
 function voices(){if(!synth)return[];const v=synth.getVoices().filter(x=>x.lang&&x.lang.toLowerCase().startsWith("de"));
  const pref=["premium","enhanced","natural","google","anna","helena","katja","markus","yannick","petra","martin"];
  return v.sort((a,b)=>{const f=n=>{const i=pref.findIndex(p=>n.name.toLowerCase().includes(p));return i<0?99:i};return f(a)-f(b)})}
 if(synth){synth.getVoices();synth.addEventListener&&synth.addEventListener("voiceschanged",()=>synth.getVoices())}
 function stopAudio(){if(synth)synth.cancel();if(speaking){speaking.classList.remove("on");speaking=null}}
 function play(btn,text){if(!synth){btn.textContent="Kein Ton auf diesem Gerät";return}
  stopAudio();const vs=voices(),spk={};let k=0;speaking=btn;btn.classList.add("on");
  const lines=String(text).split("\n").map(s=>s.trim()).filter(Boolean);
  lines.forEach((t,i)=>{let v=vs[0]||null;const m=t.match(/^([A-Za-zÄÖÜäöüß. ]{2,24}):\s*(.+)$/);
   if(m){if(!(m[1] in spk))spk[m[1]]=k++;v=vs[spk[m[1]]%Math.max(vs.length,1)]||v;t=m[2]}
   const u=new SpeechSynthesisUtterance(fill(t));u.lang="de-DE";u.rate=o.rate?o.rate():1;if(v)u.voice=v;
   if(i===lines.length-1)u.onend=()=>{if(speaking===btn){btn.classList.remove("on");speaking=null}};
   u.onerror=()=>{if(speaking===btn){btn.classList.remove("on");speaking=null}};
   synth.speak(u)})}
 function playBtn(key,plays){const used=run.plays[key]||0,left=Math.max(0,plays-used);
  return `<button type="button" class="tz-play" data-play="${key}"${left?"":" disabled"}>▶ Abspielen <small>${left?`noch ${left}×`:"schon gehört"}</small></button>`}

 /* ---- screens ---- */
 const pk=(si,j)=>si+"."+j;
 function partMs(si,j){const sec=test(run.tid).sections[si],p=sec.parts[j];return (p.time||sec.time/sec.parts.length)*60000}
 const fmt=ms=>{ms=Math.max(0,ms);const m=Math.floor(ms/60000),x=Math.floor(ms/1000)%60;return m+":"+String(x).padStart(2,"0")};
 const tabName=p=>p.tab||p.t.split(" – ")[0];
 function open(){toShell(true);document.body.classList.add("testing");ov.hidden=false;run=store.get(RUN);
  if(run&&(!test(run.tid)||run.deadline!==undefined))run=null;   /* gone, or a run from the one-clock version */
  if(run&&run.si!=null){run.t0=null;run.paused=true;save();showPause();return}home()}
 function close(){if(view==="section")pause(true);stopAudio();clearInterval(timer);ov.hidden=true;document.body.classList.remove("testing");toShell(false);label()}
 function setTop(t,showClock){title.textContent=t;clock.hidden=!showClock;pauseB.hidden=!showClock}
 function home(){view="home";clearInterval(timer);setTop("Modelltests "+o.level,false);const res=store.get(RES)||{};
  const rt=run&&test(run.tid),cur=rt&&run.si!=null?rt.sections[run.si]:null;
  body.innerHTML=`<div class="tz-pad"><p class="tz-lead">Eine ganze Prüfung wie im echten Test. <b>Jeder Teil hat seine eigene Zeit</b> – die Uhr läuft nur für den Teil, den du gerade bearbeitest; ist sie um, wird der Teil abgegeben. Mit <b>❚❚</b> pausierst du jederzeit. Danach siehst du deine Punkte und bei jedem Fehler die richtige Antwort.</p>
   ${rt?`<div class="tz-card warn"><b>Pausiert: ${esc(rt.title)}</b><div>${cur?esc(cur.de+" – "+cur.parts[run.cur].t):rt.sections[run.next]?esc(rt.sections[run.next].de)+" ist als Nächstes dran.":""}</div><div class="tz-row"><button type="button" class="tz-btn" data-go="resume">Weitermachen</button><button type="button" class="tz-btn ghost" data-go="drop">Test verwerfen</button></div></div>`:""}
   ${o.tests.map(t=>{const r=res[t.id];
    return `<div class="tz-card"><div class="tz-h"><b>${esc(t.title)}</b></div><div class="tz-sub">${esc(t.sub||"")}</div>
     <div class="tz-secs">${t.sections.map(x=>`<span>${esc(x.de)}</span>`).join("")}</div>
     ${r?`<div class="tz-last ${r.pass?"ok":r.pending?"":"no"}">Zuletzt: <b>${num(r.pts)} / ${num(o.scale.max)} Punkte</b> · ${r.pass?"bestanden":r.pending?"noch offen":"nicht bestanden"} · ${esc(r.date)}${r.pending?" · Schreiben noch nicht bewertet":""}</div>`:""}
     <div class="tz-row"><button type="button" class="tz-btn" data-start="${t.id}"${run?" disabled":""}>Test starten</button>${r?`<button type="button" class="tz-btn ghost" data-review="${t.id}">Auswertung ansehen</button>`:""}</div></div>`}).join("")}
   <p class="tz-note">${esc(o.scale.note)}</p></div>`;body.scrollTop=0}
 function start(id){run={tid:id,next:0,si:null,cur:0,left:{},done:{},t0:null,paused:false,ans:{},plays:{},sa:{},begun:new Date().toISOString()};save();label();sectionIntro()}
 function sectionIntro(){view="intro";clearInterval(timer);const t=test(run.tid),sec=t.sections[run.next];
  if(!sec){finish();return}
  setTop(t.title,false);
  const pts=sec.parts.reduce((a,p)=>a+(p.type==="write"?(CRIT[p.crit||"a1"].max):p.items.length*p.per),0);
  body.innerHTML=`<div class="tz-pad"><div class="tz-card big"><div class="tz-step">Prüfungsteil ${run.next+1} von ${t.sections.length}</div><h2>${esc(sec.de)}</h2><div class="tz-sub">${esc(sec.en||"")} · ${num(pts*o.scale.factor)} Punkte</div>
   <ul class="tz-list">${sec.parts.map((p,j)=>`<li><b>${esc(tabName(p))}</b> · ${Math.round(partMs(run.next,j)/60000)} Minuten</li>`).join("")}</ul>
   <p class="tz-sub">Jeder Teil hat seine eigene Uhr. Sie läuft nur, solange der Teil offen ist; ist sie um, wird der Teil abgegeben.${sec.parts.some(p=>p.plays)?" Die Hörtexte kannst du nur so oft abspielen wie in der Prüfung.":""}</p>
   <button type="button" class="tz-btn wide" data-go="begin">Starten</button></div></div>`;body.scrollTop=0}
 function begin(){const si=run.next,sec=test(run.tid).sections[si];run.si=si;
  sec.parts.forEach((_,j)=>{run.left[pk(si,j)]=partMs(si,j);delete run.done[pk(si,j)]});
  run.cur=0;run.paused=false;run.t0=Date.now();save();runClock();drawPart()}
 function runClock(){view="section";setTop(test(run.tid).sections[run.si].de,true);clearInterval(timer);timer=setInterval(tick,1000);tick()}
 /* The open Teil uses up its own time; the time is saved every second. */
 function tick(){if(!run||run.si==null||run.t0==null)return;const now=Date.now(),k=pk(run.si,run.cur);
  run.left[k]-=now-run.t0;run.t0=now;save();
  clock.textContent=fmt(run.left[k]);clock.classList.toggle("low",run.left[k]<60000);
  const tb=body.querySelector(`.tz-tabs [data-part="${run.cur}"] small`);if(tb)tb.textContent=fmt(run.left[k]);
  if(run.left[k]<=0)partUp()}
 function partUp(){const p=test(run.tid).sections[run.si].parts[run.cur];stopAudio();
  run.left[pk(run.si,run.cur)]=0;run.done[pk(run.si,run.cur)]=true;nextPart(`Die Zeit für ${tabName(p)} ist um. Deine Antworten wurden abgegeben.`)}
 function nextPart(msg){const si=run.si,n=test(run.tid).sections[si].parts.length;let j=-1;
  for(let d=1;d<=n;d++){const c=(run.cur+d)%n;if(!run.done[pk(si,c)]){j=c;break}}
  if(j<0){finishSection(msg);return}
  run.cur=j;run.t0=Date.now();save();drawPart();if(msg)note(msg)}
 function note(msg){body.insertAdjacentHTML("afterbegin",`<div class="tz-pad tz-msg"><div class="tz-card warn"><b>${esc(msg)}</b></div></div>`)}
 function finishSection(msg){stopAudio();clearInterval(timer);run.si=null;run.t0=null;run.next++;save();sectionIntro();if(msg&&view==="intro")note(msg)}
 function switchPart(j){if(j===run.cur||run.done[pk(run.si,j)])return;tick();if(run.si==null)return;stopAudio();run.cur=j;run.t0=Date.now();save();drawPart()}
 function pause(silent){if(!run||run.si==null||run.t0==null)return;tick();if(run.si==null)return;
  run.t0=null;run.paused=true;save();stopAudio();clearInterval(timer);if(!silent)showPause()}
 function showPause(){view="pause";clearInterval(timer);const t=test(run.tid),sec=t.sections[run.si];setTop(t.title+" – Pause",false);
  body.innerHTML=`<div class="tz-pad"><div class="tz-card big"><div class="tz-step">❚❚ Pause</div><h2>${esc(sec.de)}</h2>
   <ul class="tz-list">${sec.parts.map((x,j)=>`<li><b>${esc(tabName(x))}</b>: ${run.done[pk(run.si,j)]?"abgegeben":"noch "+fmt(run.left[pk(run.si,j)])+(j===run.cur?" – hier geht es weiter":"")}</li>`).join("")}</ul>
   <p class="tz-sub">Die Uhr steht. Während der Pause sind die Aufgaben verdeckt.</p>
   <button type="button" class="tz-btn wide" data-go="unpause">Weiter</button></div></div>`;body.scrollTop=0}
 function unpause(){run.paused=false;run.t0=Date.now();save();runClock();drawPart()}
 function unansweredPart(si,j){const p=test(run.tid).sections[si].parts[j];if(p.type==="write")return (ans(si,j,"w")||"").trim()?0:1;
  return p.items.filter((_,i)=>{const v=ans(si,j,i);return v==null||v===""}).length}

 /* ---- one part of the running section ---- */
 function drawPart(){const s=test(run.tid).sections[run.si],pi=run.cur,p=s.parts[pi],si=run.si;
  const tabs=s.parts.length>1?`<div class="tz-tabs">${s.parts.map((x,j)=>{const dn=run.done[pk(si,j)];return `<button type="button" data-part="${j}" aria-pressed="${j===pi}"${dn?" disabled":""}>${esc(tabName(x))} <small>${dn?"✓":fmt(run.left[pk(si,j)])}</small></button>`}).join("")}</div>`:"";
  let h=`<div class="tz-pad">${tabs}<h3 class="tz-pt">${esc(p.t)}</h3><p class="tz-intro">${T(p.intro)}</p>`;
  if(p.audio)h+=`<div class="tz-audio">${playBtn(si+"."+pi,p.plays||1)}</div>`;
  if(p.list&&p.type==="match")h+=`<div class="tz-text list">${p.list.map((x,i)=>`<div><b>${L[i]})</b> ${T(x)}</div>`).join("")}</div>`;
  if(p.text&&p.type!=="write")h+=`<div class="tz-text">${T(p.text).replace(/\n/g,"<br>").replace(/\((\d{1,2})\)/g,'<b class="gap">($1)</b>')}</div>`;
  if(p.type==="gapbank")h+=`<div class="tz-bank">${p.list.map((x,i)=>`<span><b>${L[i]})</b> ${T(x)}</span>`).join("")}</div>`;
  if(p.type==="write"){const v=ans(si,pi,"w")||"";
   h+=`<div class="tz-q"><div class="tz-qt">${T(p.task).replace(/\n/g,"<br>")}</div><ul class="tz-list">${p.points.map(x=>`<li>${T(x)}</li>`).join("")}</ul>
    <textarea class="tz-write" data-w="${si}.${pi}" rows="10" placeholder="Schreiben Sie hier …" lang="de" spellcheck="false" autocapitalize="sentences">${esc(v)}</textarea><div class="tz-wc"><span>${words(v)}</span> Wörter${p.words?` · verlangt: etwa ${p.words}`:""}</div></div>`}
  else p.items.forEach((it,i)=>{const k=si+"."+pi+"."+i,v=run.ans[k];
   h+=`<div class="tz-q" id="q${k.replace(/\./g,"-")}"><div class="tz-qn">${p.type==="gapmc"||p.type==="gapbank"?`(${it.n})`:i+1}</div><div class="tz-qb">`;
   if(it.audio)h+=playBtn(k,p.plays||1);
   if(it.text)h+=`<div class="tz-text small">${T(it.text).replace(/\n/g,"<br>")}</div>`;
   if(it.q)h+=`<div class="tz-qt">${T(it.q).replace(/\n/g,"<br>")}</div>`;
   h+=control(p,it,k,v)+`</div></div>`});
  h+=`<div class="tz-row end"><button type="button" class="tz-btn" data-go="handin">${esc(tabName(p))} abgeben ›</button></div></div>`;
  body.innerHTML=h;body.scrollTop=0}
 function control(p,it,k,v){
  const chips=(labels)=>`<div class="tz-opts">${labels.map((l,i)=>`<button type="button" class="tz-opt" data-a="${k}" data-v="${i}" aria-pressed="${v===i}">${l}</button>`).join("")}</div>`;
  if(p.type==="rf")return chips(["Richtig","Falsch"]);
  if(p.type==="mc"||p.type==="gapmc"||(p.type==="form"&&it.o))return chips(it.o.map((x,i)=>p.type==="form"?T(x):`<b>${L[i]})</b> ${T(x)}`));
  if(p.type==="match"||p.type==="gapbank"){const n=p.list.length;
   return `<select class="tz-sel" data-a="${k}"><option value="">– wählen –</option>${p.list.map((x,i)=>`<option value="${i}"${v===i?" selected":""}>${L[i]}) ${esc(fill(x)).slice(0,70)}</option>`).join("")}${p.x?`<option value="-1"${v===-1?" selected":""}>x – keine passt</option>`:""}</select>`}
  if(p.type==="form")return `<input class="tz-in" data-a="${k}" type="text" value="${esc(v||"")}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
  return ""}
 const words=s=>(String(s).trim().match(/\S+/g)||[]).length;

 /* ---- marking ---- */
 const norm=s=>String(s||"").toLowerCase().replace(/[.,!?;:()"„“]/g," ").replace(/\s+/g," ").trim();
 function correct(p,it,v){
  if(v==null||v==="")return false;
  if(p.type==="rf")return (v===0)===!!it.a;
  if(p.type==="form"&&!it.o)return it.a.some(x=>norm(x)===norm(v));
  return v===it.a}
 function show(p,it){if(p.type==="rf")return it.a?"Richtig":"Falsch";
  if(p.type==="form")return it.o?it.o[it.a]:it.a[0];
  if(p.type==="match"||p.type==="gapbank")return it.a===-1?"x – keine passt":L[it.a]+") "+p.list[it.a];
  return L[it.a]+") "+it.o[it.a]}
 function given(p,it,v){if(v==null||v==="")return "keine Antwort";
  if(p.type==="rf")return v===0?"Richtig":"Falsch";if(p.type==="form"&&!it.o)return v;
  if(p.type==="form")return it.o[v];
  if(p.type==="match"||p.type==="gapbank")return v===-1?"x – keine passt":L[v]+") "+p.list[v];
  return L[v]+") "+it.o[v]}
 function score(r){const t=test(r.tid);let raw=0,max=0,pending=false;const per=[];
  t.sections.forEach((s,si)=>{let a=0,m=0;s.parts.forEach((p,j)=>{
   if(p.type==="write"){const c=CRIT[p.crit||"a1"];m+=c.max;const w=writeScore(p,(r.sa||{})[si+"."+j]);if(w==null)pending=true;else a+=w;return}
   p.items.forEach((it,i)=>{m+=p.per;if(correct(p,it,r.ans[si+"."+j+"."+i]))a+=p.per})});
   per.push({de:s.de,a,m});raw+=a;max+=m});
  const pts=raw*o.scale.factor;return {raw,max,pts,per,pending,pass:pts>=o.scale.pass}}
 function finish(){clearInterval(timer);setTimeout(label);const r={tid:run.tid,ans:run.ans,sa:{},date:new Date().toLocaleDateString("de-DE")};
  store.set(K+":last:"+run.tid,r);run=null;store.set(RUN,null);review(r.tid,true)}
 function keep(r){const s=score(r);const all=store.get(RES)||{};all[r.tid]={pts:s.pts,pass:s.pass,date:r.date,pending:s.pending};store.set(RES,all);store.set(K+":last:"+r.tid,r)}

 /* ---- the result: points, then every question with the right answer ---- */
 function review(tid,fresh){view="review";const r=store.get(K+":last:"+tid);if(!r){home();return}
  const t=test(tid);setTop(t.title+" – Auswertung",false);keep(r);draw();
  function draw(){const s=score(r);keep(r);
   let h=`<div class="tz-pad"><div class="tz-card big result ${s.pass?"ok":s.pending?"":"no"}"><div class="tz-step">${esc(t.title)} · ${esc(r.date)}</div>
    <div class="tz-score"><b>${num(s.pts)}</b> / ${num(o.scale.max)} Punkte</div>
    ${o.scale.factor!==1?`<div class="tz-sub">${num(s.raw)} von ${num(s.max)} ${esc(o.scale.rawLabel)}, umgerechnet auf ${num(o.scale.max)} Punkte</div>`:""}
    <div class="tz-verdict">${s.pass?"✓ Bestanden":s.pending?"Noch offen":"✗ Nicht bestanden"} <small>(ab ${num(o.scale.pass)} Punkten)</small></div>
    ${s.pending?`<div class="tz-warn">Bewerte unten noch dein Schreiben – erst dann ist die Punktzahl vollständig.</div>`:""}
    <table class="tz-tab">${s.per.map(x=>`<tr><td>${esc(x.de)}</td><td>${num(x.a*o.scale.factor)} / ${num(x.m*o.scale.factor)}</td><td><span class="bar"><i style="width:${x.m?Math.round(x.a/x.m*100):0}%"></i></span></td></tr>`).join("")}</table>
    <p class="tz-note">${esc(o.scale.note)}</p>
    <div class="tz-row"><button type="button" class="tz-btn ghost" data-go="home">Alle Tests</button><button type="button" class="tz-btn ghost" data-go="wrong" aria-pressed="false">Nur Fehler zeigen</button></div></div>`;
   t.sections.forEach((sec,si)=>{h+=`<h2 class="tz-sec">${esc(sec.de)}</h2>`;
    sec.parts.forEach((p,j)=>{h+=`<div class="tz-card"><h3 class="tz-pt">${esc(p.t)}</h3>`;
     if(p.type==="write"){const k=si+"."+j,sa=(r.sa||{})[k]||{},c=CRIT[p.crit||"a1"],w=writeScore(p,(r.sa||{})[k]),txt=r.ans[k+".w"]||"";
      h+=`<div class="tz-qt">${T(p.task).replace(/\n/g,"<br>")}</div><div class="tz-lab">Dein Text (${words(txt)} Wörter)</div><div class="tz-text">${txt?esc(txt).replace(/\n/g,"<br>"):"<i>nichts geschrieben</i>"}</div>
       <div class="tz-lab">Musterlösung</div><div class="tz-text model">${T(p.model).replace(/\n/g,"<br>")}</div>
       <div class="tz-lab">Selbst bewerten ${w==null?"":`– <b>${num(w)} / ${c.max} Punkte</b>`}</div>`;
      c.rows(p).forEach(row=>{
       if(row.check)h+=`<div class="tz-crit"><div>${esc(row.label)}:</div>${row.check.map((x,i)=>`<label class="tz-chk"><input type="checkbox" data-sa="${k}" data-id="${row.id}${i}"${sa[row.id+i]?" checked":""}> ${T(x)}</label>`).join("")}</div>`;
       else h+=`<div class="tz-crit"><div>${T(row.label)}:</div><div class="tz-opts">${row.opts.map(([v,l])=>`<button type="button" class="tz-opt" data-sa="${k}" data-id="${row.id}" data-v="${v}" aria-pressed="${sa[row.id]!=null&&+sa[row.id]===v}">${esc(l)} (${num(v)})</button>`).join("")}</div></div>`});
      h+=`</div>`;return}
     if(p.text)h+=`<details class="tz-det"><summary>${p.type==="gapmc"||p.type==="gapbank"?"Text mit Lösungen":p.audio?"Hörtext":"Text"}</summary><div class="tz-text">${solved(p).replace(/\n/g,"<br>")}</div></details>`;
     if(p.audio)h+=`<details class="tz-det"><summary>Hörtext</summary><div class="tz-text">${T(p.audio).replace(/\n/g,"<br>")}</div></details>`;
     if(p.list&&p.type==="match")h+=`<details class="tz-det"><summary>${o.level==="B1"&&p.x?"Anzeigen":"Überschriften"}</summary><div class="tz-text list">${p.list.map((x,i)=>`<div><b>${L[i]})</b> ${T(x)}</div>`).join("")}</div></details>`;
     p.items.forEach((it,i)=>{const v=r.ans[si+"."+j+"."+i],ok=correct(p,it,v);
      h+=`<div class="tz-rv ${ok?"ok":"no"}"><div class="tz-qn">${ok?"✓":"✗"}</div><div class="tz-qb"><div class="tz-qt">${p.type==="gapmc"||p.type==="gapbank"?`Lücke (${it.n})`:T(it.q||"").replace(/\n/g,"<br>")}</div>
       ${ok?`<div class="tz-a ok">${T(given(p,it,v))}</div>`:`${v==null||v===""?`<div class="tz-a none">Keine Antwort</div>`:`<div class="tz-a no">Deine Antwort: ${T(given(p,it,v))}</div>`}<div class="tz-a ok">Richtig: ${T(show(p,it))}</div>`}
       ${it.why?`<div class="tz-why">${T(it.why)}</div>`:""}
       ${it.audio?`<details class="tz-det"><summary>Hörtext</summary><div class="tz-text small">${T(it.audio).replace(/\n/g,"<br>")}</div></details>`:it.text?`<details class="tz-det"><summary>Text</summary><div class="tz-text small">${T(it.text).replace(/\n/g,"<br>")}</div></details>`:""}</div></div>`});
     h+=`</div>`})});
   body.innerHTML=h+`<div class="tz-pad"><div class="tz-row"><button type="button" class="tz-btn" data-go="home">Zu den Tests</button></div></div>`;
   if(fresh){body.scrollTop=0;fresh=false}}
  /* self-marking of the writing redraws the totals */
  review.onSa=(k,id,v,chk)=>{r.sa=r.sa||{};r.sa[k]=r.sa[k]||{};if(chk!=null)r.sa[k][id]=chk;else r.sa[k][id]=v;const y=body.scrollTop;draw();body.scrollTop=y};
 }
 function solved(p){let tx=T(p.text);if(p.type==="gapmc"||p.type==="gapbank")p.items.forEach(it=>{const w=p.type==="gapmc"?it.o[it.a]:p.list[it.a];tx=tx.replace("("+it.n+")",`<b class="gap ok">(${it.n}) ${esc(w)}</b>`)});return tx}

 /* ---- input ---- */
 ov.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  if(b.classList.contains("tz-x")){close();return}   /* a running Teil pauses */
  if(b.classList.contains("tz-pause")){pause();return}
  if(b.dataset.start){start(b.dataset.start);return}
  if(b.dataset.review){review(b.dataset.review,true);return}
  if(b.dataset.part!=null){switchPart(+b.dataset.part);return}
  if(b.dataset.play){const k=b.dataset.play,p=b.closest(".tz-q,.tz-audio");const s=test(run.tid).sections[run.si],[,pj]=k.split(".").map(Number),part=s.parts[pj];
   const plays=part.plays||1;if((run.plays[k]||0)>=plays)return;run.plays[k]=(run.plays[k]||0)+1;save();
   const txt=k.split(".").length===3?part.items[+k.split(".")[2]].audio:part.audio;
   const left=plays-run.plays[k];b.querySelector("small").textContent=left?`noch ${left}×`:"letztes Mal";play(b,txt);if(!left)b.disabled=true;return}
  if(b.dataset.sa){review.onSa(b.dataset.sa,b.dataset.id,+b.dataset.v);return}
  if(b.dataset.a){run.ans[b.dataset.a]=+b.dataset.v;save();b.parentElement.querySelectorAll(".tz-opt").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));return}
  const g=b.dataset.go;
  if(g==="resume"){run.si!=null?showPause():sectionIntro();return}
  if(g==="unpause"){unpause();return}
  if(g==="drop"){if(confirm("Pausierten Test verwerfen?")){run=null;store.set(RUN,null);label();home()}return}
  if(g==="begin"){begin();return}
  if(g==="handin"){tick();if(run.si==null)return;const n=unansweredPart(run.si,run.cur),p=test(run.tid).sections[run.si].parts[run.cur];
   if(!confirm(n?`Noch ${n} ${n===1?"Aufgabe":"Aufgaben"} ohne Antwort. ${tabName(p)} trotzdem abgeben?`:`${tabName(p)} abgeben? Danach kannst du ihn nicht mehr ändern.`))return;
   stopAudio();run.done[pk(run.si,run.cur)]=true;nextPart();return}
  if(g==="home"){home();return}
  if(g==="wrong"){const on=b.getAttribute("aria-pressed")!=="true";b.setAttribute("aria-pressed",String(on));body.classList.toggle("only-wrong",on);return}});
 ov.addEventListener("change",e=>{const el=e.target;
  if(el.matches(".tz-sel")){run.ans[el.dataset.a]=el.value===""?null:+el.value;save();return}
  if(el.matches("input[type=checkbox][data-sa]")){review.onSa(el.dataset.sa,el.dataset.id,null,el.checked)}});
 ov.addEventListener("input",e=>{const el=e.target;
  if(el.matches(".tz-in")){run.ans[el.dataset.a]=el.value;save();return}
  if(el.matches(".tz-write")){run.ans[el.dataset.w+".w"]=el.value;save();const wc=el.nextElementSibling;if(wc)wc.firstElementChild.textContent=words(el.value)}});
  /* Leaving for another app (or the phone closing the page) pauses the test. */
 document.addEventListener("visibilitychange",()=>{if(document.hidden&&view==="section")pause()});
 addEventListener("pagehide",()=>{if(view==="section")pause(true)});
 button.onclick=open;entry.onclick=open;label();
 return {button,entry,open,close}}
window.Pruefung=Pruefung;
})();
