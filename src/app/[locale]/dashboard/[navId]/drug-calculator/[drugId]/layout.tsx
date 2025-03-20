import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { DRUG_CALCULATOR_LIST } from '@/constants/configs/DRUG_CALCULATOR_LIST.constant';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; drugId: string }>;
}): Promise<Metadata> {
  const { locale, drugId } = await params;
  const tCalc = await getTranslations({
    locale,
    namespace: 'CalculatorsPage',
  });

  const drugCalc = DRUG_CALCULATOR_LIST[drugId];
  const titleText = drugCalc
    ? tCalc(drugCalc.label)
    : tCalc('metaTitleDefault');
  const descriptionText = drugCalc
    ? tCalc(drugCalc.annotation)
    : tCalc('metaDescDefault');

  return {
    title: titleText,
    description: descriptionText,
    openGraph: {
      title: titleText,
      description: descriptionText,
    },
    twitter: {
      title: titleText,
      description: descriptionText,
    },
  };
}

export default async function DrugIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
