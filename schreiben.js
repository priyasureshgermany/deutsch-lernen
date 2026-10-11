/* Schreiben: the Modelltest letter, evaluated automatically.
   Schreiben.analyse(part, testId, text, lt, fill) → what the result page shows:
     • every Leitpunkt / Punkt: found in which sentences, how many points, why,
       and a sentence that would have done it
     • A1 Anrede und Gruß · B1 Kommunikative Gestaltung: a checklist
     • B1 Formale Richtigkeit: the mistakes LanguageTool finds, per 100 words
     • the tips to get better
   Schreiben.check(text) asks LanguageTool (api.languagetool.org, free, no key)
   for spelling and grammar mistakes; without a connection that one criterion
   stays for the learner to rate.
   KEYS: per test id, per point: [regex (lower case, no word boundaries –
   \b does not work with umlauts), a sentence that covers the point]. */
(function(){
const DAYS="montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|wochenende";
const KEYS={
 "a1-1":[["krank|erkält|fieber|schmerz|arzt|nicht (zum|in den) (deutsch)?kurs|nicht kommen","Ich bin leider krank und kann heute nicht zum Kurs kommen."],
  ["wieder|"+DAYS+"|nächste[nr]? woche|übermorgen|in \\S+ tagen","Ich komme am Montag wieder."],
  ["hausaufgabe|aufgaben","Können Sie mir bitte die Hausaufgaben schicken?"]],
 "a1-2":[[DAYS+"|uhr|morgen|heute|abend|\\d","Am Samstag um 19 Uhr feiere ich meinen Geburtstag."],
  ["bei mir|zu hause|zuhause|wohnung|restaurant|caf[eé]|garten|park|straße|str\\.|adresse|kneipe|club|saal|raum|in (der|meiner|unserer) ","Die Party ist bei mir zu Hause, in der Bahnhofstraße 5."],
  ["mitbring|bring|getränk|salat|kuchen|musik|chips|wein|bier|saft","Kannst du bitte Getränke mitbringen?"]],
 "a1-3":[["heizung|kaputt|funktioniert nicht|geht nicht|kalt","In meiner Wohnung ist die Heizung kaputt."],
  ["seit|gestern|vorgestern|letzte[nr]? woche|"+DAYS,"Sie funktioniert seit Montag nicht mehr."],
  ["handwerker|techniker|monteur|reparier|schicken|jemand","Können Sie bitte schnell einen Handwerker schicken?"]],
 "a1-4":[["wann|uhrzeit|zeiten|beginn|anfang|fängt|morgens|abends|abendkurs|vormittag|nachmittag|uhr|"+DAYS,"Wann beginnt der Kurs und um wie viel Uhr ist der Unterricht?"],
  ["preis|kost|euro|€|teuer|gebühr|bezahl|zahl","Was kostet der Kurs?"],
  ["anmeld|registrier|einschreib|formular|platz","Wie kann ich mich anmelden?"]],
 "a1-5":[["termin.*(am|um|bei|heute|morgen)|um \\d|dienstag|dr\\.","Ich habe am Dienstag um 10 Uhr einen Termin bei Dr. Weber."],
  ["weil|denn|leider|muss|arbeit|krank|keine zeit|kind|reise|kann nicht","Leider muss ich an diesem Tag arbeiten."],
  ["neue[nr]? termin|andere[nr]? (termin|tag)|kann ich am|später|verschieb|montag|mittwoch|donnerstag|freitag|nächste woche|wann kann ich","Kann ich am Donnerstag kommen?"]],
 "a1-6":[["dank","Vielen Dank für die Einladung!"],
  ["(ich|wir) komm|dabei|freue mich|gern","Ich komme am Samstag sehr gern."],
  ["mitbring|bring|salat|getränk|kuchen|fleisch|brot|wein|bier|saft","Was soll ich mitbringen?"]],
 "a1-7":[["weil|denn|krank|arzt|termin|arbeit|muss|kind|leider","Ich kann morgen leider nicht kommen, denn ich habe einen Arzttermin."],
  ["hausaufgabe|aufgaben","Welche Hausaufgaben haben wir?"],
  ["wieder|"+DAYS+"|nächste[nr]? woche|übermorgen|in \\S+ tagen","Am Donnerstag bin ich wieder da."]],
 "b1-1":[["wohnung|miete|wg|zimmer|makler|portal|immobil|wohnen","Die Wohnungssuche ist hier nicht einfach, weil die Mieten sehr hoch sind. Such am besten auf mehreren Portalen."],
  ["stadtteil|viertel|bornheim|bockenheim|sachsenhausen|nordend|innenstadt|zentrum|u-bahn|s-bahn|bus|straßenbahn|tram|verkehr|fahrrad|ticket|bahn","Bornheim ist ein schöner Stadtteil, und mit der U-Bahn bist du schnell in der Innenstadt."],
  ["freizeit|museum|park|main|sport|kino|theater|caf[eé]|restaurant|konzert|wander|taunus|joggen|ausgehen|bar|club|fest","In der Freizeit kann man am Main joggen oder ins Museum gehen."],
  ["helfe|hilfe|übernacht|schlafen|bei mir wohnen|sofa|gästezimmer|abhol|unterstütz|zeige dir|begleit","Wenn du möchtest, kannst du bei mir wohnen, bis du eine Wohnung gefunden hast."]],
 "b1-2":[["schreibe|beschwer|mitglied|vertrag|unzufrieden|ärger|enttäuscht","Ich schreibe Ihnen, weil ich mit Ihrem Fitnessstudio sehr unzufrieden bin."],
  ["kaputt|defekt|dreckig|schmutzig|voll|gerät|dusche|trainer|ausgefallen|fällt|funktion|kalt|laut|öffnungszeit|problem","Viele Geräte sind seit Wochen kaputt, und die Duschen sind oft schmutzig."],
  ["erwarte|bitte|sollte|sofort|repar|geld zurück|erstatt|rabatt|ermäßig|lösung|verbesser","Ich erwarte, dass Sie die Geräte bald reparieren lassen."],
  ["sonst|kündig|anwalt|verbraucherzentrale|bewertung|andernfalls|vertrag beenden|wechsel|wenn sich nichts","Wenn sich nichts ändert, werde ich meinen Vertrag kündigen."]],
 "b1-3":[["vorbereitung|interess|b1|schreibe","Ich schreibe Ihnen, weil ich mich für Ihren Vorbereitungskurs auf die B1-Prüfung interessiere."],
  ["zeit|wann|uhr|abend|morgens|vormittag|nachmittag|wochenende|beginn|anfang|dauer|wie lange|wochen|stunden","Wann beginnt der Kurs, und an welchen Tagen findet er statt?"],
  ["kost|preis|euro|€|gebühr|teuer|bezahl|rate|ermäßig|zahl","Was kostet der Kurs, und kann man in Raten bezahlen?"],
  ["anmeld|prüfungstermin|registrier|prüfung.*(wann|wo|wie|termin)","Wie kann ich mich zur Prüfung anmelden?"]],
 "b1-4":[["schreibe|gekauft|kauf|beschwer|reklam|rechnung","Ich schreibe Ihnen, weil ich vor zwei Wochen bei Ihnen eine Waschmaschine gekauft habe."],
  ["kaputt|funktion|läuft|wasser|pump|schleuder|start|geräusch|laut|defekt|problem|geht nicht|fehler","Leider funktioniert sie schon nicht mehr: Sie pumpt das Wasser nicht ab."],
  ["repar|neue[ns]? (gerät|maschine|waschmaschine)|umtausch|austausch|ersetz|geld zurück|erstatt|garantie|gewährleistung|erwarte","Ich erwarte, dass Sie das Gerät reparieren oder mir eine neue Maschine geben."],
  ["sonst|anwalt|verbraucherzentrale|keine antwort|nicht (antworten|reagieren|melden)|bewertung|frist|bis zum|rechtlich","Wenn ich bis zum 30. Mai keine Antwort bekomme, wende ich mich an die Verbraucherzentrale."]],
 "b1-5":[["dank","Vielen Dank für deine Einladung zur Hochzeit – ich habe mich sehr gefreut."],
  ["weil|denn|leider|kann nicht|keine zeit|reise|urlaub|arbeit|krank|termin|familie|umzug|prüfung","Leider kann ich nicht kommen, weil ich an dem Tag bei meiner Familie in Indien bin."],
  ["treffen|vorschlag|wollen wir|sollen wir|können wir|besuch|essen gehen|feiern wir|zusammen|wann hast du","Wollen wir uns nach der Hochzeit treffen und zusammen essen gehen?"],
  ["glückwunsch|gratulier|alles gute|wünsche (euch|dir)|viel glück|glücklich","Ich wünsche euch alles Gute und viel Glück!"]],
 "b1-6":[["schreibe|interess|anzeige|internet|gelesen|gesehen|möchte .*(kurs|lernen|machen|anmelden)","Ich schreibe Ihnen, weil ich auf Ihrer Website Ihre Abendkurse gesehen habe."],
  ["weil|denn|beruf|arbeit|job|prüfung|niveau|abendkurs|b1|b2|a2|stufe","Ich möchte den Kurs B1 besuchen, weil ich die Sprache für meine Arbeit brauche."],
  ["kost|preis|euro|€|gebühr|zeit|wann|uhr|abend|beginn|dauer|wie lange","Was kostet der Kurs, und an welchen Abenden findet er statt?"],
  ["informationsmaterial|material|broschüre|prospekt|unterlagen|information|infos|zusenden|zuschicken|schicken","Könnten Sie mir bitte Informationsmaterial schicken?"]],
 "b1-7":[["schreibe|gebucht|buchung|beschwer|unzufrieden|enttäuscht","Ich schreibe Ihnen, weil ich mit der Busreise nach Prag, die ich bei Ihnen gebucht habe, sehr unzufrieden bin."],
  ["verspät|bus|hotel|schmutzig|dreckig|kaputt|führung|reiseleit|programm|zimmer|essen|klima|warten|stunden|organis|problem","Der Bus ist mit drei Stunden Verspätung abgefahren, und das Hotel war schmutzig."],
  ["erstatt|geld zurück|entschädig|teil des preises|gutschein|rabatt|erwarte|entschuldigung|ersatz|prozent","Ich erwarte, dass Sie mir einen Teil des Preises zurückzahlen."],
  ["sonst|anwalt|verbraucherzentrale|bewertung|nicht reagier|keine antwort|rechtlich|nie wieder|anderes reisebüro|empfehl","Wenn Sie nicht reagieren, schreibe ich eine Bewertung im Internet und gehe zur Verbraucherzentrale."]]};

const ANREDE=/^\s*(sehr geehrte[rs]?|liebe[rs]?|hallo|guten tag|hi)[\s,]/i;
const GRUSS=/(grüße|grüßen|gruß|grüsse|grüse|gruse|grusse|(liebe|viele|herzliche|beste) gro(ß|ss)e|bis bald|tschüss|alles liebe)/i;
const INTRO=/(schreibe|vielen dank|danke für|herzlichen dank|wie geht|hiermit|gelesen|gesehen|gekauft|gebucht|bekommen|erhalten|teilgenommen|mitglied|ich möchte|interessiere|mit diesem brief|wende mich|leider|beschwer|anfrage)/i;
const CLOSE=/(ich freue mich|ich hoffe|ich warte|im voraus|über eine (baldige |schnelle )?antwort|antworten sie|melden sie sich|melde dich|schreib(e)? mir|bis bald|bis dann|wir sehen uns|würde mich freuen|wünsche|alles gute|für ihre (hilfe|mühe)|vielen dank für ihre|ich bitte um)/i;
const LINK=["weil","dass","denn","deshalb","deswegen","darum","aber","wenn","obwohl","außerdem","trotzdem","damit","sondern","dann","danach","zuerst","später","ob","als","während","bis","leider","zum beispiel","also","oder","und dann"];
const SKIP_CAT=["TYPOGRAPHY","STYLE","REDUNDANCY","COLLOQUIALISMS","EMPFOHLENE_RECHTSCHREIBUNG","GENDER_NEUTRALITY","WIKIPEDIA"];
const KIND={TYPOS:["Rechtschreibung","spelling"],CASING:["Groß- und Kleinschreibung","capital letters"],GRAMMAR:["Grammatik","grammar"],CONFUSED_WORDS:["Wortwahl","word choice"],COMPOUNDING:["Zusammen-/Getrenntschreibung","compound words"],PUNCTUATION:["Zeichensetzung","punctuation"]};

/* The app's own checks for typical B1 mistakes, which the free LanguageTool
   misses; they run offline too. g: the group that is wrong, r: the fix. */
const W="(?![A-Za-zÄÖÜäöüß])",B="(^|[^A-Za-zÄÖÜäöüß])";
const PRON="(?:ich|du|er|sie|es|wir|ihr|man|Sie|der|die|mein|dein|unser|euer|Ihr)"+W;
const RULES=[
 {rx:B+"((?:[Ii]ch|[Ww]ir) (?:lade|laden)) (dir|ihm|ihr|euch|Ihnen)"+W,g:3,r:m=>({dir:"dich",ihm:"ihn",ihr:"sie",euch:"euch",Ihnen:"Sie"})[m],
  de:"„einladen“ braucht den Akkusativ: Ich lade dich ein (nicht „dir“) · ich lade ihn / Sie ein.",en:"“einladen” takes the accusative: Ich lade dich ein (not “dir”)."},
 {rx:B+"((?:[Ii]ch) (?:freue|freu)) (dich|dir|mir|sich)"+W,g:3,r:()=>"mich",
  de:"„sich freuen“ ist reflexiv – das Pronomen passt zur Person: ich freue mich, du freust dich, wir freuen uns.",en:"“sich freuen” is reflexive: ich freue mich, du freust dich."},
 {rx:B+"(?:[Ll]iebe|[Vv]iele|[Hh]erzliche|[Bb]este|[Ss]chöne) ((?:[Gg]roße|[Gg]rosse|[Gg]rüse|[Gg]rüsse|[Gg]ruse|[Gg]russe|[Gg]ruße)"+W+"(?:,(?=[ \\t]*(?:\\n|$|[A-ZÄÖÜ])))?)",g:2,r:()=>"Grüße",
  de:"Der Gruß am Ende heißt „Liebe Grüße“ / „Viele Grüße“ – mit ü und ß, ohne Komma danach. „große“ bedeutet etwas anderes (groß = big).",en:"The sign-off is “Liebe Grüße” / “Viele Grüße” (with ü and ß, no comma after it); “große” means “big”."},
 /* the sign-off stands alone: no comma, the name on the next line (DIN 5008) */
 {rx:B+"(?:[Ll]iebe|[Vv]iele|[Hh]erzliche|[Bb]este|[Ss]chöne|[Ff]reundliche|[Ff]reundlichen) ((?:Grüße|Grüßen|Gruß),)(?=[ \\t]*(?:\\n|$|[A-ZÄÖÜ]))",g:2,r:m=>m.slice(0,-1),
  de:"Nach dem Gruß steht im Deutschen kein Komma: „Viele Grüße“ / „Mit freundlichen Grüßen“ – und in der nächsten Zeile dein Name.",en:"In German there is no comma after the sign-off (“Viele Grüße”, “Mit freundlichen Grüßen”); your name goes on the next line."},
 {rx:"(freue mich|freuen uns|hoffe|glaube|denke|finde|weiß|wusste|sicher|schade|toll|froh|traurig|gesagt|gehört|gelesen),? (das) (?="+PRON+")",g:2,r:()=>"dass",
  de:"Nach „ich freue mich, hoffe, glaube, weiß …“ kommt die Konjunktion „dass“ (mit ss); „das“ ist Artikel oder Pronomen.",en:"After freuen, hoffen, glauben, wissen … the conjunction is “dass”."},
 {rx:B+"(ein|dein|mein|sein|unser|kein|das|den|einen|deinen|meinen|seinen|Ihr|Ihren|ihr|ihren) (E-Mail|Email|Mail)"+W,g:2,r:m=>({das:"die",den:"die",Ihr:"Ihre",Ihren:"Ihre"})[m]||m.replace(/en$/,"e").replace(/([^e])$/,"$1e"),
  de:"„E-Mail“ ist feminin: die / eine / deine / Ihre E-Mail.",en:"“E-Mail” is feminine: die / eine / deine E-Mail."},
 {rx:B+"(in) (Kino|Museum|Theater|Krankenhaus|Restaurant|Café|Schwimmbad|Büro|Zentrum|Stadtzentrum|Park|Supermarkt|Fitnessstudio|Hotel|Konzert|Bett|Ausland)"+W,g:2,r:()=>"ins / im",
  de:"Hier fehlt der Artikel: „ins Museum“ (wohin? – Akkusativ) oder „im Museum“ (wo? – Dativ).",en:"Article missing: “ins Museum” (where to?) or “im Museum” (where?)."},
 {rx:B+"(habe|hast|hat|haben|habt|hatte|hatten)"+W+"([^.!?,;\\n]{0,40}?[^A-Za-zÄÖÜäöüß])(gegangen|gekommen|geflogen|geblieben|passiert|gelaufen|umgezogen|aufgestanden|eingezogen|ausgezogen|angekommen|gewesen|geworden|gereist|zurückgekommen|mitgekommen|eingestiegen|ausgestiegen|gestorben|geboren)"+W,g:2,r:m=>({habe:"bin",hast:"bist",hat:"ist",haben:"sind",habt:"seid",hatte:"war",hatten:"waren"})[m],
  de:"Verben der Bewegung oder Veränderung (gehen, kommen, fliegen, bleiben, passieren, umziehen …) bilden das Perfekt mit „sein“: ich bin gegangen.",en:"Verbs of movement or change form the perfect with “sein”: ich bin gegangen."},
 {rx:B+"((?:seit|vor|nach|in|mit|von) (?:zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|vielen|einigen|mehreren|ein paar|\\d+) )(Jahre|Monate|Tage|Woche|Stunde|Minute)"+W,g:3,r:m=>m+"n",
  de:"Nach seit / vor / in steht der Dativ, im Plural mit -n: seit zwei Jahren, vor drei Tagen, in zwei Wochen.",en:"After seit / vor / in: dative, plural ending -n (seit zwei Jahren)."},
 /* auf / in / an also take the accusative ("an den Kundenservice"): only with plural-only words */
 {rx:B+"((?:(?:mit|von|aus|bei|zu|seit|nach) (?:den|vielen|allen|meinen|deinen|seinen|ihren|Ihren|unseren|einigen|mehreren)|(?:auf|in|an) (?:vielen|allen|einigen|mehreren)) )([A-ZÄÖÜ][a-zäöüß]+e)"+W,g:3,r:m=>m+"n",
  de:"Dativ Plural: das Nomen bekommt -n – mit den Kollegen, auf vielen Portalen.",en:"Dative plural: the noun takes -n (mit den Kollegen)."},
 {rx:B+"(mit|von|bei|aus|zu|nach|seit|gegenüber) (mich|dich)"+W,g:3,r:m=>m==="mich"?"mir":"dir",
  de:"mit, von, bei, aus, zu, nach, seit verlangen den Dativ: mit mir, zu dir.",en:"These prepositions take the dative: mit mir, zu dir."},
 {rx:B+"(für|ohne|gegen|durch|um) (mir|dir)"+W,g:3,r:m=>m==="mir"?"mich":"dich",
  de:"für, ohne, gegen, durch, um verlangen den Akkusativ: für mich, ohne dich.",en:"These prepositions take the accusative: für mich, ohne dich."},
 {rx:"(^|[.!?\\n]\\s*)(Wann) (?=(?:ich|du|er|es|wir|ihr|man|Sie|sie)"+W+")",g:2,r:()=>"Wenn",
  de:"„Wann“ fragt nach der Zeit (Wann kommst du?). Für „falls / immer dann“ im Nebensatz: „Wenn ich Zeit habe, …“.",en:"“wann” asks when; for “if / whenever” use “wenn”."}];
function own(t){const out=[];RULES.forEach(R=>{const re=new RegExp(R.rx,"gd");let m;
 while((m=re.exec(t))){const [a,b]=m.indices[R.g];out.push({o:a,l:b-a,msg:R.de,en:R.en,rep:[R.r(m[R.g])],cat:"GRAMMAR",rule:"OWN"});if(re.lastIndex===m.index)re.lastIndex++}});
 return out}

const wc=s=>(String(s).match(/[A-Za-zÄÖÜäöüß0-9]+/g)||[]).length;

/* the text in sentences, with their place in the text */
function segments(t){const out=[],re=/[^.!?\n]+[.!?]*/g;let m;
 while((m=re.exec(t))){let s=m.index,x=m[0];const lead=x.length-x.replace(/^\s+/,"").length;s+=lead;x=x.trim();
  if(/[A-Za-zÄÖÜäöüß]/.test(x))out.push({s,e:s+x.length,txt:x})}
 return out}

function analyse(p,tid,text,lt,fill){
 fill=fill||(s=>s);const t=String(text||""),b1=p.crit==="b1",keys=p.keys||KEYS[tid]||[];
 const words=wc(t),need=p.words||0,segs=segments(t);
 const an={text:t,b1,words,need,segs,points:[],checks:[],tips:[],auto:{},errs:null};
 /* Anrede: the first line; Gruß: near the end; the name after it is the signature */
 const first=segs[0],anr=first&&ANREDE.test(first.txt)?first:null;
 const formal=/^\s*(sehr geehrte|guten tag)/i.test(p.model||"");
 let gi=-1;segs.forEach((g,i)=>{if(i>=segs.length-3&&GRUSS.test(g.txt))gi=i});
 segs.forEach((g,i)=>{g.pts=[];g.role=i===gi?"gruss":gi>=0&&i>gi?"sign":g===anr&&wc(g.txt.replace(/^[^,]*,/,""))<2?"anrede":"";
  g.body=g===anr?g.txt.replace(/^[^,\n]*,\s*/,""):g.txt});
 const body=segs.filter(g=>!g.role);
 /* I · the points of the task */
 p.points.forEach((label,i)=>{const k=keys[i],rx=k?new RegExp(k[0],"i"):null;
  const hit=rx?body.filter(g=>rx.test(g.body.toLowerCase())):[];hit.forEach(g=>g.pts.push(i));
  const w=hit.reduce((n,g)=>n+wc(g.body),0),most=hit.reduce((n,g)=>Math.max(n,wc(g.body)),0);
  let st=!hit.length?"miss":b1?(w>=6?"ok":"short"):(most>=3?"ok":"short");
  const pt={i,label,hit,words:w,st,tip:k?k[1]:""};
  if(b1){an.auto["lp"+i]=st==="ok";
   pt.why=st==="ok"?["behandelt – "+w+" Wörter dazu","covered – "+w+" words on it"]
    :st==="short"?["nur kurz erwähnt (unter 6 Wörtern) – das zählt bei telc noch nicht als behandelt","only mentioned briefly (under 6 words) – telc does not count that as covered yet"]
    :["fehlt – kein Satz dazu gefunden","missing – no sentence about it found"]}
  else{an.auto["p"+i]=st==="ok"?3:st==="short"?1.5:0;
   pt.why=st==="ok"?["vollständig – ein ganzer Satz dazu","complete – a whole sentence on it"]
    :st==="short"?["nur ein paar Wörter – schreib einen ganzen Satz mit Verb","only a few words – write a whole sentence with a verb"]
    :["fehlt – kein Satz dazu gefunden","missing – no sentence about it found"]}
  an.points.push(pt);
  if(st!=="ok"&&pt.tip)an.tips.push([`${b1?"Leitpunkt":"Punkt"} „${label}“: ${st==="miss"?"schreib dazu":"schreib mehr dazu"}, z. B. „${pt.tip}“`,`Point “${label}”: ${st==="miss"?"write about it":"write more about it"}`])});
 /* the letter's frame */
 const anrOk=!!anr,grOk=gi>=0;
 const informal=anr&&/^\s*(liebe|hallo|hi)/i.test(anr.txt);
 const regOk=!anr||(formal?!informal:informal);
 let mixed="";
 if(formal){const m=t.match(/(^|[^A-Za-zÄÖÜäöüß])(du|dich|dir|dein\w*|euch|euer)(?=[^A-Za-zÄÖÜäöüß]|$)/i);if(m)mixed=m[2]}
 else{const m=t.match(/[^.!?\n\s]\s+(Sie|Ihnen|Ihre?[mnrs]?)(?=[^A-Za-zÄÖÜäöüß]|$)/);if(m)mixed=m[1]}
 const add=(ok,de,en,tip,half)=>{an.checks.push({ok,de,en,tip,half});if(!ok&&tip)an.tips.push(tip)};
 add(anrOk,"Anrede am Anfang","greeting at the start",[`Beginne mit einer Anrede, z. B. „${formal?"Sehr geehrte Damen und Herren,":"Liebe Anna, / Lieber Markus,"}“`,"Start with a greeting"]);
 if(!b1)add(grOk,"Gruß am Ende","sign-off at the end",[`Schließe mit einem Gruß, z. B. „${formal?"Mit freundlichen Grüßen":"Viele Grüße"}“ und deinem Namen`,"End with a sign-off and your name"]);
 if(!b1){an.auto.ag=anrOk&&grOk?1:0}
 else{
  const c1=body.slice(0,2).some(g=>INTRO.test(g.body));
  const tail=body.slice(-3).some(g=>CLOSE.test(g.body));
  const tok=" "+body.map(g=>g.body).join(" ").toLowerCase().replace(/[^a-zäöüß]+/g," ")+" ",used=LINK.filter(w=>tok.includes(" "+w+" "));
  const lenOk=!need||words>=need*.65;   /* telc asks "etwa"; the model letters run 100–130 */
  add(grOk,"Gruß am Ende","sign-off at the end",[`Schließe mit „${formal?"Mit freundlichen Grüßen":"Viele Grüße / Liebe Grüße"}“ und deinem Namen`,"End with a sign-off and your name"]);
  add(c1,"Einleitung: sagst du gleich, warum du schreibst?","opening: do you say straight away why you write?",[`Schreib nach der Anrede einen Einleitungssatz, z. B. „${formal?"Ich schreibe Ihnen, weil …":"Vielen Dank für deine Nachricht! Ich schreibe dir, weil …"}“`,"Add an opening sentence that says why you write"]);
  add(tail,"Schluss vor dem Gruß","a closing sentence before the sign-off",[`Schreib vor dem Gruß einen Schlusssatz, z. B. „${formal?"Ich freue mich auf Ihre Antwort.":"Ich freue mich auf deine Antwort!"}“`,"Add a closing sentence before the sign-off"]);
  add(regOk&&!mixed,formal?"Sie-Form (formell) – passend zu dieser Aufgabe":"du-Form (informell) – passend zu dieser Aufgabe",formal?"formal “Sie” – right for this task":"informal “du” – right for this task",
   [!regOk?`Diese Aufgabe verlangt ${formal?"„Sehr geehrte …“ und die Sie-Form":"„Liebe/Lieber …“ und die du-Form"}`:`Bleib bei einer Form: „${mixed}“ passt nicht zur ${formal?"Sie":"du"}-Form`,!regOk?"Use the register this task needs":"Don’t mix du and Sie"]);
  add(used.length>=4,`Sätze verbunden: ${used.length?used.slice(0,8).join(", "):"keine Verbindungswörter"}`,`sentences linked: ${used.length} linking words`,
   ["Verbinde Sätze mit weil, dass, wenn, deshalb, obwohl, trotzdem …","Link your sentences with weil, dass, wenn, deshalb …"],used.length>=2);
  add(lenOk,`Länge: ${words} Wörter${need?` (verlangt etwa ${need}, mindestens ${Math.round(need*.65)})`:""}`,`length: ${words} words${need?` (about ${need} asked)`:""}`,[`Schreib etwa ${need} Wörter – zu jedem Leitpunkt 2–3 Sätze`,`Write about ${need} words – 2–3 sentences per point`]);
  /* misses: 0 → A, up to 1 → B, up to 3 → C, more → D (a half-kept check is half a miss) */
  const miss=an.checks.reduce((n,c)=>n+(c.ok?0:c.half?.5:1),0);
  an.short=need&&words<need*.5;   /* under half the length: at most C */
  let k2=!words?0:miss===0?15:miss<=1?10:miss<=3?5:0;if(an.short)k2=Math.min(k2,5);
  an.auto.k2=k2;an.missK2=miss}
 /* III · mistakes: the app's own checks, then LanguageTool's (where they don't overlap) */
 const mine=own(t);an.ltDone=!!(lt&&lt.m);an.errs=mine;
 if(an.ltDone){const last=(t.trim().split("\n").pop()||"").trim(),sig=/^[A-ZÄÖÜ][\wäöüß-]*( [A-ZÄÖÜ][\wäöüß-]*)?$/.test(last)?last:"";
  const known=new Set((fill(p.model||"")+" "+fill(p.task||"")+" "+sig+" "+segs.filter(g=>g.role==="sign"||g.role==="gruss").map(g=>g.txt).join(" ")).match(/[A-Za-zÄÖÜäöüß]+/g)||[]);
  an.errs=mine.concat(lt.m.filter(e=>!SKIP_CAT.includes(e.cat)).filter(e=>{const w=t.substr(e.o,e.l);return !(e.cat==="TYPOS"&&(known.has(w)||/^\d+$/.test(w)))})
   .filter(e=>!mine.some(x=>e.o<x.o+x.l&&x.o<e.o+e.l)))}
 an.errs=an.errs.sort((a,b)=>a.o-b.o).map((e,i)=>({...e,n:i+1,w:t.substr(e.o,e.l),kind:KIND[e.cat]||["Sonstiges","other"]}));
 an.errs.forEach(e=>{bestRep(e);e.why=explain(e,t)});
 /* a one-word slip gets one-word fixes first ("Wohnungssuche", not "Wohnung suche") */
 an.errs.forEach(e=>{if(!/\s/.test(e.w))e.rep=e.rep.filter(r=>!/\s/.test(r)).concat(e.rep.filter(r=>/\s/.test(r)))});
 if(an.ltDone){
  const per=words?an.errs.length/words*100:0;an.per100=per;
  if(b1){let k3=!words?0:per<=3?15:per<=7?10:per<=12?5:0;if(an.short)k3=Math.min(k3,5);an.auto.k3=k3}
  const by={};an.errs.forEach(e=>{const k=e.kind[0];by[k]=by[k]||{n:0,kind:e.kind};by[k].n++});
  Object.values(by).sort((a,b)=>b.n-a.n).slice(0,2).forEach(x=>an.tips.push([`Achte auf ${x.kind[0]}: ${x.n} ${x.n===1?"Fehler":"Fehler"} – lies deinen Text am Ende noch einmal genau durch.`,`Watch your ${x.kind[1]}: ${x.n} mistake${x.n===1?"":"s"}`]))}
 if(!b1&&need&&words<need*.7)an.tips.push([`Schreib etwas mehr: ${words} von etwa ${need} Wörtern.`,`Write a bit more: ${words} of about ${need} words.`]);
 return an}

/* A clear reason for a mistake, from what changes between the word and its fix.
   The app's own rules bring their own; LanguageTool's messages are often
   technical, so the common cases get a plain explanation. */
const UML=s=>s.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");
const ENG={when:"wenn",and:"und",is:"ist",the:"der / die / das",with:"mit",for:"für",but:"aber",or:"oder",my:"mein",i:"ich",you:"du",birthday:"Geburtstag",party:"Party / Feier",please:"bitte",come:"kommen",home:"Zuhause / nach Hause"};
/* LanguageTool's first suggestion is often another word ("getranke" → "gedrängt"):
   put first the one closest to what the learner meant (umlauts, case and
   letter order ignored), and the German word for an English one. */
function lev(a,b){const d=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=d[0];d[0]=i;
 for(let j=1;j<=b.length;j++){const t=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return d[b.length]}
function bestRep(e){if(e.rule==="OWN"||!e.rep||!e.rep.length)return;const w=e.w,k=UML(w).replace(/\s/g,""),so=x=>[...x].sort().join("");
 const eng=ENG[w.toLowerCase()];if(eng&&!eng.includes("/")){e.rep=[eng].concat(e.rep.filter(r=>r!==eng));return}
 const sc=r=>{const x=UML(r).replace(/\s/g,"");return x===k?0:so(x)===so(k)?.5:lev(x,k)};
 e.rep=e.rep.map((r,i)=>[r,sc(r)+i*.01]).sort((a,b)=>a[1]-b[1]).map(x=>x[0])}
function explain(e,t){if(e.rule==="OWN")return [e.msg,e.en||""];
 const w=e.w,r=(e.rep||[])[0],q=x=>"„"+x+"“";
 const start=/(^|[.!?:]\s*|\n\s*)$/.test(t.slice(0,e.o));
 if(ENG[w.toLowerCase()])return [q(w)+" ist Englisch – auf Deutsch heißt es "+q(r||ENG[w.toLowerCase()])+".","“"+w+"” is English – in German: “"+(r||ENG[w.toLowerCase()])+"”."];
 if(!r)return [e.msg,""];
 const out=[],en=[];
 if(w.replace(/\s/g,"")!==w||r.replace(/\s/g,"")!==r){if(w.replace(/\s/g,"").toLowerCase()===r.replace(/\s/g,"").toLowerCase()||UML(w.replace(/\s/g,""))===UML(r.replace(/\s/g,""))){
   out.push(r.includes(" ")?"Das schreibt man getrennt: "+q(r)+".":"Das schreibt man zusammen: "+q(r)+".");en.push(r.includes(" ")?"Write it as two words.":"Write it as one word.")}}
 const a=w.replace(/\s/g,""),b=r.replace(/\s/g,"");
 if(UML(a)===UML(b)&&a.toLowerCase()!==b.toLowerCase()){const i=[...b.toLowerCase()].findIndex((c,k)=>c!==(a.toLowerCase()[k]||""));const u=(b.toLowerCase().match(/[äöüß]/)||[""])[0];
  out.push(u==="ß"?"Hier schreibt man „ß“.":"Hier fehlt der Umlaut: „"+u+"“ statt „"+({"ä":"a","ö":"o","ü":"u"}[u]||"")+"“ – richtig: "+q(r)+".");en.push(u==="ß"?"Use “ß” here.":"Umlaut missing: “"+u+"”.")}
 if(a[0]&&b[0]&&a[0]!==b[0]&&a[0].toLowerCase()===b[0].toLowerCase()){
  if(b[0]===b[0].toUpperCase()){if(start){out.push("Am Satzanfang schreibt man groß: "+q(r)+".");en.push("Capital letter at the start of a sentence.")}
   else{out.push("Nomen schreibt man im Deutschen immer groß: "+q(r)+".");en.push("German nouns always start with a capital letter.")}}
  else{out.push("Dieses Wort schreibt man klein: "+q(r)+" (kein Nomen, nicht am Satzanfang).");en.push("This word is written in lower case.")}}
 /* "meine Geburtstag" → mein / meinen / meinem Geburtstag: the ending of the word before the noun */
 const ws=w.split(/\s+/),nn=ws[ws.length-1];
 if(!out.length&&ws.length===2&&e.rep.length&&e.rep.every(x=>x.split(/\s+/).length===2&&x.split(/\s+/)[1]===nn)){const opts=e.rep.map(x=>x.split(/\s+/)[0]);
  out.push("Die Endung von "+q(ws[0])+" passt nicht zum Nomen "+q(nn)+". Richtig ist – je nach Fall – "+opts.map(o=>q(o+" "+nn)).join(" / ")+" (Nominativ: wer/was? · Akkusativ: wen/was? · Dativ: wem?).");
  en.push("The ending of “"+ws[0]+"” doesn't match the noun “"+nn+"”: "+opts.map(o=>o+" "+nn).join(" / ")+", depending on the case.")}
 if(!out.length&&e.cat==="TYPOS"){const so=x=>[...x.toLowerCase()].sort().join("");
  if(a.length===b.length&&so(a)===so(b)){out.push("Rechtschreibung: Die Buchstaben stehen in der falschen Reihenfolge – richtig: "+q(r)+".");en.push("Spelling: letters in the wrong order – correct: “"+r+"”.")}
  else{out.push("Rechtschreibung: Das Wort schreibt man so: "+q(r)+".");en.push("Spelling: the word is spelled “"+r+"”.")}}
 if(!out.length){out.push(e.msg.replace(/\s+/g," ").trim()+" Richtig: "+q(r)+".");en.push("Correct: “"+r+"”.")}
 return [out.join(" "),en.filter(Boolean).join(" ")]}

/* LanguageTool: spelling and grammar (free public API, about 20 checks a minute) */
/* one more try after a slow or failed answer (a phone on a weak line) */
function check(text){return ask(text).catch(()=>new Promise(r=>setTimeout(r,1500)).then(()=>ask(text)))}
function ask(text){const ctl=window.AbortController?new AbortController():null,tm=setTimeout(()=>ctl&&ctl.abort(),15000);
 const body=new URLSearchParams({text:String(text),language:"de-DE",level:"picky"});
 return fetch("https://api.languagetool.org/v2/check",{method:"POST",body,signal:ctl&&ctl.signal}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})
  .then(j=>{clearTimeout(tm);return {m:(j.matches||[]).map(x=>({o:x.offset,l:x.length,msg:x.message,rep:(x.replacements||[]).slice(0,3).map(r=>r.value),cat:x.rule&&x.rule.category&&x.rule.category.id||"",rule:x.rule&&x.rule.id||""}))}})
  .catch(e=>{clearTimeout(tm);throw e})}

/* the learner's text: each sentence marked with the point(s) it covers, mistakes underlined */
function marked(an,esc){const t=an.text,errs=(an.errs||[]).slice().sort((a,b)=>a.o-b.o);
 const br=s=>esc(s).replace(/\n/g,"<br>");
 function part(a,b){let h="",pos=a;errs.forEach(e=>{if(e.o<pos||e.o>=b)return;const end=Math.min(e.o+e.l,b);
   h+=br(t.slice(pos,e.o))+`<mark class="sw-err" title="${esc(e.msg)}">${br(t.slice(e.o,end))}<sup>${e.n}</sup></mark>`;pos=end});
  return h+br(t.slice(pos,b))}
 let h="",pos=0;an.segs.forEach(g=>{h+=part(pos,g.s);
  const c=g.pts.length?" c"+(g.pts[0]%4):g.role?" frame":"";
  h+=`<span class="sw-seg${c}">${g.pts.map(i=>`<b class="sw-chip c${i%4}">${i+1}</b>`).join("")}${part(g.s,g.e)}</span>`;pos=g.e});
 return h+part(pos,t.length)}

window.Schreiben={analyse,check,marked,keys:KEYS};
})();
