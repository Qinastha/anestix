'use client';

import { useCallback, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DRUG_CALCULATOR_CONFIG } from '@/constants/configs/calculators_config/DRUG_CALCULATOR_CONFIG.constant';
import { DrugResult } from '@/interfaces/DrugCalculator.type';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAllInputsFilled } from '@/hooks/useAllInputsFilled';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import { SkeletonCalc } from '@/components/SkeletonCalc';

export default function DrugCalculatorPage() {
  const params = useParams();
  const drugId = params.drugId as string;
  const config = DRUG_CALCULATOR_CONFIG[drugId];
  const { t } = useTranslation();
  const ready = useDelayLoad(500);

  const [formValues, setFormValues] = useState<Record<string, number>>({});
  const [result, setResult] = useState<DrugResult | null>(null);
  const allInputsFilled = useAllInputsFilled(config.parameters, formValues);

  const handleChange = useCallback((key: string, value: string) => {
    setFormValues((prev) => {
      if (value.trim() === '') {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return {
        ...prev,
        [key]: Number(value),
      };
    });
  }, []);

  const handleCalculate = useCallback(() => {
    config.calculate(formValues, setResult);
  }, [config, formValues]);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 w-full flex flex-col"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">{t(config.label)}</h1>

      <div className="space-y-4">
        {config.parameters.map((param) => (
          <div key={param.key}>
            <label className="block text-sm font-medium mb-1 ">
              {t(param.label)}
            </label>
            <Input
              type="number"
              placeholder={t(param.label)}
              onChange={(e) => handleChange(param.key, e.target.value)}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <Button
        className="mt-6 w-1/2 self-center"
        onClick={handleCalculate}
        disabled={!allInputsFilled}
      >
        {t('calculators.calculate')}
      </Button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 border rounded-lg shadow-lg bg-card"
        >
          <h2 className="text-xl font-semibold mb mb-2">
            {' '}
            {t('calculators.result')}
          </h2>
          <ul className="list-disc list-inside mb-4">
            {Object.entries(result).map(([key, item]) => (
              <li key={key} className="mb-1">
                <span className="font-medium">{t(item.label)}:</span>{' '}
                {item.value} {item.unit}
              </li>
            ))}
          </ul>
          <hr className="my-4 border-primary" />
          <p className="text-sm text-destructive">{t('calculators.alert')}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
