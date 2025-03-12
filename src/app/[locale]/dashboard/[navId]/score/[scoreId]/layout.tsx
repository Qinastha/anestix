import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SCORES_LIST } from '@/constants/configs/SCORES_LIST.constant';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; scoreId: string }>;
}): Promise<Metadata> {
  const { locale, scoreId } = await params;
  const tScore = await getTranslations({ locale, namespace: 'ScorePage' });

  const score = SCORES_LIST[scoreId];

  return {
    title: score ? tScore(score.name) : tScore('metaTitleDefault'),
    description: score ? tScore(score.description) : tScore('metaDescDefault'),
  };
}

export default async function ScoreIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
