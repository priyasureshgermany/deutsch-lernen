/* B1 grammar topics for the Grammatik tab.

   topic → groups → items; every item has four or five examples, each showing
   a different use (case, meaning, position in the sentence, tense):
   [why, German, English]. [[…]] marks the words the item is about.
   tools/check-grammatik.mjs checks every item has at least four examples
   with distinct explanations, a marked word and an English line. */
window.GD = [
{id:"zeit", de:"Zeitformen", en:"Tenses",
 intro:"Deutsch hat sechs Zeitformen: Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I und Futur II. Eine Verlaufsform wie im Englischen (I am working) gibt es nicht – man benutzt das Präsens, oft mit „gerade“. Im Alltag spricht man über die Vergangenheit meist im Perfekt, nur bei sein, haben und Modalverben im Präteritum.",
 groups:[
 {g:"Überblick", gen:"overview", items:[
  {w:"ein Verb – sechs Zeiten", en:"one verb – six tenses", tag:"machen / fahren", ex:[
   ["Präsens: jetzt / immer", "Ich [[mache]] jeden Tag meine Hausaufgaben.", "I do my homework every day."],
   ["Präteritum: geschriebene Vergangenheit", "Früher [[machte]] ich meine Hausaufgaben immer abends.", "In the past I always did my homework in the evening."],
   ["Perfekt: gesprochene Vergangenheit", "Ich [[habe]] meine Hausaufgaben schon [[gemacht]].", "I've already done my homework."],
   ["Plusquamperfekt: noch früher in der Vergangenheit", "Ich [[hatte]] die Hausaufgaben schon [[gemacht]], als mein Freund anrief.", "I had already done my homework when my friend called."],
   ["Futur I: Zukunft / Plan", "Morgen [[werde]] ich die Hausaufgaben früher [[machen]].", "Tomorrow I'll do my homework earlier."],
   ["Futur II: in der Zukunft schon fertig", "Bis 18 Uhr [[werde]] ich die Hausaufgaben [[gemacht haben]].", "By 6 pm I will have done my homework."]]}
 ]},
 {g:"Gegenwart", gen:"present", items:[
  {w:"Präsens", en:"present tense", tag:"ich mache", ex:[
   ["jetzt, in diesem Moment", "Ich [[koche]] gerade das Abendessen.", "I'm cooking dinner right now."],
   ["Gewohnheit: immer, oft, jeden Tag", "Wir [[fahren]] jeden Morgen mit dem Bus zur Arbeit.", "We take the bus to work every morning."],
   ["Zukunft mit Zeitangabe (sehr häufig)", "Nächste Woche [[fliege]] ich nach Spanien.", "Next week I'm flying to Spain."],
   ["mit seit: dauert bis jetzt", "Ich [[wohne]] seit drei Jahren in Frankfurt.", "I have been living in Frankfurt for three years."],
   ["allgemeine Wahrheit", "Wasser [[kocht]] bei 100 Grad.", "Water boils at 100 degrees."]]},
  {w:"„Verlaufsform“", en:"'-ing' form (I am doing)", tag:"gerade / am … sein", ex:[
   ["Präsens + gerade (I am doing)", "Ich kann nicht telefonieren, ich [[bin gerade]] im Meeting.", "I can't talk on the phone, I'm in a meeting right now."],
   ["am + Infinitiv + sein (gesprochen)", "Mein Mann [[ist]] noch [[am Arbeiten]].", "My husband is still working."],
   ["dabei sein, … zu + Infinitiv", "Wir [[sind gerade dabei]], die Wohnung [[zu]] streichen.", "We're in the middle of painting the flat."],
   ["Vergangenheit: Präteritum + gerade, als …", "Ich [[war gerade]] unter der Dusche, als es klingelte.", "I was just in the shower when the doorbell rang."]]}
 ]},
 {g:"Vergangenheit", gen:"past", items:[
  {w:"Präteritum", en:"simple past", tag:"ich machte", ex:[
   ["sein und haben: im Gespräch fast immer Präteritum", "Gestern [[war]] ich müde und [[hatte]] keine Lust auf Sport.", "Yesterday I was tired and didn't feel like doing sport."],
   ["Modalverben: Präteritum statt Perfekt", "Ich [[musste]] lange warten und [[konnte]] den Bus nicht nehmen.", "I had to wait a long time and couldn't take the bus."],
   ["regelmäßige Verben: -te (Erzählung, Zeitung)", "Die Firma [[suchte]] damals dringend neue Mitarbeiter.", "At that time the company was urgently looking for new staff."],
   ["unregelmäßige Verben: Vokalwechsel", "Wir [[gingen]] spazieren und [[sahen]] einen Regenbogen.", "We went for a walk and saw a rainbow."],
   ["es gab (there was / there were)", "Im Hotel [[gab]] es leider kein warmes Wasser.", "Unfortunately there was no hot water in the hotel."]]},
  {w:"Perfekt", en:"present perfect (spoken past)", tag:"habe / bin + Partizip", ex:[
   ["haben + regelmäßiges Partizip (ge-…-t)", "Ich [[habe]] am Wochenende meine Eltern [[besucht]].", "I visited my parents at the weekend."],
   ["sein bei Bewegung (gehen, fahren, fliegen)", "Wir [[sind]] im Sommer nach Italien [[gefahren]].", "We went to Italy in the summer."],
   ["sein bei Veränderung (einschlafen, aufwachen)", "Das Baby [[ist]] endlich [[eingeschlafen]].", "The baby has finally fallen asleep."],
   ["trennbare Verben: ge in der Mitte", "Hast du schon [[eingekauft]]?", "Have you done the shopping yet?"],
   ["-ieren und be-/ver-/er-: ohne ge-", "Ich [[habe]] die Rechnung schon [[bezahlt]] und die Tickets [[reserviert]].", "I've already paid the bill and reserved the tickets."]]},
  {w:"Plusquamperfekt", en:"past perfect (had done)", tag:"hatte / war + Partizip", ex:[
   ["hatte + Partizip: vor einem anderen Ereignis", "Ich [[hatte]] meinen Schlüssel im Büro [[vergessen]], deshalb musste ich auf meinen Mann warten.", "I had left my key at the office, so I had to wait for my husband."],
   ["war + Partizip bei Bewegung", "Er [[war]] schon nach Hause [[gegangen]], als ich ihn anrufen wollte.", "He had already gone home when I wanted to call him."],
   ["nach nachdem", "Nachdem wir [[gegessen hatten]], gingen wir ins Kino.", "After we had eaten, we went to the cinema."],
   ["mit schon / vorher: Erklärung", "Ich kannte die Stadt, weil ich vorher schon zweimal dort [[gewesen war]].", "I knew the city because I had been there twice before."]]}
 ]},
 {g:"Zukunft", gen:"future", items:[
  {w:"Futur I", en:"future", tag:"werde + Infinitiv", ex:[
   ["Vorhersage (Wetter, Prognose)", "Morgen [[wird]] es stark [[regnen]].", "It will rain heavily tomorrow."],
   ["Versprechen / fester Plan", "Ich [[werde]] dir morgen bestimmt [[helfen]].", "I'll definitely help you tomorrow."],
   ["Vermutung über jetzt: wird wohl", "Er ist nicht da, er [[wird]] wohl krank [[sein]].", "He's not here; he's probably ill."],
   ["deutliche Aufforderung", "Du [[wirst]] jetzt sofort dein Zimmer [[aufräumen]]!", "You will tidy your room right now!"],
   ["im Nebensatz: werde am Ende", "Ich hoffe, dass ich die Prüfung [[bestehen werde]].", "I hope that I will pass the exam."]]},
  {w:"Futur II", en:"future perfect (will have done)", tag:"werde + Partizip + haben/sein", ex:[
   ["in der Zukunft schon fertig (by then)", "Bis Freitag [[werde]] ich den Bericht [[geschrieben haben]].", "By Friday I will have written the report."],
   ["mit sein bei Bewegung", "Um diese Zeit [[werden]] wir schon in Hamburg [[angekommen sein]].", "By this time we'll already have arrived in Hamburg."],
   ["Vermutung über die Vergangenheit", "Sie [[wird]] den Termin wohl [[vergessen haben]].", "She has probably forgotten the appointment."],
   ["im Alltag oft Perfekt statt Futur II", "Bis morgen [[habe]] ich alles [[erledigt]].", "I'll have done everything by tomorrow."]]}
 ]}
]},
{id:"praep", de:"Präpositionen", en:"Prepositions",
 intro:"Die Präposition bestimmt den Kasus. Lerne sie in Gruppen: immer Dativ, immer Akkusativ, Wechselpräpositionen (Wo? → Dativ, Wohin? → Akkusativ) und Genitiv.",
 groups:[
 {g:"Immer mit Dativ", gen:"always with the dative", items:[
  {w:"aus", en:"from, out of", tag:"+ Dativ", ex:[
   ["Herkunft: Woher? (origin)", "Meine Kollegin kommt [[aus]] der Türkei.", "My colleague comes from Turkey."],
   ["aus einem Raum heraus (out of)", "Um sechs Uhr kommt er müde [[aus]] dem Büro.", "At six he comes out of the office, tired."],
   ["Material: Woraus? (made of)", "Die Tasche ist [[aus]] Leder und hat nur 30 Euro gekostet.", "The bag is made of leather and only cost 30 euros."],
   ["Grund, ohne Artikel, am Satzanfang (out of fear, love …)", "[[Aus]] Angst vor der Prüfung hat sie die ganze Nacht nicht geschlafen.", "Out of fear of the exam she didn't sleep all night."],
   ["in der Frage: Aus welchem …?", "[[Aus]] welchem Land kommen Sie?", "Which country do you come from?"]]},
  {w:"bei", en:"at, near, at someone's place", tag:"+ Dativ", ex:[
   ["Arbeitsplatz: bei einer Firma (at a company)", "Ich arbeite seit drei Jahren [[bei]] einer Versicherung.", "I've been working at an insurance company for three years."],
   ["bei einer Person zu Hause (at someone's place)", "Am Wochenende übernachten die Kinder [[bei]] ihren Großeltern.", "At the weekend the children stay at their grandparents'."],
   ["beim Arzt, beim Friseur (at the doctor's)", "Ich war heute Morgen [[beim]] Zahnarzt.", "I was at the dentist's this morning."],
   ["beim + Tätigkeit, am Satzanfang (while doing)", "[[Beim]] Autofahren darf man nicht telefonieren.", "You mustn't make phone calls while driving."],
   ["Nähe zu einem Ort (near)", "Offenbach liegt direkt [[bei]] Frankfurt.", "Offenbach is right next to Frankfurt."]]},
  {w:"mit", en:"with, by (transport)", tag:"+ Dativ", ex:[
   ["Verkehrsmittel: Womit? (by)", "Ich fahre jeden Tag [[mit]] der S-Bahn zur Arbeit.", "I take the S-Bahn to work every day."],
   ["zusammen mit einer Person (with)", "Kannst du bitte [[mit]] dem Vermieter über die Heizung sprechen?", "Can you please talk to the landlord about the heating?"],
   ["Mittel in der Frage (by card, with a pen)", "Kann ich hier [[mit]] Karte bezahlen?", "Can I pay by card here?"],
   ["Eigenschaft nach einem Nomen (with a balcony)", "Wir suchen eine Wohnung [[mit]] Balkon.", "We're looking for a flat with a balcony."],
   ["Alter, am Satzanfang (at the age of)", "[[Mit]] 18 Jahren bin ich nach Deutschland gekommen.", "I came to Germany at the age of 18."]]},
  {w:"nach", en:"to (places), after, according to", tag:"+ Dativ", ex:[
   ["Städte und Länder ohne Artikel (to)", "Nächsten Sommer fliegen wir [[nach]] Spanien.", "Next summer we are flying to Spain."],
   ["nach Hause, in der Frage (home)", "Wann kommst du heute [[nach]] Hause?", "When are you coming home today?"],
   ["Zeit, am Satzanfang (after)", "[[Nach]] dem Deutschkurs gehe ich meistens noch einkaufen.", "After the German course I usually go shopping."],
   ["Richtung: nach links, nach oben (to the left)", "Gehen Sie an der Ampel [[nach]] links.", "Turn left at the traffic lights."],
   ["nachgestellt: meiner Meinung nach (in my opinion)", "Meiner Meinung [[nach]] ist das eine gute Idee.", "In my opinion that's a good idea."]]},
  {w:"seit", en:"since, for (time)", tag:"+ Dativ", ex:[
   ["Dauer bis jetzt, Verb im Präsens (for)", "Ich lerne [[seit]] einem Jahr Deutsch.", "I have been learning German for a year."],
   ["Zeitpunkt, am Satzanfang (since)", "[[Seit]] dem Umzug habe ich viel weniger Stress.", "Since the move I have had much less stress."],
   ["Frage: Seit wann …? (since when / how long)", "[[Seit]] wann wohnen Sie in Deutschland?", "How long have you been living in Germany?"],
   ["im Nebensatz", "Mein Rücken tut weh, weil ich [[seit]] Stunden am Computer sitze.", "My back hurts because I've been sitting at the computer for hours."]]},
  {w:"von", en:"from, of, by", tag:"+ Dativ", ex:[
   ["von einer Person (from)", "Ich habe gerade eine E-Mail [[von]] meinem Chef bekommen.", "I have just received an email from my boss."],
   ["Herkunft nach einem Nomen (the train from …)", "Der Zug [[von]] München hat 20 Minuten Verspätung.", "The train from Munich is 20 minutes late."],
   ["von … bis (from … to)", "Die Praxis ist [[von]] Montag [[bis]] Freitag geöffnet.", "The practice is open from Monday to Friday."],
   ["Passiv: von wem? (by)", "Das Formular muss [[von]] beiden Eltern unterschrieben werden.", "The form must be signed by both parents."],
   ["statt Genitiv, gesprochen (of, 's)", "Das ist das Auto [[von]] meinem Bruder.", "That's my brother's car."]]},
  {w:"zu", en:"to (people / places)", tag:"+ Dativ", ex:[
   ["Richtung zu Personen: zum = zu dem (to)", "Morgen muss ich [[zum]] Arzt, weil ich Rückenschmerzen habe.", "Tomorrow I have to go to the doctor because I have back pain."],
   ["Anlass, am Satzanfang (for my birthday)", "[[Zu]] meinem Geburtstag habe ich ein Fahrrad bekommen.", "I got a bike for my birthday."],
   ["feste Ausdrücke: zu Fuß, zu Hause", "Ich gehe jeden Tag [[zu]] Fuß zur Arbeit.", "I walk to work every day."],
   ["Mahlzeit: zum Frühstück (for breakfast)", "[[Zum]] Frühstück esse ich meistens Müsli.", "For breakfast I usually eat muesli."],
   ["nach dem Weg fragen: zur = zu der", "Entschuldigung, wie komme ich [[zur]] Post?", "Excuse me, how do I get to the post office?"]]},
  {w:"gegenüber", en:"opposite", tag:"+ Dativ", ex:[
   ["Ort, vor dem Nomen (opposite)", "Die Apotheke ist direkt [[gegenüber]] dem Bahnhof.", "The pharmacy is directly opposite the station."],
   ["Ort, nach dem Nomen", "Die Bank liegt dem Rathaus [[gegenüber]].", "The bank is opposite the town hall."],
   ["mit Pronomen: immer danach", "Im Zug saß mir eine sehr nette Frau [[gegenüber]].", "A very nice woman sat opposite me on the train."],
   ["Verhalten zu Personen (towards)", "[[Gegenüber]] neuen Kollegen ist er immer sehr hilfsbereit.", "He is always very helpful towards new colleagues."]]},
  {w:"ab", en:"from (time / place)", tag:"+ Dativ", ex:[
   ["Zeit: ab jetzt / Zukunft (from … on)", "[[Ab]] nächster Woche arbeite ich nur noch 30 Stunden.", "From next week I will only work 30 hours."],
   ["Ort: Startpunkt (departing from)", "Der Zug fährt [[ab]] Frankfurt Hauptbahnhof um 8:15 Uhr.", "The train departs from Frankfurt main station at 8:15."],
   ["Alter (from the age of)", "Der Film ist erst [[ab]] 16 Jahren.", "The film is only for people aged 16 and over."],
   ["Preis (from … upwards)", "Doppelzimmer gibt es schon [[ab]] 80 Euro pro Nacht.", "Double rooms are available from 80 euros a night."]]}
 ]},
 {g:"Immer mit Akkusativ", gen:"always with the accusative", items:[
  {w:"für", en:"for", tag:"+ Akkusativ", ex:[
   ["für eine Person (for)", "Ich habe [[für]] meine Mutter einen Termin beim Arzt gemacht.", "I made a doctor's appointment for my mother."],
   ["Zeitraum (for a year)", "Wir haben die Wohnung [[für]] ein Jahr gemietet.", "We have rented the flat for a year."],
   ["Preis (for 200 euros)", "Ich habe das Fahrrad gebraucht [[für]] 200 Euro gekauft.", "I bought the bike second-hand for 200 euros."],
   ["Meinung, am Satzanfang (for me)", "[[Für]] mich ist Pünktlichkeit sehr wichtig.", "For me punctuality is very important."],
   ["Zweck (for the application)", "Ich brauche noch eine Kopie [[für]] den Antrag.", "I still need a copy for the application."]]},
  {w:"durch", en:"through", tag:"+ Akkusativ", ex:[
   ["Ort: von einer Seite zur anderen (through)", "Wir sind [[durch]] den Park zum Bahnhof gelaufen.", "We walked through the park to the station."],
   ["Mittel, am Satzanfang (through, thanks to)", "[[Durch]] den Deutschkurs habe ich viele neue Leute kennengelernt.", "Through the German course I have met lots of new people."],
   ["Passiv: Ursache (by)", "Das alte Haus wurde [[durch]] ein Feuer zerstört.", "The old house was destroyed by a fire."],
   ["Rechnen (divided by)", "Zehn [[durch]] zwei ist fünf.", "Ten divided by two is five."]]},
  {w:"gegen", en:"against, around (time)", tag:"+ Akkusativ", ex:[
   ["gegen eine Krankheit (for, against)", "Ich habe in der Apotheke etwas [[gegen]] Kopfschmerzen gekauft.", "I bought something for headaches at the pharmacy."],
   ["ungefähre Uhrzeit (around)", "Wir kommen [[gegen]] 19 Uhr bei euch an.", "We will arrive at your place around 7 pm."],
   ["Meinung: dagegen sein (against)", "Viele Nachbarn sind [[gegen]] den neuen Parkplatz.", "Many neighbours are against the new car park."],
   ["Sport: Gegner (versus)", "Am Samstag spielt Frankfurt [[gegen]] Bayern München.", "On Saturday Frankfurt play against Bayern Munich."],
   ["Bewegung, Kontakt (into)", "Das Auto ist [[gegen]] einen Baum gefahren.", "The car drove into a tree."]]},
  {w:"ohne", en:"without", tag:"+ Akkusativ", ex:[
   ["ohne Artikel, am Satzanfang (without)", "[[Ohne]] Termin kann man beim Bürgeramt leider nichts erledigen.", "Without an appointment you unfortunately can't get anything done at the citizens' office."],
   ["mit Artikel / Personen", "Wir fahren dieses Jahr [[ohne]] die Kinder in den Urlaub.", "This year we're going on holiday without the children."],
   ["ohne … zu + Infinitiv (without doing)", "Er ist gegangen, [[ohne]] sich [[zu]] verabschieden.", "He left without saying goodbye."],
   ["ohne dass + Nebensatz (without someone …)", "Er hat mein Auto genommen, [[ohne]] [[dass]] ich es wusste.", "He took my car without me knowing."]]},
  {w:"um", en:"around, at (clock time)", tag:"+ Akkusativ", ex:[
   ["Uhrzeit (at)", "Der Kurs beginnt [[um]] halb neun.", "The course starts at half past eight."],
   ["Ort: um … herum (around)", "Gehen Sie [[um]] die Ecke, dann sehen Sie die Post.", "Go around the corner, then you'll see the post office."],
   ["ungefähr: um die … (about)", "Ein guter Laptop kostet so [[um]] die 800 Euro.", "A good laptop costs about 800 euros."],
   ["Unterschied: um … gestiegen (by)", "Die Miete ist [[um]] 50 Euro gestiegen.", "The rent has gone up by 50 euros."],
   ["Verb mit um: sich kümmern um", "Wer kümmert sich [[um]] die Kinder?", "Who looks after the children?"]]},
  {w:"bis", en:"until, by, as far as", tag:"+ Akkusativ", ex:[
   ["Frist: spätestens (by)", "Ich muss den Antrag [[bis]] Freitag abgeben.", "I have to hand in the application by Friday."],
   ["bis zu + Dativ: Strecke (as far as)", "Fahren Sie [[bis zum]] Bahnhof und steigen Sie dort um.", "Go as far as the station and change there."],
   ["von … bis: Arbeitszeit (from … to)", "Ich arbeite [[von]] 8 [[bis]] 16 Uhr.", "I work from 8 am to 4 pm."],
   ["Abschied (see you …)", "Tschüss, [[bis]] morgen!", "Bye, see you tomorrow!"]]}
 ]},
 {g:"Wechselpräpositionen: Wo? Dativ · Wohin? Akkusativ", gen:"two-way: where? dative · where to? accusative", items:[
  {w:"in", en:"in, into", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (in)", "Mein Mann arbeitet [[in]] einem Krankenhaus.", "My husband works in a hospital."],
   ["Wohin? → Akkusativ: ins = in das (to)", "Am Samstag gehen wir [[ins]] Kino.", "On Saturday we're going to the cinema."],
   ["Zeit: Monat, Jahreszeit → im (in)", "[[Im]] Sommer fahren wir immer ans Meer.", "In summer we always go to the seaside."],
   ["Zeit: in + Dauer = nach dieser Zeit (in ten minutes)", "Der Zug kommt [[in]] zehn Minuten.", "The train arrives in ten minutes."],
   ["Länder mit Artikel: Wohin? → Akkusativ", "Nächstes Jahr ziehen wir [[in]] die Schweiz.", "Next year we are moving to Switzerland."]]},
  {w:"an", en:"at, on (vertical), to", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ: senkrecht, an der Wand (on)", "Das Foto hängt [[an]] der Wand im Wohnzimmer.", "The photo is hanging on the wall in the living room."],
   ["Wohin? → Akkusativ: hängen, stellen", "Ich hänge den Kalender [[an]] die Wand.", "I hang the calendar on the wall."],
   ["Zeit: Tage und Datum → am (on)", "[[Am]] Montag habe ich frei.", "I'm off on Monday."],
   ["Wo? am Wasser (by, at)", "Wir machen jedes Jahr Urlaub [[an]] der Ostsee.", "We spend our holiday on the Baltic coast every year."],
   ["Wohin? ans Meer = an das", "In den Ferien fahren wir [[ans]] Meer.", "In the holidays we're going to the seaside."]]},
  {w:"auf", en:"on, onto, in (a language)", tag:"Wo? / Wohin? / Sprache", ex:[
   ["Wo? → Dativ: waagerecht, liegen (on)", "Dein Handy liegt [[auf]] dem Tisch.", "Your phone is lying on the table."],
   ["Wohin? → Akkusativ: legen (onto)", "Leg die Schlüssel bitte [[auf]] den Tisch.", "Please put the keys on the table."],
   ["Wo? bei Ereignissen: auf einer Party (at)", "Ich war gestern [[auf]] einer Hochzeit.", "Yesterday I was at a wedding."],
   ["Wohin? bei Ämtern: aufs = auf das (to)", "Morgen muss ich [[aufs]] Bürgeramt.", "Tomorrow I have to go to the citizens' office."],
   ["Sprache, in der Frage (in German)", "Wie heißt das [[auf]] Deutsch?", "What's that called in German?"]]},
  {w:"über", en:"over, above, about", tag:"Wo? / Wohin? / Thema", ex:[
   ["Wo? → Dativ, am Satzanfang (above)", "[[Über]] dem Sofa hängt eine große Lampe.", "A big lamp hangs above the sofa."],
   ["Wohin? → Akkusativ (over, above)", "Ich hänge die neue Lampe [[über]] den Esstisch.", "I'm hanging the new lamp above the dining table."],
   ["Thema: über + Akkusativ (about)", "Wir haben lange [[über]] das Problem gesprochen.", "We talked about the problem for a long time."],
   ["Weg: über eine Stadt (via)", "Der Zug fährt [[über]] Köln nach Hamburg.", "The train goes to Hamburg via Cologne."],
   ["mehr als (over)", "Das Konzert hat [[über]] zwei Stunden gedauert.", "The concert lasted over two hours."]]},
  {w:"unter", en:"under, below, among", tag:"Wo? / Wohin? / weniger", ex:[
   ["Wo? → Dativ (under)", "Die Katze schläft [[unter]] dem Bett.", "The cat is sleeping under the bed."],
   ["Wohin? → Akkusativ (under – movement)", "Der Ball ist [[unter]] das Auto gerollt.", "The ball rolled under the car."],
   ["weniger als (under, below)", "Kinder [[unter]] sechs Jahren fahren kostenlos.", "Children under six travel free."],
   ["zwischen vielen (among), am Satzanfang", "[[Unter]] den Teilnehmern waren viele Studenten.", "Among the participants there were many students."],
   ["Telefonnummer (on, at)", "Sie erreichen uns [[unter]] der Nummer 069 123456.", "You can reach us on 069 123456."]]},
  {w:"vor", en:"in front of, before, ago", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (in front of)", "Ich warte [[vor]] dem Eingang auf dich.", "I'll wait for you in front of the entrance."],
   ["Wohin? → Akkusativ: stellen", "Stell die Schuhe bitte [[vor]] die Tür.", "Please put the shoes outside the door."],
   ["Zeit: vor + Dativ = ago", "Ich habe [[vor]] drei Jahren angefangen, Deutsch zu lernen.", "I started learning German three years ago."],
   ["Zeit: früher als, am Satzanfang (before)", "[[Vor]] dem Essen wasche ich mir die Hände.", "Before eating I wash my hands."],
   ["Uhrzeit (to)", "Es ist zehn [[vor]] acht.", "It's ten to eight."]]},
  {w:"hinter", en:"behind", tag:"Wo? / Wohin?", ex:[
   ["Wo? → Dativ (behind)", "Der Parkplatz ist [[hinter]] dem Supermarkt.", "The car park is behind the supermarket."],
   ["Wohin? → Akkusativ: stellen", "Stell das Fahrrad bitte [[hinter]] das Haus.", "Please put the bike behind the house."],
   ["mit Pronomen, in der Frage", "Wer steht da [[hinter]] dir?", "Who's standing there behind you?"],
   ["übertragen: vorbei (behind me = over)", "Die schwere Prüfung liegt endlich [[hinter]] mir.", "The hard exam is finally behind me."]]},
  {w:"neben", en:"next to, besides", tag:"Wo? / Wohin? / zusätzlich", ex:[
   ["Wo? → Dativ (next to)", "Die Bäckerei ist [[neben]] der Post.", "The bakery is next to the post office."],
   ["Wohin? → Akkusativ: sich setzen", "Darf ich mich [[neben]] Sie setzen?", "May I sit down next to you?"],
   ["zusätzlich, am Satzanfang (besides)", "[[Neben]] der Arbeit mache ich noch einen Deutschkurs.", "Besides work I'm also doing a German course."],
   ["Wo? bei Personen", "Im Kurs sitze ich immer [[neben]] meiner Freundin.", "In the course I always sit next to my friend."]]},
  {w:"zwischen", en:"between", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (between)", "Das Café liegt [[zwischen]] dem Kino und der Bank.", "The café is between the cinema and the bank."],
   ["Wohin? → Akkusativ: stellen", "Ich stelle den Stuhl [[zwischen]] das Sofa und den Tisch.", "I put the chair between the sofa and the table."],
   ["Zeit (between … and …)", "Rufen Sie bitte [[zwischen]] 9 und 12 Uhr an.", "Please call between 9 and 12."],
   ["Beziehung, am Satzanfang", "[[Zwischen]] meinem Bruder und mir gibt es oft Streit.", "My brother and I often argue."]]}
 ]},
 {g:"Mit Genitiv", gen:"with the genitive", items:[
  {w:"wegen", en:"because of", tag:"+ Genitiv", ex:[
   ["Grund, geschrieben mit Genitiv (because of)", "[[Wegen]] des Streiks fahren heute keine Busse.", "Because of the strike there are no buses today."],
   ["gesprochen oft mit Dativ – im Test Genitiv", "[[Wegen]] dem schlechten Wetter bleiben wir zu Hause.", "Because of the bad weather we're staying at home."],
   ["im Satz, am Telefon (about, regarding)", "Ich rufe [[wegen]] Ihrer Anzeige an.", "I'm calling about your advert."],
   ["mit Pronomen: wegen mir (because of me)", "[[Wegen]] mir musst du nicht früher gehen.", "You don't have to leave early because of me."]]},
  {w:"trotz", en:"despite", tag:"+ Genitiv", ex:[
   ["Gegengrund, am Satzanfang (despite)", "[[Trotz]] des Regens sind wir spazieren gegangen.", "Despite the rain we went for a walk."],
   ["= obwohl + Nebensatz: Obwohl die Miete hoch ist …", "[[Trotz]] der hohen Miete wohne ich gern in der Stadt.", "Despite the high rent I like living in the city."],
   ["im Satz, nach dem Verb", "Er ist [[trotz]] seiner Erkältung zur Arbeit gegangen.", "He went to work despite his cold."],
   ["trotzdem = Adverb, kein Nomen danach", "Es hat geregnet. [[Trotzdem]] sind wir spazieren gegangen.", "It rained. We went for a walk anyway."]]},
  {w:"während", en:"during, while", tag:"+ Genitiv / Konjunktion", ex:[
   ["Präposition + Genitiv, am Satzanfang (during)", "[[Während]] des Unterrichts muss das Handy aus sein.", "During the lesson the phone has to be off."],
   ["Präposition im Satz", "Ich war [[während]] der Ferien bei meinen Eltern.", "I was at my parents' during the holidays."],
   ["Konjunktion: gleichzeitig (while), Verb am Ende", "[[Während]] ich koche, deckt mein Sohn den Tisch.", "While I cook, my son sets the table."],
   ["Konjunktion: Gegensatz (whereas)", "Ich trinke gern Kaffee, [[während]] mein Mann nur Tee trinkt.", "I like coffee, whereas my husband only drinks tea."]]},
  {w:"statt", en:"instead of", tag:"+ Genitiv", ex:[
   ["statt + Genitiv (instead of)", "[[Statt]] eines Autos habe ich mir ein E-Bike gekauft.", "Instead of a car I bought myself an e-bike."],
   ["statt … zu + Infinitiv (instead of doing)", "[[Statt]] [[zu]] lernen, hat er den ganzen Abend Serien geschaut.", "Instead of studying, he watched series all evening."],
   ["ohne Artikel, im Restaurant", "Kann ich [[statt]] Pommes einen Salat bekommen?", "Can I have a salad instead of chips?"],
   ["vor einer Zeitangabe (instead of today)", "Können wir uns morgen [[statt]] heute treffen?", "Can we meet tomorrow instead of today?"]]},
  {w:"innerhalb", en:"within, inside", tag:"+ Genitiv", ex:[
   ["Zeit: innerhalb von + Dativ (within)", "Bitte zahlen Sie die Rechnung [[innerhalb]] von 14 Tagen.", "Please pay the invoice within 14 days."],
   ["Zeit + Genitiv", "Der Brief kommt [[innerhalb]] einer Woche an.", "The letter arrives within a week."],
   ["Ort, am Satzanfang (inside)", "[[Innerhalb]] der Stadt darf man nur 50 km/h fahren.", "Within the city you may only drive at 50 km/h."],
   ["Organisation (within the company)", "Die Stelle wird zuerst [[innerhalb]] der Firma ausgeschrieben.", "The position is advertised within the company first."]]},
  {w:"außerhalb", en:"outside", tag:"+ Genitiv", ex:[
   ["Ort + Genitiv (outside)", "Wir wohnen [[außerhalb]] der Stadt, deshalb brauchen wir ein Auto.", "We live outside the city, so we need a car."],
   ["Zeit, am Satzanfang (outside of)", "[[Außerhalb]] der Öffnungszeiten erreichen Sie uns per E-Mail.", "Outside opening hours you can reach us by email."],
   ["als Adverb, ohne Nomen", "Das Hotel liegt etwas [[außerhalb]].", "The hotel is a little outside town."],
   ["außerhalb von + Dativ", "[[Außerhalb]] von Europa war ich noch nie.", "I've never been outside Europe."]]}
 ]}
]},

