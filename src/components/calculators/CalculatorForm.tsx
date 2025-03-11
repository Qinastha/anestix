import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { MedicalUnits } from '@/types/MedicalUnits.type';
import { CalculatorSelect } from '@/components/calculators/CalculatorSelect';
import { CalculatorInput } from '@/components/calculators/CalculatorInput';
import { CalculatorInputWithUnit } from '@/components/calculators/CalculatorInputWithUnit';
import { useTranslations } from 'use-intl';

interface CalculatorFormParameter {
  key: string;
  type: 'number' | 'select' | 'boolean' | 'numberInUnits';
  label: string;
  unit: MedicalUnits;
}

interface CalculatorFormProps<TParam extends CalculatorFormParameter> {
  formValues: Record<string, number | string | boolean>;
  parameters: TParam[];
  handleCalculate: () => void;
  handleChange: (key: string, value: string | number | boolean) => void;
  allInputsFilled: boolean;
}

export const CalculatorForm = <TParam extends CalculatorFormParameter>({
  formValues,
  parameters,
  handleCalculate,
  handleChange,
  allInputsFilled,
}: CalculatorFormProps<TParam>) => {
  const tCalc = useTranslations('CalculatorsPage');
  const tUnit = useTranslations('Units');
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap"
      >
        {parameters.map((param) => {
          const customUnit = formValues[`${param.key}_unit`] ?? '';
          return (
            <motion.div
              key={param.key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={
                param.type === 'boolean'
                  ? 'w-full sm:w-1/2 px-2 flex flex-row mb-4'
                  : 'w-full px-2 mb-4'
              }
            >
              <label className="flex flex-row justify-between text-base font-medium mb-1 gap-4">
                <span className={customUnit ? 'basis-2/3' : ''}>
                  {tCalc(param.label)}
                </span>{' '}
                <span className={`pr-4 ${customUnit ? 'basis 1/3' : ''}`}>
                  {tUnit(param.unit) || tUnit(customUnit.toString())}
                </span>
              </label>
              {param.type === 'select' ? (
                <CalculatorSelect
                  formValues={formValues}
                  param={param}
                  t={tCalc}
                  handleChange={handleChange}
                />
              ) : param.type === 'boolean' ? (
                <Switch
                  checked={Boolean(formValues[param.key])}
                  onCheckedChange={(checked) =>
                    handleChange(param.key, checked)
                  }
                />
              ) : param.type === 'numberInUnits' ? (
                <CalculatorInputWithUnit
                  param={param}
                  formValues={formValues}
                  handleChange={handleChange}
                  tCalc={tCalc}
                  tUnit={tUnit}
                />
              ) : (
                <CalculatorInput
                  formValues={formValues}
                  param={param}
                  t={tUnit}
                  handleChange={handleChange}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <Button
        className="mt-6 w-1/2 self-center"
        onClick={handleCalculate}
        disabled={!allInputsFilled}
      >
        {tCalc('calculate')}
      </Button>
    </>
  );
};
