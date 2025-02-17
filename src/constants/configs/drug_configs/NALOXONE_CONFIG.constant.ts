import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NALOXONE_CONFIG: DrugCalculatorConfig = {
  id: 'naloxone',
  label: 'calculators.naloxone.label',
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
      defaultValue: 0.002,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.002;
    // ~1.5–3 mcg/kg => pick ~2 => 0.002 mg/kg
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.iv',
        value: Number(total.toFixed(3)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.naloxone.annotation',
};
