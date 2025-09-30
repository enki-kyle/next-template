export const COLOR_SCHEME_COOKIE_NAME = 'color-scheme' as const;
export const COLOR_SCHEME_COOKIE_VALUES = ['light', 'dark'] as const;
export const DEFAULT_COLOR_SCHEME: (typeof COLOR_SCHEME_COOKIE_VALUES)[number] = 'light';
