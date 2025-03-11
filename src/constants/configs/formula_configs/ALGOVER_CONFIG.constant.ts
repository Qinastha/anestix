import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const ALGOVER_CONFIG: FormulaConfig = {
  id: 'algover',
  label: 'algoverIndex.label',
  parameters: [
    {
      key: 'heartRate',
      label: 'heartRate',
      unit: 'bpm',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'systolicBP',
      label: 'systolicBP',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: ({ heartRate, systolicBP }, setResult) => {
    const index = +heartRate / +systolicBP;
    setResult({
      index: {
        label: 'algoverIndex.index',
        value: parseFloat(index.toFixed(1)),
        unit: '',
      },
    });
  },
  annotation: 'algoverIndex.annotation',
};
