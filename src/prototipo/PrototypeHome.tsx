import { EnvironmentId, summary, trips, user } from "../data/sampleData";

function Code({ children, show }: { children: string; show: boolean }) {
  return show ? <span className="proto-code">{children}</span> : null;
}

export function PrototypeHome({
  showCodes,
  onNavigate,
}: {
  showCodes: boolean;
  onNavigate: (id: EnvironmentId | "stile") => void;
}) {
  const proposed = trips.filter((trip) => trip.status === "proposto").length;
  const empty = new URLSearchParams(window.location.search).get("stato") === "vuoto";
  return (
    <main className="proto-stage">
      <div className="proto-phone">
        <div className="proto-scroll">
          <header className="proto-header">
            <img src="/brand/logo-mark.png" alt="Motus" />
            <button
              className="round-action"
              onClick={() => onNavigate("profilo")}
              aria-label="Aprire il profilo"
            >
              G
            </button>
          </header>
          <div className="proto-greeting">
            <p>Ciao {user.name}</p>
            <h1>La tua mobilità</h1>
          </div>

          {empty ? (
            <section className="proto-empty screen-empty">
              <span className="empty-shapes">
                <i />
                <i />
              </span>
              <h2>La tua sintesi inizierà qui</h2>
              <p>
                Registra il primo spostamento per vedere distanza, emissioni, costi e movimento.
              </p>
              <button className="proto-primary" onClick={() => onNavigate("inserisci-spostamento")}>
                Inserire uno spostamento
              </button>
            </section>
          ) : (
            <>
              <section className="hero-metric" data-riga="170">
                <Code show={showCodes}>4.1</Code>
                <div className="hero-top">
                  <label>
                    <span>Periodo</span>
                    <select defaultValue="Questa settimana" data-riga="176">
                      <option>Questa settimana</option>
                      <option>Settimana scorsa</option>
                      <option>Questo mese</option>
                    </select>
                  </label>
                </div>
                <span className="metric-dimension">Ambientale · Emissioni stimate</span>
                <strong data-riga="172">{summary.emissions}</strong>
                <p>−2,1 kg rispetto alla settimana precedente</p>
                <svg
                  viewBox="0 0 300 72"
                  role="img"
                  aria-label="Andamento delle emissioni nella settimana"
                >
                  <path
                    d="M4 57 C42 50 56 18 94 28 S153 68 188 41 S247 12 296 19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </section>

              <section className="proto-card">
                <div className="card-title">
                  <h2>La settimana in breve</h2>
                  <Code show={showCodes}>4.1</Code>
                </div>
                <div className="mini-metrics">
                  <div data-riga="171">
                    <span>Comportamentale · Distanza percorsa</span>
                    <strong>{summary.distance}</strong>
                    <small>{summary.modeShare}</small>
                  </div>
                  <div data-riga="173">
                    <span>Economica · Costo complessivo</span>
                    <strong>{summary.cost}</strong>
                    <small>Spesa stimata nel periodo</small>
                  </div>
                  <div data-riga="174">
                    <span>Salute · Tempo con mezzi attivi</span>
                    <strong>{summary.activeTime}</strong>
                    <small>Cammino e bicicletta</small>
                  </div>
                </div>
              </section>

              <section className="proto-card">
                <div className="card-title">
                  <h2>Indicatori in evidenza</h2>
                  <button className="proto-text" data-riga="177">
                    Scegliere
                  </button>
                </div>
                <div className="proto-chips" data-riga="175">
                  <button className="active">Ambiente</button>
                  <button>Economia</button>
                  <button>Salute</button>
                  <button>Comportamentale</button>
                </div>
                <p className="preference-note">
                  Le dimensioni che vuoi approfondire compaiono per prime.
                </p>
                <p className="secondary-copy" data-riga="184">
                  Questa sintesi mostra soltanto i risultati personali di Giulia.
                </p>
              </section>

              <section className="proto-card detection">
                <div className="card-title">
                  <h2>Rilevamento</h2>
                  <Code show={showCodes}>2.1 · 7.1</Code>
                </div>
                <div className="detection-row" data-riga="66">
                  <span className="pulse-dot" />
                  <div>
                    <strong>Attivo</strong>
                    <p>Nessuno spostamento in corso</p>
                  </div>
                  <button className="proto-text">Sospendi</button>
                </div>
                <div className="detection-actions" data-riga="32">
                  <button>Attiva</button>
                  <button>Sospendi</button>
                  <button>Disattiva</button>
                </div>
              </section>

              {proposed > 0 && (
                <button
                  className="confirm-banner"
                  onClick={() => onNavigate("conferma-spostamenti")}
                >
                  <span className="line-icon">✓</span>
                  <span>
                    <strong>{proposed} spostamenti da confermare</strong>
                    <small>Controlla mezzo e veicolo</small>
                  </span>
                  <span>→</span>
                </button>
              )}

              <section className="quick-links">
                <button onClick={() => onNavigate("diario")}>
                  <span className="line-icon" />
                  Diario
                </button>
                <button onClick={() => onNavigate("inserisci-spostamento")}>
                  <span className="line-icon square" />
                  Aggiungi
                </button>
                <button onClick={() => onNavigate("analisi")}>
                  <span className="line-icon" />
                  Analisi
                </button>
                <button onClick={() => onNavigate("spese")}>
                  <span className="line-icon square" />
                  Spese
                </button>
              </section>

              <nav className="proto-connections" aria-label="Altre schermate collegate">
                {[
                  ["confronto-mezzi", "Confronto tra mezzi"],
                  ["suggerimenti", "Suggerimenti"],
                  ["obiettivi", "Obiettivi"],
                  ["veicoli", "Veicoli"],
                  ["gruppo", "Gruppo"],
                  ["impostazioni", "Impostazioni"],
                ].map(([id, label]) => (
                  <button key={id} onClick={() => onNavigate(id as EnvironmentId)}>
                    {label}
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>
        <nav className="proto-bottom">
          {[
            ["home", "Home"],
            ["diario", "Diario"],
            ["analisi", "Analisi"],
            ["suggerimenti", "Cambiamento"],
            ["profilo", "Profilo"],
          ].map(([id, label], index) => (
            <button
              key={id}
              className={index === 0 ? "active" : ""}
              onClick={() => onNavigate(id as EnvironmentId)}
            >
              <span className={index % 2 ? "nav-glyph square" : "nav-glyph"} />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
