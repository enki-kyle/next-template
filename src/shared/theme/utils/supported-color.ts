import { COLOR_SCHEME_COOKIE_VALUES, DEFAULT_COLOR_SCHEME } from '../theme.constants';

export const isSupportedColorScheme = (
  colorScheme: string
): colorScheme is (typeof COLOR_SCHEME_COOKIE_VALUES)[number] => {
  return COLOR_SCHEME_COOKIE_VALUES.includes(colorScheme as (typeof COLOR_SCHEME_COOKIE_VALUES)[number]);
};

export function toSupportedColorScheme(colorScheme: string): (typeof COLOR_SCHEME_COOKIE_VALUES)[number] {
  return isSupportedColorScheme(colorScheme)
    ? (colorScheme as (typeof COLOR_SCHEME_COOKIE_VALUES)[number])
    : DEFAULT_COLOR_SCHEME;
}
