import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const REMIFENTANYL_CONFIG: DrugCalculatorConfig = {
  id: 'remifentanyl',
  label: 'calculators.remifentanyl.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'inductionDose',
      label: 'calculators.inductionDose',
      unit: 'units.mcg_kg',
      type: 'number',
      optional: true,
      defaultValue: 0.5,
    },
    {
      key: 'infusionDosePerKg',
      label: 'calculators.infusionDosePerKg',
      unit: 'units.mcg_kg_min',
      type: 'number',
      optional: true,
      defaultValue: 0.1,
    },
    {
      key: 'totalVolume',
      label: 'calculators.totalVolume',
      unit: 'units.ml',
      type: 'number',
      optional: true,
      minValue: 0,
      defaultValue: 50,
    },
  ],
  calculate: (
    { weight, inductionDose, infusionDosePerKg, totalVolume },
    setResult
  ) => {
    const inductionD =
      typeof inductionDose === 'number' && inductionDose > 0
        ? inductionDose
        : 0.5;
    const infusionD =
      typeof infusionDosePerKg === 'number' && infusionDosePerKg > 0
        ? infusionDosePerKg
        : 0.1;

    const totalVol =
      typeof totalVolume === 'number' && totalVolume > 0 ? totalVolume : 50;

    //Ремифентанил 2мг в 5 мл
    const drugAmount = 2;
    // Calculate the final concentration in mg/ml
    const concentration = drugAmount / totalVol;

    const inductionDoseRes = +weight * inductionD;
    const inductionVolume = inductionDoseRes / 1000 / concentration;

    const infusionRate = +weight * infusionD;
    const infusionHourlyRate = infusionRate * 60;

    const infusionRateMg = infusionRate / 1000;

    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerMin = infusionRateMg / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      inductionMCG: {
        label: 'calculators.inductionMCG',
        value: Number(inductionDoseRes.toFixed(1)),
        unit: 'units.mcg',
      },
      inductionML: {
        label: 'calculators.inductionML',
        value: Number(inductionVolume.toFixed(1)),
        unit: 'units.ml',
      },
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionHourlyRate.toFixed(2)),
        unit: 'units.mcg_hr',
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
  annotation: 'calculators.remifentanyl.annotation',
};
