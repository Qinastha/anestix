import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DRUG_CALCULATOR_CONFIG: Record<string, DrugCalculatorConfig> = {
  actilyse: {
    label: 'calculators.actilyse.label',
    parameters: [
      { key: 'weight', label: 'calculators.weight', type: 'number' },
    ],
    calculate: ({ weight }, setResult) => {
      const totalDose = weight * 0.9;
      const bolus = Number((totalDose * 0.1).toFixed(1));
      const infusion = Number((totalDose * 0.9).toFixed(1));
      setResult({
        bolus: {
          label: 'calculators.actilyse.bolus',
          value: bolus,
          unit: 'mg',
        },
        infusion: {
          label: 'calculators.actilyse.infusion',
          value: infusion,
          unit: 'mg',
        },
        total: {
          label: 'calculators.actilyse.total',
          value: Number(totalDose.toFixed(1)),
          unit: 'mg',
        },
      });
    },
  },
};
