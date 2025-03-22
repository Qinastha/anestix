import { useState, useMemo, useCallback } from 'react';
import {
  ScoreConfig,
  ScoreCriteria,
  ScoreCriteriaInput,
  ScoreResult,
} from '@/interfaces/Scores.type';

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

  const valueInterpret = (
    criteria: ScoreCriteriaInput,
    val: number
  ): number => {
    let interpretedValue: number;
    switch (criteria.factorType) {
      case 'multiply': {
        interpretedValue = val * criteria.factor;
        break;
      }
      case 'subtract': {
        interpretedValue = criteria.factor - val;
        break;
      }
      default:
        interpretedValue = val;
        break;
    }
    return Math.max(0, interpretedValue);
  };

  const handleSelect = useCallback((criteria: ScoreCriteria, value: number) => {
    let updatedValue: number;
    if (criteria.type === 'input' && value !== 0) {
      updatedValue = valueInterpret(criteria, value);
    } else {
      updatedValue = value;
    }
    setSelectedValues((prev) => ({
      ...prev,
      [criteria.id]: updatedValue,
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
