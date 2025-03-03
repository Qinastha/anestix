import { ScoreConfig } from '@/interfaces/Scores.type';

export const HASBLED_CONFIG: ScoreConfig = {
  id: 'hasbled',
  name: 'scale.hasbled.name',
  description: 'scale.hasbled.description',
  criteria: [
    {
      id: 'hypertension',
      label: 'scale.hasbled.criteria.hypertension.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'renal',
      label: 'scale.hasbled.criteria.renal.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'liver',
      label: 'scale.hasbled.criteria.liver.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'stroke',
      label: 'scale.hasbled.criteria.stroke.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'bleeding',
      label: 'scale.hasbled.criteria.bleeding.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'labileINR',
      label: 'scale.hasbled.criteria.labileINR.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'age',
      label: 'scale.hasbled.criteria.age.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'medication',
      label: 'scale.hasbled.criteria.medication.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'alcohol',
      label: 'scale.hasbled.criteria.alcohol.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'scale.hasbled.result.lowest' },
    { min: 1, max: 1, summaryText: 'scale.hasbled.result.low' },
    { min: 2, max: 2, summaryText: 'scale.hasbled.result.moderate' },
    { min: 3, max: 3, summaryText: 'scale.hasbled.result.high1' },
    { min: 4, max: 4, summaryText: 'scale.hasbled.result.high2' },
    { min: 5, max: 5, summaryText: 'scale.hasbled.result.high3' },
    { min: 6, max: 9, summaryText: 'scale.hasbled.result.veryHigh' },
  ],
};
