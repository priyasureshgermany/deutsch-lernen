/* Hilfe: a round "?" at the start of the A1/B1 tool row. It opens a short
   explanation of every button, each shown as it looks on the page, in German
   with English below. Until it has been opened once, the "?" pulses gently.

     Hilfe({level, row, cards, test})
       row    the tool row (.toggles) – the "?" goes first
       cards  the Karten button, test the Modelltest pill (shown as they look) */
(function(){
const SEEN="dl:helpSeen";
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const CSS=`
.hlp-q{touch-action:manipulation;font:inherit;font-size:16px;font-weight:900;width:34px;height:34px;flex:none;border-radius:50%;border:2px solid var(--b1);background:var(--b1);color:#fff;cursor:pointer;line-height:1;padding:0}
.hlp-q.new{animation:hlpPulse 1.8s ease-in-out infinite}
@keyframes hlpPulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--b1) 55%,transparent)}50%{box-shadow:0 0 0 7px transparent}}
@media (prefers-reduced-motion:reduce){.hlp-q.new{animation:none}}
dialog.hlp{width:min(560px,calc(100vw - 20px));max-height:calc(100dvh - 24px);margin:12px auto auto;padding:0;border:1px solid var(--line);border-radius:16px;background:var(--paper);color:var(--ink);overflow:hidden}
dialog.hlp[open]{display:flex;flex-direction:column}
dialog.hlp::backdrop{background:rgba(10,14,24,.45)}
.hlp-h{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--line)}
.hlp-h b{flex:1;font-size:17px}
.hlp-x{touch-action:manipulation;font:inherit;font-size:17px;width:34px;height:34px;border-radius:50%;border:none;background:var(--surface);color:var(--ink);cursor:pointer}
.hlp-b{overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:6px 14px 16px}
.hlp-g{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);margin:14px 0 4px}
.hlp-r{display:grid;grid-template-columns:96px 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px dashed var(--line)}
.hlp-r:last-child{border-bottom:none}
.hlp-k{display:flex;flex-wrap:wrap;gap:4px;align-items:center;justify-content:flex-start;pointer-events:none}
.hlp-k>*{margin:0!important;animation:none!important}
.hlp-k .tg{font-size:13px;padding:4px 9px}
.hlp-k .tg .sm{display:none}.hlp-k .tg .lg{display:inline}
.hlp-t{font-size:15px;line-height:1.4}
.hlp-t i{display:block;color:var(--muted);font-size:13px;margin-top:2px}
.hlp-word{font-weight:700;border-bottom:2px dotted var(--b1)}
.hlp-chip{display:inline-block;font-size:12px;font-weight:700;padding:2px 7px;border-radius:7px;border:2px solid var(--sk,var(--b1));color:var(--sk,var(--b1))}
.hlp-chip.on{background:var(--sk,var(--b1));color:#fff}
.hlp-ph{background:color-mix(in srgb,var(--a2) 22%,transparent);border-radius:4px;padding:0 3px;font-weight:700}
.hlp-dots{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;border:1px solid var(--line);font-weight:900;color:var(--muted)}
.hlp-tip{margin:12px 0 0;padding:10px 12px;border-radius:12px;background:var(--surface);font-size:14px}
@media (max-width:420px){.hlp-r{grid-template-columns:78px 1fr}}`;

function Hilfe(o){
 if(!o||!o.row)return;
 const st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
 const q=document.createElement("button");q.type="button";q.className="hlp-q"+(get(SEEN)?"":" new");q.textContent="?";
 q.title="Was machen die Knöpfe?";q.setAttribute("aria-label","Hilfe: Was machen die Knöpfe?");q.setAttribute("aria-haspopup","dialog");
 o.row.prepend(q);
 const d=document.createElement("dialog");d.className="hlp";d.setAttribute("aria-labelledby","hlpH");
 /* the buttons as they look on the page (copies, not clickable) */
 const look=el=>{if(!el)return "";const c=el.cloneNode(true);c.removeAttribute("id");c.setAttribute("tabindex","-1");c.setAttribute("aria-hidden","true");return c.outerHTML};
 const tg=(cls,pressed,label)=>`<span class="tg ${cls}" aria-pressed="${pressed}" aria-hidden="true">${label}</span>`;
 const say=document.querySelector("button.say");
 const row=(k,de,en)=>`<div class="hlp-r"><div class="hlp-k">${k}</div><div class="hlp-t">${de}<i>${en}</i></div></div>`;
 const B=o.level==="B1";
 d.innerHTML=`<div class="hlp-h"><b id="hlpH">So funktionieren die Knöpfe</b><button type="button" class="hlp-x" aria-label="Schließen">✕</button></div>
 <div class="hlp-b">
  <div class="hlp-g">Oben in der Leiste</div>
  ${row(look(o.cards),"<b>Karten</b>: eine Aufgabe pro Bildschirm – gut fürs Handy. Mit ‹ › blättern; zweimal schnell tippen = erste bzw. letzte Karte.","Cards: one task per screen. ‹ › to move; double-tap = first / last card.")}
  ${row(tg("en","true","EN"),"<b>Englisch</b> für alle Aufgaben ein- oder ausblenden. Standard: aus – jeder Satz hat trotzdem seinen eigenen EN-Knopf.","Show or hide English for everything. Off by default – every sentence still has its own EN button.")}
  ${row(tg("ans","true","Lösung"),"<b>Lösung</b> an: alle Lösungen sofort offen. Aus (Standard): Im Übungsmodus deckst du jede Lösung selbst auf.","Solutions on: all answers open. Off (default): in practice mode you uncover each one yourself.")}
  ${row(tg("practice","true",'<span class="lg">Übungsmodus</span>'),"<b>Übungsmodus</b> (Standard: an): Hörtexte und Lösungen sind verdeckt. ▶ hören, Antwort überlegen, dann auf „Tippen zum Aufdecken“ tippen.","Practice mode (on by default): texts and answers are covered. Listen, answer, then tap to uncover.")}
  ${row(tg("multi","true",'<span class="lg">Mehrere Wörter</span>'),"<b>Mehrere Wörter</b>: tippe mehrere Wörter in einem Satz an, dann „Übersetzen“ – für Ausdrücke wie „sich freuen auf“.","Several words: tap words in a sentence, then “Übersetzen” – for phrases.")}
  ${row(look(o.test),`<b>Test</b>: ${B?"ganze DTZ-Prüfung":"ganze Prüfung"} mit Zeit und Punkten. Du kannst Teile einzeln machen und später weitermachen; die Auswertung zeigt, ab wann du bestehst.`,"Mock exam with time and marks. Do parts one by one and continue later; the result shows the pass marks.")}
  <div class="hlp-g">In den Aufgaben</div>
  ${row(say?look(say):"▶","<b>Vorlesen</b>: liest den Text vor. Noch einmal tippen = Stopp. Langsamer oder schneller: ⋯ oben → Tempo.","Read aloud. Tap again to stop. Speed: ⋯ at the top → Tempo.")}
  ${row('<span class="trb" aria-hidden="true">Englisch zeigen</span>',"<b>Englisch zeigen</b>: Übersetzung nur für diesen einen Satz.","English for this one sentence only.")}
  ${row('<span class="hlp-word">Wort</span>',"<b>Ein Wort antippen</b>: Übersetzung, bei Nomen mit Artikel und Plural.","Tap any word: translation; nouns with article and plural.")}
  ${row('<span class="hlp-ph">[Name]</span>',"<b>[Platzhalter]</b>: hier gehören deine Angaben hin. Einmal unter ⋯ → Meine Angaben eintragen – dann stehen sie überall (nur auf deinem Handy gespeichert).","Placeholders: enter your details once under ⋯ → Meine Angaben (kept on your phone only).")}
  ${row('<span class="hlp-chip sk-hoeren on">Hören</span><span class="hlp-chip sk-lesen">Lesen</span>',"<b>Hören · Lesen · Schreiben · Sprechen</b>: springt zum Prüfungsteil. Jeder hat seine Farbe; der Teil, den du gerade liest, ist ausgefüllt.","Jump to a part. Each has its colour; the part you are reading is filled.")}
  <div class="hlp-g">Ganz oben in der App</div>
  ${row('<span class="hlp-dots">⋯</span>',"<b>Mehr</b>: Tempo (normal / langsam), Darstellung (hell / dunkel), Meine Angaben, Übersetzen (Deutsch ⇄ Englisch), App teilen und <b>Feedback</b> – Fehler melden oder Ideen schicken.","More: speed, light/dark, your details, translator, share, and feedback / report a bug.")}
  <p class="hlp-tip">Tipp: Übe zuerst mit dem Übungsmodus Teil für Teil – dann mach einen Modelltest mit Zeit. <i style="display:block;color:var(--muted);font-size:13px">Tip: practise part by part first, then take a timed mock exam.</i></p>
 </div>`;
 document.body.appendChild(d);
 const close=()=>{try{d.close()}catch(e){d.removeAttribute("open")}};
 q.onclick=()=>{set(SEEN,"1");q.classList.remove("new");try{d.showModal()}catch(e){d.setAttribute("open","")}d.querySelector(".hlp-b").scrollTop=0};
 d.querySelector(".hlp-x").onclick=close;
 d.addEventListener("click",e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();
  if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()});
 return {button:q,dialog:d}}
window.Hilfe=Hilfe;
})();
