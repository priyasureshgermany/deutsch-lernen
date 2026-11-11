// Builds haeufig-data.js, the list behind Wörter › Häufig:
//
//   node tools/make-haeufig.mjs <de_50k.txt> <deu_sentences.tsv> [--review]
//
// de_50k.txt         word<space>count per line, most frequent first, from
//                    github.com/hermitdave/FrequencyWords (content/2018/de),
//                    counted over OpenSubtitles – CC-BY-SA 4.0
// deu_sentences.tsv  id<tab>deu<tab>sentence, the German export of
//                    tatoeba.org (exports/per_language/deu) – CC-BY 2.0 FR
//
// Neither file is kept in the repository; download them and pass their paths.
//
// The 10 000 most frequent words that are really German words: a subtitle
// count is full of names and English, so a word has to turn up in enough
// German sentences, and one that is only ever a name is left out. Spelling
// (Haus, not haus) is taken from how the sentences write it.
//
// Each word gets up to three short sentences a B1 learner can read: every
// other word in them is among the 6 000 most frequent. Sentences already in
// the app (Grammatik, Alltagssätze, Gespräche, Hören, Briefe, the B1 texts of
// Wörter erkennen) come first and bring their English with them.
import { readFileSync, writeFileSync } from "node:fs";

const [freqPath, sentPath] = process.argv.slice(2).filter(a => !a.startsWith("--"));
const REVIEW = process.argv.includes("--review");
if (!freqPath || !sentPath) {
  console.error("usage: node tools/make-haeufig.mjs <de_50k.txt> <deu_sentences.tsv> [--review]");
  process.exit(1);
}

const TOP = 10000;          // words in the list
const EASY = 6000;          // a sentence's other words come from this many
const PER = 3;              // sentences per word
const SPARE = 1500;         // words past the list, to take the place of any without a sentence
const WORD = /[A-Za-zÄÖÜäöüß]+/g;
const low = s => s.toLowerCase();

/* ---- the sentences ---- */
const tato = [];
for (const line of readFileSync(sentPath, "utf8").split("\n")) {
  const t = line.split("\t")[2];
  if (t) tato.push(t.trim());
}

/* How German writes each word, and whether it ever stands with an article:
   counted away from the start of a sentence, where everything is capitalised. */
const DET = new Set(("der die das den dem des ein eine einen einem einer eines kein keine keinen keinem keiner " +
  "mein meine meinen meinem meiner dein deine deinen deinem deiner sein seine seinen seinem seiner ihr ihre ihren ihrem ihrer " +
  "unser unsere unseren unserem unserer euer eure euren eurem eurer dieser diese dieses diesen diesem jeder jede jedes jeden jedem " +
  "im am zum zur vom beim ins ans aufs viel viele vielen wenig wenige einige mehr etwas welche welcher welches zwei drei").split(" "));
const df = new Map(), cap = new Map(), lowc = new Map(), det = new Map(), mid = new Map();
const bump = (m, k) => m.set(k, (m.get(k) || 0) + 1);
for (const s of tato) {
  const toks = s.match(WORD);
  if (!toks) continue;
  const seen = new Set();
  toks.forEach((w, i) => {
    const l = low(w);
    if (!seen.has(l)) { seen.add(l); bump(df, l); }
    if (i === 0) return;
    bump(mid, l);
    if (w[0] !== l[0]) { bump(cap, l); if (DET.has(low(toks[i - 1]))) bump(det, l); }
    else bump(lowc, l);
  });
}

/* Places and other words that stand without an article and are no one's name. */
const KEEP = new Set(("deutschland berlin europa österreich schweiz frankreich england amerika italien spanien russland china japan " +
  "indien afrika asien london paris wien münchen hamburg köln rom polen türkei griechenland australien kanada mexiko holland " +
  "gott mama papa mami papi mutti vati oma opa weihnachten ostern deutsch englisch französisch spanisch italienisch russisch " +
  "montag dienstag mittwoch donnerstag freitag samstag sonntag januar februar märz april mai juni juli august september oktober november dezember " +
  "herr frau hunger durst angst glück spaß lust recht schuld bescheid platz urlaub geburtstag feierabend silvester " +
  "hause verzeihung entschuldigung danke bitte hilfe vorsicht achtung moment tschüs tschüss hallo willkommen prost ruhe schluss feuer " +
  "nichts alles jemand niemand ahnung lieber liebe sehr geehrte geehrter " +
  "mitternacht glückwunsch bord betracht ausschau gewahrsam aufsicht erden kostüme systeme halluzinationen ewigkeiten gittern endes " +
  "generäle zivilisationen psychopathen vanille popmusik jura übersee wichtigeres jüdin moskau tokio ägypten schottland irland " +
  "brasilien norwegen dänemark belgien großbritannien argentinien südamerika südafrika israel korea thailand").split(" "));
