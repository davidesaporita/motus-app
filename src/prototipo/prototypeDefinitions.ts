export const prototypeDefinitions = [
  {
    id: "registrazione",
    name: "Registrazione utente",
    nav: "",
    type: "pagina",
    purpose:
      "Il sistema permette all'ospite di creare un account, di compilare il profilo e di dare i primi consensi.",
    blocks: [
      {
        code: "1.1",
        title:
          "Il sistema permette all'ospite di registrarsi e all'utente di accedere al proprio account",
        items: [
          {
            row: 4,
            level: 1,
            text: "Permette all'ospite di creare un account, indicando nome, email e password",
          },
          {
            row: 9,
            level: 1,
            text: "Permette all'utente di modificare nome, email e password",
          },
          {
            row: 5,
            level: 1,
            text: "Permette all'ospite di compilare il profilo durante la registrazione",
          },
        ],
      },
      {
        code: "1.2",
        title: "Il sistema permette all'utente di indicare le proprie abitudini di mobilità",
        items: [
          {
            row: 11,
            level: 1,
            text: "Permette di indicare i mezzi usati abitualmente: auto, moto e scooter, autobus, metropolitana, treno, bici, monopattino, piedi, altro",
          },
          {
            row: 12,
            level: 1,
            text: "Permette di indicare la frequenza d'uso di ogni mezzo",
          },
          {
            row: 13,
            level: 1,
            text: "Permette di indicare la distanza percorsa in media",
          },
          {
            row: 14,
            level: 1,
            text: "Permette di indicare i motivi principali degli spostamenti: lavoro, studio, famiglia, tempo libero, commissioni",
          },
          {
            row: 15,
            level: 1,
            text: "Permette di modificare le abitudini indicate",
          },
        ],
      },
      {
        code: "1.3",
        title: "Il sistema permette all'utente di indicare preferenze e vincoli di mobilità",
        items: [
          {
            row: 17,
            level: 1,
            text: "Permette di indicare la priorità tra tempo, costo e comodità",
          },
          {
            row: 18,
            level: 1,
            text: "Permette di indicare i propri vincoli, senza dati sanitari: non guido; accompagno altre persone; trasporto oggetti ingombranti; ho orari rigidi o turni; la mia zona è poco servita dal trasporto pubblico; tempo massimo accettabile per uno spostamento abituale; nessun vincolo",
          },
          {
            row: 19,
            level: 1,
            text: "Permette di modificare preferenze e vincoli",
          },
        ],
      },
      {
        code: "1.4",
        title:
          "Il sistema permette all'utente di indicare le dimensioni della mobilità che vuole approfondire",
        items: [
          {
            row: 21,
            level: 1,
            text: "Permette di scegliere una o più dimensioni: comportamentale, ambientale, sicurezza, economica, salute",
          },
          {
            row: 22,
            level: 1,
            text: "Permette di modificare la scelta",
          },
        ],
      },
      {
        code: "7.1",
        title: "Il sistema permette all'utente di dare e revocare i propri consensi",
        items: [
          {
            row: 25,
            level: 1,
            text: "Chiede il consenso alla geolocalizzazione",
          },
          {
            row: 26,
            level: 1,
            text: "Chiede il consenso alle notifiche",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "accesso",
        label: "Accesso",
      },
      {
        to: "supporto",
        label: "Supporto",
      },
    ],
  },
  {
    id: "accesso",
    name: "Accesso",
    nav: "",
    type: "pagina",
    purpose:
      "Il sistema permette all'utente di entrare nel proprio account e di recuperare l'accesso.",
    blocks: [
      {
        code: "1.1",
        title:
          "Il sistema permette all'ospite di registrarsi e all'utente di accedere al proprio account",
        items: [
          {
            row: 7,
            level: 1,
            text: "Permette all'utente di accedere con email e password",
          },
          {
            row: 8,
            level: 1,
            text: "Permette all'utente di recuperare l'accesso, quando dimentica la password",
          },
        ],
      },
      {
        code: "7.6",
        title:
          "Il sistema permette all'utente di proteggere l'apertura del servizio con la biometria del dispositivo",
        items: [
          {
            row: 57,
            level: 1,
            text: "Chiede l'impronta o il volto all'apertura, quando il blocco è attivo",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "registrazione",
        label: "Registrazione utente",
      },
      {
        to: "supporto",
        label: "Supporto",
      },
    ],
  },
  {
    id: "home",
    name: "Home page",
    nav: "home",
    type: "pagina",
    purpose:
      "Il sistema mostra all'utente la sintesi dei suoi risultati e se sta rilevando uno spostamento.",
    blocks: [
      {
        code: "4.1",
        title: "Il sistema mostra all'utente la sintesi dei risultati",
        items: [
          {
            row: 170,
            level: 1,
            text: "Mostra un indicatore principale per ogni dimensione",
          },
          {
            row: 171,
            level: 2,
            text: "Mostra la distanza percorsa e la distribuzione dei mezzi",
          },
          {
            row: 172,
            level: 2,
            text: "Mostra le emissioni stimate di CO₂e",
          },
          {
            row: 173,
            level: 2,
            text: "Mostra il costo complessivo",
          },
          {
            row: 174,
            level: 2,
            text: "Mostra il tempo con mezzi attivi",
          },
          {
            row: 175,
            level: 1,
            text: "Mostra per primi gli indicatori delle dimensioni che l'utente vuole approfondire",
          },
          {
            row: 176,
            level: 1,
            text: "Permette di scegliere il periodo",
          },
          {
            row: 177,
            level: 1,
            text: "Permette di scegliere gli indicatori in evidenza",
          },
          {
            row: 184,
            level: 1,
            text: "Mostra al partecipante solo la propria sintesi",
          },
        ],
      },
      {
        code: "2.1",
        title:
          "Il sistema rileva automaticamente gli spostamenti dell'utente, quando il rilevamento è attivo",
        items: [
          {
            row: 66,
            level: 1,
            text: "Il sistema informa se è in atto il rilevamento di uno spostamento",
          },
        ],
      },
      {
        code: "7.1",
        title: "Il sistema permette all'utente di dare e revocare i propri consensi",
        items: [
          {
            row: 32,
            level: 1,
            text: "Permette di attivare, sospendere e disattivare il rilevamento degli spostamenti",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "diario",
        label: "Diario spostamenti",
      },
      {
        to: "inserisci-spostamento",
        label: "Inserisci spostamento",
      },
      {
        to: "spese",
        label: "Spese",
      },
      {
        to: "analisi",
        label: "Analisi",
      },
      {
        to: "confronto-mezzi",
        label: "Confronto tra mezzi",
      },
      {
        to: "suggerimenti",
        label: "Suggerimenti",
      },
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
      {
        to: "veicoli",
        label: "Gestione Veicoli",
      },
      {
        to: "gruppo",
        label: "Gestione Gruppo",
      },
      {
        to: "profilo",
        label: "Il tuo profilo",
      },
      {
        to: "impostazioni",
        label: "Impostazioni",
      },
      {
        to: "conferma-spostamenti",
        label: "Conferma spostamenti",
      },
    ],
  },
  {
    id: "diario",
    name: "Diario spostamenti",
    nav: "diario",
    type: "pagina",
    purpose:
      "Il sistema mostra all'utente i suoi spostamenti, per periodo, per filtro e sulla mappa.",
    blocks: [
      {
        code: "2.4",
        title: "Il sistema mostra all'utente i suoi spostamenti",
        items: [
          {
            row: 81,
            level: 1,
            text: "Mostra gli spostamenti per giorno, settimana e mese",
          },
          {
            row: 82,
            level: 1,
            text: "Mostra gli spostamenti filtrati per mezzo e per motivo",
          },
          {
            row: 83,
            level: 1,
            text: "Permette di cercare gli spostamenti per località",
          },
          {
            row: 84,
            level: 1,
            text: "Mostra su una mappa il percorso di ogni spostamento",
          },
          {
            row: 85,
            level: 1,
            text: "Mostra se un tragitto è abituale",
          },
        ],
      },
    ],
    definitions: ["Elenco dei tragitti abituali e dei luoghi frequenti dell'utente"],
    links: [
      {
        to: "dettaglio-spostamento",
        label: "Dettaglio spostamento",
      },
      {
        to: "inserisci-spostamento",
        label: "Inserisci spostamento",
      },
      {
        to: "conferma-spostamenti",
        label: "Conferma spostamenti",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "dettaglio-spostamento",
    name: "Dettaglio spostamento",
    nav: "diario",
    type: "pagina",
    purpose:
      "Il sistema mostra all'utente tutti i dati di uno spostamento e gli permette di correggerlo.",
    blocks: [
      {
        code: "2.4",
        title: "Il sistema mostra all'utente i suoi spostamenti",
        items: [
          {
            row: 86,
            level: 1,
            text: "Mostra il dettaglio di ogni spostamento, con mappa, consumi, costi e altri dati registrati",
          },
        ],
      },
      {
        code: "2.3",
        title: "Il sistema permette all'utente di inserire e correggere i propri spostamenti",
        items: [
          {
            row: 74,
            level: 1,
            text: "Permette di modificare i dati di uno spostamento, compresi il mezzo e il veicolo",
          },
          {
            row: 75,
            level: 1,
            text: "Permette di indicare il motivo dello spostamento: lavoro, studio, famiglia, tempo libero, commissioni, non indicato",
          },
          {
            row: 77,
            level: 1,
            text: "Permette di dividere uno spostamento in due",
          },
          {
            row: 76,
            level: 1,
            text: "Permette di unire due spostamenti consecutivi",
          },
          {
            row: 78,
            level: 1,
            text: "Permette di escludere uno spostamento dalle analisi, conservandolo nel diario",
          },
          {
            row: 79,
            level: 1,
            text: "Permette di eliminare uno spostamento",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "diario",
        label: "Diario spostamenti",
      },
      {
        to: "spese",
        label: "Spese",
      },
      {
        to: "dettaglio-veicolo",
        label: "Dettaglio veicolo",
      },
    ],
  },
  {
    id: "inserisci-spostamento",
    name: "Inserisci spostamento",
    nav: "diario",
    type: "pagina",
    purpose: "Il sistema permette all'utente di inserire uno spostamento che non è stato rilevato.",
    blocks: [
      {
        code: "2.3",
        title: "Il sistema permette all'utente di inserire e correggere i propri spostamenti",
        items: [
          {
            row: 72,
            level: 1,
            text: "2.3.1 Permette di inserire uno spostamento non rilevato, indicando data, ora di partenza, ora di arrivo, luogo di partenza, luogo di arrivo, mezzo e distanza",
          },
          {
            row: 75,
            level: 1,
            text: "Permette di indicare il motivo dello spostamento: lavoro, studio, famiglia, tempo libero, commissioni, non indicato",
          },
        ],
      },
      {
        code: "2.5",
        title: "Il sistema riconosce i tragitti abituali dell'utente",
        items: [
          {
            row: 93,
            level: 1,
            text: "Permette di indicare il nome dei luoghi frequenti, scegliendo tra casa, lavoro e scuola o scrivendone uno",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "diario",
        label: "Diario spostamenti",
      },
      {
        to: "dettaglio-spostamento",
        label: "Dettaglio spostamento",
      },
    ],
  },
  {
    id: "conferma-spostamenti",
    name: "Conferma spostamenti",
    nav: "diario",
    type: "pagina",
    purpose:
      "Il sistema chiede all'utente di confermare gli spostamenti rilevati e il veicolo usato.",
    blocks: [
      {
        code: "2.6",
        title:
          "Il sistema chiede all'utente di confermare gli spostamenti rilevati e il veicolo usato",
        items: [
          {
            row: 97,
            level: 1,
            text: "Mostra su una mappa gli spostamenti da confermare, con il mezzo riconosciuto",
          },
          {
            row: 98,
            level: 1,
            text: "Chiede per ogni spostamento in veicolo la disponibilità del veicolo: proprio, del gruppo, di altri, pubblico, in sharing",
          },
          {
            row: 99,
            level: 1,
            text: "Chiede il ruolo dell'utente: conducente o passeggero",
          },
          {
            row: 101,
            level: 1,
            text: "Chiede tipo e alimentazione del veicolo, quando è di altri",
          },
          {
            row: 103,
            level: 1,
            text: "Propone di inserire il veicolo qualora non fosse registrato",
          },
          {
            row: 105,
            level: 1,
            text: "Chiede conferma di un viaggio fatto insieme se rilevato in più componenti del gruppo",
          },
        ],
      },
    ],
    definitions: ["Comando per confermare o correggere il mezzo riconosciuto"],
    links: [
      {
        to: "dettaglio-spostamento",
        label: "Dettaglio spostamento",
      },
      {
        to: "dettaglio-veicolo",
        label: "Dettaglio veicolo",
      },
      {
        to: "diario",
        label: "Diario spostamenti",
      },
    ],
  },
  {
    id: "analisi",
    name: "Analisi",
    nav: "analisi",
    type: "pagina",
    purpose: "Il sistema spiega all'utente i suoi risultati e li confronta tra mezzi.",
    blocks: [
      {
        code: "4.1",
        title: "Il sistema mostra all'utente la sintesi dei risultati",
        items: [
          {
            row: 176,
            level: 1,
            text: "Permette di scegliere il periodo",
          },
        ],
      },
      {
        code: "4.2",
        title: "Il sistema spiega all'utente i risultati con messaggi comprensibili",
        items: [
          {
            row: 186,
            level: 1,
            text: "Spiega il significato di ogni indicatore",
          },
          {
            row: 187,
            level: 1,
            text: "Spiega tendenze e variazioni significative",
          },
          {
            row: 188,
            level: 1,
            text: "Spiega i comportamenti che si ripetono",
          },
          {
            row: 189,
            level: 1,
            text: "Confronta le abitudini indicate nel profilo con quelle calcolate dagli spostamenti",
          },
          {
            row: 190,
            level: 1,
            text: "Spiega le emissioni prodotte e l'impatto ambientale di ciascun mezzo",
          },
          {
            row: 191,
            level: 1,
            text: "Mostra su una mappa i punti critici dei percorsi",
          },
          {
            row: 192,
            level: 1,
            text: "Spiega i benefici degli spostamenti con mezzi attivi",
          },
          {
            row: 193,
            level: 1,
            text: "Mostra per ogni dato la provenienza: rilevato, inserito, stimato",
          },
          {
            row: 194,
            level: 1,
            text: "Mostra per ogni stima attendibilità e metodo di calcolo",
          },
        ],
      },
      {
        code: "3.1",
        title:
          "Il sistema calcola le abitudini di mobilità dell'utente a partire dai suoi spostamenti",
        items: [
          {
            row: 121,
            level: 1,
            text: "Confronta la durata degli spostamenti sullo stesso tragitto abituale",
          },
        ],
      },
      {
        code: "3.2",
        title: "Il sistema stima le emissioni prodotte dagli spostamenti dell'utente",
        items: [
          {
            row: 134,
            level: 1,
            text: "Confronta le emissioni tra mezzi e tra periodi",
          },
          {
            row: 135,
            level: 1,
            text: "Confronta le emissioni con valori di riferimento documentati",
          },
        ],
      },
      {
        code: "3.4",
        title: "Il sistema calcola i costi degli spostamenti dell'utente",
        items: [
          {
            row: 152,
            level: 1,
            text: "Confronta i costi tra mezzi e tra periodi",
          },
        ],
      },
      {
        code: "3.5",
        title:
          "Il sistema stima gli effetti degli spostamenti sull'attività fisica dell'utente e sulla sua esposizione all'inquinamento",
        items: [
          {
            row: 161,
            level: 1,
            text: "Confronta il tempo con mezzi attivi e con mezzi motorizzati, anche tra periodi",
          },
        ],
      },
    ],
    definitions: [
      "Indicatore della sicurezza",
      "Risultati calcolati che nessuna funzione mostra ancora: costo per chilometro, costo mensile e annuale, minuti di movimento, esposizione all'inquinamento",
    ],
    links: [
      {
        to: "confronto-periodi",
        label: "Confronto tra periodi",
      },
      {
        to: "report",
        label: "Report",
      },
      {
        to: "approfondimenti",
        label: "Approfondimenti",
      },
      {
        to: "suggerimenti",
        label: "Suggerimenti",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "confronto-periodi",
    name: "Confronto tra periodi",
    nav: "analisi",
    type: "pagina",
    purpose: "Il sistema confronta per l'utente i risultati di due periodi e mostra le variazioni.",
    blocks: [
      {
        code: "4.3",
        title: "Il sistema confronta per l'utente i risultati di periodi diversi",
        items: [
          {
            row: 196,
            level: 1,
            text: "Confronta una settimana con la precedente",
          },
          {
            row: 197,
            level: 1,
            text: "Confronta un mese con il precedente",
          },
          {
            row: 198,
            level: 1,
            text: "Confronta due periodi scelti dall'utente",
          },
          {
            row: 199,
            level: 1,
            text: "Confronta il periodo iniziale con quello attuale",
          },
          {
            row: 200,
            level: 1,
            text: "Mostra le variazioni di distanze, emissioni, costi e tempo con mezzi attivi",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "analisi",
        label: "Analisi",
      },
    ],
  },
  {
    id: "report",
    name: "Report",
    nav: "analisi",
    type: "pagina",
    purpose: "Il sistema mostra all'utente i report periodici e gli permette di esportarli.",
    blocks: [
      {
        code: "4.4",
        title: "Il sistema mostra all'utente report periodici",
        items: [
          {
            row: 202,
            level: 1,
            text: "Mostra un report settimanale, uno mensile e uno annuale",
          },
          {
            row: 203,
            level: 1,
            text: "Mostra in ogni report le dimensioni in relazione tra loro, compresa la sicurezza",
          },
          {
            row: 205,
            level: 1,
            text: "Permette di esportare un report come immagine, PDF o foglio Excel",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "analisi",
        label: "Analisi",
      },
      {
        to: "approfondimenti",
        label: "Approfondimenti",
      },
    ],
  },
  {
    id: "approfondimenti",
    name: "Approfondimenti",
    nav: "analisi",
    type: "pagina",
    purpose: "Il sistema mostra all'utente approfondimenti, glossario, fonti e metodi di calcolo.",
    blocks: [
      {
        code: "4.5",
        title: "Il sistema mostra all'utente approfondimenti sui temi della mobilità",
        items: [
          {
            row: 207,
            level: 1,
            text: "Mostra approfondimenti su ambiente, fattori emissivi, costi, sicurezza stradale e mezzi attivi",
          },
          {
            row: 208,
            level: 1,
            text: "Mostra il glossario degli indicatori",
          },
          {
            row: 209,
            level: 1,
            text: "Mostra fonti e metodi di calcolo",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "analisi",
        label: "Analisi",
      },
    ],
  },
  {
    id: "suggerimenti",
    name: "Suggerimenti",
    nav: "cambiamento",
    type: "pagina",
    purpose:
      "Il sistema suggerisce all'utente cambiamenti realistici e gli permette di rispondere.",
    blocks: [
      {
        code: "6.1",
        title: "Il sistema suggerisce all'utente cambiamenti realistici delle sue abitudini",
        items: [
          {
            row: 256,
            level: 1,
            text: "Suggerisce alternative per i tragitti abituali",
          },
          {
            row: 257,
            level: 1,
            text: "Suggerisce più spostamenti con mezzi attivi",
          },
          {
            row: 258,
            level: 1,
            text: "Suggerisce solo cambiamenti compatibili con preferenze, vincoli e obiettivi dell'utente",
          },
          {
            row: 259,
            level: 1,
            text: "Suggerisce per primi i cambiamenti nelle dimensioni che l'utente vuole approfondire",
          },
          {
            row: 260,
            level: 1,
            text: "Permette di rispondere a un suggerimento: lo provo, non mi interessa, non mostrarmelo più",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "confronto-mezzi",
        label: "Confronto tra mezzi",
      },
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "simulazione",
        label: "Simulazione e scenari",
      },
    ],
  },
  {
    id: "obiettivi",
    name: "Obiettivi",
    nav: "cambiamento",
    type: "pagina",
    purpose:
      "Il sistema mostra all'utente i progressi verso i suoi obiettivi e gli permette di crearli e modificarli.",
    blocks: [
      {
        code: "6.3",
        title:
          "Il sistema calcola per l'utente i progressi verso i suoi obiettivi, notificando i cambiamenti rilevanti",
        items: [
          {
            row: 271,
            level: 1,
            text: "Mostra i progressi verso ogni obiettivo",
          },
          {
            row: 270,
            level: 1,
            text: "Confronta il valore attuale con quello iniziale e con quello desiderato",
          },
        ],
      },
      {
        code: "6.2",
        title: "Il sistema permette all'utente di definire obiettivi",
        items: [
          {
            row: 268,
            level: 1,
            text: "Mostra ad amministratori e membri gli obiettivi e i budget del gruppo",
          },
          {
            row: 263,
            level: 1,
            text: "Permette di creare un obiettivo, scegliendo dimensione, indicatore, valore desiderato e periodo",
          },
          {
            row: 265,
            level: 1,
            text: "Permette di creare un budget, cioè un obiettivo con un limite di spesa per periodo",
          },
          {
            row: 267,
            level: 1,
            text: "Permette all'amministratore di creare obiettivi e budget del gruppo",
          },
          {
            row: 266,
            level: 1,
            text: "Permette di modificare, sospendere ed eliminare un obiettivo",
          },
        ],
      },
    ],
    definitions: ["Elenco degli obiettivi e dei budget dell'utente, compresi quelli conclusi"],
    links: [
      {
        to: "suggerimenti",
        label: "Suggerimenti",
      },
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "confronto-mezzi",
        label: "Confronto tra mezzi",
      },
      {
        to: "simulazione",
        label: "Simulazione e scenari",
      },
    ],
  },
  {
    id: "confronto-mezzi",
    name: "Confronto tra mezzi",
    nav: "cambiamento",
    type: "pagina",
    purpose:
      "Il sistema confronta per l'utente mezzi diversi su uno stesso tragitto e mostra le differenze.",
    blocks: [
      {
        code: "5.1",
        title:
          "Il sistema confronta per l'utente mezzi diversi su uno stesso tragitto, senza indicare il percorso migliore",
        items: [
          {
            row: 212,
            level: 1,
            text: "Permette di scegliere un tragitto abituale o una catena di spostamenti abituale",
          },
          {
            row: 213,
            level: 1,
            text: "Permette di indicare un tragitto nuovo, con luogo di partenza e luogo di arrivo",
          },
          {
            row: 214,
            level: 1,
            text: "Permette di scegliere i mezzi da confrontare: auto, moto e scooter, autobus, metropolitana, treno, bici, monopattino, piedi, veicoli in sharing, combinazioni",
          },
          {
            row: 219,
            level: 1,
            text: "Mostra le differenze tra le alternative per ogni dimensione",
          },
          {
            row: 218,
            level: 1,
            text: "Mostra quali alternative sono incompatibili con i vincoli indicati dall'utente",
          },
          {
            row: 220,
            level: 1,
            text: "Mostra l'attendibilità di ogni stima",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "simulazione",
        label: "Simulazione e scenari",
      },
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "suggerimenti",
        label: "Suggerimenti",
      },
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
    ],
  },
  {
    id: "simulazione",
    name: "Simulazione e scenari",
    nav: "cambiamento",
    type: "pagina",
    purpose:
      "Il sistema simula per l'utente le conseguenze di un cambiamento e gli permette di salvare e confrontare gli scenari.",
    blocks: [
      {
        code: "5.3",
        title: "Il sistema simula per l'utente le conseguenze di un cambiamento delle abitudini",
        items: [
          {
            row: 222,
            level: 1,
            text: "Permette di scegliere il cambiamento da simulare: usare meno l'auto, sostituire alcuni tragitti settimanali con mezzi pubblici, bici o piedi, combinare più mezzi, cambiare la frequenza degli spostamenti",
          },
          {
            row: 223,
            level: 1,
            text: "Simula la differenza mensile e annuale di costi, emissioni, tempo e attività fisica",
          },
          {
            row: 224,
            level: 1,
            text: "Simula la rinuncia a un veicolo, con le spese ricorrenti risparmiate",
          },
          {
            row: 225,
            level: 1,
            text: "Permette ad amministratori e membri di simulare un cambiamento per il gruppo",
          },
          {
            row: 226,
            level: 1,
            text: "Propone di trasformare lo scenario in un obiettivo",
          },
        ],
      },
      {
        code: "5.5",
        title: "Il sistema permette all'utente di salvare e confrontare scenari",
        items: [
          {
            row: 228,
            level: 1,
            text: "Permette di salvare uno scenario, indicando un nome",
          },
          {
            row: 230,
            level: 1,
            text: "Permette di modificare ed eliminare uno scenario",
          },
          {
            row: 231,
            level: 1,
            text: "Permette di confrontare due o più scenari",
          },
        ],
      },
    ],
    definitions: ["Elenco degli scenari salvati"],
    links: [
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
      {
        to: "confronto-mezzi",
        label: "Confronto tra mezzi",
      },
      {
        to: "suggerimenti",
        label: "Suggerimenti",
      },
    ],
  },
  {
    id: "profilo",
    name: "Il tuo profilo",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema permette all'utente di indicare e modificare abitudini, preferenze, vincoli e dimensioni da approfondire.",
    blocks: [
      {
        code: "1.1",
        title:
          "Il sistema permette all'ospite di registrarsi e all'utente di accedere al proprio account",
        items: [
          {
            row: 235,
            level: 1,
            text: "Permette all'ospite di compilare il profilo durante la registrazione",
          },
        ],
      },
      {
        code: "1.2",
        title: "Il sistema permette all'utente di indicare le proprie abitudini di mobilità",
        items: [
          {
            row: 241,
            level: 1,
            text: "Permette di indicare i mezzi usati abitualmente: auto, moto e scooter, autobus, metropolitana, treno, bici, monopattino, piedi, altro",
          },
          {
            row: 242,
            level: 1,
            text: "Permette di indicare la frequenza d'uso di ogni mezzo",
          },
          {
            row: 243,
            level: 1,
            text: "Permette di indicare la distanza percorsa in media",
          },
          {
            row: 244,
            level: 1,
            text: "Permette di indicare i motivi principali degli spostamenti: lavoro, studio, famiglia, tempo libero, commissioni",
          },
          {
            row: 245,
            level: 1,
            text: "Permette di modificare le abitudini indicate",
          },
        ],
      },
      {
        code: "1.3",
        title: "Il sistema permette all'utente di indicare preferenze e vincoli di mobilità",
        items: [
          {
            row: 247,
            level: 1,
            text: "Permette di indicare la priorità tra tempo, costo e comodità",
          },
          {
            row: 248,
            level: 1,
            text: "Permette di indicare i propri vincoli, senza dati sanitari: non guido; accompagno altre persone; trasporto oggetti ingombranti; ho orari rigidi o turni; la mia zona è poco servita dal trasporto pubblico; tempo massimo accettabile per uno spostamento abituale; nessun vincolo",
          },
          {
            row: 249,
            level: 1,
            text: "Permette di modificare preferenze e vincoli",
          },
        ],
      },
      {
        code: "1.4",
        title:
          "Il sistema permette all'utente di indicare le dimensioni della mobilità che vuole approfondire",
        items: [
          {
            row: 251,
            level: 1,
            text: "Permette di scegliere una o più dimensioni: comportamentale, ambientale, sicurezza, economica, salute",
          },
          {
            row: 252,
            level: 1,
            text: "Permette di modificare la scelta",
          },
        ],
      },
      {
        code: "9.1",
        title:
          "Il sistema permette all'utente di creare un gruppo, se non fa già parte di un gruppo",
        items: [
          {
            row: 307,
            level: 1,
            text: "Permette di creare un gruppo, indicandone il nome",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "account",
        label: "Account",
      },
      {
        to: "gruppo",
        label: "Gestione Gruppo",
      },
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "veicoli",
        label: "Gestione Veicoli",
      },
      {
        to: "spese",
        label: "Spese",
      },
      {
        to: "abbonamenti",
        label: "Abbonamenti",
      },
      {
        to: "impostazioni",
        label: "Impostazioni",
      },
    ],
  },
  {
    id: "account",
    name: "Account",
    nav: "profilo",
    type: "pagina",
    purpose: "Il sistema permette all'utente di modificare nome, email e password.",
    blocks: [
      {
        code: "1.1",
        title:
          "Il sistema permette all'ospite di registrarsi e all'utente di accedere al proprio account",
        items: [
          {
            row: 239,
            level: 1,
            text: "Permette all'utente di modificare nome, email e password",
          },
          {
            row: 237,
            level: 1,
            text: "Permette all'utente di accedere con email e password",
          },
          {
            row: 238,
            level: 1,
            text: "Permette all'utente di recuperare l'accesso, quando dimentica la password",
          },
          {
            row: 234,
            level: 1,
            text: "Permette all'ospite di modifcare un account, indicando nome, email e password",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "profilo",
        label: "Il tuo profilo",
      },
      {
        to: "privacy-dati",
        label: "Privacy e dati",
      },
    ],
  },
  {
    id: "veicoli",
    name: "Gestione Veicoli",
    nav: "profilo",
    type: "pagina",
    purpose: "Il sistema permette all'utente di assegnare i veicoli a un referente o al gruppo.",
    blocks: [
      {
        code: "8.2",
        title:
          "Il sistema permette all'utente di assegnare i veicoli a un referente (singolo utente) o al gruppo",
        items: [
          {
            row: 295,
            level: 1,
            text: "Permette di scegliere come referente un altro componente del gruppo",
          },
          {
            row: 296,
            level: 1,
            text: "Permette di associare il veicolo al gruppo, senza referente",
          },
          {
            row: 297,
            level: 1,
            text: "Permette all'amministratore di cambiare il referente di un veicolo del gruppo",
          },
        ],
      },
    ],
    definitions: ["Elenco dei veicoli dell'utente e del gruppo, compresi quelli archiviati"],
    links: [
      {
        to: "dettaglio-veicolo",
        label: "Dettaglio veicolo",
      },
      {
        to: "abbonamenti",
        label: "Abbonamenti",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "dettaglio-veicolo",
    name: "Dettaglio veicolo",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema permette all'utente di inserire e modificare un veicolo e le sue spese ricorrenti.",
    blocks: [
      {
        code: "8.1",
        title: "Il sistema permette all'utente di inserire i propri veicoli",
        items: [
          {
            row: 284,
            level: 1,
            text: "Permette di inserire un veicolo, indicando nome, tipo (auto, moto, scooter, furgone, bici, monopattino, altro), alimentazione (benzina, gasolio, GPL, metano, ibrido, ibrido plug-in, elettrico, nessuna), consumo medio e anno di immatricolazione",
          },
          {
            row: 285,
            level: 1,
            text: "Permette di modificare i dati di un veicolo",
          },
          {
            row: 286,
            level: 1,
            text: "Chiede all'utente che modifica consumo medio o alimentazione di un veicolo se applicare la modifica anche agli spostamenti passati",
          },
          {
            row: 287,
            level: 1,
            text: "Permette di scegliere il veicolo predefinito",
          },
          {
            row: 288,
            level: 1,
            text: "Permette di archiviare un veicolo, conservandone spese e viaggi",
          },
          {
            row: 289,
            level: 1,
            text: "Propone di includere l'ammortamento nei costi, quando il veicolo è un'auto o una moto",
          },
          {
            row: 290,
            level: 2,
            text: "Chiede prezzo e anno di acquisto",
          },
          {
            row: 291,
            level: 2,
            text: "Permette di indicare data di acquisto, anni o chilometri di utilizzo previsti e valore di rivendita atteso",
          },
          {
            row: 292,
            level: 2,
            text: "Permette di escludere l'ammortamento in ogni momento",
          },
        ],
      },
      {
        code: "8.3",
        title:
          "Il sistema permette all'utente di inserire le spese ricorrenti dei veicoli, notificandone le scadenze",
        items: [
          {
            row: 299,
            level: 1,
            text: "Permette di inserire una spesa ricorrente, indicando categoria (assicurazione, tassa automobilistica, revisione, manutenzione), importo, data, periodicità, scadenza e veicolo",
          },
          {
            row: 300,
            level: 1,
            text: "Chiede se la spesa ricorrente è dell'utente o del gruppo, quando l'utente fa parte di un gruppo",
          },
          {
            row: 303,
            level: 1,
            text: "Permette di modificare ed eliminare una spesa ricorrente",
          },
        ],
      },
    ],
    definitions: ["Elenco delle spese ricorrenti del veicolo, con le scadenze"],
    links: [
      {
        to: "veicoli",
        label: "Gestione Veicoli",
      },
    ],
  },
  {
    id: "spese",
    name: "Spese",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema permette all'utente di inserire, modificare ed eliminare le spese di mobilità.",
    blocks: [
      {
        code: "2.7",
        title: "Il sistema permette all'utente di inserire le spese di mobilità",
        items: [
          {
            row: 108,
            level: 1,
            text: "Permette di inserire una spesa, indicando importo, data, ora e categoria: rifornimento, ricarica, parcheggio, pedaggio, biglietto, noleggio e sharing",
          },
          {
            row: 111,
            level: 1,
            text: "Propone lo spostamento in cui la spesa è avvenuta, quando data e ora coincidono",
          },
          {
            row: 110,
            level: 1,
            text: "Permette di associare la spesa a uno spostamento, a un veicolo o a entrambi",
          },
          {
            row: 109,
            level: 1,
            text: "Permette di scegliere se la spesa è dell'utente o del gruppo",
          },
          {
            row: 113,
            level: 1,
            text: "Permette di modificare ed eliminare una spesa",
          },
        ],
      },
    ],
    definitions: ["Elenco delle spese inserite"],
    links: [
      {
        to: "dettaglio-spostamento",
        label: "Dettaglio spostamento",
      },
      {
        to: "dettaglio-veicolo",
        label: "Dettaglio veicolo",
      },
      {
        to: "home",
        label: "Home page",
      },
      {
        to: "abbonamenti",
        label: "Abbonamenti",
      },
    ],
  },
  {
    id: "abbonamenti",
    name: "Abbonamenti",
    nav: "profilo",
    type: "pagina",
    purpose: "Il sistema permette all'utente di inserire e modificare i propri abbonamenti.",
    blocks: [
      {
        code: "8.4",
        title: "Il sistema permette all'utente di inserire i propri abbonamenti",
        items: [
          {
            row: 278,
            level: 1,
            text: "Permette di inserire un abbonamento, indicando servizio, tipo (trasporto pubblico, servizio di sharing, pedaggi, parcheggio), prezzo, data di inizio, data di fine, rinnovo e mezzi coperti",
          },
          {
            row: 279,
            level: 1,
            text: "Permette di scegliere se l'abbonamento è dell'utente o del gruppo",
          },
          {
            row: 280,
            level: 1,
            text: "Permette di modificare un abbonamento",
          },
          {
            row: 281,
            level: 1,
            text: "Permette di indicare la fine di un abbonamento",
          },
        ],
      },
    ],
    definitions: ["Elenco degli abbonamenti"],
    links: [
      {
        to: "veicoli",
        label: "Gestione Veicoli",
      },
      {
        to: "spese",
        label: "Spese",
      },
    ],
  },
  {
    id: "gruppo",
    name: "Gestione Gruppo",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema permette all'amministratore di invitare persone, cambiare i ruoli e sciogliere il gruppo, e all'utente di uscirne.",
    blocks: [
      {
        code: "9.2",
        title: "Il sistema permette all'amministratore di invitare persone nel gruppo",
        items: [
          {
            row: 311,
            level: 1,
            text: "Permette di invitare una persona, indicando email e ruolo: amministratore, membro o partecipante",
          },
          {
            row: 316,
            level: 1,
            text: "Permette di revocare un invito non ancora accettato",
          },
        ],
      },
      {
        code: "9.4",
        title:
          "Il sistema permette all'amministratore di cambiare i ruoli e di togliere componenti dal gruppo",
        items: [
          {
            row: 327,
            level: 1,
            text: "Permette di cambiare il ruolo di un componente",
          },
          {
            row: 328,
            level: 1,
            text: "Permette di togliere un componente dal gruppo",
          },
          {
            row: 329,
            level: 1,
            text: "Chiede all'amministratore cosa fare dei veicoli di cui il componente tolto è referente",
          },
        ],
      },
      {
        code: "9.5",
        title: "Il sistema permette all'utente di uscire dal gruppo",
        items: [
          {
            row: 331,
            level: 1,
            text: "Chiede per ogni veicolo di cui l'utente è referente se portarlo con sé o lasciarlo al gruppo",
          },
          {
            row: 332,
            level: 1,
            text: "Chiede all'unico amministratore di sceglierne un altro, prima di uscire",
          },
        ],
      },
      {
        code: "9.6",
        title: "Il sistema permette all'amministratore di sciogliere il gruppo",
        items: [
          {
            row: 338,
            level: 1,
            text: "Mostra all'amministratore i veicoli e gli abbonamenti del gruppo senza referente",
          },
          {
            row: 339,
            level: 1,
            text: "Permette all'amministratore di associare ciascuno a sé o a un altro componente, di archiviarlo o di eliminarlo",
          },
        ],
      },
    ],
    definitions: [
      "Elenco dei componenti con i ruoli e degli inviti con il loro stato",
      "Comandi «Esci dal gruppo» e «Sciogli il gruppo»",
    ],
    links: [
      {
        to: "sintesi-gruppo",
        label: "Sintesi del gruppo",
      },
      {
        to: "veicoli",
        label: "Gestione Veicoli",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "sintesi-gruppo",
    name: "Sintesi del gruppo",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema mostra ad amministratori e membri i risultati, i diari e le spese del gruppo.",
    blocks: [
      {
        code: "4.1",
        title: "Il sistema mostra all'utente la sintesi dei risultati",
        items: [
          {
            row: 178,
            level: 1,
            text: "Mostra ad amministratori e membri la sintesi del gruppo",
          },
          {
            row: 176,
            level: 1,
            text: "Permette di scegliere il periodo",
          },
          {
            row: 179,
            level: 2,
            text: "Mostra i risultati del gruppo",
          },
          {
            row: 180,
            level: 2,
            text: "Mostra i risultati dei singoli componenti che hanno dato il consenso alla condivisione",
          },
          {
            row: 181,
            level: 2,
            text: "Mostra il diario dei singoli componenti che hanno dato il consenso, con i percorsi sulla mappa",
          },
          {
            row: 182,
            level: 2,
            text: "Mostra le spese del gruppo per veicolo",
          },
          {
            row: 183,
            level: 2,
            text: "Mostra le spese del gruppo per utente che le ha inserite",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "gruppo",
        label: "Gestione Gruppo",
      },
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
    ],
  },
  {
    id: "invito",
    name: "Invito al gruppo",
    nav: "",
    type: "pagina",
    purpose:
      "Il sistema mostra all'invitato che cosa condividerà e gli permette di accettare o rifiutare l'invito.",
    blocks: [
      {
        code: "9.3",
        title: "Il sistema permette all'invitato di accettare o rifiutare l'invito",
        items: [
          {
            row: 320,
            level: 1,
            text: "Mostra all'invitato cosa vedranno di lui amministratori e membri, prima dell'accettazione",
          },
          {
            row: 321,
            level: 1,
            text: "Chiede all'invitato il consenso a condividere diario e risultati con amministratori e membri",
          },
          {
            row: 324,
            level: 1,
            text: "Chiede all'utente che fa parte di un altro gruppo di uscirne, prima di accettare",
          },
          {
            row: 322,
            level: 1,
            text: "Permette all'invitato che è già utente di accettare o rifiutare l'invito",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "gruppo",
        label: "Gestione Gruppo",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "impostazioni",
    name: "Impostazioni",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema permette all'utente di personalizzare il servizio, collegare fonti esterne e proteggere l'apertura.",
    blocks: [
      {
        code: "7.4",
        title: "Il sistema permette all'utente di personalizzare il servizio",
        items: [
          {
            row: 46,
            level: 1,
            text: "Permette di scegliere il periodo predefinito",
          },
          {
            row: 47,
            level: 1,
            text: "Permette di scegliere le unità di misura",
          },
          {
            row: 48,
            level: 1,
            text: "Permette di scegliere le preferenze di visualizzazione",
          },
          {
            row: 49,
            level: 1,
            text: "Permette di scegliere quali notifiche ricevere e come riceverle",
          },
        ],
      },
      {
        code: "2.6",
        title:
          "Il sistema chiede all'utente di confermare gli spostamenti rilevati e il veicolo usato",
        items: [
          {
            row: 95,
            level: 1,
            text: "Permette di scegliere quando ricevere la richiesta: mai (resta il mezzo riconosciuto o il veicolo predefinito), dopo un intervallo scelto dall'utente, a fine giornata",
          },
        ],
      },
      {
        code: "7.3",
        title: "Il sistema permette all'utente di collegare fonti di dati esterne",
        items: [
          {
            row: 43,
            level: 1,
            text: "Mostra lo stato dei collegamenti",
          },
          {
            row: 40,
            level: 1,
            text: "Permette di collegare un servizio di monitoraggio dell'attività fisica",
          },
          {
            row: 41,
            level: 1,
            text: "Permette di collegare un servizio di trasporto pubblico",
          },
          {
            row: 44,
            level: 1,
            text: "Permette di scollegare un servizio",
          },
        ],
      },
      {
        code: "7.6",
        title:
          "Il sistema permette all'utente di proteggere l'apertura del servizio con la biometria del dispositivo",
        items: [
          {
            row: 56,
            level: 1,
            text: "Permette di attivare e disattivare il blocco all'apertura",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "privacy-dati",
        label: "Privacy e dati",
      },
      {
        to: "supporto",
        label: "Supporto",
      },
      {
        to: "account",
        label: "Account",
      },
      {
        to: "home",
        label: "Home page",
      },
    ],
  },
  {
    id: "privacy-dati",
    name: "Privacy e dati",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema mostra all'utente i consensi e i dati conservati e gli permette di revocarli, esportarli ed eliminarli.",
    blocks: [
      {
        code: "7.1",
        title: "Il sistema permette all'utente di dare e revocare i propri consensi",
        items: [
          {
            row: 30,
            level: 1,
            text: "Mostra i consensi dati",
          },
          {
            row: 25,
            level: 1,
            text: "Chiede il consenso alla geolocalizzazione",
          },
          {
            row: 26,
            level: 1,
            text: "Chiede il consenso alle notifiche",
          },
          {
            row: 31,
            level: 1,
            text: "Permette di revocare un consenso",
          },
          {
            row: 32,
            level: 1,
            text: "Permette di attivare, sospendere e disattivare il rilevamento degli spostamenti",
          },
        ],
      },
      {
        code: "7.2",
        title: "Il sistema permette all'utente di esercitare i propri diritti sui dati",
        items: [
          {
            row: 34,
            level: 1,
            text: "Mostra i dati conservati sull'utente",
          },
          {
            row: 35,
            level: 1,
            text: "Permette di esportare tutti i propri dati",
          },
          {
            row: 36,
            level: 1,
            text: "Permette di eliminare l'intero diario",
          },
          {
            row: 37,
            level: 1,
            text: "Permette di eliminare l'account",
          },
          {
            row: 38,
            level: 1,
            text: "Chiede all'utente che fa parte di un gruppo di uscire dal gruppo, prima di eliminare l'account",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "impostazioni",
        label: "Impostazioni",
      },
      {
        to: "gruppo",
        label: "Gestione Gruppo",
      },
    ],
  },
  {
    id: "supporto",
    name: "Supporto",
    nav: "profilo",
    type: "pagina",
    purpose:
      "Il sistema mostra a ospiti e utenti guide e informativa sulla privacy e permette di chiedere assistenza.",
    blocks: [
      {
        code: "7.5",
        title:
          "Il sistema mostra a ospiti e utenti le informazioni di supporto e permette di chiedere assistenza",
        items: [
          {
            row: 51,
            level: 1,
            text: "Mostra domande frequenti, guide e informazioni sul servizio",
          },
          {
            row: 52,
            level: 1,
            text: "Mostra l'informativa sulla privacy",
          },
          {
            row: 53,
            level: 1,
            text: "Permette di segnalare un errore",
          },
          {
            row: 54,
            level: 1,
            text: "Permette di inviare una richiesta di assistenza",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "impostazioni",
        label: "Impostazioni",
      },
    ],
  },
  {
    id: "notifiche",
    name: "Notifiche",
    nav: "",
    type: "notifica",
    purpose:
      "Il sistema avvisa l'utente, fuori dall'app, quando c'è qualcosa da confermare, da leggere o in scadenza.",
    blocks: [
      {
        code: "2.6",
        title:
          "Il sistema chiede all'utente di confermare gli spostamenti rilevati e il veicolo usato",
        items: [
          {
            row: 96,
            level: 1,
            text: "Notifica che ci sono spostamenti da confermare",
          },
        ],
      },
      {
        code: "4.4",
        title: "Il sistema mostra all'utente report periodici",
        items: [
          {
            row: 204,
            level: 1,
            text: "Notifica che un report è disponibile",
          },
        ],
      },
      {
        code: "6.3",
        title:
          "Il sistema calcola per l'utente i progressi verso i suoi obiettivi, notificando i cambiamenti rilevanti",
        items: [
          {
            row: 274,
            level: 1,
            text: "Notifica quando l'utente si avvicina al limite di un budget",
          },
          {
            row: 275,
            level: 1,
            text: "Notifica quando l'utente supera il limite di un budget",
          },
          {
            row: 273,
            level: 1,
            text: "Notifica quando un obiettivo è raggiunto",
          },
        ],
      },
      {
        code: "8.3",
        title:
          "Il sistema permette all'utente di inserire le spese ricorrenti dei veicoli, notificandone le scadenze",
        items: [
          {
            row: 304,
            level: 1,
            text: "Notifica la scadenza di assicurazione, revisione e tassa automobilistica",
          },
        ],
      },
    ],
    definitions: [],
    links: [
      {
        to: "conferma-spostamenti",
        label: "Conferma spostamenti",
      },
      {
        to: "report",
        label: "Report",
      },
      {
        to: "obiettivi",
        label: "Obiettivi",
      },
      {
        to: "dettaglio-veicolo",
        label: "Dettaglio veicolo",
      },
    ],
  },
  {
    id: "email-invito",
    name: "Email di invito al gruppo",
    nav: "",
    type: "email",
    purpose:
      "Il sistema avvisa via email la persona invitata e, se è ospite, le chiede di registrarsi.",
    blocks: [
      {
        code: "9.2",
        title: "Il sistema permette all'amministratore di invitare persone nel gruppo",
        items: [
          {
            row: 313,
            level: 1,
            text: "Notifica l'invito all'invitato via email",
          },
          {
            row: 314,
            level: 1,
            text: "Chiede all'invitato che è ospite di registrarsi",
          },
        ],
      },
    ],
    definitions: ["Contenuto dell'email: chi invita, nome del gruppo, che cosa si condividerà"],
    links: [
      {
        to: "registrazione",
        label: "Registrazione utente",
      },
      {
        to: "invito",
        label: "Invito al gruppo",
      },
    ],
  },
] as const;
