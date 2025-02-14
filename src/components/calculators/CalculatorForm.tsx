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

interface CalculatorFormProps<
  TParam extends {
    key: string;
    type: 'number' | 'select';
    label: string;
    options?: { label: string; value: string | number }[];
  },
> {
  parameters: TParam[];
  handleCalculate: () => void;
  handleChange: (key: string, value: string) => void;
  allInputsFilled: boolean;
}

export const CalculatorForm = <
  TParam extends {
    key: string;
    type: 'number' | 'select';
    label: string;
    options?: { label: string; value: string | number }[];
  },
>({
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
            <label className="block text-sm font-medium mb-1">
              {t(param.label)}
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
            ) : (
              <Input
                type="number"
                placeholder={t(param.label)}
                onChange={(e) => handleChange(param.key, e.target.value)}
                className="w-full"
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
