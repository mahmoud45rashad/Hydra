import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "../src/assets/locale/en/translation.json";
import translationAR from "../src/assets/locale/ar/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'querystring',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain'
      ],
      caches: ["cookie"],
      lookupCookie: 'i18next',
    },
    debug: process.env.NODE_ENV === 'development', // تفعيل debug فقط في بيئة التطوير
    interpolation: {
      escapeValue: false
    }
  });



export default i18n;
