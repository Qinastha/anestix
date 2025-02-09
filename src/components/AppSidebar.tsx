'use client';

import { useState, useCallback } from 'react';
import { Sidebar, useSidebar } from '@/components/ui/sidebar';
import { SidebarContentItems } from '@/components/dashboard/SidebarContentItems';
import { MobileSidebar } from '@/components/dashboard/MobileSidebar';

export const AppSidebar = () => {
  const { isMobile } = useSidebar();
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleGroup = useCallback((label: string) => {
    setOpenGroups((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  }, []);

  if (isMobile) {
    return (
      <MobileSidebar open={open} setOpen={setOpen}>
        <SidebarContentItems
          openGroups={openGroups}
          toggleGroup={toggleGroup}
          open={open}
          setOpen={setOpen}
        />
      </MobileSidebar>
    );
  }

  return (
    <Sidebar
      className={`border-r border-border md:h-screen bg-sidebar-background text-sidebar-foreground hidden md:block`}
    >
      <SidebarContentItems openGroups={openGroups} toggleGroup={toggleGroup} />
    </Sidebar>
  );
};