{id:"konj", de:"Konjunktionen", en:"Conjunctions & connectors",
 intro:"Wichtig ist die Position des Verbs: nach und/aber/oder/denn/sondern bleibt alles gleich (Position 0), nach weil/dass/obwohl … steht das Verb am Ende, nach deshalb/trotzdem … kommt das Verb sofort (Position 2).",
 groups:[
 {g:"Hauptsatz + Hauptsatz (Position 0)", gen:"main clause + main clause", items:[
  {w:"und", en:"and", tag:"Position 0", ex:[
   ["gleiches Subjekt: nicht wiederholen", "Ich stehe um sechs Uhr auf [[und]] frühstücke mit meiner Familie.", "I get up at six and have breakfast with my family."],
   ["zwei Hauptsätze mit verschiedenen Subjekten", "Mein Mann kocht, [[und]] ich räume die Küche auf.", "My husband cooks and I tidy the kitchen."],
   ["nach und: ein anderes Wort auf Position 1", "Ich komme nach Hause, [[und]] dann koche ich.", "I come home and then I cook."],
   ["Aufzählung (and)", "Ich brauche noch Milch, Eier [[und]] Brot.", "I still need milk, eggs and bread."],
   ["zwei Nebensätze verbinden", "Ich hoffe, dass du kommst [[und]] dass du deine Frau mitbringst.", "I hope that you'll come and that you'll bring your wife."]]},
  {w:"aber", en:"but", tag:"Position 0", ex:[
   ["Gegensatz zwischen zwei Sätzen (but)", "Die Wohnung ist schön, [[aber]] sie ist leider zu teuer.", "The flat is nice, but unfortunately it's too expensive."],
   ["im Satz nach dem Verb (however)", "Ich möchte gern kommen, habe [[aber]] keine Zeit.", "I'd like to come, but I don't have time."],
   ["zwischen Adjektiven", "Das Essen war einfach, [[aber]] sehr lecker.", "The food was simple but very tasty."],
   ["nach einem Punkt am Satzanfang", "Ich habe viel gelernt. [[Aber]] die Prüfung war trotzdem schwer.", "I studied a lot. But the exam was still hard."],
   ["Modalpartikel: Überraschung (really)", "Das ist [[aber]] eine schöne Wohnung!", "What a lovely flat!"]]},
  {w:"oder", en:"or", tag:"Position 0", ex:[
   ["Auswahl zwischen Wörtern (or)", "Möchten Sie mit Karte [[oder]] bar bezahlen?", "Would you like to pay by card or cash?"],
   ["Auswahl zwischen Sätzen", "Wir gehen heute Abend ins Kino, [[oder]] wir bleiben zu Hause.", "We'll go to the cinema tonight, or we'll stay at home."],
   ["am Ende: Bestätigung (…, right?)", "Du kommst doch morgen, [[oder]]?", "You're coming tomorrow, aren't you?"],
   ["ungefähre Zahl (two or three)", "Die Reparatur dauert zwei [[oder]] drei Tage.", "The repair takes two or three days."]]},
  {w:"denn", en:"because (for)", tag:"Position 0", ex:[
   ["Grund = weil, aber Hauptsatz-Wortstellung", "Ich gehe heute nicht zur Arbeit, [[denn]] ich bin krank.", "I'm not going to work today, because I'm ill."],
   ["mit Modalverb: Verb auf Position 2", "Ich lerne jeden Tag, [[denn]] ich möchte die B1-Prüfung bestehen.", "I study every day because I want to pass the B1 exam."],
   ["mit Perfekt", "Ich bin sehr müde, [[denn]] ich habe schlecht geschlafen.", "I'm very tired because I slept badly."],
   ["Modalpartikel in Fragen (then, actually)", "Was machst du [[denn]] hier?", "What are you doing here, then?"]]},
  {w:"sondern", en:"but rather", tag:"Position 0", ex:[
   ["Korrektur nach nicht (but rather)", "Ich komme nicht aus Polen, [[sondern]] aus Tschechien.", "I don't come from Poland but from the Czech Republic."],
   ["mit ganzem Satz", "Wir fahren nicht mit dem Auto, [[sondern]] wir nehmen den Zug.", "We're not going by car; we're taking the train instead."],
   ["nach kein", "Das ist kein Problem, [[sondern]] eine Chance.", "That's not a problem but an opportunity."],
   ["nicht nur … sondern auch", "Sie spricht [[nicht nur]] Deutsch, [[sondern auch]] Arabisch.", "She speaks not only German but also Arabic."]]}
 ]},
 {g:"Nebensatz: Verb am Ende", gen:"subordinate clause: verb at the end", items:[
  {w:"weil", en:"because", tag:"Verb am Ende", ex:[
   ["Nebensatz nach dem Hauptsatz (because)", "Ich lerne Deutsch, [[weil]] ich in Deutschland arbeiten möchte.", "I'm learning German because I want to work in Germany."],
   ["Nebensatz zuerst: dann Verb, Verb", "[[Weil]] der Bus Verspätung hatte, bin ich zu spät gekommen.", "Because the bus was late, I arrived late."],
   ["Modalverb ganz am Ende", "Ich kann heute nicht kommen, [[weil]] ich länger arbeiten muss.", "I can't come today because I have to work late."],
   ["trennbares Verb: zusammen am Ende", "Ich muss früh aufstehen, [[weil]] mein Zug um sechs Uhr abfährt.", "I have to get up early because my train leaves at six."],
   ["kurze Antwort auf Warum?", "Warum lernst du so viel? – [[Weil]] ich die Prüfung bestehen will.", "Why are you studying so much? – Because I want to pass the exam."]]},
  {w:"da", en:"since, as", tag:"Verb am Ende / Adverb", ex:[
   ["Grund, oft am Satzanfang (since, as)", "[[Da]] ich morgen einen Termin habe, kann ich leider nicht kommen.", "Since I have an appointment tomorrow, unfortunately I can't come."],
   ["typisch im formellen Brief", "[[Da]] die Heizung seit einer Woche nicht funktioniert, bitte ich Sie, einen Handwerker zu schicken.", "As the heating hasn't worked for a week, I ask you to send a technician."],
   ["Adverb: da = hier / dort (there)", "Ist Herr Weber heute [[da]]?", "Is Mr Weber in today?"],
   ["Adverb der Zeit (then, at that moment)", "Ich kam nach Hause, und [[da]] klingelte das Telefon.", "I came home, and just then the phone rang."]]},
  {w:"obwohl", en:"although", tag:"Verb am Ende", ex:[
   ["Nebensatz nach dem Hauptsatz (although)", "Ich gehe zur Arbeit, [[obwohl]] ich erkältet bin.", "I'm going to work although I have a cold."],
   ["Nebensatz zuerst, mit Perfekt", "[[Obwohl]] ich viel gelernt habe, war die Prüfung schwer.", "Although I studied a lot, the exam was hard."],
   ["mit Modalverb am Ende", "Er raucht auf dem Balkon, [[obwohl]] er es nicht darf.", "He smokes on the balcony although he's not allowed to."],
   ["gleiche Bedeutung mit trotzdem (Hauptsatz)", "Ich bin erkältet. [[Trotzdem]] gehe ich zur Arbeit.", "I have a cold. I'm going to work anyway."]]},
  {w:"dass", en:"that", tag:"Verb am Ende", ex:[
   ["nach hoffen, denken, glauben, wissen", "Ich hoffe, [[dass]] du bald wieder gesund bist.", "I hope that you'll be well again soon."],
   ["nach „Es ist wichtig / schön …“", "Es ist wichtig, [[dass]] Sie den Antrag rechtzeitig abgeben.", "It's important that you hand in the application on time."],
   ["dass-Satz am Satzanfang", "[[Dass]] du gekommen bist, freut mich sehr.", "I'm very pleased that you came."],
   ["nach einem Nomen (the news that …)", "Ich habe die Nachricht bekommen, [[dass]] der Kurs ausfällt.", "I got the message that the course is cancelled."],
   ["indirekte Rede mit Modalverb", "Der Arzt sagt, [[dass]] ich mehr schlafen soll.", "The doctor says that I should sleep more."]]},
  {w:"ob", en:"whether, if", tag:"Verb am Ende", ex:[
   ["höfliche indirekte Ja/Nein-Frage (whether)", "Können Sie mir sagen, [[ob]] der Zug pünktlich ist?", "Can you tell me whether the train is on time?"],
   ["nach „Ich weiß nicht …“", "Ich weiß noch nicht, [[ob]] ich am Wochenende Zeit habe.", "I don't know yet whether I'll have time at the weekend."],
   ["ob … oder (whether … or)", "Es ist egal, [[ob]] du mit dem Bus [[oder]] mit dem Auto kommst.", "It doesn't matter whether you come by bus or by car."],
   ["ob-Satz am Satzanfang", "[[Ob]] ich morgen komme, weiß ich noch nicht.", "Whether I'm coming tomorrow, I don't know yet."]]},
  {w:"wenn", en:"if, when, whenever", tag:"Verb am Ende", ex:[
   ["Bedingung (if)", "[[Wenn]] es morgen regnet, bleiben wir zu Hause.", "If it rains tomorrow, we'll stay at home."],
   ["immer wenn: wiederholt (whenever)", "Immer [[wenn]] ich meine Eltern besuche, kocht meine Mutter für mich.", "Whenever I visit my parents, my mother cooks for me."],
   ["Zeitpunkt in der Zukunft (when)", "[[Wenn]] ich mit dem Kurs fertig bin, suche ich eine neue Stelle.", "When I've finished the course, I'll look for a new job."],
   ["Hauptsatz zuerst, Imperativ", "Ruf mich bitte an, [[wenn]] du angekommen bist.", "Please call me when you've arrived."],
   ["irreal mit Konjunktiv II", "[[Wenn]] ich mehr Zeit hätte, würde ich mitkommen.", "If I had more time, I would come along."]]},
  {w:"als", en:"when (once, in the past), than", tag:"Verb am Ende / Vergleich", ex:[
   ["einmal in der Vergangenheit, Nebensatz zuerst (when)", "[[Als]] ich nach Deutschland kam, konnte ich kein Wort Deutsch.", "When I came to Germany, I couldn't speak a word of German."],
   ["Hauptsatz zuerst, Perfekt", "Ich war sehr aufgeregt, [[als]] ich meine erste Wohnung bekommen habe.", "I was very excited when I got my first flat."],
   ["Vergleich nach Komparativ (than)", "Das Wetter ist heute viel besser [[als]] gestern.", "The weather is much better today than yesterday."],
   ["Rolle / Beruf (as)", "Ich arbeite seit zwei Jahren [[als]] Krankenpfleger.", "I've been working as a nurse for two years."]]},
  {w:"bevor", en:"before", tag:"Verb am Ende", ex:[
   ["Nebensatz zuerst (before)", "[[Bevor]] ich zur Arbeit fahre, bringe ich die Kinder in die Schule.", "Before I drive to work, I take the children to school."],
   ["Anweisung, Nebensatz danach", "Bitte lesen Sie den Vertrag genau, [[bevor]] Sie ihn unterschreiben.", "Please read the contract carefully before you sign it."],
   ["trennbares Verb am Ende", "Ich rufe dich an, [[bevor]] ich losfahre.", "I'll call you before I set off."],
   ["mit Nomen: vor + Dativ statt bevor", "[[Vor]] der Arbeit gehe ich joggen.", "Before work I go jogging."]]},
  {w:"nachdem", en:"after", tag:"Verb am Ende", ex:[
   ["Vergangenheit: + Plusquamperfekt, Hauptsatz Präteritum", "[[Nachdem]] ich die Prüfung bestanden hatte, feierte ich mit meinen Freunden.", "After I had passed the exam, I celebrated with my friends."],
   ["Gegenwart: + Perfekt, Hauptsatz Präsens", "[[Nachdem]] ich gegessen habe, mache ich einen kurzen Spaziergang.", "After I've eaten, I go for a short walk."],
   ["Hauptsatz zuerst", "Wir sind spazieren gegangen, [[nachdem]] der Regen aufgehört hatte.", "We went for a walk after the rain had stopped."],
   ["mit Nomen: nach + Dativ statt nachdem", "[[Nach]] dem Essen machen wir einen Spaziergang.", "After the meal we go for a walk."]]},
  {w:"seitdem", en:"since (then)", tag:"Verb am Ende / Position 1", ex:[
   ["Konjunktion, Nebensatz zuerst (since)", "[[Seitdem]] ich Sport mache, schlafe ich viel besser.", "Since I've been doing sport, I sleep much better."],
   ["Konjunktion, Hauptsatz zuerst", "Ich fühle mich viel besser, [[seitdem]] ich weniger Kaffee trinke.", "I feel much better since I've been drinking less coffee."],
   ["Adverb am Satzanfang: Verb sofort", "Ich habe 2022 geheiratet. [[Seitdem]] wohne ich in Hamburg.", "I got married in 2022. Since then I've lived in Hamburg."],
   ["mit Nomen: seit + Dativ", "[[Seit]] meinem Umzug fahre ich mit dem Fahrrad zur Arbeit.", "Since my move I've been cycling to work."]]},
  {w:"bis", en:"until", tag:"Verb am Ende", ex:[
   ["Nebensatz danach (until)", "Warte bitte hier, [[bis]] ich zurückkomme.", "Please wait here until I come back."],
   ["Nebensatz zuerst", "[[Bis]] der Arzt kommt, müssen Sie noch etwas warten.", "Until the doctor comes, you'll have to wait a little."],
   ["Dauer bis zu einem Ereignis", "Es dauert noch zwei Wochen, [[bis]] der Handwerker kommt.", "It'll be another two weeks until the technician comes."],
   ["als Präposition, ohne Verb", "Ich bin [[bis]] Montag im Urlaub.", "I'm on holiday until Monday."]]},
  {w:"damit", en:"so that", tag:"Verb am Ende", ex:[
   ["Ziel, gleiches Subjekt – auch um … zu möglich", "Ich lerne jeden Abend, [[damit]] ich die Prüfung bestehe.", "I study every evening so that I pass the exam."],
   ["Ziel, verschiedene Subjekte → nur damit", "Ich erkläre es noch einmal, [[damit]] alle es verstehen.", "I'll explain it again so that everyone understands."],
   ["Nebensatz zuerst", "[[Damit]] wir pünktlich sind, fahren wir eine Stunde früher los.", "So that we're on time, we're setting off an hour earlier."],
   ["Achtung: damit = da + mit (with it), kein Nebensatz", "Ich habe ein neues Handy und bin sehr zufrieden [[damit]].", "I have a new phone and I'm very happy with it."]]},
  {w:"um … zu", en:"in order to", tag:"Infinitiv", ex:[
   ["Ziel mit Infinitiv (in order to)", "Ich lerne jeden Abend, [[um]] die Prüfung [[zu]] bestehen.", "I study every evening in order to pass the exam."],
   ["am Satzanfang: dann Verb, Subjekt", "[[Um]] Geld [[zu]] sparen, fahre ich mit dem Fahrrad zur Arbeit.", "To save money, I cycle to work."],
   ["trennbares Verb: zu in der Mitte", "Ich stehe früh auf, [[um]] pünktlich [[anzukommen]].", "I get up early in order to arrive on time."],
   ["Antwort auf Wozu?", "Wozu brauchst du das Geld? – [[Um]] ein Auto [[zu]] kaufen.", "What do you need the money for? – To buy a car."]]},
  {w:"sodass", en:"so that (result)", tag:"Verb am Ende", ex:[
   ["Folge (so that, with the result that)", "Es hat stark geregnet, [[sodass]] das Fußballspiel ausfallen musste.", "It rained heavily, so the football match had to be cancelled."],
   ["so + Adjektiv, dass (so … that)", "Ich war [[so]] müde, [[dass]] ich sofort eingeschlafen bin.", "I was so tired that I fell asleep straight away."],
   ["Folge mit Perfekt", "Der Zug hatte Verspätung, [[sodass]] ich den Anschluss verpasst habe.", "The train was late, so I missed my connection."],
   ["positive Folge mit Modalverb", "Ich habe ein Jahr gespart, [[sodass]] ich mir jetzt eine Reise leisten kann.", "I saved for a year, so now I can afford a trip."]]},
  {w:"falls", en:"in case", tag:"Verb am Ende", ex:[
   ["höfliche Bedingung, Nebensatz zuerst (if)", "[[Falls]] Sie Fragen haben, rufen Sie mich bitte an.", "If you have any questions, please call me."],
   ["für den Fall, dass (in case)", "Nimm einen Regenschirm mit, [[falls]] es regnet.", "Take an umbrella in case it rains."],
   ["mit Modalverb am Ende", "Ich nehme den Laptop mit, [[falls]] ich im Zug arbeiten muss.", "I'll take the laptop in case I have to work on the train."],
   ["formell: falls … sollten", "[[Falls]] Sie verhindert sein sollten, sagen Sie bitte ab.", "Should you be unable to attend, please cancel."]]},
  {w:"indem", en:"by (doing)", tag:"Verb am Ende", ex:[
   ["Wie? Mittel (by doing)", "Man kann Energie sparen, [[indem]] man das Licht ausschaltet.", "You can save energy by switching off the light."],
   ["Lernstrategie beschreiben", "Ich verbessere mein Deutsch, [[indem]] ich jeden Tag Nachrichten höre.", "I improve my German by listening to the news every day."],
   ["kurze Antwort auf Wie?", "Wie lernt man am besten sprechen? – [[Indem]] man viel spricht.", "How do you best learn to speak? – By speaking a lot."],
   ["Nebensatz zuerst", "[[Indem]] wir weniger Auto fahren, schützen wir die Umwelt.", "By driving less, we protect the environment."]]}
 ]},
 {g:"Konnektoren: Verb sofort danach", gen:"linking words: verb straight after", items:[
  {w:"deshalb", en:"that's why, therefore", tag:"Position 1", ex:[
   ["nach Komma am Satzanfang: dann Verb (therefore)", "Ich habe morgen eine Prüfung, [[deshalb]] gehe ich heute früh ins Bett.", "I have an exam tomorrow, so I'm going to bed early today."],
   ["im Satz, nach dem Verb", "Der Zug hatte Verspätung. Ich habe [[deshalb]] den Termin verpasst.", "The train was late. That's why I missed the appointment."],
   ["neuer Satz nach Punkt", "Ich habe keinen Führerschein. [[Deshalb]] fahre ich immer mit dem Bus.", "I don't have a driving licence. That's why I always take the bus."],
   ["gleiche Bedeutung: deswegen, darum", "Ich war krank, [[deswegen]] konnte ich nicht kommen.", "I was ill, which is why I couldn't come."]]},
  {w:"trotzdem", en:"nevertheless, still", tag:"Position 1", ex:[
   ["am Satzanfang (nevertheless)", "Das Wetter war schlecht, [[trotzdem]] sind wir wandern gegangen.", "The weather was bad; nevertheless we went hiking."],
   ["im Satz, nach dem Verb", "Ich war sehr müde. Ich bin [[trotzdem]] zum Kurs gegangen.", "I was very tired. I still went to the course."],
   ["am Satzende, als Antwort", "Das ist sehr teuer. – Ich kaufe es [[trotzdem]].", "That's very expensive. – I'll buy it anyway."],
   ["nach und", "Er hat wenig Zeit und hilft mir [[trotzdem]].", "He has little time and still helps me."]]},
  {w:"außerdem", en:"besides, also", tag:"Position 1", ex:[
   ["am Satzanfang: noch ein Punkt (besides)", "Die Wohnung ist groß und hell. [[Außerdem]] hat sie einen Balkon.", "The flat is big and bright. It also has a balcony."],
   ["im Satz, nach dem Verb", "Die Stelle ist interessant. Sie ist [[außerdem]] gut bezahlt.", "The job is interesting. It's also well paid."],
   ["im formellen Brief: weitere Frage", "[[Außerdem]] möchte ich wissen, ob der Kurs auch am Wochenende stattfindet.", "I would also like to know whether the course also takes place at the weekend."],
   ["über sich erzählen (B1 Sprechen)", "Ich spreche Englisch und Spanisch. Ich lerne [[außerdem]] seit einem Jahr Deutsch.", "I speak English and Spanish. I've also been learning German for a year."]]},
  {w:"sonst", en:"otherwise", tag:"Position 1", ex:[
   ["sonst = wenn nicht (otherwise)", "Beeil dich, [[sonst]] verpassen wir den Bus.", "Hurry up, otherwise we'll miss the bus."],
   ["Warnung nach Imperativ", "Zieh dir eine Jacke an, [[sonst]] erkältest du dich.", "Put a jacket on, or you'll catch a cold."],
   ["sonst = normalerweise (usually)", "Heute ist der Bus pünktlich – [[sonst]] kommt er immer zu spät.", "Today the bus is on time – usually it's always late."],
   ["sonst noch = zusätzlich (anything else)", "Brauchen Sie [[sonst]] noch etwas?", "Do you need anything else?"]]},
  {w:"dann / danach", en:"then / after that", tag:"Position 1", ex:[
   ["Reihenfolge: zuerst …, dann … (then)", "Zuerst gehe ich einkaufen, [[dann]] koche ich.", "First I go shopping, then I cook."],
   ["danach = nach dieser Sache (afterwards)", "Wir haben zusammen gegessen. [[Danach]] sind wir ins Kino gegangen.", "We ate together. Afterwards we went to the cinema."],
   ["dann nach einem wenn-Satz", "Wenn du Zeit hast, [[dann]] komm doch vorbei.", "If you have time, then come over."],
   ["Anleitung in Schritten", "Füllen Sie zuerst das Formular aus. [[Danach]] gehen Sie zur Kasse.", "First fill in the form. After that, go to the cash desk."]]}
 ]},
 {g:"Zweiteilige Konjunktionen", gen:"two-part conjunctions", items:[
  {w:"entweder … oder", en:"either … or", tag:"zweiteilig", ex:[
   ["zwei Orte (either … or)", "Wir fahren im Urlaub [[entweder]] nach Italien [[oder]] nach Kroatien.", "On holiday we'll go either to Italy or to Croatia."],
   ["zwei ganze Sätze", "[[Entweder]] du hilfst mir jetzt, [[oder]] ich mache es allein.", "Either you help me now, or I'll do it alone."],
   ["zwei Subjekte: Verb passt zum nächsten", "[[Entweder]] mein Mann [[oder]] ich hole die Kinder ab.", "Either my husband or I will pick up the children."],
   ["zwei Zeitangaben", "Ich kann [[entweder]] am Dienstag [[oder]] am Donnerstag kommen.", "I can come either on Tuesday or on Thursday."]]},
  {w:"sowohl … als auch", en:"both … and", tag:"zweiteilig", ex:[
   ["zwei Objekte (both … and)", "Sie spricht [[sowohl]] Englisch [[als auch]] Französisch.", "She speaks both English and French."],
   ["als Subjekt: Verb im Plural", "[[Sowohl]] die Kinder [[als auch]] die Eltern hatten viel Spaß.", "Both the children and the parents had lots of fun."],
   ["zwei Adjektive", "Die Arbeit ist [[sowohl]] interessant [[als auch]] gut bezahlt.", "The work is both interesting and well paid."],
   ["im Kurs / in der Schule", "Im Kurs üben wir [[sowohl]] Grammatik [[als auch]] Wortschatz.", "In the course we practise both grammar and vocabulary."]]},
  {w:"weder … noch", en:"neither … nor", tag:"zweiteilig", ex:[
   ["zwei Objekte (neither … nor)", "Ich trinke [[weder]] Kaffee [[noch]] Tee.", "I drink neither coffee nor tea."],
   ["Nachteile beschreiben", "Die Wohnung hat [[weder]] einen Balkon [[noch]] einen Aufzug.", "The flat has neither a balcony nor a lift."],
   ["zwei Subjekte", "[[Weder]] der Bus [[noch]] die S-Bahn fährt heute.", "Neither the bus nor the S-Bahn is running today."],
   ["zwei Adjektive (Beschwerde)", "Das Hotelzimmer war [[weder]] sauber [[noch]] ruhig.", "The hotel room was neither clean nor quiet."]]},
  {w:"nicht nur … sondern auch", en:"not only … but also", tag:"zweiteilig", ex:[
   ["zwei Adjektive (not only … but also)", "Er ist [[nicht nur]] freundlich, [[sondern auch]] sehr hilfsbereit.", "He is not only friendly but also very helpful."],
   ["zwei Subjekte", "[[Nicht nur]] die Miete, [[sondern auch]] die Nebenkosten sind gestiegen.", "Not only the rent but also the utility costs have gone up."],
   ["zwei Sätze: auch im zweiten Satz", "Er spricht [[nicht nur]] gut Deutsch, [[sondern]] er schreibt [[auch]] sehr gut.", "He not only speaks German well, he also writes very well."],
   ["zwei Orte", "Das Festival gibt es [[nicht nur]] in Berlin, [[sondern auch]] in Hamburg.", "The festival takes place not only in Berlin but also in Hamburg."]]},
  {w:"zwar … aber", en:"admittedly … but", tag:"zweiteilig", ex:[
   ["zwei Adjektive (it's true … but)", "Das Hotel war [[zwar]] teuer, [[aber]] sehr schön.", "The hotel was expensive, it's true, but very nice."],
   ["zwei Sätze, Meinung abwägen", "Ich habe [[zwar]] wenig Zeit, [[aber]] ich helfe dir gern.", "I don't have much time, but I'm happy to help you."],
   ["zwar am Satzanfang: Verb danach", "[[Zwar]] ist die Wohnung klein, [[aber]] sie liegt sehr zentral.", "The flat may be small, but it's very central."],
   ["mit Perfekt, Kritik im Brief", "Der Kurs hat mir [[zwar]] gefallen, [[aber]] er war zu teuer.", "I did like the course, but it was too expensive."]]},
  {w:"je … desto", en:"the more … the more", tag:"zweiteilig", ex:[
   ["je + Komparativ, Verb am Ende – desto + Komparativ, Verb", "[[Je]] mehr ich übe, [[desto]] besser spreche ich.", "The more I practise, the better I speak."],
   ["Tipp / Regel formulieren", "[[Je]] früher Sie buchen, [[desto]] günstiger ist der Flug.", "The earlier you book, the cheaper the flight."],
   ["umso statt desto", "[[Je]] länger ich hier lebe, [[umso]] besser gefällt es mir.", "The longer I live here, the more I like it."],
   ["mit mehr + Nomen", "[[Je]] mehr Leute kommen, [[desto]] lustiger wird die Party.", "The more people come, the more fun the party will be."]]}
 ]}
]},

