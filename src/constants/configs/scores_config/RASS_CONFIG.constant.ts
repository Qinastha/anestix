import { ScoreConfig } from '@/interfaces/Scores.type';

export const RASS_CONFIG: ScoreConfig = {
  id: 'rass',
  name: 'rass.name',
  description: 'rass.description',
  criteria: [
    {
      id: 'alertness',
      label: 'rass.criteria.alertness.label',
      type: 'radio',
      options: [
        { value: -5, description: 'rass.criteria.alertness.negative5' },
        { value: -4, description: 'rass.criteria.alertness.negative4' },
        { value: -3, description: 'rass.criteria.alertness.negative3' },
        { value: -2, description: 'rass.criteria.alertness.negative2' },
        { value: -1, description: 'rass.criteria.alertness.negative1' },
        { value: 0, description: 'rass.criteria.alertness.zero' },
        { value: 1, description: 'rass.criteria.alertness.positive1' },
        { value: 2, description: 'rass.criteria.alertness.positive2' },
        { value: 3, description: 'rass.criteria.alertness.positive3' },
        { value: 4, description: 'rass.criteria.alertness.positive4' },
      ],
    },
  ],
  resultThresholds: [
    { min: -5, max: -5, summaryText: 'rass.result.unarousable' },
    { min: -4, max: -4, summaryText: 'rass.result.deepSedation' },
    { min: -3, max: -3, summaryText: 'rass.result.moderateSedation' },
    { min: -2, max: -2, summaryText: 'rass.result.lightSedation' },
    { min: -1, max: -1, summaryText: 'rass.result.drowsy' },
    { min: 0, max: 0, summaryText: 'rass.result.alertAndCalm' },
    { min: 1, max: 1, summaryText: 'rass.result.restless' },
    { min: 2, max: 2, summaryText: 'rass.result.agitated' },
    { min: 3, max: 3, summaryText: 'rass.result.veryAgitated' },
    { min: 4, max: 4, summaryText: 'rass.result.combative' },
  ],
  extraDescription: 'rass.extraDescription',
};
