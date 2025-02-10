import { ScaleConfig } from '@/types/Scale.type';

export const FOUR_CONFIG: ScaleConfig = {
  id: 'four',
  name: 'scale.four.name',
  description: 'scale.four.description',
  options: [],
  criteria: [
    {
      id: 'eye',
      label: 'scale.four.criteria.eye.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.four.criteria.eye.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.four.criteria.eye.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.four.criteria.eye.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.four.criteria.eye.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.four.criteria.eye.option4',
        },
      ],
    },
    {
      id: 'motor',
      label: 'scale.four.criteria.motor.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.four.criteria.motor.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.four.criteria.motor.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.four.criteria.motor.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.four.criteria.motor.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.four.criteria.motor.option4',
        },
      ],
    },
    {
      id: 'brainstem',
      label: 'scale.four.criteria.brainstem.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.four.criteria.brainstem.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.four.criteria.brainstem.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.four.criteria.brainstem.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.four.criteria.brainstem.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.four.criteria.brainstem.option4',
        },
      ],
    },
    {
      id: 'respiration',
      label: 'scale.four.criteria.respiration.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.four.criteria.respiration.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.four.criteria.respiration.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.four.criteria.respiration.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.four.criteria.respiration.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.four.criteria.respiration.option4',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 16, max: 16, summaryText: 'scale.four.result.clear' },
    { min: 15, max: 15, summaryText: 'scale.four.result.moderateStupor' },
    { min: 13, max: 14, summaryText: 'scale.four.result.deepStupor' },
    { min: 9, max: 12, summaryText: 'scale.four.result.stupor' },
    { min: 7, max: 8, summaryText: 'scale.four.result.comaI' },
    { min: 1, max: 6, summaryText: 'scale.four.result.comaII' },
    { min: 0, max: 0, summaryText: 'scale.four.result.comaIII' },
  ],
};
