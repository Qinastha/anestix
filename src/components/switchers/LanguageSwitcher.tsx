'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export const LanguageSwitcher: React.FC = () => {
  const locale: string = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button variant="ghost">{locale.toUpperCase() || 'RU'}</Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        {routing.locales.map((locale) => {
          return (
            <DropdownMenuItem
              key={locale}
              className="cursor-pointer hover:bg-muted p-4 flex flex-col"
              onSelect={() => handleLanguageChange(locale)}
            >
              <span className="flex-1">{locale.toUpperCase()}</span>
              <hr className="bg-primary w-full h-0.5" />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
