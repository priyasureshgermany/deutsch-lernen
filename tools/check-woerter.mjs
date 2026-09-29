// Checks woerter-data.js against woerter-lex.js:  node tools/check-woerter.mjs
// Every paragraph must use every word-type group and all four cases; every
// word must have a known tag, a subtype and (for verbs and articles) a table
// of its forms, so no word is left without something to learn from it.
import { readFileSync } from "node:fs";

const window = {};
for (const f of ["../woerter-data.js", "../woerter-lex.js"])
  new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
const { WD, WL } = window;

const POS = ["N", "V", "VT", "P", "A", "J", "ADV", "PR", "PA", "K", "Z", "T"];
const NEED = ["N", "V", "P", "A", "J", "ADV", "PR", "K", "Z", "T"];
const ROLES = ["S", "P", "AO", "DO", "GA", "AB", "PO", "PN", "AT", "K"];
let bad = 0;
const fail = (where, msg) => { bad++; console.log("✗ " + where + ": " + msg); };
const subs = {};

for (const topic of WD) for (const para of topic.p) {
  const where = topic.de + " " + para.lvl;
  const pos = new Set(), cases = new Set(), before = bad;
  let words = 0;
  para.s.forEach(([src, en], si) => {
    if (!en) fail(where, "sentence " + (si + 1) + " has no English");
    for (const raw of src.split("~").map(t => t.trim()).filter(Boolean)) {
      if (!raw.includes("|")) { if (!/^[.,:;!?]$/.test(raw)) fail(where, "odd punctuation " + raw); continue; }
      const [w, tag, c = "", r = "", lemma = "", gl] = raw.split("|");
      const [p, sub] = tag.split(".");
      words++;
      if (!POS.includes(p)) fail(where, w + ": unknown POS " + p);
      if (!ROLES.includes(r)) fail(where, w + ": unknown role " + r);
      if (!gl) fail(where, w + ": no English");
      if (c && !/^[NADG][mfnp]?$/.test(c)) fail(where, w + ": bad case " + c);
      if (["N", "A"].includes(p) && !c && !/^\d+$/.test(w)) fail(where, w + ": noun/article without a case");
      if (r === "S" && c && c[0] !== "N") fail(where, w + ": subject not nominative");
      if (r === "AO" && c && c[0] !== "A") fail(where, w + ": accusative object not accusative");
      if (r === "DO" && c && c[0] !== "D") fail(where, w + ": dative object not dative");
      if (r === "GA" && c && c[0] !== "G") fail(where, w + ": genitive attribute not genitive");
      const k = { w, pos: p, sub, c: c[0] || "", gen: c[1] || "", role: r, lemma };
      const why = WL.problem(k);
      if (why) fail(where, w + ": " + why);
      else { const code = WL.subInfo(k).code; subs[code] = (subs[code] || 0) + 1; }
      pos.add(WL.GROUP[p] || p);
      if (c) cases.add(c[0]);
    }
  });
  for (const n of NEED) if (!pos.has(n)) fail(where, "no " + n);
  for (const c of "NADG") if (!cases.has(c)) fail(where, "no case " + c);
  console.log((bad > before ? "  " : "✓ ") + where + ": " + words + " words, cases " + [...cases].sort().join(""));
}
console.log("subtypes: " + Object.entries(subs).map(([k, v]) => k + " " + v).join(", "));
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("all paragraphs complete");
