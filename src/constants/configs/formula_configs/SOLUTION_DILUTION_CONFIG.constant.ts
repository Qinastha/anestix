import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const SOLUTION_DILUTION_CONFIG: FormulaConfig = {
  id: 'solutionDilution',
  label: 'calculators.solutionDilution.label',
  parameters: [
    {
      key: 'stockConcentration',
      label: 'calculators.stockConcentration',
      unit: 'units.pct',
      type: 'number',
      minValue: 0,
      maxValue: 100,
    },
    {
      key: 'desiredConcentration',
      label: 'calculators.desiredConcentration',
      unit: 'units.pct',
      type: 'number',
      minValue: 0,
      maxValue: 100,
    },
    {
      key: 'finalVolume',
      label: 'calculators.finalVolume',
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        { label: 'units.ml', value: 'units.ml', conversionFactor: 1 },
        { label: 'units.l', value: 'units.l', conversionFactor: 1000 },
      ],
    },
  ],
  calculate: (
    { stockConcentration, desiredConcentration, finalVolume, finalVolume_unit },
    setResult
  ) => {
    if (desiredConcentration >= stockConcentration) {
      setResult({
        error: {
          label: 'calculators.solutionDilution.error',
          value: NaN,
          unit: '',
        },
      });
      return;
    }
    // Find the conversion factor for the selected volume unit
    const volumeOption = SOLUTION_DILUTION_CONFIG.parameters[2].options?.find(
      (o) => o.value === finalVolume_unit
    );
    const volumeConversionFactor = volumeOption?.conversionFactor || 1;

    // Convert final volume to milliliters
    const finalVolumeInMl = +finalVolume * volumeConversionFactor;

    // Calculate the volume of stock solution needed using the formula:
    // V1 = (C2 * V2) / C1
    // Where:
    // C1 = stock concentration
    // C2 = desired concentration
    // V2 = final volume
    // V1 = volume of stock solution needed
    const stockSolutionVolume =
      (+desiredConcentration * finalVolumeInMl) / +stockConcentration;

    // Calculate the volume of diluent needed
    const diluentVolume = finalVolumeInMl - stockSolutionVolume;

    setResult({
      stockSolutionVolume: {
        label: 'calculators.stockSolutionVolume',
        value: Number(stockSolutionVolume.toFixed(2)),
        unit: 'units.ml',
      },
      diluentVolume: {
        label: 'calculators.diluentVolume',
        value: Number(diluentVolume.toFixed(2)),
        unit: 'units.ml',
      },
    });
  },
  annotation: 'calculators.solutionDilution.annotation',
};
