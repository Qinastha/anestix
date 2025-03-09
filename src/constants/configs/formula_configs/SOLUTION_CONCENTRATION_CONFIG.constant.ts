import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const SOLUTION_CONCENTRATION_CONFIG: FormulaConfig = {
  id: 'solutionConcentration',
  label: 'calculators.solutionConcentration.label',
  parameters: [
    {
      key: 'substanceAmount',
      label: 'calculators.substanceAmount',
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        { label: 'units.mg', value: 'units.mg', conversionFactor: 0.001 },
        { label: 'units.g', value: 'units.g', conversionFactor: 1 },
        { label: 'units.mcg', value: 'units.mcg', conversionFactor: 0.000001 },
      ],
    },
    {
      key: 'solutionVolume',
      label: 'calculators.solutionVolume',
      unit: 'units.ml',
      type: 'number',
      minValue: 0,
    },
  ],
  calculate: (
    { substanceAmount, substanceAmount_unit, solutionVolume },
    setResult
  ) => {
    const option = SOLUTION_CONCENTRATION_CONFIG.parameters[0].options?.find(
      (o) => o.value === substanceAmount_unit
    );
    const conversionFactor = option?.conversionFactor || 1;
    const massInGrams = +substanceAmount * conversionFactor;

    // Calculate percent concentration: (mass in g / volume in mL) * 100.
    const concentrationPercent = (massInGrams / +solutionVolume) * 100;

    setResult({
      concentration: {
        label: 'calculators.concentration',
        value: Number(concentrationPercent.toFixed(3)),
        unit: 'units.pct',
      },
    });
  },
  annotation: 'calculators.solutionConcentration.annotation',
};
