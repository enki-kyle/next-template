'use client';

import { Button, createTheme, MantineThemeOverride } from '@mantine/core';
import styles from '@shared/styles/mantine.module.css';
import { darkColors, lightColors } from './colors';

const commonConfig: Omit<MantineThemeOverride, 'colors'> = {
  components: {
    Button: Button.extend({
      classNames: {
        root: styles.button__root,
      },
    }),
  },
};

export const lightTheme = createTheme({
  colors: lightColors,
  primaryShade: 5,
  ...commonConfig,
});

export const darkTheme = createTheme({
  colors: darkColors,
  primaryShade: 5,
  ...commonConfig,
});
