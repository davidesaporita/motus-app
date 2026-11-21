export type ScreenId =
  | "home"
  | "diario"
  | "dettaglio-spostamento"
  | "inserisci-spostamento"
  | "conferma-spostamenti";

export type EnvironmentId =
  | ScreenId
  | "registrazione"
  | "accesso"
  | "analisi"
  | "confronto-periodi"
  | "report"
  | "approfondimenti"
  | "suggerimenti"
  | "obiettivi"
  | "confronto-mezzi"
  | "simulazione"
  | "profilo"
  | "account"
  | "veicoli"
  | "dettaglio-veicolo"
  | "spese"
  | "abbonamenti"
  | "gruppo"
  | "sintesi-gruppo"
  | "invito"
  | "impostazioni"
  | "privacy-dati"
  | "supporto"
  | "notifiche"
  | "email-invito";

export type ScreenMeta = {
  id: EnvironmentId;
  name: string;
  nav: "home" | "diario" | "analisi" | "cambiamento" | "profilo" | "";
};

export const builtScreens: Record<ScreenId, ScreenMeta> = {
  home: { id: "home", name: "Home page", nav: "home" },
  diario: { id: "diario", name: "Diario spostamenti", nav: "diario" },
  "dettaglio-spostamento": {
    id: "dettaglio-spostamento",
    name: "Dettaglio spostamento",
    nav: "diario",
  },
  "inserisci-spostamento": {
    id: "inserisci-spostamento",
    name: "Inserisci spostamento",
    nav: "diario",
  },
  "conferma-spostamenti": {
    id: "conferma-spostamenti",
    name: "Conferma spostamenti",
    nav: "diario",
  },
};

export const allScreenGroups = [
  {
    label: "Home",
    items: [{ id: "home", name: "Home page" }],
  },
  {
    label: "Diario",
    items: [
      { id: "diario", name: "Diario spostamenti" },
      { id: "dettaglio-spostamento", name: "Dettaglio spostamento" },
      { id: "inserisci-spostamento", name: "Inserisci spostamento" },
      { id: "conferma-spostamenti", name: "Conferma spostamenti" },
    ],
  },
  {
    label: "Analisi",
    items: [
      { id: "analisi", name: "Analisi" },
      { id: "confronto-periodi", name: "Confronto tra periodi" },
      { id: "report", name: "Report" },
      { id: "approfondimenti", name: "Approfondimenti" },
    ],
  },
  {
    label: "Cambiamento",
    items: [
      { id: "suggerimenti", name: "Suggerimenti" },
      { id: "obiettivi", name: "Obiettivi" },
      { id: "confronto-mezzi", name: "Confronto tra mezzi" },
      { id: "simulazione", name: "Simulazione e scenari" },
    ],
  },
  {
    label: "Profilo",
    items: [
      { id: "profilo", name: "Il tuo profilo" },
      { id: "account", name: "Account" },
      { id: "veicoli", name: "Gestione Veicoli" },
      { id: "dettaglio-veicolo", name: "Dettaglio veicolo" },
      { id: "spese", name: "Spese" },
      { id: "abbonamenti", name: "Abbonamenti" },
      { id: "gruppo", name: "Gestione Gruppo" },
      { id: "sintesi-gruppo", name: "Sintesi del gruppo" },
      { id: "impostazioni", name: "Impostazioni" },
      { id: "privacy-dati", name: "Privacy e dati" },
      { id: "supporto", name: "Supporto" },
    ],
  },
  {
    label: "Fuori dalla barra",
    items: [
      { id: "registrazione", name: "Registrazione utente" },
      { id: "accesso", name: "Accesso" },
      { id: "invito", name: "Invito al gruppo" },
      { id: "notifiche", name: "Notifiche" },
      { id: "email-invito", name: "Email di invito al gruppo" },
    ],
  },
] as const;

export const navItems = [
  { id: "home", label: "Home", target: "home", built: true },
  { id: "diario", label: "Diario", target: "diario", built: true },
  { id: "analisi", label: "Analisi", target: "analisi", built: false },
  { id: "cambiamento", label: "Cambiamento", target: "suggerimenti", built: false },
  { id: "profilo", label: "Profilo", target: "profilo", built: false },
] as const;

export const user = {
  name: "Giulia",
  defaultVehicle: "Auto di Giulia",
  vehicleType: "auto",
  fuel: "benzina",
};

