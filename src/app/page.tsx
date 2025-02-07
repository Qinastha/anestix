'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { KEY_FEATURES } from '@/constants/KEY_FEATURES.constant';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl md:text-2xl font-bold">{t('home.Title')}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <LanguageSwitcher
              language={language}
              changeLanguage={changeLanguage}
            />
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">{t('home.Welcome')}</h2>
          <p className="text-lg md:text-xl mb-8">
            {t('home.PlatformDescription')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground">
                {t('home.EnterPlatform')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {KEY_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card text-card-foreground rounded-lg shadow-md"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {t(feature.title)}
              </h3>
              <p>{t(feature.description)}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
