import React from 'react';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { SearchBar } from '@/components/home/SearchBar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const tDash = await getTranslations({
    locale,
    namespace: 'MetadataDashboard',
  });

  return {
    title: tDash('title'),
    description: tDash('description'),
  };
}

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
