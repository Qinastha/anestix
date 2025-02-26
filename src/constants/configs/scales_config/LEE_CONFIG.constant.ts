import { ScaleConfig } from '@/interfaces/Scale.type';

export const LEE_CONFIG: ScaleConfig = {
  id: 'lee',
  name: 'scale.lee.name',
  description: 'scale.lee.description',
  criteria: [
    {
      id: 'highRiskSurgery',
      label: 'scale.lee.criteria.highRiskSurgery.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.lee.criteria.highRiskSurgery.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.lee.criteria.highRiskSurgery.option1',
        },
      ],
    },
    {
      id: 'historyIschemicHeartDisease',
      label: 'scale.lee.criteria.historyIschemicHeartDisease.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.lee.criteria.historyIschemicHeartDisease.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.lee.criteria.historyIschemicHeartDisease.option1',
        },
      ],
    },
    {
      id: 'historyCHF',
      label: 'scale.lee.criteria.historyCHF.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.lee.criteria.historyCHF.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.lee.criteria.historyCHF.option1',
        },
      ],
    },
    {
      id: 'historyCerebrovascularDisease',
      label: 'scale.lee.criteria.historyCerebrovascularDisease.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '1',
          description:
            'scale.lee.criteria.historyCerebrovascularDisease.option0',
        },
        {
          value: 1,
          label: '1',
          description:
            'scale.lee.criteria.historyCerebrovascularDisease.option1',
        },
      ],
    },
    {
      id: 'insulinTreatment',
      label: 'scale.lee.criteria.insulinTreatment.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.lee.criteria.insulinTreatment.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.lee.criteria.insulinTreatment.option1',
        },
      ],
    },
    {
      id: 'creatinineOver2',
      label: 'scale.lee.criteria.creatinineOver2.label',
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.lee.criteria.creatinineOver2.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.lee.criteria.creatinineOver2.option1',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 0,
      max: 0,
      summaryText: 'scale.lee.result.class1',
    },
    {
      min: 1,
      max: 1,
      summaryText: 'scale.lee.result.class2',
    },
    {
      min: 2,
      max: 2,
      summaryText: 'scale.lee.result.class3',
    },
    {
      min: 3,
      max: 6,
      summaryText: 'scale.lee.result.class4',
    },
  ],
  extraDescription: 'scale.lee.extraDescription',
};
