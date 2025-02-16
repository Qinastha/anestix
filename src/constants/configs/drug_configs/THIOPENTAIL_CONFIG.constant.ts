import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const THIOPENTAIL_CONFIG: DrugCalculatorConfig = {
  id: 'thiopental',
  label: 'calculators.thiopental.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Typical induction bolus range: 3–6 mg/kg => pick ~4.5 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 4.5;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.thiopental.annotation',
};
