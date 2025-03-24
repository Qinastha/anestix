'use client';

import React from 'react';
import { SCORES_LIST } from '@/constants/configs/SCORES_LIST.constant';
import { ScoreConfig } from '@/interfaces/Scores.type';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDelayLoad } from '@/hooks/useDelayLoad';
import { useParams } from 'next/navigation';
import { SkeletonCalc } from '@/components/SkeletonCalc';
import { motion } from 'motion/react';
import { Separator } from '@/components/ui/separator';
import { MobileScore } from '@/components/score/MobileScore';
import { DesktopScore } from '@/components/score/DesktopScore';
import { ResultScore } from '@/components/score/ResultScore';
import { useTranslations } from 'use-intl';
import { useScore } from '@/hooks/useScore';

export default function ScorePage() {
  const tScore = useTranslations('ScorePage');
  const isMobile = useIsMobile();
  const ready = useDelayLoad(350);
  const params = useParams();
  const scoreId = params.scoreId as string;
  const score = SCORES_LIST[scoreId] as ScoreConfig | undefined;

  const { selectedValues, handleSelect, totalScore, getScaleResult } =
    useScore(score);

  const result = getScaleResult(totalScore);

  if (!ready) {
    return (
      <SkeletonCalc numInputs={score?.criteria.length ?? 4} variant="table" />
    );
  }

  if (!score) {
    return (
      <div className="p-4 text-center text-destructive w-full">
        <p>{tScore('not_found')}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col"
    >
      {isMobile ? (
        <MobileScore
          score={score}
          t={tScore}
          selectedValues={selectedValues}
          handleSelect={handleSelect}
        />
      ) : (
        <DesktopScore
          score={score}
          t={tScore}
          selectedValues={selectedValues}
          handleSelect={handleSelect}
        />
      )}
      <Separator />
      <ResultScore
        totalScore={totalScore}
        result={result.summaryText}
        t={tScore}
        extraDescription={score?.extraDescription}
      />
    </motion.div>
  );
}
