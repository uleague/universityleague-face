import i18n from "i18next";
import { initReactI18next } from "react-i18next";

declare module "react-i18next" {
  type DefaultResources = typeof resources["ru"];
  interface Resources extends DefaultResources {}
}

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ru: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  en: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
