import { ReactNode } from "react";
import { extendedScreenDefinitions, ExtendedScreenId } from "../../data/extendedScreenDefinitions";
import { EnvironmentId, extendedExampleCopy, extendedSampleValues } from "../../data/sampleData";
import { ScreenHeader } from "./ReviewFrame";
import {
  Block,
  DashedDefinition,
  EmptyState,
  Field,
  Pills,
  Placeholder,
  SelectField,
  Switch,
} from "./WireframeUI";

export type ExtendedScreenProps = {
  empty: boolean;
  onNavigate: (id: EnvironmentId | "index") => void;
};

const choicesByRow: Record<number, readonly string[]> = {
  25: ["Consentire", "Non consentire"],
  26: ["Consentire", "Non consentire"],
  32: ["Attivo", "Sospeso", "Disattivato"],
  46: ["Questa settimana", "Questo mese"],
  47: ["Metriche", "Imperiali"],
  56: ["Attivare", "Disattivare"],
  95: ["Mai", "Dopo un intervallo", "A fine giornata"],
  109: ["Dell’utente", "Del gruppo"],
  176: ["Settimana", "Mese", "Periodo personalizzato"],
  198: ["Settimana precedente", "Mese precedente", "Due periodi", "Inizio e oggi"],
  212: ["Casa–stazione", "Catena casa–stazione–ufficio", "Nuovo tragitto"],
  214: ["Automobile", "Treno", "Bicicletta", "Piedi", "Combinazione"],
  222: ["Usare meno l’auto", "Usare il treno", "Andare a piedi", "Combinare più mezzi"],
  247: ["Tempo", "Costo", "Comodità"],
  279: ["Dell’utente", "Del gruppo"],
  287: ["Predefinito", "Non predefinito"],
  296: ["Referente", "Gruppo senza referente"],
  300: ["Dell’utente", "Del gruppo"],
  321: ["Consentire", "Non consentire"],
};

const notificationTargets: Record<number, EnvironmentId> = {
  96: "conferma-spostamenti",
  204: "report",
  273: "obiettivi",
  274: "obiettivi",
  275: "obiettivi",
  304: "dettaglio-veicolo",
};

