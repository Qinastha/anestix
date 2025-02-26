import { ScaleConfig } from '@/interfaces/Scale.type';

export const APACHEII_CONFIG: ScaleConfig = {
  id: 'apacheii',
  name: 'scale.apacheii.name',
  description: 'scale.apacheii.description',
  criteria: [
    {
      id: 'age',
      label: 'scale.apacheii.criteria.age.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.age.option0',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.age.option1',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.age.option2',
        },
        {
          value: 5,
          label: '5',
          description: 'scale.apacheii.criteria.age.option3',
        },
        {
          value: 6,
          label: '6',
          description: 'scale.apacheii.criteria.age.option4',
        },
      ],
    },
    {
      id: 'chronicHealth',
      label: 'scale.apacheii.criteria.chronicHealth.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.chronicHealth.option0',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.chronicHealth.option1',
        },
        {
          value: 5,
          label: '5',
          description: 'scale.apacheii.criteria.chronicHealth.option2',
        },
      ],
    },
    {
      id: 'temperature',
      label: 'scale.apacheii.criteria.temperature.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.temperature.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.temperature.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.temperature.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.temperature.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.temperature.option4',
        },
      ],
    },
    {
      id: 'map',
      label: 'scale.apacheii.criteria.map.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.map.option0',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.map.option1',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.map.option2',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.map.option3',
        },
      ],
    },
    {
      id: 'heartRate',
      label: 'scale.apacheii.criteria.heartRate.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.heartRate.option0',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.heartRate.option1',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.heartRate.option2',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.heartRate.option3',
        },
      ],
    },
    {
      id: 'respiratoryRate',
      label: 'scale.apacheii.criteria.respiratoryRate.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.respiratoryRate.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.respiratoryRate.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.respiratoryRate.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.respiratoryRate.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.respiratoryRate.option4',
        },
      ],
    },
    {
      id: 'oxygenation',
      label: 'scale.apacheii.criteria.oxygenation.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.oxygenation.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.oxygenation.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.oxygenation.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.oxygenation.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.oxygenation.option4',
        },
      ],
    },
    {
      id: 'ph',
      label: 'scale.apacheii.criteria.ph.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.ph.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.ph.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.ph.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.ph.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.ph.option4',
        },
      ],
    },
    {
      id: 'sodium',
      label: 'scale.apacheii.criteria.sodium.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.sodium.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.sodium.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.sodium.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.sodium.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.sodium.option4',
        },
      ],
    },
    {
      id: 'potassium',
      label: 'scale.apacheii.criteria.potassium.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.potassium.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.potassium.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.potassium.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.potassium.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.potassium.option4',
        },
      ],
    },
    {
      id: 'creatinine',
      label: 'scale.apacheii.criteria.creatinine.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.creatinine.option0',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.creatinine.option1',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.creatinine.option2',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.creatinine.option3',
        },
        {
          value: 6,
          label: '6',
          description: 'scale.apacheii.criteria.creatinine.option4',
        },
        {
          value: 8,
          label: '8',
          description: 'scale.apacheii.criteria.creatinine.option5',
        },
      ],
    },
    {
      id: 'hematocrit',
      label: 'scale.apacheii.criteria.hematocrit.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.hematocrit.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.hematocrit.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.hematocrit.option2',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.hematocrit.option3',
        },
      ],
    },
    {
      id: 'wbc',
      label: 'scale.apacheii.criteria.wbc.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.wbc.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.wbc.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.wbc.option2',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.wbc.option3',
        },
      ],
    },
    {
      id: 'gcs',
      label: 'scale.apacheii.criteria.gcs.label',
      options: [
        {
          value: 0,
          label: '0',
          description: 'scale.apacheii.criteria.gcs.option0',
        },
        {
          value: 1,
          label: '1',
          description: 'scale.apacheii.criteria.gcs.option1',
        },
        {
          value: 2,
          label: '2',
          description: 'scale.apacheii.criteria.gcs.option2',
        },
        {
          value: 3,
          label: '3',
          description: 'scale.apacheii.criteria.gcs.option3',
        },
        {
          value: 4,
          label: '4',
          description: 'scale.apacheii.criteria.gcs.option4',
        },
        {
          value: 5,
          label: '5',
          description: 'scale.apacheii.criteria.gcs.option5',
        },
        {
          value: 6,
          label: '6',
          description: 'scale.apacheii.criteria.gcs.option6',
        },
        {
          value: 7,
          label: '7',
          description: 'scale.apacheii.criteria.gcs.option7',
        },
        {
          value: 8,
          label: '8',
          description: 'scale.apacheii.criteria.gcs.option8',
        },
        {
          value: 9,
          label: '9',
          description: 'scale.apacheii.criteria.gcs.option9',
        },
        {
          value: 10,
          label: '10',
          description: 'scale.apacheii.criteria.gcs.option10',
        },
        {
          value: 11,
          label: '11',
          description: 'scale.apacheii.criteria.gcs.option11',
        },
        {
          value: 12,
          label: '12',
          description: 'scale.apacheii.criteria.gcs.option12',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 4, summaryText: 'scale.apacheii.result.mortality0to4' },
    { min: 5, max: 9, summaryText: 'scale.apacheii.result.mortality5to9' },
    { min: 10, max: 14, summaryText: 'scale.apacheii.result.mortality10to14' },
    { min: 15, max: 19, summaryText: 'scale.apacheii.result.mortality15to19' },
    { min: 20, max: 24, summaryText: 'scale.apacheii.result.mortality20to24' },
    { min: 25, max: 29, summaryText: 'scale.apacheii.result.mortality25to29' },
    { min: 30, max: 34, summaryText: 'scale.apacheii.result.mortality30to34' },
    { min: 35, max: 100, summaryText: 'scale.apacheii.result.mortality35plus' },
  ],
};
