import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const FENTANYL_CONFIG: DrugCalculatorConfig = {
  id: 'fentanyl',
  label: 'calculators.fentanyl.label',
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
      defaultValue: 0.0015,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.0015;
    // Typical bolus ~1.5 mcg/kg => 0.0015 mg/kg
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(4)), // small amounts
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.fentanyl.annotation',
};
