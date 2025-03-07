import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const DOPAMINE_CONFIG: DrugCalculatorConfig = {
  id: 'dopamine',
  label: 'calculators.dopamine.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mcg_kg_min',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 5,
      defaultValue: 2,
    },
    {
      key: 'drugAmountInMl',
      label: 'calculators.drugAmountInMl',
      unit: 'units.mg_ml',
      type: 'select',
      options: [
        { label: '40 mg', value: 40 },
        { label: '5 mg', value: 5 },
      ],
    },
    {
      key: 'drugVolume',
      label: 'calculators.drugVolume',
      unit: 'units.ml',
      type: 'number',
      optional: true,
      minValue: 0,
      defaultValue: 5,
    },
    {
      key: 'totalVolume',
      label: 'calculators.totalVolume',
      unit: 'units.ml',
      type: 'number',
      optional: true,
      minValue: 0,
      defaultValue: 500,
    },
  ],
  calculate: (
    { weight, dosePerKg, drugAmountInMl, drugVolume, totalVolume },
    setResult
  ) => {
    // Use provided values or fall back to defaults.
    const mcgDose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 2;
    const mgDose = mcgDose / 1000;
    const ampVolume =
      typeof drugVolume === 'number' && drugVolume > 0 ? drugVolume : 5;
    const totalVol =
      typeof totalVolume === 'number' && totalVolume > 0 ? totalVolume : 500;

    // Calculate the infusion rate in mg/min.
    const infusionRateMgMin = +weight * mgDose;

    // Calculate the total drug amount in the ampule (mg).
    const totalDrugMg = ampVolume * +drugAmountInMl;

    // Determine the final concentration (mg/ml) after dilution.
    const concentration = totalDrugMg / totalVol;

    // Calculate the pump rate: volume to infuse per minute and per hour.
    const volumePerMin = infusionRateMgMin / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRateMgMin.toFixed(3)),
        unit: 'units.mg_per_min',
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
  annotation: 'calculators.dopamine.annotation',
};
