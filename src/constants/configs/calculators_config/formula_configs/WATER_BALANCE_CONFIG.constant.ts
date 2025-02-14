import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const WATER_BALANCE_CONFIG: FormulaConfig = {
  id: 'waterBalance',
  label: 'calculators.dailyWaterBalance.label',
  parameters: [
    {
      key: 'waterIntake',
      label: 'calculators.dailyWaterBalance.parameters.waterIntake',
      type: 'number',
    },
    {
      key: 'foodIntake',
      label: 'calculators.dailyWaterBalance.parameters.foodIntake',
      type: 'number',
    },
    {
      key: 'infusionIntake',
      label: 'calculators.dailyWaterBalance.parameters.infusionIntake',
      type: 'number',
    },
    {
      key: 'urineOutput',
      label: 'calculators.dailyWaterBalance.parameters.urineOutput',
      type: 'number',
    },
    {
      key: 'fecesOutput',
      label: 'calculators.dailyWaterBalance.parameters.fecesOutput',
      type: 'number',
    },
    {
      key: 'extraOutput',
      label: 'calculators.dailyWaterBalance.parameters.extraOutput',
      type: 'number',
    },
    {
      key: 'weight',
      label: 'calculators.dailyWaterBalance.parameters.weight',
      type: 'number',
    },
    {
      key: 'hyperthermia',
      label: 'calculators.dailyWaterBalance.parameters.hyperthermia',
      type: 'boolean',
    },
  ],
  calculate: (params, setResult) => {
    const waterIntake = Number(params.waterIntake) || 0;
    const foodIntake = Number(params.foodIntake) || 0;
    const infusionIntake = Number(params.infusionIntake) || 0;
    const urineOutput = Number(params.urineOutput) || 0;
    const fecesOutput = Number(params.fecesOutput) || 0;
    const extraOutput = Number(params.extraOutput) || 0;
    const weight = Number(params.weight) || 0;
    const hyperthermia = params.hyperthermia as boolean;

    if (isNaN(weight) || weight === 0) return;

    const perspirationLoss = hyperthermia ? 15 * weight : 14.5 * weight;
    const totalIntake = waterIntake + foodIntake + infusionIntake;
    const totalOutput =
      urineOutput + fecesOutput + extraOutput + perspirationLoss;
    const balance = totalIntake - totalOutput;

    setResult({
      balance: {
        label: 'calculators.dailyWaterBalance.result.balance',
        value: parseFloat(balance.toFixed(1)),
        unit: 'calculators.units.ml',
      },
    });
  },
  annotation: 'calculators.dailyWaterBalance.annotation',
};
