import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const ACTILYSE_CONFIG: DrugCalculatorConfig = {
  id: 'actilyse',
  label: 'actilyse.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: ({ weight }, setResult) => {
    const totalDose = +weight * 0.9;
    const bolus = Number((totalDose * 0.1).toFixed(1));
    const infusion = Number((totalDose * 0.9).toFixed(1));
    setResult({
      bolus: {
        label: 'actilyse.bolus',
        value: bolus,
        unit: 'mg',
      },
      infusion: {
        label: 'actilyse.infusion',
        value: infusion,
        unit: 'mg',
      },
      total: {
        label: 'total',
        value: Number(totalDose.toFixed(1)),
        unit: 'mg',
      },
    });
  },
  annotation: 'actilyse.annotation',
};
