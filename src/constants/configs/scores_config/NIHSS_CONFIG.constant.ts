import { ScoreConfig } from '@/interfaces/Scores.type';

export const NIHSS_CONFIG: ScoreConfig = {
  id: 'nihss',
  name: 'nihss.name',
  description: 'nihss.description',
  criteria: [
    {
      id: 'loc',
      label: 'nihss.criteria.loc.label',
      options: [
        { value: 0, description: 'nihss.criteria.loc.option0' },
        { value: 1, description: 'nihss.criteria.loc.option1' },
        { value: 2, description: 'nihss.criteria.loc.option2' },
        { value: 3, description: 'nihss.criteria.loc.option3' },
      ],
    },
    {
      id: 'locQuestions',
      label: 'nihss.criteria.locQuestions.label',
      options: [
        { value: 0, description: 'nihss.criteria.locQuestions.option0' },
        { value: 1, description: 'nihss.criteria.locQuestions.option1' },
        { value: 2, description: 'nihss.criteria.locQuestions.option2' },
      ],
    },
    {
      id: 'locCommands',
      label: 'nihss.criteria.locCommands.label',
      options: [
        { value: 0, description: 'nihss.criteria.locCommands.option0' },
        { value: 1, description: 'nihss.criteria.locCommands.option1' },
        { value: 2, description: 'nihss.criteria.locCommands.option2' },
      ],
    },
    {
      id: 'bestGaze',
      label: 'nihss.criteria.bestGaze.label',
      options: [
        { value: 0, description: 'nihss.criteria.bestGaze.option0' },
        { value: 1, description: 'nihss.criteria.bestGaze.option1' },
        { value: 2, description: 'nihss.criteria.bestGaze.option2' },
      ],
    },
    {
      id: 'visualFields',
      label: 'nihss.criteria.visualFields.label',
      options: [
        { value: 0, description: 'nihss.criteria.visualFields.option0' },
        { value: 1, description: 'nihss.criteria.visualFields.option1' },
        { value: 2, description: 'nihss.criteria.visualFields.option2' },
        { value: 3, description: 'nihss.criteria.visualFields.option3' },
      ],
    },
    {
      id: 'facialPalsy',
      label: 'nihss.criteria.facialPalsy.label',
      options: [
        { value: 0, description: 'nihss.criteria.facialPalsy.option0' },
        { value: 1, description: 'nihss.criteria.facialPalsy.option1' },
        { value: 2, description: 'nihss.criteria.facialPalsy.option2' },
        { value: 3, description: 'nihss.criteria.facialPalsy.option3' },
      ],
    },
    {
      id: 'motorArmLeft',
      label: 'nihss.criteria.motorArmLeft.label',
      options: [
        { value: 0, description: 'nihss.criteria.motorArmLeft.option0' },
        { value: 1, description: 'nihss.criteria.motorArmLeft.option1' },
        { value: 2, description: 'nihss.criteria.motorArmLeft.option2' },
        { value: 3, description: 'nihss.criteria.motorArmLeft.option3' },
        { value: 4, description: 'nihss.criteria.motorArmLeft.option4' },
      ],
    },
    {
      id: 'motorArmRight',
      label: 'nihss.criteria.motorArmRight.label',
      options: [
        { value: 0, description: 'nihss.criteria.motorArmRight.option0' },
        { value: 1, description: 'nihss.criteria.motorArmRight.option1' },
        { value: 2, description: 'nihss.criteria.motorArmRight.option2' },
        { value: 3, description: 'nihss.criteria.motorArmRight.option3' },
        { value: 4, description: 'nihss.criteria.motorArmRight.option4' },
      ],
    },
    {
      id: 'motorLegLeft',
      label: 'nihss.criteria.motorLegLeft.label',
      options: [
        { value: 0, description: 'nihss.criteria.motorLegLeft.option0' },
        { value: 1, description: 'nihss.criteria.motorLegLeft.option1' },
        { value: 2, description: 'nihss.criteria.motorLegLeft.option2' },
        { value: 3, description: 'nihss.criteria.motorLegLeft.option3' },
        { value: 4, description: 'nihss.criteria.motorLegLeft.option4' },
      ],
    },
    {
      id: 'motorLegRight',
      label: 'nihss.criteria.motorLegRight.label',
      options: [
        { value: 0, description: 'nihss.criteria.motorLegRight.option0' },
        { value: 1, description: 'nihss.criteria.motorLegRight.option1' },
        { value: 2, description: 'nihss.criteria.motorLegRight.option2' },
        { value: 3, description: 'nihss.criteria.motorLegRight.option3' },
        { value: 4, description: 'nihss.criteria.motorLegRight.option4' },
      ],
    },
    {
      id: 'limbAtaxia',
      label: 'nihss.criteria.limbAtaxia.label',
      options: [
        { value: 0, description: 'nihss.criteria.limbAtaxia.option0' },
        { value: 1, description: 'nihss.criteria.limbAtaxia.option1' },
        { value: 2, description: 'nihss.criteria.limbAtaxia.option2' },
      ],
    },
    {
      id: 'sensory',
      label: 'nihss.criteria.sensory.label',
      options: [
        { value: 0, description: 'nihss.criteria.sensory.option0' },
        { value: 1, description: 'nihss.criteria.sensory.option1' },
        { value: 2, description: 'nihss.criteria.sensory.option2' },
      ],
    },
    {
      id: 'bestLanguage',
      label: 'nihss.criteria.bestLanguage.label',
      options: [
        { value: 0, description: 'nihss.criteria.bestLanguage.option0' },
        { value: 1, description: 'nihss.criteria.bestLanguage.option1' },
        { value: 2, description: 'nihss.criteria.bestLanguage.option2' },
        { value: 3, description: 'nihss.criteria.bestLanguage.option3' },
      ],
    },
    {
      id: 'dysarthria',
      label: 'nihss.criteria.dysarthria.label',
      options: [
        { value: 0, description: 'nihss.criteria.dysarthria.option0' },
        { value: 1, description: 'nihss.criteria.dysarthria.option1' },
        { value: 2, description: 'nihss.criteria.dysarthria.option2' },
      ],
    },
    {
      id: 'extinctionInattention',
      label: 'nihss.criteria.extinctionInattention.label',
      options: [
        {
          value: 0,
          description: 'nihss.criteria.extinctionInattention.option0',
        },
        {
          value: 1,
          description: 'nihss.criteria.extinctionInattention.option1',
        },
        {
          value: 2,
          description: 'nihss.criteria.extinctionInattention.option2',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'nihss.result.noStroke' },
    { min: 1, max: 4, summaryText: 'nihss.result.minorStroke' },
    { min: 5, max: 15, summaryText: 'nihss.result.moderateStroke' },
    { min: 16, max: 20, summaryText: 'nihss.result.moderateSevereStroke' },
    { min: 21, max: 42, summaryText: 'nihss.result.severeStroke' },
  ],
  extraDescription: 'nihss.extraDescription',
};
