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
import { ScaleConfig } from '@/types/Scale.type';
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
      <h1 className="mb-2 text-2xl font-bold">{t(scale.name)}</h1>
      {scale.description && <p className="mb-4">{t(scale.description)}</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Criteria</TableHead>
            <TableHead>Response Options</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scale.criteria.map((criteria) => {
            const optionsForCriteria =
              criteria.options && criteria.options.length > 0
                ? criteria.options
                : scale.options;
            return (
              <TableRow key={criteria.id}>
                <TableCell className="font-medium">
                  {t(criteria.label)}
                </TableCell>
                <TableCell>
                  <div
                    className="grid gap-2"
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
                          className="cursor-pointer"
                          onClick={() =>
                            handleSelect(criteria.id, option.value)
                          }
                        >
                          <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: isSelected ? 1.1 : 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className={`flex items-center justify-center text-center w-full aspect-square rounded border ${
                              isSelected
                                ? 'bg-primary border-secondary text-buttonText'
                                : 'border-primary'
                            }`}
                          >
                            {t(option.description!)}
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
