import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DEXON_CONFIG: DrugCalculatorConfig = {
  id: 'dexon',
  label: 'calculators.dexon.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // Dexamethasone ~4–8 mg typical => ~0.06–0.11 mg/kg for 70 kg => pick 0.08 mg/kg
    const AVERAGE_DOSE_MG_PER_KG = 0.08;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.bolus',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.dexon.annotation',
};
