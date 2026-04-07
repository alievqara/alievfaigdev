import { useTranslation } from "react-i18next";

function FeaturedPlanzy() {
  const { t } = useTranslation();
  const points = t("featuredPlanzy.points", { returnObjects: true });
  const mockItems = t("featuredPlanzy.mock", { returnObjects: true });

  return (
    <section className="featured-planzy">
      <div className="container featured-planzy__grid">
        <div className="featured-planzy__content">
          <div className="section-heading">
            <p className="section-heading__eyebrow">
              {t("featuredPlanzy.eyebrow")}
            </p>
            <h2 className="section-heading__title">
              {t("featuredPlanzy.title")}
            </h2>
          </div>

          <p>{t("featuredPlanzy.p1")}</p>
          <p>{t("featuredPlanzy.p2")}</p>

          <ul className="featured-planzy__list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="featured-planzy__visual" aria-hidden="true">
          <div className="feature-mock">
            <div className="feature-mock__line feature-mock__line--short" />
            <div className="feature-mock__line" />
            <div className="feature-mock__line" />

            <div className="feature-mock__panel">
              {mockItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPlanzy;