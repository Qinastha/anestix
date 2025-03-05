'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ThemeMetaUpdater() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [metaColor, setMetaColor] = useState('#020817');

  useEffect(() => {
    // For demonstration, use white for light and dark background for dark.
    // Adjust these values to match your Tailwind variables.
    const newColor = currentTheme === 'dark' ? '#020817' : '#ffffff';
    setMetaColor(newColor);
  }, [currentTheme]);

  return (
    <Head>
      {/* This meta tag will be updated by React when theme changes */}
      <meta name="theme-color" content={metaColor} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Head>
  );
}
