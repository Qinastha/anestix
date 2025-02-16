import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DITILIN_CONFIG: DrugCalculatorConfig = {
  id: 'ditilin',
  label: 'calculators.ditilin.label',
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
      defaultValue: 1.25,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 1.25;
    // Suxamethonium 1–1.5 mg/kg => pick ~1.25 mg/kg
    const total = weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.ditilin.annotation',
};
