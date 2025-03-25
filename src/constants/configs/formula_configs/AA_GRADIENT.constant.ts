import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const AA_GRADIENT: FormulaConfig = {
  id: 'a-a-gradient',
  label: 'a-a-gradient.label',
  parameters: [
    {
      key: 'pao2',
      label: 'pao2',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'fio2',
      label: 'fio2',
      unit: 'pct',
      type: 'number',
      minValue: 0,
      maxValue: 100,
    },
    {
      key: 'paco2',
      label: 'paco2',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'age',
      label: 'age',
      unit: 'years',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'atmpressure',
      label: 'atmpressure',
      unit: 'mm_hg',
      type: 'number',
      minValue: 0,
      defaultValue: 760,
    },
    {
      key: 'rq',
      label: 'rq',
      unit: '',
      type: 'number',
      minValue: 0,
      defaultValue: 0.8,
    },
  ],
  calculate: ({ pao2, fio2, paco2, age, atmpressure, rq }, setResult) => {
    //h2O pressure = 47 ( possible calculation:
    //A-a O₂ Gradient = [ (FiO₂) × (Atmospheric Pressure - H₂O Pressure) - (PaCO₂/RQ) ] – PaO₂ from ABG
    const gradient = (+fio2 / 100) * (+atmpressure - 47) - +paco2 / +rq - +pao2;
    //Normal Gradient Estimate = (Age/4) + 4
    const normalGradientEstimate = (+age + 10) / 4;
    setResult({
      gradient: {
        label: 'a-a-gradient.gradient',
        value: Number(gradient.toFixed(1)),
        unit: 'mm_hg',
      },
      ageGradient: {
        label: 'a-a-gradient.ageGradient',
        value: Number(normalGradientEstimate.toFixed(1)),
        unit: 'mm_hg',
      },
    });
  },
  annotation: 'a-a-gradient.annotation',
};
