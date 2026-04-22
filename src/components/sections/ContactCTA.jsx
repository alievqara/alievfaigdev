import { useTranslation } from "react-i18next";
import { socialLinks } from "../../data/socialLinks";

function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="contact-cta__inner">
          <h2 className="contact-cta__title">{t("contact.title")}</h2>

          <p className="contact-cta__text">{t("contact.text")}</p>

          <div className="contact-cta__actions">
            <a href={socialLinks.email} className="btn btn--primary">
              {t("contact.email")}
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              {t("contact.github")}
            </a>
          </div>

          <div className="contact-cta__socials">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              {t("nav.linkedin")}
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
              {t("nav.instagram")}
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noreferrer">
              {t("nav.telegram")}
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
              {t("nav.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;