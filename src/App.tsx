import { LanguageProvider } from "./i18n/LanguageProvider";
import { useLanguage } from "./i18n/context";
import { useReadingProgress } from "./hooks/useReadingProgress";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { NotFound, ProjectDetail } from "./pages/ProjectDetail";

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

function Portfolio() {
  const { ui } = useLanguage();
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a href="#main-content" className="skip-link">
        {ui.skip}
      </a>
      <ReadingProgress />
      <Navigation />

      <main id="main-content" tabIndex={-1} className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function ReadingProgress() {
  useReadingProgress();
  return null;
}
