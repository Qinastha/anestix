import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ROCURONIUM_CONFIG: DrugCalculatorConfig = {
  id: 'rocuronium',
  label: 'calculators.rocuronium.label',
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
      defaultValue: 0.6,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.6;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(0)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.rocuronium.annotation',
};
