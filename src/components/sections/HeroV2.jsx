import { useTranslation } from "react-i18next";

function HeroV2() {
  const { t } = useTranslation();

  return (
    <section className="hero-v2" id="home">
      <div className="container hero-v2__grid">
        <div className="hero-v2__content">
          <p className="hero-v2__eyebrow">{t("hero.eyebrow")}</p>

          <h1 className="hero-v2__title">
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
            <br />
            {t("hero.titleLine3")}
          </h1>

          <p className="hero-v2__description">{t("hero.description")}</p>

          <div className="hero-v2__actions">
            <a href="#work" className="btn btn--primary">
              {t("hero.primaryCta")}
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t("hero.secondaryCta")}
            </a>
          </div>
        </div>

        <div className="hero-v2__visual" aria-hidden="true">
          <div className="hero-panel hero-panel--top">
            <span className="hero-panel__label">{t("hero.featuredLabel")}</span>
            <strong>{t("hero.featuredTitle")}</strong>
            <p>{t("hero.featuredText")}</p>
          </div>

          <div className="hero-panel hero-panel--middle">
            <span className="hero-panel__label">{t("hero.stackLabel")}</span>
            <ul>
              <li>ASP.NET Core</li>
              <li>React + Vite</li>
              <li>JWT Authentication</li>
              <li>Microservices</li>
            </ul>
          </div>

          <div className="hero-panel hero-panel--bottom">
            <span className="hero-panel__label">{t("hero.focusLabel")}</span>
            <p>{t("hero.focusText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroV2;