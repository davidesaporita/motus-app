import {
  diaryModes,
  EnvironmentId,
  reasons,
  selectedTripDetails,
  trips,
  user,
} from "../../data/sampleData";
import {
  Block,
  Connections,
  EmptyState,
  Field,
  Placeholder,
  SelectField,
  Switch,
} from "../../components/shared/WireframeUI";
import { ScreenHeader } from "../../components/shared/ReviewFrame";

export function TripDetailScreen({
  empty,
  onNavigate,
}: {
  empty: boolean;
  onNavigate: (id: EnvironmentId) => void;
}) {
  const trip = trips[3];
  return (
    <>
      <ScreenHeader title="Dettaglio spostamento" back={() => onNavigate("diario")} />
      {empty ? (
        <EmptyState
          message="Seleziona uno spostamento dal diario per vedere mappa, consumi, costi e dati registrati."
          action="Tornare al diario"
          onAction={() => onNavigate("diario")}
        />
      ) : (
        <>
          <Block code="2.4" title="Dati dello spostamento">
            <Placeholder label="Mappa del percorso" />
            <dl className="detail-list">
              <div>
                <dt>Data</dt>
                <dd>{trip.date}</dd>
              </div>
              <div>
                <dt>Orario</dt>
                <dd>
                  {trip.start}–{trip.end}
                </dd>
              </div>
              <div>
                <dt>Da</dt>
                <dd>{trip.from}</dd>
              </div>
              <div>
                <dt>A</dt>
                <dd>{trip.to}</dd>
              </div>
              <div>
                <dt>Mezzo</dt>
                <dd>{trip.mode}</dd>
              </div>
              <div>
                <dt>Veicolo</dt>
                <dd>{selectedTripDetails.vehicle}</dd>
              </div>
              <div>
                <dt>Distanza</dt>
                <dd>{trip.distance}</dd>
              </div>
              <div>
                <dt>Durata</dt>
                <dd>{trip.duration}</dd>
              </div>
              <div>
                <dt>Consumo stimato</dt>
                <dd>{selectedTripDetails.consumption}</dd>
              </div>
              <div>
                <dt>Emissioni stimate</dt>
                <dd>{trip.emissions}</dd>
              </div>
              <div>
                <dt>Costo</dt>
                <dd>{trip.cost}</dd>
              </div>
              <div>
                <dt>Provenienza</dt>
                <dd>{selectedTripDetails.provenance}</dd>
              </div>
            </dl>
          </Block>
          <Block code="2.3" title="Correggere lo spostamento">
            <div className="two-cols">
              <Field label="Ora di partenza" type="time" defaultValue={trip.start} />
              <Field label="Ora di arrivo" type="time" defaultValue={trip.end} />
            </div>
            <Field label="Luogo di partenza" defaultValue={trip.from} />
            <Field label="Luogo di arrivo" defaultValue={trip.to} />
            <SelectField label="Mezzo" options={diaryModes.slice(1)} defaultValue="automobile" />
            <SelectField
              label="Veicolo"
              options={[`${user.defaultVehicle} · predefinito`, "Veicolo non registrato"]}
            />
            <SelectField label="Motivo" options={reasons} defaultValue="tempo libero" />
            <button className="button primary">Modificare spostamento</button>
            <div className="button-row">
              <button className="button secondary">Dividere in due</button>
              <button className="button secondary">Unire al successivo</button>
            </div>
            <Switch label="Escludere dalle analisi" />
            <button className="text-action">Eliminare spostamento</button>
          </Block>
          <Connections
            onNavigate={onNavigate}
            links={[
              { to: "spese", label: "Spese" },
              { to: "dettaglio-veicolo", label: "Dettaglio veicolo" },
            ]}
          />
        </>
      )}
    </>
  );
}
