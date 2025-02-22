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
      const count: number =
        criteria.options && criteria.options.length > 0
          ? criteria.options.length
          : scale.options.length;
      if (count <= 2) {
        return 4;
      }
      return Math.max(max, count);
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
                <TableCell className="font-bold w-1/5 pr-6">
                  <span className="font-bold bg-gradient-to-br from-primary to-card-foreground dark:to-buttonText bg-clip-text text-transparent border-b border-sidebar-border">
                    {t(criteria.label)}
                  </span>
                </TableCell>
                <TableCell className="w-4/5">
                  <div
                    className="grid gap-x-4 gap-y-2"
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
                            className={`flex items-center p-1 justify-center text-center rounded border aspect-[6/5] h-5/6 text-pretty ${
                              isSelected
                                ? 'bg-primary border-secondary text-buttonText'
                                : 'border-primary'
                            }`}
                          >
                            <span className="font-semibold max-w-full text-xs">
                              {t(option.description!)}
                            </span>
                          </motion.div>
                        </div>
                      );
                    })}
                    {optionsForCriteria.length < gridCols &&
                      Array.from({
                        length: gridCols - optionsForCriteria.length,
                      }).map((_, idx: number) => <div key={`empty-${idx}`} />)}
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
