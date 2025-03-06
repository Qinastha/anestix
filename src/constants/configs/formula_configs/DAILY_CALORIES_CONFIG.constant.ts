import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const DAILY_CALORIES_CONFIG: FormulaConfig = {
  id: 'dailyCalorie',
  label: 'calculators.dailyCalories.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.dailyCalories.parameters.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'height',
      label: 'calculators.dailyCalories.parameters.height',
      unit: 'units.cm',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'age',
      label: 'calculators.dailyCalories.parameters.age',
      unit: 'units.years',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'sex',
      label: 'calculators.dailyCalories.parameters.sex',
      type: 'select',
      unit: '',
      options: [
        {
          label: 'calculators.dailyCalories.options.sex.male',
          value: 'male',
        },
        {
          label: 'calculators.dailyCalories.options.sex.female',
          value: 'female',
        },
      ],
    },
    {
      key: 'activity',
      label: 'calculators.dailyCalories.parameters.activity',
      type: 'select',
      unit: '',
      options: [
        {
          label: 'calculators.dailyCalories.options.activity.sedentary',
          value: 1.2,
        },
        {
          label: 'calculators.dailyCalories.options.activity.lightActivity',
          value: 1.375,
        },
        {
          label: 'calculators.dailyCalories.options.activity.moderateActivity',
          value: 1.55,
        },
        {
          label: 'calculators.dailyCalories.options.activity.veryActive',
          value: 1.725,
        },
        {
          label: 'calculators.dailyCalories.options.activity.superActive',
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
        label: 'calculators.dailyCalories.result.bmr',
        value: parseFloat(bmr.toFixed(1)),
        unit: 'units.kcal_day',
      },
      tdee: {
        label: 'calculators.dailyCalories.result.tdee',
        value: parseFloat(tdee.toFixed(1)),
        unit: 'units.kcal_day',
      },
    });
  },
  annotation: 'calculators.dailyCalories.annotation',
};
