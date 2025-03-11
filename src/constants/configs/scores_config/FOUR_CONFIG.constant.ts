import { ScoreConfig } from '@/interfaces/Scores.type';

export const FOUR_CONFIG: ScoreConfig = {
  id: 'four',
  name: 'four.name',
  description: 'four.description',
  criteria: [
    {
      id: 'eye',
      label: 'four.criteria.eye.label',
      options: [
        { value: 0, description: 'four.criteria.eye.option0' },
        { value: 1, description: 'four.criteria.eye.option1' },
        { value: 2, description: 'four.criteria.eye.option2' },
        { value: 3, description: 'four.criteria.eye.option3' },
        { value: 4, description: 'four.criteria.eye.option4' },
      ],
    },
    {
      id: 'motor',
      label: 'four.criteria.motor.label',
      options: [
        { value: 0, description: 'four.criteria.motor.option0' },
        { value: 1, description: 'four.criteria.motor.option1' },
        { value: 2, description: 'four.criteria.motor.option2' },
        { value: 3, description: 'four.criteria.motor.option3' },
        { value: 4, description: 'four.criteria.motor.option4' },
      ],
    },
    {
      id: 'brainstem',
      label: 'four.criteria.brainstem.label',
      options: [
        { value: 0, description: 'four.criteria.brainstem.option0' },
        { value: 1, description: 'four.criteria.brainstem.option1' },
        { value: 2, description: 'four.criteria.brainstem.option2' },
        { value: 3, description: 'four.criteria.brainstem.option3' },
        { value: 4, description: 'four.criteria.brainstem.option4' },
      ],
    },
    {
      id: 'respiration',
      label: 'four.criteria.respiration.label',
      options: [
        { value: 0, description: 'four.criteria.respiration.option0' },
        { value: 1, description: 'four.criteria.respiration.option1' },
        { value: 2, description: 'four.criteria.respiration.option2' },
        { value: 3, description: 'four.criteria.respiration.option3' },
        { value: 4, description: 'four.criteria.respiration.option4' },
      ],
    },
  ],
  resultThresholds: [
    { min: 16, max: 16, summaryText: 'four.result.clear' },
    { min: 15, max: 15, summaryText: 'four.result.moderateStupor' },
    { min: 13, max: 14, summaryText: 'four.result.deepStupor' },
    { min: 9, max: 12, summaryText: 'four.result.stupor' },
    { min: 7, max: 8, summaryText: 'four.result.comaI' },
    { min: 1, max: 6, summaryText: 'four.result.comaII' },
    { min: 0, max: 0, summaryText: 'four.result.comaIII' },
  ],
};
