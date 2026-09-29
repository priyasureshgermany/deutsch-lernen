/* B1 grammar topics for the Grammatik tab.

   topic → groups → items; every item has four or five examples, each showing
   a different use (case, meaning, position in the sentence, tense):
   [why, German, English]. [[…]] marks the words the item is about.
   tools/check-grammatik.mjs checks every item has at least four examples
   with distinct explanations, a marked word and an English line. */
window.GD = [
{id:"praep", de:"Präpositionen", en:"Prepositions",
 intro:"Die Präposition bestimmt den Kasus. Lerne sie in Gruppen: immer Dativ, immer Akkusativ, Wechselpräpositionen (Wo? → Dativ, Wohin? → Akkusativ) und Genitiv.",
 groups:[
 {g:"Immer mit Dativ", items:[
  {w:"aus", tag:"+ Dativ", ex:[
   ["Herkunft: Woher? (origin)", "Meine Kollegin kommt [[aus]] der Türkei.", "My colleague comes from Turkey."],
   ["aus einem Raum heraus (out of)", "Um sechs Uhr kommt er müde [[aus]] dem Büro.", "At six he comes out of the office, tired."],
   ["Material: Woraus? (made of)", "Die Tasche ist [[aus]] Leder und hat nur 30 Euro gekostet.", "The bag is made of leather and only cost 30 euros."],
   ["Grund, ohne Artikel, am Satzanfang (out of fear, love …)", "[[Aus]] Angst vor der Prüfung hat sie die ganze Nacht nicht geschlafen.", "Out of fear of the exam she didn't sleep all night."],
   ["in der Frage: Aus welchem …?", "[[Aus]] welchem Land kommen Sie?", "Which country do you come from?"]]},
  {w:"bei", tag:"+ Dativ", ex:[
   ["Arbeitsplatz: bei einer Firma (at a company)", "Ich arbeite seit drei Jahren [[bei]] einer Versicherung.", "I've been working at an insurance company for three years."],
   ["bei einer Person zu Hause (at someone's place)", "Am Wochenende übernachten die Kinder [[bei]] ihren Großeltern.", "At the weekend the children stay at their grandparents'."],
   ["beim Arzt, beim Friseur (at the doctor's)", "Ich war heute Morgen [[beim]] Zahnarzt.", "I was at the dentist's this morning."],
   ["beim + Tätigkeit, am Satzanfang (while doing)", "[[Beim]] Autofahren darf man nicht telefonieren.", "You mustn't make phone calls while driving."],
   ["Nähe zu einem Ort (near)", "Offenbach liegt direkt [[bei]] Frankfurt.", "Offenbach is right next to Frankfurt."]]},
  {w:"mit", tag:"+ Dativ", ex:[
   ["Verkehrsmittel: Womit? (by)", "Ich fahre jeden Tag [[mit]] der S-Bahn zur Arbeit.", "I take the S-Bahn to work every day."],
   ["zusammen mit einer Person (with)", "Kannst du bitte [[mit]] dem Vermieter über die Heizung sprechen?", "Can you please talk to the landlord about the heating?"],
   ["Mittel in der Frage (by card, with a pen)", "Kann ich hier [[mit]] Karte bezahlen?", "Can I pay by card here?"],
   ["Eigenschaft nach einem Nomen (with a balcony)", "Wir suchen eine Wohnung [[mit]] Balkon.", "We're looking for a flat with a balcony."],
   ["Alter, am Satzanfang (at the age of)", "[[Mit]] 18 Jahren bin ich nach Deutschland gekommen.", "I came to Germany at the age of 18."]]},
  {w:"nach", tag:"+ Dativ", ex:[
   ["Städte und Länder ohne Artikel (to)", "Nächsten Sommer fliegen wir [[nach]] Spanien.", "Next summer we are flying to Spain."],
   ["nach Hause, in der Frage (home)", "Wann kommst du heute [[nach]] Hause?", "When are you coming home today?"],
   ["Zeit, am Satzanfang (after)", "[[Nach]] dem Deutschkurs gehe ich meistens noch einkaufen.", "After the German course I usually go shopping."],
   ["Richtung: nach links, nach oben (to the left)", "Gehen Sie an der Ampel [[nach]] links.", "Turn left at the traffic lights."],
   ["nachgestellt: meiner Meinung nach (in my opinion)", "Meiner Meinung [[nach]] ist das eine gute Idee.", "In my opinion that's a good idea."]]},
  {w:"seit", tag:"+ Dativ", ex:[
   ["Dauer bis jetzt, Verb im Präsens (for)", "Ich lerne [[seit]] einem Jahr Deutsch.", "I have been learning German for a year."],
   ["Zeitpunkt, am Satzanfang (since)", "[[Seit]] dem Umzug habe ich viel weniger Stress.", "Since the move I have had much less stress."],
   ["Frage: Seit wann …? (since when / how long)", "[[Seit]] wann wohnen Sie in Deutschland?", "How long have you been living in Germany?"],
   ["im Nebensatz", "Mein Rücken tut weh, weil ich [[seit]] Stunden am Computer sitze.", "My back hurts because I've been sitting at the computer for hours."]]},
  {w:"von", tag:"+ Dativ", ex:[
   ["von einer Person (from)", "Ich habe gerade eine E-Mail [[von]] meinem Chef bekommen.", "I have just received an email from my boss."],
   ["Herkunft nach einem Nomen (the train from …)", "Der Zug [[von]] München hat 20 Minuten Verspätung.", "The train from Munich is 20 minutes late."],
   ["von … bis (from … to)", "Die Praxis ist [[von]] Montag [[bis]] Freitag geöffnet.", "The practice is open from Monday to Friday."],
   ["Passiv: von wem? (by)", "Das Formular muss [[von]] beiden Eltern unterschrieben werden.", "The form must be signed by both parents."],
   ["statt Genitiv, gesprochen (of, 's)", "Das ist das Auto [[von]] meinem Bruder.", "That's my brother's car."]]},
  {w:"zu", tag:"+ Dativ", ex:[
   ["Richtung zu Personen: zum = zu dem (to)", "Morgen muss ich [[zum]] Arzt, weil ich Rückenschmerzen habe.", "Tomorrow I have to go to the doctor because I have back pain."],
   ["Anlass, am Satzanfang (for my birthday)", "[[Zu]] meinem Geburtstag habe ich ein Fahrrad bekommen.", "I got a bike for my birthday."],
   ["feste Ausdrücke: zu Fuß, zu Hause", "Ich gehe jeden Tag [[zu]] Fuß zur Arbeit.", "I walk to work every day."],
   ["Mahlzeit: zum Frühstück (for breakfast)", "[[Zum]] Frühstück esse ich meistens Müsli.", "For breakfast I usually eat muesli."],
   ["nach dem Weg fragen: zur = zu der", "Entschuldigung, wie komme ich [[zur]] Post?", "Excuse me, how do I get to the post office?"]]},
  {w:"gegenüber", tag:"+ Dativ", ex:[
   ["Ort, vor dem Nomen (opposite)", "Die Apotheke ist direkt [[gegenüber]] dem Bahnhof.", "The pharmacy is directly opposite the station."],
   ["Ort, nach dem Nomen", "Die Bank liegt dem Rathaus [[gegenüber]].", "The bank is opposite the town hall."],
   ["mit Pronomen: immer danach", "Im Zug saß mir eine sehr nette Frau [[gegenüber]].", "A very nice woman sat opposite me on the train."],
   ["Verhalten zu Personen (towards)", "[[Gegenüber]] neuen Kollegen ist er immer sehr hilfsbereit.", "He is always very helpful towards new colleagues."]]},
  {w:"ab", tag:"+ Dativ", ex:[
   ["Zeit: ab jetzt / Zukunft (from … on)", "[[Ab]] nächster Woche arbeite ich nur noch 30 Stunden.", "From next week I will only work 30 hours."],
   ["Ort: Startpunkt (departing from)", "Der Zug fährt [[ab]] Frankfurt Hauptbahnhof um 8:15 Uhr.", "The train departs from Frankfurt main station at 8:15."],
   ["Alter (from the age of)", "Der Film ist erst [[ab]] 16 Jahren.", "The film is only for people aged 16 and over."],
   ["Preis (from … upwards)", "Doppelzimmer gibt es schon [[ab]] 80 Euro pro Nacht.", "Double rooms are available from 80 euros a night."]]}
 ]},
 {g:"Immer mit Akkusativ", items:[
  {w:"für", tag:"+ Akkusativ", ex:[
   ["für eine Person (for)", "Ich habe [[für]] meine Mutter einen Termin beim Arzt gemacht.", "I made a doctor's appointment for my mother."],
   ["Zeitraum (for a year)", "Wir haben die Wohnung [[für]] ein Jahr gemietet.", "We have rented the flat for a year."],
   ["Preis (for 200 euros)", "Ich habe das Fahrrad gebraucht [[für]] 200 Euro gekauft.", "I bought the bike second-hand for 200 euros."],
   ["Meinung, am Satzanfang (for me)", "[[Für]] mich ist Pünktlichkeit sehr wichtig.", "For me punctuality is very important."],
   ["Zweck (for the application)", "Ich brauche noch eine Kopie [[für]] den Antrag.", "I still need a copy for the application."]]},
  {w:"durch", tag:"+ Akkusativ", ex:[
   ["Ort: von einer Seite zur anderen (through)", "Wir sind [[durch]] den Park zum Bahnhof gelaufen.", "We walked through the park to the station."],
   ["Mittel, am Satzanfang (through, thanks to)", "[[Durch]] den Deutschkurs habe ich viele neue Leute kennengelernt.", "Through the German course I have met lots of new people."],
   ["Passiv: Ursache (by)", "Das alte Haus wurde [[durch]] ein Feuer zerstört.", "The old house was destroyed by a fire."],
   ["Rechnen (divided by)", "Zehn [[durch]] zwei ist fünf.", "Ten divided by two is five."]]},
  {w:"gegen", tag:"+ Akkusativ", ex:[
   ["gegen eine Krankheit (for, against)", "Ich habe in der Apotheke etwas [[gegen]] Kopfschmerzen gekauft.", "I bought something for headaches at the pharmacy."],
   ["ungefähre Uhrzeit (around)", "Wir kommen [[gegen]] 19 Uhr bei euch an.", "We will arrive at your place around 7 pm."],
   ["Meinung: dagegen sein (against)", "Viele Nachbarn sind [[gegen]] den neuen Parkplatz.", "Many neighbours are against the new car park."],
   ["Sport: Gegner (versus)", "Am Samstag spielt Frankfurt [[gegen]] Bayern München.", "On Saturday Frankfurt play against Bayern Munich."],
   ["Bewegung, Kontakt (into)", "Das Auto ist [[gegen]] einen Baum gefahren.", "The car drove into a tree."]]},
  {w:"ohne", tag:"+ Akkusativ", ex:[
   ["ohne Artikel, am Satzanfang (without)", "[[Ohne]] Termin kann man beim Bürgeramt leider nichts erledigen.", "Without an appointment you unfortunately can't get anything done at the citizens' office."],
   ["mit Artikel / Personen", "Wir fahren dieses Jahr [[ohne]] die Kinder in den Urlaub.", "This year we're going on holiday without the children."],
   ["ohne … zu + Infinitiv (without doing)", "Er ist gegangen, [[ohne]] sich [[zu]] verabschieden.", "He left without saying goodbye."],
   ["ohne dass + Nebensatz (without someone …)", "Er hat mein Auto genommen, [[ohne]] [[dass]] ich es wusste.", "He took my car without me knowing."]]},
  {w:"um", tag:"+ Akkusativ", ex:[
   ["Uhrzeit (at)", "Der Kurs beginnt [[um]] halb neun.", "The course starts at half past eight."],
   ["Ort: um … herum (around)", "Gehen Sie [[um]] die Ecke, dann sehen Sie die Post.", "Go around the corner, then you'll see the post office."],
   ["ungefähr: um die … (about)", "Ein guter Laptop kostet so [[um]] die 800 Euro.", "A good laptop costs about 800 euros."],
   ["Unterschied: um … gestiegen (by)", "Die Miete ist [[um]] 50 Euro gestiegen.", "The rent has gone up by 50 euros."],
   ["Verb mit um: sich kümmern um", "Wer kümmert sich [[um]] die Kinder?", "Who looks after the children?"]]},
  {w:"bis", tag:"+ Akkusativ", ex:[
   ["Frist: spätestens (by)", "Ich muss den Antrag [[bis]] Freitag abgeben.", "I have to hand in the application by Friday."],
   ["bis zu + Dativ: Strecke (as far as)", "Fahren Sie [[bis zum]] Bahnhof und steigen Sie dort um.", "Go as far as the station and change there."],
   ["von … bis: Arbeitszeit (from … to)", "Ich arbeite [[von]] 8 [[bis]] 16 Uhr.", "I work from 8 am to 4 pm."],
   ["Abschied (see you …)", "Tschüss, [[bis]] morgen!", "Bye, see you tomorrow!"]]}
 ]},
 {g:"Wechselpräpositionen: Wo? Dativ · Wohin? Akkusativ", items:[
  {w:"in", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (in)", "Mein Mann arbeitet [[in]] einem Krankenhaus.", "My husband works in a hospital."],
   ["Wohin? → Akkusativ: ins = in das (to)", "Am Samstag gehen wir [[ins]] Kino.", "On Saturday we're going to the cinema."],
   ["Zeit: Monat, Jahreszeit → im (in)", "[[Im]] Sommer fahren wir immer ans Meer.", "In summer we always go to the seaside."],
   ["Zeit: in + Dauer = nach dieser Zeit (in ten minutes)", "Der Zug kommt [[in]] zehn Minuten.", "The train arrives in ten minutes."],
   ["Länder mit Artikel: Wohin? → Akkusativ", "Nächstes Jahr ziehen wir [[in]] die Schweiz.", "Next year we are moving to Switzerland."]]},
  {w:"an", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ: senkrecht, an der Wand (on)", "Das Foto hängt [[an]] der Wand im Wohnzimmer.", "The photo is hanging on the wall in the living room."],
   ["Wohin? → Akkusativ: hängen, stellen", "Ich hänge den Kalender [[an]] die Wand.", "I hang the calendar on the wall."],
   ["Zeit: Tage und Datum → am (on)", "[[Am]] Montag habe ich frei.", "I'm off on Monday."],
   ["Wo? am Wasser (by, at)", "Wir machen jedes Jahr Urlaub [[an]] der Ostsee.", "We spend our holiday on the Baltic coast every year."],
   ["Wohin? ans Meer = an das", "In den Ferien fahren wir [[ans]] Meer.", "In the holidays we're going to the seaside."]]},
  {w:"auf", tag:"Wo? / Wohin? / Sprache", ex:[
   ["Wo? → Dativ: waagerecht, liegen (on)", "Dein Handy liegt [[auf]] dem Tisch.", "Your phone is lying on the table."],
   ["Wohin? → Akkusativ: legen (onto)", "Leg die Schlüssel bitte [[auf]] den Tisch.", "Please put the keys on the table."],
   ["Wo? bei Ereignissen: auf einer Party (at)", "Ich war gestern [[auf]] einer Hochzeit.", "Yesterday I was at a wedding."],
   ["Wohin? bei Ämtern: aufs = auf das (to)", "Morgen muss ich [[aufs]] Bürgeramt.", "Tomorrow I have to go to the citizens' office."],
   ["Sprache, in der Frage (in German)", "Wie heißt das [[auf]] Deutsch?", "What's that called in German?"]]},
  {w:"über", tag:"Wo? / Wohin? / Thema", ex:[
   ["Wo? → Dativ, am Satzanfang (above)", "[[Über]] dem Sofa hängt eine große Lampe.", "A big lamp hangs above the sofa."],
   ["Wohin? → Akkusativ (over, above)", "Ich hänge die neue Lampe [[über]] den Esstisch.", "I'm hanging the new lamp above the dining table."],
   ["Thema: über + Akkusativ (about)", "Wir haben lange [[über]] das Problem gesprochen.", "We talked about the problem for a long time."],
   ["Weg: über eine Stadt (via)", "Der Zug fährt [[über]] Köln nach Hamburg.", "The train goes to Hamburg via Cologne."],
   ["mehr als (over)", "Das Konzert hat [[über]] zwei Stunden gedauert.", "The concert lasted over two hours."]]},
  {w:"unter", tag:"Wo? / Wohin? / weniger", ex:[
   ["Wo? → Dativ (under)", "Die Katze schläft [[unter]] dem Bett.", "The cat is sleeping under the bed."],
   ["Wohin? → Akkusativ (under – movement)", "Der Ball ist [[unter]] das Auto gerollt.", "The ball rolled under the car."],
   ["weniger als (under, below)", "Kinder [[unter]] sechs Jahren fahren kostenlos.", "Children under six travel free."],
   ["zwischen vielen (among), am Satzanfang", "[[Unter]] den Teilnehmern waren viele Studenten.", "Among the participants there were many students."],
   ["Telefonnummer (on, at)", "Sie erreichen uns [[unter]] der Nummer 069 123456.", "You can reach us on 069 123456."]]},
  {w:"vor", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (in front of)", "Ich warte [[vor]] dem Eingang auf dich.", "I'll wait for you in front of the entrance."],
   ["Wohin? → Akkusativ: stellen", "Stell die Schuhe bitte [[vor]] die Tür.", "Please put the shoes outside the door."],
   ["Zeit: vor + Dativ = ago", "Ich habe [[vor]] drei Jahren angefangen, Deutsch zu lernen.", "I started learning German three years ago."],
   ["Zeit: früher als, am Satzanfang (before)", "[[Vor]] dem Essen wasche ich mir die Hände.", "Before eating I wash my hands."],
   ["Uhrzeit (to)", "Es ist zehn [[vor]] acht.", "It's ten to eight."]]},
  {w:"hinter", tag:"Wo? / Wohin?", ex:[
   ["Wo? → Dativ (behind)", "Der Parkplatz ist [[hinter]] dem Supermarkt.", "The car park is behind the supermarket."],
   ["Wohin? → Akkusativ: stellen", "Stell das Fahrrad bitte [[hinter]] das Haus.", "Please put the bike behind the house."],
   ["mit Pronomen, in der Frage", "Wer steht da [[hinter]] dir?", "Who's standing there behind you?"],
   ["übertragen: vorbei (behind me = over)", "Die schwere Prüfung liegt endlich [[hinter]] mir.", "The hard exam is finally behind me."]]},
  {w:"neben", tag:"Wo? / Wohin? / zusätzlich", ex:[
   ["Wo? → Dativ (next to)", "Die Bäckerei ist [[neben]] der Post.", "The bakery is next to the post office."],
   ["Wohin? → Akkusativ: sich setzen", "Darf ich mich [[neben]] Sie setzen?", "May I sit down next to you?"],
   ["zusätzlich, am Satzanfang (besides)", "[[Neben]] der Arbeit mache ich noch einen Deutschkurs.", "Besides work I'm also doing a German course."],
   ["Wo? bei Personen", "Im Kurs sitze ich immer [[neben]] meiner Freundin.", "In the course I always sit next to my friend."]]},
  {w:"zwischen", tag:"Wo? / Wohin? / Zeit", ex:[
   ["Wo? → Dativ (between)", "Das Café liegt [[zwischen]] dem Kino und der Bank.", "The café is between the cinema and the bank."],
   ["Wohin? → Akkusativ: stellen", "Ich stelle den Stuhl [[zwischen]] das Sofa und den Tisch.", "I put the chair between the sofa and the table."],
   ["Zeit (between … and …)", "Rufen Sie bitte [[zwischen]] 9 und 12 Uhr an.", "Please call between 9 and 12."],
   ["Beziehung, am Satzanfang", "[[Zwischen]] meinem Bruder und mir gibt es oft Streit.", "My brother and I often argue."]]}
 ]},
 {g:"Mit Genitiv", items:[
  {w:"wegen", tag:"+ Genitiv", ex:[
   ["Grund, geschrieben mit Genitiv (because of)", "[[Wegen]] des Streiks fahren heute keine Busse.", "Because of the strike there are no buses today."],
   ["gesprochen oft mit Dativ – im Test Genitiv", "[[Wegen]] dem schlechten Wetter bleiben wir zu Hause.", "Because of the bad weather we're staying at home."],
   ["im Satz, am Telefon (about, regarding)", "Ich rufe [[wegen]] Ihrer Anzeige an.", "I'm calling about your advert."],
   ["mit Pronomen: wegen mir (because of me)", "[[Wegen]] mir musst du nicht früher gehen.", "You don't have to leave early because of me."]]},
  {w:"trotz", tag:"+ Genitiv", ex:[
   ["Gegengrund, am Satzanfang (despite)", "[[Trotz]] des Regens sind wir spazieren gegangen.", "Despite the rain we went for a walk."],
   ["= obwohl + Nebensatz: Obwohl die Miete hoch ist …", "[[Trotz]] der hohen Miete wohne ich gern in der Stadt.", "Despite the high rent I like living in the city."],
   ["im Satz, nach dem Verb", "Er ist [[trotz]] seiner Erkältung zur Arbeit gegangen.", "He went to work despite his cold."],
   ["trotzdem = Adverb, kein Nomen danach", "Es hat geregnet. [[Trotzdem]] sind wir spazieren gegangen.", "It rained. We went for a walk anyway."]]},
  {w:"während", tag:"+ Genitiv / Konjunktion", ex:[
   ["Präposition + Genitiv, am Satzanfang (during)", "[[Während]] des Unterrichts muss das Handy aus sein.", "During the lesson the phone has to be off."],
   ["Präposition im Satz", "Ich war [[während]] der Ferien bei meinen Eltern.", "I was at my parents' during the holidays."],
   ["Konjunktion: gleichzeitig (while), Verb am Ende", "[[Während]] ich koche, deckt mein Sohn den Tisch.", "While I cook, my son sets the table."],
   ["Konjunktion: Gegensatz (whereas)", "Ich trinke gern Kaffee, [[während]] mein Mann nur Tee trinkt.", "I like coffee, whereas my husband only drinks tea."]]},
  {w:"statt", tag:"+ Genitiv", ex:[
   ["statt + Genitiv (instead of)", "[[Statt]] eines Autos habe ich mir ein E-Bike gekauft.", "Instead of a car I bought myself an e-bike."],
   ["statt … zu + Infinitiv (instead of doing)", "[[Statt]] [[zu]] lernen, hat er den ganzen Abend Serien geschaut.", "Instead of studying, he watched series all evening."],
   ["ohne Artikel, im Restaurant", "Kann ich [[statt]] Pommes einen Salat bekommen?", "Can I have a salad instead of chips?"],
   ["vor einer Zeitangabe (instead of today)", "Können wir uns morgen [[statt]] heute treffen?", "Can we meet tomorrow instead of today?"]]},
  {w:"innerhalb", tag:"+ Genitiv", ex:[
   ["Zeit: innerhalb von + Dativ (within)", "Bitte zahlen Sie die Rechnung [[innerhalb]] von 14 Tagen.", "Please pay the invoice within 14 days."],
   ["Zeit + Genitiv", "Der Brief kommt [[innerhalb]] einer Woche an.", "The letter arrives within a week."],
   ["Ort, am Satzanfang (inside)", "[[Innerhalb]] der Stadt darf man nur 50 km/h fahren.", "Within the city you may only drive at 50 km/h."],
   ["Organisation (within the company)", "Die Stelle wird zuerst [[innerhalb]] der Firma ausgeschrieben.", "The position is advertised within the company first."]]},
  {w:"außerhalb", tag:"+ Genitiv", ex:[
   ["Ort + Genitiv (outside)", "Wir wohnen [[außerhalb]] der Stadt, deshalb brauchen wir ein Auto.", "We live outside the city, so we need a car."],
   ["Zeit, am Satzanfang (outside of)", "[[Außerhalb]] der Öffnungszeiten erreichen Sie uns per E-Mail.", "Outside opening hours you can reach us by email."],
   ["als Adverb, ohne Nomen", "Das Hotel liegt etwas [[außerhalb]].", "The hotel is a little outside town."],
   ["außerhalb von + Dativ", "[[Außerhalb]] von Europa war ich noch nie.", "I've never been outside Europe."]]}
 ]}
]},

