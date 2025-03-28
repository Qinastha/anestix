import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DITILIN_CONFIG: DrugCalculatorConfig = {
  id: 'ditilin',
  label: 'ditilin.label',
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
      maxDosage: 2,
      recDosage: 'ditilin.recDosage',
      defaultValue: 0.75,
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
  annotation: 'ditilin.annotation',
};
