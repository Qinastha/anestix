import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NORADRENALINE_CONFIG: DrugCalculatorConfig = {
  id: 'noradrenaline',
  label: 'noradrenaline.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'dosePerKg',
      unit: 'mcg_kg_min',
      type: 'number',
      minValue: 0,
      maxDosage: 0.5,
      recDosage: 'noradrenaline.recDosage',
      defaultValue: 0.05,
    },
    {
      key: 'drugVolume',
      label: 'drugVolume',
      unit: 'ml',
      type: 'select',
      options: [
        { label: 'noradrenaline.drug_var1', value: 4 },
        { label: 'noradrenaline.drug_var2', value: 8 },
      ],
    },
    {
      key: 'totalVolume',
      label: 'totalVolume',
      unit: 'ml',
      type: 'number',
      minValue: 0,
      defaultValue: 50,
    },
  ],
  calculate: ({ weight, dosePerKg, drugVolume, totalVolume }, setResult) => {
    const infusionRate = +weight * +dosePerKg;
    const infusionRateMg = infusionRate / 1000;
    // Assume the vial contains 2 mg per ml (i.e. 8 mg for a 4 ml vial)
    const drugAmountMg = +drugVolume * 2;
    // Calculate the final concentration in mg/ml
    const concentration = +drugAmountMg / +totalVolume;
    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerMin = infusionRateMg / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      infusion: {
        label: 'infusion',
        value: Number(infusionRate.toFixed(2)),
        unit: 'mcg_min',
      },
      volumePerMin: {
        label: 'ivPerMin',
        value: Number(volumePerMin.toFixed(2)),
        unit: 'ml_min',
      },
      volumePerHr: {
        label: 'ivPerHr',
        value: Number(volumePerHr.toFixed(2)),
        unit: 'ml_hr',
      },
    });
  },
  annotation: 'noradrenaline.annotation',
};
