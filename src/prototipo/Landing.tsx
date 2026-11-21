import { useState } from "react";
import "./prototipo.css";

export function Landing({ onOpen }: { onOpen: (view: "wireframe" | "prototipo") => void }) {
  const [view, setView] = useState<"wireframe" | "prototipo">("wireframe");
  return (
    <main className="proto-landing">
      <img src="/brand/logo-mark.png" alt="Motus" />
      <p>Motus ti aiuta a capire il valore e le conseguenze dei tuoi spostamenti.</p>
      <div className="landing-switch" aria-label="Scegli la vista">
        <button
          className={view === "wireframe" ? "active" : ""}
          onClick={() => setView("wireframe")}
        >
          Wireframe
        </button>
        <button
          className={view === "prototipo" ? "active" : ""}
          onClick={() => setView("prototipo")}
        >
          Prototipo
        </button>
      </div>
      <button className="proto-primary proto-gradient" onClick={() => onOpen(view)}>
        Apri
      </button>
    </main>
  );
}
