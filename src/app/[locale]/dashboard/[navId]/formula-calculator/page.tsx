'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { FORMULA_CALCULATOR_LINKS } from '@/constants/navigation/navigation_links/FORMULA_CALCULATOR_LINKS.constant';
import { ReusableLinksList } from '@/components/ReusableLinksList';

export default function FormulaCalculatorList() {
  return <ReusableLinksList items={FORMULA_CALCULATOR_LINKS} Icon={Star} />;
}
