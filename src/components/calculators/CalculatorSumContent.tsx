import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { MedicalUnits } from '@/types/MedicalUnits.type';
import { AlertCircleIcon } from 'lucide-react';
import { useTranslations } from 'use-intl';

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
  const tCalc = useTranslations('CalculatorsPage');
  const tUnit = useTranslations('Units');

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
              <div className="inline-flex items-center justify-start mb-4">
                <AlertCircleIcon className="text-md md:text-sm text-destructive mr-4" />
                <p className="flex-1 text-xs md:text-sm lg:text-md text-destructive">
                  {tCalc('alert')}
                </p>
              </div>
            )}
            <h2 className="text-lg lg:text-xl mb-2">{tCalc('result')}</h2>
            <ol className="list-disc list-inside mb-4">
              {Object.entries(result).map(([key, item]) => (
                <li key={key} className="mb-1">
                  <span className="text-base">
                    {tCalc(item.label)}:{' '}
                    <span className="font-medium">
                      {item.value} {tUnit(item.unit)}
                    </span>
                  </span>
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
          <p className="text-sm lg:text-base">{annotation}</p>
        </motion.div>
      )}
    </>
  );
};
