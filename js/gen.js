        $(document).ready(function() {

            $('title').html('SIGARETTO GENERATOR');
            $('#homeBar').css('display', 'none');
            $('#searchBar').css('display', 'none');
            $('#header').append('<span id="subtitle"><span class="spaced">GENERATO</span><span class="nospaced">R</span></span>')
            $('#buttonBar').html('<div id="genButton" class="button"><span>GENERA</span></div>');

            function generate() {

                uccide = [

                    "uccide",
                    "annienta",
                    "cancella",
                    "fredda",
                    "rimpinza",
                    "ingolla",
                    "sfregia",
                    "falcia",
                    "depaupera",
                    "infilza"

                    ]

                pieno = {

                    il: [

                        "ricolmo",
                        "rigurgitante",
                        "conguagliato",
                        "saturo",
                        "sovraccarico",
                        "vuoto",
                        "mummificato",
                        "pregno",
                        "gocciolante",
                        "devastato",
                        "rimpinzato",
                        "pieno",
                        "tronfio",
                        "ringalluzzito"

                        ],

                    lo: [

                        "sfatto",
                        "stufato",
                        "stracotto",
                        "stordito",
                        "strabordante"

                        ],

                    l: [

                        "imbottito",
                        "appesantito",
                        "in astinenza",
                        "impregnato",
                        "imbevuto",
                        "intriso",
                        "imbibito",
                        "all'asciutto",
                        "inebetito",
                        "allupato",
                        "aumentato",
                        "inorridito",
                        "empio"

                        ]

                }

                cibo = [

                    "hamburger",
                    "arrosto",
                    "polenta",
                    "suole",
                    "suole di gomma",
                    "suole usate",
                    "suole bucate",
                    "suole di una marca pregiatissima",
                    "panini",
                    "panini imbottiti",
                    "gazpacho",
                    "tzatziki",
                    "bortsch di bietolazze",
                    "l'intera Finlandia",
                    "insetti! insetti buonissimi",
                    "insetti! insetti buonissimi (scarafaggi, ecc..)",
                    "insetti! insetti buonissimi (non fate quella faccia......)",
                    "stufato",
                    "strudel",
                    "goulasch",
                    "brasato",
                    "mattoni",
                    "gomme da masticare",
                    "McNuggets",
                    "pizza",
                    "wurstel",
                    "salame",
                    "kiviak (http://en.wikipedia.org/wiki/Kiviak)",
                    "yogurt",
                    "mayonnaise finissima",
                    "una salsina spettacolo",
                    "luganega",
                    "luganega pacco",
                    "lunagega compra",
                    "luganega contraffatta",
                    "luganega della Valtellina",
                    "tua nonna",
                    "tua nonna bollita",
                    "la mia gioia di vivere"

                    ]


                droga = [

                    "eroina",
                    "alcol",
                    "chetoprofene",
                    "keta",
                    "krokodil",
                    "anellini al gruviera",
                    "lidocaina",
                    "benzedrine",
                    "benzina",
                    "gas da accendini",
                    "alcali",
                    "alcheni",
                    "LSD",
                    "metanfetamine",
                    "coccoina",
                    "antiproibizionismo",
                    "tachipirina",
                    "efedrina",
                    "nandrolone",
                    "metadone",
                    "endorfine",
                    "mucillagini",
                    "MDMA",
                    "basilico",
                    "ansiolitici",
                    "spinello",
                    "oppiacei",
                    "ossicodone",
                    "sciroppo al salmì",
                    "popper",
                    "psilocibina",
                    "ossitocina",
                    "trip",
                    "kerosene",
                    "boria",
                    "sicumera",
                    "penthotal",
                    "barbiturici",
                    "novocaina"

                    ]

                animale = {

                    il: [

                        "cane",
                        "facocero",
                        "tricheco",
                        "gingko",
                        "frocio",
                        "nandù",
                        "casuario",
                        "moa",
                        "negro",
                        "pigmeo",
                        "fenicottero",
                        "gufaccio",
                        "manzetto",
                        "sanato",
                        "gatto",
                        "cavallo",
                        "pipistrello",
                        "coniglio",
                        "cerbiatto",
                        "cinghialetto",
                        "topo",
                        "triceratopo"

                        ],

                    l: [

                        "oritteropo",
                        "emù",
                        "hoatzin",
                        "orice",
                        "erpice",
                        "aquilotto",
                        "ululone",
                        "orso",
                        "ungulato",
                        "alce",
                        "otocione",
                        "apatosauro"

                            ],

                    lo: [

                        "stratocumulo",
                        "ienazzo",
                        "pterodattilo",
                        "sventrapapere",
                        "svasso",
                        "scoiattolo mannaro",
                        "stinfalide",
                        "pneumotorace",
                        "zebù",
                        "xenomorfo",
                        "xilofono",
                        "psittacide"

                        ]

                }

                autorita = {

                    il: [

                        "maragià",
                        "re",
                        "conte",
                        "visconte",
                        "muftì",
                        "dimonio",
                        "satrapo",
                        "melchisedecche",
                        "langravio",
                        "lucumone",
                        "lacedemone",
                        "capobastone PAZZISSIMO",
                        "voivoda",
                        "pascià",
                        "ragià",
                        "vicerè",
                        "doge",
                        "tiranno",
                        "Gran Khan",
                        "governatore",
                        "sindaco",
                        "vicecane",
                        "borgomastro",
                        "visconte",
                        "valvassino",
                        "valvassore",
                        "suzerain",
                        "sultano",
                        "califfo",
                        "principe elettore di Renania-Palatinato",
                        "delfino di Carlo XVI d'Asburgo",
                        "connestabile",
                        "Cancelliere dello Scacchiere",
                        "capogabinetto",
                        "sahib",
                        "messere"

                        ],

                    lo: [

                        "sceicco",
                        "scià",
                        "zar",
                        "sceriffo",
                        "shogun"

                        ],

                    la: [

                        "contessa",
                        "marchesa",
                        "vedovella",
                        "nonnetta",
                        "badessa",
                        "miss",
                        "suorina",
                        "babbiona",
                        "borghesotta",
                        "baronessa",
                        "granduchessa",
                        "principessa",
                        "principessina",
                        "signorinella",
                        "cavallerizza",
                        "nobildonna",
                        "puttanazza",
                        "bagascia",
                        "contessina",
                        "ricca ereditiera"

                        ]

                }

                aggettivo = {

                    il: [

                        "narcolettico",
                        "rigattiere",
                        "categorumeno",
                        "beatissimo",
                        "gorgheggiante",
                        "birbantello",
                        "superstar",
                        "mattissimo",
                        "convinto",
                        "senza freni",
                        "mascalzone",
                        "bellissimo",
                        "monotelitista",
                        "bello",
                        "secco",
                        "bagnato",
                        "bolso",
                        rand(pieno.il)

                        ],

                    l: [

                        "asciutto",
                        "escatologico",
                        "allucinante",
                        "incredibile",
                        "\"awkward\"",
                        "empio",
                        "incartapecorito",
                        "antipatico come non mai",
                        "ineccepibile",
                        "incontentabile",
                        "emerito",
                        "ugro-finnico",
                        "orgasmico",
                        "otturatissimo",
                        "acidissimo",
                        "ammiraglio",
                        "ammiraglio sopraffino",
                        rand(autorita.il),
                        rand(pieno.l)

                        ],

                    lo: [

                        "strano",
                        "scorbutico",
                        "sbarbatello",
                        "ctonio",
                        "gnucchissimo",
                        "gnosticissimo",
                        "pterodattilo",
                        "pneumatico",
                        "zuccheroso",
                        "squallido",
                        "psittaciforme",
                        "ionicissimo",
                        rand(pieno.lo)

                        ],

                }

                attivita = {

                    il: [

                        "calcio a cinque",
                        "tiro al piattello",
                        "basso Lazio",
                        "Ventunesimo Secolo",
                        "cabaré sotto casa mia"

                        ],

                    lo: [

                        "\"\"scopone scientifico\"\"",
                        "spot del \"Camoscio d'Oro\"",
                        "scherzone a sorpresa",
                        "sgorgamento cessi"

                        ],

                    l: [

                        "avanspettacolo",
                        "ultimo film dei Vanzina",
                        "orgia acrobatica",
                        "Etica Nicomachea"

                        ]

                }

                amico = [

                        "SIGAROTTO",
                        "SIGARELLO",
                        "SIGARINO",
                        "SIGARUTTO",
                        "SIGARANCIO",
                        "PISCIALETTO",
                        "SCENDILETTO",
                        "SIGARAVIO",
                        "NARGHILETTO",
                        "CHILLUMMETTO",
                        "GAMBERETTO",
                        "SEGAFREDO",
                        "VASCELLETTO",
                        "BACCELLETTO",
                        "PIGAFETTO",
                        "NASETTO",
                        "MARCELLETTO",
                        "MARTELLETTO",
                        "CASSETTO"

                        ]

                personaggio = {

                    il: [

                        "Mike Bongiorno",
                        "Michael Jackson",
                        "Valery Giscard D'Estaing",
                        "Romario",
                        "Pinelli",
                        "Jocelyn",
                        "Fabrizio Frizzi",
                        "Piero Angela",
                        "Bertrand Russell",
                        "Leone Tolstoi",
                        "Pietro Taricone",
                        "Elio quello di Elio e le Storie Tese (simpaticissimo!!!)",
                        "Zio Paperone",
                        "Totò",
                        "Fellini (grandissimo)",
                        "Pacciani",
                        "Nicola, zar delle Russie",
                        "Pippo Baudo",
                        "Cavazzano",
                        "Gesù",
                        "Topolino",
                        "Spadolini",
                        "Menelìk",
                        "Diego Abatantuono",
                        "Gad Lerner"

                        ],

                    l: [

                        "Umberto Smaila",
                        "Anatolij Karpov",
                        "Isaac Asimov",
                        "Agassi",
                        "Alfredino Rampi",
                        "Alberto Castagna",
                        "Immanuel Kant",
                        "Adolf Hitler",
                        "Aleister Crowley",
                        "Haile Selassie"

                        ]

                }

                divinita = {

                    zero: [

                        "Buddha",
                        "Fra' Galgario",
                        "Cristo in Croce",
                        "Cristo in Croce con tutti i chiodini",
                        "Cristo in Croce (di nuovo!)",
                        "Quetzalcoatl",
                        "Dio Padre onnipotente, creatore del Cielo e della Terra",
                        "Jimi Hendrix",
                        "Seleuco I",
                        "Posidone",
                        "Priapo",
                        "Mitra",
                        "Toutatis",
                        "Loki",
                        "Thor",
                        "Krishna",
                        "Ganesha",
                        "Shiva",
                        "Bafometto",
                        "Baal",
                        "Satanasso, in persona,",
                        "quel f.d.p. di Belzebù",
                        "Pan, col suo zufoletto,",
                        "Ahura Mazda",
                        "Angra Mainyu",
                        "Asclepio",
                        "Odino",
                        "Oannes - il pesce-uomo",
                        "Asmodai",
                        "Astarotte",
                        "Osiride",
                        "Anubi",
                        "Horus",
                        "Ammone-Ra",
                        "Ammone-Ra (ben distinto dal solo Ammone o dal solo Ra)",
                        "Atena Partenozza",
                        "Giunione",
                        "Minerva",
                        "Cibele",
                        "Calì",
                        "Falkor",
                        "tutti i demoni della Goetia",
                        "Cthulhu",
                        "Yog-Sothoth",
                        "Nyarlathotep",
                        "tutti gli avatar di Visnù",
                        "Sabaoth",
                        "Elohim",
                        "Azazel",
                        "Azrael",
                        "Belachiel",
                        "Kerubiel",
                        "Metatron",
                        "Lucifero",
                        "Sandalphon",
                        "Raziel",
                        "Adonai",
                        "JHWH",
                        "Yavé",
                        "Colui-che-non-deve-essere-nominato",
                        "Allah"

                        ],

                    il: [

                        "concistoro dei Penati",
                        "Behemoth",
                        "Moloch",
                        "Tao",
                        "Dio Denaro",
                        "suo unico dio: Carlo Marx"

                        ],

                    l: [

                        "ésprit du quatorzième siècle",
                        "eternal blue sky tanto caro al tengrismo",
                        "Uno di Plotino",
                        "Uno di Plotino (o era Plutone? Boooooh!!)",
                        "AGDGADU"

                    ]

                }

                parente = {

                    m: [

                        "nonno",
                        "cugino",
                        "zio",
                        "nipote",
                        "figlio",
                        "prozio",
                        "bisnonno",
                        "fratello",
                        "secondo cugino",
                        "cugino di secondo grado",
                        "lontano cugino",
                        "parente",
                        "lontano parente"

                        ],

                    f: [

                        "nonna",
                        "cugina",
                        "zia",
                        "nipote",
                        "figlia",
                        "prozia",
                        "bisnonna",
                        "sorella",
                        "seconda cugina",
                        "cugina di secondo grado",
                        "lontana cugina",
                        "parente",
                        "lontana parente"

                    ]

                }

                veicolo = [

                    "in camper",
                    "in macchina",
                    "sulla 313 di Paperino",
                    "in hovercraft",
                    "sul traghetto",
                    "in barca a vela",
                    "in roulotte",
                    "in roulotte russa",
                    "in sidecar",
                    "sul torpedone",
                    "in rompighiaccio",
                    "a piedi",
                    "sull'11/A",
                    "di corsa",
                    "in elicottero",
                    "sull'Orient Express"

                    ]

                stanza = [

                    "tinello",
                    "salotto",
                    "cesso"

                    ]

                luogo = [

                    "in Amazzonia",
                    "a Shabra e Shatila (o come cazzo si scrive)",
                    "in Canadà",
                    "a Mombasa",
                    "a Trinidad e stocazzo",
                    "in un posto che mo' nun ve sto a dì",
                    "a Truccazzano (MI)",
                    "sulla Liegi-Bastogne-Liegi",
                    "sulla Parigi-Dakar",
                    "da Bruno Vespa",
                    "dalla sua cara nonnetta",
                    "in coupé",
                    "a casa sua, bello comodo",
                    "a Kuala Lumpur",
                    "a Zanzibar",
                    "a Berlino Est",
                    "nel Nulla",
                    "nel Vietnam",
                    "perduto nella foresta",
                    "dietro un cespuglio",
                    "a casa mia",
                    "nel " + rand(stanza) + " di " + rand(personaggio),
                    "nel " + rand(stanza) + " di mia " + rand(parente.f),
                    "nel " + rand(stanza) + " di mia " + rand(parente.f),
                    "a casa di " + rand(personaggio),
                    "all'abbazia di Thelema"

                ]

                artefatto = [

                    "la lampada di Aladino",
                    "il Sacro Graal",
                    "un antico candelabro",
                    "un frammento del Muro di Berlino",
                    "la Sacra Sindone",
                    "il Vello d\'Oro",
                    "la Pietra Filosofale",
                    "il Meccanismo di Anticitera",
                    "l\'iPhone 7000",
                    "l\'Ovone pasquale",
                    "l\'elixir tumefatto",
                    "un valevole passe-partout",
                    "il Devoto-Oli in edizione completa",
                    "un Buddha tutto doré",
                    "il suo amato mezzobusto del Duce",
                    "l\'antico vaso",
                    "l\'enfisema",
                    "un vecchio cimelio trozkista",
                    "una mappa tutta sgualcita della bella Carcassonne",
                    "il Pentateuco (così, di botto!)",
                    "diversi opliti dal non trascurabile valore numismatico",
                    "il tuo black lotus",
                    "l\'anello dei Nibelunghi",
                    "il Pomo della Discordia",
                    "il mitico pallone \"Azteca\"",
                    "un prezioso telescoppio",
                    "una trireme stramazzata di fuoco greco",
                    "un trabucco \"da tasca\"",
                    "un set di stuzzicadenti pregiati",
                    "l\'inestimabile Koh-i-Noor",
                    "del vasellame a \"figure nere\" (c.a. VII secolo)",
                    "la Batteria di Baghdad",
                    "il pacchetto azionario",
                    "il pacchetto azionario (ma è fisicamente un pacchetto??)",
                    "l\'ametista",
                    "i baccelletti di oricalco",
                    "la sua vecchia capra laser (...che ricordi!)",
                    "lo scimitarrone del feroce Saladino",
                    "una bella durlindana da passeggio",
                    "uno spingardino niente male",
                    "un autentico carillon infernale",
                    "un preziosissimo vaso Ming",
                    "un cassettone \"Luigi Xvi\"",
                    "il rarissimo Stradivari appartenuto a Stradivari",
                    "un chiodo della Vera Croce",
                    "un bezoario",
                    "un tritacarne paura",
                    "la graffettatrice automatica che non trovava da MESI",
                    "il rosario della nonna",
                    "una tabacchiera assurda",
                    "il Super Santos di suo figlio"

                    ]

                avverbio = [

                    "completamente",
                    "fottutamente",
                    "precipitevolissimevolmente",
                    "pervicacemente",
                    "precipuamente",
                    "indomitamente",
                    "velatamente",
                    "un ciccinino",
                    "devotamente",
                    "affabilmente",
                    "salacemente",
                    "incredibilmente",
                    "visibilmente",
                    "apprezzabilmente",
                    "compitamente",
                    "timidamente",
                    "violentemente",
                    "da vero cafonazzo",
                    "assurdamente",
                    "totalmente",
                    "manco fosse a" + rand(personaggio)

                ]

                liquido = {

                    zero: [

                        "un'ottima gazzosa",
                        "quello schifo di chinotto (bleah!)",
                        "anellini in brodo",
                        "na busta de piscio",
                        "un po' di orina di vacca",
                        "una soluzione " + rand(avverbio) + " acidulata"

                    ],

                    il: ["gazpacho (mmmm..)",
"gazpacho",
"gazpacho freddo",
"gazpacho del giorno prima",
"consommé",
"succo di birra",
"succo di camembert",
"succo di mapo",
"vomito " + prep(animale, "di"), "minestrone",
"730",
"mio pus"],

                    l: ["etere",
"olio bollente",
"ectoplasma di suo nonno",
"ectoplasma di suo nonno (buon'anima)"],

                    la: [

                        "benza",
                        "cacca molla",
                        "cacca molla " + prep(animale, "di"), "bile dei parvenu",
                        "minestrina",
                        "brodetta",
                        "brodetta pregio"
                        
                        ]

                }

                opera = [

                    "Transformers 3",
                    "\"La Rechèrche\" di Proust",
                    "\"Lo Hobbit\" a fumetti",
                    "quella tamarrata di \"Pacific Rim\"",
                    "La Corazzata Potemkin",
                    "Kramer contro Kramer",
                    "I Dolori del Giovane Werther",
                    "Una 44 magnum per l'ispettore Callaghan",
                    "\"l'Eneide\" di Publio Marone",
                    "Ecce Bombo!",
                    "\"film" + rand(["rosso",
                    "blu",
                    "ocra"]) + "\" di Kieslowski",
                    "Piccole donne",
                    "Piccole donne crescono",
                    "Piccole donne crescono ancora",
                    "La capanna dello zio Tom",
                    "Garfield 2 (molto più bello del primo!!)",
                    "\"V per Vendetta\" dei Wachosky" + rand(["",
                    "\(il graphic novel\)",
                    "\(non quella porcata del film\)"]),
                    "\"i versetti satanici\" di Salmon Rushdie",
                    "Come ti spaccio la famiglia",
                    "\"Zohan - Tutte le donne vengono al pettine\" col mitico Adam Sandler",
                    "Totò e Peppino divisi a Berlino",
                    "\"L'amante di Lady Chatterley\" (VM18!)",
                    "Se scappi ti sposo",
                    "Ultimo tango a Parigi",
                    "Ultimo tango a Parigi, del compianto maestro Bertolucci",
                    "Re Lear",
                    "\"Così è......se vi pare...!!\""

                ]

                congiunzione = [

                    "ma alla fine",
                    "ma, purtroppo,",
                    "e dai che ti dai",
                    "e – non mi rompete il cazzo!!! –",
                    "e alla fine",
                    "ma per fortuna alla fine",
                    "ma per fortuna",
                    "e, per non saper né leggere né scrivere,",
                    "e, manco a farlo apposta,",
                    "ma, per quanto ammirevole,",
                    "- cinque giorni dopo, immancabilmente,",
                    "e (ci avrei giurato)",
                    "e, come sempre,",
                    "ma in realtà",
                    "ma banalmente",
                    "e, di riffa o di raffa,",
                    "ma, in qualche modo,",
                    "e, per farla breve,"

                    ]

                esclamazione = [

                    "Incredibile",
                    "Che forza",
                    "Assurdo",
                    "Accipicchia",
                    "Verissimo",
                    "Fortissimo",
                    "Arcipuffa",
                    "Encomiabile",
                    "Va' che trick",
                    "Senti questa",
                    "Che paranoia",
                    "Applausi",
                    "Cacchio",
                    "Madonna",
                    "Non ci credo",
                    "Per la barba" + prep(divinita, "di"),
                    "Che" + prep(divinita, "art") + "mi fulmini",
                    "Sacripante",
                    "Meno male che ci sei tu",
                    "Oh, no",
                    "WOAH",
                    "Calmino",
                    "Attento" + prep(animale, "a")

                    ]

                azione = [

                    "si ritrova " + rand(luogo),
                    "si ritrova per caso " + rand(luogo),
                    "si ritrova " + rand(luogo) + " con " + rand(personaggio),
                    "si ritrova per caso " + rand(luogo) + " con " + rand(personaggio),
                    "versa per sbaglio " + prep(liquido, "art") + " addosso " + prep(autorita, "a"),
                    "versa " + prep(liquido, "art") + " addosso " + prep(autorita, "a"),
                    "inciampa sul cadavere " + prep(autorita, "di"),
                    "ha finalmente per le mani " + rand([rand(personaggio), prep(autorita, "art"), prep(animale, "indef"), prep(divinita, "art")]) + ", gli rinfaccia le sue porcate",
                    "investe " + rand(["inavvertitamente",
                    "per sbaglio"]) + " " + prep(animale, "art") + " " + prep(autorita, "di"),
                    "serve " + prep(autorita, "a") + " " + rand(cibo) + " con " + rand(droga),
                    "ha un rendez-vouz da matti con " + rand(personaggio) + " " + rand(luogo),

                ]

                situazione = [

                    rand(pieno) + " di " + rand(droga),
                    rand(avverbio) + " " + rand(pieno) + " di " + rand(droga),
                    rand(pieno) + " di " + prep(liquido, "di"),
                    rand(avverbio) + " " + rand(pieno) + " di " + prep(liquido, "di"),
                    "mentre si ingozza " + rand(avverbio) + " di " + rand(cibo),
                    rand(luogo) + " con " + rand(personaggio),
                    rand(luogo) + " con " + rand(personaggio) + " e " + rand(personaggio),
                    "gigolò della " + rand(autorita.la),
                    "savissimo " + rand(animale),
                    "ladro e gentiluomo",
                    "il solito lestofante",
                    "da bravo coglione",
                    "NIENTEDIMENO CHE CON " + rand(personaggio),
                    "maledicendo " + rand(avverbio) + " l\'idolo " + prep(divinita, "di"),
                    "genuflesso " + rand(avverbio) + " di fronte " + prep(divinita, "a"),
                    "genuflesso " + rand(avverbio) + " di fronte " + prep(divinita, "a") + " per allettare " + prep(autorita, "art"),
                    "morto ormai da un po'",
                    rand(animale) + " " + rand(aggettivo),
                    rand(["mio ",
                    "tuo "]) + rand(parente.m),
                    rand(parente.m) + " " + prep(autorita, "di"),
                    rand(parente.m) + " " + prep(personaggio, "di"),
                    "con suo " + rand(parente.m) + " " + rand(amico),
                    "cioè " + rand(artefatto),
                    "da non confondere con " + rand(personaggio)

                ]

                commafinal = [

                    rand(congiunzione) + " finisce tutto bene",
                    rand(congiunzione) + " " + rand(avverbio) + " ce la fa.",
                    rand(congiunzione) + "... " + rand(esclamazione) + "!",
                    rand(congiunzione) + " se la scampa con una tiratina d'orecchi",
                    rand(congiunzione) + " telefona la " + rand(parente.f),
                    rand(congiunzione) + " gliela risolve " + rand(personaggio),
                    rand(congiunzione) + " fa un balletto e risolve tutto",
                    rand(congiunzione) + " si risveglia " + rand(luogo),
                    rand(congiunzione) + " si risveglia " + rand(luogo) + " " + rand(avverbio) + " " + rand(pieno) + " di " + rand(droga),
                    rand(congiunzione) + " si becca un bel 5 in pagella e finita lì.",
                    rand(congiunzione) + " scappa con la " + rand(autorita.la) + " e chi lo vede più.",
                    rand(congiunzione) + " si piazza un dito in culo e chi s'è visto s'è visto.",
                    "da bravo coglione quale è",
                    "essendo sostanzialmente un ebetissimo " + rand(animale),
                    "questo perché è disattento.",
                    "perché lui è SIGARETTO e voi non siete un cazzo.",
                    "al che giustamente la pola lo slama di nerva.",
                    "e sinceramente io me lo aspettavo.",
                    "e sinceramente ce lo aspettavamo tutti.",
                    "e non vi sto neanche a dire cosa succede dopo.",
                    "e... sto zitto, và!",
                    "poi " + rand(azione) + "...",
                    "quel che non sapete è che solo due giorni prima " + rand(azione) + "...",
                    "a me sembra tenerissimo, e a voi?!",
                    rand(congiunzione) + " domani ritorna " + rand(luogo) + ".... finalmente o_O",
                    rand(congiunzione) + " si risolve tutto davanti a un bel piatto di " + rand(cibo) + ".",
                    "il resto nella prossima puntata!",
                    rand(congiunzione) + " non è finita qua, credetemi: non è finita qua!",
                    rand(congiunzione) + " il finale è tragico :\(",
                    rand(congiunzione) + " l'esito è VM18.",
                    rand(congiunzione) + " muoiono tutti...",
                    "questo per cominciare...!"

                ]

                dotsfinal = [

                    "e " + rand(personaggio) + " in tutto questo che c'entra? " + rand(["C'entra, c'entra...", "bhò....", ""]),
                    rand(personaggio) + ", SIGARETTO!",
                    "se pensate che a quell\'età " + rand(personaggio) + " manco si faceva le seghe...",
                    "MEEEEEEGASBATTI!",
                    "e poi dicono \"cè crisi\"..",
                    "voi continuate pure con insciallà insciallà.....",
                    "non c\'è male, direi: non c\'è male!",
                    "qualcosa in contrario?",
                    "chiamalo scemo!",
                    "è questo che ci chiede la tua Europa, SIGARETTO?",
                    "boh non so a voi ma a me 1 pò vien da ridere...",
                    "eheheh \:\)",
                    "LOL LOL LOL",
                    "Ke storia triste :((",
                    "insomma ORA E SEMPRE RESISTENZA!!1",
                    "se avete qualcosa da ridire, rivolgetevi a " + rand(personaggio),
                    "una storia edificante, non credi?",
                    "è o non è meglio di " + rand(opera) + "???",
                    "OH, MA CHE CAZZO VUOI? CAZZO TI GUARDI?!?!",
                    "basta, basta!",
                    "io non ho il coraggio di continuare a raccontarvi questa storia, scusate.",
                    "e non vi dico cosa ha fatto " + rand(amico) + "!",
                    "e voi cosa avreste fatto al posto suo?",
                    "chissà cosa avrebbe fatto " + rand([rand(amico), rand(personaggio)]) + " al posto suo!",
                    "ma no, ma no! È invece il" + rand(["pio", "tenero", "gentile", "candido"]) + "Baccellone!",
                    rand(["rocambolesco","analgesico","rinfrescante","recalcitrante","neghittoso"]) + ", non vi pare?",
                    rand(["E io che ne so?","Come faccio a saperlo?","Come lo so??"]) + " " + rand(["Sono stato a","Ho fatto"]) + " " + rand(["zumba","aqquagym","biochimica","tutta la naja","scuola"]) + "con SIGARETTO..."

                ]

                incipit = [

                    "Europa stupenda!",
                    "That's " + rand(["unfair","gullible","oh-so-weird","SICK","preposterous","bamboozling"]) + "!!",
                    rand(esclamazione) + "!",
                    rand(["Terrore","Sgomento","Paura"]) + " " + rand([rand(veicolo), rand(luogo)]) + "!",
                    rand(["Sorrisi","Nandinidae","Estate con te","Té alla pesca"]) + " is magic!",
                    "«" + rand([rand(cibo), rand(droga)]) + " che " + rand(["bontà","passione"]) + "!»",
                    rand(amico) + " mi ha detto che",
                    "Sostiene " + rand(personaggio) + " che",
                    rand(["Secondo","A opinione di"]) + " " + rand(personaggio),
                    "Mio " + rand(parente.m) + " dice che",
                    "Nel suo \"" + rand(opera) + "\", " + rand(personaggio) + " ha scritto che",
                    "ANSA:",
                    "Credetemi:",
                    "Non ci crederete ma",
                    "Ebbene sì:",
                    "Vi sembrerà strano ma spesso"

                ]

                finale = [", " + rand(commafinal), "... " + rand(dotsfinal)]

                attr = [" " + rand(aggettivo), ", " + rand(situazione) + ","]

                siga = [

                    "SIGARETTO" + rand(attr) + " " + rand(azione) + rand(finale),
                    rand(incipit) + " SIGARETTO" + rand(attr) + " " + rand(azione) + rand(finale),

                ]

                function prep(name, pr) {

                    var arr = [];

                    if (pr == "art") {
                        pre = ["il ", "lo ", "l'", "la "]
                    };
                    if (pr == "di") {
                        pre = ["del ", "dello ", "dell'", "della "]
                    };
                    if (pr == "a") {
                        pre = ["al ", "allo ", "all'", "alla "]
                    };
                    if (pr == "da") {
                        pre = ["dal ", "dallo ", "dall'", "dalla "]
                    };
                    if (pr == "in") {
                        pre = ["nel ", "nello ", "nell'", "nella "]
                    };
                    if (pr == "su") {
                        pre = ["sul ", "sullo ", "sull'", "sulla "]
                    };
                    if (pr == "indef") {
                        pre = ["un ", "uno ", "un ", "una "]
                    };

                    if (name.hasOwnProperty('il') == true) {
                        arr.push(pre[0] + rand(name.il))
                    };
                    if (name.hasOwnProperty('lo') == true) {
                        arr.push(pre[1] + rand(name.lo))
                    };
                    if (name.hasOwnProperty('l') == true) {
                        arr.push(pre[2] + rand(name.l))
                    };
                    if (name.hasOwnProperty('la') == true) {
                        arr.push(pre[3] + rand(name.la))
                    };
                    if (name.hasOwnProperty('zero') == true) {
                        arr.push(rand(name.zero))
                    };

                    return rand(arr);

                }


                function clearCard() {
                    $("#content").html('');
                }

                function rand(name) {

                    if (name instanceof Array == true) {
                        var randomNumber = Math.floor(Math.random() * name.length);
                        return name[randomNumber];


                    } else if (name instanceof Object == true) {

                        var arr = [];

                        for (var key in name) {
                            if (name.hasOwnProperty(key)) {
                                arr.push(name[key]);
                            }
                        }
                        var merged = [];
                        merged = merged.concat.apply(merged, arr);

                        var randomNumber = Math.floor(Math.random() * merged.length);
                        return merged[randomNumber];

                    }

                }

                hashCode = function(s){
                return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
                }

                var currentHash = hashCode(rand(siga));

                console.log(currentHash);

                function cardCopy() {

                return '<div class="copy hidden"><span class="copyText" data-clipboard-text="' + rand(siga) + '">copia testo</span></div>'

                }

                function buildCard() {

                    $("#content").append('<div class="card">' + rand(siga) + '<div class="infoBox">' + cardCopy() + '</div></div>');
                    var client03 = new ZeroClipboard($(".copyText"));

                $( '#gen .card' ).hover(
                  function() {
                    $('.copy') .removeClass( 'hidden' );
                  }, function() {
                    $('.copy').addClass( 'hidden' );
                  }

                );

                }

                clearCard();
                buildCard();

            };

            // GEN BUTTON //

            $('#genButton').click(function() {

                generate();

            });

            $(document).keydown(function(event) {
                var tag = event.target.tagName.toLowerCase();
                if (event.which === 71 && tag != 'input' && tag != 'textarea') {

                    generate();
                    $('#genButton').addClass("jqhover")
                        .delay(100)
                        .queue(function() {
                            $(this).removeClass("jqhover");
                            $(this).dequeue();
                        });

                }
            });

            generate();

            var a = document.getElementsByTagName("a");
            for (var i = 0; i < a.length; i++) {
                a[i].onclick = function() {
                    window.location = this.getAttribute("href");
                    return false
                }
            }

        });