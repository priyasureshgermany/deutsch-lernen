/* Satzbau-Spiel: build German sentences from scrambled blocks.
   Per level 10 sets of 10 sentences (satzbau-data.js); one set is one round.
   "Neues Spiel" always takes a set not played yet (after all ten: the one
   with the lowest score); a game left in the middle is saved after every
   move and offered again as "Weiterspielen". Tap a block to
   move it into the sentence (tap it again to send it back) or drag it to any
   place. Points per sentence: right at once 1 · with a hint or on the second
   try ½ · otherwise 0 – after two wrong tries your answer stays in the box
   (green / red) with the right order below it; every result explains the
   order clause by clause (why()) and gives a tip for the rule (TIP).
   ‹ › and the dots move between the sentences of a round: finished ones show
   their result again, unfinished ones can be skipped and built later.
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
const LV={A1:["A1","einfache Sätze, Fragen, Modalverben"],A2:["A2","Perfekt, weil / dass / wenn, Dativ und Akkusativ"],B1:["B1","Relativsätze, zu + Infinitiv, Passiv, Konjunktiv II"],
 "A1+":["A1+","lange Sätze: und / aber / denn, Zeit + Ort + Objekt"],"A2+":["A2+","lange Sätze im Text: Perfekt, weil / dass / wenn, deshalb"],"B1+":["B1+","lange Sätze im Text: Relativsatz, zu + Infinitiv, Passiv, Konjunktiv II"]};
const N=10,st=k=>{try{return JSON.parse(localStorage.getItem("dl:sb:"+k))}catch(e){return null}},sv=(k,v)=>{try{localStorage.setItem("dl:sb:"+k,JSON.stringify(v))}catch(e){}};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const num=x=>String(x).replace(".",",");
const key=s=>s.replace(/^,\s*/,"").toLowerCase();
const shell=on=>{try{if(parent!==window)parent.postMessage({dlCards:on},location.origin)}catch(e){}};

/* one sentence: its blocks, end mark, every correct order */
function parse(row){const [s0,en,rule,alt,ctx]=row,end=(s0.match(/[.?!]$/)||["."])[0];
 const raw=s0.replace(/[.?!]$/,"").split("|"),blocks=raw.map(b=>b.replace(/^\^/,""));
 /* "^": this block may also stand first – then verb, subject, the rest */
 const front=raw.map((b,i)=>b[0]==="^"&&i>1?[blocks[i],blocks[1],blocks[0]].concat(blocks.filter((_,j)=>j>1&&j!==i)):null).filter(Boolean);
 const sols=[blocks].concat(front,(alt||[]).map(a=>a.replace(/[.?!]$/,"").split("|")));
 return {blocks,end,en,rule,ctx:ctx||null,sols:sols.map(b=>b.map(key)),show:sols.map(b=>sentence(b,end))}}
function sentence(b,end){const t=b.map((x,i)=>i&&!/^,/.test(x)?" "+x:x).join("");return t[0].toUpperCase()+t.slice(1)+end}

/* ---- the game ---- */
let G=null,ov=null;
const runGet=()=>st("run"),setBest=(lv,k)=>st("set:"+lv+":"+k);
const itemsOf=(lv,set,order,topic)=>order.map(i=>Object.assign(parse(topic?SBT[topic][i]:SB[lv][set][i]),topic?{topic}:{}));
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
function save(){if(!G||G.menu||G.over||!G.items||G.i>=G.items.length)return;const {items,tiles,t0,...rest}=G;rest.ms=el();sv(runKey(G),rest)}
function deal(){const S=G.items[G.i];G.tiles=tilesOf(S);G.sStart=el();
 let order;do{order=G.tiles.map(t=>t.id);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}}
 while(order.length>2&&S.sols.some(s=>s.join("|")===order.map(id=>G.tiles[id].k).join("|")));
 Object.assign(G,{ans:[],pool:order,tries:0,hint:false,done:false,marks:null,msg:"",failed:false,fixB:0})}
/* ‹ › and the dots: every sentence keeps its own state – a finished one shows its
   result again, an unfinished one waits with its blocks where you left them */
function stash(){if(!G||G.menu||!G.items||G.i>=G.items.length)return;G.slots=G.slots||[];
 G.slots[G.i]={ans:G.ans.slice(),pool:G.pool.slice(),tries:G.tries,hint:G.hint,done:G.done,marks:G.marks,msg:G.msg,failed:!!G.failed,fixB:G.fixB||0,spent:el()-(G.sStart||0)}}
function goTo(j){if(!G||G.menu||j<0||j>=G.items.length||j===G.i)return;endDrag();stash();G.i=j;const s=(G.slots||[])[j];
 if(s){G.tiles=tilesOf(cur());Object.assign(G,{ans:s.ans.slice(),pool:s.pool.slice(),tries:s.tries,hint:s.hint,done:s.done,marks:s.marks,msg:s.msg,failed:!!s.failed,fixB:s.fixB||0});G.sStart=el()-(s.spent||0)}
 else deal();draw()}
/* "Weiter": the next sentence not finished yet (after the last one back to a skipped one); all finished: the result */
function nextOpen(){const n=G.items.length;for(let d=1;d<n;d++){const j=(G.i+d)%n;if(G.res[j]==null){goTo(j);return}}
 stash();G.i=n;G.msg="";draw()}
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
/* n sentences of one group: all once, then new mixes – never those of the test before */
function pickGroup(id,key,idx,n){if(!idx.length||!n)return[];let seen=st(key)||[];
 let pool=idx.filter(i=>!seen.includes(i));if(pool.length<n){const recent=seen.slice(-n);pool=idx.filter(i=>!recent.includes(i));seen=recent}if(pool.length<n)pool=idx.slice();
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 const take=pool.slice(0,n);sv(key,seen.concat(take).slice(-idx.length));return take}
function startTopic(id,title){const rows=SBT[id]||[],longI=rows.map((r,i)=>r[4]?i:-1).filter(i=>i>=0),shortI=rows.map((r,i)=>r[4]?-1:i).filter(i=>i>=0);
 /* a test: 2 long sentences in a paragraph, 3 short ones – in mixed order */
 const nl=Math.min(2,longI.length),order=pickGroup(id,"tseen:"+id+":lang",longI,nl).concat(pickGroup(id,"tseen:"+id,shortI,TN-nl));
 for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}
 G={topic:id,title,lv:"",set:0,order,items:itemsOf("",0,order,id),i:0,score:0,res:[],streak:0,bestStreak:0,ms:0,t0:null,times:[]};deal();show();draw()}
function topic(id,title){const R=st("trun:"+id);if(R&&R.order){G=Object.assign({},R,{items:itemsOf("",0,R.order,id)});
  if(G.items[G.i]){G.tiles=tilesOf(G.items[G.i]);G.t0=null;G.ms=G.ms||0;G.times=G.times||[];if(G.sStart==null)G.sStart=G.ms;show();draw();return}}
 startTopic(id,title)}
/* a small icon next to the topic name; an orange dot = a test is running, the green badge = the best result.
    Long press / hover explains it (hilfe.js, the page's help steps) */
function topicButton(id,title){if(!window.SBT||!SBT[id])return"";const R=st("trun:"+id),b=st("tbest:"+id);
 const say=R?`Satzbau-Test fortsetzen – Satz ${R.i+1} von ${R.order.length}, ${num(R.score)} Punkte`:`Satzbau-Test: 5 Sätze zu „${title}“ bauen${b!=null?` – bestes Ergebnis ${num(b)} von ${TN}`:""}`;
 return `<button type="button" class="sb-ticon${R?" run":""}" data-sbtopic="${esc(id)}" data-sbtitle="${esc(title)}" aria-label="${esc(say)}">🧩${R?`<i class="sb-tdot" aria-hidden="true"></i>`:b!=null?`<i class="sb-tbadge">${num(b)}/${TN}</i>`:""}</button>`}
