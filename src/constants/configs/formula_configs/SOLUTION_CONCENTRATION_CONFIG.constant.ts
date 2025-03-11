import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const SOLUTION_CONCENTRATION_CONFIG: FormulaConfig = {
  id: 'solutionConcentration',
  label: 'solutionConcentration.label',
  parameters: [
    {
      key: 'substanceAmount',
      label: 'substanceAmount',
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        {
          label: 'unit_mg',
          value: 'mg',
          conversionFactor: 0.001,
        },
        {
          label: 'unit_g',
          value: 'g',
          conversionFactor: 1,
        },
        {
          label: 'unit_mcg',
          value: 'mcg',
          conversionFactor: 0.000001,
        },
      ],
    },
    {
      key: 'solutionVolume',
      label: 'solutionVolume',
      unit: 'ml',
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
        label: 'concentration',
        value: Number(concentrationPercent.toFixed(3)),
        unit: 'pct',
      },
    });
  },
  annotation: 'solutionConcentration.annotation',
};
