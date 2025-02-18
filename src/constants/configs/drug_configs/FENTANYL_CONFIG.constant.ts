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
      unit: 'units.mcg_kg',
      type: 'number',
      optional: true,
      defaultValue: 0.5,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.5;
    const total = +weight * (dose / 1000);

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(3)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.fentanyl.annotation',
};
