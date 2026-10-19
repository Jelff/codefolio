import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { Arrow } from "../components/Arrow";
import { Section } from "../components/Section";
import { Contact } from "../sections/Contact";
import { usePageNavigation } from "../hooks/usePageNavigation";

export function ProjectDetail() {
  const { projects, ui } = useLanguage();
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  usePageNavigation(`${project?.name ?? ui.notFound} — Jefferson B. Mendonça`);
  if (!project) return <NotFoundContent />;
  const next = projects.find((item) => item.slug !== slug);
  return (
    <div className="route-enter">
      <div className="editorial-section case-header">
        <Link to="/#work" className="text-link mb-16">
          ← {ui.allWork}
        </Link>
        <p className="mb-6 text-sm text-muted">
          {project.category} · {project.period}
        </p>
        <h1 className="case-title">{project.name}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed">
          {project.summary}
        </p>
        <dl className="mt-12 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
          <div>
            <dt className="mb-3 text-sm text-muted">{ui.contribution}</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="mb-3 text-sm text-muted">{ui.technologies}</dt>
            <dd>{project.technologies.join(" · ")}</dd>
          </div>
        </dl>
      </div>
      {project.sections.map((section, index) => (
        <Section
          key={section.title}
          id={`chapter-${index + 1}`}
          title={`0${index + 1} / ${section.title}`}
        >
          <p className="prose-editorial">{section.body}</p>
        </Section>
      ))}
      <Section id="project-materials" title={ui.materials}>
        <p className="max-w-2xl leading-relaxed text-muted">
          {project.editorialNote}
        </p>
        <p className="mt-4 text-sm text-muted">{ui.placeholder}</p>
        {next && (
          <Link to={`/work/${next.slug}`} className="text-link mt-12">
            {ui.nextCase} {next.name}
            <Arrow />
          </Link>
        )}
      </Section>
      <Contact />
    </div>
  );
}
function NotFoundContent() {
  const { ui } = useLanguage();
  return (
    <div className="editorial-section min-h-screen">
      <p className="section-label">404</p>
      <h1 className="section-intro">{ui.missing}</h1>
      <p className="mb-8 text-muted">{ui.missingDescription}</p>
      <Link to="/" className="text-link">
        {ui.backHome} <Arrow />
      </Link>
    </div>
  );
}
export function NotFound() {
  const { ui } = useLanguage();
  usePageNavigation(`${ui.notFound} — Jefferson B. Mendonça`);
  return <NotFoundContent />;
}