{id:"adj", de:"Adjektive", en:"Adjectives",
 intro:"Vor einem Nomen bekommt das Adjektiv eine Endung. Die Endung hängt vom Artikel ab: nach der/die/das (schwach), nach ein/kein/mein (gemischt), ohne Artikel (stark). Nach „sein“ gibt es keine Endung.",
 groups:[
 {g:"Endungen", gen:"endings", items:[
  {w:"der / die / das + Adjektiv", en:"the + adjective (weak endings)", tag:"schwache Endung", ex:[
   ["Nominativ Singular: -e", "Der [[neue]] Kollege kommt aus Italien.", "The new colleague comes from Italy."],
   ["Akkusativ maskulin: -en", "Hast du den [[neuen]] Kollegen schon kennengelernt?", "Have you met the new colleague yet?"],
   ["Akkusativ feminin / neutral: -e", "Ich nehme das [[rote]] Kleid.", "I'll take the red dress."],
   ["Dativ: immer -en", "Ich spreche gern mit der [[freundlichen]] Nachbarin.", "I like talking to the friendly neighbour."],
   ["Genitiv: immer -en", "Wegen des [[schlechten]] Wetters fällt das Fest aus.", "Because of the bad weather the festival is cancelled."]]},
  {w:"ein / kein / mein + Adjektiv", en:"a / no / my + adjective (mixed endings)", tag:"gemischte Endung", ex:[
   ["Nominativ maskulin: -er", "Das ist ein [[guter]] Vorschlag.", "That's a good suggestion."],
   ["Nominativ / Akkusativ neutral: -es", "Vielen Dank, das ist ein [[tolles]] Buch!", "Thank you, that's a great book!"],
   ["Akkusativ maskulin: -en", "Ich suche einen [[neuen]] Job.", "I'm looking for a new job."],
   ["Akkusativ feminin -e, Dativ -en", "Ich suche eine [[günstige]] Wohnung mit einem [[kleinen]] Balkon.", "I'm looking for an affordable flat with a small balcony."],
   ["kein / mein im Plural: -en", "Leider habe ich keine [[guten]] Nachrichten.", "Unfortunately I have no good news."]]},
  {w:"ohne Artikel + Adjektiv", en:"adjective without an article (strong endings)", tag:"starke Endung", ex:[
   ["neutral: -es (wie das)", "[[Frisches]] Obst ist gesund.", "Fresh fruit is healthy."],
   ["Akkusativ maskulin -en, Dativ feminin -er", "Ich trinke gern [[schwarzen]] Tee mit [[warmer]] Milch.", "I like drinking black tea with warm milk."],
   ["Plural Nominativ: -e", "[[Frische]] Brötchen gibt es ab 7 Uhr.", "Fresh rolls are available from 7 am."],
   ["Dativ Plural: -en (Briefschluss)", "Mit [[freundlichen]] Grüßen", "Kind regards"],
   ["Nominativ maskulin: -er", "[[Deutscher]] Kaffee ist oft sehr stark.", "German coffee is often very strong."]]},
  {w:"Plural + Adjektiv", en:"plural + adjective", tag:"Plural", ex:[
   ["nach die: -en", "Die [[neuen]] Nachbarn sind sehr nett.", "The new neighbours are very nice."],
   ["ohne Artikel, Nominativ: -e", "[[Neue]] Mitarbeiter bekommen am ersten Tag eine Einführung.", "New employees get an introduction on their first day."],
   ["ohne Artikel, Akkusativ: -e (Stellenanzeige)", "Wir suchen [[motivierte]] Mitarbeiter für unser Team.", "We're looking for motivated staff for our team."],
   ["nach Zahl, Dativ: -en", "Ich wohne mit zwei [[netten]] Kolleginnen zusammen.", "I live with two nice colleagues."]]},
  {w:"nach sein / werden / bleiben", en:"after be / become / stay (no ending)", tag:"keine Endung", ex:[
   ["nach sein: keine Endung", "Der Kaffee ist sehr [[heiß]].", "The coffee is very hot."],
   ["nach werden (to become)", "Im Herbst wird es früh [[dunkel]].", "In autumn it gets dark early."],
   ["nach bleiben (to stay)", "Das Wetter bleibt bis Sonntag [[sonnig]].", "The weather will stay sunny until Sunday."],
   ["beim Verb (Wie?): keine Endung", "Du sprichst schon sehr [[gut]] Deutsch.", "You already speak German very well."]]}
 ]},
 {g:"Vergleichen", gen:"comparing", items:[
  {w:"Komparativ", en:"comparative (bigger … than)", tag:"-er … als", ex:[
   ["nach sein: Komparativ + als", "Die neue Wohnung ist [[größer]] als die alte.", "The new flat is bigger than the old one."],
   ["vor dem Nomen: Komparativ + Endung", "Ich suche eine [[größere]] Wohnung.", "I'm looking for a bigger flat."],
   ["mit Umlaut: kalt → kälter", "Im Winter ist es hier viel [[kälter]] als in Spanien.", "In winter it's much colder here than in Spain."],
   ["immer + Komparativ (more and more)", "Die Mieten werden immer [[teurer]].", "Rents are getting more and more expensive."]]},
  {w:"Superlativ", en:"superlative (the biggest)", tag:"am …sten", ex:[
   ["nach sein: am …sten", "Im Dezember sind die Tage [[am kürzesten]].", "In December the days are the shortest."],
   ["vor dem Nomen: der/die/das …ste", "Das war der [[schönste]] Tag meines Lebens.", "That was the most beautiful day of my life."],
   ["am besten = Ratschlag (best to …)", "[[Am besten]] fragen Sie an der Information.", "It's best to ask at the information desk."],
   ["mit Genitiv (… in Germany)", "Berlin ist die [[größte]] Stadt Deutschlands.", "Berlin is the largest city in Germany."]]},
  {w:"gut · gern · viel · hoch", en:"good · gladly · much · high (irregular)", tag:"unregelmäßig", ex:[
   ["gut – besser – am besten", "Mein Deutsch wird immer [[besser]].", "My German is getting better and better."],
   ["gern – lieber – am liebsten", "[[Am liebsten]] fahre ich mit dem Fahrrad zur Arbeit.", "Most of all I like cycling to work."],
   ["viel – mehr – am meisten", "Ich verdiene jetzt [[mehr]] als früher.", "I earn more now than before."],
   ["hoch – höher – am höchsten (c fällt weg)", "Die Preise sind dieses Jahr deutlich [[höher]].", "Prices are significantly higher this year."]]},
  {w:"so … wie / als", en:"as … as / than", tag:"gleich / anders", ex:[
   ["gleich: so + Adjektiv + wie (as … as)", "Mein Bruder ist [[so]] groß [[wie]] ich.", "My brother is as tall as me."],
   ["anders: Komparativ + als (…er than)", "Mein Bruder ist [[größer als]] ich.", "My brother is taller than me."],
   ["nicht so … wie (not as … as)", "Das Hotel war [[nicht so]] gut [[wie]] im Prospekt.", "The hotel wasn't as good as in the brochure."],
   ["doppelt so … wie (twice as …)", "Die neue Wohnung ist [[doppelt so]] groß [[wie]] die alte.", "The new flat is twice as big as the old one."]]}
 ]},
 {g:"Adjektive mit Präposition", gen:"adjectives with a preposition", items:[
  {w:"stolz auf", en:"proud of", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich bin sehr [[stolz auf]] meine Tochter.", "I'm very proud of my daughter."],
   ["Sache schon bekannt: darauf", "Sie hat die Prüfung bestanden und ist sehr [[stolz darauf]].", "She passed the exam and is very proud of it."],
   ["Frage nach einer Sache: worauf?", "[[Worauf]] bist du besonders [[stolz]]?", "What are you particularly proud of?"],
   ["Frage nach einer Person: auf wen?", "[[Auf]] wen bist du so [[stolz]]?", "Who are you so proud of?"]]},
  {w:"zufrieden mit", en:"satisfied with", tag:"+ Dativ", ex:[
   ["mit Nomen", "Mein Chef ist [[mit]] meiner Arbeit sehr [[zufrieden]].", "My boss is very satisfied with my work."],
   ["Sache schon bekannt: damit", "Ich habe ein neues Handy und bin sehr [[zufrieden damit]].", "I have a new phone and I'm very happy with it."],
   ["Frage nach einer Sache: womit?", "[[Womit]] waren Sie nicht [[zufrieden]]?", "What weren't you satisfied with?"],
   ["verneint (Beschwerde)", "Wir sind mit dem Service leider gar nicht [[zufrieden]].", "Unfortunately we are not at all satisfied with the service."]]},
  {w:"interessiert an", en:"interested in", tag:"+ Dativ", ex:[
   ["im Bewerbungsbrief", "Ich bin sehr [[an]] dieser Stelle [[interessiert]].", "I'm very interested in this position."],
   ["Frage nach einer Sache: woran?", "[[Woran]] bist du besonders [[interessiert]]?", "What are you particularly interested in?"],
   ["daran + zu-Infinitiv", "Ich bin sehr [[daran interessiert]], mein Deutsch zu verbessern.", "I'm very keen to improve my German."],
   ["Nomen: Interesse an + Dativ", "Ich habe großes [[Interesse an]] einem Praktikum.", "I'm very interested in an internship."]]},
  {w:"verantwortlich für", en:"responsible for", tag:"+ Akkusativ", ex:[
   ["über die Arbeit sprechen", "In unserer Firma bin ich [[für]] den Einkauf [[verantwortlich]].", "In our company I'm responsible for purchasing."],
   ["Frage: dafür", "Wer ist [[dafür verantwortlich]]?", "Who is responsible for that?"],
   ["für Personen", "Die Lehrerin ist während des Ausflugs [[für]] die Kinder [[verantwortlich]].", "The teacher is responsible for the children during the trip."],
   ["dafür + dass-Satz", "Ich bin [[dafür verantwortlich]], dass alle Rechnungen pünktlich bezahlt werden.", "I'm responsible for making sure all invoices are paid on time."]]},
  {w:"froh über", en:"happy about", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich bin sehr [[froh über]] deine Hilfe.", "I'm very glad about your help."],
   ["mit dass-Satz", "Ich bin [[froh]], [[dass]] du gekommen bist.", "I'm glad that you came."],
   ["Frage: worüber?", "[[Worüber]] bist du so [[froh]]?", "What are you so happy about?"],
   ["Sache schon bekannt: darüber", "Ich habe die Stelle bekommen und bin sehr [[froh darüber]].", "I got the job and I'm very happy about it."]]},
  {w:"abhängig von", en:"dependent on", tag:"+ Dativ", ex:[
   ["mit Nomen", "Der Preis ist [[abhängig von]] der Jahreszeit.", "The price depends on the season."],
   ["vom = von dem, Adjektiv am Ende", "Ob wir grillen, ist [[vom]] Wetter [[abhängig]].", "Whether we have a barbecue depends on the weather."],
   ["von Personen abhängig", "Kleine Kinder sind [[von]] ihren Eltern [[abhängig]].", "Small children depend on their parents."],
   ["davon + Nebensatz", "Es ist [[davon abhängig]], wie viel Zeit ich habe.", "It depends on how much time I have."]]}
 ]}
]},

{id:"vpraep", de:"Verben mit Präposition", en:"Verbs with prepositions",
 intro:"Diese Verben haben eine feste Präposition – lerne sie zusammen. Für Sachen fragt man mit wo(r)- (Worauf?) und antwortet mit da(r)- (darauf), für Personen mit Präposition + wen/wem (Auf wen?).",
 groups:[
 {g:"B1-Verben", gen:"B1 verbs", items:[
  {w:"warten auf", en:"to wait for", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Präsens", "Ich [[warte]] schon seit 20 Minuten [[auf]] den Bus.", "I've been waiting for the bus for 20 minutes."],
   ["Frage nach einer Sache: worauf?", "[[Worauf]] [[wartest]] du noch? Komm doch rein!", "What are you waiting for? Come on in!"],
   ["Frage nach einer Person: auf wen?", "[[Auf]] wen [[wartest]] du?", "Who are you waiting for?"],
   ["darauf + dass-Satz", "Ich [[warte darauf]], dass der Handwerker endlich kommt.", "I'm waiting for the technician to finally come."],
   ["Perfekt", "Wir haben zwei Monate [[auf]] einen Termin [[gewartet]].", "We waited two months for an appointment."]]},
  {w:"denken an / über", en:"to think of / about", tag:"an + Akk. / über + Akk.", ex:[
   ["denken an: mit Nomen (think of)", "Ich [[denke]] oft [[an]] meine Familie in meiner Heimat.", "I often think of my family back home."],
   ["daran + zu-Infinitiv (remember to)", "Hast du [[daran]] [[gedacht]], die Tür abzuschließen?", "Did you remember to lock the door?"],
   ["Frage: woran?", "[[Woran]] [[denkst]] du gerade?", "What are you thinking about right now?"],
   ["Frage nach einer Person: an wen?", "[[An]] wen [[denkst]] du?", "Who are you thinking of?"],
   ["denken über = Meinung (think about)", "Was [[denkst]] du [[über]] den neuen Chef?", "What do you think of the new boss?"]]},
  {w:"sich freuen auf / über", en:"to look forward to / be happy about", tag:"+ Akkusativ", ex:[
   ["auf = etwas kommt noch (look forward to)", "Ich [[freue mich]] schon [[auf]] den Urlaub.", "I'm already looking forward to the holiday."],
   ["über = etwas ist schon da (be pleased about)", "Ich habe [[mich]] sehr [[über]] dein Geschenk [[gefreut]].", "I was very pleased about your present."],
   ["darauf + zu-Infinitiv (Briefschluss)", "Ich [[freue mich darauf]], Sie bald kennenzulernen.", "I look forward to meeting you soon."],
   ["Frage: worauf?", "[[Worauf]] [[freust]] du [[dich]] am meisten?", "What are you looking forward to most?"],
   ["sich freuen, dass (be glad that)", "Ich [[freue mich]], [[dass]] du da bist.", "I'm glad that you're here."]]},
  {w:"sich interessieren für", en:"to be interested in", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Präsens", "Ich [[interessiere mich]] sehr [[für]] Politik.", "I'm very interested in politics."],
   ["Frage: wofür?", "[[Wofür]] [[interessierst]] du [[dich]]?", "What are you interested in?"],
   ["Perfekt", "Er hat [[sich]] schon immer [[für]] Technik [[interessiert]].", "He has always been interested in technology."],
   ["Frage nach einer Person: für wen?", "[[Für]] wen [[interessiert]] sie [[sich]]?", "Who is she interested in?"]]},
  {w:"sich kümmern um", en:"to take care of", tag:"+ Akkusativ", ex:[
   ["mit Nomen, in der Frage", "Wer [[kümmert sich]] [[um]] die Kinder, wenn ihr arbeitet?", "Who looks after the children when you're at work?"],
   ["Sache schon bekannt: darum", "Keine Sorge, ich [[kümmere mich darum]].", "Don't worry, I'll take care of it."],
   ["darum + dass-Satz", "Kannst du [[dich darum kümmern]], dass die Rechnung bezahlt wird?", "Can you make sure the bill gets paid?"],
   ["Perfekt", "Meine Nachbarin hat [[sich]] im Urlaub [[um]] unsere Katze [[gekümmert]].", "My neighbour looked after our cat during the holiday."]]},
  {w:"sich ärgern über", en:"to be annoyed about", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich [[ärgere mich]] [[über]] den Lärm der Nachbarn.", "I'm annoyed about the neighbours' noise."],
   ["darüber + dass-Satz", "Er hat [[sich darüber geärgert]], dass der Zug schon wieder Verspätung hatte.", "He was annoyed that the train was late again."],
   ["Frage: worüber?", "[[Worüber]] [[ärgerst]] du [[dich]] so?", "What are you so annoyed about?"],
   ["Imperativ: nicht ärgern", "[[Ärger dich]] nicht [[darüber]]!", "Don't let it annoy you!"]]},
  {w:"teilnehmen an", en:"to take part in", tag:"+ Dativ", ex:[
   ["trennbar im Präsens", "Ich [[nehme]] seit März [[an]] einem Deutschkurs [[teil]].", "I've been taking part in a German course since March."],
   ["Perfekt: teilgenommen", "Wie viele Personen haben [[an]] der Besprechung [[teilgenommen]]?", "How many people took part in the meeting?"],
   ["mit Modalverb: Infinitiv am Ende", "Ich kann leider nicht [[an]] dem Treffen [[teilnehmen]].", "Unfortunately I can't attend the meeting."],
   ["im Nebensatz: zusammen am Ende", "Ich freue mich, dass du [[an]] der Feier [[teilnimmst]].", "I'm glad that you're coming to the party."]]},
  {w:"sprechen mit / über / von", en:"to speak with / about / of", tag:"mit + Dat. / über + Akk.", ex:[
   ["mit + Person (talk to)", "Ich muss morgen [[mit]] meiner Chefin [[sprechen]].", "I have to talk to my boss tomorrow."],
   ["über + Thema, Perfekt (talk about)", "Wir haben lange [[über]] die neue Arbeitszeit [[gesprochen]].", "We talked about the new working hours for a long time."],
   ["am Telefon (speak to)", "Kann ich bitte [[mit]] Frau Müller [[sprechen]]?", "May I speak to Ms Müller, please?"],
   ["Frage: worüber?", "[[Worüber]] habt ihr [[gesprochen]]?", "What did you talk about?"],
   ["von = erzählen (talk of)", "Er [[spricht]] oft [[von]] seiner Heimat.", "He often talks about his home country."]]},
  {w:"sich bewerben um / bei", en:"to apply for / to", tag:"um + Akk. / bei + Dat.", ex:[
   ["um + Stelle (apply for)", "Ich [[bewerbe mich]] [[um]] eine Stelle als Krankenpfleger.", "I'm applying for a job as a nurse."],
   ["bei + Firma, Perfekt (apply to)", "Ich habe [[mich bei]] einer großen Firma [[beworben]].", "I applied to a big company."],
   ["im Bewerbungsbrief: hiermit", "Hiermit [[bewerbe]] ich [[mich]] [[um]] die ausgeschriebene Stelle als Verkäuferin.", "I hereby apply for the advertised position as a sales assistant."],
   ["im Nebensatz", "Ich habe gehört, dass du [[dich]] [[um]] die Stelle [[beworben]] hast.", "I heard that you applied for the job."]]},
  {w:"bitten um / fragen nach", en:"to ask for / ask about", tag:"+ Akk. / + Dat.", ex:[
   ["bitten um: höfliche Bitte", "Ich möchte Sie [[um]] einen Termin [[bitten]].", "I would like to ask you for an appointment."],
   ["darum + zu-Infinitiv (formeller Brief)", "Darf ich Sie [[darum bitten]], mir die Unterlagen zu schicken?", "May I ask you to send me the documents?"],
   ["Perfekt: gebeten", "Er hat mich [[um]] Hilfe [[gebeten]].", "He asked me for help."],
   ["Information → fragen nach + Dativ", "Ich habe einen Mann [[nach]] dem Weg [[gefragt]].", "I asked a man for directions."]]},
  {w:"sich erinnern an", en:"to remember", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Frage", "[[Erinnerst]] du [[dich an]] unseren ersten Tag im Deutschkurs?", "Do you remember our first day at the German course?"],
   ["Sache schon bekannt: daran", "Ich kann [[mich]] leider nicht [[daran erinnern]].", "Unfortunately I can't remember that."],
   ["an eine Person, höflich", "[[Erinnern]] Sie [[sich]] noch [[an]] mich?", "Do you still remember me?"],
   ["jemanden erinnern an (remind)", "Kannst du mich morgen [[an]] den Termin [[erinnern]]?", "Can you remind me about the appointment tomorrow?"]]},
  {w:"Angst haben vor", en:"to be afraid of", tag:"+ Dativ", ex:[
   ["mit Nomen", "Viele Menschen [[haben Angst vor]] der mündlichen Prüfung.", "Many people are afraid of the oral exam."],
   ["Frage: wovor?", "[[Wovor]] [[hast]] du [[Angst]]?", "What are you afraid of?"],
   ["davor + zu-Infinitiv", "Ich [[habe]] keine [[Angst davor]], Fehler zu machen.", "I'm not afraid of making mistakes."],
   ["ähnlich: sich fürchten vor", "Mein Sohn [[fürchtet sich vor]] großen Hunden.", "My son is scared of big dogs."]]},
  {w:"träumen von", en:"to dream of", tag:"+ Dativ", ex:[
   ["Wunsch mit Nomen", "Ich [[träume von]] einem eigenen Haus mit Garten.", "I dream of my own house with a garden."],
   ["davon + zu-Infinitiv, Perfekt", "Sie hat schon immer [[davon geträumt]], in Berlin zu leben.", "She has always dreamed of living in Berlin."],
   ["Frage: wovon?", "[[Wovon]] [[träumst]] du?", "What do you dream of?"],
   ["im Schlaf träumen", "Ich habe heute Nacht [[von]] meiner Prüfung [[geträumt]].", "Last night I dreamed about my exam."]]},
  {w:"sich beschäftigen mit", en:"to deal with, be busy with", tag:"+ Dativ", ex:[
   ["Freizeit beschreiben", "In meiner Freizeit [[beschäftige]] ich [[mich]] gern [[mit]] Fotografie.", "In my free time I like to spend time on photography."],
   ["Frage: womit? (Beruf)", "[[Womit]] [[beschäftigen]] Sie [[sich]] beruflich?", "What do you do for a living?"],
   ["Perfekt", "Ich habe [[mich]] lange [[mit]] diesem Thema [[beschäftigt]].", "I've spent a long time on this topic."],
   ["damit + Modalverb", "Das ist kompliziert – ich muss [[mich]] noch genauer [[damit beschäftigen]].", "It's complicated – I need to look into it more closely."]]},
  {w:"sich gewöhnen an", en:"to get used to", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Perfekt", "Ich habe [[mich]] schnell [[an]] das deutsche Wetter [[gewöhnt]].", "I quickly got used to the German weather."],
   ["Sache schon bekannt: daran", "Am Anfang war es schwer, aber jetzt habe ich [[mich daran gewöhnt]].", "At first it was hard, but now I've got used to it."],
   ["allgemeine Aussage mit man", "Man [[gewöhnt sich an]] alles.", "You get used to everything."],
   ["daran + zu-Infinitiv", "Ich muss [[mich]] erst [[daran gewöhnen]], so früh aufzustehen.", "I first have to get used to getting up so early."]]},
  {w:"sich beschweren über / bei", en:"to complain about / to", tag:"über + Akk. / bei + Dat.", ex:[
   ["über + Problem (complain about)", "Ich möchte [[mich]] [[über]] den Lärm [[beschweren]].", "I would like to complain about the noise."],
   ["bei + Person (complain to)", "Er hat [[sich beim]] Vermieter [[beschwert]].", "He complained to the landlord."],
   ["darüber + dass-Satz", "Viele Kunden [[beschweren sich darüber]], dass die Lieferung zu spät kommt.", "Many customers complain that the delivery arrives too late."],
   ["Frage: worüber?", "[[Worüber]] hat er [[sich]] denn [[beschwert]]?", "What did he complain about?"]]},
  {w:"abhängen von", en:"to depend on", tag:"+ Dativ", ex:[
   ["trennbar: hängt … ab", "Das [[hängt]] [[vom]] Wetter [[ab]].", "That depends on the weather."],
   ["davon + ob-Satz", "Es [[hängt davon ab]], ob ich frei bekomme.", "It depends on whether I get time off."],
   ["Frage: wovon?", "[[Wovon]] [[hängt]] der Preis [[ab]]?", "What does the price depend on?"],
   ["von einer Person", "Das [[hängt]] ganz [[von]] dir [[ab]].", "That's entirely up to you."]]},
  {w:"sich verabreden mit", en:"to arrange to meet", tag:"+ Dativ", ex:[
   ["mit + Person, Perfekt", "Ich habe [[mich]] für Samstag [[mit]] meiner Freundin [[verabredet]].", "I've arranged to meet my friend on Saturday."],
   ["Frage nach Personen: mit wem? (nicht womit)", "[[Mit wem]] bist du heute Abend [[verabredet]]?", "Who are you meeting tonight?"],
   ["Wir + uns: Ort und Zeit", "Wir haben [[uns]] für 19 Uhr vor dem Kino [[verabredet]].", "We've arranged to meet at 7 pm in front of the cinema."],
   ["im Nebensatz mit Modalverb", "Ich weiß nicht, ob ich [[mich mit]] ihm [[verabreden]] soll.", "I don't know whether I should arrange to meet him."]]}
 ]}
]},

