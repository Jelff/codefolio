import { useLanguage } from "../i18n/context";

export function HeroPortrait() {
  const { ui } = useLanguage();

  return (
    <figure
      className="hero-portrait"
      tabIndex={0}
      aria-label={ui.heroPortraitAlt}
    >
      <div className="hero-portrait-layers">
        <img
          className="hero-portrait-background"
          src={`${import.meta.env.BASE_URL}jelff-silhueta-bg.png`}
          width="1857"
          height="2907"
          alt=""
          decoding="async"
        />
        <img
          className="hero-portrait-photo"
          src={`${import.meta.env.BASE_URL}jelff-silhueta.png`}
          width="1843"
          height="2906"
          alt={ui.heroPortraitAlt}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </figure>
  );
}
