// Checks the logic behind Üben (ueben-lib.js):  node tools/check-ueben.mjs
// Diktat finds every kind of difference, Aussprache is loose in the right
// places, every level has sentences, and the verb tables are right for a set
// of known forms (and never build impossible ones like "verpassst").
import { readFileSync } from "node:fs";
const window = {};
for (const f of ["../woerter-lex.js", "../satzbau-data.js", "../saetze-data.js", "../ueben-lib.js"])
  new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
const UL = window.UL;
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const eq = (w, a, b) => { if (JSON.stringify(a) !== JSON.stringify(b)) fail(w, "got " + JSON.stringify(a) + ", want " + JSON.stringify(b)); };

/* Diktat */
const kinds = (t, g) => UL.diktat(t, g).filter(x => x.kind !== "ok").map(x => x.kind + ":" + (x.t || x.g));
eq("diktat same", kinds("Ich trinke gern Kaffee.", "Ich trinke gern Kaffee."), []);
eq("diktat umlaut", kinds("Wir fahren über die Brücke.", "Wir fahren uber die Bruecke."), ["uml:über", "uml:Brücke"]);
eq("diktat ß", kinds("Die Straße ist groß.", "Die Strasse ist gross."), ["uml:Straße", "uml:groß"]);
eq("diktat noun case", kinds("Ich habe einen Termin.", "ich habe einen termin."), ["case:Ich", "case:Termin"]);
eq("diktat missing word", kinds("Ich gehe heute ins Kino.", "Ich gehe ins Kino."), ["miss:heute"]);
eq("diktat extra word", kinds("Ich gehe ins Kino.", "Ich gehe heute ins Kino."), ["extra:heute"]);
eq("diktat punctuation", kinds("Kommst du mit?", "Kommst du mit."), ["punct:?"]);
eq("diktat missing comma", kinds("Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause weil ich krank bin."), ["punct:,"]);
eq("diktat spelling", kinds("Ich wohne in Frankfurt.", "Ich wone in Frankfurt."), ["spell:wohne"]);
eq("diktat quotes ignored", kinds("Er sagt: „Hallo!“", "Er sagt: \"Hallo!\""), []);

/* Aussprache */
const miss = (t, s) => UL.heard(t, s).filter(x => !x.ok).map(x => x.t);
eq("heard same", miss("Wie viel kostet ein Kilo Tomaten?", "wie viel kostet ein Kilo Tomaten"), []);
eq("heard digits", miss("Ich habe zehn Minuten Zeit.", "ich habe 10 Minuten Zeit"), []);
eq("heard compound split", miss("Der Deutschkurs beginnt heute.", "der Deutsch Kurs beginnt heute"), []);
eq("heard umlaut spelling", miss("Ich möchte gern zahlen.", "ich moechte gern zahlen"), []);
eq("heard different", miss("Ich möchte gern zahlen.", "ich möchte gern Zahnarzt"), ["zahlen"]);
eq("heard shows what was heard", UL.heard("Wer vertritt mich, wenn ich weg bin?", "wer vertritt blablub wenn ich weg bin").map(x => x.ok ? "" : x.h).join(""), "blablub");
eq("heard missing", miss("Wir gehen am Samstag in den Zoo.", "wir gehen in den Zoo"), ["am", "Samstag"]);

/* sentences */
for (const lv of ["Alltag", "A1", "A2", "B1"]) {
  const s = UL.sentences(lv);
  if (s.length < 100) fail("sentences " + lv, "only " + s.length);
  s.forEach(x => { if (!/^[A-ZÄÖÜ„"0-9]/.test(x.de) || !/[.!?“"…)]$/.test(x.de)) fail("sentence " + x.id, x.de); });
  const ids = new Set(s.map(x => x.id)); if (ids.size !== s.length) fail("sentences " + lv, "ids repeat");
}

