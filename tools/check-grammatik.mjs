// Checks grammatik-data.js:  node tools/check-grammatik.mjs
// Every item needs at least four examples, each with an explanation, a German
// sentence with a [[marked]] word, and an English line; no two explanations
// of one item may be the same.
import { readFileSync } from "node:fs";

const window = {};
new Function("window", readFileSync(new URL("../grammatik-data.js", import.meta.url), "utf8"))(window);
let bad = 0, items = 0, sentences = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
for (const t of window.GD) {
  let n = 0;
  for (const g of t.groups) for (const it of g.items) {
    n++; items++;
    const where = t.de + " / " + it.w;
    if (!it.tag) fail(where, "no tag");
    if (!Array.isArray(it.ex) || it.ex.length < 4) { fail(where, "needs at least four examples, has " + (it.ex || []).length); continue; }
    sentences += it.ex.length;
    it.ex.forEach(([why, de, en], i) => {
      if (!why || !de || !en) fail(where, "example " + (i + 1) + " is missing a field");
      if (!/\[\[[^\]]+\]\]/.test(de)) fail(where, "example " + (i + 1) + " marks no word");
      if ((de.match(/\[\[/g) || []).length !== (de.match(/\]\]/g) || []).length) fail(where, "unbalanced [[ ]]");
      if (/"/.test(de)) fail(where, "straight quote in the sentence breaks the word popup");
      if (!/[.!?…]$/.test(de.trim()) && !/Grüßen$/.test(de)) fail(where, "example " + (i + 1) + " has no end punctuation");
    });
    const whys = it.ex.map(x => x[0]);
    if (new Set(whys).size !== whys.length) fail(where, "two examples share an explanation");
    const des = it.ex.map(x => x[1]);
    if (new Set(des).size !== des.length) fail(where, "a sentence is repeated");
  }
  console.log("  " + t.de + ": " + n + " items");
}
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ " + items + " items, " + sentences + " sentences");
