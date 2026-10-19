import { useLanguage } from "../i18n/context";
import { Arrow } from "../components/Arrow";
import { LocalTime } from "../components/LocalTime";
import { ProjectLink } from "../components/ProjectLink";

export function Hero() {
  const { personal, projects, ui } = useLanguage();
  return (
    <section className="hero" aria-label={ui.introduction}>
      <div className="hero-intro entrance">
        <h1 className="mb-6 text-sm text-muted">{personal.role}</h1>
        <p className="intro-copy">{personal.introduction}</p>
        <a href="#about" className="text-link mt-6">
          {ui.aboutMe} <Arrow />
        </a>
      </div>
      <div className="hero-contact entrance">
        <a
          href="#contact"
          className="contact-heading group"
          aria-label={ui.contactLabel}
        >
          {ui.contactFirst}
          <br />
          {ui.contactSecond}
          <span className="sr-only">.</span>
        </a>
        <div className="hero-location text-sm text-muted">
          <p>{personal.location}</p>
          <LocalTime />
        </div>
        <a href="#contact" className="hero-arrow" aria-label={ui.goContact}>
          <Arrow large />
        </a>
      </div>
      <div className="hero-work entrance">
        <h2 className="section-label">{ui.selected}</h2>
        <div className="space-y-9">
          {projects.map((project) => (
            <ProjectLink key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start gap-2">
          <a href="#work" className="text-link">
            {ui.explore} <Arrow />
          </a>
          <a href={personal.resume} className="text-link" download>
            {ui.resume} <span className="text-xs">{ui.pdfLanguage}</span>{" "}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
