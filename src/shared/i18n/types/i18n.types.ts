import { I18N_SUPPORTED_LANGUAGES } from '../i18n.constants';
import commonEn from '../locales/en/common.json';
import userEn from '../locales/en/user.json';

export type I18nLang = (typeof I18N_SUPPORTED_LANGUAGES)[number];

export type NSType = keyof I18nNameSpaces;

export interface I18nNameSpaces {
  common: typeof commonEn;
  user: typeof userEn;
}
