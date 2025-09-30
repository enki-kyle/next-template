import { NextRequest, NextResponse } from 'next/server';
import { COLOR_SCHEME_COOKIE_NAME, DEFAULT_COLOR_SCHEME } from '../theme/theme.constants';
import { isSupportedColorScheme } from '../theme/utils/supported-color';

export const colorSchemeMiddleware = (request: NextRequest) => {
  const colorSchemeCookie = request.cookies.get(COLOR_SCHEME_COOKIE_NAME);
  const path = request.nextUrl.pathname;

  if (!colorSchemeCookie || !isSupportedColorScheme(colorSchemeCookie.value)) {
    const res = NextResponse.redirect(new URL(path, request.url));
    res.cookies.set(COLOR_SCHEME_COOKIE_NAME, DEFAULT_COLOR_SCHEME);
    return res;
  }

  return undefined;
};
