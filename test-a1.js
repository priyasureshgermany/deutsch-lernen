/* Modelltests A1 for test.js: three whole exams, each question with its
   answer key (a = index into o / list, -1 = x; rf: true = richtig) and why.
   Test 1 is built from the practice tasks of the A1 page; Tests 2 and 3 are
   their own texts. tools/check-tests.mjs checks sizes and keys. */
window.TESTS_A1 = [
 {
  "id": "a1-1",
  "title": "Modelltest 1",
  "sub": "Bäckerei, Arztpraxis, Bahnhof · Mitteilung: krank beim Deutschkurs",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Kurze Gespräche",
      "tab": "Teil 1",
      "intro": "Sie hören sechs kurze Gespräche. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Was kostet das Brot?",
        "o": [
         "2,40 €",
         "3,20 €",
         "4,20 €"
        ],
        "a": 1,
        "audio": "Kundin: Guten Tag, ich möchte ein Brot, bitte.\nVerkäufer: Das Vollkornbrot?\nKundin: Ja, genau. Was kostet das?\nVerkäufer: Drei Euro zwanzig, bitte.",
        "why": "„drei Euro zwanzig“"
       },
       {
        "q": "Wann hat der Mann einen Termin?",
        "o": [
         "Montag um 9 Uhr",
         "Dienstag um 10 Uhr",
         "Dienstag um 9 Uhr"
        ],
        "a": 1,
        "audio": "Frau: Praxis Doktor Weber, guten Tag.\nMann: Guten Tag, ich brauche einen Termin.\nFrau: Geht Montag um neun Uhr?\nMann: Montag kann ich leider nicht.\nFrau: Und Dienstag um zehn Uhr?\nMann: Ja, das passt.",
        "why": "Montag kann er nicht."
       },
       {
        "q": "Wo ist die Toilette?",
        "o": [
         "im Erdgeschoss",
         "im ersten Stock",
         "im Keller"
        ],
        "a": 1,
        "audio": "Mann: Entschuldigung, wo ist hier die Toilette?\nFrau: Nicht hier unten. Gehen Sie die Treppe hoch, in den ersten Stock, und dann links.",
        "why": ""
       },
       {
        "q": "Was trinkt die Frau?",
        "o": [
         "Kaffee",
         "Tee",
         "Wasser"
        ],
        "a": 1,
        "audio": "Kellner: Was möchten Sie trinken?\nFrau: Einen Kaffee, bitte. Ach nein, heute keinen Kaffee. Einen Tee, bitte.\nKellner: Gern.",
        "why": "sie ändert ihre Bestellung."
       },
       {
        "q": "Wie fährt der Mann zur Arbeit?",
        "o": [
         "mit dem Auto",
         "mit dem Bus",
         "mit dem Fahrrad"
        ],
        "a": 2,
        "audio": "Frau: Fährst du mit dem Auto zur Arbeit?\nMann: Nein, das Auto hat meine Frau. Und der Bus ist zu langsam. Ich fahre mit dem Fahrrad.",
        "why": ""
       },
       {
        "q": "Welche Telefonnummer hat die Frau?",
        "o": [
         "0170 45 23 81",
         "0170 45 32 81",
         "0171 45 23 18"
        ],
        "a": 0,
        "audio": "Mann: Wie ist Ihre Telefonnummer?\nFrau: Null, eins, sieben, null – fünfundvierzig – dreiundzwanzig – einundachtzig.\nMann: Also null eins sieben null, fünfundvierzig, dreiundzwanzig, einundachtzig?\nFrau: Richtig.",
        "why": "Achtung: „dreiundzwanzig“ = 23 (drei + zwanzig)."
       }
      ]
     },
     {
      "t": "Teil 2 – Durchsagen",
      "tab": "Teil 2",
      "intro": "Sie hören vier Ansagen. Sie hören jeden Text einmal. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "plays": 1,
      "items": [
       {
        "q": "Der Zug nach München fährt von Gleis 7 ab.",
        "a": true,
        "audio": "Achtung am Gleis 5: Der ICE nach München, Abfahrt 14 Uhr 32, fährt heute von Gleis 7. Bitte beachten Sie die Gleisänderung.",
        "why": "heute Gleis 7."
       },
       {
        "q": "Der Supermarkt schließt heute um 20 Uhr.",
        "a": false,
        "audio": "Liebe Kundinnen und Kunden, heute ist Samstag. Unser Markt schließt heute schon um 18 Uhr. Bitte gehen Sie jetzt zur Kasse.",
        "why": "er schließt um 18 Uhr."
       },
       {
        "q": "Die Fluggäste nach Wien sollen zum Ausgang B12 gehen.",
        "a": true,
        "audio": "Letzter Aufruf für den Flug nach Wien. Alle Passagiere kommen bitte sofort zum Ausgang B12.",
        "why": ""
       },
       {
        "q": "Bananen sind heute billig.",
        "a": true,
        "audio": "Heute im Angebot: ein Kilo Äpfel nur 1 Euro 49. Und Bananen: nur 99 Cent das Kilo. Nur heute!",
        "why": "nur 99 Cent das Kilo."
       }
      ]
     },
     {
      "t": "Teil 3 – Telefonansagen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf Ansagen am Telefon. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Wann soll Herr Keller kommen?",
        "o": [
         "heute um 15 Uhr",
         "morgen ab 15 Uhr",
         "morgen um 16 Uhr"
        ],
        "a": 1,
        "audio": "Guten Tag, Herr Keller, hier ist das Autohaus Braun. Ihr Auto ist heute leider noch nicht fertig. Sie können es morgen abholen, ab 15 Uhr. Auf Wiederhören.",
        "why": ""
       },
       {
        "q": "Was soll Anna mitbringen?",
        "o": [
         "Getränke",
         "einen Salat",
         "Kuchen"
        ],
        "a": 1,
        "audio": "Hallo Anna, hier ist Lisa. Am Samstag ist meine Party. Getränke und Kuchen habe ich schon. Kannst du bitte einen Salat mitbringen? Danke, bis Samstag!",
        "why": ""
       },
       {
        "q": "Wo treffen sie sich?",
        "o": [
         "am Bahnhof",
         "vor dem Kino",
         "im Café"
        ],
        "a": 2,
        "audio": "Hi, hier ist Tom. Das Kino ist heute leider voll. Treffen wir uns um acht im Café Luna? Das ist neben dem Bahnhof. Ruf mich zurück!",
        "why": "der Bahnhof ist nur die Richtung."
       },
       {
        "q": "Wann ist die Praxis geöffnet?",
        "o": [
         "Montag bis Freitag, 8 bis 12 Uhr",
         "nur nachmittags",
         "auch am Samstag"
        ],
        "a": 0,
        "audio": "Sie sind verbunden mit der Praxis Doktor Schulz. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 12 Uhr. Am Wochenende ist die Praxis geschlossen.",
        "why": ""
       },
       {
        "q": "Was ist anders?",
        "o": [
         "Der Kurs fällt aus.",
         "Der Kurs beginnt später.",
         "Der Kurs ist in einem anderen Raum."
        ],
        "a": 2,
        "audio": "Hallo, hier ist die Sprachschule Lingua. Ihr Deutschkurs am Mittwoch ist heute nicht in Raum 12, sondern in Raum 20 im zweiten Stock. Der Kurs beginnt wie immer um 18 Uhr.",
        "why": "Raum 20 statt 12."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Kurze Mitteilungen",
      "tab": "Teil 1",
      "intro": "Lesen Sie die zwei Texte. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "text": "Text 1: Liebe Maria, ich bin jetzt in Hamburg. Die Stadt ist sehr schön, aber das Wetter ist schlecht. Es regnet jeden Tag. Mein Hotel ist klein, aber gut und nicht teuer. Morgen fahre ich mit dem Schiff auf der Elbe. Am Freitag komme ich zurück. Viele Grüße, Jonas\nText 2: Hallo Herr Nowak, der Termin mit Frau Berger am Donnerstag ist leider nicht möglich. Frau Berger ist krank. Können Sie am Montag um 11 Uhr kommen? Bitte rufen Sie mich an: 069 23 45 67. Mit freundlichen Grüßen, Sabine Roth",
      "items": [
       {
        "q": "Text 1: In Hamburg ist das Wetter gut.",
        "a": false,
        "why": "es regnet jeden Tag."
       },
       {
        "q": "Text 1: Das Hotel ist teuer.",
        "a": false,
        "why": "es ist nicht teuer."
       },
       {
        "q": "Text 1: Jonas fährt morgen mit dem Schiff.",
        "a": true,
        "why": ""
       },
       {
        "q": "Text 2: Herr Nowak hat am Donnerstag einen Termin mit Frau Berger.",
        "a": false,
        "why": "der Termin ist nicht möglich."
       },
       {
        "q": "Text 2: Herr Nowak soll Frau Roth anrufen.",
        "a": true,
        "why": "„Bitte rufen Sie mich an.“"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Aufgaben und die Anzeigen. Welche Anzeige passt: a oder b?",
      "type": "mc",
      "per": 1,
      "items": [
       {
        "q": "Sie möchten abends Deutsch lernen.",
        "o": [
         "Sprachschule Europa: Deutschkurse A1 bis B2, Montag bis Freitag, 9 bis 12 Uhr.",
         "Volkshochschule: Deutsch für Berufstätige, dienstags und donnerstags, 18:30 bis 21 Uhr."
        ],
        "a": 1,
        "why": "der Kurs ist am Abend."
       },
       {
        "q": "Sie brauchen ein billiges, gebrauchtes Fahrrad.",
        "o": [
         "Verkaufe Damenrad, drei Jahre alt, sehr gut, nur 80 Euro.",
         "Fahrradladen Speiche: neue E-Bikes ab 1899 Euro."
        ],
        "a": 0,
        "why": "gebraucht und billig."
       },
       {
        "q": "Sie möchten am Sonntagabend essen gehen.",
        "o": [
         "Restaurant Da Mario: Montag bis Samstag 12 bis 23 Uhr, Sonntag Ruhetag.",
         "Gasthaus Zum Löwen: täglich 11 bis 22 Uhr, auch sonntags."
        ],
        "a": 1,
        "why": "auch sonntags geöffnet."
       },
       {
        "q": "Sie suchen eine Zwei-Zimmer-Wohnung in Frankfurt.",
        "o": [
         "Frankfurt-Bornheim: 2-Zimmer-Wohnung, 55 m², Balkon, ab 1. November frei.",
         "Offenbach: 3-Zimmer-Wohnung, 80 m², Garten."
        ],
        "a": 0,
        "why": "zwei Zimmer, in Frankfurt."
       },
       {
        "q": "Sie möchten morgens vor der Arbeit schwimmen.",
        "o": [
         "Hallenbad Mitte: Montag bis Freitag 6:30 bis 22 Uhr.",
         "Freibad am See: nur im Sommer, täglich 10 bis 19 Uhr."
        ],
        "a": 0,
        "why": "öffnet schon um 6:30 Uhr."
       }
      ]
     },
     {
      "t": "Teil 3 – Schilder und Aushänge",
      "tab": "Teil 3",
      "intro": "Lesen Sie die Schilder. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "items": [
       {
        "text": "Praxis Dr. Klein: Wir sind vom 1. bis 14. August im Urlaub. Vertretung: Dr. Lang, Goethestraße 5.",
        "q": "Vom 1. bis 14. August können Sie zu Dr. Lang gehen.",
        "a": true,
        "why": "Dr. Lang ist die Vertretung."
       },
       {
        "text": "Bäckerei Schmidt: Heute wegen Krankheit geschlossen. Morgen sind wir wieder für Sie da.",
        "q": "Die Bäckerei ist heute geöffnet.",
        "a": false,
        "why": "heute geschlossen."
       },
       {
        "text": "Stadtmuseum – Eintritt: Erwachsene 8 Euro, Kinder unter 12 Jahren frei.",
        "q": "Ein zehnjähriges Kind muss nicht bezahlen.",
        "a": true,
        "why": "unter 12 Jahren ist es frei."
       },
       {
        "text": "Fahrkarten gibt es am Automaten. Der Schalter ist heute geschlossen.",
        "q": "Sie können heute am Schalter eine Fahrkarte kaufen.",
        "a": false,
        "why": "nur am Automaten."
       },
       {
        "text": "Deutschkurs: Raum 204, 2. Stock. Der Aufzug ist kaputt. Bitte benutzen Sie die Treppe.",
        "q": "Sie müssen zu Fuß in den zweiten Stock gehen.",
        "a": true,
        "why": "der Aufzug ist kaputt."
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Formular ausfüllen",
      "tab": "Teil 1",
      "intro": "Ihre Freundin möchte einen Deutschkurs machen. Sie helfen ihr beim Anmeldeformular. Lesen Sie den Text und ergänzen Sie fünf Informationen.",
      "type": "form",
      "per": 1,
      "text": "Aylin Demir kommt aus der Türkei. Sie ist 28 Jahre alt und wohnt seit drei Monaten in Frankfurt, Berger Straße 12. Sie ist verheiratet und hat einen Sohn. Aylin arbeitet vormittags in einem Café. Deshalb möchte sie abends Deutsch lernen. Sie bezahlt den Kurs bar.",
      "items": [
       {
        "q": "Staatsangehörigkeit",
        "a": [
         "türkisch",
         "Türkei",
         "Türkin",
         "türkische"
        ],
        "why": "„kommt aus der Türkei“ → türkisch"
       },
       {
        "q": "Familienstand",
        "a": [
         "verheiratet"
        ],
        "why": "„Sie ist verheiratet“"
       },
       {
        "q": "Anzahl der Kinder",
        "a": [
         "1",
         "ein",
         "eins",
         "ein Kind",
         "1 Kind",
         "einen Sohn",
         "ein Sohn",
         "1 Sohn"
        ],
        "why": "„hat einen Sohn“ → 1"
       },
       {
        "q": "Kurszeit",
        "o": [
         "vormittags",
         "abends"
        ],
        "a": 1,
        "why": "Sie arbeitet vormittags, deshalb abends."
       },
       {
        "q": "Zahlungsart",
        "o": [
         "Überweisung",
         "bar"
        ],
        "a": 1,
        "why": "„Sie bezahlt den Kurs bar.“"
       }
      ]
     },
     {
      "t": "Teil 2 – Kurze Mitteilung",
      "tab": "Teil 2",
      "intro": "Schreiben Sie etwa 30 Wörter. Schreiben Sie zu allen drei Punkten. Vergessen Sie Anrede und Gruß nicht.",
      "type": "write",
      "crit": "a1",
      "words": 30,
      "task": "Sie sind krank und können nicht zum Deutschkurs kommen. Schreiben Sie an Ihre Lehrerin, Frau Klein:",
      "points": [
       "Warum schreiben Sie?",
       "Wann kommen Sie wieder?",
       "Bitte: Hausaufgaben"
      ],
      "model": "Liebe Frau Klein, ich bin leider krank und kann heute nicht zum Kurs kommen. Ich komme am Montag wieder. Können Sie mir bitte die Hausaufgaben schicken? Vielen Dank! Viele Grüße, Suresh"
     }
    ]
   }
  ]
 },
 {
  "id": "a1-2",
  "title": "Modelltest 2",
  "sub": "Einkaufen, Hotel, Ausflug · Einladung zum Geburtstag",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Kurze Gespräche",
      "tab": "Teil 1",
      "intro": "Sie hören sechs kurze Gespräche. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Wie viel kostet das T-Shirt, das die Frau kauft?",
        "o": [
         "9,90 €",
         "19,90 €",
         "29,90 €"
        ],
        "a": 1,
        "why": "„Dann nehme ich das blaue.“ – das blaue kostet 19,90 €.",
        "audio": "Frau: Entschuldigung, was kostet dieses T-Shirt?\nVerkäufer: Das blaue? Neunzehn Euro neunzig.\nFrau: Und das weiße?\nVerkäufer: Das ist im Angebot, nur neun Euro neunzig.\nFrau: Hm, das weiße ist zu klein. Dann nehme ich das blaue."
       },
       {
        "q": "Wann kommt der nächste Bus?",
        "o": [
         "um 8:10 Uhr",
         "um 8:20 Uhr",
         "um 8:30 Uhr"
        ],
        "a": 1,
        "why": "Der Bus um 8:10 Uhr ist schon weg.",
        "audio": "Mann: Entschuldigung, wann fährt der nächste Bus zum Bahnhof?\nFrau: Der Bus um acht Uhr zehn ist schon weg. Der nächste kommt um acht Uhr zwanzig.\nMann: Danke schön."
       },
       {
        "q": "Wo wohnt Petra jetzt?",
        "o": [
         "in der Schillerstraße",
         "in der Goethestraße",
         "in der Mozartstraße"
        ],
        "a": 0,
        "why": "Seit Mai wohnt sie in der Schillerstraße.",
        "audio": "Mann: Petra, wohnst du noch in der Goethestraße?\nFrau: Nein, seit Mai wohne ich in der Schillerstraße. Die Wohnung ist größer.\nMann: Ah, schön!"
       },
       {
        "q": "Was kauft der Mann?",
        "o": [
         "Äpfel",
         "Bananen",
         "Orangen"
        ],
        "a": 1,
        "why": "Die Äpfel sind aus – er nimmt Bananen.",
        "audio": "Verkäuferin: Bitte schön?\nMann: Ich hätte gern ein Kilo Äpfel.\nVerkäuferin: Die Äpfel sind leider aus. Wir haben noch Orangen und Bananen.\nMann: Dann nehme ich Bananen."
       },
       {
        "q": "Wie spät ist es?",
        "o": [
         "Viertel nach drei",
         "halb vier",
         "Viertel vor vier"
        ],
        "a": 1,
        "why": "„Es ist halb vier.“",
        "audio": "Frau: Entschuldigung, wie spät ist es?\nMann: Es ist halb vier.\nFrau: Oh, schon so spät! Danke."
       },
       {
        "q": "Welche Zimmernummer hat die Frau?",
        "o": [
         "214",
         "241",
         "412"
        ],
        "a": 1,
        "why": "„zweihunderteinundvierzig“ = 241 (zweihundert + eins + vierzig).",
        "audio": "Rezeption: Guten Abend. Ihr Name, bitte?\nFrau: Schneider. Ich habe ein Einzelzimmer reserviert.\nRezeption: Ja, Frau Schneider. Sie haben Zimmer zweihunderteinundvierzig im zweiten Stock."
       }
      ]
     },
     {
      "t": "Teil 2 – Durchsagen",
      "tab": "Teil 2",
      "intro": "Sie hören vier Ansagen. Sie hören jeden Text einmal. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "plays": 1,
      "items": [
       {
        "q": "Der Zug nach Köln hat zehn Minuten Verspätung.",
        "a": true,
        "why": "„circa zehn Minuten Verspätung“",
        "audio": "Information zu Gleis 3: Der Regionalexpress nach Köln, Abfahrt 9 Uhr 15, hat heute circa zehn Minuten Verspätung. Wir bitten um Entschuldigung."
       },
       {
        "q": "Das Angebot ist im ersten Stock.",
        "a": false,
        "why": "Das Angebot ist im Erdgeschoss, neben dem Eingang.",
        "audio": "Liebe Kunden, heute im Erdgeschoss: frisches Brot und Brötchen zum halben Preis. Besuchen Sie unsere Bäckerei gleich neben dem Eingang."
       },
       {
        "q": "Die Passagiere nach Berlin sollen zu Gate C 3 gehen.",
        "a": true,
        "audio": "Passagiere des Fluges LH 204 nach Berlin: Bitte gehen Sie zu Gate C 3. Das Boarding beginnt jetzt."
       },
       {
        "q": "Das Schwimmbad ist heute bis 22 Uhr geöffnet.",
        "a": false,
        "why": "Heute schließt es schon um 19 Uhr.",
        "audio": "Liebe Badegäste, unser Schwimmbad schließt heute wegen einer Veranstaltung schon um 19 Uhr. Bitte verlassen Sie das Becken um 18 Uhr 30."
       }
      ]
     },
     {
      "t": "Teil 3 – Telefonansagen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf Ansagen am Telefon. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Wann ist der neue Termin?",
        "o": [
         "am Mittwoch um 9 Uhr",
         "am Donnerstag um 9 Uhr",
         "am Donnerstag um 10 Uhr"
        ],
        "a": 2,
        "why": "Mittwoch geht nicht – neu: Donnerstag um zehn.",
        "audio": "Guten Tag, Frau Yilmaz, hier ist die Zahnarztpraxis Doktor Fischer. Ihr Termin am Mittwoch um neun Uhr geht leider nicht. Können Sie am Donnerstag um zehn Uhr kommen? Bitte rufen Sie uns zurück."
       },
       {
        "q": "Was soll Jan kaufen?",
        "o": [
         "Milch",
         "Eier",
         "Brot"
        ],
        "a": 2,
        "why": "Milch und Eier sind noch da.",
        "audio": "Hallo Jan, hier ist Mama. Kannst du nach der Schule bitte Brot kaufen? Milch und Eier haben wir noch. Danke, bis später!"
       },
       {
        "q": "Wohin fahren sie am Sonntag?",
        "o": [
         "an den See",
         "in die Berge",
         "ins Kino"
        ],
        "a": 0,
        "why": "„nicht in die Berge, sondern an den See“",
        "audio": "Hallo Sara, hier ist Mehmet. Am Sonntag ist das Wetter schön. Wir fahren nicht in die Berge, sondern an den See. Kommst du mit? Wir fahren um zehn Uhr los."
       },
       {
        "q": "Was repariert der Techniker?",
        "o": [
         "die Waschmaschine",
         "den Kühlschrank",
         "die Heizung"
        ],
        "a": 1,
        "audio": "Guten Tag, Herr Lange, hier ist die Hausverwaltung. Morgen um elf Uhr kommt der Techniker und repariert Ihren Kühlschrank. Bitte seien Sie zu Hause."
       },
       {
        "q": "Wann ist das Geschäft geschlossen?",
        "o": [
         "am Montag",
         "am Samstag",
         "am Sonntag und am Montag"
        ],
        "a": 2,
        "why": "Geöffnet ist Dienstag bis Samstag.",
        "audio": "Hier ist das Modegeschäft Lisa. Wir haben Dienstag bis Samstag von 10 bis 19 Uhr geöffnet. Am Sonntag und am Montag ist das Geschäft geschlossen."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Kurze Mitteilungen",
      "tab": "Teil 1",
      "intro": "Lesen Sie die zwei Texte. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "text": "Text 1: Hallo Clara, wie geht es dir? Ich habe eine neue Arbeit in einem Hotel in München. Ich arbeite an der Rezeption, meistens am Nachmittag. Meine Kollegen sind sehr nett. Am Wochenende habe ich frei. Besuchst du mich im Juli? Liebe Grüße, Ben\nText 2: Liebe Eltern der Klasse 2b, am Freitag machen wir einen Ausflug in den Zoo. Wir treffen uns um 8 Uhr vor der Schule. Die Kinder brauchen etwas zu essen und zu trinken. Wir sind um 15 Uhr zurück. Viele Grüße, Frau Becker",
      "items": [
       {
        "q": "Text 1: Ben arbeitet in einem Restaurant.",
        "a": false,
        "why": "Er arbeitet in einem Hotel."
       },
       {
        "q": "Text 1: Ben arbeitet meistens am Nachmittag.",
        "a": true
       },
       {
        "q": "Text 1: Ben muss am Wochenende arbeiten.",
        "a": false,
        "why": "„Am Wochenende habe ich frei.“"
       },
       {
        "q": "Text 2: Die Klasse fährt am Freitag in den Zoo.",
        "a": true
       },
       {
        "q": "Text 2: Die Kinder bekommen im Zoo ein Mittagessen.",
        "a": false,
        "why": "Sie bringen selbst etwas zu essen und zu trinken mit."
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Aufgaben und die Anzeigen. Welche Anzeige passt: a oder b?",
      "type": "mc",
      "per": 1,
      "items": [
       {
        "q": "Sie möchten am Samstag zu einem Arzt.",
        "o": [
         "Praxis Dr. Meier: Montag bis Freitag 8 bis 18 Uhr.",
         "Ärztlicher Notdienst: Samstag und Sonntag 9 bis 21 Uhr, Telefon 116 117."
        ],
        "a": 1,
        "why": "Nur b) hat am Samstag geöffnet."
       },
       {
        "q": "Sie suchen einen Job am Wochenende.",
        "o": [
         "Café Sonne sucht Kellner/in für Samstag und Sonntag.",
         "Büro sucht Sekretärin, Montag bis Freitag, 40 Stunden."
        ],
        "a": 0
       },
       {
        "q": "Sie möchten mit Ihren Kindern Fußball spielen.",
        "o": [
         "Sportverein TSV: Fußball für Kinder von 6 bis 12 Jahren, mittwochs 16 Uhr.",
         "Fitnessstudio Power: Kurse nur für Erwachsene ab 18 Jahren."
        ],
        "a": 0
       },
       {
        "q": "Sie möchten billig nach Hamburg fahren.",
        "o": [
         "Fernbus nach Hamburg: ab 12,99 Euro.",
         "ICE nach Hamburg: 1. Klasse ab 89 Euro."
        ],
        "a": 0,
        "why": "Der Fernbus ist billiger."
       },
       {
        "q": "Sie brauchen ein Sofa, aber Sie haben wenig Geld.",
        "o": [
         "Möbelhaus König: neue Sofas, große Auswahl, ab 699 Euro.",
         "Verschenke altes Sofa, braun, Abholung in Bockenheim."
        ],
        "a": 1,
        "why": "„verschenken“ = kostenlos geben."
       }
      ]
     },
     {
      "t": "Teil 3 – Schilder und Aushänge",
      "tab": "Teil 3",
      "intro": "Lesen Sie die Schilder. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "items": [
       {
        "q": "Heute Nacht können Sie im Bahnhof Medikamente kaufen.",
        "a": true,
        "why": "Die Apotheke im Bahnhof hat heute 0–24 Uhr Notdienst.",
        "text": "Apotheke am Markt – Notdienst heute: Apotheke im Bahnhof, 0–24 Uhr."
       },
       {
        "q": "Die Bibliothek ist ab März auch montags geöffnet.",
        "a": false,
        "why": "Montag geschlossen.",
        "text": "Bibliothek: Ab 1. März neue Öffnungszeiten: Dienstag bis Samstag 10–18 Uhr. Montag geschlossen."
       },
       {
        "q": "Sie können Ihr Fahrrad vor dem Haus parken.",
        "a": false,
        "why": "Der Fahrradparkplatz ist hinter dem Haus.",
        "text": "Bitte hier keine Fahrräder abstellen! Fahrradparkplatz hinter dem Haus."
       },
       {
        "q": "Für den Kochkurs müssen Sie sich anmelden.",
        "a": true,
        "why": "Anmeldung bis 20. Mai im Büro.",
        "text": "Kurs „Kochen für Anfänger“: Anmeldung bis 20. Mai im Büro, Zimmer 3."
       },
       {
        "q": "Das Mittagsmenü kostet mit Getränk 9,50 Euro.",
        "a": true,
        "why": "Suppe, Hauptgericht und Getränk – 9,50 Euro.",
        "text": "Restaurant Adria – Mittagsmenü von 12 bis 14 Uhr: Suppe, Hauptgericht und Getränk – 9,50 Euro."
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Formular ausfüllen",
      "tab": "Teil 1",
      "intro": "Ihr Freund Lukas möchte ein Hotelzimmer buchen. Sie helfen ihm beim Formular. Lesen Sie den Text und ergänzen Sie fünf Informationen.",
      "type": "form",
      "per": 1,
      "text": "Lukas Weber ist 34 Jahre alt und wohnt in Köln, Lindenstraße 8. Er ist Lehrer von Beruf. Lukas möchte ein Zimmer im Hotel Alpenblick in Garmisch buchen. Er kommt am 5. August mit seiner Frau. Sie bleiben drei Nächte. Lukas bezahlt mit Kreditkarte.",
      "items": [
       {
        "q": "Wohnort",
        "a": [
         "Köln",
         "Koeln"
        ],
        "why": "„wohnt in Köln“"
       },
       {
        "q": "Beruf",
        "a": [
         "Lehrer"
        ],
        "why": "„Er ist Lehrer von Beruf.“"
       },
       {
        "q": "Anzahl der Personen",
        "a": [
         "2",
         "zwei",
         "2 Personen",
         "zwei Personen"
        ],
        "why": "Lukas und seine Frau = 2"
       },
       {
        "q": "Anzahl der Nächte",
        "a": [
         "3",
         "drei",
         "3 Nächte",
         "drei Nächte"
        ],
        "why": "„Sie bleiben drei Nächte.“"
       },
       {
        "q": "Zahlungsart",
        "o": [
         "bar",
         "Kreditkarte"
        ],
        "a": 1,
        "why": "„Lukas bezahlt mit Kreditkarte.“"
       }
      ]
     },
     {
      "t": "Teil 2 – Kurze Mitteilung",
      "intro": "Schreiben Sie etwa 30 Wörter. Schreiben Sie zu allen drei Punkten. Vergessen Sie Anrede und Gruß nicht.",
      "type": "write",
      "crit": "a1",
      "words": 30,
      "task": "Laden Sie Ihren Freund Markus zu Ihrem Geburtstag ein:",
      "points": [
       "Wann?",
       "Wo?",
       "Was soll er mitbringen?"
      ],
      "model": "Lieber Markus, am Samstag habe ich Geburtstag und mache eine kleine Party. Sie beginnt um 19 Uhr bei mir zu Hause. Kannst du bitte Getränke mitbringen? Ich freue mich auf dich! Viele Grüße, Suresh",
      "tab": "Teil 2"
     }
    ]
   }
  ]
 },
 {
  "id": "a1-3",
  "title": "Modelltest 3",
  "sub": "Kino, Post, Ämter · Nachricht an den Vermieter",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Kurze Gespräche",
      "tab": "Teil 1",
      "intro": "Sie hören sechs kurze Gespräche. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Wann sehen die Frau und ihr Mann den Film?",
        "o": [
         "um 19 Uhr",
         "um 19:30 Uhr",
         "um 20 Uhr"
        ],
        "a": 2,
        "why": "Um 19 Uhr ist ausverkauft.",
        "audio": "Frau: Zwei Karten für „Sommer in Rom“, bitte.\nMann: Für die Vorstellung um neunzehn Uhr? Die ist leider ausverkauft.\nFrau: Und später?\nMann: Um zwanzig Uhr gibt es noch Plätze.\nFrau: Gut, dann um zwanzig Uhr."
       },
       {
        "q": "Was bestellt der Mann?",
        "o": [
         "eine Pizza",
         "einen Salat",
         "eine Suppe"
        ],
        "a": 2,
        "why": "Er ändert die Bestellung: die Tomatensuppe.",
        "audio": "Kellnerin: Was möchten Sie essen?\nMann: Ich nehme eine Pizza. Nein, warten Sie – die Tomatensuppe, bitte. Ich habe nicht so viel Hunger.\nKellnerin: Gern."
       },
       {
        "q": "In welchem Stock ist die Wohnung?",
        "o": [
         "im Erdgeschoss",
         "im dritten Stock",
         "im vierten Stock"
        ],
        "a": 1,
        "audio": "Frau: Ist die Wohnung im Erdgeschoss?\nMann: Nein, im dritten Stock. Aber es gibt einen Aufzug.\nFrau: Ah, sehr gut."
       },
       {
        "q": "Wie ist das Wetter morgen?",
        "o": [
         "sonnig",
         "es regnet",
         "es schneit"
        ],
        "a": 1,
        "why": "„es regnet den ganzen Tag“",
        "audio": "Mann: Wollen wir morgen grillen?\nFrau: Morgen? Im Radio haben sie gesagt, es regnet den ganzen Tag.\nMann: Schade. Dann grillen wir am Sonntag."
       },
       {
        "q": "Wie viel kostet die Fahrkarte?",
        "o": [
         "2,80 €",
         "3,80 €",
         "8,30 €"
        ],
        "a": 1,
        "why": "„drei Euro achtzig“",
        "audio": "Mann: Eine Fahrkarte zum Flughafen, bitte.\nFrau: Einfach? Das macht drei Euro achtzig.\nMann: Hier, bitte."
       },
       {
        "q": "Wo ist die Post?",
        "o": [
         "neben der Bank",
         "gegenüber vom Bahnhof",
         "hinter dem Supermarkt"
        ],
        "a": 1,
        "audio": "Frau: Entschuldigung, gibt es hier eine Post?\nMann: Ja, gehen Sie geradeaus bis zum Bahnhof. Die Post ist gegenüber vom Bahnhof, neben einem Café.\nFrau: Vielen Dank."
       }
      ]
     },
     {
      "t": "Teil 2 – Durchsagen",
      "tab": "Teil 2",
      "intro": "Sie hören vier Ansagen. Sie hören jeden Text einmal. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "plays": 1,
      "items": [
       {
        "q": "Die U-Bahn-Linie 4 fährt heute nicht.",
        "a": true,
        "why": "wegen Bauarbeiten",
        "audio": "Achtung, eine Information für unsere Fahrgäste: Wegen Bauarbeiten fährt die U-Bahn-Linie 4 heute nicht. Bitte benutzen Sie die Busse der Linie 34."
       },
       {
        "q": "Im Kaufhaus sind heute Schuhe billiger.",
        "a": false,
        "why": "Jacken und Mäntel sind billiger, nicht Schuhe.",
        "audio": "Liebe Kunden, heute im zweiten Stock: alle Jacken und Mäntel 20 Prozent günstiger. Nur heute!"
       },
       {
        "q": "Der kleine Paul wartet an der Kasse.",
        "a": false,
        "why": "Er wartet an der Information im Erdgeschoss.",
        "audio": "Der kleine Paul sucht seine Mutter. Paul wartet an der Information im Erdgeschoss."
       },
       {
        "q": "Der Zug nach Hamburg fährt von Gleis 9.",
        "a": true,
        "audio": "An Gleis 9: Der ICE nach Hamburg, Abfahrt 11 Uhr 50. Bitte einsteigen und Vorsicht an der Bahnsteigkante."
       }
      ]
     },
     {
      "t": "Teil 3 – Telefonansagen",
      "tab": "Teil 3",
      "intro": "Sie hören fünf Ansagen am Telefon. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "items": [
       {
        "q": "Wann soll Frau Koch anrufen?",
        "o": [
         "heute bis 17 Uhr",
         "morgen früh",
         "morgen ab 17 Uhr"
        ],
        "a": 0,
        "why": "„heute noch bis 17 Uhr“",
        "audio": "Guten Tag, Frau Koch, hier ist das Bürgeramt. Ihr Personalausweis ist fertig. Bitte rufen Sie uns heute noch bis 17 Uhr an, dann bekommen Sie einen Termin zum Abholen."
       },
       {
        "q": "Was hat Tim vergessen?",
        "o": [
         "sein Handy",
         "seine Jacke",
         "seinen Schlüssel"
        ],
        "a": 1,
        "audio": "Hallo Tim, hier ist Julia. Du hast gestern bei uns deine Jacke vergessen. Ich bringe sie morgen zur Arbeit mit. Tschüss!"
       },
       {
        "q": "Wann beginnt der Kurs?",
        "o": [
         "am 3. September",
         "am 13. September",
         "am 30. September"
        ],
        "a": 1,
        "why": "„nicht am dritten, sondern am dreizehnten September“",
        "audio": "Hier ist die Volkshochschule. Der Deutschkurs A2 beginnt nicht am dritten September, sondern am dreizehnten September. Die Uhrzeit bleibt gleich."
       },
       {
        "q": "Wo treffen sich Anna und Leo?",
        "o": [
         "vor dem Museum",
         "im Café",
         "an der Haltestelle"
        ],
        "a": 2,
        "why": "Das Museum ist geschlossen – Treffpunkt: die Haltestelle am Park.",
        "audio": "Hi Anna, hier ist Leo. Das Museum ist heute leider geschlossen. Wollen wir in den Park gehen? Ich warte um drei an der Haltestelle am Park. Bis dann!"
       },
       {
        "q": "Was soll Herr Ito mitbringen?",
        "o": [
         "ein Foto",
         "seinen Pass",
         "den Mietvertrag"
        ],
        "a": 0,
        "why": "Pass und Mietvertrag hat die Behörde schon.",
        "audio": "Guten Morgen, Herr Ito, hier ist die Ausländerbehörde. Für Ihren Termin am Freitag brauchen wir noch ein aktuelles Foto. Ihren Pass und den Mietvertrag haben wir schon. Danke."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Kurze Mitteilungen",
      "tab": "Teil 1",
      "intro": "Lesen Sie die zwei Texte. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "text": "Text 1: Hallo Tom, am Samstag mache ich eine Fahrradtour an den Rhein. Kommst du mit? Wir fahren um 9 Uhr am Bahnhof los. Die Tour ist 40 Kilometer lang. Am Abend essen wir zusammen in einem Restaurant. Bitte schreib mir bis Donnerstag. Grüße, Nina\nText 2: Sehr geehrte Frau Schulz, Ihr Paket konnten wir heute nicht abgeben. Sie waren nicht zu Hause. Sie können es ab morgen in der Post in der Hauptstraße abholen. Bitte bringen Sie Ihren Ausweis mit. Ihr Paketdienst",
      "items": [
       {
        "q": "Text 1: Die Fahrradtour ist am Samstag.",
        "a": true
       },
       {
        "q": "Text 1: Nina und ihre Freunde treffen sich am Rhein.",
        "a": false,
        "why": "Sie fahren am Bahnhof los."
       },
       {
        "q": "Text 1: Tom soll bis Donnerstag antworten.",
        "a": true
       },
       {
        "q": "Text 2: Frau Schulz hat ihr Paket schon bekommen.",
        "a": false,
        "why": "Sie war nicht zu Hause."
       },
       {
        "q": "Text 2: Frau Schulz braucht für das Paket ihren Ausweis.",
        "a": true
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Aufgaben und die Anzeigen. Welche Anzeige passt: a oder b?",
      "type": "mc",
      "per": 1,
      "items": [
       {
        "q": "Sie möchten am Samstag einen Englischkurs machen.",
        "o": [
         "Sprachschule Lingua: Englisch für Anfänger, samstags 10 bis 13 Uhr.",
         "Volkshochschule: Englisch, montags und mittwochs 18 Uhr."
        ],
        "a": 0
       },
       {
        "q": "Sie möchten Ihr altes Handy verkaufen.",
        "o": [
         "Handyshop Plus: neue Smartphones günstig!",
         "Wir kaufen gebrauchte Handys – sofort Geld! Handy-Ankauf, Bahnhofstraße."
        ],
        "a": 1,
        "why": "„Ankauf“ = sie kaufen Ihr Handy."
       },
       {
        "q": "Sie suchen eine Wohnung mit Garten.",
        "o": [
         "Erdgeschosswohnung, 3 Zimmer, mit kleinem Garten, 950 Euro warm.",
         "Dachwohnung, 2 Zimmer, mit großem Balkon, 780 Euro warm."
        ],
        "a": 0
       },
       {
        "q": "Sie möchten am Montag ins Museum gehen.",
        "o": [
         "Kunstmuseum: Dienstag bis Sonntag 10 bis 18 Uhr.",
         "Naturkundemuseum: täglich 9 bis 17 Uhr geöffnet."
        ],
        "a": 1,
        "why": "„täglich“ = jeden Tag, also auch montags."
       },
       {
        "q": "Ihr Kind ist 4 Jahre alt und braucht einen Platz im Kindergarten.",
        "o": [
         "Kita Sonnenschein: freie Plätze für Kinder von 1 bis 6 Jahren.",
         "Schule am Park: Anmeldung für die 1. Klasse."
        ],
        "a": 0
       }
      ]
     },
     {
      "t": "Teil 3 – Schilder und Aushänge",
      "tab": "Teil 3",
      "intro": "Lesen Sie die Schilder. Kreuzen Sie an: Richtig oder Falsch.",
      "type": "rf",
      "per": 1,
      "items": [
       {
        "q": "Am Dienstagnachmittag gibt es wieder Wasser.",
        "a": true,
        "why": "Kein Wasser nur von 8 bis 12 Uhr.",
        "text": "Liebe Mieter, am Dienstag von 8 bis 12 Uhr gibt es kein Wasser. Ihre Hausverwaltung"
       },
       {
        "q": "Sie gehen zuerst ins Wartezimmer.",
        "a": false,
        "why": "Zuerst zur Anmeldung.",
        "text": "Zahnarztpraxis: Bitte melden Sie sich an der Anmeldung. Nicht direkt ins Wartezimmer gehen!"
       },
       {
        "q": "Auf dem Balkon dürfen Sie rauchen.",
        "a": false,
        "why": "„Auch auf dem Balkon“ ist Rauchen verboten.",
        "text": "Rauchen verboten! Auch auf dem Balkon."
       },
       {
        "q": "Am Sonntag können Sie im Supermarkt Brot kaufen.",
        "a": true,
        "why": "Sonntags hat die Bäckerei geöffnet.",
        "text": "Supermarkt Frisch: Wir haben jetzt auch sonntags von 8 bis 12 Uhr geöffnet – nur die Bäckerei."
       },
       {
        "q": "Hier kann jeder den ganzen Tag parken.",
        "a": false,
        "why": "Nur Kunden, höchstens 2 Stunden.",
        "text": "Parken nur für Kunden. Maximal 2 Stunden."
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 20,
    "parts": [
     {
      "t": "Teil 1 – Formular ausfüllen",
      "tab": "Teil 1",
      "intro": "Ihre Nachbarin möchte ihre Tochter für einen Schwimmkurs anmelden. Sie helfen ihr beim Formular. Lesen Sie den Text und ergänzen Sie fünf Informationen.",
      "type": "form",
      "per": 1,
      "text": "Ich heiße Fatima Rahimi. Ich komme aus Afghanistan und wohne seit einem Jahr in Hamburg. Ich bin 31 Jahre alt und habe zwei Töchter. Ich möchte meine Tochter Sara für den Schwimmkurs anmelden. Sara ist sieben Jahre alt. Der Kurs soll am Samstag sein, weil ich unter der Woche arbeite.",
      "items": [
       {
        "q": "Vorname des Kindes",
        "a": [
         "Sara"
        ],
        "why": "„meine Tochter Sara“"
       },
       {
        "q": "Alter des Kindes",
        "a": [
         "7",
         "sieben",
         "7 Jahre",
         "sieben Jahre"
        ],
        "why": "„Sara ist sieben Jahre alt.“"
       },
       {
        "q": "Wohnort",
        "a": [
         "Hamburg"
        ],
        "why": "„wohne seit einem Jahr in Hamburg“"
       },
       {
        "q": "Herkunftsland der Mutter",
        "a": [
         "Afghanistan"
        ],
        "why": "„Ich komme aus Afghanistan.“"
       },
       {
        "q": "Kurstag",
        "o": [
         "unter der Woche",
         "Samstag"
        ],
        "a": 1,
        "why": "Sie arbeitet unter der Woche, deshalb Samstag."
       }
      ]
     },
     {
      "t": "Teil 2 – Kurze Mitteilung",
      "intro": "Schreiben Sie etwa 30 Wörter. Schreiben Sie zu allen drei Punkten. Vergessen Sie Anrede und Gruß nicht.",
      "type": "write",
      "crit": "a1",
      "words": 30,
      "task": "Ihre Heizung ist kaputt. Schreiben Sie an Ihren Vermieter, Herrn Braun:",
      "points": [
       "Problem",
       "Seit wann?",
       "Bitte: Handwerker"
      ],
      "model": "Sehr geehrter Herr Braun, in meiner Wohnung ist die Heizung kaputt. Sie funktioniert seit Montag nicht mehr, und es ist sehr kalt. Können Sie bitte schnell einen Handwerker schicken? Mit freundlichen Grüßen, Suresh [Nachname]",
      "tab": "Teil 2"
     }
    ]
   }
  ]
 }
];
