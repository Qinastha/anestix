import { ScaleConfig } from '@/types/Scale.type';

export const RASS_CONFIG: ScaleConfig = {
  id: 'rass',
  name: 'scale.rass.name',
  description: 'scale.rass.description',
  criteria: [
    {
      id: 'alertness',
      label: 'scale.rass.criteria.alertness.label',
      options: [
        {
          value: -5,
          label: '-5',
          description: 'scale.rass.criteria.alertness.negative5',
        },
        {
          value: -4,
          label: '-4',
          description: 'scale.rass.criteria.alertness.negative4',
        },
        {
          value: -3,
          label: '-3',
          description: 'scale.rass.criteria.alertness.negative3',
        },
        {
          value: -2,
          label: '-2',
          description: 'scale.rass.criteria.alertness.negative2',
        },
        {
          value: -1,
          label: '-1',
          description: 'scale.rass.criteria.alertness.negative1',
        },
        {
          value: 0,
          label: '0',
          description: 'scale.rass.criteria.alertness.zero',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.rass.criteria.alertness.positive1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.rass.criteria.alertness.positive2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.rass.criteria.alertness.positive3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.rass.criteria.alertness.positive4',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: -5, max: -5, summaryText: 'scale.rass.result.unarousable' },
    { min: -4, max: -4, summaryText: 'scale.rass.result.deepSedation' },
    { min: -3, max: -3, summaryText: 'scale.rass.result.moderateSedation' },
    { min: -2, max: -2, summaryText: 'scale.rass.result.lightSedation' },
    { min: -1, max: -1, summaryText: 'scale.rass.result.drowsy' },
    { min: 0, max: 0, summaryText: 'scale.rass.result.alertAndCalm' },
    { min: 1, max: 1, summaryText: 'scale.rass.result.restless' },
    { min: 2, max: 2, summaryText: 'scale.rass.result.agitated' },
    { min: 3, max: 3, summaryText: 'scale.rass.result.veryAgitated' },
    { min: 4, max: 4, summaryText: 'scale.rass.result.combative' },
  ],
  options: [],
};
