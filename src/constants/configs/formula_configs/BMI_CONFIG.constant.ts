import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const BMI_CONFIG: FormulaConfig = {
  id: 'bmi',
  label: 'calculators.bmi.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'height',
      label: 'calculators.height',
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        { label: 'units.m', value: 'units.m', conversionFactor: 1 },
        { label: 'units.cm', value: 'units.cm', conversionFactor: 0.01 },
      ],
    },
  ],
  calculate: ({ weight, height, height_unit }, setResult) => {
    const heightOption = BMI_CONFIG.parameters[1].options?.find(
      (o) => o.value === height_unit
    );
    const heightInMeters = +height * (heightOption?.conversionFactor || 1);
    const bmi = +weight / (heightInMeters * heightInMeters);
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
