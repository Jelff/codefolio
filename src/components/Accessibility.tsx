import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";

const defaults = { largeText: false, underline: false, reduceMotion: false };
type Preferences = typeof defaults;
const storageKey = "codefolio-accessibility";

function readPreferences(): Preferences {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    if (typeof value !== "object" || value === null) return defaults;
    return {
      largeText: "largeText" in value && value.largeText === true,
      underline: "underline" in value && value.underline === true,
      reduceMotion: "reduceMotion" in value && value.reduceMotion === true,
    };
  } catch {
    return defaults;
  }
}

export function Accessibility() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const [preferences, setPreferences] = useState(readPreferences);
  const options = [
    { key: "largeText", label: pt ? "Ampliar texto" : "Larger text" },
    { key: "underline", label: pt ? "Sublinhar links" : "Underline links" },
    { key: "reduceMotion", label: pt ? "Reduzir movimento" : "Reduce motion" },
  ] as const;

  useEffect(() => {
    const root = document.documentElement;
    for (const key of Object.keys(defaults) as (keyof Preferences)[]) {
      root.toggleAttribute(`data-a11y-${key.toLowerCase()}`, preferences[key]);
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch {
      // Preferences remain usable when storage is unavailable.
    }
  }, [preferences]);

  return (
    <details className="accessibility">
      <summary className="min-h-11 cursor-pointer px-5 py-3">
        {pt ? "Acessibilidade" : "Accessibility"}
      </summary>
      <div className="grid gap-4 px-5 pb-5">
        <p className="max-w-prose text-sm">
          {pt
            ? "Personalize a leitura. O movimento reduzido do sistema é sempre respeitado. Você também pode usar o zoom do navegador."
            : "Adjust your reading preferences. System reduced motion is always respected. You can also use browser zoom."}
        </p>
        <div className="flex flex-wrap gap-3">
          {options.map(({ key, label }) => (
            <label
              key={key}
              className="flex min-h-11 cursor-pointer items-center gap-3 border border-rule px-3 py-2"
            >
              <input
                type="checkbox"
                checked={preferences[key]}
                onChange={(event) =>
                  setPreferences({
                    ...preferences,
                    [key]: event.target.checked,
                  })
                }
                className="size-5 accent-accent"
              />
              {label}
            </label>
          ))}
          <button
            type="button"
            className="min-h-11 px-3 py-2"
            onClick={() => setPreferences(defaults)}
          >
            {pt ? "Restaurar preferências" : "Reset preferences"}
          </button>
        </div>
      </div>
    </details>
  );
}