function refreshButtons(){document.querySelectorAll("[data-sbtopic]").forEach(b=>{b.outerHTML=topicButton(b.dataset.sbtopic,b.dataset.sbtitle)})}
function show(){try{window.Hilfe&&Hilfe.end&&Hilfe.end()}catch(e){}mount();shell(true);document.body.classList.add("sb-on")}
function open(lv){lv=lv||st("lv")||"A1";sv("lv",lv);G={menu:true,lv};show();drawMenu()}
function close(){halt();save();endDrag();if(ov)ov.hidden=true;shell(false);document.body.classList.remove("sb-on");try{speechSynthesis.cancel()}catch(e){}G=null;
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
  <p class="sb-note">Ein neues Spiel nimmt immer ein Set, das du noch nicht gespielt hast. ${played} von ${SB[lv].length} Sets gespielt${played===SB[lv].length?" – jetzt kommt das Set mit deinem schwächsten Ergebnis.":"."}</p>
  <div class="sb-sets">${SB[lv].map((_,k)=>{const b=setBest(lv,k),run=R&&R.lv===lv&&R.set===k;
   return `<button type="button" class="sb-set${b!=null?" done":""}${run?" run":""}" data-set="${k}"><b>Set ${k+1}</b><span>${run?"▶ läuft":b==null?"neu":`<i>${"★".repeat(stars(b))}${"☆".repeat(3-stars(b))}</i> ${num(b)}/10${st("settime:"+lv+":"+k)!=null?` · ${fmt(st("settime:"+lv+":"+k))}`:""}`}</span></button>`}).join("")}</div>
  <h3 class="sb-h">🏆 Bestenliste ${lv}</h3>
  <p class="sb-note">Erst die Punkte, bei Gleichstand die schnellere Zeit. Gespeichert auf diesem Gerät – jeder, der hier spielt, kann seinen Namen eintragen.</p>
  ${lbTable(lv,null,10)}
 </div>`}

const cur=()=>G.items[G.i];
function stars(s){return s>=10?3:s>=7?2:s>=5?1:0}
function dots(nav){return `<div class="sb-dots">${G.items.map((_,i)=>{const r=G.res[i],c=r==null?(i===G.i?"now":""):r===1?"ok":r?"half":"no";
 return nav?`<button type="button" class="sb-dot ${c}${i===G.i?" cur":""}" data-dot="${i}" aria-label="Satz ${i+1}${r==null?"":r===1?" – richtig":r?" – ½ Punkt":" – falsch"}"></button>`:`<i class="${c}"></i>`}).join("")}</div>`}
const allDone=()=>G.items.every((_,i)=>G.res[i]!=null);
function draw(){if(G.i>=G.items.length){drawEnd();return}const S=cur(),T=id=>G.tiles[id];if(G.done)halt();else run();save();
 const tile=(id,where,j)=>{const m=G.marks?G.marks[j]:null;return `<button type="button" class="sb-tile${where==="ans"&&m!=null?(m?" right":" wrong"):""}" data-id="${id}" data-where="${where}">${esc(T(id).t)}</button>`};
 ov.innerHTML=`<div class="sb-top">${G.topic?"":`<button type="button" class="sb-x" data-go="menu" aria-label="Übersicht" title="Übersicht – das Spiel bleibt gespeichert">☰</button>`}<b>${G.topic?"🧩 "+esc(G.title):`${G.lv} · Set ${G.set+1}`}</b><span class="sb-clock" title="Zeit – läuft nur, während du einen Satz baust">⏱ <b>${fmt(el())}</b></span><span class="sb-sc">${num(G.score)} Punkte${G.streak>1?` · <span class="sb-fire">🔥 ${G.streak}</span>`:""}</span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body">${dots(true)}
  <div class="sb-nav"><button type="button" class="sb-nb" data-go="prev" aria-label="Vorheriger Satz" title="Vorheriger Satz"${G.i?"":" disabled"}>‹</button><span class="sb-n">Satz ${G.i+1} von ${G.items.length}</span><button type="button" class="sb-nb" data-go="fwd" aria-label="Nächster Satz" title="Nächster Satz – du kannst Sätze überspringen und später bauen"${G.i<G.items.length-1?"":" disabled"}>›</button></div>
  ${S.ctx?`<div class="sb-lab">Ergänze den fehlenden Satz im Text</div><div class="sb-para">${esc(S.ctx[0])} <span class="sb-gap${G.done?" filled":""}">${G.done?esc(built()):"_____ ? _____"}</span> ${esc(S.ctx[1])}</div>`:""}
  <div class="sb-en">„${esc(S.en)}“</div>
  <div class="sb-lab">${G.failed?"Deine Antwort":"Dein Satz"}</div>
  <div class="sb-ans${G.done?" done":""}${G.failed?" sb-wrongbox":""}" data-zone="ans">${G.ans.map((id,j)=>tile(id,"ans",j)).join("")}${G.ans.length?"":`<span class="sb-ph">Tippe die Blöcke unten in der richtigen Reihenfolge an – oder zieh sie hierher.</span>`}${G.ans.length?`<span class="sb-end">${S.end}</span>`:""}</div>
  ${G.failed?`<div class="sb-lab sb-oklab">✓ Richtige Lösung</div><div class="sb-ans done sb-fix">${fixTiles()}</div>`:""}
  ${G.done?"":`<div class="sb-lab">Blöcke</div><div class="sb-pool" data-zone="pool">${G.pool.map(id=>tile(id,"pool")).join("")||`<span class="sb-ph">Alle Blöcke sind im Satz – jetzt prüfen!</span>`}</div>`}
  <div class="sb-msg">${G.msg||""}</div>
  <div class="sb-row">${G.done?`<button type="button" class="sb-btn" data-go="say">▶ Anhören</button><button type="button" class="sb-btn main" data-go="next">${allDone()?"Ergebnis ›":"Weiter ›"}</button>`
   :`<button type="button" class="sb-btn" data-go="hint"${G.pool.length&&!G.hint?"":" disabled"}>💡 Tipp</button><button type="button" class="sb-btn" data-go="reset"${G.ans.length?"":" disabled"}>↺ Neu</button><button type="button" class="sb-btn main" data-go="check"${G.pool.length?" disabled":""}>Prüfen</button>`}</div>
  ${G.hint&&!G.done?`<p class="sb-note">Mit Tipp gibt es höchstens ½ Punkt.</p>`:G.tries===1&&!G.done?`<p class="sb-note">Zweiter Versuch: ½ Punkt möglich.</p>`:""}
 </div>`}

/* the closest solution: the one with most blocks already in the right place */
function best(){const a=G.ans.map(id=>G.tiles[id].k);let bi=0,bn=-1;cur().sols.forEach((s,i)=>{const n=s.filter((k,j)=>a[j]===k).length;if(n>bn){bn=n;bi=i}});return bi}
function check(){const S=cur(),a=G.ans.map(id=>G.tiles[id].k).join("|"),ok=S.sols.some(s=>s.join("|")===a);G.tries++;
 if(ok){const p=G.hint||G.tries>1?.5:1;finishOne(p,true);return}
 const b=best();G.marks=G.ans.map((id,j)=>G.tiles[id].k===S.sols[b][j]);
 if(G.tries<2){const T=tipOf(S);G.msg=`<div class="sb-bad">Fast! ${G.marks.filter(Boolean).length} von ${G.ans.length} Blöcken stehen richtig (grün). Tippe die roten an und versuch es noch einmal.</div><div class="sb-tip">💡 <b>Tipp:</b> ${esc(T[0])}<small>${esc(T[1])}</small></div>`;draw();return}
 finishOne(0,false)}
const ruleOf=S=>SBR[S.rule]||[S.rule||"",""];
/* ---- why this order: an explanation for each sentence, read from its own blocks ----
   The sentence is cut into clauses at the commas; for each clause the lines name
   position 1, the verb, the end of the clause (Satzklammer) and, where it helps,
   the middle field, "nicht" and the reflexive pronoun. */
const SUBJ=/^(ich|du|er|sie|es|wir|ihr|man)$/i;
const ADVW=/^(heute|morgen|gestern|hier|dort|da|jetzt|dann|oft|selten|nur|also|früher|später|immer|nie|auch|schon|noch|gern|sehr|ja|nein|so|leider|vielleicht|am|und|oder|aber|denn|sondern|nicht|desto|mal|mehr|weniger|besser|ruhig|teuer|teurer|vormittags|nachmittags|abends|morgens|meins|deins)$/;
const NOTV=/^(alles|das|dies|es|man|entweder|je|desto|hier|da|dort|nichts|jeder|jede|niemand|viele|beide|natürlich|glücklich|nur|jemand)$/;
const QW=/^(wo|wie|was|wann|warum|wer|wen|wem|wohin|woher|welche[rsnm]?|wessen|mit wem|um wie viel uhr|seit wann|was für|wo(r)?(an|auf|aus|bei|durch|für|gegen|in|mit|nach|über|um|unter|von|vor|zu))(\s|$)/;
const SUB0=/^(weil|dass|wenn|ob|als|obwohl|nachdem|bevor|damit|sobald|während|seitdem|falls|bis)(\s|$)/;
const SUBC=/^(weil|dass|wenn|ob|als|obwohl|nachdem|bevor|damit|sobald|während|seitdem|seit|falls|bis|wo|wie|was|wann|warum|wer|wen|wem|wohin|woher|welche[rsnm]?|seit wann|mit wem|für wen|an wen|wo(r)?(an|auf|für|mit|nach|über|von))(\s|$)/;
const RELW=/^(((mit|in|zu|bei|von|über|an|auf|für|aus|nach|unter) )?(der|die|das|dem|den|denen|deren|dessen)$|(deren|dessen) )/;
const COORD=/^(und|aber|oder|denn|sondern)$/,KONN=/^(deshalb|trotzdem|dann|sonst|darum|deswegen|danach|also)$/;
const PREF=new Set("an auf aus ein mit los zu ab fern vor weg zurück vorbei um nach her hin herein teil fest".split(" "));
const AUXW=new Set("ist sind war waren hat hatte hatten habe haben wird werden wirst werde kann können kannst muss müssen soll sollte sollten darf will hätte wäre würde worden".split(" "));
const STOPW=new Set("zusammen morgen gestern unten oben draußen drinnen selten gern sieben neben gegen eben innen außen trocken offen zufrieden verschieden bisschen beiden allen vielen anderen".split(" "));
const WERDV=/^(werde|wirst|wird|werden|werdet)$/;
const PERFV=/^(habe|hast|hat|haben|habt|hatte|hattest|hatten|bin|bist|ist|sind|seid|war|waren|wurde|wurden)$/;
const verbWord=w=>AUXW.has(w)||PREF.has(w)||/^ge[a-zäöüß]+(t|en)$/.test(w)||(/(en|ern|eln)$/.test(w)&&!STOPW.has(w));
const verbish=b=>{if(!/^[a-zäöüß ]+$/.test(b))return false;if(/^zu [a-zäöüß]+n$/.test(b)||/^[a-zäöüß]{2,}zu[a-zäöüß]+en$/.test(b))return true;
 const w=b.split(" ");return w.length===1?verbWord(w[0]):w.some(x=>AUXW.has(x))||w.every(x=>verbWord(x)&&!PREF.has(x))};
function why(S){const K=ruleKey(S),segs=[];S.blocks.forEach((b,i)=>{if(!i||/^,/.test(b))segs.push([]);segs[segs.length-1].push(b.replace(/^,\s*/,""))});
 const L=[],q=t=>`„${esc(t)}“`,lw=t=>String(t||"").toLowerCase(),add=(de,en)=>L.push([de,en]);
 /* a main clause: o.after = it starts with its verb (after a clause in front), o.quiet = position 1 is already explained */
 function main(sg,o){let b=sg.slice();const m=/^(das ist|das sind|können sie|könnten sie|wissen sie|weißt du|kannst du)$/i.exec(b[0]||"");if(m)b=b[0].split(" ").concat(b.slice(1));
  if(!b.length)return;const f=lw(b[0]);
  const E=o.last?S.end:".",imp=(K==="imp"||S.end==="!")&&!o.second&&/^[a-zäöüß]+$/.test(b[0])&&!SUBJ.test(b[0])&&!NOTV.test(b[0])&&!QW.test(f)&&!KONN.test(f)&&!ADVW.test(b[0]);
  let v=1;if(o.after)v=0;else if(K==="jn"&&!o.second||imp||(E==="?"&&!QW.test(f)&&/^[a-zäöüß]+$/.test(b[0])&&!SUBJ.test(b[0])&&!NOTV.test(b[0])&&!ADVW.test(b[0]))||(b[1]&&/^(ich|du|er|sie|es|wir|ihr|man|Sie)$/.test(b[1])&&!SUBJ.test(b[0])&&!NOTV.test(b[0])&&/^[a-zäöüß]+$/.test(b[0])&&!QW.test(f)&&!KONN.test(f)))v=0;
  if(v===1&&!/^[a-zäöüß]+$/.test(b[1]||"")&&!QW.test(f)){for(let i=2;i<Math.min(b.length,5);i++){const x=b[i];
   if(/^[a-zäöüß]+$/.test(x)&&!SUBJ.test(x)&&!/^(und|oder|nicht|auch|schon|noch|nur|gern|oft|immer|bitte|sehr)$/.test(x)){v=i;break}
   if(/^[a-zäöüß]+$/.test(x)&&!/^(und|oder)$/.test(x))break}}
  if(v===1&&/^(mir|mich|dir|dich|uns|euch|ihm|ihn|sich)$/.test(b[1]||"")&&/^[a-zäöüß]+$/.test(b[0])&&!SUBJ.test(b[0])&&!NOTV.test(b[0])&&!QW.test(f)&&!ADVW.test(b[0])){v=0;if(E!=="?")o.imp=1}
  const plain=x=>/^[a-zäöüß]+$/.test(x||"")&&!SUBJ.test(x)&&!ADVW.test(x)&&!NOTV.test(x);
  if(!o.after&&v>0&&!plain(b[v])){if(!o.second&&b.length>1&&plain(b[0])&&!NOTV.test(b[0])&&!QW.test(f)&&!KONN.test(f)){v=0;o.imp=1}else return false}
  const verb=b[v],p1=b.slice(0,v).join(" ");if(verb==null)return false;
  if(o.after){if(!o.quiet)add(`Direkt nach dem Komma kommt das Verb des Hauptsatzes ${q(verb)} – „Verb, Komma, Verb“${b[1]?` –, danach ${q(b[1])}`:""}.`,`Right after the comma comes the main-clause verb ${q(verb)} – "verb, comma, verb"${b[1]?`, then ${q(b[1])}`:""}.`)}
  else if(o.quiet){}
  else if(v===0&&(imp||o.imp))add(`Imperativ: Das Verb ${q(verb)} steht ganz vorne.`,`Imperative: the verb ${q(verb)} comes first.`);
  else if(v===0)add(`Ja/Nein-Frage: Das Verb ${q(verb)} steht ganz vorne${b[1]?`, ${q(b[1])} direkt danach`:""}.`,`Yes/no question: the verb ${q(verb)} comes first${b[1]?`, ${q(b[1])} right after it`:""}.`);
  else if(QW.test(f)){const sj=b[2]&&/^(ich|du|er|sie|es|wir|ihr|man|Sie|((der|die|das|ein|eine|einen|mein|meine|dein|deine|sein|seine|ihr|ihre|unser|unsere|euer|eure|Ihr|Ihre|dieser|diese|dieses)s.+))$/.test(b[2]);
   add(`W-Frage: Das Fragewort ${q(b[0])} steht auf Position 1, das Verb ${q(verb)} auf Position 2${sj?`, danach das Subjekt ${q(b[2])}`:""}.`,`Question: the question word ${q(b[0])} is in position 1, the verb ${q(verb)} in position 2${sj?`, then the subject ${q(b[2])}`:""}.`)}
  else{add(`Position 1: ${q(p1)}${v>1?" (ein Satzteil aus "+v+" Blöcken)":""} – Position 2: das Verb ${q(verb)}.`,`Position 1: ${q(p1)}${v>1?" (one sentence part in "+v+" blocks)":""} – position 2: the verb ${q(verb)}.`);
   if(!SUBJ.test(b[0])&&b[v+1]&&/^(ich|du|er|sie|es|wir|ihr|man|Sie)$/.test(b[v+1]))add(`Weil ${q(p1)} vorne steht, rückt das Subjekt ${q(b[v+1])} hinter das Verb.`,`Because ${q(p1)} comes first, the subject ${q(b[v+1])} moves behind the verb.`)}
  const last=b[b.length-1],lvb=lw(verb),clamp=b.length>v+2&&last!==verb&&!(PREF.has(last)&&/^(bin|bist|ist|sind|seid|war|waren|warst)$/.test(lvb))&&(verbish(last)||/^[a-zäöüß]{2,}ge[a-zäöüß]+t$/.test(last)||
   (/^(habe|hast|hat|haben|habt|hatte|hattest|hatten|wurde|wurden)$/.test(lvb)||WERDV.test(lvb)&&K==="pass")&&/^[a-zäöüß]{5,}(t|en)$/.test(last)&&!STOPW.has(last));
  if(clamp){const lv=lvb;let de,en;
   if(PREF.has(last)){de="die Vorsilbe des trennbaren Verbs";en="the prefix of the separable verb"}
   else if(/^zu |^[a-zäöüß]{2,}zu[a-zäöüß]+en$/.test(last)){de="zu + Infinitiv";en="zu + infinitive"}
   else if(PERFV.test(lv)||(WERDV.test(lv)&&K==="pass")){de="das Partizip";en="the participle"}
   else{de="der Infinitiv";en="the infinitive"}
   const l2=b[b.length-2];if(last==="werden"&&b.length>v+3&&/^[a-zäöüß]+(t|en)$/.test(l2||""))add(`${q(l2+" "+last)} steht ganz am Ende – Partizip + „werden“ (Passiv mit ${q(verb)}); zusammen mit ${q(verb)} bildet es die Satzklammer.`,`${q(l2+" "+last)} goes at the very end – participle + "werden" (passive with ${q(verb)}); together with ${q(verb)} it forms the sentence bracket.`);else
   add(`${q(last)} steht ganz am Ende – ${de}; zusammen mit ${q(verb)} bildet es die Satzklammer.`,`${q(last)} goes at the very end – ${en}; together with ${q(verb)} it forms the sentence bracket.`)}
  const mid=b.slice(v+1,clamp?b.length-1:b.length).filter(x=>!SUBJ.test(x)||b.indexOf(x)!==v+1);
  if((S.rule==="tkml"||S.rule==="dat")&&mid.length>1&&!o.done){o.done=1;
   if(S.rule==="tkml")add(`Mittelfeld: ${mid.map(q).join(" → ")} – erst wann, dann warum, wie und wo (TeKaMoLo).`,`Middle field: ${mid.map(q).join(" → ")} – first when, then why, how and where (TeKaMoLo).`);
   else add(`Mittelfeld: ${mid.map(q).join(" → ")} – die Person (Dativ) vor der Sache (Akkusativ); ein Pronomen kommt zuerst.`,`Middle field: ${mid.map(q).join(" → ")} – the person (dative) before the thing (accusative); a pronoun comes first.`)}
  const r=b.findIndex((x,i)=>i>v&&/^(mich|dich|sich|uns|euch|mir|dir)$/i.test(x));
  if(r>0&&K==="refl")add(`Das Reflexivpronomen ${q(b[r])} steht ${r===v+1?"direkt nach dem Verb":"direkt nach dem Subjekt"}.`,`The reflexive pronoun ${q(b[r])} comes ${r===v+1?"right after the verb":"right after the subject"}.`);
  const n=b.findIndex((x,i)=>i>v&&/^(noch )?nicht$/i.test(x));
  if(n>0){const nx=b[n+1];if(nx)add(`${q(b[n])} steht direkt vor ${q(nx)} – vor dem Teil, den es verneint.`,`${q(b[n])} comes right before ${q(nx)} – before the part it negates.`);
   else add(`${q(b[n])} steht am Ende, weil es das ganze Verb verneint.`,`${q(b[n])} goes at the end because it negates the whole verb.`)}
  delete o.imp;return true}
 let prev="";const o={};
 segs.forEach((sg,si)=>{const f=lw(sg[0]),last=sg[sg.length-1];o.last=si===segs.length-1;o.second=si>0;
  if(si===0&&f==="je"&&sg.length>2){add(`„je …, desto …“: Im je-Teil steht das Verb ${q(last)} am Ende, dann kommt ein Komma.`,`"je …, desto …": in the je part the verb ${q(last)} goes at the end, then a comma.`);prev="je";return}
  if(f==="desto"){const vi=sg.findIndex((x,i)=>i>1&&/^[a-zäöüß]+$/.test(x)&&!SUBJ.test(x)&&!ADVW.test(x));if(vi>0)add(`Nach ${q("desto "+sg.slice(1,vi).join(" "))} kommt sofort das Verb ${q(sg[vi])}${sg[vi+1]?`, dann ${q(sg[vi+1])}`:""}.`,`After ${q("desto "+sg.slice(1,vi).join(" "))} the verb ${q(sg[vi])} follows directly${sg[vi+1]?`, then ${q(sg[vi+1])}`:""}.`);prev="main";return}
  if(si===0){if(/^(um|statt|ohne)$/.test(f)&&sg.length>1){add(`Der Satz beginnt mit „${esc(f)} … zu“: ${q(last)} steht am Ende, dann kommt ein Komma.`,`The sentence starts with "${esc(f)} … zu": ${q(last)} goes at the end, then a comma.`);prev="sub";return}
   if(SUB0.test(f)&&!/\s/.test(f)&&sg.length>1){add(`Der Satz beginnt mit dem Nebensatz ${q(sg[0])} … – sein Verb ${q(last)} steht am Ende, dann kommt ein Komma.`,`The sentence starts with the subordinate clause ${q(sg[0])} … – its verb ${q(last)} goes at the end, then a comma.`);prev="sub"}
   else{main(sg,o);prev="main"}return}
  if(COORD.test(f)){if(f==="sondern"){add(`${q("sondern")} folgt auf „nicht …“ und nennt das Richtige; davor steht ein Komma.`,`${q("sondern")} follows "nicht …" and gives the right alternative; a comma goes before it.`);prev="main";return}
   const at=L.length;add(`${q(sg[0])} verbindet zwei Hauptsätze und zählt nicht mit – danach normale Wortstellung.`,`${q(sg[0])} joins two main clauses and doesn't count – normal word order follows.`);if(!main(sg.slice(1),o))L.splice(at);prev="main";return}
  if(KONN.test(f)&&/^[a-zäöüß]+$/.test(sg[1]||"")&&!SUBJ.test(sg[1])){add(`${q(sg[0])} steht auf Position 1 des zweiten Satzes – darum kommt das Verb ${q(sg[1])} sofort danach${sg[2]?`, dann ${q(sg[2])}`:""}.`,`${q(sg[0])} takes position 1 of the second clause – so the verb ${q(sg[1])} follows directly${sg[2]?`, then ${q(sg[2])}`:""}.`);main(sg,Object.assign(o,{quiet:1}));delete o.quiet;prev="main";return}
  if(/^(um|statt|ohne)$/.test(f)||/^zu [a-zäöüß]+n$|^[a-zäöüß]{2,}zu[a-zäöüß]+en$/.test(last)){const w=f==="um"?"„um … zu“":f==="statt"?"„statt … zu“":f==="ohne"?"„ohne … zu“":"Infinitiv mit „zu“";
   add(`${w}: ${q(last)} steht ganz am Ende; davor steht ein Komma.`,`${/Infinitiv/.test(w)?"infinitive with „zu“":w}: ${q(last)} goes at the very end; a comma goes before it.`);prev="inf";return}
  if(RELW.test(f)){add(`Relativsatz mit ${q(sg[0])}: Das Verb ${q(last)} steht am Ende; vor dem Relativsatz steht ein Komma.`,`Relative clause with ${q(sg[0])}: the verb ${q(last)} goes at the end; a comma goes before the relative clause.`);prev="rel";return}
  if(SUBC.test(f)&&o.last&&S.end==="?"&&QW.test(f)&&/^[a-zäöüß]+$/.test(sg[1]||"")&&!SUBJ.test(sg[1])&&!ADVW.test(sg[1])){main(sg,o);prev="main";return}
  if(SUBC.test(f)&&K==="rel"&&/^(was|wo|wie)$/.test(f)){add(`Relativsatz mit ${q(sg[0])}: Das Verb ${q(last)} steht ganz am Ende; davor steht ein Komma.`,`Relative clause with ${q(sg[0])}: the verb ${q(last)} goes at the very end; a comma goes before it.`);prev="sub";return}
  if(SUBC.test(f)){add(`Nebensatz mit ${q(sg[0])}: Das Verb ${q(last)} steht ganz am Ende; vor ${q(sg[0])} steht ein Komma.`,`Subordinate clause with ${q(sg[0])}: the verb ${q(last)} goes at the very end; a comma goes before ${q(sg[0])}.`);prev="sub";return}
  if(prev==="rel"){add(`Nach dem Relativsatz (wieder ein Komma) geht der Hauptsatz mit dem Verb ${q(sg[0])} weiter${segs[0].length===1?` – ${q(segs[0][0])} mit seinem Relativsatz ist Position 1`:""}.`,`After the relative clause (another comma) the main clause continues with the verb ${q(sg[0])}${segs[0].length===1?` – ${q(segs[0][0])} with its relative clause is position 1`:""}.`);main(sg,Object.assign(o,{after:1,quiet:1}));delete o.after;delete o.quiet;prev="main";return}
  if(prev==="sub"&&si===1){main(sg,Object.assign(o,{after:1}));delete o.after;prev="main";return}
  if(prev==="sub"&&/^[a-zäöüß]+$/.test(sg[0])&&!SUBJ.test(sg[0])&&!ADVW.test(sg[0])){add(`Nach dem Nebensatz (wieder ein Komma) geht der Hauptsatz mit dem Verb ${q(sg[0])} weiter.`,`After the subordinate clause (another comma) the main clause continues with the verb ${q(sg[0])}.`);main(sg,Object.assign(o,{after:1,quiet:1}));delete o.after;delete o.quiet;prev="main";return}
  main(sg,o);prev="main"});
 return L}
