import React, { useState } from 'react';
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
  defaultValue?: number;
}

interface CalculatorFormProps<TParam extends CalculatorFormParameter> {
  parameters: TParam[];
  handleCalculate: () => void;
  handleChange: (key: string, value: string | number | boolean) => void;
  allInputsFilled: boolean;
}

export const CalculatorForm = <TParam extends CalculatorFormParameter>({
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
        className="space-y-4"
      >
        {parameters.map((param) => (
          <motion.div
            key={param.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <label className="flex flex-row justify-between text-sm font-medium mb-1">
              {t(param.label)} <span className="pr-4">{t(param.unit)}</span>
            </label>
            {param.type === 'select' ? (
              <Select onValueChange={(value) => handleChange(param.key, value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t(param.label)} />
                </SelectTrigger>
                <SelectContent>
                  {param.options?.map((opt) => (
                    <SelectItem key={opt.value} value={String(opt.value)}>
                      {t(opt.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : param.type === 'boolean' ? (
              <Switch
                onCheckedChange={(checked) => handleChange(param.key, checked)}
              />
            ) : param.optional ? (
              <Input
                type="number"
                placeholder={String(param.defaultValue)}
                onChange={(e) =>
                  handleChange(param.key, Number(e.target.value))
                }
                defaultValue={param.defaultValue}
                className="w-full placeholder:text-muted-foreground"
              />
            ) : (
              <Input
                type="number"
                placeholder={t(param.unit)}
                onChange={(e) => handleChange(param.key, e.target.value)}
                className="w-full placeholder:text-muted-foreground "
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
