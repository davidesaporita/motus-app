import { ReactNode } from "react";
import { EnvironmentId } from "../../data/sampleData";

export function Block({
  code,
  title,
  children,
}: {
  code: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="wf-block">
      <div className="wf-block-heading">
        <h2>{title}</h2>
        <span className="code-tag">{code}</span>
      </div>
      {children}
    </section>
  );
}

export function Placeholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`placeholder ${compact ? "compact" : ""}`}>
      <span>{label}</span>
    </div>
  );
}

export function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} defaultValue={defaultValue} />
    </label>
  );
}

export function SelectField({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: readonly string[];
  defaultValue?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function Switch({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  return (
    <label className="switch-row">
      <span>{label}</span>
      <span className={`switch ${defaultOn ? "on" : ""}`} aria-hidden="true">
        <i />
      </span>
      <input className="sr-only" type="checkbox" defaultChecked={defaultOn} />
    </label>
  );
}

export function Pills({ items, active }: { items: readonly string[]; active?: string }) {
  return (
    <div className="pills">
      {items.map((item) => (
        <button key={item} className={item === active ? "active" : ""}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function EmptyState({
  message,
  action,
  onAction,
}: {
  message: string;
  action: string;
  onAction?: () => void;
}) {
  return (
    <div className="empty-state">
      <div className="empty-mark" />
      <p>{message}</p>
      <button className="button primary" onClick={onAction}>
        {action}
      </button>
    </div>
  );
}

export function DashedDefinition({ children }: { children: ReactNode }) {
  return (
    <div className="to-define">
      <span>da definire</span>
      <p>{children}</p>
    </div>
  );
}

export function Connections({
  links,
  onNavigate,
}: {
  links: { to: EnvironmentId; label: string }[];
  onNavigate: (id: EnvironmentId) => void;
}) {
  return (
    <nav className="linked-screens" aria-label="Schermate collegate">
      {links.map((link) => (
        <button className="button secondary" key={link.to} onClick={() => onNavigate(link.to)}>
          {link.label}
        </button>
      ))}
    </nav>
  );
}
