/* In-popup translation for GitHub Pages, where Claude is not available.

   The three sections were written for claude.ai: they ask `sample.json(prompt)`
   for a word or a phrase and draw what comes back. `window.freeSample` answers
   the same call with Google Translate's public endpoint, returning the same
   fields, so the sections only change where they look for `sample`.

   Word  → { en, lemma, pos, plural:"", note }  note = the sentence in English
   Words → { en, literal, note }                literal = each word on its own */
(function(){
  /* Google's public endpoint answers most browsers, but on iPhones behind
     iCloud Private Relay (and on some networks) it sends a "Sorry, unusual
     traffic" page instead. So every translation tries Google, then Google's
     second address, then MyMemory, which is not Google – each with a time
     limit, so one that hangs does not hold up the next. */
  const GTX = (sl, tl) => "https://translate.googleapis.com/translate_a/single?client=gtx&hl=en&dt=t&dt=bd&dj=1&sl=" + sl + "&tl=" + tl + "&q=";
  const CL5 = (sl, tl) => "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=" + sl + "&tl=" + tl + "&q=";
  const MYM = (sl, tl) => "https://api.mymemory.translated.net/get?langpair=" + sl + "|" + tl + "&q=";

  async function getJSON(url, signal){
    const c = new AbortController(), t = setTimeout(() => c.abort(), 7000);
    const stop = () => c.abort();
    if(signal){ if(signal.aborted) c.abort(); else signal.addEventListener("abort", stop, { once: true }); }
    try{
      const r = await fetch(url, { signal: c.signal });
      if(!r.ok) throw { code: r.status === 429 ? "rate_limited" : "failed" };
      return await r.json();                       // the "Sorry" page is HTML: this throws
    } finally { clearTimeout(t); if(signal) signal.removeEventListener("abort", stop); }
  }
  /* The caller gave up: stop at once rather than trying the next service. */
  const userStop = (signal, err) => { if(signal && signal.aborted) throw err && err.name === "AbortError" ? err : new DOMException("Aborted", "AbortError"); };

  async function google(sl, tl, q, signal){
    try{
      const j = await getJSON(GTX(sl, tl) + encodeURIComponent(q), signal);
      const text = (j.sentences || []).map(x => x.trans || "").join("").trim();
      if(!text) throw { code: "failed" };
      return { src: j.src || sl, text, dict: (j.dict || [])[0] || null, kinds: (j.dict || []).map(x => x.pos), via: "Google" };
    }catch(e){ userStop(signal, e); }
    const j = await getJSON(CL5(sl, tl) + encodeURIComponent(q), signal);
    const first = Array.isArray(j) ? j[0] : null;
    const text = Array.isArray(first) ? first[0] : typeof first === "string" ? first : "";
    if(!text) throw { code: "failed" };
    return { src: Array.isArray(first) && first[1] ? first[1] : sl, text, dict: null, kinds: [], via: "Google" };
  }
  async function mymemory(sl, tl, q, signal){
    const j = await getJSON(MYM(sl, tl) + encodeURIComponent(q.slice(0, 480)), signal);
    const text = j && j.responseData && j.responseData.translatedText;
    if(!text || j.quotaFinished || /MYMEMORY WARNING/i.test(text)) throw { code: "failed" };
    return { src: sl, text, dict: null, kinds: [], via: "MyMemory" };
  }
  const norm = t => String(t).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  /* For MyMemory, which cannot detect the language: umlauts and common words. */
  const DEW = new Set("ich du er sie es wir ihr der die das den dem des und ist nicht ein eine einen mit auf für zu von bei ja nein bitte danke wie was wo warum habe hast hat bin bist sind kann möchte guten tag heute sehr gut auch noch aber oder wenn dass weil mein dein kein wo wann".split(" "));
  const ENW = new Set("i you he she it we they the and is are not a an with on for to of at yes no please thanks thank how what where why have has am can would like good day today very also but or if that because my your this when".split(" "));
  function looksGerman(q){
    if(/[äöüß]/i.test(q)) return true;
    let de = 0, en = 0;
    norm(q).split(" ").forEach(w => { if(DEW.has(w)) de++; if(ENW.has(w)) en++; });
    return de >= en;                               // a tie (one unknown word) goes to German
  }
  async function viaMyMemory(from, q, signal){
    let src = from === "auto" ? (looksGerman(q) ? "de" : "en") : from;
    let r = await mymemory(src, src === "de" ? "en" : "de", q, signal);
    /* Asked the wrong way round, MyMemory hands the text back unchanged. */
    if(from === "auto" && norm(r.text) === norm(q)){ src = src === "de" ? "en" : "de"; r = await mymemory(src, src === "de" ? "en" : "de", q, signal); }
    return r;
  }

  /* German ⇄ English only: from = "auto" | "de" | "en". Anything that is not
     German is taken as English, so no third language ever comes back. */
  window.dlTranslate = async function(q, from, signal){
    try{
      if(from === "auto"){
        const r = await google("auto", "en", q, signal);
        if(r.src === "de") return r;
        return Object.assign(await google("en", "de", q, signal), { src: "en" });
      }
      return await google(from, from === "de" ? "en" : "de", q, signal);
    }catch(e){ userStop(signal, e); }
    return await viaMyMemory(from, q, signal);
  };

  /* German → English for the word popups, with the same fallbacks. */
  async function gt(text, signal){
    let r;
    try{ r = await google("de", "en", text, signal); }
    catch(e){ userStop(signal, e); r = await mymemory("de", "en", text, signal); }
    return { en: r.text, dict: r.dict, kinds: r.kinds };
  }

  /* The sentence the words sit in, not the whole letter or dialogue around it. */
  function sentenceOf(text, words){
    /* Dialogue lines arrive joined with no space ("…Vollkornbrot?Kundin: Ja"),
       so a sentence ends at . ! ? whether or not a space follows; a colon only
       with one, so "14:32" stays whole while "Kundin: Ja" loses its speaker. */
    /* Abbreviations end in a dot but not a sentence: park their dot first. */
    text = text.replace(/\b(Dr|Nr|Str|bzw|ca|usw|z\. ?B|Hr|Fr)\./g, "$1․");
    const parts = text.split(/(?<=[.!?])\s*|(?<=:)\s+|\n+/).map(s => s.trim().replace(/․/g, ".")).filter(Boolean);
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
