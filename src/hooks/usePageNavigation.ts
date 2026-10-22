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
        target?.focus({ preventScroll: true });
        target?.scrollIntoView();
      } else {
        document
          .querySelector<HTMLElement>("main")
          ?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
}
