import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const THIOPENTAIL_CONFIG: DrugCalculatorConfig = {
  id: 'thiopental',
  label: 'thiopental.label',
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
      maxDosage: 6,
      recDosage: 'thiopental.recDosage',
      defaultValue: 3,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const total = +weight * +dosePerKg;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(2)),
        unit: 'mg',
      },
    });
  },
  annotation: 'thiopental.annotation',
};
