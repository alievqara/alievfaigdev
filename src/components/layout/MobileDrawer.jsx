import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { socialLinks } from "../../data/socialLinks";

function MobileDrawer({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <div
      id="mobile-drawer"
      className={`mobile-drawer ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-drawer__backdrop" onClick={onClose} />

      <div className="mobile-drawer__panel">
        <div className="mobile-drawer__scroll">
          <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
            <a href="#work" onClick={onClose}>
              {t("nav.work")}
            </a>
            <a href="#about" onClick={onClose}>
              {t("nav.approach")}
            </a>
            <a href="#contact" onClick={onClose}>
              {t("nav.contact")}
            </a>
          </nav>

          <div className="mobile-drawer__section">
            <p className="mobile-drawer__section-title">{t("nav.language")}</p>
            <LanguageSwitcher mobile />
          </div>

          <div className="mobile-drawer__section">
            <p className="mobile-drawer__section-title">{t("nav.shortcuts")}</p>

            <div className="mobile-drawer__links">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                {t("nav.github")}
              </a>

              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                {t("nav.linkedin")}
              </a>

              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                {t("nav.instagram")}
              </a>

              <a href={socialLinks.email}>
                {t("nav.email")}
              </a>

              <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                {t("nav.whatsapp")}
              </a>

              <a href={socialLinks.telegram} target="_blank" rel="noreferrer">
                {t("nav.telegram")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;