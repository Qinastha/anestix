'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import React, { useContext } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useTheme } from 'next-themes';
import { LanguageContext } from '@/context/LanguageContext';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { sortByLabel } from '@/utils/sortByLabel';
import { Separator } from '@/components/ui/separator';

export interface SidebarContentItemsProps {
  openGroups: string[];
  toggleGroup: (label: string) => void;
  open?: boolean;
  handleClose: () => void;
}

export const SidebarContentItems: React.FC<SidebarContentItemsProps> = ({
  openGroups,
  toggleGroup,
  handleClose,
}) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <SidebarContent className="p-2 flex flex-col justify-between">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-col gap-3">
            {NAVIGATION_ITEMS.map((item) => {
              const sortedLinks = sortByLabel(item.subItems, t);
              return (
                <SidebarMenuItem key={item.title} className="w-full">
                  {item.subItems ? (
                    <Collapsible
                      open={openGroups.includes(item.title)}
                      onOpenChange={() => toggleGroup(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <span className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row w-full items-center">
                              <item.icon className="mr-2 h-4 w-4" />
                              <span className="text-md font-sans">
                                {t(item.title)}
                              </span>
                            </div>
                            <ChevronDown
                              className={`transition-transform duration-200 ${
                                openGroups.includes(item.title)
                                  ? 'rotate-180'
                                  : ''
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
                              <Link
                                href={subItem.href}
                                onClick={() => handleClose()}
                              >
                                <span className="text-xs font-light">
                                  {t(subItem.label)}
                                </span>
                              </Link>
                            </SidebarMenuButton>
                          ))}
                        </motion.div>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.href}
                          className="flex flex-row items-center w-full font-serif"
                          onClick={() => handleClose()}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-lg">{t(item.title)}</span>
                        </Link>
                      </SidebarMenuButton>
                      <Separator />
                    </>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="flex flex-row items-center justify-center gap-4 border-t border-sidebar-border p-4">
        <LanguageSwitcher language={language} action={changeLanguage} />
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </SidebarContent>
  );
};
