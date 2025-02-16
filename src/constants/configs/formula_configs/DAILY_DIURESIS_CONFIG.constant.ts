import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const DAILY_DIURESIS_CONFIG: FormulaConfig = {
  id: 'dailyDiuresis',
  label: 'calculators.dailyDiuresis.label',
  parameters: [
    {
      key: 'amount',
      label: 'calculators.dailyDiuresis.parameters.amount',
      unit: 'units.ml',
      type: 'number',
    },
    {
      key: 'period',
      label: 'calculators.dailyDiuresis.parameters.period',
      unit: 'units.h',
      type: 'number',
    },
    {
      key: 'weight',
      label: 'calculators.dailyDiuresis.parameters.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: (params, setResult) => {
    const amount = Number(params.amount);
    const period = Number(params.period);
    const weight = Number(params.weight);

    if (isNaN(amount) || isNaN(period) || isNaN(weight) || period === 0) return;

    const absoluteHourlyDiuresis = amount / period;
    const hourlyDiuresis = amount / (period * weight);
    setResult({
      absoluteDiuresis: {
        label: 'calculators.dailyDiuresis.result.absoluteDiuresis',
        value: parseFloat(absoluteHourlyDiuresis.toFixed(2)),
        unit: 'units.ml_hr',
      },
      hourlyDiuresis: {
        label: 'calculators.dailyDiuresis.result.hourlyDiuresis',
        value: parseFloat(hourlyDiuresis.toFixed(2)),
        unit: 'units.ml_kg_hr',
      },
    });
  },
  annotation: 'calculators.dailyDiuresis.annotation',
};
