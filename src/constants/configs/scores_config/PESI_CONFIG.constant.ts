import { ScoreConfig } from '@/interfaces/Scores.type';

export const PESI_CONFIG: ScoreConfig = {
  id: 'pesi',
  name: 'pesi.name',
  description: 'pesi.description',
  criteria: [
    {
      id: 'age',
      label: 'pesi.criteria.age', // "Возраст (в годах)"
      type: 'input', // user enters age in years; score = возраст
      options: [],
    },
    {
      id: 'gender',
      label: 'pesi.criteria.gender.label',
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.gender.option0' },
        { value: 10, description: 'pesi.criteria.gender.option1' },
      ],
    },
    {
      id: 'cancer',
      label: 'pesi.criteria.cancer.label', // "Онкозаболевания"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.cancer.option0' },
        { value: 30, description: 'pesi.criteria.cancer.option1' },
      ],
    },
    {
      id: 'chronicHF',
      label: 'pesi.criteria.chronicHF.label', // "Хроническая сердечная недостаточность"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.chronicHF.option0' },
        { value: 10, description: 'pesi.criteria.chronicHF.option1' },
      ],
    },
    {
      id: 'chronicLung',
      label: 'pesi.criteria.chronicLung.label', // "Хроническое заболевание легких"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.chronicLung.option0' },
        { value: 10, description: 'pesi.criteria.chronicLung.option1' },
      ],
    },
    {
      id: 'heartRate',
      label: 'pesi.criteria.heartRate.label', // "ЧСС ≥110 уд/мин"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.heartRate.option0' },
        { value: 20, description: 'pesi.criteria.heartRate.option1' },
      ],
    },
    {
      id: 'bp',
      label: 'pesi.criteria.bp.label', // "САД <100 мм рт ст"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.bp.option0' },
        { value: 30, description: 'pesi.criteria.bp.option1' },
      ],
    },
    {
      id: 'respRate',
      label: 'pesi.criteria.respRate.label', // "ЧДД >30/мин"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.respRate.option0' },
        { value: 20, description: 'pesi.criteria.respRate.option1' },
      ],
    },
    {
      id: 'temperature',
      label: 'pesi.criteria.temperature.label', // "Температура <36°C"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.temperature.option0' },
        { value: 20, description: 'pesi.criteria.temperature.option1' },
      ],
    },
    {
      id: 'mentalStatus',
      label: 'pesi.criteria.mentalStatus.label', // "Нарушение сознания"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.mentalStatus.option0' },
        { value: 60, description: 'pesi.criteria.mentalStatus.option1' },
      ],
    },
    {
      id: 'oxygen',
      label: 'pesi.criteria.oxygen.label', // "Сатурация О2 <90%"
      type: 'radio',
      options: [
        { value: 0, description: 'pesi.criteria.oxygen.option0' },
        { value: 20, description: 'pesi.criteria.oxygen.option1' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 65, summaryText: 'pesi.result.class1' }, // Класс I: очень низкий риск (0.0-1.6%)
    { min: 66, max: 85, summaryText: 'pesi.result.class2' }, // Класс II: низкий риск (1.7-3.5%)
    { min: 86, max: 105, summaryText: 'pesi.result.class3' }, // Класс III: средний риск (3.2-7.1%)
    { min: 106, max: 125, summaryText: 'pesi.result.class4' }, // Класс IV: высокий риск (4.0-11.4%)
    { min: 126, max: 9999, summaryText: 'pesi.result.class5' }, // Класс V: высокий риск (10-24.5%)
  ],
  extraDescription: 'pesi.extraDescription',
};
