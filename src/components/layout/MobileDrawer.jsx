import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

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
              <a
                href="https://github.com/alievqara"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.github")}
              </a>

              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.linkedin")}
              </a>

              <a
                href="https://www.instagram.com/your-instagram"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.instagram")}
              </a>

              <a href="mailto:your@email.com">
                {t("nav.email")}
              </a>

              <a
                href="https://wa.me/994000000000"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.whatsapp")}
              </a>

              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noreferrer"
              >
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