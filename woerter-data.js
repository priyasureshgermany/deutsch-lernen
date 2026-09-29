/* Paragraphs for "Wörter erkennen", every word tagged by hand.

   One topic → an A1 and a B1 paragraph → sentences of [tokens, English].
   Tokens are separated by "~"; each is  word|POS|CASE|ROLE|lemma|English|why
   with trailing fields optional and lemma empty when it is the word itself.
   A token without "|" is punctuation and sticks to the word before it.

   POS   (with an optional .subtype where the tags cannot tell: V.hilf,
         P.refl, P.rel, P.dem — see woerter-lex.js)
         N noun · V finite verb · VT other verb part (infinitive, participle,
         separable prefix) · P pronoun · A article / determiner · J adjective ·
         ADV adverb · PR preposition · PA preposition fused with article (am,
         im, zum…) · K conjunction · Z numeral · T particle (nicht, zu, nur)
   CASE  N/A/D/G + gender m/f/n or p for plural (e.g. "Dm"); pronouns may give
         the case alone
   ROLE  S subject · P predicate · AO accusative object · DO dative object ·
         GA genitive attribute · AB adverbial · PO prepositional object ·
         PN predicative · AT attribute · K connector

   tools/check-woerter.mjs fails unless every paragraph uses every POS group
   and all four cases. */
