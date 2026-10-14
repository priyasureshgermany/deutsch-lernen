/* Satzbau-Spiel: build German sentences from scrambled blocks.
   Per level 10 sets of 10 sentences (satzbau-data.js); one set is one round.
   "Neues Spiel" always takes a set not played yet (after all ten: the one
   with the lowest score); a game left in the middle is saved after every
   move and offered again as "Weiterspielen". Tap a block to
   move it into the sentence (tap it again to send it back) or drag it to any
   place. Points per sentence: right at once 1 · with a hint or on the second
   try ½ · otherwise 0 – the result shows the right order and the rule.
   Best score per set and level and the running game stay on this device.
   Timer: a stopwatch per set that runs only while a sentence is being solved
   (not while the result is read, not while the game is closed). Leaderboard
   (Bestenliste) per level: points first, then time – kept on this device,
   with player names so several people can compete on one phone.
   Satzbau.card() is the start card for a page; Satzbau.open(level) starts.
   Topic tests (satzbau-themen.js, SBT): Satzbau.topic(id, title) – 5 sentences
   of a grammar topic not seen recently; saved and resumed per topic, best
   score per topic; Satzbau.topicButton(id, title) is the button for the page. */
(function(){
const LV={A1:["A1","einfache Sätze, Fragen, Modalverben"],A2:["A2","Perfekt, weil / dass / wenn, Dativ und Akkusativ"],B1:["B1","Relativsätze, zu + Infinitiv, Passiv, Konjunktiv II"]};
const N=10,st=k=>{try{return JSON.parse(localStorage.getItem("dl:sb:"+k))}catch(e){return null}},sv=(k,v)=>{try{localStorage.setItem("dl:sb:"+k,JSON.stringify(v))}catch(e){}};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const num=x=>String(x).replace(".",",");
const key=s=>s.replace(/^,\s*/,"").toLowerCase();
const shell=on=>{try{if(parent!==window)parent.postMessage({dlCards:on},location.origin)}catch(e){}};

/* one sentence: its blocks, end mark, every correct order */
function parse(row){const [s0,en,rule,alt]=row,end=(s0.match(/[.?!]$/)||["."])[0];
 const raw=s0.replace(/[.?!]$/,"").split("|"),blocks=raw.map(b=>b.replace(/^\^/,""));
 /* "^": this block may also stand first – then verb, subject, the rest */
 const front=raw.map((b,i)=>b[0]==="^"&&i>1?[blocks[i],blocks[1],blocks[0]].concat(blocks.filter((_,j)=>j>1&&j!==i)):null).filter(Boolean);
 const sols=[blocks].concat(front,(alt||[]).map(a=>a.replace(/[.?!]$/,"").split("|")));
 return {blocks,end,en,rule,sols:sols.map(b=>b.map(key)),show:sols.map(b=>sentence(b,end))}}
function sentence(b,end){const t=b.map((x,i)=>i&&!/^,/.test(x)?" "+x:x).join("");return t[0].toUpperCase()+t.slice(1)+end}

/* ---- the game ---- */
let G=null,ov=null;
const SETS=10,runGet=()=>st("run"),setBest=(lv,k)=>st("set:"+lv+":"+k);
const itemsOf=(lv,set,order,topic)=>order.map(i=>parse(topic?SBT[topic][i]:SB[lv][set][i]));
const runKey=g=>g&&g.topic?"trun:"+g.topic:"run";
const tilesOf=S=>S.blocks.map((t,id)=>({id,t:t.replace(/^,\s*/,""),k:key(t)}));
/* the running game after every move – without what can be rebuilt from the data */
/* ---- stopwatch: ms = time already counted, t0 = running since ---- */
const fmt=ms=>{const t=Math.round((ms||0)/1000);return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")};
const el=()=>G?(G.ms||0)+(G.t0?Date.now()-G.t0:0):0;
let tick=null;
function run(){if(!G||G.menu||G.t0)return;G.t0=Date.now();clearInterval(tick);tick=setInterval(()=>{const c=ov&&ov.querySelector(".sb-clock b");if(c&&G&&!G.menu)c.textContent=fmt(el())},500)}
function halt(){clearInterval(tick);if(G&&G.t0){G.ms=(G.ms||0)+Date.now()-G.t0;G.t0=null}}
document.addEventListener("visibilitychange",()=>{if(!G||G.menu)return;if(document.hidden){halt();save()}else if(!G.done&&G.i<G.items.length&&ov&&!ov.hidden)run()});
/* ---- leaderboard: per level, the best 20 games ---- */
const player=()=>st("name")||"Ich";
const rank=(a,b)=>b.s-a.s||a.ms-b.ms;
function lbAdd(e){const L=(st("lb:"+e.lv)||[]).concat([e]).sort(rank);const at=L.indexOf(e);sv("lb:"+e.lv,L.slice(0,20));return {place:at+1,of:Math.min(L.length,20),list:L.slice(0,20),id:e.id}}
function lbTable(lv,mark,n){const L=(st("lb:"+lv)||[]).slice(0,n||10);if(!L.length)return `<p class="sb-note">Noch keine Einträge – spiel ein Set, dann stehst du hier.</p>`;
 return `<ol class="sb-lb">${L.map((e,i)=>`<li class="${e.id===mark?"me":""}"><span class="sb-rk">${["🥇","🥈","🥉"][i]||i+1}</span><b>${esc(e.name)}</b><span class="sb-lbs">${num(e.s)}/10</span><span class="sb-lbt">⏱ ${fmt(e.ms)}</span><small>Set ${e.set+1} · ${esc(e.date)}</small></li>`).join("")}</ol>`}
function save(){if(!G||G.menu)return;const {items,tiles,t0,...rest}=G;rest.ms=el();sv(runKey(G),rest)}
function deal(){const S=G.items[G.i];G.tiles=tilesOf(S);G.sStart=el();
 let order;do{order=G.tiles.map(t=>t.id);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}}
 while(order.length>2&&S.sols.some(s=>s.join("|")===order.map(id=>G.tiles[id].k).join("|")));
 Object.assign(G,{ans:[],pool:order,tries:0,hint:false,done:false,marks:null,msg:""})}
/* a set not played yet; after all ten the one with the lowest score (not the one just played) */
function fresh(lv){const sc=SB[lv].map((_,k)=>setBest(lv,k)),nk=sc.findIndex(x=>x==null);if(nk>=0)return nk;
 const last=st("last:"+lv);let bi=0,bv=99;sc.forEach((v,k)=>{if(k!==last&&v<bv){bv=v;bi=k}});return bi}
function startSet(lv,k){const order=SB[lv][k].map((_,i)=>i);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}
 sv("lv",lv);G={lv,set:k,order,items:itemsOf(lv,k,order),i:0,score:0,res:[],streak:0,bestStreak:0,ms:0,t0:null,times:[]};deal();show();draw()}
function newGame(lv,k){const R=runGet();
 if(R&&!(R.lv===lv&&R.set===k)&&!confirm(`Dein laufendes Spiel (${R.lv} · Set ${R.set+1} · Satz ${R.i+1}) wird beendet. Neues Spiel starten?`))return;
 sv("run",null);startSet(lv,k==null?fresh(lv):k)}
function resume(){const R=runGet();if(!R)return;G=Object.assign({},R,{items:itemsOf(R.lv,R.set,R.order)});
 if(!G.items[G.i]){sv("run",null);open(R.lv);return}G.tiles=tilesOf(G.items[G.i]);G.t0=null;G.ms=G.ms||0;G.times=G.times||[];if(G.sStart==null)G.sStart=G.ms;show();draw()}
/* ---- topic tests: 5 sentences of one grammar topic ---- */
const TN=5;
function startTopic(id,title){const all=(SBT[id]||[]).map((_,i)=>i);let seen=st("tseen:"+id)||[];
 /* all sentences once, then new mixes – never the five of the test before */
 let pool=all.filter(i=>!seen.includes(i));if(pool.length<TN){const recent=seen.slice(-TN);pool=all.filter(i=>!recent.includes(i));seen=recent}if(pool.length<TN)pool=all.slice();
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 const order=pool.slice(0,TN);sv("tseen:"+id,seen.concat(order).slice(-all.length));
 G={topic:id,title,lv:"",set:0,order,items:itemsOf("",0,order,id),i:0,score:0,res:[],streak:0,bestStreak:0,ms:0,t0:null,times:[]};deal();show();draw()}
function topic(id,title){const R=st("trun:"+id);if(R&&R.order){G=Object.assign({},R,{items:itemsOf("",0,R.order,id)});
  if(G.items[G.i]){G.tiles=tilesOf(G.items[G.i]);G.t0=null;G.ms=G.ms||0;G.times=G.times||[];if(G.sStart==null)G.sStart=G.ms;show();draw();return}}
 startTopic(id,title)}
function topicButton(id,title){if(!window.SBT||!SBT[id])return"";const R=st("trun:"+id),b=st("tbest:"+id);
 return `<button type="button" class="sb-tbtn" data-sbtopic="${esc(id)}" data-sbtitle="${esc(title)}"><span class="sb-tico">🧩</span><span><b>${R?"▶ Test fortsetzen":"Satzbau-Test"}</b><small>${R?`Satz ${R.i+1} von ${R.order.length} · ${num(R.score)} Punkte`:`5 Sätze zu „${esc(title)}“ bauen${b!=null?` · Bestes: ${num(b)} / ${TN}`:""}`}</small></span></button>`}
function refreshButtons(){document.querySelectorAll("[data-sbtopic]").forEach(b=>{b.outerHTML=topicButton(b.dataset.sbtopic,b.dataset.sbtitle)})}
function show(){mount();shell(true);document.body.classList.add("sb-on")}
function open(lv){lv=lv||st("lv")||"A1";sv("lv",lv);G={menu:true,lv};show();drawMenu()}
function close(){halt();save();if(ov)ov.hidden=true;shell(false);document.body.classList.remove("sb-on");try{speechSynthesis.cancel()}catch(e){}G=null;
 const c=document.querySelector(".sb-card");if(c)c.outerHTML=card();refreshButtons()}
function mount(){if(ov){ov.hidden=false;return}ov=document.createElement("div");ov.className="sb-ov";ov.setAttribute("role","dialog");ov.setAttribute("aria-label","Satzbau-Spiel");document.body.appendChild(ov);
 ov.addEventListener("click",onClick);ov.addEventListener("pointerdown",onDown)}

/* ---- the overview: levels, the running game, a new game, the ten sets ---- */
function drawMenu(){const lv=G.lv,R=runGet(),played=SB[lv].filter((_,k)=>setBest(lv,k)!=null).length;
 ov.innerHTML=`<div class="sb-top"><b>🧩 Satzbau-Spiel</b><span></span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body">
  <div class="sb-tabs">${Object.keys(LV).map(l=>`<button type="button" data-menu="${l}" aria-pressed="${l===lv}">${l}</button>`).join("")}</div>
  <p class="sb-lead2">${esc(LV[lv][1])}</p>
  <div class="sb-player">Spieler: <b>${esc(player())}</b> <button type="button" class="sb-link" data-go="name">✎ Name ändern</button></div>
  ${R?`<div class="sb-resume"><div><b>Laufendes Spiel</b><small>${R.lv} · Set ${R.set+1} · Satz ${R.i+1} von ${R.order.length} · ${num(R.score)} Punkte</small></div><button type="button" class="sb-btn main" data-go="resume">▶ Weiterspielen</button></div>`:""}
  <div class="sb-row"><button type="button" class="sb-btn${R?"":" main"}" data-go="new">✨ Neues Spiel · ${lv}</button></div>
  <p class="sb-note">Ein neues Spiel nimmt immer ein Set, das du noch nicht gespielt hast. ${played} von ${SETS} Sets gespielt${played===SETS?" – jetzt kommt das Set mit deinem schwächsten Ergebnis.":"."}</p>
  <div class="sb-sets">${SB[lv].map((_,k)=>{const b=setBest(lv,k),run=R&&R.lv===lv&&R.set===k;
   return `<button type="button" class="sb-set${b!=null?" done":""}${run?" run":""}" data-set="${k}"><b>Set ${k+1}</b><span>${run?"▶ läuft":b==null?"neu":`<i>${"★".repeat(stars(b))}${"☆".repeat(3-stars(b))}</i> ${num(b)}/10${st("settime:"+lv+":"+k)!=null?` · ${fmt(st("settime:"+lv+":"+k))}`:""}`}</span></button>`}).join("")}</div>
  <h3 class="sb-h">🏆 Bestenliste ${lv}</h3>
  <p class="sb-note">Erst die Punkte, bei Gleichstand die schnellere Zeit. Gespeichert auf diesem Gerät – jeder, der hier spielt, kann seinen Namen eintragen.</p>
  ${lbTable(lv,null,10)}
 </div>`}

const cur=()=>G.items[G.i];
function stars(s){return s>=10?3:s>=7?2:s>=5?1:0}
function dots(){return `<div class="sb-dots">${G.items.map((_,i)=>{const r=G.res[i];return `<i class="${r==null?(i===G.i?"now":""):r===1?"ok":r?"half":"no"}"></i>`}).join("")}</div>`}
function draw(){if(G.i>=G.items.length){drawEnd();return}const S=cur(),T=id=>G.tiles[id];if(G.done)halt();else run();save();
 const tile=(id,where,j)=>{const m=G.marks?G.marks[j]:null;return `<button type="button" class="sb-tile${where==="ans"&&m!=null?(m?" right":" wrong"):""}" data-id="${id}" data-where="${where}">${esc(T(id).t)}</button>`};
 ov.innerHTML=`<div class="sb-top">${G.topic?"":`<button type="button" class="sb-x" data-go="menu" aria-label="Übersicht" title="Übersicht – das Spiel bleibt gespeichert">☰</button>`}<b>${G.topic?"🧩 "+esc(G.title):`${G.lv} · Set ${G.set+1}`}</b><span class="sb-clock" title="Zeit – läuft nur, während du einen Satz baust">⏱ <b>${fmt(el())}</b></span><span class="sb-sc">${num(G.score)} Punkte${G.streak>1?` · <span class="sb-fire">🔥 ${G.streak}</span>`:""}</span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body">${dots()}
  <div class="sb-n">Satz ${G.i+1} von ${G.items.length}</div>
  <div class="sb-en">„${esc(S.en)}“</div>
  <div class="sb-lab">Dein Satz</div>
  <div class="sb-ans${G.done?" done":""}" data-zone="ans">${G.ans.map((id,j)=>tile(id,"ans",j)).join("")}${G.ans.length?"":`<span class="sb-ph">Tippe die Blöcke unten in der richtigen Reihenfolge an – oder zieh sie hierher.</span>`}${G.ans.length?`<span class="sb-end">${S.end}</span>`:""}</div>
  ${G.done?"":`<div class="sb-lab">Blöcke</div><div class="sb-pool" data-zone="pool">${G.pool.map(id=>tile(id,"pool")).join("")||`<span class="sb-ph">Alle Blöcke sind im Satz – jetzt prüfen!</span>`}</div>`}
  <div class="sb-msg">${G.msg||""}</div>
  <div class="sb-row">${G.done?`<button type="button" class="sb-btn" data-go="say">▶ Anhören</button><button type="button" class="sb-btn main" data-go="next">${G.i+1<G.items.length?"Weiter ›":"Ergebnis ›"}</button>`
   :`<button type="button" class="sb-btn" data-go="hint"${G.pool.length&&!G.hint?"":" disabled"}>💡 Tipp</button><button type="button" class="sb-btn" data-go="reset"${G.ans.length?"":" disabled"}>↺ Neu</button><button type="button" class="sb-btn main" data-go="check"${G.pool.length?" disabled":""}>Prüfen</button>`}</div>
  ${G.hint&&!G.done?`<p class="sb-note">Mit Tipp gibt es höchstens ½ Punkt.</p>`:G.tries===1&&!G.done?`<p class="sb-note">Zweiter Versuch: ½ Punkt möglich.</p>`:""}
 </div>`}

/* the closest solution: the one with most blocks already in the right place */
function best(){const a=G.ans.map(id=>G.tiles[id].k);let bi=0,bn=-1;cur().sols.forEach((s,i)=>{const n=s.filter((k,j)=>a[j]===k).length;if(n>bn){bn=n;bi=i}});return bi}
function check(){const S=cur(),a=G.ans.map(id=>G.tiles[id].k).join("|"),ok=S.sols.some(s=>s.join("|")===a);G.tries++;
 if(ok){const p=G.hint||G.tries>1?.5:1;finishOne(p,true);return}
 const b=best();G.marks=G.ans.map((id,j)=>G.tiles[id].k===S.sols[b][j]);
 if(G.tries<2){G.msg=`<div class="sb-bad">Fast! ${G.marks.filter(Boolean).length} von ${G.ans.length} Blöcken stehen richtig (grün). Tippe die roten an und versuch es noch einmal.</div>`;draw();return}
 finishOne(0,false)}
const ruleOf=S=>SBR[S.rule]||[S.rule||"",""];
function finishOne(p,ok){halt();const S=cur(),R=ruleOf(S);G.score+=p;G.res[G.i]=p;G.done=true;G.times=G.times||[];G.times[G.i]=el()-(G.sStart||0);
 G.streak=p===1?G.streak+1:0;G.bestStreak=Math.max(G.bestStreak,G.streak);
 if(!ok){const b=best(),used=new Set();G.ans=S.sols[b].map(k=>{const t=G.tiles.find(t=>t.k===k&&!used.has(t.id));used.add(t.id);return t.id});G.pool=[];G.marks=null}
 const praise=["Super!","Richtig!","Genau!","Perfekt!","Sehr gut!"][Math.floor(Math.random()*5)];
 G.msg=`<div class="${p===1?"sb-good":p?"sb-half":"sb-bad"}"><b>${p===1?praise+" +1":p?"Richtig – +½":"Leider nicht – 0 Punkte"}</b>${G.streak>=3?` <span class="sb-fire">🔥 ${G.streak} in Folge!</span>`:""}
  ${ok?`<div class="sb-sol">✓ <b>${esc(built())}</b></div>`:""}${ok?"":`<div class="sb-sol">So ist es richtig: <b>${esc(S.show[0])}</b>${S.show.length>1?`<br><small>Auch richtig: ${S.show.slice(1).map(esc).join(" · ")}</small>`:""}</div>`}
  ${ok&&S.show.length>1?`<div class="sb-sol"><small>Auch richtig: ${S.show.filter(x=>x!==built()).map(esc).join(" · ")}</small></div>`:""}
  <div class="sb-rule">📏 ${esc(R[0])}${R[1]?`<span>${esc(R[1])}</span>`:""}</div></div>`;
 draw();if(ok)say(built())}
function built(){const S=cur(),a=G.ans.map(id=>G.tiles[id].k).join("|"),i=S.sols.findIndex(x=>x.join("|")===a);return i>=0?S.show[i]:sentence(G.ans.map(id=>G.tiles[id].t),S.end)}
function say(t){try{const sy=window.speechSynthesis;if(!sy)return;sy.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="de-DE";u.rate=(window.rate||1)*.9;
 const v=typeof voiceFor==="function"?voiceFor():null;if(v)u.voice=v;sy.speak(u)}catch(e){}}
function hint(){const S=cur(),s=S.sols[best()];let n=0;while(n<G.ans.length&&G.tiles[G.ans[n]].k===s[n])n++;
 G.pool=G.pool.concat(G.ans.splice(n));const next=G.pool.find(id=>G.tiles[id].k===s[n]);
 G.pool=G.pool.filter(id=>id!==next);G.ans.push(next);G.hint=true;G.marks=null;G.msg=`<div class="sb-tip">💡 Die ersten ${n+1} ${n?"Blöcke stehen":"Block steht"} jetzt richtig.</div>`;draw()}

function drawTopicEnd(){halt();const s=G.score,n=G.items.length,ms=el(),r=s/n,k=r>=1?3:r>=.7?2:r>=.5?1:0,old=st("tbest:"+G.topic),isBest=old==null||s>old;
 if(isBest)sv("tbest:"+G.topic,s);sv(runKey(G),null);
 const msg=r>=1?"Perfekt! Dieses Thema sitzt.":r>=.8?"Sehr gut! Fast alles richtig.":r>=.6?"Gut gemacht! Lies dir die Regeln bei den Fehlern noch einmal durch.":"Übe das Thema noch einmal – dann klappt es beim nächsten Test besser.";
 ov.innerHTML=`<div class="sb-top"><b>🧩 ${esc(G.title)} · Test geschafft</b><span></span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body sb-endb">${r>=1?`<div class="sb-confetti" aria-hidden="true">${[..."🎉✨🎊⭐".repeat(6)].map((c,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%8)*.12}s">${c}</i>`).join("")}</div>`:""}
  <div class="sb-stars">${"★".repeat(k)}<i>${"★".repeat(3-k)}</i></div>
  <div class="sb-big"><b>${num(s)}</b> / ${n}</div>
  <div class="sb-time">⏱ ${fmt(ms)}</div>
  <p class="sb-lead">${msg}</p>
  <p class="sb-sub">${isBest&&old!=null?"🏆 Neue Bestleistung! ":""}Bestes Ergebnis bei „${esc(G.title)}“: ${num(Math.max(s,old||0))} / ${n}</p>
  ${dots()}
  <ol class="sb-list">${G.items.map((S,i)=>{const q=G.res[i];return `<li class="${q===1?"ok":q?"half":"no"}"><span>${q===1?"✓":q?"½":"✗"}</span><div><b>${esc(S.show[0])}</b><small>${esc(S.en)}${G.times&&G.times[i]!=null?` · ⏱ ${Math.max(1,Math.round(G.times[i]/1000))} s`:""}</small><em>📏 ${esc(ruleOf(S)[0])}</em></div></li>`}).join("")}</ol>
  <div class="sb-row"><button type="button" class="sb-btn main" data-go="tnew">✨ 5 neue Sätze</button><button type="button" class="sb-btn" data-go="close">Fertig</button></div>
 </div>`}
function drawEnd(){if(G.topic){drawTopicEnd();return}const s=G.score,k=stars(s),bestOld=st("best:"+G.lv),isBest=bestOld==null||s>bestOld;if(isBest)sv("best:"+G.lv,s);
 const setOld=setBest(G.lv,G.set);if(setOld==null||s>setOld)sv("set:"+G.lv+":"+G.set,s);sv("last:"+G.lv,G.set);sv("run",null);
 const played=SB[G.lv].filter((_,x)=>setBest(G.lv,x)!=null).length;
 halt();const ms=el(),tOld=st("settime:"+G.lv+":"+G.set),better=setOld==null||s>setOld||(s===setOld&&(tOld==null||ms<tOld));if(better)sv("settime:"+G.lv+":"+G.set,ms);
 const LB=lbAdd({id:Date.now()+"-"+Math.random().toString(36).slice(2,6),lv:G.lv,name:player(),s,ms,set:G.set,date:new Date().toLocaleDateString("de-DE")});
 const games=(st("games:"+G.lv)||0)+1;sv("games:"+G.lv,games);
 const msg=s>=10?"Perfekt! Alle Sätze richtig – du hast die Wortstellung im Griff.":s>=8?"Sehr gut! Nur noch kleine Lücken.":s>=6?"Gut gemacht! Schau dir die Regeln bei den Fehlern noch einmal an.":s>=4?"Ein guter Anfang – übe die Regeln unten und spiel noch eine Runde.":"Nicht aufgeben! Lies die Regeln unten und versuch es gleich noch einmal.";
 const nextLv={A1:"A2",A2:"B1"}[G.lv];
 ov.innerHTML=`<div class="sb-top"><b>🧩 ${G.lv} · Set ${G.set+1} geschafft</b><span></span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body sb-endb">${s>=10?`<div class="sb-confetti" aria-hidden="true">${[..."🎉✨🎊⭐".repeat(6)].map((c,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%8)*.12}s">${c}</i>`).join("")}</div>`:""}
  <div class="sb-stars">${"★".repeat(k)}<i>${"★".repeat(3-k)}</i></div>
  <div class="sb-big"><b>${num(s)}</b> / ${N}</div>
  <div class="sb-time">⏱ ${fmt(ms)}${tOld!=null&&s>=setOld&&ms<tOld?` · <b>schneller als dein bestes Set ${G.set+1} (${fmt(tOld)})</b>`:""}</div>
  <div class="sb-place">🏆 Platz <b>${LB.place}</b> von ${LB.of} in der Bestenliste ${G.lv}${LB.place===1?" – Spitze!":""}</div>
  <p class="sb-lead">${msg}</p>
  <p class="sb-sub">${isBest&&bestOld!=null?"🏆 Neue Bestleistung! ":""}Bestleistung ${G.lv}: ${num(Math.max(s,bestOld||0))} / ${N}${G.bestStreak>=3?` · 🔥 ${G.bestStreak} richtig in Folge`:""} · ${played} von ${SETS} Sets gespielt${setOld!=null&&s>setOld?` · Set ${G.set+1}: besser als vorher (${num(setOld)})`:""}</p>
  ${dots()}
  <details class="sb-lbbox" open><summary>🏆 Bestenliste ${G.lv} · Top 5</summary>${lbTable(G.lv,LB.id,5)}</details>
  <ol class="sb-list">${G.items.map((S,i)=>{const r=G.res[i];return `<li class="${r===1?"ok":r?"half":"no"}"><span>${r===1?"✓":r?"½":"✗"}</span><div><b>${esc(S.show[0])}</b><small>${esc(S.en)}${G.times&&G.times[i]!=null?` · ⏱ ${Math.max(1,Math.round(G.times[i]/1000))} s`:""}</small>${r===1?"":`<em>📏 ${esc((SBR[S.rule]||[""])[0])}</em>`}</div></li>`}).join("")}</ol>
  <div class="sb-row"><button type="button" class="sb-btn main" data-go="new">✨ Neues Set ›</button><button type="button" class="sb-btn" data-set="${G.set}">↻ Set ${G.set+1} nochmal</button>${nextLv&&s>=7?`<button type="button" class="sb-btn" data-lv="${nextLv}">Weiter zu ${nextLv} ›</button>`:""}<button type="button" class="sb-btn" data-go="menu">☰ Übersicht</button></div>
 </div>`}

/* ---- tap and drag ---- */
let drag=null,moved=false;
function onClick(e){if(moved){moved=false;return}const b=e.target.closest("button");if(!b||!G)return;
 if(b.dataset.lv){newGame(b.dataset.lv);return}
 if(b.dataset.menu){G={menu:true,lv:b.dataset.menu};sv("lv",G.lv);drawMenu();return}
 if(b.dataset.set!=null){const k=+b.dataset.set,R=runGet(),lv=G.lv;if(R&&R.lv===lv&&R.set===k){resume();return}newGame(lv,k);return}
 const g=b.dataset.go;
 if(g==="close"){close();return}
 if(g==="menu"){halt();save();const lv=G.lv;G={menu:true,lv};drawMenu();return}
 if(g==="new"){newGame(G.lv);return}
 if(g==="tnew"){startTopic(G.topic,G.title);return}
 if(g==="name"){const n=prompt("Dein Name für die Bestenliste:",player());if(n&&n.trim()){sv("name",n.trim().slice(0,20));drawMenu()}return}
 if(g==="resume"){resume();return}
 if(G.menu)return;
 if(g==="next"){G.i++;G.msg="";if(G.i<G.items.length)deal();draw();return}
 if(g==="say"){say(built());return}
 if(g==="check"){check();return}
 if(g==="hint"){hint();return}
 if(g==="reset"){G.pool=G.pool.concat(G.ans);G.ans=[];G.marks=null;G.msg="";draw();return}
 if(b.classList.contains("sb-tile")&&!G.done){const id=+b.dataset.id;
  if(b.dataset.where==="pool"){G.pool=G.pool.filter(x=>x!==id);G.ans.push(id)}else{G.ans=G.ans.filter(x=>x!==id);G.pool.push(id)}
  G.marks=null;if(!(G.tries===1))G.msg="";draw()}}
function onDown(e){const b=e.target.closest(".sb-tile");if(!b||!G||G.menu||G.done)return;
 drag={id:+b.dataset.id,x:e.clientX,y:e.clientY,el:b,ghost:null};moved=false;
 document.addEventListener("pointermove",onMove);document.addEventListener("pointerup",onUp,{once:true})}
function onMove(e){if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(!drag.ghost){if(Math.hypot(dx,dy)<8)return;const r=drag.el.getBoundingClientRect();drag.ghost=drag.el.cloneNode(true);drag.ghost.classList.add("sb-ghost");
  Object.assign(drag.ghost.style,{width:r.width+"px",left:r.left+"px",top:r.top+"px"});drag.ox=e.clientX-r.left;drag.oy=e.clientY-r.top;document.body.appendChild(drag.ghost);drag.el.classList.add("sb-lift")}
 e.preventDefault();drag.ghost.style.left=(e.clientX-drag.ox)+"px";drag.ghost.style.top=(e.clientY-drag.oy)+"px";
 const z=zoneAt(e.clientX,e.clientY);ov.querySelectorAll("[data-zone]").forEach(x=>x.classList.toggle("over",x===z))}
function zoneAt(x,y){const el=document.elementFromPoint(x,y);return el&&el.closest?el.closest("[data-zone]"):null}
function onUp(e){document.removeEventListener("pointermove",onMove);const d=drag;drag=null;if(!d||!d.ghost)return;
 moved=true;setTimeout(()=>{moved=false},50);d.ghost.remove();
 const z=zoneAt(e.clientX,e.clientY),id=d.id;G.ans=G.ans.filter(x=>x!==id);G.pool=G.pool.filter(x=>x!==id);
 if(z&&z.dataset.zone==="ans"){const tiles=[...z.querySelectorAll(".sb-tile")].filter(t=>+t.dataset.id!==id);let at=tiles.length;
  for(let i=0;i<tiles.length;i++){const r=tiles[i].getBoundingClientRect();if(e.clientY<r.top||(e.clientY<=r.bottom&&e.clientX<r.left+r.width/2)){at=i;break}}
  G.ans.splice(at,0,id)}else G.pool.push(id);
 G.marks=null;draw()}

/* ---- the start card on a page ---- */
function card(){const R=runGet(),n=l=>SB[l].filter((_,k)=>setBest(l,k)!=null).length;
 return `<section class="sb-card"><div class="sb-ch"><span class="sb-ico">🧩</span><div><b>Satzbau-Spiel</b><small>Bring die Blöcke in die richtige Reihenfolge – je Level 10 Sets mit 10 Sätzen, 1 Punkt pro Satz. So lernst du die deutsche Wortstellung.</small></div></div>
  ${R?`<button type="button" class="sb-go" data-sbresume="1">▶ Weiterspielen <small>${R.lv} · Set ${R.set+1} · Satz ${R.i+1} von ${R.order.length}</small></button>`:""}
  <div class="sb-lvls">${Object.keys(LV).map(l=>`<button type="button" class="sb-lv" data-sblv="${l}"><b>${LV[l][0]}</b><span>${LV[l][1]}</span><small>${n(l)} von ${SETS} Sets</small></button>`).join("")}</div></section>`}
document.addEventListener("click",e=>{const b=e.target.closest("[data-sblv]");if(b)open(b.dataset.sblv);if(e.target.closest("[data-sbresume]"))resume();
 const t=e.target.closest("[data-sbtopic]");if(t)topic(t.dataset.sbtopic,t.dataset.sbtitle)});
addEventListener("keydown",e=>{if(e.key==="Escape"&&G)close()});

const css=document.createElement("style");css.textContent=`
.sb-card{margin:14px 0;padding:14px 16px;border-radius:16px;border:1.5px solid var(--line);background:linear-gradient(135deg,color-mix(in srgb,var(--b1) 12%,var(--paper)),color-mix(in srgb,var(--a1) 12%,var(--paper)))}
.sb-ch{display:flex;gap:12px;align-items:center}.sb-ico{font-size:34px}.sb-ch b{font-size:19px;font-family:"Bricolage Grotesque",sans-serif}.sb-ch small{display:block;color:var(--muted);font-size:14px}
.sb-lvls{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.sb-lv{font:inherit;text-align:left;border:1.5px solid var(--line);border-radius:12px;background:var(--paper);color:var(--ink);padding:9px 11px;cursor:pointer}
.sb-lv b{display:block;font-size:18px;color:var(--b1)}.sb-lv span{display:block;font-size:13px;line-height:1.3}.sb-lv small{display:block;margin-top:4px;font-size:12px;color:var(--muted)}
@media (max-width:560px){.sb-lv span{display:none}.sb-lv{text-align:center;padding:8px 6px}.sb-ch small{font-size:13px}.sb-ico{font-size:28px}}
body.sb-on{overflow:hidden}
.sb-tbtn{display:flex;gap:10px;align-items:center;margin-top:10px;font:inherit;text-align:left;padding:9px 14px;border-radius:14px;border:1.5px solid color-mix(in srgb,var(--b1) 45%,var(--line));background:linear-gradient(135deg,color-mix(in srgb,var(--b1) 14%,var(--paper)),color-mix(in srgb,var(--a1) 14%,var(--paper)));color:var(--ink);cursor:pointer;max-width:100%}
.sb-tbtn .sb-tico{font-size:26px}.sb-tbtn b{display:block;color:var(--b1)}.sb-tbtn small{display:block;color:var(--muted);font-size:13px}
.sb-go{display:block;width:100%;margin-top:12px;font:inherit;font-weight:800;font-size:17px;padding:11px 14px;border:none;border-radius:12px;background:var(--b1);color:#fff;cursor:pointer;text-align:left}
.sb-go small{display:block;font-weight:400;font-size:13px;opacity:.9}
.sb-tabs{display:flex;gap:6px;justify-content:center}.sb-tabs button{font:inherit;font-weight:800;font-size:17px;padding:7px 20px;border-radius:999px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer}
.sb-tabs button[aria-pressed="true"]{background:var(--b1);border-color:var(--b1);color:#fff}
.sb-lead2{text-align:center;color:var(--muted);margin:8px 0 12px}
.sb-resume{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:14px;border:2px solid var(--b1);background:color-mix(in srgb,var(--b1) 8%,var(--paper));margin-bottom:6px}
.sb-resume small{display:block;color:var(--muted)}
.sb-sets{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}
.sb-set{font:inherit;padding:10px 4px;border-radius:12px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;text-align:center}
.sb-set b{display:block}.sb-set span{display:block;font-size:12px;color:var(--muted)}.sb-set i{font-style:normal;color:#f5b301;letter-spacing:1px}
.sb-set.done{background:color-mix(in srgb,#1b8a4c 8%,var(--paper));border-color:color-mix(in srgb,#1b8a4c 40%,var(--line))}
.sb-set.run{border:2px solid var(--b1)}.sb-set.run span{color:var(--b1);font-weight:700}
@media (max-width:560px){.sb-sets{grid-template-columns:repeat(2,1fr)}}
.sb-ov{position:fixed;inset:0;z-index:60;background:var(--paper);color:var(--ink);display:flex;flex-direction:column}
.sb-top{display:flex;align-items:center;gap:10px;padding:calc(env(safe-area-inset-top,0px) + 10px) 14px 10px;border-bottom:1px solid var(--line)}
.sb-top b{font-family:"Bricolage Grotesque",sans-serif}.sb-sc{font-weight:700;color:var(--b1)}
.sb-clock{margin-left:auto;font-variant-numeric:tabular-nums;font-weight:700;padding:3px 10px;border-radius:999px;background:var(--surface)}
.sb-time{font-size:20px;font-weight:700;font-variant-numeric:tabular-nums;margin-top:2px}.sb-time b{color:#1b8a4c;font-size:15px}
.sb-place{margin:6px 0;font-size:16px}.sb-place b{color:var(--b1);font-size:20px}
.sb-player{text-align:center;margin:0 0 10px}.sb-link{font:inherit;border:none;background:none;color:var(--b1);cursor:pointer;text-decoration:underline}
.sb-h{margin:18px 0 4px;font-size:18px}
.sb-lb{list-style:none;padding:0;margin:6px 0;text-align:left}
.sb-lb li{display:grid;grid-template-columns:34px 1fr auto auto;gap:4px 10px;align-items:center;padding:7px 8px;border-bottom:1px solid var(--line);border-radius:8px}
.sb-lb li.me{background:color-mix(in srgb,var(--b1) 12%,var(--paper));border-color:transparent}
.sb-rk{font-size:20px;text-align:center;font-weight:800}.sb-lbs{font-weight:800;color:var(--b1)}.sb-lbt{font-variant-numeric:tabular-nums}
.sb-lb small{grid-column:2/-1;color:var(--muted);font-size:12px;margin-top:-4px}
.sb-lbbox{margin:10px 0;text-align:left;border:1.5px solid var(--line);border-radius:12px;padding:6px 10px}.sb-lbbox summary{cursor:pointer;font-weight:700}
.sb-x{font:inherit;font-size:18px;border:none;background:var(--surface);color:var(--ink);border-radius:50%;width:36px;height:36px;cursor:pointer}
.sb-body{flex:1;overflow:auto;padding:14px 16px 30px;max-width:760px;width:100%;margin:0 auto;position:relative}
.sb-dots{display:flex;gap:5px;justify-content:center;margin:2px 0 10px}.sb-dots i{width:22px;height:8px;border-radius:4px;background:var(--line)}
.sb-dots i.now{background:var(--b1)}.sb-dots i.ok{background:#1b8a4c}.sb-dots i.half{background:#d99a00}.sb-dots i.no{background:#c62f45}
.sb-n{font-size:13px;color:var(--muted);text-align:center}.sb-en{font-size:18px;text-align:center;margin:4px 0 14px;font-style:italic}
.sb-lab{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin:10px 0 4px}
.sb-ans,.sb-pool{display:flex;flex-wrap:wrap;gap:8px;align-items:center;min-height:62px;padding:10px;border-radius:14px}
.sb-ans{border:2px dashed var(--b1);background:color-mix(in srgb,var(--b1) 6%,var(--paper))}.sb-ans.done{border-style:solid}
.sb-pool{background:var(--surface)}.sb-ans.over,.sb-pool.over{outline:3px solid color-mix(in srgb,var(--b1) 45%,transparent)}
.sb-ph{color:var(--muted);font-size:14px}.sb-end{font-size:22px;font-weight:800;margin-left:-2px}
.sb-tile{font:inherit;font-size:18px;font-weight:700;padding:8px 13px;border-radius:11px;border:2px solid var(--line);background:var(--paper);color:var(--ink);cursor:grab;box-shadow:0 2px 0 var(--line);touch-action:none;user-select:none;-webkit-user-select:none}
.sb-ans .sb-tile{border-color:color-mix(in srgb,var(--b1) 50%,var(--line))}
.sb-tile.right{border-color:#1b8a4c;background:color-mix(in srgb,#1b8a4c 14%,var(--paper))}.sb-tile.wrong{border-color:#c62f45;background:color-mix(in srgb,#c62f45 14%,var(--paper))}
.sb-tile.sb-lift{opacity:.3}.sb-ghost{position:fixed;z-index:80;pointer-events:none;transform:rotate(-3deg) scale(1.06);box-shadow:0 10px 24px rgba(0,0,0,.25);margin:0}
.sb-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;justify-content:center}
.sb-btn{font:inherit;font-weight:700;padding:10px 18px;border-radius:999px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer}
.sb-btn.main{background:var(--b1);border-color:var(--b1);color:#fff}.sb-btn:disabled{opacity:.4;cursor:default}
.sb-msg:empty{display:none}.sb-msg{margin-top:12px}
.sb-good,.sb-half,.sb-bad,.sb-tip{padding:10px 12px;border-radius:12px;border-left:5px solid}
.sb-good{border-color:#1b8a4c;background:color-mix(in srgb,#1b8a4c 10%,var(--paper))}.sb-half{border-color:#d99a00;background:color-mix(in srgb,#d99a00 10%,var(--paper))}
.sb-bad{border-color:#c62f45;background:color-mix(in srgb,#c62f45 9%,var(--paper))}.sb-tip{border-color:var(--b1);background:color-mix(in srgb,var(--b1) 8%,var(--paper))}
.sb-sol{margin-top:6px}.sb-rule{margin-top:8px;font-size:15px}.sb-rule span{display:block;font-size:13px;color:var(--muted)}
.sb-fire{color:#e8590c;font-weight:800}.sb-note{text-align:center;font-size:13px;color:var(--muted);margin:8px 0 0}
.sb-endb{text-align:center}.sb-stars{font-size:46px;color:#f5b301;letter-spacing:4px}.sb-stars i{font-style:normal;color:var(--line)}
.sb-big{font-family:"Bricolage Grotesque",sans-serif;font-size:26px}.sb-big b{font-size:64px;color:var(--b1)}
.sb-lead{font-size:18px;margin:6px 0}.sb-sub{color:var(--muted);font-size:14px}
.sb-list{text-align:left;list-style:none;padding:0;margin:12px 0}.sb-list li{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--line)}
.sb-list li>span{flex:none;width:26px;height:26px;border-radius:13px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:800}
.sb-list li.ok>span{background:#1b8a4c}.sb-list li.half>span{background:#d99a00}.sb-list li.no>span{background:#c62f45}
.sb-list small{display:block;color:var(--muted)}.sb-list em{display:block;font-style:normal;font-size:13px;margin-top:2px}
.sb-confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden}.sb-confetti i{position:absolute;top:-30px;font-style:normal;font-size:24px;animation:sbfall 2.4s ease-in forwards}
@keyframes sbfall{to{transform:translateY(110vh) rotate(360deg);opacity:0}}
@media (prefers-reduced-motion:reduce){.sb-confetti{display:none}}`;
document.head.appendChild(css);
window.Satzbau={open,close,card,topic,topicButton};
})();
