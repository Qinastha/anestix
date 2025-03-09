import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const ETT_CONFIG: FormulaConfig = {
  id: 'ett',
  label: 'calculators.ett.label',
  parameters: [
    {
      key: 'age',
      label: 'calculators.age',
      unit: 'units.years',
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
        label: 'calculators.ett.result.cuffedETT',
        value: parseFloat(cuffedETT.toFixed(0)),
        unit: 'units.mm',
      },
      uncuffedETT: {
        label: 'calculators.ett.result.uncuffedETT',
        value: parseFloat(uncuffedETT.toFixed(0)),
        unit: 'units.mm',
      },
      ettDepth: {
        label: 'calculators.ett.result.ettDepth',
        value: parseFloat(ETTDepth.toFixed(0)),
        unit: 'units.cm',
      },
    });
  },
  annotation: 'calculators.ett.annotation',
};