/* Endings only a common noun has: never a name, whatever stands before it. */
const NOUNISH = /(ung|heit|keit|schaft|tion|nis|chen|lein|tät|ismus|ment|tum|ling|erei)$/;
/* English and subtitle debris that German sentences use often enough to pass. */
const DROP = new Set(("the you and of to is it that what this for are on with have be not we do me my your she they " +
  "yeah ah äh ähm hm hmm mhm aha tja huh wow hä ooh uh eh haha mr mrs ms dr sir miss st jr tom toms").split(" "));

const words = [], rank = new Map(), dropped = [];
for (const line of readFileSync(freqPath, "utf8").split("\n")) {
  const w = line.split(" ")[0];
  if (!w || !/^[a-zäöüß]{2,}$/.test(w) || rank.has(w) || DROP.has(w)) continue;
  const n = df.get(w) || 0;
  let why = "";
  if (n < 8) why = "rare in German sentences (" + n + ")";
  else if (!KEEP.has(w) && !NOUNISH.test(w)) {
    const c = cap.get(w) || 0, m = mid.get(w) || 0;
    /* always capitalised and next to never after an article: a name */
    if (m >= 5 && c / m > 0.9 && (det.get(w) || 0) / c < 0.03) why = "a name (" + (det.get(w) || 0) + "/" + c + " after an article)";
  }
  if (why) { dropped.push(w + " – " + why); continue; }
  rank.set(w, words.length);
  words.push(w);
  if (words.length === TOP + SPARE) break;
}
if (words.length < TOP + SPARE) { console.error("only " + words.length + " words survived"); process.exit(1); }
const show = w => ((cap.get(w) || 0) > (lowc.get(w) || 0) * 1.5 ? w[0].toUpperCase() + w.slice(1) : w);

/* ---- sentences already in the app, with their English ---- */
const window = {};
for (const f of ["grammatik-data.js", "saetze-data.js", "gespraeche-data.js", "hoeren-data.js", "briefe-data.js", "woerter-data.js"]) {
  try { new Function("window", readFileSync(new URL("../" + f, import.meta.url), "utf8"))(window); }
  catch (e) { console.error("skipped " + f + ": " + e.message); }
}
const own = new Map();          // German → English
const one = s => typeof s === "string" && /^[A-ZÄÖÜ][^.!?\[\]]*[.!?]$/.test(s);
(function walk(x) {
  if (Array.isArray(x)) {
    const n = x.length;
    if (n >= 2 && typeof x[n - 1] === "string" && typeof x[n - 2] === "string") {
      const de = x[n - 2].replace(/\[\[|\]\]/g, "").trim(), en = x[n - 1].trim();
      if (one(de) && en && !own.has(de)) own.set(de, en);
    }
    x.forEach(walk);
  } else if (x && typeof x === "object") Object.values(x).forEach(walk);
})([window.GD, window.AS, window.GS, window.HS, window.BR]);
for (const t of window.WD || []) for (const p of t.p) if (p.lvl === "B1") for (const [src, en] of p.s) {
  let de = "";
  for (const raw of src.split("~").map(v => v.trim()).filter(Boolean))
    de += raw.includes("|") ? (de ? " " : "") + raw.split("|")[0] : raw;
  if (one(de) && !own.has(de)) own.set(de, en);
}

