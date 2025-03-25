import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const ANION_GAP_CONFIG: FormulaConfig = {
  id: 'anionGap',
  label: 'anionGap.label',
  parameters: [
    {
      key: 'sodiumConcentration',
      label: 'sodiumLevel',
      unit: 'mmol_l',
      type: 'number',
      minValue: 120,
      maxValue: 160,
    },
    {
      key: 'chlorideConcentration',
      label: 'chlorideLevel',
      unit: 'mmol_l',
      type: 'number',
      minValue: 85,
      maxValue: 115,
    },
    {
      key: 'bicarbonateConcentration',
      label: 'bicarbonateLevel',
      unit: 'mmol_l',
      type: 'number',
      minValue: 10,
      maxValue: 40,
    },
    {
      key: 'albuminConcentration',
      label: 'albuminLevel',
      unit: 'g_l',
      type: 'number',
      minValue: 20,
      maxValue: 70,
    },
  ],
  calculate: (
    {
      sodiumConcentration,
      chlorideConcentration,
      bicarbonateConcentration,
      albuminConcentration,
    },
    setResult
  ) => {
    const albuminInGdL = +albuminConcentration / 10; // Convert g/L to g/dL
    const anionGap =
      +sodiumConcentration -
      (+chlorideConcentration + +bicarbonateConcentration);
    const albuminCorrectedAnionGap = anionGap + 2.5 * (4 - albuminInGdL);
    const deltaGap = anionGap - 12;
    const albuminCorrectedDeltaGap = albuminCorrectedAnionGap - 12;
    const denominator = 24 - +bicarbonateConcentration;
    const deltaRatio =
      anionGap > 12 && denominator !== 0 ? deltaGap / denominator : 0;
    const albuminCorrectedDeltaRatio =
      anionGap > 12 && denominator !== 0
        ? albuminCorrectedDeltaGap / denominator
        : 0;
    const safeDeltaRatio = Number.isFinite(deltaRatio) ? deltaRatio : 0;
    const safeAlbuminCorrectedDeltaRatio = Number.isFinite(
      albuminCorrectedDeltaRatio
    )
      ? albuminCorrectedDeltaRatio
      : 0;

    setResult({
      anionGap: {
        label: 'anionGap.anionGap',
        value: anionGap,
        unit: 'mmol_l',
      },
      albuminCorrectedAnionGap: {
        label: 'anionGap.albuminAnionGap',
        value: albuminCorrectedAnionGap,
        unit: 'mmol_l',
      },
      deltaGap: {
        label: 'anionGap.deltaGap',
        value: deltaGap,
        unit: 'mmol_l',
      },
      albuminCorrectedDeltaGap: {
        label: 'anionGap.albuminDeltaGap',
        value: albuminCorrectedDeltaGap,
        unit: 'mmol_l',
      },
      deltaRatio: {
        label: 'anionGap.deltaRatio',
        value: Number(safeDeltaRatio.toFixed(2)),
        unit: '',
      },
      albuminCorrectedDeltaRatio: {
        label: 'anionGap.albuminDeltaRatio',
        value: Number(safeAlbuminCorrectedDeltaRatio.toFixed(2)),
        unit: '',
      },
    });
  },
  annotation: 'anionGap.annotation',
};
