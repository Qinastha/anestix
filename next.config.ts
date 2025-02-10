import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    ...i18n,
    localeDetection: false,
  },
};

export default nextConfig;
