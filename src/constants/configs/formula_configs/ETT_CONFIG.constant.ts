import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const ETT_CONFIG: FormulaConfig = {
  id: 'ett',
  label: 'ett.label',
  parameters: [
    {
      key: 'age',
      label: 'age',
      unit: 'years',
      type: 'number',
      minValue: 1,
      maxValue: 13,
    },
  ],
  calculate: ({ age }, setResult) => {
    const ETTDepth = +age / 2 + 12;
    const uncuffedETT = +age / 4 + 4;
    const cuffedETT = +age / 4 + 3;
    setResult({
      cuffedETT: {
        label: 'ett.cuffedETT',
        value: parseFloat(cuffedETT.toFixed(0)),
        unit: 'mm',
      },
      uncuffedETT: {
        label: 'ett.uncuffedETT',
        value: parseFloat(uncuffedETT.toFixed(0)),
        unit: 'mm',
      },
      ettDepth: {
        label: 'ett.ettDepth',
        value: parseFloat(ETTDepth.toFixed(0)),
        unit: 'cm',
      },
    });
  },
  annotation: 'ett.annotation',
};
