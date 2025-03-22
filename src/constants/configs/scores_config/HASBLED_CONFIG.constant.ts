import { ScoreConfig } from '@/interfaces/Scores.type';

export const HASBLED_CONFIG: ScoreConfig = {
  id: 'has-bled',
  name: 'hasbled.name',
  description: 'hasbled.description',
  criteria: [
    {
      id: 'hypertension',
      label: 'hasbled.criteria.hypertension.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'renal',
      label: 'hasbled.criteria.renal.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'liver',
      label: 'hasbled.criteria.liver.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'stroke',
      label: 'hasbled.criteria.stroke.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'bleeding',
      label: 'hasbled.criteria.bleeding.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'labileINR',
      label: 'hasbled.criteria.labileINR.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'age',
      label: 'hasbled.criteria.age.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'medication',
      label: 'hasbled.criteria.medication.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
    {
      id: 'alcohol',
      label: 'hasbled.criteria.alcohol.label',
      type: 'radio',
      options: [
        { value: 0, description: 'no' },
        { value: 1, description: 'yes' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'hasbled.result.lowest' },
    { min: 1, max: 1, summaryText: 'hasbled.result.low' },
    { min: 2, max: 2, summaryText: 'hasbled.result.moderate' },
    { min: 3, max: 3, summaryText: 'hasbled.result.high1' },
    { min: 4, max: 4, summaryText: 'hasbled.result.high2' },
    { min: 5, max: 5, summaryText: 'hasbled.result.high3' },
    { min: 6, max: 9, summaryText: 'hasbled.result.veryHigh' },
  ],
  extraDescription: 'hasbled.extraDescription',
};
