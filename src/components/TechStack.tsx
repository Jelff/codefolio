const TechStack = () => {
    const technologies = ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"]; // Exemplo
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tecnologias que domino</h2>
        <ul className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <li key={tech} className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  export default TechStack;
  