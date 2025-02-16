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
  ],
  calculate: ({ weight }, setResult) => {
    // Typical bolus ~1.5 mcg/kg => 0.0015 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 0.0015;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(4)), // small amounts
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.fentanyl.annotation',
};
