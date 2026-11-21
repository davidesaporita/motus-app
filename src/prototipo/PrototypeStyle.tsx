export function PrototypeStyle() {
  return (
    <main className="style-page">
      <header>
        <img src="/brand/logo-mark.png" alt="Motus" />
        <div>
          <p>Sistema visivo</p>
          <h1>Stile del prototipo</h1>
          <p>Token e componenti condivisi della vista ad alta fedeltà.</p>
        </div>
      </header>
      <section className="style-section">
        <h2>Colori</h2>
        <div className="swatches">
          {[
            ["Blu brand", "#009BC2"],
            ["Verde brand", "#6FBE44"],
            ["Fondo", "#F7F7F7"],
            ["Testo", "#1E2B30"],
            ["Blu scuro", "#007A98"],
            ["Verde scuro", "#3B8A25"],
          ].map(([name, color]) => (
            <div key={color}>
              <i style={{ background: color }} />
              <strong>{name}</strong>
              <span>{color}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="style-section type-sample">
        <h2>Tipografia · AF Sobremesa</h2>
        <h1>Titolo schermata</h1>
        <h2>Titolo sezione</h2>
        <p>Corpo: informazioni semplici e comprensibili.</p>
        <small>Didascalia e provenienza del dato</small>
        <strong className="big-number">13,5 kg</strong>
      </section>
      <section className="style-section">
        <h2>Pulsanti e stati</h2>
        <div className="component-row">
          <button className="proto-primary">Principale</button>
          <button className="proto-secondary">Secondario</button>
          <button className="proto-text">Di testo</button>
          <button className="proto-danger">Distruttivo</button>
          <button className="proto-primary" disabled>
            Disattivo
          </button>
        </div>
      </section>
      <section className="style-section">
        <h2>Campi</h2>
        <div className="field-grid">
          <label>
            Testo
            <input defaultValue="Torino" />
            <small>Testo di aiuto</small>
          </label>
          <label>
            Numero
            <input type="number" defaultValue="24" />
          </label>
          <label>
            Data
            <input type="date" defaultValue="2026-11-22" />
          </label>
          <label>
            Selezione
            <select>
              <option>Treno</option>
            </select>
          </label>
          <label>
            Area di testo
            <textarea defaultValue="Messaggio breve" />
          </label>
          <label className="has-error">
            Con errore
            <input defaultValue="" />
            <small>Inserisci un valore.</small>
          </label>
        </div>
      </section>
      <section className="style-section component-gallery">
        <h2>Componenti</h2>
        <article className="proto-card">
          <div className="list-row">
            <span className="line-icon" />
            <div>
              <strong>Riga di elenco</strong>
              <small>Dettaglio e valore</small>
            </div>
            <b>24,6 km</b>
            <span>→</span>
          </div>
        </article>
        <div className="proto-tabs">
          <button className="active">Attiva</button>
          <button>Seconda</button>
          <button>Terza</button>
        </div>
        <div className="component-row">
          <label className="proto-switch">
            <input type="checkbox" defaultChecked />
            <i />
          </label>
          <label>
            <input type="checkbox" /> Casella
          </label>
          <label>
            <input type="radio" defaultChecked /> Scelta
          </label>
        </div>
        <div className="proto-chips">
          <button className="active">Filtro</button>
          <button>Stato</button>
          <span className="define-tag">da definire</span>
          <span className="proto-code">4.1</span>
        </div>
      </section>
      <section className="style-section two-demo">
        <div>
          <h2>Grafico SVG</h2>
          <svg className="demo-chart" viewBox="0 0 280 130">
            <line x1="25" y1="110" x2="265" y2="110" />
            <rect x="45" y="55" width="34" height="55" />
            <rect x="105" y="25" width="34" height="85" />
            <rect x="165" y="76" width="34" height="34" />
            <rect x="225" y="45" width="34" height="65" />
          </svg>
        </div>
        <div>
          <h2>Segnaposto mappa</h2>
          <div className="proto-map">
            <i />
            <i />
            <svg viewBox="0 0 280 130">
              <path d="M18 106 C58 20 116 110 162 48 S233 29 265 80" />
            </svg>
          </div>
        </div>
      </section>
      <section className="style-section two-demo">
        <div className="proto-modal">
          <strong>Finestra di conferma</strong>
          <p>Vuoi continuare con questa azione?</p>
          <div>
            <button className="proto-secondary">Annulla</button>
            <button className="proto-primary">Conferma</button>
          </div>
        </div>
        <div className="proto-sheet">
          <i />
          <strong>Modulo dal basso</strong>
          <label>
            Nome
            <input defaultValue="Scenario settimanale" />
          </label>
          <button className="proto-primary">Salva</button>
        </div>
      </section>
      <section className="style-section">
        <div className="proto-empty">
          <span className="empty-shapes">
            <i />
            <i />
          </span>
          <h2>Non c’è ancora nulla qui</h2>
          <p>Inizia con la prima azione.</p>
          <button className="proto-primary">Cominciare</button>
        </div>
      </section>
    </main>
  );
}
