import { Input } from '@/components/ui/input';
import React from 'react';

interface Param {
  key: string;
  label: string;
  optional?: boolean;
  recDosage?: string;
  minValue?: number;
  maxValue?: number;
  defaultValue?: number | string | boolean;
  unit?: string;
}

interface CalculatorInputProps<TParam extends Param> {
  formValues: Record<string, number | string | boolean>;
  param: TParam;
  t: (key: string) => string;
  handleChange: (key: string, value: string | number | boolean) => void;
}

export const CalculatorInput = <TParam extends Param>({
  formValues,
  param,
  t,
  handleChange,
}: CalculatorInputProps<TParam>) => {
  const formValue = formValues[param.key];
  const placeholderText = param.recDosage
    ? t(param.recDosage)
    : param.minValue !== undefined && param.maxValue !== undefined
      ? `${param.minValue} - ${param.maxValue}`
      : '';
  return (
    <Input
      type="number"
      placeholder={placeholderText}
      value={formValue !== undefined ? Number(formValue) : ''}
      onChange={(e) => handleChange(param.key, e.target.value)}
      className="w-full text-base placeholder:text-muted-foreground placeholder:text-base"
    />
  );
};
