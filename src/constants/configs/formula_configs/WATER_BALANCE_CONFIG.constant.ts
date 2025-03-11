import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const WATER_BALANCE_CONFIG: FormulaConfig = {
  id: 'waterBalance',
  label: 'dailyWaterBalance.label',
  parameters: [
    {
      key: 'waterIntake',
      label: 'dailyWaterBalance.waterIntake',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'foodIntake',
      label: 'dailyWaterBalance.foodIntake',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'infusionIntake',
      label: 'dailyWaterBalance.infusionIntake',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'urineOutput',
      label: 'dailyWaterBalance.urineOutput',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'fecesOutput',
      label: 'dailyWaterBalance.fecesOutput',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'extraOutput',
      label: 'dailyWaterBalance.extraOutput',
      unit: 'ml',
      type: 'number',
    },
    {
      key: 'weight',
      label: 'dailyWaterBalance.weight',
      unit: 'kg',
      type: 'number',
    },
    {
      key: 'hyperthermia',
      label: 'dailyWaterBalance.hyperthermia',
      unit: '',
      type: 'boolean',
    },
    {
      key: 'mechanicalVentilation',
      label: 'dailyWaterBalance.mechanicalVentilation',
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
      mechanicalVentilation,
    },
    setResult
  ) => {
    const perspirationLoss = hyperthermia ? 15 * +weight : 14.5 * +weight;
    const mechVent = mechanicalVentilation ? 1000 : 0;
    const totalIntake = +waterIntake + +foodIntake + +infusionIntake;
    const totalOutput =
      +urineOutput + +fecesOutput + +extraOutput + perspirationLoss + mechVent;
    const balance = totalIntake - totalOutput;

    setResult({
      balance: {
        label: 'dailyWaterBalance.balance',
        value: parseFloat(balance.toFixed(1)),
        unit: 'ml',
      },
    });
  },
  annotation: 'dailyWaterBalance.annotation',
};