{id:"vdat", de:"Verben mit Dativ", en:"Verbs with the dative",
 intro:"Diese Verben haben ein Dativobjekt (Wem?), oft eine Person. Achtung: Bei gefallen, schmecken, gehören und passen ist die Sache das Subjekt.",
 groups:[
 {g:"B1-Verben", gen:"B1 verbs", items:[
  {w:"helfen", en:"to help", tag:"+ Dativ", ex:[
   ["Frage mit Modalverb", "Kannst du [[mir]] beim Umzug [[helfen]]?", "Can you help me with the move?"],
   ["Perfekt: hat geholfen; er → ihm", "Der Arzt hat [[ihm]] sehr [[geholfen]].", "The doctor helped him a lot."],
   ["Imperativ, höflich", "[[Helfen]] Sie [[mir]] bitte, der Automat nimmt mein Geld nicht!", "Please help me, the machine won't take my money!"],
   ["Nomen im Dativ Plural: -n", "Ich [[helfe]] den [[Kindern]] bei den Hausaufgaben.", "I help the children with their homework."]]},
  {w:"gefallen", en:"to please (to like)", tag:"+ Dativ", ex:[
   ["Sache = Subjekt, Person = Dativ", "Die neue Wohnung [[gefällt mir]] sehr gut.", "I like the new flat very much."],
   ["nach der Meinung fragen, Perfekt", "Wie hat [[dir]] der Film [[gefallen]]?", "How did you like the film?"],
   ["Subjekt im Plural: Verb im Plural", "Die Schuhe [[gefallen mir]] nicht.", "I don't like the shoes."],
   ["Person als Nomen im Dativ", "Das Geschenk hat [[meiner Mutter]] sehr [[gefallen]].", "My mother really liked the present."]]},
  {w:"gehören", en:"to belong to", tag:"+ Dativ", ex:[
   ["Frage: Wem gehört …? (whose)", "[[Wem]] [[gehört]] diese Jacke?", "Whose jacket is this?"],
   ["mit Nomen im Dativ", "Das Auto [[gehört]] [[meinem]] Bruder.", "The car belongs to my brother."],
   ["mit Pronomen", "Das Handy [[gehört mir]].", "The phone is mine."],
   ["gehören zu = ein Teil sein", "Sport [[gehört zu]] meinem Alltag.", "Sport is part of my everyday life."]]},
  {w:"schmecken", en:"to taste (good)", tag:"+ Dativ", ex:[
   ["Essen = Subjekt", "Die Suppe [[schmeckt mir]] sehr gut.", "I really like the soup."],
   ["im Restaurant, höflich, Perfekt", "Hat es [[Ihnen]] [[geschmeckt]]?", "Did you enjoy your meal?"],
   ["Frage mit wie", "Wie [[schmeckt]] [[dir]] der Kuchen?", "How do you like the cake?"],
   ["schmecken nach = Geschmack (taste of)", "Die Soße [[schmeckt]] stark [[nach]] Knoblauch.", "The sauce tastes strongly of garlic."]]},
  {w:"passen", en:"to fit, suit", tag:"+ Dativ", ex:[
   ["Termin (suit)", "Der Termin am Montag [[passt mir]] leider nicht.", "Unfortunately Monday's appointment doesn't suit me."],
   ["Kleidung: Größe (fit)", "Die Hose [[passt]] [[ihm]] nicht mehr.", "The trousers don't fit him any more."],
   ["höfliche Frage", "[[Passt]] [[Ihnen]] Dienstag um 10 Uhr?", "Does Tuesday at 10 suit you?"],
   ["passen zu = gut zusammen (go with)", "Die Jacke [[passt]] gut [[zu]] deiner Hose.", "The jacket goes well with your trousers."]]},
  {w:"fehlen", en:"to be missing (to miss)", tag:"+ Dativ", ex:[
   ["jemand fehlt mir (I miss)", "Meine Familie [[fehlt mir]] sehr.", "I miss my family a lot."],
   ["beim Arzt: Was fehlt Ihnen?", "Guten Tag, was [[fehlt Ihnen]] denn?", "Hello, what seems to be the problem?"],
   ["ohne Dativ: etwas ist nicht da", "Im Antrag [[fehlt]] noch eine Unterschrift.", "A signature is still missing from the application."],
   ["nicht da sein (be absent)", "Mein Sohn [[fehlt]] heute in der Schule, weil er krank ist.", "My son is absent from school today because he's ill."]]},
  {w:"danken", en:"to thank", tag:"+ Dativ", ex:[
   ["Person im Dativ + für", "Ich [[danke Ihnen]] für Ihre Hilfe.", "Thank you for your help."],
   ["Dativ Plural: Nomen + -n", "Wir [[danken]] allen [[Kollegen]] für die gute Zusammenarbeit.", "We thank all colleagues for the good cooperation."],
   ["Perfekt, Frage", "Hast du [[ihr]] schon für das Geschenk [[gedankt]]?", "Have you thanked her for the present yet?"],
   ["ähnlich: sich bedanken bei + Dativ", "Ich möchte [[mich]] herzlich [[bei]] Ihnen [[bedanken]].", "I would like to thank you very much."]]},
  {w:"gratulieren", en:"to congratulate", tag:"+ Dativ", ex:[
   ["gratulieren + Dativ + zu", "Ich [[gratuliere dir]] zum Geburtstag!", "Happy birthday!"],
   ["mit Nomen im Dativ", "Wir [[gratulieren]] [[unserer]] Kollegin zur bestandenen Prüfung.", "We congratulate our colleague on passing her exam."],
   ["Perfekt, Frage", "Hast du [[ihm]] schon [[gratuliert]]?", "Have you congratulated him yet?"],
   ["um … zu + Infinitiv", "Ich rufe an, um [[dir]] zur Hochzeit zu [[gratulieren]].", "I'm calling to congratulate you on your wedding."]]},
  {w:"antworten", en:"to answer, reply to", tag:"+ Dativ / auf + Akk.", ex:[
   ["Person im Dativ", "Bitte [[antworten]] Sie [[mir]] bis Freitag.", "Please reply to me by Friday."],
   ["Sache: antworten auf + Akkusativ", "Ich habe noch nicht [[auf]] seine E-Mail [[geantwortet]].", "I haven't replied to his email yet."],
   ["Frage: Was hat er geantwortet?", "Was hat er [[dir]] [[geantwortet]]?", "What did he answer you?"],
   ["ohne Präposition: beantworten + Akkusativ", "Bitte [[beantworten]] Sie alle Fragen.", "Please answer all the questions."]]},
  {w:"glauben", en:"to believe", tag:"+ Dativ / + Akk. / an", ex:[
   ["Person im Dativ (believe someone)", "Ich [[glaube dir]], dass du keine Zeit hattest.", "I believe you that you didn't have time."],
   ["Sache im Akkusativ (believe something)", "Das [[glaube]] ich nicht.", "I don't believe that."],
   ["glauben an + Akkusativ (believe in)", "Ich [[glaube an]] dich – du schaffst die Prüfung!", "I believe in you – you'll pass the exam!"],
   ["Meinung: glauben, dass (think)", "Ich [[glaube]], dass es morgen regnet.", "I think it will rain tomorrow."]]},
  {w:"wehtun", en:"to hurt", tag:"+ Dativ", ex:[
   ["Körperteil = Subjekt, trennbar", "Mein Rücken [[tut mir]] seit gestern [[weh]].", "My back has been hurting since yesterday."],
   ["andere Person im Dativ", "Der Kopf [[tut ihr weh]], deshalb bleibt sie zu Hause.", "Her head hurts, so she's staying at home."],
   ["beim Arzt: Frage", "Wo [[tut]] es [[Ihnen]] [[weh]]?", "Where does it hurt?"],
   ["Perfekt: wehgetan", "Die Spritze hat [[mir]] kaum [[wehgetan]].", "The injection hardly hurt."]]},
  {w:"leidtun", en:"to feel sorry", tag:"+ Dativ", ex:[
   ["sich entschuldigen (I'm sorry)", "Es [[tut mir leid]], dass ich zu spät komme.", "I'm sorry that I'm late."],
   ["Mitleid (feel sorry for)", "Der alte Mann [[tut mir leid]].", "I feel sorry for the old man."],
   ["Präteritum: tat mir leid", "Es [[tat mir]] sehr [[leid]], dass ich nicht kommen konnte.", "I was very sorry that I couldn't come."],
   ["kurze Reaktion", "Du bist krank? Oh, [[das tut mir leid]]!", "You're ill? Oh, I'm sorry to hear that!"]]}
 ]}
]},

{id:"rel", de:"Relativsätze", en:"Relative clauses",
 intro:"Das Relativpronomen hat das Genus des Nomens davor und den Kasus aus dem Relativsatz. Das Verb steht am Ende.",
 groups:[
 {g:"Relativpronomen", gen:"relative pronouns", items:[
  {w:"der", en:"who, which (masc. subject / fem. dative)", tag:"Nom. mask. / Dat. fem.", ex:[
   ["Nominativ maskulin, Relativsatz in der Mitte", "Der Kollege, [[der]] neben mir sitzt, kommt aus Polen.", "The colleague who sits next to me comes from Poland."],
   ["Relativsatz am Ende", "Ich suche einen Job, [[der]] mir Spaß macht.", "I'm looking for a job that I enjoy."],
   ["Achtung: der = Dativ feminin", "Die Frau, [[der]] ich geholfen habe, war sehr dankbar.", "The woman whom I helped was very grateful."],
   ["Präposition + der (Dativ feminin)", "Die Freundin, [[mit der]] ich Deutsch lerne, kommt aus Brasilien.", "The friend I study German with comes from Brazil."]]},
  {w:"den", en:"whom, which (masc. object)", tag:"Akk. mask.", ex:[
   ["Akkusativ maskulin, Relativsatz in der Mitte", "Der Film, [[den]] wir gestern gesehen haben, war spannend.", "The film that we saw yesterday was exciting."],
   ["Relativsatz am Ende", "Ich suche den Schlüssel, [[den]] ich gestern verloren habe.", "I'm looking for the key I lost yesterday."],
   ["für + den (Akkusativ)", "Wie heißt der Kurs, [[für den]] du dich angemeldet hast?", "What's the name of the course you signed up for?"],
   ["an + den (denken an + Akk.)", "Das ist der Urlaub, [[an den]] ich oft denke.", "That's the holiday I often think about."]]},
  {w:"dem", en:"to whom, to which (dative)", tag:"Dat. mask. / neutr.", ex:[
   ["Dativ maskulin (helfen + Dativ)", "Das ist der Kollege, [[dem]] ich bei der Arbeit helfe.", "That's the colleague whom I help at work."],
   ["Dativ neutral (gehören + Dativ)", "Das Kind, [[dem]] der Hund gehört, wohnt nebenan.", "The child the dog belongs to lives next door."],
   ["in dem = wo (Ort)", "Das Haus, [[in dem]] ich wohne, ist 100 Jahre alt.", "The house I live in is 100 years old."],
   ["von dem (erzählen von + Dativ)", "Der Arzt, [[von dem]] ich dir erzählt habe, hat jetzt eine eigene Praxis.", "The doctor I told you about now has his own practice."]]},
  {w:"die", en:"who, which (fem. / plural)", tag:"fem. / Plural", ex:[
   ["Nominativ feminin", "Die Frau, [[die]] dort steht, ist meine Lehrerin.", "The woman standing there is my teacher."],
   ["Akkusativ feminin", "Die Wohnung, [[die]] wir besichtigt haben, war leider zu klein.", "The flat we viewed was unfortunately too small."],
   ["Plural Nominativ", "Kollegen, [[die]] im Homeoffice arbeiten, sparen viel Zeit.", "Colleagues who work from home save a lot of time."],
   ["Plural Akkusativ", "Die Bücher, [[die]] ich für den Kurs gekauft habe, waren teuer.", "The books I bought for the course were expensive."],
   ["auf + die (sich vorbereiten auf + Akk.)", "Die Prüfung, [[auf die]] ich mich vorbereite, ist im Juni.", "The exam I'm preparing for is in June."]]},
  {w:"das", en:"which, that (neuter)", tag:"neutr.", ex:[
   ["Nominativ neutral", "Das Restaurant, [[das]] gestern eröffnet hat, ist schon voll.", "The restaurant that opened yesterday is already full."],
   ["Akkusativ neutral", "Das Auto, [[das]] du dort siehst, gehört meinem Nachbarn.", "The car you see there belongs to my neighbour."],
   ["Relativsatz am Ende", "Ich suche ein Hotel, [[das]] nicht so teuer ist.", "I'm looking for a hotel that isn't so expensive."],
   ["über + das (sprechen über + Akk.)", "Das Problem, [[über das]] wir gesprochen haben, ist gelöst.", "The problem we talked about has been solved."]]},
  {w:"dessen / deren", en:"whose", tag:"Genitiv", ex:[
   ["dessen: Bezugswort maskulin (whose)", "Mein Nachbar, [[dessen]] Hund immer bellt, ist eigentlich sehr nett.", "My neighbour, whose dog always barks, is actually very nice."],
   ["deren: Bezugswort feminin (whose)", "Die Kollegin, [[deren]] Mann in Berlin arbeitet, zieht bald um.", "The colleague whose husband works in Berlin is moving soon."],
   ["deren: Bezugswort Plural", "Die Nachbarn, [[deren]] Kinder so laut sind, sind im Urlaub.", "The neighbours whose children are so loud are on holiday."],
   ["dessen: Bezugswort neutral", "Das Kind, [[dessen]] Fahrrad gestohlen wurde, hat geweint.", "The child whose bike was stolen cried."]]},
  {w:"denen", en:"to whom (plural dative)", tag:"Dat. Plural", ex:[
   ["Dativ Plural (geben + Dativ)", "Die Kinder, [[denen]] ich Nachhilfe gebe, sind sehr fleißig.", "The children I give tutoring to are very hard-working."],
   ["mit + denen", "Das sind die Kollegen, [[mit denen]] ich jeden Tag Mittag esse.", "Those are the colleagues I have lunch with every day."],
   ["bei + denen (Wohnort)", "Die Leute, [[bei denen]] ich wohne, sind sehr nett.", "The people I live with are very nice."],
   ["schmecken + Dativ", "Die Gäste, [[denen]] das Essen nicht geschmeckt hat, bekommen einen Gutschein.", "The guests who didn't like the food get a voucher."]]},
  {w:"wo / woher / wohin", en:"where / where from / where to", tag:"Ort", ex:[
   ["wo nach Städten und Ländern", "Frankfurt ist die Stadt, [[wo]] ich seit fünf Jahren wohne.", "Frankfurt is the city where I have lived for five years."],
   ["wo = in dem / in der", "Ich kenne ein Café, [[wo]] man sehr gut frühstücken kann.", "I know a café where you can have a very good breakfast."],
   ["woher = Herkunft", "Das ist das Dorf, [[woher]] meine Großeltern kommen.", "That's the village my grandparents come from."],
   ["wohin = Richtung", "Spanien ist das Land, [[wohin]] wir jedes Jahr fahren.", "Spain is the country we go to every year."]]},
  {w:"was / wo(r)-", en:"what / wo(r)- + preposition", tag:"alles / nichts / ganzer Satz", ex:[
   ["nach alles (all that)", "Das ist alles, [[was]] ich weiß.", "That's all I know."],
   ["nach nichts / etwas", "Es gibt nichts, [[was]] ich lieber mache.", "There's nothing I'd rather do."],
   ["nach Superlativ (the best thing that)", "Das ist das Beste, [[was]] mir passieren konnte.", "That's the best thing that could have happened to me."],
   ["bezieht sich auf den ganzen Satz", "Er hat die Prüfung bestanden, [[was]] mich sehr freut.", "He passed the exam, which makes me very happy."],
   ["ganzer Satz + Präposition: wo(r)- ", "Sie hat mir beim Umzug geholfen, [[wofür]] ich ihr sehr dankbar bin.", "She helped me move, for which I'm very grateful to her."]]}
 ]}
]},

{id:"k2", de:"Konjunktiv II", en:"Subjunctive II",
 intro:"Konjunktiv II für Wünsche, höfliche Bitten, Ratschläge und irreale Situationen. Meist: würde + Infinitiv; bei sein, haben und Modalverben die eigene Form: wäre, hätte, könnte, sollte …",
 groups:[
 {g:"Formen", gen:"forms", items:[
  {w:"würde + Infinitiv", en:"would + verb", tag:"Wunsch / Bitte / Rat", ex:[
   ["Wunsch (would like to)", "Ich [[würde]] gern mehr [[reisen]].", "I would like to travel more."],
   ["höfliche Bitte, Frage", "[[Würden]] Sie mir bitte beim Formular [[helfen]]?", "Would you please help me with the form?"],
   ["Ratschlag: An deiner Stelle …", "An deiner Stelle [[würde]] ich zum Arzt [[gehen]].", "If I were you, I'd go to the doctor."],
   ["vorsichtige Meinung (B1 Sprechen)", "Ich [[würde]] [[sagen]], dass das eine gute Idee ist.", "I'd say that's a good idea."]]},
  {w:"hätte", en:"would have", tag:"haben", ex:[
   ["Wunsch", "Ich [[hätte]] gern mehr Zeit für meine Familie.", "I would like to have more time for my family."],
   ["höflich bestellen", "Ich [[hätte]] gern einen Kaffee und ein Stück Kuchen, bitte.", "I'd like a coffee and a piece of cake, please."],
   ["höfliche Frage", "[[Hätten]] Sie morgen kurz Zeit für ein Gespräch?", "Would you have a moment for a chat tomorrow?"],
   ["hätte fast + Partizip (almost)", "Ich [[hätte]] heute fast den Zug [[verpasst]].", "I almost missed the train today."]]},
  {w:"wäre", en:"would be", tag:"sein", ex:[
   ["höflicher Vorschlag", "Es [[wäre]] schön, wenn du am Samstag mitkommen könntest.", "It would be nice if you could come along on Saturday."],
   ["irreal: in Wirklichkeit nicht", "Wenn ich reich [[wäre]], würde ich ein Haus am Meer kaufen.", "If I were rich, I would buy a house by the sea."],
   ["höfliche Frage im Brief", "[[Wäre]] es möglich, den Termin auf Freitag zu verschieben?", "Would it be possible to move the appointment to Friday?"],
   ["Vergangenheit: wäre + Partizip", "Ich [[wäre]] gern [[mitgekommen]], aber ich war krank.", "I would have liked to come along, but I was ill."]]},
  {w:"könnte", en:"could", tag:"können", ex:[
   ["sehr höfliche Bitte", "[[Könnten]] Sie das bitte noch einmal wiederholen?", "Could you please repeat that?"],
   ["Vorschlag (we could …)", "Wir [[könnten]] am Wochenende zusammen ins Kino gehen.", "We could go to the cinema together at the weekend."],
   ["Vermutung (might)", "Das [[könnte]] schwierig werden.", "That could get difficult."],
   ["Vorwurf in der Vergangenheit: hätte … können", "Du [[hättest]] mich ruhig anrufen [[können]].", "You could have called me."]]},
  {w:"sollte", en:"should", tag:"Ratschlag", ex:[
   ["Ratschlag unter Freunden (should)", "Du [[solltest]] mehr Wasser trinken und früher schlafen gehen.", "You should drink more water and go to bed earlier."],
   ["Ratschlag, formell", "Sie [[sollten]] den Antrag möglichst früh abgeben.", "You should hand in the application as early as possible."],
   ["um Rat fragen", "Was [[sollte]] ich Ihrer Meinung nach tun?", "What do you think I should do?"],
   ["Vergangenheit: hätte … sollen (should have)", "Wir [[hätten]] früher losfahren [[sollen]].", "We should have set off earlier."]]}
 ]},
 {g:"Sätze", gen:"sentences", items:[
  {w:"wenn … würde / hätte", en:"if … would / had (unreal condition)", tag:"irreale Bedingung", ex:[
   ["Wenn-Satz zuerst", "[[Wenn]] ich mehr Zeit [[hätte]], [[würde]] ich einen Tanzkurs machen.", "If I had more time, I would take a dance class."],
   ["ohne wenn: Verb am Anfang", "[[Hätte]] ich mehr Geld, [[würde]] ich eine größere Wohnung mieten.", "If I had more money, I would rent a bigger flat."],
   ["Hauptsatz zuerst, mit Modalverb", "Ich [[würde]] mehr Sport machen, [[wenn]] ich nicht so viel arbeiten müsste.", "I would do more sport if I didn't have to work so much."],
   ["Frage (B1 Sprechen)", "Was [[würdest]] du machen, [[wenn]] du im Lotto gewinnen [[würdest]]?", "What would you do if you won the lottery?"]]},
  {w:"irrealer Wunsch", en:"unreal wish (if only …)", tag:"doch nur / wünschte", ex:[
   ["Wenn … doch nur …! (if only)", "[[Wenn]] ich doch nur besser Deutsch sprechen [[könnte]]!", "If only I could speak German better!"],
   ["Ich wünschte, … (I wish)", "Ich [[wünschte]], ich [[hätte]] mehr Zeit zum Lernen.", "I wish I had more time to study."],
   ["mit wäre", "[[Wenn]] doch schon Wochenende [[wäre]]!", "If only it were the weekend already!"],
   ["Vergangenheit, Verb am Anfang", "[[Hätte]] ich doch nur mehr [[gelernt]]!", "If only I had studied more!"]]},
  {w:"Vergangenheit", en:"past (would have done)", tag:"hätte / wäre + Partizip", ex:[
   ["irreal in der Vergangenheit", "Wenn ich das [[gewusst hätte]], [[wäre]] ich früher [[gekommen]].", "If I had known that, I would have come earlier."],
   ["Bedauern (I wish I had …)", "Ich [[hätte]] gern früher mit Deutsch [[angefangen]].", "I wish I had started German earlier."],
   ["mit Grund: aber …", "Ich [[hätte]] dir gern [[geholfen]], aber ich hatte keine Zeit.", "I would have liked to help you, but I didn't have time."],
   ["wäre + gewesen", "Wenn der Bus pünktlich [[gewesen wäre]], [[wäre]] ich nicht zu spät [[gekommen]].", "If the bus had been on time, I wouldn't have been late."]]}
 ]}
]},

