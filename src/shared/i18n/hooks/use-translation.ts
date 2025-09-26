'use client';

import { useParams } from 'next/navigation';
import { useTranslation as useTranslationReact } from 'react-i18next';
import type { I18nLang, NSType } from '@shared/i18n/types/i18n.types';
import { isServer } from '@shared/utils/is-server';
import { isSupportedLanguage } from '../utils/is-supported-language';

export const useTranslation = <N extends NSType>(ns: N | N[], lng?: I18nLang, options?: object) => {
  const original = useTranslationReact<N | N[]>(ns, options);
  const { i18n } = original;

  const { lang: langParam } = useParams<{ lang: I18nLang }>();
  const lang = lng ?? langParam;

  if (!isSupportedLanguage(lang)) throw new Error(`Invalid language: ${lang}`);
  if (isServer && lang && i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang);

  return original;
};
