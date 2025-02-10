'use client';

import Link from 'next/link';
import { TableOfContents } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '@/constants/NAVIGATION_ITEMS.constant';
import { motion } from 'motion/react';

export default function ScaleCalculatorHome() {
  const { t } = useTranslation();

  const scaleNav = NAVIGATION_ITEMS.find(
    (item) => item.href === '/dashboard/scale-list'
  );

  const sortedSubItems = scaleNav?.subItems
    ? [...scaleNav.subItems].sort((a, b) => a.label.localeCompare(b.label))
    : [];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full">
      {sortedSubItems && (
        <>
          {sortedSubItems.map((subItem, index: number) => (
            <motion.div
              key={subItem.label}
              className="w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link key={subItem.href} href={subItem.href}>
                <div className="rounded-lg border p-6 hover:shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TableOfContents size={24} />
                    <h2 className="text-lg font-bold">{t(subItem.label)}</h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}
