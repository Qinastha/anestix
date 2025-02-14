import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const DAILY_CALORIES_CONFIG: FormulaConfig = {
  id: 'dailyCalorie',
  label: 'calculators.dailyCalories.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.dailyCalories.parameters.weight',
      type: 'number',
    },
    {
      key: 'height',
      label: 'calculators.dailyCalories.parameters.height',
      type: 'number',
    },
    {
      key: 'age',
      label: 'calculators.dailyCalories.parameters.age',
      type: 'number',
    },
    {
      key: 'sex',
      label: 'calculators.dailyCalories.parameters.sex',
      type: 'select',
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
  calculate: (params, setResult) => {
    const weight = Number(params.weight);
    const height = Number(params.height);
    const age = Number(params.age);
    const activity = Number(params.activity);
    const sex = params.sex as 'male' | 'female';

    if (
      isNaN(weight) ||
      isNaN(height) ||
      isNaN(age) ||
      isNaN(activity) ||
      height === 0
    ) {
      return;
    }

    const bmr =
      sex === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * activity;

    setResult({
      bmr: {
        label: 'calculators.dailyCalories.result.bmr',
        value: parseFloat(bmr.toFixed(1)),
        unit: 'calculators.units.kcal_day',
      },
      tdee: {
        label: 'calculators.dailyCalories.result.tdee',
        value: parseFloat(tdee.toFixed(1)),
        unit: 'calculators.units.kcal_day',
      },
    });
  },
  annotation: 'calculators.dailyCalories.annotation',
};
