/* Modelltests B1 for test.js: three whole exams, each question with its
   answer key (a = index into o / list, -1 = x; rf: true = richtig) and why.
   Test 1 is built from the practice tasks of the B1 page; Tests 2 and 3 are
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      "model": "Lieber Daniel,\nvielen Dank für deine E-Mail! Ich finde es toll, dass du nach Frankfurt ziehen möchtest. Gern gebe ich dir ein paar Tipps.\nDie Wohnungssuche ist hier leider nicht einfach, weil die Mieten sehr hoch sind. Ich empfehle dir, zuerst in einer WG zu wohnen und auf mehreren Portalen zu suchen.\nWenn du in der Innenstadt arbeitest, sind Stadtteile wie Bornheim oder Bockenheim gut. Dort gibt es viele Cafés, und mit der U-Bahn kommt man schnell überall hin.\nIn der Freizeit kann man am Main joggen, ins Museum gehen oder am Wochenende in den Taunus fahren.\nWenn du möchtest, kannst du bei mir wohnen, während du eine Wohnung suchst. Mein Sofa ist frei!\nSchreib mir, wann du kommst.\nViele Grüße\nSuresh"
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      "model": "Sehr geehrte Damen und Herren,\nich bin seit einem Jahr Mitglied in Ihrem Fitnessstudio. Leider bin ich in den letzten Wochen sehr unzufrieden, deshalb schreibe ich Ihnen.\nDer Yogakurs am Dienstagabend ist in diesem Monat schon dreimal ausgefallen, ohne dass wir informiert wurden. Außerdem ist das Wasser in den Duschen seit zwei Wochen kalt.\nIch erwarte, dass Sie die Probleme schnell lösen. Für die ausgefallenen Kurse möchte ich außerdem einen Teil meines Monatsbeitrags zurückbekommen.\nWenn sich bis Ende des Monats nichts ändert, werde ich meinen Vertrag kündigen.\nIch freue mich auf Ihre baldige Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]"
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      "model": "Sehr geehrte Damen und Herren,\nauf Ihrer Internetseite habe ich gelesen, dass Sie Vorbereitungskurse für die telc-Prüfung B1 anbieten. Ich lebe in Frankfurt und möchte die Prüfung im Frühjahr machen, weil ich ein offizielles Zertifikat haben möchte.\nDa ich tagsüber arbeite, interessiere ich mich besonders für einen Abend- oder Wochenendkurs. Könnten Sie mir bitte sagen, wann die nächsten Kurse beginnen?\nAußerdem möchte ich wissen, wie viel der Kurs kostet und ob die Prüfungsgebühr schon im Preis enthalten ist.\nZum Schluss noch eine Frage: Kann ich mich bei Ihnen auch direkt für die Prüfung anmelden?\nVielen Dank im Voraus für Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]"
     }
    ]
   }
  ]
 }
];
