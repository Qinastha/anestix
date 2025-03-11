import type React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ToastProvider from '@/components/ToastProvider';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Locale } from '@/i18n/navigation';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Anestix – Advanced Anesthesiology & ICU Platform',
  description:
    'Anestix is a global platform focusing on anesthesiology and ICU, offering clinical guidelines, drug dosage calculators, sedation protocols, and more.',
  // A rich and expanded set of relevant keywords
  keywords: [
    'anesthesiology',
    'anesthesia',
    'ICU',
    'intensive care',
    'medical guidelines',
    'critical care',
    'drug dosage calculators',
    'fentanyl dosage',
    'noradrenaline dosage',
    'propofol dosage',
    'dopamine dosage',
    'actilyse dosage',
    'aldrete score',
    'apache II score',
    'four score',
    'gcs score',
    'nihss',
    'sofa score',
    'rass score',
    'sedation protocols',
    'bicarbonate deficit calculator',
    'plasma exchange calculator',
    'pediatric infusion rate',
    'creatinine clearance formula',
    'mechanical ventilation',
    'analgesia guidelines',
    'intubation',
    'advanced airway management',
    'medical calculators',
    'medicine',
    'Anestix',
  ],
  // Provide full icon definitions (placeholders for you to replace/confirm)
  icons: {
    // Favicons
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
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
    title: 'Anestix – Advanced Anesthesiology & ICU Platform',
    description:
      'Anestix is a global platform focusing on anesthesiology and ICU, offering clinical guidelines, drug dosage calculators, sedation protocols, and more.',
    url: 'https://anestix.vercel.app',
    siteName: 'Anestix',
    locale: 'en_US',
    type: 'website',
    // images: ['/og-image.png'],
  },
  // Twitter Card metadata (for rich previews on Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'Anestix – Advanced Anesthesiology & ICU Platform',
    description:
      'Anestix is a global platform focusing on anesthesiology and ICU, offering clinical guidelines, drug dosage calculators, sedation protocols, and more.',
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
        <title>Anestix</title>
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
      <body className={inter.className}>
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
