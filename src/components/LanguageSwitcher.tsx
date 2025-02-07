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

interface LanguageSwitcherProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  changeLanguage,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Button variant="outline" className="w-12">
            {language.toUpperCase() || 'RU'}
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem
          onSelect={() => changeLanguage('ru')}
          className="cursor-pointer hover:bg-muted"
        >
          RU
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => changeLanguage('en')}
          className="cursor-pointer hover:bg-muted"
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
