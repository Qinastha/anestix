import { ScoreConfig } from '@/interfaces/Scores.type';

export const LEE_CONFIG: ScoreConfig = {
  id: 'lee',
  name: 'lee.name',
  description: 'lee.description',
  criteria: [
    {
      id: 'highRiskSurgery',
      label: 'lee.criteria.highRiskSurgery.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.highRiskSurgery.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.highRiskSurgery.option1',
        },
      ],
    },
    {
      id: 'historyIschemicHeartDisease',
      label: 'lee.criteria.historyIschemicHeartDisease.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.historyIschemicHeartDisease.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.historyIschemicHeartDisease.option1',
        },
      ],
    },
    {
      id: 'historyCHF',
      label: 'lee.criteria.historyCHF.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.historyCHF.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.historyCHF.option1',
        },
      ],
    },
    {
      id: 'historyCerebrovascularDisease',
      label: 'lee.criteria.historyCerebrovascularDisease.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.historyCerebrovascularDisease.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.historyCerebrovascularDisease.option1',
        },
      ],
    },
    {
      id: 'insulinTreatment',
      label: 'lee.criteria.insulinTreatment.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.insulinTreatment.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.insulinTreatment.option1',
        },
      ],
    },
    {
      id: 'creatinineOver2',
      label: 'lee.criteria.creatinineOver2.label',
      type: 'radio',
      options: [
        {
          value: 0,
          description: 'lee.criteria.creatinineOver2.option0',
        },
        {
          value: 1,
          description: 'lee.criteria.creatinineOver2.option1',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 0,
      max: 0,
      summaryText: 'lee.result.class1',
    },
    {
      min: 1,
      max: 1,
      summaryText: 'lee.result.class2',
    },
    {
      min: 2,
      max: 2,
      summaryText: 'lee.result.class3',
    },
    {
      min: 3,
      max: 6,
      summaryText: 'lee.result.class4',
    },
  ],
  extraDescription: 'lee.extraDescription',
};
