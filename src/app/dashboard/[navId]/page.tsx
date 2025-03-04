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
import { NavigationSubItem } from '@/interfaces/NavigationItem.type';
import { sortByLabel } from '@/utils/sortByLabel';

export default function SubitemsPage() {
  const { t } = useTranslation();
  const { navId } = useParams();

  const navItem = NAVIGATION_ITEMS.find(
    (item) => item.href === `/dashboard/${navId}`
  );

  const sortedSubItems: NavigationSubItem[] = sortByLabel(navItem?.subItems, t);

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
              <Link className="group" href={subItem.href}>
                <Card className="md:h-full hover:shadow-xl transition-shadow">
                  <CardHeader className="items-center md:h-full">
                    <CardTitle className="flex flex-row items-center justify-center gap-x-3 text-xl xl:text-2xl font-semibold">
                      <Sparkle className="transition-[stroke] duration-300 group-hover:stroke-primary" />
                      <h2 className="flex-1 text-center">{t(subItem.label)}</h2>
                      <Sparkle className="transition-[stroke] duration-300 group-hover:stroke-primary" />
                    </CardTitle>
                    <CardDescription className="text-md lg:text-lg">
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
