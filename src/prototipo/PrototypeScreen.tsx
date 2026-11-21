import {
  EnvironmentId,
  extendedExampleCopy,
  extendedSampleValues,
  modes,
  reasons,
  summary,
  trips,
  user,
} from "../data/sampleData";
import { prototypeDefinitions } from "./prototypeDefinitions";

type Voice = { row: number; level: number; text: string };
const listScreens = new Set([
  "diario",
  "conferma-spostamenti",
  "report",
  "approfondimenti",
  "suggerimenti",
  "obiettivi",
  "veicoli",
  "spese",
  "abbonamenti",
  "gruppo",
  "supporto",
]);
const notificationTargets: Record<number, EnvironmentId> = {
  96: "conferma-spostamenti",
  204: "report",
  273: "obiettivi",
  274: "obiettivi",
  275: "obiettivi",
  304: "dettaglio-veicolo",
};
const choices: Record<number, readonly string[]> = {
  25: ["Consento", "Non consento"],
  26: ["Consento", "Non consento"],
  32: ["Attivo", "Sospeso", "Disattivato"],
  46: ["Settimana", "Mese"],
  47: ["Metriche", "Imperiali"],
  75: reasons,
  95: ["Mai", "Dopo un intervallo", "A fine giornata"],
  98: ["Proprio", "Del gruppo", "Di altri", "Pubblico", "Sharing"],
  99: ["Conducente", "Passeggero"],
  101: ["Auto", "Moto", "Scooter", "Furgone"],
  109: ["Dell’utente", "Del gruppo"],
  176: ["Settimana", "Mese", "Personalizzato"],
  198: ["Settimana precedente", "Mese precedente", "Due periodi", "Inizio e oggi"],
  212: ["Casa–stazione", "Catena abituale", "Nuovo tragitto"],
  214: modes,
  222: ["Meno auto", "Più trasporto pubblico", "Più piedi", "Combinare mezzi"],
  247: ["Tempo", "Costo", "Comodità"],
  279: ["Dell’utente", "Del gruppo"],
  296: ["Referente", "Gruppo senza referente"],
  300: ["Dell’utente", "Del gruppo"],
  311: ["Amministratore", "Membro", "Partecipante"],
  321: ["Consento", "Non consento"],
};

