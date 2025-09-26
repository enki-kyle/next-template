import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/modals',
      '@mantine/notifications',
      '@mantine/dates',
      '@mantine/code-highlight',
      '@mantine/carousel',
      '@mantine/hooks',
    ],
  },
};

export default nextConfig;
