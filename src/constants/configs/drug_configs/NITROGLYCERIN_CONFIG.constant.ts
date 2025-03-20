import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NITROGLYCERIN_CONFIG: DrugCalculatorConfig = {
  id: 'nitroglycerin',
  label: 'nitroglycerin.label',
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
      maxDosage: 3,
      recDosage: 'nitroglycerin.recDosage',
      defaultValue: 0.1,
    },
    {
      key: 'drugAmountInMl',
      label: 'drugAmountInMl',
      unit: 'mg_ml',
      type: 'select',
      options: [
        { label: 'nitroglycerin.drug_var1', value: 10 },
        { label: 'nitroglycerin.drug_var2', value: 5 },
      ],
    },
    {
      key: 'drugVolume',
      label: 'drugVolume',
      unit: 'ml',
      type: 'number',
      minValue: 0,
      defaultValue: 2,
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
  calculate: (
    { weight, dosePerKg, drugAmountInMl, drugVolume, totalVolume },
    setResult
  ) => {
    const doseInMg = (+weight * +dosePerKg) / 1000;
    const doseInHr = doseInMg * 60;
    const drugAmount = +drugVolume * +drugAmountInMl;
    const concentration = drugAmount / +totalVolume;
    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerHr = doseInHr / concentration;
    setResult({
      dose: {
        label: 'infusion',
        value: Number(doseInHr.toFixed(2)),
        unit: 'mg_hr',
      },
      volumePerHr: {
        label: 'ivPerHr',
        value: Number(volumePerHr.toFixed(2)),
        unit: 'ml_hr',
      },
    });
  },
  annotation: 'nitroglycerin.annotation',
};
