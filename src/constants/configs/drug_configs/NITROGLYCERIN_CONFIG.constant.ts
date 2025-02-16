import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NITROGLYCERIN_CONFIG: DrugCalculatorConfig = {
  id: 'nitroglycerin',
  label: 'calculators.nitroglycerin.label',
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
      defaultValue: 0.005,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.005;
    // Infusion ~0.5–10 mcg/kg/min => pick ~5 => 0.005 mg/kg/min
    const infusionRate = weight * dose;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(3)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.nitroglycerin.annotation',
};
