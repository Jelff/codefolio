const ExperienceSection = () => {
    const experiences = [
      { id: "1", role: "Desenvolvedor Front-End", company: "Empresa X", period: "2022 - Presente" },
      { id: "2", role: "Estagiário", company: "Empresa Y", period: "2021 - 2022" },
    ];
  
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experiência Profissional</h2>
        <ul className="space-y-4">
          {experiences.map((exp) => (
            <li key={exp.id} className="p-4 bg-gray-50 rounded-lg shadow">
              <h3 className="text-lg font-bold">{exp.role} @ {exp.company}</h3>
              <p className="text-gray-500">{exp.period}</p>
              {/* Linkaria para a página de detalhes */}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  export default ExperienceSection;
  