/* a tip per rule – for topic tests (free rule text) found by keywords */
const TIP={v2:["Such zuerst das Verb und stell es auf Platz 2 – davor steht genau ein Satzteil, oft das Subjekt.","Find the verb first and put it in position 2 – exactly one sentence part goes before it."],
 inv:["Fängst du mit Zeit oder Ort an, bleibt das Verb trotzdem auf Platz 2 – das Subjekt rutscht dahinter.","If you start with time or place, the verb still stays in position 2 – the subject moves behind it."],
 wf:["Fragewort – Verb – Subjekt: diese drei zuerst, dann der Rest.","Question word – verb – subject first, then the rest."],
 jn:["Ja/Nein-Frage: Beginne mit dem Verb, das Subjekt kommt direkt danach.","Yes/no question: start with the verb; the subject follows directly."],
 imp:["Imperativ: das Verb nach vorne. Bei du fällt das Subjekt weg, bei Sie steht „Sie“ direkt nach dem Verb.","Imperative: verb first. With du there's no subject; with Sie, \"Sie\" follows the verb."],
 modal:["Modalverb auf Platz 2, das zweite Verb (Infinitiv) ganz ans Ende – alles andere in die Mitte.","Modal verb in position 2, the second verb (infinitive) at the very end – everything else in between."],
 perf:["haben/sein auf Platz 2, das Partizip (oft ge…t / ge…en) ganz ans Ende.","haben/sein in position 2, the participle (often ge…t / ge…en) at the very end."],
 trenn:["Trennbares Verb: das Verb auf Platz 2, die kleine Vorsilbe (an, auf, ein …) ganz ans Ende.","Separable verb: the verb in position 2, the little prefix (an, auf, ein …) at the very end."],
 nicht:["„nicht“ steht direkt vor dem Teil, den es verneint – verneint es das Verb, steht es möglichst weit hinten.","\"nicht\" goes right before what it negates – if it negates the verb, it goes as far back as possible."],
 dat:["Erst die Person (Dativ: mir, dem Kind), dann die Sache (Akkusativ). Ist die Sache ein Pronomen (es, ihn), kommt sie zuerst.","Person (dative) before thing (accusative); if the thing is a pronoun (es, ihn), it comes first."],
 tkml:["Merke TeKaMoLo: wann? – warum? – wie? – wo/wohin? So ordnest du die Mitte.","Remember TeKaMoLo: when? – why? – how? – where? That's the order in the middle."],
 neben:["Nach weil, dass, wenn, ob … wandert das Verb ans Ende. Vor der Konjunktion steht ein Komma.","After weil, dass, wenn, ob … the verb goes to the end. A comma goes before the conjunction."],
 nvorn:["Steht der Nebensatz vorne, ist er Platz 1: nach dem Komma sofort das Verb des Hauptsatzes – Verb, Komma, Verb.","A subordinate clause in front is position 1: right after the comma comes the main verb – verb, comma, verb."],
 konn:["deshalb, trotzdem, dann besetzen Platz 1 – also direkt danach das Verb, erst dann das Subjekt.","deshalb, trotzdem, dann take position 1 – so the verb follows directly, then the subject."],
 hh:["und, aber, oder, denn, sondern zählen nicht mit – danach baust du einen ganz normalen Satz.","und, aber, oder, denn, sondern don't count – after them build a completely normal sentence."],
 zu:["„zu“ + Infinitiv kommt ganz ans Ende; bei trennbaren Verben steht zu in der Mitte (anzurufen).","\"zu\" + infinitive goes at the very end; with separable verbs zu goes in the middle (anzurufen)."],
 rel:["Relativsatz: das Relativpronomen direkt nach dem Nomen, das Verb ans Ende, Kommas auf beiden Seiten.","Relative clause: the pronoun right after the noun, the verb at the end, commas on both sides."],
 fut:["werden auf Platz 2, der Infinitiv ganz am Ende – wie beim Modalverb.","werden in position 2, the infinitive at the very end – like with a modal verb."],
 pass:["Passiv: werden/wurde auf Platz 2, das Partizip ans Ende. Wer es tut, steht mit „von“ in der Mitte.","Passive: werden/wurde in position 2, the participle at the end; the doer goes in the middle with \"von\"."],
 k2:["würde / könnte / hätte auf Platz 2, der Infinitiv ans Ende. Bei „wenn …, würde …“: Verb, Komma, Verb.","würde / könnte / hätte in position 2, the infinitive at the end. With \"wenn …, würde …\": verb, comma, verb."],
 ind:["Indirekte Frage: Fragewort oder „ob“ nach dem Komma, das Verb ganz ans Ende.","Indirect question: question word or \"ob\" after the comma, the verb at the very end."],
 refl:["Das Reflexivpronomen (mich, dich, sich …) steht so weit vorne wie möglich – direkt nach Verb oder Subjekt.","The reflexive pronoun (mich, dich, sich …) goes as far forward as possible – right after the verb or subject."],
 any:["Such zuerst das konjugierte Verb: im Hauptsatz auf Platz 2, im Nebensatz ganz am Ende.","Find the conjugated verb first: position 2 in a main clause, at the very end in a subordinate clause."]};
