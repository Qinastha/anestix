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
      optional: true,
      minValue: 0,
      maxDosage: 0.11,
      recDosage: 'dexon.recDosage',
      defaultValue: 0.08,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.08;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'iv',
        value: Number(total.toFixed(2)),
        unit: 'mg',
      },
    });
  },
  annotation: 'dexon.annotation',
};
