'use client';

import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { useDebounce } from '@/hooks/useDebounce';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import {
  CHILD_VARIANT_Y,
  PARENT_VARIANT_Y,
} from '@/constants/frameVariants/ITEMS_LIST_VARIANT-Y.constant';

interface SearchResult {
  label: string;
  href: string;
}

export const SearchBar = () => {
  const tDash = useTranslations('Dashboard');
  const tSubI = useTranslations('SubItemsList');
  const tLink = useTranslations('LinksList');
  const tSBar = useTranslations('SearchBar');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 500);

  const lowerQuery = debouncedQuery.toLowerCase();

  const filteredResults: SearchResult[] = useMemo(() => {
    if (!lowerQuery) return [];

    return NAVIGATION_ITEMS.reduce((acc: SearchResult[], item) => {
      const parentTitle = tDash(item.title);
      if (parentTitle.toLowerCase().includes(lowerQuery)) {
        acc.push({ label: parentTitle, href: item.href });
      }
      if (item.subItems?.length) {
        item.subItems.forEach((subItem) => {
          const subLabel = tSubI(subItem.label);
          if (subLabel.toLowerCase().includes(lowerQuery)) {
            acc.push({ label: subLabel, href: subItem.href });
          }
          if (subItem.links?.length) {
            subItem.links.forEach((link) => {
              const linkLabel = tLink(link.label);
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

  return (
    <div
      className="relative mb-8"
      ref={containerRef}
      tabIndex={0}
      onBlur={handleContainerBlur}
    >
      {isSearchOpen ? (
        <div className="flex flex-col items-center">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder={tSBar('search')}
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
            <AnimatePresence>
              {debouncedQuery && (
                <motion.ul
                  variants={PARENT_VARIANT_Y}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute z-10 mt-2 px-2 py-6 w-full max-h-60 overflow-y-auto rounded-lg shadow-lg bg-secondary"
                >
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <motion.li
                        key={result.href}
                        variants={CHILD_VARIANT_Y}
                        whileHover={{ translateX: 8 }}
                        whileTap={{ translateX: 100 }}
                        transition={{
                          duration: 0.2,
                          type: 'spring',
                          stiffness: 125,
                        }}
                        className="px-4 py-2"
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
                    <motion.li className="px-4 py-2 ">
                      {tSBar('noResults')}
                    </motion.li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            <span>{tSBar('search')}...</span>
          </Button>
        </div>
      )}
    </div>
  );
};
