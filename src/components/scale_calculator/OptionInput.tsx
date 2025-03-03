'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ScoreCriteria } from '@/interfaces/Scores.type';

interface DesktopScaleInputProps {
  selectedValues: Record<string, number | null>;
  handleSelect: (criteriaId: string, value: number) => void;
  criteria: ScoreCriteria;
  t: (key: string) => string;
}

export const OptionInput: React.FC<DesktopScaleInputProps> = ({
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
      className="p-2 rounded w-full placeholder:text-start placeholder:text-xs lg:placeholder:text-sm"
      placeholder={t(criteria.label)}
    />
  );
};
