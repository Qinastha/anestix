import { ScoreConfig } from '@/interfaces/Scores.type';

export const NEWS2_CONFIG: ScoreConfig = {
  id: 'news2',
  name: 'scale.news2.name',
  description: 'scale.news2.description',
  criteria: [
    {
      id: 'respiratoryRate',
      label: 'scale.news2.criteria.respiratoryRate.label',
      options: [
        { value: 0, description: '12-20' },
        { value: 1, description: '9-11' },
        { value: 2, description: '21-24' },
        { value: 3, description: '≤8 or ≥25' },
      ],
    },
    {
      id: 'spo2',
      label: 'scale.news2.criteria.spo2.label',
      options: [
        { value: 0, description: '≥96%' },
        { value: 1, description: '94-95%' },
        { value: 2, description: '92-93%' },
        { value: 3, description: '≤91%' },
      ],
    },
    {
      id: 'oxygenSupplementation',
      label: 'scale.news2.criteria.oxygenSupplementation.label',
      options: [
        {
          value: 0,
          description: 'scale.news2.criteria.oxygenSupplementation.option1',
        },
        {
          value: 2,
          description: 'scale.news2.criteria.oxygenSupplementation.option2',
        },
      ],
    },
    {
      id: 'temperature',
      label: 'scale.news2.criteria.temperature.label',
      options: [
        { value: 0, description: '36.1-38.0°C' },
        { value: 1, description: '35.1-36.0°C || 38.1-39.0°C' },
        { value: 2, description: '≥39.1°C' },
        { value: 3, description: '≤35.0°C' },
      ],
    },
    {
      id: 'systolicBP',
      label: 'scale.news2.criteria.systolicBP.label',
      options: [
        { value: 0, description: '111-219' },
        { value: 1, description: '101-110' },
        { value: 2, description: '91-100' },
        { value: 3, description: '≤90 or ≥220' },
      ],
    },
    {
      id: 'pulse',
      label: 'scale.news2.criteria.pulse.label',
      options: [
        { value: 0, description: '51-90' },
        { value: 1, description: '41-50 or 91-110' },
        { value: 2, description: '111-130' },
        { value: 3, description: '≤40 or ≥131' },
      ],
    },
    {
      id: 'consciousness',
      label: 'scale.news2.criteria.consciousness.label',
      options: [
        { value: 0, description: 'scale.news2.criteria.consciousness.option1' },
        { value: 3, description: 'scale.news2.criteria.consciousness.option2' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'scale.news2.result.lowest' },
    { min: 1, max: 4, summaryText: 'scale.news2.result.low' },
    { min: 5, max: 6, summaryText: 'scale.news2.result.medium' },
    { min: 7, max: 100, summaryText: 'scale.news2.result.high' },
  ],
  extraDescription: 'scale.news2.extraDescription',
};
