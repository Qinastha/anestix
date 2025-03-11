import { ScoreConfig } from '@/interfaces/Scores.type';

export const WELLS_CONFIG: ScoreConfig = {
  id: 'wells',
  name: 'wells.name',
  description: 'wells.description',
  criteria: [
    {
      id: 'dvtSigns',
      label: 'wells.criteria.dvtSigns.label',
      type: 'radio',
      options: [
        { value: 0, description: 'wells.criteria.dvtSigns.option0' },
        { value: 3, description: 'wells.criteria.dvtSigns.option1' },
      ],
    },
    {
      id: 'alternativeDiagnosis',
      label: 'wells.criteria.alternativeDiagnosis.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'wells.criteria.alternativeDiagnosis.option0',
        },
        {
          value: 3,
          description: 'wells.criteria.alternativeDiagnosis.option1',
        },
      ],
    },
    {
      id: 'heartRate',
      label: 'wells.criteria.heartRate.label',
      type: 'radio',
      options: [
        { value: 0, description: 'wells.criteria.heartRate.option0' },
        { value: 1.5, description: 'wells.criteria.heartRate.option1' },
      ],
    },
    {
      id: 'recentSurgeryImmobilization',
      label: 'wells.criteria.recentSurgeryImmobilization.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'wells.criteria.recentSurgeryImmobilization.option0',
        },
        {
          value: 1.5,
          description: 'wells.criteria.recentSurgeryImmobilization.option1',
        },
      ],
    },
    {
      id: 'previousVTE',
      label: 'wells.criteria.previousVTE.label',
      type: 'radio',
      options: [
        { value: 0, description: 'wells.criteria.previousVTE.option0' },
        { value: 1.5, description: 'wells.criteria.previousVTE.option1' },
      ],
    },
    {
      id: 'hemoptysis',
      label: 'wells.criteria.hemoptysis.label',
      type: 'radio',
      options: [
        { value: 0, description: 'wells.criteria.hemoptysis.option0' },
        { value: 1, description: 'wells.criteria.hemoptysis.option1' },
      ],
    },
    {
      id: 'malignancy',
      label: 'wells.criteria.malignancy.label',
      type: 'radio',
      options: [
        { value: 0, description: 'wells.criteria.malignancy.option0' },
        { value: 1, description: 'wells.criteria.malignancy.option1' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 1.5, summaryText: 'wells.result.lowProbability' },
    {
      min: 2,
      max: 6.5,
      summaryText: 'wells.result.intermediateProbability',
    },
    { min: 7, max: 100, summaryText: 'wells.result.highProbability' },
  ],
  extraDescription: 'wells.extraDescription',
};
