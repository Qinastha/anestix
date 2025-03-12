import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; navId: string }>;
}): Promise<Metadata> {
  const { locale, navId } = await params;
  const tDash = await getTranslations({ locale, namespace: 'Dashboard' });

  const navItem = NAVIGATION_ITEMS.find(
    (item) => item.href === `/dashboard/${navId}`
  );

  return {
    title: navItem ? tDash(navItem.title) : tDash('metaTitleDefault'),
    description: navItem
      ? tDash(navItem.description)
      : tDash('metaDescDefault'),
  };
}

export default async function NavigationSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
