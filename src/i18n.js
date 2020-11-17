import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Accueil:"Home",
          Artciles:"Blog Posts",
          Catégories:"Categories",
          "Articles":"Blog Posts",
          "Bienvenue sur notre Blog":"Welcome to our Blog"
          
        }
      },
      fr: {
        translations: {
          Accueil:"Accueil",
          Articles:"Articles",
          Catégories:"Catégories",
          "Articles":"Articles",
          "Bienvenue sur notre Blog":"Bienvenue sur notre Blog"
        }
      }
    },
    fallbackLng: "fr",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;