{id:"konj", de:"Konjunktionen", en:"Conjunctions & connectors",
 intro:"Wichtig ist die Position des Verbs: nach und/aber/oder/denn/sondern bleibt alles gleich (Position 0), nach weil/dass/obwohl … steht das Verb am Ende, nach deshalb/trotzdem … kommt das Verb sofort (Position 2).",
 groups:[
 {g:"Hauptsatz + Hauptsatz (Position 0)", items:[
  {w:"und", tag:"Position 0", ex:[
   ["gleiches Subjekt: nicht wiederholen", "Ich stehe um sechs Uhr auf [[und]] frühstücke mit meiner Familie.", "I get up at six and have breakfast with my family."],
   ["zwei Hauptsätze mit verschiedenen Subjekten", "Mein Mann kocht, [[und]] ich räume die Küche auf.", "My husband cooks and I tidy the kitchen."],
   ["nach und: ein anderes Wort auf Position 1", "Ich komme nach Hause, [[und]] dann koche ich.", "I come home and then I cook."],
   ["Aufzählung (and)", "Ich brauche noch Milch, Eier [[und]] Brot.", "I still need milk, eggs and bread."],
   ["zwei Nebensätze verbinden", "Ich hoffe, dass du kommst [[und]] dass du deine Frau mitbringst.", "I hope that you'll come and that you'll bring your wife."]]},
  {w:"aber", tag:"Position 0", ex:[
   ["Gegensatz zwischen zwei Sätzen (but)", "Die Wohnung ist schön, [[aber]] sie ist leider zu teuer.", "The flat is nice, but unfortunately it's too expensive."],
   ["im Satz nach dem Verb (however)", "Ich möchte gern kommen, habe [[aber]] keine Zeit.", "I'd like to come, but I don't have time."],
   ["zwischen Adjektiven", "Das Essen war einfach, [[aber]] sehr lecker.", "The food was simple but very tasty."],
   ["nach einem Punkt am Satzanfang", "Ich habe viel gelernt. [[Aber]] die Prüfung war trotzdem schwer.", "I studied a lot. But the exam was still hard."],
   ["Modalpartikel: Überraschung (really)", "Das ist [[aber]] eine schöne Wohnung!", "What a lovely flat!"]]},
  {w:"oder", tag:"Position 0", ex:[
   ["Auswahl zwischen Wörtern (or)", "Möchten Sie mit Karte [[oder]] bar bezahlen?", "Would you like to pay by card or cash?"],
   ["Auswahl zwischen Sätzen", "Wir gehen heute Abend ins Kino, [[oder]] wir bleiben zu Hause.", "We'll go to the cinema tonight, or we'll stay at home."],
   ["am Ende: Bestätigung (…, right?)", "Du kommst doch morgen, [[oder]]?", "You're coming tomorrow, aren't you?"],
   ["ungefähre Zahl (two or three)", "Die Reparatur dauert zwei [[oder]] drei Tage.", "The repair takes two or three days."]]},
  {w:"denn", tag:"Position 0", ex:[
   ["Grund = weil, aber Hauptsatz-Wortstellung", "Ich gehe heute nicht zur Arbeit, [[denn]] ich bin krank.", "I'm not going to work today, because I'm ill."],
   ["mit Modalverb: Verb auf Position 2", "Ich lerne jeden Tag, [[denn]] ich möchte die B1-Prüfung bestehen.", "I study every day because I want to pass the B1 exam."],
   ["mit Perfekt", "Ich bin sehr müde, [[denn]] ich habe schlecht geschlafen.", "I'm very tired because I slept badly."],
   ["Modalpartikel in Fragen (then, actually)", "Was machst du [[denn]] hier?", "What are you doing here, then?"]]},
  {w:"sondern", tag:"Position 0", ex:[
   ["Korrektur nach nicht (but rather)", "Ich komme nicht aus Polen, [[sondern]] aus Tschechien.", "I don't come from Poland but from the Czech Republic."],
   ["mit ganzem Satz", "Wir fahren nicht mit dem Auto, [[sondern]] wir nehmen den Zug.", "We're not going by car; we're taking the train instead."],
   ["nach kein", "Das ist kein Problem, [[sondern]] eine Chance.", "That's not a problem but an opportunity."],
   ["nicht nur … sondern auch", "Sie spricht [[nicht nur]] Deutsch, [[sondern auch]] Arabisch.", "She speaks not only German but also Arabic."]]}
 ]},
 {g:"Nebensatz: Verb am Ende", items:[
  {w:"weil", tag:"Verb am Ende", ex:[
   ["Nebensatz nach dem Hauptsatz (because)", "Ich lerne Deutsch, [[weil]] ich in Deutschland arbeiten möchte.", "I'm learning German because I want to work in Germany."],
   ["Nebensatz zuerst: dann Verb, Verb", "[[Weil]] der Bus Verspätung hatte, bin ich zu spät gekommen.", "Because the bus was late, I arrived late."],
   ["Modalverb ganz am Ende", "Ich kann heute nicht kommen, [[weil]] ich länger arbeiten muss.", "I can't come today because I have to work late."],
   ["trennbares Verb: zusammen am Ende", "Ich muss früh aufstehen, [[weil]] mein Zug um sechs Uhr abfährt.", "I have to get up early because my train leaves at six."],
   ["kurze Antwort auf Warum?", "Warum lernst du so viel? – [[Weil]] ich die Prüfung bestehen will.", "Why are you studying so much? – Because I want to pass the exam."]]},
  {w:"da", tag:"Verb am Ende / Adverb", ex:[
   ["Grund, oft am Satzanfang (since, as)", "[[Da]] ich morgen einen Termin habe, kann ich leider nicht kommen.", "Since I have an appointment tomorrow, unfortunately I can't come."],
   ["typisch im formellen Brief", "[[Da]] die Heizung seit einer Woche nicht funktioniert, bitte ich Sie, einen Handwerker zu schicken.", "As the heating hasn't worked for a week, I ask you to send a technician."],
   ["Adverb: da = hier / dort (there)", "Ist Herr Weber heute [[da]]?", "Is Mr Weber in today?"],
   ["Adverb der Zeit (then, at that moment)", "Ich kam nach Hause, und [[da]] klingelte das Telefon.", "I came home, and just then the phone rang."]]},
  {w:"obwohl", tag:"Verb am Ende", ex:[
   ["Nebensatz nach dem Hauptsatz (although)", "Ich gehe zur Arbeit, [[obwohl]] ich erkältet bin.", "I'm going to work although I have a cold."],
   ["Nebensatz zuerst, mit Perfekt", "[[Obwohl]] ich viel gelernt habe, war die Prüfung schwer.", "Although I studied a lot, the exam was hard."],
   ["mit Modalverb am Ende", "Er raucht auf dem Balkon, [[obwohl]] er es nicht darf.", "He smokes on the balcony although he's not allowed to."],
   ["gleiche Bedeutung mit trotzdem (Hauptsatz)", "Ich bin erkältet. [[Trotzdem]] gehe ich zur Arbeit.", "I have a cold. I'm going to work anyway."]]},
  {w:"dass", tag:"Verb am Ende", ex:[
   ["nach hoffen, denken, glauben, wissen", "Ich hoffe, [[dass]] du bald wieder gesund bist.", "I hope that you'll be well again soon."],
   ["nach „Es ist wichtig / schön …“", "Es ist wichtig, [[dass]] Sie den Antrag rechtzeitig abgeben.", "It's important that you hand in the application on time."],
   ["dass-Satz am Satzanfang", "[[Dass]] du gekommen bist, freut mich sehr.", "I'm very pleased that you came."],
   ["nach einem Nomen (the news that …)", "Ich habe die Nachricht bekommen, [[dass]] der Kurs ausfällt.", "I got the message that the course is cancelled."],
   ["indirekte Rede mit Modalverb", "Der Arzt sagt, [[dass]] ich mehr schlafen soll.", "The doctor says that I should sleep more."]]},
  {w:"ob", tag:"Verb am Ende", ex:[
   ["höfliche indirekte Ja/Nein-Frage (whether)", "Können Sie mir sagen, [[ob]] der Zug pünktlich ist?", "Can you tell me whether the train is on time?"],
   ["nach „Ich weiß nicht …“", "Ich weiß noch nicht, [[ob]] ich am Wochenende Zeit habe.", "I don't know yet whether I'll have time at the weekend."],
   ["ob … oder (whether … or)", "Es ist egal, [[ob]] du mit dem Bus [[oder]] mit dem Auto kommst.", "It doesn't matter whether you come by bus or by car."],
   ["ob-Satz am Satzanfang", "[[Ob]] ich morgen komme, weiß ich noch nicht.", "Whether I'm coming tomorrow, I don't know yet."]]},
  {w:"wenn", tag:"Verb am Ende", ex:[
   ["Bedingung (if)", "[[Wenn]] es morgen regnet, bleiben wir zu Hause.", "If it rains tomorrow, we'll stay at home."],
   ["immer wenn: wiederholt (whenever)", "Immer [[wenn]] ich meine Eltern besuche, kocht meine Mutter für mich.", "Whenever I visit my parents, my mother cooks for me."],
   ["Zeitpunkt in der Zukunft (when)", "[[Wenn]] ich mit dem Kurs fertig bin, suche ich eine neue Stelle.", "When I've finished the course, I'll look for a new job."],
   ["Hauptsatz zuerst, Imperativ", "Ruf mich bitte an, [[wenn]] du angekommen bist.", "Please call me when you've arrived."],
   ["irreal mit Konjunktiv II", "[[Wenn]] ich mehr Zeit hätte, würde ich mitkommen.", "If I had more time, I would come along."]]},
  {w:"als", tag:"Verb am Ende / Vergleich", ex:[
   ["einmal in der Vergangenheit, Nebensatz zuerst (when)", "[[Als]] ich nach Deutschland kam, konnte ich kein Wort Deutsch.", "When I came to Germany, I couldn't speak a word of German."],
   ["Hauptsatz zuerst, Perfekt", "Ich war sehr aufgeregt, [[als]] ich meine erste Wohnung bekommen habe.", "I was very excited when I got my first flat."],
   ["Vergleich nach Komparativ (than)", "Das Wetter ist heute viel besser [[als]] gestern.", "The weather is much better today than yesterday."],
   ["Rolle / Beruf (as)", "Ich arbeite seit zwei Jahren [[als]] Krankenpfleger.", "I've been working as a nurse for two years."]]},
  {w:"bevor", tag:"Verb am Ende", ex:[
   ["Nebensatz zuerst (before)", "[[Bevor]] ich zur Arbeit fahre, bringe ich die Kinder in die Schule.", "Before I drive to work, I take the children to school."],
   ["Anweisung, Nebensatz danach", "Bitte lesen Sie den Vertrag genau, [[bevor]] Sie ihn unterschreiben.", "Please read the contract carefully before you sign it."],
   ["trennbares Verb am Ende", "Ich rufe dich an, [[bevor]] ich losfahre.", "I'll call you before I set off."],
   ["mit Nomen: vor + Dativ statt bevor", "[[Vor]] der Arbeit gehe ich joggen.", "Before work I go jogging."]]},
  {w:"nachdem", tag:"Verb am Ende", ex:[
   ["Vergangenheit: + Plusquamperfekt, Hauptsatz Präteritum", "[[Nachdem]] ich die Prüfung bestanden hatte, feierte ich mit meinen Freunden.", "After I had passed the exam, I celebrated with my friends."],
   ["Gegenwart: + Perfekt, Hauptsatz Präsens", "[[Nachdem]] ich gegessen habe, mache ich einen kurzen Spaziergang.", "After I've eaten, I go for a short walk."],
   ["Hauptsatz zuerst", "Wir sind spazieren gegangen, [[nachdem]] der Regen aufgehört hatte.", "We went for a walk after the rain had stopped."],
   ["mit Nomen: nach + Dativ statt nachdem", "[[Nach]] dem Essen machen wir einen Spaziergang.", "After the meal we go for a walk."]]},
  {w:"seitdem", tag:"Verb am Ende / Position 1", ex:[
   ["Konjunktion, Nebensatz zuerst (since)", "[[Seitdem]] ich Sport mache, schlafe ich viel besser.", "Since I've been doing sport, I sleep much better."],
   ["Konjunktion, Hauptsatz zuerst", "Ich fühle mich viel besser, [[seitdem]] ich weniger Kaffee trinke.", "I feel much better since I've been drinking less coffee."],
   ["Adverb am Satzanfang: Verb sofort", "Ich habe 2022 geheiratet. [[Seitdem]] wohne ich in Hamburg.", "I got married in 2022. Since then I've lived in Hamburg."],
   ["mit Nomen: seit + Dativ", "[[Seit]] meinem Umzug fahre ich mit dem Fahrrad zur Arbeit.", "Since my move I've been cycling to work."]]},
  {w:"bis", tag:"Verb am Ende", ex:[
   ["Nebensatz danach (until)", "Warte bitte hier, [[bis]] ich zurückkomme.", "Please wait here until I come back."],
   ["Nebensatz zuerst", "[[Bis]] der Arzt kommt, müssen Sie noch etwas warten.", "Until the doctor comes, you'll have to wait a little."],
   ["Dauer bis zu einem Ereignis", "Es dauert noch zwei Wochen, [[bis]] der Handwerker kommt.", "It'll be another two weeks until the technician comes."],
   ["als Präposition, ohne Verb", "Ich bin [[bis]] Montag im Urlaub.", "I'm on holiday until Monday."]]},
  {w:"damit", tag:"Verb am Ende", ex:[
   ["Ziel, gleiches Subjekt – auch um … zu möglich", "Ich lerne jeden Abend, [[damit]] ich die Prüfung bestehe.", "I study every evening so that I pass the exam."],
   ["Ziel, verschiedene Subjekte → nur damit", "Ich erkläre es noch einmal, [[damit]] alle es verstehen.", "I'll explain it again so that everyone understands."],
   ["Nebensatz zuerst", "[[Damit]] wir pünktlich sind, fahren wir eine Stunde früher los.", "So that we're on time, we're setting off an hour earlier."],
   ["Achtung: damit = da + mit (with it), kein Nebensatz", "Ich habe ein neues Handy und bin sehr zufrieden [[damit]].", "I have a new phone and I'm very happy with it."]]},
  {w:"um … zu", tag:"Infinitiv", ex:[
   ["Ziel mit Infinitiv (in order to)", "Ich lerne jeden Abend, [[um]] die Prüfung [[zu]] bestehen.", "I study every evening in order to pass the exam."],
   ["am Satzanfang: dann Verb, Subjekt", "[[Um]] Geld [[zu]] sparen, fahre ich mit dem Fahrrad zur Arbeit.", "To save money, I cycle to work."],
   ["trennbares Verb: zu in der Mitte", "Ich stehe früh auf, [[um]] pünktlich [[anzukommen]].", "I get up early in order to arrive on time."],
   ["Antwort auf Wozu?", "Wozu brauchst du das Geld? – [[Um]] ein Auto [[zu]] kaufen.", "What do you need the money for? – To buy a car."]]},
  {w:"sodass", tag:"Verb am Ende", ex:[
   ["Folge (so that, with the result that)", "Es hat stark geregnet, [[sodass]] das Fußballspiel ausfallen musste.", "It rained heavily, so the football match had to be cancelled."],
   ["so + Adjektiv, dass (so … that)", "Ich war [[so]] müde, [[dass]] ich sofort eingeschlafen bin.", "I was so tired that I fell asleep straight away."],
   ["Folge mit Perfekt", "Der Zug hatte Verspätung, [[sodass]] ich den Anschluss verpasst habe.", "The train was late, so I missed my connection."],
   ["positive Folge mit Modalverb", "Ich habe ein Jahr gespart, [[sodass]] ich mir jetzt eine Reise leisten kann.", "I saved for a year, so now I can afford a trip."]]},
  {w:"falls", tag:"Verb am Ende", ex:[
   ["höfliche Bedingung, Nebensatz zuerst (if)", "[[Falls]] Sie Fragen haben, rufen Sie mich bitte an.", "If you have any questions, please call me."],
   ["für den Fall, dass (in case)", "Nimm einen Regenschirm mit, [[falls]] es regnet.", "Take an umbrella in case it rains."],
   ["mit Modalverb am Ende", "Ich nehme den Laptop mit, [[falls]] ich im Zug arbeiten muss.", "I'll take the laptop in case I have to work on the train."],
   ["formell: falls … sollten", "[[Falls]] Sie verhindert sein sollten, sagen Sie bitte ab.", "Should you be unable to attend, please cancel."]]},
  {w:"indem", tag:"Verb am Ende", ex:[
   ["Wie? Mittel (by doing)", "Man kann Energie sparen, [[indem]] man das Licht ausschaltet.", "You can save energy by switching off the light."],
   ["Lernstrategie beschreiben", "Ich verbessere mein Deutsch, [[indem]] ich jeden Tag Nachrichten höre.", "I improve my German by listening to the news every day."],
   ["kurze Antwort auf Wie?", "Wie lernt man am besten sprechen? – [[Indem]] man viel spricht.", "How do you best learn to speak? – By speaking a lot."],
   ["Nebensatz zuerst", "[[Indem]] wir weniger Auto fahren, schützen wir die Umwelt.", "By driving less, we protect the environment."]]}
 ]},
 {g:"Konnektoren: Verb sofort danach", items:[
  {w:"deshalb", tag:"Position 1", ex:[
   ["nach Komma am Satzanfang: dann Verb (therefore)", "Ich habe morgen eine Prüfung, [[deshalb]] gehe ich heute früh ins Bett.", "I have an exam tomorrow, so I'm going to bed early today."],
   ["im Satz, nach dem Verb", "Der Zug hatte Verspätung. Ich habe [[deshalb]] den Termin verpasst.", "The train was late. That's why I missed the appointment."],
   ["neuer Satz nach Punkt", "Ich habe keinen Führerschein. [[Deshalb]] fahre ich immer mit dem Bus.", "I don't have a driving licence. That's why I always take the bus."],
   ["gleiche Bedeutung: deswegen, darum", "Ich war krank, [[deswegen]] konnte ich nicht kommen.", "I was ill, which is why I couldn't come."]]},
  {w:"trotzdem", tag:"Position 1", ex:[
   ["am Satzanfang (nevertheless)", "Das Wetter war schlecht, [[trotzdem]] sind wir wandern gegangen.", "The weather was bad; nevertheless we went hiking."],
   ["im Satz, nach dem Verb", "Ich war sehr müde. Ich bin [[trotzdem]] zum Kurs gegangen.", "I was very tired. I still went to the course."],
   ["am Satzende, als Antwort", "Das ist sehr teuer. – Ich kaufe es [[trotzdem]].", "That's very expensive. – I'll buy it anyway."],
   ["nach und", "Er hat wenig Zeit und hilft mir [[trotzdem]].", "He has little time and still helps me."]]},
  {w:"außerdem", tag:"Position 1", ex:[
   ["am Satzanfang: noch ein Punkt (besides)", "Die Wohnung ist groß und hell. [[Außerdem]] hat sie einen Balkon.", "The flat is big and bright. It also has a balcony."],
   ["im Satz, nach dem Verb", "Die Stelle ist interessant. Sie ist [[außerdem]] gut bezahlt.", "The job is interesting. It's also well paid."],
   ["im formellen Brief: weitere Frage", "[[Außerdem]] möchte ich wissen, ob der Kurs auch am Wochenende stattfindet.", "I would also like to know whether the course also takes place at the weekend."],
   ["über sich erzählen (B1 Sprechen)", "Ich spreche Englisch und Spanisch. Ich lerne [[außerdem]] seit einem Jahr Deutsch.", "I speak English and Spanish. I've also been learning German for a year."]]},
  {w:"sonst", tag:"Position 1", ex:[
   ["sonst = wenn nicht (otherwise)", "Beeil dich, [[sonst]] verpassen wir den Bus.", "Hurry up, otherwise we'll miss the bus."],
   ["Warnung nach Imperativ", "Zieh dir eine Jacke an, [[sonst]] erkältest du dich.", "Put a jacket on, or you'll catch a cold."],
   ["sonst = normalerweise (usually)", "Heute ist der Bus pünktlich – [[sonst]] kommt er immer zu spät.", "Today the bus is on time – usually it's always late."],
   ["sonst noch = zusätzlich (anything else)", "Brauchen Sie [[sonst]] noch etwas?", "Do you need anything else?"]]},
  {w:"dann / danach", tag:"Position 1", ex:[
   ["Reihenfolge: zuerst …, dann … (then)", "Zuerst gehe ich einkaufen, [[dann]] koche ich.", "First I go shopping, then I cook."],
   ["danach = nach dieser Sache (afterwards)", "Wir haben zusammen gegessen. [[Danach]] sind wir ins Kino gegangen.", "We ate together. Afterwards we went to the cinema."],
   ["dann nach einem wenn-Satz", "Wenn du Zeit hast, [[dann]] komm doch vorbei.", "If you have time, then come over."],
   ["Anleitung in Schritten", "Füllen Sie zuerst das Formular aus. [[Danach]] gehen Sie zur Kasse.", "First fill in the form. After that, go to the cash desk."]]}
 ]},
 {g:"Zweiteilige Konjunktionen", items:[
  {w:"entweder … oder", tag:"zweiteilig", ex:[
   ["zwei Orte (either … or)", "Wir fahren im Urlaub [[entweder]] nach Italien [[oder]] nach Kroatien.", "On holiday we'll go either to Italy or to Croatia."],
   ["zwei ganze Sätze", "[[Entweder]] du hilfst mir jetzt, [[oder]] ich mache es allein.", "Either you help me now, or I'll do it alone."],
   ["zwei Subjekte: Verb passt zum nächsten", "[[Entweder]] mein Mann [[oder]] ich hole die Kinder ab.", "Either my husband or I will pick up the children."],
   ["zwei Zeitangaben", "Ich kann [[entweder]] am Dienstag [[oder]] am Donnerstag kommen.", "I can come either on Tuesday or on Thursday."]]},
  {w:"sowohl … als auch", tag:"zweiteilig", ex:[
   ["zwei Objekte (both … and)", "Sie spricht [[sowohl]] Englisch [[als auch]] Französisch.", "She speaks both English and French."],
   ["als Subjekt: Verb im Plural", "[[Sowohl]] die Kinder [[als auch]] die Eltern hatten viel Spaß.", "Both the children and the parents had lots of fun."],
   ["zwei Adjektive", "Die Arbeit ist [[sowohl]] interessant [[als auch]] gut bezahlt.", "The work is both interesting and well paid."],
   ["im Kurs / in der Schule", "Im Kurs üben wir [[sowohl]] Grammatik [[als auch]] Wortschatz.", "In the course we practise both grammar and vocabulary."]]},
  {w:"weder … noch", tag:"zweiteilig", ex:[
   ["zwei Objekte (neither … nor)", "Ich trinke [[weder]] Kaffee [[noch]] Tee.", "I drink neither coffee nor tea."],
   ["Nachteile beschreiben", "Die Wohnung hat [[weder]] einen Balkon [[noch]] einen Aufzug.", "The flat has neither a balcony nor a lift."],
   ["zwei Subjekte", "[[Weder]] der Bus [[noch]] die S-Bahn fährt heute.", "Neither the bus nor the S-Bahn is running today."],
   ["zwei Adjektive (Beschwerde)", "Das Hotelzimmer war [[weder]] sauber [[noch]] ruhig.", "The hotel room was neither clean nor quiet."]]},
  {w:"nicht nur … sondern auch", tag:"zweiteilig", ex:[
   ["zwei Adjektive (not only … but also)", "Er ist [[nicht nur]] freundlich, [[sondern auch]] sehr hilfsbereit.", "He is not only friendly but also very helpful."],
   ["zwei Subjekte", "[[Nicht nur]] die Miete, [[sondern auch]] die Nebenkosten sind gestiegen.", "Not only the rent but also the utility costs have gone up."],
   ["zwei Sätze: auch im zweiten Satz", "Er spricht [[nicht nur]] gut Deutsch, [[sondern]] er schreibt [[auch]] sehr gut.", "He not only speaks German well, he also writes very well."],
   ["zwei Orte", "Das Festival gibt es [[nicht nur]] in Berlin, [[sondern auch]] in Hamburg.", "The festival takes place not only in Berlin but also in Hamburg."]]},
  {w:"zwar … aber", tag:"zweiteilig", ex:[
   ["zwei Adjektive (it's true … but)", "Das Hotel war [[zwar]] teuer, [[aber]] sehr schön.", "The hotel was expensive, it's true, but very nice."],
   ["zwei Sätze, Meinung abwägen", "Ich habe [[zwar]] wenig Zeit, [[aber]] ich helfe dir gern.", "I don't have much time, but I'm happy to help you."],
   ["zwar am Satzanfang: Verb danach", "[[Zwar]] ist die Wohnung klein, [[aber]] sie liegt sehr zentral.", "The flat may be small, but it's very central."],
   ["mit Perfekt, Kritik im Brief", "Der Kurs hat mir [[zwar]] gefallen, [[aber]] er war zu teuer.", "I did like the course, but it was too expensive."]]},
  {w:"je … desto", tag:"zweiteilig", ex:[
   ["je + Komparativ, Verb am Ende – desto + Komparativ, Verb", "[[Je]] mehr ich übe, [[desto]] besser spreche ich.", "The more I practise, the better I speak."],
   ["Tipp / Regel formulieren", "[[Je]] früher Sie buchen, [[desto]] günstiger ist der Flug.", "The earlier you book, the cheaper the flight."],
   ["umso statt desto", "[[Je]] länger ich hier lebe, [[umso]] besser gefällt es mir.", "The longer I live here, the more I like it."],
   ["mit mehr + Nomen", "[[Je]] mehr Leute kommen, [[desto]] lustiger wird die Party.", "The more people come, the more fun the party will be."]]}
 ]}
]},

