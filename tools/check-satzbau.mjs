// Checks satzbau-data.js and satzbau-themen.js:  node tools/check-satzbau.mjs
// Every sentence has an end mark, English and a rule; every other correct
// order uses exactly the same blocks; each level has 10 sets of 10, every
// grammar topic 10 sentences (a test takes 5); no sentence appears twice.
import { readFileSync } from "node:fs";
const window = {};
for (const f of ["../satzbau-data.js", "../satzbau-themen.js", "../grammatik-data.js"])
  new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const blocks = s => s.replace(/[.?!]$/, "").split("|").map(b => b.replace(/^\^/, "").replace(/^,\s*/, "").toLowerCase());
function rows(name, list, ruleOk) {
  const seen = new Set();
  list.forEach(([s, en, rule, alt], i) => {
    const w = `${name} #${i + 1} ${s}`;
    if (!/[.?!]$/.test(s)) fail(w, "no end mark");
    if (!en) fail(w, "no English");
    if (!ruleOk(rule)) fail(w, "unknown rule " + rule);
    if (blocks(s).length < 3) fail(w, "fewer than 3 blocks");
    if (s.split("|").some((b, j) => b.startsWith("^") && j < 2)) fail(w, "^ only for blocks after the verb");
    if (seen.has(s)) fail(w, "repeated"); seen.add(s);
    for (const a of alt || []) if (blocks(a).sort().join("|") !== blocks(s).sort().join("|")) fail(w, "other order uses different blocks: " + a);
  });
}
for (const [lv, sets] of Object.entries(window.SB)) {
  if (sets.length !== 10) fail(lv, "needs 10 sets, has " + sets.length);
  sets.forEach((set, k) => { if (set.length !== 10) fail(lv + " set " + (k + 1), "needs 10 sentences, has " + set.length); });
  rows(lv, sets.flat(), r => !!window.SBR[r]);
  console.log(`  ${lv}: ${sets.flat().length} sentences`);
}
let n = 0;
for (const t of window.GD) {
  const list = window.SBT[t.id];
  if (!list) { fail(t.de, "no Satzbau-Test sentences"); continue; }
  if (list.length < 10) fail(t.de, "needs 10 sentences for two tests, has " + list.length);
  rows("Test " + t.id, list, r => typeof r === "string" && r.length > 3); n += list.length;
}
for (const id in window.SBT) if (!window.GD.some(t => t.id === id)) fail("Tests", "no grammar topic " + id);
console.log(`  Grammatik-Tests: ${Object.keys(window.SBT).length} topics, ${n} sentences`);
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ all Satzbau sentences fine");
