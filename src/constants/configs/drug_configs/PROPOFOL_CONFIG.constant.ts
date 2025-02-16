import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const PROPOFOL_CONFIG: DrugCalculatorConfig = {
  id: 'propofol',
  label: 'calculators.propofol.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // For induction bolus range ~1.5–2.5 mg/kg => pick ~2 mg/kg
    // (Though also used as infusion, here we treat the main usage as induction.)
    const AVERAGE_DOSE_MG_PER_KG = 2;
    const total = weight * AVERAGE_DOSE_MG_PER_KG;

    setResult({
      bolus: {
        label: 'calculators.bolus',
        value: Number(total.toFixed(2)),
        unit: 'units.mg',
      },
    });
  },
  annotation: 'calculators.propofol.annotation',
};
