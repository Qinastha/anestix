import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const KETAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'ketamine',
  label: 'calculators.ketamine.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // IV range 1.5–2 mg/kg => pick 2 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 2;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.ketamine.annotation',
};
