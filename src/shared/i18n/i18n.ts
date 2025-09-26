import i18next, { type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourceToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import type { I18nLang, NSType } from '@shared/i18n/types/i18n.types';
import { isServer } from '@shared/utils/is-server';
import { DEFAULT_NS, I18N_SUPPORTED_LANGUAGES } from './i18n.constants';
import { getDefaultI18nLang } from './utils/get-default-language';

const getOptions = (lng: I18nLang = getDefaultI18nLang(), ns: NSType = DEFAULT_NS): InitOptions => {
  return {
    supportedLngs: I18N_SUPPORTED_LANGUAGES,
    lng,
    ns,
    defaultNS: DEFAULT_NS,
    fallbackLng: getDefaultI18nLang(),
    interpolation: {
      escapeValue: false,
    },
  };
};

export const i18nInstance = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourceToBackend((lang: I18nLang, ns: NSType) => import(`./locales/${lang}/${ns}.json`)))
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isServer ? I18N_SUPPORTED_LANGUAGES : [],
  });
