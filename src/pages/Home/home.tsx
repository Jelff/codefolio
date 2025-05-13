import React from "react";
import HeroSection from "../../components/HeroSection";
import TechStack from "../../components/TechStack";
import ExperienceSection from "../../components/ExperienceSection";
import Accomplishments from "../../components/Accomplishments";

const Home = () => {
  return (
    <main className="space-y-24 px-6 md:px-12 max-w-5xl mx-auto">
      <HeroSection />
      <TechStack />
      <ExperienceSection />
      <Accomplishments />
    </main>
  );
};

export default Home;
