import { I18nLang } from '../types/i18n.types';
import { isSupportedLanguage } from './supported-language';

export const getDefaultI18nLang = (): I18nLang => {
  const defaultLang = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE;
  if (!defaultLang || !isSupportedLanguage(defaultLang)) throw new Error(`Invalid default language: ${defaultLang}`);
  return defaultLang as I18nLang;
};
