import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import idCommon from './id/common.json';
import idAuth from './id/auth.json';
import idLanding from './id/landing.json';
import idProduct from './id/product.json';
import idSwap from './id/swap.json';
import idUpload from './id/upload.json';
import idError from './id/error.json';
import enCommon from './en/common.json';
import enAuth from './en/auth.json';
import enLanding from './en/landing.json';
import enProduct from './en/product.json';
import enSwap from './en/swap.json';
import enUpload from './en/upload.json';
import enError from './en/error.json';

export const resources = {
  id: {
    common: idCommon,
    auth: idAuth,
    landing: idLanding,
    product: idProduct,
    swap: idSwap,
    upload: idUpload,
    error: idError,
  },
  en: {
    common: enCommon,
    auth: enAuth,
    landing: enLanding,
    product: enProduct,
    swap: enSwap,
    upload: enUpload,
    error: enError,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',
  fallbackLng: 'id',
  defaultNS: 'common',
  ns: ['common', 'auth', 'landing', 'product', 'swap', 'upload', 'error'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
