import type React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ClientI18nProvider } from '@/components/ClientI18nProvider';

const inter = Inter({ subsets: ['latin'] });

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
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie: string = cookieStore.get('lang')?.value || 'ru';

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
    <html lang={langCookie} suppressHydrationWarning>
      <head>
        {/*3) Inject JSON-LD via a standard <script> tag.*/}
        <title>Anestix</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <meta
          name="theme-color"
          content="#4C8BF5"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#4C2CA0"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={inter.className}>
        <ClientI18nProvider>
          <LanguageProvider initialLanguage={langCookie}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <SpeedInsights />
            </ThemeProvider>
          </LanguageProvider>
        </ClientI18nProvider>
      </body>
    </html>
  );
}
