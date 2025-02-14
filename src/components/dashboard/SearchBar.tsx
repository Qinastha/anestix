'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import Link from 'next/link';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchResult {
  label: string;
  href: string;
}

export const SearchBar = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 300);

  const lowerQuery = debouncedQuery.toLowerCase();

  const filteredResults: SearchResult[] = useMemo(() => {
    if (!lowerQuery) return [];

    return NAVIGATION_ITEMS.reduce((acc: SearchResult[], item) => {
      const parentTitle = t(item.title);
      if (parentTitle.toLowerCase().includes(lowerQuery)) {
        acc.push({ label: parentTitle, href: item.href });
      }
      if (item.subItems?.length) {
        item.subItems.forEach((subItem) => {
          const subLabel = t(subItem.label);
          if (subLabel.toLowerCase().includes(lowerQuery)) {
            acc.push({ label: subLabel, href: subItem.href });
          }
          if (subItem.links?.length) {
            subItem.links.forEach((link) => {
              const linkLabel = t(link.label);
              if (linkLabel.toLowerCase().includes(lowerQuery)) {
                acc.push({ label: linkLabel, href: link.href });
              }
            });
          }
        });
      }
      return acc;
    }, [] as SearchResult[]);
  }, [lowerQuery]);

  const stopSearch = (): void => {
    setIsSearchOpen(false);
    setQuery('');
  };

  const handleContainerBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.relatedTarget)
    ) {
      stopSearch();
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="relative mb-8"
      ref={containerRef}
      tabIndex={0}
      onBlur={handleContainerBlur}
    >
      <AnimatePresence>
        {isSearchOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full">
              <Input
                type="search"
                placeholder={t('search')}
                className="w-full"
                autoFocus
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Return') {
                    stopSearch();
                  }
                }}
              />
              {debouncedQuery && (
                <AnimatePresence>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    className="absolute z-10 mt-2 px-2 py-6 w-full max-h-60 overflow-y-auto rounded-lg shadow-lg bg-secondary"
                  >
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result, index: number) => (
                        <motion.li
                          key={index}
                          variants={listItemVariants}
                          className="px-4 py-2"
                          whileHover={{
                            scale: 1.02,
                            borderColor: 'primary',
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Link
                            href={result.href}
                            onClick={stopSearch}
                            className="block w-full border-b border-primary"
                          >
                            {result.label}
                          </Link>
                        </motion.li>
                      ))
                    ) : (
                      <motion.li
                        variants={listItemVariants}
                        className="px-4 py-2 "
                      >
                        {t('No results found')}
                      </motion.li>
                    )}
                  </motion.ul>
                </AnimatePresence>
              )}
            </div>
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
              <Search className="mr-2 h-4 w-4" />
              <span>{t('search')}...</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
