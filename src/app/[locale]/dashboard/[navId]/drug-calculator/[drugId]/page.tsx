'use client';

import { useParams } from 'next/navigation';
import { DRUG_CALCULATOR_LIST } from '@/constants/configs/DRUG_CALCULATOR_LIST.constant';
import { motion } from 'motion/react';
import { useCalculatorForm } from '@/hooks/useCalculatorForm';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import { SkeletonCalc } from '@/components/SkeletonCalc';
import { DrugParameter, DrugResult } from '@/interfaces/DrugCalculator.type';
import { Card, CardContent } from '@/components/ui/card';
import { CalculatorForm } from '@/components/calculators/CalculatorForm';
import React from 'react';
import { CalculatorSumContent } from '@/components/calculators/CalculatorSumContent';
import { useTranslations } from 'use-intl';

export default function DrugCalculatorPage() {
  const params = useParams();
  const drugId = params.drugId as string;
  const config = DRUG_CALCULATOR_LIST[drugId];
  const tCalc = useTranslations('CalculatorsPage');
  const ready: boolean = useDelayLoad(500);

  const { handleChange, handleCalculate, allInputsFilled, result, formValues } =
    useCalculatorForm<DrugParameter, DrugResult>({
      parameters: config.parameters,
      calculate: config.calculate,
    });

  if (!config)
    return (
      <div>
        <span>{tCalc('not_found')}</span>
      </div>
    );

  if (!ready) {
    return <SkeletonCalc numInputs={config?.parameters.length} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-4 w-full flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-2xl mb-6 text-center font-semibold underline underline-offset-4 decoration-primary"
        >
          {tCalc(config.label)}
        </motion.h1>

        <CalculatorForm
          formValues={formValues}
          parameters={config.parameters}
          handleCalculate={handleCalculate}
          handleChange={handleChange}
          allInputsFilled={allInputsFilled}
        />

        <CardContent className="mt-6 p-6 border rounded-lg shadow-lg">
          <CalculatorSumContent
            result={result}
            isDrugForm={true}
            annotation={tCalc(config.annotation)}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
