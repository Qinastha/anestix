'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { SCALE_CONFIG } from '@/constants/SCALES_CONFIGS.constant';
import { ScaleConfig, ScaleResult } from '@/types/Scale.type';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopScaleCalc } from '@/components/scale_calculator/DesktopScaleCalc';
import { MobileScaleCalc } from '@/components/scale_calculator/MobileScaleCalc';
import { SkeletonTable } from '@/components/scale_calculator/SkeletonTable';
import { useDelayLoad } from '@/hooks/useDelayLoad';

export default function ScalePage({
  params,
}: {
  params: Promise<{ scaleId: string }>;
}) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { scaleId } = React.use(params);
  const scale = SCALE_CONFIG[scaleId] as ScaleConfig | undefined;
  const ready = useDelayLoad(500);

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

  if (!ready) {
    return <SkeletonTable />;
  }

  if (!scale) {
    return (
      <div className="p-6">
        <p>Scale not found.</p>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
}
