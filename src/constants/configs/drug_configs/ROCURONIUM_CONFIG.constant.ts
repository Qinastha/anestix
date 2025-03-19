import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ROCURONIUM_CONFIG: DrugCalculatorConfig = {
  id: 'rocuronium',
  label: 'rocuronium.label',
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
      maxDosage: 1,
      recDosage: 'rocuronium.recDosage',
      defaultValue: 0.6,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.6;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(0)),
        unit: 'mg',
      },
    });
  },
  annotation: 'rocuronium.annotation',
};
