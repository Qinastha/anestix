'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { SCALES_LIST } from '@/constants/configs/SCALES_LIST.constant';
import { ScaleConfig, ScaleResult } from '@/interfaces/Scale.type';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopScaleCalc } from '@/components/scale_calculator/DesktopScaleCalc';
import { MobileScaleCalc } from '@/components/scale_calculator/MobileScaleCalc';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import { useParams } from 'next/navigation';
import { SkeletonCalc } from '@/components/SkeletonCalc';
import { motion } from 'motion/react';
import { formatParagraphs } from '@/utils/formatParagraphs';

export default function ScalePage() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const ready = useDelayLoad(500);
  const params = useParams();
  const scaleId = params.scaleId as string;
  const scale = SCALES_LIST[scaleId] as ScaleConfig | undefined;

  const [selectedValues, setSelectedValues] = useState<
    Record<string, number | null>
  >(() => {
    const initial: Record<string, number | null> = {};
    scale?.criteria.forEach((c) => {
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

  const totalScore: number = useMemo(() => {
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

  if (!ready) {
    return (
      <SkeletonCalc numInputs={scale?.criteria.length ?? 4} variant="table" />
    );
  }

  return (
    <>
      {!scale ? (
        <div className="p-4 text-center text-destructive">
          <p>{t('scale.not_found')}</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isMobile ? (
            <MobileScaleCalc
              scale={scale}
              t={t}
              selectedValues={selectedValues}
              handleSelect={handleSelect}
            />
          ) : (
            <DesktopScaleCalc
              scale={scale}
              t={t}
              selectedValues={selectedValues}
              handleSelect={handleSelect}
            />
          )}
          <div className="mt-4 text-lg md:text-xl font-bold tracking-widest">
            {t('scale.totalScore')} {totalScore}
          </div>
          <div className="mt-2 text-md md:text-lg font-semibold tracking-widest">
            {t('scale.result')} {t(result.summaryText)}
          </div>

          {scale?.extraDescription && (
            <div className="mt-6 text-sm md:text-base bg-card p-6 border border-primary rounded-lg shadow-lg space-y-4">
              {formatParagraphs(t(scale.extraDescription)).map(
                (para: string, index: number) => (
                  <p key={index} className="leading-relaxed">
                    {index !== 0 && <b>*</b>}
                    {''}
                    {para}
                  </p>
                )
              )}
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
