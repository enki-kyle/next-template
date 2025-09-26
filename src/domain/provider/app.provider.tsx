'use client';

import { PropsWithChildren } from 'react';
import { theme } from '@/shared/components/theme';
import { getQueryClient } from '@/shared/tanstack-query/get-query-client';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@shared/i18n/i18n';

export function AppProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={getQueryClient()}>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        {children}
      </QueryClientProvider>
    </MantineProvider>
  );
}
