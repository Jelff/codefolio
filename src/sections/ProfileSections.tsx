import { useLanguage } from "../i18n/context";
import { Section } from "../components/Section";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { SkillCategory } from "../components/SkillCategory";
import { AwardResult } from "../components/AwardResult";

export function About() {
  const { personal, ui } = useLanguage();
  return (
    <Section id="about" title={ui.about}>
      <div className="about-layout">
        <p className="section-intro">{ui.approach}</p>
        <div className="prose-editorial">
          {personal.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-muted italic">{personal.philosophy}</p>
        </div>
      </div>
    </Section>
  );
}
export function Work() {
  const { projects, ui } = useLanguage();
  return (
    <Section id="work" title={ui.work}>
      <p className="section-intro">{ui.workIntro}</p>
      <div>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
export function Experience() {
  const { experience, ui } = useLanguage();
  return (
    <Section id="experience" title={ui.experience}>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="experience-row">
            <p className="text-sm text-muted">{item.period}</p>
            <div>
              <h3 className="text-2xl">{item.role}</h3>
              <p className="mt-2 text-muted">{item.company}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed">
                {item.description}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {item.practices}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
export function Education() {
  const { education, ui } = useLanguage();
  return (
    <Section id="education" title={ui.education}>
      <h3 className="text-2xl">{education.degree}</h3>
      <p className="mt-3 text-muted">{education.institution}</p>
      <p className="mt-2 text-sm text-muted">{education.period}</p>
      <p className="mt-5 text-sm text-muted">{education.qualification}</p>
    </Section>
  );
}
export function Skills() {
  const { skills, languages, ui } = useLanguage();
  return (
    <Section id="skills" title={ui.skills}>
      <div className="skills-grid">
        {skills.map((group) => (
          <SkillCategory key={group.category} group={group} />
        ))}
      </div>
      <p className="mt-14 border-t border-rule pt-7 text-sm leading-relaxed text-muted">
        {languages}
      </p>
    </Section>
  );
}
export function Recognition() {
  const { recognition, ui } = useLanguage();
  return (
    <Section id="recognition" title={ui.recognition}>
      <div className="grid gap-6 sm:grid-cols-[1fr_2fr]">
        <p className="text-sm text-muted">
          {recognition.year} · {recognition.project}
        </p>
        <div>
          <h3 className="font-display text-3xl">{recognition.title}</h3>
          <ul className="sofia-award-results mt-5 max-w-xl">
            {recognition.result.split("/").map((result, index) => (
              <AwardResult key={result} result={result} index={index} />
            ))}
          </ul>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            {recognition.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
