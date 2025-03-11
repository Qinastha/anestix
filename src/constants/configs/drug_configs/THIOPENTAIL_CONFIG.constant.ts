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
      optional: true,
      minValue: 0,
      maxDosage: 6,
      defaultValue: 4,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 4;
    // Typical induction bolus range: 3–6 mg/kg => pick ~4.5 mg/kg
    const total = +weight * dose;

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
