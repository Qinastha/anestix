'use client';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { ScoreCriteriaInput } from '@/interfaces/Scores.type';

interface DesktopScaleInputProps {
  handleSelect: (criteria: ScoreCriteriaInput, value: number) => void;
  criteria: ScoreCriteriaInput;
}

export const OptionInput: React.FC<DesktopScaleInputProps> = ({
  handleSelect,
  criteria,
}) => {
  const [val, setVal] = useState<number | string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setVal(input);
    if (
      +input < criteria.minValue ||
      +input > criteria.maxValue ||
      input === ''
    ) {
      handleSelect(criteria, 0);
      return;
    }
    handleSelect(criteria, +input);
  }
  return (
    <Input
      type="number"
      value={val !== undefined ? val : ''}
      onChange={(e) => handleChange(e)}
      className="p-2 rounded w-full placeholder:text-start placeholder:text-xs lg:placeholder:text-sm"
      placeholder={`${criteria.minValue} - ${criteria.maxValue}`}
      min={criteria.minValue}
      max={criteria.maxValue}
      pattern="[0-9]*"
      required
    />
  );
};
