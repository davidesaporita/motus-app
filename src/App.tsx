import { useEffect, useState } from "react";
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
import { Landing } from "./prototipo/Landing";
import { PrototypeApp } from "./prototipo/PrototypeApp";
import { ViewToolbar } from "./prototipo/ViewToolbar";

const navByGroup = {
  Home: "home",
  Diario: "diario",
  Analisi: "analisi",
  Cambiamento: "cambiamento",
  Profilo: "profilo",
  "Fuori dalla barra": "",
} as const;

const environmentIds = new Set(
  allScreenGroups.flatMap((group) => group.items.map((item) => item.id)),
);

function isBuiltScreen(id: EnvironmentId): id is ScreenId {
  return id in builtScreens;
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return pathname;
}

export default function App() {
  const pathname = usePathname();
  const [empty, setEmpty] = useState(false);
  const [showCodes, setShowCodes] = useState(false);

  const go = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/") {
    return <Landing onOpen={(view) => go(`/${view}/home`)} />;
  }

  const [, view, routeId] = pathname.split("/");
  const id = (routeId || "home") as EnvironmentId;

  if (view === "prototipo") {
    return (
      <>
        <ViewToolbar
          view="prototipo"
          id={routeId || "home"}
          showCodes={showCodes}
          onShowCodes={setShowCodes}
          onNavigate={go}
        />
        <PrototypeApp
          id={routeId || "home"}
          showCodes={showCodes}
          onNavigate={(next) => go(`/prototipo/${next}`)}
        />
      </>
    );
  }

  if (view !== "wireframe") {
    return <Landing onOpen={(nextView) => go(`/${nextView}/home`)} />;
  }

  if (routeId === "index") {
    return (
      <>
        <ViewToolbar view="wireframe" id="home" showCodes onShowCodes={() => {}} onNavigate={go} />
        <WireframeIndex onOpen={(next) => go(`/wireframe/${next}`)} />
      </>
    );
  }

  const safeId = (environmentIds.has(id) ? id : "home") as EnvironmentId;
  const navigate = (next: EnvironmentId | "index") =>
    go(next === "index" ? "/wireframe/index" : `/wireframe/${next}`);
  let meta: ScreenMeta;
  let content;

  if (isBuiltScreen(safeId)) {
    meta = builtScreens[safeId];
    content = {
      home: <HomeScreen empty={empty} onNavigate={navigate} />,
      diario: <DiaryScreen empty={empty} onNavigate={navigate} />,
      "dettaglio-spostamento": <TripDetailScreen empty={empty} onNavigate={navigate} />,
      "inserisci-spostamento": <AddTripScreen empty={empty} onNavigate={navigate} />,
      "conferma-spostamenti": <ConfirmTripsScreen empty={empty} onNavigate={navigate} />,
    }[safeId];
  } else {
    const group = allScreenGroups.find((candidate) =>
      candidate.items.some((item) => item.id === safeId),
    )!;
    const definition = extendedScreenDefinitions.find((item) => item.id === safeId)!;
    const Extended = extendedScreenRegistry[safeId];
    meta = { id: safeId, name: definition.name, nav: navByGroup[group.label] };
    content = <Extended empty={empty} onNavigate={navigate} />;
  }

  return (
    <>
      <ViewToolbar view="wireframe" id={safeId} showCodes onShowCodes={() => {}} onNavigate={go} />
      <ReviewFrame
        meta={meta}
        empty={empty}
        onEmptyChange={setEmpty}
        onIndex={() => navigate("index")}
        onNavigate={navigate}
      >
        {content}
      </ReviewFrame>
    </>
  );
}
