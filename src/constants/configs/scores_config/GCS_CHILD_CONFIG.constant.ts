import { ScoreConfig } from '@/interfaces/Scores.type';

export const GCS_CHILD_CONFIG: ScoreConfig = {
  id: 'pgcs',
  name: 'scale.pgcs.name',
  description: 'scale.pgcs.description',
  criteria: [
    {
      id: 'eye',
      label: 'scale.pgcs.criteria.eye.label',
      options: [
        { value: 1, description: 'scale.pgcs.criteria.eye.option1' },
        { value: 2, description: 'scale.pgcs.criteria.eye.option2' },
        { value: 3, description: 'scale.pgcs.criteria.eye.option3' },
        { value: 4, description: 'scale.pgcs.criteria.eye.option4' },
      ],
    },
    {
      id: 'verbal',
      label: 'scale.pgcs.criteria.verbal.label',
      options: [
        { value: 1, description: 'scale.pgcs.criteria.verbal.option1' },
        { value: 2, description: 'scale.pgcs.criteria.verbal.option2' },
        { value: 3, description: 'scale.pgcs.criteria.verbal.option3' },
        { value: 4, description: 'scale.pgcs.criteria.verbal.option4' },
        { value: 5, description: 'scale.pgcs.criteria.verbal.option5' },
      ],
    },
    {
      id: 'motor',
      label: 'scale.pgcs.criteria.motor.label',
      options: [
        { value: 1, description: 'scale.pgcs.criteria.motor.option1' },
        { value: 2, description: 'scale.pgcs.criteria.motor.option2' },
        { value: 3, description: 'scale.pgcs.criteria.motor.option3' },
        { value: 4, description: 'scale.pgcs.criteria.motor.option4' },
        { value: 5, description: 'scale.pgcs.criteria.motor.option5' },
        { value: 6, description: 'scale.pgcs.criteria.motor.option6' },
      ],
    },
  ],
  resultThresholds: [
    { min: 13, max: 15, summaryText: 'scale.pgcs.result.mild' },
    { min: 9, max: 12, summaryText: 'scale.pgcs.result.moderate' },
    { min: 0, max: 8, summaryText: 'scale.pgcs.result.severe' },
  ],
  extraDescription: 'scale.pgcs.extraDescription',
};
