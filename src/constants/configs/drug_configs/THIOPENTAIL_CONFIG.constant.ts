import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const THIOPENTAIL_CONFIG: DrugCalculatorConfig = {
  id: 'thiopental',
  label: 'calculators.thiopental.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mg_kg',
      type: 'number',
      optional: true,
      defaultValue: 4.5,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 4.5;
    // Typical induction bolus range: 3–6 mg/kg => pick ~4.5 mg/kg
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.thiopental.annotation',
};
