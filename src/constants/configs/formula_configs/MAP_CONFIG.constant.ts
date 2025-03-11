import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const MAP_CONFIG: FormulaConfig = {
  id: 'map',
  label: 'map.label',
  parameters: [
    {
      key: 'sysBP',
      label: 'sysBP',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'diaBP',
      label: 'diaBP',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: ({ sysBP, diaBP }, setResult) => {
    const map = (1 / 3) * +sysBP + (2 / 3) * +diaBP;
    setResult({
      map: {
        label: 'map.result',
        value: parseFloat(map.toFixed(0)),
        unit: 'mm_hg',
      },
    });
  },
  annotation: 'map.annotation',
};
