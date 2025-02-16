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
  ],
  calculate: ({ weight }, setResult) => {
    // ~1.5–3 mcg/kg => pick ~2 => 0.002 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 0.002;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.bolus',
        value: Number(total.toFixed(3)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.naloxone.annotation',
};
