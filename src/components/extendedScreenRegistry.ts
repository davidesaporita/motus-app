import { ComponentType } from "react";
import { ExtendedScreenProps } from "./shared/ExtendedScreen";
import { RegistrazioneScreen } from "../screens/registrazione/RegistrazioneScreen";
import { AccessoScreen } from "../screens/accesso/AccessoScreen";
import { AnalisiScreen } from "../screens/analisi/AnalisiScreen";
import { ConfrontoPeriodiScreen } from "../screens/confronto-periodi/ConfrontoPeriodiScreen";
import { ReportScreen } from "../screens/report/ReportScreen";
import { ApprofondimentiScreen } from "../screens/approfondimenti/ApprofondimentiScreen";
import { SuggerimentiScreen } from "../screens/suggerimenti/SuggerimentiScreen";
import { ObiettiviScreen } from "../screens/obiettivi/ObiettiviScreen";
import { ConfrontoMezziScreen } from "../screens/confronto-mezzi/ConfrontoMezziScreen";
import { SimulazioneScreen } from "../screens/simulazione/SimulazioneScreen";
import { ProfiloScreen } from "../screens/profilo/ProfiloScreen";
import { AccountScreen } from "../screens/account/AccountScreen";
import { VeicoliScreen } from "../screens/veicoli/VeicoliScreen";
import { DettaglioVeicoloScreen } from "../screens/dettaglio-veicolo/DettaglioVeicoloScreen";
import { SpeseScreen } from "../screens/spese/SpeseScreen";
import { AbbonamentiScreen } from "../screens/abbonamenti/AbbonamentiScreen";
import { GruppoScreen } from "../screens/gruppo/GruppoScreen";
import { SintesiGruppoScreen } from "../screens/sintesi-gruppo/SintesiGruppoScreen";
import { InvitoScreen } from "../screens/invito/InvitoScreen";
import { ImpostazioniScreen } from "../screens/impostazioni/ImpostazioniScreen";
import { PrivacyDatiScreen } from "../screens/privacy-dati/PrivacyDatiScreen";
import { SupportoScreen } from "../screens/supporto/SupportoScreen";
import { NotificheScreen } from "../screens/notifiche/NotificheScreen";
import { EmailInvitoScreen } from "../screens/email-invito/EmailInvitoScreen";

export const extendedScreenRegistry: Record<string, ComponentType<ExtendedScreenProps>> = {
  registrazione: RegistrazioneScreen,
  accesso: AccessoScreen,
  analisi: AnalisiScreen,
  "confronto-periodi": ConfrontoPeriodiScreen,
  report: ReportScreen,
  approfondimenti: ApprofondimentiScreen,
  suggerimenti: SuggerimentiScreen,
  obiettivi: ObiettiviScreen,
  "confronto-mezzi": ConfrontoMezziScreen,
  simulazione: SimulazioneScreen,
  profilo: ProfiloScreen,
  account: AccountScreen,
  veicoli: VeicoliScreen,
  "dettaglio-veicolo": DettaglioVeicoloScreen,
  spese: SpeseScreen,
  abbonamenti: AbbonamentiScreen,
  gruppo: GruppoScreen,
  "sintesi-gruppo": SintesiGruppoScreen,
  invito: InvitoScreen,
  impostazioni: ImpostazioniScreen,
  "privacy-dati": PrivacyDatiScreen,
  supporto: SupportoScreen,
  notifiche: NotificheScreen,
  "email-invito": EmailInvitoScreen,
};
