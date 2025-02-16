import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NORADRENALINE_CONFIG: DrugCalculatorConfig = {
  id: 'noradrenaline',
  label: 'calculators.noradrenaline.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Norepinephrine is almost always an infusion agent in practice
    // Example ~0.5 mcg/kg/min => 0.0005 mg/kg/min => mg/min
    const AVERAGE_INFUSION_MG_PER_KG_MIN = 0.0005;
    const infusionRate = weight * AVERAGE_INFUSION_MG_PER_KG_MIN;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(4)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.noradrenaline.annotation',
};
