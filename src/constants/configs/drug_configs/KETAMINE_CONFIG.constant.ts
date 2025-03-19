import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const KETAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'ketamine',
  label: 'ketamine.label',
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
      maxDosage: 4.5,
      recDosage: 'ketamine.recDosage',
      defaultValue: 1,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 1;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(2)),
        unit: 'mg',
      },
    });
  },
  annotation: 'ketamine.annotation',
};
