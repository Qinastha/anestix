import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const FENTANYL_CONFIG: DrugCalculatorConfig = {
  id: 'fentanyl',
  label: 'fentanyl.label',
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
      maxDosage: 2.5,
      defaultValue: 0.5,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.5;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(1)),
        unit: 'mcg',
      },
    });
  },
  annotation: 'fentanyl.annotation',
};