const TOPICK={imp:"imp",refl:"refl",trenn:"trenn",passiv:"pass",modal:"modal",zuinf:"zu",neg:"nicht",rel:"rel",k2:"k2",indirekt:"ind",frage:"wf",konj:"neben"};
function ruleKey(S){if(TIP[S.rule])return S.rule;if(S.topic&&TOPICK[S.topic])return TOPICK[S.topic];const r=String(S.rule||"");
 const k=/Relativ/i.test(r)?"rel":/Passiv/i.test(r)?"pass":/Konjunktiv|würde|hätte|könnte/i.test(r)?"k2":/Futur/i.test(r)?"fut":/Perfekt|Partizip|Plusquam/i.test(r)?"perf":/zu \+|Infinitiv mit zu|um … zu/i.test(r)?"zu":/Modal/i.test(r)?"modal":/reflexiv/i.test(r)?"refl":/Dativ|Akkusativ/i.test(r)?"dat":/trennbar/i.test(r)?"trenn":/Imperativ/i.test(r)?"imp":/indirekt/i.test(r)?"ind":/Nebensatz|weil|dass|obwohl|wenn/i.test(r)?"neben":/nicht|kein/i.test(r)?"nicht":/TeKaMoLo/i.test(r)?"tkml":/Frage/i.test(r)?"wf":"any";
 return k}