{id:"adj", de:"Adjektive", en:"Adjectives",
 intro:"Vor einem Nomen bekommt das Adjektiv eine Endung. Die Endung hängt vom Artikel ab: nach der/die/das (schwach), nach ein/kein/mein (gemischt), ohne Artikel (stark). Nach „sein“ gibt es keine Endung.",
 groups:[
 {g:"Endungen", items:[
  {w:"der / die / das + Adjektiv", tag:"schwache Endung", ex:[
   ["Nominativ Singular: -e", "Der [[neue]] Kollege kommt aus Italien.", "The new colleague comes from Italy."],
   ["Akkusativ maskulin: -en", "Hast du den [[neuen]] Kollegen schon kennengelernt?", "Have you met the new colleague yet?"],
   ["Akkusativ feminin / neutral: -e", "Ich nehme das [[rote]] Kleid.", "I'll take the red dress."],
   ["Dativ: immer -en", "Ich spreche gern mit der [[freundlichen]] Nachbarin.", "I like talking to the friendly neighbour."],
   ["Genitiv: immer -en", "Wegen des [[schlechten]] Wetters fällt das Fest aus.", "Because of the bad weather the festival is cancelled."]]},
  {w:"ein / kein / mein + Adjektiv", tag:"gemischte Endung", ex:[
   ["Nominativ maskulin: -er", "Das ist ein [[guter]] Vorschlag.", "That's a good suggestion."],
   ["Nominativ / Akkusativ neutral: -es", "Vielen Dank, das ist ein [[tolles]] Buch!", "Thank you, that's a great book!"],
   ["Akkusativ maskulin: -en", "Ich suche einen [[neuen]] Job.", "I'm looking for a new job."],
   ["Akkusativ feminin -e, Dativ -en", "Ich suche eine [[günstige]] Wohnung mit einem [[kleinen]] Balkon.", "I'm looking for an affordable flat with a small balcony."],
   ["kein / mein im Plural: -en", "Leider habe ich keine [[guten]] Nachrichten.", "Unfortunately I have no good news."]]},
  {w:"ohne Artikel + Adjektiv", tag:"starke Endung", ex:[
   ["neutral: -es (wie das)", "[[Frisches]] Obst ist gesund.", "Fresh fruit is healthy."],
   ["Akkusativ maskulin -en, Dativ feminin -er", "Ich trinke gern [[schwarzen]] Tee mit [[warmer]] Milch.", "I like drinking black tea with warm milk."],
   ["Plural Nominativ: -e", "[[Frische]] Brötchen gibt es ab 7 Uhr.", "Fresh rolls are available from 7 am."],
   ["Dativ Plural: -en (Briefschluss)", "Mit [[freundlichen]] Grüßen", "Kind regards"],
   ["Nominativ maskulin: -er", "[[Deutscher]] Kaffee ist oft sehr stark.", "German coffee is often very strong."]]},
  {w:"Plural + Adjektiv", tag:"Plural", ex:[
   ["nach die: -en", "Die [[neuen]] Nachbarn sind sehr nett.", "The new neighbours are very nice."],
   ["ohne Artikel, Nominativ: -e", "[[Neue]] Mitarbeiter bekommen am ersten Tag eine Einführung.", "New employees get an introduction on their first day."],
   ["ohne Artikel, Akkusativ: -e (Stellenanzeige)", "Wir suchen [[motivierte]] Mitarbeiter für unser Team.", "We're looking for motivated staff for our team."],
   ["nach Zahl, Dativ: -en", "Ich wohne mit zwei [[netten]] Kolleginnen zusammen.", "I live with two nice colleagues."]]},
  {w:"nach sein / werden / bleiben", tag:"keine Endung", ex:[
   ["nach sein: keine Endung", "Der Kaffee ist sehr [[heiß]].", "The coffee is very hot."],
   ["nach werden (to become)", "Im Herbst wird es früh [[dunkel]].", "In autumn it gets dark early."],
   ["nach bleiben (to stay)", "Das Wetter bleibt bis Sonntag [[sonnig]].", "The weather will stay sunny until Sunday."],
   ["beim Verb (Wie?): keine Endung", "Du sprichst schon sehr [[gut]] Deutsch.", "You already speak German very well."]]}
 ]},
 {g:"Vergleichen", items:[
  {w:"Komparativ", tag:"-er … als", ex:[
   ["nach sein: Komparativ + als", "Die neue Wohnung ist [[größer]] als die alte.", "The new flat is bigger than the old one."],
   ["vor dem Nomen: Komparativ + Endung", "Ich suche eine [[größere]] Wohnung.", "I'm looking for a bigger flat."],
   ["mit Umlaut: kalt → kälter", "Im Winter ist es hier viel [[kälter]] als in Spanien.", "In winter it's much colder here than in Spain."],
   ["immer + Komparativ (more and more)", "Die Mieten werden immer [[teurer]].", "Rents are getting more and more expensive."]]},
  {w:"Superlativ", tag:"am …sten", ex:[
   ["nach sein: am …sten", "Im Dezember sind die Tage [[am kürzesten]].", "In December the days are the shortest."],
   ["vor dem Nomen: der/die/das …ste", "Das war der [[schönste]] Tag meines Lebens.", "That was the most beautiful day of my life."],
   ["am besten = Ratschlag (best to …)", "[[Am besten]] fragen Sie an der Information.", "It's best to ask at the information desk."],
   ["mit Genitiv (… in Germany)", "Berlin ist die [[größte]] Stadt Deutschlands.", "Berlin is the largest city in Germany."]]},
  {w:"gut · gern · viel · hoch", tag:"unregelmäßig", ex:[
   ["gut – besser – am besten", "Mein Deutsch wird immer [[besser]].", "My German is getting better and better."],
   ["gern – lieber – am liebsten", "[[Am liebsten]] fahre ich mit dem Fahrrad zur Arbeit.", "Most of all I like cycling to work."],
   ["viel – mehr – am meisten", "Ich verdiene jetzt [[mehr]] als früher.", "I earn more now than before."],
   ["hoch – höher – am höchsten (c fällt weg)", "Die Preise sind dieses Jahr deutlich [[höher]].", "Prices are significantly higher this year."]]},
  {w:"so … wie / als", tag:"gleich / anders", ex:[
   ["gleich: so + Adjektiv + wie (as … as)", "Mein Bruder ist [[so]] groß [[wie]] ich.", "My brother is as tall as me."],
   ["anders: Komparativ + als (…er than)", "Mein Bruder ist [[größer als]] ich.", "My brother is taller than me."],
   ["nicht so … wie (not as … as)", "Das Hotel war [[nicht so]] gut [[wie]] im Prospekt.", "The hotel wasn't as good as in the brochure."],
   ["doppelt so … wie (twice as …)", "Die neue Wohnung ist [[doppelt so]] groß [[wie]] die alte.", "The new flat is twice as big as the old one."]]}
 ]},
 {g:"Adjektive mit Präposition", items:[
  {w:"stolz auf", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich bin sehr [[stolz auf]] meine Tochter.", "I'm very proud of my daughter."],
   ["Sache schon bekannt: darauf", "Sie hat die Prüfung bestanden und ist sehr [[stolz darauf]].", "She passed the exam and is very proud of it."],
   ["Frage nach einer Sache: worauf?", "[[Worauf]] bist du besonders [[stolz]]?", "What are you particularly proud of?"],
   ["Frage nach einer Person: auf wen?", "[[Auf]] wen bist du so [[stolz]]?", "Who are you so proud of?"]]},
  {w:"zufrieden mit", tag:"+ Dativ", ex:[
   ["mit Nomen", "Mein Chef ist [[mit]] meiner Arbeit sehr [[zufrieden]].", "My boss is very satisfied with my work."],
   ["Sache schon bekannt: damit", "Ich habe ein neues Handy und bin sehr [[zufrieden damit]].", "I have a new phone and I'm very happy with it."],
   ["Frage nach einer Sache: womit?", "[[Womit]] waren Sie nicht [[zufrieden]]?", "What weren't you satisfied with?"],
   ["verneint (Beschwerde)", "Wir sind mit dem Service leider gar nicht [[zufrieden]].", "Unfortunately we are not at all satisfied with the service."]]},
  {w:"interessiert an", tag:"+ Dativ", ex:[
   ["im Bewerbungsbrief", "Ich bin sehr [[an]] dieser Stelle [[interessiert]].", "I'm very interested in this position."],
   ["Frage nach einer Sache: woran?", "[[Woran]] bist du besonders [[interessiert]]?", "What are you particularly interested in?"],
   ["daran + zu-Infinitiv", "Ich bin sehr [[daran interessiert]], mein Deutsch zu verbessern.", "I'm very keen to improve my German."],
   ["Nomen: Interesse an + Dativ", "Ich habe großes [[Interesse an]] einem Praktikum.", "I'm very interested in an internship."]]},
  {w:"verantwortlich für", tag:"+ Akkusativ", ex:[
   ["über die Arbeit sprechen", "In unserer Firma bin ich [[für]] den Einkauf [[verantwortlich]].", "In our company I'm responsible for purchasing."],
   ["Frage: dafür", "Wer ist [[dafür verantwortlich]]?", "Who is responsible for that?"],
   ["für Personen", "Die Lehrerin ist während des Ausflugs [[für]] die Kinder [[verantwortlich]].", "The teacher is responsible for the children during the trip."],
   ["dafür + dass-Satz", "Ich bin [[dafür verantwortlich]], dass alle Rechnungen pünktlich bezahlt werden.", "I'm responsible for making sure all invoices are paid on time."]]},
  {w:"froh über", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich bin sehr [[froh über]] deine Hilfe.", "I'm very glad about your help."],
   ["mit dass-Satz", "Ich bin [[froh]], [[dass]] du gekommen bist.", "I'm glad that you came."],
   ["Frage: worüber?", "[[Worüber]] bist du so [[froh]]?", "What are you so happy about?"],
   ["Sache schon bekannt: darüber", "Ich habe die Stelle bekommen und bin sehr [[froh darüber]].", "I got the job and I'm very happy about it."]]},
  {w:"abhängig von", tag:"+ Dativ", ex:[
   ["mit Nomen", "Der Preis ist [[abhängig von]] der Jahreszeit.", "The price depends on the season."],
   ["vom = von dem, Adjektiv am Ende", "Ob wir grillen, ist [[vom]] Wetter [[abhängig]].", "Whether we have a barbecue depends on the weather."],
   ["von Personen abhängig", "Kleine Kinder sind [[von]] ihren Eltern [[abhängig]].", "Small children depend on their parents."],
   ["davon + Nebensatz", "Es ist [[davon abhängig]], wie viel Zeit ich habe.", "It depends on how much time I have."]]}
 ]}
]},

