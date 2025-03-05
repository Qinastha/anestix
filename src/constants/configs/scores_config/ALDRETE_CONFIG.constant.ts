import { ScoreConfig } from '@/interfaces/Scores.type';

export const ALDRETE_CONFIG: ScoreConfig = {
  id: 'aldrete',
  name: 'scale.aldrete.name',
  description: 'scale.aldrete.description',
  criteria: [
    {
      id: 'activity',
      label: 'scale.aldrete.criteria.activity.label',
      options: [
        {
          value: 0,
          description: 'scale.aldrete.criteria.activity.option0',
        },
        {
          value: 1,
          description: 'scale.aldrete.criteria.activity.option1',
        },
        {
          value: 2,
          description: 'scale.aldrete.criteria.activity.option2',
        },
      ],
    },
    {
      id: 'breathing',
      label: 'scale.aldrete.criteria.breathing.label',
      options: [
        {
          value: 0,
          description: 'scale.aldrete.criteria.breathing.option0',
        },
        {
          value: 1,
          description: 'scale.aldrete.criteria.breathing.option1',
        },
        {
          value: 2,
          description: 'scale.aldrete.criteria.breathing.option2',
        },
      ],
    },
    {
      id: 'bloodPressure',
      label: 'scale.aldrete.criteria.bloodPressure.label',
      options: [
        {
          value: 0,
          description: 'scale.aldrete.criteria.bloodPressure.option0',
        },
        {
          value: 1,
          description: 'scale.aldrete.criteria.bloodPressure.option1',
        },
        {
          value: 2,
          description: 'scale.aldrete.criteria.bloodPressure.option2',
        },
      ],
    },
    {
      id: 'consciousness',
      label: 'scale.aldrete.criteria.consciousness.label',
      options: [
        {
          value: 0,
          description: 'scale.aldrete.criteria.consciousness.option0',
        },
        {
          value: 1,
          description: 'scale.aldrete.criteria.consciousness.option1',
        },
        {
          value: 2,
          description: 'scale.aldrete.criteria.consciousness.option2',
        },
      ],
    },
    {
      id: 'spo2',
      label: 'scale.aldrete.criteria.spo2.label',
      options: [
        {
          value: 0,
          description: 'scale.aldrete.criteria.spo2.option0',
        },
        {
          value: 1,
          description: 'scale.aldrete.criteria.spo2.option1',
        },
        {
          value: 2,
          description: 'scale.aldrete.criteria.spo2.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 9,
      max: 10,
      summaryText: 'scale.aldrete.result.readyForTransfer',
    },
    {
      min: 0,
      max: 8,
      summaryText: 'scale.aldrete.result.notReadyForTransfer',
    },
  ],
};
