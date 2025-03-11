import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const POTASSIUM_DEFICIT_CONFIG: FormulaConfig = {
  id: 'potassiumDeficit',
  label: 'potassiumDeficit.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'currentPotassiumLvl',
      label: 'currentPotassiumLvl',
      unit: 'mmol_l',
      type: 'number',
      minValue: 0,
      maxValue: 4.5,
    },
    {
      key: 'potassiumChlorideSol',
      label: 'potassiumChlorideSol',
      unit: 'pct',
      type: 'select',
      options: [
        {
          label: 'potassiumDeficit.drug_opt1',
          value: 1,
        },
        {
          label: 'potassiumDeficit.drug_opt2',
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
        label: 'potassiumDeficit.potassiumDeficit',
        value: parseFloat(potassiumDeficit.toFixed(1)),
        unit: 'mmol_l',
      },
      amountOfSolMl: {
        label: 'potassiumDeficit.amountOfSolMl',
        value: parseFloat(amountOfSolMl.toFixed(1)),
        unit: 'ml',
      },
      maxAmountDay: {
        label: 'potassiumDeficit.maxAmountDay',
        value: parseFloat(maxAmountDay.toFixed(1)),
        unit: 'ml',
      },
    });
  },
  annotation: 'potassiumDeficit.annotation',
};
