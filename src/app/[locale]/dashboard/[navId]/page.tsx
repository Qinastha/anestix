'use client';

import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sparkle } from 'lucide-react';
import { NavigationSubItem } from '@/interfaces/NavigationItem.type';
import { sortByLabel } from '@/utils/sortByLabel';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import {
  CHILD_VARIANT_Y,
  PARENT_VARIANT_Y,
} from '@/constants/frameVariants/ITEMS_LIST_VARIANT-Y.constant';

export default function SubitemsPage() {
  const tSubI = useTranslations('SubItemsList');
  const { navId } = useParams();
  const locale = useLocale();

  const navItem = NAVIGATION_ITEMS.find(
    (item) => item.href === `/dashboard/${navId}`
  );

  const sortedSubItems: NavigationSubItem[] = sortByLabel(
    locale,
    tSubI,
    navItem?.subItems
  );

  return (
    <>
      {sortedSubItems && sortedSubItems.length > 0 ? (
        <motion.div
          variants={PARENT_VARIANT_Y}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full"
        >
          {sortedSubItems.map((subItem) => (
            <motion.div
              key={subItem.label}
              variants={CHILD_VARIANT_Y}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
            >
              <Link className="group" href={subItem.href}>
                <Card className="md:h-full hover:shadow-xl transition-shadow">
                  <CardHeader className="items-center md:h-full">
                    <CardTitle className="flex flex-row items-center justify-center gap-x-3 text-lg xl:text-xl font-semibold">
                      <Sparkle className="transition-[stroke] duration-300 group-hover:stroke-primary" />
                      <h2 className="flex-1 text-center">
                        {tSubI(subItem.label)}
                      </h2>
                      <Sparkle className="transition-[stroke] duration-300 group-hover:stroke-primary" />
                    </CardTitle>
                    <CardDescription className="text-md">
                      {tSubI(subItem.description)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-lg w-full">{tSubI('no_items')}</p>
      )}
    </>
  );
}