{id:"vpraep", de:"Verben mit Präposition", en:"Verbs with prepositions",
 intro:"Diese Verben haben eine feste Präposition – lerne sie zusammen. Für Sachen fragt man mit wo(r)- (Worauf?) und antwortet mit da(r)- (darauf), für Personen mit Präposition + wen/wem (Auf wen?).",
 groups:[
 {g:"B1-Verben", items:[
  {w:"warten auf", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Präsens", "Ich [[warte]] schon seit 20 Minuten [[auf]] den Bus.", "I've been waiting for the bus for 20 minutes."],
   ["Frage nach einer Sache: worauf?", "[[Worauf]] [[wartest]] du noch? Komm doch rein!", "What are you waiting for? Come on in!"],
   ["Frage nach einer Person: auf wen?", "[[Auf]] wen [[wartest]] du?", "Who are you waiting for?"],
   ["darauf + dass-Satz", "Ich [[warte darauf]], dass der Handwerker endlich kommt.", "I'm waiting for the technician to finally come."],
   ["Perfekt", "Wir haben zwei Monate [[auf]] einen Termin [[gewartet]].", "We waited two months for an appointment."]]},
  {w:"denken an / über", tag:"an + Akk. / über + Akk.", ex:[
   ["denken an: mit Nomen (think of)", "Ich [[denke]] oft [[an]] meine Familie in meiner Heimat.", "I often think of my family back home."],
   ["daran + zu-Infinitiv (remember to)", "Hast du [[daran]] [[gedacht]], die Tür abzuschließen?", "Did you remember to lock the door?"],
   ["Frage: woran?", "[[Woran]] [[denkst]] du gerade?", "What are you thinking about right now?"],
   ["Frage nach einer Person: an wen?", "[[An]] wen [[denkst]] du?", "Who are you thinking of?"],
   ["denken über = Meinung (think about)", "Was [[denkst]] du [[über]] den neuen Chef?", "What do you think of the new boss?"]]},
  {w:"sich freuen auf / über", tag:"+ Akkusativ", ex:[
   ["auf = etwas kommt noch (look forward to)", "Ich [[freue mich]] schon [[auf]] den Urlaub.", "I'm already looking forward to the holiday."],
   ["über = etwas ist schon da (be pleased about)", "Ich habe [[mich]] sehr [[über]] dein Geschenk [[gefreut]].", "I was very pleased about your present."],
   ["darauf + zu-Infinitiv (Briefschluss)", "Ich [[freue mich darauf]], Sie bald kennenzulernen.", "I look forward to meeting you soon."],
   ["Frage: worauf?", "[[Worauf]] [[freust]] du [[dich]] am meisten?", "What are you looking forward to most?"],
   ["sich freuen, dass (be glad that)", "Ich [[freue mich]], [[dass]] du da bist.", "I'm glad that you're here."]]},
  {w:"sich interessieren für", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Präsens", "Ich [[interessiere mich]] sehr [[für]] Politik.", "I'm very interested in politics."],
   ["Frage: wofür?", "[[Wofür]] [[interessierst]] du [[dich]]?", "What are you interested in?"],
   ["Perfekt", "Er hat [[sich]] schon immer [[für]] Technik [[interessiert]].", "He has always been interested in technology."],
   ["Frage nach einer Person: für wen?", "[[Für]] wen [[interessiert]] sie [[sich]]?", "Who is she interested in?"]]},
  {w:"sich kümmern um", tag:"+ Akkusativ", ex:[
   ["mit Nomen, in der Frage", "Wer [[kümmert sich]] [[um]] die Kinder, wenn ihr arbeitet?", "Who looks after the children when you're at work?"],
   ["Sache schon bekannt: darum", "Keine Sorge, ich [[kümmere mich darum]].", "Don't worry, I'll take care of it."],
   ["darum + dass-Satz", "Kannst du [[dich darum kümmern]], dass die Rechnung bezahlt wird?", "Can you make sure the bill gets paid?"],
   ["Perfekt", "Meine Nachbarin hat [[sich]] im Urlaub [[um]] unsere Katze [[gekümmert]].", "My neighbour looked after our cat during the holiday."]]},
  {w:"sich ärgern über", tag:"+ Akkusativ", ex:[
   ["mit Nomen", "Ich [[ärgere mich]] [[über]] den Lärm der Nachbarn.", "I'm annoyed about the neighbours' noise."],
   ["darüber + dass-Satz", "Er hat [[sich darüber geärgert]], dass der Zug schon wieder Verspätung hatte.", "He was annoyed that the train was late again."],
   ["Frage: worüber?", "[[Worüber]] [[ärgerst]] du [[dich]] so?", "What are you so annoyed about?"],
   ["Imperativ: nicht ärgern", "[[Ärger dich]] nicht [[darüber]]!", "Don't let it annoy you!"]]},
  {w:"teilnehmen an", tag:"+ Dativ", ex:[
   ["trennbar im Präsens", "Ich [[nehme]] seit März [[an]] einem Deutschkurs [[teil]].", "I've been taking part in a German course since March."],
   ["Perfekt: teilgenommen", "Wie viele Personen haben [[an]] der Besprechung [[teilgenommen]]?", "How many people took part in the meeting?"],
   ["mit Modalverb: Infinitiv am Ende", "Ich kann leider nicht [[an]] dem Treffen [[teilnehmen]].", "Unfortunately I can't attend the meeting."],
   ["im Nebensatz: zusammen am Ende", "Ich freue mich, dass du [[an]] der Feier [[teilnimmst]].", "I'm glad that you're coming to the party."]]},
  {w:"sprechen mit / über / von", tag:"mit + Dat. / über + Akk.", ex:[
   ["mit + Person (talk to)", "Ich muss morgen [[mit]] meiner Chefin [[sprechen]].", "I have to talk to my boss tomorrow."],
   ["über + Thema, Perfekt (talk about)", "Wir haben lange [[über]] die neue Arbeitszeit [[gesprochen]].", "We talked about the new working hours for a long time."],
   ["am Telefon (speak to)", "Kann ich bitte [[mit]] Frau Müller [[sprechen]]?", "May I speak to Ms Müller, please?"],
   ["Frage: worüber?", "[[Worüber]] habt ihr [[gesprochen]]?", "What did you talk about?"],
   ["von = erzählen (talk of)", "Er [[spricht]] oft [[von]] seiner Heimat.", "He often talks about his home country."]]},
  {w:"sich bewerben um / bei", tag:"um + Akk. / bei + Dat.", ex:[
   ["um + Stelle (apply for)", "Ich [[bewerbe mich]] [[um]] eine Stelle als Krankenpfleger.", "I'm applying for a job as a nurse."],
   ["bei + Firma, Perfekt (apply to)", "Ich habe [[mich bei]] einer großen Firma [[beworben]].", "I applied to a big company."],
   ["im Bewerbungsbrief: hiermit", "Hiermit [[bewerbe]] ich [[mich]] [[um]] die ausgeschriebene Stelle als Verkäuferin.", "I hereby apply for the advertised position as a sales assistant."],
   ["im Nebensatz", "Ich habe gehört, dass du [[dich]] [[um]] die Stelle [[beworben]] hast.", "I heard that you applied for the job."]]},
  {w:"bitten um / fragen nach", tag:"+ Akk. / + Dat.", ex:[
   ["bitten um: höfliche Bitte", "Ich möchte Sie [[um]] einen Termin [[bitten]].", "I would like to ask you for an appointment."],
   ["darum + zu-Infinitiv (formeller Brief)", "Darf ich Sie [[darum bitten]], mir die Unterlagen zu schicken?", "May I ask you to send me the documents?"],
   ["Perfekt: gebeten", "Er hat mich [[um]] Hilfe [[gebeten]].", "He asked me for help."],
   ["Information → fragen nach + Dativ", "Ich habe einen Mann [[nach]] dem Weg [[gefragt]].", "I asked a man for directions."]]},
  {w:"sich erinnern an", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Frage", "[[Erinnerst]] du [[dich an]] unseren ersten Tag im Deutschkurs?", "Do you remember our first day at the German course?"],
   ["Sache schon bekannt: daran", "Ich kann [[mich]] leider nicht [[daran erinnern]].", "Unfortunately I can't remember that."],
   ["an eine Person, höflich", "[[Erinnern]] Sie [[sich]] noch [[an]] mich?", "Do you still remember me?"],
   ["jemanden erinnern an (remind)", "Kannst du mich morgen [[an]] den Termin [[erinnern]]?", "Can you remind me about the appointment tomorrow?"]]},
  {w:"Angst haben vor", tag:"+ Dativ", ex:[
   ["mit Nomen", "Viele Menschen [[haben Angst vor]] der mündlichen Prüfung.", "Many people are afraid of the oral exam."],
   ["Frage: wovor?", "[[Wovor]] [[hast]] du [[Angst]]?", "What are you afraid of?"],
   ["davor + zu-Infinitiv", "Ich [[habe]] keine [[Angst davor]], Fehler zu machen.", "I'm not afraid of making mistakes."],
   ["ähnlich: sich fürchten vor", "Mein Sohn [[fürchtet sich vor]] großen Hunden.", "My son is scared of big dogs."]]},
  {w:"träumen von", tag:"+ Dativ", ex:[
   ["Wunsch mit Nomen", "Ich [[träume von]] einem eigenen Haus mit Garten.", "I dream of my own house with a garden."],
   ["davon + zu-Infinitiv, Perfekt", "Sie hat schon immer [[davon geträumt]], in Berlin zu leben.", "She has always dreamed of living in Berlin."],
   ["Frage: wovon?", "[[Wovon]] [[träumst]] du?", "What do you dream of?"],
   ["im Schlaf träumen", "Ich habe heute Nacht [[von]] meiner Prüfung [[geträumt]].", "Last night I dreamed about my exam."]]},
  {w:"sich beschäftigen mit", tag:"+ Dativ", ex:[
   ["Freizeit beschreiben", "In meiner Freizeit [[beschäftige]] ich [[mich]] gern [[mit]] Fotografie.", "In my free time I like to spend time on photography."],
   ["Frage: womit? (Beruf)", "[[Womit]] [[beschäftigen]] Sie [[sich]] beruflich?", "What do you do for a living?"],
   ["Perfekt", "Ich habe [[mich]] lange [[mit]] diesem Thema [[beschäftigt]].", "I've spent a long time on this topic."],
   ["damit + Modalverb", "Das ist kompliziert – ich muss [[mich]] noch genauer [[damit beschäftigen]].", "It's complicated – I need to look into it more closely."]]},
  {w:"sich gewöhnen an", tag:"+ Akkusativ", ex:[
   ["mit Nomen, Perfekt", "Ich habe [[mich]] schnell [[an]] das deutsche Wetter [[gewöhnt]].", "I quickly got used to the German weather."],
   ["Sache schon bekannt: daran", "Am Anfang war es schwer, aber jetzt habe ich [[mich daran gewöhnt]].", "At first it was hard, but now I've got used to it."],
   ["allgemeine Aussage mit man", "Man [[gewöhnt sich an]] alles.", "You get used to everything."],
   ["daran + zu-Infinitiv", "Ich muss [[mich]] erst [[daran gewöhnen]], so früh aufzustehen.", "I first have to get used to getting up so early."]]},
  {w:"sich beschweren über / bei", tag:"über + Akk. / bei + Dat.", ex:[
   ["über + Problem (complain about)", "Ich möchte [[mich]] [[über]] den Lärm [[beschweren]].", "I would like to complain about the noise."],
   ["bei + Person (complain to)", "Er hat [[sich beim]] Vermieter [[beschwert]].", "He complained to the landlord."],
   ["darüber + dass-Satz", "Viele Kunden [[beschweren sich darüber]], dass die Lieferung zu spät kommt.", "Many customers complain that the delivery arrives too late."],
   ["Frage: worüber?", "[[Worüber]] hat er [[sich]] denn [[beschwert]]?", "What did he complain about?"]]},
  {w:"abhängen von", tag:"+ Dativ", ex:[
   ["trennbar: hängt … ab", "Das [[hängt]] [[vom]] Wetter [[ab]].", "That depends on the weather."],
   ["davon + ob-Satz", "Es [[hängt davon ab]], ob ich frei bekomme.", "It depends on whether I get time off."],
   ["Frage: wovon?", "[[Wovon]] [[hängt]] der Preis [[ab]]?", "What does the price depend on?"],
   ["von einer Person", "Das [[hängt]] ganz [[von]] dir [[ab]].", "That's entirely up to you."]]},
  {w:"sich verabreden mit", tag:"+ Dativ", ex:[
   ["mit + Person, Perfekt", "Ich habe [[mich]] für Samstag [[mit]] meiner Freundin [[verabredet]].", "I've arranged to meet my friend on Saturday."],
   ["Frage nach Personen: mit wem? (nicht womit)", "[[Mit wem]] bist du heute Abend [[verabredet]]?", "Who are you meeting tonight?"],
   ["Wir + uns: Ort und Zeit", "Wir haben [[uns]] für 19 Uhr vor dem Kino [[verabredet]].", "We've arranged to meet at 7 pm in front of the cinema."],
   ["im Nebensatz mit Modalverb", "Ich weiß nicht, ob ich [[mich mit]] ihm [[verabreden]] soll.", "I don't know whether I should arrange to meet him."]]}
 ]}
]},

