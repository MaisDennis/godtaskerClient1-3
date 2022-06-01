import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// -----------------------------------------------------------------------------
import english from './english.json'
import portuguese from './portuguese.json'

i18next
  .use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: 'en',
    resources: {
      en: english,
      pt: portuguese,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18next;
