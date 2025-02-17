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
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mg_kg',
      type: 'number',
      optional: true,
      defaultValue: 2,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 2;
    // IV range 1.5–2 mg/kg => pick 2 mg/kg
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
