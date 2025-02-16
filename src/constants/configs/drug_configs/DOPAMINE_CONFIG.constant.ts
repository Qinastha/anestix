import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DOPAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'dopamine',
  label: 'calculators.dopamine.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Infusion 1–20 mcg/kg/min => pick ~10 => 0.01 mg/kg/min
    const AVERAGE_INFUSION_MG_PER_KG_MIN = 0.01;
    const infusionRate = weight * AVERAGE_INFUSION_MG_PER_KG_MIN;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(2)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.dopamine.annotation',
};