const tipOf=S=>TIP[ruleKey(S)];
const whyHtml=S=>{const L=why(S),T=tipOf(S);return `${L.length?`<div class="sb-why"><b>Warum diese Reihenfolge?</b><ul>${L.map(([de,en])=>`<li>${de}<small>${en}</small></li>`).join("")}</ul></div>`:""}<div class="sb-tip2">💡 <b>Tipp:</b> ${esc(T[0])}<small>${esc(T[1])}</small></div>`};
function finishOne(p,ok){halt();const S=cur(),R=ruleOf(S);G.score+=p;G.res[G.i]=p;G.done=true;G.times=G.times||[];G.times[G.i]=el()-(G.sStart||0);
 G.streak=p===1?G.streak+1:0;G.bestStreak=Math.max(G.bestStreak,G.streak);
 /* two wrong tries: your sentence stays in the box (green = right place, red = wrong), the right one is shown below it */
 if(!ok){const b=best();G.failed=true;G.fixB=b;G.marks=G.ans.map((id,j)=>G.tiles[id].k===S.sols[b][j]);G.pool=[]}
 const praise=["Super!","Richtig!","Genau!","Perfekt!","Sehr gut!"][Math.floor(Math.random()*5)];
 G.msg=`<div class="${p===1?"sb-good":p?"sb-half":"sb-bad"}"><b>${p===1?praise+" +1":p?"Richtig – +½":"Leider nicht – 0 Punkte"}</b>${G.streak>=3?` <span class="sb-fire">🔥 ${G.streak} in Folge!</span>`:""}
  ${ok?`<div class="sb-sol">✓ <b>${esc(built())}</b></div>`:`<div class="sb-sol">Oben steht deine Antwort – grün = richtiger Platz, rot = falscher Platz. Die richtige Lösung steht darunter.</div>`}
  ${!ok&&S.show.length>1?`<div class="sb-sol"><small>Auch richtig: ${S.show.filter((_,i)=>i!==G.fixB).map(esc).join(" · ")}</small></div>`:""}
  ${ok&&S.show.length>1?`<div class="sb-sol"><small>Auch richtig: ${S.show.filter(x=>x!==built()).map(esc).join(" · ")}</small></div>`:""}
  <div class="sb-rule">📏 ${esc(R[0])}${R[1]?`<span>${esc(R[1])}</span>`:""}</div>${whyHtml(S)}</div>`;
 draw();say(built())}
