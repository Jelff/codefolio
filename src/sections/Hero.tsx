import { RollingText } from "../components/RollingText";
import { useLanguage } from "../i18n/context";
import { Arrow } from "../components/Arrow";
import { LocalTime } from "../components/LocalTime";
import { HeroPortrait } from "../components/HeroPortrait";

export function Hero() {
  const { personal, ui } = useLanguage();
  const [role, specialty] = personal.role.split(" · ");
  return (
    <section id="top" className="hero" aria-label={ui.introduction}>
      <div className="hero-overline eyebrow entrance">
        <span>{ui.portfolio}</span>
        <span>{personal.location}</span>
      </div>
      <div className="hero-title entrance">
        <HeroPortrait />
        <h1>
          <span>{role}</span>
          <span>
            <span className="sr-only"> · </span>
            {specialty}
          </span>
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
            <RollingText>{ui.explore}</RollingText> <Arrow />
          </a>
          <a href={personal.resume} className="text-link" download>
            <RollingText>
              {ui.resume} <span className="text-xs">{ui.pdfLanguage}</span>
            </RollingText>
            <Arrow />
          </a>
        </div>
      </div>
      <div className="hero-foot eyebrow">
        <a href="#work" className="scroll-cue">
          ↓ <RollingText>{ui.scroll}</RollingText>
        </a>
        <span className="hidden sm:block">{ui.discipline}</span>
        <LocalTime />
      </div>
    </section>
  );
}
