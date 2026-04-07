import { useTranslation } from "react-i18next";

function SelectedWork() {
  const { t } = useTranslation();
  const items = t("work.items", { returnObjects: true });

  return (
    <section id="work">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{t("work.eyebrow")}</p>
          <h2 className="section-heading__title">{t("work.title")}</h2>
        </div>

        <div className="work-list">
          {items.map((item) => (
            <article className="work-item" key={item.index}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;