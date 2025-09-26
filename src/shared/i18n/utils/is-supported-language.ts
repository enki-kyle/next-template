import { I18N_SUPPORTED_LANGUAGES } from '../i18n.constants';
import { I18nLang } from '../types/i18n.types';

export const isSupportedLanguage = (lang: string): lang is I18nLang => {
  return I18N_SUPPORTED_LANGUAGES.includes(lang as I18nLang);
};
