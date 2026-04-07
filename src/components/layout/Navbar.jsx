import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-logo">
          alievfaig.dev
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">{t("nav.work")}</a>
          <a href="#about">{t("nav.approach")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </nav>

        <div className="site-header__right">
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
      </div>
    </header>
  );
}

export default Navbar;