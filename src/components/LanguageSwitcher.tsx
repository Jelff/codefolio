import { useLanguage } from "../i18n/context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const next = language === "pt" ? "en" : "pt";
  return (
    <button
      type="button"
      className="language-switcher"
      onClick={() => setLanguage(next)}
      lang={next === "pt" ? "pt-BR" : "en"}
      aria-label={next === "en" ? "Switch to English" : "Mudar para português"}
    >
      <span aria-hidden="true">{language === "pt" ? "PT / " : "EN / "}</span>
      {next === "en" ? "English" : "Português"}
    </button>
  );
}
