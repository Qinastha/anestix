'use client';

import Link from 'next/link';
import { LucideArrowBigRightDash } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';

export default function ScaleCalculatorHome() {
  const { t } = useTranslation();
  const { navId } = useParams();

  const navItem = NAVIGATION_ITEMS.find(
    (item) => item.href === `/dashboard/${navId}`
  );

  const sortedSubItems = navItem?.subItems
    ? [...navItem.subItems].sort((a, b) => a.label.localeCompare(b.label))
    : [];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full">
      {sortedSubItems && sortedSubItems.length > 0 ? (
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
                    <LucideArrowBigRightDash size={24} />
                    <h2 className="text-lg font-bold">{t(subItem.label)}</h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </>
      ) : (
        <p className="text-center text-lg">{t('dashboard.no_items')}</p>
      )}
    </div>
  );
}
