import { useLanguage } from "../i18n/context";

export function ToolsMarquee() {
  const { skills, ui } = useLanguage();
  const tools = Array.from(
    new Set(
      skills
        .flatMap((group) => group.items)
        .filter((tool) => tool.icons.length > 0)
        .map((tool) => tool.label),
    ),
  );

  const renderTools = (duplicate: boolean) => (
    <ul className="tools-marquee-list" aria-hidden={duplicate || undefined}>
      {tools.map((label) => (
        <li key={label} className="header-tool-name">
          {label}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="header-tools" role="region" aria-label={ui.skills}>
      <div className="tools-marquee-window" tabIndex={0}>
        <div className="tools-marquee-track">
          {renderTools(false)}
          {renderTools(true)}
        </div>
      </div>
    </div>
  );
}
