'use client';

import { useState } from 'react';
import { useTranslation } from '@/shared/i18n/hooks/use-translation';
import { LanguageSelect } from '@/shared/i18n/ui/language-select';
import { Button } from '@mantine/core';

export function HomePage() {
  const { t } = useTranslation('common');

  const [disabled, setDisabled] = useState(false);

  return (
    <div className='flex items-center gap-2'>
      <p>{t('key1')}</p>
      <LanguageSelect />
      <Button color='ocean-blue' disabled={disabled}>
        Click me
      </Button>
      <Button color='bright-pink' onClick={() => setDisabled(!disabled)}>
        Toggle Disable
      </Button>
      <p className='text-ocean-blue-700'>asdf</p>
      <p className='text-bright-pink-100'>asdf</p>
    </div>
  );
}
