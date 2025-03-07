import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const GOMH_CONFIG: DrugCalculatorConfig = {
  id: 'gomh',
  label: 'calculators.gomh.label',
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
      maxDosage: 150,
      defaultValue: 75,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 75;
    // Range 50–150 mg/kg => pick ~100 mg/kg
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.gomh.annotation',
};
