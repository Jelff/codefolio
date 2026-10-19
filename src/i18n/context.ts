import { createContext, useContext } from "react";
import { content, type Language } from "./content";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "pt", setLanguage: () => {} });

export function useLanguage() {
  const context = useContext(LanguageContext);
  return { ...context, ...content[context.language] };
}
