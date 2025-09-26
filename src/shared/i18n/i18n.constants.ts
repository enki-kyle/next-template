import { NSType } from './types/i18n.types';

export const I18N_SUPPORTED_LANGUAGES = ['en', 'ko'] as const;
export const DEFAULT_NS: NSType = 'common' as const;
export const LANGUAGE_COOKIE_NAME = 'language' as const;
