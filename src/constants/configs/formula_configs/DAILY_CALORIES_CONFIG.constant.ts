import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const DAILY_CALORIES_CONFIG: FormulaConfig = {
  id: 'dailyCalorie',
  label: 'dailyCalories.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'height',
      label: 'height',
      unit: 'cm',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'age',
      label: 'age',
      unit: 'years',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'sex',
      label: 'sex',
      type: 'select',
      unit: '',
      options: [
        {
          label: 'male',
          value: 'male',
        },
        {
          label: 'female',
          value: 'female',
        },
      ],
    },
    {
      key: 'activity',
      label: 'activity',
      type: 'select',
      unit: '',
      options: [
        {
          label: 'dailyCalories.sedentary',
          value: 1.2,
        },
        {
          label: 'dailyCalories.lightActivity',
          value: 1.375,
        },
        {
          label: 'dailyCalories.moderateActivity',
          value: 1.55,
        },
        {
          label: 'dailyCalories.veryActive',
          value: 1.725,
        },
        {
          label: 'dailyCalories.superActive',
          value: 1.9,
        },
      ],
    },
  ],
  calculate: ({ weight, height, age, activity, sex }, setResult) => {
    const bmr =
      sex === 'male'
        ? 10 * +weight + 6.25 * +height - 5 * +age + 5
        : 10 * +weight + 6.25 * +height - 5 * +age - 161;
    const tdee = bmr * +activity;

    setResult({
      bmr: {
        label: 'dailyCalories.bmr',
        value: parseFloat(bmr.toFixed(1)),
        unit: 'kcal_day',
      },
      tdee: {
        label: 'dailyCalories.tdee',
        value: parseFloat(tdee.toFixed(1)),
        unit: 'kcal_day',
      },
    });
  },
  annotation: 'dailyCalories.annotation',
};
