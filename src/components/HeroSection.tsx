import TypewriterEffect from "./TypewriterEffect";

const HeroSection = () => {
  return (
    <section className="pt-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        <TypewriterEffect
          texts={[
            "Oi, eu sou o Jeff",
            "Programador inovador",
            "Criador de experiências digitais",
            "Amante de tecnologia",
            "Fotógrafo nas horas vagas",
            "Amante da natureza",
          ]}
          speed={100}
          deleteSpeed={50}
          pauseTime={2000}
        />
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-500">
        Programador focado em criar experiências elegantes e funcionais.
      </p>
    </section>
  );
};
export default HeroSection;
