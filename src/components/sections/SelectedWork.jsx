import { useTranslation } from "react-i18next";
import Reveal from "../common/Reveal";

function SelectedWork() {
  const { t } = useTranslation();
  const items = t("work.items", { returnObjects: true });

  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="section-heading__eyebrow">{t("work.eyebrow")}</p>
            <h2 className="section-heading__title">{t("work.title")}</h2>
          </div>
        </Reveal>

        <div className="work-list">
          {items.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.08}>
              <article className="work-item">
                <div className="work-item__meta">
                  <span>{item.index}</span>
                  <span>{item.category}</span>
                </div>

                <div className="work-item__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="work-item__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;