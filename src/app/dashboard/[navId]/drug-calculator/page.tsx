'use client';
import { DRUG_CALCULATOR_ITEMS } from '@/constants/navigation/DRUG_CALCULATOR_ITEMS.constant';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import { motion } from 'motion/react';
import { Pill } from 'lucide-react';

export default function DrugCalculatorList() {
  const { t } = useTranslation();
  return (
    <div className="p-4 space-y-2">
      {DRUG_CALCULATOR_ITEMS.map((item, index: number) => (
        <motion.div
          key={item.label}
          className="w-full h-full hover:shadow-lg transition-shadow"
          custom={index}
          variants={CARDVARIANTS_BASE}
          initial="initial"
          animate="animate"
        >
          <Link href={item.href}>
            <div className="flex items-center p-4 rounded-lg shadow shadow-primary hover:translate-x-2 transition-all duration-300 ">
              <Pill className="mr-2 " />
              <span className="text-lg font-medium">{t(item.label)}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
