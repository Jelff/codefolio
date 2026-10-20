import { useState } from "react";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { ProjectLink } from "./ProjectLink";

export function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className={`project-showcase project-showcase-${project.slug}`}>
      <div className="project-summary">
        <ProjectLink project={project} index={index} detailed />
      </div>
      {project.slug === "sofia-ia-hub" ? (
        <SofiaStory project={project} />
      ) : (
        <LegalStory project={project} />
      )}
    </div>
  );
}

function SofiaStory({ project }: { project: Project }) {
  const { ui } = useLanguage();
  const [chapter, setChapter] = useState(0);
  const section = project.sections[chapter];
  return (
    <div className="sofia-story">
      <div className="story-heading eyebrow">
        <span>{ui.technicalView}</span>
        <span aria-hidden="true">01 — 03</span>
      </div>
      <p className="story-title">{ui.sofiaHeadline}</p>
      <ol className="knowledge-flow" aria-label={ui.sofiaHeadline}>
        {ui.sofiaNodes.map((node, index) => (
          <li key={node}>
            <span className="flow-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{node}</span>
            {index < 2 && (
              <span className="flow-connector" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <div
        className="chapter-controls"
        role="group"
        aria-label={ui.technicalView}
      >
        {ui.sofiaChapters.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={chapter === index}
            aria-controls={`sofia-chapter-${project.slug}`}
            onClick={() => setChapter(index)}
          >
            <span aria-hidden="true">0{index + 1}</span> {label}
          </button>
        ))}
      </div>
      <div
        id={`sofia-chapter-${project.slug}`}
        className="chapter-content"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3 className="mb-3 text-lg">{section?.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{section?.body}</p>
      </div>
    </div>
  );
}

function LegalStory({ project }: { project: Project }) {
  const { ui } = useLanguage();
  return (
    <div className="legal-story">
      <p className="eyebrow text-muted">{ui.technicalView} / 02</p>
      <p className="legal-wordmark" aria-hidden="true">
        §<span>AI</span>
      </p>
      <p className="story-title">{ui.legalHeadline}</p>
      <p className="legal-capabilities">{ui.legalNote}</p>
      <dl className="legal-stack">
        <div>
          <dt>Frontend</dt>
          <dd>{project.technologies[0]}</dd>
        </div>
        <div>
          <dt>Backend</dt>
          <dd>{project.technologies[1]}</dd>
        </div>
        <div>
          <dt>{ui.technologies}</dt>
          <dd>{project.technologies.slice(2).join(" · ")}</dd>
        </div>
      </dl>
    </div>
  );
}
