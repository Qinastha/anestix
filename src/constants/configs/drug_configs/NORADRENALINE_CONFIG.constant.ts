import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const NORADRENALINE_CONFIG: DrugCalculatorConfig = {
  id: 'noradrenaline',
  label: 'calculators.noradrenaline.label',
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
      maxDosage: 1,
      defaultValue: 0.1,
    },
    {
      key: 'drugVolume',
      label: 'calculators.drugVolume',
      unit: 'units.ml',
      type: 'select',
      options: [
        { label: '4 ml', value: 4 },
        { label: '8 ml', value: 8 },
      ],
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
  calculate: ({ weight, dosePerKg, drugVolume, totalVolume }, setResult) => {
    const dose =
      typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 0.1;
    const totalVol =
      typeof totalVolume === 'number' && totalVolume > 0 ? totalVolume : 50;
    const infusionRate = +weight * dose;
    const infusionRateMg = infusionRate / 1000;
    // Assume the vial contains 2 mg per ml (i.e. 8 mg for a 4 ml vial)
    const drugAmount = +drugVolume * 2;
    // Calculate the final concentration in mg/ml
    const concentration = +drugAmount / totalVol;
    // Calculate the pump rate in ml/min (mg/min divided by mg/ml)
    const volumePerMin = infusionRateMg / concentration;
    const volumePerHr = volumePerMin * 60;

    setResult({
      infusion: {
        label: 'calculators.infusion',
        value: Number(infusionRate.toFixed(2)),
        unit: 'units.mcg_min',
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
  annotation: 'calculators.noradrenaline.annotation',
};
