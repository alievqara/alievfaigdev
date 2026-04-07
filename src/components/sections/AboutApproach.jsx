import { useTranslation } from "react-i18next";

function AboutApproach() {
  const { t } = useTranslation();
  const points = t("approach.points", { returnObjects: true });

  return (
    <section className="about-approach" id="about">
      <div className="container about-approach__grid">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{t("approach.eyebrow")}</p>
          <h2 className="section-heading__title">{t("approach.title")}</h2>
        </div>

        <div className="about-approach__content">
          <p>{t("approach.p1")}</p>
          <p>{t("approach.p2")}</p>
          <p>{t("approach.p3")}</p>

          <ul className="approach-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutApproach;