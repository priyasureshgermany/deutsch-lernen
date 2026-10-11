/* der, die, das: the cheat sheet in Grammatik › Artikel and the Artikel-Finder.

   One list of rules feeds both, so the sheet and the finder never disagree.
   s = how sure a rule is: 2 immer / fast immer · 1 meistens · 0 oft.
   guess(word) tries, in this order: known exceptions (also as the last part
   of a compound), meaning groups (days, weather, colours …), endings.
   tools/check-grammatik.mjs runs every example and exception through
   guess() – a rule that contradicts its own examples fails the check. */
(function(){
const STEPS=[
 ["Ist es eine Person oder ein Tier mit Geschlecht? Dann das natürliche Geschlecht.","A person or an animal with a sex? Then the natural gender.","der Vater · die Mutter · der Lehrer · die Lehrerin"],
 ["Ist das Wort zusammengesetzt? Das letzte Wort bestimmt den Artikel.","A compound? The last word decides.","das Haus + die Tür → die Haustür"],
 ["Schau auf die Endung – die Tabelle unten.","Look at the ending – see the table below.","-ung → die · -chen → das · -ling → der"],
 ["Gehört es zu einer Bedeutungsgruppe?","Does it belong to a meaning group?","Tage, Monate → der · Farben, Sprachen → das"],
 ["Steht es im Text? Lies den Artikel aus dem Satz ab.","Is it in a text? Read the article from the sentence.","zur Arbeit → die · einen Termin → der · im Büro → der/das"],
 ["Noch unsicher? Artikel-Finder oder Wörterbuch (m = der, f = die, n = das).","Still unsure? The finder or a dictionary (m, f, n).","immer mit Artikel und Plural lernen: der Tisch, die Tische"]];

/* endings, most reliable first; rx is tested on the lower-case word */
const RULES=[
 {a:"der",e:"-ling",rx:/ling$/,s:2,x:"der Frühling · der Lehrling · der Liebling"},
 {a:"der",e:"-ismus",rx:/ismus$/,s:2,x:"der Tourismus · der Journalismus"},
 {a:"der",e:"-ig",rx:/ig$/,s:2,x:"der Honig · der König · der Essig"},
 {a:"der",e:"-eur",rx:/eur$/,s:2,x:"der Friseur · der Ingenieur"},
 {a:"die",e:"-ung",rx:/ung$/,s:2,x:"die Wohnung · die Zeitung · die Rechnung"},
 {a:"die",e:"-heit",rx:/heit$/,s:2,x:"die Gesundheit · die Freiheit"},
 {a:"die",e:"-keit",rx:/keit$/,s:2,x:"die Möglichkeit · die Pünktlichkeit"},
 {a:"die",e:"-schaft",rx:/schaft$/,s:2,x:"die Freundschaft · die Mannschaft"},
 {a:"die",e:"-ion",rx:/(t|s|ss)ion$/,s:2,x:"die Information · die Diskussion"},
 {a:"die",e:"-tät",rx:/tät$/,s:2,x:"die Universität · die Qualität"},
 {a:"die",e:"-enz / -anz",rx:/(enz|anz)$/,s:2,x:"die Konferenz · die Distanz"},
 {a:"das",e:"-chen / -lein",rx:/(chen|lein)$/,s:2,x:"das Brötchen · das Mädchen · das Fräulein"},
 {a:"das",e:"-tum",rx:/tum$/,s:1,x:"das Eigentum · das Wachstum",n:"aber: der Irrtum, der Reichtum"},
 {a:"das",e:"-ment",rx:/ment$/,s:1,x:"das Dokument · das Medikament",n:"aber: der Moment"},
 {a:"das",e:"-nis",rx:/nis$/,s:1,x:"das Ergebnis · das Zeugnis",n:"aber: die Erlaubnis, die Kenntnis"},
 {a:"das",e:"-ma",rx:/ma$/,s:1,x:"das Thema · das Klima",n:"aber: die Firma, die Oma"},
 {a:"das",e:"Ge- … -e",rx:/^ge.{2,}e$/,s:1,x:"das Gebäude · das Gemüse",n:"aber: der Gedanke, die Geschichte"},
 {a:"das",e:"Ge-",rx:/^ge.{2,}$/,s:0,x:"das Geschenk · das Getränk · das Gespräch",n:"aber: der Geburtstag, die Gefahr, der Geschmack"},
 {a:"der",e:"-ist",rx:/ist$/,s:1,x:"der Polizist · der Tourist",n:"Personen; aber: die Frist"},
 {a:"der",e:"-or",rx:/or$/,s:1,x:"der Motor · der Doktor",n:"aber: das Labor, das Tor"},
 {a:"der",e:"-ant / -ent",rx:/(ant|ent)$/,s:1,x:"der Praktikant · der Student · der Patient",n:"Personen; aber: das Restaurant, das Prozent"},
 {a:"die",e:"-ik",rx:/ik$/,s:1,x:"die Musik · die Politik · die Klinik"},
 {a:"die",e:"-ur",rx:/ur$/,s:1,x:"die Kultur · die Natur · die Reparatur",n:"aber: das Abitur, der Flur"},
 {a:"die",e:"-ei",rx:/ei$/,s:1,x:"die Bäckerei · die Polizei",n:"aber: das Ei"},
 {a:"die",e:"-ie",rx:/ie$/,s:1,x:"die Familie · die Batterie",n:"aber: das Knie"},
 {a:"die",e:"-in (Frauen)",rx:/(erin|in)$/,s:1,x:"die Ärztin · die Freundin · die Nachbarin",n:"aber: der Termin, das Benzin"},
 {a:"das",e:"-um",rx:/um$/,s:1,x:"das Zentrum · das Museum · das Datum",n:"aber: der Konsum"},
 {a:"das",e:"-o",rx:/o$/,s:1,x:"das Auto · das Büro · das Konto",n:"aber: der Euro, die Disco"},
 {a:"der",e:"-er",rx:/er$/,s:1,x:"der Lehrer · der Computer · der Fahrer",n:"Personen und Geräte; aber: die Mutter, die Butter, das Zimmer, das Fenster"},
 {a:"der",e:"-en",rx:/en$/,s:0,x:"der Garten · der Wagen · der Kuchen",n:"aber: Verb als Nomen ist das – das Essen, das Leben"},
 {a:"die",e:"-e",rx:/e$/,s:1,x:"die Tasche · die Straße · die Lampe",n:"etwa 90 %; aber: der Name, der Junge, der Käse, das Ende"}];

/* meaning groups: w = the words the finder knows (also as the end of a compound) */
const GROUPS=[
 {a:"der",m:"Tage, Monate, Jahreszeiten",men:"days, months, seasons",x:"der Montag · der Mai · der Sommer",n:"aber: die Woche, das Jahr",
  w:"montag dienstag mittwoch donnerstag freitag samstag sonntag januar februar märz april mai juni juli august september oktober november dezember frühling sommer herbst winter"},
 {a:"der",m:"Tageszeiten",men:"times of day",x:"der Morgen · der Mittag · der Abend",n:"aber: die Nacht",w:"morgen vormittag mittag nachmittag abend"},
 {a:"der",m:"Wetter, Himmelsrichtungen",men:"weather, compass points",x:"der Regen · der Schnee · der Norden",n:"aber: die Sonne, das Gewitter",
  w:"regen schnee wind sturm nebel hagel frost norden süden osten westen"},
 {a:"der",m:"Getränke mit Alkohol, Kaffee, Tee",men:"alcoholic drinks, coffee, tea",x:"der Wein · der Kaffee · der Tee",n:"aber: das Bier, das Wasser, die Milch",
  w:"wein kaffee tee saft sekt schnaps whisky likör cocktail"},
 {a:"der",m:"Automarken",men:"car makes",x:"der BMW · der Audi · der Opel",w:"bmw audi vw opel porsche mercedes toyota"},
 {a:"der",m:"Verbstamm ohne Endung",men:"verb stem without an ending",x:"anrufen → der Anruf · kaufen → der Kauf",
  w:"anruf besuch kauf einkauf verkauf schlaf lauf flug sprung schluss beginn umzug ausflug streit rat"},
 {a:"die",m:"Zahlen als Nomen",men:"numbers as nouns",x:"die Eins · die Drei · die Zehn",n:"aber: das Hundert, das Tausend",
  w:"null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf"},
 {a:"die",m:"Bäume, Blumen, viele Flüsse",men:"trees, flowers, many rivers",x:"die Eiche · die Rose · die Donau",n:"aber: der Rhein, der Main",
  w:"eiche buche linde tanne birke rose tulpe lilie nelke donau elbe mosel spree weser"},
 {a:"das",m:"Farben, Sprachen",men:"colours, languages",x:"das Blau · das Rot · das Deutsch",
  w:"blau rot grün gelb schwarz weiß grau braun rosa lila deutsch englisch französisch spanisch türkisch arabisch russisch italienisch polnisch"},
 {a:"das",m:"Metalle",men:"metals",x:"das Gold · das Silber · das Eisen",w:"gold silber eisen kupfer metall blei"},
 {a:"das",m:"Länder, Städte, Kontinente",men:"countries, cities, continents",x:"das schöne Berlin · das heutige Deutschland",n:"aber: die Schweiz, die Türkei, der Iran, die USA",
  w:"deutschland frankreich spanien italien indien china europa afrika asien berlin frankfurt hamburg münchen köln"},
 {a:"das",m:"Kinder und junge Tiere",men:"children and young animals",x:"das Kind · das Baby · das Kalb",w:"kind baby kalb lamm küken ferkel"},
 {a:"das",m:"Brüche, Buchstaben",men:"fractions, letters",x:"das Viertel · das Drittel · das A",w:"viertel drittel fünftel zehntel"},
 {a:"die",m:"nur Plural",men:"plural only",x:"die Leute · die Eltern · die Ferien",w:"leute eltern ferien geschwister kosten lebensmittel"}];

/* exceptions to the rules above and words with two articles */
const EXC={mädchen:["das","-chen ist immer das – auch beim Mädchen"],fräulein:["das","-lein ist immer das"],
 person:["die","„die Person“ – auch für Männer"],junge:["der","männliche Person auf -e: der"],kollege:["der","männliche Person auf -e: der"],kunde:["der","männliche Person auf -e: der"],
 name:["der","Ausnahme zu -e"],käse:["der","Ausnahme zu -e"],ende:["das","Ausnahme zu -e"],auge:["das","Ausnahme zu -e"],interesse:["das","Ausnahme zu -e"],
 butter:["die","Ausnahme zu -er"],mutter:["die","Frau: die"],tochter:["die","Frau: die"],schwester:["die","Frau: die"],
 zimmer:["das","Ausnahme zu -er"],fenster:["das","Ausnahme zu -er"],wetter:["das","Ausnahme zu -er"],wasser:["das","Ausnahme zu -er"],messer:["das","Ausnahme zu -er"],
 theater:["das","Ausnahme zu -er"],ufer:["das","Ausnahme zu -er"],feuer:["das","Ausnahme zu -er"],gewitter:["das","Ge- … : das"],
 bier:["das","Ausnahme bei den Getränken"],milch:["die","Ausnahme bei den Getränken"],nacht:["die","Ausnahme bei den Tageszeiten"],
 woche:["die","Zeitwort, aber -e: die"],jahr:["das","Zeitwort, aber: das"],frühjahr:["das","das Jahr → das Frühjahr"],sonne:["die","Ausnahme beim Wetter"],
 termin:["der","Ausnahme zu -in (keine Frau)"],benzin:["das","Ausnahme zu -in (keine Frau)"],
 erlaubnis:["die","Ausnahme zu -nis"],kenntnis:["die","Ausnahme zu -nis"],irrtum:["der","Ausnahme zu -tum"],reichtum:["der","Ausnahme zu -tum"],
 moment:["der","Ausnahme zu -ment"],firma:["die","Ausnahme zu -ma"],oma:["die","Frau: die"],euro:["der","Ausnahme zu -o"],disco:["die","Ausnahme zu -o"],
 ei:["das","Ausnahme zu -ei"],knie:["das","Ausnahme zu -ie"],abitur:["das","Ausnahme zu -ur"],flur:["der","Ausnahme zu -ur"],
 labor:["das","Ausnahme zu -or"],tor:["das","Ausnahme zu -or"],restaurant:["das","Ausnahme zu -ant"],prozent:["das","Ausnahme zu -ent"],talent:["das","Ausnahme zu -ent"],
 frist:["die","Ausnahme zu -ist"],konsum:["der","Ausnahme zu -um"],
 geburtstag:["der","der Tag → der Geburtstag"],gefahr:["die","Ausnahme zu Ge-"],geschmack:["der","Ausnahme zu Ge-"],gedanke:["der","Ausnahme zu Ge- … -e"],
 geschichte:["die","Ausnahme zu Ge- … -e"],gemeinde:["die","Ausnahme zu Ge- … -e"],gegend:["die","Ausnahme zu Ge-"],gebühr:["die","Ausnahme zu Ge-"],gewinn:["der","Ausnahme zu Ge-"],
 schweiz:["die","Land mit Artikel"],türkei:["die","Land mit Artikel"],iran:["der","Land mit Artikel"],irak:["der","Land mit Artikel"],usa:["die","Plural: die USA"],
 rhein:["der","Fluss: der Rhein"],main:["der","Fluss: der Main"],hundert:["das","Ausnahme bei den Zahlen"],tausend:["das","Ausnahme bei den Zahlen"],
 kuchen:["der","kein -chen (klein): der Kuchen"],knochen:["der","kein -chen (klein): der Knochen"],
 essen:["das","Verb als Nomen: das"],leben:["das","Verb als Nomen: das"],zeichen:["das","Ausnahme zu -en"],
 see:["der / die","der See = lake · die See = sea"],leiter:["der / die","der Leiter = boss · die Leiter = ladder"],steuer:["die / das","die Steuer = tax · das Steuer = steering wheel"],
 teil:["der / das","der Teil = part of a whole · das Teil = a piece, a thing"],band:["die / das / der","die Band = music group · das Band = ribbon · der Band = volume"],
 antwort:["die","die Antwort – nicht das Wort"],grad:["der","der Grad – nicht das Rad"],mauer:["die","Ausnahme zu -er"],schulter:["die","Ausnahme zu -er"],nummer:["die","Ausnahme zu -er"],
 feier:["die","Ausnahme zu -er"],meer:["das","Ausnahme zu -er"],fieber:["das","Ausnahme zu -er"],silvester:["das","Fest: das Silvester"],weihnachten:["das","Fest: das Weihnachten (meist ohne Artikel)"],ampel:["die","die Ampel"],reis:["der","der Reis"]};

/* common B1 nouns without a clear rule – the finder knows them, also as the
   last part of a compound (Schreib|tisch, Geburtstags|feier, Arbeits|platz) */
const NOUNS={
 der:"tisch stuhl schrank platz hof mantel zug bus weg tag arzt preis kurs schein ausweis pass brief markt laden plan raum baum berg fluss hund vogel fisch apfel kopf fuß arm hals bauch mund zahn schuh rock hut ring schlüssel löffel topf ofen herd job beruf chef vertrag antrag betrag lohn urlaub unfall verkehr stau strom müll lärm nachbar sohn onkel freund mann gast sport film krieg himmel boden block saal zettel stift erfolg grund kontakt hunger durst wunsch dank salat senf eingang ausgang körper zucker kreis",
 die:"tür uhr zeit stadt arbeit bahn wand hand welt luft frau maus kuh wurst post bank kraft angst fahrt kunst tafel gabel kartoffel nudel zahl wahl schuld geduld zukunft ankunft auskunft haut brust",
 das:"haus amt geld buch bild bett brot fleisch obst glas papier ticket handy formular land dorf licht spiel kleid hemd heft rad tier pferd schwein huhn ohr herz bein dach wort recht hotel problem programm system ziel rezept paket internet stück gleis angebot verbot boot blatt fahrrad"};
const SHORT=new Set("tag weg zug hof amt tür uhr bus rad ohr".split(" "));   /* safe as the end of a compound although short */

const SURE=["oft","meistens","immer"];
function guess(raw){
 const word=String(raw||"").trim().replace(/^(der|die|das)\s+/i,""),w=word.toLowerCase();
 if(/^[a-zäöü]$/.test(w))return {word,a:"das",s:2,kind:"group",why:"Buchstabe",text:"Buchstaben sind das: das "+word.toUpperCase()};
 if(!/^[a-zäöüß-]{2,}$/i.test(w))return null;
 /* the longest known exception or group word at the end of the word: the last part of a compound */
 let best=null;
 const ends=k=>w===k||(w.endsWith(k)&&w.length>k.length&&(k.length>=4||SHORT.has(k)));
 const take=(k,o)=>{if(ends(k)&&(!best||k.length>best.k.length))best=Object.assign({k},o)};
 for(const k in EXC)take(k,{a:EXC[k][0],why:EXC[k][1],kind:"exc"});
 for(const g of GROUPS)for(const k of g.w.split(" "))take(k,{a:g.a,why:g.m,kind:"group",n:g.n});
 for(const a in NOUNS)for(const k of NOUNS[a].split(" "))take(k,{a,kind:"known"});
 if(best){const comp=best.k!==w,K=best.k[0].toUpperCase()+best.k.slice(1);
  return {word,a:best.a,s:best.kind==="group"?1:2,kind:best.kind,why:best.why,n:best.n,part:comp?best.k:"",
   text:(comp?"Das letzte Wort ist „"+K+"“ – ":"")+(best.kind==="exc"?best.why:best.kind==="group"?"Gruppe: "+best.why:best.a+" "+K)}}
 for(const r of RULES)if(r.rx.test(w))return {word,a:r.a,s:r.s,kind:"rule",rule:r,why:r.e,n:r.n,
  text:"Endung "+r.e+" → "+r.a+" ("+SURE[r.s]+")"};
 return {word,a:"",s:-1,kind:"none",text:"Keine sichere Regel – schau ins Wörterbuch."}}

window.ARTIKEL={STEPS,RULES,GROUPS,EXC,SURE,guess};
})();
