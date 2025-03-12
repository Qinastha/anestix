import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { FORMULA_CALCULATOR_LIST } from '@/constants/configs/FORMULA_CALCULATOR_LIST.constant';

export async function generateMetadata({
  params,
}: {
  params: { locale: string; formulaId: string };
}): Promise<Metadata> {
  const { locale, formulaId } = await params;
  const tCalc = await getTranslations({
    locale,
    namespace: 'CalculatorsPage',
  });

  const formulaCalc = FORMULA_CALCULATOR_LIST[formulaId];

  return {
    title: formulaCalc ? tCalc(formulaCalc.label) : tCalc('metaTitleDefault'),
  };
}

export default async function FormulaIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
