import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const GOMH_CONFIG: DrugCalculatorConfig = {
  id: 'gomh',
  label: 'gomh.label',
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
      maxDosage: 150,
      recDosage: 'gomh.recDosage',
      defaultValue: 75,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 75;
    // Range 50–150 mg/kg => pick ~100 mg/kg
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(total.toFixed(2)),
        unit: 'mg',
      },
    });
  },
  annotation: 'gomh.annotation',
};
