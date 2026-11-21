import { EnvironmentId, summary, trips, user } from "../../data/sampleData";
import { Block, Connections, EmptyState, Pills } from "../../components/shared/WireframeUI";
import { ScreenHeader } from "../../components/shared/ReviewFrame";

export function HomeScreen({
  empty,
  onNavigate,
}: {
  empty: boolean;
  onNavigate: (id: EnvironmentId) => void;
}) {
  const proposedTrips = trips.filter((trip) => trip.status === "proposto").length;

  return (
    <>
      <ScreenHeader title="Home page" />
      {empty ? (
        <EmptyState
          message="Qui comparirà la sintesi dei tuoi spostamenti quando inizierai a registrarli."
          action="Inserire uno spostamento"
          onAction={() => onNavigate("inserisci-spostamento")}
        />
      ) : (
        <>
          <p className="intro">Ciao {user.name}. Questa è la tua mobilità.</p>
          <Block code="4.1" title="Sintesi dei risultati">
            <label className="field">
              <span>Periodo</span>
              <select defaultValue="Questa settimana">
                <option>Questa settimana</option>
                <option>Settimana scorsa</option>
                <option>Questo mese</option>
              </select>
            </label>
            <p className="note">{summary.period}</p>
            <div className="subheading">
              <strong>Indicatori in evidenza</strong>
              <button>Modificare</button>
            </div>
            <Pills
              items={["Ambientale", "Economica", "Salute", "Comportamentale"]}
              active="Ambientale"
            />
            <div className="metric-list">
              <article>
                <span>Distanza percorsa</span>
                <strong>{summary.distance}</strong>
                <small>{summary.modeShare}</small>
              </article>
              <article>
                <span>Emissioni stimate</span>
                <strong>{summary.emissions}</strong>
                <small>dimensione ambientale</small>
              </article>
              <article>
                <span>Costo complessivo</span>
                <strong>{summary.cost}</strong>
                <small>dimensione economica</small>
              </article>
              <article>
                <span>Tempo con mezzi attivi</span>
                <strong>{summary.activeTime}</strong>
                <small>dimensione salute</small>
              </article>
            </div>
            <p className="note">Sintesi personale di {user.name}</p>
          </Block>
          <Block code="2.1" title="Rilevamento in corso">
            <div className="status-card">
              <span className="status-dot" />
              <div>
                <strong>Nessuno spostamento in corso</strong>
                <p>Il rilevamento è attivo.</p>
              </div>
            </div>
          </Block>
          <Block code="7.1" title="Rilevamento degli spostamenti">
            <Pills items={["Attivare", "Sospendere", "Disattivare"]} active="Attivare" />
          </Block>
          <div className="screen-actions">
            <button className="button primary" onClick={() => onNavigate("conferma-spostamenti")}>
              Confermare {proposedTrips} spostamenti
            </button>
            <button
              className="button secondary"
              onClick={() => onNavigate("inserisci-spostamento")}
            >
              Inserire uno spostamento
            </button>
          </div>
          <Connections
            onNavigate={onNavigate}
            links={[
              { to: "diario", label: "Diario spostamenti" },
              { to: "spese", label: "Spese" },
              { to: "analisi", label: "Analisi" },
              { to: "confronto-mezzi", label: "Confronto tra mezzi" },
              { to: "suggerimenti", label: "Suggerimenti" },
              { to: "obiettivi", label: "Obiettivi" },
              { to: "veicoli", label: "Gestione Veicoli" },
              { to: "gruppo", label: "Gestione Gruppo" },
              { to: "profilo", label: "Il tuo profilo" },
              { to: "impostazioni", label: "Impostazioni" },
            ]}
          />
        </>
      )}
    </>
  );
}
