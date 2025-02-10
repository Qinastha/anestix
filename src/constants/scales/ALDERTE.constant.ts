import { ScaleConfig } from '@/types/Scale.type';

export const ALDERTE_CONFIG: ScaleConfig = {
  id: 'alderte',
  name: 'scale.alderte.name',
  description: 'scale.alderte.description',
  options: [],
  criteria: [
    {
      id: 'activity',
      label: 'scale.alderte.criteria.activity.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.alderte.criteria.activity.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.alderte.criteria.activity.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.alderte.criteria.activity.option2',
        },
      ],
    },
    {
      id: 'breathing',
      label: 'scale.alderte.criteria.breathing.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.alderte.criteria.breathing.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.alderte.criteria.breathing.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.alderte.criteria.breathing.option2',
        },
      ],
    },
    {
      id: 'bloodPressure',
      label: 'scale.alderte.criteria.bloodPressure.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.alderte.criteria.bloodPressure.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.alderte.criteria.bloodPressure.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.alderte.criteria.bloodPressure.option2',
        },
      ],
    },
    {
      id: 'consciousness',
      label: 'scale.alderte.criteria.consciousness.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.alderte.criteria.consciousness.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.alderte.criteria.consciousness.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.alderte.criteria.consciousness.option2',
        },
      ],
    },
    {
      id: 'spo2',
      label: 'scale.alderte.criteria.spo2.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.alderte.criteria.spo2.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.alderte.criteria.spo2.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.alderte.criteria.spo2.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 9,
      max: 10,
      summaryText: 'scale.alderte.result.readyForTransfer',
    },
    {
      min: 0,
      max: 8,
      summaryText: 'scale.alderte.result.notReadyForTransfer',
    },
  ],
};
