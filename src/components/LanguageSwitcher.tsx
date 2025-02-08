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
  action: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  action,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button variant="outline" className="w-12 bg-inherit">
            {language.toUpperCase() || 'RU'}
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem
          onSelect={() => action('ru')}
          className="cursor-pointer hover:bg-muted"
        >
          RU
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => action('en')}
          className="cursor-pointer hover:bg-muted"
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
