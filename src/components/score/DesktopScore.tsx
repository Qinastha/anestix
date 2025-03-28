'use client';

import React, { useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScoreConfig, ScoreCriteria } from '@/interfaces/Scores.type';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { OptionInput } from '@/components/score/OptionInput';
import { OptionRadio } from '@/components/score/OptionRadio';
import { OptionGridCell } from '@/components/score/OptionGridCell';
import { motion } from 'motion/react';

interface DesktopScaleCalcProps {
  score: ScoreConfig;
  t: (key: string) => string;
  selectedValues: Record<string, number | null>;
  handleSelect: (criteria: ScoreCriteria, value: number) => void;
}

export const DesktopScore: React.FC<DesktopScaleCalcProps> = ({
  score,
  t,
  selectedValues,
  handleSelect,
}) => {
  const maxOptions = useMemo(() => {
    return score.criteria.reduce((max: number, criteria) => {
      if (
        criteria.type !== 'input' &&
        criteria.type !== 'radio' &&
        criteria.options
      ) {
        const count: number = criteria.options.length;
        return Math.max(max, count);
      }
      return max;
    }, 0);
  }, [score]);

  const breakpoint = useBreakpoint();
  let maxAllowedCols = 3;
  if (breakpoint === 'md') {
    maxAllowedCols = 4;
  } else if (breakpoint === 'lg') {
    maxAllowedCols = 6;
  }

  const gridCols = Math.min(maxOptions, maxAllowedCols);
  const labelWidthClass = maxOptions <= 3 ? 'w-1/2' : 'w-1/4';
  const optionsWidthClass = maxOptions <= 3 ? 'w-1/2' : 'w-3/4';

  return (
    <motion.div>
      <motion.h1 className="mb-4 text-2xl text-center font-semibold underline underline-offset-4 decoration-primary">
        {t(score.name)}
      </motion.h1>
      <motion.h6 className="mb-4 whitespace-pre-wrap">
        {t(score.description)}
      </motion.h6>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-inherit">
            <TableHead className={labelWidthClass}>{t('criteria')}</TableHead>
            <TableHead className={optionsWidthClass}>
              {t('respOptions')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {score.criteria.map((criteria) => (
            <TableRow
              key={criteria.id}
              style={{
                maxHeight: 'fit-content',
              }}
              className="hover:bg-inherit"
            >
              <TableCell className={`${labelWidthClass}`}>
                <span className="font-semibold bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-transparent text-pretty whitespace-pre-wrap">
                  {t(criteria.label)}
                </span>
              </TableCell>
              <TableCell className={`${optionsWidthClass} p-4`}>
                {criteria.type === 'input' ? (
                  <OptionInput
                    handleSelect={handleSelect}
                    criteria={criteria}
                  />
                ) : criteria.type === 'radio' ? (
                  <OptionRadio
                    criteria={criteria}
                    selectedValue={selectedValues[criteria.id]}
                    handleSelect={handleSelect}
                    t={t}
                  />
                ) : (
                  <div
                    className="grid gap-x-4 gap-y-2"
                    style={{
                      gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    }}
                  >
                    {criteria.options.map((option, index: number) => {
                      const isSelected =
                        selectedValues[criteria.id] === option.value;
                      return (
                        <div
                          key={index}
                          className="cursor-pointer self-center"
                          onClick={() => handleSelect(criteria, option.value)}
                        >
                          <OptionGridCell
                            option={option}
                            isSelected={isSelected}
                            t={t}
                          />
                        </div>
                      );
                    })}
                    {criteria.options.length < gridCols &&
                      Array.from({
                        length: gridCols - criteria.options.length,
                      }).map((_, idx: number) => <div key={`empty-${idx}`} />)}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};
