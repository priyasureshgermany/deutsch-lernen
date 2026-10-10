/* Modelltests B1 for test.js: seven whole exams, each question with its
   answer key (a = index into o / list, -1 = x; rf: true = richtig) and why.
   Test 1 is built from the practice tasks of the B1 page; Tests 2–7 are
   their own texts. tools/check-tests.mjs checks sizes and keys. */
window.TESTS_B1 = [
 {
  "id": "b1-1",
  "title": "Modelltest 1",
  "sub": "Bibliothek, Repair-Café, Gemeinschaftsgarten · Brief an einen Freund",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "list": [
       "Mehr Fahrradwege für die Innenstadt",
       "Immer mehr Menschen arbeiten von zu Hause",
       "Bibliothek öffnet auch am Sonntag",
       "Neue Regeln für E-Scooter",
       "Hitze: Tipps für ältere Menschen",
       "Stadt sucht Ehrenamtliche für Deutschkurse",
       "Preise für Busfahrkarten steigen",
       "Schüler gründen eigene Firma",
       "Weniger Müll durch Mehrwegbecher",
       "Konzert im Park fällt aus"
      ],
      "items": [
       {
        "q": "Text 1",
        "text": "Ab dem nächsten Monat können Leserinnen und Leser die Stadtbibliothek auch sonntags von 11 bis 17 Uhr besuchen. Viele Berufstätige hatten sich längere Öffnungszeiten gewünscht, weil sie unter der Woche keine Zeit haben.",
        "a": 2
       },
       {
        "q": "Text 2",
        "text": "Die Stadt möchte, dass weniger Menschen ihren Kaffee im Papierbecher kaufen. Deshalb bieten jetzt 40 Cafés einen Becher an, den man zurückgeben kann. Wer ihn benutzt, bekommt 20 Cent Rabatt.",
        "a": 8
       },
       {
        "q": "Text 3",
        "text": "Eine Umfrage unter Angestellten zeigt: Viele arbeiten inzwischen mindestens zwei Tage pro Woche im Homeoffice. Sie sparen Zeit und Geld für den Weg zur Arbeit, manche fühlen sich aber auch einsam.",
        "a": 1
       },
       {
        "q": "Text 4",
        "text": "Für die Integrationskurse im Stadtteilzentrum werden noch Helferinnen und Helfer gesucht. Sie sollen Zugewanderten beim Deutschlernen helfen, zum Beispiel bei den Hausaufgaben. Bezahlt wird die Arbeit nicht, aber es gibt ein kleines Dankeschön-Fest.",
        "a": 5
       },
       {
        "q": "Text 5",
        "text": "Wegen des starken Gewitters am Samstagabend konnte die Band „Nordwind“ nicht wie geplant im Stadtpark spielen. Die Tickets bleiben gültig. Ein neuer Termin wird bald bekannt gegeben.",
        "a": 9
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "text": "Reparieren statt wegwerfen\nJeden ersten Samstag im Monat ist im Gemeindehaus in Bockenheim viel los. Dann öffnet das Repair-Café. Hier treffen sich Menschen, die kaputte Dinge nicht einfach wegwerfen wollen: Toaster, Lampen, Fahrräder oder Kleidung. Ehrenamtliche Helfer, viele von ihnen Rentner, die früher als Elektriker oder Schneiderin gearbeitet haben, zeigen den Besuchern, wie man die Sachen selbst reparieren kann.\n„Wir reparieren nicht für die Leute, sondern mit ihnen“, sagt die Organisatorin Petra Lang. Das Angebot ist kostenlos, aber über eine kleine Spende freut sich das Team. Das Geld braucht man für Werkzeug und Ersatzteile.\nNicht alles kann gerettet werden. Etwa zwei Drittel der Gegenstände funktionieren nach dem Besuch wieder. Bei modernen Handys ist es oft schwierig, weil die Hersteller keine Ersatzteile verkaufen.\nFür viele Besucher ist aber nicht nur die Reparatur wichtig. „Man trinkt Kaffee, isst Kuchen und lernt Nachbarn kennen“, erzählt ein Besucher. Seit Kurzem kommen auch Schulklassen, die lernen möchten, wie man Ressourcen spart.",
      "items": [
       {
        "q": "Im Repair-Café …",
        "o": [
         "reparieren Profis die Sachen gegen Geld.",
         "lernen Besucher, ihre Sachen selbst zu reparieren.",
         "kann man gebrauchte Geräte kaufen."
        ],
        "a": 1,
        "why": "„nicht für die Leute, sondern mit ihnen“"
       },
       {
        "q": "Die Helfer …",
        "o": [
         "arbeiten ehrenamtlich.",
         "bekommen ein Gehalt.",
         "sind alle Studenten."
        ],
        "a": 0,
        "why": "„Ehrenamtliche Helfer“"
       },
       {
        "q": "Die Spenden …",
        "o": [
         "sind Pflicht.",
         "gehen an eine Schule.",
         "bezahlen Werkzeug und Ersatzteile."
        ],
        "a": 2,
        "why": ""
       },
       {
        "q": "Handys …",
        "o": [
         "werden immer repariert.",
         "sind oft schwer zu reparieren.",
         "werden nicht angenommen."
        ],
        "a": 1,
        "why": "die Hersteller verkaufen keine Ersatzteile."
       },
       {
        "q": "Für viele Besucher ist das Café auch …",
        "o": [
         "ein Ort, um Nachbarn kennenzulernen.",
         "ein Ort zum Arbeiten.",
         "zu teuer."
        ],
        "a": 0,
        "why": ""
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "x": true,
      "per": 2.5,
      "list": [
       "Yoga für Anfänger: dienstags 19 Uhr, erste Probestunde kostenlos, Studio Balance.",
       "Nachhilfe Mathematik für Schüler der Klassen 5 bis 10, erfahrene Lehrerin, 25 Euro pro Stunde.",
       "Umzugshilfe: zwei starke Studenten mit Transporter, auch am Wochenende, günstige Preise.",
       "Kochkurs „Indisch vegetarisch“: Samstag 14 bis 18 Uhr, alle Zutaten inklusive, 49 Euro.",
       "Tandempartner gesucht: Ich, Ana, 30, spreche Spanisch und möchte Deutsch üben. Treffen im Café, einmal pro Woche.",
       "Wohnung zu vermieten: 3 Zimmer, 75 m², Frankfurt-Nordend, keine Haustiere.",
       "Hundesitter gesucht: Wer geht mittags mit unserem Hund spazieren?",
       "Laufgruppe „Mainufer“: jeden Sonntag 9 Uhr, alle Niveaus, kostenlos.",
       "Fahrradwerkstatt „Kette“: Reparaturen in 24 Stunden, Montag bis Samstag, auch gebrauchte Räder.",
       "Babysitterin (Studentin, 22) sucht Familie, abends und am Wochenende, mit Erste-Hilfe-Kurs.",
       "Computerkurs für Senioren: E-Mails schreiben und im Internet surfen, vormittags, kleine Gruppen.",
       "Flohmarkt im Hof: Samstag 10–16 Uhr, Kleidung, Bücher, Spielzeug, Standgebühr 5 Euro."
      ],
      "items": [
       {
        "q": "Sie möchten Spanisch lernen und können dafür beim Deutschlernen helfen.",
        "a": 4,
        "why": ""
       },
       {
        "q": "Ihr Sohn hat Probleme in Mathe.",
        "a": 1,
        "why": ""
       },
       {
        "q": "Sie ziehen nächsten Samstag um und haben kein Auto.",
        "a": 2,
        "why": "mit Transporter, auch am Wochenende."
       },
       {
        "q": "Sie möchten am Wochenende in einer Gruppe draußen Sport machen.",
        "a": 7,
        "why": ""
       },
       {
        "q": "Sie suchen eine Wohnung und haben eine Katze.",
        "a": -1,
        "why": "in Anzeige f) sind keine Haustiere erlaubt."
       },
       {
        "q": "Sie möchten lernen, Gerichte ohne Fleisch zu kochen.",
        "a": 3,
        "why": ""
       },
       {
        "q": "Ihr Fahrrad ist kaputt, und Sie brauchen es schnell wieder.",
        "a": 8,
        "why": "i) – Reparatur in 24 Stunden"
       },
       {
        "q": "Sie möchten am Samstagabend ins Theater und suchen jemanden für Ihre Kinder.",
        "a": 9,
        "why": "j) – Babysitterin, abends und am Wochenende"
       },
       {
        "q": "Ihre Mutter (70) möchte lernen, wie man E-Mails schreibt.",
        "a": 10,
        "why": "k) – Computerkurs für Senioren"
       },
       {
        "q": "Sie möchten einen Französischkurs machen.",
        "a": -1,
        "why": "x – keine Anzeige bietet Französisch an."
       }
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "text": "Liebe Julia,\nvielen Dank für deine E-Mail! Ich habe mich sehr (1) gefreut. Endlich habe ich Zeit, dir zu antworten. Seit zwei Monaten wohne ich jetzt in Frankfurt, (2) ich hier eine neue Stelle gefunden habe. Die Arbeit gefällt mir gut, (3) manchmal ist sie ziemlich stressig. Meine Kollegen sind nett und helfen mir immer, (4) ich eine Frage habe. Am Wochenende gehe ich oft am Main spazieren oder treffe mich (5) Freunden. Letzten Samstag waren wir in einem Museum, (6) sehr interessant war. Im Dezember habe ich Urlaub. Hast du Lust, mich zu (7)? Du kannst gern bei mir (8). Meine Wohnung ist nicht groß, aber es gibt ein Sofa, (9) man gut schlafen kann. Schreib mir bald, (10) du Zeit hast!\nViele Grüße\nSuresh",
      "items": [
       {
        "n": 1,
        "o": [
         "darüber",
         "darauf",
         "damit"
        ],
        "a": 0,
        "why": "sich freuen über etwas (Vergangenes)"
       },
       {
        "n": 2,
        "o": [
         "weil",
         "denn",
         "deshalb"
        ],
        "a": 0,
        "why": "Verb am Ende: „… gefunden habe“"
       },
       {
        "n": 3,
        "o": [
         "oder",
         "aber",
         "sondern"
        ],
        "a": 1,
        "why": "Gegensatz"
       },
       {
        "n": 4,
        "o": [
         "wann",
         "ob",
         "wenn"
        ],
        "a": 2,
        "why": "immer wenn = whenever"
       },
       {
        "n": 5,
        "o": [
         "bei",
         "mit",
         "von"
        ],
        "a": 1,
        "why": "sich treffen mit + Dativ"
       },
       {
        "n": 6,
        "o": [
         "das",
         "der",
         "die"
        ],
        "a": 0,
        "why": "das Museum, Relativpronomen Nominativ"
       },
       {
        "n": 7,
        "o": [
         "besuchen",
         "besucht",
         "besuche"
        ],
        "a": 0,
        "why": "zu + Infinitiv"
       },
       {
        "n": 8,
        "o": [
         "übernachten",
         "übernachtest",
         "zu übernachten"
        ],
        "a": 0,
        "why": "Modalverb + Infinitiv ohne zu"
       },
       {
        "n": 9,
        "o": [
         "auf dem",
         "in dem",
         "mit dem"
        ],
        "a": 0,
        "why": "man schläft auf dem Sofa"
       },
       {
        "n": 10,
        "o": [
         "ob",
         "wann",
         "dass"
        ],
        "a": 1,
        "why": "indirekte Frage nach der Zeit"
       }
      ],
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "text": "Sehr geehrte Frau Hoffmann,\nich wohne seit drei Jahren (11) Ihrer Wohnung in der Berger Straße und bin sehr zufrieden. Leider gibt es (12) ein Problem: Seit einer Woche funktioniert die Heizung im Wohnzimmer nicht (13). Ich habe versucht, sie selbst zu reparieren, (14) das hat nicht geklappt. Da es nachts schon sehr kalt ist, (15) ich Sie, so schnell wie möglich einen Handwerker zu schicken. Ich bin (16) Montag bis Freitag ab 17 Uhr zu Hause. Am Wochenende habe ich den ganzen Tag (17). Bitte (18) Sie mir kurz Bescheid, wann der Handwerker kommen kann. Vielen Dank (19) Ihre Hilfe.\nMit freundlichen (20)\nSuresh [Nachname]",
      "list": [
       "aber",
       "bitte",
       "für",
       "Grüßen",
       "in",
       "mehr",
       "von",
       "Zeit",
       "geben",
       "jetzt",
       "über",
       "seit",
       "deshalb",
       "Wochen",
       "wegen"
      ],
      "items": [
       {
        "n": 11,
        "a": 4,
        "why": "in Ihrer Wohnung"
       },
       {
        "n": 12,
        "a": 9,
        "why": ""
       },
       {
        "n": 13,
        "a": 5,
        "why": "nicht mehr = no longer"
       },
       {
        "n": 14,
        "a": 0,
        "why": ""
       },
       {
        "n": 15,
        "a": 1,
        "why": "ich bitte Sie, … zu …"
       },
       {
        "n": 16,
        "a": 6,
        "why": "von Montag bis Freitag"
       },
       {
        "n": 17,
        "a": 7,
        "why": ""
       },
       {
        "n": 18,
        "a": 8,
        "why": "Bescheid geben = let someone know"
       },
       {
        "n": 19,
        "a": 2,
        "why": "danken für"
       },
       {
        "n": 20,
        "a": 3,
        "why": "Mit freundlichen Grüßen"
       }
      ],
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Martin ist mit seinem Beruf trotz allem zufrieden.",
        "a": true,
        "audio": "Ich heiße Martin und arbeite seit zehn Jahren als Krankenpfleger. Der Beruf ist anstrengend, besonders die Nachtschichten. Aber wenn ein Patient wieder gesund nach Hause geht, weiß ich, warum ich das mache.",
        "why": ""
       },
       {
        "q": "Die Sprecherin fährt im Winter lieber mit dem Auto.",
        "a": false,
        "audio": "Früher bin ich jeden Tag mit dem Auto zur Arbeit gefahren. Seit einem Jahr nehme ich das Fahrrad. Am Anfang war das hart, besonders im Winter. Heute möchte ich nicht mehr zurück. Ich fühle mich viel fitter.",
        "why": "sie fährt auch im Winter Rad."
       },
       {
        "q": "Der Sohn bekommt jetzt ein Handy.",
        "a": false,
        "audio": "Mein Sohn will unbedingt ein Handy. Er ist erst neun. Alle in seiner Klasse haben eins, sagt er. Ich finde das zu früh. Wir haben uns jetzt geeinigt: Mit elf bekommt er ein einfaches Handy.",
        "why": "erst mit elf."
       },
       {
        "q": "Die Person wohnt jetzt allein.",
        "a": true,
        "audio": "Ich habe lange in einer WG gewohnt. Das war lustig, aber nie ruhig. Jetzt habe ich meine eigene Wohnung. Sie ist klein und teurer, aber ich genieße die Ruhe.",
        "why": ""
       },
       {
        "q": "Die Person lernt am meisten mit Grammatikbüchern.",
        "a": false,
        "audio": "Ich lerne seit zwei Jahren Deutsch. Am meisten hilft mir ein Tandempartner. Wir treffen uns jede Woche und sprechen eine Stunde Deutsch und eine Stunde Englisch. Grammatikbücher finde ich dagegen langweilig.",
        "why": "am meisten hilft der Tandempartner."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "audio": "Moderator: Herzlich willkommen zu „Stadtleben“. Heute ist Frau Aydin bei uns. Sie hat vor drei Jahren einen Gemeinschaftsgarten in Frankfurt gegründet. Frau Aydin, wie kam es dazu?\nFrau Aydin: Ich wohne in einem Hochhaus und hatte keinen Balkon. Ich wollte aber unbedingt Gemüse anbauen. Neben der Schule gab es eine freie Fläche. Also habe ich die Stadt gefragt, ob wir dort einen Garten machen dürfen.\nModerator: Und die Stadt hat sofort ja gesagt?\nFrau Aydin: Nein, das hat fast ein Jahr gedauert. Wir mussten viele Formulare ausfüllen.\nModerator: Wie viele Leute machen heute mit?\nFrau Aydin: Etwa sechzig Personen aus zwölf Ländern. Die Jüngste ist sechs, der Älteste ist über achtzig.\nModerator: Muss man etwas bezahlen?\nFrau Aydin: Ja, zehn Euro im Jahr. Davon kaufen wir Samen und Werkzeug. Wer kein Geld hat, kann trotzdem mitmachen. Dann hilft man einfach etwas mehr.\nModerator: Was passiert mit dem Gemüse?\nFrau Aydin: Jeder nimmt, was er braucht. Was übrig bleibt, geben wir an die Tafel.\nModerator: Und im Winter?\nFrau Aydin: Da ist im Garten wenig zu tun. Aber wir treffen uns einmal im Monat im Café an der Ecke und planen das nächste Jahr.\nModerator: Haben Sie einen Tipp für Leute, die auch einen Garten gründen wollen?\nFrau Aydin: Geduld! Und sprechen Sie zuerst mit den Nachbarn. Ohne sie geht es nicht.",
      "items": [
       {
        "q": "Frau Aydin hat den Garten vor drei Jahren gegründet.",
        "a": true,
        "why": ""
       },
       {
        "q": "Sie hatte zu Hause einen großen Balkon.",
        "a": false,
        "why": "sie hatte keinen Balkon."
       },
       {
        "q": "Die Stadt hat die Erlaubnis sofort gegeben.",
        "a": false,
        "why": "es hat fast ein Jahr gedauert."
       },
       {
        "q": "Im Garten machen Menschen aus zwölf Ländern mit.",
        "a": true,
        "why": ""
       },
       {
        "q": "Kinder dürfen nicht mitmachen.",
        "a": false,
        "why": "die Jüngste ist sechs."
       },
       {
        "q": "Der Beitrag kostet zehn Euro im Monat.",
        "a": false,
        "why": "zehn Euro im Jahr."
       },
       {
        "q": "Wer kein Geld hat, kann trotzdem mitmachen.",
        "a": true,
        "why": ""
       },
       {
        "q": "Übriges Gemüse wird verkauft.",
        "a": false,
        "why": "es geht an die Tafel."
       },
       {
        "q": "Im Winter trifft sich die Gruppe in einem Café.",
        "a": true,
        "why": "einmal im Monat."
       },
       {
        "q": "Frau Aydin rät, zuerst mit den Nachbarn zu sprechen.",
        "a": true,
        "why": ""
       }
      ],
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Der Zug nach Stuttgart fällt aus.",
        "a": false,
        "audio": "Information zum ICE nach Stuttgart, planmäßige Abfahrt 16 Uhr 05: Der Zug hat heute circa 20 Minuten Verspätung. Grund ist eine Reparatur am Zug.",
        "why": "er hat nur Verspätung."
       },
       {
        "q": "Morgen Nachmittag regnet es.",
        "a": true,
        "audio": "Und nun das Wetter: Heute bleibt es trocken bei bis zu 18 Grad. Morgen kommen von Westen Wolken, am Nachmittag regnet es. Am Wochenende wird es wieder sonnig.",
        "why": ""
       },
       {
        "q": "Die Laufschuhe sind den ganzen Tag reduziert.",
        "a": false,
        "audio": "Liebe Kundinnen und Kunden, in unserer Sportabteilung im dritten Stock sind heute alle Laufschuhe 30 Prozent günstiger. Das Angebot gilt nur bis 16 Uhr.",
        "why": "nur bis 16 Uhr."
       },
       {
        "q": "Für das Bürgeramt braucht man einen Termin.",
        "a": true,
        "audio": "Sie haben das Bürgeramt erreicht. Termine vereinbaren Sie bitte online. Ohne Termin können wir Sie leider nicht bedienen. In Notfällen drücken Sie bitte die Eins.",
        "why": ""
       },
       {
        "q": "Das Boarding beginnt in einer Viertelstunde.",
        "a": true,
        "audio": "Passagiere des Fluges nach Lissabon, bitte beachten Sie: Ihr Flug startet heute nicht von Gate A 22, sondern von Gate B 14. Das Boarding beginnt in 15 Minuten.",
        "why": "15 Minuten = eine Viertelstunde."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Ein Freund möchte nach Frankfurt ziehen und bittet um Tipps. Schreiben Sie ihm:",
      "points": [
       "Wohnungssuche",
       "Stadtteil und Verkehr",
       "Freizeitmöglichkeiten",
       "Angebot: Hilfe oder Übernachtung"
      ],
      "model": "Lieber Daniel,\nvielen Dank für deine E-Mail! Ich finde es toll, dass du nach Frankfurt ziehen möchtest. Gern gebe ich dir ein paar Tipps.\nDie Wohnungssuche ist hier leider nicht einfach, weil die Mieten sehr hoch sind. Ich empfehle dir, zuerst in einer WG zu wohnen und auf mehreren Portalen zu suchen.\nWenn du in der Innenstadt arbeitest, sind Stadtteile wie Bornheim oder Bockenheim gut. Dort gibt es viele Cafés, und mit der U-Bahn kommt man schnell überall hin.\nIn der Freizeit kann man am Main joggen, ins Museum gehen oder am Wochenende in den Taunus fahren.\nWenn du möchtest, kannst du bei mir wohnen, während du eine Wohnung suchst. Mein Sofa ist frei!\nSchreib mir, wann du kommst.\nViele Grüße\nSuresh",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Wie lange lebst du schon in Deutschland, und wie gefällt es dir hier?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich lebe seit drei Jahren in Deutschland. Es gefällt mir gut, weil die Stadt grün ist und ich nette Kollegen habe. Nur das Wetter ist manchmal schwierig."
       },
       {
        "who": "Anna",
        "say": "Und warum lernst du Deutsch?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich lerne Deutsch, weil ich hier arbeite und mehr mit meinen Kollegen sprechen möchte. Außerdem brauche ich das B1-Zertifikat."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Polen, aus Krakau. In meiner Freizeit mache ich viel Sport, vor allem Schwimmen."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Interessant! Ich schwimme auch gern, aber nicht so oft. Am Wochenende gehe ich lieber wandern."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Homeoffice. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Homeoffice“. Sie haben dazu einen kurzen Text gelesen: Immer mehr Menschen arbeiten zwei oder drei Tage pro Woche zu Hause. Sie sparen Zeit, aber viele fühlen sich auch allein. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "homeoffice|zu hause|arbeit",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es um das Homeoffice. Immer mehr Menschen arbeiten einige Tage pro Woche zu Hause. Sie sparen Zeit für den Weg zur Arbeit, aber viele fühlen sich auch allein."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass viele Firmen das Homeoffice gut finden, weil sie Büros sparen. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "homeoffice|zu hause|arbeit",
          "Thema"
         ]
        ],
        "model": "Meiner Meinung nach ist Homeoffice gut, weil man sich zu Hause besser konzentrieren kann. Aber ich finde, man sollte auch ins Büro gehen, damit man die Kollegen sieht."
       },
       {
        "who": "Anna",
        "say": "Wie ist das bei dir? Arbeitest du auch manchmal zu Hause?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "Ja, ich arbeite zwei Tage pro Woche zu Hause. In meinem Heimatland ist das noch nicht so normal, dort arbeiten die meisten im Büro."
       },
       {
        "who": "Anna",
        "say": "Glaubst du, dass in Zukunft alle zu Hause arbeiten?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Nein, ich glaube nicht, denn viele Berufe gehen nicht zu Hause. Und was denkst du?"
       },
       {
        "who": "Anna",
        "say": "Ich glaube das auch nicht. Danke für das Gespräch!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: eine Abschiedsfeier für eine Kollegin. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: eine Abschiedsfeier für eine Kollegin. Sprechen Sie über den Tag, den Ort, das Essen und das Geschenk. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unsere Kollegin Maria geht in Rente. Wollen wir die Feier am Freitagnachmittag im Büro machen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Gute Idee, Freitag passt gut, weil viele dann früher Feierabend haben. Aber im Büro ist es eng, vielleicht lieber im Café nebenan?"
       },
       {
        "who": "Anna",
        "say": "Okay, das Café ist gut. Und was machen wir mit dem Essen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "feier|geschenk|kuchen|restaurant|freitag|büro|essen",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es, wenn jeder etwas mitbringt? Ich schlage vor, dass wir zusätzlich einen großen Kuchen bestellen."
       },
       {
        "who": "Anna",
        "say": "Gut. Wer kümmert sich um das Geschenk?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kann das Geld sammeln und ein Geschenk kaufen. Kannst du die Karte schreiben?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "feier|geschenk|kuchen|restaurant|freitag|büro|essen",
          "Plan"
         ]
        ],
        "model": "Also, wir feiern am Freitagnachmittag im Café nebenan. Jeder bringt etwas zu essen mit, und wir bestellen einen Kuchen. Ich kaufe das Geschenk, und du schreibst die Karte."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-2",
  "title": "Modelltest 2",
  "sub": "Stadtnachrichten, ein Jahr ohne Auto, Café mit Herz · Beschwerde ans Fitnessstudio",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "list": [
       "Neues Schwimmbad öffnet im Sommer",
       "Immer weniger junge Leute machen eine Ausbildung",
       "Flohmarkt für einen guten Zweck",
       "Stadt pflanzt 1000 neue Bäume",
       "Kostenloses WLAN in allen Bussen",
       "Streik: Kitas bleiben geschlossen",
       "Mehr Wohnungen für Studenten",
       "Sprachcafé sucht Gäste aus aller Welt",
       "Neue Regeln für die Mülltrennung",
       "Rekord: So viele Touristen wie nie"
      ],
      "items": [
       {
        "q": "Text 1",
        "a": 4,
        "why": "kostenlos im Internet surfen → WLAN in den Bussen",
        "text": "Ab Montag können Fahrgäste in allen Linienbussen der Stadt kostenlos im Internet surfen. Man muss sich nur einmal mit seiner E-Mail-Adresse anmelden. Die Verkehrsbetriebe hoffen, dass dadurch mehr Menschen den Bus nehmen."
       },
       {
        "q": "Text 2",
        "a": 2,
        "why": "Das Geld bekommt ein Kinderkrankenhaus → guter Zweck",
        "text": "Am kommenden Wochenende verkaufen Schülerinnen und Schüler der Goetheschule gebrauchte Bücher, Spielzeug und Kleidung auf dem Schulhof. Das ganze Geld bekommt ein Kinderkrankenhaus in der Stadt."
       },
       {
        "q": "Text 3",
        "a": 7,
        "text": "Jeden Donnerstagabend treffen sich in der Stadtbibliothek Menschen, die Sprachen lernen oder üben möchten. Die Organisatoren freuen sich besonders über Besucher, die eine seltene Sprache sprechen. Kaffee und Tee gibt es gratis."
       },
       {
        "q": "Text 4",
        "a": 5,
        "why": "Die Erzieher fordern mehr Gehalt → Streik",
        "text": "Weil die Erzieherinnen und Erzieher mehr Gehalt fordern, sind am Mittwoch und Donnerstag fast alle städtischen Kindergärten zu. Eltern sollen die Betreuung ihrer Kinder selbst organisieren. Für Notfälle gibt es nur wenige Plätze."
       },
       {
        "q": "Text 5",
        "a": 9,
        "why": "„so viele Gäste aus dem Ausland … wie noch nie“",
        "text": "Im letzten Jahr haben so viele Gäste aus dem Ausland in der Stadt übernachtet wie noch nie. Besonders beliebt waren die Altstadt und die Museen. Die Hotels sind deshalb sehr zufrieden."
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "text": "Ein Jahr ohne Auto\nFamilie Hoffmann aus Kassel hat ein Experiment gemacht: Ein Jahr lang hat sie ihr Auto stehen lassen. „Am Anfang hatten wir Angst, dass es zu kompliziert wird“, erzählt Sandra Hoffmann, die als Krankenschwester arbeitet. „Ich habe oft Nachtschicht, und nachts fahren nicht so viele Busse.“ Die Lösung war ein E-Bike. Damit braucht sie zur Arbeit nur fünf Minuten länger als mit dem Auto.\nFür die beiden Kinder, zehn und dreizehn Jahre alt, hat sich wenig geändert. Sie fahren schon immer mit dem Fahrrad zur Schule. Schwieriger war es beim Einkaufen. „Früher sind wir einmal pro Woche in den großen Supermarkt am Stadtrand gefahren“, sagt Vater Jens. „Jetzt kaufen wir öfter und in kleineren Mengen im Laden um die Ecke ein.“ Schwere Sachen wie Getränkekisten lässt die Familie liefern.\nFür längere Reisen hat die Familie die Bahn genommen. Im Sommer sind sie mit dem Zug an die Ostsee gefahren. „Das war teurer als mit dem Auto, aber viel entspannter“, sagt Jens. Für Ausflüge am Wochenende haben sie manchmal ein Auto bei einer Carsharing-Firma gemietet.\nAm Ende des Jahres hat die Familie gerechnet: Ohne eigenes Auto hat sie rund 3000 Euro gespart. Das Auto haben die Hoffmanns jetzt verkauft. „Wir vermissen es nicht“, sagen beide.",
      "items": [
       {
        "q": "Sandra Hoffmann hatte am Anfang Sorgen, weil …",
        "o": [
         "sie nachts arbeitet und dann wenige Busse fahren.",
         "sie nicht Fahrrad fahren kann.",
         "ihre Arbeit sehr weit weg ist."
        ],
        "a": 0,
        "why": "„nachts fahren nicht so viele Busse“"
       },
       {
        "q": "Mit dem E-Bike braucht Sandra zur Arbeit …",
        "o": [
         "genauso lange wie mit dem Auto.",
         "etwas länger als mit dem Auto.",
         "viel länger als mit dem Bus."
        ],
        "a": 1,
        "why": "„nur fünf Minuten länger als mit dem Auto“"
       },
       {
        "q": "Die Familie kauft jetzt …",
        "o": [
         "einmal pro Woche am Stadtrand ein.",
         "öfter in einem Geschäft in der Nähe ein.",
         "nur noch im Internet ein."
        ],
        "a": 1,
        "why": "„im Laden um die Ecke“"
       },
       {
        "q": "Die Reise an die Ostsee …",
        "o": [
         "war billiger als mit dem Auto.",
         "hat die Familie mit einem Mietauto gemacht.",
         "war mit dem Zug angenehmer."
        ],
        "a": 2,
        "why": "„teurer …, aber viel entspannter“"
       },
       {
        "q": "Nach dem Experiment …",
        "o": [
         "hat die Familie ihr Auto verkauft.",
         "möchte die Familie wieder ein Auto haben.",
         "hat die Familie ein neues Auto gekauft."
        ],
        "a": 0
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "x": true,
      "per": 2.5,
      "list": [
       "Gitarrenunterricht für Kinder und Erwachsene, auch online, erste Stunde gratis.",
       "Second-Hand-Laden „Kleiderkreisel“: Kinderkleidung und Spielzeug, Mo–Sa 10–18 Uhr.",
       "Fahrschule Grün: Führerschein in 6 Wochen, Unterricht auch auf Englisch und Arabisch.",
       "Steuerberaterin hilft bei der Steuererklärung, Termine auch abends.",
       "Malkurs für Senioren, donnerstags 10 Uhr, Material wird gestellt.",
       "Zimmer in WG frei, 18 m², Nähe Uni, nur für Studentinnen.",
       "Reparaturservice für Waschmaschinen und Kühlschränke, wir kommen zu Ihnen nach Hause.",
       "Schwimmkurs für Erwachsene ohne Vorkenntnisse, samstags, kleine Gruppen.",
       "Catering für Feiern: Buffet für 20 bis 200 Personen, auch vegetarisch.",
       "Deutschkurs B1 am Wochenende, mit Vorbereitung auf die telc-Prüfung.",
       "Tierarztpraxis: Notdienst rund um die Uhr, auch an Feiertagen.",
       "Hausaufgabenhilfe für Grundschulkinder, montags bis donnerstags 14–16 Uhr."
      ],
      "items": [
       {
        "q": "Ihre Waschmaschine ist kaputt.",
        "a": 6
       },
       {
        "q": "Sie möchten als Erwachsene oder Erwachsener schwimmen lernen.",
        "a": 7
       },
       {
        "q": "Ihr Hund ist am Sonntag krank.",
        "a": 10,
        "why": "k) – Notdienst rund um die Uhr"
       },
       {
        "q": "Sie möchten den Führerschein machen, aber Ihr Deutsch ist noch nicht so gut.",
        "a": 2,
        "why": "c) – Unterricht auch auf Englisch und Arabisch"
       },
       {
        "q": "Sie feiern Ihren 40. Geburtstag mit vielen Gästen und möchten nicht selbst kochen.",
        "a": 8
       },
       {
        "q": "Sie brauchen Hilfe bei der Steuererklärung, haben aber tagsüber keine Zeit.",
        "a": 3,
        "why": "d) – Termine auch abends"
       },
       {
        "q": "Sie suchen günstige Kleidung für Ihr Baby.",
        "a": 1
       },
       {
        "q": "Sie möchten sich am Wochenende auf die B1-Prüfung vorbereiten.",
        "a": 9
       },
       {
        "q": "Ihr Sohn (8) braucht nachmittags Hilfe bei den Hausaufgaben.",
        "a": 11
       },
       {
        "q": "Sie suchen eine Wohnung für Ihre Familie.",
        "a": -1,
        "why": "x – f) ist ein WG-Zimmer nur für Studentinnen."
       }
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "text": "Lieber Paul,\nvielen Dank für die Einladung zu deiner Hochzeit! Ich habe mich sehr (1) gefreut und komme natürlich gern. Leider kann ich erst am Samstagmorgen anreisen, (2) ich am Freitag noch arbeiten muss. Kannst du mir sagen, (3) es in der Nähe ein günstiges Hotel gibt? Ich möchte nicht zu viel Geld (4). Außerdem habe ich eine Frage zum Geschenk: Wünscht ihr euch etwas Bestimmtes, (5) soll ich selbst etwas aussuchen? Ich habe gehört, (6) ihr nach der Hochzeit nach Italien fahrt. Vielleicht kann ich euch etwas für die Reise schenken. Anna habe ich lange nicht gesehen. Wie geht es (7)? Ich bin sicher, dass es ein wunderschönes Fest (8). Ich freue mich schon darauf, (9) alten Freunde wiederzusehen. Schreib mir bitte bald, (10) ich das Hotel buchen kann.\nViele Grüße\nSuresh",
      "items": [
       {
        "n": 1,
        "o": [
         "darüber",
         "daran",
         "davon"
        ],
        "a": 0,
        "why": "sich freuen über + Akkusativ → darüber"
       },
       {
        "n": 2,
        "o": [
         "denn",
         "weil",
         "trotzdem"
        ],
        "a": 1,
        "why": "Verb am Ende („arbeiten muss“) → weil"
       },
       {
        "n": 3,
        "o": [
         "dass",
         "ob",
         "wenn"
        ],
        "a": 1,
        "why": "indirekte Ja/Nein-Frage → ob"
       },
       {
        "n": 4,
        "o": [
         "auszugeben",
         "ausgegeben",
         "ausgeben"
        ],
        "a": 2,
        "why": "möchte + Infinitiv ohne zu"
       },
       {
        "n": 5,
        "o": [
         "aber",
         "oder",
         "sondern"
        ],
        "a": 1,
        "why": "zwei Möglichkeiten → oder"
       },
       {
        "n": 6,
        "o": [
         "ob",
         "was",
         "dass"
        ],
        "a": 2,
        "why": "Ich habe gehört, dass …"
       },
       {
        "n": 7,
        "o": [
         "sie",
         "ihr",
         "ihnen"
        ],
        "a": 1,
        "why": "Wie geht es + Dativ: ihr (Anna)"
       },
       {
        "n": 8,
        "o": [
         "werden",
         "wurde",
         "wird"
        ],
        "a": 2,
        "why": "„dass es ein wunderschönes Fest wird“ – werden, 3. Person Singular"
       },
       {
        "n": 9,
        "o": [
         "den",
         "die",
         "der"
        ],
        "a": 1,
        "why": "wiedersehen + Akkusativ Plural: die alten Freunde"
       },
       {
        "n": 10,
        "o": [
         "um",
         "weil",
         "damit"
        ],
        "a": 2,
        "why": "Ziel mit anderem Satzteil → damit"
       }
      ],
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "list": [
       "aber",
       "bis",
       "seit",
       "innerhalb",
       "wann",
       "Antwort",
       "Grüßen",
       "zurück",
       "weil",
       "bisher",
       "deshalb",
       "als",
       "Frage",
       "während",
       "dann"
      ],
      "text": "Sehr geehrte Damen und Herren,\nam 3. März habe ich in Ihrem Online-Shop einen Staubsauger bestellt. Leider ist das Gerät (11) noch nicht angekommen. In Ihrer E-Mail stand, dass die Lieferung (12) von drei bis fünf Tagen erfolgt. Nun warte ich schon (13) zwei Wochen. Ich habe zweimal bei Ihrem Kundenservice angerufen, (14) niemand konnte mir helfen. Ich brauche den Staubsauger dringend, (15) ich am Wochenende Gäste bekomme. Bitte teilen Sie mir mit, (16) das Paket kommt. Wenn die Lieferung nicht (17) Freitag möglich ist, möchte ich die Bestellung stornieren. In diesem Fall bitte ich Sie, mir das Geld (18) zu überweisen. Ich hoffe auf eine schnelle (19).\nMit freundlichen (20)\nSuresh [Nachname]",
      "items": [
       {
        "n": 11,
        "a": 9,
        "why": "bisher = bis jetzt"
       },
       {
        "n": 12,
        "a": 3,
        "why": "innerhalb von + Zeit"
       },
       {
        "n": 13,
        "a": 2,
        "why": "seit + Dauer bis jetzt"
       },
       {
        "n": 14,
        "a": 0,
        "why": "Gegensatz → aber"
       },
       {
        "n": 15,
        "a": 8,
        "why": "Grund, Verb am Ende → weil"
       },
       {
        "n": 16,
        "a": 4,
        "why": "Frage nach der Zeit → wann"
       },
       {
        "n": 17,
        "a": 1,
        "why": "bis Freitag"
       },
       {
        "n": 18,
        "a": 7,
        "why": "das Geld zurücküberweisen"
       },
       {
        "n": 19,
        "a": 5,
        "why": "auf eine schnelle Antwort hoffen"
       },
       {
        "n": 20,
        "a": 6,
        "why": "Mit freundlichen Grüßen"
       }
      ],
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Lea macht ihre Ausbildung gern.",
        "a": true,
        "why": "„Ich bin froh, dass ich diesen Beruf gewählt habe.“",
        "audio": "Ich heiße Lea und mache eine Ausbildung als Köchin. Die Arbeitszeiten sind nicht immer leicht, ich arbeite oft am Abend und am Wochenende. Aber ich koche einfach sehr gern und lerne jeden Tag etwas Neues. Ich bin froh, dass ich diesen Beruf gewählt habe."
       },
       {
        "q": "Der Sprecher findet das Leben auf dem Land langweilig.",
        "a": false,
        "why": "„Aber das stimmt überhaupt nicht.“",
        "audio": "Vor zwei Jahren sind wir aus der Stadt aufs Land gezogen. Viele Freunde haben gesagt, dass es uns dort langweilig wird. Aber das stimmt überhaupt nicht. Wir haben nette Nachbarn, einen großen Garten, und im Dorf ist immer etwas los."
       },
       {
        "q": "Die Sprecherin kauft Kleidung am liebsten im Internet.",
        "a": false,
        "why": "Sie kauft lieber in kleinen Geschäften in der Stadt.",
        "audio": "Viele meiner Freundinnen bestellen ihre Kleidung im Internet. Ich mache das nicht so gern. Ich möchte die Sachen anfassen und anprobieren. Deshalb gehe ich lieber in die Stadt und kaufe in kleinen Geschäften ein."
       },
       {
        "q": "Der Sprecher macht wegen seiner Gesundheit mehr Sport.",
        "a": true,
        "why": "Sein Arzt hat gesagt, er muss sich mehr bewegen.",
        "audio": "Mein Arzt hat mir letztes Jahr gesagt, dass ich zu viel sitze und mich mehr bewegen muss. Seitdem gehe ich dreimal pro Woche schwimmen. Am Anfang war es schwer, aber jetzt fühle ich mich viel besser und schlafe auch besser."
       },
       {
        "q": "Die Sprecherin besucht ihre Großeltern jedes Wochenende.",
        "a": false,
        "why": "Nur ein- oder zweimal im Jahr – sie telefonieren jeden Sonntag.",
        "audio": "Meine Großeltern wohnen in Polen, fast tausend Kilometer von hier. Leider kann ich sie nur ein- oder zweimal im Jahr besuchen. Aber wir telefonieren jeden Sonntag per Video. So sehen wir uns wenigstens auf dem Bildschirm."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "audio": "Moderatorin: Willkommen bei „Menschen in der Stadt“. Heute spreche ich mit Herrn Petrović. Er hat vor fünf Jahren ein kleines Café eröffnet, in dem Menschen mit Behinderung arbeiten. Herr Petrović, wie kam es dazu?\nHerr Petrović: Mein Bruder hat eine geistige Behinderung. Er hat lange keine Arbeit gefunden, obwohl er sehr fleißig ist. Das hat mich geärgert. Deshalb wollte ich einen Ort schaffen, an dem er und andere arbeiten können.\nModeratorin: Wie viele Mitarbeiter haben Sie heute?\nHerr Petrović: Zwölf. Am Anfang waren es nur drei. Alle arbeiten in Teilzeit, vier bis sechs Stunden am Tag.\nModeratorin: War es schwer, das Café zu finanzieren?\nHerr Petrović: Ja, sehr. Die Banken wollten mir zuerst keinen Kredit geben. Am Ende haben uns viele Menschen aus der Nachbarschaft mit Spenden geholfen.\nModeratorin: Was bieten Sie an?\nHerr Petrović: Kaffee, Tee und selbst gebackenen Kuchen. Mittags gibt es auch eine Suppe. Alles machen wir frisch in unserer Küche.\nModeratorin: Wie reagieren die Gäste?\nHerr Petrović: Sehr positiv. Manchmal dauert der Service etwas länger, aber das stört kaum jemanden. Viele Gäste kommen jeden Tag.\nModeratorin: Und was planen Sie für die Zukunft?\nHerr Petrović: Wir möchten nächstes Jahr ein zweites Café im Stadtzentrum eröffnen. Dafür suchen wir gerade passende Räume.",
      "items": [
       {
        "q": "Herr Petrović hat das Café vor fünf Jahren eröffnet.",
        "a": true
       },
       {
        "q": "Sein Bruder hat schnell eine Arbeit gefunden.",
        "a": false,
        "why": "Er hat lange keine Arbeit gefunden."
       },
       {
        "q": "Heute arbeiten zwölf Menschen im Café.",
        "a": true
       },
       {
        "q": "Alle Mitarbeiter arbeiten acht Stunden am Tag.",
        "a": false,
        "why": "vier bis sechs Stunden"
       },
       {
        "q": "Die Bank hat das Café sofort finanziert.",
        "a": false,
        "why": "Die Banken wollten zuerst keinen Kredit geben."
       },
       {
        "q": "Nachbarn haben mit Spenden geholfen.",
        "a": true
       },
       {
        "q": "Mittags kann man im Café eine Suppe essen.",
        "a": true
       },
       {
        "q": "Der Kuchen kommt von einer Bäckerei.",
        "a": false,
        "why": "selbst gebacken"
       },
       {
        "q": "Viele Gäste ärgern sich über den langsamen Service.",
        "a": false,
        "why": "„das stört kaum jemanden“"
       },
       {
        "q": "Herr Petrović möchte ein zweites Café eröffnen.",
        "a": true
       }
      ],
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Die S-Bahn-Linie 3 fährt heute nur bis zum Hauptbahnhof.",
        "a": true,
        "audio": "Wegen einer Störung fährt die S-Bahn-Linie 3 heute nur bis zum Hauptbahnhof. Fahrgäste zum Flughafen nehmen bitte die Linie 8."
       },
       {
        "q": "Am Wochenende wird es kälter.",
        "a": false,
        "why": "Es bleibt warm, bis zu 28 Grad.",
        "audio": "Das Wetter: Heute ist es sonnig bei bis zu 25 Grad. Auch am Wochenende bleibt es warm und trocken, die Temperaturen steigen sogar auf bis zu 28 Grad."
       },
       {
        "q": "Die Praxis ist in der ersten Oktoberwoche geschlossen.",
        "a": true,
        "why": "vom 2. bis 6. Oktober",
        "audio": "Hier ist die Praxis Doktor Neumann. Unsere Praxis ist vom 2. bis 6. Oktober geschlossen. Ab dem 9. Oktober sind wir wieder für Sie da. In dringenden Fällen wenden Sie sich bitte an Doktor Klein."
       },
       {
        "q": "Im Supermarkt sind heute Bananen billiger.",
        "a": false,
        "why": "Äpfel und Birnen sind billiger.",
        "audio": "Liebe Kundinnen und Kunden, heute in unserer Obstabteilung: alle Äpfel und Birnen zum halben Preis. Greifen Sie zu!"
       },
       {
        "q": "Die Kunden sollen in Zukunft eine andere Nummer anrufen.",
        "a": true,
        "audio": "Sie haben die Servicenummer der Stadtwerke angerufen. Diese Nummer ist ab sofort nicht mehr gültig. Bitte rufen Sie in Zukunft die 0800 123 45 67 an."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Beschwerde an Ihr Fitnessstudio:",
      "points": [
       "Grund des Schreibens",
       "Probleme beschreiben",
       "Was erwarten Sie?",
       "Was tun Sie, wenn sich nichts ändert?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich bin seit einem Jahr Mitglied in Ihrem Fitnessstudio. Leider bin ich in den letzten Wochen sehr unzufrieden, deshalb schreibe ich Ihnen.\nDer Yogakurs am Dienstagabend ist in diesem Monat schon dreimal ausgefallen, ohne dass wir informiert wurden. Außerdem ist das Wasser in den Duschen seit zwei Wochen kalt.\nIch erwarte, dass Sie die Probleme schnell lösen. Für die ausgefallenen Kurse möchte ich außerdem einen Teil meines Monatsbeitrags zurückbekommen.\nWenn sich bis Ende des Monats nichts ändert, werde ich meinen Vertrag kündigen.\nIch freue mich auf Ihre baldige Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Was machst du beruflich?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich arbeite als Ingenieur in einer IT-Firma. Die Arbeit macht mir Spaß, weil ich jeden Tag etwas Neues lerne."
       },
       {
        "who": "Anna",
        "say": "Und wo wohnst du? Gefällt dir deine Wohnung?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich wohne in Frankfurt-Bornheim. Meine Wohnung ist klein, aber sie hat einen Balkon und liegt sehr zentral."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Spanien, aus Valencia. In meiner Freizeit koche ich gern und treffe Freunde."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Toll, ich koche auch gern! Vielleicht kannst du mir mal ein spanisches Rezept zeigen."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Smartphones für Kinder. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Smartphones für Kinder“. Sie haben dazu einen kurzen Text gelesen: Kinder bekommen ihr erstes Smartphone immer früher, oft schon mit acht Jahren. Viele Eltern machen sich Sorgen. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "handy|smartphone|kinder",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es um Smartphones für Kinder. Kinder bekommen immer früher ein Handy, oft schon mit acht Jahren. Viele Eltern machen sich deshalb Sorgen."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass Kinder mit einem Handy sicherer sind, weil die Eltern sie immer erreichen können. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "handy|smartphone|kinder",
          "Thema"
         ]
        ],
        "model": "Ich finde, acht Jahre ist zu früh für ein Smartphone, weil Kinder dann zu viel Zeit am Bildschirm verbringen. Ein einfaches Handy zum Telefonieren ist aber in Ordnung."
       },
       {
        "who": "Anna",
        "say": "Wann hast du dein erstes Handy bekommen?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "Ich habe mein erstes Handy erst mit sechzehn bekommen. Bei uns in Indien war das früher teuer, heute haben auch dort viele Kinder ein Smartphone."
       },
       {
        "who": "Anna",
        "say": "Sollten Handys in der Schule verboten sein?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Ja, im Unterricht finde ich das richtig, denn die Kinder sollen sich konzentrieren. Wie ist deine Meinung?"
       },
       {
        "who": "Anna",
        "say": "Ich sehe das genauso. Vielen Dank!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: einen Ausflug mit dem Deutschkurs. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: einen Ausflug mit dem Deutschkurs. Sprechen Sie über das Ziel, den Tag, die Fahrt und das Essen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wir wollen mit dem Kurs einen Ausflug machen. Wie wäre es mit einer Fahrt an den Rhein?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Die Idee finde ich gut, weil der Rhein sehr schön ist. Wir könnten dort eine Schifffahrt machen."
       },
       {
        "who": "Anna",
        "say": "Ja, gern. Wann sollen wir fahren?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "ausflug|zug|bus|samstag|sonntag|museum|see|picknick|essen",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage vor, dass wir am Samstag fahren, weil dann alle frei haben. Wir könnten den Zug um neun Uhr nehmen."
       },
       {
        "who": "Anna",
        "say": "Super. Und wer organisiert das Essen?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kümmere mich um das Picknick. Kannst du die Fahrkarten für die Gruppe kaufen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "ausflug|zug|bus|samstag|sonntag|museum|see|picknick|essen",
          "Plan"
         ]
        ],
        "model": "Also, wir fahren am Samstag um neun Uhr mit dem Zug an den Rhein und machen eine Schifffahrt. Ich organisiere das Picknick, und du kaufst die Gruppenfahrkarten."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-3",
  "title": "Modelltest 3",
  "sub": "Nachrichten aus der Region, Lernen mit 60 plus, freiwillige Feuerwehr · Anfrage an eine Sprachschule",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "list": [
       "Tierheim sucht neue Besitzer für Katzen",
       "Mehr Geld für Familien mit Kindern",
       "Neue Straßenbahnlinie bis zum Flughafen",
       "Wochenmarkt zieht auf den Rathausplatz",
       "Zu wenig Ärzte auf dem Land",
       "Junge Erfinderin gewinnt Preis",
       "Fahrradfahrer sollen Helm tragen",
       "Kino zeigt Filme in Originalsprache",
       "Hitzewelle: Freibäder länger geöffnet",
       "Firmen suchen dringend Fachkräfte"
      ],
      "items": [
       {
        "q": "Text 1",
        "a": 8,
        "why": "über 30 Grad, bis 22 Uhr geöffnet",
        "text": "Weil es seit Tagen über 30 Grad heiß ist, haben die städtischen Freibäder ab sofort bis 22 Uhr geöffnet. Normalerweise schließen sie um 20 Uhr. Die Eintrittspreise bleiben gleich."
       },
       {
        "q": "Text 2",
        "a": 4,
        "why": "Dörfer ohne Hausarzt",
        "text": "Viele Dörfer in der Region haben keinen Hausarzt mehr. Wenn ältere Ärzte in Rente gehen, findet sich oft niemand, der die Praxis übernimmt. Die Patienten müssen dann weit fahren."
       },
       {
        "q": "Text 3",
        "a": 7,
        "why": "Filme auf Englisch, Französisch oder Spanisch",
        "text": "Ab Herbst zeigt der Filmpalast jeden ersten Mittwoch im Monat Filme auf Englisch, Französisch oder Spanisch – mit deutschen Untertiteln. Das Angebot richtet sich besonders an Sprachschüler."
       },
       {
        "q": "Text 4",
        "a": 5,
        "why": "Die 16-Jährige hat beim Wettbewerb den ersten Platz bekommen.",
        "text": "Die 16-jährige Mia Krause hat ein Gerät entwickelt, das Plastik im Wasser findet. Für ihre Idee hat sie beim Wettbewerb „Jugend forscht“ den ersten Platz bekommen."
       },
       {
        "q": "Text 5",
        "a": 9,
        "why": "Betriebe finden keine neuen Mitarbeiter",
        "text": "Handwerksbetriebe, Krankenhäuser und Pflegeheime haben große Probleme, neue Mitarbeiter zu finden. Viele Stellen bleiben monatelang leer. Die Betriebe hoffen jetzt auf Fachkräfte aus dem Ausland."
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "text": "Lernen mit 60 plus\nImmer mehr ältere Menschen besuchen Kurse an Volkshochschulen und Universitäten. Einer von ihnen ist Horst Berger, 67 Jahre alt. Bis vor zwei Jahren hat er als Ingenieur bei einer großen Firma gearbeitet. „Als ich in Rente gegangen bin, hatte ich plötzlich sehr viel Zeit. Zuerst war das schön, aber nach ein paar Monaten habe ich mich gelangweilt“, erzählt er.\nSeine Tochter hat ihm dann vorgeschlagen, Spanisch zu lernen. Sie lebt mit ihrer Familie in Madrid, und Horst Berger wollte endlich mit seinen Enkelkindern sprechen können. Seitdem geht er zweimal pro Woche in einen Abendkurs an der Volkshochschule. „In meinem Kurs sind Menschen zwischen 20 und 75. Das gefällt mir, weil man viel voneinander lernt.“\nLeicht ist das Lernen für ihn nicht. „Ich vergesse die Vokabeln schneller als die jungen Leute“, gibt er zu. Deshalb wiederholt er jeden Morgen zwanzig Minuten mit einer App. Außerdem hört er spanische Musik und liest einfache Bücher.\nExperten finden das gut. Wer im Alter Neues lernt, bleibt geistig fit und hat mehr Kontakt zu anderen Menschen. Viele Volkshochschulen bieten deshalb besondere Kurse für Senioren an, zum Beispiel am Vormittag oder mit einem langsameren Tempo.\nHorst Berger hat schon das nächste Ziel: Im Frühling möchte er seine Familie in Madrid besuchen und dort zum ersten Mal ein ganzes Gespräch auf Spanisch führen.",
      "items": [
       {
        "q": "Nach dem Beginn der Rente …",
        "o": [
         "hat Horst Berger sofort einen Kurs gesucht.",
         "war ihm nach einiger Zeit langweilig.",
         "hat er wieder als Ingenieur gearbeitet."
        ],
        "a": 1,
        "why": "„nach ein paar Monaten habe ich mich gelangweilt“"
       },
       {
        "q": "Horst Berger lernt Spanisch, weil …",
        "o": [
         "er mit seinen Enkelkindern sprechen möchte.",
         "er nach Spanien ziehen will.",
         "seine Tochter Spanischlehrerin ist."
        ],
        "a": 0
       },
       {
        "q": "In seinem Kurs …",
        "o": [
         "sind nur Rentner.",
         "lernen Menschen ganz unterschiedlichen Alters.",
         "gibt es nur junge Leute."
        ],
        "a": 1,
        "why": "„Menschen zwischen 20 und 75“"
       },
       {
        "q": "Damit er die Wörter nicht vergisst, …",
        "o": [
         "wiederholt er sie jeden Morgen mit einer App.",
         "nimmt er Privatunterricht.",
         "schreibt er sie jeden Abend auf."
        ],
        "a": 0
       },
       {
        "q": "Experten sagen, dass Lernen im Alter …",
        "o": [
         "zu anstrengend ist.",
         "nur am Vormittag sinnvoll ist.",
         "gut für den Kopf und für Kontakte ist."
        ],
        "a": 2,
        "why": "„bleibt geistig fit und hat mehr Kontakt“"
       }
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "x": true,
      "per": 2.5,
      "list": [
       "Nachhilfe Deutsch für Schüler und Erwachsene, auch Prüfungsvorbereitung, 20 Euro pro Stunde.",
       "Gebrauchte Kinderwagen und Kindersitze, geprüft und günstig, Babyladen „Kleiner Stern“.",
       "Kostenlose Rechtsberatung für Mieter, jeden Dienstag 17–19 Uhr, Mieterverein.",
       "Tanzkurs für Paare: Salsa und Tango, freitags 20 Uhr, Anfänger willkommen.",
       "Elektriker-Notdienst: 24 Stunden erreichbar, schnell und zuverlässig.",
       "Chor sucht Sängerinnen und Sänger, Proben mittwochs 19 Uhr, keine Notenkenntnisse nötig.",
       "Fahrrad zu verkaufen: Herrenrad, 28 Zoll, wie neu, 150 Euro.",
       "Wanderverein: jeden zweiten Sonntag Touren in der Umgebung, Gäste willkommen.",
       "Bewerbungstraining für Arbeitssuchende: Lebenslauf und Vorstellungsgespräch, kostenlos beim Jobcenter.",
       "Ferienwohnung an der Nordsee, 4 Personen, Hunde erlaubt, ab 70 Euro pro Nacht.",
       "Fotostudio: Passfotos und biometrische Bilder, sofort zum Mitnehmen.",
       "Kinderturnen für 3- bis 6-Jährige, montags 15 Uhr, Turnhalle der Grundschule."
      ],
      "items": [
       {
        "q": "Ihr Vermieter möchte die Miete stark erhöhen. Sie brauchen Rat.",
        "a": 2,
        "why": "c) – Rechtsberatung für Mieter"
       },
       {
        "q": "Sie brauchen für Ihren neuen Reisepass ein Foto.",
        "a": 10
       },
       {
        "q": "Sie möchten mit Ihrem Partner tanzen lernen.",
        "a": 3
       },
       {
        "q": "Sie möchten im Urlaub mit Ihrem Hund ans Meer fahren.",
        "a": 9,
        "why": "j) – Hunde erlaubt, an der Nordsee"
       },
       {
        "q": "In Ihrer Wohnung ist nachts der Strom ausgefallen.",
        "a": 4
       },
       {
        "q": "Sie singen gern und suchen eine Gruppe.",
        "a": 5
       },
       {
        "q": "Sie suchen Arbeit und möchten lernen, wie man eine gute Bewerbung schreibt.",
        "a": 8
       },
       {
        "q": "Ihre Tochter (4) soll sich mehr bewegen.",
        "a": 11
       },
       {
        "q": "Sie möchten am Wochenende in der Natur unterwegs sein und Leute kennenlernen.",
        "a": 7
       },
       {
        "q": "Sie suchen ein günstiges Auto.",
        "a": -1,
        "why": "x – g) verkauft ein Fahrrad, kein Auto."
       }
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "text": "Liebe Frau Weber,\nseit drei Monaten arbeite ich jetzt in Ihrer Abteilung, und ich möchte mich bei Ihnen (1) die gute Einarbeitung bedanken. Am Anfang war alles neu für mich, (2) die Kolleginnen und Kollegen haben mir immer geholfen. Besonders gut finde ich, (3) wir jede Woche eine Teambesprechung haben. Nun habe ich eine Bitte: Im Juli möchte ich zwei Wochen Urlaub (4), weil meine Schwester heiratet. Die Hochzeit findet in Indien statt, (5) ich eine weite Reise vor mir habe. Ich weiß, dass im Sommer viele Kollegen Urlaub haben. Deshalb frage ich so früh, (6) wir alles gut planen können. Natürlich bin ich bereit, vor dem Urlaub länger zu (7). Können Sie mir sagen, (8) das möglich ist? Ich würde mich sehr freuen, (9) Sie mir bald (10) könnten.\nMit freundlichen Grüßen\nSuresh",
      "items": [
       {
        "n": 1,
        "o": [
         "über",
         "für",
         "an"
        ],
        "a": 1,
        "why": "sich bedanken für"
       },
       {
        "n": 2,
        "o": [
         "denn",
         "oder",
         "aber"
        ],
        "a": 2,
        "why": "Gegensatz → aber"
       },
       {
        "n": 3,
        "o": [
         "dass",
         "ob",
         "wenn"
        ],
        "a": 0,
        "why": "Besonders gut finde ich, dass …"
       },
       {
        "n": 4,
        "o": [
         "zu nehmen",
         "genommen",
         "nehmen"
        ],
        "a": 2,
        "why": "möchte + Infinitiv ohne zu"
       },
       {
        "n": 5,
        "o": [
         "sodass",
         "deshalb",
         "weil"
        ],
        "a": 0,
        "why": "Folge, Verb am Ende → sodass"
       },
       {
        "n": 6,
        "o": [
         "um",
         "damit",
         "weil"
        ],
        "a": 1,
        "why": "Ziel mit anderem Subjekt → damit"
       },
       {
        "n": 7,
        "o": [
         "gearbeitet",
         "arbeite",
         "arbeiten"
        ],
        "a": 2,
        "why": "zu + Infinitiv"
       },
       {
        "n": 8,
        "o": [
         "dass",
         "ob",
         "wann"
        ],
        "a": 1,
        "why": "indirekte Ja/Nein-Frage → ob"
       },
       {
        "n": 9,
        "o": [
         "wenn",
         "ob",
         "als"
        ],
        "a": 0,
        "why": "sich freuen, wenn …"
       },
       {
        "n": 10,
        "o": [
         "antwortet",
         "antworten",
         "geantwortet"
        ],
        "a": 1,
        "why": "könnten + Infinitiv"
       }
      ],
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "list": [
       "auf",
       "seit",
       "oder",
       "Dafür",
       "unser",
       "über",
       "wenn",
       "von",
       "auch",
       "bis",
       "denn",
       "um",
       "Falls",
       "unseres",
       "aus"
      ],
      "text": "Liebe Nachbarinnen und Nachbarn,\nam Samstag, dem 21. September, feiern wir (11) erstes Hoffest in der Gartenstraße 10. Alle Bewohnerinnen und Bewohner sind herzlich eingeladen! Wir beginnen (12) 15 Uhr mit Kaffee und Kuchen. Am Abend wollen wir zusammen grillen. Es wäre schön, (13) jeder etwas zu essen mitbringt, zum Beispiel einen Salat oder einen Kuchen. Die Getränke kaufen wir gemeinsam. (14) bitten wir jeden Haushalt um fünf Euro. Für die Kinder gibt es Spiele und eine Malecke. Wer Musik machen kann, darf (15) gern sein Instrument mitbringen. (16) es regnet, feiern wir im Gemeinschaftsraum im Keller. Bitte sagen Sie uns (17) Mittwoch Bescheid, ob Sie kommen. Sie können einen Zettel in unseren Briefkasten werfen (18) uns anrufen. Wir freuen uns (19) ein schönes Fest und auf viele Gäste!\nViele Grüße\nFamilie Novak und Familie Schmitt (20) dem Erdgeschoss",
      "items": [
       {
        "n": 11,
        "a": 4,
        "why": "unser erstes Hoffest (das Fest, neutral)"
       },
       {
        "n": 12,
        "a": 11,
        "why": "um + Uhrzeit"
       },
       {
        "n": 13,
        "a": 6,
        "why": "Es wäre schön, wenn …"
       },
       {
        "n": 14,
        "a": 3,
        "why": "dafür = für die Getränke"
       },
       {
        "n": 15,
        "a": 8,
        "why": "gern auch …"
       },
       {
        "n": 16,
        "a": 12,
        "why": "Satzanfang, groß geschrieben: Falls es regnet …"
       },
       {
        "n": 17,
        "a": 9,
        "why": "bis Mittwoch"
       },
       {
        "n": 18,
        "a": 2,
        "why": "Zettel … oder anrufen"
       },
       {
        "n": 19,
        "a": 0,
        "why": "sich freuen auf + Akkusativ"
       },
       {
        "n": 20,
        "a": 14,
        "why": "aus dem Erdgeschoss"
       }
      ],
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Der Sprecher arbeitet lieber im Büro als zu Hause.",
        "a": true,
        "why": "„Ich bin aber lieber im Büro.“",
        "audio": "Seit letztem Jahr darf ich zwei Tage pro Woche von zu Hause arbeiten. Viele Kollegen finden das toll. Ich bin aber lieber im Büro. Zu Hause lenken mich die Kinder ab, und ich vermisse die Gespräche mit den Kollegen in der Kaffeepause."
       },
       {
        "q": "Die Sprecherin hat gerade ihren Führerschein gemacht.",
        "a": false,
        "why": "Sie hat immer noch keinen Führerschein.",
        "audio": "Ich bin 45 und habe immer noch keinen Führerschein. In der Stadt brauche ich wirklich kein Auto. Ich fahre mit dem Fahrrad oder mit der Straßenbahn. Meine Kinder lachen manchmal darüber, aber mir ist das egal."
       },
       {
        "q": "Der Sprecher kocht jeden Abend für seine Familie.",
        "a": true,
        "why": "„jeden Abend um sechs in der Küche“",
        "audio": "Bei uns zu Hause koche ich. Meine Frau arbeitet bis spät am Abend, deshalb stehe ich jeden Abend um sechs in der Küche. Am liebsten mache ich Gerichte aus meiner Heimat, der Türkei. Die Kinder essen aber am liebsten Nudeln."
       },
       {
        "q": "Die Sprecherin hatte im Urlaub schlechtes Wetter.",
        "a": false,
        "why": "Jeden Tag schien die Sonne.",
        "audio": "Letzten Sommer waren wir zwei Wochen in Kroatien. Wir hatten großes Glück: Jeden Tag schien die Sonne und das Meer war warm. Nur am letzten Abend gab es ein kurzes Gewitter. Wir möchten nächstes Jahr unbedingt wieder hinfahren."
       },
       {
        "q": "Der Sprecher ist mit seiner neuen Wohnung zufrieden.",
        "a": true,
        "why": "„Wir fühlen uns dort sehr wohl.“",
        "audio": "Endlich haben wir eine größere Wohnung gefunden! Jetzt hat jedes Kind sein eigenes Zimmer. Die Miete ist zwar höher, und der Weg zur Arbeit ist etwas länger, aber das ist es uns wert. Wir fühlen uns dort sehr wohl."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "audio": "Moderator: Guten Tag und willkommen zu „Ehrenamt im Gespräch“. Heute ist Frau Schäfer bei uns. Sie ist seit acht Jahren bei der freiwilligen Feuerwehr in ihrem Dorf. Frau Schäfer, wie sind Sie zur Feuerwehr gekommen?\nFrau Schäfer: Durch meinen Vater. Er war selbst über dreißig Jahre bei der Feuerwehr. Als Kind war ich oft bei den Übungen dabei. Mit achtzehn bin ich dann selbst eingetreten.\nModerator: Wie oft haben Sie Einsätze?\nFrau Schäfer: Das ist sehr unterschiedlich. Im Durchschnitt zwei- bis dreimal im Monat. Meistens sind es keine Brände, sondern Unfälle auf der Straße oder Keller, die nach starkem Regen voll Wasser sind.\nModerator: Und was macht Ihr Arbeitgeber, wenn Sie plötzlich wegmüssen?\nFrau Schäfer: Ich arbeite in einer Bank. Mein Chef unterstützt mich zum Glück. Das Gesetz sagt auch, dass man für einen Einsatz freibekommt. Die Gemeinde bezahlt der Firma dann das Gehalt für diese Zeit.\nModerator: Bekommen Sie selbst Geld für Ihre Arbeit bei der Feuerwehr?\nFrau Schäfer: Nein, nur eine kleine Entschädigung im Jahr. Wir machen das, weil wir helfen wollen.\nModerator: Gibt es genug Nachwuchs?\nFrau Schäfer: Leider nicht. Viele junge Leute ziehen in die Stadt. Deshalb haben wir eine Jugendfeuerwehr gegründet. Dort können schon Kinder ab zehn Jahren mitmachen.\nModerator: Was würden Sie Interessierten sagen?\nFrau Schäfer: Kommen Sie einfach zu einer Übung! Jeden Donnerstag um 19 Uhr am Feuerwehrhaus. Man braucht keine Erfahrung, nur Zeit und Lust.",
      "items": [
       {
        "q": "Frau Schäfer ist seit acht Jahren bei der Feuerwehr.",
        "a": true
       },
       {
        "q": "Ihr Vater war nie bei der Feuerwehr.",
        "a": false,
        "why": "Er war über dreißig Jahre dabei."
       },
       {
        "q": "Sie ist mit achtzehn Jahren eingetreten.",
        "a": true
       },
       {
        "q": "Die meisten Einsätze sind Brände.",
        "a": false,
        "why": "meistens Unfälle oder Keller voll Wasser"
       },
       {
        "q": "Frau Schäfer arbeitet in einer Bank.",
        "a": true
       },
       {
        "q": "Ihr Chef ist gegen ihre Arbeit bei der Feuerwehr.",
        "a": false,
        "why": "„Mein Chef unterstützt mich.“"
       },
       {
        "q": "Frau Schäfer verdient bei der Feuerwehr viel Geld.",
        "a": false,
        "why": "nur eine kleine Entschädigung im Jahr"
       },
       {
        "q": "Die Feuerwehr hat genug junge Mitglieder.",
        "a": false,
        "why": "„Leider nicht.“"
       },
       {
        "q": "In der Jugendfeuerwehr können Kinder ab zehn Jahren mitmachen.",
        "a": true
       },
       {
        "q": "Für die Übungen braucht man Erfahrung.",
        "a": false,
        "why": "„Man braucht keine Erfahrung.“"
       }
      ],
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Der Bus der Linie 12 fährt heute eine andere Strecke.",
        "a": true,
        "why": "über den Ring statt durch die Altstadt",
        "audio": "Achtung, Fahrgäste der Buslinie 12: Wegen eines Straßenfestes fährt der Bus heute nicht durch die Altstadt, sondern über den Ring. Die Haltestellen Marktplatz und Rathaus entfallen."
       },
       {
        "q": "Morgen scheint den ganzen Tag die Sonne.",
        "a": false,
        "why": "bewölkt, am Nachmittag Regen und Gewitter",
        "audio": "Die Wettervorhersage für morgen: Am Vormittag ist es bewölkt, am Nachmittag gibt es Regen und Gewitter. Die Temperaturen liegen bei 15 Grad."
       },
       {
        "q": "Die Bibliothek ist heute länger geöffnet als sonst.",
        "a": false,
        "why": "Sie schließt heute schon um 16 Uhr.",
        "audio": "Liebe Besucherinnen und Besucher, die Bibliothek schließt heute wegen einer Veranstaltung bereits um 16 Uhr. Bitte geben Sie Ihre Bücher bis 15 Uhr 45 zurück."
       },
       {
        "q": "Man soll später noch einmal anrufen.",
        "a": true,
        "audio": "Guten Tag, Sie sind mit der Firma Becker und Sohn verbunden. Im Moment sind alle Mitarbeiter im Gespräch. Bitte rufen Sie später noch einmal an oder schreiben Sie uns eine E-Mail."
       },
       {
        "q": "Der ICE nach Berlin hält heute zusätzlich in Leipzig.",
        "a": true,
        "why": "wegen einer Baustelle",
        "audio": "Information zum ICE nach Berlin: Wegen einer Baustelle hält der Zug heute zusätzlich in Leipzig. Die Ankunft in Berlin verzögert sich um etwa 15 Minuten."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Anfrage an eine Sprachschule:",
      "points": [
       "Grund: Vorbereitungskurs B1",
       "Kurszeiten",
       "Kosten",
       "Anmeldung zur Prüfung"
      ],
      "model": "Sehr geehrte Damen und Herren,\nauf Ihrer Internetseite habe ich gelesen, dass Sie Vorbereitungskurse für die telc-Prüfung B1 anbieten. Ich lebe in Frankfurt und möchte die Prüfung im Frühjahr machen, weil ich ein offizielles Zertifikat haben möchte.\nDa ich tagsüber arbeite, interessiere ich mich besonders für einen Abend- oder Wochenendkurs. Könnten Sie mir bitte sagen, wann die nächsten Kurse beginnen?\nAußerdem möchte ich wissen, wie viel der Kurs kostet und ob die Prüfungsgebühr schon im Preis enthalten ist.\nZum Schluss noch eine Frage: Kann ich mich bei Ihnen auch direkt für die Prüfung anmelden?\nVielen Dank im Voraus für Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Was machst du gern am Wochenende?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Am Wochenende schlafe ich gern lange. Danach gehe ich oft mit meiner Familie in den Park oder wir besuchen Freunde."
       },
       {
        "who": "Anna",
        "say": "Und was hast du nach der Prüfung vor?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Nach der Prüfung möchte ich einen B2-Kurs machen, weil ich im Beruf noch besser Deutsch sprechen will."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus der Türkei, aus Izmir. In meiner Freizeit male ich und gehe ins Theater."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Das klingt schön! Ich war noch nie im Theater in Deutschland. Kannst du mir ein Stück empfehlen?"
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Leben in der Stadt oder auf dem Land. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Leben in der Stadt oder auf dem Land“. Sie haben dazu einen kurzen Text gelesen: Viele junge Familien ziehen aus der Stadt aufs Land, weil die Mieten dort günstiger sind. Aber sie brauchen oft ein Auto. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "stadt|land|dorf",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es darum, dass viele junge Familien aus der Stadt aufs Land ziehen. Der Grund sind die günstigeren Mieten. Ein Nachteil ist, dass sie dort oft ein Auto brauchen."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass auf dem Land viele Ärzte und Geschäfte fehlen. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "stadt|land|dorf",
          "Thema"
         ]
        ],
        "model": "Ich denke, das Leben auf dem Land ist gut für Kinder, weil es ruhig ist und viel Natur gibt. Aber für mich ist die Stadt besser, denn dort ist alles in der Nähe."
       },
       {
        "who": "Anna",
        "say": "Wo hast du früher gewohnt, in der Stadt oder auf dem Land?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "Früher habe ich in einer großen Stadt in Indien gewohnt. Dort war es sehr laut und voll. In Deutschland finde ich auch die Städte ziemlich ruhig."
       },
       {
        "who": "Anna",
        "say": "Möchtest du später lieber auf dem Land wohnen?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Vielleicht, wenn meine Kinder größer sind. Aber nur in der Nähe von einem Bahnhof. Und du?"
       },
       {
        "who": "Anna",
        "say": "Ich bleibe lieber in der Stadt. Danke!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: eine Geburtstagsüberraschung für einen Freund. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: eine Geburtstagsüberraschung für einen Freund. Sprechen Sie über den Tag, den Ort, die Gäste und das Geschenk. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unser Freund Ali hat nächste Woche Geburtstag. Wollen wir eine Überraschungsparty bei mir zu Hause machen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, das ist eine schöne Idee, weil deine Wohnung groß ist. Aber wir müssen aufpassen, dass Ali nichts merkt."
       },
       {
        "who": "Anna",
        "say": "Genau. Wen sollen wir einladen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "geburtstag|überraschung|party|geschenk|samstag|wohnung|restaurant|gäste",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es, wenn wir die Leute aus unserem Deutschkurs und seine Kollegen einladen? Wir könnten eine Gruppe im Chat machen."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und was schenken wir ihm?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Er liest gern, also kann ich einen Gutschein für eine Buchhandlung kaufen. Kannst du einen Kuchen backen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "geburtstag|überraschung|party|geschenk|samstag|wohnung|restaurant|gäste",
          "Plan"
         ]
        ],
        "model": "Also, wir machen am Samstag eine Überraschungsparty bei dir. Wir laden den Kurs und seine Kollegen über eine Chatgruppe ein. Ich kaufe einen Buchgutschein, und du backst den Kuchen."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-4",
  "title": "Modelltest 4",
  "sub": "Nachrichten, Leben als Fernfahrer, Schulgarten · Beschwerde über eine Waschmaschine",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "items": [
       {
        "q": "Text 1",
        "a": 2,
        "why": "Brot vom Vortag kostenlos",
        "text": "Seit dieser Woche gibt die Bäckerei Schulz alles Brot, das am Abend übrig bleibt, am nächsten Morgen kostenlos an ihre Kunden weiter. So möchte der Bäcker weniger Lebensmittel wegwerfen."
       },
       {
        "q": "Text 2",
        "a": 5,
        "text": "Im Tierpark kam am Wochenende ein kleiner Elefant zur Welt. Mutter und Kind sind gesund. Besucher können das Tier ab nächstem Monat sehen."
       },
       {
        "q": "Text 3",
        "a": 4,
        "why": "für Mütter und Väter, kostenlos",
        "text": "Die Volkshochschule bietet ab Oktober Deutschkurse für Mütter und Väter an. Während des Unterrichts werden die Kinder betreut. Die Teilnahme kostet nichts."
       },
       {
        "q": "Text 4",
        "a": 3,
        "why": "neue Lüftung und Duschen",
        "text": "Wegen einer neuen Lüftung und neuer Duschen bleibt das städtische Hallenbad von Juni bis September geschlossen. Schwimmer können in dieser Zeit das Freibad am See nutzen."
       },
       {
        "q": "Text 5",
        "a": 1,
        "why": "Menschen über 65 surfen im Internet",
        "text": "Eine Umfrage zeigt: Fast 70 Prozent der Menschen über 65 surfen inzwischen regelmäßig im Internet. Besonders beliebt sind Videoanrufe mit den Enkeln."
       }
      ],
      "list": [
       "Neue Radwege entlang des Flusses",
       "Immer mehr Senioren nutzen das Internet",
       "Bäckerei verschenkt Brot vom Vortag",
       "Hallenbad wird renoviert",
       "Kostenlose Deutschkurse für Eltern",
       "Zoo freut sich über Elefantenbaby",
       "Weniger Autos in der Innenstadt",
       "Studenten helfen beim Umzug",
       "Neues Kino mit drei Sälen",
       "Wetter: Schnee im April"
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "items": [
       {
        "q": "Am Anfang fand Mehmet seinen Beruf …",
        "o": [
         "langweilig.",
         "toll, weil er sich frei fühlte.",
         "zu schlecht bezahlt."
        ],
        "a": 1,
        "why": "„die Freiheit auf der Straße toll“"
       },
       {
        "q": "Mit seinen Kindern …",
        "o": [
         "telefoniert er abends per Video.",
         "fährt er oft mit.",
         "spricht er nur am Wochenende."
        ],
        "a": 0
       },
       {
        "q": "Ein Problem für Mehmet ist, dass …",
        "o": [
         "er nicht gern allein ist.",
         "es zu wenige Parkplätze gibt.",
         "seine Kabine zu klein ist."
        ],
        "a": 1,
        "why": "„zu wenige Parkplätze an der Autobahn“"
       },
       {
        "q": "Weil viele Fahrer fehlen, …",
        "o": [
         "verdienen Fahrer heute mehr.",
         "müssen Fahrer länger arbeiten.",
         "gibt es weniger Lkw."
        ],
        "a": 0
       },
       {
        "q": "In Zukunft möchte Mehmet …",
        "o": [
         "ins Ausland ziehen.",
         "nur noch kurze Strecken fahren.",
         "eine eigene Firma gründen."
        ],
        "a": 1
       }
      ],
      "text": "Mein Leben auf der Autobahn\nMehmet Yılmaz ist seit 15 Jahren Lkw-Fahrer. Jede Woche fährt er von Montag bis Freitag durch Deutschland, Österreich und Italien. „Am Anfang fand ich die Freiheit auf der Straße toll“, sagt er. „Heute vermisse ich meine Familie oft.“ Seine beiden Kinder sind sieben und zehn Jahre alt. Am Abend telefoniert er mit ihnen per Video.\nDer Beruf ist anstrengend. Mehmet muss oft um vier Uhr aufstehen, und nachts schläft er in seiner Kabine auf einem Parkplatz. „Es gibt zu wenige Parkplätze an der Autobahn. Manchmal suche ich eine Stunde lang“, erzählt er. Auch der Zeitdruck ist groß: Die Kunden wollen ihre Ware pünktlich haben.\nTrotzdem liebt Mehmet seinen Beruf. Er mag es, allein zu arbeiten und neue Orte zu sehen. In Deutschland fehlen zurzeit viele Lkw-Fahrer. Deshalb verdienen Fahrer heute mehr als früher. Viele Firmen bezahlen neuen Mitarbeitern auch den Führerschein.\nMehmet hat einen Plan: In fünf Jahren möchte er nur noch kurze Strecken in der Region fahren. „Dann bin ich jeden Abend zu Hause“, sagt er.",
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "per": 2.5,
      "items": [
       {
        "q": "Ihr Wasserhahn tropft, und Sie können ihn nicht selbst reparieren.",
        "a": 5
       },
       {
        "q": "Sie brauchen Ihr Schulzeugnis auf Deutsch für eine Bewerbung.",
        "a": 9,
        "why": "j) – beglaubigte Übersetzungen"
       },
       {
        "q": "Sie möchten Arabisch lernen und können dafür Deutsch beibringen.",
        "a": 4
       },
       {
        "q": "Ihre Hose ist zu lang, und Sie möchten lernen, sie selbst zu kürzen.",
        "a": 7
       },
       {
        "q": "Sie arbeiten viel und möchten lernen, schnell zu kochen.",
        "a": 3
       },
       {
        "q": "Sie haben nie Fahrradfahren gelernt.",
        "a": 11
       },
       {
        "q": "Sie suchen einen günstigen Computer für Ihr Studium.",
        "a": 1
       },
       {
        "q": "Ihre Tochter (8) möchte Klavier spielen lernen.",
        "a": 0
       },
       {
        "q": "Sie machen im Sommer ein Praktikum und brauchen für drei Monate eine Wohnung.",
        "a": 10
       },
       {
        "q": "Sie suchen einen Babysitter für Ihre Kinder.",
        "a": -1,
        "why": "x – keine Anzeige bietet Kinderbetreuung an."
       }
      ],
      "x": true,
      "list": [
       "Klavierunterricht zu Hause, für Kinder ab 6 Jahren, 30 Euro pro Stunde.",
       "Gebrauchte Laptops mit Garantie, günstig, Computerladen „Byte“.",
       "Gartenhilfe: Rasen mähen, Hecke schneiden, auch einmalig.",
       "Kochkurs „Schnelle Küche“ für Berufstätige, donnerstags 19 Uhr.",
       "Sprachtandem Deutsch–Arabisch, Treffen in der Bibliothek.",
       "Hausmeisterservice: kleine Reparaturen in der Wohnung, schnell und günstig.",
       "Kinderflohmarkt in der Turnhalle, Sonntag 10–14 Uhr.",
       "Nähkurs für Anfänger: Kleidung selbst ändern, samstags.",
       "Yoga für Schwangere, montags 18 Uhr, Praxis für Physiotherapie.",
       "Übersetzungsbüro: Urkunden und Zeugnisse, beglaubigt.",
       "Wohnung zur Zwischenmiete, 2 Zimmer, Juli bis September, möbliert.",
       "Fahrradkurs für Erwachsene, die nie Rad fahren gelernt haben."
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "items": [
       {
        "n": 1,
        "o": [
         "denn",
         "weil",
         "deshalb"
        ],
        "a": 1,
        "why": "Verb am Ende → weil"
       },
       {
        "n": 2,
        "o": [
         "aber",
         "sondern",
         "oder"
        ],
        "a": 0,
        "why": "Gegensatz"
       },
       {
        "n": 3,
        "o": [
         "als",
         "wie",
         "dass"
        ],
        "a": 2,
        "why": "so …, dass"
       },
       {
        "n": 4,
        "o": [
         "die",
         "den",
         "das"
        ],
        "a": 0,
        "why": "Relativpronomen, Akkusativ Plural: die Wörter"
       },
       {
        "n": 5,
        "o": [
         "aus",
         "von",
         "nach"
        ],
        "a": 0,
        "why": "aus … Ländern"
       },
       {
        "n": 6,
        "o": [
         "um",
         "damit",
         "für"
        ],
        "a": 0,
        "why": "um … zu"
       },
       {
        "n": 7,
        "o": [
         "dass",
         "ob",
         "wenn"
        ],
        "a": 1,
        "why": "Ja/Nein-Frage → ob"
       },
       {
        "n": 8,
        "o": [
         "besuchen",
         "zu besuchen",
         "besucht"
        ],
        "a": 1,
        "why": "Lust haben + zu"
       },
       {
        "n": 9,
        "o": [
         "wann",
         "wenn",
         "als"
        ],
        "a": 1,
        "why": "Bedingung → wenn"
       },
       {
        "n": 10,
        "o": [
         "dir",
         "dich",
         "du"
        ],
        "a": 0,
        "why": "Wie geht es + Dativ"
       }
      ],
      "text": "Liebe Maria,\nendlich habe ich Zeit, dir zu schreiben. Seit einem Monat mache ich einen Deutschkurs, (1) ich die B1-Prüfung im Juni machen will. Der Kurs ist sehr gut, (2) manchmal auch anstrengend. Unsere Lehrerin erklärt alles so, (3) wir es gut verstehen. Jeden Tag lernen wir neue Wörter, (4) ich am Abend wiederhole. In der Klasse sind zwölf Leute (5) acht verschiedenen Ländern. Mit einer Kollegin aus Brasilien treffe ich mich oft, (6) zusammen zu lernen. Am Wochenende gehen wir manchmal ins Café und sprechen nur Deutsch. Ich weiß nicht, (7) ich die Prüfung schaffe, aber ich gebe mein Bestes. Hast du Lust, mich im Sommer (8)? Dann können wir zusammen feiern, (9) ich bestanden habe! Schreib mir bald, wie es (10) geht.\nLiebe Grüße\nSuresh",
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "items": [
       {
        "n": 11,
        "a": 2,
        "why": "seit + Dauer bis jetzt"
       },
       {
        "n": 12,
        "a": 5,
        "why": "Musik hören"
       },
       {
        "n": 13,
        "a": 1,
        "why": "Gegensatz"
       },
       {
        "n": 14,
        "a": 6,
        "why": "Grund, Verb am Ende"
       },
       {
        "n": 15,
        "a": 0,
        "why": "meine Ruhe brauchen"
       },
       {
        "n": 16,
        "a": 7,
        "why": "einen Brief schreiben"
       },
       {
        "n": 17,
        "a": 9,
        "why": "In der Hausordnung steht, dass …"
       },
       {
        "n": 18,
        "a": 3,
        "why": "sich freuen, wenn …"
       },
       {
        "n": 19,
        "a": 8,
        "why": "im Voraus"
       },
       {
        "n": 20,
        "a": 4,
        "why": "Mit freundlichen Grüßen"
       }
      ],
      "list": [
       "Ruhe",
       "aber",
       "seit",
       "wenn",
       "Grüßen",
       "hört",
       "weil",
       "schreiben",
       "im",
       "dass",
       "deshalb",
       "vor",
       "Lärm",
       "ob",
       "sagt"
      ],
      "text": "Sehr geehrter Herr Wagner,\nich wohne (11) zwei Jahren in der Wohnung im dritten Stock. Leider muss ich mich heute über ein Problem beschweren. Seit Anfang des Monats (12) mein Nachbar jeden Abend bis spät in die Nacht laute Musik. Ich habe schon zweimal mit ihm gesprochen, (13) es hat nichts geändert. Ich muss jeden Morgen um fünf Uhr aufstehen, (14) ich früh arbeite. Deshalb brauche ich nachts meine (15). Könnten Sie bitte mit dem Nachbarn sprechen oder ihm einen Brief (16)? In der Hausordnung steht ja, (17) ab 22 Uhr Ruhe sein muss. Ich würde mich freuen, (18) Sie mir helfen könnten. Für Ihre Hilfe bedanke ich mich schon (19) Voraus.\nMit freundlichen (20)\nSuresh [Nachname]",
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Die Sprecherin arbeitet gern in der Nachtschicht.",
        "a": true,
        "why": "„ich finde die Nachtschicht gut“",
        "audio": "Ich bin Krankenschwester und arbeite oft nachts. Viele Kolleginnen mögen das nicht, aber ich finde die Nachtschicht gut. Es ist ruhiger, und ich habe mehr Zeit für die Patienten."
       },
       {
        "q": "Der Sprecher hat sein Auto verkauft.",
        "a": false,
        "why": "Er überlegt es nur.",
        "audio": "Wir wohnen jetzt im Zentrum, und ich fahre alles mit dem Fahrrad oder mit der Straßenbahn. Unser Auto steht fast nur noch in der Garage. Wir überlegen, ob wir es verkaufen."
       },
       {
        "q": "Die Sprecherin lernt Deutsch vor allem mit Filmen.",
        "a": true,
        "audio": "Mein Deutsch habe ich vor allem mit Serien und Filmen verbessert. Am Anfang mit Untertiteln, jetzt ohne. Den Kurs mache ich nur einmal pro Woche."
       },
       {
        "q": "Der Sprecher kocht nicht gern.",
        "a": false,
        "why": "„es macht mir großen Spaß“",
        "audio": "Ich koche jeden Tag für meine Familie, und es macht mir großen Spaß. Am Wochenende probiere ich gern neue Rezepte aus."
       },
       {
        "q": "Die Sprecherin wohnt noch bei ihren Eltern.",
        "a": true,
        "audio": "Ich bin 24 und wohne noch bei meinen Eltern. Die Mieten in der Stadt sind einfach zu hoch. Nächstes Jahr, wenn ich mit dem Studium fertig bin, suche ich eine eigene Wohnung."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "items": [
       {
        "q": "Frau Nowak hat den Schulgarten vor zwei Jahren angelegt.",
        "a": true
       },
       {
        "q": "Alle Kinder wussten, wie Kartoffeln wachsen.",
        "a": false,
        "why": "Manche dachten, Kartoffeln wachsen an Bäumen."
       },
       {
        "q": "Jede Klasse hat ein eigenes Beet.",
        "a": true
       },
       {
        "q": "Nur Lehrer arbeiten im Garten mit.",
        "a": false,
        "why": "auch Eltern und zwei Großväter"
       },
       {
        "q": "Im Garten gibt es auch Obstbäume.",
        "a": true,
        "why": "zwei Apfelbäume"
       },
       {
        "q": "Die Kinder kochen jede Woche zusammen.",
        "a": false,
        "why": "einmal im Monat"
       },
       {
        "q": "In den Ferien gießen Familien aus der Nachbarschaft die Pflanzen.",
        "a": true
       },
       {
        "q": "Der Garten war sehr teuer.",
        "a": false,
        "why": "Werkzeug geschenkt, Erde von der Stadt"
       },
       {
        "q": "Die Stadt hat die Erde bezahlt.",
        "a": true
       },
       {
        "q": "Die Schule möchte bald Hühner halten.",
        "a": false,
        "why": "Bienen"
       }
      ],
      "audio": "Moderator: Willkommen bei „Schule heute“. Heute ist Frau Nowak bei uns. Sie ist Lehrerin an einer Grundschule und hat dort vor zwei Jahren einen Schulgarten angelegt. Frau Nowak, warum ein Schulgarten?\nFrau Nowak: Viele Kinder wissen nicht mehr, woher unser Essen kommt. Manche dachten, Kartoffeln wachsen an Bäumen! Im Garten lernen sie das ganz praktisch.\nModerator: Wer arbeitet im Garten mit?\nFrau Nowak: Alle Klassen, jede Klasse hat ein eigenes Beet. Dazu kommen einige Eltern und zwei Großväter, die früher Gärtner waren. Sie helfen uns sehr.\nModerator: Was wächst denn im Garten?\nFrau Nowak: Salat, Tomaten, Karotten und Kräuter. Und wir haben zwei Apfelbäume.\nModerator: Was passiert mit dem Gemüse?\nFrau Nowak: Einmal im Monat kochen wir zusammen in der Schulküche. Den Rest dürfen die Kinder mit nach Hause nehmen.\nModerator: Und in den Sommerferien? Da ist ja niemand in der Schule.\nFrau Nowak: Das war am Anfang ein Problem. Jetzt gießen Familien aus der Nachbarschaft die Pflanzen, jede Woche eine andere Familie.\nModerator: Hat der Garten viel Geld gekostet?\nFrau Nowak: Nein. Ein Baumarkt hat uns Werkzeug geschenkt, und die Erde hat die Stadt bezahlt.\nModerator: Was ist Ihr nächstes Projekt?\nFrau Nowak: Wir möchten Bienen halten. Ein Imker aus dem Dorf will uns dabei helfen.",
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Der Flug nach Madrid startet später.",
        "a": true,
        "why": "etwa 40 Minuten später",
        "audio": "Information zu Flug IB 3 nach Madrid: Der Abflug verschiebt sich wegen schlechten Wetters um etwa 40 Minuten."
       },
       {
        "q": "Am Montag regnet es.",
        "a": false,
        "why": "kühler, aber trocken",
        "audio": "Die Aussichten: Am Wochenende ist es sonnig. Ab Montag wird es kühler, aber es bleibt trocken."
       },
       {
        "q": "Die Kunden sollen zur Kasse 1 gehen.",
        "a": false,
        "why": "Kasse 1 ist geschlossen.",
        "audio": "Liebe Kunden, unsere Kasse 1 ist jetzt geschlossen. Bitte gehen Sie zu den Kassen 3 und 4."
       },
       {
        "q": "Der Deutschkurs findet heute online statt.",
        "a": true,
        "audio": "Hallo, hier ist die Volkshochschule. Wegen des Streiks findet Ihr Deutschkurs heute online statt. Den Link bekommen Sie per E-Mail."
       },
       {
        "q": "In der Praxis kann man auch ohne Termin kommen.",
        "a": true,
        "why": "offene Sprechstunde",
        "audio": "Praxis Doktor Lehmann. Unsere offene Sprechstunde ohne Termin ist montags und donnerstags von 8 bis 10 Uhr."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Ihre neue Waschmaschine ist nach zwei Wochen kaputt. Schreiben Sie an das Geschäft:",
      "points": [
       "Grund des Schreibens",
       "Problem beschreiben",
       "Was erwarten Sie? (Reparatur oder neues Gerät)",
       "Was tun Sie, wenn Sie keine Antwort bekommen?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nvor zwei Wochen habe ich in Ihrem Geschäft eine Waschmaschine gekauft. Leider muss ich mich heute bei Ihnen beschweren.\nSeit drei Tagen funktioniert die Maschine nicht mehr richtig. Das Programm hört nach zehn Minuten auf, und das Wasser bleibt in der Trommel. Ich habe alles so gemacht, wie es in der Anleitung steht, aber das Problem ist geblieben. Für mich ist das sehr ärgerlich, weil ich jeden Tag Wäsche waschen muss.\nIch erwarte, dass Sie die Waschmaschine so schnell wie möglich abholen und reparieren. Wenn eine Reparatur nicht möglich ist, möchte ich ein neues Gerät bekommen.\nBitte antworten Sie mir bis Ende nächster Woche. Wenn ich bis dahin keine Antwort bekomme, werde ich mich an die Verbraucherzentrale wenden.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Wie lange lernst du schon Deutsch?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich lerne seit zwei Jahren Deutsch. Am Anfang war es schwer, aber jetzt verstehe ich schon viel, weil ich jeden Tag übe."
       },
       {
        "who": "Anna",
        "say": "Was gefällt dir an deiner Stadt?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Mir gefällt, dass es viele Parks gibt und man überall mit dem Fahrrad hinfahren kann. Außerdem gibt es viele internationale Restaurants."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Brasilien, aus São Paulo. In meiner Freizeit tanze ich Samba und spiele Volleyball."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Super! Tanzen kann ich leider gar nicht, aber Volleyball spiele ich manchmal im Sommer."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Online einkaufen. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Online einkaufen“. Sie haben dazu einen kurzen Text gelesen: Immer mehr Menschen kaufen Kleidung und Lebensmittel im Internet. Viele kleine Geschäfte in den Innenstädten müssen schließen. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "online|internet|einkauf|kauf",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es um das Online-Einkaufen. Immer mehr Leute kaufen Kleidung und sogar Lebensmittel im Internet. Deshalb müssen viele kleine Geschäfte in den Innenstädten schließen."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass viele Pakete zurückgeschickt werden und das schlecht für die Umwelt ist. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "online|internet|einkauf|kauf",
          "Thema"
         ]
        ],
        "model": "Ich finde Online-Einkaufen praktisch, weil man Zeit spart. Aber ich glaube, wir sollten auch in kleinen Geschäften kaufen, sonst ist die Stadt bald leer."
       },
       {
        "who": "Anna",
        "say": "Was kaufst du selbst im Internet?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "Ich kaufe vor allem Bücher und Technik im Internet. Kleidung kaufe ich lieber im Geschäft, weil ich sie anprobieren möchte. In meinem Heimatland bestellen viele Leute auch Essen online."
       },
       {
        "who": "Anna",
        "say": "Glaubst du, dass es in zehn Jahren noch Kaufhäuser gibt?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Ich glaube schon, aber weniger als heute, denn viele Menschen gehen gern bummeln. Was meinst du?"
       },
       {
        "who": "Anna",
        "say": "Das hoffe ich auch. Danke für das Gespräch!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: ein Nachbarschaftsfest im Hof. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: ein Nachbarschaftsfest im Hof. Sprechen Sie über den Termin, das Essen, die Musik und das Aufräumen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wollen wir im Juni ein Fest für alle Nachbarn im Hof organisieren?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, gern! Juni ist gut, weil das Wetter dann meistens schön ist. Vielleicht an einem Samstag?"
       },
       {
        "who": "Anna",
        "say": "Gut, Samstag. Wie machen wir das mit dem Essen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "fest|hof|grill|musik|samstag|essen|aufräumen|nachbarn",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage vor, dass wir grillen und jeder einen Salat mitbringt. Wir könnten einen Zettel an die Haustür hängen."
       },
       {
        "who": "Anna",
        "say": "Und wer kümmert sich um die Musik und das Aufräumen?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich bringe meine Lautsprecher mit und mache die Musik. Kannst du die Nachbarn fürs Aufräumen fragen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "fest|hof|grill|musik|samstag|essen|aufräumen|nachbarn",
          "Plan"
         ]
        ],
        "model": "Also, wir machen im Juni an einem Samstag ein Fest im Hof. Wir grillen, und jeder bringt einen Salat mit. Ich mache die Musik, und du fragst die Nachbarn, wer beim Aufräumen hilft."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-5",
  "title": "Modelltest 5",
  "sub": "Stadtnachrichten, Tauschpartys, Lesepate · Absage einer Hochzeitseinladung",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "items": [
       {
        "q": "Text 1",
        "a": 5,
        "why": "Geräte wie Bücher ausleihen",
        "text": "Wer eine Bohrmaschine oder eine Leiter nur einmal braucht, muss sie nicht mehr kaufen. In der Stadtbibliothek kann man diese Geräte jetzt wie Bücher für zwei Wochen ausleihen."
       },
       {
        "q": "Text 2",
        "a": 2,
        "why": "Handy-Anwendung zeigt Parkplätze",
        "text": "Mit der neuen Anwendung für das Handy sehen Autofahrer sofort, wo in der Innenstadt noch Platz zum Parken ist. Das soll den Verkehr reduzieren."
       },
       {
        "q": "Text 3",
        "a": 9,
        "why": "Firmen informieren über Ausbildungsplätze",
        "text": "Am Samstag präsentieren sich in der Stadthalle über 80 Firmen. Schulabgänger können sich über Ausbildungsplätze informieren und direkt mit Personalchefs sprechen."
       },
       {
        "q": "Text 4",
        "a": 1,
        "why": "Krankenschwestern aus dem Ausland",
        "text": "Weil in der Region viele Stellen in der Pflege frei sind, wirbt das Klinikum jetzt um Krankenschwestern aus Spanien und von den Philippinen. Sie bekommen auch Hilfe bei der Wohnungssuche."
       },
       {
        "q": "Text 5",
        "a": 3,
        "why": "seit einem halben Jahrhundert, Jubiläum",
        "text": "Seit einem halben Jahrhundert lernen Kinder und Erwachsene hier Klavier, Geige und Gitarre. Zum Jubiläum gibt es am Sonntag ein großes Konzert."
       }
      ],
      "list": [
       "Mehr Spielplätze für die Südstadt",
       "Krankenhaus sucht Pflegekräfte im Ausland",
       "Neue App zeigt freie Parkplätze",
       "Musikschule feiert 50. Geburtstag",
       "Wochenende: Stau auf allen Autobahnen",
       "Stadtbibliothek leiht jetzt auch Werkzeug aus",
       "Rekordhitze im Juli",
       "Fußballverein gewinnt Pokal",
       "Weniger Müll an Schulen",
       "Jobmesse für junge Leute"
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "items": [
       {
        "q": "Bei einer Tauschparty …",
        "o": [
         "kauft man gebrauchte Kleidung billig.",
         "tauscht man Kleidung ohne Geld.",
         "verkauft man alte Sachen."
        ],
        "a": 1,
        "why": "„Geld spielt dabei keine Rolle.“"
       },
       {
        "q": "Die erste Party von Lisa Brandt …",
        "o": [
         "war in ihrer Wohnung.",
         "hatte 200 Gäste.",
         "war in einem Jugendzentrum."
        ],
        "a": 0
       },
       {
        "q": "Die Kleidung muss …",
        "o": [
         "neu sein.",
         "sauber und nicht kaputt sein.",
         "für Kinder sein."
        ],
        "a": 1
       },
       {
        "q": "Für Familien ist das Angebot wichtig, weil …",
        "o": [
         "Kinder schnell aus ihren Sachen herauswachsen.",
         "es dort Essen gibt.",
         "man dort Arbeit findet."
        ],
        "a": 0
       },
       {
        "q": "Übrige Kleidung …",
        "o": [
         "wird weggeworfen.",
         "nimmt Lisa mit nach Hause.",
         "bekommen Menschen ohne Wohnung."
        ],
        "a": 2,
        "why": "Kleiderkammer für Wohnungslose"
       }
      ],
      "text": "Tauschen statt kaufen\nIn vielen Städten gibt es inzwischen Tauschpartys. Die Idee ist einfach: Jeder bringt Kleidung mit, die er nicht mehr trägt, und nimmt dafür andere Sachen mit nach Hause. Geld spielt dabei keine Rolle.\nLisa Brandt organisiert seit drei Jahren solche Partys in Leipzig. „Angefangen hat alles in meiner Wohnung mit zehn Freundinnen“, erzählt sie. Heute kommen bis zu 200 Menschen in ein Jugendzentrum. Es gibt eine Regel: Die Kleidung muss sauber und in gutem Zustand sein. Kaputte Sachen nimmt das Team nicht an.\nViele Besucher kommen nicht nur wegen der Kleidung. „Man trifft nette Leute und hat Spaß“, sagt eine Teilnehmerin. Für Familien mit wenig Geld ist das Angebot besonders wichtig, weil Kinder schnell aus ihren Sachen herauswachsen.\nWas am Ende übrig bleibt, bekommt eine Kleiderkammer für Wohnungslose. Lisa Brandt möchte das Konzept erweitern: Bald soll es auch Tauschpartys für Spielzeug und Bücher geben.",
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "per": 2.5,
      "items": [
       {
        "q": "Sie ziehen um und brauchen Kartons.",
        "a": 5
       },
       {
        "q": "Sie suchen eine Wohnung und haben einen Hund.",
        "a": 3,
        "why": "d) – Haustiere erlaubt"
       },
       {
        "q": "Ihr Kind ist krank, und Sie müssen trotzdem zur Arbeit.",
        "a": 6
       },
       {
        "q": "Sie brauchen ein Foto für Ihre Bewerbung.",
        "a": 10
       },
       {
        "q": "Ihr Toaster ist kaputt, und Sie möchten ihn reparieren lassen.",
        "a": 11
       },
       {
        "q": "Ihr Großvater fühlt sich allein und möchte Leute kennenlernen.",
        "a": 9
       },
       {
        "q": "Sie möchten Ihr Englisch verbessern, haben aber nur abends Zeit.",
        "a": 4
       },
       {
        "q": "Sie möchten mit Ihrem Handy schönere Fotos machen.",
        "a": 7
       },
       {
        "q": "Sie suchen ein günstiges Auto.",
        "a": 1
       },
       {
        "q": "Sie möchten Spanisch lernen.",
        "a": -1,
        "why": "x – kein Spanischkurs"
       }
      ],
      "x": true,
      "list": [
       "Schwimmkurs für Kinder ab 5 Jahren, samstags im Hallenbad Nord.",
       "Gebrauchtwagen: Kleinwagen, 8 Jahre alt, 4.500 Euro, TÜV neu.",
       "Steuerhilfe für Arbeitnehmer, Termine auch samstags.",
       "Mietwohnung, 3 Zimmer, Balkon, Haustiere erlaubt, ab sofort frei.",
       "Englisch-Konversation für Erwachsene, abends in kleinen Gruppen.",
       "Umzugskartons gratis abzugeben, Abholung am Wochenende.",
       "Kinderbetreuung im Notfall: Wir kommen auch kurzfristig zu Ihnen.",
       "Fotokurs: bessere Bilder mit dem Handy, zwei Abende.",
       "Gitarre zu verkaufen, mit Tasche, 90 Euro.",
       "Seniorentreff: Kaffee, Spiele und Gespräche, mittwochs 15 Uhr.",
       "Bewerbungsfotos im Studio, auch digital, sofort zum Mitnehmen.",
       "Reparaturcafé: Elektrogeräte, Kleidung und Fahrräder, jeden ersten Samstag."
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "items": [
       {
        "n": 1,
        "o": [
         "an",
         "für",
         "über"
        ],
        "a": 1,
        "why": "sich interessieren für"
       },
       {
        "n": 2,
        "o": [
         "deshalb",
         "denn",
         "sodass"
        ],
        "a": 2,
        "why": "Folge, Verb am Ende → sodass"
       },
       {
        "n": 3,
        "o": [
         "weil",
         "aber",
         "oder"
        ],
        "a": 1,
        "why": "Gegensatz"
       },
       {
        "n": 4,
        "o": [
         "weil",
         "obwohl",
         "deshalb"
        ],
        "a": 2,
        "why": "deshalb + Verb auf Position 2"
       },
       {
        "n": 5,
        "o": [
         "sehr",
         "viel",
         "mehr"
        ],
        "a": 0,
        "why": "sehr flexibel"
       },
       {
        "n": 6,
        "o": [
         "ob",
         "wenn",
         "dass"
        ],
        "a": 1,
        "why": "Bedingung → wenn"
       },
       {
        "n": 7,
        "o": [
         "kennenzulernen",
         "kennenlernen",
         "kennengelernt"
        ],
        "a": 1,
        "why": "möchte + Infinitiv ohne zu"
       },
       {
        "n": 8,
        "o": [
         "ob",
         "wenn",
         "dass"
        ],
        "a": 1,
        "why": "sich freuen, wenn …"
       },
       {
        "n": 9,
        "o": [
         "am",
         "in",
         "im"
        ],
        "a": 2,
        "why": "im Anhang"
       },
       {
        "n": 10,
        "o": [
         "Hilfe",
         "Verfügung",
         "Seite"
        ],
        "a": 1,
        "why": "zur Verfügung stehen"
       }
      ],
      "text": "Sehr geehrte Damen und Herren,\nich habe Ihre Anzeige in der Zeitung gelesen und interessiere mich (1) die Stelle als Verkäufer in Ihrem Geschäft. Ich bin 32 Jahre alt und lebe seit vier Jahren in Deutschland. In meinem Heimatland habe ich fünf Jahre in einem Modegeschäft gearbeitet, (2) ich schon viel Erfahrung habe. Zurzeit arbeite ich in einem Supermarkt, (3) ich suche eine neue Herausforderung. Ich spreche gut Deutsch und Englisch, (4) ist der Kontakt mit Kunden für mich kein Problem. Ich arbeite gern im Team und bin (5) flexibel. Ich kann auch am Wochenende arbeiten, (6) das nötig ist. Gern möchte ich Sie in einem persönlichen Gespräch (7). Ich würde mich freuen, (8) Sie mich zu einem Vorstellungsgespräch einladen. Meine Unterlagen schicke ich Ihnen (9) Anhang. Für Fragen stehe ich Ihnen gern zur (10).\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "items": [
       {
        "n": 11,
        "a": 6,
        "why": "um + Uhrzeit"
       },
       {
        "n": 12,
        "a": 3,
        "why": "Relativpronomen: den Kuchen"
       },
       {
        "n": 13,
        "a": 8,
        "why": "vor Ort"
       },
       {
        "n": 14,
        "a": 1,
        "why": "Zeit haben"
       },
       {
        "n": 15,
        "a": 7,
        "why": "Unterstützung brauchen"
       },
       {
        "n": 16,
        "a": 2,
        "why": "Satzanfang, groß: Falls es regnet …"
       },
       {
        "n": 17,
        "a": 9,
        "why": "auch Freunde mitbringen"
       },
       {
        "n": 18,
        "a": 4,
        "why": "Gegensatz"
       },
       {
        "n": 19,
        "a": 0,
        "why": "hoffen auf"
       },
       {
        "n": 20,
        "a": 5,
        "why": "Mit sportlichen Grüßen"
       }
      ],
      "list": [
       "auf",
       "hat",
       "Falls",
       "den",
       "aber",
       "Grüßen",
       "um",
       "brauchen",
       "vor",
       "auch",
       "das",
       "wenn",
       "seit",
       "geben",
       "Spaß"
      ],
      "text": "Liebe Vereinsmitglieder,\nam 15. Juni findet unser großes Sommerfest auf dem Sportplatz statt. Wir beginnen (11) 14 Uhr mit einem Fußballturnier für Kinder. Danach gibt es Kaffee und Kuchen, (12) viele Eltern gebacken haben. Am Abend grillen wir gemeinsam. Getränke können Sie (13) Ort kaufen. Für das Fest brauchen wir noch Helferinnen und Helfer. Wer Zeit (14), kann sich in die Liste am Eingang eintragen. Besonders am Grill und beim Aufräumen (15) wir Unterstützung. (16) es regnet, feiern wir in der Turnhalle. Bitte bringen Sie (17) Freunde und Nachbarn mit – Gäste sind herzlich willkommen! Der Eintritt ist frei, (18) über eine Spende freuen wir uns. Wir hoffen (19) gutes Wetter und viele Besucher.\nMit sportlichen (20)\nIhr Vereinsvorstand",
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Der Sprecher fährt jeden Tag mit dem Zug zur Arbeit.",
        "a": true,
        "audio": "Ich wohne auf dem Land und arbeite in Frankfurt. Jeden Morgen nehme ich um sechs Uhr zwanzig den Zug. Die Fahrt dauert eine Stunde, aber im Zug kann ich lesen oder schlafen."
       },
       {
        "q": "Die Sprecherin hat einen Hund.",
        "a": false,
        "why": "Haustiere sind verboten – sie geht mit dem Hund der Nachbarin.",
        "audio": "Ich hätte so gern einen Hund! Aber in unserer Wohnung sind Haustiere leider verboten. Deshalb gehe ich am Wochenende mit dem Hund meiner Nachbarin spazieren."
       },
       {
        "q": "Der Sprecher findet Online-Kurse besser als normale Kurse.",
        "a": false,
        "why": "Er geht lieber wieder in einen normalen Kurs.",
        "audio": "Letztes Jahr habe ich einen Online-Deutschkurs gemacht. Das war praktisch, aber mir haben die anderen Teilnehmer gefehlt. Jetzt gehe ich lieber wieder in einen normalen Kurs."
       },
       {
        "q": "Die Sprecherin hat ihren Traumberuf gefunden.",
        "a": true,
        "why": "„bin wirklich glücklich“",
        "audio": "Früher habe ich im Büro gearbeitet, aber das war nichts für mich. Vor zwei Jahren habe ich eine Ausbildung als Erzieherin begonnen. Jetzt arbeite ich jeden Tag mit Kindern und bin wirklich glücklich."
       },
       {
        "q": "Der Sprecher macht im Urlaub gern Sport.",
        "a": false,
        "why": "Er erholt sich – Sport macht er zu Hause.",
        "audio": "Im Urlaub möchte ich mich vor allem erholen. Ich liege am Strand, lese Bücher und schlafe lange. Sport mache ich zu Hause genug."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "items": [
       {
        "q": "Herr Becker ist seit fünf Jahren Lesepate.",
        "a": true
       },
       {
        "q": "Er liest mit einer ganzen Klasse.",
        "a": false,
        "why": "kleine Gruppe, zwei oder drei Kinder"
       },
       {
        "q": "Seine Frau hat die Anzeige gefunden.",
        "a": true
       },
       {
        "q": "Herr Becker war früher Lehrer.",
        "a": false,
        "why": "Buchhändler"
       },
       {
        "q": "Am schönsten findet er, wenn ein Kind allein ein Buch liest.",
        "a": true
       },
       {
        "q": "Herr Becker bekommt für seine Arbeit Geld.",
        "a": false,
        "why": "Ehrenamt"
       },
       {
        "q": "Die Kinder schenken ihm manchmal Bilder.",
        "a": true
       },
       {
        "q": "Es gibt genug Lesepaten.",
        "a": false,
        "why": "„Leider nicht.“"
       },
       {
        "q": "Für die Arbeit braucht man eine Ausbildung.",
        "a": false,
        "why": "nur Geduld und Freude an Büchern"
       },
       {
        "q": "Bücher über Fußball sind gerade beliebt.",
        "a": true
       }
      ],
      "audio": "Moderatorin: Herzlich willkommen bei „Engagiert in der Stadt“. Heute ist Herr Becker bei uns. Er ist 72 Jahre alt und seit fünf Jahren Lesepate an einer Grundschule. Herr Becker, was macht ein Lesepate?\nHerr Becker: Ich gehe zweimal pro Woche in die Schule und lese mit Kindern, die Probleme beim Lesen haben. Meistens sind es zwei oder drei Kinder in einer kleinen Gruppe.\nModeratorin: Wie sind Sie dazu gekommen?\nHerr Becker: Nach meiner Rente war mir langweilig. Meine Frau hat in der Zeitung eine Anzeige gesehen. Ich war früher Buchhändler, Bücher sind also mein Leben.\nModeratorin: Was gefällt Ihnen am meisten?\nHerr Becker: Wenn ein Kind, das am Anfang kaum lesen konnte, plötzlich ein ganzes Buch allein liest. Das ist ein wunderbares Gefühl.\nModeratorin: Bekommen Sie Geld für diese Arbeit?\nHerr Becker: Nein, das ist ein Ehrenamt. Aber die Kinder malen mir manchmal Bilder. Die hängen alle bei mir in der Küche.\nModeratorin: Gibt es genug Lesepaten?\nHerr Becker: Leider nicht. Viele Schulen warten auf Freiwillige. Man braucht keine besondere Ausbildung, nur Geduld und Freude an Büchern.\nModeratorin: Und was lesen die Kinder am liebsten?\nHerr Becker: Geschichten über Tiere und Comics. Und im Moment sind Bücher über Fußball sehr beliebt.",
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Der ICE nach Hamburg fährt heute von einem anderen Gleis.",
        "a": true,
        "why": "Gleis 11 statt 8",
        "audio": "Achtung, Gleisänderung: Der ICE nach Hamburg fährt heute nicht von Gleis 8, sondern von Gleis 11."
       },
       {
        "q": "Morgen wird es wärmer.",
        "a": false,
        "why": "kühl, nur 8 Grad",
        "audio": "Das Wetter für morgen: kühl und windig, die Temperaturen sinken auf 8 Grad."
       },
       {
        "q": "Das Hallenbad ist am Montag geschlossen.",
        "a": true,
        "audio": "Hier ist das Hallenbad Süd. Wegen Reinigungsarbeiten bleibt das Bad am Montag geschlossen. Ab Dienstag sind wir wieder für Sie da."
       },
       {
        "q": "Die Kunden bekommen heute ein kleines Geschenk.",
        "a": true,
        "why": "eine kleine Überraschung",
        "audio": "Liebe Kunden, zu unserem Geburtstag bekommt heute jeder Kunde an der Kasse eine kleine Überraschung!"
       },
       {
        "q": "Man soll eine E-Mail schreiben.",
        "a": false,
        "why": "später noch einmal anrufen",
        "audio": "Sie haben die Hotline der Stadtwerke angerufen. Leider sind im Moment alle Leitungen besetzt. Bitte versuchen Sie es später noch einmal."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Ein Freund aus Ihrem Deutschkurs hat Sie zu seiner Hochzeit eingeladen. Sie können leider nicht kommen. Schreiben Sie ihm:",
      "points": [
       "Dank für die Einladung",
       "Warum Sie nicht kommen können",
       "Vorschlag für ein Treffen",
       "Glückwünsche"
      ],
      "model": "Lieber Daniel,\nvielen Dank für deine Einladung zu deiner Hochzeit! Ich habe mich sehr darüber gefreut, und ich finde es toll, dass du und Laura heiraten.\nLeider kann ich an diesem Tag nicht kommen. Meine Schwester heiratet am selben Wochenende in Indien, und ich habe meinen Flug schon vor Monaten gebucht. Ich bin wirklich traurig, dass ich nicht bei eurem Fest sein kann.\nAber wir können uns gern nach meiner Reise treffen. Wie wäre es, wenn ich euch Ende Juli zum Essen einlade? Dann könnt ihr mir die Fotos zeigen und von eurem großen Tag erzählen.\nIch wünsche euch beiden alles Gute für eure gemeinsame Zukunft und einen wunderschönen Hochzeitstag!\nViele Grüße\nSuresh",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Wo arbeitest du, und was machst du dort?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich arbeite in einer Firma für Software. Ich entwickle Programme und arbeite viel im Team, das gefällt mir."
       },
       {
        "who": "Anna",
        "say": "Was machst du, um gesund zu bleiben?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit und gehe am Wochenende joggen. Außerdem versuche ich, gesund zu essen."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Vietnam, aus Hanoi. In meiner Freizeit spiele ich Badminton und lese viel."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Badminton habe ich früher auch gespielt! Vielleicht können wir mal zusammen spielen."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Sport im Alltag. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Sport im Alltag“. Sie haben dazu einen kurzen Text gelesen: Viele Menschen bewegen sich zu wenig, weil sie den ganzen Tag sitzen. Ärzte empfehlen mindestens 30 Minuten Bewegung pro Tag. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "sport|bewegung|fitness|laufen",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es um Sport im Alltag. Viele Menschen sitzen den ganzen Tag und bewegen sich zu wenig. Ärzte empfehlen deshalb mindestens 30 Minuten Bewegung pro Tag."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass viele Firmen ihren Mitarbeitern Sportkurse bezahlen. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "sport|bewegung|fitness|laufen",
          "Thema"
         ]
        ],
        "model": "Ich finde das sehr gut, weil man nach der Arbeit oft keine Lust mehr hat. Meiner Meinung nach ist schon ein Spaziergang in der Mittagspause hilfreich."
       },
       {
        "who": "Anna",
        "say": "Wie ist das in deinem Heimatland? Machen die Leute viel Sport?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "In meinem Heimatland spielen viele Leute Cricket, und morgens machen manche Yoga im Park. Hier in Deutschland gehen mehr Leute ins Fitnessstudio."
       },
       {
        "who": "Anna",
        "say": "Sollte Sport in der Schule wichtiger sein?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Ja, denn Kinder sollen früh lernen, dass Bewegung Spaß macht. Hast du als Kind viel Sport gemacht?"
       },
       {
        "who": "Anna",
        "say": "Ja, sehr viel. Danke schön!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: den Besuch eines Freundes in Frankfurt. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: den Besuch eines Freundes in Frankfurt. Sprechen Sie über das Programm, das Essen, den Ausflug und die Übernachtung. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unser Freund Ben besucht uns nächstes Wochenende. Wollen wir am Samstag mit ihm in die Altstadt gehen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, gute Idee, weil er die Altstadt noch nicht kennt. Wir könnten danach auch auf den Main-Tower fahren."
       },
       {
        "who": "Anna",
        "say": "Gern. Und wo sollen wir essen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "besuch|museum|essen|restaurant|ausflug|übernachten|sofa|samstag|altstadt",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es mit einem typisch hessischen Restaurant? Dann kann Ben Apfelwein probieren."
       },
       {
        "who": "Anna",
        "say": "Gut. Wo kann Ben übernachten?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ben kann bei mir auf dem Sofa schlafen. Kannst du das Restaurant reservieren?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "besuch|museum|essen|restaurant|ausflug|übernachten|sofa|samstag|altstadt",
          "Plan"
         ]
        ],
        "model": "Also, am Samstag zeigen wir Ben die Altstadt und fahren auf den Main-Tower. Abends essen wir in einem hessischen Restaurant, das du reservierst. Ben übernachtet bei mir."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-6",
  "title": "Modelltest 6",
  "sub": "Regionalnachrichten, Repair-Café, Radiointerview Imkerin · Anfrage an eine Sprachschule",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "items": [
       {
        "q": "Text 1",
        "a": 4,
        "why": "Busse fahren nachts",
        "text": "Ab Dezember fahren in der Stadt auch nachts Busse. Am Freitag und Samstag gibt es zwischen ein und fünf Uhr jede Stunde eine Verbindung zum Hauptbahnhof."
       },
       {
        "q": "Text 2",
        "a": 0,
        "why": "Bäume pflanzen, Schüler",
        "text": "Mehr als 300 Schülerinnen und Schüler haben am Wochenende im Stadtwald junge Bäume gepflanzt. Die Aktion soll jedes Jahr stattfinden."
       },
       {
        "q": "Text 3",
        "a": 7,
        "why": "Gemüse aus der Region im Abo",
        "text": "Eine Gruppe von Bauern liefert jetzt jede Woche eine Kiste mit frischem Gemüse direkt nach Hause. Kunden zahlen einen festen Preis pro Monat."
       },
       {
        "q": "Text 4",
        "a": 2,
        "why": "Ausweis online beantragen",
        "text": "Wer einen neuen Personalausweis braucht, muss nicht mehr lange im Bürgerbüro warten. Den Antrag kann man jetzt im Internet stellen und nur zum Abholen vorbeikommen."
       },
       {
        "q": "Text 5",
        "a": 9,
        "why": "Konzert im Park kostenlos",
        "text": "Jeden Sonntag im August spielen verschiedene Bands im Stadtpark. Der Eintritt ist frei, Getränke gibt es an kleinen Ständen."
       }
      ],
      "list": [
       "Schüler pflanzen Bäume",
       "Neues Fitnessstudio eröffnet",
       "Behördengänge im Internet erledigen",
       "Mieten steigen weiter",
       "Nachtbusse am Wochenende",
       "Flughafen baut neues Terminal",
       "Weniger Kinder in den Schulen",
       "Frisches Gemüse direkt vor die Tür",
       "Kino zeigt alte Filme",
       "Kostenlose Musik unter freiem Himmel"
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "items": [
       {
        "q": "Im Repair-Café …",
        "o": [
         "lernt man einen Beruf.",
         "kauft man gebrauchte Geräte.",
         "repariert man Sachen gemeinsam."
        ],
        "a": 2
       },
       {
        "q": "Die Helfer …",
        "o": [
         "sind alle Elektriker von Beruf.",
         "kommen aus einer Firma.",
         "arbeiten ohne Bezahlung."
        ],
        "a": 2,
        "why": "ehrenamtlich"
       },
       {
        "q": "Am häufigsten bringen Besucher …",
        "o": [
         "Fahrräder.",
         "Kleidung.",
         "Kaffeemaschinen und Toaster."
        ],
        "a": 2
       },
       {
        "q": "Wenn ein Gerät nicht repariert werden kann, …",
        "o": [
         "erklärt man den Grund.",
         "bekommt man Geld zurück.",
         "wird es sofort weggeworfen."
        ],
        "a": 0
       },
       {
        "q": "Für die Reparatur …",
        "o": [
         "braucht man einen Termin.",
         "muss man 20 Euro bezahlen.",
         "zahlt man so viel man möchte."
        ],
        "a": 2,
        "why": "Spende"
       }
      ],
      "text": "Reparieren statt wegwerfen\nJeden ersten Samstag im Monat ist der Gemeindesaal in Kassel-Nord voll. Dann öffnet das Repair-Café. Hier bringen Menschen kaputte Sachen mit und reparieren sie zusammen mit Helfern. „Wir wollen zeigen, dass man nicht immer gleich etwas Neues kaufen muss“, sagt Organisatorin Helga Roth.\nDie zwölf Helferinnen und Helfer arbeiten ehrenamtlich. Manche sind Rentner, die früher Elektriker oder Schneiderin waren, andere einfach gute Bastler. Am häufigsten kommen Besucher mit Kaffeemaschinen und Toastern, aber auch Lampen, Hosen und Spielzeug landen auf den Tischen.\nNicht alles kann man retten. „Manchmal fehlt ein Ersatzteil, oder die Reparatur wäre zu gefährlich“, erklärt Roth. Dann erklären die Helfer, was kaputt ist und warum es nicht geht. Etwa zwei Drittel der Geräte funktionieren am Ende aber wieder.\nEinen festen Preis gibt es nicht. Wer möchte, gibt eine Spende in die Kaffeekasse. Ein Termin ist nicht nötig, man muss aber manchmal etwas warten – bei Kaffee und Kuchen.",
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "per": 2.5,
      "items": [
       {
        "q": "Sie möchten am Wochenende mit Ihren Kindern etwas über Tiere lernen.",
        "a": 6
       },
       {
        "q": "Sie brauchen Hilfe beim Schreiben einer Bewerbung.",
        "a": 2
       },
       {
        "q": "Sie möchten Ihr altes Sofa loswerden.",
        "a": 9
       },
       {
        "q": "Sie suchen einen Platz zum Lernen mit Internet.",
        "a": 0
       },
       {
        "q": "Sie möchten eine neue Sprache lernen und andere Menschen treffen.",
        "a": 11
       },
       {
        "q": "Sie haben Rückenschmerzen und möchten etwas dagegen tun.",
        "a": 4
       },
       {
        "q": "Sie möchten Ihre Wohnung renovieren und brauchen Werkzeug.",
        "a": 7
       },
       {
        "q": "Sie suchen für Ihren Sohn (15) einen Ferienjob.",
        "a": 3
       },
       {
        "q": "Sie möchten Ihren Führerschein machen.",
        "a": 10
       },
       {
        "q": "Sie suchen einen Tanzkurs für Paare.",
        "a": -1,
        "why": "x – kein Tanzkurs"
       }
      ],
      "x": true,
      "list": [
       "Stadtbibliothek: Lernplätze mit kostenlosem WLAN, bis 22 Uhr.",
       "Fotostudio Licht: Porträts und Familienfotos.",
       "Jobcenter-Workshop: Bewerbungen richtig schreiben.",
       "Freibad sucht Schüler ab 15 für Kiosk-Aushilfe in den Sommerferien.",
       "Rückenschule: Kurs mit Physiotherapeutin, Kasse zahlt.",
       "Gebrauchte Kinderwagen günstig.",
       "Naturkundemuseum: Familiensonntag mit Tierführung.",
       "Baumarkt: Werkzeug ausleihen, ab 5 Euro pro Tag.",
       "Pizzeria sucht Fahrer mit Führerschein.",
       "Sperrmüll: Abholung großer Möbel kostenlos, Termin online.",
       "Fahrschule Grün: Intensivkurse in den Ferien.",
       "Sprachcafé: Spanisch, Französisch und Türkisch lernen bei Kaffee und Gesprächen."
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "items": [
       {
        "n": 1,
        "o": [
         "für",
         "auf",
         "über"
        ],
        "a": 0,
        "why": "sich interessieren für"
       },
       {
        "n": 2,
        "o": [
         "Ab",
         "Seit",
         "Vor"
        ],
        "a": 1,
        "why": "Seit + Dauer bis jetzt"
       },
       {
        "n": 3,
        "o": [
         "weil",
         "ob",
         "dass"
        ],
        "a": 0,
        "why": "Grund"
       },
       {
        "n": 4,
        "o": [
         "wann",
         "ob",
         "dass"
        ],
        "a": 1,
        "why": "Ja/Nein-Frage → ob"
       },
       {
        "n": 5,
        "o": [
         "um",
         "im",
         "am"
        ],
        "a": 2,
        "why": "am Abend"
       },
       {
        "n": 6,
        "o": [
         "kostet",
         "kosten",
         "kostest"
        ],
        "a": 0,
        "why": "der Kurs kostet"
       },
       {
        "n": 7,
        "o": [
         "welche",
         "welcher",
         "welches"
        ],
        "a": 0,
        "why": "welche Unterlagen (Plural)"
       },
       {
        "n": 8,
        "o": [
         "wäre",
         "hätte",
         "würde"
        ],
        "a": 0,
        "why": "Es wäre schön"
       },
       {
        "n": 9,
        "o": [
         "von",
         "auf",
         "für"
        ],
        "a": 1,
        "why": "sich freuen auf"
       },
       {
        "n": 10,
        "o": [
         "Gruß",
         "Grüße",
         "Grüßen"
        ],
        "a": 2,
        "why": "Mit freundlichen Grüßen"
       }
      ],
      "text": "Sehr geehrte Damen und Herren,\nich interessiere mich (1) Ihren Intensivkurs B2 und möchte gern mehr Informationen bekommen. (2) zwei Jahren lebe ich in Deutschland und habe im letzten Monat die B1-Prüfung bestanden. Jetzt möchte ich weiterlernen, (3) ich im Beruf besser Deutsch sprechen muss. Ich möchte gern wissen, (4) es noch freie Plätze im Kurs im Oktober gibt. Leider arbeite ich tagsüber, deshalb kann ich nur (5) Abend oder am Wochenende lernen. Außerdem möchte ich fragen, wie viel der Kurs (6) und ob man in Raten bezahlen kann. Bitte teilen Sie mir auch mit, (7) Unterlagen ich für die Anmeldung brauche. Es (8) schön, wenn Sie mir bald antworten könnten. Ich freue mich (9) Ihre Antwort.\nMit freundlichen (10)\nSuresh [Nachname]",
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "items": [
       {
        "n": 11,
        "a": 4,
        "why": "seit"
       },
       {
        "n": 12,
        "a": 0,
        "why": "eine Stelle bekommen"
       },
       {
        "n": 13,
        "a": 9,
        "why": "leider"
       },
       {
        "n": 14,
        "a": 2,
        "why": "einen Kindergartenplatz finden"
       },
       {
        "n": 15,
        "a": 7,
        "why": "obwohl + Verb am Ende"
       },
       {
        "n": 16,
        "a": 1,
        "why": "Zeit haben"
       },
       {
        "n": 17,
        "a": 12,
        "why": "an mich denken"
       },
       {
        "n": 18,
        "a": 5,
        "why": "zum Beispiel"
       },
       {
        "n": 19,
        "a": 11,
        "why": "wenn"
       },
       {
        "n": 20,
        "a": 14,
        "why": "Liebe Grüße"
       }
      ],
      "list": [
       "Stelle",
       "Zeit",
       "finden",
       "aber",
       "seit",
       "zum",
       "deshalb",
       "obwohl",
       "weil",
       "leider",
       "dass",
       "wenn",
       "an",
       "über",
       "Grüße"
      ],
      "text": "Liebe Sabine,\nwie geht es dir? Wir haben uns (11) dem Sommer nicht mehr gesehen, und ich habe viel zu erzählen. Ich habe eine neue (12) als Krankenpfleger in einem großen Krankenhaus bekommen. Die Arbeit macht mir Spaß, aber ich muss (13) oft am Wochenende arbeiten. Für unsere Tochter konnten wir endlich einen Kindergartenplatz (14). Sie geht sehr gern hin, (15) sie am Anfang viel geweint hat. Leider haben wir jetzt wenig (16) für Freunde. Denkst du noch (17) mich? Wir könnten uns doch bald treffen, (18) Beispiel im Dezember auf dem Weihnachtsmarkt. Ruf mich an, (19) du Zeit hast!\nLiebe (20)\nSuresh",
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Die Sprecherin arbeitet jetzt weniger Stunden.",
        "a": true,
        "why": "nur noch 30 Stunden",
        "audio": "Seit unser Sohn auf der Welt ist, arbeite ich nur noch 30 Stunden pro Woche. Das Geld ist knapper, aber ich habe mehr Zeit für die Familie."
       },
       {
        "q": "Der Sprecher wohnt allein.",
        "a": false,
        "why": "in einer WG mit drei anderen",
        "audio": "Ich wohne in einer WG mit drei anderen Studenten. Manchmal ist es laut, aber wir kochen oft zusammen, und ich bin nie allein."
       },
       {
        "q": "Die Sprecherin findet das Wetter in Deutschland schlecht.",
        "a": true,
        "audio": "Ich komme aus Ägypten. Das Leben hier gefällt mir gut, aber an das Wetter kann ich mich nicht gewöhnen. Im Winter ist es so dunkel und grau."
       },
       {
        "q": "Der Sprecher hat seinen Job verloren.",
        "a": false,
        "why": "Er hat selbst gekündigt.",
        "audio": "Letzten Monat habe ich meine Stelle gekündigt. Ich wollte etwas Neues machen. Jetzt mache ich eine Weiterbildung im IT-Bereich."
       },
       {
        "q": "Die Sprecherin geht gern auf Flohmärkte.",
        "a": true,
        "audio": "Am Wochenende gehe ich am liebsten auf Flohmärkte. Dort finde ich oft schöne alte Sachen für meine Wohnung, und sie sind viel billiger als im Geschäft."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "items": [
       {
        "q": "Frau Schäfer hält seit zehn Jahren Bienen.",
        "a": true
       },
       {
        "q": "Sie hat das Imkern von ihrem Vater gelernt.",
        "a": false,
        "why": "von einem Nachbarn"
       },
       {
        "q": "Ihre Bienen stehen auf einem Dach in der Stadt.",
        "a": true
       },
       {
        "q": "In der Stadt finden Bienen weniger Blumen als auf dem Land.",
        "a": false,
        "why": "oft mehr verschiedene Blumen"
       },
       {
        "q": "Ein Bienenvolk hat im Sommer bis zu 50.000 Bienen.",
        "a": true
       },
       {
        "q": "Frau Schäfer verkauft ihren Honig im Supermarkt.",
        "a": false,
        "why": "auf dem Wochenmarkt"
       },
       {
        "q": "Sie wird manchmal gestochen.",
        "a": true
       },
       {
        "q": "Für Anfänger ist ein Kurs wichtig.",
        "a": true
       },
       {
        "q": "Bienen brauchen im Winter viel Arbeit.",
        "a": false,
        "why": "im Winter wenig Arbeit"
       },
       {
        "q": "Frau Schäfer bietet Führungen für Schulklassen an.",
        "a": true
       }
      ],
      "audio": "Moderator: Heute ist Frau Schäfer bei uns, Hobby-Imkerin in Frankfurt. Frau Schäfer, seit wann halten Sie Bienen?\nFrau Schäfer: Seit zehn Jahren. Ein Nachbar hatte Bienen, und er hat mir alles gezeigt.\nModerator: Wo stehen Ihre Bienen?\nFrau Schäfer: Auf dem Dach unseres Hauses, mitten in der Stadt.\nModerator: Finden Bienen in der Stadt genug Blumen?\nFrau Schäfer: Ja, oft sogar mehr verschiedene Blumen als auf dem Land. Dort gibt es viele große Felder mit nur einer Pflanze. In der Stadt haben wir Parks, Gärten und Balkone.\nModerator: Wie viele Bienen haben Sie?\nFrau Schäfer: Ich habe vier Völker. Im Sommer hat ein Volk bis zu 50.000 Bienen.\nModerator: Was machen Sie mit dem Honig?\nFrau Schäfer: Ich verkaufe ihn samstags auf dem Wochenmarkt. Die Leute lieben Honig aus ihrer Stadt.\nModerator: Werden Sie oft gestochen?\nFrau Schäfer: Manchmal schon, das gehört dazu. Aber mit der richtigen Kleidung passiert nicht viel.\nModerator: Was raten Sie Anfängern?\nFrau Schäfer: Unbedingt einen Kurs beim Imkerverein machen. Man muss viel wissen.\nModerator: Und im Winter?\nFrau Schäfer: Da haben die Bienen Pause und ich habe wenig Arbeit. Im Frühling geht es wieder los.\nModerator: Haben Sie noch andere Projekte?\nFrau Schäfer: Ja, ich mache Führungen für Schulklassen. Die Kinder sind immer total begeistert.",
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Die S-Bahn fährt heute nur bis zum Hauptbahnhof.",
        "a": true,
        "audio": "Information der S-Bahn: Wegen einer Störung fahren die Züge der S5 heute nur bis zum Hauptbahnhof."
       },
       {
        "q": "Am Wochenende gibt es Gewitter.",
        "a": false,
        "why": "sonnig und warm",
        "audio": "Das Wetter am Wochenende: sonnig und warm bis 28 Grad. Gewitter erst ab Montag."
       },
       {
        "q": "Man kann die Tickets nur online kaufen.",
        "a": false,
        "why": "auch an der Abendkasse",
        "audio": "Für das Konzert am Freitag gibt es noch Karten online und an der Abendkasse."
       },
       {
        "q": "Die Bibliothek hat jetzt am Samstag geöffnet.",
        "a": true,
        "audio": "Gute Nachricht: Ab sofort ist die Stadtbibliothek auch samstags von 10 bis 14 Uhr geöffnet."
       },
       {
        "q": "Der Patient soll nüchtern kommen.",
        "a": true,
        "why": "nichts essen",
        "audio": "Hier ist die Praxis Doktor Yilmaz. Für Ihre Blutuntersuchung morgen essen Sie bitte vorher nichts. Sie dürfen nur Wasser trinken."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Sie möchten einen Abendkurs an einer Sprachschule machen. Schreiben Sie an die Schule:",
      "points": [
       "Grund des Schreibens",
       "welcher Kurs und warum",
       "Fragen zu Preis und Zeiten",
       "Bitte um Informationsmaterial"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich habe auf Ihrer Internetseite gelesen, dass Sie Abendkurse für Deutsch anbieten, und möchte mich gern informieren.\nIch interessiere mich für einen Kurs auf dem Niveau B2. Ich habe vor Kurzem die B1-Prüfung bestanden und möchte jetzt weiterlernen, weil ich im Beruf viele E-Mails auf Deutsch schreiben muss.\nKönnten Sie mir bitte sagen, wie viel der Kurs kostet und an welchen Tagen er stattfindet? Da ich bis 17 Uhr arbeite, kann ich erst ab 18 Uhr am Unterricht teilnehmen. Gibt es auch eine Ermäßigung für Berufstätige?\nIch würde mich freuen, wenn Sie mir Informationsmaterial per E-Mail schicken könnten.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Was hast du gemacht, bevor du nach Deutschland gekommen bist?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich habe in Indien studiert und danach vier Jahre als Ingenieur gearbeitet. Dann habe ich hier eine Stelle bekommen."
       },
       {
        "who": "Anna",
        "say": "Was war am Anfang in Deutschland schwierig für dich?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Am Anfang war die Wohnungssuche sehr schwierig, weil ich wenig Deutsch gesprochen habe. Auch die vielen Formulare waren kompliziert."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Italien, aus Neapel. In meiner Freizeit fotografiere ich und fahre Fahrrad."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Fotografieren finde ich auch spannend! Ich mache aber nur Fotos mit dem Handy."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Ehrenamt. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Ehrenamt“. Sie haben dazu einen kurzen Text gelesen: Fast jeder dritte Deutsche arbeitet ehrenamtlich, zum Beispiel im Sportverein oder in der Flüchtlingshilfe. Viele haben aber immer weniger Zeit dafür. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "ehrenamt|freiwillig|helfen|verein",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es um das Ehrenamt. Fast jeder dritte Deutsche hilft freiwillig, zum Beispiel im Sportverein. Aber viele Menschen haben heute weniger Zeit dafür."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass junge Leute lieber kurze Projekte machen als lange in einem Verein zu bleiben. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "ehrenamt|freiwillig|helfen|verein",
          "Thema"
         ]
        ],
        "model": "Ich finde ehrenamtliche Arbeit sehr wichtig, weil sie die Gesellschaft stärker macht. Meiner Meinung nach sind kurze Projekte auch gut, denn nicht jeder hat jede Woche Zeit."
       },
       {
        "who": "Anna",
        "say": "Hast du selbst schon einmal ehrenamtlich gearbeitet?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "Ja, in Indien habe ich früher Kindern bei den Hausaufgaben geholfen. Hier in Deutschland helfe ich manchmal bei einem Fest in unserem Viertel."
       },
       {
        "who": "Anna",
        "say": "Sollten Firmen ihren Mitarbeitern Zeit für ein Ehrenamt geben?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Ja, ich glaube, das ist eine gute Idee, denn dann können mehr Menschen helfen. Was meinst du?"
       },
       {
        "who": "Anna",
        "say": "Das finde ich auch. Danke für das Gespräch!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: einen Kochabend mit dem Deutschkurs. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: einen Kochabend mit dem Deutschkurs. Sprechen Sie über den Tag, den Ort, das Essen und die Getränke. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wollen wir mit dem Kurs einen internationalen Kochabend machen? Jeder kocht etwas aus seinem Land."
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, die Idee finde ich super, weil wir so die Küche der anderen kennenlernen. Ich koche gern ein indisches Curry."
       },
       {
        "who": "Anna",
        "say": "Toll. Wo könnten wir das machen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "kochabend|kochen|essen|küche|freitag|samstag|getränke|rezept",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es mit der Küche in der Sprachschule? Sie ist groß und wir könnten die Lehrerin fragen."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und wer kümmert sich um die Getränke?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kann die Getränke kaufen. Kannst du die Lehrerin wegen der Küche fragen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "kochabend|kochen|essen|küche|freitag|samstag|getränke|rezept",
          "Plan"
         ]
        ],
        "model": "Also, wir machen einen internationalen Kochabend in der Küche der Sprachschule. Jeder kocht etwas aus seinem Land. Ich kaufe die Getränke, und du fragst die Lehrerin."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-7",
  "title": "Modelltest 7",
  "sub": "Stadtleben, Mehrgenerationenhaus, Radiointerview Hebamme · Beschwerde über eine Reise",
  "sections": [
   {
    "id": "lesen",
    "de": "Leseverstehen und Sprachbausteine",
    "en": "Reading and language elements",
    "time": 90,
    "parts": [
     {
      "t": "Leseverstehen Teil 1 – Globalverstehen",
      "tab": "Lesen 1",
      "intro": "Lesen Sie die Überschriften a bis j und die fünf Texte. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      "type": "match",
      "per": 5,
      "items": [
       {
        "q": "Text 1",
        "a": 3,
        "why": "Fahrradstraße, Autos nur langsam",
        "text": "Die Goethestraße ist seit Montag eine Fahrradstraße. Autos dürfen hier nur noch fahren, wenn sie dort wohnen, und höchstens 30 km/h."
       },
       {
        "q": "Text 2",
        "a": 8,
        "why": "Spielzeug tauschen, Kita",
        "text": "Im Familienzentrum können Eltern jetzt jeden Mittwoch Spielzeug tauschen. So bekommen die Kinder neue Sachen, ohne dass die Familie etwas kaufen muss."
       },
       {
        "q": "Text 3",
        "a": 5,
        "why": "Hitze, Wasser trinken, Ältere",
        "text": "Wegen der großen Hitze bittet die Stadt alle Bürger, sich um ältere Nachbarn zu kümmern. Sie sollen genug Wasser trinken und mittags nicht nach draußen gehen."
       },
       {
        "q": "Text 4",
        "a": 0,
        "why": "Museum Eintritt frei Donnerstag",
        "text": "Jeden Donnerstag ab 17 Uhr kostet der Eintritt im Kunstmuseum nichts. Das Angebot ist besonders bei jungen Leuten beliebt."
       },
       {
        "q": "Text 5",
        "a": 6,
        "why": "neue Ärzte, Landarztpraxis",
        "text": "Im Dorf Neuhausen gibt es endlich wieder einen Hausarzt. Zwei junge Ärztinnen haben die alte Praxis übernommen und modern eingerichtet."
       }
      ],
      "list": [
       "Kunst am Donnerstagabend kostenlos",
       "Neuer Spielplatz im Westend",
       "Benzinpreise steigen",
       "Vorrang für Radfahrer",
       "Großes Stadtfest geplant",
       "Bei Hitze auf ältere Menschen achten",
       "Dorf hat wieder eine Arztpraxis",
       "Universität bekommt neue Bibliothek",
       "Tauschen statt kaufen für Familien",
       "Streik bei der Bahn"
      ],
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 2 – Detailverstehen",
      "tab": "Lesen 2",
      "intro": "Lesen Sie den Text und die Aufgaben. Welche Lösung ist richtig: a, b oder c?",
      "type": "mc",
      "per": 5,
      "items": [
       {
        "q": "Im Mehrgenerationenhaus …",
        "o": [
         "treffen sich Jung und Alt.",
         "gibt es nur Angebote für Kinder.",
         "wohnen nur Senioren."
        ],
        "a": 0
       },
       {
        "q": "Herr Krüger …",
        "o": [
         "hilft Kindern bei den Hausaufgaben.",
         "leitet das Haus.",
         "kocht jeden Tag."
        ],
        "a": 0
       },
       {
        "q": "Die junge Mutter Leyla …",
        "o": [
         "möchte bald umziehen.",
         "hat dort Freunde gefunden.",
         "arbeitet im Haus als Köchin."
        ],
        "a": 1
       },
       {
        "q": "Das Mittagessen …",
        "o": [
         "gibt es nur am Wochenende.",
         "kostet wenig.",
         "ist sehr teuer."
        ],
        "a": 1,
        "why": "3,50 Euro"
       },
       {
        "q": "Das Haus braucht …",
        "o": [
         "mehr freiwillige Helfer.",
         "mehr Platz.",
         "mehr Geld von der Stadt."
        ],
        "a": 0
       }
      ],
      "text": "Ein Haus für alle Generationen\nIm Mehrgenerationenhaus in Bremen-Ost ist immer etwas los. Am Vormittag treffen sich Senioren zum Gedächtnistraining, mittags essen Familien gemeinsam, und am Nachmittag kommen Schulkinder. „Bei uns treffen sich Jung und Alt“, sagt die Leiterin Monika Haas.\nDer 74-jährige Werner Krüger kommt dreimal pro Woche. Er war früher Mathelehrer und hilft heute Kindern bei den Hausaufgaben. „Ich fühle mich wieder gebraucht“, sagt er. „Und die Kinder bringen mir bei, wie mein Smartphone funktioniert.“\nAuch Leyla, Mutter von zwei kleinen Kindern, ist oft hier. Sie ist vor drei Jahren nach Bremen gezogen und kannte niemanden. „Im Elterncafé habe ich Freundinnen gefunden. Jetzt fühle ich mich hier zu Hause.“\nJeden Mittag kochen Freiwillige ein warmes Essen, das nur 3,50 Euro kostet. Das Geld für Miete und Strom bekommt das Haus von der Stadt. Was fehlt, sind Menschen: „Wir suchen dringend mehr Ehrenamtliche, die ein paar Stunden pro Woche helfen“, sagt Monika Haas.",
      "time": 20
     },
     {
      "t": "Leseverstehen Teil 3 – Selektives Verstehen",
      "tab": "Lesen 3",
      "intro": "Lesen Sie die Situationen und die Anzeigen a bis l. Welche Anzeige passt? Jede Anzeige nur einmal. Wenn keine Anzeige passt, wählen Sie x.",
      "type": "match",
      "per": 2.5,
      "items": [
       {
        "q": "Sie haben Ihren Schlüssel verloren und kommen nicht in die Wohnung.",
        "a": 4
       },
       {
        "q": "Sie suchen einen Deutschkurs für Ihre Mutter (65).",
        "a": 10
       },
       {
        "q": "Sie möchten Ihr Fahrrad verkaufen.",
        "a": 1
       },
       {
        "q": "Sie suchen Nachhilfe in Mathe für Ihre Tochter.",
        "a": 6
       },
       {
        "q": "Sie möchten nach der Arbeit Yoga machen.",
        "a": 9
       },
       {
        "q": "Sie brauchen jemanden, der Ihre Katze im Urlaub füttert.",
        "a": 3
       },
       {
        "q": "Sie möchten Ihre Hochzeit feiern und suchen einen Raum.",
        "a": 0
       },
       {
        "q": "Sie möchten lernen, Ihre Steuererklärung selbst zu machen.",
        "a": 7
       },
       {
        "q": "Sie suchen gebrauchte Bücher.",
        "a": 11
       },
       {
        "q": "Sie möchten Ihr Auto waschen lassen.",
        "a": -1,
        "why": "x – keine Autowäsche"
       }
      ],
      "x": true,
      "list": [
       "Festsaal zu vermieten, bis 120 Personen, mit Küche.",
       "Fahrradbörse: Gebrauchte Räder kaufen und verkaufen, Samstag.",
       "Malkurs für Kinder, freitags.",
       "Tiersitter: Wir kümmern uns um Ihr Haustier, auch im Urlaub.",
       "Schlüsseldienst: 24 Stunden, schnell vor Ort.",
       "Computer-Reparatur in 24 Stunden.",
       "Nachhilfe: Mathe und Englisch für alle Klassen.",
       "VHS-Kurs: Steuererklärung leicht gemacht.",
       "Elektriker: Installationen und Reparaturen.",
       "Yoga am Abend: Kurse ab 19 Uhr.",
       "Deutsch für Senioren: langsames Lerntempo, vormittags.",
       "Antiquariat: alte und gebrauchte Bücher günstig."
      ],
      "time": 20
     },
     {
      "t": "Sprachbausteine Teil 1 – Grammatik",
      "tab": "Sprachb. 1",
      "intro": "Lesen Sie den Brief. Welches Wort passt in die Lücke: a, b oder c?",
      "type": "gapmc",
      "per": 1.5,
      "items": [
       {
        "n": 1,
        "o": [
         "von",
         "bei",
         "mit"
        ],
        "a": 2,
        "why": "mit + Dativ"
       },
       {
        "n": 2,
        "o": [
         "obwohl",
         "damit",
         "weil"
        ],
        "a": 0,
        "why": "Gegensatz"
       },
       {
        "n": 3,
        "o": [
         "hatte",
         "war",
         "wurde"
        ],
        "a": 1,
        "why": "Das Zimmer war …"
       },
       {
        "n": 4,
        "o": [
         "der",
         "dem",
         "den"
        ],
        "a": 1,
        "why": "an + Dativ: an dem/am"
       },
       {
        "n": 5,
        "o": [
         "aber",
         "sondern",
         "oder"
        ],
        "a": 1,
        "why": "nicht …, sondern"
       },
       {
        "n": 6,
        "o": [
         "zum",
         "zur",
         "zu"
        ],
        "a": 2,
        "why": "zu Fuß"
       },
       {
        "n": 7,
        "o": [
         "dass",
         "ob",
         "wenn"
        ],
        "a": 0,
        "why": "erwarten, dass"
       },
       {
        "n": 8,
        "o": [
         "zurück",
         "an",
         "ab"
        ],
        "a": 0,
        "why": "zurückzahlen"
       },
       {
        "n": 9,
        "o": [
         "Weil",
         "Ob",
         "Falls"
        ],
        "a": 2,
        "why": "Bedingung"
       },
       {
        "n": 10,
        "o": [
         "mit",
         "bei",
         "an"
        ],
        "a": 2,
        "why": "sich wenden an"
       }
      ],
      "text": "Sehr geehrte Damen und Herren,\nvom 3. bis 10. Juli habe ich (1) meiner Familie eine Reise nach Mallorca bei Ihnen gebucht. Leider war der Urlaub eine große Enttäuschung, (2) wir uns lange darauf gefreut hatten. Das Zimmer (3) viel kleiner als auf den Fotos, und die Klimaanlage funktionierte nicht. An (4) zweiten Tag haben wir uns an der Rezeption beschwert, aber niemand hat uns geholfen. Außerdem lag das Hotel nicht direkt am Strand, (5) zwei Kilometer entfernt. (6) Fuß brauchten wir 30 Minuten, einen Bus gab es nicht. Ich erwarte deshalb, (7) Sie uns einen Teil des Reisepreises (8) zahlen. (9) ich bis zum Monatsende keine Antwort bekomme, werde ich mich (10) einen Anwalt wenden.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 15
     },
     {
      "t": "Sprachbausteine Teil 2 – Wortschatz",
      "tab": "Sprachb. 2",
      "intro": "Lesen Sie den Text. Welches Wort aus der Liste a bis o passt in die Lücke? Jedes Wort nur einmal. Fünf Wörter bleiben übrig.",
      "type": "gapbank",
      "per": 1.5,
      "items": [
       {
        "n": 11,
        "a": 3,
        "why": "ein Jahr lang"
       },
       {
        "n": 12,
        "a": 10,
        "why": "in einer Firma"
       },
       {
        "n": 13,
        "a": 0,
        "why": "Erfahrung sammeln"
       },
       {
        "n": 14,
        "a": 6,
        "why": "deshalb + Verb auf Position 2"
       },
       {
        "n": 15,
        "a": 13,
        "why": "sich bewerben um"
       },
       {
        "n": 16,
        "a": 8,
        "why": "Kenntnisse"
       },
       {
        "n": 17,
        "a": 2,
        "why": "teamfähig sein"
       },
       {
        "n": 18,
        "a": 14,
        "why": "zur Verfügung stehen"
       },
       {
        "n": 19,
        "a": 5,
        "why": "über eine Einladung"
       },
       {
        "n": 20,
        "a": 11,
        "why": "Mit freundlichen Grüßen"
       }
      ],
      "list": [
       "Erfahrung",
       "weil",
       "teamfähig",
       "lang",
       "wenn",
       "über",
       "deshalb",
       "aber",
       "Kenntnisse",
       "seit",
       "einer",
       "Grüßen",
       "dass",
       "um",
       "Verfügung"
      ],
      "text": "Sehr geehrte Frau Dr. Albrecht,\nnach meinem Studium habe ich ein Jahr (11) als Praktikant in (12) großen Firma für Logistik gearbeitet. Dort konnte ich viel (13) im Bereich Einkauf sammeln. Die Arbeit hat mir sehr gefallen, (14) möchte ich in diesem Bereich bleiben. Ich bewerbe mich (15) die Stelle als Sachbearbeiter, die Sie in der Zeitung ausgeschrieben haben. Ich habe gute (16) in Englisch und kann sicher mit dem Computer arbeiten. Meine Kollegen sagen, dass ich zuverlässig und (17) bin. Für ein persönliches Gespräch stehe ich Ihnen gern zur (18). Über eine Einladung freue ich mich – auch (19) eine kurze Antwort per E-Mail.\nMit freundlichen (20)\nSuresh [Nachname]",
      "time": 15
     }
    ]
   },
   {
    "id": "hoeren",
    "de": "Hörverstehen",
    "en": "Listening",
    "time": 30,
    "parts": [
     {
      "t": "Teil 1 – Globalverstehen",
      "tab": "Teil 1",
      "intro": "Sie hören fünf kurze Texte. Sie hören die Texte nur einmal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 1,
      "items": [
       {
        "q": "Der Sprecher hat mit dem Rauchen aufgehört.",
        "a": true,
        "why": "seit einem Jahr",
        "audio": "Seit einem Jahr rauche ich nicht mehr. Es war schwer, aber jetzt fühle ich mich viel fitter, und ich spare jeden Monat viel Geld."
       },
       {
        "q": "Die Sprecherin fährt mit dem Auto in den Urlaub.",
        "a": false,
        "why": "mit dem Nachtzug",
        "audio": "Dieses Jahr fahren wir mit dem Nachtzug nach Wien. Das ist bequemer als das Auto, und wir kommen ausgeschlafen an."
       },
       {
        "q": "Der Sprecher arbeitet gern im Großraumbüro.",
        "a": false,
        "why": "zu laut, er kann sich nicht konzentrieren",
        "audio": "In meiner Firma arbeiten wir alle in einem Großraumbüro. Mir ist es dort oft zu laut, ich kann mich schlecht konzentrieren."
       },
       {
        "q": "Die Sprecherin hat einen Garten.",
        "a": true,
        "why": "Schrebergarten",
        "audio": "Wir haben seit letztem Jahr einen kleinen Schrebergarten. Am Wochenende pflanzen wir Gemüse und grillen mit Freunden."
       },
       {
        "q": "Der Sprecher lernt ein Instrument.",
        "a": true,
        "why": "Klavier",
        "audio": "Mit 45 Jahren habe ich angefangen, Klavier zu lernen. Mein Lehrer sagt, es ist nie zu spät. Ich übe jeden Abend eine halbe Stunde."
       }
      ],
      "time": 7
     },
     {
      "t": "Teil 2 – Detailverstehen",
      "tab": "Teil 2",
      "intro": "Sie hören ein Interview im Radio. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 2.5,
      "plays": 2,
      "items": [
       {
        "q": "Frau Lorenz arbeitet seit 20 Jahren als Hebamme.",
        "a": true
       },
       {
        "q": "Sie arbeitet in einem Krankenhaus.",
        "a": false,
        "why": "selbstständig, Hausbesuche"
       },
       {
        "q": "Sie besucht die Familien nach der Geburt zu Hause.",
        "a": true
       },
       {
        "q": "Viele Eltern haben am Anfang Angst.",
        "a": true
       },
       {
        "q": "Die Arbeit ist gut bezahlt.",
        "a": false,
        "why": "Die Bezahlung ist nicht gut."
       },
       {
        "q": "Sie arbeitet oft auch nachts.",
        "a": true
       },
       {
        "q": "Es gibt genug Hebammen in der Stadt.",
        "a": false,
        "why": "zu wenige"
       },
       {
        "q": "Frau Lorenz hat selbst drei Kinder.",
        "a": false,
        "why": "zwei"
       },
       {
        "q": "Sie gibt auch Kurse für Schwangere.",
        "a": true
       },
       {
        "q": "Am schönsten findet sie den ersten Schrei des Babys.",
        "a": true
       }
      ],
      "audio": "Moderatorin: Heute zu Gast: Frau Lorenz, Hebamme aus Hannover. Frau Lorenz, wie lange machen Sie diesen Beruf schon?\nFrau Lorenz: Seit 20 Jahren. Am Anfang war ich im Krankenhaus, heute bin ich selbstständig.\nModeratorin: Was heißt das genau?\nFrau Lorenz: Ich besuche die Familien nach der Geburt zu Hause. Ich schaue, ob es Mutter und Baby gut geht, und beantworte Fragen.\nModeratorin: Welche Fragen haben die Eltern?\nFrau Lorenz: Viele haben am Anfang Angst, etwas falsch zu machen. Wie oft muss das Baby trinken? Warum weint es? Da kann ich helfen.\nModeratorin: Wie sind die Arbeitszeiten?\nFrau Lorenz: Unregelmäßig. Babys kommen, wann sie wollen, deshalb arbeite ich oft auch nachts. Und ehrlich gesagt ist die Bezahlung nicht gut.\nModeratorin: Gibt es genug Hebammen?\nFrau Lorenz: Nein, leider viel zu wenige. Viele Frauen finden keine Hebamme mehr.\nModeratorin: Wie schaffen Sie das mit Ihrer eigenen Familie?\nFrau Lorenz: Ich habe zwei Kinder, die sind schon groß. Mein Mann hilft sehr viel.\nModeratorin: Machen Sie noch etwas anderes?\nFrau Lorenz: Ja, ich gebe Kurse für Schwangere. Dort lernen sie, was bei der Geburt passiert.\nModeratorin: Was ist für Sie der schönste Moment?\nFrau Lorenz: Der erste Schrei des Babys. Das ist auch nach 20 Jahren noch etwas ganz Besonderes.",
      "time": 15
     },
     {
      "t": "Teil 3 – Selektives Verstehen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?",
      "type": "rf",
      "per": 5,
      "plays": 2,
      "items": [
       {
        "q": "Der Bus fährt heute eine andere Strecke.",
        "a": true,
        "why": "Umleitung",
        "audio": "Achtung: Wegen des Stadtmarathons fährt die Buslinie 34 heute eine Umleitung über die Bahnhofstraße."
       },
       {
        "q": "Morgen schneit es im ganzen Land.",
        "a": false,
        "why": "nur in den Bergen",
        "audio": "Das Wetter für morgen: im Norden Regen, nur in den Bergen kann es schneien."
       },
       {
        "q": "Kinder bekommen heute im Zoo Eintritt frei.",
        "a": true,
        "audio": "Liebe Besucher, zum Kindertag haben heute alle Kinder unter zwölf Jahren freien Eintritt in den Zoo."
       },
       {
        "q": "Die Reinigung ist am Samstag geschlossen.",
        "a": false,
        "why": "samstags bis 14 Uhr geöffnet",
        "audio": "Hier ist die Reinigung Blitzblank. Unsere Öffnungszeiten: montags bis freitags 8 bis 18 Uhr, samstags 9 bis 14 Uhr."
       },
       {
        "q": "Die Kunden sollen ihre Kundennummer bereithalten.",
        "a": true,
        "audio": "Willkommen beim Kundenservice der Stadtwerke. Bitte halten Sie Ihre Kundennummer bereit. Sie werden gleich verbunden."
       }
      ],
      "time": 8
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schriftlicher Ausdruck",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief",
      "intro": "Schreiben Sie einen Brief. Schreiben Sie zu allen vier Punkten. Denken Sie an Anrede, Einleitung, Schluss und Gruß.",
      "type": "write",
      "crit": "b1",
      "words": 150,
      "task": "Sie haben im Internet eine Busreise nach Prag gebucht. Die Reise war schlecht organisiert. Schreiben Sie an das Reisebüro:",
      "points": [
       "Grund des Schreibens",
       "Was war das Problem?",
       "Was erwarten Sie jetzt?",
       "Was machen Sie, wenn das Reisebüro nicht reagiert?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nam letzten Wochenende habe ich an Ihrer Busreise nach Prag teilgenommen. Leider war ich mit der Reise sehr unzufrieden und möchte mich deshalb beschweren.\nSchon am Anfang gab es Probleme: Der Bus kam zwei Stunden zu spät, und niemand hat uns informiert. In Prag war unser Hotel nicht im Zentrum, wie im Katalog beschrieben, sondern weit draußen. Die Stadtführung, die im Preis enthalten war, hat gar nicht stattgefunden.\nIch erwarte, dass Sie mir mindestens die Hälfte des Reisepreises zurückzahlen. Außerdem möchte ich eine Erklärung, warum die Stadtführung ausgefallen ist.\nWenn ich bis Ende des Monats keine Antwort bekomme, werde ich mich an die Verbraucherzentrale wenden.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "time": 30
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Mündlicher Ausdruck",
    "en": "Speaking",
    "time": 15,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Kontaktaufnahme",
      "tab": "Teil 1",
      "intro": "Lernen Sie Ihre Partnerin kennen: Antworten Sie auf ihre Fragen und stellen Sie selbst Fragen.",
      "type": "speak",
      "max": 15,
      "time": 4,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Guten Tag. Im ersten Teil lernen Sie sich kennen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Hallo! Wie bist du heute zur Prüfung gekommen?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Ich bin mit der S-Bahn gekommen. Das ging schnell, weil ich direkt am Bahnhof wohne."
       },
       {
        "who": "Anna",
        "say": "Was machst du gern im Urlaub?"
       },
       {
        "you": "Antworte Anna ausführlich (2–3 Sätze).",
        "min": 12,
        "key": [
         [
          "\\bich\\b",
          "von dir erzählen"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b|und|aber",
          "Sätze verbunden"
         ]
        ],
        "model": "Im Urlaub reise ich gern in andere Länder und lerne neue Kulturen kennen. Letztes Jahr war ich in Portugal, das war wunderschön."
       },
       {
        "who": "Prüfer",
        "say": "Danke. Jetzt fragen Sie Anna."
       },
       {
        "you": "Stell Anna zwei Fragen: woher sie kommt und was sie in der Freizeit macht.",
        "min": 6,
        "key": [
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Frageform"
         ],
         [
          "woher|komm",
          "Herkunft"
         ],
         [
          "freizeit|hobby|wochenende|gern",
          "Freizeit"
         ]
        ],
        "model": "Woher kommst du eigentlich? Und was machst du gern in deiner Freizeit?"
       },
       {
        "who": "Anna",
        "say": "Ich komme aus Griechenland, aus Thessaloniki. In meiner Freizeit gehe ich gern wandern und singe in einem Chor."
       },
       {
        "you": "Reagiere auf Annas Antwort und erzähl etwas Passendes von dir.",
        "min": 8,
        "key": [
         [
          "\\bich\\b|auch|interessant|toll|schön",
          "Reaktion"
         ]
        ],
        "model": "Ein Chor klingt toll! Ich wandere auch gern, vielleicht können wir mal zusammen gehen."
       }
      ]
     },
     {
      "t": "Teil 2 – Gespräch über ein Thema",
      "tab": "Teil 2",
      "intro": "Thema: Fleisch essen. Berichten Sie kurz über Ihren Text, sagen Sie Ihre Meinung und sprechen Sie über Ihre Erfahrungen.",
      "type": "speak",
      "max": 30,
      "time": 6,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im zweiten Teil sprechen Sie über das Thema „Fleisch essen“. Sie haben dazu einen kurzen Text gelesen: Immer mehr Menschen in Deutschland essen weniger Fleisch. Etwa jeder zehnte lebt vegetarisch, viele aus Gründen der Gesundheit oder der Umwelt. Bitte berichten Sie kurz, was in Ihrem Text steht."
       },
       {
        "you": "Berichte kurz, was in deinem Text steht (3–4 Sätze).",
        "min": 25,
        "key": [
         [
          "text|artikel|geht es um",
          "Einleitung"
         ],
         [
          "fleisch|vegetarisch|vegan|essen",
          "Thema"
         ],
         [
          "viele|immer mehr|prozent|menschen|leute",
          "Inhalt"
         ]
        ],
        "model": "In meinem Text geht es darum, dass viele Menschen in Deutschland weniger Fleisch essen. Etwa zehn Prozent leben vegetarisch. Die Gründe sind oft Gesundheit oder Umwelt."
       },
       {
        "who": "Anna",
        "say": "In meinem Text steht, dass es in Kantinen jetzt jeden Tag ein vegetarisches Gericht gibt. Was denkst du darüber?"
       },
       {
        "you": "Sag deine Meinung und begründe sie.",
        "min": 15,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ],
         [
          "fleisch|vegetarisch|vegan|essen",
          "Thema"
         ]
        ],
        "model": "Ich finde, man muss nicht ganz auf Fleisch verzichten, aber weniger Fleisch ist gut, weil es gesünder ist. Deshalb esse ich nur zweimal pro Woche Fleisch."
       },
       {
        "who": "Anna",
        "say": "Wie ist das in deinem Heimatland? Essen die Leute viel Fleisch?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen oder von deinem Heimatland.",
        "min": 15,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|zu hause|früher",
          "Vergleich / Erfahrung"
         ],
         [
          "\\bich\\b",
          "persönlich"
         ]
        ],
        "model": "In meinem Heimatland Indien leben sehr viele Menschen vegetarisch, oft aus religiösen Gründen. Für mich war es in Deutschland am Anfang schwer, vegetarisches Essen zu finden."
       },
       {
        "who": "Anna",
        "say": "Sollte Fleisch teurer werden?"
       },
       {
        "you": "Antworte Anna und stell ihr eine Frage zum Thema.",
        "min": 12,
        "key": [
         [
          "meiner meinung|ich finde|ich denke|ich glaube|meine meinung|ja|nein",
          "Antwort"
         ],
         [
          "^\\s*(w\\w+|hast|bist|kannst|magst|isst|kaufst|gehst|machst|fährst|trinkst|spielst|liest|siehst|arbeitest|wohnst|hörst|kochst|möchtest|gibt|fliegst|beginnst|reist|schläfst|treibst|nimmst|brauchst|findest|hättest|würdest|bleibst)\\b",
          "Gegenfrage"
         ]
        ],
        "model": "Vielleicht ein bisschen, denn dann geht es den Tieren besser. Aber für Familien mit wenig Geld wäre das schwierig. Wie siehst du das?"
       },
       {
        "who": "Anna",
        "say": "Ich sehe das ähnlich. Danke schön!"
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Planen Sie zusammen mit Ihrer Partnerin: einen Umzug für eine Freundin. Machen Sie Vorschläge, reagieren Sie auf die Vorschläge und einigen Sie sich.",
      "type": "speak",
      "max": 30,
      "time": 5,
      "turns": [
       {
        "who": "Prüfer",
        "say": "Im dritten Teil planen Sie zusammen: einen Umzug für eine Freundin. Sprechen Sie über den Termin, das Auto, die Helfer und das Essen. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unsere Freundin Sara zieht nächsten Monat um. Wollen wir ihr helfen? Ich schlage den ersten Samstag vor."
       },
       {
        "you": "Reagiere auf Annas Vorschlag: stimm zu oder schlag etwas anderes vor – mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|einverstanden|lieber|das finde ich|ja,|nein,|das passt|super|toll|klingt gut",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, natürlich helfe ich. Samstag passt gut, weil dann alle frei haben. Wir sollten aber früh anfangen."
       },
       {
        "who": "Anna",
        "say": "Gut. Wie transportieren wir die Möbel?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|lasst uns|was hältst|vielleicht|sollen wir|hast du lust",
          "Vorschlag"
         ],
         [
          "umzug|transporter|auto|helfer|samstag|kartons|pizza|essen",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten einen Transporter mieten. Ich schlage vor, dass wir ihn schon am Freitagabend abholen."
       },
       {
        "who": "Anna",
        "say": "Und wer organisiert die Helfer und das Essen?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|du kannst|du machst",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich frage ein paar Freunde aus dem Kurs. Kannst du für alle Pizza bestellen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Kannst du noch einmal zusammenfassen, was wir geplant haben?"
       },
       {
        "you": "Fass euren Plan kurz zusammen.",
        "min": 15,
        "key": [
         [
          "also|zusammengefasst|dann|wir",
          "Zusammenfassung"
         ],
         [
          "umzug|transporter|auto|helfer|samstag|kartons|pizza|essen",
          "Plan"
         ]
        ],
        "model": "Also, wir helfen Sara am ersten Samstag. Wir mieten einen Transporter und holen ihn am Freitagabend ab. Ich frage die Helfer, und du bestellst Pizza für alle."
       },
       {
        "who": "Anna",
        "say": "Super, dann machen wir das so!"
       }
      ]
     }
    ]
   }
  ]
 }
];