/* ---- which sentences a learner can read ---- */
const B1 = new Set("weil dass obwohl wenn damit während nachdem bevor falls deshalb trotzdem ob als seit bis sondern denn deswegen außerdem".split(" "));
const pool = [];                // {de, en, toks, score}
const seenDe = new Set();
function consider(de, en, loose) {
  if (seenDe.has(de) || de.length < 18 || de.length > (loose ? 90 : 72)) return;
  if (!/^[A-ZÄÖÜ][A-Za-zÄÖÜäöüß ,\-]*[.!?]$/.test(de)) return;
  const toks = de.match(WORD).map(low);
  if (toks.length < 4 || toks.length > (loose ? 14 : 12)) return;
  let hard = 0;
  for (const t of toks) { const r = rank.get(t); if (r === undefined) return; if (r >= EASY) hard++; }
  if (hard > (loose ? 3 : 1)) return;
  /* a looser sentence is only wanted for a word that has no other */
  if (loose && !toks.some(t => !has.has(t))) return;
  seenDe.add(de);
  /* nearest to nine words, a B1 connector is worth having, the app's own first */
  const score = (en ? 100 : 0) + (toks.some(t => B1.has(t)) ? 3 : 0) - Math.abs(toks.length - 9) * 0.6 - hard * 2 - (loose ? 20 : 0);
  pool.push({ de, en, toks: [...new Set(toks)], score });
  if (!loose) toks.forEach(t => has.add(t));
}
const has = new Set();          // words with a sentence from the first pass
for (const [de, en] of own) consider(de, en);
for (const de of tato) consider(de, "");
/* second pass, a little longer and harder, for the words still without one */
for (const de of tato) consider(de, "", true);

/* A word no sentence uses is, this far down a subtitle count, almost always
   debris – a unit, a syllable, a surname – so the next word takes its place. */
{
  const withOne = new Set();
  pool.forEach(s => s.toks.forEach(t => withOne.add(t)));
  const kept = words.filter(w => withOne.has(w)).slice(0, TOP);
  if (kept.length < TOP) { console.error("only " + kept.length + " words have a sentence"); process.exit(1); }
  words.length = 0; kept.forEach(w => words.push(w));
}

const by = new Map();           // word → its sentences, best first
pool.forEach((s, i) => s.toks.forEach(t => { if (!by.has(t)) by.set(t, []); by.get(t).push(i); }));

/* The rarest words choose first: they have the fewest to choose from. A
   sentence someone has already taken costs nothing more to show again, so it
   is worth a little – which keeps the file small – but three examples that
   open the same way teach less than three that differ. */
const used = new Map(), pick = words.map(() => []);
for (let r = TOP - 1; r >= 0; r--) {
  const cands = (by.get(words[r]) || []).map(i => ({ i, v: pool[i].score + (used.has(i) ? 3 : 0) }))
    .sort((a, b) => b.v - a.v || a.i - b.i);
  const starts = new Set();
  for (const { i } of cands) {
    const st = pool[i].de.split(" ").slice(0, 2).join(" ");
    if (starts.has(st)) continue;
    starts.add(st);
    pick[r].push(i);
    used.set(i, 0);
    if (pick[r].length === PER) break;
  }
}
const order = [...used.keys()].sort((a, b) => a - b);
order.forEach((i, n) => used.set(i, n));

const data = {
  w: words.map(show),
  s: order.map(i => (pool[i].en ? pool[i].de + "\t" + pool[i].en : pool[i].de)),
  x: pick.map(p => p.map(i => used.get(i)))
};
const none = pick.filter(p => !p.length).length;
const head = `/* The 10 000 most frequent German words, with sample sentences – Wörter › Häufig.
   Made by tools/make-haeufig.mjs; do not edit by hand.

   w  the words, most frequent first
   s  the sentences; one from the app itself carries its English after a tab
   x  for each word, the sentences (indexes into s) that use it

   Word frequencies: FrequencyWords by Hermit Dave (github.com/hermitdave/FrequencyWords),
   counted over OpenSubtitles 2018 – CC-BY-SA 4.0, and so is this list.
   Sentences without English: Tatoeba (tatoeba.org) – CC-BY 2.0 FR. */
`;
writeFileSync(new URL("../haeufig-data.js", import.meta.url), head + "window.HW = " + JSON.stringify(data) + ";\n");
console.log(`${words.length} words · ${data.s.length} sentences (${own.size} in the app, ${pool.filter(p => p.en).length} of them usable) · ${none} words without one`);
if (REVIEW) {
  console.log("\nleft out of the first 3000:\n" + dropped.join("\n"));
  console.log("\nevery 250th: " + data.w.filter((_, i) => i % 250 === 0).join(" "));
  console.log("\nwithout a sentence: " + data.w.filter((_, i) => !pick[i].length).slice(0, 80).join(" "));
}
