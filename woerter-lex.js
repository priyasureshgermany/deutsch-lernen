/* Grammar for "Wörter erkennen": the subtype of every word and the table of
   all its forms. Loaded by woerter.html and by tools/check-woerter.mjs, which
   fails if any word in woerter-data.js has no subtype or no forms.

   Subtypes come from rules over the tags (a case means an attributive
   adjective, a lemma in MODAL means a modal verb…) and from the lists below.
   Where the tags cannot tell, the data says so with a suffix on the POS:
   V.hilf (auxiliary), P.refl, P.rel, P.dem. */
(function(){
const SUBS = {
 N:[["gatt","Gattungsname","common noun","An ordinary noun: always capitalised, used with der/die/das or ein."],
    ["eigen","Eigenname","proper noun","The name of a person, city or country – usually without an article."],
    ["nomv","Nominalisiertes Verb","verb used as a noun","A verb turned into a noun: das + infinitive, capitalised, always neuter."]],
 V:[["voll","Vollverb","main verb","It carries the meaning of the sentence."],
    ["hilf","Hilfsverb","auxiliary verb","haben or sein + past participle = perfect tense."],
    ["modal","Modalverb","modal verb","können, müssen, dürfen, möchten … + infinitive at the end."],
    ["kop","Kopulaverb","linking verb","sein, heißen, werden link the subject to a description (nominative or adjective without ending)."],
    ["inf","Infinitiv","infinitive","The basic form (-en). It goes to the end after a modal verb or after zu."],
    ["part","Partizip II","past participle","With haben or sein it forms the perfect; it goes to the end."],
    ["pref","Trennbare Vorsilbe","separable prefix","The prefix of a separable verb goes to the end of the main clause."]],
 P:[["pers","Personalpronomen","personal pronoun","Stands for a person or thing: ich, du, er, sie, es, wir, ihr, sie/Sie."],
    ["refl","Reflexivpronomen","reflexive pronoun","Refers back to the subject: mich, dich, sich, uns, euch."],
    ["rel","Relativpronomen","relative pronoun","Starts a relative clause (verb at the end). Gender from the noun it refers to, case from its role in the clause."],
    ["dem","Demonstrativpronomen","demonstrative pronoun","Points at something already said: der, die, das = this / that."],
    ["indef","Indefinitpronomen","indefinite pronoun","No particular person: man, beide, jemand."]],
 A:[["best","Bestimmter Artikel","definite article","der, die, das – something known and specific."],
    ["unbest","Unbestimmter Artikel","indefinite article","ein, eine – something new or not specific. No plural."],
    ["poss","Possessivartikel","possessive article","mein, dein, sein, ihr, unser, euer – whose? Same endings as ein, plus a plural."],
    ["neg","Negativartikel","negative article","kein – negates a noun. Same endings as mein."],
    ["indef","Mengenartikel","quantifier","jeder, viele – every, many."]],
 J:[["attr","Attributiv","attributive","Before a noun: the ending shows case, gender and number."],
    ["praed","Prädikativ","predicative","After sein / werden: no ending."],
    ["adv","Adverbial","adverbial","Describes the verb (how?): no ending."]],
 ADV:[["zeit","Temporaladverb","adverb of time","Wann? Wie lange?"],
      ["haeuf","Häufigkeitsadverb","adverb of frequency","Wie oft?"],
      ["ort","Lokaladverb","adverb of place","Wo? Wohin?"],
      ["art","Modaladverb","adverb of manner / degree","Wie? Wie sehr?"],
      ["komm","Kommentaradverb","comment adverb","What the speaker thinks: leider, unbedingt."],
      ["konj","Konjunktionaladverb","linking adverb","Links to the sentence before; the verb comes straight after it."],
      ["pron","Pronominaladverb","pronominal adverb","da(r) + preposition (darüber, damit) replaces a thing after a preposition."]],
 PR:[["dat","Präposition + Dativ","dative preposition","aus, bei, mit, nach, seit, von, zu – always dative."],
     ["akk","Präposition + Akkusativ","accusative preposition","durch, für, gegen, ohne, um, pro – always accusative."],
     ["wech","Wechselpräposition","two-way preposition","an, auf, hinter, in, neben, über, unter, vor, zwischen – Wo? → dative, Wohin? → accusative."],
     ["gen","Präposition + Genitiv","genitive preposition","trotz, wegen, während – genitive."]],
 K:[["koord","Nebenordnende Konjunktion","coordinating conjunction","und, aber, oder, denn – the word order stays the same."],
    ["sub","Unterordnende Konjunktion","subordinating conjunction","weil, obwohl, wenn, dass, da, falls, seitdem – the verb goes to the end."],
    ["vgl","Vergleichswort als","comparison word","als after a comparative (billiger als) or for a role (als Entwickler)."],
    ["inf","Infinitivkonjunktion","infinitive conjunction","um … zu + infinitive = in order to."]],
 Z:[["kard","Kardinalzahl","cardinal number","eins, zwei, drei … – how many? No ending here."]],
 T:[["neg","Negationspartikel","negation particle","nicht – negates a verb, an adjective or the whole sentence."],
    ["zu","Infinitivpartikel","infinitive marker","zu + infinitive at the end of the clause."],
    ["fokus","Fokuspartikel","focus particle","nur, noch, auch – highlight one part of the sentence."]]
};
const GROUP = { VT:"V", PA:"PR" };

const ADV = { heute:"zeit", morgen:"zeit", gestern:"zeit", sofort:"zeit", dann:"zeit", lange:"zeit", danach:"zeit", schon:"zeit", lang:"zeit",
  oft:"haeuf", immer:"haeuf", meistens:"haeuf", manchmal:"haeuf", zweimal:"haeuf", wieder:"haeuf", einmal:"haeuf",
  dort:"ort", hier:"ort", unten:"ort", unterwegs:"ort",
  gern:"art", zusammen:"art", sehr:"art", viel:"art", am:"art", liebsten:"art", genug:"art", ziemlich:"art", fast:"art", lieber:"art",
  leider:"komm", unbedingt:"komm", eigentlich:"komm", deshalb:"konj", "außerdem":"konj", trotzdem:"konj", "darüber":"pron" };
const CONJ = { und:"koord", aber:"koord", oder:"koord", denn:"koord",
  obwohl:"sub", wenn:"sub", weil:"sub", seitdem:"sub", da:"sub", falls:"sub", dass:"sub", damit:"sub",
  als:"vgl", um:"inf" };
const PREP = { aus:"dat", bei:"dat", mit:"dat", nach:"dat", seit:"dat", von:"dat", zu:"dat", laut:"dat",
  "für":"akk", durch:"akk", pro:"akk", ohne:"akk", gegen:"akk", um:"akk", bis:"akk", per:"akk",
  in:"wech", an:"wech", auf:"wech", neben:"wech", vor:"wech", "über":"wech", unter:"wech", hinter:"wech", zwischen:"wech",
  trotz:"gen", wegen:"gen" };
const FUSED = { am:["an","dem"], ans:["an","das"], im:["in","dem"], ins:["in","das"], aufs:["auf","das"], beim:["bei","dem"], vom:["von","dem"], zum:["zu","dem"], zur:["zu","der"] };
const PART = { nicht:"neg", zu:"zu", nur:"fokus", noch:"fokus" };
const PROPER = new Set(["lena","spanien","berlin","portugal","lissabon","porto","tom","frankfurt","münchen","deutschland"]);
const NOMV = new Set(["kochen","lernen"]);
const MODAL = new Set(["dürfen","können","müssen","möchten","mögen","sollen","wollen"]);
const ARTSUB = { der:"best", ein:"unbest", mein:"poss", dein:"poss", sein:"poss", ihr:"poss", unser:"poss", euer:"poss", kein:"neg", jeder:"indef", viel:"indef" };

/* Present tense ich · du · er/sie/es · wir · ihr · sie/Sie ; simple past (er) ;
   perfect (er). "R" = regular present, built from the stem. A separable verb
   is written with its prefix after a space, as it stands in a main clause. */
const VERBS_SRC = `
heißen: heiße,heißt,heißt,heißen,heißt,heißen; hieß; hat geheißen
kommen: R; kam; ist gekommen
wohnen: R; wohnte; hat gewohnt
haben: habe,hast,hat,haben,habt,haben; hatte; hat gehabt
besuchen: R; besuchte; hat besucht
kochen: R; kochte; hat gekocht
mitbringen: bringe mit,bringst mit,bringt mit,bringen mit,bringt mit,bringen mit; brachte mit; hat mitgebracht
spielen: R; spielte; hat gespielt
spülen: R; spülte; hat gespült
leben: R; lebte; hat gelebt
sein: bin,bist,ist,sind,seid,sind; war; ist gewesen
verbringen: R; verbrachte; hat verbracht
telefonieren: R; telefonierte; hat telefoniert
helfen: helfe,hilfst,hilft,helfen,helft,helfen; half; hat geholfen
finden: finde,findest,findet,finden,findet,finden; fand; hat gefunden
erzählen: R; erzählte; hat erzählt
wohlfühlen: fühle wohl,fühlst wohl,fühlt wohl,fühlen wohl,fühlt wohl,fühlen wohl; fühlte wohl; hat wohlgefühlt
möchten: möchte,möchtest,möchte,möchten,möchtet,möchten; wollte; hat gewollt
streichen: R; strich; hat gestrichen
zeigen: R; zeigte; hat gezeigt
arbeiten: arbeite,arbeitest,arbeitet,arbeiten,arbeitet,arbeiten; arbeitete; hat gearbeitet
fahren: fahre,fährst,fährt,fahren,fahrt,fahren; fuhr; ist gefahren
schlafen: schlafe,schläfst,schläft,schlafen,schlaft,schlafen; schlief; hat geschlafen
treffen: treffe,triffst,trifft,treffen,trefft,treffen; traf; hat getroffen
müssen: muss,musst,muss,müssen,müsst,müssen; musste; hat gemusst
liegen: R; lag; hat gelegen
entwickeln: entwickle,entwickelst,entwickelt,entwickeln,entwickelt,entwickeln; entwickelte; hat entwickelt
suchen: R; suchte; hat gesucht
gefallen: gefalle,gefällst,gefällt,gefallen,gefallt,gefallen; gefiel; hat gefallen
essen: esse,isst,isst,essen,esst,essen; aß; hat gegessen
vorhaben: habe vor,hast vor,hat vor,haben vor,habt vor,haben vor; hatte vor; hat vorgehabt
gehen: R; ging; ist gegangen
kaufen: R; kaufte; hat gekauft
geben: gebe,gibst,gibt,geben,gebt,geben; gab; hat gegeben
aufräumen: räume auf,räumst auf,räumt auf,räumen auf,räumt auf,räumen auf; räumte auf; hat aufgeräumt
ernähren: R; ernährte; hat ernährt
anbieten: biete an,bietest an,bietet an,bieten an,bietet an,bieten an; bot an; hat angeboten
reifen: R; reifte; ist gereift
schenken: R; schenkte; hat geschenkt
freuen: R; freute; hat gefreut
ausprobieren: probiere aus,probierst aus,probiert aus,probieren aus,probiert aus,probieren aus; probierte aus; hat ausprobiert
vertragen: vertrage,verträgst,verträgt,vertragen,vertragt,vertragen; vertrug; hat vertragen
stehen: R; stand; hat gestanden
stellen: R; stellte; hat gestellt
kosten: koste,kostest,kostet,kosten,kostet,kosten; kostete; hat gekostet
dürfen: darf,darfst,darf,dürfen,dürft,dürfen; durfte; hat gedurft
können: kann,kannst,kann,können,könnt,können; konnte; hat gekonnt
schicken: R; schickte; hat geschickt
trinken: R; trank; hat getrunken
bleiben: R; blieb; ist geblieben
sehen: sehe,siehst,sieht,sehen,seht,sehen; sah; hat gesehen
machen: R; machte; hat gemacht
hinfahren: fahre hin,fährst hin,fährt hin,fahren hin,fahrt hin,fahren hin; fuhr hin; ist hingefahren
sparen: R; sparte; hat gespart
genießen: genieße,genießt,genießt,genießen,genießt,genießen; genoss; hat genossen
anrufen: rufe an,rufst an,ruft an,rufen an,ruft an,rufen an; rief an; hat angerufen
untersuchen: R; untersuchte; hat untersucht
krankschreiben: schreibe krank,schreibst krank,schreibt krank,schreiben krank,schreibt krank,schreiben krank; schrieb krank; hat krankgeschrieben
holen: R; holte; hat geholt
fühlen: R; fühlte; hat gefühlt
vereinbaren: R; vereinbarte; hat vereinbart
verschreiben: R; verschrieb; hat verschrieben
nehmen: nehme,nimmst,nimmt,nehmen,nehmt,nehmen; nahm; hat genommen
sollen: soll,sollst,soll,sollen,sollt,sollen; sollte; hat gesollt
ausruhen: ruhe aus,ruhst aus,ruht aus,ruhen aus,ruht aus,ruhen aus; ruhte aus; hat ausgeruht
sinken: R; sank; ist gesunken
bringen: R; brachte; hat gebracht
lernen: R; lernte; hat gelernt
abholen: hole ab,holst ab,holt ab,holen ab,holt ab,holen ab; holte ab; hat abgeholt
bekommen: R; bekam; hat bekommen
wechseln: wechsle,wechselst,wechselt,wechseln,wechselt,wechseln; wechselte; hat gewechselt
empfehlen: empfehle,empfiehlst,empfiehlt,empfehlen,empfehlt,empfehlen; empfahl; hat empfohlen
lesen: lese,liest,liest,lesen,lest,lesen; las; hat gelesen
erfahren: erfahre,erfährst,erfährt,erfahren,erfahrt,erfahren; erfuhr; hat erfahren
schwerfallen: falle schwer,fällst schwer,fällt schwer,fallen schwer,fallt schwer,fallen schwer; fiel schwer; ist schwergefallen
anmelden: melde an,meldest an,meldet an,melden an,meldet an,melden an; meldete an; hat angemeldet
mitnehmen: nehme mit,nimmst mit,nimmt mit,nehmen mit,nehmt mit,nehmen mit; nahm mit; hat mitgenommen
ausfüllen: fülle aus,füllst aus,füllt aus,füllen aus,füllt aus,füllen aus; füllte aus; hat ausgefüllt
verstehen: R; verstand; hat verstanden
beantragen: R; beantragte; hat beantragt
erklären: R; erklärte; hat erklärt
werden: werde,wirst,wird,werden,werdet,werden; wurde; ist geworden
bedienen: R; bediente; hat bedient
übergeben: übergebe,übergibst,übergibt,übergeben,übergebt,übergeben; übergab; hat übergeben
dauern: dauere,dauerst,dauert,dauern,dauert,dauern; dauerte; hat gedauert
fragen: R; fragte; hat gefragt
wollen: will,willst,will,wollen,wollt,wollen; wollte; hat gewollt
verpassen: R; verpasste; hat verpasst
erreichen: R; erreichte; hat erreicht
regnen: regne,regnest,regnet,regnen,regnet,regnen; regnete; hat geregnet
tragen: trage,trägst,trägt,tragen,tragt,tragen; trug; hat getragen
absagen: sage ab,sagst ab,sagt ab,sagen ab,sagt ab,sagen ab; sagte ab; hat abgesagt
mögen: mag,magst,mag,mögen,mögt,mögen; mochte; hat gemocht
schneien: R; schneite; hat geschneit
umziehen: ziehe um,ziehst um,zieht um,ziehen um,zieht um,ziehen um; zog um; ist umgezogen
`;
const REFLEXIVE = new Set(["wohlfühlen","ernähren","freuen","fühlen","ausruhen","anmelden"]);
const VERBS = {};
VERBS_SRC.trim().split("\n").forEach(line => {
  const [lemma, rest] = line.split(": ");
  const [pres, praet, perf] = rest.split("; ");
  let forms;
  if (pres === "R") { const st = lemma.replace(/e?n$/, ""); forms = [st+"e", st+"st", st+"t", lemma, st+"t", lemma]; }
  else forms = pres.split(",");
  VERBS[lemma] = { forms, praet, perf, part: perf.split(" ").slice(1).join(" ") };
});

const low = s => (s || "").toLowerCase();
const base = k => low(k.lemma || k.w);

/* ---- the subtype of one token ---- */
function sub(k){
  if (k.sub) return k.sub;
  const w = low(k.w), b = base(k);
  switch (k.pos) {
    case "N": return PROPER.has(w) ? "eigen" : NOMV.has(w) ? "nomv" : "gatt";
    case "V": return MODAL.has(b) ? "modal" : (b === "sein" || b === "heißen") ? "kop" : "voll";
    case "VT": return (!k.lemma || w === low(k.lemma)) ? "inf" : low(k.lemma).startsWith(w) ? "pref" : "part";
    case "P": return (b === "man" || b === "beide") ? "indef" : "pers";
    case "A": return ARTSUB[b] || null;
    case "J": return k.c ? "attr" : k.role === "PN" ? "praed" : "adv";
    case "ADV": return ADV[w] || null;
    case "PR": return PREP[w] || null;
    case "PA": return FUSED[w] ? PREP[FUSED[w][0]] : null;
    case "K": return CONJ[w] || null;
    case "Z": return "kard";
    case "T": return PART[w] || null;
  }
  return null;
}
function subInfo(k){
  const g = GROUP[k.pos] || k.pos, s = sub(k);
  const hit = (SUBS[g] || []).find(x => x[0] === s);
  return hit ? { code: g + "-" + s, de: hit[1], en: hit[2], why: hit[3], idx: SUBS[g].indexOf(hit) } : null;
}

/* ---- tables ---- */
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const CASES = [["N","Nom."],["A","Akk."],["D","Dat."],["G","Gen."]];
const COLS = [["m","mask."],["f","fem."],["n","neutr."],["p","Plural"]];
function grid(rows, hiCase, hiGen, cols){
  cols = cols || COLS;
  let h = `<table class="ft"><tr><th></th>${cols.map(c => `<th>${c[1]}</th>`).join("")}</tr>`;
  CASES.forEach(([c, lab], ri) => {
    if (!rows[ri]) return;
    h += `<tr><th>${lab}</th>${rows[ri].map((v, ci) => `<td${c === hiCase && cols[ci][0] === hiGen ? ' class="hi"' : ""}>${esc(v)}</td>`).join("")}</tr>`;
  });
  return h + "</table>";
}
function einLike(st, plural){
  return [[st, st+"e", st, plural ? st+"e" : "–"], [st+"en", st+"e", st, plural ? st+"e" : "–"],
          [st+"em", st+"er", st+"em", plural ? st+"en" : "–"], [st+"es", st+"er", st+"es", plural ? st+"er" : "–"]];
}
const ART = {
  der: [["der","die","das","die"],["den","die","das","die"],["dem","der","dem","den"],["des","der","des","der"]],
  ein: einLike("ein", false),
  jeder: [["jeder","jede","jedes","(alle)"],["jeden","jede","jedes","(alle)"],["jedem","jeder","jedem","(allen)"],["jedes","jeder","jedes","(aller)"]],
  viel: [["–","–","–","viele"],["–","–","–","viele"],["–","–","–","vielen"],["–","–","–","vieler"]]
};
["mein","dein","sein","ihr","unser","kein"].forEach(s => ART[s] = einLike(s, true));
ART.euer = einLike("eur", true); ART.euer[0][0] = ART.euer[1][2] = ART.euer[0][2] = "euer";

const PERS = [["ich","ich","mich","mir"],["du","du","dich","dir"],["er","er","ihn","ihm"],["sie_f","sie","sie","ihr"],["es","es","es","ihm"],
              ["wir","wir","uns","uns"],["ihr","ihr","euch","euch"],["sie_pl","sie / Sie","sie / Sie","ihnen / Ihnen"]];
const REFL = [["ich","ich","mich","mir"],["du","du","dich","dir"],["sie","er / sie / es","sich","sich"],["wir","wir","uns","uns"],["ihr","ihr","euch","euch"],["sie_pl","sie / Sie","sich","sich"]];
const RELT = [["der","die","das","die"],["den","die","das","die"],["dem","der","dem","denen"],["dessen","deren","dessen","deren"]];

function personTable(rows, key, col){
  const heads = ["Person","Nom.","Akk.","Dat."], ci = { N:1, A:2, D:3 }[col];
  let h = `<table class="ft"><tr>${heads.map(x => `<th>${x}</th>`).join("")}</tr>`;
  rows.forEach(r => { h += `<tr${r[0] === key ? ' class="hr"' : ""}><th>${esc(r[1])}</th>${r.slice(1).map((v, i) => `<td${r[0] === key && i + 1 === ci ? ' class="hi"' : ""}>${esc(v)}</td>`).join("")}</tr>`; });
  return h + "</table>";
}

/* Adjective endings by what stands before it. */
const ADJEND = {
  weak:   [["e","e","e","en"],["en","e","e","en"],["en","en","en","en"],["en","en","en","en"]],
  mixed:  [["er","e","es","en"],["en","e","es","en"],["en","en","en","en"],["en","en","en","en"]],
  strong: [["er","e","es","e"],["en","e","es","e"],["em","er","em","en"],["en","er","en","er"]]
};
const ADJNAME = { weak:"after der / jeder (weak endings)", mixed:"after ein / kein / mein (mixed endings)", strong:"without an article (strong endings)" };
const COMP = { gut:["besser","am besten"], viel:["mehr","am meisten"], "groß":["größer","am größten"], alt:["älter","am ältesten"],
  hoch:["höher","am höchsten"], gesund:["gesünder","am gesündesten"], kalt:["kälter","am kältesten"], lang:["länger","am längsten"],
  jung:["jünger","am jüngsten"], nah:["näher","am nächsten"], warm:["wärmer","am wärmsten"], "heiß":["heißer","am heißesten"],
  krank:["kränker","am kränksten"], kurz:["kürzer","am kürzesten"], schwach:["schwächer","am schwächsten"], stark:["stärker","am stärksten"] };
const NOCOMP = new Set(["letzt","nächst","international","berufstätig","begeistert","ander","zweit","viert","halb","ganz","motiviert","gültig","anstrengend"]);
function adjDecl(k){
  const at = k.sen.indexOf(k);
  for (let j = at - 1; j >= 0; j--) {
    const t = k.sen[j];
    if (t.pos === "J" || t.pos === "Z") continue;
    if (t.pos === "PA") return "weak";
    if (t.pos === "A") { const b = base(t); return (b === "der" || b === "jeder") ? "weak" : b === "viel" ? "strong" : "mixed"; }
    break;
  }
  return "strong";
}
function comparison(lemma){
  const l = low(lemma);
  if (NOCOMP.has(l)) return "";
  const [c, s] = COMP[l] || [l + "er", "am " + l + (/(d|t|s|ß|x|z|sch|u)$/.test(l) ? "esten" : "sten")];
  return `<p class="fl">Steigerung: <b>${esc(l)}</b> – <b>${esc(c)}</b> – <b>${esc(s)}</b></p>`;
}

function verbTable(k){
  const v = VERBS[base(k)];
  if (!v) return "";
  const s = sub(k), w = low(k.w);
  const who = ["ich","du","er / sie / es","wir","ihr","sie / Sie"];
  const refl = REFLEXIVE.has(base(k)) ? ["mich","dich","sich","uns","euch","sich"] : null;
  let h = `<table class="ft"><tr><th>Person</th><th>Präsens</th></tr>`;
  v.forms.forEach((f, i) => {
    const parts = f.split(" "), shown = refl ? [parts[0], refl[i], ...parts.slice(1)].join(" ") : f;
    const hi = k.pos === "V" && low(parts[0]) === w;
    h += `<tr><th>${who[i]}</th><td${hi ? ' class="hi"' : ""}>${esc(shown)}</td></tr>`;
  });
  h += `</table>`;
  const inf = (refl ? "sich " : "") + base(k);
  h += `<p class="fl"><span${s === "inf" ? ' class="hi"' : ""}>Infinitiv: <b>${esc(inf)}</b></span> · Präteritum: <b>er ${esc(v.praet)}</b> · <span${s === "part" ? ' class="hi"' : ""}>Perfekt: <b>er ${esc(v.perf)}</b></span></p>`;
  if (s === "pref") h += `<p class="fl">Separable verb: the prefix <b class="hi">${esc(k.w)}</b> goes to the end in a main clause.</p>`;
  return h;
}

/* Every word of one kind in all the texts, for the groups that have no
   declension table: prepositions, conjunctions, adverbs, particles. */
function groupList(map, code, label){
  /* "am" and "liebsten" are tagged apart but learned as one form. */
  const words = Object.keys(map).filter(x => map[x] === code && x !== "am").map(x => x === "liebsten" ? "am liebsten" : x);
  return `<p class="fl">${esc(label)}: ${words.map(x => `<b>${esc(x)}</b>`).join(", ")}</p>`;
}

function forms(k){
  const b = base(k), s = sub(k);
  switch (k.pos) {
    case "A": return ART[b] ? `<p class="fl">${esc(b === "der" ? "der · die · das" : b)} in all cases:</p>` + grid(ART[b], k.c, k.gen) : "";
    case "P":
      if (s === "rel" || s === "dem") return `<p class="fl">${s === "rel" ? "Relative" : "Demonstrative"} pronoun in all cases:</p>` + grid(RELT, k.c, k.gen);
      if (s === "refl") return personTable(REFL, b === "sie" ? "sie" : b, k.c);
      if (b === "man") return `<table class="ft"><tr><th>Nom.</th><th>Akk.</th><th>Dat.</th></tr><tr><td class="hi">man</td><td>einen</td><td>einem</td></tr></table>`;
      if (b === "beide") return grid([[ "–","–","–","beide"],["–","–","–","beide"],["–","–","–","beiden"],["–","–","–","beider"]], k.c, "p");
      return personTable(PERS, b === "sie" ? (k.gen === "p" ? "sie_pl" : "sie_f") : b, k.c);
    case "J": {
      const cmp = comparison(k.lemma || k.w);
      if (!k.c) return `<p class="fl">No ending here (${s === "praed" ? "after sein" : "describes the verb"}).</p>` + cmp;
      const d = adjDecl(k), st = low(k.w).replace(/(em|en|er|es|e)$/, "");
      return `<p class="fl">Endings ${ADJNAME[d]}:</p>` + grid(ADJEND[d].map(r => r.map(e => st + e)), k.c, k.gen) + cmp;
    }
    case "V": case "VT": return verbTable(k);
    case "PR": return groupList(PREP, s, SUBS.PR.find(x => x[0] === s)[1]);
    case "PA": { const [p, a] = FUSED[low(k.w)]; return `<p class="fl"><b>${esc(k.w)}</b> = ${esc(p)} + ${esc(a)}. All fused forms: ${Object.keys(FUSED).map(x => `<b>${x}</b> = ${FUSED[x].join(" ")}`).join(" · ")}</p>` + groupList(PREP, s, SUBS.PR.find(x => x[0] === s)[1]); }
    case "K": return groupList(CONJ, s, SUBS.K.find(x => x[0] === s)[1]);
    case "ADV": return groupList(ADV, s, SUBS.ADV.find(x => x[0] === s)[1] + " in these texts");
    case "T": return groupList(PART, s, SUBS.T.find(x => x[0] === s)[1]);
    case "Z": return `<p class="fl">eins · zwei · drei · vier · fünf · sechs · sieben · acht · neun · zehn · elf · zwölf · zwanzig · hundert</p>`;
    case "N": return s === "eigen" ? `<p class="fl">A name: usually no article, no plural. Genitive adds -s: Lenas Mann, Berlins Zentrum.</p>` : null;
  }
  return "";
}

/* ---- TeKaMoLo: what kind of adverbial each AB phrase is ----
   A phrase starts at a preposition, adverb, particle, adverbial adjective or
   "als", and runs on through the articles, adjectives, numbers and nouns
   after it. Its kind comes from its head: time nouns make it temporal
   whatever the preposition; "mit" is modal (with whom / by what), "trotz"
   and "für" causal (despite / for whom), other prepositions local; "nach" +
   an article is temporal (nach dem Essen) but + a name local (nach Porto). */
const TM = { te:["Temporal","Wann? Wie lange? Wie oft?"], ka:["Kausal","Warum? Wozu? Trotz was?"], mo:["Modal","Wie? Mit wem? Womit?"], lo:["Lokal","Wo? Wohin? Woher?"] };
const TIMEN = new Set(["sonntag","montag","samstag","morgen","tag","woche","monat","jahr","jahren","jahre","sommer","abend","wochenende","hochzeit","stunden","tage","freizeit","kochen","uhr","ende","tagen","ferien","sommerferien","stunde","mai","elternabend","wochen","minuten","herbst","winter","juli","nachmittag"]);
const ADVTM = { zeit:"te", haeuf:"te", ort:"lo", art:"mo", komm:"mo", konj:"ka", pron:"mo" };
let phraseId = 0;
function tekamolo(toks){
  let head = null, run = [];
  const close = () => {
    if (!run.length) return;
    let tm;
    const h = head, hw = low(h.w);
    if (run.some(t => t.pos === "N" && TIMEN.has(low(t.w)))) tm = "te";
    else if (h.pos === "ADV") tm = ADVTM[sub(h)] || "mo";
    else if (h.pos === "T") tm = hw === "noch" ? "te" : "mo";
    else if (h.pos === "J" || h.pos === "K") tm = "mo";
    else if (h.pos === "PR" || h.pos === "PA") {
      const p = h.pos === "PA" ? FUSED[hw][0] : hw;
      if (p === "mit" || p === "ohne" || p === "per" || p === "laut" || run.some(t => low(t.w) === "glück")) tm = "mo";
      else if (p === "trotz" || p === "wegen" || p === "für") tm = "ka";
      else if (p === "nach") tm = run.some(t => t.pos === "A") ? "te" : "lo";
      else if (p === "von" && run.some(t => low(t.w) === "beruf")) tm = "mo";
      else tm = "lo";
    } else tm = "te";          // a bare noun phrase as adverbial: jeden Tag, letzte Woche
    const id = ++phraseId;
    run.forEach(t => { t.tm = tm; t.ph = id; });
    run = []; head = null;
  };
  toks.forEach((t, i) => {
    if (t.role !== "AB") { close(); return; }
    const prev = run[run.length-1];
    let starts = ["PR","PA","ADV","T","K"].includes(t.pos) || (t.pos === "J" && !t.c) || !run.length || toks[i-1].punct;
    // a second phrase straight after a noun: im Mai | fünf Tage, jeden Tag | eine halbe Stunde
    if (prev && prev.pos === "N" && ["A","Z"].includes(t.pos)) starts = true;
    // but "bis zum Ende" and "zwei Wochen lang" stay one phrase
    if (prev && ((low(prev.w) === "bis" && ["PR","PA"].includes(t.pos)) || (low(t.w) === "lang" && prev.pos === "N"))) starts = false;
    // "am liebsten" is one adverb even though it is two tokens
    if (starts && !(low(t.w) === "liebsten" && run.length && low(run[run.length-1].w) === "am")) close();
    if (!run.length) head = t;
    run.push(t);
    if (t.pos === "T") close();   // nicht / nur / noch stand alone
  });
  close();
}

/* What the checker insists on for every token. */
function problem(k){
  if (!subInfo(k)) return "no subtype";
  if ((k.pos === "V" || k.pos === "VT") && !VERBS[base(k)]) return "no conjugation for " + base(k);
  if (k.pos === "A" && !ART[base(k)]) return "no article table for " + base(k);
  return "";
}

window.WL = { SUBS, GROUP, sub, subInfo, forms, problem, VERBS, TM, tekamolo };
})();
