import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DEXON_CONFIG: DrugCalculatorConfig = {
  id: 'dexon',
  label: 'calculators.dexon.label',
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
      maxDosage: 0.11,
      defaultValue: 0.08,
    },
  ],
  calculate: ({ weight, dosePerKg }, setResult) => {
    // Dexamethasone ~4–8 mg typical => ~0.06–0.11 mg/kg for 70 kg => pick 0.08 mg/kg
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.08;
    const total = +weight * dose;

    setResult({
      bolus: {
        label: 'calculators.iv',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.dexon.annotation',
};
