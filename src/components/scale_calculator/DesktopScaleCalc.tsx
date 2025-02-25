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
import { ScaleConfig } from '@/interfaces/Scale.type';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { DesktopScaleCell } from '@/components/scale_calculator/DesktopScaleCell';
import { ScaleInput } from '@/components/scale_calculator/ScaleInput';
import { ScaleRadio } from '@/components/scale_calculator/ScaleRadio';

interface DesktopScaleCalcProps {
  scale: ScaleConfig;
  t: (key: string) => string;
  selectedValues: Record<string, number | null>;
  handleSelect: (criteriaId: string, value: number) => void;
}

export const DesktopScaleCalc: React.FC<DesktopScaleCalcProps> = ({
  scale,
  t,
  selectedValues,
  handleSelect,
}) => {
  const maxOptions = useMemo(() => {
    return scale.criteria.reduce((max: number, criteria) => {
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
  }, [scale]);

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
    <div className="p-6">
      <h1 className="mb-4 text-2xl text-center font-bold">{t(scale.name)}</h1>
      {scale.description && <p className="mb-4">{t(scale.description)}</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={labelWidthClass}>
              {t('scale.criteria')}
            </TableHead>
            <TableHead className={optionsWidthClass}>
              {t('scale.respOptions')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scale.criteria.map((criteria) => (
            <TableRow
              key={criteria.id}
              style={{
                maxHeight: 'fit-content',
              }}
              className="hover:bg-inherit"
            >
              <TableCell className={`font-bold ${labelWidthClass} pr-6`}>
                <span className="font-bold bg-gradient-to-br from-primary to-card-foreground dark:to-buttonText bg-clip-text text-transparent border-b border-sidebar-border">
                  {t(criteria.label)}
                </span>
              </TableCell>
              <TableCell className={optionsWidthClass}>
                {criteria.type === 'input' ? (
                  <ScaleInput
                    selectedValues={selectedValues}
                    handleSelect={handleSelect}
                    criteria={criteria}
                    t={t}
                  />
                ) : criteria.type === 'radio' ? (
                  <ScaleRadio
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
                    {criteria.options.map((option) => {
                      const isSelected =
                        selectedValues[criteria.id] === option.value;
                      return (
                        <div
                          key={option.value}
                          className="cursor-pointer self-center"
                          onClick={() =>
                            handleSelect(criteria.id, option.value)
                          }
                        >
                          <DesktopScaleCell
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
    </div>
  );
};
