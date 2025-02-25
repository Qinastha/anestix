'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ScaleCriteria } from '@/interfaces/Scale.type';

interface DesktopScaleInputProps {
  selectedValues: Record<string, number | null>;
  handleSelect: (criteriaId: string, value: number) => void;
  criteria: ScaleCriteria;
  t: (key: string) => string;
}

export const ScaleInput: React.FC<DesktopScaleInputProps> = ({
  selectedValues,
  handleSelect,
  criteria,
  t,
}) => {
  return (
    <Input
      type="number"
      value={selectedValues[criteria.id]?.toString() ?? ''}
      onChange={(e) => {
        const value = Number(e.target.value);
        handleSelect(criteria.id, value);
      }}
      className="border border-primary p-2 rounded w-full placeholder:text-center"
      placeholder={t(criteria.label)}
    />
  );
};
