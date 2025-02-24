import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const IDEAL_BODY_WEIGHT_CONFIG: FormulaConfig = {
  id: 'devine',
  label: 'calculators.devine.label',
  parameters: [
    {
      key: 'sex',
      label: 'calculators.devine.options.sex.label',
      unit: '',
      type: 'select',
      options: [
        {
          label: 'calculators.devine.options.sex.male',
          value: 'male',
        },
        {
          label: 'calculators.devine.options.sex.female',
          value: 'female',
        },
      ],
    },
    {
      key: 'height',
      label: 'calculators.devine.options.height.label',
      unit: 'units.cm',
      type: 'number',
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
        label: 'calculators.devine.result.idealWeight',
        value: parseFloat(idealWeight.toFixed(1)),
        unit: 'units.kg',
      },
    });
  },
  annotation: 'calculators.devine.annotation',
};
