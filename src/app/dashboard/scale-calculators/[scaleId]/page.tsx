'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SCALE_CONFIG } from '@/constants/SCALES_CONFIGS.constant';
import { ScaleConfig, ScaleResult } from '@/types/Scale.type';
import { useTranslation } from 'react-i18next';

export default function ScalePage({
  params,
}: {
  params: Promise<{ scaleId: string }>;
}) {
  const { t } = useTranslation();
  const { scaleId } = React.use(params);
  const scale = SCALE_CONFIG[scaleId] as ScaleConfig | undefined;

  const [selectedValues, setSelectedValues] = useState<
    Record<string, number | null>
  >(() => {
    const initial: Record<string, number | null> = {};
    scale!.criteria.forEach((c) => {
      initial[c.id] = null;
    });
    return initial;
  });

  const handleSelect = useCallback((criteriaId: string, value: number) => {
    setSelectedValues((prev) => ({
      ...prev,
      [criteriaId]: value,
    }));
  }, []);

  const totalScore = useMemo(() => {
    return Object.values(selectedValues).reduce<number>(
      (acc, val) => (val !== null ? acc + val : acc),
      0
    );
  }, [selectedValues]);

  const getScaleResult = useCallback(
    (total: number): ScaleResult => {
      if (!scale!.resultThresholds) return { total, summaryText: '' };
      const threshold = scale!.resultThresholds.find(
        (th) => total >= th.min && total <= th.max
      );
      return threshold
        ? { total, summaryText: threshold.summaryText }
        : { total, summaryText: '' };
    },
    [scale]
  );

  const result = getScaleResult(totalScore);

  if (!scale) {
    return (
      <div className="p-6">
        <p>Scale not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-bold">{t(scale.name)}</h1>
      {scale.description && <p className="mb-4 ">{t(scale.description)}</p>}

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
                  <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
                            className={`flex items-center text-center justify-center w-full aspect-square rounded border 
                              ${isSelected ? 'bg-primary border-secondary text-buttonText' : 'border-inherit'}`}
                          >
                            {t(option.description!)}
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="mt-4 text-xl font-semibold">
        {t('scale.totalScore')}
        {totalScore}
      </div>
      <div className="mt-2 text-lg">
        {t('scale.result')} {t(result.summaryText)}
      </div>
    </div>
  );
}
