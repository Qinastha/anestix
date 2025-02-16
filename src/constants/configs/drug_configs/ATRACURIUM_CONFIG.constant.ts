import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ATRACURIUM_CONFIG: DrugCalculatorConfig = {
  id: 'atracurium',
  label: 'calculators.atracurium.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Range 0.3–0.6 mg/kg => pick ~0.45 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 0.45;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.atracurium.annotation',
};
