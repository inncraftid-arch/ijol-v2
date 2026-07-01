import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import idCommon from './locales/id/common.json';
import idErrors from './locales/id/errors.json';
import enCommon from './locales/en/common.json';
import enErrors from './locales/en/errors.json';

export const resources = {
  id: {
    common: idCommon,
    errors: idErrors,
  },
  en: {
    common: enCommon,
    errors: enErrors,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',
  fallbackLng: 'id',
  defaultNS: 'common',
  ns: ['common', 'errors'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
