import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageNavigation(title: string) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document
          .querySelector<HTMLElement>("main")
          ?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
