import { createContext, useContext } from "react";
import { content, type Language } from "./content";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "pt", setLanguage: () => {} });

export function useLanguage() {
  const context = useContext(LanguageContext);
  const localizedContent = content[context.language];
  return {
    ...context,
    ...localizedContent,
    personal: {
      ...localizedContent.personal,
      resume: `${import.meta.env.BASE_URL}${localizedContent.personal.resume.replace(/^\//, "")}`,
    },
  };
}
