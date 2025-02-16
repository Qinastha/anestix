import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const GOMH_CONFIG: DrugCalculatorConfig = {
  id: 'gomh',
  label: 'calculators.gomh.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mg_kg',
      type: 'number',
      optional: true,
      defaultValue: 100,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 100;
    // Range 50–150 mg/kg => pick ~100 mg/kg
    const total = weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.gomh.annotation',
};
