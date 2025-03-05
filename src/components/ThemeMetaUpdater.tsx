'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import Head from 'next/head';

export default function ThemeMetaUpdater() {
  const { theme, setTheme, systemTheme } = useTheme();
  // Use currentTheme for updates
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    // Query the standard meta tag name: theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      // Set theme color based on your Tailwind variables:
      // For example, light theme background is white (#ffffff)
      // and dark theme background is your defined dark color (#020817).
      const color = currentTheme === 'dark' ? '#020817' : '#ffffff';
      metaThemeColor.setAttribute('content', color);
    }
  }, [theme, currentTheme, setTheme]);

  return (
    <Head>
      {/* Fallback meta tag; it will be updated dynamically */}
      <meta name="theme-color" content="#020817" />
    </Head>
  );
}
