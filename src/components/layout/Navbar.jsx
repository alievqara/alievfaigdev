import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileDrawer from "./MobileDrawer";

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
            {t("nav.github")}
          </a>
        </div>

        <a href="#home" className="site-logo" onClick={closeMenu}>
          Aliev Faig
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
          aria-controls="mobile-drawer"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Navbar;