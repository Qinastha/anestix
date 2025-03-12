import React from 'react';
import { motion } from 'motion/react';
import { LanguageSwitcher } from '@/components/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/switchers/ThemeSwitcher';
import { useTranslations } from 'use-intl';

export const Navbar: React.FC = () => {
  const tHome = useTranslations('Home');

  return (
    <header className="container mx-auto py-6">
      <nav className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl md:text-2xl font-bold">{tHome('title')}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
        </motion.div>
      </nav>
    </header>
  );
};