{id:"vdat", de:"Verben mit Dativ", en:"Verbs with the dative",
 intro:"Diese Verben haben ein Dativobjekt (Wem?), oft eine Person. Achtung: Bei gefallen, schmecken, gehören und passen ist die Sache das Subjekt.",
 groups:[
 {g:"B1-Verben", items:[
  {w:"helfen", tag:"+ Dativ", ex:[
   ["Frage mit Modalverb", "Kannst du [[mir]] beim Umzug [[helfen]]?", "Can you help me with the move?"],
   ["Perfekt: hat geholfen; er → ihm", "Der Arzt hat [[ihm]] sehr [[geholfen]].", "The doctor helped him a lot."],
   ["Imperativ, höflich", "[[Helfen]] Sie [[mir]] bitte, der Automat nimmt mein Geld nicht!", "Please help me, the machine won't take my money!"],
   ["Nomen im Dativ Plural: -n", "Ich [[helfe]] den [[Kindern]] bei den Hausaufgaben.", "I help the children with their homework."]]},
  {w:"gefallen", tag:"+ Dativ", ex:[
   ["Sache = Subjekt, Person = Dativ", "Die neue Wohnung [[gefällt mir]] sehr gut.", "I like the new flat very much."],
   ["nach der Meinung fragen, Perfekt", "Wie hat [[dir]] der Film [[gefallen]]?", "How did you like the film?"],
   ["Subjekt im Plural: Verb im Plural", "Die Schuhe [[gefallen mir]] nicht.", "I don't like the shoes."],
   ["Person als Nomen im Dativ", "Das Geschenk hat [[meiner Mutter]] sehr [[gefallen]].", "My mother really liked the present."]]},
  {w:"gehören", tag:"+ Dativ", ex:[
   ["Frage: Wem gehört …? (whose)", "[[Wem]] [[gehört]] diese Jacke?", "Whose jacket is this?"],
   ["mit Nomen im Dativ", "Das Auto [[gehört]] [[meinem]] Bruder.", "The car belongs to my brother."],
   ["mit Pronomen", "Das Handy [[gehört mir]].", "The phone is mine."],
   ["gehören zu = ein Teil sein", "Sport [[gehört zu]] meinem Alltag.", "Sport is part of my everyday life."]]},
  {w:"schmecken", tag:"+ Dativ", ex:[
   ["Essen = Subjekt", "Die Suppe [[schmeckt mir]] sehr gut.", "I really like the soup."],
   ["im Restaurant, höflich, Perfekt", "Hat es [[Ihnen]] [[geschmeckt]]?", "Did you enjoy your meal?"],
   ["Frage mit wie", "Wie [[schmeckt]] [[dir]] der Kuchen?", "How do you like the cake?"],
   ["schmecken nach = Geschmack (taste of)", "Die Soße [[schmeckt]] stark [[nach]] Knoblauch.", "The sauce tastes strongly of garlic."]]},
  {w:"passen", tag:"+ Dativ", ex:[
   ["Termin (suit)", "Der Termin am Montag [[passt mir]] leider nicht.", "Unfortunately Monday's appointment doesn't suit me."],
   ["Kleidung: Größe (fit)", "Die Hose [[passt]] [[ihm]] nicht mehr.", "The trousers don't fit him any more."],
   ["höfliche Frage", "[[Passt]] [[Ihnen]] Dienstag um 10 Uhr?", "Does Tuesday at 10 suit you?"],
   ["passen zu = gut zusammen (go with)", "Die Jacke [[passt]] gut [[zu]] deiner Hose.", "The jacket goes well with your trousers."]]},
  {w:"fehlen", tag:"+ Dativ", ex:[
   ["jemand fehlt mir (I miss)", "Meine Familie [[fehlt mir]] sehr.", "I miss my family a lot."],
   ["beim Arzt: Was fehlt Ihnen?", "Guten Tag, was [[fehlt Ihnen]] denn?", "Hello, what seems to be the problem?"],
   ["ohne Dativ: etwas ist nicht da", "Im Antrag [[fehlt]] noch eine Unterschrift.", "A signature is still missing from the application."],
   ["nicht da sein (be absent)", "Mein Sohn [[fehlt]] heute in der Schule, weil er krank ist.", "My son is absent from school today because he's ill."]]},
  {w:"danken", tag:"+ Dativ", ex:[
   ["Person im Dativ + für", "Ich [[danke Ihnen]] für Ihre Hilfe.", "Thank you for your help."],
   ["Dativ Plural: Nomen + -n", "Wir [[danken]] allen [[Kollegen]] für die gute Zusammenarbeit.", "We thank all colleagues for the good cooperation."],
   ["Perfekt, Frage", "Hast du [[ihr]] schon für das Geschenk [[gedankt]]?", "Have you thanked her for the present yet?"],
   ["ähnlich: sich bedanken bei + Dativ", "Ich möchte [[mich]] herzlich [[bei]] Ihnen [[bedanken]].", "I would like to thank you very much."]]},
  {w:"gratulieren", tag:"+ Dativ", ex:[
   ["gratulieren + Dativ + zu", "Ich [[gratuliere dir]] zum Geburtstag!", "Happy birthday!"],
   ["mit Nomen im Dativ", "Wir [[gratulieren]] [[unserer]] Kollegin zur bestandenen Prüfung.", "We congratulate our colleague on passing her exam."],
   ["Perfekt, Frage", "Hast du [[ihm]] schon [[gratuliert]]?", "Have you congratulated him yet?"],
   ["um … zu + Infinitiv", "Ich rufe an, um [[dir]] zur Hochzeit zu [[gratulieren]].", "I'm calling to congratulate you on your wedding."]]},
  {w:"antworten", tag:"+ Dativ / auf + Akk.", ex:[
   ["Person im Dativ", "Bitte [[antworten]] Sie [[mir]] bis Freitag.", "Please reply to me by Friday."],
   ["Sache: antworten auf + Akkusativ", "Ich habe noch nicht [[auf]] seine E-Mail [[geantwortet]].", "I haven't replied to his email yet."],
   ["Frage: Was hat er geantwortet?", "Was hat er [[dir]] [[geantwortet]]?", "What did he answer you?"],
   ["ohne Präposition: beantworten + Akkusativ", "Bitte [[beantworten]] Sie alle Fragen.", "Please answer all the questions."]]},
  {w:"glauben", tag:"+ Dativ / + Akk. / an", ex:[
   ["Person im Dativ (believe someone)", "Ich [[glaube dir]], dass du keine Zeit hattest.", "I believe you that you didn't have time."],
   ["Sache im Akkusativ (believe something)", "Das [[glaube]] ich nicht.", "I don't believe that."],
   ["glauben an + Akkusativ (believe in)", "Ich [[glaube an]] dich – du schaffst die Prüfung!", "I believe in you – you'll pass the exam!"],
   ["Meinung: glauben, dass (think)", "Ich [[glaube]], dass es morgen regnet.", "I think it will rain tomorrow."]]},
  {w:"wehtun", tag:"+ Dativ", ex:[
   ["Körperteil = Subjekt, trennbar", "Mein Rücken [[tut mir]] seit gestern [[weh]].", "My back has been hurting since yesterday."],
   ["andere Person im Dativ", "Der Kopf [[tut ihr weh]], deshalb bleibt sie zu Hause.", "Her head hurts, so she's staying at home."],
   ["beim Arzt: Frage", "Wo [[tut]] es [[Ihnen]] [[weh]]?", "Where does it hurt?"],
   ["Perfekt: wehgetan", "Die Spritze hat [[mir]] kaum [[wehgetan]].", "The injection hardly hurt."]]},
  {w:"leidtun", tag:"+ Dativ", ex:[
   ["sich entschuldigen (I'm sorry)", "Es [[tut mir leid]], dass ich zu spät komme.", "I'm sorry that I'm late."],
   ["Mitleid (feel sorry for)", "Der alte Mann [[tut mir leid]].", "I feel sorry for the old man."],
   ["Präteritum: tat mir leid", "Es [[tat mir]] sehr [[leid]], dass ich nicht kommen konnte.", "I was very sorry that I couldn't come."],
   ["kurze Reaktion", "Du bist krank? Oh, [[das tut mir leid]]!", "You're ill? Oh, I'm sorry to hear that!"]]}
 ]}
]},

