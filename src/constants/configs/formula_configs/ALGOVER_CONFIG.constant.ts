import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const ALGOVER_CONFIG: FormulaConfig = {
  id: 'algover',
  label: 'calculators.algoverIndex.label',
  parameters: [
    {
      key: 'heartRate',
      label: 'calculators.algoverIndex.parameters.heartRate',
      unit: 'units.bpm',
      type: 'number',
    },
    {
      key: 'systolicBP',
      label: 'calculators.algoverIndex.parameters.systolicBP',
      unit: 'units.mm_hg',
      type: 'number',
    },
  ],
  calculate: (params, setResult) => {
    const heartRate = Number(params.heartRate);
    const systolicBP = Number(params.systolicBP);

    if (isNaN(heartRate) || isNaN(systolicBP) || systolicBP === 0) return;

    const index = heartRate / systolicBP;
    setResult({
      index: {
        label: 'calculators.algoverIndex.result.index',
        value: parseFloat(index.toFixed(1)),
        unit: '',
      },
    });
  },
  annotation: 'calculators.algoverIndex.annotation',
};