/* the sentence as built – after two wrong tries the right one (for the paragraph and ▶ Anhören) */
function built(){const S=cur();if(G.failed)return S.show[G.fixB||0];const a=G.ans.map(id=>G.tiles[id].k).join("|"),i=S.sols.findIndex(x=>x.join("|")===a);return i>=0?S.show[i]:sentence(G.ans.map(id=>G.tiles[id].t),S.end)}
/* the right order as blocks, under a wrong answer */
function fixTiles(){const S=cur(),used=new Set();return S.sols[G.fixB||0].map(k=>{const t=G.tiles.find(t=>t.k===k&&!used.has(t.id));if(!t)return"";used.add(t.id);return `<span class="sb-tile right">${esc(t.t)}</span>`}).join("")+`<span class="sb-end">${S.end}</span>`}
function say(t){try{const sy=window.speechSynthesis;if(!sy)return;sy.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="de-DE";u.rate=(window.rate||1)*.9;
 const v=typeof voiceFor==="function"?voiceFor():null;if(v)u.voice=v;sy.speak(u)}catch(e){}}
function hint(){const S=cur(),s=S.sols[best()];let n=0;while(n<G.ans.length&&G.tiles[G.ans[n]].k===s[n])n++;
 G.pool=G.pool.concat(G.ans.splice(n));const next=G.pool.find(id=>G.tiles[id].k===s[n]);
 G.pool=G.pool.filter(id=>id!==next);G.ans.push(next);G.hint=true;G.marks=null;const T=tipOf(S);G.msg=`<div class="sb-tip">💡 Die ersten ${n+1} ${n?"Blöcke stehen":"Block steht"} jetzt richtig.<br><b>Tipp:</b> ${esc(T[0])}<small>${esc(T[1])}</small></div>`;draw()}

