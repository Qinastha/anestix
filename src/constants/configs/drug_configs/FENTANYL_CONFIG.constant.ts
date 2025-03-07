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
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mcg_kg',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 2.5,
      defaultValue: 0.5,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.5;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(1)),
        unit: 'units.mcg',
      },
    });
  },
  annotation: 'calculators.fentanyl.annotation',
};
