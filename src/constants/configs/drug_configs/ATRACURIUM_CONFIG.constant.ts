import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ATRACURIUM_CONFIG: DrugCalculatorConfig = {
  id: 'atracurium',
  label: 'calculators.atracurium.label',
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
      defaultValue: 0.45,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    // Range 0.3–0.6 mg/kg => pick ~0.45 mg/kg
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.45;
    const total = weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.atracurium.annotation',
};
