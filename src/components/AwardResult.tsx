import { useEffect, useState, type CSSProperties } from "react";
import { useLanguage } from "../i18n/context";

const particles = Array.from(
  { length: 20 },
  (_, index): CSSProperties & Record<`--confetti-${string}`, string> => {
    const angle = (index / 19) * Math.PI;
    const distance = 48 + ((index * 29) % 55);
    return {
      "--confetti-x": `${Math.cos(angle) * distance}px`,
      "--confetti-y": `${-Math.sin(angle) * distance - 20}px`,
      "--confetti-turn": `${(index % 2 ? 1 : -1) * (180 + index * 23)}deg`,
      "--confetti-delay": `${(index % 4) * 35}ms`,
    };
  },
);

export function AwardResult({ result }: { result: string }) {
  const { ui } = useLanguage();
  const [celebrating, setCelebrating] = useState(false);
  const [place, level] = result.split("·");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reset = () => setCelebrating(false);
    media.addEventListener("change", reset);
    return () => media.removeEventListener("change", reset);
  }, []);

  const celebrate = () => {
    if (
      celebrating ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setCelebrating(true);
  };

  return (
    <li>
      <button
        type="button"
        className="sofia-award-result"
        aria-label={`${ui.celebrateAward}: ${place?.trim()}, ${level?.trim()}`}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") celebrate();
        }}
        onFocus={celebrate}
        onClick={celebrate}
      >
        <span className="sofia-award-place">{place?.trim()}</span>
        <span className="eyebrow text-muted">{level?.trim()}</span>
        {celebrating && (
          <span className="award-confetti" aria-hidden="true">
            {particles.map((style, index) => (
              <span
                key={index}
                className="award-confetti-piece"
                style={style}
                onAnimationEnd={
                  index === particles.length - 1
                    ? () => setCelebrating(false)
                    : undefined
                }
              />
            ))}
          </span>
        )}
      </button>
    </li>
  );
}
