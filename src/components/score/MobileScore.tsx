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
import { ScoreConfig, ScoreCriteria } from '@/interfaces/Scores.type';
import { OptionInput } from '@/components/score/OptionInput';

interface MobileScaleCalcProps {
  score: ScoreConfig;
  t: (key: string) => string;
  selectedValues: Record<string, number | null>;
  handleSelect: (criteria: ScoreCriteria, value: number) => void;
}

export const MobileScore: React.FC<MobileScaleCalcProps> = ({
  score,
  t,
  selectedValues,
  handleSelect,
}) => {
  return (
    <div>
      <h1 className="mb-2 text-xl lg:text-2xl text-center font-semibold underline underline-offset-4 decoration-primary">
        {t(score.name)}
      </h1>
      <h6 className="mb-4 text-sm md:text-md whitespace-pre-wrap">
        {t(score.description)}
      </h6>

      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">{t('criteria')}</TableHead>
            <TableHead className="w-1/2">{t('respOptions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {score.criteria.map((criteria) => (
            <TableRow key={criteria.id} className="hover:bg-inherit">
              <TableCell className="w-1/2">
                <span className="font-semibold text-sm bg-gradient-to-br from-primary to-card-foreground dark:to-buttonText bg-clip-text text-transparent text-pretty whitespace-pre-wrap">
                  {t(criteria.label)}
                </span>
              </TableCell>
              <TableCell className="w-1/2 p-3 items-center">
                {criteria.type === 'input' ? (
                  <OptionInput
                    handleSelect={handleSelect}
                    criteria={criteria}
                  />
                ) : (
                  <div>
                    <Select
                      value={
                        selectedValues[criteria.id] !== null
                          ? selectedValues[criteria.id]?.toString()
                          : ''
                      }
                      onValueChange={(value) => handleSelect(criteria, +value)}
                    >
                      <SelectTrigger className="w-full text-left text-xs whitespace-normal text-pretty">
                        <SelectValue placeholder={t('select_an_option')} />
                      </SelectTrigger>
                      <SelectContent className="max-w-sm bg-card text-pretty text-sm">
                        {criteria.options.map((option, index: number) => (
                          <SelectItem
                            key={index}
                            value={option.value.toString()}
                            className="border border-b-primary last:border-b-0 p-4"
                          >
                            <span className="block text-pretty whitespace-pre-wrap">
                              {t(option.description)} - {option.value}{' '}
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
