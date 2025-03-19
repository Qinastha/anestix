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
      optional: true,
      minValue: 0,
      maxDosage: 10,
      recDosage: 'nitroglycerin.recDosage',
      defaultValue: 2,
    },
    {
      key: 'drugAmountInMl',
      label: 'drugAmountInMl',
      unit: 'mg_ml',
      type: 'select',
      options: [
        { label: 'nitroglycerin.drug_var1', value: 10 },
        { label: 'nitroglycerin.drug_var2', value: 1 },
        { label: 'nitroglycerin.drug_var3', value: 5 },
      ],
    },
    {
      key: 'drugVolume',
      label: 'drugVolume',
      unit: 'ml',
      type: 'number',
      optional: true,
      minValue: 0,
      defaultValue: 2,
    },
    {
      key: 'totalVolume',
      label: 'totalVolume',
      unit: 'ml',
      type: 'number',
      optional: true,
      minValue: 0,
      defaultValue: 200,
    },
  ],
  calculate: (
    { weight, dosePerKg, drugAmountInMl, drugVolume, totalVolume },
    setResult
  ) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 2;
    const drugVol =
      typeof drugVolume === 'number' && drugVolume > 0 ? drugVolume : 2;
    const totalVol =
      typeof totalVolume === 'number' && totalVolume > 0 ? totalVolume : 200;

    // - Infusion rate in mcg/min:
    const infusionRateMcgMin = +weight * dose;
    // - Infusion rate in mg/hr:
    const infusionRateMgHr = +weight * (dose / 1000) * 60;
    // - Infusion rate in mg/min:
    const infusionRateMgMin = infusionRateMgHr / 60;

    const drugAmount = drugVol * +drugAmountInMl;
    const concentration = drugAmount / totalVol;
    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerMin = infusionRateMgMin / concentration;
    const volumePerHr = volumePerMin * 60;
    setResult({
      infusionPerMun: {
        label: 'infusion',
        value: Number(infusionRateMcgMin.toFixed(1)),
        unit: 'mcg_min',
      },
      infusionPerHr: {
        label: 'infusion',
        value: Number(infusionRateMgHr.toFixed(2)),
        unit: 'mg_hr',
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
  annotation: 'nitroglycerin.annotation',
};
