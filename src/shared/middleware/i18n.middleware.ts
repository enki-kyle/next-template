import { NextRequest, NextResponse } from 'next/server';
import { LANGUAGE_COOKIE_NAME } from '../i18n/i18n.constants';
import { getDefaultI18nLang } from '../i18n/utils/get-default-language';
import { isSupportedLanguage } from '../i18n/utils/is-supported-language';

export const i18nMiddleware = (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const pathLanguage = path.split('/')[1];
  const pathWithoutLanguage = pathLanguage ? '/' + path.split('/').slice(2).join('/') : path;
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value ?? '';

  // 1. path, cookie 모두 없으면 기본 언어로 리다이렉트
  if (!pathLanguage && !cookieLanguage) {
    const defaultLanguage = getDefaultI18nLang();
    const res = NextResponse.redirect(new URL(`/${defaultLanguage}${path}`, request.url));
    res.cookies.set(LANGUAGE_COOKIE_NAME, defaultLanguage);
    return res;
  }

  // 2. path가 없고 cookie가 있으면 cookie 언어로 리다이렉트
  if (!pathLanguage && cookieLanguage) {
    // 2.1 cookie 언어 검증
    if (!isSupportedLanguage(cookieLanguage)) {
      const defaultLanguage = getDefaultI18nLang();
      const res = NextResponse.redirect(new URL(`/${defaultLanguage}${path}`, request.url));
      res.cookies.set(LANGUAGE_COOKIE_NAME, defaultLanguage);
      return res;
    }
    // 2.2 cookie 언어로 리다이렉트
    return NextResponse.redirect(new URL(`/${cookieLanguage}${path}`, request.url));
  }

  // 3. path가 있으면 path 언어로 리다이렉트
  if (pathLanguage) {
    // 3.1 path 언어 검증
    if (!isSupportedLanguage(pathLanguage)) {
      const defaultLanguage = getDefaultI18nLang();
      const redirectedLanguage = isSupportedLanguage(cookieLanguage) ? cookieLanguage : defaultLanguage;
      const res = NextResponse.redirect(new URL(`/${redirectedLanguage}${path}`, request.url));
      res.cookies.set(LANGUAGE_COOKIE_NAME, redirectedLanguage);
      return res;
    }
    if (pathLanguage !== cookieLanguage) {
      // 3.2 path 언어로 쿠키 설정
      const res = NextResponse.redirect(new URL(`/${pathLanguage}${pathWithoutLanguage}`, request.url));
      res.cookies.set(LANGUAGE_COOKIE_NAME, pathLanguage);
      return res;
    }
  }

  // 4. 모두 있으면 그대로 진행
  return undefined;
};
