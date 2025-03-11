import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const PLASMA_EXCHANGE_CONFIG: FormulaConfig = {
  id: 'plasmaExchange',
  label: 'plasmaExchange.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'hematocrit',
      label: 'hematocrit',
      unit: 'pct',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'sex',
      label: 'sex',
      unit: '',
      type: 'select',
      options: [
        {
          label: 'male',
          value: 'male',
        },
        {
          label: 'female',
          value: 'female',
        },
      ],
    },
    {
      key: 'removedPercentage',
      label: 'removedPercentage',
      unit: 'pct',
      type: 'number',
      defaultValue: 30,
      minValue: 0,
    },
  ],
  calculate: ({ weight, hematocrit, removedPercentage, sex }, setResult) => {
    const bloodVolumeCoefficient = sex === 'male' ? 70 : 65;

    const totalBloodVolume = +weight * bloodVolumeCoefficient;

    const plasmaVolume = totalBloodVolume * ((100 - +hematocrit) / 100);

    const removedPlasmaVolume =
      plasmaVolume * (+removedPercentage / 100) * 1.05;

    setResult({
      totalBloodVolume: {
        label: 'plasmaExchange.totalBloodVolume',
        value: parseFloat(totalBloodVolume.toFixed(0)),
        unit: 'ml',
      },
      plasmaVolume: {
        label: 'plasmaExchange.plasmaVolume',
        value: parseFloat(plasmaVolume.toFixed(0)),
        unit: 'ml',
      },
      removedPlasmaVolume: {
        label: 'plasmaExchange.removedPlasmaVolume',
        value: parseFloat(removedPlasmaVolume.toFixed(0)),
        unit: 'ml',
      },
    });
  },
  annotation: 'plasmaExchange.annotation',
};
