'use client';
import React from 'react';
import { motion } from 'motion/react';
import { NavigationSubItemLink } from '@/interfaces/NavigationItem.type';
import { sortByLabel } from '@/utils/sortByLabel';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import {
  CHILD_VARIANT_Y,
  PARENT_VARIANT_Y,
} from '@/constants/frameVariants/ITEMS_LIST_VARIANT-Y.constant';

type ReusableListProps = {
  items: NavigationSubItemLink[];
  Icon: React.ElementType;
};

export const ReusableLinksList: React.FC<ReusableListProps> = ({
  items,
  Icon,
}) => {
  const locale = useLocale();
  const tLink = useTranslations('LinksList');
  const sortedLinks: NavigationSubItemLink[] = sortByLabel(
    locale,
    tLink,
    items
  );

  return (
    <motion.div
      variants={PARENT_VARIANT_Y}
      initial="hidden"
      animate="show"
      exit="exit"
      className="p-4 space-y-2"
    >
      {sortedLinks.map((item) => (
        <motion.div
          key={item.label}
          className="w-full h-full pb-4"
          variants={CHILD_VARIANT_Y}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Link href={item.href}>
            <div className="flex items-center p-4 rounded-lg shadow shadow-primary hover:translate-x-2 transition-transform duration-300">
              <Icon className="mr-2" />
              <span className="text-md md:text-lg font-medium flex-1">
                {tLink(item.label)}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
