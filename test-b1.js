/* Modelltests B1 for test.js: nine whole exams in the format of the
   telc Deutsch-Test für Zuwanderer (DTZ, A2–B1): Hören 4 Teile (20 Aufgaben),
   Lesen 5 Teile (25), Schreiben (Aufgabe A oder B), Sprechen 3 Teile.
   Each question with its answer key (a = index into o / list, -1 = x;
   rf and mix items with true/false: true = richtig) and why.
   level: leicht / mittel / schwer – three each, in that order (measured: text
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
        "audio": "Hallo Herr Moreau, hier ist Elektro Hansen. Unser Techniker kommt morgen zwischen 8 und 12 Uhr, um Ihre Waschmaschine anzuschließen. Bitte sind Sie zu Hause."
       },
       {
        "q": "Was ist heute im Supermarkt billiger?",
        "o": [
         "Kaffee.",
         "Fleisch.",
         "Obst und Gemüse."
        ],
        "a": 0,
        "audio": "Liebe Kunden, heute bei uns im Angebot: alle Kaffeesorten 20 Prozent günstiger. Greifen Sie zu – nur heute!"
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
        "audio": "Morgen Vormittag gibt es im ganzen Land dichten Nebel. Autofahrer sollten vorsichtig sein. Am Nachmittag scheint dann die Sonne."
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
        "audio": "Zum zehnten Geburtstag des Stadtmuseums gibt es am Wochenende für alle Besucher kostenlose Führungen. Treffpunkt ist jede Stunde im Eingangsbereich."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: ⚽ ein Park im Sommer: eine Familie macht ein Picknick, Kinder spielen Fußball, ein Hund läuft – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "park|familie|picknick|kinder|fußball|hund|sommer",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Park im Sommer. Eine Familie sitzt auf einer Decke und macht ein Picknick. Die Kinder spielen Fußball, und ein Hund läuft herum. Ich glaube, es ist Sonntag, und alle haben frei."
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
        "audio": "Guten Tag, Frau Nguyen, hier ist die Praxis Doktor Hahn. Ihr Termin ist morgen um 9 Uhr 30. Bitte denken Sie an Ihre Versichertenkarte. Bis morgen."
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
        "audio": "Willkommen bei „Gesund leben“. Viele Menschen schlafen schlecht. Heute erklärt Ihnen ein Arzt, was Sie selbst für einen ruhigen Schlaf tun können."
       },
       {
        "q": "Wie ist das Wetter am Wochenende?",
        "o": [
         "Regnerisch und kühl.",
         "Sonnig und warm.",
         "Es gibt Gewitter."
        ],
        "a": 1,
        "audio": "Und das Wetter am Wochenende: viel Sonne bei bis zu 26 Grad. Erst am Montag kommen Wolken und etwas Regen."
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
        "audio": "Das Gesundheitsamt bietet im Oktober kostenlose Impfungen für Kinder an. Eltern können ohne Termin kommen, bitte bringen Sie den Impfpass mit."
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
        "audio": "Frau: Praxis Doktor Lang, guten Tag.\nMann: Guten Tag, hier ist Yusuf Demir. Ich brauche einen Termin, ich habe seit drei Tagen Fieber.\nFrau: Heute ist leider alles voll. Aber Sie können in die offene Sprechstunde kommen, von 11 bis 12 Uhr.\nMann: Dann komme ich um elf. Muss ich etwas mitbringen?\nFrau: Nur Ihre Versichertenkarte."
       },
       {
        "q": "Was macht der Mann?",
        "o": [
         "Er ruft später noch einmal an.",
         "Er kommt in die offene Sprechstunde.",
         "Er bekommt morgen einen Termin."
        ],
        "a": 1,
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 🩺 ein Wartezimmer beim Arzt: viele Leute warten, ein Kind weint, eine Frau liest eine Zeitschrift – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "warte|arzt|leute|kind|frau|zeitschrift|praxis",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich ein Wartezimmer in einer Arztpraxis. Viele Leute sitzen und warten. Ein kleines Kind weint, und eine Frau liest eine Zeitschrift. Ich glaube, sie warten schon lange, weil alle müde aussehen."
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
        "audio": "Information zu Flug LH 456 nach Istanbul: Der Abflug verzögert sich um etwa 30 Minuten. Bitte bleiben Sie in der Nähe von Gate B 22."
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
        "audio": "Willkommen bei „Urlaub vor der Haustür“. Heute stellen wir Ihnen schöne Ausflugsziele in Deutschland vor, die Sie gut mit der Bahn erreichen."
       },
       {
        "q": "Wie wird das Wetter an der Küste?",
        "o": [
         "Sonnig, aber windig.",
         "Regnerisch.",
         "Neblig."
        ],
        "a": 0,
        "audio": "Das Wetter für das Wochenende: An der Nord- und Ostsee scheint die Sonne, aber es weht ein starker Wind. Im Süden gibt es Gewitter."
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
        "audio": "Am Samstagabend ist das große Lichterfest am Mainufer. Um 22 Uhr gibt es ein Feuerwerk. Kommen Sie am besten mit Bus und Bahn."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 🎉 eine große Familie an einem langen Tisch, viel Essen, Kinder mit Luftballons, eine Torte mit Kerzen – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "familie|tisch|essen|kinder|luftballon|torte|kerzen|geburtstag|fest",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich eine große Familie an einem langen Tisch. Es gibt viel Essen, und auf dem Tisch steht eine Torte mit Kerzen. Die Kinder haben Luftballons. Ich glaube, jemand hat Geburtstag."
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
        "audio": "Achtung an Gleis 4: Der Regionalexpress nach Kassel fällt heute leider aus. Bitte nehmen Sie den nächsten Zug um 10 Uhr 15 von Gleis 6."
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
        "audio": "Heute in „Neu hier“: Menschen, die in den letzten Jahren in unsere Stadt gezogen sind, erzählen, wie sie sich eingelebt haben und was ihnen geholfen hat."
       },
       {
        "q": "Wie wird das Wetter heute Abend?",
        "o": [
         "Es schneit.",
         "Es wird sonnig.",
         "Es gibt Gewitter."
        ],
        "a": 2,
        "audio": "Das Wetter: Heute Vormittag noch sonnig und heiß. Ab dem Abend ziehen von Westen starke Gewitter auf. Bitte bleiben Sie dann möglichst im Haus."
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
        "audio": "Am Samstag lädt die Stadt zum Tag der offenen Tür ins Rathaus ein. Besucher können das Büro der Bürgermeisterin besichtigen und mit den Mitarbeitern sprechen."
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
        "same": true
       },
       {
        "q": "Der Mann lebt seit acht Monaten in Deutschland.",
        "a": true,
        "audio": "Mann: Guten Tag, ich möchte meinen Führerschein umschreiben lassen. Ich habe einen indischen Führerschein.\nFrau: Wie lange leben Sie schon in Deutschland?\nMann: Seit acht Monaten.\nFrau: Dann müssen Sie leider eine Prüfung machen. Melden Sie sich am besten bei einer Fahrschule an."
       },
       {
        "q": "Was muss der Mann tun?",
        "o": [
         "Nichts – er kann einfach fahren.",
         "Ein Formular online schicken.",
         "Sich bei einer Fahrschule anmelden."
        ],
        "a": 2,
        "same": true
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
        "same": true
       },
       {
        "q": "Der Mann soll 30 Euro bezahlen.",
        "a": true,
        "audio": "Mann: Guten Tag, ich habe einen Brief von der Stadt bekommen. Ich soll 30 Euro zahlen, weil ich falsch geparkt habe.\nFrau: Zeigen Sie mal. Ja, Sie haben im Halteverbot gestanden.\nMann: Aber dort war kein Schild!\nFrau: Dann können Sie schriftlich Widerspruch einlegen. Machen Sie am besten ein Foto von der Straße."
       },
       {
        "q": "Was empfiehlt die Frau?",
        "o": [
         "Sofort bezahlen.",
         "Einen Anwalt anrufen.",
         "Schriftlich Widerspruch einlegen."
        ],
        "a": 2,
        "same": true
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
        "you": "Dein Foto: 🚲 eine Straße in der Stadt: viele Fahrräder, ein Bus an der Haltestelle, Autos im Stau – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "fahrrad|bus|auto|stau|straße|haltestelle|stadt",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sieht man eine Straße in einer großen Stadt. Viele Leute fahren Fahrrad, und an der Haltestelle steht ein Bus. Die Autos stehen im Stau. Vielleicht ist es morgens, und alle fahren zur Arbeit."
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
        "audio": "Hallo, hier ist die Abfallberatung. Ihr Termin für die Sperrmüll-Abholung ist am Donnerstag, den 12. Bitte stellen Sie die Sachen erst am Abend vorher an die Straße."
       },
       {
        "q": "Was ist im Haus kaputt?",
        "o": [
         "Die Haustür.",
         "Der Aufzug.",
         "Die Heizung."
        ],
        "a": 1,
        "audio": "Liebe Mieter, hier spricht der Hausmeister. Der Aufzug ist leider kaputt. Der Techniker kommt morgen. Bitte benutzen Sie bis dahin die Treppe."
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
        "audio": "Hier ist „Grün leben“. Heute zeigen wir Ihnen, wie Sie zu Hause weniger Müll machen – beim Einkaufen, in der Küche und im Bad."
       },
       {
        "q": "Wie wird das Wetter am Nachmittag?",
        "o": [
         "Es wird heiß.",
         "Es hört auf zu regnen.",
         "Es schneit."
        ],
        "a": 1,
        "audio": "Das Wetter: Am Vormittag noch Regen, am Nachmittag wird es trocken und die Sonne kommt heraus. Höchstwerte 18 Grad."
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
        "audio": "Die Aktion „Saubere Stadt“ sucht Helfer: Am Samstag sammeln wir gemeinsam Müll im Stadtpark. Handschuhe und Säcke bekommen Sie vor Ort."
       },
       {
        "q": "Was gibt es bei den Stadtwerken?",
        "o": [
         "Billigere Busfahrkarten.",
         "Einen Tag der offenen Tür.",
         "Kostenlose Energieberatung."
        ],
        "a": 2,
        "audio": "Hohe Stromrechnung? Die Stadtwerke bieten ab sofort eine kostenlose Energieberatung an. Ein Berater kommt zu Ihnen nach Hause und zeigt, wo Sie sparen können."
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
        "audio": "Frau: Entschuldigung, Herr Krämer, darf ich Sie kurz stören?\nMann: Natürlich, Frau Lopez.\nFrau: Ihr Hund bellt jeden Tag, wenn Sie bei der Arbeit sind. Mein Baby kann dann nicht schlafen.\nMann: Oh, das wusste ich nicht. Das tut mir leid. Ich frage meine Schwester, ob sie mittags mit ihm spazieren gehen kann."
       },
       {
        "q": "Was will Herr Krämer tun?",
        "o": [
         "Zu Hause arbeiten.",
         "Seine Schwester fragen.",
         "Den Hund verkaufen."
        ],
        "a": 1,
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: ♻️ Mülltonnen in verschiedenen Farben im Hof, ein Mann wirft eine Flasche in den Glascontainer, daneben liegen Säcke – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "müll|tonne|container|flasche|glas|mann|säcke|hof",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich viele Mülltonnen in verschiedenen Farben. Ein Mann wirft eine Flasche in den Glascontainer. Daneben liegen Müllsäcke. Ich glaube, das ist im Hof von einem Wohnhaus."
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
        "audio": "Hallo Ben, hier ist Lisa. Ich bin krank und kann heute nicht zur Arbeit kommen. Kannst du bitte um zehn die Besprechung mit dem Kunden übernehmen? Danke dir!"
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
        "audio": "Das Wetter für Montag: viel Wind und kühle 12 Grad, zwischendurch kurze Schauer. Ab Mittwoch wird es wieder freundlicher."
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
        "audio": "Am Wochenende findet in der Stadthalle die große Ausbildungsmesse statt. Über 100 Firmen stellen ihre Ausbildungsplätze vor. Der Eintritt ist frei."
       },
       {
        "q": "Was bietet die Volkshochschule an?",
        "o": [
         "Sprachkurse für Kinder.",
         "Reisen ins Ausland.",
         "Kostenlose Computerkurse für Arbeitsuchende."
        ],
        "a": 2,
        "audio": "Die Volkshochschule bietet ab Februar kostenlose Computerkurse für Arbeitsuchende an. Anmelden können Sie sich bei Ihrer Beraterin im Jobcenter."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 💼 ein Büro: eine Frau arbeitet am Computer, ein Mann telefoniert, auf dem Tisch stehen Kaffeetassen und Akten – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "büro|computer|telefon|frau|mann|kaffee|akten|arbeit",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich ein Büro. Eine Frau arbeitet am Computer, und ein Mann telefoniert. Auf dem Tisch stehen Kaffeetassen und viele Akten. Ich glaube, sie haben viel Stress, weil sie so viel Arbeit haben."
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
        "audio": "Die Verkehrsmeldungen: Auf der B3 bei Friedberg gibt es wegen einer Baustelle nur eine Spur. Rechnen Sie mit zehn Minuten Verspätung. Auf allen anderen Straßen ist der Verkehr frei."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 🧺 ein Wochenmarkt: Stände mit Obst und Gemüse, eine Frau mit Kind kauft Äpfel, viele Leute – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "markt|obst|gemüse|stand|äpfel|leute|frau|kind",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Wochenmarkt. Es gibt viele Stände mit Obst und Gemüse. Eine Frau kauft mit ihrem Kind Äpfel. Ich glaube, es ist Samstagvormittag, weil so viele Leute da sind."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 🚲 eine Straße im Regen: eine Frau fährt mit dem Fahrrad zur Arbeit, neben ihr stehen viele Autos im Stau, sie trägt eine Regenjacke – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "fahrrad|frau|regen|stau|auto|straße|jacke|arbeit",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sieht man eine Straße in der Stadt. Es regnet, und viele Autos stehen im Stau. Eine Frau fährt mit dem Fahrrad an den Autos vorbei, sie trägt eine Regenjacke. Ich glaube, sie fährt morgens zur Arbeit und ist schneller als die Autos."
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
        "same": true
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
        "same": true
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
        "same": true
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
        "same": true
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
        "you": "Dein Foto: 💻 ein Büro: ein Mann sitzt krumm vor dem Bildschirm und hält sich den Rücken, auf dem Tisch stehen Kaffeetassen, draußen ist es dunkel – Beschreib es: Was siehst du? Was für eine Situation ist das?",
        "min": 25,
        "key": [
         [
          "auf dem foto|auf dem bild|ich sehe|man sieht|es gibt",
          "Foto beschreiben"
         ],
         [
          "büro|mann|bildschirm|computer|rücken|kaffee|dunkel|abend|schreibtisch",
          "was zu sehen ist"
         ],
         [
          "vielleicht|ich glaube|wahrscheinlich|situation|sieht .* aus",
          "Situation vermuten"
         ]
        ],
        "model": "Auf dem Foto sehe ich einen Mann in einem Büro. Er sitzt vor einem Computer und hält sich den Rücken – ich glaube, er hat Schmerzen. Auf dem Tisch stehen viele Kaffeetassen, und draußen ist es schon dunkel. Wahrscheinlich arbeitet er schon sehr lange und macht keine Pausen."
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
 }
];
