import { useTranslation } from "react-i18next";

const languages = ["az", "en", "ru"];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <div className="language-switcher language-switcher--desktop" aria-label="Language switcher">
        {languages.map((language) => {
          const isActive = i18n.language === language;

          return (
            <button
              key={language}
              type="button"
              className={`language-switcher__button ${isActive ? "is-active" : ""}`}
              onClick={() => i18n.changeLanguage(language)}
            >
              {t(`languages.${language}`)}
            </button>
          );
        })}
      </div>

      <div className="language-switcher-mobile">
        <label htmlFor="language-select" className="sr-only">
          Language
        </label>

        <select
          id="language-select"
          className="language-switcher-mobile__select"
          value={i18n.language}
          onChange={handleChange}
          aria-label="Select language"
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {t(`languages.${language}`)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default LanguageSwitcher;