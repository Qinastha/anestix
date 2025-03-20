import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ATRACURIUM_CONFIG: DrugCalculatorConfig = {
  id: 'atracurium',
  label: 'atracurium.label',
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
      maxDosage: 0.6,
      recDosage: 'atracurium.recDosage',
      defaultValue: 0.5,
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
  annotation: 'atracurium.annotation',
};
