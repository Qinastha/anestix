import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const PLASMA_EXCHANGE_CONFIG: FormulaConfig = {
  id: 'plasmaExchange',
  label: 'calculators.plasmaExchange.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.plasmaExchange.parameters.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'hematocrit',
      label: 'calculators.plasmaExchange.parameters.hematocrit',
      unit: 'units.pct',
      type: 'number',
    },
    {
      key: 'sex',
      label: 'calculators.plasmaExchange.parameters.sex',
      unit: '',
      type: 'select',
      options: [
        {
          label: 'calculators.plasmaExchange.options.sex.male',
          value: 'male',
        },
        {
          label: 'calculators.plasmaExchange.options.sex.female',
          value: 'female',
        },
      ],
    },
    {
      key: 'removedPercentage',
      label: 'calculators.plasmaExchange.parameters.removedPercentage',
      unit: 'units.pct',
      type: 'number',
    },
  ],
  calculate: (params, setResult) => {
    const weight = Number(params.weight);
    const hematocrit = Number(params.hematocrit);
    const sex = params.sex as 'male' | 'female';
    const removalFraction = Number(params.removedPercentage) / 100;

    if (isNaN(weight) || isNaN(hematocrit) || isNaN(removalFraction)) return;

    const bloodVolumeCoefficient = sex === 'male' ? 70 : 65;

    const totalBloodVolume = weight * bloodVolumeCoefficient;

    const plasmaVolume = totalBloodVolume * ((100 - hematocrit) / 100);

    const removedPlasmaVolume = plasmaVolume * removalFraction * 1.05;

    setResult({
      totalBloodVolume: {
        label: 'calculators.plasmaExchange.result.totalBloodVolume',
        value: parseFloat(totalBloodVolume.toFixed(0)),
        unit: 'units.ml',
      },
      plasmaVolume: {
        label: 'calculators.plasmaExchange.result.plasmaVolume',
        value: parseFloat(plasmaVolume.toFixed(0)),
        unit: 'units.ml',
      },
      removedPlasmaVolume: {
        label: 'calculators.plasmaExchange.result.removedPlasmaVolume',
        value: parseFloat(removedPlasmaVolume.toFixed(0)),
        unit: 'units.ml',
      },
    });
  },
  annotation: 'calculators.plasmaExchange.annotation',
};
