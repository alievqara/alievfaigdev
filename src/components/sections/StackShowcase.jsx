import { useTranslation } from "react-i18next";

function StackShowcase() {
  const { t } = useTranslation();
  const items = t("stack.items", { returnObjects: true });

  return (
    <section className="stack-showcase">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{t("stack.eyebrow")}</p>
          <h2 className="section-heading__title">{t("stack.title")}</h2>
        </div>

        <div className="stack-showcase__grid">
          {items.map((item) => (
            <article className="stack-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackShowcase;