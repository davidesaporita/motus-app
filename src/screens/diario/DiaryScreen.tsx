import { diaryModes, EnvironmentId, reasons, summary, trips } from "../../data/sampleData";
import {
  Block,
  Connections,
  DashedDefinition,
  EmptyState,
  Pills,
  Placeholder,
  SelectField,
} from "../../components/shared/WireframeUI";
import { ScreenHeader } from "../../components/shared/ReviewFrame";

export function DiaryScreen({
  empty,
  onNavigate,
}: {
  empty: boolean;
  onNavigate: (id: EnvironmentId) => void;
}) {
  return (
    <>
      <ScreenHeader title="Diario spostamenti" />
      {empty ? (
        <EmptyState
          message="Qui troverai gli spostamenti ordinati per data, con percorsi e dettagli."
          action="Inserire uno spostamento"
          onAction={() => onNavigate("inserisci-spostamento")}
        />
      ) : (
        <Block code="2.4" title="I tuoi spostamenti">
          <Pills items={["Giorno", "Settimana", "Mese"]} active="Settimana" />
          <div className="two-cols">
            <SelectField label="Mezzo" options={diaryModes} />
            <SelectField label="Motivo" options={["Tutti i motivi", ...reasons]} />
          </div>
          <label className="search-field">
            <span>Località</span>
            <input placeholder="Cercare per località" />
          </label>
          <div className="list-header">
            <strong>{summary.period}</strong>
            <span>{trips.length} spostamenti</span>
          </div>
          <div className="trip-list">
            {trips.map((trip) => (
              <button
                className="trip-card"
                key={trip.id}
                onClick={() => onNavigate("dettaglio-spostamento")}
              >
                <div className="trip-top">
                  <strong>
                    {trip.date} · {trip.start}
                  </strong>
                  <span>{trip.status}</span>
                </div>
                <div className="trip-route">
                  <span>{trip.from}</span>
                  <span>→</span>
                  <span>{trip.to}</span>
                </div>
                <Placeholder compact label="Mappa del percorso" />
                <div className="trip-meta">
                  <span>{trip.mode}</span>
                  <span>{trip.distance}</span>
                  <span>{trip.duration}</span>
                </div>
                {trip.habitual && <small>Tragitto abituale</small>}
              </button>
            ))}
          </div>
          <DashedDefinition>
            Elenco dei tragitti abituali e dei luoghi frequenti dell’utente
          </DashedDefinition>
          <div className="screen-actions">
            <button className="button primary" onClick={() => onNavigate("inserisci-spostamento")}>
              Inserire uno spostamento
            </button>
            <button className="button secondary" onClick={() => onNavigate("conferma-spostamenti")}>
              Confermare spostamenti
            </button>
          </div>
          <Connections onNavigate={onNavigate} links={[{ to: "home", label: "Home page" }]} />
        </Block>
      )}
    </>
  );
}
