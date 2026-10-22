import { RollingText } from "./RollingText";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";

export function ThemeToggle() {
  const { language } = useLanguage();
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    document.documentElement.dataset["theme"] === "light" ? "light" : "dark",
  );
  const light = theme === "light";
  const label =
    language === "pt" ? (light ? "CLARO" : "ESCURO") : light ? "LIGHT" : "DARK";

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#B2C7AB" : "#1B1612");
    try {
      window.localStorage.setItem("codefolio-theme", theme);
    } catch {
      // Theme switching also works when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={light}
      aria-label={language === "pt" ? "Modo claro" : "Light mode"}
      onClick={() => setTheme(light ? "dark" : "light")}
    >
      <RollingText>{label}</RollingText>
      <span className="theme-swatch" aria-hidden="true" />
    </button>
  );
}
