import { allScreenGroups, EnvironmentId } from "../data/sampleData";
import { PrototypeHome } from "./PrototypeHome";
import { PrototypeScreen } from "./PrototypeScreen";
import { PrototypeStyle } from "./PrototypeStyle";
import "./prototipo.css";

const names = Object.fromEntries(
  allScreenGroups.flatMap((group) => group.items.map((item) => [item.id, item.name])),
);

export function PrototypeApp({
  id,
  showCodes,
  onNavigate,
}: {
  id: string;
  showCodes: boolean;
  onNavigate: (id: EnvironmentId | "stile") => void;
}) {
  if (id === "stile") return <PrototypeStyle />;
  if (id === "home") {
    return <PrototypeHome showCodes={showCodes} onNavigate={onNavigate} />;
  }
  const safeId = (id in names ? id : "home") as EnvironmentId;
  return <PrototypeScreen id={safeId} showCodes={showCodes} onNavigate={onNavigate} />;
}
