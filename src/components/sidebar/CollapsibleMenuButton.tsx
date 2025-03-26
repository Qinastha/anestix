'use client';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { NavigationItem } from '@/interfaces/NavigationItem.type';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'use-intl';
import { sortByLabel } from '@/utils/sortByLabel';
import { useLocale } from 'next-intl';

interface MenuButtonProps {
  item: NavigationItem;
  openGroups: string[];
  toggleGroup: (label: string) => void;
  handleClose: () => void;
}

export const CollapsibleMenuButton: React.FC<MenuButtonProps> = ({
  item,
  openGroups,
  toggleGroup,
  handleClose,
}) => {
  const tDash = useTranslations('Dashboard');
  const tSubI = useTranslations('SubItemsList');
  const locale = useLocale();
  const sortedLinks = sortByLabel(locale, tSubI, item.subItems);
  return (
    <Collapsible
      open={openGroups?.includes(item.title)}
      onOpenChange={() => toggleGroup(item.title)}
    >
      <CollapsibleTrigger asChild>
        <SidebarMenuButton>
          <span className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row w-full items-center">
              <item.icon className="mr-2 h-4 w-4" />
              <span className="text-md font-sans font-medium">
                {tDash(item.title)}
              </span>
            </div>
            <ChevronDown
              className={`transition-transform duration-200 ${
                openGroups?.includes(item.title) ? 'rotate-180' : ''
              } h-4 w-4`}
            />
          </span>
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2"
        >
          {sortedLinks.map((subItem) => (
            <SidebarMenuButton
              key={subItem.label}
              asChild
              className="pl-3 w-full"
            >
              <Link href={subItem.href} onClick={() => handleClose()}>
                <span className="text-xs">{tSubI(subItem.label)}</span>
              </Link>
            </SidebarMenuButton>
          ))}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
};
