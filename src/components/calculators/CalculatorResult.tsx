import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CalculatorResultProps<
  TResult extends { label: string; value: number; unit: string },
> {
  result: Record<string, TResult>;
  isDrugForm?: boolean;
}

export const CalculatorResult = <
  TResult extends { label: string; value: number; unit: string },
>({
  result,
  isDrugForm,
}: CalculatorResultProps<TResult>) => {
  const { t } = useTranslation();

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="mt-6"
    >
      <CardContent className="p-6 border rounded-lg shadow-lg bg-card">
        <h2 className="text-xl font-semibold mb-2">
          {t('calculators.result')}
        </h2>
        <ul className="list-disc list-inside mb-4">
          {Object.entries(result).map(([key, item]) => (
            <li key={key} className="mb-1">
              <span className="font-medium">{t(item.label)}:</span> {item.value}{' '}
              {t(item.unit)}
            </li>
          ))}
        </ul>
        {isDrugForm && (
          <>
            <hr className="my-4 border-primary" />
            <p className="text-sm text-destructive">{t('calculators.alert')}</p>
          </>
        )}
      </CardContent>
    </motion.div>
  );
};
