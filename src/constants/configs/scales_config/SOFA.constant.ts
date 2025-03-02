import { ScaleConfig } from '@/interfaces/Scale.type';

export const SOFA_CONFIG: ScaleConfig = {
  id: 'sofa',
  name: 'scale.sofa.name',
  description: 'scale.sofa.description',
  criteria: [
    {
      id: 'respiratory',
      label: 'scale.sofa.criteria.respiratory.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.respiratory.option0' },
        { value: 1, description: 'scale.sofa.criteria.respiratory.option1' },
        { value: 2, description: 'scale.sofa.criteria.respiratory.option2' },
        { value: 3, description: 'scale.sofa.criteria.respiratory.option3' },
        { value: 4, description: 'scale.sofa.criteria.respiratory.option4' },
      ],
    },
    {
      id: 'platelets',
      label: 'scale.sofa.criteria.platelets.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.platelets.option0' },
        { value: 1, description: 'scale.sofa.criteria.platelets.option1' },
        { value: 2, description: 'scale.sofa.criteria.platelets.option2' },
        { value: 3, description: 'scale.sofa.criteria.platelets.option3' },
        { value: 4, description: 'scale.sofa.criteria.platelets.option4' },
      ],
    },
    {
      id: 'bilirubin',
      label: 'scale.sofa.criteria.bilirubin.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.bilirubin.option0' },
        { value: 1, description: 'scale.sofa.criteria.bilirubin.option1' },
        { value: 2, description: 'scale.sofa.criteria.bilirubin.option2' },
        { value: 3, description: 'scale.sofa.criteria.bilirubin.option3' },
        { value: 4, description: 'scale.sofa.criteria.bilirubin.option4' },
      ],
    },
    {
      id: 'cardiovascular',
      label: 'scale.sofa.criteria.cardiovascular.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.cardiovascular.option0' },
        { value: 1, description: 'scale.sofa.criteria.cardiovascular.option1' },
        { value: 2, description: 'scale.sofa.criteria.cardiovascular.option2' },
        { value: 3, description: 'scale.sofa.criteria.cardiovascular.option3' },
        { value: 4, description: 'scale.sofa.criteria.cardiovascular.option4' },
      ],
    },
    {
      id: 'gcs',
      label: 'scale.sofa.criteria.gcs.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.gcs.option0' },
        { value: 1, description: 'scale.sofa.criteria.gcs.option1' },
        { value: 2, description: 'scale.sofa.criteria.gcs.option2' },
        { value: 3, description: 'scale.sofa.criteria.gcs.option3' },
        { value: 4, description: 'scale.sofa.criteria.gcs.option4' },
      ],
    },
    {
      id: 'creatinine',
      label: 'scale.sofa.criteria.creatinine.label',
      options: [
        { value: 0, description: 'scale.sofa.criteria.creatinine.option0' },
        { value: 1, description: 'scale.sofa.criteria.creatinine.option1' },
        { value: 2, description: 'scale.sofa.criteria.creatinine.option2' },
        { value: 3, description: 'scale.sofa.criteria.creatinine.option3' },
        { value: 4, description: 'scale.sofa.criteria.creatinine.option4' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 6, summaryText: 'scale.sofa.result.low' },
    { min: 7, max: 9, summaryText: 'scale.sofa.result.moderate' },
    { min: 10, max: 24, summaryText: 'scale.sofa.result.high' },
  ],
};
