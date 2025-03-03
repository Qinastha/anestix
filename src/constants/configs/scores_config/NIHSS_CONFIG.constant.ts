import { ScoreConfig } from '@/interfaces/Scores.type';

export const NIHSS_CONFIG: ScoreConfig = {
  id: 'nihss',
  name: 'scale.nihss.name',
  description: 'scale.nihss.description',
  criteria: [
    {
      id: 'loc',
      label: 'scale.nihss.criteria.loc.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.loc.option0' },
        { value: 1, description: 'scale.nihss.criteria.loc.option1' },
        { value: 2, description: 'scale.nihss.criteria.loc.option2' },
        { value: 3, description: 'scale.nihss.criteria.loc.option3' },
      ],
    },
    {
      id: 'locQuestions',
      label: 'scale.nihss.criteria.locQuestions.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.locQuestions.option0' },
        { value: 1, description: 'scale.nihss.criteria.locQuestions.option1' },
        { value: 2, description: 'scale.nihss.criteria.locQuestions.option2' },
      ],
    },
    {
      id: 'locCommands',
      label: 'scale.nihss.criteria.locCommands.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.locCommands.option0' },
        { value: 1, description: 'scale.nihss.criteria.locCommands.option1' },
        { value: 2, description: 'scale.nihss.criteria.locCommands.option2' },
      ],
    },
    {
      id: 'bestGaze',
      label: 'scale.nihss.criteria.bestGaze.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.bestGaze.option0' },
        { value: 1, description: 'scale.nihss.criteria.bestGaze.option1' },
        { value: 2, description: 'scale.nihss.criteria.bestGaze.option2' },
      ],
    },
    {
      id: 'visualFields',
      label: 'scale.nihss.criteria.visualFields.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.visualFields.option0' },
        { value: 1, description: 'scale.nihss.criteria.visualFields.option1' },
        { value: 2, description: 'scale.nihss.criteria.visualFields.option2' },
        { value: 3, description: 'scale.nihss.criteria.visualFields.option3' },
      ],
    },
    {
      id: 'facialPalsy',
      label: 'scale.nihss.criteria.facialPalsy.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.facialPalsy.option0' },
        { value: 1, description: 'scale.nihss.criteria.facialPalsy.option1' },
        { value: 2, description: 'scale.nihss.criteria.facialPalsy.option2' },
        { value: 3, description: 'scale.nihss.criteria.facialPalsy.option3' },
      ],
    },
    {
      id: 'motorArmLeft',
      label: 'scale.nihss.criteria.motorArmLeft.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.motorArmLeft.option0' },
        { value: 1, description: 'scale.nihss.criteria.motorArmLeft.option1' },
        { value: 2, description: 'scale.nihss.criteria.motorArmLeft.option2' },
        { value: 3, description: 'scale.nihss.criteria.motorArmLeft.option3' },
        { value: 4, description: 'scale.nihss.criteria.motorArmLeft.option4' },
      ],
    },
    {
      id: 'motorArmRight',
      label: 'scale.nihss.criteria.motorArmRight.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.motorArmRight.option0' },
        { value: 1, description: 'scale.nihss.criteria.motorArmRight.option1' },
        { value: 2, description: 'scale.nihss.criteria.motorArmRight.option2' },
        { value: 3, description: 'scale.nihss.criteria.motorArmRight.option3' },
        { value: 4, description: 'scale.nihss.criteria.motorArmRight.option4' },
      ],
    },
    {
      id: 'motorLegLeft',
      label: 'scale.nihss.criteria.motorLegLeft.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.motorLegLeft.option0' },
        { value: 1, description: 'scale.nihss.criteria.motorLegLeft.option1' },
        { value: 2, description: 'scale.nihss.criteria.motorLegLeft.option2' },
        { value: 3, description: 'scale.nihss.criteria.motorLegLeft.option3' },
        { value: 4, description: 'scale.nihss.criteria.motorLegLeft.option4' },
      ],
    },
    {
      id: 'motorLegRight',
      label: 'scale.nihss.criteria.motorLegRight.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.motorLegRight.option0' },
        { value: 1, description: 'scale.nihss.criteria.motorLegRight.option1' },
        { value: 2, description: 'scale.nihss.criteria.motorLegRight.option2' },
        { value: 3, description: 'scale.nihss.criteria.motorLegRight.option3' },
        { value: 4, description: 'scale.nihss.criteria.motorLegRight.option4' },
      ],
    },
    {
      id: 'limbAtaxia',
      label: 'scale.nihss.criteria.limbAtaxia.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.limbAtaxia.option0' },
        { value: 1, description: 'scale.nihss.criteria.limbAtaxia.option1' },
        { value: 2, description: 'scale.nihss.criteria.limbAtaxia.option2' },
      ],
    },
    {
      id: 'sensory',
      label: 'scale.nihss.criteria.sensory.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.sensory.option0' },
        { value: 1, description: 'scale.nihss.criteria.sensory.option1' },
        { value: 2, description: 'scale.nihss.criteria.sensory.option2' },
      ],
    },
    {
      id: 'bestLanguage',
      label: 'scale.nihss.criteria.bestLanguage.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.bestLanguage.option0' },
        { value: 1, description: 'scale.nihss.criteria.bestLanguage.option1' },
        { value: 2, description: 'scale.nihss.criteria.bestLanguage.option2' },
        { value: 3, description: 'scale.nihss.criteria.bestLanguage.option3' },
      ],
    },
    {
      id: 'dysarthria',
      label: 'scale.nihss.criteria.dysarthria.label',
      options: [
        { value: 0, description: 'scale.nihss.criteria.dysarthria.option0' },
        { value: 1, description: 'scale.nihss.criteria.dysarthria.option1' },
        { value: 2, description: 'scale.nihss.criteria.dysarthria.option2' },
      ],
    },
    {
      id: 'extinctionInattention',
      label: 'scale.nihss.criteria.extinctionInattention.label',
      options: [
        {
          value: 0,
          description: 'scale.nihss.criteria.extinctionInattention.option0',
        },
        {
          value: 1,
          description: 'scale.nihss.criteria.extinctionInattention.option1',
        },
        {
          value: 2,
          description: 'scale.nihss.criteria.extinctionInattention.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'scale.nihss.result.noStroke' },
    { min: 1, max: 4, summaryText: 'scale.nihss.result.minorStroke' },
    { min: 5, max: 15, summaryText: 'scale.nihss.result.moderateStroke' },
    {
      min: 16,
      max: 20,
      summaryText: 'scale.nihss.result.moderateSevereStroke',
    },
    { min: 21, max: 42, summaryText: 'scale.nihss.result.severeStroke' },
  ],
  extraDescription: 'scale.nihss.extraDescription',
};
