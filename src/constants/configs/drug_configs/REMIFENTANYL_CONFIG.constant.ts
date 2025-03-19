import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const REMIFENTANYL_CONFIG: DrugCalculatorConfig = {
  id: 'remifentanyl',
  label: 'remifentanyl.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'inductionDose',
      label: 'inductionDose',
      unit: 'mcg_kg',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 3,
      recDosage: 'remifentanyl.recDosage',
      defaultValue: 1,
    },
    {
      key: 'infusionDosePerKg',
      label: 'infusionDosePerKg',
      unit: 'mcg_kg_min',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 0.5,
      defaultValue: 0.1,
    },
    {
      key: 'totalVolume',
      label: 'totalVolume',
      unit: 'ml',
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
        : 1;
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
        label: 'inductionMCG',
        value: Number(inductionDoseRes.toFixed(1)),
        unit: 'mcg',
      },
      inductionML: {
        label: 'inductionML',
        value: Number(inductionVolume.toFixed(1)),
        unit: 'ml',
      },
      infusion: {
        label: 'infusion',
        value: Number(infusionHourlyRate.toFixed(2)),
        unit: 'mcg_hr',
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
  annotation: 'remifentanyl.annotation',
};
