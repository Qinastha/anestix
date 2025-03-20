import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { FORMULA_CALCULATOR_LIST } from '@/constants/configs/FORMULA_CALCULATOR_LIST.constant';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; formulaId: string }>;
}): Promise<Metadata> {
  const { locale, formulaId } = await params;
  const tCalc = await getTranslations({
    locale,
    namespace: 'CalculatorsPage',
  });

  const formulaCalc = FORMULA_CALCULATOR_LIST[formulaId];

  const titleText = formulaCalc
    ? tCalc(formulaCalc.label)
    : tCalc('metaTitleDefault');
  const descriptionText = formulaCalc
    ? tCalc(formulaCalc.annotation)
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

export default async function FormulaIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
