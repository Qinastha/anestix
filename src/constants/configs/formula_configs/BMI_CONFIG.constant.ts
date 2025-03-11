import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const BMI_CONFIG: FormulaConfig = {
  id: 'bmi',
  label: 'bmi.label',
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
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        { label: 'unit_m', value: 'm', conversionFactor: 1 },
        { label: 'unit_cm', value: 'cm', conversionFactor: 0.01 },
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
        label: 'bmi.bmi',
        value: parseFloat(bmi.toFixed(1)),
        unit: 'kg_m2',
      },
    });
  },
  annotation: 'bmi.annotation',
};
