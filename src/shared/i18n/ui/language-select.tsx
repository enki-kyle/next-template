'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../hooks/use-translation';
import { DEFAULT_NS, I18N_SUPPORTED_LANGUAGES } from '../i18n.constants';
import { getCurrentLanguage } from '../utils/get-current-language';

export function LanguageSelect() {
  const { i18n } = useTranslation(DEFAULT_NS);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    const currentLanguage = getCurrentLanguage();
    const newPathname = (() => {
      if (!pathname.startsWith(`/${currentLanguage}`)) return pathname;
      return `/${newLanguage}${pathname.slice(currentLanguage.length + 1)}`;
    })();

    i18n.changeLanguage(newLanguage);
    router.push(newPathname);
  };

  return (
    <select defaultValue={i18n.resolvedLanguage} onChange={handleChange}>
      {I18N_SUPPORTED_LANGUAGES.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}
