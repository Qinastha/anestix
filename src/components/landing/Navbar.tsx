import React from 'react';
import { LanguageSwitcher } from '@/components/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/switchers/ThemeSwitcher';
import { useTranslations } from 'use-intl';

export const Navbar: React.FC = () => {
  const tHome = useTranslations('Home');
  return (
    <header className="container mx-auto py-6">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">{tHome('title')}</h1>
        <div className="flex gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
