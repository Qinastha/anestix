import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NORADRENALINE_CONFIG: DrugCalculatorConfig = {
  id: 'noradrenaline',
  label: 'calculators.noradrenaline.label',
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
      unit: 'units.mg_kg_min',
      type: 'number',
      optional: true,
      defaultValue: 0.0005,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.0005;
    // Norepinephrine is almost always an infusion agent in practice
    // Example ~0.5 mcg/kg/min => 0.0005 mg/kg/min => mg/min
    const infusionRate = weight * dose;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(4)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.noradrenaline.annotation',
};