function shortLabel(text: string) {
  return text
    .replace(
      /^(Permette|Chiede|Mostra|Spiega|Confronta|Simula|Suggerisce|Propone|Notifica) (all'utente |ad amministratori e membri |per l'utente |di |che |se |su )?/i,
      "",
    )
    .replace(/^l'utente /i, "")
    .replace(/^un |^una /i, "")
    .replace(/\.$/, "");
}

function ResultCard({ children, row }: { children: ReactNode; row: number }) {
  return (
    <article className="result-card" data-riga={row}>
      <span className="row-tag">riga {row}</span>
      {children}
    </article>
  );
}

function Voice({
  screen,
  item,
  onNavigate,
}: {
  screen: ExtendedScreenId;
  item: { row: number; level: number; text: string };
  onNavigate: (id: EnvironmentId | "index") => void;
}) {
  const text = item.text;
  const label = shortLabel(text);
  const value = extendedSampleValues[item.row];
  const indent = item.level === 2 ? "level-two" : "";

  if (/mappa/i.test(text)) {
    return (
      <div className={indent} data-riga={item.row}>
        <Placeholder
          label={/punti critici/i.test(text) ? "Mappa dei punti critici" : "Mappa dei percorsi"}
        />
      </div>
    );
  }

  if ([234, 235, 237, 238].includes(item.row)) {
    return (
      <ResultCard row={item.row}>
        <span className="review-note">voce da rivedere nell’albero</span>
        <strong>{label}</strong>
        <p>{value ?? extendedExampleCopy.generic}</p>
        {item.row === 238 && (
          <button className="button secondary full">Recuperare l’accesso</button>
        )}
      </ResultCard>
    );
  }

  if (item.row === 205) {
    return (
      <div data-riga={item.row}>
        <strong>Esportare report</strong>
        <Pills items={["Immagine", "PDF", "Foglio Excel"]} />
      </div>
    );
  }

  if (screen === "confronto-periodi" && [196, 197, 198, 199].includes(item.row)) {
    return (
      <button className="button secondary full" data-riga={item.row}>
        {label}
      </button>
    );
  }

  if (
    !(screen === "simulazione" && item.row === 223) &&
    /Confronta|Simula|risultati|report|approfondimenti|glossario|fonti e metodi|dati conservati/i.test(
      text,
    )
  ) {
    const chart = /emissioni|costi|tempo con mezzi|durata|variazioni|differenza mensile/i.test(
      text,
    );
    return (
      <ResultCard row={item.row}>
        <strong>{label}</strong>
        {chart && <Placeholder compact label={`Grafico: ${label}`} />}
        <p>{value ?? extendedExampleCopy.generic}</p>
        {/stima|emissioni|simula/i.test(text) && (
          <small>stimato · attendibilità media · metodo documentato</small>
        )}
      </ResultCard>
    );
  }

  if (screen === "confronto-mezzi" && item.row === 219) {
    return (
      <div className="comparison-table" data-riga={item.row}>
        <div>
          <strong>Grandezza</strong>
          <strong>Auto</strong>
          <strong>Treno + piedi</strong>
        </div>
        <div>
          <span>Durata</span>
          <span>33 min</span>
          <span>42 min</span>
        </div>
        <div>
          <span>Costo</span>
          <span>5,80 €</span>
          <span>4,20 €</span>
        </div>
        <div>
          <span>Emissioni</span>
          <span>4,7 kg CO₂e</span>
          <span>0,9 kg CO₂e</span>
        </div>
        <div>
          <span>Attività fisica</span>
          <span>0 min</span>
          <span>12 min</span>
        </div>
      </div>
    );
  }

  if (screen === "simulazione" && item.row === 223) {
    return (
      <div className="comparison-table" data-riga={item.row}>
        <div>
          <strong>Risultato</strong>
          <strong>Prima</strong>
          <strong>Dopo</strong>
        </div>
        <div>
          <span>Costo mensile</span>
          <span>199 €</span>
          <span>173 €</span>
        </div>
        <div>
          <span>CO₂e mensile</span>
          <span>54 kg</span>
          <span>39 kg</span>
        </div>
        <div>
          <span>Attività fisica</span>
          <span>96 min</span>
          <span>144 min</span>
        </div>
        <div>
          <span>Risultato annuale</span>
          <span>2.388 €</span>
          <span>2.076 €</span>
        </div>
      </div>
    );
  }

  if (/Spiega|Suggerisce/i.test(text)) {
    return (
      <ResultCard row={item.row}>
        <strong>{label}</strong>
        <p>
          {screen === "suggerimenti"
            ? extendedExampleCopy.suggestion
            : extendedExampleCopy.analysis}
        </p>
        <small>dato rilevato {item.row === 190 ? "· stima con attendibilità media" : ""}</small>
        {screen === "suggerimenti" && (
          <Pills items={["Lo provo", "Non mi interessa", "Non mostrarmelo più"]} />
        )}
      </ResultCard>
    );
  }

  if (item.row in notificationTargets) {
    return (
      <button
        className="notification-card"
        data-riga={item.row}
        onClick={() => onNavigate(notificationTargets[item.row])}
      >
        <strong>Motus</strong>
        <span>{label}</span>
        <small>Ora · aprire</small>
      </button>
    );
  }

  if (/consenso|interruttore|attivare e disattivare|escludere l'ammortamento/i.test(text)) {
    return (
      <div className={indent} data-riga={item.row}>
        <Switch label={label} defaultOn={item.row !== 292} />
      </div>
    );
  }

  if (choicesByRow[item.row]) {
    return (
      <div className={indent} data-riga={item.row}>
        <SelectField label={label} options={choicesByRow[item.row]} defaultValue={value} />
      </div>
    );
  }

  if (
    /inserire|indicare|creare|modificare nome|email e password|prezzo|data|importo|nome/i.test(text)
  ) {
    return (
      <div className={indent} data-riga={item.row}>
        <Field label={label} defaultValue={value ?? ""} />
      </div>
    );
  }

  if (
    /eliminare|archiviare|revocare|scollegare|esportare|accettare|rifiutare|recuperare|trasformare|salvare|modificare|sospendere|uscire|sciogliere|togliere|cambiare il ruolo|applicare la modifica/i.test(
      text,
    )
  ) {
    return (
      <button className={`button secondary full ${indent}`} data-riga={item.row}>
        {label}
      </button>
    );
  }

  return (
    <ResultCard row={item.row}>
      <strong>{label}</strong>
      <p>{value ?? extendedExampleCopy.generic}</p>
    </ResultCard>
  );
}

function SectionNavigation({
  id,
  onNavigate,
}: {
  id: ExtendedScreenId;
  onNavigate: (id: EnvironmentId | "index") => void;
}) {
  const groups: Partial<Record<ExtendedScreenId, { id: EnvironmentId; label: string }[]>> = {
    analisi: [
      { id: "analisi", label: "Analisi" },
      { id: "confronto-periodi", label: "Confronto tra periodi" },
      { id: "report", label: "Report" },
      { id: "approfondimenti", label: "Approfondimenti" },
    ],
    suggerimenti: [
      { id: "suggerimenti", label: "Suggerimenti" },
      { id: "obiettivi", label: "Obiettivi" },
      { id: "confronto-mezzi", label: "Confronto tra mezzi" },
      { id: "simulazione", label: "Simulazione" },
    ],
  };
  const group = ["confronto-periodi", "report", "approfondimenti"].includes(id)
    ? groups.analisi
    : ["obiettivi", "confronto-mezzi", "simulazione"].includes(id)
      ? groups.suggerimenti
      : groups[id];
  if (!group) return null;
  return (
    <div className="section-nav">
      {group.map((link) => (
        <button
          key={link.id}
          className={link.id === id ? "active" : ""}
          onClick={() => onNavigate(link.id)}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}

export function ExtendedScreen({
  id,
  empty,
  onNavigate,
}: ExtendedScreenProps & { id: ExtendedScreenId }) {
  const screen = extendedScreenDefinitions.find((item) => item.id === id)!;
  const backTo = ["confronto-periodi", "report", "approfondimenti"].includes(id)
    ? "analisi"
    : ["privacy-dati", "supporto"].includes(id)
      ? "impostazioni"
      : null;

  return (
    <>
      <ScreenHeader
        title={screen.name}
        back={
          backTo
            ? () => onNavigate(backTo as EnvironmentId)
            : screen.nav === ""
              ? () => onNavigate("index")
              : undefined
        }
      />
      <SectionNavigation id={id} onNavigate={onNavigate} />
      {id === "profilo" && (
        <nav className="portal-grid" aria-label="Sezioni del profilo">
          {screen.links
            .filter((link) => !["home"].includes(link.to))
            .map((link) => (
              <button key={link.to} onClick={() => onNavigate(link.to as EnvironmentId)}>
                {link.label}
              </button>
            ))}
        </nav>
      )}
      {id === "notifiche" && (
        <div className="lock-heading">
          <strong>Martedì 24 novembre</strong>
          <span>08:30</span>
        </div>
      )}
      {id === "email-invito" && (
        <div className="mail-heading">
          <span>Da: Motus</span>
          <strong>Invito alla Famiglia di Giulia</strong>
          <span>A: anna@example.it</span>
        </div>
      )}
      {(id === "gruppo" || id === "sintesi-gruppo") && (
        <p className="context-note">{extendedExampleCopy.group}</p>
      )}
      {empty ? (
        <EmptyState
          message={`Qui compariranno ${screen.purpose.toLowerCase().replace(/^il sistema /, "")}`}
          action={id === "gruppo" ? "Creare un gruppo" : "Cominciare"}
          onAction={() => (id === "gruppo" ? onNavigate("profilo") : undefined)}
        />
      ) : (
        <>
          {screen.blocks.map((block, blockIndex) => (
            <Block key={`${id}-${block.code}`} code={block.code} title={block.title}>
              {id === "registrazione" && (
                <div className="step-heading">
                  <strong>Passo {blockIndex + 1} di 6</strong>
                  <span>{blockIndex > 0 && blockIndex < 4 ? "Si può saltare" : "Richiesto"}</span>
                </div>
              )}
              {block.items.map((item) => (
                <Voice key={item.row} screen={id} item={item} onNavigate={onNavigate} />
              ))}
              {id === "registrazione" && (
                <div className="button-row">
                  <button className="button secondary">Indietro</button>
                  <button className="button primary">Avanti</button>
                </div>
              )}
            </Block>
          ))}
          {id === "registrazione" && (
            <Block code="R" title="Riepilogo · passo 6 di 6">
              <p>Account, abitudini, preferenze, dimensioni e consensi scelti.</p>
              <button className="button secondary full">Modificare le scelte</button>
              <button className="button primary full" onClick={() => onNavigate("home")}>
                Entrare in Motus
              </button>
            </Block>
          )}
          {screen.definitions.map((definition) => (
            <DashedDefinition key={definition}>{definition}</DashedDefinition>
          ))}
          {screen.links.length > 0 && (
            <nav className="linked-screens" aria-label="Schermate collegate">
              {screen.links.map((link) => (
                <button
                  className="button secondary"
                  key={link.to}
                  onClick={() => onNavigate(link.to as EnvironmentId)}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
        </>
      )}
    </>
  );
}
