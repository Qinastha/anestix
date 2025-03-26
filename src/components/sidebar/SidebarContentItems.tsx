'use client';

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import React from 'react';
import { LanguageSwitcher } from '@/components/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/switchers/ThemeSwitcher';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { CollapsibleMenuButton } from '@/components/sidebar/CollapsibleMenuButton';
import { LinkMenuButton } from '@/components/sidebar/LinkMenuButton';
import { HandCoins } from 'lucide-react';

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
  return (
    <SidebarContent className="p-2 flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <SidebarGroup className="h-full">
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="flex flex-col gap-3 h-full">
              <SidebarMenuItem key={'home'} className="w-full">
                <LinkMenuButton
                  title="home"
                  href="/dashboard"
                  handleClose={handleClose}
                  isHomeLink={true}
                />
              </SidebarMenuItem>
              {NAVIGATION_ITEMS.filter((item) => !item.underDev).map((item) => {
                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    {item.subItems && (
                      <CollapsibleMenuButton
                        item={item}
                        openGroups={openGroups}
                        toggleGroup={toggleGroup}
                        handleClose={handleClose}
                      />
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 border-t border-sidebar-border p-4">
        <div className="p-2">
          <LinkMenuButton
            title="supportMe.title"
            href="/dashboard/support-me"
            Icon={HandCoins}
            handleClose={handleClose}
          />
        </div>
        <div className="flex flex-row gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </SidebarContent>
  );
};
