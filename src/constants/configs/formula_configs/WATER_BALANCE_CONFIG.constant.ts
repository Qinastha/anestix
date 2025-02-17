import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const WATER_BALANCE_CONFIG: FormulaConfig = {
  id: 'waterBalance',
  label: 'calculators.dailyWaterBalance.label',
  parameters: [
    {
      key: 'waterIntake',
      label: 'calculators.dailyWaterBalance.parameters.waterIntake',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'foodIntake',
      label: 'calculators.dailyWaterBalance.parameters.foodIntake',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'infusionIntake',
      label: 'calculators.dailyWaterBalance.parameters.infusionIntake',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'urineOutput',
      label: 'calculators.dailyWaterBalance.parameters.urineOutput',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'fecesOutput',
      label: 'calculators.dailyWaterBalance.parameters.fecesOutput',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'extraOutput',
      label: 'calculators.dailyWaterBalance.parameters.extraOutput',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'weight',
      label: 'calculators.dailyWaterBalance.parameters.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'hyperthermia',
      label: 'calculators.dailyWaterBalance.parameters.hyperthermia',
      unit: '',
      type: 'boolean',
    },
  ],
  calculate: (
    {
      waterIntake,
      foodIntake,
      infusionIntake,
      urineOutput,
      fecesOutput,
      extraOutput,
      weight,
      hyperthermia,
    },
    setResult
  ) => {
    const perspirationLoss = hyperthermia ? 15 * +weight : 14.5 * +weight;
    const totalIntake = +waterIntake + +foodIntake + +infusionIntake;
    const totalOutput =
      +urineOutput + +fecesOutput + +extraOutput + perspirationLoss;
    const balance = totalIntake - totalOutput;

    setResult({
      balance: {
        label: 'calculators.dailyWaterBalance.result.balance',
        value: parseFloat(balance.toFixed(1)),
        unit: 'units.ml',
      },
    });
  },
  annotation: 'calculators.dailyWaterBalance.annotation',
};
