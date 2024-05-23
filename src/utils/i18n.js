// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import frTranslation from '../locales/fr.json';
import esTranslation from '../locales/es.json';
import deTranslation from '../locales/de.json';
import itTranslation from '../locales/it.json';
import usTranslation from '../locales/us.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
      it: { translation: itTranslation },
      us: { translation: usTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
