'use client';
import { DRUG_CALCULATOR_LINKS } from '@/constants/navigation/navigation_links/DRUG_CALCULATOR_LINKS.constant';
import React from 'react';
import { Pill } from 'lucide-react';
import { ReusableLinksList } from '@/components/ReusableLinksList';

export default function DrugCalculatorList() {
  return <ReusableLinksList items={DRUG_CALCULATOR_LINKS} Icon={Pill} />;
}
