import { ScaleConfig } from '@/interfaces/Scale.type';

export const GCS_CONFIG: ScaleConfig = {
  id: 'glasgow',
  name: 'scale.glasgow.name',
  description: 'scale.glasgow.description',
  criteria: [
    {
      id: 'eye',
      label: 'scale.glasgow.criteria.eye.label',
      options: [
        {
          value: 1,
          label: '1',
          description: 'scale.glasgow.criteria.eye.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.glasgow.criteria.eye.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.glasgow.criteria.eye.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.glasgow.criteria.eye.option4',
        },
      ],
    },
    {
      id: 'verbal',
      label: 'scale.glasgow.criteria.verbal.label',
      options: [
        {
          value: 1,
          label: '1',
          description: 'scale.glasgow.criteria.verbal.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.glasgow.criteria.verbal.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.glasgow.criteria.verbal.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.glasgow.criteria.verbal.option4',
        },
        {
          value: 5,
          label: '5',
          description: 'scale.glasgow.criteria.verbal.option5',
        },
      ],
    },
    {
      id: 'motor',
      label: 'scale.glasgow.criteria.motor.label',
      options: [
        {
          value: 1,
          label: '1',
          description: 'scale.glasgow.criteria.motor.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.glasgow.criteria.motor.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.glasgow.criteria.motor.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.glasgow.criteria.motor.option4',
        },
        {
          value: 5,
          label: '5',
          description: 'scale.glasgow.criteria.motor.option5',
        },
        {
          value: 6,
          label: '6',
          description: 'scale.glasgow.criteria.motor.option6',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 15, max: 15, summaryText: 'scale.glasgow.result.clear' },
    {
      min: 13,
      max: 14,
      summaryText: 'scale.glasgow.result.moderateStunning',
    },
    { min: 10, max: 12, summaryText: 'scale.glasgow.result.deepStunning' },
    { min: 8, max: 9, summaryText: 'scale.glasgow.result.stupor' },
    { min: 6, max: 7, summaryText: 'scale.glasgow.result.moderateComa' },
    { min: 4, max: 5, summaryText: 'scale.glasgow.result.deepComa' },
    { min: 3, max: 3, summaryText: 'scale.glasgow.result.terminalComa' },
  ],
};
