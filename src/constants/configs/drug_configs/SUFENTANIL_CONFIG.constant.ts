import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const SUFENTANIL_CONFIG: DrugCalculatorConfig = {
  id: 'sufentanil',
  label: 'calculators.sufentanil.label',
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
      unit: 'units.mcg_kg',
      type: 'number',
      optional: true,
      defaultValue: 0.05,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.05;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mcg',
      },
    });
  },
  annotation: 'calculators.sufentanil.annotation',
};