function drawTopicEnd(){halt();G.over=true;const s=G.score,n=G.items.length,ms=el(),r=s/n,k=r>=1?3:r>=.7?2:r>=.5?1:0,old=st("tbest:"+G.topic),isBest=old==null||s>old;
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
function drawEnd(){if(G.topic){drawTopicEnd();return}G.over=true;const s=G.score,k=stars(s),bestOld=st("best:"+G.lv),isBest=bestOld==null||s>bestOld;if(isBest)sv("best:"+G.lv,s);
 const setOld=setBest(G.lv,G.set);if(setOld==null||s>setOld)sv("set:"+G.lv+":"+G.set,s);sv("last:"+G.lv,G.set);sv("run",null);
 const played=SB[G.lv].filter((_,x)=>setBest(G.lv,x)!=null).length;
 halt();const ms=el(),tOld=st("settime:"+G.lv+":"+G.set),better=setOld==null||s>setOld||(s===setOld&&(tOld==null||ms<tOld));if(better)sv("settime:"+G.lv+":"+G.set,ms);
 const LB=lbAdd({id:Date.now()+"-"+Math.random().toString(36).slice(2,6),lv:G.lv,name:player(),s,ms,set:G.set,date:new Date().toLocaleDateString("de-DE")});
 const games=(st("games:"+G.lv)||0)+1;sv("games:"+G.lv,games);
 const msg=s>=10?"Perfekt! Alle Sätze richtig – du hast die Wortstellung im Griff.":s>=8?"Sehr gut! Nur noch kleine Lücken.":s>=6?"Gut gemacht! Schau dir die Regeln bei den Fehlern noch einmal an.":s>=4?"Ein guter Anfang – übe die Regeln unten und spiel noch eine Runde.":"Nicht aufgeben! Lies die Regeln unten und versuch es gleich noch einmal.";
 const nextLv={A1:"A2",A2:"B1","A1+":"A2+","A2+":"B1+"}[G.lv];
 ov.innerHTML=`<div class="sb-top"><b>🧩 ${G.lv} · Set ${G.set+1} geschafft</b><span></span><button type="button" class="sb-x" data-go="close" aria-label="Schließen">✕</button></div>
 <div class="sb-body sb-endb">${s>=10?`<div class="sb-confetti" aria-hidden="true">${[..."🎉✨🎊⭐".repeat(6)].map((c,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%8)*.12}s">${c}</i>`).join("")}</div>`:""}
  <div class="sb-stars">${"★".repeat(k)}<i>${"★".repeat(3-k)}</i></div>
  <div class="sb-big"><b>${num(s)}</b> / ${N}</div>
  <div class="sb-time">⏱ ${fmt(ms)}${tOld!=null&&s>=setOld&&ms<tOld?` · <b>schneller als dein bestes Set ${G.set+1} (${fmt(tOld)})</b>`:""}</div>
  <div class="sb-place">🏆 Platz <b>${LB.place}</b> von ${LB.of} in der Bestenliste ${G.lv}${LB.place===1?" – Spitze!":""}</div>
  <p class="sb-lead">${msg}</p>
  <p class="sb-sub">${isBest&&bestOld!=null?"🏆 Neue Bestleistung! ":""}Bestleistung ${G.lv}: ${num(Math.max(s,bestOld||0))} / ${N}${G.bestStreak>=3?` · 🔥 ${G.bestStreak} richtig in Folge`:""} · ${played} von ${SB[G.lv].length} Sets gespielt${setOld!=null&&s>setOld?` · Set ${G.set+1}: besser als vorher (${num(setOld)})`:""}</p>
  ${dots()}
  <details class="sb-lbbox" open><summary>🏆 Bestenliste ${G.lv} · Top 5</summary>${lbTable(G.lv,LB.id,5)}</details>
  <ol class="sb-list">${G.items.map((S,i)=>{const r=G.res[i];return `<li class="${r===1?"ok":r?"half":"no"}"><span>${r===1?"✓":r?"½":"✗"}</span><div><b>${esc(S.show[0])}</b><small>${esc(S.en)}${G.times&&G.times[i]!=null?` · ⏱ ${Math.max(1,Math.round(G.times[i]/1000))} s`:""}</small>${r===1?"":`<em>📏 ${esc((SBR[S.rule]||[""])[0])}</em>`}</div></li>`}).join("")}</ol>
  <div class="sb-row"><button type="button" class="sb-btn main" data-go="new">✨ Neues Set ›</button><button type="button" class="sb-btn" data-set="${G.set}">↻ Set ${G.set+1} nochmal</button>${nextLv&&s>=7?`<button type="button" class="sb-btn" data-lv="${nextLv}">Weiter zu ${nextLv} ›</button>`:""}<button type="button" class="sb-btn" data-go="menu">☰ Übersicht</button></div>
 </div>`}

/* ---- tap and drag ---- */
/* drag: one block on the move. A touch the phone cancels (switching apps, the home
   gesture, a call) ends it without moving anything – otherwise the next tap would
   be taken as the end of that old drag and swallowed (✕ "did nothing"). */
let drag=null,moved=false,movedAt=0;
function endDrag(){document.removeEventListener("pointermove",onMove);document.removeEventListener("pointerup",onUp);document.removeEventListener("pointercancel",endDrag);
 if(drag){if(drag.ghost)drag.ghost.remove();if(drag.el)drag.el.classList.remove("sb-lift")}
 if(ov)ov.querySelectorAll("[data-zone].over").forEach(x=>x.classList.remove("over"));drag=null}
addEventListener("blur",endDrag);addEventListener("pagehide",endDrag);
document.addEventListener("visibilitychange",()=>{if(document.hidden)endDrag()});
function onClick(e){if(moved){moved=false;if(Date.now()-movedAt<400)return}const b=e.target.closest("button");if(!b||!G)return;
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
 if(b.dataset.dot!=null){goTo(+b.dataset.dot);return}
 if(g==="prev"){goTo(G.i-1);return}
 if(g==="fwd"){goTo(G.i+1);return}
 if(g==="next"){nextOpen();return}
 if(g==="say"){say(built());return}
 if(g==="check"){check();return}
 if(g==="hint"){hint();return}
 if(g==="reset"){G.pool=G.pool.concat(G.ans);G.ans=[];G.marks=null;G.msg="";draw();return}
 if(b.classList.contains("sb-tile")&&!G.done){const id=+b.dataset.id;
  if(b.dataset.where==="pool"){G.pool=G.pool.filter(x=>x!==id);G.ans.push(id)}else{G.ans=G.ans.filter(x=>x!==id);G.pool.push(id)}
  G.marks=null;if(!(G.tries===1))G.msg="";draw()}}
function onDown(e){if(drag)endDrag();const b=e.target.closest(".sb-tile");if(!b||!G||G.menu||G.done)return;
 drag={id:+b.dataset.id,pid:e.pointerId,x:e.clientX,y:e.clientY,el:b,ghost:null};moved=false;
 document.addEventListener("pointermove",onMove);document.addEventListener("pointerup",onUp);document.addEventListener("pointercancel",endDrag)}
function onMove(e){if(!drag||e.pointerId!==drag.pid)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(!drag.ghost){if(Math.hypot(dx,dy)<8)return;const r=drag.el.getBoundingClientRect();drag.ghost=drag.el.cloneNode(true);drag.ghost.classList.add("sb-ghost");
  Object.assign(drag.ghost.style,{width:r.width+"px",left:r.left+"px",top:r.top+"px"});drag.ox=e.clientX-r.left;drag.oy=e.clientY-r.top;document.body.appendChild(drag.ghost);drag.el.classList.add("sb-lift")}
 e.preventDefault();drag.ghost.style.left=(e.clientX-drag.ox)+"px";drag.ghost.style.top=(e.clientY-drag.oy)+"px";
 const z=zoneAt(e.clientX,e.clientY);ov.querySelectorAll("[data-zone]").forEach(x=>x.classList.toggle("over",x===z))}
function zoneAt(x,y){const el=document.elementFromPoint(x,y);return el&&el.closest?el.closest("[data-zone]"):null}
function onUp(e){const d=drag;if(!d||e.pointerId!==d.pid)return;const had=!!d.ghost;endDrag();if(!had||!G||G.done)return;
 moved=true;movedAt=Date.now();setTimeout(()=>{moved=false},50);
 const z=zoneAt(e.clientX,e.clientY),id=d.id;G.ans=G.ans.filter(x=>x!==id);G.pool=G.pool.filter(x=>x!==id);
 if(z&&z.dataset.zone==="ans"){const tiles=[...z.querySelectorAll(".sb-tile")].filter(t=>+t.dataset.id!==id);let at=tiles.length;
  for(let i=0;i<tiles.length;i++){const r=tiles[i].getBoundingClientRect();if(e.clientY<r.top||(e.clientY<=r.bottom&&e.clientX<r.left+r.width/2)){at=i;break}}
  G.ans.splice(at,0,id)}else G.pool.push(id);
 G.marks=null;draw()}

/* ---- the start card on a page ---- */
function card(){const R=runGet(),n=l=>SB[l].filter((_,k)=>setBest(l,k)!=null).length;
 return `<section class="sb-card"><div class="sb-ch"><span class="sb-ico">🧩</span><div><b>Satzbau-Spiel</b><small>Bring die Blöcke in die richtige Reihenfolge – je Level 20 Sets mit 10 Sätzen, 1 Punkt pro Satz. So lernst du die deutsche Wortstellung.</small></div></div>
  ${R?`<button type="button" class="sb-go" data-sbresume="1">▶ Weiterspielen <small>${R.lv} · Set ${R.set+1} · Satz ${R.i+1} von ${R.order.length}</small></button>`:""}
  <div class="sb-lvls">${Object.keys(LV).map(l=>`<button type="button" class="sb-lv" data-sblv="${l}"><b>${LV[l][0]}</b><span>${LV[l][1]}</span><small>${n(l)} von ${SB[l].length} Sets</small></button>`).join("")}</div></section>`}
document.addEventListener("click",e=>{const b=e.target.closest("[data-sblv]");if(b)open(b.dataset.sblv);if(e.target.closest("[data-sbresume]"))resume();
 const t=e.target.closest("[data-sbtopic]");if(t)topic(t.dataset.sbtopic,t.dataset.sbtitle)});
addEventListener("keydown",e=>{if(e.key==="Escape"&&G)close();
 if(G&&!G.menu&&G.items&&G.i<G.items.length&&ov&&!ov.hidden&&!/INPUT|TEXTAREA/.test((e.target&&e.target.tagName)||"")){if(e.key==="ArrowLeft")goTo(G.i-1);if(e.key==="ArrowRight")goTo(G.i+1)}});
let away=null;
addEventListener("message",e=>{if(e.origin!==location.origin||!e.data||!("dlShown" in e.data))return;
 if(!e.data.dlShown){if(G&&ov&&!ov.hidden){away=G.over?null:G.menu?{menu:G.lv}:G.topic?{topic:G.topic,title:G.title}:{game:1};close()}return}
 if(away){const a=away;away=null;if(a.menu)open(a.menu);else if(a.topic)topic(a.topic,a.title);else resume()}});

const css=document.createElement("style");css.textContent=`
.sb-card{margin:14px 0;padding:14px 16px;border-radius:16px;border:1.5px solid var(--line);background:linear-gradient(135deg,color-mix(in srgb,var(--b1) 12%,var(--paper)),color-mix(in srgb,var(--a1) 12%,var(--paper)))}
.sb-ch{display:flex;gap:12px;align-items:center}.sb-ico{font-size:34px}.sb-ch b{font-size:19px;font-family:"Bricolage Grotesque",sans-serif}.sb-ch small{display:block;color:var(--muted);font-size:14px}
.sb-lvls{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.sb-lv{font:inherit;text-align:left;border:1.5px solid var(--line);border-radius:12px;background:var(--paper);color:var(--ink);padding:9px 11px;cursor:pointer}
.sb-lv b{display:block;font-size:18px;color:var(--b1)}.sb-lv span{display:block;font-size:13px;line-height:1.3}.sb-lv small{display:block;margin-top:4px;font-size:12px;color:var(--muted)}
@media (max-width:560px){.sb-lv span{display:none}.sb-lv{text-align:center;padding:8px 6px}.sb-ch small{font-size:13px}.sb-ico{font-size:28px}}
body.sb-on{overflow:hidden}
.sb-ticon{position:relative;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;margin-left:6px;vertical-align:middle;font-size:18px;line-height:1;border-radius:50%;border:1.5px solid color-mix(in srgb,var(--b1) 45%,var(--line));background:linear-gradient(135deg,color-mix(in srgb,var(--b1) 16%,var(--paper)),color-mix(in srgb,var(--a1) 16%,var(--paper)));cursor:pointer;padding:0;-webkit-touch-callout:none;user-select:none}
.sb-ticon.run{border-color:#e8590c}
.sb-tbadge{position:absolute;right:-9px;bottom:-5px;font-style:normal;font-size:9.5px;line-height:1.35;font-weight:800;padding:0 4px;border-radius:999px;background:#1b8a4c;color:#fff;white-space:nowrap;border:1.5px solid var(--paper)}
/* a test is running: a small orange dot, like a notification */
.sb-tdot{position:absolute;top:-2px;right:-2px;width:11px;height:11px;border-radius:50%;background:#e8590c;border:2px solid var(--paper)}
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
.sb-ov[hidden]{display:none}
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
.sb-n{font-size:13px;color:var(--muted);text-align:center}
.sb-para{font-size:16.5px;line-height:1.6;padding:12px 14px;border-radius:12px;background:var(--surface);border-left:4px solid var(--b1);margin-bottom:6px}
.sb-gap{display:inline;padding:1px 6px;border-radius:6px;background:color-mix(in srgb,var(--b1) 16%,var(--paper));color:var(--b1);font-weight:700;letter-spacing:.05em}
.sb-gap.filled{letter-spacing:normal;background:color-mix(in srgb,#1b8a4c 16%,var(--paper));color:var(--ink)}.sb-en{font-size:18px;text-align:center;margin:4px 0 14px;font-style:italic}
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
.sb-nav{display:flex;align-items:center;justify-content:center;gap:10px}
.sb-nb{font:inherit;font-size:20px;line-height:1;width:34px;height:30px;border-radius:9px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer}
.sb-nb:disabled{opacity:.35;cursor:default}
.sb-dot{border:0;background:none;padding:7px 0;margin:0;cursor:pointer}
.sb-dot::before{content:"";display:block;width:22px;height:8px;border-radius:4px;background:var(--line)}
.sb-dot.now::before{background:var(--b1)}.sb-dot.ok::before{background:#1b8a4c}.sb-dot.half::before{background:#d99a00}.sb-dot.no::before{background:#c62f45}
.sb-dot.cur::before{box-shadow:0 0 0 2px var(--paper),0 0 0 4px var(--b1)}
.sb-wrongbox{border-color:#c62f45}
.sb-oklab{color:#1b8a4c}
.sb-fix{border-color:#1b8a4c;background:color-mix(in srgb,#1b8a4c 7%,var(--paper))}
.sb-fix .sb-tile{cursor:default}
.sb-why{margin-top:10px;padding:10px 12px;border-radius:12px;background:var(--surface,color-mix(in srgb,var(--ink) 5%,var(--paper)));font-size:15px;color:var(--ink)}
.sb-why ul{margin:6px 0 0;padding-left:20px}.sb-why li{margin:4px 0}
.sb-why small,.sb-tip2 small,.sb-tip small{display:block;font-size:13px;color:var(--muted)}
.sb-tip2{margin-top:8px;padding:9px 12px;border-radius:12px;border-left:5px solid var(--b1);background:color-mix(in srgb,var(--b1) 8%,var(--paper));font-size:15px;color:var(--ink)}
.sb-tip{margin-top:8px}
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
window.Satzbau={open,close,card,topic,topicButton,explain:(row,topic)=>{const S=Object.assign(parse(row),topic?{topic}:{});return {why:why(S),tip:tipOf(S)}}};
})();
