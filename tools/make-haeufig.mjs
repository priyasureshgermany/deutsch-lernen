// Builds haeufig-data.js, the list behind Wörter › Häufig:
//
//   node tools/make-haeufig.mjs <de_50k.txt> <deu_sentences.tsv> <german.dict> [--review]
//
// de_50k.txt         word<space>count per line, most frequent first, from
//                    github.com/hermitdave/FrequencyWords (content/2018/de),
//                    counted over OpenSubtitles – CC-BY-SA 4.0
// deu_sentences.tsv  id<tab>deu<tab>sentence, the German export of
//                    tatoeba.org (exports/per_language/deu) – CC-BY 2.0 FR
//
// german.dict        the tagger dictionary of LanguageTool, a Morfologik CFSA2
//                    automaton, from github.com/languagetool-org/german-pos-dict
//                    (src/main/resources/org/languagetool/resource/de) – its
//                    data is Morphy's, CC-BY-SA 4.0. It gives every word its
//                    type, its base form and, for a noun, its gender.
//
// None of the three is kept in the repository; download them and pass their paths.
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

const [freqPath, sentPath, dictPath] = process.argv.slice(2).filter(a => !a.startsWith("--"));
const REVIEW = process.argv.includes("--review");
if (!freqPath || !sentPath || !dictPath) {
  console.error("usage: node tools/make-haeufig.mjs <de_50k.txt> <deu_sentences.tsv> <german.dict> [--review]");
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

/* ---- the dictionary: word types, base forms, genders ----
   german.dict is read as it is: a CFSA2 automaton whose paths spell
   word_<base form, as letters to cut and letters to add>_TAG. An arc is a
   flag byte (target is the next state · last arc of its state · a word may
   end here · five bits of label index), the label itself when the index is 0,
   and the target's address as a variable-length integer unless it is next. */
const lookup = (() => {
  const buf = readFileSync(dictPath);
  if (buf.toString("latin1", 0, 4) !== "\\fsa" || buf[4] !== 0xc6) throw new Error(dictPath + " is not a CFSA2 dictionary");
  const map = buf.subarray(8, 8 + buf[7]), A = buf.subarray(8 + buf[7]);
  const vint = o => { let b = A[o], v = b & 0x7f; for (let sh = 7; b & 0x80; sh += 7) { b = A[++o]; v |= (b & 0x7f) << sh; } return v; };
  const skip = o => { const f = A[o++]; if (!(f & 31)) o++; if (!(f & 0x80)) while (A[o++] & 0x80); return o; };
  const last = o => !!(A[o] & 0x40);
  const label = o => (A[o] & 31 ? map[A[o] & 31] : A[o + 1]);
  const dest = o => { if (A[o] & 0x80) { while (!last(o)) o = skip(o); return skip(o); } return vint(o + (A[o] & 31 ? 1 : 2)); };
  const root = dest(0);
  return word => {
    let node = root;
    for (const b of Buffer.from(word + "_", "utf8")) {
      let o = node;
      while (label(o) !== b) { if (last(o)) return []; o = skip(o); }
      if (!(node = dest(o))) return [];
    }
    const out = [];
    (function walk(n, acc) {
      for (let o = n; ; o = skip(o)) {
        const now = acc.concat(label(o));
        if (A[o] & 0x20) {
          const [enc, tag] = Buffer.from(now).toString("utf8").split("_");
          /* the cut is counted in bytes, so ß and ä count twice: weiß → w + issen */
          const wb = Buffer.from(word, "utf8");
          out.push({ tag, lemma: wb.subarray(0, wb.length - (enc.charCodeAt(0) - 65)).toString("utf8") + enc.slice(1) });
        }
        const d = dest(o);
        if (d) walk(d, now);
        if (last(o)) break;
      }
    })(node, []);
    return out;
  };
})();

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
  /* a first name or surname and nothing else, by the dictionary's own word */
  if (!why && !KEEP.has(w) && !lookup(w).length) {
    const up = lookup(w[0].toUpperCase() + w.slice(1));
    if (up.length && up.every(r => /^EIG.*:(VOR|NAC)\*?$/.test(r.tag))) why = "a name (dictionary)";
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

/* One type per word, as a learner would name it; where a word is several, the
   one it most often is. Codes: N noun · V verb · J adjective · D adverb ·
   P pronoun · A article or possessive · R preposition · K conjunction ·
   Z numeral · T particle · X not in the dictionary. */
const TYPE = { sein: "V", ja: "T", nein: "T", doch: "T", mal: "T", denn: "K", wie: "K", als: "K", was: "P", das: "A", so: "D", da: "D",
  nur: "D", auch: "D", noch: "D", schon: "D", zu: "R", bitte: "T", danke: "T", hallo: "T", okay: "T", ok: "T", oh: "T", hey: "T", na: "T", ach: "T",
  war: "V", bin: "V", bist: "V", ist: "V", sind: "V", seid: "V", hat: "V", habe: "V", hast: "V", haben: "V", wird: "V", werden: "V", kann: "V", will: "V", muss: "V" };
function typeOf(rs) {
  const has = re => rs.some(r => re.test(r.tag));
  if (has(/^ART/)) return "A";
  if (has(/^PRO:(PER|REF|RIN)/)) return "P";
  if (has(/^PRO:(POS|DEM)/)) return "A";
  if (has(/^PRO/)) return "P";
  if (has(/^PRP/)) return "R";
  if (has(/^KON/)) return "K";
  if (has(/^ZAL/)) return "Z";
  if (has(/^(NEG|INJ)/)) return "T";
  if (rs.some(r => /^VER/.test(r.tag) && !/^VER:IMP/.test(r.tag))) return "V";
  if (has(/^(ADJ|PA1|PA2)/)) return "J";
  if (has(/^ADV/)) return "D";
  if (has(/^VER/)) return "V";
  if (has(/^ZUS/)) return "T";
  if (has(/^(SUB|EIG|ABK)/)) return "N";
  return "X";
}
const HEAD = { N: /^(SUB|EIG)/, V: /^VER/, J: /^(ADJ|PA1|PA2)/ };
const GEN = { MAS: "m", FEM: "f", NEU: "n" };
const info = words.map(w => {
  const capd = w[0].toUpperCase() + w.slice(1), wantCap = show(w) !== w;
  const up = lookup(capd).filter(r => HEAD.N.test(r.tag)), lo = lookup(w);
  /* a noun where German writes it as one, or where it can be nothing else */
  const noun = !TYPE[w] && up.length && (wantCap || !lo.length);
  const form = noun ? capd : lo.length || TYPE[w] ? w : show(w);
  const rs = noun ? up : lo;
  /* Not in the dictionary: mostly separable verbs (mitkommen, reingehen) and
     adverbs built on -mal, -wegen, -weise; what is left stays unnamed. */
  const guess = wantCap ? "N" : /(mal|wegen|weise|wärts|seits|einander|dessen|lang)$/.test(w) ? "D" : w.length > 5 && /en$/.test(w) ? "V" : "X";
  const type = noun ? "N" : TYPE[w] || (lo.length ? typeOf(lo) : guess);
  let lemma = "", gen = "-";
  if (HEAD[type]) {
    /* a base form has to be a word the dictionary knows, and one word */
    const mine = rs.filter(r => HEAD[type].test(r.tag) && !r.lemma.includes(" ") && (r.lemma === (noun ? capd : w) || lookup(r.lemma).length));
    /* dachte is denken long before it is dachen: of two base forms, the commoner word */
    const freq = r => { const k = rank.get(r.lemma.toLowerCase()); return k === undefined ? 1e9 : k; };
    mine.sort((x, y) => freq(x) - freq(y));
    const best = mine.find(r => /NOM:SIN|:INF|PRD:GRU/.test(r.tag) && freq(r) === freq(mine[0])) || mine[0];
    if (best && best.lemma.toLowerCase() !== form.toLowerCase()) lemma = best.lemma;
    if (type === "N" && best) {
      const sub = mine.filter(r => /^SUB/.test(r.tag));
      const g = ((sub.find(r => /:SIN:/.test(r.tag)) || sub[0] || best).tag.match(/MAS|FEM|NEU/) || [])[0];
      if (g) gen = sub.some(r => /:SIN:/.test(r.tag)) || !sub.length ? GEN[g] : GEN[g].toUpperCase();   // capital: this form is the plural
      else if (sub.length && sub.every(r => /:PLU:/.test(r.tag))) gen = "p";                               // Leute, Eltern: plural only
    }
  }
  return { form, type, lemma, gen };
});

const data = {
  w: info.map(x => x.form),
  c: info.map(x => x.type).join(""),
  g: info.map(x => x.gen).join(""),
  l: info.map(x => x.lemma),
  s: order.map(i => (pool[i].en ? pool[i].de + "\t" + pool[i].en : pool[i].de)),
  x: pick.map(p => p.map(i => used.get(i)))
};
const none = pick.filter(p => !p.length).length;
const head = `/* The 10 000 most frequent German words, with sample sentences – Wörter › Häufig.
   Made by tools/make-haeufig.mjs; do not edit by hand.

   w  the words, most frequent first
   c  one letter per word, its type: N noun · V verb · J adjective · D adverb ·
      P pronoun · A article/possessive · R preposition · K conjunction ·
      Z numeral · T particle · X unknown
   g  one letter per word: a noun's gender m f n (a capital: this form is the
      plural; p: it has no singular), - for everything else
   l  for each word its base form, where that is another word (fuhr → fahren)
   s  the sentences; one from the app itself carries its English after a tab
   x  for each word, the sentences (indexes into s) that use it

   Word frequencies: FrequencyWords by Hermit Dave (github.com/hermitdave/FrequencyWords),
   counted over OpenSubtitles 2018 – CC-BY-SA 4.0, and so is this list.
   Sentences without English: Tatoeba (tatoeba.org) – CC-BY 2.0 FR.
   Word types, base forms and genders: the German tagger dictionary of
   LanguageTool (github.com/languagetool-org/german-pos-dict), from Morphy –
   CC-BY-SA 4.0. */
`;
writeFileSync(new URL("../haeufig-data.js", import.meta.url), head + "window.HW = " + JSON.stringify(data) + ";\n");
{
  const n = {};
  for (const x of info) n[x.type] = (n[x.type] || 0) + 1;
  console.log("types: " + Object.entries(n).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + " " + v).join(" · "));
}
console.log(`${words.length} words · ${data.s.length} sentences (${own.size} in the app, ${pool.filter(p => p.en).length} of them usable) · ${none} words without one`);
if (REVIEW) {
  console.log("\nleft out of the first 3000:\n" + dropped.join("\n"));
  console.log("\nnot in the dictionary: " + info.filter(x => x.type === "X").map(x => x.form).slice(0, 150).join(" "));
  console.log("\nfirst 150: " + info.slice(0, 150).map(x => x.form + ":" + x.type + (x.gen !== "-" ? x.gen : "") + (x.lemma ? "<" + x.lemma : "")).join(" "));
  console.log("\nevery 250th: " + data.w.filter((_, i) => i % 250 === 0).join(" "));
  console.log("\nwithout a sentence: " + data.w.filter((_, i) => !pick[i].length).slice(0, 80).join(" "));
}
