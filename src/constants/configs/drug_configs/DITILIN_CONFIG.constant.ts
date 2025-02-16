import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DITILIN_CONFIG: DrugCalculatorConfig = {
  id: 'ditilin',
  label: 'calculators.ditilin.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Suxamethonium 1–1.5 mg/kg => pick ~1.25 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 1.25;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.bolus',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.ditilin.annotation',
};
