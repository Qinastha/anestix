import { ScaleConfig } from '@/interfaces/Scale.type';

export const WELLS_CONFIG: ScaleConfig = {
  id: 'wells',
  name: 'scale.wells.name',
  description: 'scale.wells.description',
  criteria: [
    {
      id: 'dvtSigns',
      label: 'scale.wells.criteria.dvtSigns.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.dvtSigns.option0',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.wells.criteria.dvtSigns.option1',
        },
      ],
    },
    {
      id: 'alternativeDiagnosis',
      label: 'scale.wells.criteria.alternativeDiagnosis.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.alternativeDiagnosis.option0',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.wells.criteria.alternativeDiagnosis.option1',
        },
      ],
    },
    {
      id: 'heartRate',
      label: 'scale.wells.criteria.heartRate.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.heartRate.option0',
        },
        {
          value: 1.5,
          label: '1.5',
          description: 'scale.wells.criteria.heartRate.option1',
        },
      ],
    },
    {
      id: 'recentSurgeryImmobilization',
      label: 'scale.wells.criteria.recentSurgeryImmobilization.label',
      options: [
        {
          value: 0,
          label: 'No',
          description:
            'scale.wells.criteria.recentSurgeryImmobilization.option0',
        },
        {
          value: 1.5,
          label: '1.5',
          description:
            'scale.wells.criteria.recentSurgeryImmobilization.option1',
        },
      ],
    },
    {
      id: 'previousVTE',
      label: 'scale.wells.criteria.previousVTE.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.previousVTE.option0',
        },
        {
          value: 1.5,
          label: '1.5',
          description: 'scale.wells.criteria.previousVTE.option1',
        },
      ],
    },
    {
      id: 'hemoptysis',
      label: 'scale.wells.criteria.hemoptysis.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.hemoptysis.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.wells.criteria.hemoptysis.option1',
        },
      ],
    },
    {
      id: 'malignancy',
      label: 'scale.wells.criteria.malignancy.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.wells.criteria.malignancy.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.wells.criteria.malignancy.option1',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 0,
      max: 1.5,
      summaryText: 'scale.wells.result.lowProbability',
    },
    {
      min: 2,
      max: 6.5,
      summaryText: 'scale.wells.result.intermediateProbability',
    },
    {
      min: 7,
      max: 100,
      summaryText: 'scale.wells.result.highProbability',
    },
  ],
  extraDescription: 'scale.wells.extraDescription',
};
