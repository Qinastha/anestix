import { ScaleConfig } from '@/types/Scale.type';

export const SCALE_CONFIG: Record<string, ScaleConfig> = {
  glasgow: {
    id: 'glasgow',
    name: 'scale.glasgow.name',
    description: 'scale.glasgow.description',
    options: [],
    criteria: [
      {
        id: 'eye',
        label: 'scale.glasgow.criteria.eye.label',
        options: [
          {
            value: 1,
            label: '1',
            description: 'scale.glasgow.criteria.eye.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.glasgow.criteria.eye.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.glasgow.criteria.eye.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.glasgow.criteria.eye.option4',
          },
        ],
      },
      {
        id: 'verbal',
        label: 'scale.glasgow.criteria.verbal.label',
        options: [
          {
            value: 1,
            label: '1',
            description: 'scale.glasgow.criteria.verbal.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.glasgow.criteria.verbal.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.glasgow.criteria.verbal.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.glasgow.criteria.verbal.option4',
          },
          {
            value: 5,
            label: '5',
            description: 'scale.glasgow.criteria.verbal.option5',
          },
        ],
      },
      {
        id: 'motor',
        label: 'scale.glasgow.criteria.motor.label',
        options: [
          {
            value: 1,
            label: '1',
            description: 'scale.glasgow.criteria.motor.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.glasgow.criteria.motor.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.glasgow.criteria.motor.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.glasgow.criteria.motor.option4',
          },
          {
            value: 5,
            label: '5',
            description: 'scale.glasgow.criteria.motor.option5',
          },
          {
            value: 6,
            label: '6',
            description: 'scale.glasgow.criteria.motor.option6',
          },
        ],
      },
    ],
    resultThresholds: [
      { min: 15, max: 15, summaryText: 'scale.glasgow.result.clear' },
      {
        min: 13,
        max: 14,
        summaryText: 'scale.glasgow.result.moderateStunning',
      },
      { min: 10, max: 12, summaryText: 'scale.glasgow.result.deepStunning' },
      { min: 8, max: 9, summaryText: 'scale.glasgow.result.stupor' },
      { min: 6, max: 7, summaryText: 'scale.glasgow.result.moderateComa' },
      { min: 4, max: 5, summaryText: 'scale.glasgow.result.deepComa' },
      { min: 3, max: 3, summaryText: 'scale.glasgow.result.terminalComa' },
    ],
  },
  four: {
    id: 'four',
    name: 'scale.four.name',
    description: 'scale.four.description',
    options: [],
    criteria: [
      {
        id: 'eye',
        label: 'scale.four.criteria.eye.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.four.criteria.eye.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.four.criteria.eye.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.four.criteria.eye.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.four.criteria.eye.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.four.criteria.eye.option4',
          },
        ],
      },
      {
        id: 'motor',
        label: 'scale.four.criteria.motor.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.four.criteria.motor.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.four.criteria.motor.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.four.criteria.motor.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.four.criteria.motor.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.four.criteria.motor.option4',
          },
        ],
      },
      {
        id: 'brainstem',
        label: 'scale.four.criteria.brainstem.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.four.criteria.brainstem.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.four.criteria.brainstem.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.four.criteria.brainstem.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.four.criteria.brainstem.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.four.criteria.brainstem.option4',
          },
        ],
      },
      {
        id: 'respiration',
        label: 'scale.four.criteria.respiration.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.four.criteria.respiration.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.four.criteria.respiration.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.four.criteria.respiration.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.four.criteria.respiration.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.four.criteria.respiration.option4',
          },
        ],
      },
    ],
    resultThresholds: [
      { min: 16, max: 16, summaryText: 'scale.four.result.clear' },
      { min: 15, max: 15, summaryText: 'scale.four.result.moderateStupor' },
      { min: 13, max: 14, summaryText: 'scale.four.result.deepStupor' },
      { min: 9, max: 12, summaryText: 'scale.four.result.stupor' },
      { min: 7, max: 8, summaryText: 'scale.four.result.comaI' },
      { min: 1, max: 6, summaryText: 'scale.four.result.comaII' },
      { min: 0, max: 0, summaryText: 'scale.four.result.comaIII' },
    ],
  },
  rass: {
    id: 'rass',
    name: 'scale.rass.name',
    description: 'scale.rass.description',
    criteria: [
      {
        id: 'alertness',
        label: 'scale.rass.criteria.alertness.label',
        options: [
          {
            value: -5,
            label: '-5',
            description: 'scale.rass.criteria.alertness.negative5',
          },
          {
            value: -4,
            label: '-4',
            description: 'scale.rass.criteria.alertness.negative4',
          },
          {
            value: -3,
            label: '-3',
            description: 'scale.rass.criteria.alertness.negative3',
          },
          {
            value: -2,
            label: '-2',
            description: 'scale.rass.criteria.alertness.negative2',
          },
          {
            value: -1,
            label: '-1',
            description: 'scale.rass.criteria.alertness.negative1',
          },
          {
            value: 0,
            label: '0',
            description: 'scale.rass.criteria.alertness.zero',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.rass.criteria.alertness.positive1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.rass.criteria.alertness.positive2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.rass.criteria.alertness.positive3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.rass.criteria.alertness.positive4',
          },
        ],
      },
    ],
    resultThresholds: [
      { min: -5, max: -5, summaryText: 'scale.rass.result.unarousable' },
      { min: -4, max: -4, summaryText: 'scale.rass.result.deepSedation' },
      { min: -3, max: -3, summaryText: 'scale.rass.result.moderateSedation' },
      { min: -2, max: -2, summaryText: 'scale.rass.result.lightSedation' },
      { min: -1, max: -1, summaryText: 'scale.rass.result.drowsy' },
      { min: 0, max: 0, summaryText: 'scale.rass.result.alertAndCalm' },
      { min: 1, max: 1, summaryText: 'scale.rass.result.restless' },
      { min: 2, max: 2, summaryText: 'scale.rass.result.agitated' },
      { min: 3, max: 3, summaryText: 'scale.rass.result.veryAgitated' },
      { min: 4, max: 4, summaryText: 'scale.rass.result.combative' },
    ],
    options: [],
  },
  alderte: {
    id: 'alderte',
    name: 'scale.alderte.name',
    description: 'scale.alderte.description',
    options: [],
    criteria: [
      {
        id: 'activity',
        label: 'scale.alderte.criteria.activity.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.alderte.criteria.activity.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.alderte.criteria.activity.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.alderte.criteria.activity.option2',
          },
        ],
      },
      {
        id: 'breathing',
        label: 'scale.alderte.criteria.breathing.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.alderte.criteria.breathing.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.alderte.criteria.breathing.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.alderte.criteria.breathing.option2',
          },
        ],
      },
      {
        id: 'bloodPressure',
        label: 'scale.alderte.criteria.bloodPressure.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.alderte.criteria.bloodPressure.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.alderte.criteria.bloodPressure.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.alderte.criteria.bloodPressure.option2',
          },
        ],
      },
      {
        id: 'consciousness',
        label: 'scale.alderte.criteria.consciousness.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.alderte.criteria.consciousness.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.alderte.criteria.consciousness.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.alderte.criteria.consciousness.option2',
          },
        ],
      },
      {
        id: 'spo2',
        label: 'scale.alderte.criteria.spo2.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.alderte.criteria.spo2.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.alderte.criteria.spo2.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.alderte.criteria.spo2.option2',
          },
        ],
      },
    ],
    resultThresholds: [
      {
        min: 9,
        max: 10,
        summaryText: 'scale.alderte.result.readyForTransfer',
      },
      {
        min: 0,
        max: 8,
        summaryText: 'scale.alderte.result.notReadyForTransfer',
      },
    ],
  },
  sofa: {
    id: 'sofa',
    name: 'scale.sofa.name',
    description: 'scale.sofa.description',
    options: [],
    criteria: [
      {
        id: 'respiratory',
        label: 'scale.sofa.criteria.respiratory.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.respiratory.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.respiratory.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.respiratory.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.respiratory.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.respiratory.option4',
          },
        ],
      },
      {
        id: 'platelets',
        label: 'scale.sofa.criteria.platelets.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.platelets.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.platelets.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.platelets.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.platelets.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.platelets.option4',
          },
        ],
      },
      {
        id: 'bilirubin',
        label: 'scale.sofa.criteria.bilirubin.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.bilirubin.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.bilirubin.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.bilirubin.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.bilirubin.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.bilirubin.option4',
          },
        ],
      },
      {
        id: 'cardiovascular',
        label: 'scale.sofa.criteria.cardiovascular.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.cardiovascular.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.cardiovascular.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.cardiovascular.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.cardiovascular.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.cardiovascular.option4',
          },
        ],
      },
      {
        id: 'gcs',
        label: 'scale.sofa.criteria.gcs.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.gcs.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.gcs.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.gcs.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.gcs.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.gcs.option4',
          },
        ],
      },
      {
        id: 'creatinine',
        label: 'scale.sofa.criteria.creatinine.label',
        options: [
          {
            value: 0,
            label: '0',
            description: 'scale.sofa.criteria.creatinine.option0',
          },
          {
            value: 1,
            label: '1',
            description: 'scale.sofa.criteria.creatinine.option1',
          },
          {
            value: 2,
            label: '2',
            description: 'scale.sofa.criteria.creatinine.option2',
          },
          {
            value: 3,
            label: '3',
            description: 'scale.sofa.criteria.creatinine.option3',
          },
          {
            value: 4,
            label: '4',
            description: 'scale.sofa.criteria.creatinine.option4',
          },
        ],
      },
    ],
    resultThresholds: [
      { min: 0, max: 6, summaryText: 'scale.sofa.result.low' },
      { min: 7, max: 9, summaryText: 'scale.sofa.result.moderate' },
      { min: 10, max: 24, summaryText: 'scale.sofa.result.high' },
    ],
  },
};
