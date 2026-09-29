/* In-popup translation for GitHub Pages, where Claude is not available.

   The three sections were written for claude.ai: they ask `sample.json(prompt)`
   for a word or a phrase and draw what comes back. `window.freeSample` answers
   the same call with Google Translate's public endpoint, returning the same
   fields, so the sections only change where they look for `sample`.

   Word  → { en, lemma, pos, plural:"", note }  note = the sentence in English
   Words → { en, literal, note }                literal = each word on its own */
(function(){
  const API = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=en&hl=en&dt=t&dt=bd&dj=1&q=";

  async function gt(text, signal){
    const r = await fetch(API + encodeURIComponent(text), { signal });
    if(!r.ok) throw { code: r.status === 429 ? "rate_limited" : "failed" };
    const j = await r.json();
    return {
      en: (j.sentences || []).map(s => s.trans || "").join("").trim(),
      dict: (j.dict || [])[0] || null,
      kinds: (j.dict || []).map(x => x.pos)
    };
  }

  /* The sentence the words sit in, not the whole letter or dialogue around it. */
  function sentenceOf(text, words){
    /* Dialogue lines arrive joined with no space ("…Vollkornbrot?Kundin: Ja"),
       so a sentence ends at . ! ? whether or not a space follows; a colon only
       with one, so "14:32" stays whole while "Kundin: Ja" loses its speaker. */
    const parts = text.split(/(?<=[.!?])\s*|(?<=:)\s+|\n+/).map(s => s.trim()).filter(Boolean);
    const want = words.map(w => w.toLowerCase());
    const hit = parts.find(p => { const l = p.toLowerCase(); return want.every(w => l.includes(w)); });
    return (hit || text).slice(0, 400);
  }

  /* Article and plural come from German Wiktionary, whose noun entries carry
     a {{Deutsch Substantiv Übersicht}} table: Genus, Nominativ Singular,
     Nominativ Plural. An inflected form ("Wohnungen") has a page of its own
     that points at the base with {{Grundformverweis Dekl|Wohnung}}. A
     compound Wiktionary lacks takes its gender and plural from its last part,
     as German does: Kaffee + Becher → der Kaffeebecher, die Kaffeebecher. */
  const WIKI = "https://de.wiktionary.org/w/api.php?format=json&origin=*&formatversion=2&redirects=1";
  const ART = { m: "der", f: "die", n: "das" };

  async function wikitext(title, signal){
    const r = await fetch(WIKI + "&action=parse&prop=wikitext&page=" + encodeURIComponent(title), { signal });
    const j = await r.json();
    return j.parse ? j.parse.wikitext : "";
  }

  function nounTable(t){
    const m = t.match(/\{\{Deutsch Substantiv Übersicht([\s\S]*?)\n\}\}/);
    if(!m) return null;
    const f = k => ((m[1].match(new RegExp("\\|" + k + "(?: 1)?=([^\\n|]*)")) || [])[1] || "").trim();
    const g = f("Genus");
    if(!ART[g]) return null;
    const pl = f("Nominativ Plural");
    /* All eight forms, for the table in Wörter erkennen. */
    const cases = {};
    [["N","Nominativ"],["A","Akkusativ"],["D","Dativ"],["G","Genitiv"]].forEach(([c, n]) => {
      const p = f(n + " Plural");
      cases[c] = [f(n + " Singular"), p && p !== "—" ? p : ""];
    });
    return { sg: f("Nominativ Singular"), g, pl: pl && pl !== "—" ? pl : "", cases };
  }

  async function nounFrom(title, signal){
    const t = await wikitext(title, signal);
    const n = nounTable(t);
    if(n) return n;
    const base = (t.match(/\{\{Grundformverweis Dekl\|([^}|]+)/) || [])[1];
    return base ? nounTable(await wikitext(base.trim(), signal)) : null;
  }

  async function noun(w, base, signal){
    const n = await nounFrom(w, signal) || (base && base !== w ? await nounFrom(base, signal) : null);
    if(n) return n;
    const word = base || w;
    const tails = [];
    for(let i = 1; i <= word.length - 3; i++) tails.push(word[i].toUpperCase() + word.slice(i + 1));
    if(!tails.length) return null;
    const r = await fetch(WIKI + "&action=query&titles=" + encodeURIComponent(tails.slice(0, 50).join("|")), { signal });
    const found = new Set(((await r.json()).query.pages || []).filter(p => !p.missing).map(p => p.title));
    for(const tail of tails){
      if(!found.has(tail)) continue;
      const part = await nounFrom(tail, signal);
      if(!part) continue;
      const head = word.slice(0, word.length - tail.length);
      const join = s => s ? head + s[0].toLowerCase() + s.slice(1) : "";
      const cases = {};
      for(const c in part.cases) cases[c] = part.cases[c].map(join);
      return { sg: join(part.sg), g: part.g, pl: join(part.pl), cases };
    }
    return null;
  }

  function cancelled(err){ if(err && err.name === "AbortError") throw { code: "cancelled" }; throw err && err.code ? err : { code: "failed" }; }

  async function word(w, sent, signal){
    const s = sentenceOf(sent, [w]);
    const [a, b] = await Promise.all([gt(w, signal), s && s !== w ? gt(s, signal) : null]);
    const d = a.dict;
    const others = d ? d.terms.filter(t => t.toLowerCase() !== a.en.toLowerCase()).slice(0, 3) : [];
    /* Capitalised and either called a noun or not in Google's dictionary at
       all. A capital at the start of a sentence proves nothing: "Ich" is
       listed first as the noun "das Ich" (the ego), so a word Google also
       knows as a pronoun or article is left alone. */
    let nounish = /^[A-ZÄÖÜ]/.test(w) && (d ? d.pos === "noun" : true) &&
      !a.kinds.some(k => k === "pronoun" || k === "article");
    let kind = d ? d.pos : "";
    if(nounish && s.replace(/^[^A-Za-zÄÖÜäöüß]+/, "").startsWith(w)){
      const low = await gt(w.toLowerCase(), signal);
      if(low.dict && low.dict.pos !== "noun"){ nounish = false; kind = low.dict.pos; }
    }
    const n = nounish ? await noun(w, d && d.base_form, signal).catch(e => { if(e && e.name === "AbortError") throw e; return null; }) : null;
    if(n) return {
      en: a.en + (others.length ? " · " + others.join(", ") : ""),
      lemma: ART[n.g] + " " + n.sg,
      pos: "noun",
      plural: n.pl ? "die " + n.pl : "—",
      note: b && b.en ? "Im Satz: " + b.en : ""
    };
    const base = d && d.base_form && d.base_form.toLowerCase() !== w.toLowerCase() ? "Grundform: " + d.base_form : "";
    /* The sections print "lemma · pos", so with no base form the part of
       speech moves into the lemma slot rather than leaving a bare "· noun". */
    return {
      en: a.en + (others.length ? " · " + others.join(", ") : ""),
      lemma: base || kind,
      pos: base ? kind : "",
      plural: "",
      note: b && b.en ? "Im Satz: " + b.en : ""
    };
  }

  async function words(phr, sent, signal){
    const list = phr.split(/\s+/).filter(x => x && x !== "…");
    const s = sentenceOf(sent, list);
    const [whole, ctx, ...each] = await Promise.all([
      gt(list.join(" "), signal),
      s ? gt(s, signal) : null,
      ...list.slice(0, 8).map(x => gt(x, signal))
    ]);
    return {
      en: whole.en,
      literal: list.length > 1 ? list.slice(0, 8).map((x, i) => x + " (" + each[i].en + ")").join(" + ") : "",
      note: ctx && ctx.en ? "Im Satz: " + ctx.en : ""
    };
  }

  /* { g, sg, pl, cases:{N:[sg,pl],A:…,D:…,G:…} } or null, from Wiktionary. */
  window.dlNounTable = (w, lemma) => noun(w, lemma).catch(() => null);

  window.freeSample = {
    async json(prompt, opts){
      const signal = opts && opts.signal;
      const m1 = prompt.match(/German word "([^"]+)" as it is used in this sentence: "([\s\S]*?)"\.\s*\n/);
      const m2 = prompt.match(/German words "([^"]+)" as they are used together in this (?:sentence|text): "([\s\S]*?)"\. \(/);
      try{
        if(m1) return await word(m1[1], m1[2], signal);
        if(m2) return await words(m2[1], m2[2], signal);
      }catch(err){ cancelled(err); }
      throw { code: "failed" };
    }
  };
})();
