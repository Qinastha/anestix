'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Param {
  key: string;
  label: string;
  options?: {
    label: string;
    value: string | number;
    conversionFactor?: number;
  }[];
}

interface CalculatorSelectProps<TParam extends Param> {
  formValues: Record<string, number | string | boolean>;
  param: TParam;
  t: (key: string) => string;
  handleChange: (key: string, value: string | number | boolean) => void;
}

export const CalculatorSelect = <TParam extends Param>({
  formValues,
  param,
  t,
  handleChange,
}: CalculatorSelectProps<TParam>) => {
  return (
    <Select
      value={String(formValues[param.key] ?? '')}
      onValueChange={(value) => handleChange(param.key, value)}
    >
      <SelectTrigger className="w-full text-base text-pretty whitespace-normal text-start">
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
  );
};
