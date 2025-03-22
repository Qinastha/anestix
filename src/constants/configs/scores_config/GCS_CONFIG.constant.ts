import { ScoreConfig } from '@/interfaces/Scores.type';

export const GCS_CONFIG: ScoreConfig = {
  id: 'glasgow',
  name: 'glasgow.name',
  description: 'glasgow.description',
  criteria: [
    {
      id: 'eye',
      label: 'glasgow.criteria.eye.label',
      type: 'base',
      options: [
        { value: 1, description: 'glasgow.criteria.eye.option1' },
        { value: 2, description: 'glasgow.criteria.eye.option2' },
        { value: 3, description: 'glasgow.criteria.eye.option3' },
        { value: 4, description: 'glasgow.criteria.eye.option4' },
      ],
    },
    {
      id: 'verbal',
      label: 'glasgow.criteria.verbal.label',
      type: 'base',
      options: [
        { value: 1, description: 'glasgow.criteria.verbal.option1' },
        { value: 2, description: 'glasgow.criteria.verbal.option2' },
        { value: 3, description: 'glasgow.criteria.verbal.option3' },
        { value: 4, description: 'glasgow.criteria.verbal.option4' },
        { value: 5, description: 'glasgow.criteria.verbal.option5' },
      ],
    },
    {
      id: 'motor',
      label: 'glasgow.criteria.motor.label',
      type: 'base',
      options: [
        { value: 1, description: 'glasgow.criteria.motor.option1' },
        { value: 2, description: 'glasgow.criteria.motor.option2' },
        { value: 3, description: 'glasgow.criteria.motor.option3' },
        { value: 4, description: 'glasgow.criteria.motor.option4' },
        { value: 5, description: 'glasgow.criteria.motor.option5' },
        { value: 6, description: 'glasgow.criteria.motor.option6' },
      ],
    },
  ],
  resultThresholds: [
    { min: 15, max: 15, summaryText: 'glasgow.result.clear' },
    { min: 13, max: 14, summaryText: 'glasgow.result.moderateStunning' },
    { min: 10, max: 12, summaryText: 'glasgow.result.deepStunning' },
    { min: 8, max: 9, summaryText: 'glasgow.result.stupor' },
    { min: 6, max: 7, summaryText: 'glasgow.result.moderateComa' },
    { min: 4, max: 5, summaryText: 'glasgow.result.deepComa' },
    { min: 0, max: 3, summaryText: 'glasgow.result.terminalComa' },
  ],
  extraDescription: 'glasgow.extraDescription',
};
