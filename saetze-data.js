/* Alltagssätze: everyday phrases, shown by grammatik.html?t=saetze.

   Same shape as grammatik-data.js – topic → groups → items → examples
   [label, German with the [[phrase]] marked, English] – so the Grammatik page
   shows them with ▶, EN, word taps and Karten. Labels get their English in
   window.ASEN. tools/check-grammatik.mjs checks this file too. */
window.AS = [
{id:"gruss", de:"Hallo & Tschüss", en:"Hello and goodbye",
 intro:"Begrüßen und verabschieden: Mit Freunden und Kollegen sagt man Hallo und Tschüss, bei Ämtern und Fremden Guten Tag und Auf Wiedersehen. Am Telefon heißt es Auf Wiederhören. Bis + Zeit (bis später, bis morgen) passt fast immer.",
 groups:[
 {g:"Begrüßen", gen:"greeting", items:[
  {w:"Hallo! / Guten Tag!", en:"hello", tag:"je nach Situation", ex:[
   ["informell: Freunde, Kollegen", "[[Hallo]], wie geht's?", "Hi, how are you?"],
   ["formell: Amt, Arzt, Geschäft", "[[Guten Tag]], ich habe einen Termin um zehn.", "Hello, I have an appointment at ten."],
   ["morgens bis etwa 11 Uhr", "[[Guten Morgen]]! Haben Sie gut geschlafen?", "Good morning! Did you sleep well?"],
   ["ab etwa 18 Uhr", "[[Guten Abend]], einen Tisch für zwei, bitte.", "Good evening, a table for two, please."],
   ["Süddeutschland und Österreich", "[[Grüß Gott]]! Was darf es sein?", "Hello! What can I get you?"]]},
  {w:"Wie geht's?", en:"how are you?", tag:"fragen und antworten", ex:[
   ["Frage unter Freunden", "Hallo Tom, [[wie geht's]] dir?", "Hi Tom, how are you?"],
   ["Antwort: gut", "[[Gut, danke]]. Und dir?", "Fine, thanks. And you?"],
   ["Antwort: nicht so gut", "[[Es geht]] – ich bin ein bisschen müde.", "So-so – I'm a bit tired."],
   ["formelle Frage", "[[Wie geht es Ihnen]], Frau Klein?", "How are you, Ms Klein?"],
   ["lange nicht gesehen", "[[Lange nicht gesehen]]! Was machst du so?", "Long time no see! What are you up to?"]]}
 ]},
 {g:"Verabschieden", gen:"saying goodbye", items:[
  {w:"Tschüss! / Bis später!", en:"bye / see you later", tag:"Bis + Zeit", ex:[
   ["informell, überall", "[[Tschüss]], bis morgen!", "Bye, see you tomorrow!"],
   ["später am selben Tag", "Ich muss jetzt los. [[Bis später]]!", "I have to go now. See you later!"],
   ["in den nächsten Tagen", "Es war schön mit dir. [[Bis bald]]!", "It was nice being with you. See you soon!"],
   ["mit Tag oder Uhrzeit", "Schönes Wochenende und [[bis Montag]]!", "Have a nice weekend and see you on Monday!"],
   ["gleich, in ein paar Minuten", "Ich hole nur schnell Kaffee. [[Bis gleich]]!", "I'm just getting coffee. See you in a minute!"]]},
  {w:"Auf Wiedersehen!", en:"goodbye (formal)", tag:"formell und am Telefon", ex:[
   ["formell: Amt, Arzt", "Vielen Dank für Ihre Hilfe. [[Auf Wiedersehen]]!", "Thank you very much for your help. Goodbye!"],
   ["am Telefon", "Danke für Ihren Anruf. [[Auf Wiederhören]]!", "Thanks for your call. Goodbye!"],
   ["nach dem Einkaufen", "[[Schönen Tag noch]]! – Danke, gleichfalls!", "Have a nice day! – Thanks, you too!"],
   ["Freunde: pass auf dich auf", "[[Mach's gut]] und melde dich mal!", "Take care and get in touch!"],
   ["abends", "[[Gute Nacht]], schlaf gut!", "Good night, sleep well!"]]}
 ]}
]},
{id:"ich", de:"Über mich", en:"Talking about yourself",
 intro:"Smalltalk beginnt oft mit Fragen zur Person: Woher kommst du? Was machst du beruflich? Hast du Kinder? Mit kurzen, einfachen Antworten und einer Gegenfrage (Und du?) bleibt das Gespräch in Bewegung – genau das üben Sie auch im DTZ, Teil 1.",
 groups:[
 {g:"Herkunft und Wohnort", gen:"origin and home", items:[
  {w:"Woher kommst du?", en:"where are you from?", tag:"Herkunft", ex:[
   ["Frage informell", "[[Woher kommst du]] eigentlich?", "Where are you actually from?"],
   ["Frage formell", "[[Woher kommen Sie]]?", "Where are you from?"],
   ["Antwort", "[[Ich komme aus]] Brasilien, aus São Paulo.", "I'm from Brazil, from São Paulo."],
   ["seit wann hier", "[[Ich lebe seit]] fünf Jahren in Deutschland.", "I've been living in Germany for five years."],
   ["Gegenfrage", "Und du? [[Bist du von hier]]?", "And you? Are you from here?"]]},
  {w:"Wo wohnst du?", en:"where do you live?", tag:"Wohnort", ex:[
   ["Frage", "[[Wo wohnst du]] denn?", "Where do you live?"],
   ["Stadtteil", "[[Ich wohne in]] der Nähe vom Zentrum.", "I live near the centre."],
   ["Wohnung beschreiben", "[[Wir haben eine]] Dreizimmerwohnung mit Balkon.", "We have a three-room flat with a balcony."],
   ["gefällt es dir?", "[[Wie gefällt es dir]] in Frankfurt?", "How do you like it in Frankfurt?"],
   ["Antwort", "[[Es gefällt mir gut]], nur die Mieten sind hoch.", "I like it, only the rents are high."]]}
 ]},
 {g:"Arbeit und Familie", gen:"work and family", items:[
  {w:"Was machst du beruflich?", en:"what do you do for a living?", tag:"Beruf", ex:[
   ["Frage", "[[Was machst du beruflich]]?", "What do you do for a living?"],
   ["Beruf ohne Artikel", "[[Ich arbeite als]] Ingenieur bei einer IT-Firma.", "I work as an engineer at an IT company."],
   ["arbeitssuchend", "[[Ich suche gerade]] eine neue Stelle.", "I'm looking for a new job at the moment."],
   ["Ausbildung und Kurs", "[[Ich mache gerade]] einen Deutschkurs.", "I'm doing a German course at the moment."],
   ["Zufriedenheit", "[[Die Arbeit macht mir Spaß]].", "I enjoy the work."]]},
  {w:"Hast du Kinder?", en:"do you have children?", tag:"Familie", ex:[
   ["Frage", "[[Hast du Kinder]]?", "Do you have children?"],
   ["Antwort", "Ja, [[ich habe eine Tochter]]. Sie ist sieben.", "Yes, I have a daughter. She's seven."],
   ["verheiratet", "[[Ich bin verheiratet]].", "I'm married."],
   ["Familie im Ausland", "[[Meine Eltern wohnen noch in]] Brasilien.", "My parents still live in Brazil."],
   ["Hobbys", "[[In meiner Freizeit]] spiele ich gern Fußball.", "In my free time I like playing football."]]}
 ]}
]},
{id:"danke", de:"Danke & Entschuldigung", en:"Thanks and apologies",
 intro:"Danke sagt man in Deutschland sehr oft. Auf Danke antwortet man mit Bitte, Gern geschehen oder Kein Problem. Entschuldigung heißt sorry und auch excuse me. Tut mir leid zeigt, dass es Ihnen wirklich leidtut.",
 groups:[
 {g:"Danken", gen:"thanking", items:[
  {w:"Danke!", en:"thank you", tag:"stark und schwach", ex:[
   ["kurz, überall", "[[Danke]]! Das ist sehr nett.", "Thanks! That's very kind."],
   ["sehr freundlich", "[[Vielen Dank]] für die schnelle Hilfe!", "Thank you very much for the quick help!"],
   ["Danke für + Akkusativ", "[[Danke für]] die Einladung!", "Thanks for the invitation!"],
   ["sehr formell, im Brief", "[[Herzlichen Dank]] für Ihre Unterstützung.", "Many thanks for your support."],
   ["vorher danken, im Brief", "[[Vielen Dank im Voraus]] für Ihre Antwort.", "Thank you in advance for your reply."]]},
  {w:"Danke für Ihr Verständnis", en:"thanks for understanding", tag:"wenn es ein Problem gibt", ex:[
   ["formell: Brief, Amt, Arbeit", "Ich komme leider zehn Minuten später. [[Danke für Ihr Verständnis]].", "I'm afraid I'll be ten minutes late. Thanks for your understanding."],
   ["informell", "[[Danke, dass du Verständnis hast]].", "Thanks for understanding."],
   ["für Geduld", "[[Vielen Dank für Ihre Geduld]].", "Thank you very much for your patience."],
   ["für die Hilfe", "[[Danke, dass du mir geholfen hast]]!", "Thanks for helping me!"],
   ["im Brief vor dem Gruß", "[[Ich danke Ihnen für Ihr Verständnis]] und verbleibe mit freundlichen Grüßen.", "Thank you for your understanding. Kind regards."]]},
  {w:"Bitte! / Gern geschehen!", en:"you're welcome", tag:"auf Danke antworten", ex:[
   ["Standard", "Danke! – [[Bitte]]!", "Thanks! – You're welcome!"],
   ["freundlich", "Vielen Dank! – [[Gern geschehen]]!", "Thank you very much! – My pleasure!"],
   ["locker", "Danke für die Hilfe! – [[Kein Problem]]!", "Thanks for the help! – No problem!"],
   ["kurz und herzlich", "Danke fürs Fahren! – [[Gern]]!", "Thanks for driving! – Any time!"],
   ["es war nicht viel", "Danke! – [[Nichts zu danken]].", "Thanks! – Don't mention it."]]}
 ]},
 {g:"Entschuldigen", gen:"apologising", items:[
  {w:"Entschuldigung!", en:"sorry / excuse me", tag:"zwei Bedeutungen", ex:[
   ["jemanden ansprechen", "[[Entschuldigung]], wo ist hier die Toilette?", "Excuse me, where is the toilet?"],
   ["kleiner Fehler", "Oh, [[Entschuldigung]], das war Ihr Platz!", "Oh, sorry, that was your seat!"],
   ["formell: sich entschuldigen", "[[Entschuldigen Sie]] bitte die Verspätung.", "Please excuse the delay."],
   ["im Brief", "[[Ich möchte mich entschuldigen]], dass ich nicht gekommen bin.", "I'd like to apologise for not coming."],
   ["locker unter Freunden", "[[Sorry]], ich habe deine Nachricht zu spät gesehen.", "Sorry, I saw your message too late."]]},
  {w:"Tut mir leid", en:"I'm sorry", tag:"Mitgefühl und Bedauern", ex:[
   ["wenn etwas nicht geht", "[[Tut mir leid]], am Samstag kann ich nicht.", "Sorry, I can't make it on Saturday."],
   ["stärker", "[[Es tut mir wirklich leid]]!", "I'm really sorry!"],
   ["Mitgefühl", "Dein Vater ist krank? Das [[tut mir leid]].", "Your father is ill? I'm sorry to hear that."],
   ["Antwort: kein Problem", "Entschuldigung! – [[Macht nichts]].", "Sorry! – Never mind."],
   ["Antwort: schon gut", "Es tut mir leid. – [[Schon gut]], das passiert.", "I'm sorry. – It's fine, it happens."]]}
 ]}
]},
{id:"meinung", de:"Gefallen & Meinung", en:"Likes and opinions",
 intro:"Was gefällt Ihnen? gefallen (Dinge, Personen), schmecken (Essen) und gern (Tätigkeiten) sind die wichtigsten Wörter. Auf Vorschläge reagiert man mit Klingt gut, Gute Idee oder Schade.",
 groups:[
 {g:"Mögen", gen:"liking", items:[
  {w:"Das gefällt mir", en:"I like that", tag:"gefallen · schmecken · gern", ex:[
   ["Dinge und Orte: gefallen + Dativ", "Die neue Wohnung [[gefällt mir]] sehr.", "I really like the new flat."],
   ["Essen und Trinken: schmecken", "Der Kuchen [[schmeckt mir]] super!", "I really like the cake!"],
   ["Tätigkeit: Verb + gern", "Ich [[koche gern]] mit Freunden.", "I like cooking with friends."],
   ["Personen und Sachen: mögen", "Ich [[mag]] meine Kollegen sehr.", "I like my colleagues a lot."],
   ["sehr gut finden", "Das [[finde ich toll]]!", "I think that's great!"]]},
  {w:"Das gefällt mir nicht", en:"I don't like that", tag:"höflich Nein sagen", ex:[
   ["höflich", "Die Farbe [[gefällt mir nicht so]].", "I don't really like the colour."],
   ["lieber etwas anderes", "Ich [[trinke lieber]] Tee.", "I'd rather drink tea."],
   ["Essen", "Fisch [[mag ich nicht]] so gern.", "I'm not very keen on fish."],
   ["Meinung", "[[Ich finde]] das ein bisschen zu teuer.", "I find it a bit too expensive."]]}
 ]},
 {g:"Reagieren", gen:"reacting", items:[
  {w:"Klingt gut!", en:"sounds good", tag:"auf einen Vorschlag", ex:[
   ["Zustimmung", "Kino um acht? – [[Klingt gut]]!", "Cinema at eight? – Sounds good!"],
   ["gute Idee", "[[Gute Idee]]! Das machen wir.", "Good idea! Let's do that."],
   ["einverstanden", "[[Alles klar]], dann bis Samstag!", "All right, see you on Saturday then!"],
   ["formell", "[[Einverstanden]], so machen wir es.", "Agreed, we'll do it that way."],
   ["gern", "Kommst du mit? – [[Ja, gern]]!", "Are you coming? – Yes, I'd love to!"]]},
  {w:"Schade! / Echt?", en:"what a shame / really?", tag:"Gefühle zeigen", ex:[
   ["Bedauern", "Du kannst nicht kommen? [[Schade]]!", "You can't come? What a shame!"],
   ["Überraschung", "Du hast eine neue Stelle? [[Echt]]?", "You've got a new job? Really?"],
   ["Freude für jemanden", "Du hast die Prüfung bestanden? [[Wie schön]]!", "You passed the exam? How lovely!"],
   ["Ärger", "Der Zug fällt aus? [[So ein Mist]]!", "The train's cancelled? Damn!"],
   ["egal, beides gut", "Pizza oder Pasta? – [[Mir ist beides recht]].", "Pizza or pasta? – Either is fine with me."]]}
 ]},
 {g:"Unsicher sein", gen:"being unsure", items:[
  {w:"Ich bin mir nicht sicher", en:"I'm not sure", tag:"vorsichtig antworten", ex:[
   ["unsicher", "[[Ich bin mir nicht sicher]].", "I'm not sure."],
   ["es hängt davon ab", "Kommst du mit? – [[Kommt darauf an]], wann ihr losgeht.", "Are you coming? – Depends on when you're leaving."],
   ["vielleicht", "[[Vielleicht]], ich sage dir morgen Bescheid.", "Maybe, I'll let you know tomorrow."],
   ["nachfragen", "[[Meinst du]]?", "Do you think so?"],
   ["keine Ahnung", "[[Keine Ahnung]], frag mal Tom.", "No idea, ask Tom."]]}
 ]}
]},
{id:"vorschlag", de:"Vorschläge & Treffen", en:"Suggestions and meeting up",
 intro:"Wer etwas zusammen machen will, fragt mit Wollen wir …? oder Hast du Lust …?. Los geht's und Komm, wir gehen! heißt let's go. Mit Ich freue mich auf … sagt man, dass man sich auf etwas Kommendes freut.",
 groups:[
 {g:"Vorschlagen", gen:"suggesting", items:[
  {w:"Los geht's!", en:"let's go", tag:"jetzt anfangen", ex:[
   ["jetzt gehen oder anfangen", "Alle da? [[Los geht's]]!", "Everyone here? Let's go!"],
   ["gemeinsam gehen", "[[Komm, wir gehen]]!", "Come on, let's go!"],
   ["wir-Imperativ", "[[Gehen wir]] einen Kaffee trinken!", "Let's go and have a coffee!"],
   ["schnell machen", "[[Beeil dich]], der Bus kommt!", "Hurry up, the bus is coming!"],
   ["anfangen", "[[Fangen wir an]]!", "Let's start!"]]},
  {w:"Wollen wir …?", en:"shall we …?", tag:"etwas vorschlagen", ex:[
   ["Vorschlag als Frage", "[[Wollen wir]] am Sonntag spazieren gehen?", "Shall we go for a walk on Sunday?"],
   ["Lust haben", "[[Hast du Lust]], mit ins Kino zu kommen?", "Do you fancy coming to the cinema?"],
   ["Zeit haben", "[[Hast du am Freitag Zeit]]?", "Are you free on Friday?"],
   ["passen", "[[Passt es dir]] um halb sieben?", "Does half past six suit you?"],
   ["Wie wäre es mit …?", "[[Wie wäre es mit]] einem Picknick?", "How about a picnic?"]]}
 ]},
 {g:"Sich freuen", gen:"looking forward", items:[
  {w:"Ich freue mich auf …", en:"I'm looking forward to …", tag:"auf etwas Kommendes", ex:[
   ["auf + Akkusativ: Zukunft", "[[Ich freue mich auf]] das Wochenende!", "I'm looking forward to the weekend!"],
   ["jemanden sehen", "[[Ich freue mich darauf, dich zu sehen]]!", "I'm looking forward to seeing you!"],
   ["kurz", "Bis Samstag – [[ich freue mich]]!", "See you Saturday – I'm looking forward to it!"],
   ["formell im Brief", "[[Ich freue mich auf Ihre Antwort]].", "I look forward to your reply."],
   ["über + Akkusativ: schon passiert", "[[Ich habe mich über]] dein Geschenk sehr gefreut.", "I was really pleased with your present."]]},
  {w:"Schön, dich zu sehen!", en:"nice to see you", tag:"beim Treffen", ex:[
   ["beim Treffen", "[[Schön, dich zu sehen]]!", "Nice to see you!"],
   ["beim ersten Treffen", "[[Freut mich]], Sie kennenzulernen.", "Pleased to meet you."],
   ["Antwort", "Freut mich! – [[Mich auch]].", "Nice to meet you! – Likewise."],
   ["Willkommen", "[[Herzlich willkommen]] bei uns!", "A warm welcome to our home!"],
   ["nach dem Treffen", "[[Es war schön mit dir]]. Bis bald!", "It was lovely seeing you. See you soon!"]]}
 ]},
 {g:"Absagen", gen:"saying no", items:[
  {w:"Leider kann ich nicht", en:"sorry, I can't", tag:"höflich absagen", ex:[
   ["absagen", "[[Leider kann ich]] am Samstag [[nicht]].", "Unfortunately I can't make it on Saturday."],
   ["anderes Mal", "[[Vielleicht ein anderes Mal]]?", "Maybe another time?"],
   ["Grund", "[[Ich habe schon etwas vor]].", "I've already got plans."],
   ["später zusagen", "[[Ich schaue mal]] und sage dir Bescheid.", "I'll see and let you know."],
   ["Danke trotzdem", "[[Danke für die Einladung]], schade, dass es nicht klappt!", "Thanks for the invitation, shame it doesn't work out!"]]}
 ]}
]},
{id:"zeit", de:"Zeit & Termine", en:"Time and appointments",
 intro:"Pünktlichkeit ist in Deutschland wichtig. Wer zu spät kommt, sagt vorher Bescheid: Ich bin spät dran – ich komme zehn Minuten später. Für Termine fragt man: Wann passt es Ihnen? und antwortet Das passt mir gut oder Da kann ich leider nicht.",
 groups:[
 {g:"Uhrzeit und Zeit haben", gen:"time and being free", items:[
  {w:"Wie spät ist es?", en:"what time is it?", tag:"Uhrzeit fragen", ex:[
   ["Uhrzeit fragen", "Entschuldigung, [[wie spät ist es]]?", "Excuse me, what time is it?"],
   ["auch üblich", "[[Wie viel Uhr ist es]]?", "What time is it?"],
   ["Antwort", "[[Es ist gleich]] halb drei.", "It's almost half past two."],
   ["keine Zeit", "[[Ich habe gerade keine Zeit]].", "I don't have time right now."],
   ["kurz Zeit", "[[Hast du kurz Zeit]]?", "Have you got a moment?"]]},
  {w:"Ich bin spät dran", en:"I'm running late", tag:"zu spät", ex:[
   ["spät sein", "Sorry, [[ich bin spät dran]]!", "Sorry, I'm running late!"],
   ["Bescheid sagen", "[[Ich komme etwa zehn Minuten später]].", "I'll be about ten minutes late."],
   ["im Stau", "[[Ich stehe im Stau]].", "I'm stuck in traffic."],
   ["Zug verspätet", "[[Mein Zug hat Verspätung]].", "My train is delayed."],
   ["gleich da", "[[Ich bin gleich da]]!", "I'll be there in a minute!"]]}
 ]},
 {g:"Termine", gen:"appointments", items:[
  {w:"Wann passt es Ihnen?", en:"when suits you?", tag:"Termin finden", ex:[
   ["formell fragen", "[[Wann passt es Ihnen]] am besten?", "When suits you best?"],
   ["informell fragen", "[[Wann hast du Zeit]]?", "When are you free?"],
   ["zusagen", "Dienstag um zehn? – [[Das passt mir gut]].", "Tuesday at ten? – That suits me well."],
   ["absagen", "[[Da kann ich leider nicht]].", "I'm afraid I can't then."],
   ["Alternative", "[[Geht es auch am Nachmittag]]?", "Is the afternoon possible too?"]]},
  {w:"Können wir das verschieben?", en:"can we postpone it?", tag:"Termin ändern", ex:[
   ["verschieben", "[[Können wir den Termin verschieben]]?", "Can we postpone the appointment?"],
   ["absagen", "[[Ich muss den Termin leider absagen]].", "Unfortunately I have to cancel the appointment."],
   ["neuer Termin", "[[Haben Sie noch einen anderen Termin frei]]?", "Do you have another appointment free?"],
   ["bestätigen", "[[Also dann]]: Donnerstag um 14 Uhr.", "So then: Thursday at 2 pm."],
   ["erinnern", "[[Denk an]] den Termin morgen!", "Remember the appointment tomorrow!"]]}
 ]}
]},
{id:"unterwegs", de:"Unterwegs", en:"Out and about",
 intro:"Nach dem Weg fragen, im Bus oder in der Bahn: Mit Entschuldigung, wie komme ich zum …? kommen Sie fast überall hin. Ist hier noch frei? ist die Frage für einen freien Platz.",
 groups:[
 {g:"Nach dem Weg fragen", gen:"asking the way", items:[
  {w:"Wie komme ich zum …?", en:"how do I get to …?", tag:"zu + Dativ", ex:[
   ["zum / zur", "Entschuldigung, [[wie komme ich zum]] Bahnhof?", "Excuse me, how do I get to the station?"],
   ["Ort suchen", "[[Wo ist hier]] eine Apotheke?", "Where's a pharmacy around here?"],
   ["Entfernung", "[[Ist das weit]]?", "Is it far?"],
   ["zu Fuß", "[[Kann ich zu Fuß gehen]]?", "Can I walk there?"],
   ["fremd hier", "Tut mir leid, [[ich bin nicht von hier]].", "Sorry, I'm not from around here."]]},
  {w:"Geradeaus, dann links", en:"straight on, then left", tag:"den Weg erklären", ex:[
   ["Richtung", "[[Gehen Sie geradeaus]] und dann die zweite Straße links.", "Go straight on and then take the second street on the left."],
   ["Ampel", "[[An der Ampel]] biegen Sie rechts ab.", "Turn right at the traffic lights."],
   ["gegenüber", "Die Post ist [[gegenüber]] der Kirche.", "The post office is opposite the church."],
   ["Dauer", "[[Das sind etwa]] fünf Minuten zu Fuß.", "It's about five minutes on foot."]]}
 ]},
 {g:"Bus und Bahn", gen:"bus and train", items:[
  {w:"Ist hier noch frei?", en:"is this seat free?", tag:"im Bus und im Zug", ex:[
   ["Platz fragen", "[[Ist hier noch frei]]?", "Is this seat free?"],
   ["Antwort ja", "Ja, [[bitte schön]].", "Yes, go ahead."],
   ["Antwort nein", "[[Nein, hier sitzt schon jemand]].", "No, someone's sitting here."],
   ["vorbei", "[[Darf ich mal vorbei]]?", "Can I get past, please?"],
   ["aussteigen", "[[Ich muss hier aussteigen]].", "I have to get off here."]]},
  {w:"Welcher Bus fährt …?", en:"which bus goes …?", tag:"Fahrt planen", ex:[
   ["Linie fragen", "[[Welcher Bus fährt]] zum Krankenhaus?", "Which bus goes to the hospital?"],
   ["direkt", "[[Fährt dieser Zug]] nach Mainz?", "Does this train go to Mainz?"],
   ["umsteigen", "[[Muss ich umsteigen]]?", "Do I have to change?"],
   ["Haltestelle", "[[Wie viele Stationen sind es]] noch?", "How many stops is it still?"],
   ["Ticket", "[[Wo kann ich ein Ticket kaufen]]?", "Where can I buy a ticket?"]]}
 ]}
]},
{id:"smalltalk", de:"Wetter & Wochenende", en:"Weather and weekend small talk",
 intro:"Über das Wetter und das Wochenende redet man mit Kollegen, Nachbarn und an der Kasse. Kurze Kommentare (Schönes Wetter heute!) und Fragen (Wie war dein Wochenende?) reichen völlig.",
 groups:[
 {g:"Das Wetter", gen:"the weather", items:[
  {w:"Schönes Wetter heute!", en:"nice weather today", tag:"Wetter kommentieren", ex:[
   ["positiv", "[[Schönes Wetter heute]]!", "Nice weather today!"],
   ["Regen", "[[Was für ein Regen]]!", "What rain!"],
   ["kalt", "[[Ganz schön kalt heute]], oder?", "Pretty cold today, isn't it?"],
   ["heiß", "[[Es ist so heiß]] – ich brauche ein Eis!", "It's so hot – I need an ice cream!"],
   ["Vorhersage", "[[Morgen soll es]] wieder regnen.", "It's supposed to rain again tomorrow."]]}
 ]},
 {g:"Freizeit", gen:"free time", items:[
  {w:"Wie war dein Wochenende?", en:"how was your weekend?", tag:"Montagsfrage", ex:[
   ["fragen", "[[Wie war dein Wochenende]]?", "How was your weekend?"],
   ["schön", "[[Sehr schön]], wir waren im Taunus wandern.", "Very nice, we went hiking in the Taunus."],
   ["ruhig", "[[Ganz ruhig]] – ich habe nur ausgeschlafen.", "Very quiet – I just had a lie-in."],
   ["Pläne fragen", "[[Was hast du am Wochenende vor]]?", "What are you doing at the weekend?"],
   ["noch nichts geplant", "[[Ich weiß noch nicht]], vielleicht gehen wir ins Kino.", "I don't know yet, maybe we'll go to the cinema."]]}
 ]}
]},
{id:"wuensche", de:"Wünsche & Glückwünsche", en:"Wishes and congratulations",
 intro:"Für fast jede Situation gibt es einen festen Wunsch: Viel Glück, Viel Spaß, Gute Besserung, Schönes Wochenende. Die Antwort auf gute Wünsche ist oft Danke, gleichfalls! oder Danke, dir auch!",
 groups:[
 {g:"Wünsche", gen:"wishes", items:[
  {w:"Viel Glück! / Viel Spaß!", en:"good luck / have fun", tag:"Viel + Nomen", ex:[
   ["vor einer Prüfung", "[[Viel Glück]] morgen bei der Prüfung!", "Good luck with the exam tomorrow!"],
   ["vor Arbeit oder Prüfung", "[[Viel Erfolg]] beim Vorstellungsgespräch!", "Good luck with the job interview!"],
   ["vor einer Freizeit", "[[Viel Spaß]] auf der Party!", "Have fun at the party!"],
   ["krank", "[[Gute Besserung]]!", "Get well soon!"],
   ["vor dem Essen", "[[Guten Appetit]]! – Danke, gleichfalls!", "Enjoy your meal! – Thanks, you too!"]]},
  {w:"Schönes Wochenende!", en:"have a nice weekend", tag:"Schöne(n/s) + Zeit", ex:[
   ["Freitag bei der Arbeit", "[[Schönes Wochenende]]! – Danke, dir auch!", "Have a nice weekend! – Thanks, you too!"],
   ["nach der Arbeit", "[[Schönen Feierabend]]!", "Have a nice evening (after work)!"],
   ["vor einer Reise", "[[Gute Reise]] und komm gut an!", "Have a good trip and arrive safely!"],
   ["vor dem Urlaub", "[[Schönen Urlaub]]! Erhol dich gut!", "Have a nice holiday! Get some rest!"],
   ["Antwort", "Schönen Abend! – [[Danke, gleichfalls]]!", "Have a nice evening! – Thanks, you too!"]]}
 ]},
 {g:"Glückwünsche", gen:"congratulations", items:[
  {w:"Herzlichen Glückwunsch!", en:"congratulations", tag:"zu + Dativ", ex:[
   ["Geburtstag", "[[Herzlichen Glückwunsch zum Geburtstag]]!", "Happy birthday!"],
   ["kurz und locker", "[[Alles Gute]] zum Geburtstag!", "Happy birthday!"],
   ["Prüfung, Job", "[[Glückwunsch]] zur bestandenen Prüfung!", "Congratulations on passing the exam!"],
   ["Hochzeit oder Baby", "[[Herzlichen Glückwunsch zur]] Hochzeit!", "Congratulations on your wedding!"],
   ["Feste", "[[Frohe Weihnachten]] und einen guten Rutsch!", "Merry Christmas and a happy new year!"]]}
 ]}
]},
{id:"gespraech", de:"Im Gespräch", en:"In a conversation",
 intro:"Diese Sätze helfen, wenn Sie etwas nicht verstehen, Zeit brauchen oder zeigen wollen, dass Sie zuhören. Im DTZ-Sprechen sind sie sehr nützlich: Fragen Sie lieber nach, statt still zu sein.",
 groups:[
 {g:"Nachfragen", gen:"checking", items:[
  {w:"Wie bitte?", en:"pardon?", tag:"nicht verstanden", ex:[
   ["nicht gehört", "[[Wie bitte]]? Es ist so laut hier.", "Pardon? It's so loud here."],
   ["wiederholen", "[[Können Sie das bitte wiederholen]]?", "Could you repeat that, please?"],
   ["langsamer", "[[Können Sie bitte etwas langsamer sprechen]]?", "Could you speak a bit more slowly, please?"],
   ["Wort nicht verstanden", "[[Was bedeutet]] Abschlag?", "What does Abschlag mean?"],
   ["buchstabieren", "[[Können Sie das bitte buchstabieren]]?", "Could you spell that, please?"]]},
  {w:"Habe ich richtig verstanden?", en:"did I understand correctly?", tag:"prüfen", ex:[
   ["prüfen", "[[Habe ich das richtig verstanden]]: Der Termin ist am Dienstag?", "Have I understood correctly: the appointment is on Tuesday?"],
   ["meinen", "[[Meinen Sie]], ich soll morgen wiederkommen?", "Do you mean I should come back tomorrow?"],
   ["Beispiel", "[[Können Sie mir ein Beispiel geben]]?", "Can you give me an example?"],
   ["verstanden", "[[Ach so]], jetzt verstehe ich.", "Oh, I see, now I understand."]]}
 ]},
 {g:"Zuhören und Zeit gewinnen", gen:"listening and gaining time", items:[
  {w:"Genau! / Stimmt!", en:"exactly / that's right", tag:"zustimmen", ex:[
   ["genau so", "[[Genau]], das meine ich.", "Exactly, that's what I mean."],
   ["das ist richtig", "[[Stimmt]], daran habe ich nicht gedacht.", "True, I didn't think of that."],
   ["Meinung teilen", "[[Da hast du recht]].", "You're right there."],
   ["höflich widersprechen", "[[Das sehe ich ein bisschen anders]].", "I see that a bit differently."],
   ["zuhören", "[[Ach wirklich]]? Und dann?", "Oh really? And then?"]]},
  {w:"Moment mal …", en:"just a moment", tag:"Zeit gewinnen", ex:[
   ["kurz warten", "[[Moment mal]], ich suche schnell den Brief.", "Just a moment, I'll quickly find the letter."],
   ["nachdenken", "[[Wie soll ich sagen]] … es war sehr kompliziert.", "How shall I put it … it was very complicated."],
   ["Wort fehlt", "[[Wie heißt das auf Deutsch]]?", "What's that called in German?"],
   ["also", "[[Also]], ich glaube, das ist eine gute Lösung.", "Well, I think that's a good solution."],
   ["ehrlich", "[[Ehrlich gesagt]] weiß ich das nicht genau.", "To be honest, I don't know exactly."]]}
 ]}
]},
{id:"telefon", de:"Telefon & Nachrichten", en:"Phone and messages",
 intro:"Am Telefon nennt man zuerst den Namen: Hier ist … / Mein Name ist …. Wenn jemand nicht da ist: Kann ich etwas ausrichten? In Nachrichten (WhatsApp, SMS) schreibt man kurz und locker.",
 groups:[
 {g:"Anrufen", gen:"calling", items:[
  {w:"Kann ich … sprechen?", en:"can I speak to …?", tag:"am Telefon", ex:[
   ["sich melden", "Guten Tag, [[hier ist]] Tom Becker.", "Hello, this is Tom Becker."],
   ["jemanden verlangen", "[[Kann ich bitte]] Frau Klein [[sprechen]]?", "Can I speak to Ms Klein, please?"],
   ["Grund nennen", "[[Ich rufe wegen]] meiner Rechnung an.", "I'm calling about my bill."],
   ["verbinden", "[[Einen Moment, ich verbinde Sie]].", "One moment, I'll put you through."],
   ["schlecht hören", "[[Ich verstehe Sie schlecht]] – die Verbindung ist schlecht.", "I can hardly hear you – the line is bad."]]},
  {w:"Kann ich etwas ausrichten?", en:"can I take a message?", tag:"jemand ist nicht da", ex:[
   ["nicht da", "[[Sie ist gerade nicht da]].", "She's not here at the moment."],
   ["Nachricht anbieten", "[[Kann ich etwas ausrichten]]?", "Can I take a message?"],
   ["um Rückruf bitten", "[[Könnte sie mich bitte zurückrufen]]?", "Could she call me back, please?"],
   ["später anrufen", "[[Ich rufe später noch mal an]].", "I'll call again later."],
   ["Nummer geben", "[[Meine Nummer ist]] 0176 …", "My number is 0176 …"]]}
 ]},
 {g:"Nachrichten", gen:"messages", items:[
  {w:"Schreib mir einfach!", en:"just text me", tag:"WhatsApp und SMS", ex:[
   ["Nachricht schicken", "[[Schreib mir einfach]], wenn du da bist.", "Just text me when you're there."],
   ["Bescheid geben", "[[Ich schicke dir]] die Adresse per WhatsApp.", "I'll send you the address on WhatsApp."],
   ["später antworten", "[[Ich melde mich später]]!", "I'll get back to you later!"],
   ["angekommen", "[[Bin gut angekommen]]!", "Arrived safely!"],
   ["kurz entschuldigen", "Sorry, [[hab deine Nachricht erst jetzt gesehen]].", "Sorry, only just saw your message."]]}
 ]}
]},
{id:"befinden", de:"Wie es mir geht", en:"How I feel",
 intro:"Wie es einem geht, sagt man oft mit mir ist … (Mir ist kalt, mir ist schlecht) oder ich habe … (Ich habe Hunger, ich habe keine Lust). Wer andere beruhigt, sagt Keine Sorge! oder Das ist nicht schlimm.",
 groups:[
 {g:"Körper und Gefühle", gen:"body and feelings", items:[
  {w:"Mir ist kalt", en:"I'm cold", tag:"mir ist + Adjektiv", ex:[
   ["kalt / warm", "[[Mir ist kalt]] – kannst du das Fenster zumachen?", "I'm cold – can you close the window?"],
   ["übel", "[[Mir ist schlecht]], ich glaube, ich habe etwas Falsches gegessen.", "I feel sick, I think I ate something bad."],
   ["schwindlig", "[[Mir ist schwindlig]], ich muss mich kurz setzen.", "I feel dizzy, I have to sit down for a moment."],
   ["langweilig", "[[Mir ist langweilig]].", "I'm bored."],
   ["nicht gut", "[[Mir geht es heute nicht so gut]].", "I'm not feeling so well today."]]},
  {w:"Ich habe Hunger", en:"I'm hungry", tag:"ich habe + Nomen", ex:[
   ["Hunger und Durst", "[[Ich habe Hunger]] – wollen wir etwas essen?", "I'm hungry – shall we get something to eat?"],
   ["keine Lust", "[[Ich habe keine Lust]], heute zu kochen.", "I don't feel like cooking today."],
   ["müde", "[[Ich bin total müde]].", "I'm really tired."],
   ["Stress", "[[Ich bin gerade sehr gestresst]].", "I'm very stressed at the moment."],
   ["Angst", "[[Ich habe Angst vor]] der Prüfung.", "I'm scared of the exam."]]}
 ]},
 {g:"Beruhigen", gen:"reassuring", items:[
  {w:"Keine Sorge!", en:"don't worry", tag:"jemanden beruhigen", ex:[
   ["beruhigen", "[[Keine Sorge]], das schaffst du!", "Don't worry, you can do it!"],
   ["nicht schlimm", "[[Das ist nicht schlimm]].", "That's not a problem."],
   ["passiert", "[[Das kann jedem passieren]].", "That can happen to anyone."],
   ["Mut machen", "[[Kopf hoch]]!", "Chin up!"],
   ["Hilfe anbieten", "[[Wenn du reden willst]], ich bin da.", "If you want to talk, I'm here."]]}
 ]}
]},
{id:"bitten", de:"Bitten & Hilfe", en:"Requests and help",
 intro:"Höfliche Bitten klingen mit Könnten Sie …?, Würden Sie …? oder Wäre es möglich …? besonders freundlich. Wer Hilfe anbietet, sagt Kann ich Ihnen helfen? oder Soll ich …?.",
 groups:[
 {g:"Bitten", gen:"asking", items:[
  {w:"Könnten Sie …?", en:"could you …?", tag:"höflich bitten", ex:[
   ["höflich", "[[Könnten Sie]] mir bitte helfen?", "Could you help me, please?"],
   ["sehr höflich", "[[Würden Sie]] bitte die Tür aufhalten?", "Would you hold the door open, please?"],
   ["um Erlaubnis bitten", "[[Darf ich]] kurz Ihr Telefon benutzen?", "May I use your phone for a moment?"],
   ["formell, Amt und Brief", "[[Wäre es möglich]], den Termin zu verschieben?", "Would it be possible to postpone the appointment?"],
   ["um einen Gefallen bitten", "[[Kannst du mir einen Gefallen tun]]?", "Can you do me a favour?"]]},
  {w:"Kann ich helfen?", en:"can I help?", tag:"Hilfe anbieten", ex:[
   ["Hilfe anbieten", "[[Kann ich Ihnen helfen]]?", "Can I help you?"],
   ["konkret anbieten", "[[Soll ich]] die Tasche tragen?", "Shall I carry the bag?"],
   ["Hilfe annehmen", "Ja, [[das wäre nett]]!", "Yes, that would be kind!"],
   ["Hilfe ablehnen", "[[Danke, es geht schon]].", "Thanks, I can manage."],
   ["Bescheid sagen", "[[Sag Bescheid]], wenn du etwas brauchst!", "Let me know if you need anything!"]]}
 ]}
]},
{id:"einkaufen", de:"Einkaufen & Restaurant", en:"Shopping and eating out",
 intro:"Ich hätte gern … ist die höflichste Art zu bestellen. Im Restaurant ruft man den Kellner mit Entschuldigung! und bezahlt mit Zahlen, bitte!. Stimmt so heißt: Der Rest ist Trinkgeld.",
 groups:[
 {g:"Bestellen und bezahlen", gen:"ordering and paying", items:[
  {w:"Ich hätte gern …", en:"I'd like …", tag:"bestellen", ex:[
   ["höflich bestellen", "[[Ich hätte gern]] zwei Brötchen, bitte.", "I'd like two bread rolls, please."],
   ["auch üblich", "[[Ich nehme]] die Tomatensuppe.", "I'll have the tomato soup."],
   ["Frage im Geschäft", "Sonst noch etwas? – [[Nein, danke, das war's]].", "Anything else? – No, thanks, that's all."],
   ["nach etwas fragen", "[[Haben Sie]] das auch in Größe M?", "Do you have this in size M too?"],
   ["nur schauen", "[[Ich schaue nur]], danke.", "I'm just looking, thanks."]]},
  {w:"Zahlen, bitte!", en:"the bill, please", tag:"bezahlen", ex:[
   ["im Restaurant", "Entschuldigung, [[zahlen, bitte]]!", "Excuse me, the bill, please!"],
   ["zusammen oder getrennt", "Zusammen oder getrennt? – [[Getrennt, bitte]].", "Together or separately? – Separately, please."],
   ["mit Karte", "[[Kann ich mit Karte zahlen]]?", "Can I pay by card?"],
   ["Trinkgeld", "Das macht 18,50 Euro. – [[Machen Sie 20]].", "That's 18.50 euros. – Make it 20."],
   ["Rest behalten", "Hier sind 20 Euro. [[Stimmt so]].", "Here's 20 euros. Keep the change."]]}
 ]}
]},
{id:"arbeit", de:"Bei der Arbeit", en:"At work",
 intro:"Am Arbeitsplatz gibt es viele feste Sätze: Mahlzeit! zur Mittagszeit, Schönen Feierabend! am Ende des Tages. Mit Ich kümmere mich darum oder Ich melde mich zeigen Sie, dass Sie zuverlässig sind.",
 groups:[
 {g:"Im Team", gen:"in the team", items:[
  {w:"Ich kümmere mich darum", en:"I'll take care of it", tag:"Verantwortung zeigen", ex:[
   ["Aufgabe übernehmen", "[[Ich kümmere mich darum]].", "I'll take care of it."],
   ["später antworten", "[[Ich melde mich]] heute Nachmittag bei Ihnen.", "I'll get back to you this afternoon."],
   ["gleich zurück", "[[Ich bin gleich zurück]].", "I'll be right back."],
   ["fertig", "[[Ich bin fertig]] – brauchst du noch Hilfe?", "I'm done – do you need any more help?"],
   ["nachfragen", "[[Kurze Frage]]: Wo finde ich die Formulare?", "Quick question: where do I find the forms?"]]},
  {w:"Mahlzeit! / Feierabend!", en:"lunch greeting / end of work", tag:"typisch deutsch", ex:[
   ["Mittagszeit im Betrieb", "[[Mahlzeit]]! Gehst du auch in die Kantine?", "Hi! (lunchtime) Are you going to the canteen too?"],
   ["Ende des Arbeitstages", "Ich mache jetzt [[Feierabend]].", "I'm finishing work now."],
   ["Wunsch zum Feierabend", "[[Schönen Feierabend]]! Bis morgen!", "Have a nice evening! See you tomorrow!"],
   ["Pause", "Lass uns kurz [[Pause machen]].", "Let's take a short break."],
   ["Arbeit gut gemacht", "[[Gut gemacht]]! Danke für deine Hilfe.", "Well done! Thanks for your help."]]}
 ]}
]},
{id:"zuhause", de:"Zu Hause", en:"At home",
 intro:"In der Familie und zu Hause spricht man kurz und direkt, oft mit Imperativ und bitte. Diese Sätze hören Sie jeden Tag – beim Essen, beim Aufräumen und abends.",
 groups:[
 {g:"Im Alltag", gen:"everyday life", items:[
  {w:"Das Essen ist fertig!", en:"dinner's ready", tag:"beim Essen", ex:[
   ["rufen", "[[Das Essen ist fertig]]! Kommt bitte!", "Dinner's ready! Come on!"],
   ["helfen", "[[Kannst du bitte den Tisch decken]]?", "Can you lay the table, please?"],
   ["noch mehr", "[[Möchtest du noch etwas]]?", "Would you like some more?"],
   ["satt", "Nein danke, [[ich bin satt]].", "No thanks, I'm full."],
   ["Lob", "[[Das hat super geschmeckt]]!", "That was delicious!"]]},
  {w:"Räum bitte auf!", en:"please tidy up", tag:"Aufgaben verteilen", ex:[
   ["aufräumen", "[[Räum bitte]] dein Zimmer [[auf]]!", "Please tidy your room!"],
   ["Müll", "[[Wer bringt]] heute den Müll raus?", "Who's taking the rubbish out today?"],
   ["Licht", "[[Mach bitte das Licht aus]].", "Please turn the light off."],
   ["suchen", "[[Hast du]] meinen Schlüssel [[gesehen]]?", "Have you seen my key?"],
   ["jetzt gleich", "[[Ich mache das gleich]].", "I'll do it in a minute."]]}
 ]}
]}
];

