import type React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ToastProvider from '@/components/providers/ToastProvider';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Locale } from '@/i18n/navigation';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: 'MetadataRoute' });
  const keywords = tMeta.raw('keywords') as string[];

  // If invalid locale, show 404
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  return {
    title: tMeta('title'),
    description: tMeta('description'),
    // A rich and expanded set of relevant keywords
    keywords: keywords,
    // Provide full icon definitions (placeholders for you to replace/confirm)
    icons: {
      // Favicons
      icon: [
        { url: '/icon.png', sizes: '96x96', type: 'image/png' },
        { url: '/icon.svg', sizes: '1000x1000', type: 'image/svg' },
        { url: '/favicon.ico', sizes: '96x96', type: 'image/x-icon' },
      ],
      // Apple touch icon (iOS)
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      // Other icons (Android, Manifest, etc.)
      other: [
        {
          rel: 'manifest',
          url: '/site.webmanifest',
          type: 'application/manifest+json',
        },
        {
          rel: 'android-chrome',
          url: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          rel: 'android-chrome',
          url: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    // Open Graph for social sharing (Facebook, LinkedIn, etc.)
    openGraph: {
      title: tMeta('title'),
      description: tMeta('description'),
      url: 'https://anestix.vercel.app',
      siteName: 'Anestix',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
      // images: ['/og-image.png'],
    },
    // Twitter Card metadata (for rich previews on Twitter/X)
    twitter: {
      card: 'summary_large_image',
      title: tMeta('title'),
      description: tMeta('description'),
      // images: ['/og-image.png'],
    },
    // Tell search engines to index and follow links on this domain
    robots: 'index, follow',
    // Canonical URL for the root of your site
    metadataBase: new URL('https://anestix.vercel.app'),
    alternates: {
      canonical: 'https://anestix.vercel.app',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // ------------------------------------------------------
  // 2) Define JSON-LD data as an object. We'll inject it in <head>.
  //    Choose your schema type accordingly: 'MedicalOrganization', 'EducationalWebSite', etc.
  // ------------------------------------------------------
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Anestix',
    url: 'https://anestix.vercel.app',
    description:
      'Anestix is a global platform focusing on anesthesiology and ICU, offering clinical guidelines, drug dosage calculators, sedation protocols, and more.',
  };
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/*3) Inject JSON-LD via a standard <script> tag.*/}
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#020817"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastProvider />
            <SpeedInsights />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
