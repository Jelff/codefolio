import { useEffect, useRef } from "react";

export function useScenePointer() {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const media = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      scene.style.removeProperty("--scene-x");
      scene.style.removeProperty("--scene-y");
      delete scene.dataset["pointerActive"];
    };

    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      if (
        !(event.target instanceof Element) ||
        !event.target.closest("[data-scene-interactive]")
      ) {
        reset();
        return;
      }
      const bounds = scene.getBoundingClientRect();
      pointerX = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
      );
      pointerY = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
      );
      if (frame) return;
      frame = requestAnimationFrame(() => {
        scene.style.setProperty("--scene-x", String(pointerX));
        scene.style.setProperty("--scene-y", String(pointerY));
        scene.dataset["pointerActive"] = "true";
        frame = 0;
      });
    };

    scene.addEventListener("pointermove", move);
    scene.addEventListener("pointerleave", reset);
    scene.addEventListener("pointercancel", reset);
    media.addEventListener("change", reset);
    return () => {
      reset();
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", reset);
      scene.removeEventListener("pointercancel", reset);
      media.removeEventListener("change", reset);
    };
  }, []);

  return sceneRef;
}
