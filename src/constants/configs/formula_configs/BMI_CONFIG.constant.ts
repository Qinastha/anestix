import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const BMI_CONFIG: FormulaConfig = {
  id: 'bmi',
  label: 'calculators.bmi.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.bmi.parameters.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'height',
      label: 'calculators.bmi.parameters.height',
      unit: 'units.m',
      type: 'number',
    },
  ],
  calculate: ({ weight, height }, setResult) => {
    const bmi = +weight / (+height * +height);
    setResult({
      bmi: {
        label: 'calculators.bmi.result.bmi',
        value: parseFloat(bmi.toFixed(1)),
        unit: 'units.kg_m2',
      },
    });
  },
  annotation: 'calculators.bmi.annotation',
};
