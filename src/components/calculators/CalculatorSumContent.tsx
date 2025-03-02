import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MedicalUnits } from '@/types/MedicalUnits.type';
import { AlertCircleIcon } from 'lucide-react';

interface Result {
  label: string;
  value: number;
  unit: MedicalUnits;
}

interface CalculatorResultProps<TResult extends Result> {
  result: Record<string, TResult> | null;
  isDrugForm?: boolean;
  annotation?: string;
}

export const CalculatorSumContent = <TResult extends Result>({
  result,
  isDrugForm,
  annotation,
}: CalculatorResultProps<TResult>) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {result && (
          <motion.div
            key="result-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {isDrugForm && (
              <span className="flex flex-row items-center justify-start mb-4">
                <AlertCircleIcon className="text-md md:text-sm text-destructive mr-4" />
                <p className="flex-1 text-sm text-destructive">
                  {t('calculators.alert')}
                </p>
              </span>
            )}
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {t('calculators.result')}
            </h2>
            <ol className="list-decimal list-inside mb-4">
              {Object.entries(result).map(([key, item]) => (
                <li key={key} className="mb-1">
                  <span className="font-medium">{t(item.label)}:</span>{' '}
                  {item.value} {t(item.unit)}
                </li>
              ))}
            </ol>

            {annotation && (
              <motion.hr
                key="divider"
                className="my-4 border-primary"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {annotation && (
        <motion.div
          key="annotation"
          className="mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          <p className="text-sm md:text-md">{t(annotation)}</p>
        </motion.div>
      )}
    </>
  );
};
