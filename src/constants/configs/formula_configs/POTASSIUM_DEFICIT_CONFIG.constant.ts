import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const POTASSIUM_DEFICIT_CONFIG: FormulaConfig = {
  id: 'potassiumDeficit',
  label: 'calculators.potassiumDeficit.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'currentPotassiumLvl',
      label: 'calculators.currentPotassiumLvl',
      unit: 'units.mmol_l',
      type: 'number',
      minValue: 0,
      maxValue: 4.5,
    },
    {
      key: 'potassiumChlorideSol',
      label: 'calculators.potassiumChlorideSol',
      unit: 'units.pct',
      type: 'select',
      options: [
        {
          label: '7.5%',
          value: 1,
        },
        {
          label: '4%',
          value: 1.87,
        },
      ],
    },
  ],
  calculate: (
    { weight, currentPotassiumLvl, potassiumChlorideSol },
    setResult
  ) => {
    const POTASSIUM_NORMAL = 4.5;
    const potassiumDeficit =
      +weight * 0.2 * (POTASSIUM_NORMAL - +currentPotassiumLvl);
    const amountOfSolMl = +potassiumChlorideSol * potassiumDeficit;
    const maxAmountDay = 3 * +weight * +potassiumChlorideSol;
    setResult({
      potassiumDeficit: {
        label: 'calculators.potassiumDeficit.result.potassiumDeficit',
        value: parseFloat(potassiumDeficit.toFixed(1)),
        unit: 'units.mmol_l',
      },
      amountOfSolMl: {
        label: 'calculators.potassiumDeficit.result.amountOfSolMl',
        value: parseFloat(amountOfSolMl.toFixed(1)),
        unit: 'units.ml',
      },
      maxAmountDay: {
        label: 'calculators.potassiumDeficit.result.maxAmountDay',
        value: parseFloat(maxAmountDay.toFixed(1)),
        unit: 'units.ml',
      },
    });
  },
  annotation: 'calculators.potassiumDeficit.annotation',
};
