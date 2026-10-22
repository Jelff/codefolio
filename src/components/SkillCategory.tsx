import type { SkillGroup } from "../data/profile";

export function SkillCategory({ group }: { group: SkillGroup }) {
  const tools = group.items.filter((item) => item.icons.length > 0);
  const practices = group.items.filter((item) => item.icons.length === 0);

  return (
    <div className="skill-category">
      <h3>{group.category}</h3>
      {tools.length > 0 && (
        <ul className="skill-tools">
          {tools.map((tool) => (
            <li key={tool.label} className="skill-tool">
              <span className="skill-tool-symbols" aria-hidden="true">
                {tool.icons.map((icon) => (
                  <span
                    key={icon}
                    className="skill-tool-icon"
                    style={{
                      maskImage: `url("${import.meta.env.BASE_URL}assets/skills/${icon}.svg")`,
                    }}
                  />
                ))}
              </span>
              <span className="skill-tool-name">{tool.label}</span>
            </li>
          ))}
        </ul>
      )}
      {practices.length > 0 && (
        <ul className="skill-practices">
          {practices.map((practice) => (
            <li key={practice.label}>{practice.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