{id:"passiv", de:"Passiv", en:"Passive",
 intro:"Im Passiv ist die Handlung wichtig, nicht die Person: werden + Partizip II. Die Person (wenn nötig) mit von + Dativ.",
 groups:[
 {g:"Zeiten und Formen", gen:"tenses and forms", items:[
  {w:"Präsens", en:"present passive (is done)", tag:"wird + Partizip", ex:[
   ["jetzt / in der Zukunft", "Das Paket [[wird]] morgen [[geliefert]].", "The parcel will be delivered tomorrow."],
   ["allgemein, ohne Person", "In Deutschland [[wird]] viel Brot [[gegessen]].", "A lot of bread is eaten in Germany."],
   ["Frage", "Wann [[wird]] das Essen [[serviert]]?", "When is the food served?"],
   ["im Nebensatz: wird am Ende", "Ich weiß nicht, ob die Rechnung heute [[bezahlt wird]].", "I don't know whether the invoice will be paid today."]]},
  {w:"Präteritum", en:"past passive (was done)", tag:"wurde + Partizip", ex:[
   ["Geschichte erzählen", "Das Haus [[wurde]] 1920 [[gebaut]].", "The house was built in 1920."],
   ["mit Person: von + Dativ", "Der Dieb [[wurde]] von der Polizei [[festgenommen]].", "The thief was arrested by the police."],
   ["Ursache: durch + Akkusativ", "Die Brücke [[wurde]] durch den Sturm stark [[beschädigt]].", "The bridge was badly damaged by the storm."],
   ["im Nebensatz", "Er hat erzählt, dass er im Krankenhaus gründlich [[untersucht wurde]].", "He said that he was thoroughly examined in hospital."]]},
  {w:"Perfekt", en:"perfect passive (has been done)", tag:"ist … worden", ex:[
   ["ist + Partizip + worden", "Die Rechnung [[ist]] schon [[bezahlt worden]].", "The bill has already been paid."],
   ["über sich selbst berichten", "Ich [[bin]] zu einem Vorstellungsgespräch [[eingeladen worden]].", "I've been invited to a job interview."],
   ["Frage", "[[Ist]] das Paket schon [[abgeholt worden]]?", "Has the parcel been collected yet?"],
   ["im Nebensatz: worden ist am Ende", "Ich freue mich, dass mein Antrag [[genehmigt worden ist]].", "I'm glad that my application has been approved."]]},
  {w:"mit Modalverb", en:"with a modal verb (must be done)", tag:"muss … werden", ex:[
   ["Pflicht: müssen + Partizip + werden", "Der Antrag [[muss]] bis Freitag [[abgegeben werden]].", "The application must be handed in by Friday."],
   ["Verbot: dürfen + nicht", "Hier [[darf]] nicht [[geraucht werden]].", "Smoking is not allowed here."],
   ["Möglichkeit: können", "Das Formular [[kann]] auch online [[ausgefüllt werden]].", "The form can also be filled in online."],
   ["im Nebensatz: Modalverb ganz am Ende", "Wissen Sie, ob das Auto noch [[repariert werden kann]]?", "Do you know whether the car can still be repaired?"]]},
  {w:"Zustandspassiv", en:"state passive (is done / finished)", tag:"ist + Partizip", ex:[
   ["Zustand, nicht Handlung", "Das Geschäft [[ist]] sonntags [[geschlossen]].", "The shop is closed on Sundays."],
   ["Ergebnis ist schon da", "Keine Sorge, der Tisch [[ist]] schon [[reserviert]].", "Don't worry, the table is already booked."],
   ["Vergangenheit: war + Partizip", "Als wir ankamen, [[war]] die Tür schon [[geöffnet]].", "When we arrived, the door was already open."],
   ["Unterschied: Vorgang mit werden", "Die Tür [[wird]] jeden Morgen um acht [[geöffnet]].", "The door is opened every morning at eight."]]},
  {w:"man statt Passiv", en:"man instead of the passive", tag:"Alternative", ex:[
   ["man + Aktiv = Passiv ohne Person", "Hier [[spricht man]] Deutsch.", "German is spoken here."],
   ["man + Modalverb (Regeln)", "In der Bibliothek [[darf man]] nicht laut telefonieren.", "You may not make loud phone calls in the library."],
   ["Frage (How do you …?)", "Wie [[schreibt man]] das?", "How do you spell that?"],
   ["Ratschlag mit sollte", "[[Man sollte]] jeden Tag genug Wasser trinken.", "You should drink enough water every day."]]}
 ]}
]},

{id:"modal", de:"Modalverben", en:"Modal verbs",
 intro:"Modalverb auf Position 2, Infinitiv (ohne zu) am Ende. In der Vergangenheit benutzt man meist das Präteritum: konnte, musste, durfte, sollte, wollte.",
 groups:[
 {g:"Die Modalverben", gen:"the modal verbs", items:[
  {w:"können", en:"can, to be able to", tag:"Fähigkeit / Möglichkeit", ex:[
   ["Fähigkeit (can, be able to)", "Meine Tochter [[kann]] schon sehr gut [[schwimmen]].", "My daughter can already swim very well."],
   ["Möglichkeit (it's possible)", "Hier [[kann]] man mit Karte [[bezahlen]].", "You can pay by card here."],
   ["höfliche Bitte in der Frage", "[[Kannst]] du mir bitte das Salz [[geben]]?", "Can you pass me the salt, please?"],
   ["Präteritum: konnte", "Gestern [[konnte]] ich wegen des Streiks nicht zur Arbeit [[fahren]].", "Yesterday I couldn't get to work because of the strike."],
   ["ohne Infinitiv: eine Sprache können", "Er [[kann]] sehr gut Deutsch.", "He knows German very well."]]},
  {w:"müssen", en:"must, to have to", tag:"Pflicht / Notwendigkeit", ex:[
   ["Pflicht (must, have to)", "Ich [[muss]] den Antrag bis Freitag [[abgeben]].", "I have to hand in the application by Friday."],
   ["Notwendigkeit, im Nebensatz am Ende", "Ich kann nicht kommen, weil ich länger [[arbeiten muss]].", "I can't come because I have to work late."],
   ["Präteritum: musste", "Wir [[mussten]] eine Stunde auf den Arzt [[warten]].", "We had to wait an hour for the doctor."],
   ["nicht müssen = nicht nötig (don't have to)", "Sie [[müssen]] nicht [[warten]], Sie können gleich reinkommen.", "You don't have to wait; you can come straight in."],
   ["sichere Vermutung (must be)", "Das Licht ist an – er [[muss]] zu Hause [[sein]].", "The light is on – he must be at home."]]},
  {w:"dürfen", en:"may, to be allowed to", tag:"Erlaubnis / Verbot", ex:[
   ["Erlaubnis (may, be allowed to)", "Nach der Prüfung [[dürfen]] wir früher nach Hause [[gehen]].", "After the exam we're allowed to go home earlier."],
   ["Verbot: nicht dürfen (mustn't)", "Im Krankenhaus [[darf]] man nicht [[rauchen]].", "You mustn't smoke in the hospital."],
   ["höfliche Frage: Darf ich …?", "[[Darf]] ich das Fenster [[öffnen]]?", "May I open the window?"],
   ["Präteritum: durfte", "Als Kind [[durfte]] ich abends nicht fernsehen.", "As a child I wasn't allowed to watch TV in the evenings."],
   ["im Geschäft: Was darf es sein?", "Guten Tag, was [[darf]] es [[sein]]?", "Hello, what can I get you?"]]},
  {w:"sollen", en:"should, to be supposed to", tag:"Auftrag / Rat", ex:[
   ["Auftrag von einer anderen Person", "Der Arzt sagt, ich [[soll]] dreimal am Tag eine Tablette [[nehmen]].", "The doctor says I should take a tablet three times a day."],
   ["Frage: Soll ich …? (Shall I …?)", "[[Soll]] ich dir beim Tragen [[helfen]]?", "Shall I help you carry that?"],
   ["Präteritum: sollte (was supposed to)", "Der Handwerker [[sollte]] um neun Uhr [[kommen]], aber er ist noch nicht da.", "The technician was supposed to come at nine, but he isn't here yet."],
   ["Nachricht weitergeben", "Frau Weber hat angerufen. Sie [[sollen]] sie bitte [[zurückrufen]].", "Ms Weber called. You're to call her back, please."],
   ["angeblich (is said to be)", "Das neue Restaurant [[soll]] sehr gut [[sein]].", "The new restaurant is said to be very good."]]},
  {w:"wollen", en:"to want to", tag:"Wille / Plan", ex:[
   ["Plan, fester Wunsch (want to)", "Nächstes Jahr [[will]] ich die B1-Prüfung [[machen]].", "Next year I want to take the B1 exam."],
   ["Präteritum: wollte", "Ich [[wollte]] dich gestern [[anrufen]], aber ich hatte keine Zeit.", "I wanted to call you yesterday, but I didn't have time."],
   ["Vorschlag: Wollen wir …? (Shall we …?)", "[[Wollen]] wir am Samstag zusammen [[kochen]]?", "Shall we cook together on Saturday?"],
   ["höflicher: möchten statt wollen", "Ich [[möchte]] bitte einen Termin [[vereinbaren]].", "I'd like to make an appointment, please."]]},
  {w:"möchten / mögen", en:"would like / to like", tag:"Wunsch / gern haben", ex:[
   ["möchten + Infinitiv: höflicher Wunsch", "Ich [[möchte]] gern ein Konto [[eröffnen]].", "I'd like to open an account."],
   ["möchten + Nomen (bestellen)", "Ich [[möchte]] einen Kaffee, bitte.", "I'd like a coffee, please."],
   ["mögen + Nomen = gern haben (like)", "Ich [[mag]] keinen scharfen Käse.", "I don't like strong cheese."],
   ["möchten in der Vergangenheit: wollte", "Ich [[wollte]] eigentlich mitkommen, aber ich war krank.", "I actually wanted to come along, but I was ill."],
   ["im formellen Brief", "Außerdem [[möchte]] ich [[wissen]], wann der Kurs beginnt.", "I would also like to know when the course starts."]]},
  {w:"nicht brauchen zu", en:"don't need to", tag:"= nicht müssen", ex:[
   ["nicht brauchen + zu = nicht müssen", "Du [[brauchst]] nicht [[zu]] kommen, ich schaffe das allein.", "You don't need to come; I can manage on my own."],
   ["nur … zu brauchen (only need to)", "Sie [[brauchen]] das Formular nur [[zu]] unterschreiben.", "You only need to sign the form."],
   ["kein + Nomen brauchen", "Für die Anmeldung [[brauchen]] Sie [[keinen]] Termin.", "You don't need an appointment for registration."],
   ["Präteritum", "Ich [[brauchte]] nicht lange [[zu]] warten.", "I didn't have to wait long."]]},
  {w:"Modalverb im Satz", en:"modal verbs in the sentence", tag:"Wortstellung", ex:[
   ["Hauptsatz: Satzklammer", "Ich [[kann]] heute leider nicht zum Kurs [[kommen]].", "Unfortunately I can't come to the course today."],
   ["Nebensatz: Modalverb ganz am Ende", "Ich weiß nicht, ob ich morgen [[kommen kann]].", "I don't know whether I can come tomorrow."],
   ["trennbares Verb bleibt zusammen", "Ich [[muss]] morgen früh [[aufstehen]].", "I have to get up early tomorrow."],
   ["Perfekt: doppelter Infinitiv (selten, meist Präteritum)", "Ich [[habe]] gestern lange [[arbeiten müssen]].", "I had to work late yesterday."]]}
 ]}
]},

{id:"refl", de:"Reflexive Verben", en:"Reflexive verbs",
 intro:"Das Reflexivpronomen bezieht sich auf das Subjekt: ich → mich/mir, du → dich/dir, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. Mit einem Akkusativobjekt steht das Reflexivpronomen im Dativ.",
 groups:[
 {g:"Formen und Regeln", gen:"forms and rules", items:[
  {w:"sich + Akkusativ", en:"reflexive + accusative (myself …)", tag:"mich / dich / sich", ex:[
   ["Präsens", "Ich [[freue mich]] auf das Wochenende.", "I'm looking forward to the weekend."],
   ["Perfekt: mit haben", "Wir [[haben uns]] im Deutschkurs [[kennengelernt]].", "We met on the German course."],
   ["Imperativ (du / Sie)", "[[Beeil dich]]! – [[Setzen Sie sich]] bitte.", "Hurry up! – Please sit down."],
   ["im Nebensatz", "Ich hoffe, dass du [[dich]] bald besser [[fühlst]].", "I hope you'll feel better soon."]]},
  {w:"sich + Dativ", en:"reflexive + dative (to myself …)", tag:"mir / dir + Akkusativ", ex:[
   ["Körperteil = Akkusativ, Pronomen = Dativ", "Ich [[wasche mir]] die Hände.", "I wash my hands."],
   ["sich etwas kaufen", "Ich [[kaufe mir]] morgen ein neues Handy.", "I'm going to buy myself a new phone tomorrow."],
   ["sich etwas vorstellen (imagine)", "[[Stell dir]] vor, ich habe die Prüfung bestanden!", "Imagine, I passed the exam!"],
   ["sich Sorgen machen (worry)", "[[Mach dir]] keine Sorgen, alles wird gut.", "Don't worry, everything will be fine."],
   ["sich etwas ansehen, Perfekt", "Wir [[haben uns]] die Wohnung gestern [[angesehen]].", "We looked at the flat yesterday."]]},
  {w:"reflexiv oder nicht?", en:"reflexive or not?", tag:"Bedeutung", ex:[
   ["waschen: jemand anderen", "Ich [[wasche]] das Baby.", "I wash the baby."],
   ["sich waschen: sich selbst", "Das Kind [[wäscht sich]] schon allein.", "The child already washes himself."],
   ["jemanden ärgern (annoy someone)", "Mein Bruder [[ärgert]] mich immer.", "My brother always annoys me."],
   ["sich ärgern (be annoyed)", "Ich [[ärgere mich]] über die Verspätung.", "I'm annoyed about the delay."],
   ["anmelden: jemand anderen / sich selbst", "Ich [[melde]] meinen Sohn im Sportverein an und [[melde mich]] für den Kurs an.", "I register my son at the sports club and sign myself up for the course."]]},
  {w:"einander: uns / euch / sich", en:"each other", tag:"reziprok", ex:[
   ["sich treffen (meet each other)", "Wir [[treffen uns]] jeden Freitag im Café.", "We meet in the café every Friday."],
   ["sich verstehen (get on)", "Meine Kollegen und ich [[verstehen uns]] sehr gut.", "My colleagues and I get on very well."],
   ["sich streiten (argue)", "Die Kinder [[streiten sich]] oft um das Tablet.", "The children often argue about the tablet."],
   ["Frage mit ihr / euch", "Woher [[kennt ihr euch]]?", "How do you know each other?"]]},
  {w:"Position von sich", en:"where sich goes", tag:"Wortstellung", ex:[
   ["nach dem konjugierten Verb", "Er [[interessiert sich]] für Fußball.", "He's interested in football."],
   ["Inversion mit Nomen: sich vor dem Subjekt", "Morgen [[trifft sich]] das Team im Konferenzraum.", "Tomorrow the team is meeting in the conference room."],
   ["Inversion mit Pronomen: sich nach dem Subjekt", "Morgen [[treffen wir uns]] im Konferenzraum.", "Tomorrow we're meeting in the conference room."],
   ["Nebensatz: sich früh im Satz", "Ich weiß, dass [[sie sich]] sehr über das Geschenk gefreut hat.", "I know that she was very pleased about the present."]]},
  {w:"wichtige B1-Verben", en:"important B1 verbs (always with sich)", tag:"immer mit sich", ex:[
   ["sich beeilen (hurry)", "Wir müssen [[uns beeilen]], der Zug fährt gleich.", "We have to hurry; the train is leaving soon."],
   ["sich erkälten (catch a cold)", "Ich [[habe mich]] beim Fußball [[erkältet]].", "I caught a cold playing football."],
   ["sich ausruhen (rest)", "Am Wochenende möchte ich [[mich]] einfach [[ausruhen]].", "At the weekend I just want to rest."],
   ["sich entscheiden (decide)", "Ich kann [[mich]] nicht [[entscheiden]], welche Wohnung ich nehme.", "I can't decide which flat to take."],
   ["sich verabschieden (say goodbye)", "Er [[hat sich]] von allen Kollegen [[verabschiedet]].", "He said goodbye to all his colleagues."]]}
 ]}
]},

{id:"trenn", de:"Trennbare & untrennbare Verben", en:"Separable & inseparable verbs",
 intro:"Trennbare Vorsilben (an-, auf-, aus-, ein-, mit-, zurück-, fern- …) sind betont und stehen im Hauptsatz am Ende. Untrennbare Vorsilben (be-, ver-, er-, ent-, emp-, ge-, zer-, miss-) bleiben immer am Verb, und im Perfekt gibt es kein ge-.",
 groups:[
 {g:"Trennbar", gen:"separable", items:[
  {w:"im Präsens", en:"in the present tense", tag:"Vorsilbe am Ende", ex:[
   ["Hauptsatz: Vorsilbe ans Ende", "Ich [[rufe]] dich morgen [[an]].", "I'll call you tomorrow."],
   ["Frage", "Wann [[kommst]] du nach Hause [[zurück]]?", "When are you coming back home?"],
   ["Imperativ", "[[Mach]] bitte das Licht [[aus]]!", "Please switch off the light!"],
   ["Nebensatz: zusammen am Ende", "Ich gehe früh ins Bett, weil ich um fünf [[aufstehe]].", "I go to bed early because I get up at five."],
   ["mit Modalverb: zusammen am Ende", "Ich muss heute noch [[einkaufen]].", "I still have to do the shopping today."]]},
  {w:"im Perfekt", en:"in the perfect tense", tag:"ge in der Mitte", ex:[
   ["an-ge-rufen", "Hast du den Arzt schon [[angerufen]]?", "Have you called the doctor yet?"],
   ["ein-ge-kauft", "Ich habe für das Wochenende [[eingekauft]].", "I've done the shopping for the weekend."],
   ["mit sein: auf-ge-standen", "Heute bin ich erst um neun [[aufgestanden]].", "Today I didn't get up until nine."],
   ["unregelmäßig: mit-ge-bracht", "Sie hat einen Kuchen [[mitgebracht]].", "She brought a cake."],
   ["mit sein: zurück-ge-kommen", "Wir sind gestern aus dem Urlaub [[zurückgekommen]].", "We came back from holiday yesterday."]]},
  {w:"mit zu", en:"with zu", tag:"zu in der Mitte", ex:[
   ["an-zu-rufen", "Vergiss nicht, deine Mutter [[anzurufen]].", "Don't forget to call your mother."],
   ["auf-zu-räumen", "Ich habe keine Lust, die Küche [[aufzuräumen]].", "I don't feel like tidying the kitchen."],
   ["mit um … zu", "Ich gehe zur Bank, um Geld [[abzuheben]].", "I'm going to the bank to withdraw money."],
   ["mit-zu-nehmen", "Es ist wichtig, den Pass [[mitzunehmen]].", "It's important to take your passport with you."]]}
 ]},
 {g:"Untrennbar und Bedeutung", gen:"inseparable, and meaning", items:[
  {w:"untrennbare Vorsilben", en:"inseparable prefixes", tag:"be- ver- er- ent- emp-", ex:[
   ["be-: Perfekt ohne ge", "Ich habe die Rechnung schon [[bezahlt]].", "I've already paid the bill."],
   ["ver-: Vorsilbe bleibt am Verb", "Ich [[verstehe]] die Frage nicht.", "I don't understand the question."],
   ["er-: Perfekt ohne ge", "Die Lehrerin hat die Grammatik gut [[erklärt]].", "The teacher explained the grammar well."],
   ["ent-: auch im Nebensatz gleich", "Ich weiß nicht, ob ich mich richtig [[entschieden]] habe.", "I don't know whether I decided correctly."],
   ["emp-: empfehlen", "Was [[empfehlen]] Sie mir?", "What do you recommend?"]]},
  {w:"kommen + Vorsilbe", en:"kommen + prefix", tag:"neue Bedeutung", ex:[
   ["ankommen (arrive) – trennbar", "Der Zug [[kommt]] um 18 Uhr in Hamburg [[an]].", "The train arrives in Hamburg at 6 pm."],
   ["bekommen (get, receive) – untrennbar", "Ich habe heute einen Brief [[bekommen]].", "I received a letter today."],
   ["mitkommen (come along) – trennbar", "[[Kommst]] du am Samstag [[mit]]?", "Are you coming along on Saturday?"],
   ["vorkommen (happen) – trennbar", "So etwas [[kommt]] leider oft [[vor]].", "Unfortunately that sort of thing happens often."]]},
  {w:"stehen + Vorsilbe", en:"stehen + prefix", tag:"neue Bedeutung", ex:[
   ["aufstehen (get up) – trennbar", "Ich [[stehe]] jeden Tag um sechs [[auf]].", "I get up at six every day."],
   ["verstehen (understand) – untrennbar", "[[Verstehen]] Sie mich?", "Do you understand me?"],
   ["bestehen (pass) – untrennbar", "Ich habe die Prüfung [[bestanden]]!", "I passed the exam!"],
   ["entstehen (arise) – untrennbar", "Dadurch [[entstehen]] keine zusätzlichen Kosten.", "No additional costs arise as a result."]]},
  {w:"um- / über- / wieder-", en:"um- / über- / wieder- (sometimes separable)", tag:"mal trennbar, mal nicht", ex:[
   ["umziehen (move house) – trennbar", "Wir [[ziehen]] nächsten Monat [[um]].", "We're moving next month."],
   ["umsteigen (change trains) – trennbar", "In Hannover [[steigen]] Sie in den ICE [[um]].", "In Hanover you change to the ICE."],
   ["übersetzen (translate) – untrennbar", "Kannst du mir diesen Brief [[übersetzen]]? – Ich habe ihn schon [[übersetzt]].", "Can you translate this letter for me? – I've already translated it."],
   ["wiederholen (repeat) – untrennbar", "Könnten Sie das bitte [[wiederholen]]?", "Could you repeat that, please?"]]}
 ]}
]},

{id:"zuinf", de:"Infinitiv mit zu", en:"Infinitive with zu",
 intro:"Nach vielen Adjektiven, Nomen und Verben folgt zu + Infinitiv am Satzende, oft mit Komma. Nach Modalverben, werden, lassen und Bewegungsverben wie gehen steht der Infinitiv ohne zu.",
 groups:[
 {g:"Wann zu?", gen:"when zu?", items:[
  {w:"Es ist … zu …", en:"It is … to …", tag:"nach Adjektiv", ex:[
   ["Es ist wichtig, … zu", "Es ist wichtig, jeden Tag ein bisschen [[zu]] üben.", "It's important to practise a little every day."],
   ["Es ist schwer / leicht, … zu", "Es ist nicht leicht, in Frankfurt eine Wohnung [[zu]] finden.", "It isn't easy to find a flat in Frankfurt."],
   ["Es macht Spaß, … zu", "Es macht mir Spaß, neue Leute kennen[[zulernen]].", "I enjoy meeting new people."],
   ["Es ist verboten, … zu (Regeln)", "Es ist verboten, hier [[zu]] parken.", "It is forbidden to park here."]]},
  {w:"Nomen + zu", en:"noun + zu (desire, time, fear …)", tag:"Lust, Zeit, Angst …", ex:[
   ["keine Lust haben, … zu", "Ich habe heute keine Lust, [[zu]] kochen.", "I don't feel like cooking today."],
   ["keine Zeit haben, … zu", "Leider habe ich keine Zeit, dich vom Bahnhof ab[[zuholen]].", "Unfortunately I don't have time to pick you up from the station."],
   ["die Möglichkeit haben, … zu", "Im Kurs haben wir die Möglichkeit, viel [[zu]] sprechen.", "In the course we have the opportunity to speak a lot."],
   ["Angst haben, … zu", "Viele haben Angst, Fehler [[zu]] machen.", "Many people are afraid of making mistakes."]]},
  {w:"Verb + zu", en:"verb + zu (try, forget …)", tag:"versuchen, vergessen …", ex:[
   ["versuchen, … zu (try)", "Ich versuche, jeden Tag zehn neue Wörter [[zu]] lernen.", "I try to learn ten new words every day."],
   ["vergessen, … zu (forget)", "Ich habe vergessen, die Tür ab[[zuschließen]].", "I forgot to lock the door."],
   ["anfangen / aufhören, … zu (start / stop)", "Es hat angefangen [[zu]] regnen.", "It has started to rain."],
   ["vorhaben, … zu (plan)", "Wir haben vor, im Sommer nach Italien [[zu]] fahren.", "We're planning to go to Italy in the summer."],
   ["hoffen, … zu (hope)", "Ich hoffe, Sie bald persönlich kennen[[zulernen]].", "I hope to meet you in person soon."]]},
  {w:"ohne zu", en:"without zu", tag:"Modalverb, werden, lassen, gehen", ex:[
   ["nach Modalverben", "Ich muss morgen früh [[aufstehen]].", "I have to get up early tomorrow."],
   ["nach werden (Futur)", "Ich werde dich morgen [[anrufen]].", "I'll call you tomorrow."],
   ["nach lassen", "Ich lasse mein Fahrrad [[reparieren]].", "I'm having my bike repaired."],
   ["nach gehen / fahren (Bewegung)", "Wir gehen heute Abend [[essen]].", "We're going out to eat tonight."],
   ["nach sehen / hören", "Ich höre die Kinder im Garten [[spielen]].", "I can hear the children playing in the garden."]]},
  {w:"zu oder dass?", en:"zu or dass?", tag:"gleiches Subjekt?", ex:[
   ["gleiches Subjekt → zu", "Ich hoffe, die Prüfung [[zu]] bestehen.", "I hope to pass the exam."],
   ["anderes Subjekt → dass", "Ich hoffe, [[dass]] du die Prüfung bestehst.", "I hope that you pass the exam."],
   ["beides möglich bei gleichem Subjekt", "Ich freue mich, [[dass]] ich dich sehe. = Ich freue mich, dich [[zu]] sehen.", "I'm glad to see you."],
   ["Bitte an eine Person → zu", "Ich bitte Sie, mir die Unterlagen [[zu]] schicken.", "I ask you to send me the documents."]]},
  {w:"haben / sein + zu", en:"have to / can be + zu", tag:"= müssen / können", ex:[
   ["haben + zu = müssen (active)", "Ich habe heute noch viel [[zu]] tun.", "I still have a lot to do today."],
   ["nichts zu … haben", "Du hast hier nichts [[zu]] sagen.", "You have no say here."],
   ["sein + zu = muss gemacht werden (formell)", "Die Rechnung ist bis zum 15. [[zu]] bezahlen.", "The invoice is to be paid by the 15th."],
   ["sein + zu = kann gemacht werden", "Das Problem ist leicht [[zu]] lösen.", "The problem is easy to solve."]]}
 ]}
]},

{id:"indirekt", de:"Indirekte Fragen", en:"Indirect questions",
 intro:"Indirekte Fragen sind höflicher. Das Fragewort bleibt, aber das Verb geht ans Ende: Wann kommt der Bus? → Wissen Sie, wann der Bus kommt? Ja/Nein-Fragen werden mit ob gebildet.",
 groups:[
 {g:"Fragewörter", gen:"question words", items:[
  {w:"wann / wo / wie", en:"when / where / how", tag:"Verb am Ende", ex:[
   ["wann: Zeit", "Können Sie mir sagen, [[wann]] der nächste Zug nach Köln [[fährt]]?", "Can you tell me when the next train to Cologne leaves?"],
   ["wo: Ort", "Wissen Sie, [[wo]] hier die nächste Apotheke [[ist]]?", "Do you know where the nearest pharmacy is?"],
   ["wie: Art und Weise", "Ich möchte wissen, [[wie]] man sich für den Kurs [[anmeldet]].", "I'd like to know how to sign up for the course."],
   ["wie + Adjektiv: wie lange, wie oft", "Wissen Sie, [[wie lange]] die Reparatur [[dauert]]?", "Do you know how long the repair will take?"]]},
  {w:"warum / was / wer", en:"why / what / who", tag:"Verb am Ende", ex:[
   ["warum: Grund", "Ich verstehe nicht, [[warum]] der Bus schon wieder Verspätung [[hat]].", "I don't understand why the bus is late again."],
   ["was: Sache", "Weißt du, [[was]] das auf Deutsch [[heißt]]?", "Do you know what that's called in German?"],
   ["wer: Person (Subjekt)", "Können Sie mir sagen, [[wer]] für die Anmeldung zuständig [[ist]]?", "Can you tell me who is responsible for registration?"],
   ["mit wem / für wen: Präposition + Fragewort", "Ich weiß nicht, [[mit wem]] ich darüber sprechen [[soll]].", "I don't know who I should talk to about it."]]},
  {w:"wie viel / welche", en:"how much / which", tag:"Verb am Ende", ex:[
   ["wie viel: Preis, Menge", "Könnten Sie mir sagen, [[wie viel]] der Kurs [[kostet]]?", "Could you tell me how much the course costs?"],
   ["welche + Nomen", "Wissen Sie, [[welche]] Unterlagen ich mitbringen [[muss]]?", "Do you know which documents I need to bring?"],
   ["wie viele + Plural", "Ich möchte wissen, [[wie viele]] Teilnehmer im Kurs [[sind]].", "I'd like to know how many participants there are in the course."],
   ["woher / wohin", "Er hat mich gefragt, [[woher]] ich [[komme]].", "He asked me where I come from."]]},
  {w:"ob", en:"whether, if", tag:"Ja/Nein-Frage", ex:[
   ["Ist der Zug pünktlich? → ob", "Wissen Sie, [[ob]] der Zug pünktlich [[ist]]?", "Do you know whether the train is on time?"],
   ["mit Modalverb am Ende", "Ich möchte fragen, [[ob]] ich den Termin verschieben [[kann]].", "I'd like to ask whether I can postpone the appointment."],
   ["mit Perfekt", "Weißt du, [[ob]] das Paket schon [[angekommen ist]]?", "Do you know whether the parcel has arrived yet?"],
   ["ob … oder", "Er hat nicht gesagt, [[ob]] er heute [[oder]] morgen kommt.", "He didn't say whether he's coming today or tomorrow."]]}
 ]},
 {g:"Höflich fragen", gen:"asking politely", items:[
  {w:"Einleitungen", en:"polite openings", tag:"höflich", ex:[
   ["Können / Könnten Sie mir sagen, …?", "[[Könnten Sie mir sagen]], wann die Praxis geöffnet hat?", "Could you tell me when the practice is open?"],
   ["Wissen Sie, …?", "[[Wissen Sie]], ob man hier parken darf?", "Do you know whether you're allowed to park here?"],
   ["Ich möchte (gern) wissen, … (Brief)", "[[Ich möchte gern wissen]], ob der Preis die Prüfungsgebühr enthält.", "I would like to know whether the price includes the exam fee."],
   ["Ich frage mich, … (I wonder)", "[[Ich frage mich]], warum niemand ans Telefon geht.", "I wonder why nobody answers the phone."],
   ["Mich würde interessieren, … (formell)", "[[Mich würde interessieren]], wie viele Stunden der Kurs hat.", "I'd be interested to know how many hours the course has."]]},
  {w:"direkt → indirekt", en:"direct → indirect", tag:"umformen", ex:[
   ["Wo ist der Bahnhof? →", "Entschuldigung, wissen Sie, [[wo der Bahnhof ist]]?", "Excuse me, do you know where the station is?"],
   ["Wann beginnt der Kurs? →", "Können Sie mir sagen, [[wann der Kurs beginnt]]?", "Can you tell me when the course starts?"],
   ["Kommt er morgen? →", "Ich weiß nicht, [[ob er morgen kommt]].", "I don't know whether he's coming tomorrow."],
   ["Was hat der Arzt gesagt? →", "Erzähl mal, [[was der Arzt gesagt hat]].", "Tell me what the doctor said."]]}
 ]}
]},

{id:"ndekl", de:"n-Deklination", en:"Weak nouns (n-declension)",
 intro:"Einige maskuline Nomen bekommen in allen Kasus außer im Nominativ Singular die Endung -(e)n: vor allem Personen und Tiere auf -e (der Kollege, der Junge) und Wörter auf -ent, -ant, -ist (der Student, der Praktikant, der Polizist) sowie der Herr, der Mensch, der Nachbar.",
 groups:[
 {g:"Wichtige Nomen", gen:"important nouns", items:[
  {w:"der Kollege", en:"the colleague", tag:"-n", ex:[
   ["Nominativ: ohne -n", "Mein neuer [[Kollege]] kommt aus Spanien.", "My new colleague comes from Spain."],
   ["Akkusativ: -n", "Kennst du den neuen [[Kollegen]] schon?", "Do you already know the new colleague?"],
   ["Dativ: -n", "Ich habe mit einem [[Kollegen]] zu Mittag gegessen.", "I had lunch with a colleague."],
   ["Genitiv: -n", "Das ist der Schreibtisch meines [[Kollegen]].", "That's my colleague's desk."]]},
  {w:"der Kunde", en:"the customer", tag:"-n", ex:[
   ["Nominativ", "Der [[Kunde]] möchte die Jacke umtauschen.", "The customer wants to exchange the jacket."],
   ["Akkusativ", "Bitte rufen Sie den [[Kunden]] zurück.", "Please call the customer back."],
   ["Dativ", "Ich habe dem [[Kunden]] alles erklärt.", "I explained everything to the customer."],
   ["Plural: -n", "Unsere [[Kunden]] sind sehr zufrieden.", "Our customers are very satisfied."]]},
  {w:"der Nachbar", en:"the neighbour", tag:"-n", ex:[
   ["Nominativ", "Unser [[Nachbar]] hat ein Paket für uns angenommen.", "Our neighbour took in a parcel for us."],
   ["Akkusativ", "Frag doch den [[Nachbarn]], ob er dir hilft.", "Why don't you ask the neighbour whether he'll help you?"],
   ["Dativ", "Ich habe dem [[Nachbarn]] den Schlüssel gegeben.", "I gave the neighbour the key."],
   ["Genitiv", "Das Auto des [[Nachbarn]] steht vor unserer Garage.", "The neighbour's car is parked in front of our garage."]]},
  {w:"der Herr", en:"Mr, the gentleman", tag:"-n (Plural -en)", ex:[
   ["Anrede im Brief: Nominativ, ohne -n", "Sehr geehrter [[Herr]] Keller, …", "Dear Mr Keller, …"],
   ["Akkusativ: Herrn", "Ich möchte bitte [[Herrn]] Weber sprechen.", "I'd like to speak to Mr Weber, please."],
   ["Dativ: Herrn", "Ich habe [[Herrn]] Schmidt eine E-Mail geschrieben.", "I wrote Mr Schmidt an email."],
   ["Plural: Herren", "Sehr geehrte Damen und [[Herren]], …", "Dear Sir or Madam, …"]]},
  {w:"der Junge / der Mensch", en:"the boy / the human being", tag:"-n / -en", ex:[
   ["Junge, Nominativ", "Der [[Junge]] spielt im Garten.", "The boy is playing in the garden."],
   ["Junge, Dativ", "Ich habe dem [[Jungen]] den Weg gezeigt.", "I showed the boy the way."],
   ["Mensch, Akkusativ: -en", "Ich kenne keinen [[Menschen]] in dieser Stadt.", "I don't know anyone in this city."],
   ["Mensch, Plural", "Viele [[Menschen]] fahren im Sommer in den Urlaub.", "Many people go on holiday in summer."]]},
  {w:"-ent / -ant / -ist", en:"-ent / -ant / -ist nouns", tag:"-en", ex:[
   ["der Student: Akkusativ", "Wir suchen einen [[Studenten]] für die Nachhilfe.", "We're looking for a student to give tutoring."],
   ["der Praktikant: Dativ", "Ich habe dem [[Praktikanten]] das Büro gezeigt.", "I showed the intern the office."],
   ["der Polizist: Akkusativ", "Frag doch den [[Polizisten]] nach dem Weg.", "Why don't you ask the police officer for directions?"],
   ["der Patient: Genitiv", "Die Daten des [[Patienten]] sind geschützt.", "The patient's data is protected."]]},
  {w:"der Name", en:"the name", tag:"-n, Genitiv -ns", ex:[
   ["Nominativ", "Mein [[Name]] ist [Ihr Name].", "My name is [your name]."],
   ["Akkusativ: Namen", "Können Sie bitte Ihren [[Namen]] buchstabieren?", "Could you spell your name, please?"],
   ["Dativ: Namen", "Unter welchem [[Namen]] haben Sie reserviert?", "Under which name did you book?"],
   ["Genitiv: Namens", "Die Schreibweise des [[Namens]] ist falsch.", "The spelling of the name is wrong."]]}
 ]}
]},

{id:"neg", de:"Negation", en:"Negation",
 intro:"kein verneint Nomen mit ein oder ohne Artikel. nicht verneint alles andere: Verben, Adjektive, Nomen mit der/die/das oder mein. nicht steht meist am Satzende, aber vor Adjektiven, Präpositionalergänzungen und dem zweiten Verbteil.",
 groups:[
 {g:"nicht und kein", gen:"nicht and kein", items:[
  {w:"kein", en:"no, not a", tag:"statt ein / ohne Artikel", ex:[
   ["ein → kein", "Ich habe [[kein]] Auto.", "I don't have a car."],
   ["Akkusativ maskulin: keinen", "Für die Anmeldung brauchen Sie [[keinen]] Termin.", "You don't need an appointment to register."],
   ["ohne Artikel → kein (Plural, Nomen ohne Artikel)", "Wir haben [[keine]] Kinder und [[keine]] Zeit für Haustiere.", "We have no children and no time for pets."],
   ["kein … mehr (no more)", "Es gibt [[keine]] Brötchen [[mehr]].", "There are no more rolls."]]},
  {w:"nicht", en:"not", tag:"Verb, Adjektiv, der/mein", ex:[
   ["Verb: am Ende", "Ich verstehe dich [[nicht]].", "I don't understand you."],
   ["vor dem Adjektiv", "Die Wohnung ist [[nicht]] teuer.", "The flat isn't expensive."],
   ["Nomen mit bestimmtem Artikel / Possessiv", "Das ist [[nicht]] mein Handy.", "That's not my phone."],
   ["Name", "Ich bin [[nicht]] Herr Weber, ich bin sein Kollege.", "I'm not Mr Weber, I'm his colleague."]]},
  {w:"Stellung von nicht", en:"where nicht goes", tag:"Wo steht nicht?", ex:[
   ["am Satzende (ganzer Satz)", "Der Bus kommt heute [[nicht]].", "The bus isn't coming today."],
   ["vor der Präpositionalergänzung", "Ich fahre heute [[nicht]] mit dem Auto.", "I'm not driving today."],
   ["vor dem zweiten Verbteil", "Ich habe die E-Mail noch [[nicht]] gelesen.", "I haven't read the email yet."],
   ["vor einem Satzteil: Teilverneinung + sondern", "Ich komme [[nicht]] heute, sondern morgen.", "I'm coming not today but tomorrow."],
   ["mit Modalverb: vor dem Infinitiv", "Sie dürfen hier [[nicht]] parken.", "You may not park here."]]}
 ]},
 {g:"Weitere Verneinung", gen:"other negatives", items:[
  {w:"nie / niemand / nichts / nirgends", en:"never / nobody / nothing / nowhere", tag:"Verneinungswörter", ex:[
   ["nie = zu keiner Zeit (never)", "Ich war noch [[nie]] in Berlin.", "I've never been to Berlin."],
   ["niemand = keine Person (nobody)", "[[Niemand]] hat angerufen.", "Nobody called."],
   ["nichts = keine Sache (nothing)", "Ich habe heute noch [[nichts]] gegessen.", "I haven't eaten anything yet today."],
   ["nirgends / nirgendwo (nowhere)", "Ich finde meinen Schlüssel [[nirgends]].", "I can't find my key anywhere."]]},
  {w:"noch nicht / nicht mehr / schon", en:"not yet / no longer / already", tag:"Zeit", ex:[
   ["noch nicht (not yet)", "Der Handwerker ist [[noch nicht]] gekommen.", "The technician hasn't come yet."],
   ["nicht mehr (no longer)", "Ich rauche [[nicht mehr]].", "I don't smoke any more."],
   ["noch kein (no … yet)", "Ich habe [[noch keinen]] Kitaplatz für meinen Sohn.", "I don't have a nursery place for my son yet."],
   ["Gegenteil: schon (already)", "Hast du schon gegessen? – Nein, [[noch nicht]].", "Have you eaten yet? – No, not yet."]]},
  {w:"doch", en:"yes (after a negative question), after all", tag:"Antwort / Betonung", ex:[
   ["Antwort auf eine negative Frage (yes!)", "Kommst du nicht mit? – [[Doch]], ich komme mit!", "Aren't you coming? – Yes, I am!"],
   ["Widerspruch", "Das stimmt nicht! – [[Doch]], das stimmt.", "That's not true! – Yes, it is."],
   ["im Imperativ: freundlicher", "Komm [[doch]] morgen vorbei!", "Why don't you come by tomorrow!"],
   ["Erinnerung (you know)", "Du weißt [[doch]], dass ich keinen Fisch esse.", "You know I don't eat fish."]]}
 ]}
]},

{id:"werden", de:"werden & lassen", en:"werden & lassen",
 intro:"werden hat vier Aufgaben: Vollverb (become), Futur, Passiv und Konjunktiv II (würde). lassen + Infinitiv heißt: jemand anders macht es für mich – oder: erlauben.",
 groups:[
 {g:"werden", gen:"werden", items:[
  {w:"werden als Vollverb", en:"werden as a main verb (to become)", tag:"become", ex:[
   ["werden + Nomen: Beruf", "Meine Tochter möchte Ärztin [[werden]].", "My daughter wants to become a doctor."],
   ["werden + Adjektiv", "Im Herbst [[wird]] es früh dunkel.", "In autumn it gets dark early."],
   ["Perfekt: ist geworden", "Er [[ist]] letzte Woche 40 [[geworden]].", "He turned 40 last week."],
   ["Präteritum: wurde", "Nach dem Essen [[wurde]] mir schlecht.", "After the meal I felt sick."]]},
  {w:"vier Funktionen", en:"four uses of werden", tag:"Überblick", ex:[
   ["Vollverb: werden + Nomen / Adjektiv", "Es [[wird]] kalt.", "It's getting cold."],
   ["Futur: werden + Infinitiv", "Ich [[werde]] dich morgen [[anrufen]].", "I'll call you tomorrow."],
   ["Passiv: werden + Partizip II", "Das Paket [[wird]] morgen [[geliefert]].", "The parcel will be delivered tomorrow."],
   ["Konjunktiv II: würde + Infinitiv", "Ich [[würde]] gern mehr [[reisen]].", "I would like to travel more."]]}
 ]},
 {g:"lassen", gen:"lassen", items:[
  {w:"lassen + Infinitiv", en:"lassen + verb (have something done)", tag:"machen lassen", ex:[
   ["jemand anders macht es (have something done)", "Ich [[lasse]] mein Auto in der Werkstatt [[reparieren]].", "I'm having my car repaired at the garage."],
   ["mit Dativ: sich die Haare schneiden lassen", "Ich [[lasse]] mir morgen die Haare [[schneiden]].", "I'm having my hair cut tomorrow."],
   ["Perfekt: hat … lassen (doppelter Infinitiv)", "Wir [[haben]] die Wohnung [[streichen lassen]].", "We had the flat painted."],
   ["erlauben (let, allow)", "Meine Eltern [[lassen]] mich allein in die Stadt [[fahren]].", "My parents let me go into town on my own."]]},
  {w:"lassen ohne Infinitiv", en:"lassen without a verb (leave, let)", tag:"liegen lassen / sich lassen", ex:[
   ["etwas irgendwo lassen (leave)", "Ich habe mein Handy zu Hause [[gelassen]].", "I left my phone at home."],
   ["etwas liegen lassen (leave behind)", "Ich habe meinen Regenschirm im Bus [[liegen lassen]].", "I left my umbrella on the bus."],
   ["sich lassen = man kann (can be done)", "Das Fenster [[lässt sich]] nicht öffnen.", "The window won't open."],
   ["Lass uns …! (Let's …)", "[[Lass]] uns morgen ins Kino gehen!", "Let's go to the cinema tomorrow!"]]}
 ]}
]},

{id:"satz", de:"Wortstellung", en:"Word order",
 intro:"Im Hauptsatz steht das konjugierte Verb auf Position 2, weitere Verbteile am Ende (Satzklammer). Im Nebensatz steht das konjugierte Verb am Ende. Im Mittelfeld: Nomen Dativ vor Akkusativ, Pronomen Akkusativ vor Dativ, Angaben meist TeKaMoLo.",
 groups:[
 {g:"Hauptsatz", gen:"main clause", items:[
  {w:"Verb auf Position 2", en:"verb in position 2", tag:"Hauptsatz", ex:[
   ["Subjekt auf Position 1", "Ich [[fahre]] morgen mit dem Zug nach Berlin.", "I'm going to Berlin by train tomorrow."],
   ["Zeit auf Position 1: Subjekt nach dem Verb", "Morgen [[fahre]] ich mit dem Zug nach Berlin.", "Tomorrow I'm going to Berlin by train."],
   ["Objekt auf Position 1 (Betonung)", "Den Film [[habe]] ich schon gesehen.", "I've already seen that film."],
   ["Nebensatz auf Position 1: dann Verb", "Weil es regnet, [[bleiben]] wir zu Hause.", "Because it's raining, we're staying at home."]]},
  {w:"Satzklammer", en:"sentence bracket", tag:"Verb … Ende", ex:[
   ["Modalverb … Infinitiv", "Ich [[muss]] heute noch meine Mutter [[anrufen]].", "I still have to call my mother today."],
   ["Perfekt: haben/sein … Partizip", "Wir [[sind]] im Sommer nach Portugal [[geflogen]].", "We flew to Portugal in the summer."],
   ["trennbares Verb … Vorsilbe", "Der Kurs [[fängt]] nächsten Montag um 18 Uhr [[an]].", "The course starts next Monday at 6 pm."],
   ["Futur: werden … Infinitiv", "Ich [[werde]] nach dem Kurs eine Arbeit [[suchen]].", "I'll look for a job after the course."]]},
  {w:"Mittelfeld: Dativ und Akkusativ", en:"middle field: dative and accusative", tag:"Reihenfolge", ex:[
   ["zwei Nomen: Dativ vor Akkusativ", "Ich gebe [[dem Kellner das Geld]].", "I give the waiter the money."],
   ["zwei Pronomen: Akkusativ vor Dativ", "Ich gebe [[es ihm]].", "I give it to him."],
   ["Pronomen vor Nomen", "Ich gebe [[ihm das Geld]].", "I give him the money."],
   ["Akkusativ-Pronomen vor Dativ-Nomen", "Ich gebe [[es dem Kellner]].", "I give it to the waiter."]]},
  {w:"Mittelfeld: TeKaMoLo", en:"middle field: TeKaMoLo (when – why – how – where)", tag:"wann – warum – wie – wo", ex:[
   ["Temporal vor Lokal", "Ich bin [[gestern]] [[im Kino]] gewesen.", "I was at the cinema yesterday."],
   ["Temporal – Modal – Lokal", "Wir fahren [[morgen]] [[mit dem Zug]] [[nach Hamburg]].", "We're going to Hamburg by train tomorrow."],
   ["Temporal – Kausal – Modal – Lokal", "Er ist [[heute]] [[wegen des Streiks]] [[zu Fuß]] [[zur Arbeit]] gegangen.", "He walked to work today because of the strike."],
   ["eine Angabe auf Position 1, der Rest bleibt", "[[Heute]] ist er [[wegen des Streiks]] [[zu Fuß]] [[zur Arbeit]] gegangen.", "Today, because of the strike, he walked to work."]]}
 ]},
 {g:"Nebensatz und Fragen", gen:"subordinate clauses and questions", items:[
  {w:"Nebensatz", en:"subordinate clause", tag:"Verb am Ende", ex:[
   ["ein Verb: am Ende", "Ich bleibe zu Hause, weil ich krank [[bin]].", "I'm staying at home because I'm ill."],
   ["Modalverb: ganz am Ende", "Ich bleibe zu Hause, weil ich lernen [[muss]].", "I'm staying at home because I have to study."],
   ["Perfekt: Hilfsverb ganz am Ende", "Ich bin müde, weil ich schlecht geschlafen [[habe]].", "I'm tired because I slept badly."],
   ["trennbares Verb: zusammen am Ende", "Ich bin müde, weil ich so früh [[aufstehe]].", "I'm tired because I get up so early."],
   ["Nebensatz zuerst: Verb, Verb", "Wenn ich Zeit [[habe]], [[komme]] ich vorbei.", "If I have time, I'll come by."]]},
  {w:"Fragen und Imperativ", en:"questions and commands", tag:"Verb zuerst?", ex:[
   ["W-Frage: Verb auf Position 2", "Wann [[beginnt]] der Kurs?", "When does the course start?"],
   ["Ja/Nein-Frage: Verb auf Position 1", "[[Kommst]] du morgen mit?", "Are you coming along tomorrow?"],
   ["Imperativ (du): Verb auf Position 1, kein Subjekt", "[[Ruf]] mich bitte heute Abend an!", "Please call me this evening!"],
   ["Imperativ (Sie): Verb + Sie", "[[Nehmen]] Sie bitte Platz.", "Please take a seat."]]}
 ]}
]},

