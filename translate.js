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
      dict: (j.dict || [])[0] || null
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

  function cancelled(err){ if(err && err.name === "AbortError") throw { code: "cancelled" }; throw err && err.code ? err : { code: "failed" }; }

  async function word(w, sent, signal){
    const s = sentenceOf(sent, [w]);
    const [a, b] = await Promise.all([gt(w, signal), s && s !== w ? gt(s, signal) : null]);
    const d = a.dict;
    const others = d ? d.terms.filter(t => t.toLowerCase() !== a.en.toLowerCase()).slice(0, 3) : [];
    const base = d && d.base_form && d.base_form.toLowerCase() !== w.toLowerCase() ? "Grundform: " + d.base_form : "";
    /* The sections print "lemma · pos", so with no base form the part of
       speech moves into the lemma slot rather than leaving a bare "· noun". */
    return {
      en: a.en + (others.length ? " · " + others.join(", ") : ""),
      lemma: base || (d ? d.pos : ""),
      pos: base && d ? d.pos : "",
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
