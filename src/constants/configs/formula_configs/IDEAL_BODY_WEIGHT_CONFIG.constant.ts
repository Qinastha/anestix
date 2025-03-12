import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const IDEAL_BODY_WEIGHT_CONFIG: FormulaConfig = {
  id: 'devine',
  label: 'devine.label',
  parameters: [
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
    {
      key: 'height',
      label: 'height',
      unit: 'cm',
      type: 'number',
      minValue: 140,
    },
  ],
  calculate: ({ sex, height }, setResult) => {
    const conversionFactor = 0.393701; // convert centimeters to inches
    const heightInInches = +height * conversionFactor;
    let idealWeight: number;

    if (sex === 'male') {
      idealWeight = 50 + 2.3 * (heightInInches - 60);
    } else {
      idealWeight = 45.5 + 2.3 * (heightInInches - 60);
    }

    // For individuals with height below 152 cm, apply an adjustment.
    // The adjustment subtracts an average of 1.6 kg per cm below 152 cm (midpoint between 0.9 and 2.3 kg).
    if (+height < 152) {
      const cmBelow = 152 - +height;
      const adjustmentPerCm = 1.5;
      idealWeight -= adjustmentPerCm * cmBelow;
    }

    setResult({
      idealWeight: {
        label: 'devine.idealWeight',
        value: parseFloat(idealWeight.toFixed(1)),
        unit: 'kg',
      },
    });
  },
  annotation: 'devine.annotation',
};
