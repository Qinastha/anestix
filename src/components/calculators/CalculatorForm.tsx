import React from 'react';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';
import { MedicalUnits } from '@/types/MedicalUnits.type';

interface CalculatorFormParameter {
  key: string;
  type: 'number' | 'select' | 'boolean';
  label: string;
  unit: MedicalUnits;
  options?: { label: string; value: string | number }[];
  optional?: boolean;
  defaultValue?: number | string | boolean;
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
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap"
      >
        {parameters.map((param) => (
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
              {t(param.label)} <span className="pr-4">{t(param.unit)}</span>
            </label>
            {param.type === 'select' ? (
              <Select
                value={String(formValues[param.key] ?? '')}
                onValueChange={(value) => handleChange(param.key, value)}
              >
                <SelectTrigger className="w-full text-base text-pretty whitespace-normal">
                  <SelectValue placeholder={t(param.label)} />
                </SelectTrigger>
                <SelectContent className="max-w-sm">
                  {param.options?.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={String(opt.value)}
                      className="border border-b-primary last:border-b-0 p-4 cursor-pointer"
                    >
                      <span className="block whitespace-normal text-pretty text-base">
                        {t(opt.label)}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : param.type === 'boolean' ? (
              <Switch
                checked={Boolean(formValues[param.key])}
                onCheckedChange={(checked) => handleChange(param.key, checked)}
              />
            ) : (
              <Input
                type="number"
                placeholder={
                  param.optional ? String(param.defaultValue) : t(param.unit)
                }
                value={
                  formValues[param.key] !== undefined
                    ? Number(formValues[param.key])
                    : ''
                }
                onChange={(e) => handleChange(param.key, e.target.value)}
                className="w-full text-base placeholder:text-muted-foreground placeholder:text-base"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <Button
        className="mt-6 w-1/2 self-center"
        onClick={handleCalculate}
        disabled={!allInputsFilled}
      >
        {t('calculators.calculate')}
      </Button>
    </>
  );
};
