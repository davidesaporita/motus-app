import {
  fuelTypes,
  EnvironmentId,
  trips,
  userRoles,
  vehicleAvailability,
  vehicleTypes,
} from "../../data/sampleData";
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

export function ConfirmTripsScreen({
  empty,
  onNavigate,
}: {
  empty: boolean;
  onNavigate: (id: EnvironmentId) => void;
}) {
  const trip = trips[3];
  const proposedTrips = trips.filter((item) => item.status === "proposto");
  return (
    <>
      <ScreenHeader title="Conferma spostamenti" back={() => onNavigate("diario")} />
      {empty ? (
        <EmptyState
          message="Qui compariranno gli spostamenti rilevati che richiedono una conferma."
          action="Tornare al diario"
          onAction={() => onNavigate("diario")}
        />
      ) : (
        <Block code="2.6" title="Spostamenti da confermare">
          <p className="counter">1 di {proposedTrips.length}</p>
          <Placeholder label="Mappa degli spostamenti da confermare" />
          <div className="trip-summary">
            <strong>
              {trip.from} → {trip.to}
            </strong>
            <span>
              {trip.date} · {trip.start}–{trip.end}
            </span>
            <span>{trip.distance} · mezzo riconosciuto: automobile</span>
          </div>
          <DashedDefinition>
            Comando per confermare o correggere il mezzo riconosciuto
          </DashedDefinition>
          <SelectField
            label="Disponibilità del veicolo"
            options={vehicleAvailability}
            defaultValue="proprio"
          />
          <SelectField label="Ruolo dell’utente" options={userRoles} defaultValue="conducente" />
          <div className="conditional-box">
            <p>Se il veicolo è di altri</p>
            <SelectField label="Tipo del veicolo" options={vehicleTypes} />
            <SelectField label="Alimentazione" options={fuelTypes} />
          </div>
          <div className="prompt-card">
            <strong>Veicolo non registrato?</strong>
            <button className="button secondary">Inserire il veicolo</button>
          </div>
          <div className="group-check">
            <p>Viaggio rilevato anche per un componente del gruppo.</p>
            <strong>Avete viaggiato insieme?</strong>
            <Pills items={["Confermare", "Non confermare"]} />
          </div>
          <div className="screen-actions">
            <button className="button primary">Confermare spostamento</button>
            <button
              className="button secondary"
              onClick={() => onNavigate("dettaglio-spostamento")}
            >
              Aprire il dettaglio
            </button>
          </div>
          <Connections
            onNavigate={onNavigate}
            links={[
              { to: "dettaglio-veicolo", label: "Dettaglio veicolo" },
              { to: "diario", label: "Diario spostamenti" },
            ]}
          />
        </Block>
      )}
    </>
  );
}