export const trips = [
  {
    id: "T-01",
    date: "17/11/2026",
    start: "07:42",
    end: "07:54",
    from: "Casa",
    to: "Stazione Porta Susa",
    mode: "piedi",
    distance: "0,9 km",
    duration: "12 min",
    reason: "lavoro",
    status: "confermato",
    habitual: true,
    emissions: "0 kg CO₂e",
    cost: "0,00 €",
    activeTime: "12 min",
  },
  {
    id: "T-02",
    date: "17/11/2026",
    start: "08:02",
    end: "08:41",
    from: "Torino Porta Susa",
    to: "Milano Centrale",
    mode: "treno",
    distance: "141 km",
    duration: "39 min",
    reason: "lavoro",
    status: "confermato",
    habitual: true,
    emissions: "4,1 kg CO₂e",
    cost: "18,50 €",
    activeTime: "0 min",
  },
  {
    id: "T-03",
    date: "18/11/2026",
    start: "07:45",
    end: "07:57",
    from: "Casa",
    to: "Stazione Porta Susa",
    mode: "piedi",
    distance: "0,9 km",
    duration: "12 min",
    reason: "lavoro",
    status: "proposto",
    habitual: true,
    emissions: "0 kg CO₂e",
    cost: "0,00 €",
    activeTime: "12 min",
  },
  {
    id: "T-04",
    date: "22/11/2026",
    start: "10:15",
    end: "10:48",
    from: "Casa",
    to: "Parco della Mandria",
    mode: "automobile",
    distance: "24,6 km",
    duration: "33 min",
    reason: "tempo libero",
    status: "proposto",
    habitual: false,
    emissions: "4,7 kg CO₂e",
    cost: "5,80 €",
    activeTime: "0 min",
  },
] as const;

export const summary = {
  period: "16–22 novembre 2026",
  distance: "356 km",
  modeShare: "Treno 79% · Automobile 15% · Piedi 6%",
  emissions: "13,5 kg CO₂e",
  cost: "49,80 €",
  activeTime: "96 min",
};

export const draftTrip = {
  date: "2026-11-22",
  start: "10:15",
  end: "10:48",
  from: "Casa",
  to: "Parco della Mandria",
  mode: "automobile",
  distance: "24,6 km",
  reason: "tempo libero",
};

export const selectedTripDetails = {
  vehicle: "Auto di Giulia · benzina",
  consumption: "1,6 l",
  provenance: "rilevato",
};

export const modes = [
  "automobile",
  "motociclo",
  "autobus",
  "metropolitana",
  "treno",
  "bicicletta",
  "monopattino",
  "piedi",
  "altro",
];

export const diaryModes = ["Tutti i mezzi", "piedi", "treno", "automobile"];

export const reasons = [
  "lavoro",
  "studio",
  "famiglia",
  "tempo libero",
  "commissioni",
  "non indicato",
];

export const vehicleAvailability = ["proprio", "del gruppo", "di altri", "pubblico", "sharing"];
export const userRoles = ["conducente", "passeggero"];
export const vehicleTypes = ["auto", "moto", "scooter", "furgone", "bici", "monopattino", "altro"];
export const fuelTypes = [
  "benzina",
  "gasolio",
  "GPL",
  "metano",
  "ibrido",
  "ibrido plug-in",
  "elettrico",
  "nessuna",
];
export const frequentPlaceNames = ["casa", "lavoro", "scuola", "altro nome"];

export const extendedSampleValues: Record<number, string> = {
  46: "Questa settimana",
  47: "km, kg CO₂e, €",
  48: "Indicatori principali",
  95: "A fine giornata",
  176: "16–22 novembre 2026",
  198: "16–22 novembre / 9–15 novembre",
  200: "356 km → 331 km · −25 km",
  235: "Giulia",
  237: "giulia@example.it",
  239: "Giulia · giulia@example.it · ••••••••",
  241: "Piedi, treno, automobile",
  242: "Treno: 4 volte a settimana",
  243: "356 km a settimana",
  244: "Lavoro, tempo libero, commissioni",
  247: "1. tempo · 2. costo · 3. comodità",
  248: "Orari rigidi; trasporto oggetti nel fine settimana",
  251: "Ambientale, economica, salute",
  263: "Ambientale · Emissioni · 10 kg CO₂e · settimana",
  265: "Mobilità · 180 € · mese",
  270: "18 kg iniziale · 13,5 kg attuale · 10 kg desiderato",
  271: "56% del percorso",
  278: "Trenitalia · trasporto pubblico · 145,00 €",
  284: "Auto di Giulia · auto · benzina · 6,5 l/100 km · 2018",
  295: "Marco",
  299: "Assicurazione · 520,00 € · annuale · 10/04/2027",
  307: "Famiglia di Giulia",
  311: "marco@example.it · membro",
};

export const extendedExampleCopy = {
  analysis:
    "Questa settimana il treno concentra la maggior parte della distanza e riduce le emissioni.",
  suggestion: "Usa l’auto una sola volta a settimana: è compatibile con i tuoi orari.",
  generic: "Esempio riferito alla settimana di Giulia.",
  group: "Famiglia di Giulia · Giulia, Marco e Anna · un’auto condivisa",
};
