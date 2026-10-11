/* Tipps & typische Fehler for every Grammatik topic, shown in a box under
   the topic's intro. Per topic id: [German tip, English, wrong, right] –
   wrong / right are optional and shown as ✗ … → ✓ …; a wrong part starting
   with ~ is correct but less natural and is shown as „geht, aber besser“.
   tools/check-grammatik.mjs requires at least three tips per topic. */
window.GT = {
zeit:[
 ["Im Gespräch erzählt man die Vergangenheit im Perfekt – aber sein, haben und die Modalverben fast immer im Präteritum.","In speech use the perfect – but sein, haben and modal verbs almost always in the simple past.","Ich habe gestern müde gewesen.","Ich war gestern müde."],
 ["Bewegung von A nach B und Veränderung (gehen, fahren, kommen, aufstehen, passieren, werden) → Perfekt mit sein.","Movement from A to B and change of state → perfect with sein.","Ich habe nach Berlin gefahren.","Ich bin nach Berlin gefahren."],
 ["seit + Präsens: Was noch andauert, steht im Präsens, nicht im Perfekt.","seit + present tense for things still going on.","Ich habe seit drei Jahren hier gewohnt.","Ich wohne seit drei Jahren hier."],
 ["Zukunft mit Zeitangabe: Das Präsens reicht. Futur I klingt oft nach Vermutung oder Versprechen.","Future with a time phrase: the present tense is enough.","~Morgen werde ich zum Arzt gehen.","Morgen gehe ich zum Arzt."]],
praep:[
 ["Merkspruch Dativ: aus, bei, mit, nach, seit, von, zu – immer Dativ, egal was passiert.","Rhyme for the dative: aus, bei, mit, nach, seit, von, zu.","mit meinen Freund","mit meinem Freund"],
 ["Merkspruch Akkusativ: durch, für, gegen, ohne, um (DOGFU).","Accusative: durch, für, gegen, ohne, um (DOGFU).","für meinem Sohn","für meinen Sohn"],
 ["Wechselpräpositionen: Wohin? (Bewegung zu einem Ziel) → Akkusativ · Wo? (Ort, keine Richtung) → Dativ.","Two-way prepositions: where to? → accusative · where? → dative.","Ich lege das Buch auf dem Tisch.","Ich lege das Buch auf den Tisch."],
 ["Länder ohne Artikel: nach Spanien · Länder mit Artikel und Gebäude: in die Türkei, ins Kino · zu Personen: zum Arzt.","Countries: nach · with article and buildings: in · people: zu.","Ich fahre zu Spanien.","Ich fahre nach Spanien."]],
zeitang:[
 ["um = Uhrzeit, am = Tag und Datum, im = Monat, Jahreszeit – und das Jahr ohne Präposition.","um = time, am = day/date, im = month/season – the year without a preposition.","in 2019","2019 / im Jahr 2019"],
 ["vor = ago (Vergangenheit), in = in (Zukunft) – beide mit Dativ, Plural mit -n.","vor = ago, in = in (future) – both + dative, plural -n.","vor drei Jahre","vor drei Jahren"],
 ["halb drei = 2:30 (eine halbe Stunde vor drei), nicht 3:30!","halb drei = 2:30, not 3:30!","halb drei = 3:30","halb drei = 2:30"],
 ["bis = Ende eines Zeitraums oder Frist: bis Freitag. Mit Datum: bis zum 30. Mai.","bis = until / by; with a date: bis zum.","bis 30. Mai","bis zum 30. Mai"]],
posverb:[
 ["Verben mit -e- (stellen, legen, setzen, hängen + Akk.) = Bewegung → Akkusativ, regelmäßig. Verben mit Vokal i/e/a (liegen, stehen, sitzen) = Position → Dativ.","Movement verbs take accusative, position verbs take dative.","Ich stelle die Vase auf dem Tisch.","Ich stelle die Vase auf den Tisch."],
 ["Senkrecht → stellen / stehen, waagerecht → legen / liegen: Flaschen stehen, Bücher auf dem Tisch liegen.","Upright → stellen/stehen, flat → legen/liegen.","Die Flasche liegt im Kühlschrank. (wenn sie steht)","Die Flasche steht im Kühlschrank."],
 ["Perfekt: gestellt, gelegt, gesetzt (Bewegung) – gestanden, gelegen, gesessen (Position).","Perfect: gestellt / gestanden …","Ich habe den Teller auf den Tisch gestanden.","Ich habe den Teller auf den Tisch gestellt."]],
konj:[
 ["Nebensatz (weil, dass, wenn, obwohl …): Das Verb geht ans Ende.","Subordinate clause: the verb goes to the end.","…, weil ich habe keine Zeit.","…, weil ich keine Zeit habe."],
 ["Nebensatz zuerst → Verb-Komma-Verb: Wenn ich Zeit habe, komme ich.","Subordinate clause first → verb, comma, verb.","Wenn ich Zeit habe, ich komme.","Wenn ich Zeit habe, komme ich."],
 ["deshalb, trotzdem, dann sind Adverbien: Danach kommt sofort das Verb (Position 2).","deshalb, trotzdem … are adverbs: the verb comes straight after.","Deshalb ich lerne Deutsch.","Deshalb lerne ich Deutsch."],
 ["wenn = immer wenn / falls / in der Gegenwart und Zukunft · als = einmal in der Vergangenheit.","wenn = whenever / if · als = once in the past.","Wenn ich Kind war, …","Als ich Kind war, …"],
 ["denn = weil, aber mit Hauptsatz-Wortstellung (Position 0).","denn = because, but with main-clause word order.","…, denn ich keine Zeit habe.","…, denn ich habe keine Zeit."]],
adj:[
 ["Nach der / die / das ist die Endung meistens -e oder -en: Der Artikel zeigt schon den Kasus.","After der/die/das the ending is mostly -e or -en.","der neuer Kollege","der neue Kollege"],
 ["Nach ein / kein / mein zeigt das Adjektiv das Geschlecht, wo der Artikel es nicht tut: ein neuer Tisch, ein neues Auto.","After ein/kein/mein the adjective shows the gender.","ein neue Auto","ein neues Auto"],
 ["Nach sein, werden, bleiben: keine Endung.","After sein / werden / bleiben: no ending.","Das Essen ist leckeres.","Das Essen ist lecker."],
 ["Komparativ + als, gleich + so … wie.","Comparative + als, equal + so … wie.","Er ist größer wie ich.","Er ist größer als ich."]],
partizip:[
 ["Partizip I = gerade aktiv (die wartenden Kunden), Partizip II = fertig oder passiv (die reparierte Heizung).","Present participle = active now, past participle = done / passive.","die reparierende Heizung","die reparierte Heizung"],
 ["Vor dem Nomen braucht das Partizip normale Adjektivendungen.","Before a noun the participle takes normal adjective endings.","das ausgefüllt Formular","das ausgefüllte Formular"],
 ["Lange Partizip-Konstruktionen gehören in Texte – beim Sprechen lieber einen Relativsatz benutzen.","Long participle phrases are for writing – in speech use a relative clause.","~die im Brief genannten Termine","die Termine, die im Brief stehen"]],
vpraep:[
 ["Lerne Verb, Präposition und Kasus zusammen: warten auf + Akk., träumen von + Dat.","Learn verb + preposition + case together.","Ich warte für den Bus.","Ich warte auf den Bus."],
 ["sich freuen auf = Zukunft, sich freuen über = schon da.","freuen auf = future, freuen über = already happened.","Ich freue mich über den Urlaub nächste Woche.","Ich freue mich auf den Urlaub nächste Woche."],
 ["Sachen: da(r)- + Präposition (darauf, daran) · Personen: Präposition + Pronomen (auf ihn).","Things: darauf … · people: auf ihn.","Ich warte darauf. (für eine Person)","Ich warte auf ihn."],
 ["Fragen: Personen → Präposition + wen/wem (auf wen?), Sachen → wo(r)- (worauf?).","Questions: auf wen? for people, worauf? for things.","~Auf was wartest du?","Worauf wartest du?"]],
vdat:[
 ["Diese Verben haben nur ein Dativobjekt: helfen, danken, gefallen, gehören, antworten, gratulieren, folgen, glauben.","These verbs take only a dative object.","Ich helfe dich.","Ich helfe dir."],
 ["gefallen, schmecken, fehlen, wehtun: Die Person steht im Dativ, die Sache ist das Subjekt.","With gefallen etc. the person is dative and the thing is the subject.","Ich gefalle die Wohnung.","Die Wohnung gefällt mir."],
 ["Viele Verben haben Dativ (Person) + Akkusativ (Sache): geben, schicken, zeigen, erklären.","Many verbs take dative person + accusative thing.","Ich gebe dich das Buch.","Ich gebe dir das Buch."]],
nvv:[
 ["Lerne die Verbindung als Block: einen Antrag stellen, eine Entscheidung treffen, Bescheid geben.","Learn the collocation as one chunk.","einen Antrag machen","einen Antrag stellen"],
 ["Im Brief klingen Nomen-Verb-Verbindungen offiziell – perfekt für den DTZ-Brief an Ämter.","They sound official – ideal for formal letters.","Bitte sagen Sie mir.","Bitte geben Sie mir Bescheid."],
 ["Das Verb trägt die Grammatik (Zeit, Person), das Nomen die Bedeutung.","The verb carries the grammar, the noun the meaning.","Ich habe eine Entscheidung getreffen.","Ich habe eine Entscheidung getroffen."]],
rel:[
 ["Das Relativpronomen hat das Genus vom Nomen davor, den Kasus aber von seiner Rolle im Relativsatz.","Gender from the noun, case from its role in the relative clause.","Der Mann, der ich gesehen habe …","Der Mann, den ich gesehen habe …"],
 ["Dativ Plural ist denen, nicht den.","Dative plural: denen.","Die Kollegen, mit den ich arbeite …","Die Kollegen, mit denen ich arbeite …"],
 ["Im Relativsatz steht das Verb am Ende, und vor dem Relativpronomen steht ein Komma.","Verb at the end, comma before the pronoun.","Das Buch, das ich habe gekauft …","Das Buch, das ich gekauft habe …"],
 ["Nach alles, etwas, nichts und ganzen Sätzen: was.","After alles, etwas, nichts: was.","Das ist alles, das ich weiß.","Das ist alles, was ich weiß."]],
k2:[
 ["Höfliche Bitte: Könnten Sie …? Würden Sie …? – das klingt viel freundlicher als Können Sie …?","Polite requests: Könnten Sie …? Würden Sie …?","Geben Sie mir das Formular.","Könnten Sie mir bitte das Formular geben?"],
 ["Bei den meisten Verben: würde + Infinitiv. Bei sein, haben, Modalverben: wäre, hätte, könnte, müsste …","Most verbs: würde + infinitive. sein/haben/modals: wäre, hätte …","~Ich würde gern reich sein.","Ich wäre gern reich."],
 ["Irreale Bedingung: Wenn + Konjunktiv II, dann Konjunktiv II – nicht im Indikativ.","Unreal condition: both parts in Konjunktiv II.","Wenn ich Zeit habe, würde ich kommen.","Wenn ich Zeit hätte, würde ich kommen."],
 ["Ratschlag: Du solltest … / An deiner Stelle würde ich …","Advice: du solltest … / an deiner Stelle würde ich …","Du sollst mehr schlafen. (= Befehl)","Du solltest mehr schlafen."]],
passiv:[
 ["Vorgangspassiv = werden + Partizip II: Hier wird gebaut.","Passive = werden + past participle.","Das Haus ist gebaut. (wenn es gerade passiert)","Das Haus wird gebaut."],
 ["Perfekt Passiv: ist … worden – nicht geworden!","Perfect passive: ist … worden, not geworden.","Das Paket ist geschickt geworden.","Das Paket ist geschickt worden."],
 ["Der Täter mit von + Dativ – aber oft lässt man ihn einfach weg.","The agent with von + dative – often left out.","Der Brief wurde durch mich geschrieben.","Der Brief wurde von mir geschrieben."],
 ["Im Alltag benutzt man oft man statt Passiv: Man spricht hier Deutsch.","In everyday speech use man instead of passive.","Hier wird Deutsch von den Leuten gesprochen.","Hier spricht man Deutsch."]],
modal:[
 ["Modalverb auf Position 2, Infinitiv ohne zu am Ende.","Modal in position 2, infinitive without zu at the end.","Ich muss zu arbeiten.","Ich muss arbeiten."],
 ["nicht müssen = nicht nötig · nicht dürfen = verboten!","nicht müssen = not necessary · nicht dürfen = forbidden!","Du darfst nicht kommen. (wenn es nur nicht nötig ist)","Du musst nicht kommen."],
 ["ich / er / sie haben keine Endung: ich kann, er kann, sie muss.","ich and er/sie have no ending.","Er kannt gut kochen.","Er kann gut kochen."],
 ["Höflich bestellen und wünschen: möchte statt will.","Polite wish: möchte instead of will.","Ich will einen Kaffee.","Ich möchte einen Kaffee."]],
imp:[
 ["du-Form: Präsens ohne -st und ohne du – e → i bleibt (nimm!), a → ä fällt weg (fahr!).","du form: present without -st and du.","Fährst vorsichtig!","Fahr vorsichtig!"],
 ["Sie-Form: Verb + Sie. Ohne Sie klingt es falsch.","Sie form: verb + Sie.","Kommen bitte herein!","Kommen Sie bitte herein!"],
 ["sein ist unregelmäßig: sei! · seid! · seien Sie!","sein is irregular: sei, seid, seien Sie.","Bist ruhig!","Sei ruhig!"],
 ["bitte, mal, doch machen den Imperativ freundlicher – sonst klingt er schnell unhöflich.","bitte, mal, doch soften the imperative.","Geben Sie mir den Stift!","Geben Sie mir bitte mal den Stift!"]],
refl:[
 ["mich / dich: Akkusativ · mir / dir: Dativ, wenn schon ein Akkusativ da ist (Ich wasche mir die Hände).","mich/dich: accusative · mir/dir: dative when there's another object.","Ich wasche mich die Hände.","Ich wasche mir die Hände."],
 ["Bei er / sie / es / Sie und sie (Plural) heißt es immer sich.","3rd person and Sie: always sich.","Er freut ihn.","Er freut sich."],
 ["Im Nebensatz steht das Verb am Ende, sich bleibt vorne beim Subjekt: …, weil ich mich freue.","In subordinate clauses the verb goes to the end; sich stays near the subject.","…, weil ich freue mich.","…, weil ich mich freue."]],
trenn:[
 ["Trennbare Vorsilben (an-, auf-, aus-, ein-, mit-, zu- …) gehen im Präsens ans Satzende.","Separable prefixes go to the end in the present.","Ich anrufe dich morgen.","Ich rufe dich morgen an."],
 ["Perfekt: ge steht in der Mitte (angerufen) · zu steht in der Mitte (anzurufen).","Perfect: ge in the middle · zu in the middle.","Ich habe geanruft.","Ich habe angerufen."],
 ["Untrennbare Vorsilben (be-, ver-, er-, ent-, emp-, ge-, miss-, zer-) bleiben dran und haben kein ge-.","Inseparable prefixes stay on, no ge-.","Ich habe das Problem geverstanden.","Ich habe das Problem verstanden."],
 ["Im Nebensatz bleibt das Verb zusammen am Ende: …, weil ich früh aufstehe.","In subordinate clauses the verb stays together at the end.","…, weil ich stehe früh auf.","…, weil ich früh aufstehe."]],
zuinf:[
 ["Nach Modalverben, werden, lassen, gehen und sehen kein zu.","No zu after modal verbs, werden, lassen, gehen, sehen.","Ich kann gut zu schwimmen.","Ich kann gut schwimmen."],
 ["Nach Lust haben, versuchen, vergessen, anfangen, es ist wichtig … kommt zu + Infinitiv.","After Lust haben, versuchen, vergessen … use zu + infinitive.","Ich habe keine Lust kochen.","Ich habe keine Lust zu kochen."],
 ["Gleiches Subjekt → zu + Infinitiv · anderes Subjekt → dass-Satz.","Same subject → zu · different subject → dass.","~Ich hoffe, dass ich bestehe.","Ich hoffe, die Prüfung zu bestehen."],
 ["um … zu = Zweck (wozu?), damit bei anderem Subjekt.","um … zu = purpose; damit with a different subject.","Ich lerne, für die Prüfung zu bestehen.","Ich lerne, um die Prüfung zu bestehen."]],
indirekt:[
 ["Indirekte Frage = Nebensatz: Das Verb steht am Ende.","An indirect question is a subordinate clause: verb at the end.","Wissen Sie, wo ist der Bahnhof?","Wissen Sie, wo der Bahnhof ist?"],
 ["Ja/Nein-Fragen werden mit ob indirekt.","Yes/no questions become ob clauses.","Ich weiß nicht, wenn er kommt. (für ja/nein)","Ich weiß nicht, ob er kommt."],
 ["Indirekte Fragen sind höflicher: Können Sie mir sagen, …? Ich möchte wissen, …","Indirect questions are more polite.","Wann fährt der Zug?","Können Sie mir sagen, wann der Zug fährt?"]],
frage:[
 ["welcher = Auswahl aus etwas Bekanntem (Endung wie der) · was für ein = Art (Endung wie ein).","welcher = which · was für ein = what kind of.","Welches Auto hast du? (wenn man die Art meint)","Was für ein Auto hast du?"],
 ["wie viel + nicht zählbar (Geld, Zeit) · wie viele + zählbar im Plural.","wie viel + uncountable · wie viele + plural.","Wie viel Kinder haben Sie?","Wie viele Kinder haben Sie?"],
 ["Bei Personen: Präposition + wem/wen (mit wem?) · bei Sachen: wo(r) + Präposition (womit?).","People: mit wem? · things: womit?","~Mit was fährst du?","Womit fährst du?"],
 ["W-Frage: Fragewort auf Position 1, Verb auf Position 2.","Question word in position 1, verb in position 2.","Wo du wohnst?","Wo wohnst du?"]],
ndekl:[
 ["Maskuline Nomen für Personen und Tiere auf -e, -ent, -ant, -ist bekommen in allen Fällen außer Nominativ -n / -en.","Masculine people/animals ending in -e, -ent, -ant, -ist add -(e)n outside the nominative.","Ich frage meinen Kollege.","Ich frage meinen Kollegen."],
 ["Auch Herr: Herrn im Akkusativ, Dativ und Genitiv – wichtig in Briefen!","Herr → Herrn – important in letters!","Ich schreibe an Herr Wagner.","Ich schreibe an Herrn Wagner."],
 ["der Name, der Gedanke, der Glaube: Genitiv mit -ns (des Namens).","der Name: genitive des Namens.","die Schreibweise des Names","die Schreibweise des Namens"]],
neg:[
 ["kein verneint Nomen mit ein oder ohne Artikel · nicht verneint alles andere.","kein for nouns with ein / no article · nicht for everything else.","Ich habe nicht Zeit.","Ich habe keine Zeit."],
 ["nicht steht meistens am Ende – aber vor Adjektiven, Präpositionen und dem zweiten Verbteil.","nicht usually at the end – but before adjectives, prepositions and the second verb part.","Ich komme mit nicht.","Ich komme nicht mit."],
 ["Auf eine negative Frage antwortet man mit doch, wenn die Antwort positiv ist.","Answer a negative question positively with doch.","Hast du keinen Hunger? – Ja, ich habe Hunger.","Hast du keinen Hunger? – Doch!"]],
werden:[
 ["werden hat vier Jobs: Vollverb (Ich werde Arzt), Futur, Passiv, Konjunktiv II (würde).","werden has four jobs.","~Ich will Arzt sein. (wenn man den Weg meint)","Ich werde Arzt."],
 ["lassen + Infinitiv = jemand anderes macht es: Ich lasse mein Auto reparieren.","lassen + infinitive = someone else does it.","Ich repariere mein Auto in der Werkstatt.","Ich lasse mein Auto in der Werkstatt reparieren."],
 ["Perfekt mit lassen + Infinitiv: zwei Infinitive (habe … reparieren lassen).","Perfect with lassen: double infinitive.","Ich habe mein Auto reparieren gelassen.","Ich habe mein Auto reparieren lassen."]],
satz:[
 ["Hauptsatz: Das konjugierte Verb steht immer auf Position 2 – auch wenn ein Adverb vorne steht.","Main clause: the conjugated verb is always in position 2.","Morgen ich gehe ins Kino.","Morgen gehe ich ins Kino."],
 ["TeKaMoLo im Mittelfeld: temporal – kausal – modal – lokal.","Middle field: time – reason – manner – place.","Ich fahre mit dem Bus morgen zur Arbeit.","Ich fahre morgen mit dem Bus zur Arbeit."],
 ["Dativ vor Akkusativ – aber Pronomen im Akkusativ vor Dativ.","Dative before accusative – but an accusative pronoun before dative.","Ich gebe dir ihn.","Ich gebe ihn dir."],
 ["Satzklammer: Modalverb / Hilfsverb auf Position 2, Infinitiv / Partizip ganz am Ende.","Sentence bracket: the second verb part goes to the very end.","Ich habe gekauft ein neues Handy.","Ich habe ein neues Handy gekauft."]],
kasus:[
 ["Frage nach dem Kasus: Wer/Was? Nominativ · Wen/Was? Akkusativ · Wem? Dativ · Wessen? Genitiv.","Ask the question to find the case.","Ich sehe der Mann.","Ich sehe den Mann."],
 ["Nur maskulin ändert sich im Akkusativ: der → den, ein → einen. Feminin, neutral und Plural bleiben gleich.","Only masculine changes in the accusative.","Ich habe einen Auto.","Ich habe ein Auto."],
 ["Dativ: dem / der / dem / den + -n im Plural.","Dative: dem / der / dem / den + -n.","mit die Kinder","mit den Kindern"],
 ["Nach sein und werden steht Nominativ, kein Akkusativ.","After sein and werden: nominative.","Er ist einen guten Lehrer.","Er ist ein guter Lehrer."]],
pron:[
 ["Akkusativ: mich, dich, ihn, sie, es, uns, euch, sie · Dativ: mir, dir, ihm, ihr, ihm, uns, euch, ihnen.","Learn both rows by heart.","Ich gebe ihn das Buch.","Ich gebe ihm das Buch."],
 ["Höflich: Sie, Ihnen, Ihr – immer groß geschrieben.","Polite forms are always capitalised.","Ich danke ihnen für ihre Hilfe. (an eine Person)","Ich danke Ihnen für Ihre Hilfe."],
 ["man hat die Verbform von er/sie: man kann, man muss – und im Akkusativ einen.","man takes the er/sie verb form.","Man können hier parken.","Man kann hier parken."]],
unreg:[
 ["Lerne starke Verben immer in drei Formen: fahren – fuhr – gefahren.","Learn strong verbs in three forms.","Ich habe gegeht.","Ich bin gegangen."],
 ["Vokalwechsel im Präsens nur bei du und er/sie/es: ich fahre, du fährst, er fährt.","Vowel change only for du and er/sie/es.","Ich fähre nach Hause.","Ich fahre nach Hause."],
 ["Gemischte Verben haben -t und Vokalwechsel: bringen – brachte – gebracht, denken – dachte – gedacht.","Mixed verbs: -t ending plus vowel change.","Ich habe an dich gedenkt.","Ich habe an dich gedacht."]],
dawo:[
 ["da- / wo- + Präposition nur für Sachen und Ideen – für Personen Präposition + Pronomen.","da-/wo- only for things; for people preposition + pronoun.","Ich denke daran. (an meine Mutter)","Ich denke an sie."],
 ["Vor Vokal kommt ein r: darauf, darüber, worauf, woran.","Add r before a vowel.","daauf","darauf"],
 ["da(r)- kann einen ganzen Satz ankündigen: Ich freue mich darauf, dich zu sehen.","da(r)- can announce a whole clause.","~Ich freue mich, dich zu sehen.","Ich freue mich darauf, dich zu sehen."]],
es:[
 ["Wetter und Zeit brauchen es: Es regnet. Es ist spät.","Weather and time need es.","Regnet.","Es regnet."],
 ["es gibt + Akkusativ = there is / there are – immer Singular.","es gibt + accusative, always singular.","Es geben viele Probleme.","Es gibt viele Probleme."],
 ["Wie geht es dir? – es ist Pflicht, auch in der Antwort: Mir geht es gut.","es is required in Wie geht es …?","Mir geht gut.","Mir geht es gut."]],
partikel:[
 ["Modalpartikeln stehen im Mittelfeld, nie auf Position 1.","Modal particles go in the middle field, never first.","Mal komm her!","Komm mal her!"],
 ["doch, mal, ja machen Bitten freundlicher und Aussagen lebendiger – aber nicht in formellen Briefen.","They soften requests – but not in formal letters.","Schicken Sie mir doch mal die Unterlagen. (im Brief an ein Amt)","Bitte schicken Sie mir die Unterlagen."],
 ["denn in Fragen zeigt Interesse: Was ist denn los?","denn in questions shows interest.","~Was ist los?","Was ist denn los?"]],
adv:[
 ["gern – lieber – am liebsten: so sagt man, was man mag, mit einem Verb.","gern – lieber – am liebsten with verbs.","Ich mag schwimmen.","Ich schwimme gern."],
 ["schon = früher als erwartet · erst = später oder weniger als erwartet.","schon = already · erst = only / not until.","Ich bin schon um 10 Uhr aufgestanden. (wenn es spät war)","Ich bin erst um 10 Uhr aufgestanden."],
 ["noch nicht ↔ schon · nicht mehr ↔ noch.","noch nicht ↔ schon · nicht mehr ↔ noch.","Ich wohne nicht noch hier.","Ich wohne nicht mehr hier."],
 ["hin = vom Sprecher weg · her = zum Sprecher hin: Komm her! Geh hin!","hin = away from the speaker · her = towards.","Komm hin!","Komm her!"]],
wort:[
 ["-ung, -heit, -keit, -schaft machen aus Verben und Adjektiven Nomen – und die sind immer feminin.","These suffixes make feminine nouns.","der Wohnung","die Wohnung"],
 ["Bei zusammengesetzten Nomen bestimmt das letzte Wort den Artikel.","In compounds the last word gives the article.","das Haustür","die Haustür"],
 ["un- macht das Gegenteil: freundlich → unfreundlich, möglich → unmöglich.","un- makes the opposite.","~nicht möglich","unmöglich"]],
artikel:[
 ["Lerne jedes Nomen mit Artikel und Plural: der Tisch, die Tische.","Learn every noun with article and plural.","~Tisch","der Tisch, die Tische"],
 ["Sichere Endungen zuerst: -ung, -heit, -keit, -schaft, -ion → die · -chen, -lein → das · -ling, -ismus → der.","Learn the reliable endings first.","der Zeitung","die Zeitung"],
 ["Unsicher? Lies den Artikel aus dem Satz ab (zur → die, einen → der) oder frag den Artikel-Finder.","Unsure? Read it from the sentence or use the finder.","das Termin","der Termin"]],
plural:[
 ["Im Plural ist der Artikel immer die – im Dativ den, und das Nomen bekommt -n.","Plural article: die – dative den + -n.","mit den Freunde","mit den Freunden"],
 ["Feminine Nomen haben fast immer -(e)n: die Frau → die Frauen, die Rechnung → die Rechnungen.","Feminine nouns almost always take -(e)n.","die Rechnunge","die Rechnungen"],
 ["Nach Zahlen ab zwei steht der Plural: zwei Kinder, drei Euro (Euro bleibt gleich).","After numbers from two: plural.","zwei Kind","zwei Kinder"]],
poss:[
 ["sein = von ihm (er, es) · ihr = von ihr (sie) oder von ihnen (Plural).","sein = his/its · ihr = her/their.","Maria besucht seine Mutter.","Maria besucht ihre Mutter."],
 ["Die Endung passt zum Nomen danach, nicht zur Person: Er besucht seine Tochter.","The ending matches the following noun.","Er besucht sein Tochter.","Er besucht seine Tochter."],
 ["euer verliert das e, wenn eine Endung kommt: eure, euren, eurem.","euer drops the e before an ending.","euere Wohnung","eure Wohnung"]]
};
