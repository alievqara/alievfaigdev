import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__mobile-left">
          <a
            href="https://github.com/alievqara"
            target="_blank"
            rel="noreferrer"
            className="site-header__mobile-github"
            aria-label={t("nav.github")}
          >
            GitHub
          </a>
        </div>

        <a href="#home" className="site-logo" onClick={closeMenu}>
          alievfaig.dev
        </a>

        <div className="site-header__desktop-right">
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">{t("nav.work")}</a>
            <a href="#about">{t("nav.approach")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </nav>

          <LanguageSwitcher />

          <a
            href="https://github.com/alievqara"
            target="_blank"
            rel="noreferrer"
            className="site-header__cta"
          >
            {t("nav.github")}
          </a>
        </div>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        <div className="container mobile-menu__inner">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu}>
              {t("nav.work")}
            </a>
            <a href="#about" onClick={closeMenu}>
              {t("nav.approach")}
            </a>
            <a href="#contact" onClick={closeMenu}>
              {t("nav.contact")}
            </a>
          </nav>

          <div className="mobile-menu__section">
            <p className="mobile-menu__section-title">{t("nav.language")}</p>
            <LanguageSwitcher mobile />
          </div>

          <div className="mobile-menu__section">
            <p className="mobile-menu__section-title">{t("nav.shortcuts")}</p>

            <div className="mobile-menu__links">
              <a
                href="https://github.com/alievqara"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.github")}
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.linkedin")}
              </a>

              <a
                href="https://instagram.com/your-instagram"
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
    </header>
  );
}

export default Navbar;