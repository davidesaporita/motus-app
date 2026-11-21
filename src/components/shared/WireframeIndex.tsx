import { allScreenGroups, EnvironmentId } from "../../data/sampleData";

export function WireframeIndex({ onOpen }: { onOpen: (id: EnvironmentId) => void }) {
  const totalScreens = allScreenGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <main className="index-page">
      <header className="index-header">
        <p>Motus · wireframe a bassa fedeltà</p>
        <h1>Indice dei wireframe</h1>
        <p>
          {totalScreens} ambienti dalla mappa funzionale · {totalScreens} costruiti
        </p>
      </header>
      <div className="index-grid">
        {allScreenGroups.map((group) => (
          <section className="index-group" key={group.label}>
            <h2>{group.label}</h2>
            <ul>
              {group.items.map((item) => {
                return (
                  <li key={item.id}>
                    <button onClick={() => onOpen(item.id as EnvironmentId)}>
                      <span>{item.name}</span>
                      <span>Aprire →</span>
                    </button>
                    <small>id: {item.id}</small>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
