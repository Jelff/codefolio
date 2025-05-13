const Accomplishments = () => {
    const items = [
      "1º lugar no Hackathon XYZ",
      "Artigo publicado na Revista Tech 2023",
      "Certificação AWS Developer Associate",
    ];
  
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4">Conquistas</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    );
  };
  export default Accomplishments;
  