import { ScoreConfig } from '@/interfaces/Scores.type';

export const QSOFA_CONFIG: ScoreConfig = {
  id: 'qsofa',
  name: 'qsofa.name',
  description: 'qsofa.description',
  criteria: [
    {
      id: 'mental',
      label: 'qsofa.criteria.mental.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'respiratory',
      label: 'qsofa.criteria.respiratory.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'sysBp',
      label: 'qsofa.criteria.sysBp.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 1, summaryText: 'qsofa.result.notHighRisk' },
    { min: 2, max: 3, summaryText: 'qsofa.result.highRisk' },
  ],
  extraDescription: 'qsofa.extraDescription',
};
