import { useLanguage } from "../i18n/context";
import { Hero } from "../sections/Hero";
import {
  About,
  Work,
  Experience,
  Education,
  Skills,
  Recognition,
} from "../sections/ProfileSections";
import { Contact } from "../sections/Contact";
import { usePageNavigation } from "../hooks/usePageNavigation";

export function Home() {
  const { ui } = useLanguage();
  usePageNavigation(`Jefferson B. Mendonça — ${ui.title}`);
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Education />
      <Skills />
      <Recognition />
      <Contact />
    </>
  );
}
