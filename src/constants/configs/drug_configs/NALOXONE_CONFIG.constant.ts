import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NALOXONE_CONFIG: DrugCalculatorConfig = {
  id: 'naloxone',
  label: 'naloxone.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'dosePerKg',
      unit: 'mg_kg',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 0.003,
      recDosage: 'naloxone.recDosage',
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
        label: 'iv',
        value: Number(total.toFixed(3)),
        unit: 'mg',
      },
    });
  },
  annotation: 'naloxone.annotation',
};
