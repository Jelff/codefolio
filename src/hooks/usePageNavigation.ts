import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageNavigation(title: string) {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView();
        target?.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document
          .querySelector<HTMLElement>("main")
          ?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
}
