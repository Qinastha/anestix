import { Input } from '@/components/ui/input';
import React from 'react';

interface Param {
  key: string;
  label: string;
  optional?: boolean;
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
  const unitValue = formValues[`${param.key}_unit`];
  return (
    <Input
      type="number"
      placeholder={
        param.optional
          ? String(param.defaultValue)
          : param.unit
            ? t(param.unit)
            : t(unitValue.toString() || '')
      }
      value={formValue !== undefined ? Number(formValue) : ''}
      onChange={(e) => handleChange(param.key, e.target.value)}
      className="w-full text-base placeholder:text-muted-foreground placeholder:text-base"
    />
  );
};
