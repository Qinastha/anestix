'use client';

import { useState, useCallback } from 'react';
import { Sidebar } from '@/components/ui/sidebar';
import { SidebarContentItems } from '@/components/dashboard/SidebarContentItems';
import { MobileSidebar } from '@/components/dashboard/MobileSidebar';
import { useIsMobile } from '@/hooks/use-mobile';

export const AppSidebar = () => {
  const isMobile = useIsMobile();
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleGroup = useCallback((label: string) => {
    setOpenGroups((prev: string[]) =>
      prev.includes(label)
        ? prev.filter((item: string) => item !== label)
        : [...prev, label]
    );
  }, []);

  const handleCloseGroups = () => {
    setOpen(false);
    setOpenGroups([]);
  };

  if (isMobile) {
    return (
      <MobileSidebar open={open} setOpen={setOpen}>
        <SidebarContentItems
          openGroups={openGroups}
          toggleGroup={toggleGroup}
          open={open}
          handleClose={handleCloseGroups}
        />
      </MobileSidebar>
    );
  }

  return (
    <Sidebar
      className={`border-r border-border md:h-screen bg-sidebar-background text-sidebar-foreground hidden md:block`}
    >
      <SidebarContentItems
        openGroups={openGroups}
        toggleGroup={toggleGroup}
        handleClose={handleCloseGroups}
      />
    </Sidebar>
  );
};
