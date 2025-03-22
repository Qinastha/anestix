import { ScoreConfig } from '@/interfaces/Scores.type';

export const NEWS2_CONFIG: ScoreConfig = {
  id: 'news2',
  name: 'news2.name',
  description: 'news2.description',
  criteria: [
    {
      id: 'respiratoryRate',
      label: 'news2.criteria.respiratoryRate.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.respiratoryRate.option0' },
        { value: 1, description: 'news2.criteria.respiratoryRate.option1' },
        { value: 2, description: 'news2.criteria.respiratoryRate.option2' },
        { value: 3, description: 'news2.criteria.respiratoryRate.option3' },
      ],
    },
    {
      id: 'spo2',
      label: 'news2.criteria.spo2.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.spo2.option0' },
        { value: 1, description: 'news2.criteria.spo2.option1' },
        { value: 2, description: 'news2.criteria.spo2.option2' },
        { value: 3, description: 'news2.criteria.spo2.option3' },
      ],
    },
    {
      id: 'oxygenSupplementation',
      label: 'news2.criteria.oxygenSupplementation.label',
      type: 'base',
      options: [
        {
          value: 0,
          description: 'news2.criteria.oxygenSupplementation.option1',
        },
        {
          value: 2,
          description: 'news2.criteria.oxygenSupplementation.option2',
        },
      ],
    },
    {
      id: 'temperature',
      label: 'news2.criteria.temperature.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.temperature.option0' },
        { value: 1, description: 'news2.criteria.temperature.option1' },
        { value: 2, description: 'news2.criteria.temperature.option2' },
        { value: 3, description: 'news2.criteria.temperature.option3' },
      ],
    },
    {
      id: 'systolicBP',
      label: 'news2.criteria.systolicBP.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.systolicBP.option0' },
        { value: 1, description: 'news2.criteria.systolicBP.option1' },
        { value: 2, description: 'news2.criteria.systolicBP.option2' },
        { value: 3, description: 'news2.criteria.systolicBP.option3' },
      ],
    },
    {
      id: 'pulse',
      label: 'news2.criteria.pulse.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.pulse.option0' },
        { value: 1, description: 'news2.criteria.pulse.option1' },
        { value: 2, description: 'news2.criteria.pulse.option2' },
        { value: 3, description: 'news2.criteria.pulse.option3' },
      ],
    },
    {
      id: 'consciousness',
      label: 'news2.criteria.consciousness.label',
      type: 'base',
      options: [
        { value: 0, description: 'news2.criteria.consciousness.option1' },
        { value: 3, description: 'news2.criteria.consciousness.option2' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'news2.result.lowest' },
    { min: 1, max: 4, summaryText: 'news2.result.low' },
    { min: 5, max: 6, summaryText: 'news2.result.medium' },
    { min: 7, max: 100, summaryText: 'news2.result.high' },
  ],
  extraDescription: 'news2.extraDescription',
};
