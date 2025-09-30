'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setCookie } from 'cookies-next/client';
import { useTranslation } from '@/shared/i18n/hooks/use-translation';
import { LanguageSelect } from '@/shared/i18n/ui/language-select';
import { COLOR_SCHEME_COOKIE_NAME } from '@/shared/theme/theme.constants';
import { Button } from '@mantine/core';

export function HomePage() {
  const { t } = useTranslation('common');

  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [variable, setVariable] = useState<'outline' | 'transparent' | 'light' | 'filled' | undefined>('filled');

  const handleClickToDark = () => {
    setCookie(COLOR_SCHEME_COOKIE_NAME, 'dark');
    router.refresh();
  };

  const handleClickToLight = () => {
    setCookie(COLOR_SCHEME_COOKIE_NAME, 'light');
    router.refresh();
  };

  const handleClickChangeVariant = () => {
    setVariable(
      variable === 'outline'
        ? 'transparent'
        : variable === 'transparent'
          ? 'light'
          : variable === 'light'
            ? 'filled'
            : variable === 'filled'
              ? 'outline'
              : undefined
    );
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-2'>
        <p>{t('key1')}</p>
        <LanguageSelect />
        <Button disabled={disabled}>Click me</Button>
        <Button onClick={() => setDisabled(!disabled)}>Toggle Disable</Button>
        <Button onClick={handleClickToDark}>Dark mode</Button>
        <Button variant='outline' onClick={handleClickToLight}>
          Light mode
        </Button>
        <Button variant={variable} onClick={handleClickChangeVariant}>
          Change variant: {variable}
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-text-normal'>text-normal</p>
        <p className='text-text-strong'>text-strong</p>
        <p className='text-text-neutral'>text-neutral</p>
        <p className='text-text-sub'>text-sub</p>
        <p className='text-text-light'>text-light</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-blue-50'>50</p>
        <p className='text-blue-100'>100</p>
        <p className='text-blue-200'>200</p>
        <p className='text-blue-300'>300</p>
        <p className='text-blue-400'>400</p>
        <p className='text-blue-500'>500</p>
        <p className='text-blue-600'>600</p>
        <p className='text-blue-700'>700</p>
        <p className='text-blue-800'>800</p>
        <p className='text-blue-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-gray-50'>50</p>
        <p className='text-gray-100'>100</p>
        <p className='text-gray-200'>200</p>
        <p className='text-gray-300'>300</p>
        <p className='text-gray-400'>400</p>
        <p className='text-gray-500'>500</p>
        <p className='text-gray-600'>600</p>
        <p className='text-gray-700'>700</p>
        <p className='text-gray-800'>800</p>
        <p className='text-gray-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-red-50'>50</p>
        <p className='text-red-100'>100</p>
        <p className='text-red-200'>200</p>
        <p className='text-red-300'>300</p>
        <p className='text-red-400'>400</p>
        <p className='text-red-500'>500</p>
        <p className='text-red-600'>600</p>
        <p className='text-red-700'>700</p>
        <p className='text-red-800'>800</p>
        <p className='text-red-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-orange-50'>50</p>
        <p className='text-orange-100'>100</p>
        <p className='text-orange-200'>200</p>
        <p className='text-orange-300'>300</p>
        <p className='text-orange-400'>400</p>
        <p className='text-orange-500'>500</p>
        <p className='text-orange-600'>600</p>
        <p className='text-orange-700'>700</p>
        <p className='text-orange-800'>800</p>
        <p className='text-orange-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-yellow-50'>50</p>
        <p className='text-yellow-100'>100</p>
        <p className='text-yellow-200'>200</p>
        <p className='text-yellow-300'>300</p>
        <p className='text-yellow-400'>400</p>
        <p className='text-yellow-500'>500</p>
        <p className='text-yellow-600'>600</p>
        <p className='text-yellow-700'>700</p>
        <p className='text-yellow-800'>800</p>
        <p className='text-yellow-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-green-50'>50</p>
        <p className='text-green-100'>100</p>
        <p className='text-green-200'>200</p>
        <p className='text-green-300'>300</p>
        <p className='text-green-400'>400</p>
        <p className='text-green-500'>500</p>
        <p className='text-green-600'>600</p>
        <p className='text-green-700'>700</p>
        <p className='text-green-800'>800</p>
        <p className='text-green-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-purple-50'>50</p>
        <p className='text-purple-100'>100</p>
        <p className='text-purple-200'>200</p>
        <p className='text-purple-300'>300</p>
        <p className='text-purple-400'>400</p>
        <p className='text-purple-500'>500</p>
        <p className='text-purple-600'>600</p>
        <p className='text-purple-700'>700</p>
        <p className='text-purple-800'>800</p>
        <p className='text-purple-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-indigo-50'>50</p>
        <p className='text-indigo-100'>100</p>
        <p className='text-indigo-200'>200</p>
        <p className='text-indigo-300'>300</p>
        <p className='text-indigo-400'>400</p>
        <p className='text-indigo-500'>500</p>
        <p className='text-indigo-600'>600</p>
        <p className='text-indigo-700'>700</p>
        <p className='text-indigo-800'>800</p>
        <p className='text-indigo-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-pink-50'>50</p>
        <p className='text-pink-100'>100</p>
        <p className='text-pink-200'>200</p>
        <p className='text-pink-300'>300</p>
        <p className='text-pink-400'>400</p>
        <p className='text-pink-500'>500</p>
        <p className='text-pink-600'>600</p>
        <p className='text-pink-700'>700</p>
        <p className='text-pink-800'>800</p>
        <p className='text-pink-900'>900</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='blue.1'>
          1
        </Button>
        <Button variant={variable} color='blue.2'>
          2
        </Button>
        <Button variant={variable} color='blue.3'>
          3
        </Button>
        <Button variant={variable} color='blue.4'>
          4
        </Button>
        <Button variant={variable} color='blue.5'>
          5
        </Button>
        <Button variant={variable} color='blue.6'>
          6
        </Button>
        <Button variant={variable} color='blue.7'>
          7
        </Button>
        <Button variant={variable} color='blue.8'>
          8
        </Button>
        <Button variant={variable} color='blue.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='gray.1'>
          1
        </Button>
        <Button variant={variable} color='gray.2'>
          2
        </Button>
        <Button variant={variable} color='gray.3'>
          3
        </Button>
        <Button variant={variable} color='gray.4'>
          4
        </Button>
        <Button variant={variable} color='gray.5'>
          5
        </Button>
        <Button variant={variable} color='gray.6'>
          6
        </Button>
        <Button variant={variable} color='gray.7'>
          7
        </Button>
        <Button variant={variable} color='gray.8'>
          8
        </Button>
        <Button variant={variable} color='gray.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='red.1'>
          1
        </Button>
        <Button variant={variable} color='red.2'>
          2
        </Button>
        <Button variant={variable} color='red.3'>
          3
        </Button>
        <Button variant={variable} color='red.4'>
          4
        </Button>
        <Button variant={variable} color='red.5'>
          5
        </Button>
        <Button variant={variable} color='red.6'>
          6
        </Button>
        <Button variant={variable} color='red.7'>
          7
        </Button>
        <Button variant={variable} color='red.8'>
          8
        </Button>
        <Button variant={variable} color='red.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='orange.1'>
          1
        </Button>
        <Button variant={variable} color='orange.2'>
          2
        </Button>
        <Button variant={variable} color='orange.3'>
          3
        </Button>
        <Button variant={variable} color='orange.4'>
          4
        </Button>
        <Button variant={variable} color='orange.5'>
          5
        </Button>
        <Button variant={variable} color='orange.6'>
          6
        </Button>
        <Button variant={variable} color='orange.7'>
          7
        </Button>
        <Button variant={variable} color='orange.8'>
          8
        </Button>
        <Button variant={variable} color='orange.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='yellow.1'>
          1
        </Button>
        <Button variant={variable} color='yellow.2'>
          2
        </Button>
        <Button variant={variable} color='yellow.3'>
          3
        </Button>
        <Button variant={variable} color='yellow.4'>
          4
        </Button>
        <Button variant={variable} color='yellow.5'>
          5
        </Button>
        <Button variant={variable} color='yellow.6'>
          6
        </Button>
        <Button variant={variable} color='yellow.7'>
          7
        </Button>
        <Button variant={variable} color='yellow.8'>
          8
        </Button>
        <Button variant={variable} color='yellow.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='green.1'>
          1
        </Button>
        <Button variant={variable} color='green.2'>
          2
        </Button>
        <Button variant={variable} color='green.3'>
          3
        </Button>
        <Button variant={variable} color='green.4'>
          4
        </Button>
        <Button variant={variable} color='green.5'>
          5
        </Button>
        <Button variant={variable} color='green.6'>
          6
        </Button>
        <Button variant={variable} color='green.7'>
          7
        </Button>
        <Button variant={variable} color='green.8'>
          8
        </Button>
        <Button variant={variable} color='green.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='purple.1'>
          1
        </Button>
        <Button variant={variable} color='purple.2'>
          2
        </Button>
        <Button variant={variable} color='purple.3'>
          3
        </Button>
        <Button variant={variable} color='purple.4'>
          4
        </Button>
        <Button variant={variable} color='purple.5'>
          5
        </Button>
        <Button variant={variable} color='purple.6'>
          6
        </Button>
        <Button variant={variable} color='purple.7'>
          7
        </Button>
        <Button variant={variable} color='purple.8'>
          8
        </Button>
        <Button variant={variable} color='purple.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='indigo.1'>
          1
        </Button>
        <Button variant={variable} color='indigo.2'>
          2
        </Button>
        <Button variant={variable} color='indigo.3'>
          3
        </Button>
        <Button variant={variable} color='indigo.4'>
          4
        </Button>
        <Button variant={variable} color='indigo.5'>
          5
        </Button>
        <Button variant={variable} color='indigo.6'>
          6
        </Button>
        <Button variant={variable} color='indigo.7'>
          7
        </Button>
        <Button variant={variable} color='indigo.8'>
          8
        </Button>
        <Button variant={variable} color='indigo.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant={variable} color='pink.1'>
          1
        </Button>
        <Button variant={variable} color='pink.2'>
          2
        </Button>
        <Button variant={variable} color='pink.3'>
          3
        </Button>
        <Button variant={variable} color='pink.4'>
          4
        </Button>
        <Button variant={variable} color='pink.5'>
          5
        </Button>
        <Button variant={variable} color='pink.6'>
          6
        </Button>
        <Button variant={variable} color='pink.7'>
          7
        </Button>
        <Button variant={variable} color='pink.8'>
          8
        </Button>
        <Button variant={variable} color='pink.9'>
          9
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <span className='typo-body2 inline-flex h-6 items-center rounded-full border border-purple-300 bg-purple-50 px-1.5 text-purple-600'>
          <span>Reversing</span>
        </span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='typo-h1'>
          <span>h1</span> <span>한국어</span>
        </p>
        <p className='typo-h2'>
          <span>h2</span> <span>한국어</span>
        </p>
        <p className='typo-subtitle1'>
          <span>subtitle1</span> <span>한국어</span>
        </p>
        <p className='typo-subtitle2'>
          <span>subtitle2</span> <span>한국어</span>
        </p>
        <p className='typo-body1'>
          <span>body1</span> <span>한국어</span>
        </p>
        <p className='typo-body2'>
          <span>body2</span> <span>한국어</span>
        </p>
        <p className='typo-paragraph1'>
          <span>paragraph1</span> <span>한국어</span>
        </p>
        <p className='typo-paragraph2'>
          <span>paragraph2</span> <span>한국어</span>
        </p>
        <p className='typo-button1'>
          <span>button1</span> <span>한국어</span>
        </p>
        <p className='typo-button2'>
          <span>button2</span> <span>한국어</span>
        </p>
        <p className='typo-caption'>
          <span>caption</span> <span>한국어</span>
        </p>
      </div>
    </div>
  );
}
