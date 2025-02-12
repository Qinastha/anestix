'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
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
      const count =
        criteria.options && criteria.options.length > 0
          ? criteria.options.length
          : scale.options.length;
      return Math.max(max, count);
    }, 0);
  }, [scale]);

  const breakpoint = useBreakpoint();
  let maxAllowedCols = 2;
  if (breakpoint === 'md') {
    maxAllowedCols = 3;
  } else if (breakpoint === 'lg') {
    maxAllowedCols = 4;
  } else if (breakpoint === 'xl') {
    maxAllowedCols = 6;
  }

  const gridCols = Math.min(maxOptions, maxAllowedCols);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl text-center font-bold">{t(scale.name)}</h1>
      {scale.description && <p className="mb-4">{t(scale.description)}</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/5">{t('scale.criteria')}</TableHead>
            <TableHead className="w-4/5">{t('scale.respOptions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scale.criteria.map((criteria) => {
            const optionsForCriteria =
              criteria.options && criteria.options.length > 0
                ? criteria.options
                : scale.options;
            return (
              <TableRow
                key={criteria.id}
                style={{
                  maxHeight: 'fit-content',
                }}
                className="hover:bg-inherit"
              >
                <TableCell className="font-bold w-1/5">
                  <span className="font-bold bg-gradient-to-br from-primary to-card-foreground dark:to-buttonText bg-clip-text text-transparent border-b border-sidebar-border">
                    {t(criteria.label)}
                  </span>
                </TableCell>
                <TableCell className="w-4/5">
                  <div
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    }}
                  >
                    {optionsForCriteria.map((option) => {
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
                          <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: isSelected ? 1.05 : 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className={`flex items-center p-2 justify-center text-center rounded border h-44 ${
                              isSelected
                                ? 'bg-primary border-secondary text-buttonText'
                                : 'border-primary'
                            }`}
                          >
                            <span
                              className={`font-semibold ${gridCols > 4 ? 'text-xs' : 'text-md'}`}
                            >
                              {t(option.description!)}
                            </span>
                          </motion.div>
                        </div>
                      );
                    })}
                    {optionsForCriteria.length < gridCols &&
                      Array.from({
                        length: gridCols - optionsForCriteria.length,
                      }).map((_, idx) => <div key={`empty-${idx}`} />)}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