/* verbs */
const V = Object.fromEntries(UL.verbs().map(v => [v.inf, v]));
const want = {
  fahren: { praes: "fahre,fährst,fährt,fahren,fahrt,fahren", perf: "bin gefahren,bist gefahren,ist gefahren,sind gefahren,seid gefahren,sind gefahren", praet: "fuhr,fuhrst,fuhr,fuhren,fuhrt,fuhren" },
  machen: { praes: "mache,machst,macht,machen,macht,machen", praet: "machte,machtest,machte,machten,machtet,machten" },
  arbeiten: { praes: "arbeite,arbeitest,arbeitet,arbeiten,arbeitet,arbeiten", praet: "arbeitete,arbeitetest,arbeitete,arbeiteten,arbeitetet,arbeiteten" },
  verpassen: { praes: "verpasse,verpasst,verpasst,verpassen,verpasst,verpassen" },
  benutzen: { praes: "benutze,benutzt,benutzt,benutzen,benutzt,benutzen" },
  essen: { praet: "aß,aßest,aß,aßen,aßt,aßen", perf: "habe gegessen,hast gegessen,hat gegessen,haben gegessen,habt gegessen,haben gegessen" },
  finden: { praet: "fand,fandest,fand,fanden,fandet,fanden" },
  sein: { praes: "bin,bist,ist,sind,seid,sind", praet: "war,warst,war,waren,wart,waren", perf: "bin gewesen,bist gewesen,ist gewesen,sind gewesen,seid gewesen,sind gewesen" },
  werden: { praet: "wurde,wurdest,wurde,wurden,wurdet,wurden" },
  anrufen: { praes: "rufe an,rufst an,ruft an,rufen an,ruft an,rufen an", praet: "rief an,riefst an,rief an,riefen an,rieft an,riefen an", perf: "habe angerufen,hast angerufen,hat angerufen,haben angerufen,habt angerufen,haben angerufen" },
  aufstehen: { perf: "bin aufgestanden,bist aufgestanden,ist aufgestanden,sind aufgestanden,seid aufgestanden,sind aufgestanden", praet: "stand auf,standest auf,stand auf,standen auf,standet auf,standen auf" },
  können: { praet: "konnte,konntest,konnte,konnten,konntet,konnten" },
  wissen: { praes: "weiß,weißt,weiß,wissen,wisst,wissen", praet: "wusste,wusstest,wusste,wussten,wusstet,wussten" }
};
for (const [inf, w] of Object.entries(want)) {
  if (!V[inf]) { fail(inf, "missing"); continue; }
  for (const t of Object.keys(w)) eq(inf + " " + t, V[inf][t].join(","), w[t]);
}
eq("machen regular", V.machen.reg, true);
eq("fahren irregular", V.fahren.reg, false);
eq("bringen irregular", V.bringen.reg, false);
eq("anrufen separable", V.anrufen.sep, true);
const all = Object.values(V);
for (const v of all) for (const t of ["praes", "perf", "praet"]) {
  if (v[t].length !== 6 || v[t].some(x => !x || /sss|zst|ßst|xst|(.)\1\1/.test(x))) fail(v.inf + " " + t, v[t].join(","));
}
const n = k => all.filter(k).length;
if (n(v => v.reg) < 20 || n(v => !v.reg && !v.sep) < 20 || n(v => v.sep) < 15 || n(v => v.aux === "sein") < 12)
  fail("verb mix", `regular ${n(v => v.reg)}, irregular ${n(v => !v.reg && !v.sep)}, separable ${n(v => v.sep)}, with sein ${n(v => v.aux === "sein")}`);

console.log(bad ? `\n${bad} problem(s)` : `✓ Üben: Diktat, Aussprache, ${["Alltag", "A1", "A2", "B1"].map(l => UL.sentences(l).length).join("/")} sentences, ${all.length} verbs (${n(v => v.reg)} regular, ${n(v => !v.reg && !v.sep)} irregular, ${n(v => v.sep)} separable, ${n(v => v.aux === "sein")} with sein)`);
process.exit(bad ? 1 : 0);
