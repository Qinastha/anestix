import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSup = await getTranslations({
    locale,
    namespace: 'MetadataSupportMePage',
  });

  return {
    title: tSup('title'),
    description: tSup('description'),
  };
}

export default async function SupportMePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
