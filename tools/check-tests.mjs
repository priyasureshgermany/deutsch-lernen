// Checks test-a1.js / test-b1.js:  node tools/check-tests.mjs
// Exam sizes and points as in the real exam, every answer key valid, each ad
// or word used once, every gap in its text, every recording there.
import { readFileSync } from "node:fs";
const window = {};
for (const f of ["../test-a1.js", "../test-b1.js"]) new Function("window", readFileSync(new URL(f, import.meta.url), "utf8"))(window);
let bad = 0;
const fail = (w, m) => { bad++; console.log("✗ " + w + ": " + m); };
const SIZE = { A1: [[6, 4, 5], [5, 5, 5], [5, "w"]], B1: [[5, 5, 10, 10, 10], [5, 10, 5], ["w"]] };
const PTS = { A1: [15, 15, 15], B1: [105, 75, 45] };
for (const [lv, tests] of [["A1", window.TESTS_A1], ["B1", window.TESTS_B1]]) {
  if (tests.length !== 3) fail(lv, "needs 3 tests, has " + tests.length);
  const ids = new Set();
  for (const t of tests) {
    if (ids.has(t.id)) fail(t.id, "duplicate id"); ids.add(t.id);
    t.sections.forEach((s, si) => {
      let pts = 0;
      if (!s.time) fail(t.id + " " + s.de, "no time");
      s.parts.forEach((p, pi) => {
        const w = `${t.id} ${s.de} / ${p.t}`;
        const want = SIZE[lv][si][pi];
        if (p.type === "write") { if (want !== "w") fail(w, "unexpected writing part"); if (!p.task || !p.model || !p.points || !p.points.length) fail(w, "writing part incomplete"); if (lv === "B1" && p.points.length !== 4) fail(w, "B1 letter needs 4 Leitpunkte"); pts += lv === "A1" ? 10 : 45; return; }
        if (p.items.length !== want) fail(w, `has ${p.items.length} questions, exam has ${want}`);
        if (!(p.per > 0)) fail(w, "no points per question");
        pts += p.items.length * p.per;
        if (!p.intro) fail(w, "no intro");
        const used = new Set();
        p.items.forEach((it, i) => {
          const q = `${w} #${i + 1}`;
          if (p.type === "rf" && typeof it.a !== "boolean") fail(q, "rf needs true/false");
          if (p.type === "mc" || p.type === "gapmc" || (p.type === "form" && it.o)) { if (!Array.isArray(it.o) || it.o.length < 2) fail(q, "options missing"); else if (!(it.a >= 0 && it.a < it.o.length)) fail(q, "key out of range"); }
          if (p.type === "form" && !it.o && !(Array.isArray(it.a) && it.a.length)) fail(q, "form needs accepted answers");
          if (p.type === "match" || p.type === "gapbank") {
            if (!(it.a === -1 ? p.x : it.a >= 0 && it.a < p.list.length)) fail(q, "key out of range");
            if (it.a !== -1) { if (used.has(it.a)) fail(q, "answer used twice: " + it.a); used.add(it.a); }
          }
          if ((p.type === "gapmc" || p.type === "gapbank") && !p.text.includes("(" + it.n + ")")) fail(q, `gap (${it.n}) not in text`);
          if (p.plays && !p.audio && !it.audio) fail(q, "no recording");
          if (p.type === "match" && !p.x && !it.text) fail(q, "no text to match");
        });
        if (p.type === "match" && p.x) { if (p.list.length !== 12) fail(w, "needs 12 ads, has " + p.list.length); if (!p.items.some(it => it.a === -1)) fail(w, "no x answer"); }
        if (p.type === "match" && !p.x && p.list.length !== 10) fail(w, "needs 10 headlines");
        if (p.type === "gapbank" && p.list.length !== 15) fail(w, "word list needs 15 words");
        const keys = p.items.map(it => it.a);
        if (["mc", "gapmc"].includes(p.type) && new Set(keys).size === 1) fail(w, "every answer is the same letter");
      });
      if (Math.abs(pts - PTS[lv][si]) > 1e-9) fail(`${t.id} ${s.de}`, `${pts} points, exam has ${PTS[lv][si]}`);
    });
  }
  console.log(`  ${lv}: ${tests.length} tests, ` + tests.map(t => t.sections.reduce((n, s) => n + s.parts.reduce((m, p) => m + (p.items ? p.items.length : 1), 0), 0)).join(" / ") + " questions");
}
if (bad) { console.log(bad + " problem(s)"); process.exit(1); }
console.log("✓ all tests complete");
