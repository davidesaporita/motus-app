import { useState } from "react";
import { ReviewFrame } from "./components/shared/ReviewFrame";
import { WireframeIndex } from "./components/shared/WireframeIndex";
import { extendedScreenRegistry } from "./components/extendedScreenRegistry";
import { HomeScreen } from "./screens/home/HomeScreen";
import { DiaryScreen } from "./screens/diario/DiaryScreen";
import { TripDetailScreen } from "./screens/dettaglio-spostamento/TripDetailScreen";
import { AddTripScreen } from "./screens/inserisci-spostamento/AddTripScreen";
import { ConfirmTripsScreen } from "./screens/conferma-spostamenti/ConfirmTripsScreen";
import {
  allScreenGroups,
  builtScreens,
  EnvironmentId,
  ScreenId,
  ScreenMeta,
} from "./data/sampleData";
import { extendedScreenDefinitions } from "./data/extendedScreenDefinitions";

const navByGroup = {
  Home: "home",
  Diario: "diario",
  Analisi: "analisi",
  Cambiamento: "cambiamento",
  Profilo: "profilo",
  "Fuori dalla barra": "",
} as const;

function isBuiltScreen(id: EnvironmentId): id is ScreenId {
  return id in builtScreens;
}

export default function App() {
  const [screen, setScreen] = useState<EnvironmentId | "index">("index");
  const [empty, setEmpty] = useState(false);

  const navigate = (next: EnvironmentId | "index") => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (screen === "index") {
    return <WireframeIndex onOpen={(id) => navigate(id)} />;
  }

  let meta: ScreenMeta;
  let content;

  if (isBuiltScreen(screen)) {
    meta = builtScreens[screen];
    content = {
      home: <HomeScreen empty={empty} onNavigate={navigate} />,
      diario: <DiaryScreen empty={empty} onNavigate={navigate} />,
      "dettaglio-spostamento": <TripDetailScreen empty={empty} onNavigate={navigate} />,
      "inserisci-spostamento": <AddTripScreen empty={empty} onNavigate={navigate} />,
      "conferma-spostamenti": <ConfirmTripsScreen empty={empty} onNavigate={navigate} />,
    }[screen];
  } else {
    const group = allScreenGroups.find((candidate) =>
      candidate.items.some((item) => item.id === screen),
    )!;
    const definition = extendedScreenDefinitions.find((item) => item.id === screen)!;
    const Extended = extendedScreenRegistry[screen];
    meta = { id: screen, name: definition.name, nav: navByGroup[group.label] };
    content = <Extended empty={empty} onNavigate={navigate} />;
  }

  return (
    <ReviewFrame
      meta={meta}
      empty={empty}
      onEmptyChange={setEmpty}
      onIndex={() => navigate("index")}
      onNavigate={navigate}
    >
      {content}
    </ReviewFrame>
  );
}
