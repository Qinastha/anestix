import { ScoreConfig } from '@/interfaces/Scores.type';

export const APACHEII_CONFIG: ScoreConfig = {
  id: 'apacheii',
  name: 'apacheii.name',
  description: 'apacheii.description',
  criteria: [
    {
      id: 'age',
      label: 'apacheii.criteria.age.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.age.option0' },
        { value: 2, description: 'apacheii.criteria.age.option1' },
        { value: 3, description: 'apacheii.criteria.age.option2' },
        { value: 5, description: 'apacheii.criteria.age.option3' },
        { value: 6, description: 'apacheii.criteria.age.option4' },
      ],
    },
    {
      id: 'chronicHealth',
      label: 'apacheii.criteria.chronicHealth.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.chronicHealth.option0' },
        { value: 2, description: 'apacheii.criteria.chronicHealth.option1' },
        { value: 5, description: 'apacheii.criteria.chronicHealth.option2' },
      ],
    },
    {
      id: 'temperature',
      label: 'apacheii.criteria.temperature.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.temperature.option0' },
        { value: 1, description: 'apacheii.criteria.temperature.option1' },
        { value: 2, description: 'apacheii.criteria.temperature.option2' },
        { value: 3, description: 'apacheii.criteria.temperature.option3' },
        { value: 4, description: 'apacheii.criteria.temperature.option4' },
      ],
    },
    {
      id: 'map',
      label: 'apacheii.criteria.map.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.map.option0' },
        { value: 2, description: 'apacheii.criteria.map.option1' },
        { value: 3, description: 'apacheii.criteria.map.option2' },
        { value: 4, description: 'apacheii.criteria.map.option3' },
      ],
    },
    {
      id: 'heartRate',
      label: 'apacheii.criteria.heartRate.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.heartRate.option0' },
        { value: 2, description: 'apacheii.criteria.heartRate.option1' },
        { value: 3, description: 'apacheii.criteria.heartRate.option2' },
        { value: 4, description: 'apacheii.criteria.heartRate.option3' },
      ],
    },
    {
      id: 'respiratoryRate',
      label: 'apacheii.criteria.respiratoryRate.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.respiratoryRate.option0' },
        { value: 1, description: 'apacheii.criteria.respiratoryRate.option1' },
        { value: 2, description: 'apacheii.criteria.respiratoryRate.option2' },
        { value: 3, description: 'apacheii.criteria.respiratoryRate.option3' },
        { value: 4, description: 'apacheii.criteria.respiratoryRate.option4' },
      ],
    },
    {
      id: 'oxygenation',
      label: 'apacheii.criteria.oxygenation.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.oxygenation.option0' },
        { value: 1, description: 'apacheii.criteria.oxygenation.option1' },
        { value: 2, description: 'apacheii.criteria.oxygenation.option2' },
        { value: 3, description: 'apacheii.criteria.oxygenation.option3' },
        { value: 4, description: 'apacheii.criteria.oxygenation.option4' },
      ],
    },
    {
      id: 'ph',
      label: 'apacheii.criteria.ph.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.ph.option0' },
        { value: 1, description: 'apacheii.criteria.ph.option1' },
        { value: 2, description: 'apacheii.criteria.ph.option2' },
        { value: 3, description: 'apacheii.criteria.ph.option3' },
        { value: 4, description: 'apacheii.criteria.ph.option4' },
      ],
    },
    {
      id: 'sodium',
      label: 'apacheii.criteria.sodium.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.sodium.option0' },
        { value: 1, description: 'apacheii.criteria.sodium.option1' },
        { value: 2, description: 'apacheii.criteria.sodium.option2' },
        { value: 3, description: 'apacheii.criteria.sodium.option3' },
        { value: 4, description: 'apacheii.criteria.sodium.option4' },
      ],
    },
    {
      id: 'potassium',
      label: 'apacheii.criteria.potassium.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.potassium.option0' },
        { value: 1, description: 'apacheii.criteria.potassium.option1' },
        { value: 2, description: 'apacheii.criteria.potassium.option2' },
        { value: 3, description: 'apacheii.criteria.potassium.option3' },
        { value: 4, description: 'apacheii.criteria.potassium.option4' },
      ],
    },
    {
      id: 'creatinine',
      label: 'apacheii.criteria.creatinine.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.creatinine.option0' },
        { value: 2, description: 'apacheii.criteria.creatinine.option1' },
        { value: 3, description: 'apacheii.criteria.creatinine.option2' },
        { value: 4, description: 'apacheii.criteria.creatinine.option3' },
        { value: 6, description: 'apacheii.criteria.creatinine.option4' },
        { value: 8, description: 'apacheii.criteria.creatinine.option5' },
      ],
    },
    {
      id: 'hematocrit',
      label: 'apacheii.criteria.hematocrit.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.hematocrit.option0' },
        { value: 1, description: 'apacheii.criteria.hematocrit.option1' },
        { value: 2, description: 'apacheii.criteria.hematocrit.option2' },
        { value: 4, description: 'apacheii.criteria.hematocrit.option3' },
      ],
    },
    {
      id: 'wbc',
      label: 'apacheii.criteria.wbc.label',
      type: 'base',
      options: [
        { value: 0, description: 'apacheii.criteria.wbc.option0' },
        { value: 1, description: 'apacheii.criteria.wbc.option1' },
        { value: 2, description: 'apacheii.criteria.wbc.option2' },
        { value: 4, description: 'apacheii.criteria.wbc.option3' },
      ],
    },
    {
      id: 'gcs',
      label: 'apacheii.criteria.gcs.label',
      type: 'input',
      factor: 15,
      factorType: 'subtract',
      maxValue: 15,
      minValue: 3,
    },
  ],
  resultThresholds: [
    { min: 0, max: 4, summaryText: 'apacheii.result.mortality0to4' },
    { min: 5, max: 9, summaryText: 'apacheii.result.mortality5to9' },
    { min: 10, max: 14, summaryText: 'apacheii.result.mortality10to14' },
    { min: 15, max: 19, summaryText: 'apacheii.result.mortality15to19' },
    { min: 20, max: 24, summaryText: 'apacheii.result.mortality20to24' },
    { min: 25, max: 29, summaryText: 'apacheii.result.mortality25to29' },
    { min: 30, max: 34, summaryText: 'apacheii.result.mortality30to34' },
    { min: 35, max: 100, summaryText: 'apacheii.result.mortality35plus' },
  ],
  extraDescription: 'apacheii.extraDescription',
};
