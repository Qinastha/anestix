import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const CREATININE_CLEARANCE_CONFIG: FormulaConfig = {
  id: 'creatinineClearance',
  label: 'creatinineClearance.label',
  parameters: [
    {
      key: 'age',
      label: 'age',
      unit: 'years',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'creatinine',
      label: 'creatinine',
      unit: 'umol_l',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'sex',
      label: 'sex',
      unit: '',
      type: 'select',
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
  ],
  calculate: ({ age, weight, creatinine, sex }, setResult) => {
    let clearance = ((140 - +age) * +weight) / (72 * (+creatinine / 88.4));
    if (sex === 'female') clearance *= 0.85;

    setResult({
      clearance: {
        label: 'creatinineClearance.clearance',
        value: parseFloat(clearance.toFixed(1)),
        unit: 'ml_min_m2',
      },
    });
  },
  annotation: 'creatinineClearance.annotation',
};
