import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useReadingProgress() {
  const { pathname } = useLocation();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--reading-progress",
        String(
          range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0,
        ),
      );
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
}
