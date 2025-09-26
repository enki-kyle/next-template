import { NextRequest, NextResponse } from 'next/server';
import { i18nMiddleware } from './shared/middleware/i18n.middleware';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg$).*)'],
};

export async function middleware(request: NextRequest) {
  // 1. i18n middleware
  const i18nResponse = i18nMiddleware(request);
  if (i18nResponse) return i18nResponse;

  return NextResponse.next();
}
