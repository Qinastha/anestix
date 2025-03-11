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
      optional: true,
      minValue: 0,
      maxDosage: 0.1,
      defaultValue: 0.05,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.05;
    const total = +weight * dose;

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
