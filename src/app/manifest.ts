import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const defaultLocale = routing.defaultLocale;

  const t = await getTranslations({
    locale: defaultLocale,
    namespace: 'Manifest',
  });

  return {
    // Basic fields
    name: t('name'),
    short_name: t('shortName'),
    description: t('description'),

    // Where your PWA should start
    id: `/${defaultLocale}/`,
    start_url: `/${defaultLocale}/`,
    scope: `/${defaultLocale}/`,

    // PWA design
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#020817',

    // Icons
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: '1000x1000',
        type: 'image/svg',
      },
    ],

    // Optional: Screenshots
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1792x1024',
        type: 'image/png',
        form_factor: 'wide',
        label: t('screenshots.wideLabel'),
      },
      {
        src: '/screenshot-tall.png',
        sizes: '1024x1792',
        type: 'image/png',
        form_factor: 'narrow',
        label: t('screenshots.narrowLabel'),
      },
    ],

    // Optional: Categories, shortcuts, etc.
    categories: ['medical', 'health', 'productivity'],
    shortcuts: [
      {
        name: t('shortcuts.dashboard.name'),
        short_name: t('shortcuts.dashboard.shortName'),
        description: t('shortcuts.dashboard.description'),
        url: `/${defaultLocale}/dashboard`,
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
    ],
  };
}
