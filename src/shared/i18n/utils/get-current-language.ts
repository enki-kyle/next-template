import { getCookie } from 'cookies-next/client';
import { LANGUAGE_COOKIE_NAME } from '../i18n.constants';
import { I18nLang } from '../types/i18n.types';
import { isSupportedLanguage } from './supported-language';

export const getCurrentLanguage = (): I18nLang => {
  const cookie = getCookie(LANGUAGE_COOKIE_NAME) ?? '';
  if (!isSupportedLanguage(cookie))
    throw new Error(`언어 쿠키가 없습니다. 디버깅이 필요합니다. ${LANGUAGE_COOKIE_NAME}: '${cookie}'`);
  return cookie;
};
