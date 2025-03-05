'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { SCORES_LIST } from '@/constants/configs/SCORES_LIST.constant';
import { ScoreConfig, ScoreResult } from '@/interfaces/Scores.type';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import { useParams } from 'next/navigation';
import { SkeletonCalc } from '@/components/SkeletonCalc';
import { motion } from 'motion/react';
import { Separator } from '@/components/ui/separator';
import { MobileScore } from '@/components/score/MobileScore';
import { DesktopScore } from '@/components/score/DesktopScore';
import { ResultScore } from '@/components/score/ResultScore';

export default function ScalePage() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const ready = useDelayLoad(500);
  const params = useParams();
  const scoreId = params.scoreId as string;
  const score = SCORES_LIST[scoreId] as ScoreConfig | undefined;

  const [selectedValues, setSelectedValues] = useState<
    Record<string, number | null>
  >(() => {
    const initial: Record<string, number | null> = {};
    score?.criteria.forEach((c) => {
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
    (total: number): ScoreResult => {
      if (!score!.resultThresholds) return { total, summaryText: '' };
      const threshold = score!.resultThresholds.find(
        (th) => total >= th.min && total <= th.max
      );
      return threshold
        ? { total, summaryText: threshold.summaryText }
        : { total, summaryText: '' };
    },
    [score]
  );

  const result = getScaleResult(totalScore);

  if (!ready) {
    return (
      <SkeletonCalc numInputs={score?.criteria.length ?? 4} variant="table" />
    );
  }

  return (
    <>
      {!score ? (
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
            <MobileScore
              score={score}
              t={t}
              selectedValues={selectedValues}
              handleSelect={handleSelect}
            />
          ) : (
            <DesktopScore
              score={score}
              t={t}
              selectedValues={selectedValues}
              handleSelect={handleSelect}
            />
          )}
          <Separator />
          <ResultScore
            totalScore={totalScore}
            result={result.summaryText}
            t={t}
            extraDescription={score?.extraDescription}
          />
        </motion.div>
      )}
    </>
  );
}
