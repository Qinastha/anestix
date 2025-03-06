import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const MAP_CONFIG: FormulaConfig = {
  id: 'map',
  label: 'calculators.map.label',
  parameters: [
    {
      key: 'sysBP',
      label: 'calculators.sysBP',
      unit: 'units.mm_hg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'diaBP',
      label: 'calculators.diaBP',
      unit: 'units.mm_hg',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: ({ sysBP, diaBP }, setResult) => {
    const map = (1 / 3) * +sysBP + (2 / 3) * +diaBP;
    setResult({
      map: {
        label: 'calculators.map.result',
        value: parseFloat(map.toFixed(0)),
        unit: 'units.mm_hg',
      },
    });
  },
  annotation: 'calculators.map.annotation',
};
