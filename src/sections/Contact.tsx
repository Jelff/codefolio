import { useLanguage } from "../i18n/context";
import { Section } from "../components/Section";
import { Arrow } from "../components/Arrow";

export function Contact() {
  const { personal, ui } = useLanguage();
  return (
    <Section id="contact" title={ui.contact}>
      <h3 className="contact-statement">
        {ui.contactBuild}
        <br />
        {ui.contactMeaning}
      </h3>
      <a
        href={`mailto:${personal.email}`}
        className="email-link mt-10 inline-flex items-center gap-4"
      >
        {personal.email}
        <Arrow />
      </a>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
        {personal.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {link.label}
            <Arrow />
            <span className="sr-only">{ui.external}</span>
          </a>
        ))}
        <a href={personal.resume} download className="text-link">
          {ui.resume} <span className="text-xs">{ui.pdfLanguage}</span>
          <Arrow />
        </a>
      </div>
      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-rule pt-7 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>{personal.location}</p>
      </footer>
    </Section>
  );
}
