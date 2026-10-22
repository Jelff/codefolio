import { RollingText } from "./RollingText";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { Arrow } from "./Arrow";

export function ProjectLink({
  project,
  detailed = false,
  index = 0,
}: {
  project: Project;
  detailed?: boolean;
  index?: number;
}) {
  const { ui } = useLanguage();
  return (
    <article
      className={detailed ? "project-entry project-detailed" : "project-entry"}
    >
      {detailed && (
        <span className="text-sm text-muted" aria-hidden="true">
          0{index + 1}
        </span>
      )}
      <div className="min-w-0">
        <h3>
          <Link to={`/work/${project.slug}`} className="project-link">
            <RollingText>{project.name}</RollingText>
            <Arrow />
          </Link>
        </h3>
        <p className="project-meta">
          {[project.category, project.period].filter(Boolean).join(" · ")}
        </p>
        {detailed && (
          <>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              {project.summary}
            </p>
            <p className="mt-4 text-sm text-muted">{project.role}</p>
            <ul
              aria-label={ui.technologies}
              className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted"
            >
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <Link to={`/work/${project.slug}`} className="text-link mt-7">
              <RollingText>{ui.readCase}</RollingText> <Arrow />
            </Link>
          </>
        )}
      </div>
    </article>
  );
}
