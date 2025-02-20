import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const SOLUTION_CONCENTRATION_CONFIG: FormulaConfig = {
  id: 'solutionConcentration',
  label: 'calculators.solutionConcentration.label',
  parameters: [
    {
      key: 'unit',
      label: 'calculators.unit',
      type: 'select',
      unit: '',
      options: [
        { label: 'units.mg', value: 'mg' },
        { label: 'units.g', value: 'g' },
        { label: 'units.mcg', value: 'mcg' },
      ],
    },
    {
      key: 'substanceAmount',
      label: 'calculators.substanceAmount',
      unit: '',
      type: 'number',
    },
    {
      key: 'solutionVolume',
      label: 'calculators.solutionVolume',
      unit: 'units.ml',
      type: 'number',
    },
  ],
  calculate: ({ substanceAmount, unit, solutionVolume }, setResult) => {
    // Convert the mass into grams based on the selected unit.
    let massInGrams: number;
    switch (unit) {
      case 'mg':
        massInGrams = +substanceAmount / 1000;
        break;
      case 'mcg':
        massInGrams = +substanceAmount / 1000000;
        break;
      case 'g':
      default:
        massInGrams = +substanceAmount;
    }

    // Calculate percent concentration: (mass in g / volume in mL) * 100.
    const concentrationPercent = (+massInGrams / +solutionVolume) * 100;

    setResult({
      concentration: {
        label: 'calculators.concentration',
        value: Number(concentrationPercent.toFixed(2)),
        unit: 'units.pct',
      },
    });
  },
  annotation: 'calculators.solutionConcentration.annotation',
};
