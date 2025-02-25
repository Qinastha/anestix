import { ScaleConfig } from '@/interfaces/Scale.type';

export const PESI_CONFIG: ScaleConfig = {
  id: 'pesi',
  name: 'scale.pesi.name', // e.g. "Шкала PESI"
  description: 'scale.pesi.description',
  criteria: [
    {
      id: 'age',
      label: 'scale.pesi.criteria.age', // "Возраст (в годах)"
      type: 'input', // user enters age in years; score = возраст
      options: [],
    },
    {
      id: 'gender',
      label: 'scale.pesi.criteria.gender.label', // "Мужской пол"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.gender.option0',
        },
        {
          value: 10,
          label: '10', // "Да (+10)"
          description: 'scale.pesi.criteria.gender.option1',
        },
      ],
    },
    {
      id: 'cancer',
      label: 'scale.pesi.criteria.cancer.label', // "Онкозаболевания"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.cancer.option0',
        },
        {
          value: 30,
          label: '30', // "Да (+30)"
          description: 'scale.pesi.criteria.cancer.option1',
        },
      ],
    },
    {
      id: 'chronicHF',
      label: 'scale.pesi.criteria.chronicHF.label', // "Хроническая сердечная недостаточность"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.chronicHF.option0',
        },
        {
          value: 10,
          label: '10', // "Да (+10)"
          description: 'scale.pesi.criteria.chronicHF.option1',
        },
      ],
    },
    {
      id: 'chronicLung',
      label: 'scale.pesi.criteria.chronicLung.label', // "Хроническое заболевание легких"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.chronicLung.option0',
        },
        {
          value: 10,
          label: '10', // "Да (+10)"
          description: 'scale.pesi.criteria.chronicLung.option1',
        },
      ],
    },
    {
      id: 'heartRate',
      label: 'scale.pesi.criteria.heartRate.label', // "ЧСС ≥110 уд/мин"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.heartRate.option0',
        },
        {
          value: 20,
          label: '20', // "Да (+20)"
          description: 'scale.pesi.criteria.heartRate.option1',
        },
      ],
    },
    {
      id: 'bp',
      label: 'scale.pesi.criteria.bp.label', // "САД <100 мм рт ст"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.bp.option0',
        },
        {
          value: 30,
          label: '30', // "Да (+30)"
          description: 'scale.pesi.criteria.bp.option1',
        },
      ],
    },
    {
      id: 'respRate',
      label: 'scale.pesi.criteria.respRate.label', // "ЧДД >30/мин"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.respRate.option0',
        },
        {
          value: 20,
          label: '20', // "Да (+20)"
          description: 'scale.pesi.criteria.respRate.option1',
        },
      ],
    },
    {
      id: 'temperature',
      label: 'scale.pesi.criteria.temperature.label', // "Температура <36°C"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.temperature.option0',
        },
        {
          value: 20,
          label: '20', // "Да (+20)"
          description: 'scale.pesi.criteria.temperature.option1',
        },
      ],
    },
    {
      id: 'mentalStatus',
      label: 'scale.pesi.criteria.mentalStatus.label', // "Нарушение сознания"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.mentalStatus.option0',
        },
        {
          value: 60,
          label: '60', // "Да (+60)"
          description: 'scale.pesi.criteria.mentalStatus.option1',
        },
      ],
    },
    {
      id: 'oxygen',
      label: 'scale.pesi.criteria.oxygen.label', // "Сатурация О2 <90%"
      type: 'radio',
      options: [
        {
          value: 0,
          label: '0', // "Нет"
          description: 'scale.pesi.criteria.oxygen.option0',
        },
        {
          value: 20,
          label: '20', // "Да (+20)"
          description: 'scale.pesi.criteria.oxygen.option1',
        },
      ],
    },
  ],
  resultThresholds: [
    {
      min: 0,
      max: 65,
      summaryText: 'scale.pesi.result.class1', // Класс I: очень низкий риск (0.0-1.6%)
    },
    {
      min: 66,
      max: 85,
      summaryText: 'scale.pesi.result.class2', // Класс II: низкий риск (1.7-3.5%)
    },
    {
      min: 86,
      max: 105,
      summaryText: 'scale.pesi.result.class3', // Класс III: средний риск (3.2-7.1%)
    },
    {
      min: 106,
      max: 125,
      summaryText: 'scale.pesi.result.class4', // Класс IV: высокий риск (4.0-11.4%)
    },
    {
      min: 126,
      max: 1000, // arbitrary high value for Class V
      summaryText: 'scale.pesi.result.class5', // Класс V: высокий риск (10-24.5%)
    },
  ],
  extraDescription: 'scale.pesi.extraDescription',
};
