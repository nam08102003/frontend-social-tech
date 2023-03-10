import vi from './locales/vi.json';
import en from './locales/en.json';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    returnNull: false,
    fallbackLng: 'vi',
    debug: true,
    resources: {
      vi: {
        translation: vi,
      },
      en: {
        translation: en,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
