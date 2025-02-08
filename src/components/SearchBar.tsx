'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderSearch, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <AnimatePresence>
        {isSearchOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pr-10"
              autoFocus
              onChange={(e) => console.log(e.target.value)}
              onBlur={() => setIsSearchOpen(false)}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsSearchOpen(false);
                }
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setIsSearchOpen(false)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
              onClick={() => setIsSearchOpen(true)}
            >
              <FolderSearch className="mr-2 h-4 w-4" />
              <span>Search...</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
