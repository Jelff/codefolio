import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "./context";
import { content, type Language } from "./content";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("codefolio-language") === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    const ui = content[language].ui;
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
    ]) {
      document.querySelector(selector)?.setAttribute("content", ui.description);
    }
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", `Jefferson B. Mendonça — ${ui.title}`);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", language === "pt" ? "pt_BR" : "en_US");
    try {
      localStorage.setItem("codefolio-language", language);
    } catch {
      /* Language switching remains available when storage is disabled. */
    }
  }, [language]);
  return (
    <LanguageContext value={{ language, setLanguage }}>
      {children}
    </LanguageContext>
  );
}
