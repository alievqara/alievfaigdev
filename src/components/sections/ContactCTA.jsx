import { useTranslation } from "react-i18next";

function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="contact-cta__inner">
          <h2 className="contact-cta__title">{t("contact.title")}</h2>

          <p className="contact-cta__text">{t("contact.text")}</p>

          <div className="contact-cta__actions">
            <a href="mailto:your@email.com" className="btn btn--primary">
              {t("contact.email")}
            </a>
            <a
              href="https://github.com/alievqara"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              {t("contact.github")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;