{id:"rel", de:"Relativsätze", en:"Relative clauses",
 intro:"Das Relativpronomen hat das Genus des Nomens davor und den Kasus aus dem Relativsatz. Das Verb steht am Ende.",
 groups:[
 {g:"Relativpronomen", items:[
  {w:"der", tag:"Nom. mask. / Dat. fem.", ex:[
   ["Nominativ maskulin, Relativsatz in der Mitte", "Der Kollege, [[der]] neben mir sitzt, kommt aus Polen.", "The colleague who sits next to me comes from Poland."],
   ["Relativsatz am Ende", "Ich suche einen Job, [[der]] mir Spaß macht.", "I'm looking for a job that I enjoy."],
   ["Achtung: der = Dativ feminin", "Die Frau, [[der]] ich geholfen habe, war sehr dankbar.", "The woman whom I helped was very grateful."],
   ["Präposition + der (Dativ feminin)", "Die Freundin, [[mit der]] ich Deutsch lerne, kommt aus Brasilien.", "The friend I study German with comes from Brazil."]]},
  {w:"den", tag:"Akk. mask.", ex:[
   ["Akkusativ maskulin, Relativsatz in der Mitte", "Der Film, [[den]] wir gestern gesehen haben, war spannend.", "The film that we saw yesterday was exciting."],
   ["Relativsatz am Ende", "Ich suche den Schlüssel, [[den]] ich gestern verloren habe.", "I'm looking for the key I lost yesterday."],
   ["für + den (Akkusativ)", "Wie heißt der Kurs, [[für den]] du dich angemeldet hast?", "What's the name of the course you signed up for?"],
   ["an + den (denken an + Akk.)", "Das ist der Urlaub, [[an den]] ich oft denke.", "That's the holiday I often think about."]]},
  {w:"dem", tag:"Dat. mask. / neutr.", ex:[
   ["Dativ maskulin (helfen + Dativ)", "Das ist der Kollege, [[dem]] ich bei der Arbeit helfe.", "That's the colleague whom I help at work."],
   ["Dativ neutral (gehören + Dativ)", "Das Kind, [[dem]] der Hund gehört, wohnt nebenan.", "The child the dog belongs to lives next door."],
   ["in dem = wo (Ort)", "Das Haus, [[in dem]] ich wohne, ist 100 Jahre alt.", "The house I live in is 100 years old."],
   ["von dem (erzählen von + Dativ)", "Der Arzt, [[von dem]] ich dir erzählt habe, hat jetzt eine eigene Praxis.", "The doctor I told you about now has his own practice."]]},
  {w:"die", tag:"fem. / Plural", ex:[
   ["Nominativ feminin", "Die Frau, [[die]] dort steht, ist meine Lehrerin.", "The woman standing there is my teacher."],
   ["Akkusativ feminin", "Die Wohnung, [[die]] wir besichtigt haben, war leider zu klein.", "The flat we viewed was unfortunately too small."],
   ["Plural Nominativ", "Kollegen, [[die]] im Homeoffice arbeiten, sparen viel Zeit.", "Colleagues who work from home save a lot of time."],
   ["Plural Akkusativ", "Die Bücher, [[die]] ich für den Kurs gekauft habe, waren teuer.", "The books I bought for the course were expensive."],
   ["auf + die (sich vorbereiten auf + Akk.)", "Die Prüfung, [[auf die]] ich mich vorbereite, ist im Juni.", "The exam I'm preparing for is in June."]]},
  {w:"das", tag:"neutr.", ex:[
   ["Nominativ neutral", "Das Restaurant, [[das]] gestern eröffnet hat, ist schon voll.", "The restaurant that opened yesterday is already full."],
   ["Akkusativ neutral", "Das Auto, [[das]] du dort siehst, gehört meinem Nachbarn.", "The car you see there belongs to my neighbour."],
   ["Relativsatz am Ende", "Ich suche ein Hotel, [[das]] nicht so teuer ist.", "I'm looking for a hotel that isn't so expensive."],
   ["über + das (sprechen über + Akk.)", "Das Problem, [[über das]] wir gesprochen haben, ist gelöst.", "The problem we talked about has been solved."]]},
  {w:"dessen / deren", tag:"Genitiv", ex:[
   ["dessen: Bezugswort maskulin (whose)", "Mein Nachbar, [[dessen]] Hund immer bellt, ist eigentlich sehr nett.", "My neighbour, whose dog always barks, is actually very nice."],
   ["deren: Bezugswort feminin (whose)", "Die Kollegin, [[deren]] Mann in Berlin arbeitet, zieht bald um.", "The colleague whose husband works in Berlin is moving soon."],
   ["deren: Bezugswort Plural", "Die Nachbarn, [[deren]] Kinder so laut sind, sind im Urlaub.", "The neighbours whose children are so loud are on holiday."],
   ["dessen: Bezugswort neutral", "Das Kind, [[dessen]] Fahrrad gestohlen wurde, hat geweint.", "The child whose bike was stolen cried."]]},
  {w:"denen", tag:"Dat. Plural", ex:[
   ["Dativ Plural (geben + Dativ)", "Die Kinder, [[denen]] ich Nachhilfe gebe, sind sehr fleißig.", "The children I give tutoring to are very hard-working."],
   ["mit + denen", "Das sind die Kollegen, [[mit denen]] ich jeden Tag Mittag esse.", "Those are the colleagues I have lunch with every day."],
   ["bei + denen (Wohnort)", "Die Leute, [[bei denen]] ich wohne, sind sehr nett.", "The people I live with are very nice."],
   ["schmecken + Dativ", "Die Gäste, [[denen]] das Essen nicht geschmeckt hat, bekommen einen Gutschein.", "The guests who didn't like the food get a voucher."]]},
  {w:"wo / woher / wohin", tag:"Ort", ex:[
   ["wo nach Städten und Ländern", "Frankfurt ist die Stadt, [[wo]] ich seit fünf Jahren wohne.", "Frankfurt is the city where I have lived for five years."],
   ["wo = in dem / in der", "Ich kenne ein Café, [[wo]] man sehr gut frühstücken kann.", "I know a café where you can have a very good breakfast."],
   ["woher = Herkunft", "Das ist das Dorf, [[woher]] meine Großeltern kommen.", "That's the village my grandparents come from."],
   ["wohin = Richtung", "Spanien ist das Land, [[wohin]] wir jedes Jahr fahren.", "Spain is the country we go to every year."]]},
  {w:"was / wo(r)-", tag:"alles / nichts / ganzer Satz", ex:[
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
 {g:"Formen", items:[
  {w:"würde + Infinitiv", tag:"Wunsch / Bitte / Rat", ex:[
   ["Wunsch (would like to)", "Ich [[würde]] gern mehr [[reisen]].", "I would like to travel more."],
   ["höfliche Bitte, Frage", "[[Würden]] Sie mir bitte beim Formular [[helfen]]?", "Would you please help me with the form?"],
   ["Ratschlag: An deiner Stelle …", "An deiner Stelle [[würde]] ich zum Arzt [[gehen]].", "If I were you, I'd go to the doctor."],
   ["vorsichtige Meinung (B1 Sprechen)", "Ich [[würde]] [[sagen]], dass das eine gute Idee ist.", "I'd say that's a good idea."]]},
  {w:"hätte", tag:"haben", ex:[
   ["Wunsch", "Ich [[hätte]] gern mehr Zeit für meine Familie.", "I would like to have more time for my family."],
   ["höflich bestellen", "Ich [[hätte]] gern einen Kaffee und ein Stück Kuchen, bitte.", "I'd like a coffee and a piece of cake, please."],
   ["höfliche Frage", "[[Hätten]] Sie morgen kurz Zeit für ein Gespräch?", "Would you have a moment for a chat tomorrow?"],
   ["hätte fast + Partizip (almost)", "Ich [[hätte]] heute fast den Zug [[verpasst]].", "I almost missed the train today."]]},
  {w:"wäre", tag:"sein", ex:[
   ["höflicher Vorschlag", "Es [[wäre]] schön, wenn du am Samstag mitkommen könntest.", "It would be nice if you could come along on Saturday."],
   ["irreal: in Wirklichkeit nicht", "Wenn ich reich [[wäre]], würde ich ein Haus am Meer kaufen.", "If I were rich, I would buy a house by the sea."],
   ["höfliche Frage im Brief", "[[Wäre]] es möglich, den Termin auf Freitag zu verschieben?", "Would it be possible to move the appointment to Friday?"],
   ["Vergangenheit: wäre + Partizip", "Ich [[wäre]] gern [[mitgekommen]], aber ich war krank.", "I would have liked to come along, but I was ill."]]},
  {w:"könnte", tag:"können", ex:[
   ["sehr höfliche Bitte", "[[Könnten]] Sie das bitte noch einmal wiederholen?", "Could you please repeat that?"],
   ["Vorschlag (we could …)", "Wir [[könnten]] am Wochenende zusammen ins Kino gehen.", "We could go to the cinema together at the weekend."],
   ["Vermutung (might)", "Das [[könnte]] schwierig werden.", "That could get difficult."],
   ["Vorwurf in der Vergangenheit: hätte … können", "Du [[hättest]] mich ruhig anrufen [[können]].", "You could have called me."]]},
  {w:"sollte", tag:"Ratschlag", ex:[
   ["Ratschlag unter Freunden (should)", "Du [[solltest]] mehr Wasser trinken und früher schlafen gehen.", "You should drink more water and go to bed earlier."],
   ["Ratschlag, formell", "Sie [[sollten]] den Antrag möglichst früh abgeben.", "You should hand in the application as early as possible."],
   ["um Rat fragen", "Was [[sollte]] ich Ihrer Meinung nach tun?", "What do you think I should do?"],
   ["Vergangenheit: hätte … sollen (should have)", "Wir [[hätten]] früher losfahren [[sollen]].", "We should have set off earlier."]]}
 ]},
 {g:"Sätze", items:[
  {w:"wenn … würde / hätte", tag:"irreale Bedingung", ex:[
   ["Wenn-Satz zuerst", "[[Wenn]] ich mehr Zeit [[hätte]], [[würde]] ich einen Tanzkurs machen.", "If I had more time, I would take a dance class."],
   ["ohne wenn: Verb am Anfang", "[[Hätte]] ich mehr Geld, [[würde]] ich eine größere Wohnung mieten.", "If I had more money, I would rent a bigger flat."],
   ["Hauptsatz zuerst, mit Modalverb", "Ich [[würde]] mehr Sport machen, [[wenn]] ich nicht so viel arbeiten müsste.", "I would do more sport if I didn't have to work so much."],
   ["Frage (B1 Sprechen)", "Was [[würdest]] du machen, [[wenn]] du im Lotto gewinnen [[würdest]]?", "What would you do if you won the lottery?"]]},
  {w:"irrealer Wunsch", tag:"doch nur / wünschte", ex:[
   ["Wenn … doch nur …! (if only)", "[[Wenn]] ich doch nur besser Deutsch sprechen [[könnte]]!", "If only I could speak German better!"],
   ["Ich wünschte, … (I wish)", "Ich [[wünschte]], ich [[hätte]] mehr Zeit zum Lernen.", "I wish I had more time to study."],
   ["mit wäre", "[[Wenn]] doch schon Wochenende [[wäre]]!", "If only it were the weekend already!"],
   ["Vergangenheit, Verb am Anfang", "[[Hätte]] ich doch nur mehr [[gelernt]]!", "If only I had studied more!"]]},
  {w:"Vergangenheit", tag:"hätte / wäre + Partizip", ex:[
   ["irreal in der Vergangenheit", "Wenn ich das [[gewusst hätte]], [[wäre]] ich früher [[gekommen]].", "If I had known that, I would have come earlier."],
   ["Bedauern (I wish I had …)", "Ich [[hätte]] gern früher mit Deutsch [[angefangen]].", "I wish I had started German earlier."],
   ["mit Grund: aber …", "Ich [[hätte]] dir gern [[geholfen]], aber ich hatte keine Zeit.", "I would have liked to help you, but I didn't have time."],
   ["wäre + gewesen", "Wenn der Bus pünktlich [[gewesen wäre]], [[wäre]] ich nicht zu spät [[gekommen]].", "If the bus had been on time, I wouldn't have been late."]]}
 ]}
]},

{id:"passiv", de:"Passiv", en:"Passive",
 intro:"Im Passiv ist die Handlung wichtig, nicht die Person: werden + Partizip II. Die Person (wenn nötig) mit von + Dativ.",
 groups:[
 {g:"Zeiten und Formen", items:[
  {w:"Präsens", tag:"wird + Partizip", ex:[
   ["jetzt / in der Zukunft", "Das Paket [[wird]] morgen [[geliefert]].", "The parcel will be delivered tomorrow."],
   ["allgemein, ohne Person", "In Deutschland [[wird]] viel Brot [[gegessen]].", "A lot of bread is eaten in Germany."],
   ["Frage", "Wann [[wird]] das Essen [[serviert]]?", "When is the food served?"],
   ["im Nebensatz: wird am Ende", "Ich weiß nicht, ob die Rechnung heute [[bezahlt wird]].", "I don't know whether the invoice will be paid today."]]},
  {w:"Präteritum", tag:"wurde + Partizip", ex:[
   ["Geschichte erzählen", "Das Haus [[wurde]] 1920 [[gebaut]].", "The house was built in 1920."],
   ["mit Person: von + Dativ", "Der Dieb [[wurde]] von der Polizei [[festgenommen]].", "The thief was arrested by the police."],
   ["Ursache: durch + Akkusativ", "Die Brücke [[wurde]] durch den Sturm stark [[beschädigt]].", "The bridge was badly damaged by the storm."],
   ["im Nebensatz", "Er hat erzählt, dass er im Krankenhaus gründlich [[untersucht wurde]].", "He said that he was thoroughly examined in hospital."]]},
  {w:"Perfekt", tag:"ist … worden", ex:[
   ["ist + Partizip + worden", "Die Rechnung [[ist]] schon [[bezahlt worden]].", "The bill has already been paid."],
   ["über sich selbst berichten", "Ich [[bin]] zu einem Vorstellungsgespräch [[eingeladen worden]].", "I've been invited to a job interview."],
   ["Frage", "[[Ist]] das Paket schon [[abgeholt worden]]?", "Has the parcel been collected yet?"],
   ["im Nebensatz: worden ist am Ende", "Ich freue mich, dass mein Antrag [[genehmigt worden ist]].", "I'm glad that my application has been approved."]]},
  {w:"mit Modalverb", tag:"muss … werden", ex:[
   ["Pflicht: müssen + Partizip + werden", "Der Antrag [[muss]] bis Freitag [[abgegeben werden]].", "The application must be handed in by Friday."],
   ["Verbot: dürfen + nicht", "Hier [[darf]] nicht [[geraucht werden]].", "Smoking is not allowed here."],
   ["Möglichkeit: können", "Das Formular [[kann]] auch online [[ausgefüllt werden]].", "The form can also be filled in online."],
   ["im Nebensatz: Modalverb ganz am Ende", "Wissen Sie, ob das Auto noch [[repariert werden kann]]?", "Do you know whether the car can still be repaired?"]]},
  {w:"Zustandspassiv", tag:"ist + Partizip", ex:[
   ["Zustand, nicht Handlung", "Das Geschäft [[ist]] sonntags [[geschlossen]].", "The shop is closed on Sundays."],
   ["Ergebnis ist schon da", "Keine Sorge, der Tisch [[ist]] schon [[reserviert]].", "Don't worry, the table is already booked."],
   ["Vergangenheit: war + Partizip", "Als wir ankamen, [[war]] die Tür schon [[geöffnet]].", "When we arrived, the door was already open."],
   ["Unterschied: Vorgang mit werden", "Die Tür [[wird]] jeden Morgen um acht [[geöffnet]].", "The door is opened every morning at eight."]]},
  {w:"man statt Passiv", tag:"Alternative", ex:[
   ["man + Aktiv = Passiv ohne Person", "Hier [[spricht man]] Deutsch.", "German is spoken here."],
   ["man + Modalverb (Regeln)", "In der Bibliothek [[darf man]] nicht laut telefonieren.", "You may not make loud phone calls in the library."],
   ["Frage (How do you …?)", "Wie [[schreibt man]] das?", "How do you spell that?"],
   ["Ratschlag mit sollte", "[[Man sollte]] jeden Tag genug Wasser trinken.", "You should drink enough water every day."]]}
 ]}
]}
];
