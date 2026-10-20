import { useLanguage } from "../i18n/context";
import { Arrow } from "../components/Arrow";
import { LocalTime } from "../components/LocalTime";

export function Hero() {
  const { personal, ui } = useLanguage();
  return (
    <section id="top" className="hero" aria-label={ui.introduction}>
      <div className="hero-overline eyebrow entrance">
        <span>{ui.portfolio}</span>
        <span>{personal.location}</span>
      </div>
      <div className="hero-title entrance">
        <p className="eyebrow mb-7 text-muted">{personal.role}</p>
        <h1>
          {ui.heroFirst}
          <em>{ui.heroSecond}</em>
        </h1>
      </div>
      <div className="hero-bottom entrance">
        <div className="hero-caption">
          <span className="editorial-mark" aria-hidden="true">
            ↳
          </span>
          <p>{personal.introduction}</p>
        </div>
        <div className="hero-actions">
          <a href="#work" className="primary-link">
            {ui.explore} <Arrow />
          </a>
          <a href={personal.resume} className="text-link" download>
            {ui.resume} <span className="text-xs">{ui.pdfLanguage}</span>
            <Arrow />
          </a>
        </div>
      </div>
      <div className="hero-foot eyebrow">
        <a href="#work" className="scroll-cue">
          ↓ <span>{ui.scroll}</span>
        </a>
        <span className="hidden sm:block">{ui.discipline}</span>
        <LocalTime />
      </div>
    </section>
  );
}
