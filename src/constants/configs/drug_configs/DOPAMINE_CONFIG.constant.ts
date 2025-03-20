import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DOPAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'dopamine',
  label: 'dopamine.label',
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
      maxDosage: 5,
      recDosage: 'dopamine.recDosage',
      defaultValue: 2,
    },
    {
      key: 'drugAmountInMl',
      label: 'drugAmountInMl',
      unit: 'mg_ml',
      type: 'select',
      options: [
        { label: 'dopamine.drug_var1', value: 40 },
        { label: 'dopamine.drug_var2', value: 5 },
      ],
    },
    {
      key: 'drugVolume',
      label: 'drugVolume',
      unit: 'ml',
      type: 'number',
      minValue: 0,
      defaultValue: 5,
    },
    {
      key: 'totalVolume',
      label: 'totalVolume',
      unit: 'ml',
      type: 'number',
      minValue: 0,
      defaultValue: 500,
    },
  ],
  calculate: (
    { weight, dosePerKg, drugAmountInMl, drugVolume, totalVolume },
    setResult
  ) => {
    const mcgDose = +dosePerKg;
    const mgDose = mcgDose / 1000; // Convert mcg to mg

    // Calculate the infusion rate in mg/min.
    const infusionRateMgMin = +weight * mgDose;

    // Calculate the total drug amount in the ampule (mg).
    const totalDrugMg = +drugVolume * +drugAmountInMl;

    // Determine the final concentration (mg/ml) after dilution.
    const concentration = totalDrugMg / +totalVolume;

    // Calculate the pump rate: volume to infuse per minute and per hour.
    const volumePerMin = infusionRateMgMin / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      infusion: {
        label: 'infusion',
        value: Number(infusionRateMgMin.toFixed(3)),
        unit: 'mg_per_min',
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
  annotation: 'dopamine.annotation',
};
