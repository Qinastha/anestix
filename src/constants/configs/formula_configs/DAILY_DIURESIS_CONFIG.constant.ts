import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const DAILY_DIURESIS_CONFIG: FormulaConfig = {
  id: 'dailyDiuresis',
  label: 'dailyDiuresis.label',
  parameters: [
    {
      key: 'amount',
      label: 'urineAmount',
      unit: 'ml',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'period',
      label: 'period',
      unit: 'h',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: ({ amount, period, weight }, setResult) => {
    const absoluteHourlyDiuresis = +amount / +period;
    const hourlyDiuresis = +amount / (+period * +weight);
    setResult({
      absoluteDiuresis: {
        label: 'dailyDiuresis.absoluteDiuresis',
        value: parseFloat(absoluteHourlyDiuresis.toFixed(2)),
        unit: 'ml_hr',
      },
      hourlyDiuresis: {
        label: 'dailyDiuresis.hourlyDiuresis',
        value: parseFloat(hourlyDiuresis.toFixed(2)),
        unit: 'ml_kg_hr',
      },
    });
  },
  annotation: 'dailyDiuresis.annotation',
};
