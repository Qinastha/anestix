import React from 'react';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { SearchBar } from '@/components/dashboard/SearchBar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <SearchBar />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
