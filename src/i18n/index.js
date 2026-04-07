import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ru from "./locales/ru";
import az from "./locales/az";

const STORAGE_KEY = "portfolio-language";

const supportedLanguages = ["az", "en", "ru"];

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);

  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language?.split("-")[0];

  if (browserLanguage && supportedLanguages.includes(browserLanguage)) {
    return browserLanguage;
  }

  return "az";
}

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru,
    az,
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem(STORAGE_KEY, language);
  document.documentElement.lang = language;
});

document.documentElement.lang = i18n.language;

export default i18n;