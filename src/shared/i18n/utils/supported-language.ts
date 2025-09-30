import { I18N_SUPPORTED_LANGUAGES } from '../i18n.constants';
import { I18nLang } from '../types/i18n.types';
import { getDefaultI18nLang } from './get-default-language';

export const isSupportedLanguage = (lang: string): lang is I18nLang => {
  return I18N_SUPPORTED_LANGUAGES.includes(lang as I18nLang);
};

export function toSupportedLanguage(lang: string): I18nLang {
  return isSupportedLanguage(lang) ? (lang as I18nLang) : getDefaultI18nLang();
}