window.WD = [
{de:"Familie", en:"Family", p:[
{lvl:"A1", s:[
[`Ich|P|N|S|ich|I ~ heiße|V||P|heißen|am called ~ Lena|N|Nf|PN||Lena (name)|After "heißen" the name is in the nominative, like after "sein". ~ und|K||K||and|Joins two main clauses; word order stays normal. ~ komme|V||P|kommen|come ~ aus|PR||AB||from|"aus" always takes the dative. ~ Spanien|N|Dn|AB||Spain|Dative after "aus". Most country names have no article. ~ .`,
 "My name is Lena and I come from Spain."],
[`Heute|ADV||AB||today|Adverb of time: Wann? When? ~ wohne|V||P|wohnen|live|The verb stays in position 2, so the subject moves behind it. ~ ich|P|N|S|ich|I|The subject comes after the verb because "Heute" takes position 1. ~ mit|PR||AB||with|"mit" always takes the dative. ~ meinem|A|Dm|AB|mein|my|Possessive article, dative masculine: mein → meinem. ~ Mann|N|Dm|AB||husband ~ in|PR||AB||in|Two-way preposition: Wo? (where) → dative. ~ Berlin|N|Dn|AB||Berlin ~ .`,
 "Today I live with my husband in Berlin."],
[`Wir|P|N|S|wir|we ~ haben|V||P||have ~ zwei|Z||AO||two ~ Kinder|N|Ap|AO|Kind|children|Was haben wir? → accusative object. das Kind → die Kinder. ~ : ~ einen|A|Am|AO|ein|a|Indefinite article, accusative masculine: ein → einen. ~ Sohn|N|Am|AO||son ~ und|K||K||and ~ eine|A|Af|AO|ein|a|Accusative feminine looks like the nominative: eine. ~ Tochter|N|Af|AO||daughter ~ .`,
 "We have two children: a son and a daughter."],
[`Am|PA|Dm|AB|an + dem|on|am = an + dem. Days of the week take "am" → dative. ~ Sonntag|N|Dm|AB||Sunday ~ besuchen|V||P||visit ~ wir|P|N|S|wir|we ~ oft|ADV||AB||often|Adverb of frequency: Wie oft? How often? ~ die|A|Ap|AO|der|the|Definite article, accusative plural: die. ~ Eltern|N|Ap|AO||parents|Wen besuchen wir? Whom do we visit? → accusative object. ~ meines|A|Gm|GA|mein|my|Wessen Eltern? Whose parents? → genitive masculine: mein → meines. ~ Mannes|N|Gm|GA|Mann|husband's|Masculine nouns add -es/-s in the genitive: der Mann → des Mannes. ~ .`,
 "On Sundays we often visit my husband's parents."],
[`Meine|A|Nf|S|mein|my ~ Schwiegermutter|N|Nf|S||mother-in-law|Wer kocht? Who cooks? → subject, always nominative. ~ kocht|V||P|kochen|cooks ~ immer|ADV||AB||always ~ ein|A|An|AO||a|Accusative neuter looks like the nominative: ein. ~ leckeres|J|An|AO|lecker|delicious|Adjective after "ein", neuter accusative: ending -es. ~ Essen|N|An|AO||meal|Was kocht sie? What does she cook? → accusative object. ~ .`,
 "My mother-in-law always cooks a delicious meal."],
[`Ich|P|N|S|ich|I ~ bringe|V||P|mitbringen|bring|Separable verb "mitbringen": bringe … mit. ~ ihr|P|Df|DO|sie|her|Wem bringe ich Blumen mit? To whom? → dative object (sie → ihr). ~ gern|ADV||AB||gladly|verb + "gern" = to like doing something. ~ Blumen|N|Ap|AO|Blume|flowers|Was bringe ich mit? → accusative object. ~ mit|VT||P|mitbringen|(along)|Prefix of the separable verb; it goes to the end of the sentence. ~ .`,
 "I like to bring her flowers."],
[`Nach|PR||AB||after|"nach" always takes the dative. ~ dem|A|Dn|AB|der|the|Dative neuter: das → dem. ~ Essen|N|Dn|AB||meal ~ spielen|V||P||play ~ die|A|Np|S|der|the ~ Kinder|N|Np|S|Kind|children|Wer spielt? → subject. It comes after the verb because "Nach dem Essen" takes position 1. ~ im|PA|Dm|AB|in + dem|in the|im = in + dem. Wo? → dative. ~ Garten|N|Dm|AB||garden ~ .`,
 "After the meal the children play in the garden."],
[`Mein|A|Nm|S|mein|my|Nominative masculine: mein, with no ending. ~ Mann|N|Nm|S||husband ~ kocht|V||P|kochen|cooks ~ nicht|T||AB||not|Negation particle: it negates "gern kochen". ~ gern|ADV||AB||gladly ~ , ~ aber|K||K||but ~ er|P|Nm|S|er|he ~ spült|V||P|spülen|washes up ~ das|A|An|AO|der|the|Accusative neuter looks like the nominative: das. ~ Geschirr|N|An|AO||dishes|Was spült er? → accusative object. ~ .`,
 "My husband doesn't like cooking, but he washes the dishes."]
]},
{lvl:"B1", s:[
[`Seit|PR||AB||since|"seit" always takes the dative. ~ meiner|A|Df|AB|mein|my|Dative feminine: meine → meiner. ~ Hochzeit|N|Df|AB||wedding ~ vor|PR||AB||ago|"vor" + a time (Wann?) → dative. ~ fünf|Z||AB||five ~ Jahren|N|Dp|AB|Jahr|years|Dative plural: the noun adds -n (die Jahre → den Jahren). ~ lebe|V||P|leben|live ~ ich|P|N|S|ich|I ~ mit|PR||AB||with|"mit" + dative. ~ meiner|A|Df|AB|mein|my ~ Familie|N|Df|AB||family ~ in|PR||AB||in|Two-way preposition: Wo? → dative. ~ einer|A|Df|AB|ein|a|Dative feminine: eine → einer. ~ ruhigen|J|Df|AB|ruhig|quiet|Adjective after "einer" in the dative: ending -en. ~ Gegend|N|Df|AB||area ~ am|PA|Dm|AT|an + dem|on the|am = an + dem. Wo? → dative. ~ Stadtrand|N|Dm|AT||edge of town ~ .`,
 "Since my wedding five years ago, I have lived with my family in a quiet area on the edge of town."],
[`Obwohl|K||K||although|Subordinating conjunction: the verb goes to the end ("sind"). ~ mein|A|Nm|S|mein|my ~ Mann|N|Nm|S||husband ~ und|K||K||and ~ ich|P|N|S|ich|I ~ beide|P|Np|S||both ~ berufstätig|J||PN||employed|Predicative adjective after "sein": no ending. ~ sind|V||P|sein|are|In a subordinate clause the conjugated verb comes last. ~ , ~ verbringen|V||P||spend|After a subordinate clause, the main clause starts with its verb. ~ wir|P|N|S|wir|we ~ die|A|Ap|AO|der|the ~ Abende|N|Ap|AO|Abend|evenings|Was verbringen wir? → accusative object. ~ meistens|ADV||AB||usually ~ zusammen|ADV||AB||together ~ .`,
 "Although my husband and I both work, we usually spend the evenings together."],
[`Die|A|Np|S|der|the ~ Großeltern|N|Np|S||grandparents|Wer wohnt nicht in der Nähe? → subject. ~ unserer|A|Gp|GA|unser|our|Wessen Großeltern? Whose? → genitive plural: unsere → unserer. ~ Kinder|N|Gp|GA|Kind|children's|Genitive plural: die Kinder → der Kinder (no ending on the noun). ~ wohnen|V||P||live ~ leider|ADV||AB||unfortunately|Comment adverb: shows the speaker's feeling. ~ nicht|T||AB||not ~ in|PR||AB||in|Wo? → dative. ~ der|A|Df|AB|der|the|Dative feminine: die → der. ~ Nähe|N|Df|AB||vicinity|"in der Nähe" = nearby. ~ , ~ deshalb|ADV||AB||therefore|Linking adverb: the verb follows straight after it (position 2). ~ telefonieren|V||P||phone ~ wir|P|N|S|wir|we ~ jeden|A|Am|AB|jeder|every|A time phrase without a preposition is in the accusative: jeden Sonntag. ~ Sonntag|N|Am|AB||Sunday ~ mit|PR||PO||with|"telefonieren mit" + dative. ~ ihnen|P|Dp|PO|sie|them|Pronoun in the dative plural: sie → ihnen. ~ .`,
 "Our children's grandparents unfortunately don't live nearby, so we phone them every Sunday."],
[`Meine|A|Nf|S|mein|my ~ Schwester|N|Nf|S||sister ~ hat|V.hilf||P|haben|has|Auxiliary verb for the perfect tense. ~ mir|P|D|DO|ich|me|"helfen" always takes the dative: Wem hat sie geholfen? ~ letzte|J|Af|AB|letzt|last|Time phrase in the accusative: letzte Woche (adjective without article, feminine -e). ~ Woche|N|Af|AB||week ~ geholfen|VT||P|helfen|helped|Past participle at the end (perfect: hat … geholfen). ~ , ~ einen|A|Am|AO|ein|a|Accusative masculine: ein → einen. ~ neuen|J|Am|AO|neu|new|Adjective after "einen": ending -en. ~ Kindergartenplatz|N|Am|AO||kindergarten place|Was finden? → accusative object in the infinitive clause. ~ für|PR||AB||for|"für" always takes the accusative. ~ unseren|A|Am|AB|unser|our|Accusative masculine: unser → unseren. ~ Sohn|N|Am|AB||son ~ zu|T||P||to|"zu" + infinitive (infinitive clause). ~ finden|VT||P||find|Infinitive at the end of the infinitive clause. ~ .`,
 "Last week my sister helped me find a new kindergarten place for our son."],
[`Wenn|K||K||when|Subordinating conjunction: the verb goes to the end. ~ die|A|Np|S|der|the ~ Kinder|N|Np|S|Kind|children ~ im|PA|Dn|AB|in + dem|in (the)|Wo? → dative. ~ Bett|N|Dn|AB||bed ~ sind|V||P|sein|are ~ , ~ erzählen|V||P||tell ~ wir|P|N|S|wir|we ~ uns|P.refl|D|DO|wir|each other|Reciprocal: wir erzählen uns (dative) = we tell each other. ~ von|PR||PO||about|"erzählen von" + dative. ~ unserem|A|Dm|PO|unser|our|Dative masculine: unser → unserem. ~ Tag|N|Dm|PO||day ~ .`,
 "When the children are in bed, we tell each other about our day."]
]}
]},

{de:"Wohnen", en:"Housing", p:[
{lvl:"A1", s:[
[`Meine|A|Nf|S|mein|my ~ Wohnung|N|Nf|S||flat ~ ist|V||P|sein|is ~ klein|J||PN||small|Predicative adjective after "sein": no ending. ~ , ~ aber|K||K||but ~ hell|J||PN||bright ~ .`,
 "My flat is small but bright."],
[`Sie|P|Nf|S|sie|it|"sie" = die Wohnung (feminine), so "it" in English. ~ hat|V||P|haben|has ~ zwei|Z||AO||two ~ Zimmer|N|Ap|AO||rooms|Was hat sie? → accusative. The plural is the same as the singular. ~ , ~ eine|A|Af|AO|ein|a ~ Küche|N|Af|AO||kitchen ~ und|K||K||and ~ ein|A|An|AO||a ~ Bad|N|An|AO||bathroom ~ .`,
 "It has two rooms, a kitchen and a bathroom."],
[`Im|PA|Dn|AB|in + dem|in the|Wo? → dative. ~ Wohnzimmer|N|Dn|AB||living room ~ steht|V||P|stehen|stands ~ ein|A|Nn|S||a|Nominative neuter: ein. ~ großes|J|Nn|S|groß|big|Adjective after "ein", neuter nominative: ending -es. ~ Sofa|N|Nn|S||sofa|Was steht im Wohnzimmer? → subject, even though it comes last. ~ .`,
 "There is a big sofa in the living room."],
[`Ich|P|N|S|ich|I ~ stelle|V||P|stellen|put ~ den|A|Am|AO|der|the|Accusative masculine: der → den. ~ Tisch|N|Am|AO||table|Was stelle ich? → accusative object. ~ neben|PR||AB||next to|Two-way preposition: Wohin? (where to) → accusative. ~ das|A|An|AB|der|the|Accusative neuter: das. ~ Fenster|N|An|AB||window ~ .`,
 "I put the table next to the window."],
[`Die|A|Nf|S|der|the ~ Miete|N|Nf|S||rent|Was kostet 800 Euro? → subject. ~ der|A|Gf|GA|der|of the|Wessen Miete? Whose rent? → genitive feminine: die → der. ~ Wohnung|N|Gf|GA||flat|Feminine nouns take no ending in the genitive. ~ kostet|V||P|kosten|costs ~ 800|Z||AO||800 ~ Euro|N|Ap|AO||euros|Wie viel? How much? → an amount is in the accusative. ~ im|PA|Dm|AB|in + dem|per|"im Monat" = per month. ~ Monat|N|Dm|AB||month ~ .`,
 "The rent of the flat costs 800 euros a month."],
[`Mein|A|Nm|S|mein|my ~ Vermieter|N|Nm|S||landlord ~ wohnt|V||P|wohnen|lives ~ unten|ADV||AB||downstairs|Adverb of place: Wo? ~ im|PA|Dn|AB|in + dem|on the|Wo? → dative. ~ Erdgeschoss|N|Dn|AB||ground floor ~ .`,
 "My landlord lives downstairs on the ground floor."],
[`Er|P|Nm|S|er|he ~ gibt|V||P|geben|gives ~ mir|P|D|DO|ich|me|Wem gibt er den Schlüssel? → dative object. ~ morgen|ADV||AB||tomorrow ~ den|A|Am|AO|der|the ~ Schlüssel|N|Am|AO||key|Was gibt er mir? → accusative object. ~ für|PR||AT||for|"für" always takes the accusative. ~ den|A|Am|AT|der|the ~ Keller|N|Am|AT||cellar ~ .`,
 "Tomorrow he is giving me the key for the cellar."],
[`Leider|ADV||AB||unfortunately ~ darf|V||P|dürfen|am allowed|Modal verb in position 2; the infinitive goes to the end. ~ ich|P|N|S|ich|I ~ keine|A|Af|AO|kein|no|Negative article, accusative feminine: keine. ~ Katze|N|Af|AO||cat ~ haben|VT||P||have|Infinitive at the end (after a modal verb). ~ , ~ aber|K||K||but ~ das|P.dem|Nn|S||that|Demonstrative pronoun: it refers to the whole idea before. ~ ist|V||P|sein|is ~ nicht|T||AB||not ~ schlimm|J||PN||bad ~ .`,
 "Unfortunately I'm not allowed to have a cat, but that's not so bad."]
]},
{lvl:"B1", s:[
[`Letzten|J|Am|AB|letzt|last|Time phrase in the accusative: letzten Monat (adjective without article, masculine -en). ~ Monat|N|Am|AB||month ~ bin|V.hilf||P|sein|have|Perfect with "sein" for movement: umziehen. ~ ich|P|N|S|ich|I ~ in|PR||AB||into|Two-way preposition: Wohin? → accusative. ~ eine|A|Af|AB|ein|a ~ größere|J|Af|AB|groß|bigger|Comparative (groß → größer) with ending -e (accusative feminine). ~ Wohnung|N|Af|AB||flat ~ mit|PR||AT||with|"mit" + dative. ~ drei|Z||AT||three ~ Zimmern|N|Dp|AT|Zimmer|rooms|Dative plural: the noun adds -n. ~ in|PR||AT||in|Wo? → dative. ~ der|A|Df|AT|der|the ~ Nähe|N|Df|AT||vicinity ~ des|A|Gm|GA|der|of the|Wessen Nähe? → genitive masculine: der → des. ~ Hauptbahnhofs|N|Gm|GA|Hauptbahnhof|main station|Genitive masculine: the noun adds -s. ~ umgezogen|VT||P|umziehen|moved|Participle of "umziehen": ge- goes after the prefix (um-ge-zogen). ~ .`,
 "Last month I moved into a bigger flat with three rooms near the main station."],
[`Die|A|Nf|S|der|the ~ Wohnung|N|Nf|S||flat ~ , ~ die|P.rel|Af|AO|der|that|Relative pronoun in the accusative: ich habe die Wohnung gefunden. ~ ich|P|N|S|ich|I ~ gefunden|VT||P|finden|found|Past participle (perfect). ~ habe|V.hilf||P|haben|have|In a relative clause the conjugated verb comes last. ~ , ~ hat|V||P|haben|has ~ einen|A|Am|AO|ein|a ~ Balkon|N|Am|AO||balcony|Was hat die Wohnung? → accusative object. ~ , ~ von|PR||AB||from|"von" always takes the dative. ~ dem|P.rel|Dm|AB|der|which|Relative pronoun in the dative: der Balkon → von dem. ~ man|P|N|S||you (one)|Indefinite pronoun, always nominative. ~ den|A|Am|AO|der|the ~ Fluss|N|Am|AO||river|Was sieht man? → accusative object. ~ sieht|V||P|sehen|sees ~ .`,
 "The flat that I found has a balcony from which you can see the river."],
[`Mein|A|Nm|S|mein|my ~ neuer|J|Nm|S|neu|new|After "mein" (no ending) the adjective shows the case: masculine nominative -er. ~ Vermieter|N|Nm|S||landlord ~ ist|V||P|sein|is ~ sehr|ADV||PN||very|Degree adverb: it makes the adjective stronger. ~ freundlich|J||PN||friendly|Predicative after "sein": no ending. ~ und|K||K||and ~ hat|V.hilf||P|haben|has ~ mir|P|D|DO|ich|me|"geben": Wem? → dative object. ~ sofort|ADV||AB||immediately ~ die|A|Ap|AO|der|the ~ Schlüssel|N|Ap|AO||keys|Was hat er gegeben? → accusative plural (die Schlüssel). ~ für|PR||AT||for|"für" + accusative. ~ den|A|Am|AT|der|the ~ Keller|N|Am|AT||cellar ~ gegeben|VT||P|geben|given|Past participle at the end. ~ .`,
 "My new landlord is very friendly and gave me the keys to the cellar straight away."],
[`Trotz|PR||AB||despite|"trotz" takes the genitive. ~ der|A|Gf|AB|der|the|Genitive feminine: die → der. ~ hohen|J|Gf|AB|hoch|high|hoch → hoh-; after "der" in the genitive: ending -en. ~ Miete|N|Gf|AB||rent ~ fühle|V||P|wohlfühlen|feel|Reflexive separable verb: sich wohlfühlen. ~ ich|P|N|S|ich|I ~ mich|P.refl|A|AO|ich|myself|Reflexive pronoun in the accusative. ~ hier|ADV||AB||here ~ wohl|VT||P|wohlfühlen|(comfortable)|Prefix of "sich wohlfühlen"; it goes to the end. ~ , ~ weil|K||K||because|Subordinate clause: the verb goes to the end. ~ die|A|Np|S|der|the ~ Nachbarn|N|Np|S|Nachbar|neighbours ~ nett|J||PN||nice ~ sind|V||P|sein|are ~ und|K||K||and ~ es|P|Nn|S||it ~ nicht|T||AB||not ~ laut|J||PN||loud ~ ist|V||P|sein|is ~ .`,
 "Despite the high rent I feel at home here, because the neighbours are nice and it isn't loud."],
[`Am|PA|Dn|AB|an + dem|at the|Time: am Wochenende → dative. ~ Wochenende|N|Dn|AB||weekend ~ möchte|V||P|möchten|would like|Modal verb in position 2. ~ ich|P|N|S|ich|I ~ die|A|Ap|AO|der|the ~ Wände|N|Ap|AO|Wand|walls|Was streichen? → accusative (die Wand → die Wände). ~ streichen|VT||P||paint|Infinitive at the end. ~ und|K||K||and ~ meinen|A|Dp|DO|mein|my|Dative plural: meine → meinen. ~ Freunden|N|Dp|DO|Freund|friends|Wem zeigen? → dative object. Dative plural: noun + -n. ~ die|A|Af|AO|der|the ~ Wohnung|N|Af|AO||flat|Was zeigen? → accusative object. ~ zeigen|VT||P||show ~ .`,
 "At the weekend I'd like to paint the walls and show my friends the flat."]
]}
]},

{de:"Arbeit", en:"Work", p:[
{lvl:"A1", s:[
[`Mein|A|Nm|S|mein|my ~ Bruder|N|Nm|S||brother ~ ist|V||P|sein|is ~ Koch|N|Nm|PN||cook|After "sein" the noun is in the nominative. Jobs take no article. ~ von|PR||AB||by|"von Beruf" – "von" + dative. ~ Beruf|N|Dm|AB||profession ~ .`,
 "My brother is a cook by profession."],
[`Er|P|Nm|S|er|he ~ arbeitet|V||P|arbeiten|works ~ acht|Z||AB||eight ~ Stunden|N|Ap|AB|Stunde|hours|Wie lange? A length of time without a preposition is in the accusative. ~ am|PA|Dm|AB|an + dem|a (per)|"am Tag" = per day. ~ Tag|N|Dm|AB||day ~ in|PR||AB||in|Wo? → dative. ~ einem|A|Dn|AB|ein|a|Dative neuter: ein → einem. ~ Restaurant|N|Dn|AB||restaurant ~ am|PA|Dm|AT|an + dem|at the|Wo? → dative. ~ Bahnhof|N|Dm|AT||station ~ .`,
 "He works eight hours a day in a restaurant at the station."],
[`Jeden|A|Am|AB|jeder|every|A time phrase without a preposition is in the accusative. ~ Morgen|N|Am|AB||morning ~ fährt|V||P|fahren|goes|Irregular: ich fahre, du fährst, er fährt. ~ er|P|Nm|S|er|he ~ mit|PR||AB||by|"mit" + dative: mit dem Bus = by bus. ~ dem|A|Dm|AB|der|the ~ Bus|N|Dm|AB||bus ~ zur|PA|Df|AB|zu + der|to the|zur = zu + der. "zu" always takes the dative. ~ Arbeit|N|Df|AB||work ~ .`,
 "Every morning he goes to work by bus."],
[`Er|P|Nm|S|er|he ~ kocht|V||P|kochen|cooks ~ für|PR||AB||for|"für" + accusative. ~ die|A|Ap|AB|der|the ~ Gäste|N|Ap|AB|Gast|guests|der Gast → die Gäste. ~ Suppe|N|Af|AO||soup|Was kocht er? → accusative object, here without an article. ~ , ~ Fisch|N|Am|AO||fish ~ und|K||K||and ~ Salat|N|Am|AO||salad ~ .`,
 "He cooks soup, fish and salad for the guests."],
[`Die|A|Nf|S|der|the ~ Küche|N|Nf|S||kitchen ~ des|A|Gn|GA|der|of the|Wessen Küche? → genitive neuter: das → des. ~ Restaurants|N|Gn|GA|Restaurant|restaurant's|Genitive neuter: the noun adds -s. ~ ist|V||P|sein|is ~ sehr|ADV||PN||very|Degree adverb: it makes "modern" stronger. ~ modern|J||PN||modern ~ .`,
 "The restaurant's kitchen is very modern."],
[`Sein|A|Nm|S|sein|his ~ Chef|N|Nm|S||boss ~ zeigt|V||P|zeigen|shows ~ ihm|P|Dm|DO|er|him|Wem zeigt er Rezepte? → dative object (er → ihm). ~ oft|ADV||AB||often ~ neue|J|Ap|AO|neu|new|Adjective without an article, accusative plural: ending -e. ~ Rezepte|N|Ap|AO|Rezept|recipes ~ .`,
 "His boss often shows him new recipes."],
[`Am|PA|Dm|AB|an + dem|on|Days of the week: am Montag → dative. ~ Montag|N|Dm|AB||Monday ~ muss|V||P|müssen|must|Modal verb. "nicht müssen" = not have to. ~ er|P|Nm|S|er|he ~ nicht|T||AB||not ~ arbeiten|VT||P||work|Infinitive at the end. ~ .`,
 "On Monday he doesn't have to work."],
[`Dann|ADV||AB||then ~ schläft|V||P|schlafen|sleeps ~ er|P|Nm|S|er|he ~ lange|ADV||AB||long|Adverb of time: Wie lange? How long? ~ und|K||K||and ~ trifft|V||P|treffen|meets ~ seine|A|Ap|AO|sein|his ~ Freunde|N|Ap|AO|Freund|friends|Wen trifft er? → accusative object. ~ .`,
 "Then he sleeps late and meets his friends."]
]},
{lvl:"B1", s:[
[`Seit|PR||AB||for|"seit" + dative: seit zwei Jahren = for two years. ~ zwei|Z||AB||two ~ Jahren|N|Dp|AB|Jahr|years|Dative plural: -n. ~ arbeite|V||P|arbeiten|have been working|Present tense with "seit": the action is still going on. ~ ich|P|N|S|ich|I ~ als|K||AB||as|"als" + job: same case as the word it refers to. ~ Softwareentwickler|N|Nm|AB||software developer|Nominative, because it refers to "ich" (the subject). ~ bei|PR||AB||at|"bei" always takes the dative. ~ einer|A|Df|AB|ein|a ~ internationalen|J|Df|AB|international|international|After "einer" in the dative: -en. ~ Firma|N|Df|AB||company ~ , ~ deren|P.rel|Gf|GA|die|whose|Relative pronoun in the genitive (feminine): die Firma → deren Büro. ~ Büro|N|Nn|S||office|Was liegt im Zentrum? → subject of the relative clause. ~ im|PA|Dn|AB|in + dem|in the|Wo? → dative. ~ Zentrum|N|Dn|AB||centre ~ der|A|Gf|GA|der|of the|Wessen Zentrum? → genitive feminine. ~ Stadt|N|Gf|GA||city ~ liegt|V||P|liegen|is located|Relative clause: the verb comes last. ~ .`,
 "For two years I have been working as a software developer at an international company whose office is in the city centre."],
[`Jeden|A|Am|AB|jeder|every|Time phrase → accusative. ~ Tag|N|Am|AB||day ~ entwickle|V||P|entwickeln|develop|entwickeln: ich entwickle (the -e- drops). ~ ich|P|N|S|ich|I ~ neue|J|Ap|AO|neu|new|No article, accusative plural: -e. ~ Funktionen|N|Ap|AO|Funktion|features ~ für|PR||AT||for|"für" + accusative. ~ unsere|A|Ap|AT|unser|our ~ Kunden|N|Ap|AT|Kunde|customers|n-declension: der Kunde → die Kunden. ~ und|K||K||and ~ suche|V||P|suchen|look for ~ Fehler|N|Ap|AO||errors|Was suche ich? → accusative plural. ~ im|PA|Dm|AT|in + dem|in the|Wo? → dative. ~ Code|N|Dm|AT||code ~ .`,
 "Every day I develop new features for our customers and look for errors in the code."],
[`Obwohl|K||K||although|Subordinate clause: the verb goes to the end. ~ die|A|Nf|S|der|the ~ Arbeit|N|Nf|S||work ~ manchmal|ADV||AB||sometimes ~ stressig|J||PN||stressful ~ ist|V||P|sein|is ~ , ~ gefällt|V||P|gefallen|pleases|"gefallen" + dative: etwas gefällt mir = I like something. ~ sie|P|Nf|S|sie|it|"sie" = die Arbeit. It is the subject! ~ mir|P|D|DO|ich|me|Wem gefällt sie? → dative object. ~ sehr|ADV||AB||very ~ gut|J||AB||well|Adjective used like an adverb (Wie?): no ending. ~ .`,
 "Although the work is sometimes stressful, I like it very much."],
[`Meine|A|Np|S|mein|my ~ Kollegen|N|Np|S|Kollege|colleagues|n-declension: der Kollege → die Kollegen. ~ helfen|V||P||help ~ mir|P|D|DO|ich|me|"helfen" always takes the dative. ~ , ~ wenn|K||K||when|Subordinate clause: the verb goes to the end. ~ ich|P|N|S|ich|I ~ eine|A|Af|AO|ein|a ~ Frage|N|Af|AO||question ~ habe|V||P|haben|have ~ , ~ und|K||K||and ~ wir|P|N|S|wir|we ~ essen|V||P||eat ~ oft|ADV||AB||often ~ zusammen|ADV||AB||together ~ in|PR||AB||in|Wo? → dative. ~ der|A|Df|AB|der|the ~ Kantine|N|Df|AB||canteen ~ .`,
 "My colleagues help me when I have a question, and we often eat together in the canteen."],
[`Nächstes|J|An|AB|nächst|next|Time phrase in the accusative: nächstes Jahr (neuter, no article: -es). ~ Jahr|N|An|AB||year ~ habe|V||P|vorhaben|plan|Separable verb "vorhaben": habe … vor. ~ ich|P|N|S|ich|I ~ vor|VT||P|vorhaben|(plan)|Prefix of "vorhaben". ~ , ~ eine|A|Af|AO|ein|a ~ Weiterbildung|N|Af|AO||further training|Was machen? → accusative object. ~ zu|T||P||to|"zu" + infinitive. ~ machen|VT||P||do ~ , ~ um|K||K||in order to|"um … zu" + infinitive: purpose. ~ bessere|J|Ap|AO|gut|better|Comparative of "gut" (besser) + ending -e. ~ Chancen|N|Ap|AO|Chance|chances ~ auf|PR||AT||of|"Chancen auf" + accusative. ~ eine|A|Af|AT|ein|a ~ Beförderung|N|Af|AT||promotion ~ zu|T||P||to ~ haben|VT||P||have ~ .`,
 "Next year I plan to do further training in order to have better chances of a promotion."]
]}
]},

{de:"Einkaufen und Essen", en:"Shopping and food", p:[
{lvl:"A1", s:[
[`Am|PA|Dm|AB|an + dem|on|am = an + dem → dative. ~ Samstag|N|Dm|AB||Saturday ~ gehe|V||P|gehen|go ~ ich|P|N|S|ich|I ~ in|PR||AB||into|Two-way preposition: Wohin? → accusative. ~ den|A|Am|AB|der|the|Accusative masculine. ~ Supermarkt|N|Am|AB||supermarket ~ .`,
 "On Saturday I go to the supermarket."],
[`Ich|P|N|S|ich|I ~ kaufe|V||P|kaufen|buy ~ Brot|N|An|AO||bread|Was kaufe ich? → accusative, without an article. ~ , ~ Milch|N|Af|AO||milk ~ , ~ Käse|N|Am|AO||cheese ~ und|K||K||and ~ fünf|Z||AO||five ~ Äpfel|N|Ap|AO|Apfel|apples|der Apfel → die Äpfel. ~ .`,
 "I buy bread, milk, cheese and five apples."],
[`Die|A|Nf|S|der|the ~ Verkäuferin|N|Nf|S||saleswoman ~ gibt|V||P|geben|gives ~ mir|P|D|DO|ich|me|Wem gibt sie eine Tüte? → dative object. ~ eine|A|Af|AO|ein|a ~ Tüte|N|Af|AO||bag|Was gibt sie mir? → accusative object. ~ .`,
 "The saleswoman gives me a bag."],
[`Der|A|Nm|S|der|the ~ Preis|N|Nm|S||price ~ des|A|Gm|GA|der|of the|Genitive masculine: der → des. ~ Käses|N|Gm|GA|Käse|cheese|Genitive masculine: the noun adds -s. ~ ist|V||P|sein|is ~ heute|ADV||AB||today ~ günstig|J||PN||cheap ~ .`,
 "The price of the cheese is cheap today."],
[`Zu|PR||AB||at|"zu Hause" = at home ("zu" + dative). ~ Hause|N|Dn|AB|Haus|home|Old dative form: das Haus → zu Hause. ~ koche|V||P|kochen|cook ~ ich|P|N|S|ich|I ~ mit|PR||AB||with|"mit" + dative. ~ meiner|A|Df|AB|mein|my|Dative feminine: meine → meiner. ~ Frau|N|Df|AB||wife ~ eine|A|Af|AO|ein|a ~ Suppe|N|Af|AO||soup ~ .`,
 "At home I cook a soup with my wife."],
[`Die|A|Nf|S|der|the ~ Suppe|N|Nf|S||soup ~ ist|V||P|sein|is ~ heiß|J||PN||hot ~ , ~ aber|K||K||but ~ sehr|ADV||PN||very ~ lecker|J||PN||delicious ~ .`,
 "The soup is hot, but very tasty."],
[`Meine|A|Nf|S|mein|my ~ Tochter|N|Nf|S||daughter ~ isst|V||P|essen|eats|Irregular: ich esse, du isst, sie isst. ~ Fisch|N|Am|AO||fish|Was isst sie? → accusative object. ~ nicht|T||AB||not ~ gern|ADV||AB||gladly ~ .`,
 "My daughter doesn't like eating fish."],
[`Nach|PR||AB||after|"nach" + dative. ~ dem|A|Dn|AB|der|the ~ Essen|N|Dn|AB||meal ~ räumen|V||P|aufräumen|tidy|Separable verb "aufräumen": räumen … auf. ~ wir|P|N|S|wir|we ~ zusammen|ADV||AB||together ~ die|A|Af|AO|der|the ~ Küche|N|Af|AO||kitchen ~ auf|VT||P|aufräumen|(up)|Prefix at the end. ~ .`,
 "After the meal we tidy up the kitchen together."]
]},
{lvl:"B1", s:[
[`Seitdem|K||K||since|Subordinate clause: the verb goes to the end. ~ ich|P|N|S|ich|I ~ mich|P.refl|A|AO|ich|myself|Reflexive pronoun: sich ernähren (accusative). ~ gesünder|J||AB|gesund|more healthily|Comparative of "gesund", used like an adverb (no ending). ~ ernähre|V||P|ernähren|eat ~ , ~ kaufe|V||P|kaufen|buy ~ ich|P|N|S|ich|I ~ mein|A|An|AO|mein|my|Accusative neuter: mein (no ending). ~ Gemüse|N|An|AO||vegetables|Was kaufe ich? → accusative object. ~ am|ADV||AB|gern|(most)|"am liebsten" = superlative of "gern" (gern – lieber – am liebsten). ~ liebsten|ADV||AB|gern|like best to ~ auf|PR||AB||at|Two-way preposition: Wo? → dative. ~ dem|A|Dm|AB|der|the ~ Wochenmarkt|N|Dm|AB||weekly market ~ .`,
 "Since I started eating more healthily, I like buying my vegetables at the weekly market best."],
[`Dort|ADV||AB||there ~ bieten|V||P|anbieten|offer|Separable: bieten … an. ~ die|A|Np|S|der|the ~ Bauern|N|Np|S|Bauer|farmers|n-declension: der Bauer → die Bauern. ~ aus|PR||AT||from|"aus" + dative. ~ der|A|Df|AT|der|the ~ Region|N|Df|AT||region ~ frisches|J|An|AO|frisch|fresh|No article, neuter accusative: -es. ~ Obst|N|An|AO||fruit|Was bieten sie an? → accusative object. ~ an|VT||P|anbieten|(offer)|Prefix at the end of the main clause. ~ , ~ das|P.rel|Nn|S|das|which|Relative pronoun in the nominative: das Obst ist billiger. ~ oft|ADV||AB||often ~ billiger|J||PN|billig|cheaper|Comparative after "sein": no ending. ~ ist|V||P|sein|is ~ als|K||K||than|Comparison: comparative + "als". ~ im|PA|Dm|AB|in + dem|in the|Wo? → dative. ~ Supermarkt|N|Dm|AB||supermarket ~ .`,
 "There the farmers from the region offer fresh fruit, which is often cheaper than in the supermarket."],
[`Der|A|Nm|S|der|the ~ Geschmack|N|Nm|S||taste ~ der|A|Gp|GA|der|of the|Genitive plural: die → der. ~ Tomaten|N|Gp|GA|Tomate|tomatoes ~ ist|V||P|sein|is ~ viel|ADV||PN||much|Makes the comparative stronger: viel intensiver. ~ intensiver|J||PN|intensiv|more intense ~ , ~ weil|K||K||because ~ sie|P|Np|S|sie|they ~ in|PR||AB||in|Wo? → dative. ~ der|A|Df|AB|der|the ~ Sonne|N|Df|AB||sun ~ gereift|VT||P|reifen|ripened|Past participle. Perfect with "sein" (a change of state). ~ sind|V.hilf||P|sein|have|Auxiliary verb at the end of the subordinate clause. ~ .`,
 "The taste of the tomatoes is much more intense because they have ripened in the sun."],
[`Gestern|ADV||AB||yesterday ~ habe|V.hilf||P|haben|have|Auxiliary verb (perfect). ~ ich|P|N|S|ich|I ~ meiner|A|Df|DO|mein|my|Dative feminine: Wem habe ich ihn geschenkt? ~ Nachbarin|N|Df|DO||neighbour ~ einen|A|Am|AO|ein|a ~ Korb|N|Am|AO||basket|Was habe ich geschenkt? → accusative. ~ mit|PR||AT||with|"mit" + dative. ~ zwei|Z||AT||two ~ Kilo|N|Dn|AT||kilos ~ Erdbeeren|N|Dp|AT|Erdbeere|strawberries|Dative plural (the noun already ends in -n). ~ geschenkt|VT||P|schenken|given (as a gift) ~ , ~ und|K||K||and ~ sie|P|Nf|S|sie|she ~ hat|V.hilf||P|haben|has ~ sich|P.refl|A|AO|sie|herself|Reflexive pronoun: sich freuen (accusative). ~ sehr|ADV||AB||very ~ darüber|ADV||PO||about it|Pronominal adverb: sich freuen über + etwas → darüber. ~ gefreut|VT||P|freuen|been pleased ~ .`,
 "Yesterday I gave my neighbour a basket with two kilos of strawberries, and she was very pleased about it."],
[`Beim|PA|Dn|AB|bei + dem|while|beim = bei + dem; beim + a verb used as a noun = while doing it. ~ Kochen|N|Dn|AB||cooking|A verb used as a noun: das Kochen (capital letter). ~ probiere|V||P|ausprobieren|try|Separable: probiere … aus. ~ ich|P|N|S|ich|I ~ gern|ADV||AB||gladly ~ neue|J|Ap|AO|neu|new ~ Rezepte|N|Ap|AO|Rezept|recipes ~ aus|VT||P|ausprobieren|(out) ~ , ~ aber|K||K||but ~ scharfes|J|An|AO|scharf|spicy|No article, neuter accusative: -es. ~ Essen|N|An|AO||food|The accusative object stands first here for emphasis. ~ vertrage|V||P|vertragen|tolerate ~ ich|P|N|S|ich|I ~ nicht|T||AB||not ~ .`,
 "When cooking I like to try out new recipes, but I can't tolerate spicy food."]
]}
]},

{de:"Freizeit und Reisen", en:"Free time and travel", p:[
{lvl:"A1", s:[
[`In|PR||AB||in|Wo? → dative. ~ meiner|A|Df|AB|mein|my ~ Freizeit|N|Df|AB||free time ~ mache|V||P|machen|do ~ ich|P|N|S|ich|I ~ gern|ADV||AB||gladly ~ Sport|N|Am|AO||sport|Was mache ich? → accusative, without an article. ~ .`,
 "In my free time I like doing sport."],
[`Zweimal|ADV||AB||twice|Adverb of frequency: Wie oft? ~ pro|PR||AB||per|"pro" + accusative, usually without an article. ~ Woche|N|Af|AB||week ~ gehe|V||P|gehen|go ~ ich|P|N|S|ich|I ~ ins|PA|An|AB|in + das|to the|ins = in + das. Wohin? → accusative. ~ Fitnessstudio|N|An|AB||gym ~ .`,
 "Twice a week I go to the gym."],
[`Im|PA|Dm|AB|in + dem|in|Time: im Sommer → dative. ~ Sommer|N|Dm|AB||summer ~ fahre|V||P|fahren|travel ~ ich|P|N|S|ich|I ~ mit|PR||AB||with|"mit" + dative. ~ meinen|A|Dp|AB|mein|my|Dative plural: meine → meinen. ~ Freunden|N|Dp|AB|Freund|friends|Dative plural: the noun adds -n. ~ ans|PA|An|AB|an + das|to the|ans = an + das. Wohin? → accusative. ~ Meer|N|An|AB||sea ~ .`,
 "In summer I go to the sea with my friends."],
[`Unser|A|Nn|S|unser|our ~ Hotel|N|Nn|S||hotel ~ liegt|V||P|liegen|is located ~ am|PA|Dm|AB|an + dem|on the|Wo? → dative. ~ Strand|N|Dm|AB||beach ~ .`,
 "Our hotel is on the beach."],
[`Die|A|Np|S|der|the ~ Zimmer|N|Np|S||rooms ~ des|A|Gn|GA|der|of the|Wessen Zimmer? → genitive neuter: das → des. ~ Hotels|N|Gn|GA|Hotel|hotel|Genitive neuter: the noun adds -s. ~ sind|V||P|sein|are ~ groß|J||PN||big ~ und|K||K||and ~ sauber|J||PN||clean ~ .`,
 "The hotel's rooms are big and clean."],
[`Am|PA|Dm|AB|an + dem|in the|am Abend → dative. ~ Abend|N|Dm|AB||evening ~ essen|V||P||eat ~ wir|P|N|S|wir|we ~ Pizza|N|Af|AO||pizza ~ und|K||K||and ~ trinken|V||P||drink ~ ein|A|An|AO||a ~ kaltes|J|An|AO|kalt|cold|After "ein", neuter accusative: -es. ~ Bier|N|An|AO||beer ~ .`,
 "In the evening we eat pizza and drink a cold beer."],
[`Ich|P|N|S|ich|I ~ schicke|V||P|schicken|send ~ meiner|A|Df|DO|mein|my|Wem schicke ich eine Postkarte? → dative feminine. ~ Mutter|N|Df|DO||mother ~ eine|A|Af|AO|ein|a ~ Postkarte|N|Af|AO||postcard|Was schicke ich? → accusative. ~ .`,
 "I send my mother a postcard."],
[`Leider|ADV||AB||unfortunately ~ kann|V||P|können|can ~ ich|P|N|S|ich|I ~ nur|T||AB||only|Focus particle: it limits the number. ~ zehn|Z||AB||ten ~ Tage|N|Ap|AB|Tag|days|How long? A length of time without a preposition is in the accusative. ~ bleiben|VT||P||stay|Infinitive at the end (after a modal verb). ~ .`,
 "Unfortunately I can only stay ten days."]
]},
{lvl:"B1", s:[
[`Letzten|J|Am|AB|letzt|last|Time phrase in the accusative. ~ Sommer|N|Am|AB||summer ~ habe|V.hilf||P|haben|have|Auxiliary verb (perfect). ~ ich|P|N|S|ich|I ~ mit|PR||AB||with|"mit" + dative. ~ zwei|Z||AB||two ~ Freunden|N|Dp|AB|Freund|friends|Dative plural: -n. ~ eine|A|Af|AO|ein|a ~ Rundreise|N|Af|AO||round trip|Was habe ich gemacht? → accusative. ~ durch|PR||AT||through|"durch" always takes the accusative. ~ Portugal|N|An|AT||Portugal|Country name without an article, accusative after "durch". ~ gemacht|VT||P|machen|done ~ , ~ von|PR||PO||about|"begeistert sein von" + dative. ~ der|P.rel|Df|PO|die|which|Relative pronoun in the dative feminine: die Rundreise → von der. ~ ich|P|N|S|ich|I ~ immer|ADV||AB||always ~ noch|T||AB||still|"immer noch" = still. ~ begeistert|J||PN||enthusiastic|A participle used as an adjective after "sein". ~ bin|V||P|sein|am|Relative clause: the verb comes last. ~ .`,
 "Last summer I did a round trip through Portugal with two friends, which I'm still excited about."],
[`Da|K||K||since|"da" = because. Subordinate clause: the verb goes to the end. ~ wir|P|N|S|wir|we ~ kein|A|An|AO|kein|no|Negative article, accusative neuter: kein (no ending). ~ Auto|N|An|AO||car ~ hatten|V||P|haben|had|Simple past of "haben". ~ , ~ sind|V.hilf||P|sein|have|Perfect with "sein" for movement. ~ wir|P|N|S|wir|we ~ mit|PR||AB||by|"mit" + dative. ~ dem|A|Dm|AB|der|the ~ Zug|N|Dm|AB||train ~ von|PR||AB||from|"von" + dative. ~ Lissabon|N|Dn|AB||Lisbon ~ nach|PR||AB||to|"nach" + cities or countries without an article (direction); dative. ~ Porto|N|Dn|AB||Porto ~ gefahren|VT||P|fahren|travelled ~ .`,
 "Since we didn't have a car, we travelled by train from Lisbon to Porto."],
[`Unterwegs|ADV||AB||on the way ~ haben|V.hilf||P||have ~ wir|P|N|S|wir|we ~ die|A|Af|AO|der|the ~ Schönheit|N|Af|AO||beauty|Was haben wir genossen? → accusative. ~ der|A|Gf|GA|der|of the|Genitive feminine: die → der. ~ Landschaft|N|Gf|GA||landscape ~ genossen|VT||P|genießen|enjoyed|Irregular participle: genießen → genossen. ~ und|K||K||and ~ viele|A|Ap|AO|viel|many|Determiner for an amount, accusative plural. ~ Fotos|N|Ap|AO|Foto|photos ~ gemacht|VT||P|machen|taken ~ .`,
 "On the way we enjoyed the beauty of the landscape and took lots of photos."],
[`In|PR||AB||in|Wo? → dative. ~ Porto|N|Dn|AB||Porto ~ hat|V.hilf||P|haben|has ~ uns|P|D|DO|wir|us|Wem hat er den Weg gezeigt? → dative object. ~ ein|A|Nm|S||an|Nominative masculine: ein. ~ älterer|J|Nm|S|alt|elderly|Comparative (alt → älter) after "ein", masculine nominative: -er. ~ Herr|N|Nm|S||gentleman|Wer hat uns den Weg gezeigt? → subject. It comes after the dative object here! ~ den|A|Am|AO|der|the ~ Weg|N|Am|AO||way|Was hat er gezeigt? → accusative. ~ zu|PR||AT||to|"zu" + dative. ~ einem|A|Dn|AT|ein|a ~ kleinen|J|Dn|AT|klein|small|After "einem": -en. ~ Restaurant|N|Dn|AT||restaurant ~ gezeigt|VT||P|zeigen|shown ~ , ~ in|PR||AB||in|Wo? → dative. ~ dem|P.rel|Dn|AB|das|which|Relative pronoun in the dative neuter: das Restaurant → in dem. ~ es|P|Nn|S||it|"es gibt" + accusative = there is. ~ typisches|J|An|AO|typisch|typical|No article, neuter accusative: -es. ~ Essen|N|An|AO||food|"es gibt" always takes the accusative. ~ gibt|V||P|geben|there is ~ .`,
 "In Porto an elderly gentleman showed us the way to a small restaurant where there is typical food."],
[`Nächstes|J|An|AB|nächst|next|Time phrase in the accusative (neuter -es). ~ Jahr|N|An|AB||year ~ möchten|V||P||would like ~ wir|P|N|S|wir|we ~ unbedingt|ADV||AB||definitely ~ wieder|ADV||AB||again ~ hinfahren|VT||P||go there|Infinitive after the modal verb (hin = there). ~ , ~ falls|K||K||if|Subordinate clause: the verb goes to the end. ~ wir|P|N|S|wir|we ~ genug|ADV||AO||enough|"genug" + noun = enough (no ending). ~ Geld|N|An|AO||money|Was sparen? → accusative. ~ sparen|VT||P||save ~ können|V||P||can|Modal verb at the very end of the subordinate clause. ~ .`,
 "Next year we definitely want to go there again, if we can save enough money."]
]}
]}
];
