import { useTranslation } from "react-i18next";
import Reveal from "../common/Reveal";
import { works } from "../../data/work";

function SelectedWork() {
  const { t } = useTranslation();

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
          {works.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.06}>
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

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="work-item__link"
                    >
                      View project →
                    </a>
                  )}
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