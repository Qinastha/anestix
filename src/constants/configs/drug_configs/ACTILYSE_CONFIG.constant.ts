import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ACTILYSE_CONFIG: DrugCalculatorConfig = {
  id: 'actilyse',
  label: 'calculators.actilyse.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    const totalDose = weight * 0.9;
    const bolus = Number((totalDose * 0.1).toFixed(1));
    const infusion = Number((totalDose * 0.9).toFixed(1));
    setResult({
      bolus: {
        label: 'calculators.actilyse.bolus',
        value: bolus,
        unit: 'units.mg',
      },
      infusion: {
        label: 'calculators.actilyse.infusion',
        value: infusion,
        unit: 'units.mg',
      },
      total: {
        label: 'calculators.actilyse.total',
        value: Number(totalDose.toFixed(1)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.actilyse.annotation',
};
