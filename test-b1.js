/* Modelltests B1 for test.js: sixteen whole exams in the format of the
   telc Deutsch-Test für Zuwanderer (DTZ, A2–B1): Hören 4 Teile (20 Aufgaben),
   Lesen 5 Teile (25), Schreiben (Aufgabe A oder B), Sprechen 3 Teile.
   Each question with its answer key (a = index into o / list, -1 = x;
   rf and mix items with true/false: true = richtig) and why.
   level: leicht / mittel / schwer – three leicht, three mittel, ten schwer, in that order (measured: text
   length, sentence length, paraphrase and traps in Hören and Lesen).
   tools/check-tests.mjs checks sizes and keys. */
window.TESTS_B1 = [
 {
  "id": "b1-4",
  "title": "Modelltest 1",
  "level": "leicht",
  "sub": "Einkaufen, Reklamation, Freizeit · Beschwerde an einen Online-Shop / E-Mail an eine Freundin",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Polat tun?",
        "o": [
         "Die Rechnung schicken.",
         "Eine andere Größe bestellen.",
         "Die Jacke im Geschäft abholen."
        ],
        "a": 2,
        "why": "Reparatur fertig",
        "audio": "Guten Tag, Frau Polat, hier ist Modehaus Krämer. Der Reißverschluss an Ihrer Jacke ist repariert. Sie können die Jacke ab heute an der Kasse im Erdgeschoss abholen."
       },
       {
        "q": "Wann kommt der Techniker?",
        "o": [
         "Heute Nachmittag.",
         "Morgen zwischen 8 und 12 Uhr.",
         "Am Freitag."
        ],
        "a": 1,
        "audio": "Hallo Herr Moreau, hier ist Elektro Hansen. Unser Techniker kommt morgen zwischen 8 und 12 Uhr, um Ihre Waschmaschine anzuschließen. Bitte sind Sie zu Hause.",
        "why": "„Unser Techniker kommt morgen zwischen 8 und 12 Uhr“"
       },
       {
        "q": "Was ist heute im Supermarkt billiger?",
        "o": [
         "Kaffee.",
         "Fleisch.",
         "Obst und Gemüse."
        ],
        "a": 0,
        "audio": "Liebe Kunden, heute bei uns im Angebot: alle Kaffeesorten 20 Prozent günstiger. Greifen Sie zu – nur heute!",
        "why": "„alle Kaffeesorten 20 Prozent günstiger“"
       },
       {
        "q": "Sie möchten etwas zurückgeben. Was sollen Sie tun?",
        "o": [
         "Eine E-Mail schicken.",
         "Die 2 drücken.",
         "Die 1 drücken."
        ],
        "a": 1,
        "why": "Rücksendungen → 2",
        "audio": "Willkommen beim Kundenservice von Online-Shop Mode24. Wenn Sie eine Frage zu Ihrer Bestellung haben, drücken Sie die 1. Für Rücksendungen und Umtausch drücken Sie die 2."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Was für eine Sendung hören Sie?",
        "o": [
         "Eine Kindersendung.",
         "Eine Sendung für Verbraucher.",
         "Eine Sportsendung."
        ],
        "a": 1,
        "why": "Tipps beim Online-Kauf",
        "audio": "Hier ist „Verbraucher aktuell“. Heute: Worauf müssen Sie achten, wenn Sie im Internet einkaufen? Und wie können Sie Waren zurückgeben?"
       },
       {
        "q": "Wie wird das Wetter morgen Vormittag?",
        "o": [
         "Es ist neblig.",
         "Es ist wolkenlos.",
         "Es regnet stark."
        ],
        "a": 0,
        "audio": "Morgen Vormittag gibt es im ganzen Land dichten Nebel. Autofahrer sollten vorsichtig sein. Am Nachmittag scheint dann die Sonne.",
        "why": "„Morgen Vormittag gibt es im ganzen Land dichten Nebel.“ – die Sonne erst am Nachmittag"
       },
       {
        "q": "In der Innenstadt …",
        "o": [
         "gibt es keine Parkplätze.",
         "sind die Geschäfte am Sonntag geöffnet.",
         "fahren keine Busse."
        ],
        "a": 1,
        "why": "verkaufsoffener Sonntag",
        "audio": "An diesem Sonntag ist in der Innenstadt verkaufsoffener Sonntag. Die Geschäfte sind von 13 bis 18 Uhr geöffnet. Busse und Bahnen fahren öfter."
       },
       {
        "q": "Was ist beim Flohmarkt neu?",
        "o": [
         "Man muss Eintritt bezahlen.",
         "Er ist nur für Kinder.",
         "Er findet in einer Halle statt."
        ],
        "a": 2,
        "why": "wegen Bauarbeiten in der Stadthalle",
        "audio": "Der Flohmarkt am Mainufer findet diesen Monat wegen Bauarbeiten in der Stadthalle statt. Alles andere bleibt gleich: Samstag ab 8 Uhr, Eintritt frei."
       },
       {
        "q": "Was bekommen Besucher im Museum?",
        "o": [
         "Ein Getränk.",
         "Einen Rabatt im Café.",
         "Eine kostenlose Führung."
        ],
        "a": 2,
        "audio": "Zum zehnten Geburtstag des Stadtmuseums gibt es am Wochenende für alle Besucher kostenlose Führungen. Treffpunkt ist jede Stunde im Eingangsbereich.",
        "why": "„für alle Besucher kostenlose Führungen“"
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Frau hat keinen Kassenbon.",
        "a": false,
        "why": "„Ja, hier.“",
        "audio": "Frau: Guten Tag, ich habe diese Schuhe letzte Woche gekauft. Jetzt ist die Sohle schon kaputt.\nMann: Haben Sie den Kassenbon dabei?\nFrau: Ja, hier.\nMann: Gut. Möchten Sie das Geld zurück oder ein neues Paar?\nFrau: Ein neues Paar, bitte. Die Schuhe gefallen mir eigentlich sehr."
       },
       {
        "q": "Was möchte die Frau?",
        "o": [
         "Ihr Geld zurück.",
         "Neue Schuhe.",
         "Einen Gutschein."
        ],
        "a": 1,
        "same": true,
        "why": "„Ein neues Paar, bitte.“ – nicht das Geld zurück"
       },
       {
        "q": "Tanja geht allein ins Schwimmbad.",
        "a": false,
        "why": "mit ihren Kindern",
        "audio": "Mann: Hallo Tanja, was machst du am Wochenende?\nFrau: Ich gehe mit meinen Kindern ins Schwimmbad. Willst du mitkommen?\nMann: Gern, aber ich habe keine Badehose mehr.\nFrau: Die kannst du im Schwimmbad kaufen. Wir treffen uns um zehn am Eingang, okay?"
       },
       {
        "q": "Wo treffen sie sich?",
        "o": [
         "Bei Tanja zu Hause.",
         "Am Eingang vom Schwimmbad.",
         "Im Sportgeschäft."
        ],
        "a": 1,
        "same": true,
        "why": "„Wir treffen uns um zehn am Eingang“"
       },
       {
        "q": "Die Frau sucht ein Küchengerät.",
        "a": true,
        "why": "Wasserkocher",
        "audio": "Frau: Entschuldigung, ich suche einen Wasserkocher.\nMann: Die Küchengeräte sind im zweiten Stock, gleich neben den Rolltreppen.\nFrau: Und kann ich mit Karte bezahlen?\nMann: Natürlich, an allen Kassen."
       },
       {
        "q": "Wo findet sie es?",
        "o": [
         "Im zweiten Stock.",
         "Im Untergeschoss.",
         "Im Erdgeschoss."
        ],
        "a": 0,
        "same": true,
        "why": "„Die Küchengeräte sind im zweiten Stock“ – ein Wasserkocher ist ein Küchengerät"
       },
       {
        "q": "Der Mann kennt sich gut mit Fernsehern aus.",
        "a": false,
        "why": "„Ich kenne mich nicht gut aus.“",
        "audio": "Mann: Du, ich möchte für meine Familie einen neuen Fernseher kaufen. Weißt du, wo es gute Angebote gibt?\nFrau: Im Internet ist es meistens billiger. Aber im Geschäft bekommst du Beratung.\nMann: Beratung ist mir wichtig. Ich kenne mich nicht gut aus.\nFrau: Dann geh zu Elektro Schmidt, die sind sehr freundlich und bringen den Fernseher auch nach Hause."
       },
       {
        "q": "Warum empfiehlt die Frau Elektro Schmidt?",
        "o": [
         "Das Personal ist freundlich und liefert.",
         "Dort ist es am billigsten.",
         "Das Geschäft ist ganz nah."
        ],
        "a": 0,
        "same": true,
        "why": "„die sind sehr freundlich und bringen den Fernseher auch nach Hause“ – billiger ist das Internet"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Einkaufen im Internet",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Im Internet zu kaufen spart viel Zeit.",
       "Kleidung sollte man im Geschäft anprobieren.",
       "Die vielen Pakete sind schlecht für die Umwelt.",
       "Kleine Geschäfte in der Stadt brauchen unsere Hilfe.",
       "Online kann man Preise gut vergleichen.",
       "Im Internet gibt es zu viele Betrüger."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 1,
        "why": "Größe passt nie – lieber anprobieren",
        "audio": "Ich habe oft Kleidung online bestellt, aber sie hat fast nie gepasst. Ständig musste ich Pakete zurückschicken. Jetzt kaufe ich Hosen und Jacken wieder im Geschäft – da kann ich sie anprobieren."
       },
       {
        "q": "Aussage 2",
        "a": 3,
        "why": "Buchhandlung um die Ecke",
        "audio": "In meiner Straße gibt es eine kleine Buchhandlung. Die Besitzerin kennt alle Kunden. Wenn wir alle nur noch im Internet kaufen, muss sie schließen. Deshalb kaufe ich meine Bücher bei ihr."
       },
       {
        "q": "Aussage 3",
        "a": 4,
        "why": "Preise vergleichen, 100 Euro gespart",
        "audio": "Bevor ich etwas Teures kaufe, schaue ich im Internet, wo es am günstigsten ist. Bei meiner neuen Waschmaschine habe ich so fast 100 Euro gespart."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Kaufhaus Zentral – Wegweiser\nUntergeschoss: Lebensmittel · Getränke · Drogerie\nErdgeschoss: Taschen · Schmuck · Kosmetik · Kundenservice (Umtausch, Geschenkgutscheine)\n1. Stock: Damenmode · Herrenmode · Schuhe\n2. Stock: Kindermode · Spielwaren · Schreibwaren und Schulbedarf\n3. Stock: Haushaltswaren · Elektrogeräte · Lampen · Bettwäsche\n4. Stock: Restaurant · Toiletten · Friseur",
      "items": [
       {
        "q": "Ihr Sohn kommt in die Schule und braucht Hefte und Stifte.",
        "o": [
         "2. Stock",
         "3. Stock",
         "Untergeschoss"
        ],
        "a": 0,
        "why": "Schulbedarf"
       },
       {
        "q": "Sie möchten eine Jacke umtauschen, die Sie gestern gekauft haben.",
        "o": [
         "1. Stock",
         "4. Stock",
         "Erdgeschoss"
        ],
        "a": 2,
        "why": "Kundenservice – Umtausch"
       },
       {
        "q": "Sie brauchen einen neuen Föhn.",
        "o": [
         "Untergeschoss",
         "Erdgeschoss",
         "3. Stock"
        ],
        "a": 2,
        "why": "Elektrogeräte"
       },
       {
        "q": "Sie möchten nach dem Einkaufen etwas essen.",
        "o": [
         "Untergeschoss",
         "Erdgeschoss",
         "4. Stock"
        ],
        "a": 2,
        "why": "Restaurant"
       },
       {
        "q": "Sie suchen Zahnpasta und Shampoo.",
        "o": [
         "Untergeschoss",
         "Erdgeschoss",
         "3. Stock"
        ],
        "a": 0,
        "why": "Drogerie"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Reparatur-Café: Elektrogeräte, Kleidung und Fahrräder selbst reparieren – mit Hilfe, kostenlos.",
       "Kinder-Second-Hand: gebrauchte Kinderkleidung und Spielzeug, Annahme dienstags.",
       "Bioladen Grünkorn: Obst und Gemüse aus der Region, Lieferung nach Hause.",
       "Handy-Shop: Displays reparieren in einer Stunde.",
       "Schneiderei Nadel: Hosen kürzen, Reißverschlüsse wechseln.",
       "Möbelhaus: Küchen planen und einbauen lassen.",
       "Tauschbörse im Internet: Dinge verschenken und finden.",
       "Fahrradladen: neue Räder, Beratung und Probefahrt."
      ],
      "items": [
       {
        "q": "Ihr Toaster ist kaputt und Sie möchten ihn selbst reparieren.",
        "a": 0,
        "why": "Reparatur-Café"
       },
       {
        "q": "Ihre neue Hose ist zu lang.",
        "a": 4,
        "why": "Schneiderei"
       },
       {
        "q": "Ihre Kinder sind aus vielen Sachen herausgewachsen. Sie möchten sie verkaufen.",
        "a": 1,
        "why": "„gebrauchte Kinderkleidung und Spielzeug, Annahme dienstags“ – dort kann man Sachen abgeben und verkaufen"
       },
       {
        "q": "Sie haben ein altes Sofa und möchten es verschenken.",
        "a": 6,
        "why": "Tauschbörse"
       },
       {
        "q": "Sie suchen einen günstigen gebrauchten Kühlschrank.",
        "a": -1,
        "why": "x – keine Anzeige für gebrauchte Elektrogeräte"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Im Sonderangebot gekaufte Waren kann man nicht umtauschen.",
        "a": true,
        "why": "reduzierte Waren ausgeschlossen",
        "text": "Umtausch und Rückgabe\nSie können gekaufte Waren innerhalb von 30 Tagen zurückgeben. Bitte bringen Sie den Kassenbon mit. Reduzierte Waren und Unterwäsche sind vom Umtausch ausgeschlossen. Sie bekommen Ihr Geld bar zurück oder einen Gutschein."
       },
       {
        "q": "Für den Umtausch braucht man …",
        "o": [
         "die Originalverpackung.",
         "den Kassenbon.",
         "einen Ausweis."
        ],
        "a": 1,
        "same": true,
        "why": "„Bitte bringen Sie den Kassenbon mit.“"
       },
       {
        "q": "Das Geschäft hört für immer auf.",
        "a": false,
        "why": "Es zieht um.",
        "text": "Liebe Kundinnen und Kunden,\nunser Geschäft in der Bahnhofstraße schließt am 31. März. Ab dem 1. April finden Sie uns in neuen, größeren Räumen im Einkaufszentrum am Stadtpark. Zur Eröffnung gibt es am ersten Samstag 20 Prozent Rabatt auf alles.\nIhr Team von Schuh-Paradies"
       },
       {
        "q": "Bei der Eröffnung …",
        "o": [
         "gibt es Rabatt.",
         "ist alles kostenlos.",
         "gibt es neue Öffnungszeiten."
        ],
        "a": 0,
        "same": true,
        "why": "„Zur Eröffnung gibt es … 20 Prozent Rabatt auf alles.“"
       },
       {
        "q": "Man kann sich noch am Tag des Basars als Verkäufer anmelden.",
        "a": false,
        "why": "bis zum 8. März",
        "text": "Kinderkleiderbasar im Gemeindehaus\nAm Samstag, 15. März, von 10 bis 13 Uhr verkaufen Eltern gut erhaltene Kinderkleidung, Spielzeug und Bücher. Wer selbst verkaufen möchte, meldet sich bis zum 8. März im Gemeindebüro an. Ein Tisch kostet 5 Euro. Kaffee und Kuchen gibt es auch."
       },
       {
        "q": "Wer verkaufen möchte, …",
        "o": [
         "bekommt einen Tisch kostenlos.",
         "muss für einen Tisch bezahlen.",
         "muss Kuchen mitbringen."
        ],
        "a": 1,
        "same": true,
        "why": "„Ein Tisch kostet 5 Euro.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Allgemeine Geschäftsbedingungen – Online-Shop Wohnwelt (Auszug)\nLieferung: Wir liefern innerhalb Deutschlands in 3 bis 5 Werktagen. Ab einem Bestellwert von 50 Euro ist die Lieferung kostenlos, sonst kostet sie 4,95 Euro. Große Möbel liefern wir nach Terminabsprache bis in die Wohnung.\nBezahlung: Sie können per Rechnung, Kreditkarte oder Überweisung bezahlen. Bei Bezahlung per Rechnung haben Sie 14 Tage Zeit.\nWiderruf: Sie können die Ware innerhalb von 14 Tagen ohne Angabe von Gründen zurückschicken. Die Rücksendung ist für Sie kostenlos. Ausgenommen sind Waren, die nach Ihren Wünschen angefertigt wurden.\nGarantie: Auf alle Möbel gewähren wir zwei Jahre Garantie.",
      "items": [
       {
        "q": "Bei einer Bestellung für 60 Euro kostet die Lieferung nichts.",
        "a": true,
        "why": "ab 50 Euro kostenlos"
       },
       {
        "q": "Wenn man etwas zurückschickt, muss man einen Grund nennen.",
        "a": false,
        "why": "ohne Angabe von Gründen"
       },
       {
        "q": "Für die Rücksendung muss man selbst bezahlen.",
        "a": false,
        "why": "kostenlos"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Jana,\nvielen Dank für deine Einladung zu deinem Geburtstag! Ich komme sehr (1). Leider kann ich erst um acht Uhr da sein, (2) ich bis sieben arbeiten muss. Soll ich etwas (3) Essen mitbringen? Ich könnte einen Salat machen. Ich habe auch schon ein Geschenk für dich, aber ich verrate dir noch nicht, (4) es ist. Weißt du schon, (5) Sabine auch kommt? Ich habe sie lange nicht gesehen. Ich freue mich schon sehr (6) Samstag!\nLiebe Grüße\nMaria",
      "items": [
       {
        "n": 1,
        "o": [
         "oft",
         "viel",
         "gern"
        ],
        "a": 2,
        "why": "gern kommen"
       },
       {
        "n": 2,
        "o": [
         "deshalb",
         "weil",
         "trotzdem"
        ],
        "a": 1,
        "why": "Grund + Verb am Ende"
       },
       {
        "n": 3,
        "o": [
         "beim",
         "vom",
         "zum"
        ],
        "a": 2,
        "why": "etwas zum Essen"
       },
       {
        "n": 4,
        "o": [
         "wo",
         "wer",
         "was"
        ],
        "a": 2,
        "why": "„was es ist“ – indirekte Frage nach einer Sache"
       },
       {
        "n": 5,
        "o": [
         "dass",
         "wenn",
         "ob"
        ],
        "a": 2,
        "why": "Ja/Nein-Frage → ob"
       },
       {
        "n": 6,
        "o": [
         "auf",
         "an",
         "über"
        ],
        "a": 0,
        "why": "sich freuen auf"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben im Internet einen Staubsauger bestellt. Er ist kaputt angekommen. Schreiben Sie an den Online-Shop.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ist kaputt?",
       "Was möchten Sie?",
       "Wie soll es weitergehen?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nam 3. Mai habe ich bei Ihnen einen Staubsauger bestellt (Bestellnummer 45 87 12). Leider muss ich mich beschweren.\nDer Staubsauger ist gestern angekommen, aber er funktioniert nicht. Das Kabel ist kaputt, und am Gerät fehlt ein Teil.\nIch möchte gern einen neuen Staubsauger bekommen. Wenn das nicht möglich ist, möchte ich mein Geld zurück.\nBitte schicken Sie mir einen Paketschein für die Rücksendung. Ich bin auch telefonisch unter 0176 12 34 56 erreichbar.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "bestellt|gekauft|kauf|geliefert|beschwer|schreibe|problem|reklam|bestellnummer",
        "Ich habe bei Ihnen einen Staubsauger bestellt und muss mich beschweren."
       ],
       [
        "kaputt|funktioniert nicht|fehlt|defekt|kabel|beschädigt",
        "Das Kabel ist kaputt und ein Teil fehlt."
       ],
       [
        "neue[nrs]?|umtausch|geld zurück|ersatz|möchte",
        "Ich möchte einen neuen Staubsauger oder mein Geld zurück."
       ],
       [
        "paketschein|zurückschicken|rücksendung|abholen|antworten|erreichbar|bitte",
        "Bitte schicken Sie mir einen Paketschein für die Rücksendung."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Eine Freundin möchte am Wochenende mit Ihnen einkaufen gehen. Sie haben keine Zeit. Schreiben Sie ihr eine E-Mail.",
       "points": [
        "Dank für die Einladung",
        "Warum Sie keine Zeit haben",
        "Neuer Vorschlag",
        "Was Sie kaufen möchten"
       ],
       "model": "Liebe Sophie,\nvielen Dank für deine Nachricht! Ich würde sehr gern mit dir einkaufen gehen.\nLeider habe ich am Wochenende keine Zeit, weil meine Schwiegereltern zu Besuch kommen. Wir wollen ihnen die Stadt zeigen.\nWie wäre es mit Donnerstag nach der Arbeit? Die Geschäfte sind bis 20 Uhr geöffnet. Wir könnten uns um 17.30 Uhr am Kaufhaus treffen.\nIch brauche dringend neue Schuhe für den Winter und ein Geschenk für meinen Sohn. Vielleicht kannst du mir helfen!\nLiebe Grüße\nSuresh",
       "keys": [
        [
         "dank|nachricht|einladung|gern",
         "Vielen Dank für deine Nachricht!"
        ],
        [
         "keine zeit|leider|weil|denn|besuch|arbeit",
         "Leider habe ich keine Zeit, weil meine Schwiegereltern zu Besuch kommen."
        ],
        [
         "wie wäre|vorschlag|können wir|donnerstag|montag|dienstag|mittwoch|freitag|nächste woche|treffen",
         "Wie wäre es mit Donnerstag nach der Arbeit?"
        ],
        [
         "brauche|kaufen|schuhe|jacke|geschenk|kleid|hose",
         "Ich brauche neue Schuhe und ein Geschenk für meinen Sohn."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Mein Name ist Anna Nowak. Ich bin in Polen geboren, in Krakau. Jetzt wohne ich in Wiesbaden. Ich bin Friseurin, aber im Moment bin ich zu Hause bei meinem Baby. Ich bin verheiratet und habe eine kleine Tochter. Ich spreche Polnisch, Deutsch und Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Wie groß ist Ihre Familie? Und wo lebt Ihre Familie?"
       },
       {
        "you": "Erzähl von deiner Familie: Wie groß ist sie, und wo leben alle?",
        "min": 15,
        "key": [
         [
          "frau|mann|kinder|sohn|tochter|eltern|geschwister|bruder|schwester",
          "Familie"
         ],
         [
          "lebt|leben|wohnt|wohnen|in indien|hier",
          "wo"
         ]
        ],
        "model": "Meine Familie ist ziemlich groß. Hier in Deutschland lebe ich mit meiner Frau und unseren zwei Kindern. Meine Eltern und meine zwei Schwestern leben in Indien. Wir telefonieren jede Woche mit ihnen."
       },
       {
        "who": "Prüferin",
        "say": "Was machen Sie gern zusammen mit Ihrer Familie?"
       },
       {
        "you": "Sag, was ihr gern zusammen macht.",
        "min": 12,
        "key": [
         [
          "wir|zusammen|gemeinsam",
          "zusammen"
         ],
         [
          "spazieren|kochen|ausflug|spielen|park|essen|fernsehen|besuchen",
          "Aktivität"
         ]
        ],
        "model": "Am Wochenende kochen wir gern zusammen indisches Essen. Wenn das Wetter schön ist, gehen wir in den Park oder machen einen Ausflug."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Freizeit am Wochenende. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-4.jpg",
         "alt": "Ein Park im Sommer: Ein Vater spielt mit zwei Mädchen, eine Frau sitzt mit einem Hund auf der Wiese, daneben steht ein rosa Kinderfahrrad. Im Hintergrund parken Autos.",
         "by": "Francisco Rioseco",
         "link": "https://unsplash.com/photos/menschen-die-tagsuber-auf-der-wiese-sitzen-31HS1aQ1tMw"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "park|wiese|gras|familie|vater|mann|mädchen|kinder|frau|hund|fahrrad|bäume|sommer|sonne",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Park im Sommer. Ein Vater spielt mit zwei Mädchen, und eine Frau sitzt mit einem Hund auf der Wiese. Daneben steht ein rosa Kinderfahrrad. Ich glaube, das ist eine Familie, die am Wochenende zusammen im Park ist. Alle sehen fröhlich aus."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sitzen junge Leute in einem Café. Sie trinken Kaffee, lachen und schauen auf ihre Handys. Es sieht gemütlich aus, vielleicht ist es Samstagnachmittag."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Was machen Sie am Wochenende?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "wochenende|samstag|sonntag|freunde|familie|park|ausflug|sport",
          "zum Thema"
         ]
        ],
        "model": "Am Samstag kaufe ich meistens ein und mache die Wohnung sauber. Am Sonntag treffen wir Freunde oder machen einen Ausflug."
       },
       {
        "who": "Prüferin",
        "say": "Was machen die Menschen in Ihrem Heimatland in der Freizeit? Ist das anders als in Deutschland?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien verbringen die Menschen ihre Freizeit oft mit der großen Familie. Man besucht sich spontan, ohne Termin. In Deutschland finde ich, dass die Leute mehr allein oder im Verein machen, zum Beispiel Sport. Das finde ich auch gut, weil man so neue Leute kennenlernt."
       },
       {
        "who": "Anna",
        "say": "Das stimmt, in Deutschland machen viele Leute ihre Hobbys im Verein."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Sie möchten mit Ihrer Partnerin ein Picknick für den Deutschkurs organisieren. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann und wo? · Essen und Getränke · Was machen bei Regen? · Wer lädt ein?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Sie möchten mit Ihrer Partnerin ein Picknick für den Deutschkurs organisieren. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann und wo? · Essen und Getränke · Was machen bei Regen? · Wer lädt ein?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wollen wir zum Ende des Kurses ein Picknick machen? Vielleicht im Stadtpark am Samstag?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, super Idee! Der Stadtpark ist gut, weil ihn alle mit der Straßenbahn erreichen können. Samstagnachmittag passt bestimmt den meisten."
       },
       {
        "who": "Anna",
        "say": "Und wie machen wir es mit dem Essen? Und was ist, wenn es regnet?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "picknick|park|essen|getränke|regen|samstag|sonntag|einladen|kurs|salat|grill",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage vor, dass jeder etwas aus seinem Heimatland mitbringt. Wenn es regnet, könnten wir den Kursraum benutzen – wir fragen die Lehrerin."
       },
       {
        "who": "Anna",
        "say": "Gut. Wer lädt die anderen ein?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kann eine Nachricht in die Chatgruppe vom Kurs schreiben. Kannst du die Lehrerin wegen des Raums fragen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "picknick|park|essen|getränke|regen|samstag|sonntag|einladen|kurs|salat|grill",
          "Plan"
         ]
        ],
        "model": "Also, wir machen am Samstagnachmittag ein Picknick im Stadtpark. Jeder bringt Essen aus seinem Land mit. Bei Regen gehen wir in den Kursraum. Ich lade alle in der Chatgruppe ein, und du fragst die Lehrerin."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
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
  "level": "leicht",
  "sub": "Arztpraxis, Schule, Krankenkasse · Entschuldigung für die Schule / Anfrage an einen Sportverein",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Nguyen mitbringen?",
        "o": [
         "Eine Überweisung.",
         "Ihren Impfpass.",
         "Ihre Versichertenkarte."
        ],
        "a": 2,
        "audio": "Guten Tag, Frau Nguyen, hier ist die Praxis Doktor Hahn. Ihr Termin ist morgen um 9 Uhr 30. Bitte denken Sie an Ihre Versichertenkarte. Bis morgen.",
        "why": "„Bitte denken Sie an Ihre Versichertenkarte.“"
       },
       {
        "q": "Wann ist die Apotheke heute geöffnet?",
        "o": [
         "Bis 18 Uhr.",
         "Den ganzen Tag nicht.",
         "Bis 20 Uhr."
        ],
        "a": 0,
        "why": "heute wegen Inventur nur bis 18 Uhr",
        "audio": "Sie sind verbunden mit der Sonnen-Apotheke. Heute schließen wir wegen Inventur schon um 18 Uhr. Den nächsten Notdienst finden Sie im Internet."
       },
       {
        "q": "Warum ruft die Schule an?",
        "o": [
         "Ihr Sohn hat sein Handy vergessen.",
         "Ihr Sohn ist krank geworden.",
         "Der Unterricht fällt aus."
        ],
        "a": 1,
        "why": "Bauchschmerzen, abholen",
        "audio": "Guten Tag, hier ist das Sekretariat der Grundschule am Park. Ihr Sohn Emil hat starke Bauchschmerzen. Können Sie ihn bitte so bald wie möglich abholen?"
       },
       {
        "q": "Sie möchten Ihre Adresse bei der Krankenkasse ändern. Was tun Sie?",
        "o": [
         "Die 3 drücken.",
         "Die 1 drücken.",
         "Morgen anrufen."
        ],
        "a": 0,
        "why": "Adressänderungen → 3",
        "audio": "Willkommen bei der Gesundheitskasse. Für Fragen zu Rechnungen drücken Sie die 1. Für eine neue Versichertenkarte drücken Sie die 2. Für Adressänderungen drücken Sie die 3."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worüber informiert die Sendung?",
        "o": [
         "Über Sport im Winter.",
         "Über gesunden Schlaf.",
         "Über neue Medikamente."
        ],
        "a": 1,
        "audio": "Willkommen bei „Gesund leben“. Viele Menschen schlafen schlecht. Heute erklärt Ihnen ein Arzt, was Sie selbst für einen ruhigen Schlaf tun können.",
        "why": "„Viele Menschen schlafen schlecht … für einen ruhigen Schlaf“"
       },
       {
        "q": "Wie ist das Wetter am Wochenende?",
        "o": [
         "Regnerisch und kühl.",
         "Sonnig und warm.",
         "Es gibt Gewitter."
        ],
        "a": 1,
        "audio": "Und das Wetter am Wochenende: viel Sonne bei bis zu 26 Grad. Erst am Montag kommen Wolken und etwas Regen.",
        "why": "„viel Sonne bei bis zu 26 Grad“ – Regen erst am Montag"
       },
       {
        "q": "Was ist auf der A5 los?",
        "o": [
         "Es gibt einen Stau.",
         "Es ist neblig.",
         "Die Autobahn ist gesperrt."
        ],
        "a": 0,
        "why": "acht Kilometer Stau",
        "audio": "Auf der A5 zwischen Darmstadt und Frankfurt staut sich der Verkehr auf acht Kilometern. Grund ist ein liegengebliebener Lkw."
       },
       {
        "q": "Was können Eltern beim Gesundheitsamt machen?",
        "o": [
         "Medikamente kaufen.",
         "Ihre Kinder kostenlos impfen lassen.",
         "Einen Kita-Platz bekommen."
        ],
        "a": 1,
        "audio": "Das Gesundheitsamt bietet im Oktober kostenlose Impfungen für Kinder an. Eltern können ohne Termin kommen, bitte bringen Sie den Impfpass mit.",
        "why": "„kostenlose Impfungen für Kinder“"
       },
       {
        "q": "Beim Lauf durch die Stadt …",
        "o": [
         "können auch Kinder mitmachen.",
         "gewinnt man Geld.",
         "muss man sehr schnell sein."
        ],
        "a": 0,
        "why": "Strecke für Kinder",
        "audio": "Am Sonntag ist der große Stadtlauf. Neben den zehn Kilometern gibt es auch eine kurze Strecke für Kinder ab sechs Jahren. Anmeldung bis Freitag online."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Der Mann hat seit drei Tagen Fieber.",
        "a": true,
        "audio": "Frau: Praxis Doktor Lang, guten Tag.\nMann: Guten Tag, hier ist Yusuf Demir. Ich brauche einen Termin, ich habe seit drei Tagen Fieber.\nFrau: Heute ist leider alles voll. Aber Sie können in die offene Sprechstunde kommen, von 11 bis 12 Uhr.\nMann: Dann komme ich um elf. Muss ich etwas mitbringen?\nFrau: Nur Ihre Versichertenkarte.",
        "why": "„ich habe seit drei Tagen Fieber“"
       },
       {
        "q": "Was macht der Mann?",
        "o": [
         "Er ruft später noch einmal an.",
         "Er kommt in die offene Sprechstunde.",
         "Er bekommt morgen einen Termin."
        ],
        "a": 1,
        "same": true,
        "why": "„Sie können in die offene Sprechstunde kommen“ – „Dann komme ich um elf.“"
       },
       {
        "q": "Sara und der Mann sind Lehrer.",
        "a": false,
        "why": "Beide sind Eltern.",
        "audio": "Mann: Hallo Sara, gehst du auch zum Elternabend am Donnerstag?\nFrau: Ich möchte, aber ich habe niemanden für die Kinder.\nMann: Meine Mutter passt auf unsere auf. Bring deine doch einfach zu uns!\nFrau: Wirklich? Das ist sehr nett. Dann bringe ich Kuchen für deine Mutter mit."
       },
       {
        "q": "Was bietet der Mann an?",
        "o": [
         "Er erzählt Sara alles nach dem Elternabend.",
         "Er fährt Sara zur Schule.",
         "Seine Mutter passt auch auf Saras Kinder auf."
        ],
        "a": 2,
        "same": true,
        "why": "„Meine Mutter passt auf unsere auf. Bring deine doch einfach zu uns!“"
       },
       {
        "q": "Die Frau spricht mit ihrem Arzt.",
        "a": false,
        "why": "in der Apotheke",
        "audio": "Frau: Guten Tag, ich habe eine Frage zu meinem Rezept.\nMann: Ja, bitte.\nFrau: Der Arzt hat mir Tabletten verschrieben. Muss ich sie vor oder nach dem Essen nehmen?\nMann: Immer nach dem Essen, dreimal am Tag. Und bitte trinken Sie keinen Alkohol dazu.\nFrau: Gut, vielen Dank."
       },
       {
        "q": "Wann soll sie die Tabletten nehmen?",
        "o": [
         "Vor dem Essen.",
         "Nach dem Essen.",
         "Nur am Abend."
        ],
        "a": 1,
        "same": true,
        "why": "„Immer nach dem Essen, dreimal am Tag.“"
       },
       {
        "q": "Mia geht jeden Tag schwimmen.",
        "a": false,
        "why": "zweimal pro Woche",
        "audio": "Mann: Du, Mia, ich will mit Sport anfangen. Was machst du eigentlich?\nFrau: Ich gehe zweimal pro Woche schwimmen. Das ist gut für den Rücken.\nMann: Schwimmen kann ich leider nicht so gut.\nFrau: Das Hallenbad bietet Kurse für Erwachsene an. Komm doch mit, dann zeige ich dir alles."
       },
       {
        "q": "Was schlägt Mia vor?",
        "o": [
         "Einen Schwimmkurs für Erwachsene.",
         "Joggen im Park.",
         "Ein Fitnessstudio."
        ],
        "a": 0,
        "same": true,
        "why": "„Das Hallenbad bietet Kurse für Erwachsene an. Komm doch mit“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Handys in der Schule",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Handys gehören in der Schule in die Tasche.",
       "Kinder brauchen das Handy für den Notfall.",
       "Lehrer sollten zeigen, wie man das Handy sinnvoll benutzt.",
       "Kinder sollten erst mit 14 ein Handy bekommen.",
       "Die Eltern sind für die Regeln verantwortlich.",
       "Mit dem Handy lernen Kinder schneller."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "Schule soll den richtigen Umgang beibringen",
        "audio": "Verbieten bringt nichts. Die Kinder benutzen das Handy sowieso. Ich finde, die Schule muss ihnen beibringen, wie man es gut nutzt – zum Beispiel für Recherchen im Unterricht."
       },
       {
        "q": "Aussage 2",
        "a": 0,
        "why": "im Unterricht weg",
        "audio": "Bei meinem Sohn in der Schule müssen die Handys während des Unterrichts ausgeschaltet in der Tasche bleiben. Das finde ich richtig. Sonst schauen die Kinder nur auf den Bildschirm."
       },
       {
        "q": "Aussage 3",
        "a": 1,
        "why": "für den Notfall erreichbar",
        "audio": "Meine Tochter fährt allein mit dem Bus zur Schule. Ich möchte, dass sie mich anrufen kann, wenn etwas passiert. Deshalb hat sie ein Handy."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Ärztehaus am Markt – Wegweiser\nErdgeschoss: Apotheke · Labor (Blutabnahme) · Physiotherapie\n1. Stock: Dr. Weber – Allgemeinmedizin (Hausarzt) · Dr. Kaya – Kinderärztin\n2. Stock: Dr. Fischer – Zahnarzt · Dr. Lehmann – Augenarzt\n3. Stock: Dr. Roth – Frauenärztin · Hebammenpraxis (Geburtsvorbereitung)\n4. Stock: Dr. Braun – Hals-Nasen-Ohren · Psychologische Beratung",
      "items": [
       {
        "q": "Ihr Kind braucht die Vorsorgeuntersuchung U7.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "3. Stock"
        ],
        "a": 1,
        "why": "Kinderärztin"
       },
       {
        "q": "Sie haben starke Zahnschmerzen.",
        "o": [
         "4. Stock",
         "2. Stock",
         "1. Stock"
        ],
        "a": 1,
        "why": "Zahnarzt"
       },
       {
        "q": "Sie sind schwanger und suchen einen Kurs zur Geburtsvorbereitung.",
        "o": [
         "1. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Hebammenpraxis"
       },
       {
        "q": "Ihr Arzt hat Ihnen Massagen für den Rücken verschrieben.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "4. Stock"
        ],
        "a": 0,
        "why": "Physiotherapie"
       },
       {
        "q": "Sie hören auf einem Ohr schlecht.",
        "o": [
         "3. Stock",
         "4. Stock",
         "2. Stock"
        ],
        "a": 1,
        "why": "Hals-Nasen-Ohren"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Rückenschule: Kurs mit Physiotherapeutin, 8 Termine, Krankenkasse zahlt einen Teil.",
       "Kinderarzt-Notdienst am Wochenende: Kinderklinik, Sa/So 9–20 Uhr.",
       "Zahnarztpraxis Dr. Fischer: Angstpatienten willkommen, Behandlung mit viel Zeit.",
       "Raucherentwöhnung: Gruppenkurs bei der Volkshochschule, 6 Abende.",
       "Ernährungsberatung für Familien: gesund kochen mit wenig Geld.",
       "Sportverein Blau-Weiß: Fußball für Kinder ab 6, Training mittwochs.",
       "Selbsthilfegruppe Diabetes: Treffen jeden ersten Montag im Monat.",
       "Brillen-Studio: Sehtest kostenlos, Brillen ab 49 Euro."
      ],
      "items": [
       {
        "q": "Sie möchten mit dem Rauchen aufhören.",
        "a": 3,
        "why": "Raucherentwöhnung"
       },
       {
        "q": "Ihre Tochter hat am Samstag hohes Fieber.",
        "a": 1,
        "why": "Kinderarzt-Notdienst am Wochenende"
       },
       {
        "q": "Sie haben große Angst vor dem Zahnarzt.",
        "a": 2,
        "why": "„Angstpatienten willkommen, Behandlung mit viel Zeit“"
       },
       {
        "q": "Sie möchten Ihre Augen testen lassen.",
        "a": 7,
        "why": "Sehtest kostenlos"
       },
       {
        "q": "Sie suchen einen Yogakurs für Schwangere.",
        "a": -1,
        "why": "x – kein Yogakurs"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Die Praxis ist im August zwei Wochen geschlossen.",
        "a": true,
        "why": "4. bis 15. August",
        "text": "Liebe Patientinnen und Patienten,\nunsere Praxis ist vom 4. bis 15. August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an die Praxis Dr. Sommer, Bahnhofstraße 8. Rezepte für die Urlaubszeit können Sie bis zum 1. August bei uns abholen.\nIhr Praxisteam Dr. Weber"
       },
       {
        "q": "Rezepte für die Urlaubszeit …",
        "o": [
         "muss man vorher abholen.",
         "bekommt man bei Dr. Sommer.",
         "schickt die Praxis per Post."
        ],
        "a": 0,
        "why": "bis zum 1. August abholen",
        "same": true
       },
       {
        "q": "Der Ausflug findet auch bei Regen statt.",
        "a": false,
        "why": "bei Regen normaler Unterricht",
        "text": "Liebe Eltern der Klasse 3b,\nam Freitag, 12. April, machen wir einen Ausflug in den Zoo. Wir treffen uns um 8 Uhr an der Schule und sind um 14 Uhr zurück. Bitte geben Sie Ihrem Kind ein Frühstück, etwas zu trinken und 5 Euro für den Eintritt mit. Bei Regen findet der Unterricht normal statt.\nFrau Schneider"
       },
       {
        "q": "Die Kinder sollen …",
        "o": [
         "Geld für den Eintritt mitbringen.",
         "im Zoo Mittag essen.",
         "um 14 Uhr abgeholt werden."
        ],
        "a": 0,
        "same": true,
        "why": "„5 Euro für den Eintritt mit“"
       },
       {
        "q": "Die App kostet Geld.",
        "a": false,
        "why": "kostenlos",
        "text": "Neu bei Ihrer Krankenkasse: Mit der App „GesundPlus“ können Sie Krankmeldungen, Rechnungen und Anträge einfach mit dem Handy fotografieren und an uns schicken. Den Weg zur Geschäftsstelle sparen Sie sich. Die App ist kostenlos. Für die Anmeldung brauchen Sie Ihre Versichertennummer."
       },
       {
        "q": "Mit der App kann man …",
        "o": [
         "Dokumente an die Krankenkasse schicken.",
         "Medikamente bestellen.",
         "einen Arzttermin buchen."
        ],
        "a": 0,
        "same": true,
        "why": "„Krankmeldungen, Rechnungen und Anträge … fotografieren und an uns schicken“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Beipackzettel – Hustensaft „Bronchofit“\nAnwendung: Bei Husten mit Schleim, für Erwachsene und Kinder ab 6 Jahren.\nDosierung: Erwachsene nehmen dreimal täglich 10 ml, Kinder von 6 bis 12 Jahren dreimal täglich 5 ml. Nehmen Sie den Saft nach dem Essen ein. Den Messbecher finden Sie in der Packung.\nDauer: Nehmen Sie den Saft nicht länger als eine Woche ohne Rat eines Arztes. Wenn der Husten nach sieben Tagen nicht besser ist oder Sie Fieber bekommen, gehen Sie bitte zum Arzt.\nNebenwirkungen: Selten kommt es zu Bauchschmerzen. Dann nehmen Sie den Saft nicht weiter.\nAufbewahrung: Nicht über 25 Grad lagern. Nach dem Öffnen ist der Saft drei Monate haltbar. Für Kinder unerreichbar aufbewahren.",
      "items": [
       {
        "q": "Kinder unter 6 Jahren dürfen den Saft nehmen.",
        "a": false,
        "why": "ab 6 Jahren"
       },
       {
        "q": "Wenn der Husten nach einer Woche nicht besser ist, soll man zum Arzt gehen.",
        "a": true,
        "why": "„Wenn der Husten nach sieben Tagen nicht besser ist …, gehen Sie bitte zum Arzt.“"
       },
       {
        "q": "Eine offene Flasche kann man ein Jahr benutzen.",
        "a": false,
        "why": "drei Monate"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Damen und Herren,\nmein Name ist Ahmad Rahimi. Ich bin seit Januar (1) Ihrer Krankenkasse versichert. Leider habe ich (2) keine neue Versichertenkarte bekommen. Ich habe Ihnen schon im Februar ein Foto geschickt, (3) Sie hatten darum gebeten. Nächste Woche habe ich einen wichtigen Termin beim Arzt. Deshalb brauche ich die Karte (4). Können Sie mir bitte sagen, (5) ich die Karte bekomme? Für Fragen erreichen Sie mich (6) unter der Nummer 0176 1234567.\nMit freundlichen Grüßen\nAhmad Rahimi",
      "items": [
       {
        "n": 1,
        "o": [
         "bei",
         "mit",
         "von"
        ],
        "a": 0,
        "why": "bei einer Krankenkasse versichert"
       },
       {
        "n": 2,
        "o": [
         "schon",
         "noch",
         "nie"
        ],
        "a": 1,
        "why": "noch keine"
       },
       {
        "n": 3,
        "o": [
         "weil",
         "damit",
         "obwohl"
        ],
        "a": 0,
        "why": "Grund"
       },
       {
        "n": 4,
        "o": [
         "später",
         "dringend",
         "langsam"
        ],
        "a": 1,
        "why": "„einen wichtigen Termin beim Arzt. Deshalb brauche ich die Karte dringend“"
       },
       {
        "n": 5,
        "o": [
         "ob",
         "wie viel",
         "wann"
        ],
        "a": 2,
        "why": "Zeit"
       },
       {
        "n": 6,
        "o": [
         "gestern",
         "tagsüber",
         "früher"
        ],
        "a": 1,
        "why": "„tagsüber“ = während des Tages – passt zu „erreichen Sie mich … unter der Nummer“"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Ihre Tochter war krank und konnte zwei Tage nicht in die Schule gehen. Schreiben Sie eine Entschuldigung an die Klassenlehrerin, Frau Meier.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was hatte Ihre Tochter?",
       "Wie lange?",
       "Frage nach den Hausaufgaben"
      ],
      "model": "Liebe Frau Meier,\nich schreibe Ihnen, weil meine Tochter Priya am Montag und Dienstag nicht in der Schule war.\nSie hatte hohes Fieber und starke Halsschmerzen. Deshalb waren wir beim Kinderarzt, und er hat gesagt, dass sie zu Hause bleiben soll.\nSie war zwei Tage krank. Jetzt geht es ihr besser, und ab Mittwoch kommt sie wieder in die Schule.\nKönnen Sie mir bitte sagen, welche Hausaufgaben sie nachholen muss? Dann kann sie heute Nachmittag schon anfangen.\nVielen Dank für Ihr Verständnis.\nViele Grüße\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|entschuldig|nicht in der schule|gefehlt|nicht kommen",
        "Ich schreibe Ihnen, weil meine Tochter zwei Tage nicht in der Schule war."
       ],
       [
        "fieber|krank|schmerz|erkält|grippe|arzt",
        "Sie hatte hohes Fieber und war beim Kinderarzt."
       ],
       [
        "tage|montag|dienstag|mittwoch|wieder|ab ",
        "Sie war zwei Tage krank, ab Mittwoch kommt sie wieder."
       ],
       [
        "hausaufgabe|aufgaben|nachholen|lernen",
        "Welche Hausaufgaben muss sie nachholen?"
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie möchten in einem Sportverein Mitglied werden. Schreiben Sie an den Verein.",
       "points": [
        "Grund für Ihr Schreiben",
        "Welche Sportart?",
        "Fragen zu Training und Kosten",
        "Probetraining"
       ],
       "model": "Sehr geehrte Damen und Herren,\nich habe Ihre Internetseite gesehen und möchte gern Mitglied in Ihrem Verein werden.\nIch interessiere mich für Badminton, weil ich es schon in Indien oft gespielt habe. Ich habe früher in Indien viel gespielt, aber hier in Deutschland habe ich noch keinen Verein gefunden.\nKönnen Sie mir bitte sagen, wann das Training für Erwachsene stattfindet? Und wie viel kostet die Mitgliedschaft im Monat?\nIch würde gern zuerst ein Probetraining machen. Ist das möglich, vielleicht schon nächste Woche?\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "mitglied|verein|anmelden|schreibe|interess",
         "Ich schreibe Ihnen, weil ich Mitglied in Ihrem Verein werden möchte."
        ],
        [
         "badminton|fußball|tennis|schwimm|volleyball|tischtennis|basketball|laufen|yoga|sport",
         "Ich interessiere mich für Badminton."
        ],
        [
         "training|wann|kost|euro|beitrag|preis|zeiten",
         "Wann ist das Training und wie viel kostet der Beitrag?"
        ],
        [
         "probe|ausprobieren|einmal mitmachen|testen",
         "Kann ich zuerst ein Probetraining machen?"
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Mein Name ist Anna Petrova. Ich bin in Bulgarien geboren, in Sofia. Ich wohne in Hanau. Ich bin Krankenpflegerin und arbeite in einem Altenheim. Ich bin geschieden und habe zwei Töchter. Ich spreche Bulgarisch, Russisch und Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben Ihren Beruf genannt. Wo und wie haben Sie Ihren Beruf gelernt?"
       },
       {
        "you": "Erzähl, wo und wie du deinen Beruf gelernt hast.",
        "min": 15,
        "key": [
         [
          "studiert|gelernt|ausbildung|universität|hochschule|schule",
          "Ausbildung"
         ],
         [
          "\\bin\\b|jahre",
          "wo / wie lange"
         ]
        ],
        "model": "Ich habe in Indien an der Universität in Chennai vier Jahre Informatik studiert. Danach habe ich in einer großen Firma gearbeitet und dort viel gelernt."
       },
       {
        "who": "Prüferin",
        "say": "Was sind Ihre Aufgaben bei der Arbeit?"
       },
       {
        "you": "Beschreib deine Aufgaben bei der Arbeit.",
        "min": 12,
        "key": [
         [
          "ich (mache|arbeite|schreibe|plane|teste|helfe|programmiere|kümmere)",
          "Aufgaben"
         ],
         [
          "kunden|kollegen|team|projekt|computer",
          "Arbeit"
         ]
        ],
        "model": "Ich entwickle Software und teste Programme. Ich arbeite viel im Team und habe oft Besprechungen mit Kunden."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Arztbesuch. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-2.jpg",
         "alt": "Eine Arztpraxis: Eine Ärztin mit Brille und Stethoskop sitzt am Schreibtisch und hört einem Patienten zu. Neben ihr steht ein Computer, hinten Regale mit Ordnern.",
         "by": "Vitaly Gariev",
         "link": "https://unsplash.com/photos/der-arzt-berat-sich-mit-dem-patienten-in-der-arztpraxis-iyeUwItlIPk"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "ärztin|arzt|praxis|patient|mann|schreibtisch|computer|stethoskop|brille|regal|ordner",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich eine Arztpraxis. Eine Ärztin mit Brille und Stethoskop sitzt am Schreibtisch. Ein junger Mann sitzt ihr gegenüber und erzählt etwas. Ich glaube, er ist krank und erklärt ihr seine Beschwerden. Die Ärztin hört gut zu."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto ist eine Ärztin mit einem alten Mann. Sie misst seinen Blutdruck und lacht. Ich glaube, es ist ein Hausbesuch, denn sie sind in einer Wohnung."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Wie oft gehen Sie zum Arzt? Haben Sie einen Hausarzt?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "arzt|hausarzt|praxis|termin|krank",
          "zum Thema"
         ]
        ],
        "model": "Ich gehe nur zum Arzt, wenn ich krank bin, vielleicht zweimal im Jahr. Ich habe einen Hausarzt in meiner Nähe. Er ist sehr nett und spricht auch Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland, wenn man krank ist? Was finden Sie am deutschen Gesundheitssystem gut oder schlecht?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien geht man oft direkt zum Facharzt oder ins Krankenhaus, und man bezahlt viel selbst. In Deutschland finde ich gut, dass die Krankenkasse fast alles bezahlt. Schlecht finde ich, dass man beim Facharzt manchmal Monate auf einen Termin warten muss."
       },
       {
        "who": "Anna",
        "say": "Ja, das mit den langen Wartezeiten finde ich auch schwierig."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Eine Kollegin aus Ihrem Deutschkurs liegt im Krankenhaus. Sie möchten sie zusammen besuchen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann besuchen? · Was mitbringen? · Wie hinkommen? · Wer fragt nach den Besuchszeiten?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Eine Kollegin aus Ihrem Deutschkurs liegt im Krankenhaus. Sie möchten sie zusammen besuchen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann besuchen? · Was mitbringen? · Wie hinkommen? · Wer fragt nach den Besuchszeiten?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unsere Kollegin Fatima liegt seit Montag im Krankenhaus. Wollen wir sie am Samstag besuchen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, unbedingt! Samstag passt mir gut, weil ich dann frei habe. Am besten am Nachmittag."
       },
       {
        "who": "Anna",
        "say": "Gut. Was bringen wir ihr mit?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "besuch|krankenhaus|blumen|bus|bahn|auto|besuchszeit|samstag|sonntag|obst|buch",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es mit Obst und einer Zeitschrift? Blumen sind in manchen Krankenhäusern nicht erlaubt. Wir könnten ihr auch eine Karte vom ganzen Kurs mitbringen."
       },
       {
        "who": "Anna",
        "say": "Schöne Idee. Und wie kommen wir hin, wer fragt nach den Besuchszeiten?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich rufe morgen im Krankenhaus an und frage nach den Besuchszeiten. Wir können zusammen mit der Straßenbahn fahren. Kannst du die Karte im Kurs unterschreiben lassen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "besuch|krankenhaus|blumen|bus|bahn|auto|besuchszeit|samstag|sonntag|obst|buch",
          "Plan"
         ]
        ],
        "model": "Also, wir besuchen Fatima am Samstagnachmittag. Wir bringen Obst, eine Zeitschrift und eine Karte vom Kurs mit. Ich frage nach den Besuchszeiten, du kümmerst dich um die Karte, und wir fahren zusammen mit der Straßenbahn."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-7",
  "title": "Modelltest 3",
  "level": "leicht",
  "sub": "Reisen, Familie, Feste · Absage an eine Freundin / Beschwerde an ein Hotel",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Schulz tun?",
        "o": [
         "Zum Flughafen kommen.",
         "Zurückrufen.",
         "Eine E-Mail schreiben."
        ],
        "a": 1,
        "why": "„Rufen Sie uns bitte zurück.“",
        "audio": "Guten Tag, Frau Schulz, hier ist Reisebüro Sonne. Ihr Flug nach Antalya hat eine neue Abflugzeit. Bitte rufen Sie uns so schnell wie möglich zurück."
       },
       {
        "q": "Wo treffen sich die beiden?",
        "o": [
         "Im Restaurant.",
         "Am Bahnhof.",
         "Vor dem Kino."
        ],
        "a": 2,
        "why": "nicht im Restaurant – vor dem Kino",
        "audio": "Hallo Sara, hier ist Mehmet. Wir treffen uns nicht im Restaurant, sondern direkt vor dem Kino, um halb acht. Bis dann!"
       },
       {
        "q": "Wie lange dauert die Verspätung?",
        "o": [
         "Etwa 10 Minuten.",
         "Zwei Stunden.",
         "Etwa 30 Minuten."
        ],
        "a": 2,
        "audio": "Information zu Flug LH 456 nach Istanbul: Der Abflug verzögert sich um etwa 30 Minuten. Bitte bleiben Sie in der Nähe von Gate B 22.",
        "why": "„Der Abflug verzögert sich um etwa 30 Minuten.“"
       },
       {
        "q": "Sie möchten Ihr Hotelzimmer stornieren. Was tun Sie?",
        "o": [
         "Die 1 drücken.",
         "Die 2 drücken.",
         "An der Rezeption vorbeigehen."
        ],
        "a": 1,
        "why": "Stornierungen → 2",
        "audio": "Herzlich willkommen im Hotel Seeblick. Für neue Buchungen drücken Sie die 1. Für Änderungen und Stornierungen drücken Sie die 2. Für das Restaurant drücken Sie die 3."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um Autos.",
         "Um Gesundheit.",
         "Um Urlaub in Deutschland."
        ],
        "a": 2,
        "audio": "Willkommen bei „Urlaub vor der Haustür“. Heute stellen wir Ihnen schöne Ausflugsziele in Deutschland vor, die Sie gut mit der Bahn erreichen.",
        "why": "„schöne Ausflugsziele in Deutschland“ – „Urlaub vor der Haustür“"
       },
       {
        "q": "Wie wird das Wetter an der Küste?",
        "o": [
         "Sonnig, aber windig.",
         "Regnerisch.",
         "Neblig."
        ],
        "a": 0,
        "audio": "Das Wetter für das Wochenende: An der Nord- und Ostsee scheint die Sonne, aber es weht ein starker Wind. Im Süden gibt es Gewitter.",
        "why": "„An der Nord- und Ostsee scheint die Sonne, aber es weht ein starker Wind.“"
       },
       {
        "q": "Was ist am Flughafen los?",
        "o": [
         "Ein neues Terminal öffnet.",
         "Es schneit.",
         "Das Personal streikt."
        ],
        "a": 2,
        "why": "Streik",
        "audio": "Wegen eines Streiks des Bodenpersonals fallen am Frankfurter Flughafen heute viele Flüge aus. Reisende sollen sich vorher bei ihrer Fluggesellschaft informieren."
       },
       {
        "q": "Was gibt es beim Lichterfest?",
        "o": [
         "Einen Flohmarkt.",
         "Kostenloses Essen.",
         "Ein Feuerwerk."
        ],
        "a": 2,
        "audio": "Am Samstagabend ist das große Lichterfest am Mainufer. Um 22 Uhr gibt es ein Feuerwerk. Kommen Sie am besten mit Bus und Bahn.",
        "why": "„Um 22 Uhr gibt es ein Feuerwerk.“"
       },
       {
        "q": "Wer bekommt im Zoo Rabatt?",
        "o": [
         "Studenten.",
         "Rentner.",
         "Familien."
        ],
        "a": 2,
        "why": "Familienkarte",
        "audio": "Neu im Zoo: Mit der Familienkarte zahlen zwei Erwachsene und bis zu drei Kinder nur 35 Euro. Das Angebot gilt das ganze Jahr."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Frau ist mit ihrem Zimmer zufrieden.",
        "a": false,
        "why": "Blick zum Parkplatz",
        "audio": "Frau: Guten Tag, ich habe ein Zimmer mit Blick aufs Meer gebucht. Aber mein Zimmer liegt zum Parkplatz.\nMann: Das tut mir leid. Heute ist leider kein anderes Zimmer frei.\nFrau: Und morgen?\nMann: Morgen kann ich Ihnen ein Zimmer mit Meerblick geben. Und heute Abend lade ich Sie zum Abendessen ein."
       },
       {
        "q": "Was bekommt die Frau heute?",
        "o": [
         "Ein Abendessen.",
         "Ein anderes Zimmer.",
         "Ihr Geld zurück."
        ],
        "a": 0,
        "same": true,
        "why": "„heute Abend lade ich Sie zum Abendessen ein“ – ein anderes Zimmer erst morgen"
       },
       {
        "q": "Der Mann fährt mit dem Auto.",
        "a": false,
        "why": "mit dem Zug",
        "audio": "Mann: Hallo Mama, wir kommen am Sonntag zu deinem Geburtstag.\nFrau: Wie schön! Kommt ihr mit dem Auto?\nMann: Nein, mit dem Zug. Kannst du uns um zwölf am Bahnhof abholen?\nFrau: Natürlich. Ich koche dein Lieblingsessen."
       },
       {
        "q": "Was soll die Mutter tun?",
        "o": [
         "Die Familie am Bahnhof abholen.",
         "Ein Hotel buchen.",
         "Einen Kuchen kaufen."
        ],
        "a": 0,
        "same": true,
        "why": "„Kannst du uns um zwölf am Bahnhof abholen?“"
       },
       {
        "q": "Der Koffer ist verloren gegangen und nie gekommen.",
        "a": false,
        "why": "zwei Tage später",
        "audio": "Frau: Du, Ahmed, wie war euer Urlaub in Spanien?\nMann: Sehr schön, aber am Anfang hatten wir Pech. Unser Koffer ist nicht angekommen.\nFrau: Oh nein! Und dann?\nMann: Er kam zwei Tage später ins Hotel. Bis dahin mussten wir neue Kleidung kaufen. Die Fluggesellschaft hat das aber bezahlt."
       },
       {
        "q": "Wer hat die neue Kleidung bezahlt?",
        "o": [
         "Ahmed selbst.",
         "Die Fluggesellschaft.",
         "Das Hotel."
        ],
        "a": 1,
        "same": true,
        "why": "„Die Fluggesellschaft hat das aber bezahlt.“"
       },
       {
        "q": "Der Mann ist in einer Touristeninformation.",
        "a": true,
        "why": "Empfehlung für einen Ausflug",
        "audio": "Mann: Guten Tag, wir möchten am Wochenende einen Ausflug machen. Was können Sie empfehlen?\nFrau: Mit Kindern? Dann fahren Sie doch in den Freizeitpark am See. Es gibt einen Bus direkt vom Bahnhof.\nMann: Wie viel kostet der Eintritt?\nFrau: Kinder unter vier Jahren sind frei, Erwachsene zahlen 25 Euro."
       },
       {
        "q": "Wie kommt man zum Freizeitpark?",
        "o": [
         "Mit dem Schiff.",
         "Mit dem Bus vom Bahnhof.",
         "Nur mit dem Auto."
        ],
        "a": 1,
        "same": true,
        "why": "„Es gibt einen Bus direkt vom Bahnhof.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Feste und Feiertage",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Feste sind vor allem für die Kinder schön.",
       "Man sollte die Feste aus dem Heimatland weiter feiern.",
       "Weihnachten ist zu kommerziell geworden.",
       "Feste verbinden Menschen aus verschiedenen Kulturen.",
       "Große Feiern kosten zu viel Geld.",
       "An Feiertagen möchte ich einfach nur ausruhen."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 3,
        "why": "Freunde aus vielen Ländern feiern zusammen",
        "audio": "Bei uns im Haus wohnen Menschen aus zehn Ländern. Im Dezember feiern wir alle zusammen – Weihnachten, aber auch andere Feste. Da lernt man so viel voneinander."
       },
       {
        "q": "Aussage 2",
        "a": 1,
        "why": "Diwali in Deutschland weiterfeiern",
        "audio": "Für mich ist es wichtig, dass meine Kinder unsere Feste kennen. Wir feiern hier in Deutschland weiter Diwali mit Lichtern und Süßigkeiten. Sonst vergessen sie, woher sie kommen."
       },
       {
        "q": "Aussage 3",
        "a": 2,
        "why": "Geschenke ab September im Geschäft",
        "audio": "Schon im September gibt es im Supermarkt Lebkuchen und Weihnachtsdeko. Alle denken nur noch an Geschenke und Geld ausgeben. Das finde ich schade."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Hotel Seeblick – Information für Gäste\nErdgeschoss: Rezeption (24 Stunden) · Gepäckraum · Restaurant „Meerblick“ (Frühstück 7–10 Uhr)\n1. Stock: Konferenzräume · Kinderclub (täglich 9–17 Uhr)\n2.–4. Stock: Gästezimmer\n5. Stock: Wellnessbereich (Sauna, Massage) · Fitnessraum\nUntergeschoss: Tiefgarage · Fahrradverleih · Waschmaschinen für Gäste",
      "items": [
       {
        "q": "Sie möchten nach dem Auschecken noch Ihren Koffer abgeben.",
        "o": [
         "1. Stock",
         "Erdgeschoss",
         "Untergeschoss"
        ],
        "a": 1,
        "why": "Gepäckraum"
       },
       {
        "q": "Ihre Kinder möchten mit anderen Kindern spielen.",
        "o": [
         "1. Stock",
         "5. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "Kinderclub"
       },
       {
        "q": "Sie möchten eine Massage buchen.",
        "o": [
         "Erdgeschoss",
         "5. Stock",
         "1. Stock"
        ],
        "a": 1,
        "why": "Wellnessbereich"
       },
       {
        "q": "Sie möchten ein Fahrrad für einen Ausflug leihen.",
        "o": [
         "5. Stock",
         "Untergeschoss",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Fahrradverleih"
       },
       {
        "q": "Sie müssen Ihre Kleidung waschen.",
        "o": [
         "2.–4. Stock",
         "5. Stock",
         "Untergeschoss"
        ],
        "a": 2,
        "why": "Waschmaschinen"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Reisebüro Weltweit: Pauschalreisen, auch Last-Minute-Angebote.",
       "Fernbus Direkt: von Frankfurt nach Istanbul, Warschau und Bukarest.",
       "Ferienwohnung an der Ostsee: für Familien mit Kindern, Haustiere erlaubt.",
       "Sprachreisen: Englisch lernen in London, mit Gastfamilie.",
       "Reiseversicherung: Schutz bei Krankheit im Ausland, ab 12 Euro im Jahr.",
       "Passbilder sofort: biometrische Fotos für Pass und Visum.",
       "Campingplatz am See: Zelte und Wohnwagen, Duschen, kleiner Laden.",
       "Hundepension: Ihr Hund wird liebevoll betreut, während Sie verreisen."
      ],
      "items": [
       {
        "q": "Sie fliegen in die Türkei und möchten bei Krankheit dort abgesichert sein.",
        "a": 4,
        "why": "Reiseversicherung"
       },
       {
        "q": "Sie brauchen neue Fotos für Ihren Reisepass.",
        "a": 5,
        "why": "Passbilder"
       },
       {
        "q": "Sie fahren in Urlaub, können Ihren Hund aber nicht mitnehmen.",
        "a": 7,
        "why": "Hundepension"
       },
       {
        "q": "Sie möchten günstig mit dem Bus Ihre Familie in Polen besuchen.",
        "a": 1,
        "why": "Fernbus nach Warschau"
       },
       {
        "q": "Sie suchen einen Babysitter für Ihren Urlaub im Hotel.",
        "a": -1,
        "why": "x – keine Kinderbetreuung"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Man kann sein Fahrrad im Ersatzbus mitnehmen.",
        "a": false,
        "why": "leider nicht",
        "text": "Liebe Fahrgäste,\nwegen Bauarbeiten fahren zwischen Frankfurt und Mannheim vom 1. bis 14. August keine Züge. Bitte nutzen Sie die Ersatzbusse ab dem Hauptbahnhof. Die Fahrt dauert etwa 40 Minuten länger. Fahrräder können in den Bussen leider nicht mitgenommen werden."
       },
       {
        "q": "Die Fahrt mit dem Ersatzbus …",
        "o": [
         "kostet mehr.",
         "dauert länger.",
         "ist nur nachts möglich."
        ],
        "a": 1,
        "why": "40 Minuten länger",
        "same": true
       },
       {
        "q": "Handtücher muss man selbst mitbringen.",
        "a": false,
        "why": "im Preis enthalten",
        "text": "Liebe Familie Weber,\nwir freuen uns, Sie vom 3. bis 10. Juli in unserer Ferienwohnung begrüßen zu dürfen. Die Schlüssel liegen ab 15 Uhr in einem Kasten neben der Haustür, den Code schicken wir Ihnen per SMS. Bettwäsche und Handtücher sind im Preis enthalten. Bitte verlassen Sie die Wohnung am Abreisetag bis 10 Uhr.\nFamilie Jensen"
       },
       {
        "q": "Den Schlüssel …",
        "o": [
         "holt man aus einem Kasten.",
         "bekommt man von Familie Jensen.",
         "schickt man per Post zurück."
        ],
        "a": 0,
        "same": true,
        "why": "„Die Schlüssel liegen … in einem Kasten neben der Haustür“"
       },
       {
        "q": "Lena und David wünschen sich Geld für ihre Reise.",
        "a": true,
        "why": "Beitrag für die Hochzeitsreise",
        "text": "Einladung zur Hochzeit\nWir heiraten! Am Samstag, 20. September, um 14 Uhr im Standesamt Höchst. Danach feiern wir im Restaurant „Zum Löwen“. Bitte sagt uns bis 15. August Bescheid, ob ihr kommt. Statt Geschenken freuen wir uns über einen Beitrag für unsere Hochzeitsreise.\nLena und David"
       },
       {
        "q": "Die Gäste sollen …",
        "o": [
         "um 20 Uhr kommen.",
         "bis Mitte August antworten.",
         "ein Geschenk mitbringen."
        ],
        "a": 1,
        "same": true,
        "why": "„Bitte sagt uns bis 15. August Bescheid“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Reisebedingungen – Busreisen Sonnenschein (Auszug)\nAnmeldung: Mit der Anmeldung zahlen Sie 20 Prozent des Reisepreises an. Den Rest zahlen Sie spätestens vier Wochen vor der Reise.\nRücktritt: Sie können jederzeit von der Reise zurücktreten. Bis 30 Tage vor Reisebeginn kostet das 10 Prozent des Preises, danach 50 Prozent. Wir empfehlen eine Reiserücktrittsversicherung.\nGepäck: Pro Person sind ein Koffer (max. 20 kg) und eine kleine Tasche erlaubt.\nAbfahrt: Bitte seien Sie 15 Minuten vor der Abfahrt am Treffpunkt. Wer zu spät kommt, kann nicht mitfahren – der Reisepreis wird nicht zurückgezahlt.",
      "items": [
       {
        "q": "Bei der Anmeldung muss man den ganzen Preis bezahlen.",
        "a": false,
        "why": "20 Prozent"
       },
       {
        "q": "Wer eine Woche vor der Reise absagt, zahlt die Hälfte des Preises.",
        "a": true,
        "why": "danach 50 Prozent"
       },
       {
        "q": "Man darf zwei große Koffer mitnehmen.",
        "a": false,
        "why": "ein Koffer"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Elif,\nherzliche Grüße aus Hamburg! Wir sind seit Montag hier und es gefällt (1) sehr gut. Das Wetter ist zwar etwas kühl, (2) es regnet nicht. Gestern haben wir eine Hafenrundfahrt gemacht – das war wunderschön! Heute wollen wir ins Museum gehen, (3) die Kinder sich für Schiffe interessieren. Unser Hotel liegt sehr zentral, (4) können wir fast alles zu Fuß erreichen. Am Samstag fahren wir wieder (5) Hause. Wollen wir uns nächste Woche treffen? Dann zeige ich dir die Fotos. Ich (6) dir auch ein kleines Geschenk mit.\nViele Grüße\nAyşe",
      "items": [
       {
        "n": 1,
        "o": [
         "unser",
         "wir",
         "uns"
        ],
        "a": 2,
        "why": "es gefällt + Dativ"
       },
       {
        "n": 2,
        "o": [
         "aber",
         "denn",
         "oder"
        ],
        "a": 0,
        "why": "Gegensatz"
       },
       {
        "n": 3,
        "o": [
         "trotzdem",
         "deshalb",
         "weil"
        ],
        "a": 2,
        "why": "Grund"
       },
       {
        "n": 4,
        "o": [
         "weil",
         "deshalb",
         "obwohl"
        ],
        "a": 1,
        "why": "Folge, Verb auf Position 2"
       },
       {
        "n": 5,
        "o": [
         "nach",
         "zu",
         "bei"
        ],
        "a": 0,
        "why": "nach Hause"
       },
       {
        "n": 6,
        "o": [
         "gebe",
         "nehme",
         "bringe"
        ],
        "a": 2,
        "why": "mitbringen"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Eine Freundin hat Sie zu ihrem Geburtstag eingeladen. Sie können nicht kommen. Schreiben Sie ihr.",
      "points": [
       "Dank für die Einladung",
       "Warum Sie nicht kommen können",
       "Glückwünsche",
       "Vorschlag für ein Treffen"
      ],
      "model": "Liebe Olga,\nvielen Dank für deine Einladung zu deinem Geburtstag! Ich habe mich sehr darüber gefreut.\nLeider kann ich am Samstag nicht kommen, weil wir an diesem Wochenende zu meinem Bruder nach Berlin fahren. Er hat gerade ein Baby bekommen, und wir wollen es kennenlernen.\nIch wünsche dir alles Gute zum Geburtstag, vor allem Gesundheit und viel Glück! Feiert schön!\nWie wäre es, wenn wir uns nächste Woche zum Kaffee treffen? Dann bringe ich dir dein Geschenk mit. Passt dir Mittwochnachmittag?\nLiebe Grüße\nSuresh",
      "keys": [
       [
        "dank|einladung|gefreut",
        "Vielen Dank für deine Einladung!"
       ],
       [
        "leider|kann nicht|weil|denn|keine zeit|fahren|arbeit",
        "Leider kann ich nicht kommen, weil wir nach Berlin fahren."
       ],
       [
        "alles gute|glückwunsch|gratulier|gesundheit|glück|wünsche",
        "Ich wünsche dir alles Gute zum Geburtstag!"
       ],
       [
        "wie wäre|treffen|nächste woche|mittwoch|donnerstag|kaffee|vorschlag",
        "Wollen wir uns nächste Woche zum Kaffee treffen?"
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie waren mit Ihrer Familie in einem Hotel. Sie waren nicht zufrieden. Schreiben Sie an das Hotel.",
       "points": [
        "Grund für Ihr Schreiben",
        "Was war das Problem?",
        "Was haben Sie an der Rezeption gesagt?",
        "Was erwarten Sie jetzt?"
       ],
       "model": "Sehr geehrte Damen und Herren,\nvom 3. bis 7. August war ich mit meiner Familie in Ihrem Hotel. Leider waren wir sehr unzufrieden und möchten uns beschweren.\nWir hatten ein Familienzimmer mit Balkon gebucht, aber unser Zimmer war klein und hatte keinen Balkon. Außerdem war die Dusche kaputt, und nachts war es wegen der Straße sehr laut.\nIch habe schon am ersten Tag an der Rezeption Bescheid gesagt. Man hat uns versprochen, die Dusche zu reparieren, aber nichts ist passiert.\nIch erwarte, dass Sie uns einen Teil des Preises zurückzahlen. Bitte antworten Sie mir bis Ende des Monats.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "beschwer|unzufrieden|schreibe|hotel|gewohnt|waren",
         "Wir waren in Ihrem Hotel und möchten uns beschweren."
        ],
        [
         "kaputt|laut|schmutzig|klein|kein balkon|dusche|problem|zimmer",
         "Das Zimmer war klein, die Dusche war kaputt und es war laut."
        ],
        [
         "rezeption|gesagt|bescheid|beschwert|versprochen",
         "Ich habe an der Rezeption Bescheid gesagt, aber nichts ist passiert."
        ],
        [
         "erwarte|zurück|geld|preis|entschädig|gutschein|antwort",
         "Ich erwarte, dass Sie einen Teil des Preises zurückzahlen."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Popescu. Ich bin in Rumänien geboren, in Cluj. Ich wohne seit einem Jahr in Gießen. Ich bin Lkw-Fahrerin und viel unterwegs. Ich bin verheiratet, und mein Sohn ist schon erwachsen. Ich spreche Rumänisch, Ungarisch und Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Sie sind in Indien geboren. Wie oft besuchen Sie Ihr Heimatland?"
       },
       {
        "you": "Erzähl, wie oft du dein Heimatland besuchst und was du dort machst.",
        "min": 15,
        "key": [
         [
          "jahr|mal|oft|selten|sommer|winter",
          "wie oft"
         ],
         [
          "familie|eltern|besuche|fliege|reise",
          "was / wen"
         ]
        ],
        "model": "Ich fliege ungefähr einmal im Jahr nach Indien, meistens im Dezember. Dann besuche ich meine Eltern und meine Schwestern. Wir feiern zusammen und essen sehr viel."
       },
       {
        "who": "Prüferin",
        "say": "Was vermissen Sie aus Ihrem Heimatland?"
       },
       {
        "you": "Sag, was du aus deinem Heimatland vermisst – und warum.",
        "min": 12,
        "key": [
         [
          "vermisse|fehlt|fehlen",
          "vermissen"
         ],
         [
          "familie|essen|wetter|freunde|feste|sonne",
          "was"
         ]
        ],
        "model": "Ich vermisse vor allem meine Familie und das Essen von meiner Mutter. Und im Winter vermisse ich die Sonne, weil es in Deutschland so früh dunkel wird."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Feste feiern. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-7.jpg",
         "alt": "Eine Familie am Tisch: Eine Mutter, ein Vater und zwei kleine Mädchen essen zusammen. Auf dem Tisch stehen Schüsseln mit Essen, Wassermelone, Gläser und eine Sonnenblume.",
         "by": "Tyson",
         "link": "https://unsplash.com/photos/familie-isst-zu-hause-zu-abend-gorbBYbo6KM"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "familie|tisch|essen|mutter|vater|kinder|mädchen|schüssel|melone|blume|lachen|zusammen",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich eine Familie am Tisch: eine Mutter, einen Vater und zwei kleine Mädchen. Auf dem Tisch stehen viele Schüsseln mit Essen und eine Wassermelone. Alle lachen und sehen glücklich aus. Vielleicht feiern sie etwas Kleines, oder es ist einfach ein schöner Sonntag zu Hause."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto ist eine Hochzeit. Die Braut trägt ein weißes Kleid, und viele Gäste tanzen. Es sieht sehr fröhlich aus."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Welche Feste feiern Sie mit Ihrer Familie?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "fest|feiern|feier|geburtstag|weihnachten|diwali|hochzeit",
          "zum Thema"
         ]
        ],
        "model": "Wir feiern Diwali, das Lichterfest, und natürlich die Geburtstage. Hier in Deutschland feiern wir auch ein bisschen Weihnachten, weil die Kinder das aus der Schule kennen."
       },
       {
        "who": "Prüferin",
        "say": "Wie feiert man in Ihrem Heimatland? Was ist anders als in Deutschland?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien sind Feste sehr groß und laut. Bei einer Hochzeit kommen oft 500 Gäste, und man feiert mehrere Tage. In Deutschland sind die Feiern kleiner und ruhiger. Ich finde beides schön, aber manchmal vermisse ich die großen Feste."
       },
       {
        "who": "Anna",
        "say": "Bei uns in Rumänien sind Hochzeiten auch sehr groß – mit viel Musik und Tanz."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihre Deutschlehrerin hat bald Geburtstag. Sie möchten mit dem Kurs eine Überraschung planen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Was für eine Überraschung? · Wann? · Geschenk · Wer organisiert was?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihre Deutschlehrerin hat bald Geburtstag. Sie möchten mit dem Kurs eine Überraschung planen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Was für eine Überraschung? · Wann? · Geschenk · Wer organisiert was?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unsere Lehrerin hat nächsten Dienstag Geburtstag. Wollen wir ihr eine Überraschung machen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, unbedingt! Sie hilft uns so viel. Wir könnten in der Pause einen Kuchen mitbringen und ein Lied singen."
       },
       {
        "who": "Anna",
        "say": "Schön! Und was schenken wir ihr?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "überraschung|geburtstag|geschenk|kuchen|blumen|karte|kurs|pause|lehrerin|lied",
          "zum Plan"
         ]
        ],
        "model": "Wie wäre es mit Blumen und einer Karte, auf die alle etwas schreiben? Wir könnten auch etwas Typisches aus unseren Ländern schenken."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Wer kümmert sich um was?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kaufe die Blumen und bringe den Kuchen mit. Kannst du die Karte organisieren und alle im Kurs fragen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "überraschung|geburtstag|geschenk|kuchen|blumen|karte|kurs|pause|lehrerin|lied",
          "Plan"
         ]
        ],
        "model": "Also, am Dienstag überraschen wir unsere Lehrerin in der Pause. Wir singen ein Lied und es gibt Kuchen. Ich kaufe Blumen und bringe den Kuchen, und du kümmerst dich um die Karte vom ganzen Kurs."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-3",
  "title": "Modelltest 4",
  "level": "mittel",
  "sub": "Bürgerbüro, Bus und Bahn, Führerschein · Beschwerde an den Verkehrsverbund / Brief an eine Fahrschule",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Kim tun?",
        "o": [
         "Ein Foto schicken.",
         "Einen Termin absagen.",
         "Seinen neuen Pass abholen."
        ],
        "a": 2,
        "why": "„Ihr Reisepass ist fertig“",
        "audio": "Guten Tag, Herr Kim, hier ist das Bürgerbüro. Ihr neuer Reisepass ist fertig. Sie können ihn ab morgen zu unseren Öffnungszeiten abholen. Bringen Sie bitte den alten Pass mit."
       },
       {
        "q": "Wann beginnt der Kurs?",
        "o": [
         "Eine Woche später.",
         "Wie geplant am Montag.",
         "Erst im nächsten Monat."
        ],
        "a": 0,
        "why": "nicht am 3., sondern am 10. März",
        "audio": "Hallo Frau Ivanova, hier ist die Volkshochschule. Ihr Integrationskurs beginnt nicht am 3. März, sondern eine Woche später, am 10. März. Die Uhrzeit bleibt gleich."
       },
       {
        "q": "Was ist mit dem Zug nach Kassel?",
        "o": [
         "Er fällt aus.",
         "Er hat 20 Minuten Verspätung.",
         "Er fährt von Gleis 7."
        ],
        "a": 0,
        "audio": "Achtung an Gleis 4: Der Regionalexpress nach Kassel fällt heute leider aus. Bitte nehmen Sie den nächsten Zug um 10 Uhr 15 von Gleis 6.",
        "why": "„Der Regionalexpress nach Kassel fällt heute leider aus.“"
       },
       {
        "q": "Sie haben Ihr Handy im Bus vergessen. Was sollen Sie tun?",
        "o": [
         "Den Busfahrer anrufen.",
         "Zum Fundbüro gehen.",
         "Die Taste 1 drücken."
        ],
        "a": 1,
        "why": "Fundsachen → Fundbüro am Hauptbahnhof",
        "audio": "Hier ist der Kundenservice der Verkehrsgesellschaft. Für Fahrplanauskünfte drücken Sie bitte die 1. Fundsachen geben unsere Fahrer im Fundbüro am Hauptbahnhof ab. Dort können Sie sie montags bis freitags abholen."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um Musik aus aller Welt.",
         "Um Kochen mit Kindern.",
         "Um das Leben in einer neuen Stadt."
        ],
        "a": 2,
        "audio": "Heute in „Neu hier“: Menschen, die in den letzten Jahren in unsere Stadt gezogen sind, erzählen, wie sie sich eingelebt haben und was ihnen geholfen hat.",
        "why": "„Menschen, die … in unsere Stadt gezogen sind, erzählen, wie sie sich eingelebt haben“"
       },
       {
        "q": "Wie wird das Wetter heute Abend?",
        "o": [
         "Es schneit.",
         "Es wird sonnig.",
         "Es gibt Gewitter."
        ],
        "a": 2,
        "audio": "Das Wetter: Heute Vormittag noch sonnig und heiß. Ab dem Abend ziehen von Westen starke Gewitter auf. Bitte bleiben Sie dann möglichst im Haus.",
        "why": "„Ab dem Abend ziehen … starke Gewitter auf.“ – sonnig nur am Vormittag"
       },
       {
        "q": "Die U-Bahn-Linie 4 …",
        "o": [
         "fährt heute nur bis zur Messe.",
         "fährt jetzt alle fünf Minuten.",
         "fährt am Wochenende nicht."
        ],
        "a": 2,
        "why": "Bauarbeiten am Wochenende",
        "audio": "Wegen Bauarbeiten fährt die U-Bahn-Linie 4 am kommenden Wochenende nicht. Zwischen Hauptbahnhof und Bornheim fahren Ersatzbusse."
       },
       {
        "q": "Was gibt es ab Januar?",
        "o": [
         "Ein günstiges Ticket für Bus und Bahn.",
         "Einen neuen Bahnhof.",
         "Mehr Parkplätze in der Stadt."
        ],
        "a": 0,
        "why": "Monatskarte für 49 Euro",
        "audio": "Ab Januar gibt es ein neues Monatsticket für Bus und Bahn. Für nur 49 Euro im Monat können Sie damit in ganz Deutschland im Nahverkehr fahren."
       },
       {
        "q": "Was können Besucher beim Tag der offenen Tür machen?",
        "o": [
         "Ihren Ausweis abholen.",
         "Das Rathaus besichtigen.",
         "Kostenlos Bus fahren."
        ],
        "a": 1,
        "audio": "Am Samstag lädt die Stadt zum Tag der offenen Tür ins Rathaus ein. Besucher können das Büro der Bürgermeisterin besichtigen und mit den Mitarbeitern sprechen.",
        "why": "„Besucher können das Büro der Bürgermeisterin besichtigen“"
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Frau ist im richtigen Bus.",
        "a": false,
        "why": "Sie braucht die 30.",
        "audio": "Frau: Entschuldigung, fährt dieser Bus zum Krankenhaus?\nMann: Nein, das ist die Linie 36. Sie brauchen die 30.\nFrau: Oh. Und wo hält die 30?\nMann: Gleich dort drüben, auf der anderen Straßenseite. Sie fährt alle zehn Minuten.\nFrau: Vielen Dank!"
       },
       {
        "q": "Wo hält die Linie 30?",
        "o": [
         "Vor dem Krankenhaus.",
         "Am Bahnhof.",
         "Auf der anderen Straßenseite."
        ],
        "a": 2,
        "same": true,
        "why": "„Gleich dort drüben, auf der anderen Straßenseite.“"
       },
       {
        "q": "Der Mann lebt seit acht Monaten in Deutschland.",
        "a": true,
        "audio": "Mann: Guten Tag, ich möchte meinen Führerschein umschreiben lassen. Ich habe einen indischen Führerschein.\nFrau: Wie lange leben Sie schon in Deutschland?\nMann: Seit acht Monaten.\nFrau: Dann müssen Sie leider eine Prüfung machen. Melden Sie sich am besten bei einer Fahrschule an.",
        "why": "„Seit acht Monaten.“"
       },
       {
        "q": "Was muss der Mann tun?",
        "o": [
         "Nichts – er kann einfach fahren.",
         "Ein Formular online schicken.",
         "Sich bei einer Fahrschule anmelden."
        ],
        "a": 2,
        "same": true,
        "why": "„Melden Sie sich am besten bei einer Fahrschule an.“"
       },
       {
        "q": "Ali kann nicht mit dem Auto fahren.",
        "a": true,
        "why": "Werkstatt",
        "audio": "Frau: Du, Ali, kommst du heute Abend mit ins Kino?\nMann: Ich würde gern, aber mein Auto ist in der Werkstatt.\nFrau: Kein Problem, wir können doch mit der S-Bahn fahren. Das Kino ist direkt am Bahnhof.\nMann: Stimmt! Dann treffen wir uns um sieben am Bahnhof?"
       },
       {
        "q": "Wie fahren die beiden?",
        "o": [
         "Mit dem Fahrrad.",
         "Mit dem Taxi.",
         "Mit der S-Bahn."
        ],
        "a": 2,
        "same": true,
        "why": "„wir können doch mit der S-Bahn fahren“ – das Auto ist in der Werkstatt"
       },
       {
        "q": "Der Mann soll 30 Euro bezahlen.",
        "a": true,
        "audio": "Mann: Guten Tag, ich habe einen Brief von der Stadt bekommen. Ich soll 30 Euro zahlen, weil ich falsch geparkt habe.\nFrau: Zeigen Sie mal. Ja, Sie haben im Halteverbot gestanden.\nMann: Aber dort war kein Schild!\nFrau: Dann können Sie schriftlich Widerspruch einlegen. Machen Sie am besten ein Foto von der Straße.",
        "why": "„Ich soll 30 Euro zahlen, weil ich falsch geparkt habe.“"
       },
       {
        "q": "Was empfiehlt die Frau?",
        "o": [
         "Sofort bezahlen.",
         "Einen Anwalt anrufen.",
         "Schriftlich Widerspruch einlegen."
        ],
        "a": 2,
        "same": true,
        "why": "„Dann können Sie schriftlich Widerspruch einlegen.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Mit dem Auto oder mit dem Fahrrad in die Stadt?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Ohne Auto geht es auf dem Land nicht.",
       "Busse und Bahnen sind zu teuer.",
       "In der Stadt ist das Fahrrad am schnellsten.",
       "Es gibt zu wenige sichere Radwege.",
       "Autos sollten nicht mehr ins Zentrum fahren dürfen.",
       "Carsharing ist eine gute Lösung."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "mit dem Rad in 15 Minuten, mit dem Auto im Stau",
        "audio": "Ich fahre jeden Tag mit dem Rad zur Arbeit. Ich brauche 15 Minuten. Meine Kollegen mit dem Auto stehen im Stau und suchen dann noch einen Parkplatz."
       },
       {
        "q": "Aussage 2",
        "a": 0,
        "why": "Dorf, Bus fährt zweimal am Tag",
        "audio": "Wir wohnen in einem kleinen Dorf. Der Bus fährt nur zweimal am Tag. Ich muss die Kinder zur Schule bringen und dann zur Arbeit fahren – ohne Auto könnte ich das nicht."
       },
       {
        "q": "Aussage 3",
        "a": 3,
        "why": "gefährlich, keine Radwege",
        "audio": "Ich würde gern mehr Fahrrad fahren, aber in unserer Straße gibt es keinen Radweg. Die Autos fahren sehr schnell. Das ist mir zu gefährlich, besonders mit meinem Sohn."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Hauptbahnhof – Wegweiser\nUntergeschoss: S-Bahn · U-Bahn · Toiletten · Schließfächer\nErdgeschoss: Reisezentrum (Fahrkarten, Beratung) · Information · Bäckerei · Zeitschriften\nGleis 1–12: Fernverkehr (ICE, IC) und Regionalverkehr\n1. Stock: Fundbüro · Bahnhofsmission (Hilfe für Reisende) · Polizei\nVorplatz: Taxi · Busbahnhof · Fahrradparkhaus",
      "items": [
       {
        "q": "Sie möchten Ihren Koffer für ein paar Stunden abgeben.",
        "o": [
         "Untergeschoss",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "Schließfächer"
       },
       {
        "q": "Sie brauchen eine Fahrkarte und Beratung für eine lange Reise.",
        "o": [
         "Erdgeschoss",
         "Untergeschoss",
         "Vorplatz"
        ],
        "a": 0,
        "why": "Reisezentrum"
       },
       {
        "q": "Sie haben Ihren Schal im Zug vergessen.",
        "o": [
         "Untergeschoss",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Fundbüro"
       },
       {
        "q": "Sie möchten mit dem Fernbus fahren.",
        "o": [
         "Erdgeschoss",
         "Vorplatz",
         "Untergeschoss"
        ],
        "a": 1,
        "why": "Busbahnhof"
       },
       {
        "q": "Sie fahren mit der U-Bahn weiter.",
        "o": [
         "1. Stock",
         "Untergeschoss",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "„Untergeschoss: S-Bahn · U-Bahn“"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Fahrschule Grün: Führerschein Klasse B, Theorie auch auf Englisch und Arabisch.",
       "Fahrradwerkstatt: Reparatur in 24 Stunden, auch E-Bikes.",
       "Carsharing Stadtmobil: Autos stundenweise mieten, ab 3 € pro Stunde.",
       "Taxi-Zentrale: rund um die Uhr, auch Großraumtaxis.",
       "Gebrauchtwagen-Markt: jeden Sonntag auf dem Messegelände.",
       "Kfz-Versicherung: günstig wechseln, Angebot in 5 Minuten.",
       "Seniorenfahrdienst: Fahrten zum Arzt und zum Einkaufen für ältere Menschen.",
       "Radfahrkurs für Frauen: Fahrradfahren lernen in kleinen Gruppen."
      ],
      "items": [
       {
        "q": "Ihre Mutter (78) kann nicht mehr gut laufen und muss zum Arzt.",
        "a": 6,
        "why": "Seniorenfahrdienst"
       },
       {
        "q": "Sie brauchen nur manchmal ein Auto, möchten aber keins kaufen.",
        "a": 2,
        "why": "Carsharing"
       },
       {
        "q": "Ihre Freundin hat nie Fahrrad fahren gelernt.",
        "a": 7,
        "why": "„Fahrradfahren lernen in kleinen Gruppen“"
       },
       {
        "q": "Sie möchten den Führerschein machen, die Theorie aber lieber auf Englisch lernen.",
        "a": 0,
        "why": "„Theorie auch auf Englisch“"
       },
       {
        "q": "Sie möchten Ihr Motorrad verkaufen.",
        "a": -1,
        "why": "x – keine Anzeige für Motorräder"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Ab Juli kann man im Bus mit der Bankkarte bezahlen.",
        "a": true,
        "why": "„mit der Bankkarte direkt beim Fahrer“",
        "text": "Wichtige Information für alle Fahrgäste:\nAb dem 1. Juli können Sie in unseren Bussen nicht mehr mit Bargeld bezahlen. Fahrkarten gibt es dann nur noch am Automaten, in der App oder mit der Bankkarte direkt beim Fahrer. Monatskarten können Sie weiterhin im Kundenzentrum kaufen."
       },
       {
        "q": "Bargeld …",
        "o": [
         "kann man am Automaten nicht benutzen.",
         "braucht man für Monatskarten.",
         "nimmt der Busfahrer nicht mehr an."
        ],
        "a": 2,
        "same": true,
        "why": "„in unseren Bussen nicht mehr mit Bargeld bezahlen“"
       },
       {
        "q": "Man kann einen Termin auch telefonisch machen.",
        "a": true,
        "why": "unter 115",
        "text": "Liebe Bürgerinnen und Bürger,\nwegen der großen Nachfrage vergibt das Bürgerbüro ab sofort Termine nur noch online. Ohne Termin können Sie nur noch in Notfällen kommen, zum Beispiel wenn Ihr Ausweis gestohlen wurde. Wer kein Internet hat, kann einen Termin auch telefonisch unter 115 buchen."
       },
       {
        "q": "Ohne Termin kann man kommen, wenn …",
        "o": [
         "man umgezogen ist.",
         "der Ausweis gestohlen wurde.",
         "man kein Internet hat."
        ],
        "a": 1,
        "same": true,
        "why": "„nur noch in Notfällen …, zum Beispiel wenn Ihr Ausweis gestohlen wurde“"
       },
       {
        "q": "Das Parkhaus ist am Wochenende geschlossen.",
        "a": false,
        "why": "24 Stunden geöffnet",
        "text": "Fahrradparkhaus am Hauptbahnhof\nSicher parken: 600 Plätze, videoüberwacht, 24 Stunden geöffnet. Ein Tag kostet 1 Euro, ein Monat 10 Euro. Im Parkhaus gibt es auch eine kleine Werkstatt, die von Montag bis Freitag von 7 bis 19 Uhr geöffnet ist. Dort können Sie auch Fahrräder leihen."
       },
       {
        "q": "In der Werkstatt kann man …",
        "o": [
         "ein Fahrrad leihen.",
         "ein neues Fahrrad kaufen.",
         "rund um die Uhr Hilfe bekommen."
        ],
        "a": 0,
        "same": true,
        "why": "„Dort können Sie auch Fahrräder leihen.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Tarifbestimmungen – Deutschland-Ticket\nDas Deutschland-Ticket gilt für beliebig viele Fahrten in allen Bussen, Straßenbahnen, U- und S-Bahnen sowie in Regionalzügen in ganz Deutschland. Es gilt nicht in Fernzügen wie ICE oder IC.\nDas Ticket ist ein persönliches Abonnement und kann nicht an andere Personen weitergegeben werden. Bei einer Kontrolle müssen Sie zusammen mit dem Ticket einen Ausweis zeigen.\nDas Abonnement kann bis zum 10. eines Monats zum Monatsende gekündigt werden.\nKinder unter 6 Jahren fahren kostenlos mit. Für ältere Kinder brauchen Sie eine eigene Fahrkarte. Fahrräder können je nach Region kostenlos oder mit einer Zusatzkarte mitgenommen werden.",
      "items": [
       {
        "q": "Mit dem Ticket kann man auch den ICE benutzen.",
        "a": false,
        "why": "nicht in Fernzügen"
       },
       {
        "q": "Der Partner darf das Ticket auch benutzen.",
        "a": false,
        "why": "persönlich, nicht weitergeben"
       },
       {
        "q": "Ein vierjähriges Kind braucht keine Fahrkarte.",
        "a": true,
        "why": "unter 6 Jahren kostenlos"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Nachbarinnen und Nachbarn,\nich heiße Olga und wohne seit drei Wochen (1) zweiten Stock. Am Samstag, 21. Juni, möchte ich meinen Geburtstag feiern. Es (2) also etwas lauter werden – ich hoffe, das ist in Ordnung. Um 23 Uhr machen wir die Musik leiser, (3) ich weiß, dass einige von Ihnen früh aufstehen müssen. Wenn es Probleme gibt, klingeln Sie (4) einfach bei mir. Natürlich sind Sie (5) herzlich eingeladen! Ab 18 Uhr gibt es Essen und Getränke. Ich freue mich, Sie (6) kennenzulernen.\nViele Grüße\nOlga Smirnova",
      "items": [
       {
        "n": 1,
        "o": [
         "im",
         "am",
         "in"
        ],
        "a": 0,
        "why": "im zweiten Stock"
       },
       {
        "n": 2,
        "o": [
         "kann",
         "muss",
         "soll"
        ],
        "a": 0,
        "why": "Möglichkeit"
       },
       {
        "n": 3,
        "o": [
         "aber",
         "obwohl",
         "weil"
        ],
        "a": 2,
        "why": "Grund + Verb am Ende"
       },
       {
        "n": 4,
        "o": [
         "nie",
         "bitte",
         "selten"
        ],
        "a": 1,
        "why": "„klingeln Sie bitte einfach bei mir“ – höfliche Bitte"
       },
       {
        "n": 5,
        "o": [
         "schon",
         "nur",
         "auch"
        ],
        "a": 2,
        "why": "„Natürlich sind Sie auch herzlich eingeladen!“ – nicht nur informiert, auch eingeladen"
       },
       {
        "n": 6,
        "o": [
         "schriftlich",
         "persönlich",
         "telefonisch"
        ],
        "a": 1,
        "why": "„Sie persönlich kennenzulernen“ – von Angesicht zu Angesicht"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Ihr Bus ist in den letzten Wochen oft zu spät gekommen. Schreiben Sie an den Verkehrsverbund.",
      "points": [
       "Grund für Ihr Schreiben",
       "Welche Linie, wann?",
       "Folgen für Sie",
       "Was erwarten Sie?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich schreibe Ihnen, weil ich mit der Buslinie 34 sehr unzufrieden bin.\nIn den letzten drei Wochen ist der Bus um 7.15 Uhr an der Haltestelle Rosenplatz fast jeden Tag 15 bis 20 Minuten zu spät gekommen.\nDeshalb bin ich mehrmals zu spät zur Arbeit gekommen. Mein Chef war sehr unzufrieden, und ich musste länger bleiben.\nIch erwarte, dass der Bus wieder pünktlich fährt. Außerdem möchte ich wissen, ob ich einen Teil meiner Monatskarte zurückbekommen kann.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|beschwer|unzufrieden|ärger|problem|verspät|zu spät",
        "Ich schreibe Ihnen, weil ich mit der Buslinie 34 unzufrieden bin."
       ],
       [
        "linie|bus \\d|\\d+ uhr|haltestelle|morgens|jeden tag|woche",
        "Der Bus um 7.15 Uhr an der Haltestelle Rosenplatz kommt oft zu spät."
       ],
       [
        "arbeit|chef|termin|deshalb|verpass|kind|schule",
        "Deshalb komme ich oft zu spät zur Arbeit."
       ],
       [
        "erwarte|bitte|pünktlich|geld zurück|zurückbekommen|entschädig|möchte",
        "Ich erwarte, dass der Bus wieder pünktlich fährt."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie möchten den Führerschein machen. Schreiben Sie an eine Fahrschule.",
       "points": [
        "Grund für Ihr Schreiben",
        "Ihre Erfahrung mit dem Autofahren",
        "Fragen zu Kosten und Kursen",
        "Wann haben Sie Zeit?"
       ],
       "model": "Sehr geehrte Damen und Herren,\nich möchte bei Ihnen den Führerschein Klasse B machen und bitte um Informationen.\nIch habe in Indien schon einen Führerschein gemacht und bin dort fünf Jahre Auto gefahren. Mein Führerschein gilt in Deutschland aber nicht mehr.\nWie viel kostet der Führerschein ungefähr bei Ihnen? Und kann ich die Theorie auch auf Englisch lernen?\nIch arbeite bis 17 Uhr. Deshalb habe ich nur abends und am Samstag Zeit für Fahrstunden.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "führerschein|fahrschule|anmelden|informationen|schreibe",
         "Ich möchte bei Ihnen den Führerschein machen."
        ],
        [
         "gefahren|fahre|erfahrung|indien|noch nie|schon|jahre",
         "Ich bin in Indien schon fünf Jahre Auto gefahren."
        ],
        [
         "kost|euro|preis|theorie|kurs|englisch|stunden",
         "Wie viel kostet der Führerschein und gibt es die Theorie auf Englisch?"
        ],
        [
         "zeit|abends|samstag|wochenende|nach der arbeit|uhr",
         "Ich habe abends und am Samstag Zeit."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Silva. Ich bin in Brasilien geboren, in Recife. Ich wohne seit zwei Jahren in Mainz. Im Moment arbeite ich als Küchenhilfe in einem Restaurant. Ich bin verheiratet, wir haben noch keine Kinder. Ich spreche Portugiesisch, Spanisch und Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Woher kommt Ihr Name? Hat er eine Bedeutung?"
       },
       {
        "you": "Erzähl etwas über deinen Namen: Woher kommt er, was bedeutet er?",
        "min": 15,
        "key": [
         [
          "name|heißt|bedeutet|bedeutung",
          "Name"
         ],
         [
          "eltern|großvater|vater|mutter|sanskrit|gott|tradition|familie",
          "Herkunft"
         ]
        ],
        "model": "Mein Name Suresh kommt aus dem Sanskrit. Er bedeutet ungefähr „Herr der Götter“. Meine Eltern haben ihn ausgesucht, weil mein Großvater auch so hieß."
       },
       {
        "who": "Prüferin",
        "say": "Welche Sprache sprechen Sie zu Hause?"
       },
       {
        "you": "Sag, welche Sprache ihr zu Hause sprecht und warum.",
        "min": 12,
        "key": [
         [
          "tamil|englisch|deutsch|sprechen|spreche",
          "Sprache"
         ],
         [
          "\\b(weil|denn|damit)\\b",
          "Grund"
         ]
        ],
        "model": "Zu Hause sprechen wir Tamil, weil die Kinder die Sprache ihrer Großeltern nicht vergessen sollen. Mit Freunden sprechen wir oft Englisch oder Deutsch."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Unterwegs in der Stadt. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-3.jpg",
         "alt": "Eine Straße in einer Stadt: Viele Leute fahren auf dem Radweg Fahrrad, eine Frau hat einen Korb am Rad. Auf der Straße fahren ein Lieferwagen und ein Reisebus, ein Schild zeigt Tempo 40.",
         "by": "Alain ROUILLER",
         "link": "https://unsplash.com/photos/menschen-fahren-auf-einer-stadtstrasse-mit-gebauden-und-bus-2UMFiSh27cs"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "fahrrad|rad|radweg|bus|auto|lieferwagen|straße|stadt|leute|schild|häuser",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sieht man eine Straße in einer großen Stadt. Viele Leute fahren auf einem Radweg Fahrrad, eine Frau hat einen Korb am Rad. Auf der Straße fahren ein Lieferwagen und ein Bus. Vielleicht ist es morgens, und die Leute fahren mit dem Rad zur Arbeit."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto ist ein Bahnhof. Viele Menschen warten auf dem Bahnsteig, und auf der Anzeige steht „Verspätung“. Die Leute sehen nicht glücklich aus."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Wie fahren Sie zur Arbeit oder zum Kurs?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "fahre|bus|bahn|auto|fahrrad|zu fuß|minuten",
          "zum Thema"
         ]
        ],
        "model": "Ich fahre meistens mit der S-Bahn zur Arbeit. Das dauert 25 Minuten. Im Sommer fahre ich manchmal mit dem Fahrrad, weil das gesund ist."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist der Verkehr in Ihrem Heimatland? Was finden Sie in Deutschland besser?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien ist der Verkehr sehr chaotisch. Es gibt viele Motorräder und Rikschas, und alle hupen. In Deutschland finde ich besser, dass sich alle an die Regeln halten und dass es so gute Radwege gibt. Aber ich finde die Bahn manchmal zu teuer."
       },
       {
        "who": "Anna",
        "say": "In Brasilien fahren auch fast alle mit dem Auto oder dem Bus – Fahrradfahren ist dort nicht so normal."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Sie möchten mit Ihrer Partnerin einen Tagesausflug mit dem Zug machen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wohin? · Wann? · Welche Fahrkarte? · Was mitnehmen?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Sie möchten mit Ihrer Partnerin einen Tagesausflug mit dem Zug machen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wohin? · Wann? · Welche Fahrkarte? · Was mitnehmen?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wollen wir am Wochenende einen Ausflug machen? Ich möchte gern nach Heidelberg fahren."
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, gern! Heidelberg finde ich schön, weil es dort ein Schloss und eine schöne Altstadt gibt. Wann wollen wir fahren?"
       },
       {
        "who": "Anna",
        "say": "Am Samstag oder am Sonntag? Und welche Fahrkarte nehmen wir?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "ausflug|zug|fahrkarte|ticket|samstag|sonntag|picknick|essen|rhein|heidelberg|mitnehmen",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage den Sonntag vor, weil ich am Samstag arbeite. Wir könnten mit dem Deutschland-Ticket fahren, das habe ich schon. Für dich gibt es vielleicht ein Gruppenticket."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Was nehmen wir mit, und wer kümmert sich um was?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kann ein Picknick vorbereiten, Brötchen und Obst. Kannst du die Zugverbindung heraussuchen? Und wir sollten einen Regenschirm mitnehmen."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "ausflug|zug|fahrkarte|ticket|samstag|sonntag|picknick|essen|rhein|heidelberg|mitnehmen",
          "Plan"
         ]
        ],
        "model": "Also, wir fahren am Sonntag mit dem Zug nach Heidelberg. Ich habe das Deutschland-Ticket, du kaufst eine Fahrkarte. Ich mache das Picknick, und du suchst die Verbindung heraus."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-6",
  "title": "Modelltest 5",
  "level": "mittel",
  "sub": "Nachbarschaft, Müll, Energie · Brief an die Hausverwaltung / Einladung an die Nachbarn",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Ali tun?",
        "o": [
         "Eine Rechnung bezahlen.",
         "Zu Hause bleiben.",
         "Den Zählerstand mitteilen."
        ],
        "a": 2,
        "why": "Zählerstand online oder per Karte",
        "audio": "Guten Tag, Frau Ali, hier sind die Stadtwerke. Wir brauchen bis Ende des Monats Ihren Zählerstand für Strom. Sie können ihn online eingeben oder die Karte zurückschicken."
       },
       {
        "q": "Wann wird der Sperrmüll abgeholt?",
        "o": [
         "Am Donnerstag.",
         "Am Montag.",
         "Am Samstag."
        ],
        "a": 0,
        "audio": "Hallo, hier ist die Abfallberatung. Ihr Termin für die Sperrmüll-Abholung ist am Donnerstag, den 12. Bitte stellen Sie die Sachen erst am Abend vorher an die Straße.",
        "why": "„Ihr Termin für die Sperrmüll-Abholung ist am Donnerstag“"
       },
       {
        "q": "Was ist im Haus kaputt?",
        "o": [
         "Die Haustür.",
         "Der Aufzug.",
         "Die Heizung."
        ],
        "a": 1,
        "audio": "Liebe Mieter, hier spricht der Hausmeister. Der Aufzug ist leider kaputt. Der Techniker kommt morgen. Bitte benutzen Sie bis dahin die Treppe.",
        "why": "„Der Aufzug ist leider kaputt.“"
       },
       {
        "q": "Sie möchten eine neue Mülltonne bestellen. Was tun Sie?",
        "o": [
         "Morgen anrufen.",
         "Die 3 drücken.",
         "Die 1 drücken."
        ],
        "a": 2,
        "why": "Tonnen bestellen → 1",
        "audio": "Willkommen bei der Stadtreinigung. Wenn Sie eine Mülltonne bestellen oder tauschen möchten, drücken Sie die 1. Für Sperrmüll drücken Sie die 2. Für alle anderen Fragen bleiben Sie bitte am Apparat."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Was für eine Sendung hören Sie?",
        "o": [
         "Eine Musiksendung.",
         "Eine Sendung über Umwelt.",
         "Eine Kindersendung."
        ],
        "a": 1,
        "audio": "Hier ist „Grün leben“. Heute zeigen wir Ihnen, wie Sie zu Hause weniger Müll machen – beim Einkaufen, in der Küche und im Bad.",
        "why": "„wie Sie zu Hause weniger Müll machen“ – „Grün leben“"
       },
       {
        "q": "Wie wird das Wetter am Nachmittag?",
        "o": [
         "Es wird heiß.",
         "Es hört auf zu regnen.",
         "Es schneit."
        ],
        "a": 1,
        "audio": "Das Wetter: Am Vormittag noch Regen, am Nachmittag wird es trocken und die Sonne kommt heraus. Höchstwerte 18 Grad.",
        "why": "„am Nachmittag wird es trocken und die Sonne kommt heraus“"
       },
       {
        "q": "In der Kaiserstraße …",
        "o": [
         "ist die Straße gesperrt.",
         "fahren mehr Busse.",
         "gibt es neue Parkplätze."
        ],
        "a": 0,
        "why": "wegen eines Festes",
        "audio": "Wegen des Straßenfestes ist die Kaiserstraße am Samstag von 10 bis 22 Uhr für Autos gesperrt. Busse fahren eine Umleitung."
       },
       {
        "q": "Was können Bürger am Samstag tun?",
        "o": [
         "Kostenlos Strom bekommen.",
         "Neue Mülltonnen abholen.",
         "Beim Aufräumen im Park helfen."
        ],
        "a": 2,
        "audio": "Die Aktion „Saubere Stadt“ sucht Helfer: Am Samstag sammeln wir gemeinsam Müll im Stadtpark. Handschuhe und Säcke bekommen Sie vor Ort.",
        "why": "„Am Samstag sammeln wir gemeinsam Müll im Stadtpark.“"
       },
       {
        "q": "Was gibt es bei den Stadtwerken?",
        "o": [
         "Billigere Busfahrkarten.",
         "Einen Tag der offenen Tür.",
         "Kostenlose Energieberatung."
        ],
        "a": 2,
        "audio": "Hohe Stromrechnung? Die Stadtwerke bieten ab sofort eine kostenlose Energieberatung an. Ein Berater kommt zu Ihnen nach Hause und zeigt, wo Sie sparen können.",
        "why": "„eine kostenlose Energieberatung“"
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Frau Lopez und Herr Krämer sind Nachbarn.",
        "a": true,
        "audio": "Frau: Entschuldigung, Herr Krämer, darf ich Sie kurz stören?\nMann: Natürlich, Frau Lopez.\nFrau: Ihr Hund bellt jeden Tag, wenn Sie bei der Arbeit sind. Mein Baby kann dann nicht schlafen.\nMann: Oh, das wusste ich nicht. Das tut mir leid. Ich frage meine Schwester, ob sie mittags mit ihm spazieren gehen kann.",
        "why": "„Ihr Hund bellt jeden Tag … Mein Baby kann dann nicht schlafen.“ – sie wohnen nebeneinander"
       },
       {
        "q": "Was will Herr Krämer tun?",
        "o": [
         "Zu Hause arbeiten.",
         "Seine Schwester fragen.",
         "Den Hund verkaufen."
        ],
        "a": 1,
        "same": true,
        "why": "„Ich frage meine Schwester, ob sie mittags mit ihm spazieren gehen kann.“"
       },
       {
        "q": "Joghurtbecher kommen in die blaue Tonne.",
        "a": false,
        "why": "gelbe Tonne",
        "audio": "Mann: Du, Elena, in welche Tonne kommen eigentlich Joghurtbecher?\nFrau: In die gelbe Tonne, das ist Verpackung.\nMann: Und alte Zeitungen?\nFrau: Die kommen in die blaue Tonne. Und Glas bringst du zum Container an der Ecke."
       },
       {
        "q": "Wohin bringt man Glas?",
        "o": [
         "Zum Container an der Ecke.",
         "Zum Supermarkt.",
         "In die gelbe Tonne."
        ],
        "a": 0,
        "same": true,
        "why": "„Glas bringst du zum Container an der Ecke.“"
       },
       {
        "q": "Der Mann hat ein Problem in der Küche.",
        "a": false,
        "why": "im Bad",
        "audio": "Frau: Hausverwaltung Schmitt, guten Tag.\nMann: Guten Tag, hier ist Kovač aus der Gartenstraße 4. In meinem Bad ist Schimmel an der Wand.\nFrau: Seit wann haben Sie das?\nMann: Seit ungefähr zwei Wochen. Ich lüfte jeden Tag, aber es wird schlimmer.\nFrau: Ich schicke Ihnen nächste Woche jemanden vorbei."
       },
       {
        "q": "Was macht die Hausverwaltung?",
        "o": [
         "Sie sagt, er soll mehr lüften.",
         "Sie schickt heute einen Handwerker.",
         "Sie schickt nächste Woche jemanden."
        ],
        "a": 2,
        "same": true,
        "why": "„Ich schicke Ihnen nächste Woche jemanden vorbei.“"
       },
       {
        "q": "Das Fest ist am Sonntag.",
        "a": false,
        "why": "am Samstag",
        "audio": "Mann: Hallo, ich bin Jonas aus dem Erdgeschoss. Wir machen am Samstag ein Hoffest. Hast du Lust?\nFrau: Gern! Was soll ich mitbringen?\nMann: Jeder bringt etwas zu essen mit. Getränke kaufen wir zusammen.\nFrau: Dann mache ich einen Salat. Ab wann geht es los?\nMann: Ab drei Uhr."
       },
       {
        "q": "Was bringt die Frau mit?",
        "o": [
         "Einen Kuchen.",
         "Getränke.",
         "Einen Salat."
        ],
        "a": 2,
        "same": true,
        "why": "„Dann mache ich einen Salat.“ – Getränke kaufen alle zusammen"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Nachbarn",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Gute Nachbarn helfen sich gegenseitig.",
       "Ich möchte meine Nachbarn nicht kennen.",
       "In der Stadt kennt man seine Nachbarn kaum.",
       "Lärm ist der häufigste Streit unter Nachbarn.",
       "Ein Fest im Haus bringt die Nachbarn zusammen.",
       "Ältere Nachbarn brauchen mehr Hilfe."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 0,
        "why": "Pakete, Blumen gießen – man hilft sich",
        "audio": "Wir haben tolle Nachbarn. Wenn wir im Urlaub sind, gießen sie unsere Blumen. Und ich nehme ihre Pakete an. So sollte es überall sein."
       },
       {
        "q": "Aussage 2",
        "a": 2,
        "why": "Hochhaus – kennt niemanden",
        "audio": "Ich wohne seit fünf Jahren in einem Hochhaus mit 80 Wohnungen. Ehrlich gesagt kenne ich fast niemanden. Man sagt im Aufzug „Hallo“, mehr nicht."
       },
       {
        "q": "Aussage 3",
        "a": 4,
        "why": "Sommerfest im Hof",
        "audio": "Letzten Sommer haben wir zum ersten Mal ein Fest im Hof gemacht. Seitdem grüßen sich alle, und wir haben sogar eine Chatgruppe. Das Fest hat wirklich viel verändert."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Recyclinghof – Wegweiser\nBereich A: Papier und Pappe · Glas (weiß, grün, braun) · Kleidung und Schuhe\nBereich B: Elektrogeräte (Fernseher, Kühlschränke, Computer) · Batterien · Lampen\nBereich C: Sperrmüll (Möbel, Matratzen, Teppiche)\nBereich D: Grünabfall (Rasen, Äste, Laub)\nBereich E: Sondermüll (Farben, Öl, Chemikalien) – nur samstags\nEingangsbüro: Tausch-Regal (Bücher, Geschirr, Spielzeug zum Mitnehmen)",
      "items": [
       {
        "q": "Sie möchten einen alten Kühlschrank abgeben.",
        "o": [
         "Bereich A",
         "Bereich B",
         "Bereich C"
        ],
        "a": 1,
        "why": "Elektrogeräte"
       },
       {
        "q": "Sie haben im Garten Äste geschnitten.",
        "o": [
         "Bereich A",
         "Bereich D",
         "Bereich C"
        ],
        "a": 1,
        "why": "Grünabfall"
       },
       {
        "q": "Sie haben noch Farbe vom Streichen übrig.",
        "o": [
         "Bereich D",
         "Bereich B",
         "Bereich E"
        ],
        "a": 2,
        "why": "Sondermüll"
       },
       {
        "q": "Sie möchten ein altes Sofa loswerden.",
        "o": [
         "Bereich C",
         "Eingangsbüro",
         "Bereich B"
        ],
        "a": 0,
        "why": "Sperrmüll"
       },
       {
        "q": "Sie suchen kostenlose Kinderbücher.",
        "o": [
         "Bereich C",
         "Bereich A",
         "Eingangsbüro"
        ],
        "a": 2,
        "why": "Tausch-Regal"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Nachbarschaftshilfe: Wir helfen älteren Menschen beim Einkaufen und bei Arztbesuchen.",
       "Gemeinschaftsgarten: Beete zu vergeben, gemeinsam gärtnern, Treffen samstags.",
       "Schlüsseldienst: 24 Stunden, Türöffnung in 30 Minuten.",
       "Energieberatung: kostenlos zu Hause, Tipps zum Strom- und Heizkostensparen.",
       "Babysitter-Börse: Babysitter aus der Nachbarschaft finden.",
       "Mieterverein: Beratung bei Streit mit Vermieter oder Nachbarn.",
       "Kammerjäger: gegen Mäuse, Ratten und Insekten.",
       "Tauschring: Dinge leihen statt kaufen – Bohrmaschine, Leiter, Zelt."
      ],
      "items": [
       {
        "q": "Sie möchten gern Gemüse anbauen, haben aber keinen Garten.",
        "a": 1,
        "why": "Gemeinschaftsgarten"
       },
       {
        "q": "Sie haben sich ausgesperrt.",
        "a": 2,
        "why": "Schlüsseldienst"
       },
       {
        "q": "Ihre Heizkosten sind sehr hoch.",
        "a": 3,
        "why": "Energieberatung"
       },
       {
        "q": "Sie brauchen für einen Tag eine Bohrmaschine.",
        "a": 7,
        "why": "Tauschring"
       },
       {
        "q": "Sie möchten Ihr altes Fahrrad reparieren lassen.",
        "a": -1,
        "why": "x – keine Fahrradwerkstatt"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Fahrräder dürfen im Treppenhaus stehen.",
        "a": false,
        "why": "Fluchtweg muss frei sein",
        "text": "Liebe Hausbewohner,\nimmer wieder stehen Kinderwagen und Fahrräder im Treppenhaus. Das ist gefährlich, weil im Notfall der Fluchtweg frei sein muss. Bitte stellen Sie Fahrräder in den Keller. Für Kinderwagen gibt es ab sofort einen Abstellraum im Erdgeschoss. Den Schlüssel bekommen Sie beim Hausmeister.\nIhre Hausverwaltung"
       },
       {
        "q": "Den Schlüssel für den Abstellraum …",
        "o": [
         "hängt im Keller.",
         "hat der Hausmeister.",
         "bekommt man per Post."
        ],
        "a": 1,
        "same": true,
        "why": "„Den Schlüssel bekommen Sie beim Hausmeister.“"
       },
       {
        "q": "Die Biotonne kostet extra Geld.",
        "a": false,
        "why": "nichts extra",
        "text": "Neue Biotonne für alle Haushalte\nAb März bekommt jeder Haushalt eine braune Biotonne. Hinein gehören Obst- und Gemüsereste, Kaffeefilter und Gartenabfälle. Plastiktüten – auch kompostierbare – sind nicht erlaubt. Die Tonne wird alle zwei Wochen geleert. Sie kostet nichts extra."
       },
       {
        "q": "In die Biotonne darf man …",
        "o": [
         "Plastiktüten werfen.",
         "Kaffeefilter werfen.",
         "Glas werfen."
        ],
        "a": 1,
        "same": true,
        "why": "„Hinein gehören … Kaffeefilter“ – Plastiktüten sind nicht erlaubt"
       },
       {
        "q": "Nach 22 Uhr soll man nicht mehr Wäsche waschen.",
        "a": true,
        "text": "Ruhe, bitte!\nIn letzter Zeit gab es Beschwerden über Lärm am späten Abend. Bitte denken Sie daran: Ab 22 Uhr ist Nachtruhe. Auch Waschmaschinen sollen dann nicht mehr laufen. Wenn Sie eine Feier planen, informieren Sie bitte vorher Ihre Nachbarn mit einem Zettel im Treppenhaus.",
        "why": "„Ab 22 Uhr ist Nachtruhe. Auch Waschmaschinen sollen dann nicht mehr laufen.“"
       },
       {
        "q": "Vor einer Feier soll man …",
        "o": [
         "die Nachbarn informieren.",
         "die Hausverwaltung anrufen.",
         "die Polizei fragen."
        ],
        "a": 0,
        "same": true,
        "why": "„informieren Sie bitte vorher Ihre Nachbarn“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Nebenkostenabrechnung – Erklärungen\nMit der jährlichen Nebenkostenabrechnung zeigen wir Ihnen, wie viel Sie für Heizung, Wasser, Müllabfuhr, Hausreinigung und Hausmeister tatsächlich bezahlt haben. Ihre monatlichen Vorauszahlungen werden davon abgezogen.\nIst das Ergebnis ein Guthaben, überweisen wir Ihnen den Betrag innerhalb von vier Wochen auf Ihr Konto. Ergibt sich eine Nachzahlung, überweisen Sie den Betrag bitte bis zum genannten Datum.\nDie Heizkosten werden nach Ihrem Verbrauch berechnet. Die Kosten für Müll und Hausreinigung werden nach der Größe der Wohnung verteilt.\nSie haben das Recht, die Belege bei der Hausverwaltung einzusehen. Bitte vereinbaren Sie dafür einen Termin.",
      "items": [
       {
        "q": "Ein Guthaben bekommt man bar ausbezahlt.",
        "a": false,
        "why": "Überweisung aufs Konto"
       },
       {
        "q": "Wer mehr heizt, bezahlt mehr Heizkosten.",
        "a": true,
        "why": "nach Verbrauch"
       },
       {
        "q": "Die Belege kann man ohne Termin ansehen.",
        "a": false,
        "why": "Termin vereinbaren"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Damen und Herren,\nich wohne seit zwei Jahren in der Gartenstraße 4, (1) dritten Stock. Ich möchte mich über ein Problem im Haus beschweren. Seit einigen Wochen stehen im Hof viele alte Möbel und Müllsäcke. Das sieht nicht nur schlecht aus, es kommen (2) auch Ratten. Ich habe schon mit einigen Nachbarn gesprochen, aber (3) weiß, wem die Sachen gehören. Könnten Sie bitte dafür sorgen, (4) der Müll abgeholt wird? Vielleicht könnten Sie auch einen Zettel im Treppenhaus aufhängen, (5) alle wissen, wie man Sperrmüll richtig entsorgt. Vielen Dank (6) Ihre Hilfe.\nMit freundlichen Grüßen\nMarta Kovač",
      "items": [
       {
        "n": 1,
        "o": [
         "auf",
         "am",
         "im"
        ],
        "a": 2,
        "why": "im dritten Stock"
       },
       {
        "n": 2,
        "o": [
         "gestern",
         "jetzt",
         "früher"
        ],
        "a": 1,
        "why": "„es kommen jetzt auch Ratten“ – das Problem ist aktuell"
       },
       {
        "n": 3,
        "o": [
         "jemand",
         "jeder",
         "niemand"
        ],
        "a": 2,
        "why": "Gegensatz: aber niemand"
       },
       {
        "n": 4,
        "o": [
         "wenn",
         "dass",
         "ob"
        ],
        "a": 1,
        "why": "dafür sorgen, dass"
       },
       {
        "n": 5,
        "o": [
         "weil",
         "damit",
         "obwohl"
        ],
        "a": 1,
        "why": "Ziel"
       },
       {
        "n": 6,
        "o": [
         "von",
         "über",
         "für"
        ],
        "a": 2,
        "why": "Danke für"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Im Hof Ihres Hauses gibt es keinen Platz für Fahrräder. Schreiben Sie an die Hausverwaltung.",
      "points": [
       "Grund für Ihr Schreiben",
       "Beschreibung des Problems",
       "Ihr Vorschlag",
       "Bitte um Antwort"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich wohne in der Gartenstraße 4 und schreibe Ihnen wegen der Fahrräder in unserem Haus.\nIm Hof gibt es keinen Fahrradständer, und der Keller ist zu klein. Deshalb stehen viele Fahrräder im Treppenhaus oder vor der Haustür. Das ist gefährlich, und mit einem Kinderwagen kommt man kaum durch.\nIch schlage vor, dass im Hof ein überdachter Fahrradständer gebaut wird. Neben den Mülltonnen ist genug Platz.\nBitte teilen Sie mir mit, ob das möglich ist. Viele Nachbarn würden sich sehr freuen.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|wegen|problem|fahrrad|beschwer",
        "Ich schreibe Ihnen wegen der Fahrräder in unserem Haus."
       ],
       [
        "kein platz|treppenhaus|keller|stehen|gefährlich|eng|zu klein",
        "Die Fahrräder stehen im Treppenhaus, weil es keinen Platz gibt."
       ],
       [
        "vorschlag|schlage vor|könnte|fahrradständer|bauen|hof",
        "Ich schlage vor, im Hof einen Fahrradständer zu bauen."
       ],
       [
        "antwort|mitteilen|bescheid|bitte|möglich",
        "Bitte teilen Sie mir mit, ob das möglich ist."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie sind neu im Haus und möchten Ihre Nachbarn zu einem kleinen Fest einladen. Schreiben Sie einen Brief für das Treppenhaus.",
       "points": [
        "Wer Sie sind",
        "Wann und wo ist das Fest?",
        "Was gibt es?",
        "Bitte um Antwort"
       ],
       "model": "Liebe Nachbarinnen und Nachbarn,\nmein Name ist Suresh, und ich wohne seit einem Monat mit meiner Familie im zweiten Stock links.\nWir möchten Sie gern kennenlernen und laden Sie zu einem kleinen Fest ein: am Samstag, 14. Juni, ab 16 Uhr bei uns im Hof.\nEs gibt indisches Essen, Kaffee und Kuchen. Für die Kinder haben wir Spiele vorbereitet. Wenn Sie möchten, bringen Sie gern etwas zu trinken mit.\nBitte sagen Sie uns bis Mittwoch Bescheid, ob Sie kommen – einfach klingeln oder einen Zettel in unseren Briefkasten werfen.\nHerzliche Grüße\nSuresh und Familie",
       "keys": [
        [
         "name ist|ich bin|wir sind|neu|wohne|eingezogen",
         "Ich heiße Suresh und wohne seit einem Monat im zweiten Stock."
        ],
        [
         "samstag|sonntag|freitag|uhr|hof|garten|juni|juli|bei uns|wohnung",
         "Das Fest ist am Samstag ab 16 Uhr im Hof."
        ],
        [
         "essen|kuchen|getränke|kaffee|spiele|musik|grill",
         "Es gibt indisches Essen, Kaffee und Kuchen."
        ],
        [
         "bescheid|antwort|sagen sie|briefkasten|klingeln|bis",
         "Bitte sagen Sie uns bis Mittwoch Bescheid."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Rossi. Ich bin in Italien geboren, in Neapel. Ich wohne seit drei Jahren in Frankfurt-Höchst. Ich arbeite als Köchin in einem Restaurant. Ich bin ledig und habe keine Kinder, aber einen Hund. Ich spreche Italienisch, Englisch und Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Wo haben Sie früher gewohnt? Und wie war das?"
       },
       {
        "you": "Erzähl, wo und wie du früher gewohnt hast.",
        "min": 15,
        "key": [
         [
          "früher|vorher|habe .* gewohnt|in indien",
          "früher"
         ],
         [
          "haus|wohnung|familie|stadt|dorf|groß|klein",
          "wie"
         ]
        ],
        "model": "Früher habe ich in Chennai gewohnt, mit meinen Eltern und meiner Schwester in einem großen Haus. Es war immer laut und voll, weil oft Verwandte zu Besuch waren."
       },
       {
        "who": "Prüferin",
        "say": "Kennen Sie Ihre Nachbarn hier?"
       },
       {
        "you": "Erzähl von deinen Nachbarn.",
        "min": 12,
        "key": [
         [
          "nachbar",
          "Nachbarn"
         ],
         [
          "kenne|nett|grüßen|helfen|sprechen|freundlich",
          "Kontakt"
         ]
        ],
        "model": "Ja, ein paar Nachbarn kenne ich. Die ältere Dame neben uns ist sehr nett. Manchmal nehme ich ihre Pakete an, und sie gießt unsere Blumen, wenn wir im Urlaub sind."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Müll und Umwelt. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-6.jpg",
         "alt": "Vier Mülltonnen an einer grauen Wand: eine gelbe, eine blaue, eine rote und eine grüne. Sie stehen ordentlich nebeneinander auf dem Gehweg.",
         "by": "Pawel Czerwinski",
         "link": "https://unsplash.com/photos/four-assorted-color-trash-bins-beside-gray-wall-RkIsyD_AVvc"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "müll|tonne|mülltonne|gelb|blau|rot|grün|farbe|wand|trennen|recycling",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich vier Mülltonnen in verschiedenen Farben: gelb, blau, rot und grün. Sie stehen ordentlich nebeneinander an einer grauen Wand. Ich glaube, sie sind für die Mülltrennung – zum Beispiel blau für Papier und gelb für Plastik. Vielleicht stehen sie vor einem Wohnhaus oder einer Schule."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sammeln Kinder mit Handschuhen Müll in einem Park. Sie haben große Säcke. Vielleicht ist das eine Aktion von der Schule."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Wie machen Sie das zu Hause mit dem Müll? Wer bringt den Müll raus?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "müll|tonne|trennen|gelb|papier|bio|glas|raus",
          "zum Thema"
         ]
        ],
        "model": "Wir trennen den Müll in der Küche: Papier, Plastik, Bio und Restmüll. Mein Sohn bringt den Müll jeden Abend runter, dafür bekommt er ein bisschen Taschengeld."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das mit dem Müll in Ihrem Heimatland? Wie finden Sie das System in Deutschland?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien wird der Müll in vielen Städten noch nicht getrennt. Oft liegt er auf der Straße. In Deutschland finde ich das System sehr gut, weil man viel recyceln kann. Am Anfang war es aber kompliziert, weil es so viele Tonnen gibt."
       },
       {
        "who": "Anna",
        "say": "Ja, am Anfang wusste ich auch nie, welche Tonne die richtige ist."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: In Ihrem Haus soll es einen gemeinsamen Putztag für den Hof geben. Sie organisieren ihn zusammen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann? · Was muss gemacht werden? · Wer bringt was mit? · Essen danach?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. In Ihrem Haus soll es einen gemeinsamen Putztag für den Hof geben. Sie organisieren ihn zusammen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann? · Was muss gemacht werden? · Wer bringt was mit? · Essen danach?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unser Hof sieht schlimm aus. Wollen wir mit allen Nachbarn einen Putztag machen, vielleicht nächsten Samstag?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, das finde ich gut! Aber Samstag arbeiten einige. Vielleicht lieber Sonntagvormittag, dann können mehr Leute mitmachen."
       },
       {
        "who": "Anna",
        "say": "Okay, Sonntag. Was müssen wir alles machen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "putztag|hof|samstag|sonntag|aufräumen|besen|säcke|handschuhe|essen|grill|nachbarn",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten den Müll einsammeln, die Wege fegen und die Beete sauber machen. Ich schlage vor, dass wir danach zusammen grillen."
       },
       {
        "who": "Anna",
        "say": "Super Idee. Wer besorgt die Sachen, und wer sagt den Nachbarn Bescheid?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kümmere mich um Säcke und Handschuhe. Kannst du einen Zettel ins Treppenhaus hängen? Den Grill kann ich auch mitbringen."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "putztag|hof|samstag|sonntag|aufräumen|besen|säcke|handschuhe|essen|grill|nachbarn",
          "Plan"
         ]
        ],
        "model": "Also, wir machen am Sonntagvormittag einen Putztag im Hof. Wir sammeln Müll, fegen und machen die Beete sauber. Ich bringe Säcke, Handschuhe und den Grill, du hängst einen Zettel auf, und danach grillen wir zusammen."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-5",
  "title": "Modelltest 6",
  "level": "mittel",
  "sub": "Arbeit, Bewerbung, Weiterbildung · Krankmeldung an den Chef / Anfrage zu einem Kurs",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Osei mitbringen?",
        "o": [
         "Seinen Pass.",
         "Seine Zeugnisse.",
         "Ein Foto."
        ],
        "a": 1,
        "why": "„Bringen Sie bitte Ihre Zeugnisse mit.“",
        "audio": "Guten Tag, Herr Osei, hier ist Frau Krause von der Firma Logistik Plus. Wir möchten Sie gern zu einem Vorstellungsgespräch einladen, am Mittwoch um 14 Uhr. Bringen Sie bitte Ihre Zeugnisse mit."
       },
       {
        "q": "Warum ruft die Kollegin an?",
        "o": [
         "Sie ist krank.",
         "Sie kommt früher.",
         "Sie hat einen Termin beim Chef."
        ],
        "a": 0,
        "audio": "Hallo Ben, hier ist Lisa. Ich bin krank und kann heute nicht zur Arbeit kommen. Kannst du bitte um zehn die Besprechung mit dem Kunden übernehmen? Danke dir!",
        "why": "„Ich bin krank und kann heute nicht zur Arbeit kommen.“"
       },
       {
        "q": "Wann ist die Agentur für Arbeit geöffnet?",
        "o": [
         "Vormittags.",
         "Am Samstag.",
         "Nur nachmittags."
        ],
        "a": 0,
        "why": "Montag bis Freitag 8 bis 12.30 Uhr",
        "audio": "Sie sind verbunden mit der Agentur für Arbeit. Unsere Öffnungszeiten: Montag bis Freitag von 8 bis 12 Uhr 30, donnerstags zusätzlich bis 18 Uhr. Termine vereinbaren Sie auch online."
       },
       {
        "q": "Sie möchten Ihren Urlaub beantragen. Was sollen Sie tun?",
        "o": [
         "Eine Woche warten.",
         "Ein Formular ausfüllen.",
         "Den Chef anrufen."
        ],
        "a": 1,
        "why": "Formular im Intranet",
        "audio": "Hallo zusammen, hier ist Frau Weiß aus der Personalabteilung. Bitte denken Sie daran: Urlaub für den Sommer beantragen Sie bis Ende März mit dem Formular im Intranet. Danke!"
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um Arbeit und Beruf.",
         "Um Reisen.",
         "Um Kochen."
        ],
        "a": 0,
        "why": "Jobsuche",
        "audio": "Willkommen zu „Job und Karriere“. Heute erklären wir Ihnen, wie Sie eine gute Bewerbung schreiben und was Sie im Vorstellungsgespräch beachten müssen."
       },
       {
        "q": "Wie wird das Wetter am Montag?",
        "o": [
         "Windig und kühl.",
         "Es schneit.",
         "Heiß und sonnig."
        ],
        "a": 0,
        "audio": "Das Wetter für Montag: viel Wind und kühle 12 Grad, zwischendurch kurze Schauer. Ab Mittwoch wird es wieder freundlicher.",
        "why": "„viel Wind und kühle 12 Grad“"
       },
       {
        "q": "Auf der A3 …",
        "o": [
         "ist der Verkehr frei.",
         "gibt es Glatteis.",
         "fährt ein Auto in die falsche Richtung."
        ],
        "a": 2,
        "why": "Falschfahrer",
        "audio": "Achtung, Autofahrer auf der A3 zwischen Würzburg und Frankfurt: Ein Auto fährt in die falsche Richtung. Bitte fahren Sie ganz rechts und überholen Sie nicht."
       },
       {
        "q": "Was gibt es auf der Messe?",
        "o": [
         "Billige Elektrogeräte.",
         "Informationen über Ausbildungsplätze.",
         "Ein Konzert."
        ],
        "a": 1,
        "audio": "Am Wochenende findet in der Stadthalle die große Ausbildungsmesse statt. Über 100 Firmen stellen ihre Ausbildungsplätze vor. Der Eintritt ist frei.",
        "why": "„Über 100 Firmen stellen ihre Ausbildungsplätze vor.“"
       },
       {
        "q": "Was bietet die Volkshochschule an?",
        "o": [
         "Sprachkurse für Kinder.",
         "Reisen ins Ausland.",
         "Kostenlose Computerkurse für Arbeitsuchende."
        ],
        "a": 2,
        "audio": "Die Volkshochschule bietet ab Februar kostenlose Computerkurse für Arbeitsuchende an. Anmelden können Sie sich bei Ihrer Beraterin im Jobcenter.",
        "why": "„kostenlose Computerkurse für Arbeitsuchende“"
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Der Mann spricht mit seiner Chefin.",
        "a": true,
        "why": "Urlaub beantragen",
        "audio": "Mann: Guten Morgen, Frau Hofmann. Haben Sie kurz Zeit?\nFrau: Ja, natürlich. Was gibt es?\nMann: Ich würde gern im Juli zwei Wochen Urlaub nehmen. Meine Schwester heiratet in der Türkei.\nFrau: Im Juli sind schon viele im Urlaub. Aber zwei Wochen sollten gehen. Füllen Sie bitte den Antrag aus."
       },
       {
        "q": "Warum möchte der Mann Urlaub?",
        "o": [
         "Er ist krank.",
         "Er zieht um.",
         "Seine Schwester heiratet."
        ],
        "a": 2,
        "same": true,
        "why": "„Meine Schwester heiratet in der Türkei.“"
       },
       {
        "q": "Tom hat die Stelle schon bekommen.",
        "a": false,
        "why": "Antwort nächste Woche",
        "audio": "Frau: Hallo Tom, wie war dein Vorstellungsgespräch?\nMann: Ganz gut, glaube ich. Sie haben viel über meine Erfahrung gefragt.\nFrau: Und wann bekommst du eine Antwort?\nMann: Nächste Woche. Wenn es klappt, fange ich im Oktober an."
       },
       {
        "q": "Wann bekommt Tom eine Antwort?",
        "o": [
         "Im Oktober.",
         "Nächste Woche.",
         "Heute Abend."
        ],
        "a": 1,
        "same": true,
        "why": "„Nächste Woche.“ – im Oktober würde er anfangen"
       },
       {
        "q": "Die Kantine ist heute geöffnet.",
        "a": false,
        "why": "heute geschlossen",
        "audio": "Mann: Entschuldigung, ich bin neu hier. Wo ist die Kantine?\nFrau: Im Erdgeschoss, neben dem Eingang. Aber heute ist sie geschlossen.\nMann: Oh. Wo kann ich dann etwas essen?\nFrau: Gegenüber gibt es eine Bäckerei mit warmen Snacks. Da gehen viele von uns hin."
       },
       {
        "q": "Was empfiehlt die Frau?",
        "o": [
         "Essen mitzubringen.",
         "Das Restaurant im Erdgeschoss.",
         "Die Bäckerei gegenüber."
        ],
        "a": 2,
        "same": true,
        "why": "„Gegenüber gibt es eine Bäckerei mit warmen Snacks.“ – die Kantine ist heute zu"
       },
       {
        "q": "Der Kurs findet am Wochenende statt.",
        "a": false,
        "why": "montags und mittwochs abends",
        "audio": "Frau: Guten Tag, ich interessiere mich für den Kurs „Deutsch für den Beruf“.\nMann: Gern. Der nächste Kurs beginnt im März, montags und mittwochs abends.\nFrau: Und wie viel kostet er?\nMann: Wenn Sie arbeiten, bezahlt oft der Arbeitgeber einen Teil. Fragen Sie am besten bei Ihrer Firma."
       },
       {
        "q": "Was soll die Frau tun?",
        "o": [
         "Bei ihrer Firma fragen.",
         "Sofort bezahlen.",
         "Einen Test machen."
        ],
        "a": 0,
        "same": true,
        "why": "„Fragen Sie am besten bei Ihrer Firma.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Arbeitszeit",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Eine Vier-Tage-Woche wäre für alle besser.",
       "Überstunden sollten immer bezahlt werden.",
       "Feste Arbeitszeiten geben Sicherheit.",
       "Flexible Arbeitszeiten helfen Eltern.",
       "Wer mehr arbeitet, sollte mehr Urlaub bekommen.",
       "Schichtarbeit ist schlecht für die Gesundheit."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 3,
        "why": "Gleitzeit – Kinder zur Schule bringen",
        "audio": "Bei uns gibt es Gleitzeit. Ich kann zwischen sieben und neun anfangen. So kann ich morgens meine Kinder zur Schule bringen. Ohne das hätte ich wirklich Stress."
       },
       {
        "q": "Aussage 2",
        "a": 5,
        "why": "Nachtschicht – schläft schlecht",
        "audio": "Ich arbeite seit Jahren im Schichtdienst, auch nachts. Ich schlafe schlecht und bin oft müde. Mein Arzt sagt, das ist nicht gut für den Körper."
       },
       {
        "q": "Aussage 3",
        "a": 0,
        "why": "drei freie Tage, motivierter",
        "audio": "Meine Firma testet gerade die Vier-Tage-Woche. Ich arbeite länger an vier Tagen und habe dafür drei Tage frei. Ich bin viel entspannter und motivierter. Das sollten alle Firmen machen."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Jobcenter – Wegweiser\nErdgeschoss: Empfang · Anmeldung · Wartebereich\n1. Stock: Arbeitsvermittlung (Stellenangebote, Bewerbungsberatung) · Berufsberatung für junge Menschen\n2. Stock: Leistungsabteilung (Bürgergeld, Anträge, Änderungen melden)\n3. Stock: Weiterbildung und Umschulung · Anerkennung ausländischer Berufsabschlüsse\n4. Stock: Kinderbetreuung während der Termine · Computerraum (freie Nutzung für Bewerbungen)",
      "items": [
       {
        "q": "Sie möchten Ihren Berufsabschluss aus Ihrem Heimatland in Deutschland anerkennen lassen.",
        "o": [
         "3. Stock",
         "2. Stock",
         "1. Stock"
        ],
        "a": 0,
        "why": "Anerkennung ausländischer Berufsabschlüsse"
       },
       {
        "q": "Sie brauchen Hilfe beim Schreiben einer Bewerbung.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "4. Stock"
        ],
        "a": 1,
        "why": "Bewerbungsberatung"
       },
       {
        "q": "Sie haben eine neue Adresse und müssen das melden.",
        "o": [
         "2. Stock",
         "Erdgeschoss",
         "1. Stock"
        ],
        "a": 0,
        "why": "Änderungen melden"
       },
       {
        "q": "Sie möchten Ihre Bewerbung am Computer ausdrucken.",
        "o": [
         "1. Stock",
         "4. Stock",
         "3. Stock"
        ],
        "a": 1,
        "why": "Computerraum"
       },
       {
        "q": "Sie möchten eine Umschulung zur Pflegekraft machen.",
        "o": [
         "3. Stock",
         "2. Stock",
         "1. Stock"
        ],
        "a": 0,
        "why": "Weiterbildung und Umschulung"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Zeitarbeitsfirma Flex: Jobs in Lager und Produktion, sofort Arbeit, auch ohne Deutschkenntnisse B1.",
       "Bewerbungsfotos im Fotostudio Klick: professionell, in 15 Minuten fertig.",
       "Übersetzungsbüro: beglaubigte Übersetzungen von Zeugnissen und Urkunden.",
       "Kita Sonnenschein: Plätze für Kinder ab 1 Jahr, Öffnungszeiten 6–18 Uhr.",
       "Pflegeschule: Ausbildung zur Pflegefachkraft, Beginn April und Oktober.",
       "Computerkurs für Anfänger: Word, E-Mail und Internet, 4 Abende.",
       "Steuerberatung: Hilfe bei der Steuererklärung für Arbeitnehmer.",
       "Sprachschule: Vorbereitungskurs auf die DTZ-Prüfung, abends."
      ],
      "items": [
       {
        "q": "Sie brauchen Ihr Abschlusszeugnis auf Deutsch für eine Bewerbung.",
        "a": 2,
        "why": "beglaubigte Übersetzungen"
       },
       {
        "q": "Sie arbeiten im Krankenhaus in der Frühschicht und brauchen für Ihre Tochter (2) eine Betreuung ab 6 Uhr.",
        "a": 3,
        "why": "Kita ab 6 Uhr"
       },
       {
        "q": "Sie möchten lernen, wie man E-Mails schreibt.",
        "a": 5,
        "why": "Computerkurs"
       },
       {
        "q": "Sie möchten Ihr Geld vom Finanzamt zurückbekommen.",
        "a": 6,
        "why": "Steuererklärung"
       },
       {
        "q": "Sie suchen einen Job als Fahrer.",
        "a": -1,
        "why": "x – kein Fahrer-Job"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Man muss die Krankmeldung noch selbst zur Firma bringen.",
        "a": false,
        "why": "Der Arzt schickt sie an die Krankenkasse.",
        "text": "Information für alle Mitarbeiterinnen und Mitarbeiter:\nAb dem 1. Januar müssen Krankmeldungen nicht mehr in Papierform abgegeben werden. Ihr Arzt schickt die Krankmeldung direkt an Ihre Krankenkasse. Bitte informieren Sie aber weiterhin am ersten Krankheitstag vor Arbeitsbeginn telefonisch Ihre Vorgesetzte oder Ihren Vorgesetzten.\nDie Personalabteilung"
       },
       {
        "q": "Am ersten Krankheitstag soll man …",
        "o": [
         "eine E-Mail an alle schreiben.",
         "den Vorgesetzten anrufen.",
         "zur Krankenkasse gehen."
        ],
        "a": 1,
        "same": true,
        "why": "„am ersten Krankheitstag vor Arbeitsbeginn telefonisch Ihre Vorgesetzte oder Ihren Vorgesetzten“"
       },
       {
        "q": "Man braucht Erfahrung als Verkäufer.",
        "a": false,
        "why": "nicht nötig",
        "text": "Stellenangebot: Wir suchen ab sofort eine Verkäuferin oder einen Verkäufer (m/w/d) für unsere Bäckerei am Marktplatz. Arbeitszeit: 20 Stunden pro Woche, auch samstags. Sie sind freundlich und arbeiten gern im Team. Erfahrung ist schön, aber nicht nötig – wir lernen Sie ein. Bewerbungen bitte per E-Mail an info@baeckerei-korn.de."
       },
       {
        "q": "Die Stelle ist …",
        "o": [
         "nur am Wochenende.",
         "nur für Studenten.",
         "eine Teilzeitstelle."
        ],
        "a": 2,
        "why": "20 Stunden",
        "same": true
       },
       {
        "q": "Für Bildungsurlaub bekommt man weiter Lohn.",
        "a": true,
        "why": "bezahlte Freistellung",
        "text": "Weiterbildung für Beschäftigte\nViele Arbeitnehmer haben ein Recht auf Bildungsurlaub: fünf Tage pro Jahr bezahlte Freistellung für eine anerkannte Weiterbildung, zum Beispiel einen Sprachkurs. Den Antrag müssen Sie mindestens sechs Wochen vorher bei Ihrem Arbeitgeber stellen."
       },
       {
        "q": "Den Antrag stellt man …",
        "o": [
         "sechs Wochen vorher beim Arbeitgeber.",
         "bei der Volkshochschule.",
         "nach dem Kurs."
        ],
        "a": 0,
        "same": true,
        "why": "„mindestens sechs Wochen vorher bei Ihrem Arbeitgeber“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Arbeitsvertrag (Auszug)\n§ 3 Arbeitszeit: Die regelmäßige Arbeitszeit beträgt 38 Stunden pro Woche. Beginn und Ende der täglichen Arbeitszeit richten sich nach dem Schichtplan, der zwei Wochen im Voraus bekannt gegeben wird.\n§ 4 Probezeit: Die ersten sechs Monate gelten als Probezeit. In dieser Zeit kann der Vertrag von beiden Seiten mit einer Frist von zwei Wochen gekündigt werden.\n§ 5 Urlaub: Der Arbeitnehmer hat Anspruch auf 28 Arbeitstage Urlaub pro Jahr. Der Urlaub muss rechtzeitig beantragt werden.\n§ 6 Krankheit: Bei Krankheit muss der Arbeitnehmer den Arbeitgeber sofort informieren. Ab dem dritten Krankheitstag ist eine ärztliche Bescheinigung nötig.",
      "items": [
       {
        "q": "Den Schichtplan bekommt man zwei Wochen vorher.",
        "a": true,
        "why": "„nach dem Schichtplan, der zwei Wochen im Voraus bekannt gegeben wird“"
       },
       {
        "q": "In der Probezeit kann man nicht kündigen.",
        "a": false,
        "why": "Frist von zwei Wochen"
       },
       {
        "q": "Schon am ersten Krankheitstag braucht man eine Bescheinigung vom Arzt.",
        "a": false,
        "why": "ab dem dritten Tag"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Frau Lange,\nich habe Ihre Stellenanzeige im Internet gelesen und (1) mich um die Stelle als Lagerarbeiter. Ich bin 34 Jahre alt und lebe seit drei Jahren in Deutschland. In meinem Heimatland habe ich fünf Jahre in einem großen Lager gearbeitet, (2) habe ich schon viel Erfahrung. Ich habe einen Staplerschein und kann (3) im Schichtdienst arbeiten. Zurzeit besuche ich einen Deutschkurs, (4) mein Deutsch noch besser wird. Über eine Einladung zu einem Gespräch würde ich mich sehr (5). Meine Zeugnisse finden Sie (6) Anhang.\nMit freundlichen Grüßen\nKwame Mensah",
      "items": [
       {
        "n": 1,
        "o": [
         "frage",
         "suche",
         "bewerbe"
        ],
        "a": 2,
        "why": "sich bewerben um"
       },
       {
        "n": 2,
        "o": [
         "weil",
         "obwohl",
         "deshalb"
        ],
        "a": 2,
        "why": "Folge, Verb auf Position 2"
       },
       {
        "n": 3,
        "o": [
         "auch",
         "kaum",
         "nie"
        ],
        "a": 0,
        "why": "„kann auch im Schichtdienst arbeiten“ – noch eine Fähigkeit dazu"
       },
       {
        "n": 4,
        "o": [
         "dass",
         "damit",
         "denn"
        ],
        "a": 1,
        "why": "Ziel"
       },
       {
        "n": 5,
        "o": [
         "danken",
         "freuen",
         "gefallen"
        ],
        "a": 1,
        "why": "sich freuen"
       },
       {
        "n": 6,
        "o": [
         "am",
         "im",
         "auf"
        ],
        "a": 1,
        "why": "im Anhang"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie sind krank und können zwei Tage nicht zur Arbeit kommen. Schreiben Sie eine E-Mail an Ihre Chefin, Frau Berger.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was haben Sie?",
       "Wie lange fehlen Sie?",
       "Wer übernimmt Ihre Arbeit?"
      ],
      "model": "Sehr geehrte Frau Berger,\nleider muss ich Ihnen mitteilen, dass ich heute und morgen nicht zur Arbeit kommen kann.\nIch habe seit gestern Abend hohes Fieber und starke Kopfschmerzen. Heute Morgen war ich beim Arzt, und er hat mich für zwei Tage krankgeschrieben.\nAm Donnerstag bin ich wahrscheinlich wieder im Büro. Die Krankmeldung schickt der Arzt an die Krankenkasse.\nMein Kollege Herr Klein kann bitte das Treffen mit dem Kunden am Mittwoch übernehmen. Die Unterlagen liegen auf meinem Schreibtisch, deshalb kann er sie leicht finden.\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "mitteilen|schreibe|nicht (zur|zu der) arbeit|nicht kommen|kann nicht|krank",
        "Leider kann ich heute und morgen nicht zur Arbeit kommen."
       ],
       [
        "fieber|schmerz|erkält|grippe|arzt|krankgeschrieben|husten",
        "Ich habe hohes Fieber und war beim Arzt."
       ],
       [
        "tage|morgen|donnerstag|freitag|montag|wieder|bis",
        "Ich bin zwei Tage krank, am Donnerstag bin ich wieder da."
       ],
       [
        "kolleg|übernehm|vertret|unterlagen|termin|treffen",
        "Mein Kollege Herr Klein kann bitte meine Termine übernehmen."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie möchten einen Computerkurs an der Volkshochschule machen. Schreiben Sie an die Volkshochschule.",
       "points": [
        "Grund für Ihr Schreiben",
        "Ihre Kenntnisse",
        "Fragen zu Zeit und Preis",
        "Anmeldung"
       ],
       "model": "Sehr geehrte Damen und Herren,\nich interessiere mich für Ihren Computerkurs für Anfänger und möchte gern mehr Informationen.\nIch kann schon E-Mails schreiben und im Internet suchen, aber mit Word und Excel habe ich noch keine Erfahrung. Das brauche ich aber für meine neue Arbeit.\nWann findet der Kurs statt, und wie viel kostet er? Ich arbeite bis 16 Uhr, deshalb kann ich nur abends.\nWie kann ich mich anmelden? Muss ich persönlich vorbeikommen, oder geht das auch online?\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "interess|kurs|informationen|schreibe|möchte",
         "Ich interessiere mich für Ihren Computerkurs."
        ],
        [
         "kann|kenntnisse|erfahrung|word|excel|e-mail|internet",
         "Ich kann E-Mails schreiben, aber mit Word habe ich keine Erfahrung."
        ],
        [
         "wann|kost|preis|euro|uhr|abends|zeit",
         "Wann findet der Kurs statt und wie viel kostet er?"
        ],
        [
         "anmeld|online|vorbeikommen|formular|platz",
         "Wie kann ich mich anmelden?"
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Haddad. Ich bin in Syrien geboren, in Aleppo. Seit sechs Jahren wohne ich in Darmstadt. Ich bin Apothekerin, aber mein Abschluss ist hier noch nicht anerkannt. Deshalb arbeite ich im Moment in einer Drogerie. Ich bin verheiratet und habe drei Kinder. Ich spreche Arabisch, Englisch und Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben über Ihre Arbeit gesprochen. Warum haben Sie diesen Beruf gewählt?"
       },
       {
        "you": "Erzähl, warum du deinen Beruf gewählt hast.",
        "min": 15,
        "key": [
         [
          "\\b(weil|denn)\\b",
          "Grund"
         ],
         [
          "beruf|arbeit|computer|technik|interess|spaß",
          "Beruf"
         ]
        ],
        "model": "Ich habe diesen Beruf gewählt, weil ich mich schon als Kind für Computer interessiert habe. Mein Onkel war auch Ingenieur, und er hat mir viel gezeigt."
       },
       {
        "who": "Prüferin",
        "say": "Was gefällt Ihnen an Ihrer Arbeit, und was ist schwierig?"
       },
       {
        "you": "Sag, was dir an der Arbeit gefällt und was schwierig ist.",
        "min": 12,
        "key": [
         [
          "gefällt|mag|spaß|gut",
          "positiv"
         ],
         [
          "schwierig|stress|problem|aber|anstrengend",
          "schwierig"
         ]
        ],
        "model": "Mir gefällt, dass ich im Team arbeite und jeden Tag etwas Neues lerne. Schwierig sind manchmal die langen Besprechungen auf Deutsch, weil alle sehr schnell sprechen."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Arbeit. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-5.jpg",
         "alt": "Ein Großraumbüro: Zwei Frauen und zwei Männer arbeiten an vielen Bildschirmen und Laptops. Auf dem Tisch stehen Tassen, hinten ist ein großes Fenster.",
         "by": "Compagnons",
         "link": "https://unsplash.com/photos/menschen-die-in-sonnenbeschienenen-buroraumen-arbeiten-AQTA5E6mCNU"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "büro|computer|bildschirm|laptop|frau|frauen|mann|männer|kollegen|tassen|kaffee|fenster|arbeit",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich ein Großraumbüro. Zwei Frauen und zwei Männer sitzen an einem langen Tisch und arbeiten an Computern und Laptops. Eine Frau schaut sehr konzentriert auf ihren Bildschirm. Ich glaube, sie arbeiten in einer IT-Firma und haben gerade viel zu tun."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto ist eine Baustelle. Zwei Männer mit Helmen arbeiten draußen. Es sieht kalt aus, vielleicht ist es Winter. Die Arbeit ist sicher sehr anstrengend."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Wie war Ihre erste Arbeit?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "arbeit|erste|job|firma|gearbeitet|kollegen",
          "zum Thema"
         ]
        ],
        "model": "Meine erste Arbeit war in einem kleinen Büro in Chennai. Ich war 22 Jahre alt und sehr nervös. Aber meine Kollegen haben mir viel geholfen."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das Arbeitsleben in Ihrem Heimatland? Was ist in Deutschland anders?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien arbeiten viele Menschen sehr lange, oft auch am Samstag. In Deutschland finde ich gut, dass man pünktlich Feierabend hat und viel Urlaub bekommt. Am Anfang war es für mich schwierig, dass alles so genau geplant wird."
       },
       {
        "who": "Anna",
        "say": "Das kenne ich – in Syrien war auch vieles spontaner als hier."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ein Kollege hat seit zehn Jahren in Ihrer Firma gearbeitet. Sie möchten zusammen eine kleine Feier organisieren. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann und wo? · Essen und Getränke · Geschenk · Wer lädt ein?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ein Kollege hat seit zehn Jahren in Ihrer Firma gearbeitet. Sie möchten zusammen eine kleine Feier organisieren. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann und wo? · Essen und Getränke · Geschenk · Wer lädt ein?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unser Kollege Herr Yilmaz arbeitet seit zehn Jahren bei uns. Wollen wir am Freitag in der Mittagspause eine kleine Feier machen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, gute Idee! Freitag ist gut, weil dann viele Kollegen im Büro sind. Wir könnten den Besprechungsraum benutzen."
       },
       {
        "who": "Anna",
        "say": "Prima. Was machen wir mit Essen und Geschenk?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "feier|geschenk|kuchen|essen|getränke|freitag|pause|büro|kantine|einladen|karte",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage vor, dass wir einen Kuchen bestellen und Getränke kaufen. Als Geschenk könnten wir Geld sammeln und einen Gutschein kaufen – er geht gern essen."
       },
       {
        "who": "Anna",
        "say": "Gut. Wer kümmert sich um was?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich sammle das Geld und kaufe den Gutschein. Kannst du den Kuchen bestellen und alle Kollegen per E-Mail einladen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "feier|geschenk|kuchen|essen|getränke|freitag|pause|büro|kantine|einladen|karte",
          "Plan"
         ]
        ],
        "model": "Also, wir feiern am Freitag in der Mittagspause im Besprechungsraum. Es gibt Kuchen und Getränke. Ich sammle Geld für einen Restaurant-Gutschein, und du bestellst den Kuchen und lädst alle ein."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-1",
  "title": "Modelltest 7",
  "level": "schwer",
  "sub": "Wohnung, Jobcenter, Elternabend · Brief an den Vermieter / an die Kita",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Akın tun?",
        "o": [
         "Unterlagen mitbringen.",
         "Eine E-Mail schreiben.",
         "Einen neuen Termin machen."
        ],
        "a": 0,
        "why": "„Bringen Sie bitte Ihren Mietvertrag und Ihre Gehaltsabrechnungen mit.“",
        "audio": "Guten Tag, Herr Akın, hier ist Frau Wolf vom Jobcenter. Ihr Termin am Dienstag um 10 Uhr bleibt. Bringen Sie bitte Ihren Mietvertrag und Ihre letzten Gehaltsabrechnungen mit. Danke und auf Wiederhören."
       },
       {
        "q": "Wann kann Frau Sanchez die Wohnung ansehen?",
        "o": [
         "Am Freitagabend.",
         "Heute Nachmittag.",
         "Am Samstagvormittag."
        ],
        "a": 2,
        "why": "Freitag geht nicht, Samstag um 11 Uhr.",
        "audio": "Hallo Frau Sanchez, hier ist Hausverwaltung Klein. Sie wollten die Wohnung in der Lindenstraße ansehen. Am Freitag geht es leider nicht, aber am Samstag um 11 Uhr ist der Hausmeister da. Rufen Sie bitte kurz zurück."
       },
       {
        "q": "Was ist mit dem Paket?",
        "o": [
         "Es kommt morgen noch einmal.",
         "Es ist in der Postfiliale.",
         "Es liegt beim Nachbarn."
        ],
        "a": 2,
        "why": "„bei Ihrem Nachbarn, Herrn Lorenz, abgegeben“",
        "audio": "Guten Tag, hier ist der Paketdienst. Wir haben Sie heute leider nicht angetroffen. Ihr Paket haben wir bei Ihrem Nachbarn, Herrn Lorenz, im ersten Stock abgegeben."
       },
       {
        "q": "Sie möchten einen Termin für eine Wohnungsübergabe. Was sollen Sie tun?",
        "o": [
         "Später noch einmal anrufen.",
         "Eine E-Mail schreiben.",
         "Die Taste 2 drücken."
        ],
        "a": 2,
        "why": "Wohnungsübergabe → Taste 2",
        "audio": "Willkommen bei der Wohnungsgesellschaft Nord. Bei Schäden in Ihrer Wohnung drücken Sie bitte die 1. Für Termine zur Wohnungsübergabe drücken Sie die 2. Für alle anderen Fragen schreiben Sie uns bitte eine E-Mail."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Was für eine Sendung hören Sie?",
        "o": [
         "Eine Sportsendung.",
         "Eine Sendung über Geld.",
         "Eine Musiksendung."
        ],
        "a": 1,
        "why": "Tipps zum Sparen bei Strom und Heizung",
        "audio": "Und jetzt unsere Sendung „Geld und Alltag“. Heute geht es darum, wie Sie im Winter bei Strom und Heizung sparen können. Unsere Expertin hat viele Tipps für Sie."
       },
       {
        "q": "Wie wird das Wetter morgen?",
        "o": [
         "Es wird kälter.",
         "Es regnet den ganzen Tag.",
         "Es bleibt warm."
        ],
        "a": 0,
        "why": "nur noch 5 Grad",
        "audio": "Das Wetter: Heute noch mild mit bis zu 14 Grad. Morgen kommt kalte Luft aus dem Norden, die Temperaturen sinken auf nur noch 5 Grad. Es bleibt aber trocken."
       },
       {
        "q": "Auf der B3 bei Friedberg …",
        "o": [
         "gibt es eine Baustelle.",
         "ist ein Unfall passiert.",
         "ist die Straße frei."
        ],
        "a": 0,
        "audio": "Die Verkehrsmeldungen: Auf der B3 bei Friedberg gibt es wegen einer Baustelle nur eine Spur. Rechnen Sie mit zehn Minuten Verspätung. Auf allen anderen Straßen ist der Verkehr frei.",
        "why": "„Auf der B3 bei Friedberg gibt es wegen einer Baustelle nur eine Spur.“"
       },
       {
        "q": "Was ist neu im Bürgerbüro?",
        "o": [
         "Man braucht keinen Termin mehr.",
         "Es ist umgezogen.",
         "Man kann am Samstag kommen."
        ],
        "a": 2,
        "why": "jetzt auch samstags",
        "audio": "Gute Nachrichten für alle Berufstätigen: Das Bürgerbüro im Rathaus ist ab nächster Woche auch samstags von 9 bis 13 Uhr geöffnet. Einen Termin können Sie online buchen."
       },
       {
        "q": "Beim Familienfest im Park …",
        "o": [
         "ist der Eintritt frei.",
         "gibt es nur Essen für Kinder.",
         "muss man sich anmelden."
        ],
        "a": 0,
        "why": "„Der Eintritt ist kostenlos.“",
        "audio": "Am Sonntag findet im Stadtpark das große Familienfest statt. Es gibt Spiele für Kinder, Musik und Essen aus vielen Ländern. Der Eintritt ist kostenlos."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Der Mann spricht mit einer Lehrerin.",
        "a": true,
        "why": "Elternabend, Frau Becker – die Lehrerin",
        "audio": "Frau: Hallo Herr Petrović, schön, dass Sie zum Elternabend kommen.\nMann: Guten Abend, Frau Becker. Ich habe eine Frage zur Klassenfahrt.\nFrau: Ja, gern.\nMann: Was kostet die Fahrt? Und kann ich das Geld in zwei Raten bezahlen?\nFrau: Die Fahrt kostet 180 Euro. Raten sind kein Problem, sprechen Sie einfach mit dem Sekretariat."
       },
       {
        "q": "Was möchte er wissen?",
        "o": [
         "Wann die Fahrt beginnt.",
         "Wohin die Klasse fährt.",
         "Ob er in Raten bezahlen kann."
        ],
        "a": 2,
        "same": true,
        "why": "„kann ich das Geld in zwei Raten bezahlen?“"
       },
       {
        "q": "Leila hat am Samstag den ganzen Tag frei.",
        "a": false,
        "why": "Sie arbeitet bis 14 Uhr.",
        "audio": "Mann: Du, Leila, kannst du mir am Samstag beim Umzug helfen?\nFrau: Am Samstag? Da muss ich bis 14 Uhr arbeiten.\nMann: Kein Problem, wir fangen erst um drei an. Mein Bruder bringt einen Transporter mit.\nFrau: Gut, dann komme ich nach der Arbeit. Soll ich etwas zu essen mitbringen?\nMann: Das wäre super!"
       },
       {
        "q": "Was macht Leila?",
        "o": [
         "Sie kann nicht helfen.",
         "Sie bringt einen Transporter.",
         "Sie kommt nach der Arbeit und bringt Essen mit."
        ],
        "a": 2,
        "same": true,
        "why": "„dann komme ich nach der Arbeit. Soll ich etwas zu essen mitbringen?“"
       },
       {
        "q": "Die Frau bekommt einen Platz im Abendkurs.",
        "a": false,
        "why": "Der Kurs ist voll – Warteliste.",
        "audio": "Frau: Guten Tag, ich möchte mich für den Deutschkurs B1 anmelden.\nMann: Gern. Morgens oder abends?\nFrau: Abends, ich arbeite tagsüber.\nMann: Der Abendkurs ist leider voll. Ich kann Sie auf die Warteliste setzen.\nFrau: Ja, bitte. Und rufen Sie mich an, wenn ein Platz frei wird?"
       },
       {
        "q": "Was möchte die Frau?",
        "o": [
         "Morgens lernen.",
         "Einen Einzelkurs machen.",
         "Auf die Warteliste kommen."
        ],
        "a": 2,
        "same": true,
        "why": "„Ich kann Sie auf die Warteliste setzen.“ – „Ja, bitte.“ (der Abendkurs ist voll)"
       },
       {
        "q": "Der Mann und die Frau kennen sich schon lange.",
        "a": false,
        "why": "Er ist neu im Haus.",
        "audio": "Mann: Entschuldigung, wohnen Sie auch hier im Haus?\nFrau: Ja, im dritten Stock. Warum?\nMann: Ich bin neu hier. Wissen Sie, wann der Müll abgeholt wird?\nFrau: Der Restmüll am Montag, das Papier jeden zweiten Donnerstag. Die Tonnen stehen hinten im Hof.\nMann: Vielen Dank!"
       },
       {
        "q": "Was fragt der Mann?",
        "o": [
         "Wann der Müll abgeholt wird.",
         "Ob es einen Keller gibt.",
         "Wo der Hausmeister wohnt."
        ],
        "a": 0,
        "same": true,
        "why": "„Wissen Sie, wann der Müll abgeholt wird?“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Arbeiten und Familie",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Ohne die Großeltern wäre der Alltag nicht möglich.",
       "Teilzeit ist die beste Lösung für Familien.",
       "Die Firma sollte bei der Kinderbetreuung helfen.",
       "Kinder brauchen vor allem Zeit mit den Eltern.",
       "Väter sollten mehr Elternzeit nehmen.",
       "Im Homeoffice kann man Familie und Beruf gut verbinden."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 5,
        "why": "Homeoffice: Kinder abholen, abends weiterarbeiten",
        "audio": "Ich arbeite drei Tage pro Woche von zu Hause. So kann ich meine Tochter um vier vom Kindergarten abholen und abends noch ein bisschen arbeiten. Für uns ist das ideal."
       },
       {
        "q": "Aussage 2",
        "a": 2,
        "why": "Betriebskita – Arbeitgeber soll helfen",
        "audio": "In meiner Firma gibt es eine eigene Kita. Das finde ich toll. Ich finde, alle großen Firmen sollten so etwas anbieten. Dann haben die Eltern weniger Stress."
       },
       {
        "q": "Aussage 3",
        "a": 4,
        "why": "Elternzeit für Väter",
        "audio": "Als unser Sohn geboren wurde, habe ich sechs Monate Elternzeit genommen. Viele Kollegen haben gelacht. Aber ich finde, Männer sollten das viel öfter machen."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Rathaus – Wegweiser\nErdgeschoss: Bürgerbüro (Personalausweis, Reisepass, Anmeldung der Wohnung) · Information · Fundbüro\n1. Stock: Standesamt (Heirat, Geburtsurkunden) · Kasse\n2. Stock: Ausländerbehörde (Aufenthaltstitel, Einbürgerung) · Integrationsbüro (Integrationskurse, Beratung)\n3. Stock: Sozialamt (Wohngeld, Hilfe zum Lebensunterhalt) · Amt für Kinder und Familie (Kita-Plätze, Elterngeld)\n4. Stock: Bauamt · Ordnungsamt (Parkausweise, Hunde anmelden)",
      "items": [
       {
        "q": "Sie sind umgezogen und müssen Ihre neue Adresse melden.",
        "o": [
         "Erdgeschoss",
         "4. Stock",
         "2. Stock"
        ],
        "a": 0,
        "why": "Anmeldung der Wohnung → Bürgerbüro"
       },
       {
        "q": "Sie möchten Wohngeld beantragen.",
        "o": [
         "1. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Sozialamt"
       },
       {
        "q": "Ihr Aufenthaltstitel muss verlängert werden.",
        "o": [
         "3. Stock",
         "2. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Ausländerbehörde"
       },
       {
        "q": "Sie suchen einen Platz im Kindergarten für Ihren Sohn.",
        "o": [
         "2. Stock",
         "1. Stock",
         "3. Stock"
        ],
        "a": 2,
        "why": "Amt für Kinder und Familie"
       },
       {
        "q": "Sie brauchen einen Parkausweis für Ihre Straße.",
        "o": [
         "Erdgeschoss",
         "4. Stock",
         "1. Stock"
        ],
        "a": 1,
        "why": "Ordnungsamt"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Wohnungstausch: Biete 2-Zimmer-Wohnung im Zentrum, suche 3–4 Zimmer am Stadtrand. Tel. 0151 2233445",
       "Umzugsfirma Schnell: Umzüge in der Region, Möbel abbauen und aufbauen, Festpreis.",
       "Möbel-Second-Hand: gebrauchte Möbel günstig, Lieferung möglich.",
       "Mieterverein: Beratung bei Problemen mit dem Vermieter, Nebenkostenabrechnung prüfen.",
       "Malerbetrieb Farbe: Wände streichen, Tapezieren, schnell und sauber.",
       "Hausaufgabenhilfe für Grundschulkinder, montags bis donnerstags 14–16 Uhr, kostenlos.",
       "Transporter mieten: ab 39 € pro Tag, Führerschein Klasse B reicht.",
       "Elektro-Notdienst: Tag und Nacht, wenn bei Ihnen der Strom ausfällt."
      ],
      "items": [
       {
        "q": "Ihre Nebenkostenabrechnung ist sehr hoch. Sie möchten sie prüfen lassen.",
        "a": 3,
        "why": "Mieterverein"
       },
       {
        "q": "Ihre Familie ist größer geworden. Sie brauchen eine größere Wohnung.",
        "a": 0,
        "why": "Wohnungstausch: suche 3–4 Zimmer"
       },
       {
        "q": "Sie möchten Ihren Umzug selbst machen und brauchen ein großes Auto.",
        "a": 6,
        "why": "Transporter mieten"
       },
       {
        "q": "Ihre Wohnung hat seit gestern keinen Strom.",
        "a": 7,
        "why": "Elektro-Notdienst"
       },
       {
        "q": "Sie suchen einen Teppich für Ihr Wohnzimmer – neu und von guter Qualität.",
        "a": -1,
        "why": "x – Second-Hand ist gebraucht, sonst keine Anzeige"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Am 14. Mai gibt es den ganzen Tag kein Wasser.",
        "a": false,
        "why": "nur von 8 bis 12 Uhr",
        "text": "Liebe Mieterinnen und Mieter,\nam Mittwoch, 14. Mai, wird zwischen 8 und 12 Uhr das Wasser im ganzen Haus abgestellt. Grund sind Reparaturen an den Leitungen im Keller. Bitte füllen Sie sich vorher etwas Wasser ab. Für Fragen erreichen Sie den Hausmeister unter 0176 556677.\nIhre Hausverwaltung"
       },
       {
        "q": "Die Mieter sollen …",
        "o": [
         "vorher Wasser abfüllen.",
         "in den Keller kommen.",
         "den Hausmeister anrufen."
        ],
        "a": 0,
        "same": true,
        "why": "„Bitte füllen Sie sich vorher etwas Wasser ab.“"
       },
       {
        "q": "Am Sonntag kann man Bücher zurückbringen.",
        "a": true,
        "why": "Rückgabestation",
        "text": "Neu in der Stadtbibliothek: Ab Juni können Sie Bücher, Filme und Spiele auch am Sonntag zurückgeben – an der Rückgabestation am Eingang. Ausleihen ist am Sonntag weiterhin nicht möglich. Die Bibliothek ist von Dienstag bis Samstag von 10 bis 19 Uhr geöffnet."
       },
       {
        "q": "Am Sonntag …",
        "o": [
         "ist die Bibliothek bis 19 Uhr offen.",
         "kann man nichts ausleihen.",
         "gibt es Filme für Kinder."
        ],
        "a": 1,
        "same": true,
        "why": "„Ausleihen ist am Sonntag weiterhin nicht möglich.“"
       },
       {
        "q": "Das Geld vom Fest ist für neue Spielgeräte.",
        "a": true,
        "why": "„Der Erlös geht an neue Spielgeräte“",
        "text": "Liebe Eltern,\nunsere Kita sucht für das Sommerfest am 28. Juni noch Helferinnen und Helfer. Wir brauchen Hilfe beim Aufbau am Vormittag, beim Kuchenverkauf und beim Aufräumen. Bitte tragen Sie sich bis Freitag in die Liste an der Tür ein. Der Erlös geht an neue Spielgeräte für den Garten.\nIhr Kita-Team"
       },
       {
        "q": "Was sollen Eltern, die helfen möchten, tun?",
        "o": [
         "Sich in eine Liste eintragen.",
         "Einen Kuchen backen.",
         "Die Kita anrufen."
        ],
        "a": 0,
        "same": true,
        "why": "„Bitte tragen Sie sich bis Freitag in die Liste an der Tür ein.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Hausordnung – Wohnanlage Am Lindenpark\n1. Ruhezeiten: Von 22 bis 6 Uhr und sonntags ganztägig ist Rücksicht auf die Nachbarn zu nehmen. Laute Musik und lautes Arbeiten (z. B. Bohren) sind in dieser Zeit nicht erlaubt.\n2. Treppenhaus: Das Treppenhaus wird wöchentlich von einer Reinigungsfirma geputzt. Fahrräder, Kinderwagen und Schuhe dürfen dort nicht stehen bleiben – bitte nutzen Sie den Fahrradkeller.\n3. Müll: Bitte trennen Sie den Müll (Papier, Glas, Verpackungen, Restmüll). Sperrmüll darf nicht im Hof abgestellt werden; Termine für die kostenlose Abholung erhalten Sie bei der Stadt.\n4. Grillen: Auf den Balkonen ist Grillen nur mit Elektrogrills erlaubt. Für Feiern kann der Gemeinschaftsraum gemietet werden.\n5. Haustiere: Kleine Tiere wie Fische oder Hamster sind erlaubt. Für Hunde und Katzen brauchen Sie die Zustimmung der Hausverwaltung.",
      "items": [
       {
        "q": "Die Mieter müssen das Treppenhaus selbst putzen.",
        "a": false,
        "why": "eine Reinigungsfirma"
       },
       {
        "q": "Auf dem Balkon darf man mit einem Elektrogrill grillen.",
        "a": true,
        "why": "„Auf den Balkonen ist Grillen nur mit Elektrogrills erlaubt.“"
       },
       {
        "q": "Wer eine Katze haben möchte, muss die Hausverwaltung fragen.",
        "a": true,
        "why": "„Für Hunde und Katzen brauchen Sie die Zustimmung der Hausverwaltung.“"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Frau Arslan,\nvielen Dank für Ihr Interesse an der Wohnung in der Goethestraße 12. Gern laden wir Sie zu einer Besichtigung (1). Die Wohnung hat drei Zimmer, eine Küche und einen Balkon. Sie liegt im zweiten Stock, (2) es gibt leider keinen Aufzug. Die Miete beträgt 850 Euro (3) Monat, dazu kommen 200 Euro Nebenkosten. Bitte bringen Sie zur Besichtigung eine Kopie Ihres Ausweises und Ihre letzten drei Gehaltsabrechnungen (4). (5) Sie am Donnerstag keine Zeit haben, können wir auch einen anderen Termin vereinbaren. Bitte melden Sie sich (6) bis Mittwoch.\nMit freundlichen Grüßen\nImmobilien Berger",
      "items": [
       {
        "n": 1,
        "o": [
         "ein",
         "auf",
         "an"
        ],
        "a": 0,
        "why": "einladen – trennbares Verb"
       },
       {
        "n": 2,
        "o": [
         "oder",
         "denn",
         "aber"
        ],
        "a": 2,
        "why": "Gegensatz"
       },
       {
        "n": 3,
        "o": [
         "pro",
         "für",
         "im"
        ],
        "a": 0,
        "why": "pro Monat"
       },
       {
        "n": 4,
        "o": [
         "bei",
         "mit",
         "zu"
        ],
        "a": 1,
        "why": "mitbringen"
       },
       {
        "n": 5,
        "o": [
         "Ob",
         "Falls",
         "Dass"
        ],
        "a": 1,
        "why": "Bedingung"
       },
       {
        "n": 6,
        "o": [
         "manchmal",
         "frühestens",
         "spätestens"
        ],
        "a": 2,
        "why": "bis Mittwoch → spätestens"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: In Ihrer Wohnung ist seit einer Woche die Heizung kaputt. Schreiben Sie an Ihren Vermieter, Herrn Schulz.",
      "points": [
       "Grund für Ihr Schreiben",
       "Seit wann?",
       "Probleme für Ihre Familie",
       "Bitte um Reparatur / Termin"
      ],
      "model": "Sehr geehrter Herr Schulz,\nich schreibe Ihnen, weil in meiner Wohnung in der Lindenstraße 5 die Heizung nicht funktioniert.\nDie Heizung ist seit letztem Montag kaputt, also schon seit einer Woche. Ich habe den Hausmeister schon angerufen, aber er konnte nicht helfen.\nFür meine Familie ist das ein großes Problem. Es ist sehr kalt in der Wohnung, nur 15 Grad, und meine kleine Tochter ist schon erkältet.\nBitte schicken Sie so schnell wie möglich einen Handwerker. Ich bin jeden Tag ab 16 Uhr zu Hause. Am Samstag habe ich den ganzen Tag Zeit.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|heizung|kaputt|funktioniert nicht|problem",
        "Ich schreibe Ihnen, weil die Heizung in meiner Wohnung kaputt ist."
       ],
       [
        "seit|woche|montag|dienstag|mittwoch|donnerstag|freitag|tagen|gestern",
        "Die Heizung funktioniert seit einer Woche nicht."
       ],
       [
        "kalt|kind|tochter|sohn|familie|krank|erkält|frier",
        "Es ist sehr kalt und meine Kinder sind schon erkältet."
       ],
       [
        "reparier|handwerker|termin|schicken|schnell|zu hause|kommen",
        "Bitte schicken Sie schnell einen Handwerker. Ich bin ab 16 Uhr zu Hause."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Ihr Sohn kann nächste Woche nicht in die Kita kommen. Schreiben Sie an die Erzieherin, Frau Brandt.",
       "points": [
        "Grund für Ihr Schreiben",
        "Warum kommt er nicht?",
        "Wie lange?",
        "Frage zum Sommerfest"
       ],
       "model": "Liebe Frau Brandt,\nich möchte Ihnen mitteilen, dass mein Sohn Arjun nächste Woche nicht in die Kita kommen kann.\nWir fliegen zu meinen Eltern nach Indien, weil mein Vater operiert wird und Hilfe braucht.\nWir sind zehn Tage weg. Am Montag, den 20. Mai, ist Arjun wieder in der Kita.\nIch habe noch eine Frage zum Sommerfest: Kann ich auch nach unserer Rückkehr noch beim Kuchenverkauf helfen? Ich backe gern einen Kuchen, wenn Sie noch Hilfe brauchen.\nVielen Dank für Ihre Hilfe.\nViele Grüße\nSuresh [Nachname]",
       "keys": [
        [
         "mitteilen|schreibe|nicht (in die|zur) kita|nicht kommen|kann nicht",
         "Ich schreibe Ihnen, weil mein Sohn nächste Woche nicht in die Kita kommen kann."
        ],
        [
         "weil|denn|krank|reise|fliegen|urlaub|arzt|famil",
         "Wir fliegen zu meinen Eltern, weil mein Vater krank ist."
        ],
        [
         "tage|woche|bis|wieder|montag|zurück",
         "Wir sind zehn Tage weg, ab Montag ist er wieder da."
        ],
        [
         "sommerfest|fest|helfen|kuchen",
         "Kann ich beim Sommerfest helfen? Ich backe gern einen Kuchen."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben gesagt, Sie wohnen in Frankfurt. Wie wohnen Sie dort? Und wo haben Sie früher gewohnt?"
       },
       {
        "you": "Erzähl: Wie wohnst du jetzt, und wo hast du früher gewohnt?",
        "min": 15,
        "key": [
         [
          "wohnung|zimmer|haus|stock|balkon",
          "Wohnung beschreiben"
         ],
         [
          "früher|vorher|in indien|habe .* gewohnt",
          "früher"
         ]
        ],
        "model": "Ich wohne mit meiner Familie in einer Dreizimmerwohnung im vierten Stock. Die Wohnung hat einen kleinen Balkon. Früher habe ich in Chennai in einem großen Haus mit meinen Eltern gewohnt."
       },
       {
        "who": "Prüferin",
        "say": "Und wie gefällt Ihnen Ihr Stadtteil?"
       },
       {
        "you": "Sag, wie dir dein Stadtteil gefällt – mit Grund.",
        "min": 12,
        "key": [
         [
          "gefällt|finde|schön|gut|laut|ruhig",
          "Meinung"
         ],
         [
          "\\b(weil|denn)\\b",
          "Grund"
         ]
        ],
        "model": "Mein Stadtteil gefällt mir gut, weil es viele Geschäfte und einen schönen Park gibt. Nur abends ist es manchmal etwas laut."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Einkaufen auf dem Markt. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-1.jpg",
         "alt": "Ein Wochenmarkt: Unter grünen Zelten stehen Kisten mit Orangen und Zitronen, eine Frau packt Orangen in eine Tüte. Viele Leute gehen über den Markt, die Bäume haben noch keine Blätter.",
         "by": "Remy Gieling",
         "link": "https://unsplash.com/photos/eine-gruppe-von-menschen-die-um-einen-obststand-herum-stehen-H0v6g8FGvFQ"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "markt|wochenmarkt|stand|zelt|obst|orangen|zitronen|kisten|frau|leute|bäume",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Wochenmarkt. Unter grünen Zelten gibt es Stände mit Obst, zum Beispiel Orangen und Zitronen. Eine Frau packt Orangen in eine Tüte. Die Bäume haben keine Blätter, also ist es vielleicht Frühling oder Winter. Ich glaube, es ist Samstagvormittag, weil viele Leute da sind."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man einen großen Supermarkt. Ein Mann schiebt einen vollen Einkaufswagen. An der Kasse warten viele Leute. Vielleicht kauft er für die ganze Woche ein."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie damit? Wo kaufen Sie Obst und Gemüse?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "markt|supermarkt|kaufe|einkauf|obst|gemüse",
          "zum Thema"
         ]
        ],
        "model": "Ich kaufe Obst und Gemüse meistens am Samstag auf dem Markt. Unter der Woche gehe ich in den Supermarkt neben meiner Arbeit, weil das schneller geht."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das Einkaufen in Ihrem Heimatland? Was finden Sie in Deutschland besser oder schlechter?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien kaufen viele Leute auf kleinen Märkten oder bei Händlern auf der Straße. Dort ist es laut und bunt, und man kann über den Preis sprechen. In Deutschland finde ich gut, dass alles sehr ordentlich ist. Aber ich finde es schade, dass die Geschäfte am Sonntag geschlossen sind."
       },
       {
        "who": "Anna",
        "say": "Das kenne ich aus Polen auch – bei uns sind die Märkte auch viel lebendiger."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihre Nachbarin hat ein Baby bekommen. Sie möchten ihr zusammen ein Geschenk machen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Was schenken? · Wie viel kostet es? · Wer kauft es? · Wann bringen Sie es vorbei?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihre Nachbarin hat ein Baby bekommen. Sie möchten ihr zusammen ein Geschenk machen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Was schenken? · Wie viel kostet es? · Wer kauft es? · Wann bringen Sie es vorbei?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unsere Nachbarin Frau Meyer hat ein Baby bekommen. Wollen wir ihr etwas schenken? Ich denke an Babykleidung."
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, gute Idee! Aber Babykleidung bekommt sie bestimmt von vielen Leuten. Vielleicht lieber einen Gutschein für ein Babygeschäft, dann kann sie selbst aussuchen."
       },
       {
        "who": "Anna",
        "say": "Ein Gutschein ist gut. Wie viel wollen wir ausgeben?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "geschenk|baby|kaufen|euro|vorbei|besuch|kleidung|gutschein|blumen",
          "zum Plan"
         ]
        ],
        "model": "Ich schlage vor, dass jeder 20 Euro gibt. Dann haben wir 40 Euro, das ist genug. Wir könnten noch Blumen dazu kaufen."
       },
       {
        "who": "Anna",
        "say": "Einverstanden. Wer kauft den Gutschein, und wann bringen wir ihn vorbei?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kann den Gutschein morgen nach der Arbeit kaufen. Kannst du die Blumen besorgen? Wir könnten am Sonntagnachmittag zusammen vorbeigehen."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "geschenk|baby|kaufen|euro|vorbei|besuch|kleidung|gutschein|blumen",
          "Plan"
         ]
        ],
        "model": "Also, wir schenken Frau Meyer einen Gutschein für 40 Euro und Blumen. Jeder gibt 20 Euro. Ich kaufe den Gutschein, du kaufst die Blumen, und am Sonntagnachmittag besuchen wir sie zusammen."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-9",
  "title": "Modelltest 8",
  "level": "schwer",
  "sub": "Schule, Verkehr, Nachbarschaft · Schule / Hausverwaltung",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Ibrahim tun?",
        "o": [
         "Mit dem Lehrer telefonieren.",
         "Ihren Sohn früher abholen.",
         "Ein Formular unterschreiben."
        ],
        "a": 1,
        "why": "Die letzten zwei Stunden fallen aus – sie soll ihn um 11:30 Uhr abholen; das Formular ist schon da.",
        "audio": "Guten Tag, Frau Ibrahim, hier ist Frau Sommer, das Sekretariat der Erich-Kästner-Schule. Morgen fallen bei Ihrem Sohn Yusuf die letzten zwei Stunden aus, weil Herr Krause krank ist. Die Kinder haben also schon um halb zwölf Schluss. Ihr Einverständnis, dass Yusuf allein nach Hause gehen darf, haben wir leider nicht. Bitte holen Sie ihn deshalb um halb zwölf ab."
       },
       {
        "q": "Was ist mit dem Auto von Herrn Becker?",
        "o": [
         "Es ist schon fertig.",
         "Es braucht ein neues Teil, das erst morgen kommt.",
         "Die Reparatur wird teurer."
        ],
        "a": 2,
        "why": "Die Bremsen sind auch kaputt – es wird 200 Euro teurer; fertig ist es trotzdem heute.",
        "audio": "Hallo Herr Becker, Autohaus Neumann hier. Wir haben uns Ihr Auto angesehen. Der Ölwechsel ist kein Problem, aber die Bremsen sind auch ziemlich kaputt. Das kostet ungefähr 200 Euro mehr. Wenn Sie einverstanden sind, machen wir das heute noch, dann ist das Auto um 17 Uhr fertig. Bitte rufen Sie kurz zurück."
       },
       {
        "q": "Wann ist die Besichtigung?",
        "o": [
         "Am Mittwoch um 18 Uhr.",
         "Am Mittwoch um 17 Uhr.",
         "Am Dienstag um 18 Uhr."
        ],
        "a": 0,
        "why": "Dienstag geht nicht mehr, Mittwoch um 17 Uhr ist schon besetzt – also Mittwoch um 18 Uhr.",
        "audio": "Guten Tag, Herr Schulz, hier ist Frau Krämer von Immobilien Krämer. Sie hatten nach einem Besichtigungstermin für die Wohnung in der Uhlandstraße gefragt. Den Dienstag kann ich Ihnen leider nicht mehr anbieten. Am Mittwoch um 17 Uhr kommt schon eine andere Familie, aber um 18 Uhr hätte ich noch Zeit. Ich trage Sie für 18 Uhr ein."
       },
       {
        "q": "Was hat Frau Yilmaz gewonnen?",
        "o": [
         "Einen Gutschein.",
         "Ein Fahrrad.",
         "Eine Reise."
        ],
        "a": 0,
        "why": "Den Gutschein über 100 Euro – das Fahrrad war der erste Preis für jemand anderen.",
        "audio": "Herzlichen Glückwunsch, Frau Yilmaz! Hier ist das Team vom Fahrradladen Pedal. Bei unserem Gewinnspiel zum Stadtfest haben Sie den zweiten Preis gewonnen: einen Gutschein über 100 Euro für unseren Laden. Das Fahrrad, also den ersten Preis, hat leider jemand anderes gewonnen. Sie können den Gutschein ab Montag bei uns abholen."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Was ist das Thema der Sendung?",
        "o": [
         "Wie Eltern Geld sparen können.",
         "Wie Kinder mit dem Handy umgehen.",
         "Welche Schule die beste ist."
        ],
        "a": 1,
        "why": "Ab wann ein Smartphone, wie viele Stunden am Bildschirm …",
        "audio": "Ab wann sollte ein Kind ein eigenes Smartphone haben? Und wie viele Stunden am Bildschirm sind zu viel? Darüber sprechen wir heute mit einer Medienpädagogin. Und Sie, liebe Hörerinnen und Hörer, können anrufen und von Ihren Erfahrungen erzählen."
       },
       {
        "q": "Was passiert am Samstag?",
        "o": [
         "Die Geschäfte haben länger geöffnet.",
         "Die Busse fahren kostenlos.",
         "Die Innenstadt ist für Autos gesperrt."
        ],
        "a": 2,
        "why": "Wegen des Stadtlaufs ist die Innenstadt für Autos gesperrt; Busse fahren Umleitungen.",
        "audio": "Ein Hinweis für alle Autofahrer: Wegen des Stadtlaufs ist die Innenstadt am Samstag von 8 bis 15 Uhr für Autos gesperrt. Die Busse fahren in dieser Zeit Umleitungen. Bitte nutzen Sie die Parkhäuser am Stadtrand. Die Geschäfte haben normal geöffnet."
       },
       {
        "q": "Wie ist das Wetter morgen am Nachmittag?",
        "o": [
         "Es gibt Gewitter.",
         "Sonnig und warm.",
         "Es ist neblig."
        ],
        "a": 0,
        "why": "Morgens noch Nebel, nachmittags Gewitter.",
        "audio": "Das Wetter für morgen: Am Morgen gibt es in vielen Regionen noch Nebel, der sich aber schnell auflöst. Bis zum Mittag scheint die Sonne bei bis zu 28 Grad. Am Nachmittag ziehen dann von Westen kräftige Gewitter auf, auch Hagel ist möglich."
       },
       {
        "q": "Was bekommen die Besucher des Tages der offenen Tür?",
        "o": [
         "Kostenlosen Eintritt.",
         "Ein kleines Geschenk.",
         "Eine kostenlose Fahrt."
        ],
        "a": 0,
        "why": "Der Eintritt ist frei; Führungen gibt es, ein Geschenk wird nicht genannt.",
        "audio": "Am Sonntag lädt die Feuerwehr zum Tag der offenen Tür ein. Von 10 bis 17 Uhr können Groß und Klein die Feuerwehrautos ansehen, und es gibt Führungen durch die Wache. Der Eintritt ist frei. Für Essen und Getränke sorgt der Förderverein."
       },
       {
        "q": "Wer kann sich für das Programm bewerben?",
        "o": [
         "Nur Studenten.",
         "Junge Leute bis 27 Jahre.",
         "Alle Arbeitslosen."
        ],
        "a": 1,
        "why": "für junge Menschen zwischen 16 und 27 Jahren",
        "audio": "Sie möchten etwas Gutes tun und gleichzeitig Erfahrungen sammeln? Für das Freiwillige Soziale Jahr können sich junge Menschen zwischen 16 und 27 Jahren bewerben – zum Beispiel in Krankenhäusern, Kitas oder Sportvereinen. Sie bekommen ein kleines Taschengeld. Mehr Informationen gibt es auf unserer Internetseite."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Mutter ist mit der Note zufrieden.",
        "a": false,
        "why": "Sie macht sich Sorgen wegen der Vier.",
        "audio": "Lehrer: Guten Tag, Frau Rossi. Schön, dass Sie da sind.\nFrau: Guten Tag, Herr Haller. Ich mache mir Sorgen. Luca hat in Mathe eine Vier geschrieben.\nLehrer: Ja, aber Luca ist nicht schlecht. Er macht oft Fehler, weil er zu schnell arbeitet. Wir haben in der Schule eine Lerngruppe, dienstags nach dem Unterricht. Das wäre gut für ihn.\nFrau: Kostet das etwas?\nLehrer: Nein, das ist ein Angebot der Schule."
       },
       {
        "q": "Was schlägt der Lehrer vor?",
        "o": [
         "Nachhilfe bei einer Firma.",
         "Eine kostenlose Lerngruppe.",
         "Mehr Hausaufgaben."
        ],
        "a": 1,
        "same": true,
        "why": "„Wir haben in der Schule eine Lerngruppe … Nein, das ist ein Angebot der Schule.“ – kostenlos"
       },
       {
        "q": "Der Mann kann das Ticket im Bus kaufen.",
        "a": false,
        "why": "Im Bus gibt es keine Tickets mehr – nur am Automaten oder per App.",
        "audio": "Mann: Entschuldigung, kann ich bei Ihnen ein Ticket kaufen?\nBusfahrerin: Nein, tut mir leid, seit Januar verkaufen wir im Bus keine Fahrkarten mehr.\nMann: Und wo bekomme ich jetzt eins?\nBusfahrerin: Am Automaten dort an der Haltestelle oder mit der App. Der Automat nimmt auch Karten.\nMann: Gut, dann kaufe ich schnell eins am Automaten. Warten Sie kurz?\nBusfahrerin: Eine Minute, dann muss ich losfahren."
       },
       {
        "q": "Wie bekommt der Mann sein Ticket?",
        "o": [
         "Bei der Busfahrerin.",
         "Am Automaten.",
         "Mit der App."
        ],
        "a": 1,
        "same": true,
        "why": "„dann kaufe ich schnell eins am Automaten“ – im Bus gibt es keine Fahrkarten mehr"
       },
       {
        "q": "Die Nachbarin beschwert sich über laute Musik.",
        "a": false,
        "why": "Sie beschwert sich über den Kinderwagen und die Fahrräder im Treppenhaus.",
        "audio": "Frau: Entschuldigung, Herr Malik, haben Sie kurz Zeit?\nMann: Ja, natürlich. Ist etwas mit der Musik gestern Abend? Es war ein Geburtstag.\nFrau: Nein, nein, die Musik war kein Problem. Aber Ihr Kinderwagen und die Fahrräder stehen jeden Tag im Treppenhaus. Ich komme mit meinem Rollator kaum vorbei.\nMann: Oh, das tut mir leid. Ich stelle die Fahrräder ab heute in den Keller."
       },
       {
        "q": "Was macht Herr Malik?",
        "o": [
         "Er kauft einen neuen Kinderwagen.",
         "Er macht leiser Musik.",
         "Er stellt die Fahrräder in den Keller."
        ],
        "a": 2,
        "same": true,
        "why": "„Ich stelle die Fahrräder ab heute in den Keller.“ – die Musik war kein Problem"
       },
       {
        "q": "Die Frau möchte ihr Paket zurückschicken.",
        "a": true,
        "why": "Die Schuhe sind zu klein – sie möchte sie zurückschicken.",
        "audio": "Frau: Guten Tag, ich habe bei Ihnen Schuhe bestellt, aber sie sind zu klein. Ich möchte sie zurückschicken.\nMann: Kein Problem. Möchten Sie das Geld zurück oder lieber eine andere Größe?\nFrau: Lieber eine Nummer größer, die Schuhe gefallen mir sehr gut.\nMann: Dann schicke ich Ihnen einen Rücksendeschein per E-Mail. Die neuen Schuhe schicken wir los, sobald wir die alten haben."
       },
       {
        "q": "Was möchte die Frau?",
        "o": [
         "Andere Schuhe in der gleichen Größe.",
         "Die gleichen Schuhe in einer anderen Größe.",
         "Ihr Geld zurück."
        ],
        "a": 1,
        "same": true,
        "why": "„Lieber eine Nummer größer, die Schuhe gefallen mir sehr gut.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Kinder und Smartphones",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Kinder sollten erst ab 14 ein eigenes Handy bekommen.",
       "Eltern sind beim Handy ein schlechtes Vorbild.",
       "Mit dem Handy können Kinder gut lernen.",
       "Feste Regeln für die Handyzeit sind wichtig.",
       "Ein Handy gibt den Eltern Sicherheit.",
       "In der Schule sollten Handys verboten sein."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 4,
        "why": "Sie ist ruhiger, wenn ihre Tochter sie anrufen kann.",
        "audio": "Meine Tochter fährt jeden Tag mit dem Bus zum Training, und es wird im Winter früh dunkel. Seit sie ein Handy hat, kann sie mich anrufen, wenn der Bus nicht kommt. Ich bin einfach viel ruhiger."
       },
       {
        "q": "Aussage 2",
        "a": 1,
        "why": "Er selbst schaut beim Essen aufs Handy – die Kinder machen es nach.",
        "audio": "Ehrlich gesagt: Ich ärgere mich, wenn meine Kinder beim Essen aufs Handy schauen. Aber dann sehe ich mich selbst, wie ich abends noch E-Mails lese. Die Kinder machen ja nur das, was sie bei uns sehen."
       },
       {
        "q": "Aussage 3",
        "a": 3,
        "why": "Bei ihnen: eine Stunde am Tag, nach 20 Uhr keine Handys.",
        "audio": "Bei uns gibt es klare Absprachen: eine Stunde am Tag, und nach acht Uhr abends bleiben alle Handys in der Küche. Am Anfang gab es Streit, aber jetzt funktioniert es gut. Ohne solche Regeln geht es meiner Meinung nach nicht."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Kreisverwaltung – Wegweiser\nErdgeschoss: Bürgerservice (Ausweise, Meldewesen) · Kfz-Zulassung · Information\n1. Stock: Führerscheinstelle · Straßenverkehrsamt (Parkausweise, Umleitungen)\n2. Stock: Jugendamt (Kita-Gutscheine, Beratung für Eltern) · Schulamt (Schulanmeldung, Schulwechsel)\n3. Stock: Ausländerbehörde (Aufenthalt, Arbeitserlaubnis) · Einbürgerung\n4. Stock: Gesundheitsamt (Impfungen, Schuleingangsuntersuchung) · Veterinäramt",
      "items": [
       {
        "q": "Sie haben ein gebrauchtes Auto gekauft und brauchen ein Kennzeichen.",
        "o": [
         "4. Stock",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 2,
        "why": "Kfz-Zulassung – nicht das Straßenverkehrsamt"
       },
       {
        "q": "Ihre Tochter kommt bald in die Schule und muss vorher untersucht werden.",
        "o": [
         "4. Stock",
         "2. Stock",
         "3. Stock"
        ],
        "a": 0,
        "why": "Schuleingangsuntersuchung – Gesundheitsamt"
       },
       {
        "q": "Sie möchten Ihren ausländischen Führerschein umschreiben lassen.",
        "o": [
         "1. Stock",
         "Erdgeschoss",
         "3. Stock"
        ],
        "a": 0,
        "why": "Führerscheinstelle"
       },
       {
        "q": "Ihr Sohn soll die Schule wechseln, weil Sie umgezogen sind.",
        "o": [
         "1. Stock",
         "Erdgeschoss",
         "2. Stock"
        ],
        "a": 2,
        "why": "Schulamt – Schulwechsel (die neue Adresse meldet man im Erdgeschoss, aber die Frage ist der Schulwechsel)"
       },
       {
        "q": "Ihr Hund braucht für eine Reise ins Ausland ein Dokument.",
        "o": [
         "Erdgeschoss",
         "3. Stock",
         "4. Stock"
        ],
        "a": 2,
        "why": "Veterinäramt (Tiere) – nicht die Ausländerbehörde"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Nachhilfe Plus: Einzelunterricht in Mathe, Deutsch und Englisch, alle Klassen, auch online.",
       "Kinderturnen im TSV: für Kinder von 3 bis 6 Jahren, donnerstags 16 Uhr.",
       "Fahrradwerkstatt im Jugendhaus: Lerne, dein Fahrrad selbst zu reparieren – kostenlos, für 12- bis 18-Jährige.",
       "Second-Hand-Basar: gebrauchte Kinderkleidung und Spielsachen, Samstag 10–14 Uhr, Gemeindehaus.",
       "Schwimmschule Delfin: Kurse für Erwachsene, die nie schwimmen gelernt haben.",
       "Ferienbetreuung der Stadt: Programm für Grundschulkinder in den Sommerferien, 8–16 Uhr.",
       "Musikschule: Gitarre, Klavier und Gesang ab 6 Jahren, Probestunde kostenlos.",
       "Elterncafé im Familienzentrum: Eltern treffen sich, Kinderbetreuung vor Ort, jeden Freitag."
      ],
      "items": [
       {
        "q": "Sie arbeiten im Sommer und wissen nicht, wer auf Ihren Sohn (8 Jahre) aufpasst.",
        "a": 5,
        "why": "Ferienbetreuung für Grundschulkinder"
       },
       {
        "q": "Ihre Kinder sind aus vielen Sachen herausgewachsen. Sie möchten sie verkaufen und günstig neue kaufen.",
        "a": 3,
        "why": "Second-Hand-Basar"
       },
       {
        "q": "Sie sind neu in der Stadt und möchten andere Eltern kennenlernen.",
        "a": 7,
        "why": "Elterncafé"
       },
       {
        "q": "Ihre Tochter (15) hat schlechte Noten in Englisch.",
        "a": 0,
        "why": "Nachhilfe – alle Klassen"
       },
       {
        "q": "Ihr Sohn (10) möchte Fußball im Verein spielen.",
        "a": -1,
        "why": "Kinderturnen ist nur bis 6 Jahre und kein Fußball – keine Anzeige passt."
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Die Schulbücher kosten dieses Jahr nichts.",
        "a": false,
        "why": "Nur Familien mit Leistungen vom Jobcenter oder Wohngeld zahlen nichts; die anderen zahlen 35 Euro.",
        "text": "Liebe Eltern,\nfür das neue Schuljahr können Sie die Schulbücher wieder über die Schule ausleihen. Die Leihgebühr beträgt 35 Euro pro Kind. Familien, die Leistungen vom Jobcenter oder Wohngeld bekommen, zahlen nichts; bitte geben Sie dafür eine Kopie des Bescheids im Sekretariat ab. Das Geld überweisen Sie bitte bis zum 20. August. Wer die Bücher lieber selbst kauft, sagt bitte bis zum 1. August Bescheid.\nDie Schulleitung"
       },
       {
        "q": "Familien mit Wohngeld müssen …",
        "o": [
         "35 Euro überweisen.",
         "einen Bescheid abgeben.",
         "die Bücher selbst kaufen."
        ],
        "a": 1,
        "same": true,
        "why": "„bitte geben Sie dafür eine Kopie des Bescheids im Sekretariat ab“"
       },
       {
        "q": "Die Straße ist im Juli ganz gesperrt.",
        "a": false,
        "why": "Nur eine Fahrspur ist gesperrt; Busse fahren, nur die Haltestelle ist verlegt.",
        "text": "Bauarbeiten in der Bahnhofstraße\nVom 1. bis 31. Juli werden in der Bahnhofstraße neue Wasserleitungen verlegt. In dieser Zeit ist eine Fahrspur gesperrt, der Verkehr wird mit einer Ampel geregelt. Die Bushaltestelle „Bahnhofstraße“ wird um 100 Meter in Richtung Marktplatz verlegt. Anwohner können ihre Garagen weiterhin erreichen, müssen aber mit Wartezeiten rechnen.\nIhr Tiefbauamt"
       },
       {
        "q": "Was ändert sich für Busfahrgäste?",
        "o": [
         "Sie müssen an der Ampel aussteigen.",
         "Die Haltestelle ist an einer anderen Stelle.",
         "Die Busse fahren nicht."
        ],
        "a": 1,
        "same": true,
        "why": "„Die Bushaltestelle … wird um 100 Meter … verlegt.“"
       },
       {
        "q": "Die Nachbarn möchten ein Fest im Hof feiern.",
        "a": true,
        "why": "„Hoffest am 6. September“",
        "text": "Liebe Nachbarinnen und Nachbarn,\nwir möchten am Samstag, 6. September, ab 15 Uhr ein Hoffest feiern, damit wir uns alle besser kennenlernen. Die Hausverwaltung hat schon ja gesagt. Tische und Bänke leiht uns die Kirchengemeinde. Wir bitten jede Familie, etwas zu essen mitzubringen; für Getränke sammeln wir fünf Euro pro Wohnung. Wer beim Aufbau helfen kann, meldet sich bitte bei Familie Akın, Erdgeschoss links.\nIhr Festteam"
       },
       {
        "q": "Wer beim Aufbau helfen möchte, …",
        "o": [
         "ruft die Hausverwaltung an.",
         "geht zur Kirchengemeinde.",
         "spricht mit Familie Akın."
        ],
        "a": 2,
        "same": true,
        "why": "„meldet sich bitte bei Familie Akın“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Neue Regeln für E-Scooter in unserer Stadt\nSeit zwei Jahren kann man in unserer Stadt E-Scooter ausleihen. Viele finden das praktisch, doch es gibt auch Ärger: Die Roller liegen oft mitten auf dem Gehweg und sind gefährlich für ältere Menschen, Blinde und Eltern mit Kinderwagen. Deshalb hat der Stadtrat neue Regeln beschlossen.\nAb dem 1. April dürfen E-Scooter in der Innenstadt nur noch in markierten Parkzonen abgestellt werden. Wer seinen Roller woanders stehen lässt, muss eine Gebühr von 15 Euro an den Verleiher zahlen. Außerdem gilt in der Fußgängerzone ein Fahrverbot – hier darf man die Roller nur schieben.\nWer E-Scooter fährt, muss mindestens 14 Jahre alt sein. Zu zweit auf einem Roller zu fahren, ist verboten, und für Alkohol gelten dieselben Regeln wie beim Autofahren. Die Stadt will nach einem Jahr prüfen, ob die neuen Regeln helfen.",
      "items": [
       {
        "q": "In der Fußgängerzone darf man nicht mit dem E-Scooter fahren.",
        "a": true,
        "why": "Fahrverbot – nur schieben"
       },
       {
        "q": "Wer den Roller falsch parkt, zahlt die Strafe an die Stadt.",
        "a": false,
        "why": "Die Gebühr geht an den Verleiher."
       },
       {
        "q": "Ein 13-jähriges Kind darf mit einem Erwachsenen zusammen auf einem Roller fahren.",
        "a": false,
        "why": "Mindestens 14 Jahre, und zu zweit ist verboten."
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Frau Hartmann,\nich wohne seit fünf Jahren in der Wohnung im dritten Stock und bin eigentlich sehr zufrieden. Leider muss ich Ihnen heute ein Problem mitteilen. Seit dem Umbau im Erdgeschoss funktioniert der Aufzug sehr oft nicht. Für meine Mutter, (1) bei uns wohnt und nicht gut laufen kann, ist das ein großes Problem. Letzte Woche musste sie zwei Tage zu Hause bleiben, (2) sie die Treppe nicht schaffen konnte. Ich habe den Hausmeister schon zweimal informiert, (3) passiert ist leider nichts. Ich bitte Sie deshalb, den Aufzug so schnell wie möglich reparieren zu (4). Außerdem würde ich gern wissen, ob die Miete (5) dieser Zeit gemindert werden kann. Für ein Gespräch stehe ich Ihnen gern zur (6).\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "der",
         "das",
         "die"
        ],
        "a": 2,
        "why": "Relativpronomen: die Mutter → die"
       },
       {
        "n": 2,
        "o": [
         "obwohl",
         "damit",
         "weil"
        ],
        "a": 2,
        "why": "Grund"
       },
       {
        "n": 3,
        "o": [
         "denn",
         "oder",
         "aber"
        ],
        "a": 2,
        "why": "Gegensatz: informiert – aber nichts passiert"
       },
       {
        "n": 4,
        "o": [
         "lassen",
         "werden",
         "machen"
        ],
        "a": 0,
        "why": "etwas reparieren lassen"
       },
       {
        "n": 5,
        "o": [
         "für",
         "seit",
         "um"
        ],
        "a": 0,
        "why": "für diese Zeit"
       },
       {
        "n": 6,
        "o": [
         "Verfügung",
         "Hilfe",
         "Seite"
        ],
        "a": 0,
        "why": "feste Wendung: zur Verfügung stehen"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Ihre Tochter hat Probleme in der Schule: Andere Kinder ärgern sie in der Pause. Schreiben Sie an die Klassenlehrerin, Frau Vogel.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ist passiert?",
       "Wie geht es Ihrer Tochter?",
       "Bitte um ein Gespräch"
      ],
      "model": "Sehr geehrte Frau Vogel,\nich schreibe Ihnen, weil ich mir Sorgen um meine Tochter Priya mache.\nSeit ein paar Wochen ärgern zwei Kinder aus der Klasse sie in der Pause. Sie nehmen ihr das Pausenbrot weg und lachen über ihre Aussprache. Letzten Freitag ist sie weinend nach Hause gekommen.\nPriya möchte morgens nicht mehr gern in die Schule gehen. Sie schläft schlecht und hat oft Bauchschmerzen, obwohl sie früher sehr gern zur Schule gegangen ist.\nIch würde gern mit Ihnen über die Situation sprechen. Hätten Sie nächste Woche Zeit für ein Gespräch? Ich arbeite bis 15 Uhr, deshalb kann ich nachmittags ab 16 Uhr immer kommen.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|sorgen|problem|tochter",
        "Ich schreibe Ihnen, weil ich mir Sorgen um meine Tochter mache."
       ],
       [
        "ärgern|pause|kinder|lachen|weg|streit|passiert",
        "Zwei Kinder ärgern sie seit ein paar Wochen in der Pause."
       ],
       [
        "geht|traurig|weint|schläft|schmerzen|angst|möchte nicht|nicht mehr gern",
        "Sie ist traurig und möchte nicht mehr in die Schule gehen."
       ],
       [
        "gespräch|sprechen|termin|zeit|treffen|kommen",
        "Hätten Sie nächste Woche Zeit für ein Gespräch?"
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Die Hausverwaltung möchte am Donnerstag einen Techniker in Ihre Wohnung schicken. Sie haben an diesem Tag keine Zeit. Schreiben Sie an Frau Hartmann von der Hausverwaltung.",
       "points": [
        "Grund für Ihr Schreiben",
        "Warum geht der Termin nicht?",
        "Neuer Terminvorschlag",
        "Wer kann sonst die Tür öffnen?"
       ],
       "model": "Sehr geehrte Frau Hartmann,\nvielen Dank für Ihren Brief. Sie möchten am Donnerstag, den 14. März, einen Techniker in meine Wohnung schicken.\nLeider passt mir dieser Termin nicht, weil ich an diesem Tag eine Fortbildung in Köln habe und erst spät am Abend zurückkomme.\nKönnte der Techniker vielleicht am Freitag oder am Montag kommen? An beiden Tagen bin ich ab 14 Uhr zu Hause.\nFalls es nur am Donnerstag geht, kann meine Nachbarin, Frau Lehmann aus dem zweiten Stock, die Tür öffnen. Sie hat einen Schlüssel für meine Wohnung.\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "schreibe|brief|termin|techniker|donnerstag",
         "Ich schreibe Ihnen wegen des Termins mit dem Techniker am Donnerstag."
        ],
        [
         "weil|denn|leider|keine zeit|arbeit|fortbildung|reise|arzt",
         "Leider habe ich am Donnerstag keine Zeit, weil ich arbeiten muss."
        ],
        [
         "freitag|montag|dienstag|mittwoch|samstag|nächste woche|ab \\d|uhr|vorschlag",
         "Könnte der Techniker am Freitag ab 14 Uhr kommen?"
        ],
        [
         "nachbar|schlüssel|öffnen|freund|hausmeister",
         "Meine Nachbarin hat einen Schlüssel und kann die Tür öffnen."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben gesagt, Sie wohnen in Frankfurt. Wie wohnen Sie dort? Und wo haben Sie früher gewohnt?"
       },
       {
        "you": "Erzähl: Wie wohnst du jetzt, und wo hast du früher gewohnt?",
        "min": 15,
        "key": [
         [
          "wohnung|zimmer|haus|stock|balkon",
          "Wohnung beschreiben"
         ],
         [
          "früher|vorher|in indien|habe .* gewohnt",
          "früher"
         ]
        ],
        "model": "Ich wohne mit meiner Familie in einer Dreizimmerwohnung im vierten Stock. Die Wohnung hat einen kleinen Balkon. Früher habe ich in Chennai in einem großen Haus mit meinen Eltern gewohnt."
       },
       {
        "who": "Prüferin",
        "say": "Und wie gefällt Ihnen Ihr Stadtteil?"
       },
       {
        "you": "Sag, wie dir dein Stadtteil gefällt – mit Grund.",
        "min": 12,
        "key": [
         [
          "gefällt|finde|schön|gut|laut|ruhig",
          "Meinung"
         ],
         [
          "\\b(weil|denn)\\b",
          "Grund"
         ]
        ],
        "model": "Mein Stadtteil gefällt mir gut, weil es viele Geschäfte und einen schönen Park gibt. Nur abends ist es manchmal etwas laut."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Mit dem Fahrrad zur Arbeit. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-9.jpg",
         "alt": "Eine Straße im Regen: Eine Person fährt mit dem Fahrrad und hält einen rosa Regenschirm. Die Straße ist nass, hinten sind Geschäfte und ein Mann geht vorbei.",
         "by": "Jules Kassas",
         "link": "https://unsplash.com/photos/eine-person-die-mit-einem-regenschirm-fahrrad-fahrt-mKtzkINfsEo"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "fahrrad|rad|regen|regenschirm|schirm|nass|straße|person|frau|stadt|geschäft",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sieht man eine Straße in der Stadt. Es regnet, und die Straße ist nass. Eine Person fährt mit dem Fahrrad und hält dabei einen rosa Regenschirm. Das ist ziemlich gefährlich, finde ich. Ich glaube, sie fährt zur Arbeit und will trotz Regen nicht mit dem Bus fahren."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man einen vollen Bus. Die Leute stehen ganz eng, und viele schauen auf ihr Handy. Vielleicht ist es morgens um acht."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Wie kommen Sie zur Arbeit oder zum Kurs?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "fahrrad|bus|bahn|auto|zu fuß|fahre|arbeit|kurs|minuten|weg",
          "zum Thema"
         ]
        ],
        "model": "Ich fahre meistens mit der S-Bahn zur Arbeit, das dauert ungefähr 30 Minuten. Im Sommer fahre ich manchmal mit dem Fahrrad, weil ich mich dann mehr bewege."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Fahren dort viele Leute mit dem Fahrrad? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien fahren in den großen Städten viele Leute Motorrad oder Auto, mit dem Fahrrad ist es oft zu gefährlich und zu heiß. In Deutschland finde ich die Radwege sehr gut. Ich denke, die Städte sollten noch mehr Radwege bauen, weil das gut für die Umwelt und die Gesundheit ist."
       },
       {
        "who": "Anna",
        "say": "Da stimme ich zu. In Danzig gibt es auch immer mehr Radwege."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihr Deutschkurs ist bald zu Ende. Sie möchten zusammen mit Ihrer Partnerin einen gemeinsamen Ausflug für die ganze Klasse planen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wohin? · Wann? · Wie kommen alle hin? · Was kostet es?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihr Deutschkurs ist bald zu Ende. Sie möchten zusammen mit Ihrer Partnerin einen gemeinsamen Ausflug für die ganze Klasse planen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wohin? · Wann? · Wie kommen alle hin? · Was kostet es?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Unser Kurs ist in drei Wochen zu Ende. Wollen wir mit der Klasse in ein Museum gehen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ein Museum ist interessant, aber im Sommer würde ich lieber nach draußen gehen, weil wir dann auch zusammen essen und reden können. Wie wäre es mit einem Picknick am See?"
       },
       {
        "who": "Anna",
        "say": "Gute Idee! Aber wann haben alle Zeit? Viele arbeiten unter der Woche."
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "ausflug|fahren|see|museum|zug|bus|samstag|sonntag|euro|kosten|picknick|klasse|ticket",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten einen Samstag nehmen, zum Beispiel den letzten Samstag im Juni. Dann haben die meisten frei."
       },
       {
        "who": "Anna",
        "say": "Okay. Wie kommen wir hin, und wer organisiert das Essen?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Mit dem Gruppenticket für die Regionalbahn ist es billig, ungefähr fünf Euro pro Person. Ich kümmere mich um die Tickets. Kannst du eine Liste machen, wer was zum Essen mitbringt?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "ausflug|fahren|see|museum|zug|bus|samstag|sonntag|euro|kosten|picknick|klasse|ticket",
          "Plan"
         ]
        ],
        "model": "Also, wir machen am letzten Samstag im Juni ein Picknick am See. Wir fahren mit dem Gruppenticket, das kostet etwa fünf Euro pro Person. Ich kaufe die Tickets, und du machst eine Liste für das Essen."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-8",
  "title": "Modelltest 9",
  "level": "schwer",
  "sub": "Arbeit, Ämter, Gesundheit · Krankenkasse / Arbeitgeber",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Osei tun?",
        "o": [
         "Die Unterlagen per Post schicken.",
         "Am Montag früher kommen.",
         "Sofort zurückrufen."
        ],
        "a": 1,
        "why": "Der Termin bleibt am Montag, aber schon um 8 statt um 9 Uhr – also früher kommen. Die Unterlagen bringt er mit, zurückrufen muss er nur, wenn es nicht geht.",
        "audio": "Guten Tag, Herr Osei, hier ist Frau Brenner von der Agentur für Arbeit. Es geht um Ihren Termin am Montag. Der Termin bleibt, aber wir müssen ihn eine Stunde vorziehen, also auf acht Uhr. Ihre Unterlagen müssen Sie nicht vorher schicken, bringen Sie sie einfach mit. Nur wenn acht Uhr für Sie nicht geht, rufen Sie mich bitte zurück."
       },
       {
        "q": "Warum ruft die Praxis an?",
        "o": [
         "Die Ärztin ist krank.",
         "Ein Laborergebnis fehlt noch.",
         "Frau Kühn soll ihr Rezept abholen."
        ],
        "a": 1,
        "why": "Die Blutwerte sind noch nicht da – das Rezept gibt es erst danach.",
        "audio": "Hallo Frau Kühn, hier ist die Praxis Doktor Aydin. Sie wollten heute Nachmittag Ihr neues Rezept abholen. Leider sind Ihre Blutwerte aus dem Labor noch nicht da, und ohne die Werte kann Frau Doktor Aydin die Dosis nicht ändern. Wir melden uns wieder, sobald das Ergebnis da ist – wahrscheinlich am Donnerstag."
       },
       {
        "q": "Wann kann Frau Petrova das Paket abholen?",
        "o": [
         "Am Samstagvormittag.",
         "Morgen ab 9 Uhr.",
         "Heute ab 15 Uhr."
        ],
        "a": 1,
        "why": "Heute ist der Laden schon geschlossen – morgen ab neun Uhr.",
        "audio": "Guten Tag, hier ist der Paketshop im Kiosk Sonnenschein. Für Frau Petrova liegt ein Paket bei uns. Heute haben wir wegen einer Familienfeier schon um 14 Uhr geschlossen. Sie können das Paket ab morgen um neun Uhr abholen – bitte bringen Sie Ihren Ausweis mit. Samstags haben wir übrigens nur bis zwölf geöffnet."
       },
       {
        "q": "Was ist das Problem?",
        "o": [
         "Eine Unterschrift fehlt.",
         "Die Rechnung ist zu hoch.",
         "Das Formular ist alt."
        ],
        "a": 0,
        "why": "Auf Seite drei fehlt die Unterschrift – das Formular selbst ist richtig.",
        "audio": "Hallo Herr Navarro, hier ist Frau Lindner von der Familienkasse. Ihr Antrag auf Kindergeld ist bei uns angekommen, vielen Dank. Das Formular ist das richtige, und die Geburtsurkunde ist auch dabei. Aber auf Seite drei haben Sie leider nicht unterschrieben. Bitte kommen Sie kurz vorbei oder schicken Sie uns die Seite noch einmal."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worüber spricht die Sendung heute?",
        "o": [
         "Über Hilfe bei der Jobsuche.",
         "Über Rechte von Mietern.",
         "Über Sport im Alter."
        ],
        "a": 0,
        "why": "Bewerbung, Lebenslauf, Vorstellungsgespräch = Jobsuche.",
        "audio": "Willkommen bei „Neu in der Stadt“. Viele von Ihnen haben uns geschrieben: Wie schreibe ich einen guten Lebenslauf? Und was frage ich im Vorstellungsgespräch? Heute ist eine Beraterin vom Jobcenter bei uns im Studio und beantwortet Ihre Fragen. Rufen Sie an!"
       },
       {
        "q": "Wie wird das Wetter am Wochenende?",
        "o": [
         "Es wird wärmer und bleibt trocken.",
         "Es wird kälter, aber sonnig.",
         "Am Samstag regnet es, am Sonntag nicht."
        ],
        "a": 0,
        "why": "Der Regen hört Freitagnacht auf, am Wochenende bis zu 24 Grad und kein Regen.",
        "audio": "Und nun das Wetter. Heute und morgen regnet es noch viel, die Temperaturen liegen bei 15 Grad. In der Nacht zum Samstag hört der Regen auf. Am Wochenende wird es dann deutlich wärmer, mit bis zu 24 Grad, und es bleibt trocken."
       },
       {
        "q": "Was sollen die Autofahrer tun?",
        "o": [
         "Bei Darmstadt die Autobahn verlassen.",
         "Langsamer fahren wegen Nebel.",
         "Die A5 in Richtung Süden nehmen."
        ],
        "a": 0,
        "why": "Wegen des Unfalls die A5 schon bei Darmstadt verlassen und über die Bundesstraße fahren.",
        "audio": "Die Verkehrslage: Auf der A5 Richtung Norden gibt es nach einem Unfall zwischen Darmstadt und Frankfurt zwölf Kilometer Stau. Die Polizei rät, die Autobahn schon bei Darmstadt zu verlassen und über die Bundesstraße drei zu fahren. In Richtung Süden ist die Strecke frei."
       },
       {
        "q": "Was ist neu in der Stadtbibliothek?",
        "o": [
         "Sie hat am Sonntag geöffnet.",
         "Die Ausleihe ist jetzt kostenlos.",
         "Man kann dort Deutsch üben."
        ],
        "a": 2,
        "why": "Neu ist das Sprachcafé zum Deutschüben; die Öffnungszeiten bleiben gleich.",
        "audio": "Ein Tipp für alle, die Deutsch lernen: Die Stadtbibliothek startet ab nächster Woche ein Sprachcafé. Jeden Mittwoch um 18 Uhr können Sie dort mit Ehrenamtlichen Deutsch sprechen – ohne Anmeldung. Die Öffnungszeiten der Bibliothek bleiben gleich, also Dienstag bis Samstag."
       },
       {
        "q": "Für wen ist das Angebot?",
        "o": [
         "Für alle, die ein Fahrrad kaufen wollen.",
         "Für Menschen über 65.",
         "Für Familien mit kleinen Kindern."
        ],
        "a": 1,
        "why": "Kostenloses Fahrradtraining für Seniorinnen und Senioren ab 65.",
        "audio": "Die Verkehrswacht bietet im Mai wieder ein kostenloses Fahrradtraining an. Es richtet sich an Seniorinnen und Senioren ab 65, die wieder sicher Rad fahren möchten. Ein eigenes Fahrrad ist nicht nötig, Leihräder sind vorhanden. Anmeldung unter 069 445566."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Herr Weber kann den Kurs bezahlen.",
        "a": false,
        "why": "Er hat das Geld im Moment nicht – das Jobcenter soll helfen.",
        "audio": "Frau: Guten Tag, Herr Weber, was kann ich für Sie tun?\nMann: Ich möchte einen Gabelstaplerkurs machen, damit ich im Lager bessere Chancen habe. Aber der Kurs kostet 900 Euro, und das Geld habe ich im Moment nicht.\nFrau: Dafür gibt es den Bildungsgutschein. Wenn Sie arbeitslos gemeldet sind, kann das Jobcenter die Kosten übernehmen.\nMann: Arbeitslos gemeldet bin ich seit März.\nFrau: Gut, dann füllen Sie bitte diesen Antrag aus."
       },
       {
        "q": "Was bekommt Herr Weber?",
        "o": [
         "Einen Antrag für den Bildungsgutschein.",
         "Einen Job im Lager.",
         "Den Kurs zum halben Preis."
        ],
        "a": 0,
        "same": true,
        "why": "„Dafür gibt es den Bildungsgutschein … dann füllen Sie bitte diesen Antrag aus.“"
       },
       {
        "q": "Die Frau möchte die Schicht tauschen.",
        "a": true,
        "why": "Sie möchte ihre Spätschicht am Freitag mit der Frühschicht tauschen.",
        "audio": "Frau: Du, Marco, hast du am Freitag Frühschicht?\nMann: Ja, warum?\nFrau: Meine Tochter hat am Freitagnachmittag eine Aufführung in der Schule. Könntest du meine Spätschicht nehmen? Dann mache ich deine Frühschicht.\nMann: Hm, Freitagabend wollte ich eigentlich ins Kino. Aber gut, für so etwas mache ich das. Dann übernimmst du aber nächste Woche einmal meinen Samstag.\nFrau: Abgemacht, danke!"
       },
       {
        "q": "Was verspricht die Frau?",
        "o": [
         "Einen Samstag für Marco zu arbeiten.",
         "Mit Marco ins Kino zu gehen.",
         "Ihn zur Aufführung einzuladen."
        ],
        "a": 0,
        "same": true,
        "why": "„Dann übernimmst du aber nächste Woche einmal meinen Samstag.“ – „Abgemacht“"
       },
       {
        "q": "Der Mann hat seine Versichertenkarte dabei.",
        "a": false,
        "why": "Er hat sie zu Hause vergessen.",
        "audio": "Frau: Guten Morgen. Haben Sie Ihre Versichertenkarte dabei?\nMann: Oh nein, die liegt noch zu Hause auf dem Schreibtisch.\nFrau: Das ist kein Problem. Sie können heute trotzdem zum Arzt. Bringen Sie die Karte aber bitte bis Ende des Quartals vorbei, sonst müssen wir Ihnen die Behandlung privat berechnen.\nMann: Gut, ich bringe sie nächste Woche."
       },
       {
        "q": "Was passiert, wenn er die Karte nicht bringt?",
        "o": [
         "Er bekommt heute keinen Termin.",
         "Er muss die Behandlung selbst bezahlen.",
         "Er muss einen neuen Antrag stellen."
        ],
        "a": 1,
        "same": true,
        "why": "„sonst müssen wir Ihnen die Behandlung privat berechnen“ = selbst bezahlen"
       },
       {
        "q": "Die beiden Frauen kennen sich schon lange.",
        "a": false,
        "why": "Die Frau ist neu im Haus – sie lernen sich gerade kennen.",
        "audio": "Frau 1: Hallo, ich bin Sabine aus dem zweiten Stock. Sie sind neu hier, oder?\nFrau 2: Ja, ich bin letzte Woche eingezogen. Ich heiße Amira.\nFrau 1: Willkommen! Wenn Sie Fragen haben, klingeln Sie einfach. Ach ja: Die Mülltonnen werden hier nicht vom Hausmeister rausgestellt, das machen die Mieter abwechselnd. Diese Woche wäre eigentlich ich dran, aber ich bin ab morgen verreist.\nFrau 2: Dann mache ich das diese Woche gern."
       },
       {
        "q": "Was macht Amira diese Woche?",
        "o": [
         "Sie ruft den Hausmeister an.",
         "Sie verreist.",
         "Sie stellt die Mülltonnen raus."
        ],
        "a": 2,
        "same": true,
        "why": "„Dann mache ich das diese Woche gern.“ – die Mülltonnen rausstellen"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Arbeiten im Homeoffice",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Zu Hause kann man sich schlecht konzentrieren.",
       "Man spart viel Zeit, weil der Weg zur Arbeit wegfällt.",
       "Die Kollegen fehlen einem.",
       "Der Chef kontrolliert zu Hause zu viel.",
       "Homeoffice ist nur für manche Berufe möglich.",
       "Ohne gute Technik funktioniert Homeoffice nicht."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "Er vermisst die Gespräche in der Kaffeeküche – die Kollegen fehlen.",
        "audio": "Am Anfang fand ich es super, im Schlafanzug am Schreibtisch zu sitzen. Aber nach ein paar Monaten habe ich gemerkt, wie sehr mir die kurzen Gespräche in der Kaffeeküche fehlen. Am Bildschirm ist das einfach nicht dasselbe."
       },
       {
        "q": "Aussage 2",
        "a": 4,
        "why": "Als Krankenpflegerin kann sie nicht zu Hause arbeiten.",
        "audio": "Alle reden vom Homeoffice. Ich arbeite als Krankenpflegerin – wie soll das bei mir gehen? Für Leute im Büro ist das schön, aber im Krankenhaus, im Supermarkt oder auf dem Bau gibt es so etwas nicht."
       },
       {
        "q": "Aussage 3",
        "a": 1,
        "why": "Er spart jeden Tag zwei Stunden Fahrzeit.",
        "audio": "Früher war ich jeden Tag zwei Stunden im Zug, hin und zurück. Diese Zeit habe ich jetzt für meine Familie. Ich stehe auf, mache Kaffee und fange an. Ich möchte das nie mehr anders haben."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Volkshochschule – Kursprogramm Herbst\nErdgeschoss: Anmeldung und Beratung · Kasse · Cafeteria\n1. Stock: Sprachen (Deutsch als Zweitsprache, Englisch, Spanisch) · Einstufungstests\n2. Stock: Beruf und EDV (Computerkurse, Bewerbungstraining, Buchhaltung)\n3. Stock: Gesundheit (Yoga, Rückenschule, Kochen für Diabetiker) · Elternkurse (Erste Hilfe am Kind)\n4. Stock: Kultur (Malen, Fotografie, Theater) · Prüfungszentrum (telc, DTZ)",
      "items": [
       {
        "q": "Sie möchten wissen, welcher Deutschkurs zu Ihrem Niveau passt.",
        "o": [
         "1. Stock",
         "4. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "Einstufungstests – 1. Stock (nicht das Prüfungszentrum)"
       },
       {
        "q": "Sie haben Rückenschmerzen und möchten etwas dagegen tun.",
        "o": [
         "2. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Rückenschule – Gesundheit"
       },
       {
        "q": "Sie suchen Hilfe für Ihre Unterlagen, weil Sie eine neue Stelle suchen.",
        "o": [
         "4. Stock",
         "1. Stock",
         "2. Stock"
        ],
        "a": 2,
        "why": "Bewerbungstraining – Beruf und EDV"
       },
       {
        "q": "Sie möchten Ihre Kursgebühr bar bezahlen.",
        "o": [
         "2. Stock",
         "Erdgeschoss",
         "4. Stock"
        ],
        "a": 1,
        "why": "Kasse"
       },
       {
        "q": "Ihr Baby ist oft krank und Sie wollen wissen, was Sie im Notfall tun können.",
        "o": [
         "3. Stock",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "Erste Hilfe am Kind – Elternkurse"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Steuerberatung Klein: Hilfe bei der Steuererklärung für Arbeitnehmer, auch auf Englisch und Türkisch.",
       "Schuldnerberatung der Caritas: kostenlose Beratung, wenn Sie Ihre Rechnungen nicht mehr bezahlen können.",
       "Fahrschule Tempo: Führerschein Klasse B, Theorie auch auf Arabisch und Russisch.",
       "Übersetzungsbüro Lingua: beglaubigte Übersetzungen von Zeugnissen und Urkunden.",
       "Mieterverein: Beratung bei Kündigung, Mieterhöhung und Problemen mit der Kaution.",
       "Pflegedienst Sonne: Hilfe zu Hause für ältere und kranke Menschen.",
       "Kinderbetreuung Wichtel: Babysitter für abends und am Wochenende.",
       "Sprachschule Babel: Intensivkurse Englisch für Beruf und Reise."
      ],
      "items": [
       {
        "q": "Ihr Vermieter will die Miete um 15 Prozent erhöhen. Sie finden das zu viel.",
        "a": 4,
        "why": "Mieterverein – Mieterhöhung"
       },
       {
        "q": "Ihre Mutter kann nach einer Operation nicht allein einkaufen und putzen.",
        "a": 5,
        "why": "Pflegedienst – Hilfe zu Hause"
       },
       {
        "q": "Sie möchten Ihren Führerschein aus Ihrem Heimatland umschreiben lassen.",
        "a": -1,
        "why": "Die Fahrschule macht neue Führerscheine; umschreiben macht die Führerscheinstelle – keine Anzeige passt."
       },
       {
        "q": "Für eine Bewerbung brauchen Sie Ihr Diplom auf Deutsch.",
        "a": 3,
        "why": "beglaubigte Übersetzung von Zeugnissen"
       },
       {
        "q": "Sie haben viele offene Rechnungen und wissen nicht mehr weiter.",
        "a": 1,
        "why": "Schuldnerberatung"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Die Praxis ist im August drei Wochen geschlossen.",
        "a": false,
        "why": "Nur zwei Wochen: vom 4. bis 15. August.",
        "text": "Liebe Patientinnen und Patienten,\nunsere Praxis bleibt vom 4. bis 15. August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an die Praxis Dr. Haas in der Bahnhofstraße 7. Rezepte für Dauermedikamente können Sie noch bis zum 1. August bei uns abholen. Ab dem 18. August sind wir wieder wie gewohnt für Sie da.\nIhr Praxisteam Dr. Morina"
       },
       {
        "q": "Wer Medikamente regelmäßig braucht, …",
        "o": [
         "bekommt das Rezept bei Dr. Haas.",
         "sollte das Rezept vor dem Urlaub abholen.",
         "kann am 18. August anrufen."
        ],
        "a": 1,
        "same": true,
        "why": "„Rezepte für Dauermedikamente können Sie noch bis zum 1. August bei uns abholen.“"
       },
       {
        "q": "Für den Kurs muss man schon gut Deutsch sprechen.",
        "a": false,
        "why": "Es reichen Deutschkenntnisse auf A2-Niveau.",
        "text": "Fit für den Job – Kurs für Zugewanderte\nIn sechs Wochen lernen Sie, wie man Bewerbungen schreibt, wie ein Vorstellungsgespräch in Deutschland abläuft und welche Rechte Sie als Arbeitnehmer haben. Der Kurs ist für Menschen mit Deutschkenntnissen ab A2. Er findet dienstags und donnerstags von 17 bis 19 Uhr statt. Für Arbeitsuchende ist der Kurs kostenlos, alle anderen zahlen 60 Euro."
       },
       {
        "q": "Was müssen Arbeitsuchende bezahlen?",
        "o": [
         "Nichts.",
         "Die Hälfte.",
         "60 Euro."
        ],
        "a": 0,
        "same": true,
        "why": "„Für Arbeitsuchende ist der Kurs kostenlos“"
       },
       {
        "q": "Die Mieter dürfen die Waschküche ab sofort nur noch am Wochenende benutzen.",
        "a": false,
        "why": "Am Wochenende gerade nicht – Montag bis Samstag, sonntags nicht.",
        "text": "Neue Regeln für die Waschküche\nIn letzter Zeit gab es Streit, weil Wäsche tagelang im Trockenraum hing. Deshalb gilt ab 1. Oktober: Bitte tragen Sie sich in den Plan an der Tür ein. Jede Wohnung kann die Waschmaschine zweimal pro Woche für drei Stunden benutzen. Die Waschküche ist montags bis samstags von 7 bis 21 Uhr offen, sonntags bleibt sie geschlossen. Nehmen Sie Ihre trockene Wäsche bitte spätestens am nächsten Tag ab.\nDie Hausverwaltung"
       },
       {
        "q": "Warum gibt es die neuen Regeln?",
        "o": [
         "Die Waschmaschine war kaputt.",
         "Es gab zu viel Lärm.",
         "Die Wäsche hing zu lange."
        ],
        "a": 2,
        "same": true,
        "why": "„Streit, weil Wäsche tagelang im Trockenraum hing“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Elternzeit und Elterngeld – das Wichtigste in Kürze\nMütter und Väter können nach der Geburt eines Kindes bis zu drei Jahre Elternzeit nehmen. In dieser Zeit ist der Arbeitsplatz geschützt: Der Arbeitgeber darf normalerweise nicht kündigen. Die Elternzeit muss spätestens sieben Wochen vor ihrem Beginn schriftlich beim Arbeitgeber beantragt werden.\nWährend der Elternzeit bekommen viele Eltern Elterngeld. Es beträgt zwischen 65 und 67 Prozent des letzten Nettoeinkommens, mindestens aber 300 Euro im Monat – auch für Eltern, die vorher nicht gearbeitet haben. Das Basiselterngeld gibt es für bis zu 14 Monate, wenn beide Eltern sich die Zeit teilen; ein Elternteil allein kann höchstens 12 Monate bekommen.\nWer während der Elternzeit in Teilzeit arbeiten möchte, darf bis zu 32 Stunden pro Woche arbeiten. Den Antrag auf Elterngeld stellt man nicht beim Arbeitgeber, sondern bei der Elterngeldstelle der Stadt.",
      "items": [
       {
        "q": "Den Antrag auf Elterngeld stellt man beim Arbeitgeber.",
        "a": false,
        "why": "bei der Elterngeldstelle der Stadt"
       },
       {
        "q": "Auch wer vor der Geburt nicht gearbeitet hat, kann Elterngeld bekommen.",
        "a": true,
        "why": "mindestens 300 Euro – auch ohne Arbeit vorher"
       },
       {
        "q": "Ein Vater allein kann 14 Monate Basiselterngeld bekommen.",
        "a": false,
        "why": "Allein höchstens 12 Monate, 14 nur, wenn beide Eltern teilen."
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Damen und Herren,\nseit drei Jahren bin ich bei Ihnen versichert und war bisher immer sehr zufrieden. Im März war ich wegen starker Rückenschmerzen bei einem Physiotherapeuten. Mein Arzt hat mir sechs Termine verschrieben, (1) die ich eine Zuzahlung von 40 Euro geleistet habe. Nun habe ich erfahren, dass ich wegen meines geringen Einkommens von den Zuzahlungen befreit sein könnte. (2) ich das früher gewusst hätte, hätte ich den Antrag schon im Januar gestellt. Ich bitte Sie deshalb, mir das Formular für die Befreiung zuzuschicken. (3) wäre ich Ihnen dankbar, wenn Sie mir sagen könnten, ob ich die 40 Euro zurückbekommen kann. Meine Gehaltsabrechnungen der letzten drei Monate (4) ich diesem Brief bei. Falls Sie noch weitere Unterlagen brauchen, (5) Sie mich bitte unter der Nummer 0176 3344556 an. Ich freue mich (6) Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "von",
         "mit",
         "für"
        ],
        "a": 2,
        "why": "für etwas eine Zuzahlung leisten – „für die“ (Relativsatz)"
       },
       {
        "n": 2,
        "o": [
         "Damit",
         "Obwohl",
         "Wenn"
        ],
        "a": 2,
        "why": "Konjunktiv II: Wenn ich das gewusst hätte, …"
       },
       {
        "n": 3,
        "o": [
         "Deshalb",
         "Außerdem",
         "Trotzdem"
        ],
        "a": 1,
        "why": "eine zweite Bitte → außerdem"
       },
       {
        "n": 4,
        "o": [
         "setze",
         "stelle",
         "lege"
        ],
        "a": 2,
        "why": "etwas einem Brief beilegen"
       },
       {
        "n": 5,
        "o": [
         "melden",
         "rufen",
         "sprechen"
        ],
        "a": 1,
        "why": "jemanden anrufen – „rufen Sie mich an“"
       },
       {
        "n": 6,
        "o": [
         "über",
         "für",
         "auf"
        ],
        "a": 2,
        "why": "sich auf etwas (Zukunft) freuen"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben von Ihrer Krankenkasse einen Brief bekommen: Für Ihre neue Brille bekommen Sie kein Geld. Sie sind damit nicht einverstanden. Schreiben Sie an Ihre Krankenkasse.",
      "points": [
       "Grund für Ihr Schreiben",
       "Warum brauchen Sie die Brille?",
       "Was hat der Augenarzt gesagt?",
       "Was erwarten Sie jetzt?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich schreibe Ihnen, weil ich mit Ihrem Brief vom 12. Mai nicht einverstanden bin. Sie möchten die Kosten für meine neue Brille nicht übernehmen.\nIch brauche die Brille dringend, weil meine Augen in den letzten Monaten viel schlechter geworden sind. Ohne Brille kann ich bei der Arbeit am Computer kaum noch lesen und bekomme starke Kopfschmerzen.\nMein Augenarzt, Herr Dr. Schulte, hat gesagt, dass ich eine Sehschwäche von über sechs Dioptrien habe. In diesem Fall muss die Krankenkasse einen Teil der Kosten bezahlen. Eine Bescheinigung von ihm lege ich bei.\nIch bitte Sie deshalb, Ihre Entscheidung noch einmal zu prüfen und mir einen Teil der Kosten zu erstatten. Über eine schnelle Antwort würde ich mich freuen.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|brief|nicht einverstanden|widerspruch|entscheidung|brille",
        "Ich schreibe Ihnen, weil ich mit Ihrer Entscheidung zu meiner Brille nicht einverstanden bin."
       ],
       [
        "brauche|augen|sehe|lesen|arbeit|computer|kopfschmerz",
        "Ich brauche die Brille, weil ich ohne sie bei der Arbeit nicht mehr lesen kann."
       ],
       [
        "augenarzt|arzt|gesagt|dioptrien|bescheinigung|attest",
        "Mein Augenarzt hat gesagt, dass meine Augen sehr schlecht sind."
       ],
       [
        "prüfen|bezahlen|übernehmen|erstatten|kosten|bitte|antwort",
        "Bitte prüfen Sie Ihre Entscheidung noch einmal und übernehmen Sie einen Teil der Kosten."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie möchten im nächsten Monat eine Woche Urlaub nehmen, weil Ihre Mutter zu Besuch kommt. Schreiben Sie an Ihren Chef, Herrn Lorenz.",
       "points": [
        "Grund für Ihr Schreiben",
        "Warum brauchen Sie Urlaub?",
        "Wann genau?",
        "Wer übernimmt Ihre Arbeit?"
       ],
       "model": "Sehr geehrter Herr Lorenz,\nich möchte Sie fragen, ob ich im nächsten Monat eine Woche Urlaub nehmen kann.\nMeine Mutter kommt aus Indien zu Besuch. Sie war noch nie in Deutschland, und ich möchte ihr in dieser Zeit die Stadt zeigen und Zeit mit ihr verbringen.\nIch würde gern vom 9. bis zum 13. Juni Urlaub nehmen. In dieser Woche haben wir keine wichtigen Termine mit Kunden.\nMein Kollege, Herr Braun, hat schon gesagt, dass er meine Aufgaben übernimmt. Ich erkläre ihm vorher alles Wichtige.\nIch würde mich über eine kurze Antwort freuen.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "möchte .* fragen|frage|schreibe|urlaub",
         "Ich schreibe Ihnen, weil ich im nächsten Monat eine Woche Urlaub nehmen möchte."
        ],
        [
         "mutter|besuch|famil|weil|denn",
         "Meine Mutter kommt zu Besuch, deshalb brauche ich Urlaub."
        ],
        [
         "vom|bis|juni|juli|woche|\\d",
         "Ich möchte vom 9. bis zum 13. Juni Urlaub nehmen."
        ],
        [
         "kolleg|übernimmt|vertret|erkläre|aufgaben",
         "Mein Kollege übernimmt in dieser Zeit meine Aufgaben."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben gesagt, Sie wohnen in Frankfurt. Wie wohnen Sie dort? Und wo haben Sie früher gewohnt?"
       },
       {
        "you": "Erzähl: Wie wohnst du jetzt, und wo hast du früher gewohnt?",
        "min": 15,
        "key": [
         [
          "wohnung|zimmer|haus|stock|balkon",
          "Wohnung beschreiben"
         ],
         [
          "früher|vorher|in indien|habe .* gewohnt",
          "früher"
         ]
        ],
        "model": "Ich wohne mit meiner Familie in einer Dreizimmerwohnung im vierten Stock. Die Wohnung hat einen kleinen Balkon. Früher habe ich in Chennai in einem großen Haus mit meinen Eltern gewohnt."
       },
       {
        "who": "Prüferin",
        "say": "Und wie gefällt Ihnen Ihr Stadtteil?"
       },
       {
        "you": "Sag, wie dir dein Stadtteil gefällt – mit Grund.",
        "min": 12,
        "key": [
         [
          "gefällt|finde|schön|gut|laut|ruhig",
          "Meinung"
         ],
         [
          "\\b(weil|denn)\\b",
          "Grund"
         ]
        ],
        "model": "Mein Stadtteil gefällt mir gut, weil es viele Geschäfte und einen schönen Park gibt. Nur abends ist es manchmal etwas laut."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Gesundheit am Arbeitsplatz. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-8.jpg",
         "alt": "Ein Büro: Eine junge Frau mit Brille sitzt am Schreibtisch vor einem Laptop. Sie stützt den Kopf in die Hand und schaut müde zur Seite. Vor ihr liegen ein Heft und Stifte, an der Wand kleben bunte Zettel.",
         "by": "Vitaly Gariev",
         "link": "https://unsplash.com/photos/frau-die-vom-laptop-am-schreibtisch-wegschaut-aotrm-bpAAk"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "frau|büro|schreibtisch|laptop|computer|müde|kopf|hand|brille|heft|zettel|pause",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich eine junge Frau in einem Büro. Sie sitzt vor einem Laptop und stützt den Kopf in die Hand. Sie sieht sehr müde aus und schaut aus dem Fenster. Ich glaube, sie arbeitet schon lange ohne Pause, vielleicht hat sie auch Kopfschmerzen."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man eine Gruppe von Kollegen, die in der Mittagspause zusammen spazieren gehen. Sie lachen und sehen entspannt aus."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Was tun Sie für Ihre Gesundheit bei der Arbeit?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "pause|rücken|bewegung|sport|arbeit|stuhl|sitze|gehe|trinke|gesund",
          "zum Thema"
         ]
        ],
        "model": "Ich arbeite den ganzen Tag am Computer und hatte letztes Jahr oft Rückenschmerzen. Seitdem mache ich jede Stunde eine kurze Pause und gehe in der Mittagspause zehn Minuten spazieren."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Achten die Firmen dort auf die Gesundheit der Mitarbeiter? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien arbeiten viele Menschen sehr lange, oft zehn Stunden oder mehr, und Pausen sind nicht so wichtig. In Deutschland finde ich gut, dass es feste Pausen und gute Bürostühle gibt. Ich denke aber, dass jeder auch selbst etwas tun muss, weil der Chef nicht alles kontrollieren kann."
       },
       {
        "who": "Anna",
        "say": "Das stimmt. In Polen ist es inzwischen ähnlich wie hier, aber früher war das ganz anders."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Eine Kollegin, Frau Schäfer, geht nach 25 Jahren in Rente. Sie möchten zusammen eine kleine Abschiedsfeier im Büro organisieren. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann feiern? · Essen und Getränke? · Geschenk? · Wer hält eine Rede?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Eine Kollegin, Frau Schäfer, geht nach 25 Jahren in Rente. Sie möchten zusammen eine kleine Abschiedsfeier im Büro organisieren. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann feiern? · Essen und Getränke? · Geschenk? · Wer hält eine Rede?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Frau Schäfer hört Ende des Monats auf. Wollen wir am letzten Freitag nach der Arbeit im Büro feiern?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Freitag ist gut, aber nach der Arbeit wollen viele schnell nach Hause. Ich würde lieber in der Mittagspause feiern, weil dann alle Kollegen da sind."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und was machen wir mit dem Essen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "feier|fest|geschenk|essen|kuchen|rede|büro|rente|freitag|kollegen|blumen|gutschein",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten ein kleines Buffet machen: Jeder bringt etwas mit, zum Beispiel Salat oder Kuchen. Für Getränke sammeln wir Geld."
       },
       {
        "who": "Anna",
        "say": "Einverstanden. Dann brauchen wir noch ein Geschenk und jemanden für eine kleine Rede."
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kümmere mich um das Geschenk – vielleicht einen Gutschein für ein Wellnesshotel, sie hat ja jetzt viel Zeit. Kannst du die Rede halten? Du kennst sie schon so lange."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "feier|fest|geschenk|essen|kuchen|rede|büro|rente|freitag|kollegen|blumen|gutschein",
          "Plan"
         ]
        ],
        "model": "Also, wir feiern am letzten Freitag in der Mittagspause im Büro. Jeder bringt etwas zu essen mit, die Getränke bezahlen wir zusammen. Ich kaufe einen Gutschein als Geschenk, und du hältst eine kurze Rede."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-10",
  "title": "Modelltest 10",
  "level": "schwer",
  "sub": "Verträge, Bank, Versicherung · Handyvertrag kündigen / Wasserschaden an die Nachbarin",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Mensah mitbringen?",
        "o": [
         "Seinen Arbeitsvertrag.",
         "Einen Nachweis über seine Adresse.",
         "Ein Foto für die Bankkarte."
        ],
        "a": 1,
        "why": "Den Arbeitsvertrag braucht die Bank doch nicht mehr; es fehlt eine Meldebescheinigung, also ein Nachweis über die Adresse. Ein Foto braucht man für die Karte nicht.",
        "audio": "Guten Tag, Herr Mensah, hier spricht Frau Albers von der Sparkasse. Es geht um Ihr neues Girokonto. Ich hatte Ihnen ja gesagt, dass wir eine Kopie Ihres Arbeitsvertrags brauchen – das ist doch nicht nötig, weil Ihr Gehalt sowieso aufs Konto kommt. Was uns aber noch fehlt, ist eine aktuelle Meldebescheinigung, denn auf Ihrem Ausweis steht noch die alte Adresse. Bringen Sie die bitte zu Ihrem Termin am Mittwoch mit."
       },
       {
        "q": "Was ist mit der Lieferung?",
        "o": [
         "Sie kommt am selben Tag, aber später.",
         "Sie kommt einen Tag später.",
         "Sie wurde storniert."
        ],
        "a": 0,
        "why": "Der Tag bleibt (Donnerstag), nur die Zeit ändert sich: nachmittags statt vormittags.",
        "audio": "Hallo, hier ist das Möbelhaus Wohnwelt mit einer Nachricht für Frau Szabo. Ihr Kleiderschrank wird wie geplant am Donnerstag geliefert. Allerdings kommen unsere Monteure nicht wie besprochen am Vormittag, sondern erst zwischen 14 und 17 Uhr, weil ein anderer Kunde vor Ihnen dran ist. Falls Ihnen das nicht passt, können wir auch einen neuen Termin in der nächsten Woche machen. Rufen Sie uns dann bitte an."
       },
       {
        "q": "Warum soll Frau Ivanova zurückrufen?",
        "o": [
         "Ihre Versicherung wird teurer.",
         "Die Versicherung braucht noch Informationen.",
         "Der Schaden wird nicht bezahlt."
        ],
        "a": 1,
        "why": "Die Versicherung zahlt wahrscheinlich, braucht aber noch die Rechnung und Fotos – deshalb der Rückruf. Teurer wird nichts.",
        "audio": "Guten Tag, Frau Ivanova, hier ist Herr Brandt von der Hausrat-Versicherung Merkur. Wir haben Ihre Schadensmeldung wegen des Fahrraddiebstahls erhalten. Nach dem ersten Eindruck sieht es gut aus, dass wir den Schaden übernehmen können. Damit wir das prüfen können, brauchen wir aber noch die Kaufrechnung und die Anzeige von der Polizei. Bitte rufen Sie mich kurz an, dann erkläre ich Ihnen, wie Sie die Unterlagen hochladen können."
       },
       {
        "q": "Was passiert ab dem 1. März?",
        "o": [
         "Die Filiale schließt ganz.",
         "Man kann am Automaten kein Geld mehr einzahlen.",
         "Die Filiale hat nur noch vormittags geöffnet."
        ],
        "a": 2,
        "why": "Die Filiale bleibt, aber Beratung nur noch vormittags; der Automat bleibt rund um die Uhr. „Ganz geschlossen“ ist eine Falle.",
        "audio": "Liebe Kundinnen und Kunden der Volksbank am Marktplatz. Ab dem 1. März ändern sich unsere Öffnungszeiten. Die Filiale bleibt erhalten, ist aber nur noch montags bis freitags von 9 bis 12:30 Uhr geöffnet. Am Nachmittag erreichen Sie unsere Beraterinnen und Berater telefonisch. Der Geldautomat und das Gerät für Einzahlungen im Vorraum stehen Ihnen weiterhin rund um die Uhr zur Verfügung."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um Tipps zum Sparen bei Verträgen.",
         "Um neue Handys.",
         "Um Probleme mit dem Internet auf dem Land."
        ],
        "a": 0,
        "why": "Die Sendung erklärt, wie man alte, zu teure Verträge findet und kündigt – also Geld spart.",
        "audio": "Sie zahlen jeden Monat für ein Fitnessstudio, in das Sie nie gehen? Oder für einen Handyvertrag mit viel zu viel Datenvolumen? Dann bleiben Sie dran: Heute bei „Geld & Alltag“ erklären wir, wie Sie alte Verträge finden, die Sie nicht mehr brauchen, und wie Sie richtig kündigen."
       },
       {
        "q": "Was gilt am Montag?",
        "o": [
         "Alle Busse fallen aus.",
         "Die Busse fahren nur am Morgen.",
         "Die Straßenbahnen fahren wie immer."
        ],
        "a": 2,
        "why": "Nur die Busfahrer streiken; „Die Straßenbahnen sind nicht betroffen“ = sie fahren normal.",
        "audio": "Hinweis für alle, die am Montag mit Bus und Bahn unterwegs sind: Die Busfahrerinnen und Busfahrer der Stadtwerke streiken von drei Uhr morgens bis Betriebsschluss. Es fahren nur einzelne Schulbusse. Die Straßenbahnen sind vom Streik nicht betroffen und fahren nach dem normalen Fahrplan."
       },
       {
        "q": "Was empfiehlt die Verbraucherzentrale?",
        "o": [
         "Am Telefon nie einen Vertrag abschließen.",
         "Keine Fragen am Telefon mit „Ja“ beantworten.",
         "Sofort die Polizei anrufen."
        ],
        "a": 1,
        "why": "Betrüger schneiden das „Ja“ mit; man soll „Ja“ vermeiden und auflegen. Die Polizei wird nicht genannt.",
        "audio": "Die Verbraucherzentrale warnt vor einer neuen Masche am Telefon. Anrufer fragen zum Beispiel: „Können Sie mich gut hören?“ Wenn Sie mit „Ja“ antworten, wird das aufgenommen und später als Zustimmung zu einem Vertrag benutzt. Der Rat der Experten: Antworten Sie auf solche Fragen nicht mit „Ja“, sondern legen Sie einfach auf."
       },
       {
        "q": "Wie wird das Wetter am Dienstag?",
        "o": [
         "Kalt und glatt.",
         "Mild und regnerisch.",
         "Sonnig und warm."
        ],
        "a": 0,
        "why": "Montag noch mild und Regen; ab Dienstag Frost und Glätte – Autofahrer sollen Zeit einplanen.",
        "audio": "Zum Wetter: Der Montag bleibt noch mild mit bis zu zehn Grad, dazu kommt am Nachmittag Regen. In der Nacht zum Dienstag wird es dann deutlich kälter. Am Dienstag erwarten wir Temperaturen um null Grad, und auf vielen Straßen kann es glatt werden. Planen Sie also mehr Zeit für den Weg zur Arbeit ein."
       },
       {
        "q": "Wer darf beim Gewinnspiel mitmachen?",
        "o": [
         "Nur Hörer aus der Stadt.",
         "Nur Erwachsene.",
         "Alle Hörer, Kinder mit Erlaubnis der Eltern."
        ],
        "a": 2,
        "why": "„Mitmachen darf jeder, egal woher Sie uns hören“ – Kinder unter 14 auch, aber nur mit Erlaubnis der Eltern.",
        "audio": "Und jetzt unser Gewinnspiel! Wir verlosen zwei Karten für das Konzert im Stadtpark. Beantworten Sie einfach unsere Frage: Wie viele Bundesländer hat Deutschland? Rufen Sie an unter 0800 123 450. Mitmachen darf jeder, egal woher Sie uns hören – Kinder unter 14 Jahren aber bitte nur mit Erlaubnis der Eltern."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Der Mann möchte seinen Vertrag sofort beenden.",
        "a": true,
        "why": "Er möchte kündigen, weil er umzieht – so schnell wie möglich.",
        "audio": "Frau: Kundenservice Mobilfunk Plus, mein Name ist Krüger. Was kann ich für Sie tun?\nMann: Guten Tag, ich möchte meinen Handyvertrag kündigen, so schnell wie möglich. Ich ziehe nächsten Monat nach Spanien.\nFrau: Ihr Vertrag läuft noch bis Oktober. Normalerweise geht eine Kündigung erst zum Ende der Laufzeit. Bei einem Umzug ins Ausland gibt es aber ein Sonderkündigungsrecht.\nMann: Was brauchen Sie dafür?\nFrau: Schicken Sie uns bitte die Abmeldebescheinigung vom Bürgeramt. Dann endet der Vertrag einen Monat später."
       },
       {
        "same": true,
        "q": "Was muss der Mann schicken?",
        "o": [
         "Seinen neuen spanischen Vertrag.",
         "Ein Dokument vom Bürgeramt.",
         "Eine Kopie seines Passes."
        ],
        "a": 1,
        "why": "„Schicken Sie uns bitte die Abmeldebescheinigung vom Bürgeramt.“"
       },
       {
        "q": "Die Frau hat die Kaution schon zurückbekommen.",
        "a": false,
        "why": "Sie wartet seit vier Monaten darauf.",
        "audio": "Mann: Hallo Lena, du siehst ärgerlich aus. Was ist los?\nFrau: Ach, meine alte Vermieterin. Ich bin vor vier Monaten ausgezogen und habe meine Kaution immer noch nicht zurück. Dabei war die Wohnung tipptopp.\nMann: Hast du ihr schon geschrieben?\nFrau: Zweimal, per E-Mail. Sie antwortet einfach nicht.\nMann: Dann schick ihr einen Brief per Einschreiben mit einer Frist von zwei Wochen. Und wenn dann nichts kommt, geh zum Mieterverein. Bei mir hat das damals sofort geholfen."
       },
       {
        "same": true,
        "q": "Was rät der Mann zuerst?",
        "o": [
         "Sofort zum Mieterverein zu gehen.",
         "Noch eine E-Mail zu schreiben.",
         "Einen Brief mit Frist zu schicken."
        ],
        "a": 2,
        "why": "Zuerst ein Einschreiben mit Frist – der Mieterverein kommt erst, „wenn dann nichts kommt“."
       },
       {
        "q": "Frau Yilmaz möchte einen Kredit für ein Auto.",
        "a": false,
        "why": "Sie will einen Kredit für eine Küche, kein Auto.",
        "audio": "Mann: Frau Yilmaz, schön, dass Sie da sind. Sie interessieren sich für einen Kredit?\nFrau: Ja. Unsere Küche ist sehr alt, und wir möchten eine neue kaufen. Sie kostet ungefähr 8.000 Euro. Das Auto haben wir gerade erst abbezahlt, deshalb haben wir nicht viel gespart.\nMann: Ich verstehe. Bei dieser Summe und einer Laufzeit von vier Jahren wären das etwa 190 Euro im Monat. Ich brauche von Ihnen aber noch die letzten drei Gehaltsabrechnungen.\nFrau: Die habe ich leider nicht dabei. Ich schicke sie Ihnen morgen per E-Mail."
       },
       {
        "same": true,
        "q": "Was macht Frau Yilmaz morgen?",
        "o": [
         "Sie schickt Unterlagen.",
         "Sie kauft die Küche.",
         "Sie kommt noch einmal in die Bank."
        ],
        "a": 0,
        "why": "„Ich schicke sie Ihnen morgen per E-Mail.“ – die Gehaltsabrechnungen"
       },
       {
        "q": "Der Mann bezahlt den Schaden aus eigener Tasche.",
        "a": false,
        "why": "Er bezahlt nicht selbst – seine Haftpflichtversicherung übernimmt den Schaden.",
        "audio": "Mann: Guten Tag, Frau Hoffmann. Es tut mir furchtbar leid, aber mein Sohn hat beim Fußballspielen Ihr Kellerfenster kaputt gemacht.\nFrau: Oh je. Na ja, so etwas passiert. Ist jemand verletzt?\nMann: Nein, zum Glück nicht. Ich habe eine Haftpflichtversicherung, die bezahlt das. Ich melde den Schaden heute noch.\nFrau: Gut. Dann rufe ich morgen den Glaser an und schicke Ihnen die Rechnung.\nMann: Am besten schicken Sie sie direkt an mich, dann leite ich sie weiter."
       },
       {
        "same": true,
        "q": "Wer bekommt die Rechnung vom Glaser?",
        "o": [
         "Die Versicherung direkt.",
         "Der Mann.",
         "Frau Hoffmann."
        ],
        "a": 1,
        "why": "„Am besten schicken Sie sie direkt an mich, dann leite ich sie weiter.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Bargeld oder Karte?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Mit Bargeld behält man einen besseren Überblick über sein Geld.",
       "Kartenzahlung ist schneller und bequemer.",
       "Bargeld ist sicherer, wenn die Technik nicht funktioniert.",
       "Kleine Geschäfte wollen lieber Bargeld.",
       "Man sollte immer mit dem Handy bezahlen.",
       "Man weiß nicht, wer die Daten sieht."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 0,
        "why": "Er nimmt Bargeld mit, damit er sieht, wie viel noch übrig ist – Überblick über das Geld.",
        "audio": "Ich nehme am Montag immer 100 Euro für die ganze Woche mit. Dann sehe ich jeden Tag im Portemonnaie, wie viel noch übrig ist. Mit der Karte habe ich früher am Ende des Monats oft gestaunt, wofür ich alles bezahlt habe."
       },
       {
        "q": "Aussage 2",
        "a": 2,
        "why": "Als die Kassen ausgefallen sind, konnte nur zahlen, wer Bargeld hatte – sicherer bei Technikproblemen.",
        "audio": "Letztes Jahr gab es in unserem Supermarkt einen Stromausfall, und die Kartenterminals gingen eine Stunde lang nicht. Wer kein Bargeld dabeihatte, musste seine Sachen stehen lassen. Seitdem habe ich immer etwas Geld in der Tasche."
       },
       {
        "q": "Aussage 3",
        "a": 1,
        "why": "An der Kasse nur kurz die Karte hinhalten, kein Kleingeld suchen – schnell und bequem.",
        "audio": "Ich verstehe nicht, warum manche Leute an der Kasse noch Münzen zählen. Ich halte meine Karte kurz an das Gerät, und fertig. Das dauert zwei Sekunden, und ich muss nie überlegen, ob ich genug Kleingeld habe."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Bürgeramt Nord – Wegweiser\nErdgeschoss: Information · Wartemarken · Fundbüro · Kasse\n1. Stock: Meldewesen (An-, Um- und Abmeldung) · Führungszeugnis · Beglaubigungen\n2. Stock: Pass- und Ausweisstelle · Führerscheinstelle (Umtausch, internationaler Führerschein)\n3. Stock: Ausländerbehörde (Aufenthaltstitel, Einbürgerung – nur mit Termin)\n4. Stock: Gewerbeamt (Gewerbe an- und abmelden) · Wohngeldstelle",
      "items": [
       {
        "q": "Sie haben im Bus Ihren Schlüssel verloren.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "3. Stock"
        ],
        "a": 0,
        "why": "Fundbüro – Erdgeschoss"
       },
       {
        "q": "Ihr Aufenthaltstitel läuft in zwei Monaten ab.",
        "o": [
         "2. Stock",
         "3. Stock",
         "1. Stock"
        ],
        "a": 1,
        "why": "Ausländerbehörde – Aufenthaltstitel (nicht die Passstelle)"
       },
       {
        "q": "Für eine neue Stelle in einer Kita brauchen Sie ein Dokument, dass Sie keine Straftaten begangen haben.",
        "o": [
         "4. Stock",
         "2. Stock",
         "1. Stock"
        ],
        "a": 2,
        "why": "Das ist das Führungszeugnis – 1. Stock"
       },
       {
        "q": "Sie möchten sich als Friseurin selbstständig machen.",
        "o": [
         "4. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "ein Gewerbe anmelden – Gewerbeamt"
       },
       {
        "q": "Sie verdienen wenig und brauchen Hilfe bei der Miete.",
        "o": [
         "1. Stock",
         "Erdgeschoss",
         "4. Stock"
        ],
        "a": 2,
        "why": "Wohngeld – Zuschuss zur Miete"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Bank am Ring: Girokonto ohne Gebühren für Auszubildende und Studierende bis 27 Jahre.",
       "Verbraucherzentrale: Beratung zu Handy-, Strom- und Internetverträgen, 20 Minuten für 15 Euro.",
       "Versicherungsbüro Kaya: Haftpflicht, Hausrat und Kfz – Beratung auf Deutsch und Türkisch.",
       "Gebrauchtwagen Müller: über 200 Autos, Finanzierung ohne Anzahlung möglich.",
       "Steuerbüro Nowak: Ihre Steuererklärung schnell und günstig, auch für Rentner.",
       "Geldtransfer Express: Geld in über 100 Länder schicken – in Minuten.",
       "Schuldnerberatung der Diakonie: kostenlose Hilfe bei Schulden, Termin nach Anmeldung.",
       "Mietkautionsbürgschaft MieteSicher: statt Kaution eine Bürgschaft für wenige Euro im Monat."
      ],
      "items": [
       {
        "q": "Ihre Familie in Ghana braucht dringend Geld für eine Operation.",
        "a": 5,
        "why": "Geld schnell ins Ausland schicken – Geldtransfer"
       },
       {
        "q": "Sie wollen eine Wohnung mieten, haben aber nicht genug Geld für die Kaution.",
        "a": 7,
        "why": "Bürgschaft statt Kaution"
       },
       {
        "q": "Ihr Internetanbieter verlangt plötzlich mehr Geld, und Sie wissen nicht, ob das erlaubt ist.",
        "a": 1,
        "why": "Beratung zu Internetverträgen – Verbraucherzentrale"
       },
       {
        "q": "Sie sind 35 und suchen ein Konto ohne Gebühren.",
        "a": -1,
        "why": "Das kostenlose Konto gibt es nur bis 27 Jahre – keine Anzeige passt."
       },
       {
        "q": "Ihr Kind hat bei Freunden aus Versehen einen teuren Fernseher kaputt gemacht.",
        "a": 2,
        "why": "Haftpflichtversicherung – Versicherungsbüro"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Ohne Online-Banking kann man bei der Bank keine Überweisungen mehr machen.",
        "a": false,
        "why": "Doch: am Überweisungsterminal in der Filiale oder telefonisch.",
        "text": "Wichtige Information für unsere Kundinnen und Kunden\nAb dem 1. Januar nehmen wir keine Überweisungsformulare auf Papier mehr an. Bitte nutzen Sie stattdessen das Online-Banking oder das Überweisungsterminal in unserer Filiale. Wenn Sie kein Online-Banking haben, können Sie Überweisungen auch telefonisch beauftragen. Für Kundinnen und Kunden über 70 Jahre bleibt der Papierweg bis Ende des Jahres kostenlos möglich, danach kostet er 2 Euro pro Überweisung.\nIhre Stadtbank"
       },
       {
        "same": true,
        "q": "Was gilt für Kunden über 70?",
        "o": [
         "Sie dürfen noch eine Zeit lang Papier benutzen.",
         "Sie müssen Online-Banking lernen.",
         "Sie zahlen ab sofort 2 Euro."
        ],
        "a": 0,
        "why": "„Für Kundinnen und Kunden über 70 Jahre bleibt der Papierweg bis Ende des Jahres kostenlos“ – eine Ausnahme für eine gewisse Zeit."
       },
       {
        "q": "Man kann den Vertrag jeden Monat kündigen.",
        "a": true,
        "why": "„monatlich kündbar“ = man kann jeden Monat kündigen.",
        "text": "Strom zum Festpreis – nur bis Ende März!\nWechseln Sie jetzt zu Stadtwerke Grün und bezahlen Sie 12 Monate lang garantiert denselben Preis pro Kilowattstunde. Der Vertrag ist monatlich kündbar, eine Mindestlaufzeit gibt es nicht. Den Wechsel organisieren wir für Sie: Sie brauchen nur Ihre Zählernummer und den Namen Ihres alten Anbieters. Neukunden bekommen außerdem einen Bonus von 50 Euro, der mit der ersten Jahresrechnung verrechnet wird."
       },
       {
        "same": true,
        "q": "Wann bekommen Neukunden den Bonus?",
        "o": [
         "Sofort nach dem Wechsel.",
         "Mit der Jahresrechnung.",
         "Wenn sie bis Ende März kündigen."
        ],
        "a": 1,
        "why": "„mit der ersten Jahresrechnung verrechnet“ – also erst mit der Jahresrechnung, nicht sofort."
       },
       {
        "q": "Herr Petrović hat seine Karte im Automaten vergessen.",
        "a": false,
        "why": "Der Automat hat die Karte eingezogen, weil die PIN dreimal falsch war – er hat sie nicht vergessen.",
        "text": "Sehr geehrter Herr Petrović,\nam 14. Mai wurde Ihre Bankkarte von einem unserer Geldautomaten eingezogen, weil dreimal die falsche PIN eingegeben wurde. Aus Sicherheitsgründen haben wir die Karte gesperrt und vernichtet. Eine neue Karte haben wir bereits bestellt; sie kommt in etwa sieben Tagen mit der Post. Die neue PIN schicken wir Ihnen getrennt davon in einem zweiten Brief. Bis dahin können Sie am Schalter mit Ihrem Personalausweis Geld abheben.\nMit freundlichen Grüßen\nIhre Kreissparkasse"
       },
       {
        "same": true,
        "q": "Wie kann Herr Petrović bis zur neuen Karte an Geld kommen?",
        "o": [
         "Mit der alten Karte.",
         "Am Automaten mit einer neuen PIN.",
         "Mit seinem Ausweis am Schalter."
        ],
        "a": 2,
        "why": "„Bis dahin können Sie am Schalter mit Ihrem Personalausweis Geld abheben.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Verträge im Internet – was Verbraucher wissen sollten\nWer im Internet einen Vertrag abschließt – zum Beispiel für ein Zeitschriften-Abo, einen Handyvertrag oder einen Streamingdienst –, hat in der Regel ein Widerrufsrecht von 14 Tagen. Innerhalb dieser Zeit kann man den Vertrag ohne Angabe von Gründen widerrufen. Die Frist beginnt aber nicht immer am Tag der Bestellung: Bei Waren beginnt sie erst, wenn die Ware angekommen ist. Hat der Anbieter nicht korrekt über das Widerrufsrecht informiert, verlängert sich die Frist sogar auf bis zu ein Jahr und 14 Tage.\nSeit 2022 müssen Anbieter auf ihrer Internetseite außerdem einen „Kündigungsbutton“ haben. Damit kann man Verträge, die man online abgeschlossen hat, auch online mit wenigen Klicks kündigen. Ein Brief oder ein Fax ist dafür nicht mehr nötig.\nVerträge, die automatisch verlängert werden, kann man nach der ersten Laufzeit jederzeit mit einer Frist von einem Monat kündigen. Früher verlängerten sich viele Verträge um ein ganzes Jahr, wenn man die Kündigung vergessen hatte.",
      "items": [
       {
        "q": "Wer etwas online bestellt, hat ab dem Tag der Bestellung 14 Tage Zeit für den Widerruf.",
        "a": false,
        "why": "Bei Waren beginnt die Frist erst, wenn die Ware angekommen ist."
       },
       {
        "q": "Online-Verträge kann man heute auch online kündigen.",
        "a": true,
        "why": "der Kündigungsbutton – „mit wenigen Klicks“, kein Brief nötig"
       },
       {
        "q": "Wenn man die Kündigung vergisst, verlängert sich der Vertrag heute um ein Jahr.",
        "a": false,
        "why": "Das war früher so; heute kann man nach der ersten Laufzeit mit einem Monat Frist kündigen."
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Damen und Herren,\nhiermit kündige ich meinen Handyvertrag mit der Kundennummer 4471-882 (1) nächstmöglichen Zeitpunkt. Ich habe den Vertrag vor zwei Jahren abgeschlossen, (2) ich damals viel für meine Arbeit telefonieren musste. Inzwischen habe ich eine neue Stelle und bekomme ein Diensthandy, (3) brauche ich meinen privaten Vertrag nicht mehr. Bitte schicken Sie mir eine schriftliche Bestätigung der Kündigung (4) teilen Sie mir mit, bis wann ich noch bezahlen muss. Außerdem möchte ich meine Rufnummer zu meinem neuen Anbieter mitnehmen. Ich wäre Ihnen dankbar, (5) Sie das vorbereiten könnten. Sollten Sie noch Fragen haben, erreichen Sie mich (6) der Nummer 0151 2233445.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "am",
         "zum",
         "im"
        ],
        "a": 1,
        "why": "zum nächstmöglichen Zeitpunkt kündigen"
       },
       {
        "n": 2,
        "o": [
         "weil",
         "obwohl",
         "damit"
        ],
        "a": 0,
        "why": "Grund für den Vertrag damals → weil"
       },
       {
        "n": 3,
        "o": [
         "trotzdem",
         "deshalb",
         "sondern"
        ],
        "a": 1,
        "why": "Folge: ein Diensthandy, also brauche ich den Vertrag nicht → deshalb"
       },
       {
        "n": 4,
        "o": [
         "und",
         "oder",
         "aber"
        ],
        "a": 0,
        "why": "zwei Bitten nebeneinander → und"
       },
       {
        "n": 5,
        "o": [
         "dass",
         "ob",
         "wenn"
        ],
        "a": 2,
        "why": "Ich wäre Ihnen dankbar, wenn Sie … könnten (Konjunktiv II)"
       },
       {
        "n": 6,
        "o": [
         "unter",
         "bei",
         "mit"
        ],
        "a": 0,
        "why": "erreichbar unter der Nummer …"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben einen Handyvertrag. Seit drei Monaten ist die Rechnung viel höher als vereinbart, obwohl Sie nicht mehr telefoniert haben. Schreiben Sie an den Kundenservice.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ist das Problem mit der Rechnung?",
       "Was haben Sie schon unternommen?",
       "Was soll die Firma jetzt tun?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich schreibe Ihnen, weil ich mit meinen letzten drei Handyrechnungen nicht einverstanden bin. Meine Kundennummer ist 4471-882.\nIn meinem Vertrag steht, dass ich jeden Monat 19,99 Euro bezahle. Seit Februar sind die Rechnungen aber immer über 45 Euro hoch. Auf der Rechnung stehen Kosten für einen Musikdienst, den ich nie bestellt habe.\nIch habe schon zweimal bei Ihrer Hotline angerufen. Man hat mir versprochen, dass sich jemand meldet, aber bis heute habe ich keine Antwort bekommen.\nIch bitte Sie deshalb, den Musikdienst sofort zu kündigen und mir das zu viel bezahlte Geld zurückzuüberweisen. Bitte bestätigen Sie mir das schriftlich bis Ende des Monats.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|rechnung|nicht einverstanden|beschwer|reklam",
        "Ich schreibe Ihnen, weil meine Handyrechnung seit drei Monaten zu hoch ist."
       ],
       [
        "euro|€|zu hoch|höher|kosten|dienst|abo|bestellt|vertrag",
        "Statt 20 Euro muss ich jeden Monat über 45 Euro bezahlen."
       ],
       [
        "angerufen|hotline|telefon|geschrieben|e-mail|schon|bereits",
        "Ich habe schon zweimal bei Ihrer Hotline angerufen, aber nichts ist passiert."
       ],
       [
        "zurück|erstatt|überweis|korrigier|kündig|bitte|bestätig",
        "Bitte überweisen Sie mir das Geld zurück und korrigieren Sie die Rechnung."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie waren eine Woche im Urlaub. Als Sie zurückkommen, sehen Sie: Aus der Wohnung über Ihnen ist Wasser in Ihr Badezimmer gelaufen. Schreiben Sie an Ihre Nachbarin, Frau Lehmann.",
       "points": [
        "Was ist passiert?",
        "Welche Schäden gibt es?",
        "Was haben Sie schon gemacht?",
        "Wie soll es weitergehen?"
       ],
       "model": "Liebe Frau Lehmann,\nich bin gestern aus dem Urlaub zurückgekommen und habe einen großen Schreck bekommen: An der Decke in meinem Badezimmer ist ein großer Wasserfleck, und es tropft immer noch ein bisschen. Ich glaube, das Wasser kommt aus Ihrer Wohnung.\nDie Farbe an der Decke ist kaputt, und mein Schrank im Bad ist nass geworden. Auch ein paar Handtücher sind schmutzig.\nIch habe schon die Hausverwaltung angerufen und Fotos gemacht. Leider waren Sie nicht zu Hause, als ich bei Ihnen geklingelt habe.\nKönnten Sie bitte so schnell wie möglich nachsehen, ob bei Ihnen ein Rohr kaputt ist? Wir sollten den Schaden auch unseren Versicherungen melden. Bitte rufen Sie mich an, damit wir alles besprechen können.\nViele Grüße\nSuresh [Nachname]",
       "keys": [
        [
         "wasser|nass|tropf|fleck|decke|urlaub|passiert",
         "Während meines Urlaubs ist Wasser aus Ihrer Wohnung in mein Bad gelaufen."
        ],
        [
         "schaden|kaputt|farbe|schrank|möbel|handtücher|schimmel",
         "Die Decke ist fleckig und mein Schrank ist kaputt."
        ],
        [
         "angerufen|hausverwaltung|vermieter|foto|geklingelt|schon|versicherung",
         "Ich habe schon Fotos gemacht und die Hausverwaltung informiert."
        ],
        [
         "bitte|könnten|sollten|versicherung|melden|anrufen|besprechen|nachsehen|handwerker",
         "Bitte melden Sie den Schaden Ihrer Versicherung und rufen Sie mich an."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben gesagt, Sie arbeiten als Ingenieur. Was genau machen Sie bei Ihrer Arbeit?"
       },
       {
        "you": "Erzähl genauer, was du bei der Arbeit machst.",
        "min": 15,
        "key": [
         [
          "arbeite|projekt|kunden|software|programm|team|aufgabe|verantwortlich|entwickle|teste",
          "Tätigkeit"
         ],
         [
          "jeden tag|meistens|oft|manchmal|zum beispiel",
          "Beispiel"
         ]
        ],
        "model": "Ich arbeite in einem Team mit acht Kolleginnen und Kollegen. Wir entwickeln Software für Banken. Meistens schreibe ich Programme, aber manchmal habe ich auch Besprechungen mit Kunden."
       },
       {
        "who": "Prüferin",
        "say": "Und was möchten Sie in den nächsten Jahren beruflich erreichen?"
       },
       {
        "you": "Sag, was du beruflich planst – mit Grund.",
        "min": 12,
        "key": [
         [
          "möchte|will|plane|würde gern|hoffe|ziel",
          "Plan"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In den nächsten Jahren möchte ich Teamleiter werden, weil ich gern mit Menschen arbeite. Dafür muss ich aber mein Deutsch noch verbessern."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Geld und Sparen. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-10.jpg",
         "alt": "Ein Paar in der Küche: Der Mann sitzt am Tisch, liest einen Brief und hält die Hand vor den Mund. Die Frau steht neben ihm mit einer Tasse und liest mit. Auf dem Tisch steht eine Schale mit Obst.",
         "by": "Vitaly Gariev",
         "link": "https://unsplash.com/photos/paar-schaut-gestresst-uber-rechnungen-am-kuchentisch-uwinmIQD8nU"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "paar|frau|mann|küche|tisch|brief|rechnung|papier|besorgt|sorgen|tasse|obst|geld",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich ein Paar in der Küche. Der Mann sitzt am Tisch und liest einen Brief, er hält die Hand vor den Mund. Die Frau steht neben ihm und liest mit. Beide sehen besorgt aus. Ich glaube, das ist eine hohe Rechnung, und sie wissen nicht, wie sie sie bezahlen sollen."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man ein Kind, das Münzen in ein Sparschwein steckt. Es lacht und sieht sehr stolz aus."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Wie planen Sie Ihr Geld? Sparen Sie für etwas Bestimmtes?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "spar|geld|konto|monat|ausgaben|plan|app|euro|kaufe|urlaub",
          "zum Thema"
         ]
        ],
        "model": "Ich schreibe alle meine Ausgaben in eine App. So sehe ich, wie viel ich für Essen und Freizeit ausgebe. Jeden Monat spare ich etwas Geld, weil ich nächstes Jahr meine Familie in Indien besuchen möchte."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Wie gehen die Menschen dort mit Geld um? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien bezahlen viele Menschen inzwischen fast alles mit dem Handy, sogar auf dem Markt. In Deutschland benutzen noch viele Leute Bargeld. Ich finde das Bezahlen mit dem Handy praktischer, weil es schnell geht, aber Bargeld ist gut, wenn die Technik nicht funktioniert."
       },
       {
        "who": "Anna",
        "say": "Interessant. In Polen zahlt man auch fast überall mit Karte."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihr Deutschkurs hat einen gemeinsamen Spendenlauf für ein Kinderheim organisiert. Jetzt möchten Sie zusammen das gesammelte Geld feierlich übergeben. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann und wo? · Wer wird eingeladen? · Programm? · Wer übernimmt welche Aufgabe?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihr Deutschkurs hat einen gemeinsamen Spendenlauf für ein Kinderheim organisiert. Jetzt möchten Sie zusammen das gesammelte Geld feierlich übergeben. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann und wo? · Wer wird eingeladen? · Programm? · Wer übernimmt welche Aufgabe?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wir haben 1.200 Euro gesammelt! Wollen wir das Geld nächsten Samstag im Kinderheim übergeben?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Das ist eine gute Idee, aber am Samstag arbeiten einige aus dem Kurs. Ich würde lieber am Freitagnachmittag hingehen, weil dann alle Zeit haben."
       },
       {
        "who": "Anna",
        "say": "Okay, Freitag ist besser. Und wen laden wir ein?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "übergabe|scheck|kinderheim|spende|geld|feier|einladen|leiterin|presse|zeitung|kuchen|programm|rede|foto",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten die Leiterin vom Kinderheim und unsere Lehrerin einladen. Was hältst du davon, auch die Lokalzeitung zu fragen? Dann spenden vielleicht noch mehr Leute."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und wer macht was?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich rufe bei der Zeitung an und frage, ob jemand kommen kann. Kannst du mit dem Kinderheim einen Termin ausmachen? Den Scheck kann unsere Lehrerin übergeben."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "übergabe|scheck|kinderheim|spende|geld|feier|einladen|leiterin|presse|zeitung|kuchen|programm|rede|foto",
          "Plan"
         ]
        ],
        "model": "Also, wir übergeben das Geld am Freitagnachmittag im Kinderheim. Wir laden die Leiterin, unsere Lehrerin und die Zeitung ein. Ich rufe bei der Zeitung an, du machst den Termin, und unsere Lehrerin übergibt den Scheck."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-11",
  "title": "Modelltest 11",
  "level": "schwer",
  "sub": "Kita, Ehrenamt, Umzug · Abholzeit an die Kita / Bewerbung für ein Ehrenamt",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Rahimi tun?",
        "o": [
         "Ihr Kind morgen früher abholen.",
         "Etwas für das Fest mitbringen.",
         "Die Erzieherin anrufen."
        ],
        "a": 0,
        "why": "Morgen schließt die Kita schon um 13 Uhr – sie muss früher kommen. Zum Fest muss man nichts mitbringen; anrufen nur, wenn es nicht geht.",
        "audio": "Hallo Frau Rahimi, hier ist Frau Becker von der Kita Sonnenblume. Ich wollte Sie nur erinnern: Morgen ist unsere Teamfortbildung, deshalb schließen wir schon um 13 Uhr. Bitte holen Sie Leyla also bis spätestens eins ab. Und noch eine gute Nachricht: Für das Sommerfest am Samstag brauchen Sie doch nichts mitzubringen, der Elternbeirat kümmert sich ums Essen. Nur wenn es morgen mit der Abholung nicht klappt, rufen Sie mich bitte an."
       },
       {
        "q": "Wann kommen die Umzugshelfer?",
        "o": [
         "Um 7 Uhr.",
         "Um 8 Uhr.",
         "Um 9 Uhr."
        ],
        "a": 1,
        "why": "Geplant war 7 Uhr, neu ist eine Stunde später, also 8 Uhr; um 9 Uhr braucht der Wagen die Halteverbotszone.",
        "audio": "Guten Tag, Herr Kowalski, hier ist Umzüge Schmidt. Wegen einer Baustelle auf der Autobahn müssen wir Ihren Umzug am Samstag eine Stunde später beginnen als geplant. Unsere Leute sind also nicht um sieben, sondern um acht Uhr bei Ihnen. Das Halteverbotsschild für den Lkw steht ab neun Uhr – das passt dann gut. Bis Samstag!"
       },
       {
        "q": "Was ist das Problem?",
        "o": [
         "Der Kurs fällt aus.",
         "Es gibt nicht genug Helfer.",
         "Der Raum ist nicht frei."
        ],
        "a": 1,
        "why": "Der Termin bleibt, aber es fehlen noch Freiwillige – deshalb der Anruf. Vom Raum oder Ausfall ist keine Rede.",
        "audio": "Hallo Herr Ahmadi, hier ist Petra von der Tafel. Danke noch mal, dass Sie sich als Helfer gemeldet haben! Die Lebensmittelausgabe am Dienstag findet ganz normal statt. Allerdings sind zwei Leute krank geworden, und jetzt sind wir nur zu dritt. Hätten Sie vielleicht Zeit, schon um 14 Uhr statt um 16 Uhr zu kommen? Bitte schreiben Sie mir kurz eine SMS."
       },
       {
        "q": "Warum ruft Frau Wolf an?",
        "o": [
         "Die Schule hat Probleme mit Ali.",
         "Ali hat seine Jacke vergessen.",
         "Ali soll eine Klasse wiederholen."
        ],
        "a": 1,
        "why": "Ali hat seine Jacke in der Sporthalle liegen lassen – kein Problem in der Schule. Das Gespräch über die Noten war schon gut.",
        "audio": "Guten Tag, Herr Demir, hier ist Frau Wolf, die Klassenlehrerin von Ali. Keine Sorge, es ist nichts passiert. Nach dem Sportunterricht heute hat Ali seine Winterjacke in der Turnhalle vergessen. Ich habe sie mit ins Sekretariat genommen. Ali kann sie morgen in der ersten Pause abholen. Und noch einmal danke für das gute Gespräch beim Elternsprechtag!"
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Für wen ist die Sendung heute?",
        "o": [
         "Für Menschen, die umziehen wollen.",
         "Für Menschen, die anderen helfen möchten.",
         "Für Menschen, die eine Arbeit suchen."
        ],
        "a": 1,
        "why": "Es geht um Ehrenamt: Wo kann man sich engagieren und anderen helfen? Bezahlt wird nicht – also keine Jobsuche.",
        "audio": "Guten Abend und herzlich willkommen bei „Stadtgespräch“. Jede dritte Person in Deutschland engagiert sich ehrenamtlich – im Sportverein, bei der Feuerwehr oder in der Nachbarschaftshilfe. Bezahlt wird man dafür nicht, aber man bekommt viel zurück. Wir zeigen Ihnen heute, wo in unserer Stadt Helferinnen und Helfer gesucht werden."
       },
       {
        "q": "Was müssen Eltern bis Ende Januar tun?",
        "o": [
         "Ihr Kind für die Schule anmelden.",
         "Einen Kitaplatz online beantragen.",
         "Zu einem Infoabend gehen."
        ],
        "a": 1,
        "why": "Kitaplätze für August müssen bis 31. Januar online beantragt werden; der Infoabend ist freiwillig.",
        "audio": "Eltern aufgepasst: Wer ab August einen Kitaplatz für sein Kind braucht, muss den Antrag bis zum 31. Januar online stellen. Später eingegangene Anträge können nur noch berücksichtigt werden, wenn Plätze frei bleiben. Wer Fragen hat, kann am 15. Januar zu einem freiwilligen Infoabend ins Rathaus kommen."
       },
       {
        "q": "Was gilt ab heute in der Goethestraße?",
        "o": [
         "Man darf nicht mehr parken.",
         "Autos dürfen nur in eine Richtung fahren.",
         "Die Straße ist ganz gesperrt."
        ],
        "a": 1,
        "why": "Einbahnstraße = nur eine Richtung. Parken bleibt erlaubt, Fußgänger und Räder dürfen weiter durch – also nicht ganz gesperrt.",
        "audio": "Verkehrshinweis für die Innenstadt: Wegen Bauarbeiten an der Wasserleitung ist die Goethestraße ab heute für vier Wochen eine Einbahnstraße. Autos dürfen nur noch in Richtung Bahnhof fahren. Die Parkplätze auf der rechten Seite bleiben erhalten, Fußgänger und Radfahrer kommen weiter in beide Richtungen durch."
       },
       {
        "q": "Was bekommen Neubürger im Rathaus?",
        "o": [
         "Ein kostenloses Busticket.",
         "Einen Gutschein für das Schwimmbad.",
         "Eine Tasche mit Informationen."
        ],
        "a": 2,
        "why": "„eine Begrüßungstasche mit Stadtplan … und Infos“; Gutscheine für Museen gibt es auch, aber kein Busticket und nichts zum Schwimmbad.",
        "audio": "Neu in unserer Stadt? Dann kommen Sie zum Neubürgerempfang am Sonntag um elf Uhr im Rathaus! Die Bürgermeisterin begrüßt Sie persönlich, und Sie bekommen eine Begrüßungstasche mit Stadtplan, Infos zu Vereinen und Gutscheinen für die städtischen Museen. Für Kinder gibt es ein Spielprogramm."
       },
       {
        "q": "Wie wird das Wetter am Wochenende?",
        "o": [
         "Am Samstag warm, am Sonntag Gewitter.",
         "Das ganze Wochenende Regen.",
         "Am Samstag Gewitter, am Sonntag Sonne."
        ],
        "a": 0,
        "why": "Samstag sonnig und bis 30 Grad, am Sonntagnachmittag kommen die Gewitter.",
        "audio": "Und nun das Wetter für das Wochenende: Der Samstag wird ein echter Sommertag mit viel Sonne und bis zu 30 Grad – ideal für einen Ausflug an den See. Am Sonntag ist es am Vormittag noch freundlich, am Nachmittag ziehen aber von Westen kräftige Gewitter auf."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Ab der zweiten Woche lässt die Mutter Daniel den ganzen Vormittag allein in der Gruppe.",
        "a": false,
        "why": "Ab der zweiten Woche geht sie nur kurz raus, zuerst nur zehn Minuten.",
        "audio": "Mann: Kita Regenbogen, Hartmann am Apparat.\nFrau: Guten Tag, hier ist Okafor. Mein Sohn Daniel bekommt bei Ihnen ab dem 1. September einen Platz. Ich wollte fragen, wie die Eingewöhnung funktioniert.\nMann: Gern. In der ersten Woche bleiben Sie jeden Tag eine Stunde mit Daniel zusammen in der Gruppe. Ab der zweiten Woche gehen Sie dann kurz raus, zuerst nur zehn Minuten.\nFrau: Ich muss ab Mitte September wieder arbeiten. Reicht das?\nMann: Meistens ja. Planen Sie aber besser drei bis vier Wochen ein."
       },
       {
        "same": true,
        "q": "Was rät der Mann?",
        "o": [
         "Erst ab Mitte September zu kommen.",
         "Drei bis vier Wochen für die Eingewöhnung einzuplanen.",
         "Daniel gleich den ganzen Tag dazulassen."
        ],
        "a": 1,
        "why": "„Planen Sie aber besser drei bis vier Wochen ein.“"
       },
       {
        "q": "Herr Nguyen braucht einen Transporter für seinen Umzug.",
        "a": true,
        "why": "Er möchte einen Transporter für Samstag mieten.",
        "audio": "Frau: Autovermietung City, guten Tag.\nMann: Guten Tag, Nguyen. Ich ziehe am Samstag um und brauche einen Transporter. Was kostet das?\nFrau: Ein kleiner Transporter kostet 89 Euro pro Tag, 100 Kilometer sind inklusive. Für den Führerschein Klasse B ist das kein Problem.\nMann: Und wenn ich ihn schon Freitagabend abhole?\nFrau: Dann bezahlen Sie nur 20 Euro mehr, wenn Sie ihn am Samstagabend bis 20 Uhr zurückbringen.\nMann: Super, dann mache ich das so."
       },
       {
        "same": true,
        "q": "Wie viel bezahlt Herr Nguyen?",
        "o": [
         "89 Euro.",
         "109 Euro.",
         "178 Euro."
        ],
        "a": 1,
        "why": "89 Euro für den Tag plus 20 Euro, weil er ihn schon Freitagabend abholt = 109 Euro."
       },
       {
        "q": "Die beiden Frauen arbeiten zusammen in einem Verein.",
        "a": true,
        "why": "Beide helfen im Repair-Café – das ist ihr gemeinsames Ehrenamt.",
        "audio": "Frau 1: Hallo Marta, kommst du am Samstag wieder ins Repair-Café?\nFrau 2: Eigentlich ja, aber meine Nähmaschine ist kaputt. Ich kann also keine Kleidung reparieren.\nFrau 1: Das ist doch kein Problem. Der Verein hat letzte Woche zwei neue Nähmaschinen bekommen, eine Spende vom Stoffladen in der Hauptstraße.\nFrau 2: Ach, wirklich? Dann komme ich natürlich! Ich bringe auch Kaffee mit.\nFrau 1: Kaffee haben wir genug. Bring lieber Garn mit, das ist fast alle."
       },
       {
        "same": true,
        "q": "Was soll Marta mitbringen?",
        "o": [
         "Ihre Nähmaschine.",
         "Kaffee.",
         "Garn."
        ],
        "a": 2,
        "why": "„Kaffee haben wir genug. Bring lieber Garn mit.“"
       },
       {
        "q": "Der Mann kann sich ohne Probleme ummelden.",
        "a": false,
        "why": "Ihm fehlt die Wohnungsgeberbestätigung vom Vermieter – heute klappt es nicht.",
        "audio": "Frau: Der Nächste, bitte. Was kann ich für Sie tun?\nMann: Ich bin vor einer Woche umgezogen und möchte mich ummelden.\nFrau: Haben Sie Ihren Ausweis und die Wohnungsgeberbestätigung?\nMann: Den Ausweis ja. Was ist eine Wohnungsgeberbestätigung?\nFrau: Das ist ein Formular, das Ihr Vermieter ausfüllt. Ohne das kann ich Sie leider nicht ummelden. Sie haben aber noch eine Woche Zeit, denn man muss sich innerhalb von zwei Wochen ummelden.\nMann: Gut, dann frage ich heute noch meinen Vermieter."
       },
       {
        "same": true,
        "q": "Was macht der Mann als Nächstes?",
        "o": [
         "Er füllt ein Formular im Amt aus.",
         "Er spricht mit seinem Vermieter.",
         "Er macht einen neuen Termin."
        ],
        "a": 1,
        "why": "„dann frage ich heute noch meinen Vermieter“ – der Vermieter füllt die Bestätigung aus."
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Ehrenamt – lohnt sich das?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Durch ein Ehrenamt lernt man neue Leute kennen.",
       "Neben Arbeit und Familie bleibt keine Zeit dafür.",
       "Im Ehrenamt kann man Erfahrungen für den Beruf sammeln.",
       "Ehrenamtliche Arbeit sollte bezahlt werden.",
       "Man bekommt viel Dankbarkeit zurück.",
       "Vereine finden keine jungen Mitglieder mehr."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "Durch die Hausaufgabenhilfe hat sie gemerkt, dass sie Erzieherin werden möchte, und die Erfahrung half bei der Bewerbung – Erfahrung für den Beruf.",
        "audio": "Ich habe zwei Jahre lang bei der Hausaufgabenhilfe mitgemacht. Dort habe ich gemerkt, wie gern ich mit Kindern arbeite. Jetzt mache ich eine Ausbildung zur Erzieherin – und im Bewerbungsgespräch hat man mich genau danach gefragt."
       },
       {
        "q": "Aussage 2",
        "a": 1,
        "why": "Vollzeitjob, zwei Kinder, Pflege der Mutter – er schafft es zeitlich nicht.",
        "audio": "Ich finde es toll, wenn sich Menschen engagieren. Aber ich arbeite Vollzeit, habe zwei kleine Kinder, und am Wochenende kümmere ich mich um meine Mutter. Wann soll ich da noch ins Vereinsheim gehen? Vielleicht später, wenn ich in Rente bin."
       },
       {
        "q": "Aussage 3",
        "a": 0,
        "why": "Als sie neu in der Stadt war, kannte sie niemanden; im Chor hat sie ihre besten Freundinnen gefunden.",
        "audio": "Als ich vor drei Jahren hierhergezogen bin, kannte ich niemanden. Dann habe ich angefangen, im Chor der Gemeinde zu singen und bei Festen zu helfen. Heute sind zwei Frauen aus dem Chor meine besten Freundinnen."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Familienzentrum Westend – Wer hilft wo?\nErdgeschoss: Elterncafé · Krabbelgruppe (0–3 Jahre) · Kleiderbörse\n1. Stock: Beratung für Schwangere · Hebammensprechstunde · Stillgruppe\n2. Stock: Erziehungsberatung · Hilfe bei Anträgen (Kindergeld, Elterngeld, Kitaplatz)\n3. Stock: Deutschkurse mit Kinderbetreuung · Computerkurs für Eltern\nUntergeschoss: Fahrradwerkstatt · Lager für Spenden",
      "items": [
       {
        "q": "Ihr Sohn ist aus seinen Winterschuhen herausgewachsen. Sie möchten günstig neue kaufen.",
        "o": [
         "Erdgeschoss",
         "Untergeschoss",
         "2. Stock"
        ],
        "a": 0,
        "why": "Kleiderbörse – Erdgeschoss (im Untergeschoss werden Spenden nur gelagert)"
       },
       {
        "q": "Ihre Tochter ist drei Jahre alt und Sie haben noch keinen Kitaplatz beantragt.",
        "o": [
         "1. Stock",
         "Erdgeschoss",
         "2. Stock"
        ],
        "a": 2,
        "why": "Hilfe bei Anträgen (Kitaplatz) – 2. Stock"
       },
       {
        "q": "Sie möchten Deutsch lernen, haben aber niemanden, der auf Ihr Baby aufpasst.",
        "o": [
         "3. Stock",
         "Erdgeschoss",
         "1. Stock"
        ],
        "a": 0,
        "why": "Deutschkurse mit Kinderbetreuung"
       },
       {
        "q": "Sie sind im vierten Monat schwanger und haben Fragen.",
        "o": [
         "2. Stock",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Beratung für Schwangere – 1. Stock"
       },
       {
        "q": "Sie haben gute Kinderkleidung, die Sie nicht mehr brauchen, und möchten sie abgeben.",
        "o": [
         "Erdgeschoss",
         "2. Stock",
         "Untergeschoss"
        ],
        "a": 2,
        "why": "Spenden bringt man ins Lager im Untergeschoss – die Kleiderbörse verkauft nur."
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Umzugsfirma Blitz: Umzüge in ganz Deutschland, kostenlose Besichtigung, Möbelmontage inklusive.",
       "Lesepaten gesucht! Die Grundschule am Park sucht Erwachsene, die einmal pro Woche mit Kindern lesen.",
       "Möbelbörse der Caritas: gut erhaltene gebrauchte Möbel – Abholung bei Ihnen kostenlos.",
       "Freiwillige Feuerwehr Nordstadt: Wir suchen Mitglieder ab 16 Jahren. Ausbildung kostenlos.",
       "Babysitterbörse: geprüfte Babysitter für Ihre Kinder, Vermittlung über unsere Website.",
       "Malerbetrieb Farbe & Co.: Wände streichen und tapezieren – schnell und sauber.",
       "Seniorenbesuchsdienst: Ehrenamtliche besuchen einsame ältere Menschen zu Hause.",
       "Transporter-Verleih: Kleintransporter ab 49 Euro am Tag."
      ],
      "items": [
       {
        "q": "Sie haben vormittags Zeit und möchten gern ehrenamtlich etwas mit Kindern machen.",
        "a": 1,
        "why": "Lesepaten = ehrenamtlich mit Kindern lesen (der Babysitterdienst ist bezahlte Arbeit)"
       },
       {
        "q": "Ihr altes Sofa ist noch gut, aber es passt nicht in Ihre neue Wohnung.",
        "a": 2,
        "why": "Die Möbelbörse holt gebrauchte Möbel ab."
       },
       {
        "q": "Sie ziehen in eine andere Stadt und wollen nicht alles selbst tragen.",
        "a": 0,
        "why": "Umzugsfirma – macht den Umzug für Sie"
       },
       {
        "q": "Sie brauchen einen Kindergartenplatz für Ihre Tochter.",
        "a": -1,
        "why": "Keine Anzeige vermittelt Kitaplätze – die Babysitterbörse ist etwas anderes."
       },
       {
        "q": "Ihr Nachbar ist 85, lebt allein und spricht seit Wochen mit niemandem.",
        "a": 6,
        "why": "Besuchsdienst für einsame ältere Menschen"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Die Eltern müssen den Ausflug selbst bezahlen.",
        "a": false,
        "why": "Der Förderverein übernimmt die Kosten – die Eltern zahlen nichts.",
        "text": "Liebe Eltern der Klasse 3b,\nam Donnerstag, dem 12. Juni, machen wir einen Ausflug in den Zoo. Wir treffen uns um 8:00 Uhr an der Schule und kommen gegen 15:00 Uhr zurück. Die Kosten für Bus und Eintritt übernimmt in diesem Jahr der Förderverein. Bitte geben Sie Ihrem Kind ein Lunchpaket, etwas zu trinken und eine Regenjacke mit. Geld für Süßigkeiten oder Souvenirs bitte nicht mitgeben.\nViele Grüße\nIhre Klassenlehrerin Frau Stein"
       },
       {
        "same": true,
        "q": "Was sollen die Kinder nicht mitbringen?",
        "o": [
         "Eine Regenjacke.",
         "Taschengeld.",
         "Essen."
        ],
        "a": 1,
        "why": "„Geld für Süßigkeiten oder Souvenirs bitte nicht mitgeben.“"
       },
       {
        "q": "Man kann sich bis zum Tag des Festes anmelden.",
        "a": false,
        "why": "Anmeldung nur bis 20. Mai beim Hausmeister – nicht bis zum Festtag.",
        "text": "Hoffest in der Lindenstraße 12–16!\nAm Samstag, dem 31. Mai, feiern wir ab 15 Uhr im Innenhof unser erstes Nachbarschaftsfest. Jeder Haushalt bringt bitte etwas zu essen für das Buffet mit. Grill und Getränke stellt die Hausverwaltung. Damit wir besser planen können, melden Sie sich bitte bis zum 20. Mai beim Hausmeister an – am besten mit der Zahl der Personen. Bei Regen feiern wir im Gemeinschaftsraum im Keller."
       },
       {
        "same": true,
        "q": "Was passiert, wenn es regnet?",
        "o": [
         "Das Fest fällt aus.",
         "Es wird verschoben.",
         "Man feiert drinnen."
        ],
        "a": 2,
        "why": "„Bei Regen feiern wir im Gemeinschaftsraum im Keller.“"
       },
       {
        "q": "Die Tafel sucht vor allem Helfer mit Führerschein.",
        "a": true,
        "why": "Besonders gesucht: Fahrerinnen und Fahrer mit Führerschein Klasse B.",
        "text": "Die Tafel braucht Ihre Hilfe!\nJede Woche holen wir in Supermärkten Lebensmittel ab, die nicht mehr verkauft werden, und geben sie an Menschen mit wenig Geld weiter. Dafür brauchen wir Ehrenamtliche, die sortieren, verteilen oder Fahrten übernehmen. Besonders dringend suchen wir Fahrerinnen und Fahrer mit Führerschein Klasse B für unseren Kühlwagen. Sie bestimmen selbst, wie oft Sie helfen möchten – schon zwei Stunden im Monat sind eine große Hilfe."
       },
       {
        "same": true,
        "q": "Wie oft müssen Helfer kommen?",
        "o": [
         "Mindestens jede Woche.",
         "So oft, wie sie möchten.",
         "Zwei Stunden pro Woche."
        ],
        "a": 1,
        "why": "„Sie bestimmen selbst, wie oft Sie helfen möchten“ – zwei Stunden im Monat ist nur ein Beispiel."
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Umzug – an alles gedacht?\nWer umzieht, hat viel zu tun. Neben Kisten und Möbeln gibt es auch einige Pflichten. Die wichtigste: Innerhalb von zwei Wochen nach dem Einzug muss man sich beim Bürgeramt anmelden. Dafür braucht man eine Bestätigung des Vermieters. Wer zu spät kommt, muss im schlimmsten Fall ein Bußgeld bezahlen.\nAuch wer ein Auto hat, muss die neue Adresse melden. Innerhalb derselben Stadt reicht es, das beim Bürgeramt zu sagen – dann wird der Fahrzeugschein gleich mit geändert. Zieht man in einen anderen Landkreis, darf man das alte Kennzeichen inzwischen behalten.\nArbeitnehmer haben übrigens nicht automatisch einen freien Tag für den Umzug. Ob es Sonderurlaub gibt, steht im Arbeits- oder Tarifvertrag. Wer aber vom Arbeitgeber für eine neue Stelle in eine andere Stadt geschickt wird, kann die Umzugskosten oft bei der Steuer angeben.",
      "items": [
       {
        "q": "Wer sich zu spät anmeldet, muss vielleicht Geld bezahlen.",
        "a": true,
        "why": "„im schlimmsten Fall ein Bußgeld“ – also vielleicht"
       },
       {
        "q": "Nach einem Umzug in einen anderen Landkreis braucht man ein neues Kennzeichen.",
        "a": false,
        "why": "Man darf das alte Kennzeichen inzwischen behalten."
       },
       {
        "q": "Jeder Arbeitnehmer bekommt für den Umzug einen Tag frei.",
        "a": false,
        "why": "nicht automatisch – das hängt vom Arbeits- oder Tarifvertrag ab"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Frau Schulz,\nwie Sie wissen, ist unsere Tochter Mira seit März bei Ihnen in der Gruppe. Sie geht sehr gern in die Kita, (1) sind wir sehr froh. Ab nächstem Monat ändert sich leider meine Arbeitszeit: Ich arbeite dann nicht mehr bis 15 Uhr wie bisher, (2) bis 16:30 Uhr. Deshalb möchte ich fragen, (3) Mira länger in der Kita bleiben kann. Ich weiß, dass die Spätgruppe (4) voll ist. Falls es keinen Platz gibt, könnte mein Mann sie zweimal pro Woche abholen. An den anderen Tagen (5) eine Nachbarin Mira abholen, wenn Sie damit einverstanden sind. Ich würde mich freuen, (6) wir bald einen Termin für ein Gespräch finden könnten.\nViele Grüße\nPriya [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "darüber",
         "davon",
         "dafür"
        ],
        "a": 0,
        "why": "froh sein über etwas → darüber"
       },
       {
        "n": 2,
        "o": [
         "aber",
         "sondern",
         "oder"
        ],
        "a": 1,
        "why": "nicht mehr bis 15 Uhr, sondern bis 16:30 Uhr – nach „nicht“ korrigiert man mit sondern"
       },
       {
        "n": 3,
        "o": [
         "dass",
         "wenn",
         "ob"
        ],
        "a": 2,
        "why": "indirekte Ja/Nein-Frage → ob"
       },
       {
        "n": 4,
        "o": [
         "sehr",
         "viel",
         "mehr"
        ],
        "a": 0,
        "why": "vor einem Adjektiv: sehr voll – „viel voll“ und „mehr voll“ gibt es nicht"
       },
       {
        "n": 5,
        "o": [
         "würde",
         "hätte",
         "wäre"
        ],
        "a": 0,
        "why": "Konjunktiv II: würde … abholen"
       },
       {
        "n": 6,
        "o": [
         "ob",
         "wenn",
         "weil"
        ],
        "a": 1,
        "why": "Ich würde mich freuen, wenn … (Konjunktiv II: könnten)"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Ihr Kind geht in die Kita. Ab nächstem Monat arbeiten Sie länger und können Ihr Kind erst später abholen. Schreiben Sie an die Erzieherin, Frau Schulz.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ändert sich bei Ihrer Arbeit?",
       "Ihre Bitte an die Kita",
       "Andere Lösung, wenn es nicht geht"
      ],
      "model": "Liebe Frau Schulz,\nich schreibe Ihnen, weil ich eine Frage zu den Abholzeiten von Mira habe.\nAb dem 1. Oktober ändert sich meine Arbeitszeit. Ich arbeite dann nicht mehr bis 15 Uhr, sondern bis 16:30 Uhr, weil meine Firma ein neues Projekt hat.\nDeshalb möchte ich Sie fragen, ob Mira ab Oktober bis 17 Uhr in der Kita bleiben kann. Ich weiß, dass die Spätgruppe sehr voll ist, aber für uns wäre das eine große Hilfe.\nWenn das nicht möglich ist, kann mein Mann Mira dienstags und donnerstags früher abholen. An den anderen Tagen würde unsere Nachbarin, Frau Berger, sie abholen. Ich gebe Ihnen gern eine schriftliche Erlaubnis dafür.\nVielen Dank und viele Grüße\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|frage|abhol|kita",
        "Ich schreibe Ihnen, weil ich eine Frage zur Abholzeit habe."
       ],
       [
        "arbeit|arbeite|uhr|länger|projekt|stelle|schicht",
        "Ab nächstem Monat arbeite ich bis 16:30 Uhr."
       ],
       [
        "bleiben|länger|spätgruppe|später|bitte|möglich|könnte",
        "Kann mein Kind bitte bis 17 Uhr in der Kita bleiben?"
       ],
       [
        "wenn (das|es) nicht|falls|sonst|mann|frau|oma|nachbar|abholen|erlaubnis",
        "Wenn das nicht geht, holt mein Mann sie zweimal pro Woche ab."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: In der Zeitung haben Sie gelesen, dass das Seniorenheim „Haus am See“ Ehrenamtliche sucht, die mit den Bewohnern Zeit verbringen. Schreiben Sie an die Leiterin, Frau Krause.",
       "points": [
        "Grund für Ihr Schreiben",
        "Etwas über Sie",
        "Was möchten Sie gern machen?",
        "Wann haben Sie Zeit?"
       ],
       "model": "Sehr geehrte Frau Krause,\nin der Zeitung habe ich gelesen, dass Sie Ehrenamtliche für Ihr Seniorenheim suchen. Ich würde gern bei Ihnen mithelfen.\nIch heiße Suresh, komme aus Indien und lebe seit drei Jahren in Frankfurt. Ich arbeite als Ingenieur. In Indien habe ich lange mit meinen Großeltern zusammengewohnt, deshalb verbringe ich gern Zeit mit älteren Menschen.\nIch könnte mit den Bewohnern spazieren gehen, Karten spielen oder aus der Zeitung vorlesen. Außerdem koche ich gern und könnte einmal indisches Essen mit ihnen zusammen kochen.\nZeit habe ich am Samstagnachmittag und an einem Abend in der Woche, zum Beispiel mittwochs ab 18 Uhr.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "zeitung|gelesen|anzeige|ehrenamt|helfen|mithelfen|interess",
         "In der Zeitung habe ich gelesen, dass Sie Ehrenamtliche suchen."
        ],
        [
         "heiße|komme aus|wohne|lebe|arbeite|bin \\d|jahre alt|familie",
         "Ich heiße Suresh, komme aus Indien und arbeite als Ingenieur."
        ],
        [
         "spazieren|spielen|vorlesen|kochen|singen|erzählen|gespräch|begleiten|könnte",
         "Ich könnte mit den Bewohnern spazieren gehen oder Karten spielen."
        ],
        [
         "montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|wochenende|abend|nachmittag|vormittag|uhr|zeit|\\d",
         "Ich habe am Samstagnachmittag Zeit."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie wohnen in Frankfurt. Sind Sie schon einmal in Deutschland umgezogen? Wie war das?"
       },
       {
        "you": "Erzähl von einem Umzug.",
        "min": 15,
        "key": [
         [
          "umgezogen|umzug|gewohnt|wohnung|eingezogen|kisten|möbel",
          "Umzug"
         ],
         [
          "war|hat|habe|haben",
          "Vergangenheit"
         ]
        ],
        "model": "Ja, letztes Jahr sind wir von einer kleinen Wohnung in eine größere umgezogen. Freunde haben uns geholfen, die Kisten zu tragen. Das war anstrengend, aber am Abend haben wir zusammen Pizza gegessen."
       },
       {
        "who": "Prüferin",
        "say": "Was machen Sie gern in Ihrer Freizeit? Engagieren Sie sich vielleicht in einem Verein?"
       },
       {
        "you": "Sag, was du in deiner Freizeit machst – mit Grund.",
        "min": 12,
        "key": [
         [
          "freizeit|verein|gern|spiele|sport|lese|koche|helfe|mitglied",
          "Freizeit"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In meiner Freizeit spiele ich Cricket in einem Verein. Das macht mir Spaß, weil ich dort viele Leute aus anderen Ländern treffe."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Ehrenamt. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-11.jpg",
         "alt": "Zwei Frauen auf einem Sofa: Eine junge Frau und eine ältere Frau mit Brille schauen zusammen auf ein Tablet. Die ältere Frau hält es in der Hand, und beide lachen.",
         "by": "Centre for Ageing Better",
         "link": "https://unsplash.com/photos/ein-mann-und-eine-frau-sitzen-auf-einer-couch-und-schauen-auf-ein-tablet-UWZNnNQjraI"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "frau|frauen|alt|ältere|jung|sofa|couch|tablet|handy|lachen|zeigt|computer",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich zwei Frauen auf einem Sofa, eine junge und eine ältere mit Brille. Die ältere Frau hält ein Tablet, und die junge Frau zeigt ihr etwas darauf. Beide lachen. Vielleicht erklärt sie ihr, wie man Fotos anschaut oder mit der Familie telefoniert. Ich glaube, sie ist eine Ehrenamtliche, die ältere Menschen besucht."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man junge Leute, die im Wald Müll sammeln. Sie tragen Handschuhe und haben große Säcke dabei."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Haben Sie schon einmal anderen Menschen geholfen, ohne Geld dafür zu bekommen?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "geholfen|helfe|ehrenamt|verein|nachbar|freunde|spende|kostenlos|mitgemacht",
          "zum Thema"
         ]
        ],
        "model": "Ja, als ich nach Deutschland gekommen bin, habe ich einem neuen Kollegen bei der Wohnungssuche geholfen. Außerdem helfe ich manchmal meiner älteren Nachbarin beim Einkaufen."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Gibt es dort auch Ehrenamt und Vereine? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien gibt es nicht so viele Vereine wie hier. Dort hilft vor allem die Familie oder die Nachbarschaft. Ich finde das Ehrenamt in Deutschland sehr gut, weil auch Menschen ohne Familie Hilfe bekommen."
       },
       {
        "who": "Anna",
        "say": "Das ist in Polen ähnlich. Viele helfen in der Kirchengemeinde."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihre Nachbarin, Frau Novak, zieht am Samstag in eine neue Wohnung im Nachbarort. Sie ist allein und hat kein Auto. Sie möchten ihr zusammen beim Umzug helfen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Transport? · Wer hilft noch? · Essen für die Helfer? · Was ist mit der alten Wohnung?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihre Nachbarin, Frau Novak, zieht am Samstag in eine neue Wohnung im Nachbarort. Sie ist allein und hat kein Auto. Sie möchten ihr zusammen beim Umzug helfen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Transport? · Wer hilft noch? · Essen für die Helfer? · Was ist mit der alten Wohnung?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Frau Novak hat keinen Wagen. Sollen wir einen großen Transporter mieten?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ein Transporter ist gut, aber ein großer ist teuer und schwer zu fahren. Ich würde lieber einen kleinen Transporter nehmen und zweimal fahren, weil es ja nicht weit ist."
       },
       {
        "who": "Anna",
        "say": "Okay. Und wer hilft uns beim Tragen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "umzug|transporter|auto|kisten|möbel|helfen|helfer|pizza|essen|wohnung|putzen|schlüssel|samstag|nachbar",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten Herrn Rossi aus dem dritten Stock fragen, er ist stark. Wie wäre es, wenn wir für alle Helfer Pizza bestellen?"
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und die alte Wohnung muss sie ja auch noch putzen."
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kümmere mich um den Transporter und frage Herrn Rossi. Kannst du am Sonntag mit Frau Novak die alte Wohnung putzen? Dann kann sie am Montag den Schlüssel abgeben."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "umzug|transporter|auto|kisten|möbel|helfen|helfer|pizza|essen|wohnung|putzen|schlüssel|samstag|nachbar",
          "Plan"
         ]
        ],
        "model": "Also, wir mieten einen kleinen Transporter und fahren zweimal. Herr Rossi hilft beim Tragen, und mittags bestellen wir Pizza. Ich organisiere den Transporter, und du putzt am Sonntag mit Frau Novak die alte Wohnung."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-12",
  "title": "Modelltest 12",
  "level": "schwer",
  "sub": "Arbeitsrecht, Weiterbildung, Umwelt · Überstunden an den Arbeitgeber / Spielplatz an die Stadt",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Tran tun?",
        "o": [
         "Seinen Lohnzettel prüfen.",
         "Ein Formular unterschreiben.",
         "Sich krankmelden."
        ],
        "a": 1,
        "why": "Die Überstunden werden bezahlt, aber erst nach Unterschrift auf dem Formular bei der Personalabteilung. Der Fehler auf dem Lohnzettel wird ja schon korrigiert.",
        "audio": "Hallo Herr Tran, hier ist Frau Wagner aus der Personalabteilung. Sie hatten nach Ihren Überstunden aus dem letzten Monat gefragt. Sie haben recht, auf Ihrer Abrechnung fehlen zwölf Stunden. Wir korrigieren das mit dem nächsten Gehalt. Dafür brauchen wir aber noch Ihre Unterschrift auf dem Stundenzettel. Kommen Sie bitte diese Woche kurz bei mir im Büro vorbei, Zimmer 204."
       },
       {
        "q": "Wann beginnt der Kurs?",
        "o": [
         "Am 3. März.",
         "Am 10. März.",
         "Am 17. März."
        ],
        "a": 2,
        "why": "Der 3. März ist ausgefallen, der 10. März ist nur der Infoabend – Kursbeginn ist der 17.",
        "audio": "Guten Tag, hier ist die Volkshochschule. Sie haben sich für den Kurs „Buchhaltung mit dem Computer“ angemeldet. Leider waren für den Start am 3. März zu wenige Teilnehmer da. Wir haben aber jetzt genug Anmeldungen. Am 10. März gibt es einen Infoabend, und am 17. März geht der Kurs dann los. Den Infoabend müssen Sie nicht besuchen."
       },
       {
        "q": "Was ändert sich bei der Müllabfuhr?",
        "o": [
         "Die Biotonne wird seltener geleert.",
         "Gelbe Säcke gibt es nicht mehr.",
         "Der Restmüll kommt an einem anderen Tag."
        ],
        "a": 0,
        "why": "Ab November nur alle zwei Wochen = seltener; der Restmüll bleibt am Dienstag, von gelben Säcken ist keine Rede.",
        "audio": "Liebe Bürgerinnen und Bürger, hier ist der Abfallservice der Stadt. Ab November wird die Biotonne nur noch alle zwei Wochen geleert, ab April dann wieder jede Woche. Der Restmüll wird weiter am Dienstag abgeholt. Und eine Bitte: Stellen Sie die Tonnen bis sieben Uhr morgens an die Straße."
       },
       {
        "q": "Warum kann Frau Lopez am Freitag nicht kommen?",
        "o": [
         "Der Arzt ist im Urlaub.",
         "Die Praxis hat einen Termin verschoben.",
         "Die Untersuchung muss nüchtern sein."
        ],
        "a": 1,
        "why": "Die Praxis hat den Termin auf Montag verlegt, weil das Gerät repariert wird. Nüchtern sein muss sie trotzdem – das ist kein Grund.",
        "audio": "Guten Morgen, Frau Lopez, hier ist die Praxis Dr. Krämer. Ihre Untersuchung am Freitag müssen wir leider auf Montag um 8 Uhr verlegen, weil unser Ultraschallgerät am Freitag repariert wird. Bitte denken Sie daran, auch am Montag nüchtern zu kommen, also ohne Frühstück. Wenn Montag nicht passt, rufen Sie uns bitte an."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um Rechte von Arbeitnehmern.",
         "Um freie Stellen in der Region.",
         "Um Ausbildung im Ausland."
        ],
        "a": 0,
        "why": "Fragen zu Urlaub, Überstunden und Kündigung – also Arbeitnehmerrechte.",
        "audio": "Darf mein Chef mir den Urlaub einfach streichen? Muss ich Überstunden machen? Und was passiert, wenn ich während der Probezeit krank werde? Diese Fragen beantwortet heute bei „Arbeit und Recht“ ein Anwalt für Arbeitsrecht. Sie können live anrufen."
       },
       {
        "q": "Was sollen die Bürger tun?",
        "o": [
         "Weniger Auto fahren.",
         "Bäume in der Stadt gießen.",
         "Wasser sparen."
        ],
        "a": 1,
        "why": "Die Stadt bittet, Straßenbäume vor dem Haus mit ein paar Eimern zu gießen; Wassersparen wird nicht verlangt.",
        "audio": "Die Hitze hält an: Seit drei Wochen hat es in der Region nicht geregnet. Die Stadt bittet alle Bürgerinnen und Bürger, die jungen Straßenbäume vor ihrem Haus mit zwei oder drei Eimern Wasser zu gießen. Die städtischen Gärtner schaffen das zurzeit nicht allein. Das Trinkwasser ist übrigens nicht knapp."
       },
       {
        "q": "Was gilt für die Fahrradstraße?",
        "o": [
         "Autos dürfen dort nicht fahren.",
         "Radfahrer haben Vorrang.",
         "Sie ist nur am Wochenende geöffnet."
        ],
        "a": 1,
        "why": "Autos dürfen noch fahren, aber nur 30 km/h, und Radfahrer haben Vorrang – auch nebeneinander.",
        "audio": "Ab Montag ist die Uferstraße offiziell eine Fahrradstraße. Was heißt das? Autos dürfen dort weiter fahren, aber höchstens 30 Kilometer pro Stunde. Radfahrerinnen und Radfahrer haben Vorrang und dürfen auch nebeneinander fahren. Die Stadt hofft, dass so mehr Menschen mit dem Rad zur Arbeit kommen."
       },
       {
        "q": "Was bekommt man im Repair-Café?",
        "o": [
         "Ein neues Gerät zum halben Preis.",
         "Hilfe beim Reparieren.",
         "Geld für alte Geräte."
        ],
        "a": 1,
        "why": "Ehrenamtliche helfen beim Reparieren; man bezahlt nur Ersatzteile. Es wird nichts verkauft oder angekauft.",
        "audio": "Ihr Toaster geht nicht mehr, oder die Lampe flackert? Werfen Sie sie nicht weg! Jeden ersten Samstag im Monat öffnet im Bürgerhaus das Repair-Café. Ehrenamtliche Technikerinnen und Techniker reparieren mit Ihnen zusammen Ihre Geräte. Die Hilfe ist kostenlos, nur Ersatzteile müssen Sie bezahlen."
       },
       {
        "q": "Wie wird das Wetter morgen?",
        "o": [
         "Nebel am Morgen, dann sonnig.",
         "Den ganzen Tag Regen.",
         "Sonnig am Morgen, abends Regen."
        ],
        "a": 0,
        "why": "Morgens dichter Nebel, ab Mittag Sonne; Regen erst übermorgen.",
        "audio": "Das Wetter für morgen: Am Morgen gibt es vor allem in den Tälern dichten Nebel, Autofahrer sollten also vorsichtig fahren. Ab Mittag löst sich der Nebel auf, und es wird sonnig bei bis zu 16 Grad. Regen kommt erst übermorgen."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Der Mann soll am Wochenende arbeiten.",
        "a": true,
        "why": "Der Chef bittet ihn, am Samstag zu arbeiten, weil ein großer Auftrag fertig werden muss.",
        "audio": "Frau: Herr Popescu, haben Sie kurz Zeit? Wir haben einen großen Auftrag, der bis Montag fertig sein muss. Könnten Sie am Samstag arbeiten?\nMann: Diesen Samstag? Eigentlich hat meine Tochter Geburtstag.\nFrau: Oh, das verstehe ich. Es wären nur vier Stunden, von acht bis zwölf. Sie bekommen dafür einen Zuschlag von 25 Prozent, oder Sie nehmen nächste Woche einen Tag frei.\nMann: Dann komme ich am Vormittag. Die Feier ist erst am Nachmittag. Und ich nehme lieber den freien Tag.\nFrau: Wunderbar, vielen Dank!"
       },
       {
        "same": true,
        "q": "Was bekommt Herr Popescu für den Samstag?",
        "o": [
         "Mehr Geld.",
         "Einen freien Tag.",
         "Ein Geschenk für die Tochter."
        ],
        "a": 1,
        "why": "Er hat die Wahl zwischen Zuschlag und freiem Tag – „Ich nehme lieber den freien Tag.“"
       },
       {
        "q": "Die Frau hat die Weiterbildung schon begonnen.",
        "a": false,
        "why": "Sie möchte sie erst machen und fragt nach der Bezahlung.",
        "audio": "Frau: Herr Klein, ich würde gern eine Weiterbildung zur Pflegefachkraft machen. Ich habe gehört, dass die Firma manchmal Kurse bezahlt.\nMann: Das stimmt. Wir übernehmen die Kursgebühren, wenn Sie danach mindestens zwei Jahre bei uns bleiben.\nFrau: Und die Arbeitszeit?\nMann: Die Kurstage gelten als Arbeitszeit. Sie müssen aber das Formular bis Ende des Monats bei der Personalabteilung abgeben.\nFrau: Das mache ich gleich morgen."
       },
       {
        "same": true,
        "q": "Welche Bedingung gibt es?",
        "o": [
         "Sie muss die Kurse selbst bezahlen.",
         "Sie muss mindestens zwei Jahre bleiben.",
         "Sie muss die Kurse in ihrer Freizeit machen."
        ],
        "a": 1,
        "why": "„wenn Sie danach mindestens zwei Jahre bei uns bleiben“"
       },
       {
        "q": "Die beiden Männer finden die neue Mülltrennung gut.",
        "a": false,
        "why": "Nur einer findet sie gut; der andere ärgert sich über die vielen Tonnen.",
        "audio": "Mann 1: Hast du gesehen? Im Hof stehen jetzt fünf verschiedene Mülltonnen.\nMann 2: Ja, und ich verstehe das System überhaupt nicht. Wohin kommt denn ein Joghurtbecher?\nMann 1: In die gelbe Tonne, aber leer, nicht gespült. Ich finde das gut, so wird mehr recycelt.\nMann 2: Mir ist das zu kompliziert. Und die Tonnen nehmen den ganzen Platz für die Fahrräder weg.\nMann 1: Frag doch die Hausverwaltung, ob die Fahrräder in den Keller dürfen."
       },
       {
        "same": true,
        "q": "Was schlägt der erste Mann vor?",
        "o": [
         "Die Hausverwaltung zu fragen.",
         "Die Tonnen in den Keller zu stellen.",
         "Den Joghurtbecher zu spülen."
        ],
        "a": 0,
        "why": "„Frag doch die Hausverwaltung, ob die Fahrräder in den Keller dürfen.“ – die Tonnen bleiben; spülen muss man nicht."
       },
       {
        "q": "Die Frau hat einen befristeten Vertrag.",
        "a": true,
        "why": "Ihr Vertrag endet im Juni – er ist befristet.",
        "audio": "Mann: Na, Sevgi, wie geht es dir in der neuen Firma?\nFrau: Gut eigentlich. Aber mein Vertrag ist nur bis Juni befristet, und ich weiß nicht, ob er verlängert wird.\nMann: Hast du schon mit deinem Chef gesprochen?\nFrau: Noch nicht. Ich habe Angst, dass das einen schlechten Eindruck macht.\nMann: Im Gegenteil! Wenn du jetzt fragst, zeigst du, dass du bleiben willst. Mach doch einen Termin für ein Gespräch aus.\nFrau: Hm, du hast recht. Ich schreibe ihm heute eine E-Mail."
       },
       {
        "same": true,
        "q": "Was macht Sevgi heute?",
        "o": [
         "Sie sucht eine neue Stelle.",
         "Sie spricht mit dem Chef.",
         "Sie bittet um einen Termin."
        ],
        "a": 2,
        "why": "Sie schreibt dem Chef eine E-Mail – für einen Gesprächstermin. Gesprochen hat sie noch nicht mit ihm."
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Plastik vermeiden – geht das im Alltag?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Ohne Plastik einzukaufen kostet zu viel Zeit.",
       "Kleine Schritte sind besser als gar nichts.",
       "Die Industrie muss das Problem lösen, nicht die Kunden.",
       "Kinder lernen das in der Schule am besten.",
       "Verpackungsfreie Läden sind zu teuer.",
       "Mehrweg-Flaschen sind schon ein guter Anfang."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "Er sagt, er kann nichts tun, wenn alles schon verpackt ist – die Firmen müssen etwas ändern.",
        "audio": "Ich gebe mir ja Mühe. Aber gehen Sie mal in einen Supermarkt: Die Gurke ist in Plastik eingeschweißt, die Äpfel liegen in einer Schale mit Folie. Was soll ich als Kunde da machen? Die Hersteller müssen endlich anders verpacken."
       },
       {
        "q": "Aussage 2",
        "a": 1,
        "why": "Sie macht nicht alles perfekt, aber Stoffbeutel und eigene Dose – kleine Schritte.",
        "audio": "Ich bin keine Umwelt-Heldin. Aber ich habe immer einen Stoffbeutel in der Tasche, und beim Bäcker lasse ich mir die Brötchen in meinen eigenen Beutel geben. Wenn jeder nur ein paar kleine Dinge ändert, ist schon viel gewonnen."
       },
       {
        "q": "Aussage 3",
        "a": 4,
        "why": "Sie war im Unverpackt-Laden, aber Nudeln und Reis kosten dort fast das Doppelte – zu teuer.",
        "audio": "Bei uns in der Nähe hat ein Unverpackt-Laden aufgemacht. Die Idee finde ich super. Ich war zweimal da, aber für Nudeln und Reis habe ich dort fast das Doppelte bezahlt. Mit drei Kindern kann ich mir das leider nicht leisten."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Stadtwerke – Kundencenter\nErdgeschoss: Empfang · Kasse · Fundsachen aus Bus und Bahn · Verkauf von Monatskarten\n1. Stock: Strom und Gas (Verträge, Zählerstand, Rechnungen) · Energieberatung\n2. Stock: Wasser und Abwasser · Abfallwirtschaft (Tonnen bestellen, Sperrmüll anmelden)\n3. Stock: Personal und Bewerbungen · Ausbildung\n4. Stock: Geschäftsführung · Presse",
      "items": [
       {
        "q": "Sie möchten Ihren alten Schrank wegwerfen lassen.",
        "o": [
         "1. Stock",
         "2. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Sperrmüll anmelden – Abfallwirtschaft, 2. Stock"
       },
       {
        "q": "Sie möchten wissen, wie Sie zu Hause weniger Heizkosten haben.",
        "o": [
         "1. Stock",
         "4. Stock",
         "2. Stock"
        ],
        "a": 0,
        "why": "Energieberatung – 1. Stock"
       },
       {
        "q": "Ihr Sohn sucht nach der Schule eine Lehrstelle.",
        "o": [
         "4. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Ausbildung – 3. Stock"
       },
       {
        "q": "Sie haben Ihren Regenschirm in der Straßenbahn vergessen.",
        "o": [
         "2. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 2,
        "why": "Fundsachen aus Bus und Bahn – Erdgeschoss"
       },
       {
        "q": "Ihre letzte Gasrechnung ist viel zu hoch.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "4. Stock"
        ],
        "a": 1,
        "why": "Strom und Gas – Rechnungen (nicht die Kasse)"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Gewerkschaftsbüro Mitte: Beratung für Mitglieder bei Problemen mit dem Arbeitgeber.",
       "Berufsschule Nord: Abendkurse für den Realschulabschluss, Unterricht montags bis donnerstags.",
       "Anerkennungsberatung IQ: Wir helfen, Ihren ausländischen Berufsabschluss in Deutschland anerkennen zu lassen.",
       "Zeitarbeit Flex: sofort Jobs in Lager und Produktion, auch ohne Deutschkenntnisse.",
       "Fahrradladen Kette: Dienstfahrräder für Firmen und ihre Mitarbeiter – Beratung kostenlos.",
       "Energiesparberatung der Verbraucherzentrale: Ein Experte kommt zu Ihnen nach Hause – 40 Euro.",
       "Sprachschule Wort: Deutsch für den Beruf (B2), Kurs abends und am Wochenende.",
       "Rechtsanwältin Dr. Yıldız: Familienrecht – Scheidung, Unterhalt, Sorgerecht."
      ],
      "items": [
       {
        "q": "Sie sind Krankenpfleger aus Kolumbien und möchten auch in Deutschland in Ihrem Beruf arbeiten.",
        "a": 2,
        "why": "Anerkennung des ausländischen Abschlusses"
       },
       {
        "q": "Ihr Chef zahlt Ihnen seit zwei Monaten keine Überstunden. Sie sind Gewerkschaftsmitglied.",
        "a": 0,
        "why": "Gewerkschaft – Beratung für Mitglieder bei Problemen mit dem Arbeitgeber"
       },
       {
        "q": "Sie haben in Ihrem Heimatland keinen Schulabschluss gemacht und wollen das nachholen, haben aber tagsüber Arbeit.",
        "a": 1,
        "why": "Abendkurse für den Schulabschluss"
       },
       {
        "q": "Sie wollen wissen, wie Ihre Firma Ihnen einen Firmenwagen bezahlen kann.",
        "a": -1,
        "why": "Ein Firmenwagen ist ein Auto – der Fahrradladen bietet nur Diensträder an; keine Anzeige passt."
       },
       {
        "q": "Ihre Stromrechnung ist sehr hoch, und Sie möchten wissen, welche Geräte in Ihrer Wohnung zu viel verbrauchen.",
        "a": 5,
        "why": "Energieberatung bei Ihnen zu Hause"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Alle Mitarbeiter müssen an der Schulung teilnehmen.",
        "a": false,
        "why": "Nur die Mitarbeiter, die mit Kunden telefonieren – nicht alle.",
        "text": "An alle Mitarbeiterinnen und Mitarbeiter im Kundenservice\nAb dem 1. April arbeiten wir mit einem neuen Computerprogramm. Deshalb gibt es im März für alle, die am Telefon mit Kunden sprechen, eine Pflichtschulung von drei Stunden. Die Termine finden Sie im Intranet. Bitte tragen Sie sich bis zum 20. Februar ein. Die Schulung gilt als Arbeitszeit. Wer an keinem Termin kann, meldet sich bitte bei Frau Kühn.\nDie Abteilungsleitung"
       },
       {
        "same": true,
        "q": "Was sollen Mitarbeiter tun, die keinen Termin wahrnehmen können?",
        "o": [
         "Sich im Intranet eintragen.",
         "Sich bei einer Kollegin melden.",
         "Die Schulung zu Hause machen."
        ],
        "a": 1,
        "why": "„Wer an keinem Termin kann, meldet sich bitte bei Frau Kühn.“"
       },
       {
        "q": "Die Aktion findet nur bei schönem Wetter statt.",
        "a": false,
        "why": "„bei jedem Wetter“ – auch bei Regen.",
        "text": "Mitmachen beim großen Frühjahrsputz!\nAm Samstag, dem 22. März, sammeln wir gemeinsam Müll in Parks, auf Spielplätzen und am Flussufer. Treffpunkt ist um 10 Uhr am Rathausplatz. Handschuhe, Zangen und Säcke bekommen Sie von uns. Die Aktion findet bei jedem Wetter statt – bitte denken Sie an passende Kleidung. Zum Abschluss lädt die Bürgermeisterin alle Helferinnen und Helfer um 13 Uhr zu einer Suppe ein. Kinder sind herzlich willkommen, wenn sie von einem Erwachsenen begleitet werden."
       },
       {
        "same": true,
        "q": "Was müssen die Helfer selbst mitbringen?",
        "o": [
         "Handschuhe und Säcke.",
         "Kleidung für das Wetter.",
         "Etwas zu essen."
        ],
        "a": 1,
        "why": "Material bekommt man; mitbringen soll man nur „passende Kleidung“. Die Suppe gibt es von der Stadt."
       },
       {
        "q": "Herr Ivanov hat zu viele Urlaubstage genommen.",
        "a": false,
        "why": "Er hat noch Resturlaub – er hat zu wenig genommen.",
        "text": "Sehr geehrter Herr Ivanov,\nlaut unseren Unterlagen haben Sie aus dem letzten Jahr noch acht Tage Resturlaub. Nach Ihrem Arbeitsvertrag müssen Sie diese Tage bis zum 31. März nehmen, sonst verfallen sie. Bitte sprechen Sie mit Ihrer Teamleiterin und reichen Sie Ihren Urlaubsantrag bis Ende Januar ein. Wenn Sie die Tage aus betrieblichen Gründen nicht nehmen konnten, teilen Sie uns das bitte schriftlich mit.\nMit freundlichen Grüßen\nPersonalabteilung"
       },
       {
        "same": true,
        "q": "Was passiert, wenn Herr Ivanov den Urlaub nicht bis Ende März nimmt?",
        "o": [
         "Er bekommt Geld dafür.",
         "Er kann die Tage nicht mehr nehmen.",
         "Er bekommt eine Abmahnung."
        ],
        "a": 1,
        "why": "„sonst verfallen sie“ = die Tage sind dann weg."
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Probezeit – was gilt?\nViele Arbeitsverträge in Deutschland beginnen mit einer Probezeit. Sie dauert meistens sechs Monate, länger ist normalerweise nicht erlaubt. In dieser Zeit können Arbeitgeber und Arbeitnehmer prüfen, ob sie gut zusammenpassen.\nDer wichtigste Unterschied zur Zeit danach: Die Kündigungsfrist ist kürzer. In der Probezeit können beide Seiten den Vertrag mit einer Frist von zwei Wochen kündigen, und der Arbeitgeber muss keinen Grund nennen. Nach der Probezeit beträgt die Frist mindestens vier Wochen.\nViele glauben, dass man in der Probezeit keinen Urlaub nehmen darf. Das stimmt nicht: Den vollen Urlaubsanspruch hat man zwar erst nach sechs Monaten, aber für jeden vollen Monat bekommt man schon einen Teil der Urlaubstage. Auch wer in der Probezeit krank wird, bekommt nach vier Wochen im Betrieb ganz normal Lohnfortzahlung.",
      "items": [
       {
        "q": "In der Probezeit darf man überhaupt keinen Urlaub nehmen.",
        "a": false,
        "why": "Für jeden vollen Monat bekommt man schon einen Teil – „Das stimmt nicht“."
       },
       {
        "q": "Der Arbeitgeber muss in der Probezeit nicht sagen, warum er kündigt.",
        "a": true,
        "why": "„der Arbeitgeber muss keinen Grund nennen“"
       },
       {
        "q": "Nach der Probezeit kann man mit zwei Wochen Frist kündigen.",
        "a": false,
        "why": "nach der Probezeit mindestens vier Wochen"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Frau Berger,\nich arbeite seit zwei Jahren als Lagerist in Ihrer Firma und bin mit meiner Arbeit sehr zufrieden. In den letzten drei Monaten habe ich jedoch fast jede Woche zehn Überstunden gemacht, (1) zwei Kollegen krank waren. Diese Stunden stehen auch im Zeiterfassungssystem. Auf meinen Lohnabrechnungen tauchen sie aber nicht auf, (2) ich sie weder bezahlt bekommen noch als Freizeit genommen habe. Ich bitte Sie deshalb zu prüfen, (3) hier ein Fehler passiert ist. Am liebsten würde ich die Stunden als Freizeit nehmen, weil ich im Sommer meine Eltern in Vietnam besuchen möchte, (4) ich seit drei Jahren nicht gesehen habe. Falls das (5) betrieblichen Gründen nicht möglich ist, bitte ich um Auszahlung mit dem nächsten Gehalt. Für ein persönliches Gespräch stehe ich Ihnen jederzeit gern (6) Verfügung.\nMit freundlichen Grüßen\nMinh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "damit",
         "weil",
         "obwohl"
        ],
        "a": 1,
        "why": "Grund für die Überstunden → weil"
       },
       {
        "n": 2,
        "o": [
         "sodass",
         "trotzdem",
         "sondern"
        ],
        "a": 0,
        "why": "Folge im Nebensatz (Verb am Ende) → sodass"
       },
       {
        "n": 3,
        "o": [
         "dass",
         "ob",
         "wie"
        ],
        "a": 1,
        "why": "prüfen, ob … – indirekte Ja/Nein-Frage"
       },
       {
        "n": 4,
        "o": [
         "die",
         "denen",
         "deren"
        ],
        "a": 0,
        "why": "Relativsatz: die Eltern – ich habe sie nicht gesehen (Akkusativ Plural) → die"
       },
       {
        "n": 5,
        "o": [
         "aus",
         "von",
         "wegen"
        ],
        "a": 0,
        "why": "aus betrieblichen Gründen – feste Wendung"
       },
       {
        "n": 6,
        "o": [
         "in",
         "zur",
         "für"
        ],
        "a": 1,
        "why": "jemandem zur Verfügung stehen"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben in den letzten Monaten viele Überstunden gemacht. Auf Ihrer Lohnabrechnung stehen sie aber nicht. Schreiben Sie an die Personalabteilung, Frau Berger.",
      "points": [
       "Grund für Ihr Schreiben",
       "Warum haben Sie Überstunden gemacht?",
       "Was ist das Problem?",
       "Was möchten Sie: Geld oder Freizeit?"
      ],
      "model": "Sehr geehrte Frau Berger,\nich schreibe Ihnen, weil ich eine Frage zu meinen Überstunden habe.\nIn den letzten drei Monaten habe ich jede Woche etwa acht Stunden mehr gearbeitet, weil zwei Kollegen aus meinem Team lange krank waren und wir ein wichtiges Projekt fertig machen mussten.\nDie Stunden stehen im Zeiterfassungssystem, aber auf meinen Lohnabrechnungen für Februar, März und April finde ich sie nicht. Ich habe sie also weder bezahlt bekommen noch als Freizeit genommen.\nAm liebsten würde ich die Stunden als Freizeit nehmen, weil ich im Sommer meine Familie in Indien besuchen möchte. Wenn das nicht geht, bitte ich um Auszahlung mit dem nächsten Gehalt.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "schreibe|frage|überstunden|lohnabrechnung|abrechnung",
        "Ich schreibe Ihnen, weil ich eine Frage zu meinen Überstunden habe."
       ],
       [
        "krank|projekt|kolleg|viel arbeit|personal|weil|denn|auftrag",
        "Ich habe Überstunden gemacht, weil zwei Kollegen krank waren."
       ],
       [
        "stehen nicht|fehlen|nicht bezahlt|abrechnung|lohn|gehalt|nicht drauf|finde",
        "Auf meiner Lohnabrechnung stehen die Überstunden nicht."
       ],
       [
        "freizeit|frei|urlaub|geld|auszahl|bezahl|lieber|am liebsten",
        "Ich möchte die Stunden lieber als Freizeit nehmen."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Der Spielplatz in Ihrer Straße ist in einem schlechten Zustand. Schreiben Sie an das Grünflächenamt der Stadt.",
       "points": [
        "Grund für Ihr Schreiben",
        "Was ist das Problem?",
        "Warum ist das wichtig?",
        "Was soll die Stadt tun?"
       ],
       "model": "Sehr geehrte Damen und Herren,\nich wohne in der Lindenstraße und schreibe Ihnen wegen des Spielplatzes vor unserem Haus.\nDer Spielplatz ist seit Monaten in einem sehr schlechten Zustand. Die Schaukel ist kaputt, im Sandkasten liegen oft Glasscherben, und abends ist es dort sehr dunkel, weil die Lampe nicht funktioniert.\nDas ist ein großes Problem, weil hier viele Familien mit kleinen Kindern wohnen und der nächste Spielplatz zwei Kilometer weit weg ist. Letzte Woche hat sich ein Kind an einer Scherbe verletzt.\nIch bitte Sie deshalb, die Schaukel und die Lampe so schnell wie möglich zu reparieren und den Sand zu wechseln. Vielleicht könnten Sie auch einen Mülleimer aufstellen.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "schreibe|wegen|spielplatz|wohne",
         "Ich schreibe Ihnen wegen des Spielplatzes in unserer Straße."
        ],
        [
         "kaputt|scherben|glas|müll|schmutzig|dunkel|lampe|schaukel|gefährlich",
         "Die Schaukel ist kaputt und im Sand liegen Glasscherben."
        ],
        [
         "kinder|familien|verletzt|gefährlich|weil|denn|wichtig|nächste",
         "Das ist wichtig, weil hier viele Kinder wohnen und es gefährlich ist."
        ],
        [
         "reparier|erneuer|sauber|wechsel|aufstell|bitte|kontrollier|bald",
         "Bitte reparieren Sie die Schaukel und machen Sie den Spielplatz sauber."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie arbeiten in einer IT-Firma. Wie sieht ein normaler Arbeitstag bei Ihnen aus?"
       },
       {
        "you": "Beschreib einen normalen Arbeitstag.",
        "min": 15,
        "key": [
         [
          "morgens|zuerst|dann|danach|mittags|nachmittag|abend|um \\d|uhr",
          "Ablauf"
         ],
         [
          "arbeite|besprechung|meeting|mails|kolleg|programm|pause",
          "Arbeit"
         ]
        ],
        "model": "Ich fange meistens um halb neun an. Zuerst lese ich meine E-Mails, dann haben wir ein kurzes Meeting im Team. Danach arbeite ich an meinem Projekt. Mittags esse ich mit Kollegen in der Kantine, und um fünf mache ich Feierabend."
       },
       {
        "who": "Prüferin",
        "say": "Haben Sie in Deutschland schon eine Weiterbildung gemacht oder möchten Sie eine machen?"
       },
       {
        "you": "Erzähl von einer Weiterbildung – gemacht oder geplant, mit Grund.",
        "min": 12,
        "key": [
         [
          "kurs|weiterbildung|schulung|seminar|lernen|zertifikat|fortbildung",
          "Weiterbildung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Letztes Jahr habe ich eine Schulung zum Projektmanagement gemacht. Jetzt möchte ich einen Deutschkurs B2 machen, weil ich im Beruf mehr Deutsch sprechen muss."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Umwelt im Alltag. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-12.jpg",
         "alt": "Eine ruhige Straße: Ein Mann mit Helm fährt Fahrrad, hinten sitzt ein kleines Kind in einem Kindersitz mit Dach, vorne im Korb ist eine Tasche.",
         "by": "Kenny",
         "link": "https://unsplash.com/photos/mann-fahrt-ein-lastenrad-mit-einem-kind-im-schlepptau-G4tKo_nv1Wo"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "mann|fahrrad|rad|kind|kindersitz|helm|korb|tasche|straße|fährt|kita",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sieht man einen Mann auf einem Fahrrad. Er trägt einen Helm, und hinten sitzt ein kleines Kind in einem Kindersitz. Vorne im Korb ist eine Tasche. Ich glaube, er bringt das Kind morgens in die Kita und fährt dann weiter zur Arbeit – ganz ohne Auto."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man einen Supermarkt, in dem die Leute ihre eigenen Dosen und Gläser mitbringen. Ein Mann füllt gerade Nudeln in ein Glas."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Was tun Sie im Alltag für die Umwelt?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "müll|trenne|fahrrad|rad|bus|bahn|plastik|strom|spare|tasche|beutel|auto",
          "zum Thema"
         ]
        ],
        "model": "Ich fahre fast jeden Tag mit der S-Bahn zur Arbeit, ein Auto habe ich nicht. Zu Hause trennen wir den Müll, und beim Einkaufen nehme ich immer eine Stofftasche mit."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Spielt Umweltschutz dort eine große Rolle? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien ist die Luft in vielen Städten sehr schlecht, und es gibt viel Plastikmüll auf den Straßen. Inzwischen sind Plastiktüten in vielen Regionen verboten. Ich finde, dass Deutschland mit der Mülltrennung ein gutes Beispiel ist, weil hier viel recycelt wird."
       },
       {
        "who": "Anna",
        "say": "Ja, bei uns in Polen wird das auch langsam besser."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Ihre Firma möchte umweltfreundlicher werden. Sie und eine Kollegin sollen für die nächste Teamsitzung drei konkrete Ideen vorbereiten. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Weg zur Arbeit? · Papier und Strom sparen? · Kantine? · Wer stellt die Ideen vor?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Ihre Firma möchte umweltfreundlicher werden. Sie und eine Kollegin sollen für die nächste Teamsitzung drei konkrete Ideen vorbereiten. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Weg zur Arbeit? · Papier und Strom sparen? · Kantine? · Wer stellt die Ideen vor?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Viele Kollegen kommen mit dem Auto. Sollen wir vorschlagen, dass die Firma ein Jobticket bezahlt?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Das finde ich gut, weil dann mehr Leute mit Bus und Bahn fahren. Ich würde aber auch Diensträder vorschlagen, weil viele nah an der Firma wohnen."
       },
       {
        "who": "Anna",
        "say": "Ja, beides. Was können wir im Büro selbst ändern?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "rad|fahrrad|bus|bahn|jobticket|papier|drucken|strom|licht|computer|kantine|essen|vegetarisch|plastik|becher|sitzung|vorstellen|präsentation",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten weniger drucken und abends alle Computer ganz ausschalten. Was hältst du davon, in der Kantine Plastikbecher durch Tassen zu ersetzen?"
       },
       {
        "who": "Anna",
        "say": "Super. Und wer stellt das in der Sitzung vor?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich mache eine kurze Präsentation mit drei Folien. Kannst du vorher in der Personalabteilung fragen, was ein Jobticket kostet? Dann stellen wir es zusammen vor."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "rad|fahrrad|bus|bahn|jobticket|papier|drucken|strom|licht|computer|kantine|essen|vegetarisch|plastik|becher|sitzung|vorstellen|präsentation",
          "Plan"
         ]
        ],
        "model": "Also, wir schlagen drei Dinge vor: ein Jobticket und Diensträder für den Weg zur Arbeit, weniger drucken und Computer abends ausschalten, und Tassen statt Plastikbecher in der Kantine. Ich mache die Präsentation, und du fragst nach den Kosten für das Jobticket."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-13",
  "title": "Modelltest 13",
  "level": "schwer",
  "sub": "Ausländerbehörde, Integrationskurs, Einbürgerung · Termin bei der Ausländerbehörde / Fehlzeiten im Kurs",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Frau Haddad mitbringen?",
        "o": [
         "Ein neues Passfoto.",
         "Ihren alten Aufenthaltstitel.",
         "Eine Bescheinigung vom Arbeitgeber."
        ],
        "a": 2,
        "why": "Das Foto ist schon da und der alte Titel wird nicht gebraucht; es fehlt die Arbeitgeberbescheinigung.",
        "audio": "Guten Tag, Frau Haddad, hier ist die Ausländerbehörde, Herr Wendt. Es geht um die Verlängerung Ihrer Aufenthaltserlaubnis am Dienstag. Ihr biometrisches Foto haben wir ja schon von Ihrem letzten Besuch. Was uns noch fehlt, ist eine aktuelle Bescheinigung von Ihrem Arbeitgeber, dass Sie dort unbefristet angestellt sind. Die bringen Sie bitte am Dienstag mit. Ihren alten Aufenthaltstitel müssen Sie nicht abgeben, der wird bei uns elektronisch geändert."
       },
       {
        "q": "Wann ist der Einstufungstest?",
        "o": [
         "Am Montag um 9 Uhr.",
         "Am Montag um 13 Uhr.",
         "Am Mittwoch um 9 Uhr."
        ],
        "a": 1,
        "why": "Der Tag bleibt Montag, aber die Zeit ändert sich von 9 auf 13 Uhr; Mittwoch ist der Kursbeginn.",
        "audio": "Hallo, hier ist die Sprachschule Lernwerk. Eine Information für alle, die sich für den Integrationskurs angemeldet haben: Der Einstufungstest findet wie geplant am Montag statt, aber nicht um neun Uhr, sondern erst um dreizehn Uhr, weil der Raum am Vormittag besetzt ist. Der Kurs selbst beginnt dann am Mittwoch um neun."
       },
       {
        "q": "Warum ruft Herr Becker an?",
        "o": [
         "Herr Suleiman hat die Prüfung nicht bestanden.",
         "Das Zertifikat kann abgeholt werden.",
         "Ein Prüfungsteil muss wiederholt werden."
        ],
        "a": 1,
        "why": "Das Zertifikat liegt bereit – „Sie können es ab morgen abholen“. Bestanden hat er sogar sehr gut.",
        "audio": "Guten Tag, Herr Suleiman, hier spricht Herr Becker von der Volkshochschule. Ich habe gute Nachrichten: Ihr Zertifikat vom Deutsch-Test für Zuwanderer ist angekommen. Sie haben B1 erreicht, im Sprechen sogar mit sehr gutem Ergebnis. Sie können das Zertifikat ab morgen im Sekretariat abholen – bitte bringen Sie Ihren Ausweis mit. Wir schicken es nicht mit der Post."
       },
       {
        "q": "Was muss Frau Nowak tun?",
        "o": [
         "Einen neuen Termin online buchen.",
         "Morgen früher kommen.",
         "Am Telefon bestätigen."
        ],
        "a": 0,
        "why": "Der Termin morgen fällt aus; sie soll selbst online einen neuen buchen – telefonisch geht das nicht.",
        "audio": "Guten Tag, Frau Nowak, hier ist das Bürgeramt Mitte. Leider müssen wir Ihren Termin für den neuen Reisepass morgen um 10 Uhr absagen, weil unser System an diesem Tag umgestellt wird. Bitte buchen Sie über unsere Internetseite einen neuen Termin. Telefonisch können wir leider keine Termine vergeben. Wir entschuldigen uns für die Unannehmlichkeiten."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um den Weg zur deutschen Staatsangehörigkeit.",
         "Um Urlaub im Ausland.",
         "Um Deutschkurse für Kinder."
        ],
        "a": 0,
        "why": "Einbürgerung = deutsche Staatsangehörigkeit; es geht um Voraussetzungen, Test und Dokumente.",
        "audio": "Willkommen bei „Ankommen“, dem Magazin für Neubürgerinnen und Neubürger. Wer lange in Deutschland lebt, möchte oft auch einen deutschen Pass. Welche Voraussetzungen gibt es? Wie läuft der Einbürgerungstest ab, und welche Dokumente brauchen Sie? Das erklärt uns heute eine Mitarbeiterin der Einbürgerungsbehörde."
       },
       {
        "q": "Was gilt für das Bürgeramt am Freitag?",
        "o": [
         "Es ist geschlossen.",
         "Es öffnet erst am Nachmittag.",
         "Man bekommt nur mit Termin einen Platz."
        ],
        "a": 1,
        "why": "Wegen einer Betriebsversammlung ist am Vormittag geschlossen, ab 13 Uhr ist es offen – also erst am Nachmittag.",
        "audio": "Eine Mitteilung der Stadtverwaltung: Am kommenden Freitag findet eine Betriebsversammlung statt. Deshalb bleibt das Bürgeramt am Vormittag geschlossen. Ab 13 Uhr sind alle Schalter wie gewohnt geöffnet, auch ohne Termin. Bereits gebuchte Termine am Vormittag werden auf den Nachmittag verschoben."
       },
       {
        "q": "Was ist neu beim Integrationskurs?",
        "o": [
         "Er ist jetzt für alle kostenlos.",
         "Man kann einen Teil online machen.",
         "Er dauert jetzt länger."
        ],
        "a": 1,
        "why": "Neu ist, dass Teilnehmende einen Teil der Stunden online machen können; Preis und Länge werden nicht geändert.",
        "audio": "Gute Nachrichten für alle, die Familie und Arbeit haben: Ab dem nächsten Semester bietet die Volkshochschule Integrationskurse an, bei denen ein Teil der Stunden online stattfindet. Zweimal pro Woche lernen Sie im Kursraum, an den anderen Tagen am Computer zu Hause. Die Kosten und die Zahl der Stunden bleiben gleich."
       },
       {
        "q": "Was sollen die Autofahrer tun?",
        "o": [
         "Die Innenstadt meiden.",
         "In der Tiefgarage parken.",
         "Mit der Bahn fahren."
        ],
        "a": 0,
        "why": "Wegen der Demonstration wird empfohlen, die Innenstadt weiträumig zu umfahren.",
        "audio": "Hinweis für den Verkehr: Wegen einer angemeldeten Demonstration sind am Samstag zwischen 11 und 15 Uhr mehrere Straßen in der Innenstadt gesperrt. Die Polizei empfiehlt allen Autofahrern, den Bereich weiträumig zu umfahren. Die Parkhäuser am Rand der Innenstadt bleiben erreichbar."
       },
       {
        "q": "Wie wird das Wetter morgen?",
        "o": [
         "Am Vormittag Schnee, später Regen.",
         "Den ganzen Tag Schnee.",
         "Kalt, aber trocken."
        ],
        "a": 0,
        "why": "Morgens Schnee, ab Mittag wird es wärmer und der Schnee geht in Regen über.",
        "audio": "Und hier das Wetter für morgen: In der Nacht und am Vormittag fällt Schnee, vor allem in höheren Lagen bis zu fünf Zentimeter. Ab Mittag steigen die Temperaturen auf drei bis fünf Grad, und der Schnee geht in Regen über. Am Abend bleibt es dann trocken."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Herr Rahman hat schon alle Stunden im Kurs besucht.",
        "a": false,
        "why": "Ihm fehlen noch Stunden – er war sechs Wochen krank.",
        "audio": "Frau: Herr Rahman, ich habe Ihre Fehlzeiten angesehen. Sie waren im Frühling sechs Wochen krank.\nMann: Ja, ich hatte eine Operation. Das Attest habe ich damals abgegeben.\nFrau: Das stimmt, das ist alles in Ordnung. Aber die Stunden fehlen Ihnen trotzdem. Sie können bei uns bis zu 100 Stunden in einem anderen Kurs wiederholen.\nMann: Muss ich die bezahlen?\nFrau: Nein, weil Sie ein Attest hatten, sind die Wiederholungsstunden für Sie kostenlos. Den Antrag helfe ich Ihnen gern ausfüllen."
       },
       {
        "same": true,
        "q": "Was muss Herr Rahman für die Wiederholungsstunden bezahlen?",
        "o": [
         "Die Hälfte.",
         "Nichts.",
         "100 Euro."
        ],
        "a": 1,
        "why": "„sind die Wiederholungsstunden für Sie kostenlos“ – 100 ist die Zahl der Stunden, kein Preis."
       },
       {
        "q": "Die Frau möchte die Prüfung verschieben.",
        "a": true,
        "why": "Sie fragt, ob sie die Prüfung im nächsten Monat machen kann.",
        "audio": "Mann: Prüfungszentrum, Schneider.\nFrau: Guten Tag, hier ist Ana Costa. Ich bin für den DTZ am 14. Juni angemeldet. Leider hat meine Schwester an diesem Tag Hochzeit in Portugal. Kann ich die Prüfung im Juli machen?\nMann: Das geht, aber nur, wenn Sie spätestens zwei Wochen vorher absagen. Das wäre bis zum 31. Mai.\nFrau: Das schaffe ich. Muss ich das schriftlich machen?\nMann: Eine E-Mail reicht. Schreiben Sie bitte Ihre Teilnehmernummer dazu."
       },
       {
        "same": true,
        "q": "Was muss Frau Costa tun?",
        "o": [
         "Bis Ende Mai eine E-Mail schreiben.",
         "Einen Brief an das Zentrum schicken.",
         "Am 14. Juni anrufen."
        ],
        "a": 0,
        "why": "Absagen bis 31. Mai, „Eine E-Mail reicht“ – mit Teilnehmernummer."
       },
       {
        "q": "Der Mann hat einen Termin bei der Ausländerbehörde.",
        "a": false,
        "why": "Er versucht seit Wochen, einen Termin zu bekommen – er hat keinen.",
        "audio": "Mann: Du, Elif, du warst doch letztes Jahr bei der Ausländerbehörde. Ich versuche seit drei Wochen, einen Termin zu bekommen, aber online ist immer alles voll.\nFrau: Das kenne ich. Du musst morgens um sieben auf die Seite gehen, dann werden die neuen Termine freigeschaltet.\nMann: Und wenn mein Visum vorher abläuft?\nFrau: Dann schick sofort eine E-Mail mit deinem Antrag. Wenn du den Antrag rechtzeitig stellst, darfst du bleiben, bis sie entschieden haben. Das nennt man Fiktionsbescheinigung."
       },
       {
        "same": true,
        "q": "Was rät Elif, wenn das Visum bald abläuft?",
        "o": [
         "Das Land kurz zu verlassen.",
         "Ohne Termin zur Behörde zu gehen.",
         "Den Antrag sofort per E-Mail zu schicken."
        ],
        "a": 2,
        "why": "„Dann schick sofort eine E-Mail mit deinem Antrag.“"
       },
       {
        "q": "Beide Männer haben den Orientierungskurs schon gemacht.",
        "a": false,
        "why": "Nur Karim hat ihn schon gemacht; Jonas fängt erst an.",
        "audio": "Mann 1: Karim, du hast doch den Orientierungskurs schon hinter dir. Wie war der Test „Leben in Deutschland“?\nMann 2: Gar nicht so schwer. Es gibt einen Fragenkatalog im Internet, da stehen alle Fragen drin. Ich habe jeden Abend eine halbe Stunde geübt.\nMann 1: Ich fange nächste Woche an. Ich habe ein bisschen Angst vor den Fragen zur Geschichte.\nMann 2: Die habe ich mit meiner Tochter geübt. Sie lernt das gerade in der Schule. Wenn du willst, kann sie dir helfen."
       },
       {
        "same": true,
        "q": "Wie hat Karim gelernt?",
        "o": [
         "In einem Extrakurs am Wochenende.",
         "Mit Fragen aus dem Internet.",
         "Mit einem Buch aus der Bibliothek."
        ],
        "a": 1,
        "why": "„Es gibt einen Fragenkatalog im Internet … Ich habe jeden Abend eine halbe Stunde geübt.“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Deutsch lernen als Erwachsener",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Ohne Kontakt zu Deutschen lernt man die Sprache kaum.",
       "Im Beruf braucht man ganz andere Wörter als im Kurs.",
       "Kinder lernen schneller als Erwachsene.",
       "Für Eltern ist es schwer, Zeit für den Kurs zu finden.",
       "Fernsehen auf Deutsch hilft sehr.",
       "Grammatik ist wichtiger als Sprechen."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 1,
        "why": "Im Kurs lernte er Alltagssätze, aber in der Werkstatt braucht er Fachwörter – Berufssprache ist anders.",
        "audio": "Im Integrationskurs habe ich gelernt, wie man beim Arzt einen Termin macht oder im Supermarkt fragt. Das war gut. Aber in der Autowerkstatt sprechen alle über Bremsscheiben, Drehmoment und Zylinderkopf. Das stand in keinem Kursbuch."
       },
       {
        "q": "Aussage 2",
        "a": 3,
        "why": "Drei Kinder, Kita schließt um 14 Uhr, Kurs abends – kaum Zeit als Mutter.",
        "audio": "Ich möchte so gern besser Deutsch sprechen. Aber ich habe drei Kinder, die Kita schließt um zwei, und der nächste Kurs ist abends, wenn mein Mann arbeitet. Wer soll dann auf die Kleinen aufpassen?"
       },
       {
        "q": "Aussage 3",
        "a": 0,
        "why": "Zwei Jahre Kurs, aber erst im Fußballverein mit deutschen Kollegen hat er wirklich sprechen gelernt.",
        "audio": "Zwei Jahre lang bin ich in den Kurs gegangen, habe Hausaufgaben gemacht, alles. Aber richtig sprechen gelernt habe ich erst, als ich in den Fußballverein gegangen bin. Da gibt es nur Deutsche, und nach dem Training sitzen wir zusammen."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Ausländerbehörde – Wegweiser\nErdgeschoss: Information · Terminvergabe · Abholung fertiger Dokumente\n1. Stock: Aufenthalt für Arbeit und Studium · Blaue Karte EU\n2. Stock: Familiennachzug · Aufenthalt aus familiären Gründen\n3. Stock: Niederlassungserlaubnis · Einbürgerung · Verpflichtungserklärungen (Einladung von Besuchern)\n4. Stock: Asyl und Duldung · Rückkehrberatung",
      "items": [
       {
        "q": "Ihre Frau soll aus Ihrem Heimatland zu Ihnen nach Deutschland ziehen.",
        "o": [
         "1. Stock",
         "2. Stock",
         "3. Stock"
        ],
        "a": 1,
        "why": "Familiennachzug – 2. Stock"
       },
       {
        "q": "Ihre neue elektronische Aufenthaltskarte ist fertig.",
        "o": [
         "Erdgeschoss",
         "1. Stock",
         "4. Stock"
        ],
        "a": 0,
        "why": "Abholung fertiger Dokumente – Erdgeschoss"
       },
       {
        "q": "Ihre Eltern möchten Sie für drei Monate besuchen. Sie sollen erklären, dass Sie die Kosten übernehmen.",
        "o": [
         "2. Stock",
         "Erdgeschoss",
         "3. Stock"
        ],
        "a": 2,
        "why": "Verpflichtungserklärung (Einladung von Besuchern) – 3. Stock, nicht Familiennachzug"
       },
       {
        "q": "Sie haben ein Jobangebot als IT-Spezialist und brauchen eine Erlaubnis zum Arbeiten.",
        "o": [
         "1. Stock",
         "3. Stock",
         "2. Stock"
        ],
        "a": 0,
        "why": "Aufenthalt für Arbeit, Blaue Karte – 1. Stock"
       },
       {
        "q": "Sie leben seit acht Jahren in Deutschland und möchten einen deutschen Pass.",
        "o": [
         "4. Stock",
         "3. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Einbürgerung – 3. Stock"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Übersetzungsbüro Atlas: beglaubigte Übersetzungen von Geburts- und Heiratsurkunden in 3 Tagen.",
       "Migrationsberatung für Erwachsene (MBE): kostenlose Beratung zu Aufenthalt, Arbeit und Familie.",
       "Volkshochschule: Vorbereitungskurs Einbürgerungstest – 4 Abende, 30 Euro.",
       "Fotostudio Klick: biometrische Passfotos sofort zum Mitnehmen.",
       "Anwaltskanzlei Mertens: Ausländerrecht – Erstberatung 80 Euro.",
       "Jugendmigrationsdienst: Beratung für junge Zugewanderte von 12 bis 27 Jahren.",
       "Sprachcafé International: Deutsch sprechen in gemütlicher Runde, jeden Donnerstag, ohne Anmeldung.",
       "Reisebüro Sonne: günstige Flüge in die Türkei, nach Syrien und in den Irak."
      ],
      "items": [
       {
        "q": "Ihr Sohn ist 19, gerade nach Deutschland gekommen und weiß nicht, welche Ausbildung er machen kann.",
        "a": 5,
        "why": "Jugendmigrationsdienst – für 12 bis 27 Jahre"
       },
       {
        "q": "Die Ausländerbehörde hat Ihren Antrag abgelehnt, und Sie möchten rechtlich dagegen vorgehen.",
        "a": 4,
        "why": "Anwalt für Ausländerrecht – rechtlich vorgehen"
       },
       {
        "q": "Für die Einbürgerung wollen Sie üben, welche Fragen im Test „Leben in Deutschland“ kommen.",
        "a": 2,
        "why": "Vorbereitungskurs Einbürgerungstest"
       },
       {
        "q": "Sie arbeiten als Pflegehelferin und suchen einen Kurs „Deutsch für die Pflege“.",
        "a": -1,
        "why": "Das Sprachcafé ist kein Kurs, und der VHS-Kurs bereitet nur auf den Einbürgerungstest vor – keine Anzeige passt."
       },
       {
        "q": "Sie wohnen seit einem Jahr hier, haben aber kaum Gelegenheit, Deutsch zu sprechen.",
        "a": 6,
        "why": "Sprachcafé – Deutsch sprechen in gemütlicher Runde"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Wer den Kurs mit B1 abschließt, bekommt den ganzen Kostenbeitrag zurück.",
        "a": false,
        "why": "Nur die Hälfte – und nur, wenn man innerhalb von zwei Jahren B1 erreicht.",
        "text": "Sprachschule Lernwerk – Kosten unserer Deutschkurse\nDer Kurs „Deutsch für den Alltag B1“ kostet 2,50 Euro pro Unterrichtsstunde. Wer Bürgergeld oder Sozialhilfe bekommt, kann sich von den Kosten befreien lassen. Den Antrag stellen Sie bitte vor Kursbeginn in unserem Sekretariat. Wenn Sie den Kurs innerhalb von zwei Jahren mit dem Zertifikat B1 abschließen, erstatten wir Ihnen die Hälfte Ihres Beitrags. Das Fahrgeld zum Kurs kann unter bestimmten Bedingungen ebenfalls übernommen werden."
       },
       {
        "same": true,
        "q": "Wann muss man die Befreiung beantragen?",
        "o": [
         "Vor dem Kurs.",
         "Nach der Prüfung.",
         "Innerhalb von zwei Jahren."
        ],
        "a": 0,
        "why": "„Den Antrag stellen Sie bitte vor Kursbeginn in unserem Sekretariat.“"
       },
       {
        "q": "Für den Ausflug muss man sich nicht anmelden.",
        "a": false,
        "why": "Wegen der begrenzten Plätze im Bus ist eine Anmeldung bis Freitag nötig.",
        "text": "Ausflug des Integrationskurses B1/2 nach Berlin\nAm Samstag, dem 5. Oktober, besuchen wir den Bundestag. Wir fahren um 7 Uhr mit dem Bus vom Kursgebäude ab. Weil der Bundestag nur Besucher mit Anmeldung hineinlässt, brauchen wir bis Freitag, den 20. September, Ihren vollständigen Namen und Ihr Geburtsdatum. Bitte bringen Sie am Ausflugstag unbedingt Ihren Pass oder Ihre Aufenthaltskarte mit. Ohne gültiges Dokument kommen Sie nicht in das Gebäude."
       },
       {
        "same": true,
        "q": "Was passiert, wenn man kein Dokument dabeihat?",
        "o": [
         "Man muss Strafe zahlen.",
         "Man darf nicht in den Bundestag.",
         "Man muss mit der Bahn fahren."
        ],
        "a": 1,
        "why": "„Ohne gültiges Dokument kommen Sie nicht in das Gebäude.“"
       },
       {
        "q": "Herr Abebe kann seinen Pass ab sofort abholen.",
        "a": false,
        "why": "Er muss vorher einen Termin vereinbaren.",
        "text": "Sehr geehrter Herr Abebe,\nIhre Niederlassungserlaubnis wurde genehmigt. Ihre neue elektronische Aufenthaltskarte ist bei uns eingetroffen. Bitte vereinbaren Sie über unser Online-Portal einen Termin zur Abholung. Bringen Sie dazu Ihren Reisepass, Ihre bisherige Aufenthaltskarte und den PIN-Brief mit, den Sie von der Bundesdruckerei bekommen haben. Die Gebühr in Höhe von 113 Euro können Sie bar oder mit Karte bezahlen.\nMit freundlichen Grüßen\nIhre Ausländerbehörde"
       },
       {
        "same": true,
        "q": "Was muss Herr Abebe nicht mitbringen?",
        "o": [
         "Seinen Reisepass.",
         "Den PIN-Brief.",
         "Ein Passfoto."
        ],
        "a": 2,
        "why": "Pass, alte Karte und PIN-Brief werden genannt – ein Passfoto nicht."
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Der Weg zur Einbürgerung\nWer Deutsche oder Deutscher werden möchte, muss einige Voraussetzungen erfüllen. Seit 2024 kann man sich in der Regel nach fünf Jahren rechtmäßigem Aufenthalt einbürgern lassen, früher waren es acht.\nAußerdem muss man seinen Lebensunterhalt grundsätzlich ohne Bürgergeld oder Sozialhilfe bestreiten. Man braucht Deutschkenntnisse mindestens auf B1-Niveau und muss den Einbürgerungstest bestehen. Wer einen deutschen Schulabschluss hat, muss den Test nicht machen.\nEine wichtige Änderung: Man darf seine bisherige Staatsangehörigkeit inzwischen grundsätzlich behalten. Früher musste man sie in vielen Fällen aufgeben. Die Gebühr für die Einbürgerung beträgt 255 Euro, für Kinder, die mit ihren Eltern eingebürgert werden, 51 Euro.",
      "items": [
       {
        "q": "Heute muss man mindestens acht Jahre in Deutschland leben, bevor man sich einbürgern lassen kann.",
        "a": false,
        "why": "In der Regel fünf Jahre, acht waren es früher."
       },
       {
        "q": "Wer in Deutschland einen Schulabschluss gemacht hat, muss den Einbürgerungstest nicht machen.",
        "a": true,
        "why": "„Wer einen deutschen Schulabschluss hat, muss den Test nicht machen.“"
       },
       {
        "q": "Wer Deutscher wird, muss seinen alten Pass abgeben.",
        "a": false,
        "why": "Man darf die bisherige Staatsangehörigkeit inzwischen grundsätzlich behalten."
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Frau Krämer,\nleider konnte ich in den letzten zwei Wochen nicht zum Kurs kommen, (1) mein Vater in Marokko schwer krank geworden ist. Ich bin sofort zu ihm geflogen und bin erst gestern zurückgekommen. Zum Glück geht es ihm jetzt besser. Es tut mir leid, (2) ich Ihnen nicht früher Bescheid gesagt habe. Deshalb habe ich eine Bescheinigung vom Krankenhaus mitgebracht, (3) zeigt, dass ich bei meinem Vater war. Ich hoffe, (4) das reicht. Außerdem mache ich mir Sorgen wegen der Prüfung im nächsten Monat. Könnten Sie mir sagen, welche Themen ich verpasst habe? Ich würde die Aufgaben gern zu Hause nachholen. Wenn es möglich ist, (5) ich auch gern einmal in die Sprechstunde. Vielen Dank (6) Ihr Verständnis.\nViele Grüße\nYoussef [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "denn",
         "weil",
         "deshalb"
        ],
        "a": 1,
        "why": "Nebensatz mit Verb am Ende (geworden ist) → weil"
       },
       {
        "n": 2,
        "o": [
         "dass",
         "weil",
         "wenn"
        ],
        "a": 0,
        "why": "Es tut mir leid, dass … – was mir leidtut"
       },
       {
        "n": 3,
        "o": [
         "der",
         "die",
         "das"
        ],
        "a": 1,
        "why": "die Bescheinigung → Relativpronomen die"
       },
       {
        "n": 4,
        "o": [
         "ob",
         "dass",
         "wenn"
        ],
        "a": 1,
        "why": "Ich hoffe, dass … – Inhalt der Hoffnung"
       },
       {
        "n": 5,
        "o": [
         "käme",
         "würde",
         "hätte"
        ],
        "a": 0,
        "why": "Konjunktiv II von kommen: ich käme gern"
       },
       {
        "n": 6,
        "o": [
         "über",
         "für",
         "von"
        ],
        "a": 1,
        "why": "Danke für etwas"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben nächste Woche einen Termin bei der Ausländerbehörde, um Ihre Aufenthaltserlaubnis zu verlängern. An diesem Tag können Sie nicht kommen. Ihre Erlaubnis läuft in drei Wochen ab. Schreiben Sie an die Ausländerbehörde.",
      "points": [
       "Grund für Ihr Schreiben",
       "Warum können Sie nicht kommen?",
       "Ihr Problem mit der Zeit",
       "Bitte um einen neuen Termin"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich habe am Dienstag, dem 12. März, um 9:30 Uhr einen Termin bei Ihnen, um meine Aufenthaltserlaubnis zu verlängern. Leider kann ich diesen Termin nicht wahrnehmen.\nMeine Firma schickt mich in dieser Woche zu einer wichtigen Schulung nach München. Diese Schulung ist Pflicht, und ich kann sie nicht verschieben. Eine Bestätigung meines Arbeitgebers lege ich bei.\nIch mache mir Sorgen, weil meine Aufenthaltserlaubnis schon am 2. April abläuft. Online sind alle Termine bis Ende April belegt.\nIch bitte Sie deshalb um einen neuen Termin vor dem 2. April. Ab dem 18. März habe ich jeden Tag Zeit. Falls das nicht möglich ist, schicken Sie mir bitte eine Bestätigung, dass ich bis zu Ihrer Entscheidung in Deutschland bleiben darf.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "termin|aufenthalt|verlänger|schreibe",
        "Ich habe nächste Woche einen Termin bei Ihnen, um meine Aufenthaltserlaubnis zu verlängern."
       ],
       [
        "weil|denn|leider|arbeit|schulung|krank|reise|kann nicht|muss",
        "Leider kann ich nicht kommen, weil ich eine Schulung in München habe."
       ],
       [
        "läuft .*ab|abläuft|gültig|bis zum|sorgen|wochen|keine termine|belegt|voll",
        "Meine Erlaubnis läuft schon in drei Wochen ab, und online gibt es keine Termine."
       ],
       [
        "neue[nr]? termin|bitte|vor dem|zeit|bestätigung|fiktion",
        "Bitte geben Sie mir einen neuen Termin vor dem 2. April."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie besuchen einen Integrationskurs. Sie haben in letzter Zeit oft gefehlt, weil sich Ihre Arbeitszeiten geändert haben. Schreiben Sie an Ihre Kursleiterin, Frau Krämer.",
       "points": [
        "Grund für Ihr Schreiben",
        "Was hat sich bei der Arbeit geändert?",
        "Ihre Sorgen wegen der Prüfung",
        "Möglichkeiten, die Stunden nachzuholen"
       ],
       "model": "Liebe Frau Krämer,\nich schreibe Ihnen, weil ich in den letzten Wochen oft nicht im Kurs war. Das tut mir sehr leid.\nSeit Anfang Mai arbeite ich im Schichtdienst. In der Frühschicht arbeite ich von 6 bis 14 Uhr, und dann komme ich nicht rechtzeitig zum Kurs um 13 Uhr.\nIch habe Angst, dass ich die Prüfung im Juli nicht bestehe, weil ich viele Themen verpasst habe, vor allem die Briefe im Teil Schreiben.\nGibt es vielleicht einen Abendkurs, in den ich wechseln kann? Oder könnten Sie mir die Aufgaben per E-Mail schicken? Dann lerne ich am Wochenende zu Hause. Ich komme auch gern in Ihre Sprechstunde.\nViele Grüße\nSuresh [Nachname]",
       "keys": [
        [
         "schreibe|gefehlt|nicht .*kurs|tut mir leid|entschuldig",
         "Ich schreibe Ihnen, weil ich in letzter Zeit oft gefehlt habe."
        ],
        [
         "arbeit|schicht|arbeitszeit|stelle|chef|uhr",
         "Seit Mai arbeite ich im Schichtdienst und komme nicht rechtzeitig zum Kurs."
        ],
        [
         "prüfung|bestehen|angst|sorgen|verpasst|themen",
         "Ich habe Angst, dass ich die Prüfung nicht bestehe."
        ],
        [
         "abendkurs|wechseln|nachholen|aufgaben|e-mail|sprechstunde|zu hause|wochenende|online",
         "Kann ich die Aufgaben zu Hause nachholen oder in einen Abendkurs wechseln?"
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie sprechen mehrere Sprachen. Wie und wo haben Sie Deutsch gelernt?"
       },
       {
        "you": "Erzähl, wie du Deutsch gelernt hast.",
        "min": 15,
        "key": [
         [
          "kurs|gelernt|lerne|schule|app|volkshochschule|integrationskurs|selbst",
          "Wie gelernt"
         ],
         [
          "seit|jahr|monat|zuerst|dann|früher",
          "Zeit/Ablauf"
         ]
        ],
        "model": "Zuerst habe ich in Indien mit einer App gelernt. Seit ich in Frankfurt bin, besuche ich einen Kurs an der Volkshochschule. Am meisten lerne ich aber bei der Arbeit, weil meine Kollegen mit mir Deutsch sprechen."
       },
       {
        "who": "Prüferin",
        "say": "Was war für Sie am Anfang in Deutschland besonders schwierig?"
       },
       {
        "you": "Sag, was am Anfang schwierig war – mit Grund.",
        "min": 12,
        "key": [
         [
          "schwer|schwierig|problem|kompliziert|anfang",
          "Problem"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Am Anfang waren die Ämter sehr schwierig für mich, weil alle Formulare nur auf Deutsch waren. Ein Kollege hat mir dann geholfen."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Behörden und Bürokratie. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-13.jpg",
         "alt": "Ein langer Flur in einem Amt: Auf beiden Seiten sitzen viele Menschen auf Stühlen und warten. Einige lesen, hinten steht ein Rollstuhl. Das Foto ist schwarz-weiß.",
         "by": "Navy Medicine",
         "link": "https://unsplash.com/photos/menschen-die-in-einem-flur-mit-stuhlen-und-stuhlen-warten-rqdWlkRzerg"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "flur|warte|warten|amt|behörde|stühle|menschen|leute|lesen|rollstuhl|lange",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen langen Flur, vielleicht in einem Amt. Auf beiden Seiten sitzen viele Menschen auf Stühlen und warten. Einige lesen, andere schauen einfach geradeaus. Das Foto ist schwarz-weiß, vielleicht ist es schon älter. Ich glaube, die Leute warten schon sehr lange auf ihren Termin."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man einen Mann vor einem Computer. Er macht online einen Termin beim Amt und sieht zufrieden aus."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie mit deutschen Ämtern gemacht?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "amt|behörde|termin|formular|warten|gewartet|ausländerbehörde|bürgeramt|antrag|brief",
          "zum Thema"
         ]
        ],
        "model": "Bei der Ausländerbehörde habe ich zwei Monate auf einen Termin gewartet. Das war stressig, weil mein Visum fast abgelaufen war. Beim Bürgeramt ging es dagegen schnell, ich hatte online einen Termin gebucht."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Wie funktionieren dort die Ämter? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien kann man heute viele Dinge online machen, zum Beispiel einen Pass beantragen. In Deutschland braucht man oft noch Papier und muss persönlich kommen. Ich finde, Deutschland sollte mehr digitalisieren, weil man dann viel Zeit spart."
       },
       {
        "who": "Anna",
        "say": "Das stimmt. In Polen geht inzwischen auch sehr viel online."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: In Ihrem Integrationskurs ist bald die Prüfung. Sie möchten mit einer Kursteilnehmerin zusammen eine Lerngruppe organisieren. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wann und wie oft? · Wo treffen? · Was üben? · Wer bereitet was vor?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. In Ihrem Integrationskurs ist bald die Prüfung. Sie möchten mit einer Kursteilnehmerin zusammen eine Lerngruppe organisieren. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wann und wie oft? · Wo treffen? · Was üben? · Wer bereitet was vor?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Die Prüfung ist in sechs Wochen. Wollen wir uns jeden Samstagvormittag treffen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Samstag ist gut, aber nur einmal pro Woche ist wenig. Ich würde lieber zweimal pro Woche lernen, weil wir nicht mehr viel Zeit haben – vielleicht noch mittwochs abends."
       },
       {
        "who": "Anna",
        "say": "Okay, zweimal. Und wo treffen wir uns?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "lerngruppe|treffen|üben|lernen|bibliothek|café|online|briefe|sprechen|hören|prüfung|mittwoch|samstag|woche|vorbereiten",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten uns in der Stadtbibliothek treffen, dort gibt es einen Gruppenraum. Am Mittwoch können wir auch online lernen. Was hältst du davon, dass wir vor allem Briefe schreiben und Sprechen üben?"
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und wer bereitet was vor?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich kümmere mich um den Raum in der Bibliothek und suche alte Prüfungsaufgaben zum Schreiben. Kannst du Themen für das Sprechen vorbereiten? Dann üben wir in Paaren."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "lerngruppe|treffen|üben|lernen|bibliothek|café|online|briefe|sprechen|hören|prüfung|mittwoch|samstag|woche|vorbereiten",
          "Plan"
         ]
        ],
        "model": "Also, wir treffen uns zweimal pro Woche: samstags in der Bibliothek und mittwochs online. Wir üben Briefe und Sprechen. Ich reserviere den Raum und bringe Schreibaufgaben mit, und du bereitest die Themen für das Sprechen vor."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-14",
  "title": "Modelltest 14",
  "level": "schwer",
  "sub": "Krankenhaus, Pflege, Apotheke · Beschwerde an ein Krankenhaus / Bitte an den Pflegedienst",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Celik am Mittwoch tun?",
        "o": [
         "Nüchtern ins Krankenhaus kommen.",
         "Seine Medikamente mitbringen.",
         "Ein Formular unterschreiben."
        ],
        "a": 0,
        "why": "Er soll ab Mitternacht nichts mehr essen; Medikamente und Formulare sind schon geklärt.",
        "audio": "Guten Tag, Herr Celik, hier ist das Klinikum Nord, Station 4. Ihre Operation am Mittwoch bleibt wie geplant um 8 Uhr. Bitte essen Sie ab Mitternacht nichts mehr und trinken Sie nur noch Wasser bis 6 Uhr. Ihre Medikamentenliste hat uns Ihr Hausarzt schon geschickt, Sie müssen also nichts mitbringen. Das Aufklärungsformular haben Sie ja schon beim Vorgespräch unterschrieben."
       },
       {
        "q": "Warum ruft die Apotheke an?",
        "o": [
         "Das Medikament ist jetzt da.",
         "Das Rezept ist abgelaufen.",
         "Es gibt ein anderes Medikament."
        ],
        "a": 2,
        "why": "Das bestellte Mittel ist nicht lieferbar; es gibt ein gleiches von einer anderen Firma.",
        "audio": "Hallo Frau Weiß, hier ist die Linden-Apotheke. Das Medikament, das wir für Sie bestellen wollten, ist leider im Moment nicht lieferbar. Wir haben aber ein Präparat von einer anderen Firma mit genau demselben Wirkstoff. Ihre Ärztin ist einverstanden. Sie können es ab heute Nachmittag abholen. Das Rezept ist noch bis Freitag gültig."
       },
       {
        "q": "Wann kommt der Pflegedienst ab nächster Woche?",
        "o": [
         "Morgens und abends.",
         "Nur am Morgen.",
         "Nur am Abend."
        ],
        "a": 0,
        "why": "Bisher nur morgens; ab nächster Woche kommt zusätzlich jemand am Abend.",
        "audio": "Guten Tag, Frau Lange, hier ist der Pflegedienst Sonnenschein. Die Pflegekasse hat den höheren Pflegegrad für Ihre Mutter bewilligt. Deshalb kommen wir ab nächster Woche nicht nur wie bisher morgens um acht, sondern zusätzlich auch abends um sieben, um ihr beim Zubettgehen zu helfen. Wenn Sie Fragen haben, rufen Sie mich gern an."
       },
       {
        "q": "Was ist das Problem?",
        "o": [
         "Die Überweisung fehlt.",
         "Der Termin ist zu spät.",
         "Die Versicherung zahlt nicht."
        ],
        "a": 0,
        "why": "Für den Facharzt braucht er eine Überweisung vom Hausarzt; ohne sie gibt es keinen Termin.",
        "audio": "Guten Tag, Herr Morales, hier ist die Praxis für Kardiologie Dr. Fuchs. Sie hatten nach einem Termin gefragt. Wir können Ihnen einen Termin am 23. geben, das ist für unsere Praxis sehr früh. Aber wir brauchen vorher eine Überweisung von Ihrem Hausarzt, sonst können wir den Termin nicht bestätigen. Bitte schicken oder bringen Sie uns die Überweisung bis nächsten Montag."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worüber informiert die Sendung?",
        "o": [
         "Über Pflege von Angehörigen.",
         "Über Berufe im Krankenhaus.",
         "Über gesunde Ernährung."
        ],
        "a": 0,
        "why": "Es geht um Menschen, die ihre Eltern oder Partner zu Hause pflegen.",
        "audio": "Fast fünf Millionen Menschen in Deutschland sind pflegebedürftig – und die meisten werden zu Hause von ihren Angehörigen gepflegt. Welche Hilfe gibt es für Töchter, Söhne und Partner, die das leisten? Was zahlt die Pflegekasse? Darüber sprechen wir heute bei „Gesund leben“."
       },
       {
        "q": "Was gilt am Feiertag?",
        "o": [
         "Alle Apotheken sind geschlossen.",
         "Eine Apotheke in der Nähe ist offen.",
         "Man muss den Notarzt anrufen."
        ],
        "a": 1,
        "why": "Es gibt immer eine Notdienst-Apotheke; welche, steht im Internet und an jeder Apotheke.",
        "audio": "Ein Service-Hinweis: Am Feiertag haben die meisten Apotheken geschlossen. Es gibt aber immer eine Notdienst-Apotheke in Ihrer Nähe. Welche das ist, sehen Sie auf einem Aushang an jeder Apotheke oder im Internet. Für den Notdienst wird eine kleine Gebühr von 2,50 Euro berechnet."
       },
       {
        "q": "Was bietet das Krankenhaus am Samstag an?",
        "o": [
         "Kostenlose Impfungen.",
         "Führungen durch den Kreißsaal.",
         "Einen Kurs für Erste Hilfe."
        ],
        "a": 1,
        "why": "Tag der offenen Tür: Werdende Eltern können die Geburtsstation und den Kreißsaal besichtigen.",
        "audio": "Werdende Eltern aufgepasst: Am Samstag lädt das St.-Josef-Krankenhaus zum Tag der offenen Tür in der Geburtsklinik ein. Zwischen 10 und 14 Uhr gibt es stündlich Führungen durch die Kreißsäle, und Hebammen beantworten Ihre Fragen. Eine Anmeldung ist nicht nötig."
       },
       {
        "q": "Was sollen die Menschen bei der Hitze tun?",
        "o": [
         "Mittags im Haus bleiben.",
         "Viel Sport machen.",
         "Ins Schwimmbad gehen."
        ],
        "a": 0,
        "why": "Zwischen 11 und 17 Uhr sollen vor allem ältere Menschen drinnen bleiben und viel trinken.",
        "audio": "Der Deutsche Wetterdienst warnt vor starker Hitze mit bis zu 36 Grad. Vor allem ältere und kranke Menschen sollten zwischen 11 und 17 Uhr möglichst im Haus bleiben und viel Wasser trinken. Sport sollte man nur am frühen Morgen machen. Bitte schauen Sie auch nach Ihren älteren Nachbarn."
       },
       {
        "q": "Wofür sucht das Rote Kreuz Menschen?",
        "o": [
         "Für Blutspenden.",
         "Für Krankentransporte.",
         "Für die Arbeit im Altenheim."
        ],
        "a": 0,
        "why": "Die Blutkonserven werden knapp – man sucht Spenderinnen und Spender.",
        "audio": "Die Blutkonserven werden knapp! Das Rote Kreuz bittet alle gesunden Menschen zwischen 18 und 68 Jahren, Blut zu spenden. Am Dienstag und Mittwoch ist das Spendenmobil vor dem Rathaus. Eine Spende dauert nur etwa eine Stunde, und danach gibt es einen Imbiss."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Patientin darf heute nach Hause.",
        "a": false,
        "why": "Erst morgen, wenn die Blutwerte gut sind.",
        "audio": "Frau: Herr Doktor, darf ich heute nach Hause? Meine Kinder warten.\nMann: Ich verstehe Sie gut, Frau Okoye. Die Wunde sieht sehr gut aus. Aber Ihre Blutwerte von heute Morgen sind noch nicht ganz in Ordnung. Wir machen morgen früh noch einmal einen Test. Wenn der gut ist, können Sie nach dem Mittagessen gehen.\nFrau: Und muss ich danach noch einmal kommen?\nMann: Nein, die Fäden zieht Ihr Hausarzt in zehn Tagen."
       },
       {
        "same": true,
        "q": "Wer zieht die Fäden?",
        "o": [
         "Der Arzt im Krankenhaus.",
         "Der Hausarzt.",
         "Eine Krankenschwester zu Hause."
        ],
        "a": 1,
        "why": "„die Fäden zieht Ihr Hausarzt in zehn Tagen“"
       },
       {
        "q": "Der Mann zahlt für das Medikament nichts.",
        "a": false,
        "why": "Er zahlt die normale Zuzahlung von 5 Euro.",
        "audio": "Frau: So, hier ist Ihr Antibiotikum. Das macht fünf Euro Zuzahlung.\nMann: Fünf Euro? Ich dachte, Medikamente vom Arzt sind kostenlos.\nFrau: Für Kinder ja, für Erwachsene gibt es eine Zuzahlung. Sie können sich aber befreien lassen, wenn Sie im Jahr mehr als zwei Prozent Ihres Einkommens zuzahlen. Heben Sie dafür alle Quittungen auf.\nMann: Gut. Und wie nehme ich das?\nFrau: Dreimal täglich eine Tablette, und zwar immer eine Stunde vor dem Essen."
       },
       {
        "same": true,
        "q": "Wann soll der Mann die Tabletten nehmen?",
        "o": [
         "Zum Essen.",
         "Nach dem Essen.",
         "Vor dem Essen."
        ],
        "a": 2,
        "why": "„immer eine Stunde vor dem Essen“"
       },
       {
        "q": "Die beiden Geschwister möchten ihre Mutter in ein Heim bringen.",
        "a": false,
        "why": "Sie wollen sie zu Hause pflegen – mit Pflegedienst und Tagespflege.",
        "audio": "Frau: Mama kann nicht mehr allein bleiben, Tobias. Gestern ist sie wieder gestürzt.\nMann: Ich weiß. Aber ins Heim will sie auf keinen Fall. Sie will in ihrer Wohnung bleiben.\nFrau: Dann brauchen wir Hilfe. Ein Pflegedienst könnte morgens kommen, und an drei Tagen in der Woche könnte sie in die Tagespflege gehen.\nMann: Und am Wochenende wechseln wir uns ab. Ich rufe morgen bei der Pflegekasse an und frage, was die bezahlt."
       },
       {
        "same": true,
        "q": "Was macht Tobias morgen?",
        "o": [
         "Er bringt die Mutter zur Tagespflege.",
         "Er informiert sich bei der Pflegekasse.",
         "Er besucht ein Pflegeheim."
        ],
        "a": 1,
        "why": "„Ich rufe morgen bei der Pflegekasse an und frage, was die bezahlt.“"
       },
       {
        "q": "Die Frau ist in der Notaufnahme richtig.",
        "a": false,
        "why": "Ihr Problem ist kein Notfall – sie soll zum Hausarzt oder zum Bereitschaftsdienst.",
        "audio": "Mann: Notaufnahme, was kann ich für Sie tun?\nFrau: Ich habe seit drei Tagen Halsschmerzen und ein bisschen Fieber. Meine Hausärztin hat Urlaub.\nMann: Das ist zum Glück kein Notfall. Hier warten Sie heute sicher fünf Stunden, weil wir zuerst die schweren Fälle behandeln. Rufen Sie lieber die 116 117 an, das ist der ärztliche Bereitschaftsdienst. Die sagen Ihnen, welche Praxis heute geöffnet ist.\nFrau: Ach so, das wusste ich nicht. Danke!"
       },
       {
        "same": true,
        "q": "Was empfiehlt der Mann?",
        "o": [
         "Fünf Stunden zu warten.",
         "Eine bestimmte Nummer anzurufen.",
         "Morgen wiederzukommen."
        ],
        "a": 1,
        "why": "die 116 117 – der Bereitschaftsdienst sagt, welche Praxis offen ist"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Pflege im Alter",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Pflege durch die Familie ist eine große Belastung.",
       "Im Pflegeheim fühlen sich ältere Menschen einsam.",
       "Pflegekräfte verdienen zu wenig.",
       "In meinem Heimatland kümmert sich die Familie um die Alten.",
       "Ein gutes Pflegeheim kann die beste Lösung sein.",
       "Technik kann älteren Menschen helfen, allein zu leben."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 4,
        "why": "Erst hatte sie ein schlechtes Gewissen, jetzt ist der Vater im Heim zufrieden, hat Freunde – beste Lösung.",
        "audio": "Ich hatte lange ein schlechtes Gewissen, weil wir meinen Vater ins Heim gebracht haben. Aber jetzt sehe ich: Er spielt jeden Tag Karten mit anderen Männern, die Pflegerinnen sind nett, und er ist viel fröhlicher als allein in seiner Wohnung."
       },
       {
        "q": "Aussage 2",
        "a": 0,
        "why": "Seit zwei Jahren pflegt sie die Schwiegermutter neben dem Job – keine Kraft, kein Urlaub.",
        "audio": "Seit zwei Jahren pflege ich meine Schwiegermutter. Morgens vor der Arbeit wasche ich sie, abends koche ich für sie. Urlaub hatte ich seitdem nicht. Ich liebe sie, aber ich bin ehrlich gesagt völlig erschöpft."
       },
       {
        "q": "Aussage 3",
        "a": 5,
        "why": "Notrufknopf, Herd schaltet sich ab – so kann die Großmutter allein wohnen.",
        "audio": "Meine Oma ist 89 und wohnt immer noch allein. Sie trägt einen Notrufknopf am Handgelenk, und der Herd schaltet sich automatisch aus, wenn sie ihn vergisst. So können wir ruhig schlafen, und sie bleibt in ihrer Wohnung."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Klinikum Nord – Haus A\nErdgeschoss: Patientenaufnahme · Notaufnahme (Eingang Rückseite) · Cafeteria · Kiosk\n1. Stock: Innere Medizin · Kardiologie (Herz) · Labor\n2. Stock: Chirurgie · Unfallchirurgie · Physiotherapie\n3. Stock: Geburtsklinik · Kinderklinik · Elternschule\n4. Stock: Verwaltung · Sozialdienst (Hilfe nach dem Krankenhaus, Reha, Pflege)",
      "items": [
       {
        "q": "Ihr Vater geht morgen nach Hause, braucht aber danach Hilfe bei der Pflege.",
        "o": [
         "4. Stock",
         "2. Stock",
         "Erdgeschoss"
        ],
        "a": 0,
        "why": "Sozialdienst – Hilfe nach dem Krankenhaus, Pflege"
       },
       {
        "q": "Sie bringen Ihr Baby zur Welt und möchten vorher einen Kurs machen.",
        "o": [
         "2. Stock",
         "3. Stock",
         "4. Stock"
        ],
        "a": 1,
        "why": "Elternschule – 3. Stock"
       },
       {
        "q": "Sie kommen zu einer geplanten Operation und müssen sich zuerst anmelden.",
        "o": [
         "2. Stock",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 2,
        "why": "zuerst die Patientenaufnahme – Erdgeschoss (die Chirurgie kommt danach)"
       },
       {
        "q": "Sie möchten Ihrer Freundin auf der Station eine Zeitschrift mitbringen.",
        "o": [
         "Erdgeschoss",
         "4. Stock",
         "1. Stock"
        ],
        "a": 0,
        "why": "Kiosk – Erdgeschoss"
       },
       {
        "q": "Ihr Arzt hat gesagt, Sie sollen Ihr Herz untersuchen lassen.",
        "o": [
         "2. Stock",
         "1. Stock",
         "3. Stock"
        ],
        "a": 1,
        "why": "Kardiologie (Herz) – 1. Stock"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Pflegestützpunkt der Stadt: kostenlose Beratung für Pflegebedürftige und Angehörige.",
       "Sanitätshaus Vital: Rollstühle, Rollatoren und Pflegebetten – auch zum Ausleihen.",
       "Apotheke am Markt: Lieferservice nach Hause, bestellen Sie per App.",
       "Hausnotruf Sicher: Hilfe auf Knopfdruck, 24 Stunden am Tag.",
       "Selbsthilfegruppe Diabetes: Treffen jeden ersten Montag im Monat im Gemeindehaus.",
       "Hebammenpraxis Storch: Vorsorge, Geburtsvorbereitung und Nachsorge.",
       "Fahrdienst Mobil: Fahrten zu Arzt und Krankenhaus für Menschen im Rollstuhl.",
       "Physiotherapie Bewegt: Krankengymnastik und Massage, Termine auch abends."
      ],
      "items": [
       {
        "q": "Ihre Mutter kann nach einem Sturz nicht mehr gut laufen und braucht eine Gehhilfe.",
        "a": 1,
        "why": "Rollator vom Sanitätshaus"
       },
       {
        "q": "Ihr Vater sitzt im Rollstuhl und hat nächste Woche einen Termin in der Klinik.",
        "a": 6,
        "why": "Fahrdienst für Menschen im Rollstuhl"
       },
       {
        "q": "Sie sind krank, können nicht aus dem Haus und brauchen Medikamente.",
        "a": 2,
        "why": "Apotheke mit Lieferservice"
       },
       {
        "q": "Sie haben gerade erfahren, dass Sie Zucker haben, und möchten mit anderen Betroffenen sprechen.",
        "a": 4,
        "why": "Zucker = Diabetes – Selbsthilfegruppe"
       },
       {
        "q": "Sie suchen eine Ärztin für Ihre Kinder.",
        "a": -1,
        "why": "Keine Anzeige bietet einen Kinderarzt an – die Hebammenpraxis ist für Schwangere und Babys nach der Geburt."
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Besucher dürfen nur am Nachmittag kommen.",
        "a": false,
        "why": "Besuchszeit ist von 11 bis 19 Uhr – also auch am Vormittag.",
        "text": "Besuchsregeln im Klinikum Nord\nBesuche sind täglich von 11 bis 19 Uhr möglich. Pro Patientin und Patient dürfen höchstens zwei Personen gleichzeitig im Zimmer sein. Kinder unter 12 Jahren dürfen die Kinderklinik nur in Begleitung eines Erwachsenen besuchen. Auf der Intensivstation sind Besuche nur nach Absprache mit dem Pflegepersonal erlaubt. Blumen in Erde sind wegen Infektionsgefahr auf allen Stationen verboten."
       },
       {
        "same": true,
        "q": "Was darf man nicht mitbringen?",
        "o": [
         "Schnittblumen.",
         "Topfpflanzen.",
         "Kinder über 12 Jahren."
        ],
        "a": 1,
        "why": "„Blumen in Erde“ = Topfpflanzen; Schnittblumen stehen nicht im Text als verboten."
       },
       {
        "q": "Für den Kurs braucht man eine Überweisung vom Arzt.",
        "a": false,
        "why": "Man braucht keine Überweisung, nur eine Anmeldung.",
        "text": "Rücken stark machen – Kurs der AOK\nIn acht Terminen lernen Sie Übungen, die Ihren Rücken stärken und Schmerzen vorbeugen. Der Kurs findet mittwochs von 18 bis 19 Uhr in der Turnhalle der Goetheschule statt. Eine ärztliche Überweisung ist nicht nötig, bitte melden Sie sich aber vorher an. Für Versicherte der AOK ist der Kurs kostenlos. Wenn Sie bei einer anderen Krankenkasse sind, bezahlen Sie 80 Euro – viele Kassen erstatten Ihnen einen Teil davon."
       },
       {
        "same": true,
        "q": "Was zahlen Versicherte anderer Krankenkassen?",
        "o": [
         "Nichts.",
         "80 Euro, manchmal bekommen sie Geld zurück.",
         "Einen Teil von 80 Euro."
        ],
        "a": 1,
        "why": "Sie zahlen zuerst 80 Euro; „viele Kassen erstatten Ihnen einen Teil“."
       },
       {
        "q": "Frau Rossi hat einen Pflegegrad bekommen.",
        "a": true,
        "why": "Die Pflegekasse hat Pflegegrad 2 bewilligt.",
        "text": "Sehr geehrte Frau Rossi,\nnach dem Besuch unserer Gutachterin am 3. Mai haben wir Ihnen den Pflegegrad 2 zuerkannt. Sie haben damit ab 1. April Anspruch auf Pflegegeld in Höhe von 347 Euro monatlich, wenn Ihre Angehörigen Sie pflegen. Sie können stattdessen auch einen Pflegedienst beauftragen; dann bezahlen wir die Leistungen direkt an den Dienst. Wenn Sie mit der Entscheidung nicht einverstanden sind, können Sie innerhalb eines Monats schriftlich Widerspruch einlegen.\nIhre Pflegekasse"
       },
       {
        "same": true,
        "q": "Ab wann bekommt Frau Rossi Geld?",
        "o": [
         "Ab dem Besuch der Gutachterin.",
         "Ab dem 1. April.",
         "Ab dem 3. Mai."
        ],
        "a": 1,
        "why": "„ab 1. April“ – also schon vor dem Besuch am 3. Mai (rückwirkend)."
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Die elektronische Patientenakte\nSeit Anfang 2025 bekommen alle gesetzlich Versicherten automatisch eine elektronische Patientenakte, kurz ePA. Darin werden zum Beispiel Arztbriefe, Laborwerte und eine Liste der Medikamente gespeichert. So können Ärztinnen, Ärzte und Apotheken schnell sehen, welche Behandlungen es schon gab, und man muss Befunde nicht mehr auf Papier von Praxis zu Praxis tragen.\nWer die ePA nicht möchte, muss nicht aktiv zustimmen, sondern widersprechen. Das kann man jederzeit bei der Krankenkasse tun, auch noch später. Dann wird die Akte gelöscht.\nMit einer App der Krankenkasse kann man die eigene Akte auf dem Handy ansehen. Dort kann man auch einstellen, dass bestimmte Dokumente – zum Beispiel über eine Psychotherapie – nur für einzelne Ärzte sichtbar sind. Wer kein Smartphone hat, kann diese Einstellungen auch über eine Ombudsstelle der Krankenkasse vornehmen lassen.",
      "items": [
       {
        "q": "Man muss der Krankenkasse sagen, dass man eine ePA haben möchte.",
        "a": false,
        "why": "Jeder bekommt sie automatisch; wer sie nicht will, muss widersprechen."
       },
       {
        "q": "Auch nach Monaten kann man die ePA noch ablehnen.",
        "a": true,
        "why": "Widersprechen kann man „jederzeit … auch noch später“."
       },
       {
        "q": "Ohne Smartphone kann man nicht bestimmen, wer die Dokumente sieht.",
        "a": false,
        "why": "Das geht auch über die Ombudsstelle der Krankenkasse."
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Damen und Herren,\nmeine Mutter, Frau Maria Rossi, ist seit April Kundin bei Ihrem Pflegedienst. Bisher waren wir mit Ihrer Arbeit sehr zufrieden, (1) seit einigen Wochen gibt es leider Probleme. Die Pflegekräfte kommen morgens oft erst um zehn Uhr, (2) acht Uhr vereinbart ist. Meine Mutter muss so lange im Bett liegen bleiben und kann ihre Tabletten nicht rechtzeitig nehmen. Außerdem wechseln die Pflegekräfte fast jeden Tag. Das ist für meine Mutter schwierig, (3) sie an Demenz leidet und fremde Menschen ihr Angst machen. Ich verstehe, dass Sie (4) Personal haben. Trotzdem bitte ich Sie, die Uhrzeit einzuhalten und, (5) möglich, immer dieselben zwei Pflegekräfte zu schicken. Ich würde mich freuen, wenn wir (6) diese Probleme bald persönlich sprechen könnten.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "aber",
         "denn",
         "sondern"
        ],
        "a": 0,
        "why": "Gegensatz zwischen zwei Hauptsätzen (zufrieden – Probleme) → aber"
       },
       {
        "n": 2,
        "o": [
         "weil",
         "obwohl",
         "damit"
        ],
        "a": 1,
        "why": "Gegensatz: sie kommen um zehn, obwohl acht Uhr vereinbart ist"
       },
       {
        "n": 3,
        "o": [
         "da",
         "deshalb",
         "trotzdem"
        ],
        "a": 0,
        "why": "Grund im Nebensatz (Verb am Ende: leidet) → da"
       },
       {
        "n": 4,
        "o": [
         "zu wenig",
         "zu viel",
         "genug"
        ],
        "a": 0,
        "why": "Das Problem: zu wenig Personal – deshalb kommen sie zu spät"
       },
       {
        "n": 5,
        "o": [
         "falls",
         "wenn",
         "wie"
        ],
        "a": 1,
        "why": "feste Wendung: wenn möglich"
       },
       {
        "n": 6,
        "o": [
         "von",
         "über",
         "mit"
        ],
        "a": 1,
        "why": "über etwas sprechen"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie waren drei Tage im Krankenhaus. Sie waren mit vielen Dingen nicht zufrieden. Schreiben Sie an die Patientenbeschwerdestelle des Krankenhauses.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was war das Problem?",
       "Was ist passiert, als Sie sich beschwert haben?",
       "Was erwarten Sie?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nvom 3. bis 6. Juni war ich auf der Station 2B in Ihrem Krankenhaus, weil ich am Knie operiert wurde. Leider war ich mit meinem Aufenthalt nicht zufrieden.\nDie Operation selbst ist gut gelaufen. Aber nach der Operation habe ich zweimal mehr als eine Stunde auf Schmerzmittel gewartet, obwohl ich große Schmerzen hatte. Außerdem habe ich zweimal Essen mit Fleisch bekommen, obwohl ich Vegetarier bin.\nAls ich mich bei der Stationsleitung beschwert habe, hat man mir nur gesagt, dass zu wenig Personal da ist. Niemand hat sich entschuldigt.\nIch verstehe, dass die Pflegekräfte viel Arbeit haben. Trotzdem erwarte ich, dass Sie die Probleme prüfen und eine Lösung finden, damit es anderen Patienten nicht genauso geht. Über eine Antwort würde ich mich freuen.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "krankenhaus|station|operation|operiert|aufenthalt|schreibe|unzufrieden|nicht zufrieden",
        "Ich war drei Tage in Ihrem Krankenhaus und war mit vielen Dingen nicht zufrieden."
       ],
       [
        "gewartet|warten|schmerz|essen|zimmer|laut|personal|klingel|unfreundlich",
        "Ich habe über eine Stunde auf Schmerzmittel gewartet."
       ],
       [
        "beschwert|gesagt|stationsleitung|schwester|pfleger|niemand|geantwortet|reaktion",
        "Als ich mich beschwert habe, hat niemand reagiert."
       ],
       [
        "erwarte|bitte|prüfen|lösung|entschuldig|antwort|verbessern|ändern",
        "Ich erwarte, dass Sie die Probleme prüfen und etwas ändern."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Ein Pflegedienst hilft Ihrem Vater zu Hause. Nächsten Monat fahren Sie zwei Wochen in Urlaub und können sich nicht um ihn kümmern. Schreiben Sie an den Pflegedienst, Frau Albrecht.",
       "points": [
        "Grund für Ihr Schreiben",
        "Wann sind Sie nicht da?",
        "Wobei braucht Ihr Vater zusätzlich Hilfe?",
        "Was soll im Notfall passieren?"
       ],
       "model": "Sehr geehrte Frau Albrecht,\nich schreibe Ihnen, weil ich nächsten Monat für zwei Wochen nicht für meinen Vater, Herrn Ramesh [Nachname], da sein kann.\nIch fliege vom 4. bis 18. August zu einer Familienfeier nach Indien. In dieser Zeit kann ich nicht wie sonst jeden Abend bei ihm vorbeikommen.\nNormalerweise koche ich für meinen Vater und kaufe für ihn ein. Könnten Ihre Mitarbeiter in diesen zwei Wochen zusätzlich am Abend kommen und ihm das Essen warm machen? Außerdem braucht er Hilfe beim Duschen, das mache ich sonst am Wochenende.\nIm Notfall rufen Sie bitte meine Schwester an, sie wohnt in Mainz. Ihre Nummer ist 0176 5566778. Ich bin per WhatsApp auch in Indien erreichbar.\nVielen Dank für Ihre Hilfe.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "schreibe|vater|urlaub|nicht da|kümmern",
         "Ich schreibe Ihnen, weil ich nächsten Monat nicht für meinen Vater da sein kann."
        ],
        [
         "vom|bis|wochen|august|juli|\\d|fliege|reise|urlaub",
         "Ich bin vom 4. bis 18. August in Urlaub."
        ],
        [
         "kochen|essen|einkauf|duschen|waschen|abend|medikament|tabletten|zusätzlich",
         "Könnten Sie zusätzlich am Abend kommen und ihm beim Essen helfen?"
        ],
        [
         "notfall|schwester|bruder|nummer|anrufen|erreichbar|tel|nachbar",
         "Im Notfall rufen Sie bitte meine Schwester an."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie haben gesagt, Sie haben Familie. Wer wohnt noch in Indien, und wie halten Sie Kontakt?"
       },
       {
        "you": "Erzähl von deiner Familie im Heimatland und wie ihr Kontakt habt.",
        "min": 15,
        "key": [
         [
          "eltern|mutter|vater|bruder|schwester|familie|oma|opa",
          "Familie"
         ],
         [
          "telefon|video|whatsapp|anrufen|besuche|schreiben|kontakt",
          "Kontakt"
         ]
        ],
        "model": "Meine Eltern und mein Bruder wohnen noch in Chennai. Wir telefonieren jeden Sonntag per Video, und einmal im Jahr besuche ich sie."
       },
       {
        "who": "Prüferin",
        "say": "Was tun Sie, wenn Sie krank sind? Gehen Sie schnell zum Arzt?"
       },
       {
        "you": "Sag, was du machst, wenn du krank bist – mit Grund.",
        "min": 12,
        "key": [
         [
          "arzt|apotheke|tee|bett|krank|medikament|zu hause|hausmittel",
          "Was tun"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Wenn ich nur erkältet bin, bleibe ich zu Hause und trinke viel Tee. Zum Arzt gehe ich erst nach drei Tagen, weil ich dann eine Krankmeldung für die Arbeit brauche."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Gesundheit und Pflege. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-14.jpg",
         "alt": "Ein Krankenhausflur: Pflegekräfte schieben einen Patienten im Bett durch den Flur, an einem Ständer hängt eine Infusion. Oben steht ein Schild zum Operationssaal. Das Foto ist schwarz-weiß.",
         "by": "Navy Medicine",
         "link": "https://unsplash.com/photos/medizinisches-personal-transportiert-den-patienten-den-krankenhausflur-entlang-OLO28JXWv98"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "krankenhaus|flur|pflege|pfleger|krankenschwester|patient|bett|schieben|infusion|operation|op",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Flur in einem Krankenhaus. Mehrere Pflegekräfte schieben einen Patienten im Bett, an einem Ständer hängt eine Infusion. Über der Tür steht ein Schild zum Operationssaal. Ich glaube, der Patient wird gleich operiert. Die Pflegekräfte sehen sehr beschäftigt aus."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man eine junge Frau, die einer alten Frau zu Hause beim Anziehen hilft. Die beiden lachen zusammen."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie mit Ärzten oder Krankenhäusern in Deutschland gemacht?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "arzt|ärztin|krankenhaus|praxis|termin|gewartet|operation|notaufnahme|krankenkasse|untersuch",
          "zum Thema"
         ]
        ],
        "model": "Letztes Jahr hatte ich einen Unfall mit dem Fahrrad und war in der Notaufnahme. Ich habe vier Stunden gewartet, aber die Ärzte waren sehr freundlich. Schwierig finde ich, dass man beim Facharzt oft Monate auf einen Termin warten muss."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Wer pflegt dort die alten Menschen? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien pflegt meistens die Familie die alten Eltern, oft wohnen drei Generationen zusammen. Pflegeheime gibt es nur wenige. Ich finde das System in Deutschland gut, weil es professionelle Hilfe gibt, aber ich denke, dass alte Menschen in Deutschland oft einsam sind."
       },
       {
        "who": "Anna",
        "say": "Da haben Sie recht. Meine Großmutter wohnt in Polen auch bei meinen Eltern."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Eine Kollegin aus Ihrem Deutschkurs liegt nach einer Operation zwei Wochen im Krankenhaus. Sie hat zwei kleine Kinder. Sie möchten ihr zusammen helfen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Besuch im Krankenhaus? · Hilfe für die Kinder? · Essen für die Familie? · Unterricht nachholen?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Eine Kollegin aus Ihrem Deutschkurs liegt nach einer Operation zwei Wochen im Krankenhaus. Sie hat zwei kleine Kinder. Sie möchten ihr zusammen helfen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Besuch im Krankenhaus? · Hilfe für die Kinder? · Essen für die Familie? · Unterricht nachholen?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wollen wir sie gleich morgen im Krankenhaus besuchen?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Ja, aber nicht gleich morgen. Ich würde lieber übermorgen gehen, weil sie direkt nach der Operation sicher noch sehr müde ist."
       },
       {
        "who": "Anna",
        "say": "Gut, übermorgen. Und was machen wir mit ihren Kindern? Ihr Mann arbeitet ja bis abends."
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "besuch|krankenhaus|blumen|kinder|kita|schule|abholen|essen|kochen|familie|unterricht|aufgaben|kopien|hausaufgaben",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten uns abwechseln und die Kinder von der Kita abholen. Wie wäre es, wenn wir auch ein paar Mal für die Familie kochen?"
       },
       {
        "who": "Anna",
        "say": "Super Idee. Und den Unterricht verpasst sie ja auch."
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich bringe ihr die Kopien und Hausaufgaben ins Krankenhaus mit. Kannst du montags und mittwochs die Kinder abholen? Ich mache es dienstags und donnerstags."
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "besuch|krankenhaus|blumen|kinder|kita|schule|abholen|essen|kochen|familie|unterricht|aufgaben|kopien|hausaufgaben",
          "Plan"
         ]
        ],
        "model": "Also, wir besuchen sie übermorgen im Krankenhaus. Wir holen abwechselnd die Kinder von der Kita ab – du montags und mittwochs, ich dienstags und donnerstags. Wir kochen ein paar Mal für die Familie, und ich bringe ihr die Unterlagen aus dem Kurs."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-15",
  "title": "Modelltest 15",
  "level": "schwer",
  "sub": "Wohnungssuche, Nebenkosten, Reparaturen · Nebenkostenabrechnung an die Hausverwaltung / Antwort auf eine Wohnungsanzeige",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was soll Herr Kaya tun?",
        "o": [
         "Die Wohnung am Samstag besichtigen.",
         "Unterlagen per E-Mail schicken.",
         "Den Mietvertrag abholen."
        ],
        "a": 1,
        "why": "Besichtigt hat er schon; vor der Zusage braucht der Makler Schufa und Gehaltsnachweise per E-Mail.",
        "audio": "Guten Tag, Herr Kaya, hier ist Immobilien Brandt. Die Eigentümerin hat sich nach der Besichtigung letzten Samstag für Sie als Mieter entschieden. Bevor wir den Mietvertrag fertig machen, brauchen wir aber noch Ihre Schufa-Auskunft und die letzten drei Gehaltsabrechnungen. Bitte schicken Sie mir alles per E-Mail. Den Vertrag unterschreiben wir dann nächste Woche zusammen."
       },
       {
        "q": "Wann kommt der Handwerker?",
        "o": [
         "Am Dienstagvormittag.",
         "Am Dienstagnachmittag.",
         "Am Donnerstag."
        ],
        "a": 2,
        "why": "Dienstag geht nicht mehr, weil ein Ersatzteil fehlt; er kommt am Donnerstag.",
        "audio": "Hallo Frau Popović, hier ist die Hausverwaltung Engel. Wegen Ihrer Heizung: Wir hatten ja den Monteur für Dienstagvormittag bestellt. Leider fehlt ihm noch ein Ersatzteil, das erst am Mittwoch geliefert wird. Er kommt deshalb am Donnerstag zwischen 8 und 10 Uhr. Bis dahin können Sie das Heizgerät benutzen, das der Hausmeister Ihnen bringt."
       },
       {
        "q": "Warum ruft die Hausverwaltung an?",
        "o": [
         "Der Wasserzähler muss abgelesen werden.",
         "Die Miete wird erhöht.",
         "Im Keller gibt es einen Wasserschaden."
        ],
        "a": 0,
        "why": "Es geht um das Ablesen der Zähler; eine Mieterhöhung wird ausdrücklich verneint.",
        "audio": "Guten Tag, hier ist die Hausverwaltung mit einer Information für alle Mieter im Haus Gartenweg 3. Am 15. Dezember kommt der Ablesedienst und liest die Wasser- und Heizungszähler in allen Wohnungen ab. Bitte sorgen Sie dafür, dass jemand zu Hause ist oder geben Sie Ihrem Nachbarn den Schlüssel. Und keine Sorge: Mit der Miete hat das nichts zu tun."
       },
       {
        "q": "Was ist mit der Kaution?",
        "o": [
         "Frau Ali bekommt sie ganz zurück.",
         "Frau Ali bekommt einen Teil zurück.",
         "Frau Ali muss noch Geld bezahlen."
        ],
        "a": 1,
        "why": "Von 1.800 Euro werden 300 Euro für das Streichen behalten – sie bekommt also einen Teil.",
        "audio": "Hallo Frau Ali, hier ist Herr Vogel, Ihr früherer Vermieter. Ich habe die Wohnung jetzt angesehen. Alles ist sauber, aber die Wände im Kinderzimmer sind leider bemalt. Für das Streichen behalte ich 300 Euro von Ihrer Kaution. Die restlichen 1.500 Euro überweise ich Ihnen diese Woche. Die Rechnung vom Maler schicke ich Ihnen per Post."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um hohe Heizkosten.",
         "Um neue Wohnungen in der Stadt.",
         "Um Streit unter Nachbarn."
        ],
        "a": 0,
        "why": "Es geht um die Nachzahlung für Heizung und wie man Energie spart.",
        "audio": "Viele Mieterinnen und Mieter haben in diesen Tagen ihre Nebenkostenabrechnung bekommen – und erschrecken: 500, 800, manchmal sogar 1.000 Euro sollen sie für die Heizung nachzahlen. Ist die Abrechnung richtig? Und wie kann man im nächsten Winter sparen? Das klären wir heute bei „Rund ums Wohnen“."
       },
       {
        "q": "Was ist neu beim Wohngeld?",
        "o": [
         "Mehr Menschen können es bekommen.",
         "Es wird nur noch online beantragt.",
         "Es gibt es nur noch für Familien."
        ],
        "a": 0,
        "why": "Die Einkommensgrenzen steigen – also mehr Haushalte haben Anspruch.",
        "audio": "Ab Januar steigt das Wohngeld. Gleichzeitig werden die Einkommensgrenzen erhöht. Das bedeutet: Auch Haushalte, die bisher etwas zu viel verdient haben, können jetzt einen Antrag stellen. Den Antrag stellen Sie wie bisher bei der Wohngeldstelle Ihrer Stadt, auf Papier oder online."
       },
       {
        "q": "Was sollen die Mieter in der Kälte tun?",
        "o": [
         "Die Heizung ganz ausmachen.",
         "Kurz und kräftig lüften.",
         "Die Fenster immer gekippt lassen."
        ],
        "a": 1,
        "why": "Stoßlüften: mehrmals am Tag fünf Minuten weit öffnen – gekippte Fenster sind falsch.",
        "audio": "Bei Frost sind Schimmel und hohe Heizkosten ein Thema. Experten raten: Lassen Sie die Fenster nicht dauernd gekippt, sondern öffnen Sie sie drei- bis viermal am Tag für fünf Minuten ganz. So kommt frische Luft herein, ohne dass die Wände auskühlen. Und drehen Sie die Heizung nie ganz ab, auch nicht nachts."
       },
       {
        "q": "Was findet am Wochenende statt?",
        "o": [
         "Ein Flohmarkt im Hof.",
         "Eine Wohnungsbesichtigung.",
         "Ein Treffen über ein Bauprojekt."
        ],
        "a": 2,
        "why": "Die Stadt informiert über die geplanten Neubauten – also ein Treffen zum Bauprojekt.",
        "audio": "Die Stadt plant am alten Güterbahnhof 600 neue Wohnungen, davon ein Drittel mit günstigen Mieten. Am Samstag um 11 Uhr stellt die Stadtplanung das Projekt in der Stadthalle vor. Alle Bürgerinnen und Bürger können Fragen stellen und Ideen einbringen."
       },
       {
        "q": "Wie wird das Wetter in der Nacht?",
        "o": [
         "Es gibt Sturm.",
         "Es friert.",
         "Es bleibt mild."
        ],
        "a": 1,
        "why": "In der Nacht sinken die Temperaturen auf minus fünf Grad – es friert, Glätte.",
        "audio": "Das Wetter: Am Tag ist es sonnig bei vier Grad. In der Nacht wird es klar und sehr kalt, die Temperaturen sinken bis auf minus fünf Grad. Achten Sie morgen früh auf Glätte. Der Wind bleibt schwach."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Wohnung hat einen Balkon.",
        "a": false,
        "why": "Kein Balkon, aber Zugang zum Garten.",
        "audio": "Mann: Guten Tag, ich rufe wegen der Anzeige an. Ist die Dreizimmerwohnung in der Bergstraße noch frei?\nFrau: Ja, noch ist sie frei. Sie liegt im Erdgeschoss, hat 75 Quadratmeter und eine neue Küche.\nMann: Gibt es auch einen Balkon?\nFrau: Einen Balkon leider nicht, aber Sie dürfen den Garten hinter dem Haus mitbenutzen.\nMann: Das ist sogar besser, wir haben zwei kleine Kinder. Wann kann ich die Wohnung ansehen?\nFrau: Morgen um 17 Uhr ist eine Besichtigung mit mehreren Interessenten."
       },
       {
        "same": true,
        "q": "Was passiert morgen?",
        "o": [
         "Der Mann unterschreibt den Vertrag.",
         "Mehrere Leute sehen die Wohnung an.",
         "Die Küche wird eingebaut."
        ],
        "a": 1,
        "why": "„Besichtigung mit mehreren Interessenten“"
       },
       {
        "q": "Die Mieterin hat Schimmel im Bad.",
        "a": true,
        "why": "Schwarze Flecken an der Wand im Bad = Schimmel.",
        "audio": "Frau: Hallo Herr Wagner, gut, dass ich Sie treffe. Im Bad sind schwarze Flecken an der Wand, hinter der Waschmaschine.\nMann: Hm, das klingt nach Schimmel. Lüften Sie denn regelmäßig?\nFrau: Natürlich, jeden Morgen nach dem Duschen. Aber das Bad hat kein Fenster, nur einen Lüfter, und der ist seit Wochen kaputt.\nMann: Ach so, dann liegt es am Lüfter. Den lasse ich diese Woche reparieren. Und die Wand lasse ich danach auch behandeln.\nFrau: Danke, das wäre gut."
       },
       {
        "same": true,
        "q": "Was ist die Ursache für das Problem?",
        "o": [
         "Die Frau lüftet zu wenig.",
         "Die Waschmaschine ist undicht.",
         "Ein Gerät funktioniert nicht."
        ],
        "a": 2,
        "why": "Der Lüfter ist kaputt – „dann liegt es am Lüfter“. Sie lüftet regelmäßig."
       },
       {
        "q": "Der Mann muss die Nebenkosten nachzahlen.",
        "a": true,
        "why": "Er soll 420 Euro nachzahlen.",
        "audio": "Mann: Du, Hanna, du kennst dich doch mit so etwas aus. Ich soll 420 Euro Nebenkosten nachzahlen. Das ist doch viel zu viel!\nFrau: Zeig mal. Hm, hier steht „Gartenpflege“ – 300 Euro. Ihr habt doch gar keinen Garten?\nMann: Nein, nur einen Hof mit Mülltonnen.\nFrau: Dann würde ich der Hausverwaltung schreiben und um die Belege bitten. Du darfst die Rechnungen ansehen, das ist dein Recht. Und zahl erst mal nur den Teil, der richtig ist."
       },
       {
        "same": true,
        "q": "Was rät Hanna?",
        "o": [
         "Gar nichts zu bezahlen.",
         "Die Rechnungen sehen zu wollen.",
         "Einen Anwalt zu nehmen."
        ],
        "a": 1,
        "why": "„um die Belege bitten … Du darfst die Rechnungen ansehen“ – nicht gar nichts zahlen, sondern den richtigen Teil."
       },
       {
        "q": "Die Frau hat die Wohnung schon gefunden.",
        "a": false,
        "why": "Sie sucht seit vier Monaten und hat noch nichts gefunden.",
        "audio": "Frau: Ich suche jetzt seit vier Monaten eine Wohnung. Ich habe über hundert E-Mails geschrieben und war nur zu zwei Besichtigungen eingeladen.\nMann: Hast du schon an eine Wohngemeinschaft gedacht? Ich habe mein Zimmer damals in zwei Wochen gefunden.\nFrau: Eine WG? Mit 35? Ich weiß nicht.\nMann: Es gibt viele WGs mit Berufstätigen. Und zum Übergang ist das doch besser als gar nichts. Ich schicke dir heute Abend den Link zu der Seite, die ich benutzt habe."
       },
       {
        "same": true,
        "q": "Was macht der Mann heute Abend?",
        "o": [
         "Er besichtigt eine WG.",
         "Er schickt eine Internetadresse.",
         "Er schreibt E-Mails an Vermieter."
        ],
        "a": 1,
        "why": "„Ich schicke dir heute Abend den Link“ = eine Internetadresse"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Wohnen in der Stadt oder auf dem Land?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Auf dem Land ist man ohne Auto verloren.",
       "In der Stadt sind die Mieten zu hoch.",
       "Auf dem Land ist es besser für Kinder.",
       "In der Stadt ist es zu laut.",
       "In der Stadt gibt es mehr Arbeitsplätze.",
       "Auf dem Land kennt jeder jeden – das ist nicht immer schön."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 2,
        "why": "Garten, Bach, Kinder spielen draußen ohne Gefahr – besser für Kinder.",
        "audio": "Seit wir im Dorf wohnen, sind unsere Kinder fast nur draußen. Sie bauen Hütten im Wald und spielen am Bach. In der Stadt habe ich sie nie allein auf die Straße gelassen, weil so viele Autos fahren."
       },
       {
        "q": "Aussage 2",
        "a": 0,
        "why": "Der Bus fährt nur zweimal am Tag; ohne Auto kommt sie nicht zur Arbeit oder zum Arzt.",
        "audio": "Die Natur ist wunderschön hier, das stimmt. Aber der Bus fährt zweimal am Tag, morgens um sieben und mittags um eins. Ich habe keinen Führerschein. Wie soll ich da zur Arbeit oder zum Arzt kommen?"
       },
       {
        "q": "Aussage 3",
        "a": 1,
        "why": "Für eine kleine Wohnung zahlt er die Hälfte seines Gehalts – zu teuer.",
        "audio": "Ich arbeite in München und liebe die Stadt. Aber für 45 Quadratmeter bezahle ich 1.300 Euro kalt. Das ist fast die Hälfte von meinem Gehalt. Sparen kann ich so überhaupt nicht."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Wohnanlage Sonnenhof – Infotafel\nHaus A, Erdgeschoss: Büro der Hausverwaltung (Di + Do 9–12 Uhr) · Briefkästen\nHaus A, Keller: Waschküche · Trockenraum · Fahrradkeller\nHaus B, Erdgeschoss: Gemeinschaftsraum (Reservierung beim Hausmeister) · Spielzimmer\nHaus B, Keller: Hausmeister-Werkstatt · Mülltonnen-Raum · Sperrmüll-Ecke (nur nach Anmeldung)\nHof: Spielplatz · Grillplatz · Paketstation",
      "items": [
       {
        "q": "Sie möchten Ihren Geburtstag mit 20 Gästen feiern, Ihre Wohnung ist zu klein.",
        "o": [
         "Haus B, Erdgeschoss",
         "Hof",
         "Haus A, Erdgeschoss"
        ],
        "a": 0,
        "why": "Gemeinschaftsraum – Haus B, Erdgeschoss"
       },
       {
        "q": "Sie haben einen Brief der Hausverwaltung nicht verstanden und möchten persönlich fragen.",
        "o": [
         "Haus B, Keller",
         "Haus A, Erdgeschoss",
         "Haus B, Erdgeschoss"
        ],
        "a": 1,
        "why": "Büro der Hausverwaltung – Haus A, Erdgeschoss"
       },
       {
        "q": "Ihr Paket wurde abgegeben, als Sie nicht zu Hause waren.",
        "o": [
         "Haus A, Erdgeschoss",
         "Haus B, Keller",
         "Hof"
        ],
        "a": 2,
        "why": "Paketstation – Hof (nicht die Briefkästen)"
       },
       {
        "q": "Sie wollen Ihre nasse Wäsche aufhängen.",
        "o": [
         "Haus A, Keller",
         "Haus B, Keller",
         "Hof"
        ],
        "a": 0,
        "why": "Trockenraum – Haus A, Keller"
       },
       {
        "q": "Die Tür Ihres Küchenschranks ist kaputt und Sie suchen den Hausmeister.",
        "o": [
         "Haus B, Erdgeschoss",
         "Haus A, Erdgeschoss",
         "Haus B, Keller"
        ],
        "a": 2,
        "why": "Hausmeister-Werkstatt – Haus B, Keller"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Mieterverein: Prüfung Ihrer Nebenkostenabrechnung – für Mitglieder kostenlos.",
       "Wohnungstauschbörse der Stadt: große gegen kleine Wohnung tauschen.",
       "Möbelbörse: Möbel und Küchen gebraucht kaufen und verkaufen.",
       "Schlüsseldienst Fix: Tür zugefallen? Wir kommen in 30 Minuten – auch nachts.",
       "Malermeister Weber: Renovierung beim Auszug – schnell und zum Festpreis.",
       "Studentenwerk: Zimmer im Wohnheim für Studierende.",
       "Energieberatung der Stadtwerke: Wie senke ich meine Heizkosten?",
       "Umzugshilfe Starke Hände: Tragen, packen, Möbel aufbauen."
      ],
      "items": [
       {
        "q": "Ihre Kinder sind ausgezogen, und Ihre Vierzimmerwohnung ist jetzt zu groß und zu teuer.",
        "a": 1,
        "why": "große gegen kleine Wohnung tauschen"
       },
       {
        "q": "Sie ziehen aus, und der Vermieter will, dass die Wände frisch gestrichen sind.",
        "a": 4,
        "why": "Renovierung beim Auszug – Malermeister"
       },
       {
        "q": "Sie haben sich ausgesperrt, der Schlüssel steckt innen.",
        "a": 3,
        "why": "Schlüsseldienst – Tür zugefallen"
       },
       {
        "q": "Sie sind Azubi und suchen ein günstiges Zimmer.",
        "a": -1,
        "why": "Das Wohnheim ist nur für Studierende, nicht für Auszubildende – keine Anzeige passt."
       },
       {
        "q": "Ihre Heizkostenabrechnung ist viel höher als letztes Jahr, und Sie glauben, dass sie falsch ist.",
        "a": 0,
        "why": "Prüfung der Abrechnung – Mieterverein (die Energieberatung hilft nur beim Sparen)"
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Die Mieter müssen bei den Bauarbeiten zu Hause sein.",
        "a": false,
        "why": "Man kann auch einem Nachbarn oder dem Hausmeister den Schlüssel geben.",
        "text": "Information an alle Mieterinnen und Mieter\nIn der Woche vom 10. bis 14. März werden in allen Wohnungen neue Rauchmelder eingebaut. Die Arbeiten dauern pro Wohnung etwa 15 Minuten. Der genaue Termin für Ihre Wohnung hängt im Treppenhaus aus. Wenn Sie an diesem Tag nicht zu Hause sein können, geben Sie bitte einem Nachbarn oder unserem Hausmeister, Herrn Pohl, den Schlüssel. Die Kosten trägt der Vermieter; die jährliche Wartung wird über die Nebenkosten abgerechnet."
       },
       {
        "same": true,
        "q": "Wer bezahlt die regelmäßige Kontrolle der Rauchmelder?",
        "o": [
         "Der Vermieter.",
         "Der Hausmeister.",
         "Die Mieter."
        ],
        "a": 2,
        "why": "Den Einbau zahlt der Vermieter, die Wartung kommt „über die Nebenkosten“ – also zahlen die Mieter."
       },
       {
        "q": "Die Wohnung ist ab sofort frei.",
        "a": false,
        "why": "Sie ist erst ab 1. Juli frei.",
        "text": "Helle 2-Zimmer-Wohnung im Westend\n58 m², 2. Stock mit Aufzug, Balkon nach Süden, Einbauküche, Laminat. Kaltmiete 790 Euro, Nebenkosten 180 Euro, Kaution drei Kaltmieten. Frei ab 1. Juli. Haustiere nach Absprache. Nur an Nichtraucher. Bitte bewerben Sie sich mit Schufa-Auskunft und Einkommensnachweis per E-Mail. Besichtigungen nur nach Einladung."
       },
       {
        "same": true,
        "q": "Wie hoch ist die Kaution?",
        "o": [
         "790 Euro.",
         "2.370 Euro.",
         "970 Euro."
        ],
        "a": 1,
        "why": "drei Kaltmieten = 3 × 790 = 2.370 Euro"
       },
       {
        "q": "Herr Schulz muss mehr Miete bezahlen.",
        "a": true,
        "why": "Die Miete steigt ab 1. Oktober um 45 Euro.",
        "text": "Sehr geehrter Herr Schulz,\nnach § 558 BGB bitten wir Sie um Zustimmung zu einer Erhöhung Ihrer Kaltmiete von 650 Euro auf 695 Euro ab dem 1. Oktober. Ihre Miete wurde seit drei Jahren nicht erhöht und liegt auch nach der Erhöhung noch unter dem Mietspiegel der Stadt. Bitte schicken Sie uns die beigefügte Zustimmungserklärung bis zum 31. August unterschrieben zurück. Wenn Sie Fragen haben, erreichen Sie uns dienstags und donnerstags.\nIhre Hausverwaltung"
       },
       {
        "same": true,
        "q": "Was soll Herr Schulz tun?",
        "o": [
         "Bis Ende August unterschreiben.",
         "Ab sofort 695 Euro zahlen.",
         "Den Mietspiegel schicken."
        ],
        "a": 0,
        "why": "„Zustimmungserklärung bis zum 31. August unterschrieben zurück“ – die neue Miete gilt erst ab Oktober."
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Mieterhöhung – was ist erlaubt?\nVermieter dürfen die Miete nicht einfach so erhöhen, wie sie wollen. Bei den meisten Wohnungen darf die Miete nur bis zur ortsüblichen Vergleichsmiete steigen. Wie hoch diese ist, steht im Mietspiegel der Stadt. Außerdem darf die Miete innerhalb von drei Jahren um höchstens 20 Prozent steigen, in vielen Großstädten sogar nur um 15 Prozent.\nDer Vermieter muss die Erhöhung schriftlich begründen, und der Mieter muss zustimmen. Er hat dafür bis zum Ende des übernächsten Monats Zeit. Stimmt der Mieter nicht zu, kann der Vermieter vor Gericht klagen – er darf aber nicht deswegen kündigen.\nAnders ist es bei einer Modernisierung, zum Beispiel neuen Fenstern oder einer neuen Heizung: Dann darf der Vermieter einen Teil der Kosten auf die Miete umlegen, ohne dass der Mieter zustimmen muss. Für Reparaturen, etwa eine kaputte Heizung, gilt das nicht.",
      "items": [
       {
        "q": "Wenn der Mieter einer Mieterhöhung nicht zustimmt, darf der Vermieter ihm kündigen.",
        "a": false,
        "why": "Er kann klagen, aber „nicht deswegen kündigen“."
       },
       {
        "q": "Nach dem Einbau neuer Fenster kann die Miete auch ohne Zustimmung steigen.",
        "a": true,
        "why": "Modernisierung – Kosten umlegen, „ohne dass der Mieter zustimmen muss“"
       },
       {
        "q": "Wenn der Vermieter die kaputte Heizung reparieren lässt, darf er die Miete erhöhen.",
        "a": false,
        "why": "„Für Reparaturen … gilt das nicht.“"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Sehr geehrte Frau Engel,\nvielen Dank für die Nebenkostenabrechnung für das letzte Jahr, (1) ich gestern bekommen habe. Leider verstehe ich einige Punkte nicht. Ich soll 380 Euro nachzahlen, (2) ich im letzten Jahr deutlich weniger geheizt habe als früher. Besonders (3) die Kosten für den Hausmeister überrascht, die sich fast verdoppelt haben. Außerdem steht auf der Abrechnung „Gartenpflege“, (4) unser Haus gar keinen Garten hat. Ich möchte Sie deshalb bitten, mir die Belege zu schicken oder mir einen Termin zu geben, (5) ich die Rechnungen in Ihrem Büro ansehen kann. Bis ich die Unterlagen geprüft habe, zahle ich nur den Betrag, (6) ich für richtig halte.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "die",
         "der",
         "den"
        ],
        "a": 0,
        "why": "die Nebenkostenabrechnung → Relativpronomen die (Akkusativ)"
       },
       {
        "n": 2,
        "o": [
         "weil",
         "obwohl",
         "deshalb"
        ],
        "a": 1,
        "why": "Gegensatz: nachzahlen, obwohl weniger geheizt"
       },
       {
        "n": 3,
        "o": [
         "haben mich",
         "hat mich",
         "habe ich"
        ],
        "a": 0,
        "why": "Subjekt sind „die Kosten“ (Plural): haben mich überrascht"
       },
       {
        "n": 4,
        "o": [
         "aber",
         "obwohl",
         "trotzdem"
        ],
        "a": 1,
        "why": "Nebensatz mit Verb am Ende (hat) und Gegensatz → obwohl"
       },
       {
        "n": 5,
        "o": [
         "dass",
         "an dem",
         "wann"
        ],
        "a": 1,
        "why": "einen Termin, an dem ich … – Relativsatz mit Präposition"
       },
       {
        "n": 6,
        "o": [
         "den",
         "was",
         "der"
        ],
        "a": 0,
        "why": "den Betrag, den ich für richtig halte (Akkusativ maskulin)"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie haben Ihre Nebenkostenabrechnung bekommen und sollen viel Geld nachzahlen. Einige Punkte finden Sie falsch. Schreiben Sie an Ihre Hausverwaltung.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ist Ihrer Meinung nach falsch?",
       "Warum ist das für Sie ein Problem?",
       "Was soll die Hausverwaltung tun?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich habe gestern meine Nebenkostenabrechnung für das letzte Jahr bekommen. Ich soll 380 Euro nachzahlen, und ich bin damit nicht einverstanden.\nAuf der Abrechnung stehen 250 Euro für Gartenpflege, aber unser Haus hat keinen Garten, nur einen Hof mit Parkplätzen. Außerdem sind die Kosten für den Hausmeister fast doppelt so hoch wie im letzten Jahr, obwohl er nur einmal pro Woche kommt.\nFür mich ist das ein großes Problem, weil ich gerade in Elternzeit bin und weniger Geld verdiene. 380 Euro auf einmal kann ich nicht bezahlen.\nBitte prüfen Sie die Abrechnung noch einmal und schicken Sie mir die Belege. Wenn sich herausstellt, dass ich doch etwas nachzahlen muss, möchte ich das gern in Raten tun.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "abrechnung|nebenkosten|nachzahl|schreibe|nicht einverstanden",
        "Ich habe Ihre Nebenkostenabrechnung bekommen und bin nicht einverstanden."
       ],
       [
        "garten|hausmeister|falsch|zu hoch|doppelt|nicht richtig|fehler|heizung",
        "Wir haben keinen Garten, aber auf der Abrechnung steht Gartenpflege."
       ],
       [
        "problem|geld|weil|denn|verdien|elternzeit|arbeitslos|nicht bezahlen",
        "Das ist ein Problem für mich, weil ich gerade wenig Geld verdiene."
       ],
       [
        "prüfen|belege|rechnungen|korrigier|raten|bitte|schicken",
        "Bitte prüfen Sie die Abrechnung und schicken Sie mir die Belege."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Sie haben im Internet eine Anzeige für eine Wohnung gesehen, die Ihnen sehr gefällt. Schreiben Sie an die Vermieterin, Frau Haas.",
       "points": [
        "Grund für Ihr Schreiben",
        "Etwas über Sie und Ihre Familie",
        "Warum suchen Sie eine neue Wohnung?",
        "Fragen zur Wohnung und Besichtigung"
       ],
       "model": "Sehr geehrte Frau Haas,\nich habe Ihre Anzeige für die Dreizimmerwohnung in der Bergstraße auf einem Immobilienportal gelesen und interessiere mich sehr dafür.\nIch heiße Suresh [Nachname], bin 34 Jahre alt und arbeite seit vier Jahren unbefristet als Ingenieur bei einer IT-Firma in Frankfurt. Ich bin verheiratet, und wir haben eine Tochter, die zwei Jahre alt ist. Wir rauchen nicht und haben keine Haustiere.\nUnsere jetzige Wohnung hat nur zwei Zimmer und ist für uns zu klein geworden. Außerdem bekommen wir im Herbst ein zweites Kind.\nIst die Wohnung ab dem 1. September frei? Gibt es einen Kellerraum für den Kinderwagen? Ich würde die Wohnung sehr gern besichtigen. Am besten passt es mir abends oder am Samstag. Eine Schufa-Auskunft und meine Gehaltsnachweise kann ich Ihnen gern schicken.\nMit freundlichen Grüßen\nSuresh [Nachname]",
       "keys": [
        [
         "anzeige|gelesen|gesehen|interess|wohnung",
         "Ich habe Ihre Anzeige gelesen und interessiere mich für die Wohnung."
        ],
        [
         "heiße|bin \\d|jahre alt|arbeite|verheiratet|kind|tochter|sohn|familie|rauche",
         "Ich bin 34, arbeite als Ingenieur und habe eine kleine Tochter."
        ],
        [
         "zu klein|zu teuer|zu weit|neue[nr]? (stelle|arbeit)|kind|weil|denn|umzug|laut",
         "Unsere Wohnung ist zu klein, weil wir bald ein zweites Kind bekommen."
        ],
        [
         "besichtig|frei ab|wann|keller|balkon|nebenkosten|kaution|\\?",
         "Wann kann ich die Wohnung besichtigen?"
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Sie wohnen in Frankfurt. Wie haben Sie Ihre Wohnung gefunden?"
       },
       {
        "you": "Erzähl, wie du deine Wohnung gefunden hast.",
        "min": 15,
        "key": [
         [
          "gefunden|gesucht|anzeige|internet|portal|makler|freund|kolleg|besichtig",
          "Wohnungssuche"
         ],
         [
          "monat|woche|lange|schnell|zuerst|dann",
          "Zeit/Ablauf"
         ]
        ],
        "model": "Ich habe fast drei Monate gesucht. Ich habe viele Anzeigen im Internet beantwortet, aber meistens keine Antwort bekommen. Am Ende hat mir ein Kollege geholfen: Seine Nachbarin ist ausgezogen, und ich habe ihre Wohnung bekommen."
       },
       {
        "who": "Prüferin",
        "say": "Was ist Ihnen bei einer Wohnung besonders wichtig?"
       },
       {
        "you": "Sag, was dir bei einer Wohnung wichtig ist – mit Grund.",
        "min": 12,
        "key": [
         [
          "wichtig|brauche|möchte|balkon|ruhig|groß|nähe|bahn|miete|zimmer",
          "Was wichtig ist"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Mir ist wichtig, dass die Wohnung in der Nähe einer S-Bahn-Station liegt, weil ich kein Auto habe. Ein Balkon wäre auch schön."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Wohnen. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-15.jpg",
         "alt": "Eine lange Schlange vor einem Gebäude: Viele Menschen stehen auf dem Gehweg und warten, vorne stehen mehrere Frauen mit Taschen und schauen nach oben.",
         "by": "Josh",
         "link": "https://unsplash.com/photos/menschen-die-auf-dem-burgersteig-in-der-schlange-stehen-wS9Jno42DGI"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "schlange|menschen|leute|warten|gebäude|haus|gehweg|frauen|taschen|lang",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich eine lange Schlange vor einem Gebäude. Viele Menschen stehen auf dem Gehweg und warten. Vorne stehen ein paar Frauen mit Taschen und schauen nach oben. Ich glaube, das ist eine Wohnungsbesichtigung, und alle wollen dieselbe Wohnung. Sie warten wahrscheinlich schon lange."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man ein kleines Haus auf dem Land mit einem großen Garten. Eine Familie sitzt draußen am Tisch und isst."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Wie war die Wohnungssuche für Sie in Deutschland?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "gesucht|suche|wohnung|besichtig|makler|anzeige|miete|teuer|schwer|gefunden",
          "zum Thema"
         ]
        ],
        "model": "Die Wohnungssuche war sehr schwer. Ich war bei einer Besichtigung mit fünfzig anderen Leuten. Viele Vermieter wollten einen unbefristeten Arbeitsvertrag sehen, den ich am Anfang nicht hatte."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Wie wohnen die Menschen dort? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien wohnen viele Familien in eigenen Häusern oder Wohnungen, die sie gekauft haben. Mieten ist nicht so normal wie in Deutschland. Ich finde, dass Mieter in Deutschland gute Rechte haben, aber die Wohnungssuche ist in großen Städten zu schwierig, weil es zu wenige Wohnungen gibt."
       },
       {
        "who": "Anna",
        "say": "Ja, in Warschau ist es inzwischen auch sehr teuer."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: In Ihrem Haus wohnen viele Familien. Der Hof hinter dem Haus ist hässlich und wird nicht benutzt. Sie möchten zusammen mit Ihrer Nachbarin den Hof schöner machen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Was soll im Hof sein? · Wer bezahlt? · Wann arbeiten? · Wer fragt die Hausverwaltung?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. In Ihrem Haus wohnen viele Familien. Der Hof hinter dem Haus ist hässlich und wird nicht benutzt. Sie möchten zusammen mit Ihrer Nachbarin den Hof schöner machen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Was soll im Hof sein? · Wer bezahlt? · Wann arbeiten? · Wer fragt die Hausverwaltung?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Ich finde, wir sollten im Hof ein paar Bänke und Blumen aufstellen. Was meinst du?"
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Bänke finde ich gut, aber Blumen machen viel Arbeit beim Gießen. Ich würde lieber einen Sandkasten für die Kinder bauen, weil hier so viele Familien wohnen."
       },
       {
        "who": "Anna",
        "say": "Ein Sandkasten ist eine schöne Idee. Aber wer soll das alles bezahlen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "hof|bank|bänke|blumen|pflanzen|spielplatz|sandkasten|grill|hausverwaltung|nachbarn|geld|samstag|arbeiten|fest",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten zuerst die Hausverwaltung fragen, ob sie das Material bezahlt. Wie wäre es, wenn wir dann an einem Samstag alle Nachbarn zum Arbeiten einladen – und danach grillen wir zusammen?"
       },
       {
        "who": "Anna",
        "say": "Super. Wer schreibt an die Hausverwaltung?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich schreibe an die Hausverwaltung und erkläre unsere Idee. Kannst du einen Zettel für die Nachbarn machen und im Treppenhaus aufhängen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "hof|bank|bänke|blumen|pflanzen|spielplatz|sandkasten|grill|hausverwaltung|nachbarn|geld|samstag|arbeiten|fest",
          "Plan"
         ]
        ],
        "model": "Also: Wir wollen Bänke und einen Sandkasten in den Hof stellen. Ich frage die Hausverwaltung, ob sie das Material bezahlt. Du machst einen Aushang, und an einem Samstag arbeiten alle Nachbarn zusammen und grillen danach."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "b1-16",
  "title": "Modelltest 16",
  "level": "schwer",
  "sub": "Bahn, Reisen, Freizeit · Entschädigung für eine Verspätung / Abmeldung vom Sportverein",
  "sections": [
   {
    "id": "hoeren",
    "de": "Hören",
    "en": "Listening",
    "time": 25,
    "parts": [
     {
      "t": "Teil 1 – Ansagen",
      "tab": "Teil 1",
      "intro": "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text zweimal.",
      "type": "mc",
      "per": 1,
      "plays": 2,
      "time": 5,
      "items": [
       {
        "q": "Was sollen die Fahrgäste nach Köln tun?",
        "o": [
         "In Frankfurt umsteigen.",
         "Auf Gleis 7 gehen.",
         "Auf den nächsten Zug warten."
        ],
        "a": 1,
        "why": "Der Zug fährt nicht von Gleis 5, sondern heute von Gleis 7; Umsteigen ist nicht nötig.",
        "audio": "Achtung an Gleis 5: Information zum ICE 524 nach Köln, planmäßige Abfahrt 14:12 Uhr. Dieser Zug fährt heute nicht von Gleis 5, sondern von Gleis 7. Er hat zurzeit etwa zehn Minuten Verspätung. Der Zug fährt ohne Halt in Frankfurt Flughafen direkt nach Köln. Wir bitten um Entschuldigung."
       },
       {
        "q": "Warum ruft das Reisebüro an?",
        "o": [
         "Der Flug ist früher.",
         "Das Hotel ist ausgebucht.",
         "Ein Dokument fehlt."
        ],
        "a": 0,
        "why": "Die Fluggesellschaft hat den Flug um drei Stunden vorverlegt; Hotel und Unterlagen sind in Ordnung.",
        "audio": "Guten Tag, Frau Silva, hier ist das Reisebüro Fernweh. Es gibt eine Änderung bei Ihrem Flug nach Lissabon am Samstag: Die Fluggesellschaft hat den Abflug von 15 Uhr auf 12 Uhr vorverlegt. Das Hotel und der Transfer bleiben gleich, Ihre Unterlagen sind alle in Ordnung. Bitte seien Sie spätestens um zehn Uhr am Flughafen."
       },
       {
        "q": "Was gilt für den Tagesausflug?",
        "o": [
         "Man muss das Essen selbst bezahlen.",
         "Er findet bei jedem Wetter statt.",
         "Er beginnt eine Stunde früher."
        ],
        "a": 0,
        "why": "Bus und Eintritt sind im Preis, das Mittagessen nicht – also selbst bezahlen. Die Uhrzeit bleibt.",
        "audio": "Hallo Herr Petersen, hier ist Gabi vom Seniorentreff. Nur zur Erinnerung wegen unseres Ausflugs an den Rhein am Donnerstag: Wir fahren wie besprochen um neun Uhr ab. Der Bus und der Eintritt ins Schloss sind im Preis von 25 Euro enthalten, das Mittagessen im Restaurant bezahlt aber jeder selbst. Falls es stark regnet, verschieben wir den Ausflug um eine Woche."
       },
       {
        "q": "Was soll Herr Lindqvist machen?",
        "o": [
         "Den Koffer am Flughafen abholen.",
         "Ein Formular online ausfüllen.",
         "Die Fluggesellschaft anrufen."
        ],
        "a": 1,
        "why": "Der Koffer wird nach Hause gebracht; er soll nur online das Formular mit Adresse ausfüllen.",
        "audio": "Guten Tag, Herr Lindqvist, hier ist der Gepäckservice am Flughafen. Ihr Koffer ist gefunden worden, er war in Wien geblieben. Wir bringen ihn morgen zu Ihnen nach Hause, Sie müssen also nicht noch einmal zum Flughafen kommen. Bitte füllen Sie nur online das Formular mit Ihrer Adresse und einer Telefonnummer aus, damit der Kurier Sie erreichen kann."
       }
      ]
     },
     {
      "t": "Teil 2 – Radio",
      "tab": "Teil 2",
      "intro": "Sie hören fünf Ansagen aus dem Radio. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten? Sie hören jeden Text einmal.",
      "type": "mc",
      "per": 1,
      "plays": 1,
      "time": 6,
      "items": [
       {
        "q": "Worum geht es in der Sendung?",
        "o": [
         "Um günstiges Reisen mit der Bahn.",
         "Um Urlaub mit dem Fahrrad.",
         "Um Probleme an Flughäfen."
        ],
        "a": 0,
        "why": "Sparpreise, Bahncard, Deutschlandticket – günstig Bahn fahren.",
        "audio": "Sie wollen in den Ferien die Familie besuchen, aber die Bahntickets sind so teuer? Heute bei „Unterwegs“ verraten wir Ihnen, wann Sie Sparpreise buchen sollten, für wen sich eine Bahncard lohnt und wo Sie mit dem Deutschlandticket überall hinkommen."
       },
       {
        "q": "Was gilt für das Schwimmbad?",
        "o": [
         "Es ist in den Ferien geschlossen.",
         "Es öffnet morgens früher.",
         "Der Eintritt ist teurer."
        ],
        "a": 1,
        "why": "In den Sommerferien öffnet es schon um 7 statt um 9 Uhr; der Eintritt bleibt gleich.",
        "audio": "Gute Nachricht für alle Frühaufsteher: In den Sommerferien öffnet das Freibad am Stadtwald schon um 7 Uhr morgens statt wie bisher um 9 Uhr. Geschlossen wird weiterhin um 20 Uhr. Die Eintrittspreise bleiben unverändert, Kinder unter sechs Jahren schwimmen kostenlos."
       },
       {
        "q": "Was ist zwischen Mainz und Wiesbaden los?",
        "o": [
         "Die S-Bahn fährt öfter.",
         "Statt der Bahn fahren Busse.",
         "Die Strecke ist frei."
        ],
        "a": 1,
        "why": "Wegen Bauarbeiten Schienenersatzverkehr – Busse statt Züge.",
        "audio": "Wegen Bauarbeiten an der Brücke fahren zwischen Mainz und Wiesbaden vom 1. bis zum 15. August keine S-Bahnen. Es gibt einen Ersatzverkehr mit Bussen. Bitte rechnen Sie mit etwa 20 Minuten längerer Fahrzeit. Die Busse fahren vom Bahnhofsvorplatz ab."
       },
       {
        "q": "Wer kann beim Lauf mitmachen?",
        "o": [
         "Nur Mitglieder eines Vereins.",
         "Nur Erwachsene.",
         "Alle, auch Kinder."
        ],
        "a": 2,
        "why": "Es gibt auch einen Kinderlauf über einen Kilometer – also alle.",
        "audio": "Am Sonntag ist wieder Stadtlauf! Sie können zwischen fünf und zehn Kilometern wählen, für Kinder gibt es einen Lauf über einen Kilometer. Sie müssen nicht in einem Verein sein. Anmelden kann man sich online bis Freitag oder am Sonntag direkt am Start."
       },
       {
        "q": "Wie wird das Wetter am Wochenende?",
        "o": [
         "Samstag Regen, Sonntag besser.",
         "Das ganze Wochenende sonnig.",
         "Samstag sonnig, Sonntag Regen."
        ],
        "a": 0,
        "why": "Samstag regnet es noch, Sonntag kommt die Sonne – das Gegenteil von c.",
        "audio": "Das Wetter zum Wochenende: Am Samstag regnet es noch fast den ganzen Tag, die Temperaturen liegen bei 14 Grad. Am Sonntag wird es freundlicher, die Wolken lösen sich auf, und am Nachmittag scheint die Sonne bei bis zu 19 Grad."
       }
      ]
     },
     {
      "t": "Teil 3 – Gespräche",
      "tab": "Teil 3",
      "intro": "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie bei jedem Gespräch, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt. Sie hören jedes Gespräch zweimal.",
      "type": "mix",
      "per": 1,
      "plays": 2,
      "time": 9,
      "items": [
       {
        "q": "Die Frau hat ihren Anschlusszug verpasst.",
        "a": true,
        "why": "Ihr Zug hatte Verspätung, der Anschluss war weg.",
        "audio": "Frau: Entschuldigung, mein Zug aus Hamburg hatte 40 Minuten Verspätung, und mein Anschlusszug nach Freiburg ist weg. Was mache ich jetzt?\nMann: Darf ich Ihr Ticket sehen? Ah, Sie haben einen Sparpreis. Normalerweise gilt der nur für einen bestimmten Zug, aber bei Verspätung ist die Zugbindung aufgehoben. Sie können einfach den nächsten ICE um 16:52 nehmen.\nFrau: Und bekomme ich Geld zurück?\nMann: Wenn Sie mehr als eine Stunde später ankommen, ja: 25 Prozent. Das Formular finden Sie im Internet oder hier am Schalter."
       },
       {
        "same": true,
        "q": "Wann bekommt die Frau Geld zurück?",
        "o": [
         "Bei jeder Verspätung.",
         "Wenn sie über eine Stunde später ankommt.",
         "Nur mit einem Flexpreis-Ticket."
        ],
        "a": 1,
        "why": "„Wenn Sie mehr als eine Stunde später ankommen, ja: 25 Prozent.“"
       },
       {
        "q": "Der Junge möchte im Verein bleiben.",
        "a": false,
        "why": "Er möchte aufhören und lieber Basketball spielen.",
        "audio": "Mann: Hallo Frau Brandt, ich bin der Vater von Luka. Luka möchte mit dem Fußball aufhören. Er spielt jetzt lieber Basketball in der Schul-AG.\nFrau: Schade, er war ein guter Spieler. Die Kündigung muss schriftlich sein, und sie gilt immer zum Ende eines Quartals.\nMann: Wir haben jetzt Mitte Februar. Muss ich dann bis Ende März zahlen?\nFrau: Ja, genau. Wenn Sie mir die Kündigung bis Ende Februar schicken, ist er ab April abgemeldet.\nMann: Gut, dann schreibe ich heute noch."
       },
       {
        "same": true,
        "q": "Bis wann zahlt der Vater noch den Beitrag?",
        "o": [
         "Bis Mitte Februar.",
         "Bis Ende Februar.",
         "Bis Ende März."
        ],
        "a": 2,
        "why": "Kündigung zum Quartalsende – er zahlt bis Ende März, ab April ist Luka abgemeldet."
       },
       {
        "q": "Das Paar fährt mit dem Auto in den Urlaub.",
        "a": false,
        "why": "Sie fahren mit dem Nachtzug.",
        "audio": "Frau: Ich habe nachgesehen: Mit dem Auto nach Wien sind es acht Stunden, mit dem Flugzeug eine Stunde, aber der Flug kostet für uns vier 600 Euro.\nMann: Und mit dem Zug?\nFrau: Es gibt einen Nachtzug. Wir steigen abends um neun ein, schlafen im Abteil, und um sieben Uhr morgens sind wir da. Für alle vier zusammen 280 Euro.\nMann: Das finde ich super, dann sparen wir auch eine Hotelnacht. Und die Kinder finden das bestimmt spannend.\nFrau: Dann buche ich gleich."
       },
       {
        "same": true,
        "q": "Warum gefällt dem Mann der Zug?",
        "o": [
         "Er ist am schnellsten.",
         "Man braucht eine Übernachtung weniger.",
         "Man kann das Auto mitnehmen."
        ],
        "a": 1,
        "why": "„dann sparen wir auch eine Hotelnacht“"
       },
       {
        "q": "Die Frau hat das Deutschlandticket schon.",
        "a": true,
        "why": "Sie hat es seit Januar als Jobticket.",
        "audio": "Mann: Sag mal, Lara, lohnt sich das Deutschlandticket für mich? Ich fahre jeden Tag mit dem Bus zur Arbeit, das kostet mich 72 Euro im Monat.\nFrau: Auf jeden Fall! Ich habe es seit Januar über meinen Arbeitgeber, als Jobticket. Die Firma bezahlt einen Teil dazu.\nMann: Gilt das auch im ICE?\nFrau: Nein, nur im Nahverkehr: Busse, Straßenbahnen, S-Bahn und Regionalzüge. Aber damit kannst du am Wochenende auch an die Ostsee fahren, wenn du Zeit hast."
       },
       {
        "same": true,
        "q": "Wo gilt das Ticket nicht?",
        "o": [
         "In der S-Bahn.",
         "Im Regionalzug.",
         "Im ICE."
        ],
        "a": 2,
        "why": "„Gilt das auch im ICE? – Nein, nur im Nahverkehr“"
       }
      ]
     },
     {
      "t": "Teil 4 – Meinungen",
      "tab": "Teil 4",
      "intro": "Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen? Lesen Sie zuerst die Sätze a–f. Sie hören jede Aussage zweimal. Thema: Urlaub – zu Hause oder in der Ferne?",
      "type": "match",
      "listName": "Sätze",
      "per": 1,
      "plays": 2,
      "time": 5,
      "list": [
       "Reisen in ferne Länder schadet der Umwelt.",
       "Im Urlaub besucht man am besten die Familie.",
       "Eine Pauschalreise ist am bequemsten.",
       "Auch in der Nähe kann man viel entdecken.",
       "Urlaub ist für viele Familien zu teuer.",
       "Man sollte jedes Jahr ein neues Land kennenlernen."
      ],
      "items": [
       {
        "q": "Aussage 1",
        "a": 3,
        "why": "Statt zu fliegen hat sie die eigene Region mit dem Rad erkundet und war begeistert – Entdeckungen in der Nähe.",
        "audio": "Dieses Jahr sind wir nicht geflogen, sondern mit dem Fahrrad durch die Pfalz gefahren, nur eine Stunde von uns entfernt. Ich hatte keine Ahnung, wie schön es dort ist: Burgen, Weinberge, kleine Dörfer. Wir fahren nächstes Jahr wieder."
       },
       {
        "q": "Aussage 2",
        "a": 1,
        "why": "Jeder Urlaub geht in die Türkei zu den Eltern und Großeltern – Familie besuchen.",
        "audio": "Für mich ist Urlaub ganz einfach: Wir fliegen jeden Sommer drei Wochen zu meinen Eltern in die Türkei. Die Kinder sehen ihre Großeltern, ihre Cousins. Andere Länder interessieren mich gar nicht so sehr."
       },
       {
        "q": "Aussage 3",
        "a": 4,
        "why": "Fünfköpfige Familie, die Preise in den Ferien sind zu hoch – Urlaub nicht bezahlbar.",
        "audio": "Wir sind fünf Personen, und Urlaub geht nur in den Schulferien. Genau dann sind alle Preise doppelt so hoch. Letztes Jahr sind wir zu Hause geblieben und haben Ausflüge in den Zoo gemacht. Mehr ging einfach nicht."
       }
      ]
     }
    ]
   },
   {
    "id": "lesen",
    "de": "Lesen",
    "en": "Reading",
    "time": 45,
    "parts": [
     {
      "t": "Teil 1 – Wegweiser",
      "tab": "Teil 1",
      "intro": "Lesen Sie die Aufgaben und den Wegweiser. Wo (a, b oder c) finden Sie die passende Information?",
      "type": "mc",
      "per": 1,
      "time": 8,
      "text": "Hauptbahnhof – Übersicht\nUntergeschoss: S-Bahn (Gleis 101–104) · U-Bahn · Schließfächer\nErdgeschoss: Fernverkehr (Gleis 1–12) · Reisezentrum (Fahrkarten, Beratung, Fahrgastrechte) · Fundbüro\n1. Stock: Lounge für Bahncard-Kunden · Bahnhofsmission (Hilfe für Reisende in Not) · Toiletten\nVorplatz: Taxi · Busbahnhof (Fernbusse) · Fahrradparkhaus",
      "items": [
       {
        "q": "Sie möchten Ihren Koffer für vier Stunden irgendwo sicher lassen.",
        "o": [
         "Erdgeschoss",
         "Untergeschoss",
         "1. Stock"
        ],
        "a": 1,
        "why": "Schließfächer – Untergeschoss"
       },
       {
        "q": "Ihre Geldbörse wurde gestohlen, und Sie brauchen Hilfe, um nach Hause zu kommen.",
        "o": [
         "Vorplatz",
         "1. Stock",
         "Erdgeschoss"
        ],
        "a": 1,
        "why": "Bahnhofsmission – Hilfe für Reisende in Not, 1. Stock"
       },
       {
        "q": "Sie fahren mit dem Fernbus nach Prag.",
        "o": [
         "Vorplatz",
         "Erdgeschoss",
         "Untergeschoss"
        ],
        "a": 0,
        "why": "Busbahnhof (Fernbusse) – Vorplatz"
       },
       {
        "q": "Ihr Zug hatte zwei Stunden Verspätung, und Sie möchten einen Teil des Geldes zurück.",
        "o": [
         "1. Stock",
         "Untergeschoss",
         "Erdgeschoss"
        ],
        "a": 2,
        "why": "Fahrgastrechte – Reisezentrum im Erdgeschoss"
       },
       {
        "q": "Sie möchten zum Flughafen mit der S-Bahn fahren.",
        "o": [
         "Erdgeschoss",
         "Untergeschoss",
         "Vorplatz"
        ],
        "a": 1,
        "why": "S-Bahn – Untergeschoss"
       }
      ]
     },
     {
      "t": "Teil 2 – Anzeigen und Texte",
      "tab": "Teil 2",
      "intro": "Lesen Sie die Situationen und die Texte a–h. Finden Sie für jede Situation den passenden Text. Für eine Aufgabe gibt es keine Lösung – wählen Sie dann x.",
      "type": "match",
      "listName": "Texte",
      "x": true,
      "per": 1,
      "time": 10,
      "list": [
       "Jugendherberge am See: Übernachtung mit Frühstück ab 32 Euro, auch für Familien.",
       "Ferienspiele der Stadt: zwei Wochen Programm für Kinder von 6 bis 12 Jahren in den Sommerferien.",
       "Reisebüro Weltweit: Pauschalreisen ans Meer – Flug und Hotel aus einer Hand.",
       "Wanderverein: geführte Wanderungen jeden Sonntag, Gäste willkommen.",
       "Autovermietung Mobil: Wohnmobile für den Urlaub, ab 89 Euro am Tag.",
       "Tanzschule Rhythmus: Salsa, Tango und Walzer – Kurse für Paare und Singles.",
       "Fahrradverleih Rad & Tat: E-Bikes und Tandems für einen Tag oder eine Woche.",
       "Kinderreisepass-Service: Wir helfen beim Antrag – Termin im Bürgeramt nötig."
      ],
      "items": [
       {
        "q": "Sie arbeiten in den Sommerferien und suchen eine Betreuung für Ihren 8-jährigen Sohn.",
        "a": 1,
        "why": "Ferienspiele für Kinder von 6 bis 12"
       },
       {
        "q": "Sie möchten am Wochenende in der Natur unterwegs sein und neue Leute kennenlernen.",
        "a": 3,
        "why": "Wanderverein – Gäste willkommen"
       },
       {
        "q": "Sie möchten eine Woche Urlaub in Spanien machen und sich um nichts selbst kümmern.",
        "a": 2,
        "why": "Pauschalreise – Flug und Hotel aus einer Hand"
       },
       {
        "q": "Sie wollen mit Ihrer Familie flexibel durch Europa reisen und unterwegs im Fahrzeug schlafen.",
        "a": 4,
        "why": "Wohnmobil – im Fahrzeug schlafen"
       },
       {
        "q": "Sie suchen einen Kurs, in dem Sie schwimmen lernen können.",
        "a": -1,
        "why": "Kein Schwimmkurs in den Anzeigen – Tanzkurse passen nicht."
       }
      ]
     },
     {
      "t": "Teil 3 – Kurze Texte",
      "tab": "Teil 3",
      "intro": "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist und welche Antwort (a, b oder c) am besten passt.",
      "type": "mix",
      "per": 1,
      "time": 10,
      "items": [
       {
        "q": "Mit dem Deutschlandticket darf man ein Fahrrad kostenlos mitnehmen.",
        "a": false,
        "why": "Fürs Fahrrad braucht man eine extra Fahrradkarte.",
        "text": "Das Deutschlandticket – häufige Fragen\nDas Ticket kostet im Monat 63 Euro und gilt in ganz Deutschland in Bussen, Straßenbahnen, U- und S-Bahnen und Regionalzügen. Es ist ein persönliches Abo und kann nicht an andere Personen weitergegeben werden. Kinder unter sechs Jahren fahren kostenlos mit. Für Fahrräder brauchen Sie in den meisten Regionen eine zusätzliche Fahrradkarte. Das Abo kann man jeden Monat kündigen, spätestens bis zum 10. des Monats."
       },
       {
        "same": true,
        "q": "Wer darf mit dem Ticket fahren?",
        "o": [
         "Nur die Person, die es gekauft hat.",
         "Alle Familienmitglieder.",
         "Jeder, der es dabeihat."
        ],
        "a": 0,
        "why": "„persönliches Abo … kann nicht an andere Personen weitergegeben werden“"
       },
       {
        "q": "Für die Ferienfreizeit muss man nichts bezahlen.",
        "a": false,
        "why": "Sie kostet 180 Euro, mit Familienpass weniger.",
        "text": "Ferienfreizeit an der Nordsee für Jugendliche von 12 bis 16 Jahren\nVom 21. bis 28. Juli fahren wir mit dem Bus nach Cuxhaven. Wir wohnen in einem Jugendgästehaus direkt am Deich, machen eine Wattwanderung und eine Fahrt nach Helgoland. Die Fahrt kostet 180 Euro inklusive Vollpension. Familien mit Familienpass zahlen nur die Hälfte. Anmeldeschluss ist der 31. Mai. Ein Elternabend findet am 10. Juli statt."
       },
       {
        "same": true,
        "q": "Wie viel bezahlen Familien mit Familienpass?",
        "o": [
         "180 Euro.",
         "90 Euro.",
         "Nichts."
        ],
        "a": 1,
        "why": "„nur die Hälfte“ von 180 Euro = 90 Euro"
       },
       {
        "q": "Herr Novak bekommt den ganzen Preis zurück.",
        "a": false,
        "why": "Er bekommt 50 Prozent zurück.",
        "text": "Sehr geehrter Herr Novak,\nvielen Dank für Ihren Antrag auf Entschädigung. Ihr ICE von München nach Berlin am 3. März ist mit 2 Stunden und 10 Minuten Verspätung angekommen. Deshalb erstatten wir Ihnen 50 Prozent des Fahrpreises, also 43,95 Euro. Der Betrag wird innerhalb von zwei Wochen auf Ihr Konto überwiesen. Die Kosten für das Taxi vom Bahnhof nach Hause können wir leider nicht übernehmen, da Sie vor Mitternacht angekommen sind.\nMit freundlichen Grüßen\nIhr Servicecenter Fahrgastrechte"
       },
       {
        "same": true,
        "q": "Warum zahlt das Servicecenter das Taxi nicht?",
        "o": [
         "Er hat keine Quittung geschickt.",
         "Er ist vor 24 Uhr angekommen.",
         "Das Taxi war zu teuer."
        ],
        "a": 1,
        "why": "„da Sie vor Mitternacht angekommen sind“"
       }
      ]
     },
     {
      "t": "Teil 4 – Ein längerer Text",
      "tab": "Teil 4",
      "intro": "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen richtig oder falsch sind.",
      "type": "rf",
      "per": 1,
      "time": 7,
      "text": "Fahrgastrechte bei der Bahn\nWer mit dem Zug fährt und zu spät ankommt, hat in vielen Fällen Anspruch auf Geld zurück. Entscheidend ist dabei nicht die Verspätung des Zuges, sondern die Verspätung am Ziel. Ab 60 Minuten bekommt man 25 Prozent des Fahrpreises zurück, ab 120 Minuten 50 Prozent. Beträge unter vier Euro werden allerdings nicht ausgezahlt.\nIst schon vor der Fahrt klar, dass man mindestens 20 Minuten später ankommen wird, darf man auch einen anderen Zug nehmen – bei einem Sparpreis ist die Zugbindung dann aufgehoben. Man darf dann aber keinen teureren Zug wie den ICE Sprinter nutzen, ohne den Aufpreis zu bezahlen.\nWer wegen eines Zugausfalls nachts nicht mehr nach Hause kommt, kann sich ein Hotel nehmen; die Bahn erstattet angemessene Kosten. Den Antrag auf Entschädigung stellt man im Reisezentrum, per Post oder online, und zwar innerhalb eines Jahres.",
      "items": [
       {
        "q": "Wenn der Zug eine Stunde Verspätung hat, man aber wegen eines Anschlusses pünktlich ankommt, bekommt man Geld zurück.",
        "a": false,
        "why": "Entscheidend ist die Verspätung am Ziel, nicht die des Zuges."
       },
       {
        "q": "Wer nur 3 Euro Entschädigung bekommen würde, bekommt nichts.",
        "a": true,
        "why": "„Beträge unter vier Euro werden … nicht ausgezahlt.“"
       },
       {
        "q": "Den Antrag muss man innerhalb von vier Wochen stellen.",
        "a": false,
        "why": "innerhalb eines Jahres"
       }
      ]
     },
     {
      "t": "Teil 5 – Brief mit Lücken",
      "tab": "Teil 5",
      "intro": "Lesen Sie den Text und schließen Sie die Lücken. Welche Lösung (a, b oder c) passt am besten?",
      "type": "gapmc",
      "per": 1,
      "time": 10,
      "text": "Liebe Frau Brandt,\nleider muss ich Ihnen mitteilen, dass unser Sohn Luka aus dem Fußballverein austreten möchte. Er hat sehr gern bei Ihnen gespielt, und wir sind Ihnen für Ihre Arbeit sehr (1). In diesem Schuljahr hat er aber mehr Unterricht am Nachmittag, (2) er nicht mehr zweimal pro Woche zum Training kommen kann. Außerdem interessiert er sich jetzt mehr (3) Basketball und spielt in der Schul-AG. Hiermit kündige ich deshalb seine Mitgliedschaft (4) Ende des Quartals. Bitte bestätigen Sie mir die Kündigung kurz per E-Mail. Den Mitgliedsbeitrag (5) Sie bitte ab April nicht mehr von meinem Konto ab. Luka möchte sich gern noch von seiner Mannschaft verabschieden. Wäre es möglich, (6) er am letzten Training im März einen Kuchen mitbringt?\nViele Grüße\nSuresh [Nachname]",
      "items": [
       {
        "n": 1,
        "o": [
         "dankbar",
         "zufrieden",
         "froh"
        ],
        "a": 0,
        "why": "jemandem für etwas dankbar sein – mit Dativ „Ihnen“ und „für“"
       },
       {
        "n": 2,
        "o": [
         "deshalb",
         "sodass",
         "denn"
        ],
        "a": 1,
        "why": "Folge im Nebensatz (Verb am Ende: kann) → sodass"
       },
       {
        "n": 3,
        "o": [
         "an",
         "für",
         "über"
        ],
        "a": 1,
        "why": "sich für etwas interessieren"
       },
       {
        "n": 4,
        "o": [
         "zum",
         "am",
         "bis"
        ],
        "a": 0,
        "why": "zum Ende des Quartals kündigen"
       },
       {
        "n": 5,
        "o": [
         "buchen",
         "heben",
         "nehmen"
        ],
        "a": 0,
        "why": "Geld vom Konto abbuchen – trennbar: buchen … ab"
       },
       {
        "n": 6,
        "o": [
         "ob",
         "wenn",
         "dass"
        ],
        "a": 2,
        "why": "Wäre es möglich, dass … – Inhalt der Frage"
       }
      ]
     }
    ]
   },
   {
    "id": "schreiben",
    "de": "Schreiben",
    "en": "Writing",
    "time": 30,
    "parts": [
     {
      "t": "Brief oder E-Mail",
      "intro": "Wählen Sie Aufgabe A oder Aufgabe B. Zeigen Sie, was Sie können. Schreiben Sie möglichst viel. Vergessen Sie nicht die Anrede und den Gruß. Schreiben Sie etwas zu allen vier Punkten.",
      "type": "write",
      "crit": "b1",
      "words": 80,
      "time": 30,
      "task": "Aufgabe A: Sie sind mit dem Zug zu einer Familienfeier gefahren. Der Zug hatte drei Stunden Verspätung, und Sie haben einen Teil der Feier verpasst. Schreiben Sie an das Servicecenter Fahrgastrechte.",
      "points": [
       "Grund für Ihr Schreiben",
       "Was ist passiert?",
       "Welche Folgen hatte das für Sie?",
       "Was erwarten Sie?"
      ],
      "model": "Sehr geehrte Damen und Herren,\nich schreibe Ihnen wegen einer großen Verspätung auf meiner Fahrt von Frankfurt nach Hamburg am 12. Mai.\nMein ICE sollte um 10:15 Uhr in Frankfurt abfahren. Wegen einer Störung an einem Signal stand der Zug über zwei Stunden kurz vor Göttingen. Am Ende bin ich mit drei Stunden und zehn Minuten Verspätung in Hamburg angekommen. Im Zug gab es kaum Informationen, und das Bordrestaurant war geschlossen.\nIch wollte zur Hochzeit meines Cousins fahren. Wegen der Verspätung habe ich die Trauung verpasst. Das hat mich und meine Familie sehr traurig gemacht.\nIch bitte Sie deshalb, mir nach den Fahrgastrechten 50 Prozent des Fahrpreises von 89,90 Euro zu erstatten. Das Ticket und die Bestätigung der Verspätung lege ich bei. Bitte überweisen Sie das Geld auf mein Konto.\nMit freundlichen Grüßen\nSuresh [Nachname]",
      "keys": [
       [
        "verspätung|schreibe|fahrt|zug|ice",
        "Ich schreibe Ihnen wegen einer großen Verspätung auf meiner Fahrt nach Hamburg."
       ],
       [
        "störung|stand|gewartet|stunden|angekommen|ausgefallen|anschluss|information",
        "Der Zug stand zwei Stunden still, und ich bin drei Stunden zu spät angekommen."
       ],
       [
        "feier|hochzeit|geburtstag|verpasst|traurig|familie|zu spät",
        "Ich habe einen großen Teil der Familienfeier verpasst."
       ],
       [
        "erstatt|zurück|prozent|geld|entschädig|überweis|bitte",
        "Bitte erstatten Sie mir 50 Prozent des Fahrpreises."
       ]
      ],
      "alt": {
       "task": "Aufgabe B: Ihr Sohn ist seit zwei Jahren in einem Fußballverein. Jetzt möchte er aufhören. Schreiben Sie an die Trainerin, Frau Brandt.",
       "points": [
        "Grund für Ihr Schreiben",
        "Warum möchte Ihr Sohn aufhören?",
        "Kündigung und Beitrag",
        "Abschied von der Mannschaft"
       ],
       "model": "Liebe Frau Brandt,\nleider muss ich Ihnen mitteilen, dass unser Sohn Arjun nicht mehr im Verein Fußball spielen möchte.\nEr hat in den zwei Jahren sehr gern bei Ihnen trainiert. Aber seit diesem Schuljahr hat er dreimal pro Woche bis 16 Uhr Unterricht und schafft das Training nicht mehr. Außerdem spielt er jetzt lieber Schach im Schachclub.\nHiermit kündige ich seine Mitgliedschaft zum Ende des Quartals, also zum 31. März. Bitte buchen Sie ab April keinen Beitrag mehr von meinem Konto ab und schicken Sie mir eine kurze Bestätigung.\nArjun möchte sich gern von seiner Mannschaft verabschieden. Er würde beim letzten Training im März gern Muffins für alle mitbringen, wenn das in Ordnung ist.\nVielen Dank für alles!\nViele Grüße\nSuresh [Nachname]",
       "keys": [
        [
         "mitteilen|schreibe|aufhören|nicht mehr|verein|sohn",
         "Ich schreibe Ihnen, weil mein Sohn nicht mehr im Verein spielen möchte."
        ],
        [
         "weil|denn|schule|unterricht|zeit|lieber|interess|keine lust",
         "Er hat jetzt mehr Unterricht und möchte lieber Schach spielen."
        ],
        [
         "kündig|mitgliedschaft|beitrag|konto|abbuch|quartal|bestätig",
         "Hiermit kündige ich seine Mitgliedschaft zum Ende des Quartals."
        ],
        [
         "verabschied|abschied|mannschaft|kuchen|muffins|training|letzte",
         "Er möchte sich beim letzten Training von der Mannschaft verabschieden."
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "sprechen",
    "de": "Sprechen",
    "en": "Speaking",
    "time": 16,
    "oral": true,
    "parts": [
     {
      "t": "Teil 1 – Über sich sprechen",
      "tab": "Teil 1",
      "intro": "Stellen Sie sich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen. Danach fragt die Prüferin nach.",
      "type": "speak",
      "max": 20,
      "time": 4,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Guten Tag. Wir möchten Sie gern kennenlernen. Würden Sie sich bitte vorstellen? Hier sind einige Stichpunkte: Name, Geburtsort, Wohnort, Arbeit oder Beruf, Familie und Sprachen."
       },
       {
        "you": "Stell dich vor: Name, Geburtsort, Wohnort, Arbeit/Beruf, Familie, Sprachen.",
        "min": 30,
        "key": [
         [
          "heiße|name ist|ich bin [A-ZÄÖÜ]",
          "Name"
         ],
         [
          "geboren|komme aus",
          "Geburtsort"
         ],
         [
          "wohne",
          "Wohnort"
         ],
         [
          "arbeite|beruf|bin .*(ingenieur|lehrer|student|entwickler|koch|verkäufer|pfleger)",
          "Arbeit/Beruf"
         ],
         [
          "verheiratet|kinder|frau|mann|familie|ledig|tochter|sohn",
          "Familie"
         ],
         [
          "spreche|sprache",
          "Sprachen"
         ]
        ],
        "model": "Ich heiße Suresh [Nachname]. Ich bin in Indien geboren, in Chennai. Jetzt wohne ich in Frankfurt. Ich arbeite als Ingenieur in einer IT-Firma. Ich bin verheiratet und habe [Familie]. Ich spreche Tamil, Englisch und ein bisschen Deutsch."
       },
       {
        "who": "Prüferin",
        "say": "Vielen Dank. Und jetzt Sie, bitte."
       },
       {
        "who": "Anna",
        "say": "Ich heiße Anna Kowalska und bin in Polen geboren, in Danzig. Seit vier Jahren wohne ich in Offenbach. Ich arbeite als Verkäuferin in einer Bäckerei. Ich bin verheiratet und habe einen Sohn. Ich spreche Polnisch, Deutsch und ein bisschen Englisch."
       },
       {
        "who": "Prüferin",
        "say": "Wo waren Sie zuletzt im Urlaub? Erzählen Sie bitte."
       },
       {
        "you": "Erzähl von deinem letzten Urlaub.",
        "min": 15,
        "key": [
         [
          "urlaub|reise|gefahren|geflogen|besucht|war|waren",
          "Urlaub"
         ],
         [
          "meer|berge|stadt|hotel|familie|strand|gesehen|gemacht",
          "Was gemacht"
         ]
        ],
        "model": "Letzten Sommer waren wir eine Woche in Österreich, am Wolfgangsee. Wir sind mit dem Zug gefahren und haben in einer kleinen Pension gewohnt. Wir sind viel gewandert und einmal mit dem Schiff über den See gefahren."
       },
       {
        "who": "Prüferin",
        "say": "Was machen Sie am Wochenende am liebsten?"
       },
       {
        "you": "Sag, was du am Wochenende gern machst – mit Grund.",
        "min": 12,
        "key": [
         [
          "wochenende|samstag|sonntag|gern|am liebsten|spiele|gehe|treffe",
          "Freizeit"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Am Wochenende gehe ich am liebsten mit meiner Familie in den Park, weil ich in der Woche wenig Zeit für sie habe. Sonntags koche ich oft indisch für Freunde."
       }
      ]
     },
     {
      "t": "Teil 2 – Über Erfahrungen sprechen",
      "tab": "Teil 2",
      "intro": "Thema: Reisen und Verkehr. Beschreiben Sie Ihr Foto. Dann erzählen Sie von Ihren Erfahrungen und sagen Ihre Meinung.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil zwei. Sie haben in einer Zeitschrift ein Foto gefunden. Berichten Sie Ihrer Gesprächspartnerin kurz: Was sehen Sie auf dem Foto? Was für eine Situation zeigt dieses Bild?"
       },
       {
        "you": "Beschreib dein Foto: Was siehst du? Was für eine Situation ist das?",
        "photo": {
         "src": "fotos/b1-16.jpg",
         "alt": "Ein großer Bahnhof mit Glasdach: Viele Reisende mit Koffern und Rucksäcken gehen auf dem Bahnsteig neben einem Zug entlang.",
         "by": "Christian Lue",
         "link": "https://unsplash.com/photos/eine-gruppe-von-menschen-mit-gepack-geht-auf-einen-zug-zu-HNQVmX1ztKM"
        },
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "bahnhof|bahnsteig|zug|gleis|menschen|reisende|leute|koffer|rucksack|dach|voll",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen großen Bahnhof mit einem Glasdach. Auf dem Bahnsteig gehen viele Reisende mit Koffern und Rucksäcken neben einem Zug entlang. Es ist ziemlich voll. Ich glaube, es ist Ferienzeit, und viele Leute fahren in den Urlaub."
       },
       {
        "who": "Anna",
        "say": "Auf meinem Foto sieht man eine Familie in einem Zugabteil. Die Kinder spielen Karten, und die Eltern lesen. Alle sind entspannt."
       },
       {
        "who": "Prüferin",
        "say": "Danke. Erzählen Sie bitte: Welche Erfahrungen haben Sie mit der Bahn oder mit Reisen in Deutschland gemacht?"
       },
       {
        "you": "Erzähl von deinen Erfahrungen (2–3 Sätze).",
        "min": 15,
        "key": [
         [
          "\\bich\\b|\\bwir\\b",
          "persönlich"
         ],
         [
          "bahn|zug|verspätung|ausgefallen|gefahren|reise|ticket|flug|bus|pünktlich",
          "zum Thema"
         ]
        ],
        "model": "Ich fahre oft mit der Bahn, um Freunde in Berlin zu besuchen. Einmal ist mein Zug ausgefallen, und ich bin erst um zwei Uhr nachts angekommen. Aber ich habe einen Teil des Geldes zurückbekommen."
       },
       {
        "who": "Prüferin",
        "say": "Wie ist das in Ihrem Heimatland? Wie reisen die Menschen dort? Was ist Ihre Meinung?"
       },
       {
        "you": "Vergleiche mit deinem Heimatland und sag deine Meinung – mit Grund.",
        "min": 20,
        "key": [
         [
          "in meinem (heimat)?land|bei uns|in indien|in deutschland|dort|hier",
          "Vergleich"
         ],
         [
          "meiner meinung|ich finde|ich denke|ich glaube|für mich|mir gefällt",
          "Meinung"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "In Indien reisen sehr viele Menschen mit dem Zug, weil es billig ist. Die Züge sind oft sehr voll, und man muss Wochen vorher buchen. Ich finde die Bahn in Deutschland bequemer, aber sie sollte pünktlicher sein, weil man sich sonst nicht auf sie verlassen kann."
       },
       {
        "who": "Anna",
        "say": "Das stimmt. In Polen sind die Züge inzwischen oft pünktlicher als hier."
       }
      ]
     },
     {
      "t": "Teil 3 – Gemeinsam etwas planen",
      "tab": "Teil 3",
      "intro": "Situation: Sie möchten mit Ihrem Deutschkurs am Ende des Semesters einen Tagesausflug machen. Sie und Ihre Kursnachbarin sollen den Ausflug planen. Planen Sie zusammen mit Ihrer Partnerin. Ideen: Wohin? · Wie hinkommen? · Was kostet es? · Essen?.",
      "type": "speak",
      "max": 40,
      "time": 6,
      "turns": [
       {
        "who": "Prüferin",
        "say": "Teil drei. Sie möchten mit Ihrem Deutschkurs am Ende des Semesters einen Tagesausflug machen. Sie und Ihre Kursnachbarin sollen den Ausflug planen. Planen Sie, was Sie tun möchten. Hier sind einige Ideen: Wohin? · Wie hinkommen? · Was kostet es? · Essen?. Anna, bitte beginnen Sie."
       },
       {
        "who": "Anna",
        "say": "Wie wäre es mit einem Ausflug an den Rhein? Wir könnten eine Schifffahrt machen."
       },
       {
        "you": "Reagiere auf Annas Vorschlag – stimm zu oder schlag etwas anderes vor, mit Grund.",
        "min": 10,
        "key": [
         [
          "gute idee|einverstanden|okay|lieber|das finde ich|ja|nein|das passt|super|toll|klingt gut|genau",
          "Reaktion"
         ],
         [
          "\\b(weil|denn|deshalb|darum|da|wenn)\\b",
          "Begründung"
         ]
        ],
        "model": "Die Schifffahrt ist schön, aber sie kostet bestimmt viel. Ich würde lieber mit dem Zug hinfahren und zu einer Burg wandern, weil viele im Kurs das Deutschlandticket haben – dann kostet die Fahrt nichts extra."
       },
       {
        "who": "Anna",
        "say": "Gute Idee. Und was machen wir mit dem Essen?"
       },
       {
        "you": "Mach einen eigenen Vorschlag.",
        "min": 8,
        "key": [
         [
          "wie wäre|wir könnten|ich schlage vor|lass uns|was hältst|vielleicht|sollen wir|hast du lust|wollen wir",
          "Vorschlag"
         ],
         [
          "ausflug|rhein|schiff|zug|bahn|bus|ticket|deutschlandticket|euro|kosten|picknick|essen|restaurant|burg|museum",
          "zum Plan"
         ]
        ],
        "model": "Wir könnten ein Picknick machen. Jeder bringt etwas aus seinem Land mit – das ist günstig und interessant. Was hältst du davon?"
       },
       {
        "who": "Anna",
        "say": "Super. Wer kümmert sich um was?"
       },
       {
        "you": "Antworte und kläre, wer was macht.",
        "min": 8,
        "key": [
         [
          "ich kann|ich mache|ich kümmere|ich bringe|ich übernehme|ich rufe|ich frage|ich schreibe|du kannst|du machst|kannst du",
          "Aufgaben verteilen"
         ]
        ],
        "model": "Ich suche die Zugverbindung raus und frage, wer kein Deutschlandticket hat. Kannst du mit der Lehrerin sprechen und eine Liste für das Picknick machen?"
       },
       {
        "who": "Anna",
        "say": "Gut. Fassen wir zusammen – was haben wir jetzt geplant?"
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
          "ausflug|rhein|schiff|zug|bahn|bus|ticket|deutschlandticket|euro|kosten|picknick|essen|restaurant|burg|museum",
          "Plan"
         ]
        ],
        "model": "Also, wir fahren mit dem Zug an den Rhein und wandern zu einer Burg. Zum Essen machen wir ein Picknick, jeder bringt etwas aus seinem Land mit. Ich organisiere die Fahrt, und du sprichst mit der Lehrerin und machst die Liste fürs Essen."
       },
       {
        "who": "Anna",
        "say": "Prima, so machen wir das!"
       }
      ]
     }
    ]
   }
  ]
 }
];
