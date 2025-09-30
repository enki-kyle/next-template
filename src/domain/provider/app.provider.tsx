'use client';

import { PropsWithChildren } from 'react';
import { getQueryClient } from '@/shared/tanstack-query/get-query-client';
import { darkTheme, lightTheme } from '@/shared/theme/theme';
import { COLOR_SCHEME_COOKIE_VALUES } from '@/shared/theme/theme.constants';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@shared/i18n/i18n';

interface Props extends PropsWithChildren {
  colorScheme: (typeof COLOR_SCHEME_COOKIE_VALUES)[number];
}

export function AppProvider(props: Props) {
  const { colorScheme, children } = props;

  return (
    <MantineProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <QueryClientProvider client={getQueryClient()}>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        {children}
      </QueryClientProvider>
    </MantineProvider>
  );
}
