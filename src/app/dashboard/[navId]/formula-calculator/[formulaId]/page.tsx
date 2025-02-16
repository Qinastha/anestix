'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCalculatorForm } from '@/hooks/useCalculatorForm';
import { FORMULA_CALCULATOR_CONFIG } from '@/constants/configs/FORMULA_CALCULATOR_CONFIG.constant';
import {
  FormulaParameter,
  FormulaResult,
} from '@/interfaces/FormulaCalculator.type';
import { Card, CardContent } from '@/components/ui/card';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import SkeletonCalc from '@/components/SkeletonCalc';
import { useTranslation } from 'react-i18next';
import { CalculatorForm } from '@/components/calculators/CalculatorForm';
import React from 'react';
import { CalculatorSumContent } from '@/components/calculators/CalculatorSumContent';

export default function FormulaCalculatorPage() {
  const params = useParams();
  const formulaId = params.formulaId as string;
  const config = FORMULA_CALCULATOR_CONFIG[formulaId];
  const ready: boolean = useDelayLoad(500);
  const { t } = useTranslation();

  const { handleChange, handleCalculate, allInputsFilled, result } =
    useCalculatorForm<FormulaParameter, FormulaResult>({
      parameters: config.parameters,
      calculate: config.calculate,
    });

  if (!config)
    return (
      <div>
        <span>{t('calculators.not_found')}</span>
      </div>
    );

  if (!ready) {
    return <SkeletonCalc numInputs={config?.parameters.length} />;
  }

  return (
    <Card className="p-4 w-full flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold mb-6 text-center"
      >
        {t(config.label)}
      </motion.h1>

      <CalculatorForm
        parameters={config.parameters}
        handleCalculate={handleCalculate}
        handleChange={handleChange}
        allInputsFilled={allInputsFilled}
      />

      <CardContent className="mt-6 p-6 border rounded-lg shadow-lg bg-card">
        <CalculatorSumContent result={result} annotation={config.annotation} />
      </CardContent>
    </Card>
  );
}
