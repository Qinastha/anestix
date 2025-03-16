import { ScoreConfig } from '@/interfaces/Scores.type';

export const PHOENIX_CONFIG: ScoreConfig = {
  id: 'phoenix',
  name: 'phoenix.name',
  description: 'phoenix.description',
  criteria: [
    {
      id: 'respiratory',
      label: 'phoenix.criteria.respiratory.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.respiratory.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.respiratory.option1',
        },
        {
          value: 2,
          description: 'phoenix.criteria.respiratory.option2',
        },
        {
          value: 3,
          description: 'phoenix.criteria.respiratory.option3',
        },
      ],
    },
    {
      id: 'coagulation_platelets',
      label: 'phoenix.criteria.coagulation_platelets.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.coagulation_platelets.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.coagulation_platelets.option1',
        },
      ],
    },
    {
      id: 'coagulation_inr',
      label: 'phoenix.criteria.coagulation_inr.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.coagulation_inr.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.coagulation_inr.option1',
        },
      ],
    },
    {
      id: 'coagulation_d_dimer',
      label: 'phoenix.criteria.coagulation_d_dimer.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.coagulation_d_dimer.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.coagulation_d_dimer.option1',
        },
      ],
    },
    {
      id: 'coagulation_fibrinogen',
      label: 'phoenix.criteria.coagulation_fibrinogen.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.coagulation_fibrinogen.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.coagulation_fibrinogen.option1',
        },
      ],
    },
    {
      id: 'neurological_gcs',
      label: 'phoenix.criteria.neurological_gcs.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.neurological_gcs.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.neurological_gcs.option1',
        },
        {
          value: 2,
          description: 'phoenix.criteria.neurological_gcs.option2',
        },
      ],
    },
    {
      id: 'cardiovascular_lactate',
      label: 'phoenix.criteria.cardiovascular_lactate.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.cardiovascular_lactate.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.cardiovascular_lactate.option1',
        },
        {
          value: 2,
          description: 'phoenix.criteria.cardiovascular_lactate.option2',
        },
      ],
    },
    {
      id: 'cardiovascular_med',
      label: 'phoenix.criteria.cardiovascular_med.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.cardiovascular_med.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.cardiovascular_med.option1',
        },
        {
          value: 2,
          description: 'phoenix.criteria.cardiovascular_med.option2',
        },
      ],
    },
    {
      id: 'cardiovascular_map',
      label: 'phoenix.criteria.cardiovascular_map.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'phoenix.criteria.cardiovascular_map.option0',
        },
        {
          value: 1,
          description: 'phoenix.criteria.cardiovascular_map.option1',
        },
        {
          value: 2,
          description: 'phoenix.criteria.cardiovascular_map.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 1, summaryText: 'phoenix.result.noSepsis' },
    {
      min: 2,
      max: Infinity,
      summaryText: 'phoenix.result.sepsisSuspected',
    },
  ],
  extraDescription: 'phoenix.extraDescription',
};
