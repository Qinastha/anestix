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
      minValue: 0,
      maxDosage: 1,
      recDosage: 'remifentanyl.recDosageInduction',
      defaultValue: 0.5,
    },
    {
      key: 'infusionDosePerKg',
      label: 'infusionDosePerKg',
      unit: 'mcg_kg_min',
      type: 'number',
      minValue: 0,
      maxDosage: 2,
      recDosage: 'remifentanyl.recDosageInfusion',
      defaultValue: 0.1,
    },
    {
      key: 'drugAmount',
      label: 'drugAmount',
      unit: 'mg',
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
    { weight, inductionDose, infusionDosePerKg, drugAmount, totalVolume },
    setResult
  ) => {
    // Calculate the final concentration in mg/ml
    const concentration = +drugAmount / +totalVolume;

    const inductionDoseRes = +weight * +inductionDose;
    const inductionVolume = inductionDoseRes / 1000 / concentration;

    const infusionRate = +weight * +infusionDosePerKg;
    const infusionHourlyRateInMG = (infusionRate * 60) / 1000;

    const infusionRateMg = infusionRate / 1000;

    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerMin = infusionRateMg / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      inductionMCG: {
        label: 'induction',
        value: Number(inductionDoseRes.toFixed(1)),
        unit: 'mcg',
      },
      inductionML: {
        label: 'induction',
        value: Number(inductionVolume.toFixed(1)),
        unit: 'ml',
      },
      infusion: {
        label: 'infusion',
        value: Number(infusionHourlyRateInMG.toFixed(2)),
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
  annotation: 'remifentanyl.annotation',
};
