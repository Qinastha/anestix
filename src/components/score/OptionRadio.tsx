'use client';
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScoreCriteria } from '@/interfaces/Scores.type';

interface DesktopScaleRadioProps {
  criteria: ScoreCriteria;
  selectedValue: number | null;
  handleSelect: (criteriaId: string, value: number) => void;
  t: (key: string) => string;
}

export const OptionRadio: React.FC<DesktopScaleRadioProps> = ({
  criteria,
  selectedValue,
  handleSelect,
  t,
}) => {
  return (
    <RadioGroup
      value={selectedValue !== null ? selectedValue.toString() : ''}
      onValueChange={(value) => handleSelect(criteria.id, +value)}
      className="flex flex-col space-y-2"
    >
      {criteria.options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem
            value={option.value.toString()}
            id={`${criteria.id}-${option.value}`}
          />
          <label
            htmlFor={`${criteria.id}-${option.value}`}
            className="cursor-pointer text-sm text-pretty"
          >
            <span>
              {t(option.description)} - {option.value} {t('score')}
            </span>
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};
