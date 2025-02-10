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
  title: 'Anestix - Your Anesthesiology Platform',
  description: 'A comprehensive platform for anesthesiologists',
  keywords: [
    'anesthesiology',
    'anesthesia',
    'platform',
    'resources',
    'clinical guidelines',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Anestix - Your Anesthesiology Platform',
    description: 'A comprehensive platform for anesthesiologists',
    url: 'https://anestix.vercel.app',
    siteName: 'Anestix',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang')?.value || 'ru';
  return (
    <html lang={langCookie} suppressHydrationWarning>
      <body className={inter.className}>
        <ClientI18nProvider>
          <LanguageProvider>
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
