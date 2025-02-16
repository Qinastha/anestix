import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NITROGLYCERIN_CONFIG: DrugCalculatorConfig = {
  id: 'nitroglycerin',
  label: 'calculators.nitroglycerin.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Infusion ~0.5–10 mcg/kg/min => pick ~5 => 0.005 mg/kg/min
    const AVERAGE_INFUSION_MG_PER_KG_MIN = 0.005;
    const infusionRate = weight * AVERAGE_INFUSION_MG_PER_KG_MIN;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(3)),
        unit: 'units.mg_per_min',
      },
    });
  },
  annotation: 'calculators.nitroglycerin.annotation',
};
