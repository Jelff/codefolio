import { useEffect, useRef, useState, type CSSProperties } from "react";
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

export function AwardResult({
  result,
  index,
}: {
  result: string;
  index: number;
}) {
  const { ui } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [celebrating, setCelebrating] = useState(false);
  const [place, level] = result.split("·");

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cancel = () => {
      clearTimeout(timer);
      timer = undefined;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancel();
        if (!entry || entry.intersectionRatio < 0.5 || media.matches) return;
        // Let each burst finish before the next card celebrates.
        timer = setTimeout(
          () => {
            setCelebrating(true);
            observer.disconnect();
          },
          150 + index * 1300,
        );
      },
      { threshold: 0.5 },
    );
    observer.observe(button);
    const reset = () => {
      cancel();
      setCelebrating(false);
    };
    media.addEventListener("change", reset);
    return () => {
      cancel();
      observer.disconnect();
      media.removeEventListener("change", reset);
    };
  }, [index]);

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
        ref={buttonRef}
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
