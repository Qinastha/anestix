'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScoreConfig } from '@/interfaces/Scores.type';
import { OptionInput } from '@/components/scale_calculator/OptionInput';

interface MobileScaleCalcProps {
  score: ScoreConfig;
  t: (s: string) => string;
  selectedValues: Record<string, number | null>;
  handleSelect: (criteriaId: string, value: number) => void;
}

export const MobileScore: React.FC<MobileScaleCalcProps> = ({
  score,
  t,
  selectedValues,
  handleSelect,
}) => {
  return (
    <div>
      <h1 className="mb-2 text-lg md:text-xl text-center font-semibold underline underline-offset-4 decoration-primary">
        {t(score.name)}
      </h1>
      <h6 className="mb-4 text-sm md:text-md">{t(score.description)}</h6>

      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">{t('scale.criteria')}</TableHead>
            <TableHead className="w-1/2">{t('scale.respOptions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {score.criteria.map((criteria) => (
            <TableRow key={criteria.id} className="hover:bg-inherit">
              <TableCell className="w-1/2">
                <span className="font-semibold text-sm bg-gradient-to-br from-primary to-card-foreground dark:to-buttonText bg-clip-text text-transparent">
                  {t(criteria.label)}
                </span>
              </TableCell>
              <TableCell className="w-1/2 p-3 items-center">
                {criteria.type === 'input' ? (
                  <OptionInput
                    selectedValues={selectedValues}
                    handleSelect={handleSelect}
                    criteria={criteria}
                    t={t}
                  />
                ) : (
                  <div>
                    <Select
                      value={
                        selectedValues[criteria.id] !== null
                          ? selectedValues[criteria.id]?.toString()
                          : ''
                      }
                      onValueChange={(value) =>
                        handleSelect(criteria.id, Number(value))
                      }
                    >
                      <SelectTrigger className="w-full text-left text-xs whitespace-normal text-pretty">
                        <SelectValue
                          placeholder={t('select_an_option')}
                          className="whitespace-normal text-pretty text-xs"
                        />
                      </SelectTrigger>
                      <SelectContent className="max-w-sm bg-card">
                        {criteria.options.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                            className="border border-b-primary last:border-b-0 p-4"
                          >
                            <span className="block whitespace-normal text-pretty text-xs">
                              {t(option.description!)} - {option.value}{' '}
                              {t('score')}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
