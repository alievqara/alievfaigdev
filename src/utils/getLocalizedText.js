export function getLocalizedText(value, language, fallbackLanguage = "en") {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  return value[language] || value[fallbackLanguage] || Object.values(value)[0] || "";
}