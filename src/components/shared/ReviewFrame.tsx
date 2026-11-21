import { ReactNode } from "react";
import { EnvironmentId, navItems, ScreenMeta } from "../../data/sampleData";

export function ReviewFrame({
  meta,
  empty,
  onEmptyChange,
  onIndex,
  onNavigate,
  children,
}: {
  meta: ScreenMeta;
  empty: boolean;
  onEmptyChange: (empty: boolean) => void;
  onIndex: () => void;
  onNavigate: (id: EnvironmentId | "index") => void;
  children: ReactNode;
}) {
  return (
    <main className="review-page">
      <div className="review-toolbar">
        <div>
          <strong>{meta.name}</strong>
          <span>id: {meta.id}</span>
        </div>
        <div className="state-control" aria-label="Stato del wireframe">
          <span>Stato:</span>
          <button className={!empty ? "selected" : ""} onClick={() => onEmptyChange(false)}>
            con dati
          </button>
          <button className={empty ? "selected" : ""} onClick={() => onEmptyChange(true)}>
            vuoto
          </button>
        </div>
        {(meta.id === "gruppo" || meta.id === "sintesi-gruppo") && (
          <label className="review-select">
            Ruolo:
            <select defaultValue="amministratore">
              <option>amministratore</option>
              <option>componente</option>
            </select>
          </label>
        )}
        {meta.id === "email-invito" && (
          <label className="review-select">
            Invitato:
            <select defaultValue="ospite">
              <option>ospite</option>
              <option>già utente</option>
            </select>
          </label>
        )}
        <button className="index-link" onClick={onIndex}>
          Indice dei wireframe
        </button>
      </div>
      <div className={`phone ${meta.nav === "" ? "no-bottom" : ""}`}>
        <div className="phone-content">{children}</div>
        {meta.nav !== "" && (
          <nav className="bottom-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={meta.nav === item.id ? "active" : ""}
                onClick={() => onNavigate(item.target as EnvironmentId)}
                aria-label={item.label}
              >
                <span className="nav-shape" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </main>
  );
}

export function ScreenHeader({ title, back }: { title: string; back?: () => void }) {
  return (
    <header className="screen-header">
      {back && (
        <button className="back" onClick={back}>
          ← Indietro
        </button>
      )}
      <div className="wordmark">Motus</div>
      <h1>{title}</h1>
    </header>
  );
}
