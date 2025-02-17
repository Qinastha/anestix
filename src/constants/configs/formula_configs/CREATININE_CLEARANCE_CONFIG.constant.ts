import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const CREATININE_CLEARANCE_CONFIG: FormulaConfig = {
  id: 'creatinineClearance',
  label: 'calculators.creatinineClearance.label',
  parameters: [
    {
      key: 'age',
      label: 'calculators.creatinineClearance.parameters.age',
      unit: 'units.years',
      type: 'number',
    },
    {
      key: 'weight',
      label: 'calculators.creatinineClearance.parameters.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'creatinine',
      label: 'calculators.creatinineClearance.parameters.creatinine',
      unit: 'units.umol_l',
      type: 'number',
    },
    {
      key: 'sex',
      label: 'calculators.creatinineClearance.parameters.sex',
      unit: '',
      type: 'select',
      options: [
        {
          label: 'calculators.creatinineClearance.options.sex.male',
          value: 'male',
        },
        {
          label: 'calculators.creatinineClearance.options.sex.female',
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
        label: 'calculators.creatinineClearance.result.clearance',
        value: parseFloat(clearance.toFixed(1)),
        unit: 'units.ml_min_m2',
      },
    });
  },
  annotation: 'calculators.creatinineClearance.annotation',
};
