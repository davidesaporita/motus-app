export function ViewToolbar({
  view,
  id,
  showCodes,
  onShowCodes,
  onNavigate,
}: {
  view: "wireframe" | "prototipo";
  id: string;
  showCodes: boolean;
  onShowCodes: (value: boolean) => void;
  onNavigate: (path: string) => void;
}) {
  return (
    <aside className="view-toolbar" aria-label="Cambio vista">
      <div className="view-switch">
        <button
          className={view === "wireframe" ? "active" : ""}
          onClick={() => onNavigate(`/wireframe/${id === "stile" ? "home" : id}`)}
        >
          Wireframe
        </button>
        <button
          className={view === "prototipo" ? "active" : ""}
          onClick={() => onNavigate(`/prototipo/${id}`)}
        >
          Prototipo
        </button>
      </div>
      <button className="home-link" onClick={() => onNavigate("/")}>
        Torna all’inizio
      </button>
      <label className={view === "wireframe" ? "disabled" : ""}>
        <input
          type="checkbox"
          checked={view === "prototipo" && showCodes}
          disabled={view === "wireframe"}
          onChange={(event) => onShowCodes(event.target.checked)}
        />
        Mostra codici
      </label>
    </aside>
  );
}
