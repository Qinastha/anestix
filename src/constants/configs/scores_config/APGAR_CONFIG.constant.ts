import { ScoreConfig } from '@/interfaces/Scores.type';

export const APGAR_CONFIG: ScoreConfig = {
  id: 'apgar',
  name: 'apgar.name',
  description: 'apgar.description',
  criteria: [
    {
      id: 'hr',
      label: 'apgar.criteria.hr.label',
      type: 'base',
      options: [
        { value: 0, description: 'apgar.criteria.hr.option0' },
        { value: 1, description: 'apgar.criteria.hr.option1' },
        { value: 2, description: 'apgar.criteria.hr.option2' },
      ],
    },
    {
      id: 'lung',
      label: 'apgar.criteria.lung.label',
      type: 'base',
      options: [
        { value: 0, description: 'apgar.criteria.lung.option0' },
        { value: 1, description: 'apgar.criteria.lung.option1' },
        { value: 2, description: 'apgar.criteria.lung.option2' },
      ],
    },
    {
      id: 'muscle',
      label: 'apgar.criteria.muscle.label',
      type: 'base',
      options: [
        { value: 0, description: 'apgar.criteria.muscle.option0' },
        { value: 1, description: 'apgar.criteria.muscle.option1' },
        { value: 2, description: 'apgar.criteria.muscle.option2' },
      ],
    },
    {
      id: 'skin',
      label: 'apgar.criteria.skin.label',
      type: 'base',
      options: [
        { value: 0, description: 'apgar.criteria.skin.option0' },
        { value: 1, description: 'apgar.criteria.skin.option1' },
        { value: 2, description: 'apgar.criteria.skin.option2' },
      ],
    },
    {
      id: 'reflex',
      label: 'apgar.criteria.reflex.label',
      type: 'base',
      options: [
        { value: 0, description: 'apgar.criteria.reflex.option0' },
        { value: 1, description: 'apgar.criteria.reflex.option1' },
        { value: 2, description: 'apgar.criteria.reflex.option2' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 6, summaryText: 'apgar.result.distress' },
    { min: 7, max: 10, summaryText: 'apgar.result.normal' },
  ],
  extraDescription: 'apgar.extraDescription',
};
