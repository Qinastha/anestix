import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Navbar: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
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
          <LanguageSwitcher language={language} action={changeLanguage} />
          <ThemeSwitcher />
        </motion.div>
      </nav>
    </header>
  );
};
