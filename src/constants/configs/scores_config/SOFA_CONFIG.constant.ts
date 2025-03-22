import { ScoreConfig } from '@/interfaces/Scores.type';

export const SOFA_CONFIG: ScoreConfig = {
  id: 'sofa',
  name: 'sofa.name',
  description: 'sofa.description',
  criteria: [
    {
      id: 'respiratory',
      label: 'sofa.criteria.respiratory.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.respiratory.option0' },
        { value: 1, description: 'sofa.criteria.respiratory.option1' },
        { value: 2, description: 'sofa.criteria.respiratory.option2' },
        { value: 3, description: 'sofa.criteria.respiratory.option3' },
        { value: 4, description: 'sofa.criteria.respiratory.option4' },
      ],
    },
    {
      id: 'platelets',
      label: 'sofa.criteria.platelets.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.platelets.option0' },
        { value: 1, description: 'sofa.criteria.platelets.option1' },
        { value: 2, description: 'sofa.criteria.platelets.option2' },
        { value: 3, description: 'sofa.criteria.platelets.option3' },
        { value: 4, description: 'sofa.criteria.platelets.option4' },
      ],
    },
    {
      id: 'bilirubin',
      label: 'sofa.criteria.bilirubin.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.bilirubin.option0' },
        { value: 1, description: 'sofa.criteria.bilirubin.option1' },
        { value: 2, description: 'sofa.criteria.bilirubin.option2' },
        { value: 3, description: 'sofa.criteria.bilirubin.option3' },
        { value: 4, description: 'sofa.criteria.bilirubin.option4' },
      ],
    },
    {
      id: 'cardiovascular',
      label: 'sofa.criteria.cardiovascular.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.cardiovascular.option0' },
        { value: 1, description: 'sofa.criteria.cardiovascular.option1' },
        { value: 2, description: 'sofa.criteria.cardiovascular.option2' },
        { value: 3, description: 'sofa.criteria.cardiovascular.option3' },
        { value: 4, description: 'sofa.criteria.cardiovascular.option4' },
      ],
    },
    {
      id: 'gcs',
      label: 'sofa.criteria.gcs.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.gcs.option0' },
        { value: 1, description: 'sofa.criteria.gcs.option1' },
        { value: 2, description: 'sofa.criteria.gcs.option2' },
        { value: 3, description: 'sofa.criteria.gcs.option3' },
        { value: 4, description: 'sofa.criteria.gcs.option4' },
      ],
    },
    {
      id: 'creatinine',
      label: 'sofa.criteria.creatinine.label',
      type: 'base',
      options: [
        { value: 0, description: 'sofa.criteria.creatinine.option0' },
        { value: 1, description: 'sofa.criteria.creatinine.option1' },
        { value: 2, description: 'sofa.criteria.creatinine.option2' },
        { value: 3, description: 'sofa.criteria.creatinine.option3' },
        { value: 4, description: 'sofa.criteria.creatinine.option4' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 6, summaryText: 'sofa.result.low' },
    { min: 7, max: 9, summaryText: 'sofa.result.moderate' },
    { min: 10, max: 24, summaryText: 'sofa.result.high' },
  ],
};
