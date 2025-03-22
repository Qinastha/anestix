import { ScoreConfig } from '@/interfaces/Scores.type';

export const ALDRETE_CONFIG: ScoreConfig = {
  id: 'aldrete',
  name: 'aldrete.name',
  description: 'aldrete.description',
  criteria: [
    {
      id: 'activity',
      label: 'aldrete.criteria.activity.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'aldrete.criteria.activity.option0',
        },
        {
          value: 1,
          description: 'aldrete.criteria.activity.option1',
        },
        {
          value: 2,
          description: 'aldrete.criteria.activity.option2',
        },
      ],
    },
    {
      id: 'breathing',
      label: 'aldrete.criteria.breathing.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'aldrete.criteria.breathing.option0',
        },
        {
          value: 1,
          description: 'aldrete.criteria.breathing.option1',
        },
        {
          value: 2,
          description: 'aldrete.criteria.breathing.option2',
        },
      ],
    },
    {
      id: 'bloodPressure',
      label: 'aldrete.criteria.bloodPressure.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'aldrete.criteria.bloodPressure.option0',
        },
        {
          value: 1,
          description: 'aldrete.criteria.bloodPressure.option1',
        },
        {
          value: 2,
          description: 'aldrete.criteria.bloodPressure.option2',
        },
      ],
    },
    {
      id: 'consciousness',
      label: 'aldrete.criteria.consciousness.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'aldrete.criteria.consciousness.option0',
        },
        {
          value: 1,
          description: 'aldrete.criteria.consciousness.option1',
        },
        {
          value: 2,
          description: 'aldrete.criteria.consciousness.option2',
        },
      ],
    },
    {
      id: 'spo2',
      label: 'aldrete.criteria.spo2.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'aldrete.criteria.spo2.option0',
        },
        {
          value: 1,
          description: 'aldrete.criteria.spo2.option1',
        },
        {
          value: 2,
          description: 'aldrete.criteria.spo2.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 9,
      max: 10,
      summaryText: 'aldrete.result.readyForTransfer',
    },
    {
      min: 0,
      max: 8,
      summaryText: 'aldrete.result.notReadyForTransfer',
    },
  ],
};
