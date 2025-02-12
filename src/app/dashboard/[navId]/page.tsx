'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import { Sparkle } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full">
      {sortedSubItems && sortedSubItems.length > 0 ? (
        <>
          {sortedSubItems.map((subItem, index: number) => (
            <motion.div
              key={subItem.label}
              custom={index}
              variants={CARDVARIANTS_BASE}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Link href={subItem.href}>
                <Card className="group flex flex-col md:h-full hover:shadow-xl transition-shadow">
                  <CardHeader className="flex items-center ">
                    <CardTitle className="flex flex-row items-center space-x-6 text-lg lg:text-2xl font-semibold ">
                      <Sparkle className="mr-2 transition-[stroke] duration-300 group-hover:stroke-primary" />
                      {t(subItem.label)}
                    </CardTitle>
                    <CardDescription className="text-sm lg:text-lg">
                      {t(subItem.description)}
                    </CardDescription>
                  </CardHeader>
                </Card>
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
