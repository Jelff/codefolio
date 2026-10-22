import { RollingText } from "../components/RollingText";
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
      <div className="mt-10 border-y border-rule py-8">
        <a
          href={`mailto:${personal.email}`}
          className="email-link inline-flex items-center gap-4"
        >
          <RollingText>{personal.email}</RollingText>
          <Arrow />
        </a>
        <p className="contact-phone mt-4">{personal.phone.display}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            {
              label: "WhatsApp",
              href: `https://wa.me/${personal.phone.international}`,
            },
            {
              label: "Telegram",
              href: `https://t.me/+${personal.phone.international}`,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <RollingText>{link.label}</RollingText>
              <Arrow />
              <span className="sr-only">{ui.external}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
        {personal.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <RollingText>{link.label}</RollingText>
            <Arrow />
            <span className="sr-only">{ui.external}</span>
          </a>
        ))}
        <a href={personal.resume} download className="text-link">
          <RollingText>
            {ui.resume} <span className="text-xs">{ui.pdfLanguage}</span>
          </RollingText>
          <Arrow />
        </a>
      </div>
      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-rule pt-7 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>{personal.location}</p>
        <a href="#main-content" className="footer-top">
          <RollingText>{ui.backTop}</RollingText> ↑
        </a>
      </footer>
    </Section>
  );
}
