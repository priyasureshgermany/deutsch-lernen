// Prints every adverbial phrase with its TeKaMoLo kind, for review:
//   node tools/list-tekamolo.mjs
import { readFileSync } from "node:fs";

const window = {};
for (const f of ["../woerter-data.js", "../woerter-lex.js"])
  new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
const { WD, WL } = window;

for (const topic of WD) for (const para of topic.p) {
  console.log("\n# " + topic.de + " " + para.lvl);
  for (const [src] of para.s) {
    const toks = [];
    for (const raw of src.split("~").map(t => t.trim()).filter(Boolean)) {
      if (!raw.includes("|")) { if (toks.length) toks[toks.length - 1].punct += raw; continue; }
      const [w, tag, c = "", role = "", lemma = ""] = raw.split("|");
      const [pos, sub] = tag.split(".");
      toks.push({ w, pos, sub, c: c[0] || "", gen: c[1] || "", role, lemma, punct: "" });
    }
    WL.tekamolo(toks);
    const out = [];
    let cur = null;
    toks.forEach((t, i) => {
      if (t.tm && cur && cur.ph === t.ph) cur.words.push(t.w);
      else if (t.tm) { cur = { tm: t.tm, ph: t.ph, words: [t.w] }; out.push(cur); }
      else cur = null;
    });
    console.log("  " + out.map(p => p.tm.toUpperCase() + ": " + p.words.join(" ")).join("  |  "));
  }
}