function label(text: string) {
  return text
    .replace(
      /^(Permette|Chiede|Mostra|Spiega|Confronta|Simula|Suggerisce|Propone|Notifica) (all'utente |ad amministratori e membri |per l'utente |di |che |se |su )?/i,
      "",
    )
    .replace(/^l'utente /i, "")
    .replace(/\.$/, "");
}

function Code({ code, show }: { code: string; show: boolean }) {
  return show ? <span className="proto-code">{code}</span> : null;
}

function Chart({ title }: { title: string }) {
  return (
    <div className="screen-chart">
      <svg viewBox="0 0 300 125" role="img" aria-label={title}>
        <line x1="20" y1="106" x2="285" y2="106" />
        <rect x="42" y="56" width="34" height="50" />
        <rect x="98" y="27" width="34" height="79" />
        <rect x="154" y="72" width="34" height="34" />
        <rect x="210" y="43" width="34" height="63" />
      </svg>
      <small>{title}</small>
    </div>
  );
}

function MapPreview({ critical }: { critical: boolean }) {
  return (
    <div className="screen-map">
      <svg
        viewBox="0 0 300 130"
        role="img"
        aria-label={critical ? "Mappa dei punti critici" : "Mappa del percorso"}
      >
        <path d="M18 103 C58 20 118 111 164 48 S236 27 278 83" />
        <circle cx="18" cy="103" r="7" />
        <circle cx="278" cy="83" r="7" />
        {critical && <circle className="critical" cx="164" cy="48" r="9" />}
      </svg>
      <span>{critical ? "Mappa dei punti critici" : "Percorso rilevato"}</span>
    </div>
  );
}

function VoiceItem({
  screen,
  item,
  onNavigate,
}: {
  screen: string;
  item: Voice;
  onNavigate: (id: EnvironmentId | "stile") => void;
}) {
  const text = item.text;
  const title = label(text);
  const nested = item.level === 2 ? "nested" : "";
  if (item.row === 7) {
    return (
      <div data-riga={item.row}>
        <label className="proto-field">
          <span>Email</span>
          <input type="email" defaultValue="giulia@example.it" />
        </label>
        <label className="proto-field">
          <span>Password</span>
          <input type="password" defaultValue="motus2026" />
        </label>
        <button className="proto-primary full-action" onClick={() => onNavigate("home")}>
          Accedere
        </button>
      </div>
    );
  }
  if (item.row === 57) {
    return (
      <div className="biometric-card" data-riga={item.row}>
        <span className="biometric-mark" />
        <strong>Sbloccare Motus</strong>
        <p>Usa l’impronta o il volto del dispositivo.</p>
        <button className="proto-primary">Sbloccare</button>
      </div>
    );
  }
  if (item.row === 72) {
    return (
      <div data-riga={item.row}>
        <div className="field-pair">
          <label className="proto-field">
            <span>Data</span>
            <input type="date" defaultValue="2026-11-22" />
          </label>
          <label className="proto-field">
            <span>Partenza</span>
            <input type="time" defaultValue="10:15" />
          </label>
        </div>
        <label className="proto-field">
          <span>Da</span>
          <input defaultValue="Casa" />
        </label>
        <label className="proto-field">
          <span>A</span>
          <input defaultValue="Parco della Mandria" />
        </label>
        <div className="proto-chips">
          {["Auto", "Treno", "Piedi", "Bici"].map((x) => (
            <button className={x === "Auto" ? "active" : ""} key={x}>
              {x}
            </button>
          ))}
        </div>
        <label className="proto-field">
          <span>Distanza</span>
          <input defaultValue="24,6 km" />
        </label>
      </div>
    );
  }
  if (item.row === 81) {
    return (
      <div className="day-groups" data-riga={item.row}>
        <h3>Martedì 17 novembre</h3>
        {trips.slice(0, 2).map((trip) => (
          <button key={trip.id} onClick={() => onNavigate("dettaglio-spostamento")}>
            <span className="line-icon" />
            <span>
              <strong>
                {trip.from} → {trip.to}
              </strong>
              <small>
                {trip.start} · {trip.mode}
              </small>
            </span>
            <b>{trip.distance}</b>
          </button>
        ))}
        <h3>Mercoledì 18 novembre</h3>
        {trips.slice(2).map((trip) => (
          <button key={trip.id} onClick={() => onNavigate("dettaglio-spostamento")}>
            <span className="line-icon square" />
            <span>
              <strong>
                {trip.from} → {trip.to}
              </strong>
              <small>
                {trip.start} · {trip.mode}
              </small>
            </span>
            <b>{trip.distance}</b>
          </button>
        ))}
      </div>
    );
  }
  if (item.row === 82) {
    return (
      <div className="horizontal-filters" data-riga={item.row}>
        {["Tutti", "Piedi", "Treno", "Auto", "Lavoro"].map((x) => (
          <button className={x === "Tutti" ? "active" : ""} key={x}>
            {x}
          </button>
        ))}
      </div>
    );
  }
  if (item.row === 83) {
    return (
      <label className="proto-field" data-riga={item.row}>
        <span>Cerca per località</span>
        <input type="search" placeholder="Torino, Milano…" />
      </label>
    );
  }
  if (item.row === 86) {
    return (
      <div data-riga={item.row}>
        <MapPreview critical={false} />
        <div className="key-grid">
          <div>
            <span>Distanza</span>
            <strong>24,6 km</strong>
          </div>
          <div>
            <span>Durata</span>
            <strong>33 min</strong>
          </div>
          <div>
            <span>Costo</span>
            <strong>5,80 €</strong>
          </div>
          <div>
            <span>Emissioni</span>
            <strong>4,7 kg CO₂e</strong>
          </div>
        </div>
      </div>
    );
  }
  if (item.row in notificationTargets)
    return (
      <button
        className="lock-notification"
        data-riga={item.row}
        onClick={() => onNavigate(notificationTargets[item.row])}
      >
        <img src="/brand/logo-mark.png" alt="" />
        <span>
          <strong>Motus</strong>
          <small>{title}</small>
        </span>
        <time>ora</time>
      </button>
    );
  if (/mappa/i.test(text))
    return (
      <div className={nested} data-riga={item.row}>
        <MapPreview critical={/punti critici/i.test(text)} />
      </div>
    );
  if (item.row === 205)
    return (
      <div className="proto-choice" data-riga={item.row}>
        <strong>Esporta</strong>
        {["Immagine", "PDF", "Excel"].map((x) => (
          <button key={x}>{x}</button>
        ))}
      </div>
    );
  if ([121, 134, 152, 161, 200, 203, 219, 223].includes(item.row))
    return (
      <div className={nested} data-riga={item.row}>
        <Chart title={title} />
        <p className="chart-insight">
          Il treno riduce emissioni e costo; camminare aumenta il movimento.
        </p>
      </div>
    );
  if (/consenso|attivare e disattivare|blocco all'apertura|escludere l'ammortamento/i.test(text))
    return (
      <label className={`setting-row ${nested}`} data-riga={item.row}>
        <span>
          <strong>{title}</strong>
          <small>Puoi cambiare questa scelta in ogni momento.</small>
        </span>
        <input type="checkbox" defaultChecked={item.row !== 292} />
        <i />
      </label>
    );
  if (choices[item.row])
    return (
      <label className={`proto-field ${nested}`} data-riga={item.row}>
        <span>{title}</span>
        <select>
          {choices[item.row].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
    );
  if (
    /eliminare|archiviare|revocare|scollegare|esportare|accettare|rifiutare|recuperare|trasformare|salvare|sospendere|uscire|sciogliere|togliere|segnalare|inviare una richiesta|fine di un abbonamento/i.test(
      text,
    )
  )
    return (
      <button
        className={`proto-secondary full-action ${/eliminare|sciogliere/i.test(text) ? "danger-action" : ""} ${nested}`}
        data-riga={item.row}
      >
        {title}
      </button>
    );
  if (
    /inserire|indicare|creare|modificare nome|email|password|prezzo|data|importo|luogo|consumo medio/i.test(
      text,
    )
  )
    return (
      <label className={`proto-field ${nested}`} data-riga={item.row}>
        <span>{title}</span>
        <input defaultValue={extendedSampleValues[item.row] ?? ""} placeholder="Inserisci" />
      </label>
    );
  if (/Spiega|Suggerisce/i.test(text))
    return (
      <article className={`insight-card ${nested}`} data-riga={item.row}>
        <span className="benefit">
          {screen === "suggerimenti" ? "−15 kg CO₂e/mese" : "Dato spiegato"}
        </span>
        <strong>{title}</strong>
        <p>
          {screen === "suggerimenti"
            ? extendedExampleCopy.suggestion
            : extendedExampleCopy.analysis}
        </p>
        {screen === "suggerimenti" && (
          <div className="inline-actions">
            <button>Lo provo</button>
            <button>Non mi interessa</button>
            <button>Non mostrarlo più</button>
          </div>
        )}
        <small>rilevato · metodo documentato</small>
      </article>
    );
  return (
    <article className={`proto-data-row ${nested}`} data-riga={item.row}>
      <span className="line-icon" />
      <div>
        <strong>{title}</strong>
        <small>{extendedSampleValues[item.row] ?? extendedExampleCopy.generic}</small>
      </div>
      <span>→</span>
    </article>
  );
}

function Tabs({
  id,
  onNavigate,
}: {
  id: string;
  onNavigate: (id: EnvironmentId | "stile") => void;
}) {
  const analysis = ["analisi", "confronto-periodi", "report", "approfondimenti"];
  const change = ["suggerimenti", "obiettivi", "confronto-mezzi", "simulazione"];
  const ids = analysis.includes(id) ? analysis : change.includes(id) ? change : [];
  const labels: Record<string, string> = {
    analisi: "Analisi",
    "confronto-periodi": "Periodi",
    report: "Report",
    approfondimenti: "Approfondimenti",
    suggerimenti: "Suggerimenti",
    obiettivi: "Obiettivi",
    "confronto-mezzi": "Mezzi",
    simulazione: "Simulazione",
  };
  return ids.length ? (
    <nav className="proto-tabs screen-tabs">
      {ids.map((x) => (
        <button
          className={x === id ? "active" : ""}
          key={x}
          onClick={() => onNavigate(x as EnvironmentId)}
        >
          {labels[x]}
        </button>
      ))}
    </nav>
  ) : null;
}

function Intro({ id }: { id: string }) {
  if (id === "accesso")
    return (
      <div className="guest-brand">
        <img src="/brand/logo-full.png" alt="Motus — Mind your move" />
      </div>
    );
  if (id === "registrazione")
    return (
      <div className="registration-progress">
        <strong>Passo 2 di 6</strong>
        <span>
          <i />
        </span>
        <small>Abitudini di mobilità</small>
      </div>
    );
  if (id === "notifiche")
    return (
      <div className="lock-time">
        <strong>08:30</strong>
        <span>Martedì 24 novembre</span>
      </div>
    );
  if (id === "email-invito")
    return (
      <div className="mail-brand">
        <span>Da: Motus</span>
        <strong>Giulia ti invita nel gruppo Famiglia</strong>
        <img src="/brand/logo-full.png" alt="Motus — Mind your move" />
      </div>
    );
  if (id === "profilo")
    return (
      <div className="profile-card">
        <span>GG</span>
        <div>
          <strong>{user.name}</strong>
          <p>Pendolare · piedi, treno e auto</p>
        </div>
      </div>
    );
  if (id === "gruppo")
    return (
      <div className="profile-card">
        <span>FG</span>
        <div>
          <strong>Famiglia di Giulia</strong>
          <p>3 persone · 1 auto condivisa</p>
        </div>
      </div>
    );
  if (id === "spese")
    return (
      <div className="total-card">
        <span>Spese di novembre</span>
        <strong>{summary.cost}</strong>
        <svg viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.9" />
          <circle className="value" cx="21" cy="21" r="15.9" />
        </svg>
      </div>
    );
  return null;
}

export function PrototypeScreen({
  id,
  showCodes,
  onNavigate,
}: {
  id: EnvironmentId;
  showCodes: boolean;
  onNavigate: (id: EnvironmentId | "stile") => void;
}) {
  const screen = prototypeDefinitions.find((x) => x.id === id)!;
  const empty = new URLSearchParams(window.location.search).get("stato") === "vuoto";
  const noBar = screen.nav === "" || screen.type !== "pagina";
  return (
    <main className={`proto-stage ${screen.type !== "pagina" ? "outside-contact" : ""}`}>
      <div className="proto-phone">
        <div className={`proto-scroll ${noBar ? "full-height" : ""}`}>
          {screen.type === "pagina" && (
            <header className="screen-title">
              {id !== screen.nav && (
                <button
                  onClick={() => onNavigate((screen.links[0]?.to ?? "home") as EnvironmentId)}
                >
                  ←
                </button>
              )}
              <div>
                <small>Motus</small>
                <h1>{screen.name}</h1>
              </div>
              <button className="round-action">•••</button>
            </header>
          )}
          <Tabs id={id} onNavigate={onNavigate} />
          <Intro id={id} />
          {empty && listScreens.has(id) ? (
            <div className="proto-empty screen-empty">
              <span className="empty-shapes">
                <i />
                <i />
              </span>
              <h2>Nessun dato disponibile</h2>
              <p>Registra uno spostamento per iniziare.</p>
              <button className="proto-primary" onClick={() => onNavigate("inserisci-spostamento")}>
                Aggiungere uno spostamento
              </button>
            </div>
          ) : (
            <>
              {screen.blocks.map((block) => (
                <section className="proto-card screen-block" key={`${id}-${block.code}`}>
                  <div className="card-title">
                    <h2>{label(block.title)}</h2>
                    <Code code={block.code} show={showCodes} />
                  </div>
                  {block.items.map((item) => (
                    <VoiceItem key={item.row} screen={id} item={item} onNavigate={onNavigate} />
                  ))}
                </section>
              ))}
              {screen.definitions.map((text) => (
                <section className="proto-card defined-item" key={text}>
                  <span className="define-tag">da definire</span>
                  <p>{text}</p>
                </section>
              ))}
              <nav className="prototype-links">
                {screen.links.map((link) => (
                  <button key={link.to} onClick={() => onNavigate(link.to as EnvironmentId)}>
                    {link.label}
                    <span>→</span>
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>
        {!noBar && (
          <nav className="proto-bottom">
            {[
              ["home", "Home"],
              ["diario", "Diario"],
              ["analisi", "Analisi"],
              ["suggerimenti", "Cambiamento"],
              ["profilo", "Profilo"],
            ].map(([target, title], i) => {
              const active =
                screen.nav === target ||
                (screen.nav === "cambiamento" && target === "suggerimenti");
              return (
                <button
                  key={target}
                  className={active ? "active" : ""}
                  onClick={() => onNavigate(target as EnvironmentId)}
                >
                  <span className={i % 2 ? "nav-glyph square" : "nav-glyph"} />
                  {title}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </main>
  );
}
