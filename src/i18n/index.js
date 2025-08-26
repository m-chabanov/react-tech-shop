import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/locales/en';
import ua from '@/i18n/locales/ua';
import { defaultLang } from '@/config/config';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ua: {
      translation: ua,
    },
  },
  lng: defaultLang,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
