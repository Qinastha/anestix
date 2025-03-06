import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const BICARBONATE_DEFICIT_CONFIG: FormulaConfig = {
  id: 'bicarbonateDeficit',
  label: 'calculators.bicarbonateDeficit.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'bicarbonateLevel',
      label: 'calculators.bicarbonateLevel',
      // Bicarbonate level in mmol/L.
      // A value lower than 24 indicates a bicarbonate deficit.
      unit: 'units.mmol_l',
      type: 'number',
      minValue: 0,
      maxValue: 24,
    },
  ],
  calculate: ({ weight, bicarbonateLevel }, setResult) => {
    const BICARBONATE_NORMAL = 24;

    // Calculate the bicarbonate deficit in mmol using:
    // Bicarbonate deficit = 0.4 × body weight (kg) × (24 – bicarbonateLevel)
    const bicarbonateDeficit =
      +weight * 0.4 * (BICARBONATE_NORMAL - +bicarbonateLevel);

    // For a 4% sodium bicarbonate solution:
    // 4 g/100 mL equals 0.04 g/mL.
    // Its concentration in mmol/mL = (0.04 g/mL / 84 g/mol) * 1000 ≈ 0.4762 mmol/mL.
    const solutionConcentration = (0.04 / 84) * 1000;
    const solutionVolume = bicarbonateDeficit / solutionConcentration;

    setResult({
      bicarbonateDeficit: {
        label: 'calculators.bicarbonateDeficit.result.bicarbonateDeficit',
        value: parseFloat(bicarbonateDeficit.toFixed(0)),
        unit: 'units.mmol_l',
      },
      solutionVolume: {
        label: 'calculators.bicarbonateDeficit.result.solutionVolume',
        value: parseFloat(solutionVolume.toFixed(1)),
        unit: 'units.ml',
      },
    });
  },
  annotation: 'calculators.bicarbonateDeficit.annotation',
};
