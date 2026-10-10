/* Exam facts for the A1 and B1 pages: points per question, per part and per
   Prüfungsteil, time, how often a recording plays, and how the exam is
   passed. Each page holds its own EXAM data (next to its S) and uses these
   helpers for the list (overview table, a line under each part) and for the
   cards (the strip on top and the ⓘ panel).

   EXAM = {title, rows:[[label,value]…] (totals, pass mark …),
           skills:[{time, pts, parts:[{n, per} | {whole} | {none}, play?, note?]}]}
     n × per   the exam has n questions worth per points each
     whole     points for the whole part (writing / speaking)
     none      practice material only, no points of its own
     each      what one card is worth, when "… für den Teil" is not right
     f         raw points → exam points (A1: × 5/3, so 15 raw points = 25 points);
               parts with f are shown in exam points, the raw points small */
(function(){
const num=x=>String(Math.round(x*10)/10).replace(".",",");
const rp=x=>`${num(x)} ${x===1?"Rohpunkt":"Rohpunkte"}`;
const pt=x=>`${num(x)} ${x===1?"Punkt":"Punkte"}`;
const e=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const Exam={
 pt,
 /* What one question on a card is worth. */
 each(x){if(x.none)return"";if(x.each)return x.each;
  if(x.f)return x.whole!=null?`≈ ${pt(x.whole*x.f)} für den Teil`:rp(x.per);
  return x.whole!=null?`${pt(x.whole)} für den Teil`:pt(x.per)},
 /* The part as a whole, for the list and the ⓘ panel. */
 part(x){if(x.none)return"Keine eigenen Punkte";
  if(x.f){const raw=x.whole!=null?x.whole:x.n*x.per;return `≈ ${pt(raw*x.f)}`+(x.whole!=null?` für den ganzen Teil (${rp(raw)})`:` (${x.n} Aufgaben × ${rp(x.per)})`)}
  return x.whole!=null?`${pt(x.whole)} für den ganzen Teil`:`${x.n} Aufgaben × ${pt(x.per)} = ${pt(x.n*x.per)}`},
 line(x){return `<div class="xline"><b>${e(this.part(x))}</b>${x.play?` · ${e(x.play)}`:""}${x.note?` · ${e(x.note)}`:""}</div>`},
 /* "Prüfung im Überblick" under the page intro. */
 overview(EX,S){
  return `<details class="xov"><summary>Prüfung im Überblick: Punkte und Zeit</summary>`+
   S.map((sk,i)=>{const k=EX.skills[i];return `<div class="xsk"><div class="xt"><b>${e(sk.de)}</b><b class="xn">${e(k.pts)}</b></div><div class="xm">${e(k.time)}</div><div class="xp">${sk.parts.map((p,j)=>`<div>${e(p.t.split(" – ")[0])}: ${e(this.part(k.parts[j]))}${k.parts[j].play?" · "+e(k.parts[j].play):""}</div>`).join("")}</div></div>`}).join("")+
   `<div class="xsum">${EX.rows.map(([a,b])=>`<div class="xrow"><span>${e(a)}</span><b>${e(b)}</b></div>`).join("")}</div></details>`},
 /* The strip on top of a card: where it is, what it is worth, how often it plays. */
 strip(EX,S,d){const sk=S[d.si],p=sk.parts[d.pi],x=EX.skills[d.si].parts[d.pi];
  return `<span>${e(sk.de)} · ${e(p.t.split(" – ")[0])}</span><span>Aufgabe ${d.j+1} / ${p.rows.length}</span>${x.none?"":`<span class="xpts">${e(this.each(x))}</span>`}${x.play?`<span>${e(x.play)}</span>`:""}`},
 /* The ⓘ panel: the instruction, then the facts for this part, its
    Prüfungsteil and the whole exam. */
 info(EX,S,d,intro){const sk=S[d.si],p=sk.parts[d.pi],k=EX.skills[d.si],x=k.parts[d.pi];
  const facts=[["Dieser Teil",this.part(x)+(x.play?" · "+x.play:"")]];
  if(x.n&&x.n!==p.rows.length)facts.push(["Zum Üben hier",`${p.rows.length} Aufgaben (in der Prüfung ${x.n})`]);
  if(x.note)facts.push(["Hinweis",x.note]);
  facts.push([sk.de,`${k.pts} · ${k.time} · ${sk.parts.length} Teile`]);
  EX.rows.forEach(r=>facts.push(r));
  return `<div class="xh">${e(sk.de)} – ${e(p.t)}</div>${intro}<dl class="xf">${facts.map(([a,b])=>`<dt>${e(a)}</dt><dd>${e(b)}</dd>`).join("")}</dl>`}};
/* List styles: the overview under the intro and the line under each part. */
const st=document.createElement("style");
st.textContent=`.xov{margin-top:12px;max-width:62ch;border:1px solid var(--line);border-left:4px solid var(--b1);border-radius:10px;padding:8px 12px;background:color-mix(in srgb,var(--b1) 6%,var(--paper))}
.xov summary{cursor:pointer;font-weight:700;color:var(--b1)}
.xsk{padding:8px 0;border-bottom:1px solid var(--line)}
.xt{display:flex;justify-content:space-between;gap:12px;align-items:baseline}
.xt .xn{color:var(--b1);white-space:nowrap}
.xm{font-size:13px;color:var(--muted)}
.xp{font-size:13px;margin-top:3px}
.xsum{margin-top:6px}
.xrow{display:grid;grid-template-columns:6.5em 1fr;gap:8px;font-size:14px;padding:4px 0;border-bottom:1px dashed var(--line)}
.xrow:last-child{border-bottom:none}
.xrow span{color:var(--muted);font-weight:700}
.xline{font-size:14px;color:var(--muted);margin:2px 0 6px;padding-left:10px;border-left:3px solid var(--b1)}
.xline b{color:var(--b1)}`;
document.head.appendChild(st);
window.Exam=Exam;
})();
