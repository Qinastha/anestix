import { useState, useMemo, useCallback } from 'react';
import { ScoreConfig, ScoreResult } from '@/interfaces/Scores.type';

export function useScore(score?: ScoreConfig) {
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
      if (!score?.resultThresholds) return { total, summaryText: '' };
      const threshold = score.resultThresholds.find(
        (th) => total >= th.min && total <= th.max
      );
      return threshold
        ? { total, summaryText: threshold.summaryText }
        : { total, summaryText: '' };
    },
    [score]
  );

  return { selectedValues, handleSelect, totalScore, getScaleResult };
}
