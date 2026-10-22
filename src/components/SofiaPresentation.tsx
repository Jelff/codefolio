import { useLanguage } from "../i18n/context";
import { ProjectDemo } from "./ProjectDemo";
import { useScenePointer } from "../hooks/useScenePointer";
import { AwardResult } from "./AwardResult";

export function SofiaPresentation() {
  const { ui, recognition } = useLanguage();
  const sceneRef = useScenePointer();
  return (
    <div className="sofia-presentation">
      <figure
        ref={sceneRef}
        className="sofia-scene"
        aria-labelledby="sofia-scene-caption"
      >
        <img
          className="sofia-scene-background"
          src={`${import.meta.env.BASE_URL}assets/bg-sofia.png`}
          width="1440"
          height="900"
          alt=""
          decoding="async"
          loading="lazy"
        />
        <figcaption
          id="sofia-scene-caption"
          className="sofia-scene-caption eyebrow"
        >
          <span>{ui.sofiaIdentity}</span>
          <span aria-hidden="true">S / IA</span>
        </figcaption>
        <div className="sofia-brand-layer">
          <div className="sofia-brand-content">
            <div className="sofia-brand-motion" data-scene-interactive>
              <img
                src={`${import.meta.env.BASE_URL}assets/sofia-ia-hub.webp`}
                width="2172"
                height="724"
                alt="Sofia IA Hub"
                decoding="async"
              />
            </div>
            <p className="sofia-scene-headline">{ui.sofiaHeadline}</p>
          </div>
        </div>
        <div className="sofia-avatar-layer">
          <div className="sofia-avatar-motion" data-scene-interactive>
            <img
              src={`${import.meta.env.BASE_URL}assets/sofia.webp`}
              width="1122"
              height="1402"
              alt={ui.sofiaAvatarAlt}
              decoding="async"
            />
          </div>
        </div>
      </figure>
      <section className="sofia-award" aria-labelledby="sofia-award-title">
        <div>
          <p className="eyebrow mb-4 text-muted">
            {ui.recognition} / {recognition.year}
          </p>
          <h2 id="sofia-award-title" className="font-display text-2xl">
            {recognition.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {recognition.description}
          </p>
        </div>
        <ul className="sofia-award-results">
          {recognition.result.split("/").map((result) => (
            <AwardResult key={result} result={result} />
          ))}
        </ul>
      </section>
      <ProjectDemo />
    </div>
  );
}