{id:"kasus", de:"Die vier Fälle", en:"The four cases",
 intro:"Der Kasus zeigt, welche Rolle ein Nomen im Satz hat. Man sieht ihn vor allem am Artikel: der → den → dem → des. Frag nach dem Nomen: Wer/Was? (Nominativ), Wen/Was? (Akkusativ), Wem? (Dativ), Wessen? (Genitiv). Im Gespräch ersetzt man den Genitiv oft durch von + Dativ.",
 groups:[
 {g:"Die Fälle", gen:"the cases", items:[
  {w:"Nominativ", en:"nominative (subject)", tag:"Wer? Was?", ex:[
   ["Subjekt: wer oder was handelt", "[[Der Zug]] fährt um 8:15 Uhr ab.", "The train leaves at 8:15."],
   ["nach sein", "Mein Nachbar ist [[ein sehr netter Mann]].", "My neighbour is a very nice man."],
   ["nach werden (Beruf ohne Artikel)", "Meine Schwester wird nächstes Jahr [[Ärztin]].", "My sister will become a doctor next year."],
   ["nach bleiben", "Er bleibt trotz allem [[mein bester Freund]].", "Despite everything he remains my best friend."],
   ["Anrede im Brief", "[[Lieber Herr Müller]], vielen Dank für Ihre Nachricht.", "Dear Mr Müller, thank you very much for your message."]]},
  {w:"Akkusativ", en:"accusative (direct object)", tag:"Wen? Was?", ex:[
   ["direktes Objekt", "Ich suche [[einen neuen Job]] in der Nähe.", "I'm looking for a new job nearby."],
   ["nach Akkusativ-Präposition (für, ohne, durch …)", "Das Geschenk ist für [[meinen Vater]].", "The present is for my father."],
   ["Zeitangabe ohne Präposition", "[[Jeden Morgen]] fahre ich mit dem Rad zur Arbeit.", "Every morning I cycle to work."],
   ["Wohin? nach Wechselpräposition", "Ich lege die Schlüssel auf [[den Tisch]].", "I put the keys on the table."],
   ["es gibt + Akkusativ", "In unserer Straße gibt es [[einen neuen Supermarkt]].", "There's a new supermarket in our street."]]},
  {w:"Dativ", en:"dative (indirect object)", tag:"Wem?", ex:[
   ["indirektes Objekt: wer etwas bekommt", "Ich schenke [[meiner Mutter]] Blumen.", "I'm giving my mother flowers."],
   ["Verb mit Dativ", "Kannst du [[mir]] bitte beim Umzug helfen?", "Can you please help me with the move?"],
   ["nach Dativ-Präposition (aus, bei, mit, nach …)", "Nach [[der Arbeit]] gehe ich ins Fitnessstudio.", "After work I go to the gym."],
   ["Wo? nach Wechselpräposition", "Die Schlüssel liegen auf [[dem Tisch]].", "The keys are on the table."],
   ["Adjektiv + Dativ (zu kalt, egal …)", "Das ist [[mir]] egal, entscheide du.", "I don't mind, you decide."]]},
  {w:"Genitiv", en:"genitive (possession)", tag:"Wessen?", ex:[
   ["Besitz / Zugehörigkeit", "Das ist das Auto [[meines Bruders]].", "That is my brother's car."],
   ["Name + s (ohne Apostroph)", "[[Annas]] Wohnung liegt direkt am Park.", "Anna's flat is right by the park."],
   ["nach Genitiv-Präposition", "Wegen [[des Streiks]] fallen heute viele Züge aus.", "Because of the strike many trains are cancelled today."],
   ["feste Zeitangabe", "[[Eines Tages]] möchte ich ein eigenes Haus haben.", "One day I'd like to have my own house."],
   ["gesprochen: von + Dativ statt Genitiv", "Das ist das Auto [[von meinem Bruder]].", "That's my brother's car (spoken)."]]}
 ]},
 {g:"Artikel in allen Fällen", gen:"articles in every case", items:[
  {w:"der / die / das", en:"the (definite article)", tag:"bestimmter Artikel", ex:[
   ["maskulin: der – den – dem – des", "[[Der]] Chef ruft [[den]] Kunden sofort zurück.", "The boss calls the customer back immediately."],
   ["feminin: die – die – der – der", "Ich gebe [[der]] Kollegin [[die]] Unterlagen.", "I give the documents to my (female) colleague."],
   ["neutral: das – das – dem – des", "Das Ende [[des]] Films war überraschend.", "The end of the film was surprising."],
   ["Plural: die – die – den (+ n) – der", "Die Lehrerin hilft [[den Kindern]] bei den Aufgaben.", "The teacher helps the children with the exercises."]]},
  {w:"ein / eine", en:"a, an (indefinite article)", tag:"unbestimmter Artikel", ex:[
   ["Nominativ: ein – eine – ein", "Da drüben steht [[ein]] Taxi.", "There's a taxi over there."],
   ["Akkusativ: nur maskulin ändert sich (einen)", "Ich brauche [[einen]] Termin beim Arzt.", "I need an appointment at the doctor's."],
   ["Dativ: einem – einer – einem", "Wir wohnen in [[einer]] kleinen Wohnung.", "We live in a small flat."],
   ["Genitiv: eines – einer – eines", "Sie ist die Tochter [[eines]] bekannten Arztes.", "She is the daughter of a well-known doctor."],
   ["kein Plural: das Nomen steht ohne Artikel", "Wir haben [[Kinder]], aber keinen Hund.", "We have children but no dog."]]},
  {w:"kein / mein", en:"no / my (negative and possessive)", tag:"Negativ- und Possessivartikel", ex:[
   ["kein = nicht + ein", "Ich habe heute leider [[keine]] Zeit.", "Unfortunately I have no time today."],
   ["kein hat einen Plural", "In der Innenstadt gibt es [[keine]] freien Parkplätze.", "There are no free parking spaces in the city centre."],
   ["mein, dein, sein … Endungen wie ein", "Ich rufe gleich [[meinen]] Chef an.", "I'll call my boss right away."],
   ["Dativ Plural: -en", "Er wohnt noch bei [[seinen]] Eltern.", "He still lives with his parents."],
   ["sein (er / es) oder ihr (sie)?", "Maria besucht [[ihren]] Bruder, Tom besucht [[seine]] Schwester.", "Maria visits her brother, Tom visits his sister."]]}
 ]}
]},

{id:"pron", de:"Pronomen", en:"Pronouns",
 intro:"Pronomen ersetzen Nomen, damit man sie nicht wiederholt. Personalpronomen ändern ihre Form nach dem Kasus: er – ihn – ihm. Achtung: er, sie, es stehen auch für Sachen – der Tisch → er. Dazu kommen man, jemand, etwas, nichts und der / die / das als betontes Pronomen.",
 groups:[
 {g:"Personalpronomen", gen:"personal pronouns", items:[
  {w:"ich – mich – mir", en:"I – me – (to) me", tag:"1. Person", ex:[
   ["Nominativ: Subjekt", "[[Ich]] arbeite seit zwei Jahren als Pflegerin.", "I've been working as a carer for two years."],
   ["Akkusativ: direktes Objekt", "Kannst du [[mich]] morgen vom Bahnhof abholen?", "Can you pick me up from the station tomorrow?"],
   ["Dativ: bei Dativverben", "Das Essen schmeckt [[mir]] sehr gut.", "I like the food very much."],
   ["nach Präposition", "Hast du eine Nachricht für [[mich]]?", "Do you have a message for me?"],
   ["wir – uns – uns", "Unsere Nachbarn haben [[uns]] zum Grillen eingeladen.", "Our neighbours invited us to a barbecue."]]},
  {w:"er – ihn – ihm", en:"he – him – (to) him", tag:"3. Person", ex:[
   ["er = der-Wort, auch für Sachen", "Der Kühlschrank ist kaputt, [[er]] kühlt nicht mehr.", "The fridge is broken, it doesn't cool any more."],
   ["ihn = Akkusativ maskulin", "Wo ist mein Schlüssel? Ich finde [[ihn]] nicht.", "Where's my key? I can't find it."],
   ["ihm = Dativ maskulin und neutral", "Mein Sohn hat Geburtstag, ich kaufe [[ihm]] ein Fahrrad.", "It's my son's birthday, I'm buying him a bike."],
   ["es = das-Wort", "Das Buch ist spannend, du musst [[es]] unbedingt lesen.", "The book is exciting, you really must read it."],
   ["ihnen = Dativ Plural", "Die Kinder sind müde, ich lese [[ihnen]] noch eine Geschichte vor.", "The children are tired, I'll read them one more story."]]},
  {w:"sie / Sie", en:"she / they / you (polite)", tag:"sie, sie oder Sie?", ex:[
   ["sie (feminin): Verb mit -t", "Meine Kollegin ist krank, [[sie]] kommt heute nicht.", "My colleague is ill, she isn't coming today."],
   ["sie (Plural): Verb mit -en", "Meine Eltern kommen am Samstag, [[sie]] bleiben eine Woche.", "My parents are coming on Saturday, they're staying a week."],
   ["Sie = höfliche Anrede, immer groß", "Können [[Sie]] mir bitte helfen?", "Could you help me, please?"],
   ["Ihnen = höflich im Dativ", "Ich danke [[Ihnen]] für Ihre Geduld.", "Thank you for your patience."],
   ["ihr = Dativ feminin", "Ich habe [[ihr]] gestern eine Nachricht geschrieben.", "I wrote her a message yesterday."]]},
  {w:"Reihenfolge", en:"word order of pronouns", tag:"Pronomen im Mittelfeld", ex:[
   ["Pronomen vor Nomen", "Ich gebe [[ihm]] morgen das Buch zurück.", "I'll give him the book back tomorrow."],
   ["zwei Pronomen: Akkusativ vor Dativ", "Das Buch? Ich gebe [[es ihm]] morgen zurück.", "The book? I'll give it back to him tomorrow."],
   ["Pronomen direkt nach dem Verb", "Morgen rufe ich [[dich]] noch einmal an.", "I'll call you again tomorrow."],
   ["Nebensatz: Pronomen direkt nach der Konjunktion", "Ich weiß nicht, ob [[sie]] heute noch kommt.", "I don't know whether she's still coming today."]]}
 ]},
 {g:"Andere Pronomen", gen:"other pronouns", items:[
  {w:"man", en:"one, you, people", tag:"alle / die Leute", ex:[
   ["allgemeine Regel", "In Deutschland trennt [[man]] den Müll.", "In Germany people separate their rubbish."],
   ["Verbot / Erlaubnis", "Hier darf [[man]] nicht rauchen.", "You're not allowed to smoke here."],
   ["Frage nach dem Weg", "Wie kommt [[man]] am schnellsten zum Hauptbahnhof?", "What's the quickest way to the main station?"],
   ["Akkusativ: einen", "Dieser Lärm macht [[einen]] ganz verrückt.", "This noise drives you crazy."],
   ["Dativ: einem", "So ein Fehler kann [[einem]] leicht passieren.", "A mistake like that can easily happen to you."]]},
  {w:"jemand / niemand", en:"somebody / nobody", tag:"eine Person / keine Person", ex:[
   ["jemand = eine unbekannte Person", "Hat [[jemand]] meine Brille gesehen?", "Has anyone seen my glasses?"],
   ["niemand = keine Person", "Am Wochenende ist [[niemand]] im Büro.", "Nobody is in the office at the weekend."],
   ["Akkusativ: niemanden / jemanden", "Ich bin neu hier und kenne noch [[niemanden]].", "I'm new here and don't know anybody yet."],
   ["Dativ: jemandem", "Hast du das schon [[jemandem]] erzählt?", "Have you told anyone about it yet?"]]},
  {w:"etwas / nichts / alles", en:"something / nothing / everything", tag:"Sachen", ex:[
   ["etwas = irgendeine Sache", "Möchtest du [[etwas]] trinken?", "Would you like something to drink?"],
   ["nichts = keine Sache", "Ich habe heute noch [[nichts]] gegessen.", "I haven't eaten anything yet today."],
   ["alles = alle Sachen", "Danke, ich habe [[alles]] verstanden.", "Thanks, I understood everything."],
   ["etwas / nichts + Adjektiv: groß, Endung -es", "Gibt es [[etwas Neues]] im Büro?", "Is there anything new at the office?"],
   ["alles + Adjektiv: Endung -e", "[[Alles Gute]] zum Geburtstag!", "Happy birthday!"]]},
  {w:"der / die / das", en:"this one, that one (stressed)", tag:"betont: der da", ex:[
   ["statt er / sie / es, betont (gesprochen)", "Kennst du den neuen Kollegen? – Ja, [[der]] ist sehr nett.", "Do you know the new colleague? – Yes, he's very nice."],
   ["Akkusativ, oft auf Position 1", "Wie findest du die Jacke? – [[Die]] finde ich zu teuer.", "What do you think of the jacket? – I find it too expensive."],
   ["Dativ: dem / der / denen", "Frag doch Paul, [[dem]] kannst du vertrauen.", "Just ask Paul, you can trust him."],
   ["das = die ganze Aussage", "Du hast die Stelle bekommen? [[Das]] ist ja toll!", "You got the job? That's great!"]]},
  {w:"einer / keiner / welche", en:"one / none / some", tag:"statt ein + Nomen", ex:[
   ["einer / eine / eins = ein + Nomen", "Hast du einen Stift? – Ja, hier ist [[einer]].", "Do you have a pen? – Yes, here's one."],
   ["keiner / keine / keins", "Brauchen Sie eine Tüte? – Nein danke, ich brauche [[keine]].", "Do you need a bag? – No thanks, I don't need one."],
   ["Akkusativ maskulin: einen / keinen", "Ich suche einen Parkplatz, aber ich finde [[keinen]].", "I'm looking for a parking space but I can't find one."],
   ["Plural: welche", "Haben wir noch Eier? – Ja, im Kühlschrank sind noch [[welche]].", "Do we have any eggs left? – Yes, there are some in the fridge."]]}
 ]}
]},

{id:"unreg", de:"Unregelmäßige Verben", en:"Irregular verbs",
 intro:"Unregelmäßige (starke) Verben ändern ihren Vokal im Präteritum und oft im Partizip II, das auf -en endet: fahren – fuhr – gefahren. Viele ändern den Vokal auch im Präsens bei du und er / sie / es: ich fahre, du fährst. Am leichtesten lernt man sie in Gruppen mit demselben Vokalwechsel.",
 groups:[
 {g:"Vokalwechsel im Präsens", gen:"vowel change in the present", items:[
  {w:"a → ä", en:"a → ä (you drive, he sleeps)", tag:"fahren, schlafen, tragen", ex:[
   ["nur bei du und er / sie / es", "[[Fährst]] du morgen mit dem Auto?", "Are you driving tomorrow?"],
   ["ich und wir: kein Wechsel", "Wir [[fahren]] im Sommer an die Ostsee.", "We're going to the Baltic Sea in the summer."],
   ["schlafen: er schläft", "Das Baby [[schläft]] endlich.", "The baby is finally asleep."],
   ["laufen: au → äu", "Mein Sohn [[läuft]] jeden Morgen zur Schule.", "My son walks to school every morning."],
   ["tragen, waschen, lassen", "Sie [[trägt]] heute ein rotes Kleid.", "She's wearing a red dress today."]]},
  {w:"e → i", en:"e → i (you give, he takes)", tag:"geben, nehmen, sprechen, essen", ex:[
   ["geben: du gibst, er gibt", "[[Gibst]] du mir bitte das Salz?", "Can you pass me the salt, please?"],
   ["nehmen: er nimmt (mit mm)", "Er [[nimmt]] jeden Tag den Bus um sieben.", "He takes the seven o'clock bus every day."],
   ["sprechen: sie spricht", "Meine Kollegin [[spricht]] drei Sprachen.", "My colleague speaks three languages."],
   ["essen: du isst, er isst", "Was [[isst]] du am liebsten?", "What do you like eating most?"],
   ["Imperativ mit du: auch i", "[[Hilf]] mir bitte mal mit den Taschen!", "Please help me with the bags!"]]},
  {w:"e → ie", en:"e → ie (he reads, you see)", tag:"lesen, sehen, empfehlen", ex:[
   ["lesen: er liest", "Mein Vater [[liest]] jeden Morgen die Zeitung.", "My father reads the newspaper every morning."],
   ["sehen: du siehst", "[[Siehst]] du das Schild da vorne?", "Can you see the sign up ahead?"],
   ["empfehlen: sie empfiehlt", "Die Ärztin [[empfiehlt]] mir mehr Bewegung.", "The doctor recommends more exercise for me."],
   ["Imperativ mit du: lies! sieh!", "[[Lies]] die Aufgabe bitte noch einmal genau.", "Please read the task carefully once more."]]}
 ]},
 {g:"Präteritum und Perfekt", gen:"simple past and perfect", items:[
  {w:"ei – ie – ie", en:"stay – stayed – stayed (ei – ie – ie)", tag:"bleiben, schreiben, steigen", ex:[
   ["bleiben – blieb – ist geblieben", "Wir [[sind]] zwei Wochen in Italien [[geblieben]].", "We stayed in Italy for two weeks."],
   ["schreiben – schrieb – hat geschrieben", "Früher [[schrieb]] ich meinen Freunden lange Briefe.", "I used to write long letters to my friends."],
   ["einsteigen – stieg ein – ist eingestiegen", "Ich [[bin]] in den falschen Zug [[eingestiegen]].", "I got on the wrong train."],
   ["leihen – lieh – hat geliehen", "Ich [[habe]] mir das Buch in der Bibliothek [[geliehen]].", "I borrowed the book from the library."],
   ["scheinen – schien – hat geschienen", "Gestern [[schien]] den ganzen Tag die Sonne.", "Yesterday the sun shone all day."]]},
  {w:"ei – i – i", en:"cut – cut – cut (ei – i – i)", tag:"schneiden, streiten, greifen", ex:[
   ["schneiden – schnitt – hat geschnitten", "Ich [[habe]] mich beim Kochen in den Finger [[geschnitten]].", "I cut my finger while cooking."],
   ["streiten – stritt – hat gestritten", "Die Kinder [[stritten]] sich um das Spielzeug.", "The children argued over the toy."],
   ["greifen – griff – hat gegriffen", "Der Dieb [[griff]] plötzlich nach meiner Tasche.", "The thief suddenly grabbed my bag."],
   ["leiden – litt – hat gelitten", "Sie [[hat]] lange unter Rückenschmerzen [[gelitten]].", "She suffered from back pain for a long time."]]},
  {w:"i – a – u / o", en:"find – found – found (i – a – u)", tag:"finden, trinken, beginnen", ex:[
   ["finden – fand – hat gefunden", "Endlich [[habe]] ich eine Wohnung [[gefunden]].", "I've finally found a flat."],
   ["trinken – trank – hat getrunken", "Er [[trank]] seinen Kaffee immer ohne Zucker.", "He always drank his coffee without sugar."],
   ["beginnen – begann – hat begonnen (mit o!)", "Der Kurs [[hat]] schon um neun Uhr [[begonnen]].", "The course already started at nine o'clock."],
   ["singen – sang – hat gesungen", "Auf der Feier [[sangen]] alle zusammen.", "At the party everyone sang together."],
   ["gewinnen – gewann – hat gewonnen", "Unsere Mannschaft [[hat]] das Spiel [[gewonnen]].", "Our team won the game."]]},
  {w:"e – a – o", en:"speak – spoke – spoken (e – a – o)", tag:"sprechen, helfen, treffen", ex:[
   ["sprechen – sprach – hat gesprochen", "Ich [[habe]] gestern mit meinem Vermieter [[gesprochen]].", "I spoke to my landlord yesterday."],
   ["helfen – half – hat geholfen", "Mein Nachbar [[half]] mir beim Umzug.", "My neighbour helped me with the move."],
   ["treffen – traf – hat getroffen", "Wir [[haben]] uns zufällig im Supermarkt [[getroffen]].", "We met by chance in the supermarket."],
   ["nehmen – nahm – hat genommen", "Sie [[nahm]] ihren Schirm und ging los.", "She took her umbrella and set off."],
   ["sterben – starb – ist gestorben", "Mein Großvater [[ist]] letztes Jahr [[gestorben]].", "My grandfather died last year."]]},
  {w:"a – u / ie – a", en:"drive – drove – driven (a – u – a)", tag:"fahren, tragen, schlafen, fallen", ex:[
   ["fahren – fuhr – ist gefahren", "Letzten Sommer [[fuhren]] wir mit dem Zug nach Wien.", "Last summer we went to Vienna by train."],
   ["tragen – trug – hat getragen", "Er [[hat]] die schweren Kisten allein [[getragen]].", "He carried the heavy boxes by himself."],
   ["schlafen – schlief – hat geschlafen", "Ich [[habe]] heute Nacht schlecht [[geschlafen]].", "I slept badly last night."],
   ["fallen – fiel – ist gefallen", "Das Glas [[fiel]] vom Tisch und zerbrach.", "The glass fell off the table and broke."],
   ["gefallen – gefiel – hat gefallen", "Der Film [[hat]] mir sehr gut [[gefallen]].", "I liked the film very much."]]},
  {w:"Gemischte Verben", en:"mixed verbs (bring, think, know)", tag:"bringen, denken, wissen, kennen", ex:[
   ["bringen – brachte – hat gebracht", "Der Postbote [[hat]] ein Paket für dich [[gebracht]].", "The postman brought a parcel for you."],
   ["denken – dachte – hat gedacht", "Ich [[dachte]], der Laden hat heute geöffnet.", "I thought the shop was open today."],
   ["wissen – wusste – hat gewusst", "Das [[habe]] ich wirklich nicht [[gewusst]].", "I really didn't know that."],
   ["kennen – kannte – hat gekannt", "Früher [[kannte]] ich hier jede Straße.", "I used to know every street here."],
   ["rennen – rannte – ist gerannt", "Ich [[bin]] zum Bus [[gerannt]], aber er war schon weg.", "I ran to the bus, but it had already gone."]]}
 ]}
]},

{id:"dawo", de:"da(r)- und wo(r)-", en:"darauf, worüber …",
 intro:"Bei Sachen ersetzt man Präposition + Pronomen durch da(r) + Präposition: Ich warte auf den Bus → Ich warte darauf. Für Fragen nach Sachen: wo(r) + Präposition: Worauf wartest du? Bei Personen bleibt die Präposition: auf ihn, auf wen? Das r kommt vor einem Vokal: dar-auf, wor-über.",
 groups:[
 {g:"da(r)- für Sachen", gen:"da(r)- for things", items:[
  {w:"darauf", en:"on it, for it", tag:"warten auf, sich freuen auf", ex:[
   ["ersetzt auf + Sache", "Wartest du auf den Bus? – Ja, ich warte schon lange [[darauf]].", "Are you waiting for the bus? – Yes, I've been waiting for it for a long time."],
   ["sich freuen auf: etwas kommt noch", "Bald ist Urlaub, ich freue mich schon sehr [[darauf]].", "The holidays are soon, I'm really looking forward to them."],
   ["darauf + dass-Satz", "Ich warte [[darauf]], dass du dich endlich entschuldigst.", "I'm waiting for you to finally apologise."],
   ["darauf + zu-Infinitiv", "Ich freue mich [[darauf]], dich bald wiederzusehen.", "I'm looking forward to seeing you again soon."],
   ["örtlich: auf dieser Sache", "Da steht ein Tisch, und [[darauf]] liegt dein Handy.", "There's a table, and your phone is on it."]]},
  {w:"darüber", en:"about it", tag:"sprechen über, sich ärgern über", ex:[
   ["sprechen über + Sache", "Das Problem ist ernst, wir müssen [[darüber]] sprechen.", "The problem is serious, we need to talk about it."],
   ["sich ärgern über", "Der Zug war wieder zu spät, und ich habe mich sehr [[darüber]] geärgert.", "The train was late again and I was very annoyed about it."],
   ["darüber + dass-Satz", "Ich freue mich [[darüber]], dass du gekommen bist.", "I'm happy that you came."],
   ["Person: über ihn / sie – nicht darüber", "Kennst du den neuen Chef? Alle sprechen über [[ihn]].", "Do you know the new boss? Everyone is talking about him."]]},
  {w:"damit", en:"with it", tag:"zufrieden mit, anfangen mit", ex:[
   ["mit + Sache", "Das ist mein neues Handy, ich bin sehr zufrieden [[damit]].", "This is my new phone, I'm very happy with it."],
   ["anfangen mit + zu-Infinitiv", "Ich habe [[damit]] angefangen, jeden Morgen zu joggen.", "I've started jogging every morning."],
   ["Werkzeug: womit? – damit", "Hier ist ein Messer, [[damit]] kannst du das Brot schneiden.", "Here's a knife, you can cut the bread with it."],
   ["Achtung: damit als Konjunktion (Ziel)", "Ich spreche langsam, [[damit]] mich alle verstehen.", "I speak slowly so that everyone understands me."]]},
  {w:"dafür / dagegen", en:"for it / against it", tag:"sich interessieren für, sein für / gegen", ex:[
   ["sich interessieren für", "Fußball? Nein, ich interessiere mich nicht [[dafür]].", "Football? No, I'm not interested in it."],
   ["dafür sein = zustimmen", "Wer möchte einen neuen Spielplatz? – Ich bin [[dafür]]!", "Who wants a new playground? – I'm in favour!"],
   ["dagegen sein = ablehnen", "Die Miete soll steigen, aber alle Mieter sind [[dagegen]].", "The rent is supposed to go up, but all the tenants are against it."],
   ["sich bedanken für", "Du hast mir so geholfen, ich danke dir [[dafür]].", "You helped me so much, thank you for it."],
   ["dafür = als Ausgleich", "Die Wohnung ist klein, [[dafür]] ist sie sehr günstig.", "The flat is small, but on the other hand it's very cheap."]]},
  {w:"daran / davon", en:"of it / from it", tag:"denken an, träumen von", ex:[
   ["denken an + Sache", "Der Termin ist morgen, denk bitte [[daran]]!", "The appointment is tomorrow, please remember it!"],
   ["sich erinnern an", "Unsere erste Reise? Ich erinnere mich gern [[daran]].", "Our first trip? I like remembering it."],
   ["träumen von", "Ein eigenes Haus – [[davon]] träume ich schon lange.", "A house of my own – I've been dreaming of that for a long time."],
   ["abhängen von + Nebensatz", "Ob wir grillen, hängt [[davon]] ab, wie das Wetter wird.", "Whether we have a barbecue depends on what the weather is like."],
   ["davon = von dieser Menge", "Der Kuchen ist lecker, möchtest du ein Stück [[davon]]?", "The cake is delicious, would you like a piece of it?"]]}
 ]},
 {g:"wo(r)- für Fragen", gen:"wo(r)- for questions", items:[
  {w:"worauf / woran", en:"on what / of what?", tag:"Frage nach einer Sache", ex:[
   ["worauf = auf + was", "[[Worauf]] wartest du noch? Lass uns gehen!", "What are you still waiting for? Let's go!"],
   ["woran = an + was", "[[Woran]] denkst du gerade?", "What are you thinking about right now?"],
   ["indirekte Frage: Verb am Ende", "Ich weiß nicht, [[worauf]] er sich so freut.", "I don't know what he's so happy about."],
   ["Person: an wen? auf wen?", "[[An wen]] denkst du gerade?", "Who are you thinking of right now?"]]},
  {w:"worüber / womit / wofür", en:"about what / with what / for what?", tag:"Frage nach einer Sache", ex:[
   ["worüber = über + was", "[[Worüber]] habt ihr so lange gesprochen?", "What did you talk about for so long?"],
   ["womit = mit + was", "[[Womit]] fährst du zur Arbeit? – Mit dem Fahrrad.", "How do you get to work? – By bike."],
   ["wofür = für + was", "[[Wofür]] brauchst du so viel Geld?", "What do you need so much money for?"],
   ["Person: mit wem? für wen?", "[[Mit wem]] hast du so lange telefoniert?", "Who were you on the phone with for so long?"],
   ["als Relativwort nach alles / etwas", "Das ist alles, [[wofür]] ich mich interessiere.", "That's everything I'm interested in."]]}
 ]}
]},

