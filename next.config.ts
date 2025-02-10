import { i18n } from './next-i18next.config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n,
};

export default nextConfig;
