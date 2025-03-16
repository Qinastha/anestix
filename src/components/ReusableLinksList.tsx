'use client';
import React from 'react';
import { motion } from 'motion/react';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import { NavigationSubItemLink } from '@/interfaces/NavigationItem.type';
import { sortByLabel } from '@/utils/sortByLabel';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

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
    <div className="p-4 space-y-2">
      {sortedLinks.map((item, index: number) => (
        <motion.div
          key={item.label}
          className="w-full h-full hover:shadow-lg transition-shadow pb-4"
          custom={index}
          variants={CARDVARIANTS_BASE}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <Link href={item.href}>
            <div className="flex items-center p-4 rounded-lg shadow shadow-primary hover:translate-x-2 transition-all duration-300">
              <Icon className="mr-2" />
              <span className="text-md md:text-lg font-medium">
                {tLink(item.label)}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
