import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const KETAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'ketamine',
  label: 'calculators.ketamine.label',
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
      minValue: 0,
      maxDosage: 2,
      defaultValue: 1,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 1;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.ketamine.annotation',
};
