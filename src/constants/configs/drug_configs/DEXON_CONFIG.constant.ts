import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DEXON_CONFIG: DrugCalculatorConfig = {
  id: 'dexon',
  label: 'dexon.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'dosePerKg',
      unit: 'mg_kg',
      type: 'number',
      minValue: 0,
      maxDosage: 9,
      recDosage: 'dexon.recDosage',
      defaultValue: 0.5,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const total = +weight * +dosePerKg;

    setResult({
      bolus: {
        label: 'iv',
        value: Number(total.toFixed(1)),
        unit: 'mg',
      },
    });
  },
  annotation: 'dexon.annotation',
};
