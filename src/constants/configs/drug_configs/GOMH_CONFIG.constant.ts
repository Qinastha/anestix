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
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Range 50–150 mg/kg => pick ~100 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 100;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

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
