import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DOPAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'dopamine',
  label: 'calculators.dopamine.label',
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
      unit: 'units.mcg_kg_min',
      type: 'number',
      optional: true,
      defaultValue: 10,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 10;
    const mgDose = dose / 1000;
    // Infusion 1–20 mcg/kg/min => pick ~10 => 0.01 mg/kg/min
    const infusionRate = +weight * mgDose;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(2)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.dopamine.annotation',
};