{id:"es", de:"Das Wort „es“", en:"The word „es“",
 intro:"„es“ ist nicht nur das Pronomen für das-Wörter. Es steht auch als formales Subjekt ohne Bedeutung (es regnet, es ist spät), in festen Ausdrücken (es gibt, es geht um, es tut mir leid) und als Platzhalter auf Position 1 vor einem Nebensatz.",
 groups:[
 {g:"Funktionen", gen:"uses", items:[
  {w:"es als Pronomen", en:"es as a pronoun (it)", tag:"das-Wort", ex:[
   ["Nominativ: statt das + Nomen", "Wo ist das Kind? – [[Es]] spielt im Garten.", "Where's the child? – He / she is playing in the garden."],
   ["Akkusativ", "Das Buch ist toll, ich habe [[es]] in zwei Tagen gelesen.", "The book is great, I read it in two days."],
   ["für einen ganzen Satz", "Er kommt morgen nicht, er hat [[es]] mir gestern gesagt.", "He isn't coming tomorrow, he told me yesterday."],
   ["Wer ist da? – Es ist …", "Es klingelt. – [[Es]] ist bestimmt der Postbote.", "The doorbell's ringing. – It's probably the postman."]]},
  {w:"Wetter, Zeit, Geräusche", en:"weather, time, sounds", tag:"es regnet, es ist spät", ex:[
   ["Wetterverben", "Heute regnet [[es]] den ganzen Tag.", "It's raining all day today."],
   ["Uhrzeit", "Beeil dich, [[es]] ist schon halb acht!", "Hurry up, it's already half past seven!"],
   ["hell / dunkel, Jahreszeit", "Im Dezember wird [[es]] schon um vier Uhr dunkel.", "In December it gets dark as early as four o'clock."],
   ["Geräusche", "[[Es]] klopft an der Tür.", "There's a knock at the door."],
   ["Temperatur im Raum", "Mach bitte das Fenster zu, hier zieht [[es]].", "Please close the window, there's a draught in here."]]},
  {w:"es gibt", en:"there is / there are", tag:"es gibt + Akkusativ", ex:[
   ["vorhanden sein", "In der Nähe [[gibt es]] einen guten Bäcker.", "There's a good bakery nearby."],
   ["Frage: Gibt es …?", "[[Gibt es]] hier in der Nähe eine Apotheke?", "Is there a pharmacy near here?"],
   ["Essen: Was gibt es heute?", "Was [[gibt es]] heute zum Mittagessen?", "What's for lunch today?"],
   ["verneint: es gibt kein …", "Leider [[gibt es]] keine Tickets mehr.", "Unfortunately there are no tickets left."],
   ["Präteritum: es gab", "Früher [[gab es]] hier ein Kino.", "There used to be a cinema here."]]},
  {w:"feste Ausdrücke", en:"fixed phrases", tag:"es geht, es tut mir leid …", ex:[
   ["Wie geht es + Dativ?", "Wie [[geht es]] Ihnen heute?", "How are you today?"],
   ["es geht um = das Thema ist", "In dem Artikel [[geht es]] um bezahlbare Wohnungen.", "The article is about affordable housing."],
   ["es tut mir leid", "[[Es tut mir leid]], dass ich zu spät bin.", "I'm sorry I'm late."],
   ["es kommt darauf an", "Kommst du mit? – [[Es kommt darauf an]], wie lange ich arbeiten muss.", "Are you coming along? – It depends on how long I have to work."],
   ["es eilig haben", "Ich kann nicht warten, ich habe [[es]] eilig.", "I can't wait, I'm in a hurry."]]},
  {w:"es als Platzhalter", en:"es as a placeholder", tag:"Position 1", ex:[
   ["es + Adjektiv + zu-Infinitiv", "[[Es]] ist wichtig, pünktlich zu sein.", "It's important to be on time."],
   ["es + Verb + dass-Satz", "[[Es]] freut mich, dass Sie sich für die Stelle interessieren.", "I'm pleased that you're interested in the position."],
   ["es + Adjektiv + dass-Satz", "[[Es]] ist schade, dass du nicht kommen kannst.", "It's a pity you can't come."],
   ["Passiv ohne Subjekt: es auf Position 1", "[[Es]] wird in unserer Straße viel gebaut.", "There's a lot of building going on in our street."],
   ["es fällt weg, wenn etwas anderes auf Position 1 steht", "In unserer Straße [[wird]] viel gebaut.", "A lot of building is going on in our street."]]}
 ]}
]},

{id:"partikel", de:"Modalpartikeln", en:"Modal particles",
 intro:"Modalpartikeln wie doch, mal, ja, denn, eben / halt, eigentlich, schon und wohl machen gesprochenes Deutsch freundlicher und natürlicher. Sie haben keine feste Übersetzung, sondern zeigen eine Haltung: Überraschung, Ungeduld, Freundlichkeit. Sie stehen im Mittelfeld, nie auf Position 1, und sind unbetont.",
 groups:[
 {g:"Im Gespräch", gen:"in conversation", items:[
  {w:"mal", en:"just, once (softens a request)", tag:"freundlich, locker", ex:[
   ["Bitte: klingt weniger streng", "Kannst du [[mal]] das Fenster aufmachen?", "Could you open the window?"],
   ["doch mal: freundlicher Vorschlag", "Probier doch [[mal]] den Kuchen, der ist super!", "Why don't you try the cake, it's great!"],
   ["= einmal (irgendwann)", "Warst du schon [[mal]] in Hamburg?", "Have you ever been to Hamburg?"],
   ["Warte mal / Moment mal", "Warte [[mal]], ich komme mit!", "Wait a moment, I'm coming with you!"]]},
  {w:"doch", en:"but, after all, do (…!)", tag:"Widerspruch, Vorschlag, Erinnerung", ex:[
   ["Antwort auf eine negative Frage: ja", "Kommst du nicht mit? – [[Doch]], natürlich!", "Aren't you coming? – Yes, of course!"],
   ["Imperativ: Aufforderung, Einladung", "Setz dich [[doch]]!", "Do sit down!"],
   ["Erinnerung: das weißt du eigentlich", "Das habe ich dir [[doch]] schon gesagt!", "I've already told you that!"],
   ["Wunsch mit Konjunktiv II", "Wenn [[doch]] schon Wochenende wäre!", "If only it were the weekend already!"],
   ["als Konjunktion: aber", "Er wollte kommen, [[doch]] dann wurde er krank.", "He wanted to come, but then he fell ill."]]},
  {w:"ja", en:"you know, really", tag:"bekannt, Überraschung", ex:[
   ["das wissen wir beide", "Du kennst ihn [[ja]], er kommt immer zu spät.", "You know him, he's always late."],
   ["Überraschung", "Du bist [[ja]] schon da!", "Oh, you're already here!"],
   ["betont im Imperativ: Warnung", "Mach das [[ja]] nicht noch einmal!", "Don't you dare do that again!"],
   ["Begründung: das sieht man doch", "Nimm einen Schirm mit, es regnet [[ja]].", "Take an umbrella, it's raining after all."]]},
  {w:"denn", en:"then, so (in questions)", tag:"in Fragen", ex:[
   ["Frage klingt interessierter, freundlicher", "Wie heißt du [[denn]]?", "So what's your name?"],
   ["Frage mit Überraschung", "Was ist [[denn]] hier passiert?", "What on earth happened here?"],
   ["Ungeduld / Vorwurf", "Wo bleibst du [[denn]]? Wir warten schon!", "Where have you got to? We're waiting!"],
   ["als Konjunktion: weil (Position 0)", "Ich bleibe heute zu Hause, [[denn]] ich bin krank.", "I'm staying at home today because I'm ill."]]},
  {w:"eben / halt", en:"just, simply (that's how it is)", tag:"nicht zu ändern", ex:[
   ["so ist es, man kann nichts ändern", "Der Zug fällt aus? Dann nehmen wir [[eben]] den Bus.", "The train is cancelled? Then we'll just take the bus."],
   ["halt = eben (vor allem im Süden)", "Das ist [[halt]] so, da kann man nichts machen.", "That's just the way it is, nothing can be done."],
   ["eben = gerade eben (Zeit)", "Ich bin [[eben]] erst nach Hause gekommen.", "I've only just got home."],
   ["Eben! = genau (Zustimmung)", "Das ist viel zu teuer. – [[Eben]]! Das sage ich ja.", "That's far too expensive. – Exactly! That's what I'm saying."]]},
  {w:"eigentlich", en:"actually, by the way", tag:"nebenbei, im Grunde", ex:[
   ["Frage: Themenwechsel, nebenbei", "Wie alt bist du [[eigentlich]]?", "By the way, how old are you?"],
   ["im Grunde, aber …", "[[Eigentlich]] wollte ich heute joggen, aber es regnet.", "I actually wanted to go jogging today, but it's raining."],
   ["genau genommen", "Das ist [[eigentlich]] gar nicht so schwer.", "It's actually not that difficult."],
   ["höfliche Kritik", "Du solltest [[eigentlich]] schon seit einer Stunde hier sein.", "You were actually supposed to be here an hour ago."]]},
  {w:"schon / wohl", en:"surely / probably", tag:"Beruhigung, Vermutung", ex:[
   ["schon: Beruhigung", "Keine Sorge, das klappt [[schon]].", "Don't worry, it'll work out."],
   ["schon: früher als gedacht", "Bist du [[schon]] fertig?", "Are you finished already?"],
   ["schon … aber: Einschränkung", "Das Hotel ist [[schon]] schön, aber leider zu laut.", "The hotel is nice enough, but unfortunately too noisy."],
   ["wohl: Vermutung", "Er ist nicht im Büro, er ist [[wohl]] krank.", "He's not in the office, he's probably ill."],
   ["wohl mit Futur: starke Vermutung", "Sie wird [[wohl]] noch im Stau stehen.", "She's probably still stuck in traffic."]]}
 ]}
]},

{id:"adv", de:"Adverbien", en:"Adverbs",
 intro:"Adverbien sagen, wann, wie oft, wo und wie etwas passiert, oder was der Sprecher denkt (leider, hoffentlich). Sie haben nie eine Endung. Viele können auf Position 1 stehen – dann kommt sofort das Verb: Morgen habe ich frei.",
 groups:[
 {g:"Zeit und Häufigkeit", gen:"time and frequency", items:[
  {w:"gestern / heute / morgen", en:"yesterday / today / tomorrow", tag:"Wann?", ex:[
   ["Position 1: das Verb folgt sofort", "[[Morgen]] habe ich einen Arzttermin.", "Tomorrow I have a doctor's appointment."],
   ["im Mittelfeld", "Ich habe [[gestern]] sehr lange gearbeitet.", "I worked very late yesterday."],
   ["mit Tageszeit: gestern Abend, morgen früh", "[[Gestern Abend]] waren wir im Kino.", "Last night we went to the cinema."],
   ["übermorgen / vorgestern", "[[Übermorgen]] fliegen wir in den Urlaub.", "The day after tomorrow we're flying off on holiday."],
   ["heutzutage = in unserer Zeit", "[[Heutzutage]] bezahlt man fast alles mit dem Handy.", "Nowadays you pay for almost everything with your phone."]]},
  {w:"früher / damals / bald", en:"in the past / back then / soon", tag:"Vergangenheit und Zukunft", ex:[
   ["früher: in der Vergangenheit, Gewohnheit", "[[Früher]] habe ich in einer kleinen Stadt gewohnt.", "I used to live in a small town."],
   ["damals: zu dieser einen Zeit", "Ich kam 2019 nach Deutschland. [[Damals]] sprach ich kein Wort Deutsch.", "I came to Germany in 2019. Back then I didn't speak a word of German."],
   ["neulich: vor kurzer Zeit", "[[Neulich]] habe ich deinen Bruder in der Stadt getroffen.", "I met your brother in town recently."],
   ["inzwischen: seitdem hat sich etwas geändert", "[[Inzwischen]] verstehe ich fast alles.", "By now I understand almost everything."],
   ["bald: in kurzer Zeit", "Die Prüfung ist [[bald]], ich muss mehr lernen.", "The exam is soon, I need to study more."]]},
  {w:"immer / oft / nie", en:"always / often / never", tag:"Wie oft?", ex:[
   ["immer = 100 %", "Er kommt [[immer]] pünktlich zur Arbeit.", "He always comes to work on time."],
   ["meistens / oft", "Am Wochenende schlafe ich [[meistens]] lange.", "At the weekend I usually sleep in."],
   ["manchmal / ab und zu", "[[Manchmal]] koche ich für die ganze Familie.", "Sometimes I cook for the whole family."],
   ["selten", "Wir gehen nur [[selten]] ins Restaurant.", "We rarely go to restaurants."],
   ["nie = 0 %", "Unter der Woche habe ich [[nie]] Zeit zum Lesen.", "During the week I never have time to read."]]},
  {w:"zuerst / dann / zum Schluss", en:"first / then / finally", tag:"Reihenfolge", ex:[
   ["zuerst: der erste Schritt", "[[Zuerst]] müssen Sie das Formular ausfüllen.", "First you have to fill in the form."],
   ["danach / dann: der nächste Schritt", "[[Danach]] gehen Sie bitte zu Schalter drei.", "After that please go to counter three."],
   ["anschließend: direkt danach", "Wir essen zusammen, [[anschließend]] gehen wir spazieren.", "We'll eat together and then go for a walk."],
   ["zum Schluss / am Ende", "[[Zum Schluss]] bekommen Sie Ihre Bescheinigung.", "Finally you get your certificate."]]},
  {w:"schon / noch / erst", en:"already / still / only (not until)", tag:"früher oder später als gedacht", ex:[
   ["schon: früher als erwartet", "Es ist sechs Uhr, und du bist [[schon]] wach?", "It's six o'clock and you're already awake?"],
   ["noch: es dauert weiter", "Leise, meine Tochter schläft [[noch]].", "Quiet, my daughter is still asleep."],
   ["erst: später als erwartet", "Der Zug kommt heute [[erst]] um zehn.", "The train isn't coming until ten today."],
   ["erst: weniger als erwartet", "Ich lerne [[erst]] seit sechs Monaten Deutsch.", "I've only been learning German for six months."],
   ["noch nicht / nicht mehr", "Ich habe die Rechnung [[noch nicht]] bezahlt.", "I haven't paid the bill yet."]]}
 ]},
 {g:"Ort, Art und Meinung", gen:"place, manner and opinion", items:[
  {w:"hier / dort / draußen", en:"here / there / outside", tag:"Wo?", ex:[
   ["hier = wo ich bin", "Wohnen Sie schon lange [[hier]]?", "Have you lived here long?"],
   ["dort / da = an einem anderen Ort", "Siehst du das Café? [[Dort]] treffen wir uns.", "Can you see the café? We'll meet there."],
   ["oben / unten", "Die Toiletten sind [[unten]] im Keller.", "The toilets are downstairs in the basement."],
   ["drinnen / draußen", "Bei dem Wetter bleiben wir lieber [[drinnen]].", "In this weather we'd rather stay inside."],
   ["überall / nirgends", "Ich habe meine Brille [[überall]] gesucht.", "I've looked for my glasses everywhere."]]},
  {w:"hin / her", en:"towards / away (where to? where from?)", tag:"Wohin? Woher?", ex:[
   ["hin = weg vom Sprecher", "Das Konzert ist toll, gehst du auch [[hin]]?", "The concert is great, are you going too?"],
   ["her = zum Sprecher", "Komm bitte mal [[her]]!", "Come here, please!"],
   ["woher / wohin: Fragen", "[[Woher]] kommen Sie?", "Where do you come from?"],
   ["her + Präposition: herunter, herein", "Komm bitte [[herunter]], das Essen ist fertig!", "Please come down, dinner is ready!"],
   ["hin und her", "Er läuft nervös im Flur [[hin und her]].", "He's pacing nervously up and down the hallway."]]},
  {w:"gern / lieber / am liebsten", en:"gladly / rather / most of all", tag:"was man mag", ex:[
   ["gern + Verb: etwas mögen", "Ich tanze sehr [[gern]].", "I love dancing."],
   ["lieber: Vergleich", "Ich trinke [[lieber]] Tee als Kaffee.", "I prefer tea to coffee."],
   ["am liebsten: Superlativ", "[[Am liebsten]] fahre ich mit dem Fahrrad.", "Most of all I like cycling."],
   ["nicht gern", "Ich telefoniere nicht [[gern]] auf Deutsch.", "I don't like phoning in German."],
   ["gern als Antwort", "Danke für die Hilfe! – [[Gern]] geschehen.", "Thanks for your help! – You're welcome."]]},
  {w:"leider / hoffentlich / zum Glück", en:"unfortunately / hopefully / luckily", tag:"Meinung des Sprechers", ex:[
   ["leider: schade", "[[Leider]] kann ich morgen nicht kommen.", "Unfortunately I can't come tomorrow."],
   ["hoffentlich: ich hoffe", "[[Hoffentlich]] wird das Wetter am Wochenende schön.", "Hopefully the weather will be nice at the weekend."],
   ["zum Glück: glücklicherweise", "[[Zum Glück]] habe ich den Zug noch erreicht.", "Luckily I still caught the train."],
   ["wahrscheinlich / vielleicht", "[[Wahrscheinlich]] komme ich etwas später.", "I'll probably be a bit late."],
   ["natürlich: selbstverständlich", "Kannst du mir helfen? – [[Natürlich]]!", "Can you help me? – Of course!"]]}
 ]}
]},

{id:"wort", de:"Wortbildung", en:"Word formation",
 intro:"Viele deutsche Wörter sind aus anderen gebaut. Die Endung zeigt oft das Genus: -ung, -heit, -keit sind immer feminin, -chen und -lein immer neutral, das + Infinitiv auch. Bei zusammengesetzten Nomen bestimmt das letzte Wort den Artikel: das Haus + die Tür = die Haustür.",
 groups:[
 {g:"Nomen bilden", gen:"making nouns", items:[
  {w:"-ung", en:"-ung nouns (-ing, -tion)", tag:"Verb → die …ung", ex:[
   ["wohnen → die Wohnung", "Wir suchen eine größere [[Wohnung]].", "We're looking for a bigger flat."],
   ["erfahren → die Erfahrung", "Haben Sie [[Erfahrung]] in der Pflege?", "Do you have experience in care?"],
   ["bestellen → die Bestellung", "Ihre [[Bestellung]] kommt morgen an.", "Your order will arrive tomorrow."],
   ["immer feminin, Plural -en", "Ich habe zwei [[Rechnungen]] noch nicht bezahlt.", "I haven't paid two bills yet."],
   ["sich entscheiden → die Entscheidung", "Das war eine schwierige [[Entscheidung]].", "That was a difficult decision."]]},
  {w:"-heit / -keit", en:"-heit / -keit nouns (-ness, -ity)", tag:"Adjektiv → die …heit / …keit", ex:[
   ["gesund → die Gesundheit", "[[Gesundheit]] ist das Wichtigste im Leben.", "Health is the most important thing in life."],
   ["frei → die Freiheit", "Für mich bedeutet ein Auto [[Freiheit]].", "For me a car means freedom."],
   ["-keit nach -ig, -lich, -bar", "Vielen Dank für Ihre [[Freundlichkeit]].", "Thank you very much for your kindness."],
   ["möglich → die Möglichkeit", "Gibt es eine [[Möglichkeit]], den Termin zu verschieben?", "Is there a way to move the appointment?"],
   ["pünktlich → die Pünktlichkeit", "In Deutschland ist [[Pünktlichkeit]] sehr wichtig.", "In Germany punctuality is very important."]]},
  {w:"das + Infinitiv", en:"verb as a noun (the …ing)", tag:"Verb als Nomen", ex:[
   ["immer neutral und groß geschrieben", "Das [[Lernen]] macht mit Freunden mehr Spaß.", "Learning is more fun with friends."],
   ["beim + Infinitiv: während", "Beim [[Kochen]] höre ich gern Musik.", "I like listening to music while cooking."],
   ["zum + Infinitiv: Zweck", "Ich brauche eine Brille zum [[Lesen]].", "I need glasses for reading."],
   ["mit Objekt: zusammengeschrieben", "Das [[Autofahren]] in der Stadt ist stressig.", "Driving in the city is stressful."]]},
  {w:"-er / -erin", en:"-er / -erin (people and devices)", tag:"Personen und Geräte", ex:[
   ["Verb → der …er (Person)", "Mein Bruder arbeitet als [[Fahrer]] bei der Post.", "My brother works as a driver for the post office."],
   ["-in: weibliche Form", "Die neue [[Lehrerin]] ist sehr geduldig.", "The new teacher is very patient."],
   ["Plural der weiblichen Form: -innen", "Alle [[Mitarbeiterinnen]] und Mitarbeiter bekommen einen Bonus.", "All employees get a bonus."],
   ["Geräte auf -er", "Der [[Drucker]] funktioniert schon wieder nicht.", "The printer isn't working again."],
   ["Stadt + er: Einwohner", "Viele [[Frankfurter]] fahren mit dem Rad zur Arbeit.", "Many people from Frankfurt cycle to work."]]},
  {w:"-chen / -lein", en:"-chen / -lein (little, always neuter)", tag:"klein und immer neutral", ex:[
   ["immer das: das Mädchen", "Das [[Mädchen]] geht in die zweite Klasse.", "The girl is in the second class."],
   ["oft mit Umlaut", "Wir haben ein kleines [[Häuschen]] am See.", "We have a little house by the lake."],
   ["feste Wörter", "Möchtest du noch ein [[Brötchen]]?", "Would you like another bread roll?"],
   ["-lein: seltener, eher geschrieben", "Ein kleines [[Vöglein]] singt vor dem Fenster.", "A little bird is singing outside the window."],
   ["ein bisschen = ein wenig", "Ich spreche ein [[bisschen]] Spanisch.", "I speak a little Spanish."]]},
  {w:"zusammengesetzte Nomen", en:"compound nouns", tag:"Nomen + Nomen", ex:[
   ["das letzte Wort bestimmt den Artikel: das Haus + die Tür", "Kannst du bitte die [[Haustür]] zumachen?", "Can you close the front door, please?"],
   ["mit Fugen-s", "Ich habe morgen ein [[Vorstellungsgespräch]].", "I have a job interview tomorrow."],
   ["mit Fugen-n / -en", "Die [[Straßenbahn]] fährt alle zehn Minuten.", "The tram runs every ten minutes."],
   ["Verb + Nomen: warten + das Zimmer", "Im [[Wartezimmer]] sitzen schon fünf Patienten.", "Five patients are already sitting in the waiting room."],
   ["Adjektiv + Nomen: alt + die Stadt", "Die [[Altstadt]] von Frankfurt ist sehr schön.", "Frankfurt's old town is very beautiful."]]}
 ]},
 {g:"Adjektive bilden", gen:"making adjectives", items:[
  {w:"un-", en:"un- (the opposite)", tag:"das Gegenteil", ex:[
   ["freundlich → unfreundlich", "Der Kellner war sehr [[unfreundlich]].", "The waiter was very unfriendly."],
   ["möglich → unmöglich", "Um diese Zeit ist es [[unmöglich]], einen Parkplatz zu finden.", "At this time it's impossible to find a parking space."],
   ["pünktlich → unpünktlich", "Die Bahn war diese Woche oft [[unpünktlich]].", "The trains were often late this week."],
   ["auch bei Nomen: die Unordnung", "In seinem Zimmer herrscht totale [[Unordnung]].", "His room is a complete mess."]]},
  {w:"-bar / -los / -ig / -lich", en:"-able / -less / -y / -ly adjectives", tag:"Adjektive aus Verb oder Nomen", ex:[
   ["-bar = man kann es …", "Das Wasser ist hier nicht [[trinkbar]].", "The water isn't drinkable here."],
   ["-los = ohne", "Seit drei Monaten ist er [[arbeitslos]].", "He has been unemployed for three months."],
   ["-ig: die Sonne → sonnig", "Morgen wird es [[sonnig]] und warm.", "Tomorrow will be sunny and warm."],
   ["-lich: die Person → persönlich", "Darf ich Ihnen eine [[persönliche]] Frage stellen?", "May I ask you a personal question?"],
   ["-voll = mit viel", "Das war ein [[wertvoller]] Tipp, danke!", "That was a valuable tip, thanks!"]]}
 ]}
]}
];
