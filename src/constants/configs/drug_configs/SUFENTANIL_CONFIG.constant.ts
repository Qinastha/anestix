import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const SUFENTANIL_CONFIG: DrugCalculatorConfig = {
  id: 'sufentanil',
  label: 'sufentanil.label',
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
      unit: 'mcg_kg',
      type: 'number',
      minValue: 0,
      maxDosage: 8,
      recDosage: 'sufentanil.recDosage',
      defaultValue: 1,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const total = +weight * +dosePerKg;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(2)),
        unit: 'mcg',
      },
    });
  },
  annotation: 'sufentanil.annotation',
};
