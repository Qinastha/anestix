'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import { NavigationSubItemLink } from '@/interfaces/NavigationItem.type';
import { sortByLabel } from '@/utils/sortByLabel';

type ReusableListProps = {
  items: NavigationSubItemLink[];
  Icon: React.ElementType;
};

export const ReusableLinksList: React.FC<ReusableListProps> = ({
  items,
  Icon,
}) => {
  const { t } = useTranslation();
  const sortedLinks: NavigationSubItemLink[] = sortByLabel(items, t);

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
        >
          <Link href={item.href}>
            <div className="flex items-center space-y-2 p-4 rounded-lg shadow shadow-primary hover:translate-x-2 transition-all duration-300">
              <Icon className="mr-2" />
              <span className="text-md md:text-lg font-medium">
                {t(item.label)}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
