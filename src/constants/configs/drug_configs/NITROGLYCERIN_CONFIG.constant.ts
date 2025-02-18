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
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mcg_kg_min',
      type: 'number',
      optional: true,
      defaultValue: 2,
    },
    {
      key: 'drugAmountInMl',
      label: 'calculators.drugAmountInMl',
      unit: 'units.mg_ml',
      type: 'select',
      options: [
        { label: '10 mg', value: 10 },
        { label: '1 mg', value: 1 },
        { label: '5 mg', value: 5 },
      ],
    },
    {
      key: 'drugVolume',
      label: 'calculators.drugVolume',
      unit: 'units.ml',
      type: 'number',
      optional: true,
      defaultValue: 2,
    },
    {
      key: 'totalVolume',
      label: 'calculators.totalVolume',
      unit: 'units.ml',
      type: 'number',
      optional: true,
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
        label: 'calculators.infusion',
        value: Number(infusionRateMcgMin.toFixed(1)),
        unit: 'units.mcg_min',
      },
      infusionPerHr: {
        label: 'calculators.infusion',
        value: Number(infusionRateMgHr.toFixed(2)),
        unit: 'units.mg_hr',
      },
      volumePerMin: {
        label: 'calculators.ivPerMin',
        value: Number(volumePerMin.toFixed(2)),
        unit: 'units.ml_min',
      },
      volumePerHr: {
        label: 'calculators.ivPerHr',
        value: Number(volumePerHr.toFixed(2)),
        unit: 'units.ml_hr',
      },
    });
  },
  annotation: 'calculators.nitroglycerin.annotation',
};