/* English for the orange labels above each example */
window.ASEN = {
 "informell: Freunde, Kollegen":"informal: friends, colleagues",
 "formell: Amt, Arzt, Geschäft":"formal: offices, doctor, shops",
 "morgens bis etwa 11 Uhr":"in the morning, until about 11",
 "ab etwa 18 Uhr":"from about 6 pm",
 "Süddeutschland und Österreich":"southern Germany and Austria",
 "Frage unter Freunden":"question among friends",
 "Antwort: gut":"answer: fine",
 "Antwort: nicht so gut":"answer: not so good",
 "formelle Frage":"formal question",
 "lange nicht gesehen":"long time no see",
 "informell, überall":"informal, everywhere",
 "später am selben Tag":"later the same day",
 "in den nächsten Tagen":"in the next few days",
 "mit Tag oder Uhrzeit":"with a day or time",
 "gleich, in ein paar Minuten":"in a few minutes",
 "formell: Amt, Arzt":"formal: offices, doctor",
 "am Telefon":"on the phone",
 "nach dem Einkaufen":"after shopping",
 "Freunde: pass auf dich auf":"friends: take care",
 "abends":"in the evening",
 "kurz, überall":"short, everywhere",
 "sehr freundlich":"very friendly",
 "Danke für + Akkusativ":"Danke für + accusative",
 "sehr formell, im Brief":"very formal, in letters",
 "vorher danken, im Brief":"thanking in advance, in letters",
 "formell: Brief, Amt, Arbeit":"formal: letters, offices, work",
 "informell":"informal",
 "für Geduld":"for patience",
 "für die Hilfe":"for the help",
 "im Brief vor dem Gruß":"in a letter, before the sign-off",
 "Standard":"standard",
 "freundlich":"friendly",
 "locker":"casual",
 "kurz und herzlich":"short and warm",
 "es war nicht viel":"it was nothing",
 "jemanden ansprechen":"approaching someone",
 "kleiner Fehler":"a small mistake",
 "formell: sich entschuldigen":"formal: apologising",
 "im Brief":"in letters",
 "locker unter Freunden":"casual, among friends",
 "wenn etwas nicht geht":"when something isn't possible",
 "stärker":"stronger",
 "Mitgefühl":"sympathy",
 "Antwort: kein Problem":"answer: no problem",
 "Antwort: schon gut":"answer: it's fine",
 "Dinge und Orte: gefallen + Dativ":"things and places: gefallen + dative",
 "Essen und Trinken: schmecken":"food and drink: schmecken",
 "Tätigkeit: Verb + gern":"activities: verb + gern",
 "Personen und Sachen: mögen":"people and things: mögen",
 "sehr gut finden":"thinking something is great",
 "höflich":"polite",
 "lieber etwas anderes":"preferring something else",
 "Essen":"food",
 "Meinung":"opinion",
 "Zustimmung":"agreeing",
 "gute Idee":"good idea",
 "einverstanden":"agreed",
 "formell":"formal",
 "gern":"gladly",
 "Bedauern":"regret",
 "Überraschung":"surprise",
 "Freude für jemanden":"being happy for someone",
 "Ärger":"annoyance",
 "egal, beides gut":"either is fine",
 "jetzt gehen oder anfangen":"going or starting now",
 "gemeinsam gehen":"going together",
 "wir-Imperativ":"wir imperative (let's)",
 "schnell machen":"hurrying",
 "anfangen":"starting",
 "Vorschlag als Frage":"a suggestion as a question",
 "Lust haben":"fancying something",
 "Zeit haben":"having time",
 "passen":"suiting",
 "Wie wäre es mit …?":"how about …?",
 "auf + Akkusativ: Zukunft":"auf + accusative: the future",
 "jemanden sehen":"seeing someone",
 "kurz":"short",
 "formell im Brief":"formal, in letters",
 "über + Akkusativ: schon passiert":"über + accusative: already happened",
 "beim Treffen":"when meeting",
 "beim ersten Treffen":"when meeting for the first time",
 "Antwort":"answer",
 "Willkommen":"welcome",
 "nach dem Treffen":"after meeting",
 "vor einer Prüfung":"before an exam",
 "vor Arbeit oder Prüfung":"before work or an exam",
 "vor einer Freizeit":"before a free-time activity",
 "krank":"ill",
 "vor dem Essen":"before a meal",
 "Freitag bei der Arbeit":"Friday at work",
 "nach der Arbeit":"after work",
 "vor einer Reise":"before a trip",
 "vor dem Urlaub":"before a holiday",
 "Geburtstag":"birthday",
 "kurz und locker":"short and casual",
 "Prüfung, Job":"exam, job",
 "Hochzeit oder Baby":"wedding or baby",
 "Feste":"holidays",
 "nicht gehört":"didn't hear",
 "wiederholen":"repeating",
 "langsamer":"more slowly",
 "Wort nicht verstanden":"didn't understand a word",
 "buchstabieren":"spelling",
 "prüfen":"checking",
 "meinen":"meaning",
 "Beispiel":"example",
 "verstanden":"understood",
 "genau so":"exactly",
 "das ist richtig":"that's right",
 "Meinung teilen":"sharing an opinion",
 "höflich widersprechen":"disagreeing politely",
 "zuhören":"listening",
 "kurz warten":"waiting briefly",
 "nachdenken":"thinking",
 "Wort fehlt":"a word is missing",
 "also":"well",
 "ehrlich":"honestly",
 "sehr höflich":"very polite",
 "um Erlaubnis bitten":"asking permission",
 "formell, Amt und Brief":"formal, offices and letters",
 "um einen Gefallen bitten":"asking a favour",
 "Hilfe anbieten":"offering help",
 "konkret anbieten":"making a concrete offer",
 "Hilfe annehmen":"accepting help",
 "Hilfe ablehnen":"declining help",
 "Bescheid sagen":"letting someone know",
 "höflich bestellen":"ordering politely",
 "auch üblich":"also common",
 "Frage im Geschäft":"question in a shop",
 "nach etwas fragen":"asking for something",
 "nur schauen":"just looking",
 "im Restaurant":"in a restaurant",
 "zusammen oder getrennt":"together or separately",
 "mit Karte":"by card",
 "Trinkgeld":"tip",
 "Rest behalten":"keep the change",
 "Aufgabe übernehmen":"taking on a task",
 "später antworten":"answering later",
 "gleich zurück":"right back",
 "fertig":"finished",
 "nachfragen":"asking",
 "Mittagszeit im Betrieb":"lunchtime at work",
 "Ende des Arbeitstages":"end of the working day",
 "Wunsch zum Feierabend":"wish for the evening",
 "Pause":"break",
 "Arbeit gut gemacht":"a job well done",
 "Frage informell":"informal question",
 "Frage formell":"formal question",
 "seit wann hier":"how long you've been here",
 "Gegenfrage":"asking back",
 "Frage":"question",
 "Stadtteil":"district",
 "Wohnung beschreiben":"describing your flat",
 "gefällt es dir?":"do you like it?",
 "Beruf ohne Artikel":"job without an article",
 "arbeitssuchend":"job-seeking",
 "Ausbildung und Kurs":"training and courses",
 "Zufriedenheit":"satisfaction",
 "verheiratet":"married",
 "Familie im Ausland":"family abroad",
 "Hobbys":"hobbies",
 "Uhrzeit fragen":"asking the time",
 "keine Zeit":"no time",
 "kurz Zeit":"a moment",
 "spät sein":"being late",
 "im Stau":"in traffic",
 "Zug verspätet":"delayed train",
 "gleich da":"almost there",
 "formell fragen":"asking formally",
 "informell fragen":"asking informally",
 "zusagen":"accepting",
 "absagen":"declining",
 "Alternative":"alternative",
 "verschieben":"postponing",
 "neuer Termin":"new appointment",
 "bestätigen":"confirming",
 "erinnern":"reminding",
 "zum / zur":"zum / zur",
 "Ort suchen":"looking for a place",
 "Entfernung":"distance",
 "zu Fuß":"on foot",
 "fremd hier":"not from here",
 "Richtung":"direction",
 "Ampel":"traffic lights",
 "gegenüber":"opposite",
 "Dauer":"how long",
 "Platz fragen":"asking for a seat",
 "Antwort ja":"answer: yes",
 "Antwort nein":"answer: no",
 "vorbei":"getting past",
 "aussteigen":"getting off",
 "Linie fragen":"asking about a line",
 "direkt":"direct",
 "umsteigen":"changing",
 "Haltestelle":"stops",
 "Ticket":"ticket",
 "positiv":"positive",
 "Regen":"rain",
 "kalt":"cold",
 "heiß":"hot",
 "Vorhersage":"forecast",
 "fragen":"asking",
 "schön":"nice",
 "ruhig":"quiet",
 "Pläne fragen":"asking about plans",
 "noch nichts geplant":"nothing planned yet",
 "sich melden":"saying who you are",
 "jemanden verlangen":"asking for someone",
 "Grund nennen":"giving the reason",
 "verbinden":"putting through",
 "schlecht hören":"bad line",
 "nicht da":"not here",
 "Nachricht anbieten":"offering to take a message",
 "um Rückruf bitten":"asking for a call back",
 "später anrufen":"calling later",
 "Nummer geben":"giving your number",
 "Nachricht schicken":"sending a message",
 "Bescheid geben":"letting someone know",
 "angekommen":"arrived",
 "kurz entschuldigen":"quick apology",
 "kalt / warm":"cold / warm",
 "übel":"feeling sick",
 "schwindlig":"dizzy",
 "langweilig":"bored",
 "nicht gut":"not well",
 "Hunger und Durst":"hunger and thirst",
 "keine Lust":"not feeling like it",
 "müde":"tired",
 "Stress":"stress",
 "Angst":"fear",
 "beruhigen":"reassuring",
 "nicht schlimm":"not a problem",
 "passiert":"it happens",
 "Mut machen":"encouraging",
 "rufen":"calling",
 "helfen":"helping",
 "noch mehr":"more",
 "satt":"full",
 "Lob":"praise",
 "aufräumen":"tidying up",
 "Müll":"rubbish",
 "Licht":"light",
 "suchen":"looking for something",
 "jetzt gleich":"right away",
 "unsicher":"unsure",
 "es hängt davon ab":"it depends",
 "vielleicht":"maybe",
 "keine Ahnung":"no idea",
 "anderes Mal":"another time",
 "Grund":"reason",
 "später zusagen":"deciding later",
 "Danke trotzdem":"thanks anyway"
};
