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
      minValue: 0,
      maxDosage: 1.2,
      recDosage: 'rocuronium.recDosage',
      defaultValue: 0.6,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const total = +weight * +dosePerKg;

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
