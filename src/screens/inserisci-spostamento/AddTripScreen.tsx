import {
  draftTrip,
  EnvironmentId,
  frequentPlaceNames,
  modes,
  reasons,
} from "../../data/sampleData";
import {
  Block,
  Connections,
  EmptyState,
  Field,
  SelectField,
} from "../../components/shared/WireframeUI";
import { ScreenHeader } from "../../components/shared/ReviewFrame";

export function AddTripScreen({
  empty,
  onNavigate,
}: {
  empty: boolean;
  onNavigate: (id: EnvironmentId) => void;
}) {
  return (
    <>
      <ScreenHeader title="Inserisci spostamento" back={() => onNavigate("diario")} />
      {empty ? (
        <EmptyState
          message="Inserisci il primo spostamento indicando quando, da dove, verso dove e con quale mezzo."
          action="Cominciare a inserire"
        />
      ) : (
        <>
          <Block code="2.3" title="Nuovo spostamento">
            <Field label="Data" type="date" defaultValue={draftTrip.date} />
            <div className="two-cols">
              <Field label="Ora di partenza" type="time" defaultValue={draftTrip.start} />
              <Field label="Ora di arrivo" type="time" defaultValue={draftTrip.end} />
            </div>
            <Field label="Luogo di partenza" defaultValue={draftTrip.from} />
            <Field label="Luogo di arrivo" defaultValue={draftTrip.to} />
            <SelectField label="Mezzo" options={modes} defaultValue={draftTrip.mode} />
            <Field label="Distanza" defaultValue={draftTrip.distance} />
            <SelectField label="Motivo" options={reasons} defaultValue={draftTrip.reason} />
          </Block>
          <Block code="2.5" title="Nomi dei luoghi frequenti">
            <SelectField label="Nome suggerito" options={frequentPlaceNames} defaultValue="casa" />
            <Field label="Nome personalizzato" defaultValue="" />
          </Block>
          <button className="button primary full">Inserire spostamento</button>
          <Connections
            onNavigate={onNavigate}
            links={[{ to: "dettaglio-spostamento", label: "Dettaglio spostamento" }]}
          />
        </>
      )}
    </>
  );
}
