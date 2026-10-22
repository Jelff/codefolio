import { useState } from "react";
import { useLanguage } from "../i18n/context";

export function ProjectDemo({ youtubeVideoId }: { youtubeVideoId?: string }) {
  const { ui } = useLanguage();
  const [loadedVideoId, setLoadedVideoId] = useState<string | null>(null);
  const videoId = youtubeVideoId?.trim();
  const hasVideo = Boolean(videoId && /^[\w-]{11}$/.test(videoId));
  return (
    <section className="sofia-demo" aria-labelledby="sofia-demo-title">
      <div className="sofia-demo-heading">
        <h2 id="sofia-demo-title" className="font-display text-2xl">
          {ui.demoTitle}
        </h2>
        <p className="eyebrow text-muted">
          {hasVideo ? ui.demoAvailable : ui.demoSoon}
        </p>
      </div>
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
        {hasVideo ? ui.demoDescription : ui.demoPendingDescription}
      </p>
      <div className="project-demo-frame">
        {hasVideo && loadedVideoId === videoId ? (
          <iframe
            ref={(frame) => frame?.focus()}
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={ui.demoTitle}
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : hasVideo && videoId ? (
          <button
            type="button"
            className="project-demo-load"
            onClick={() => setLoadedVideoId(videoId)}
          >
            <span className="project-demo-symbol" aria-hidden="true">
              ▷
            </span>
            <span>{ui.demoLoad}</span>
          </button>
        ) : (
          <div className="project-demo-placeholder">
            <span className="project-demo-symbol" aria-hidden="true">
              S.
            </span>
            <span>{ui.demoSoon}</span>
          </div>
        )}
      </div>
    </section>
  );
}
