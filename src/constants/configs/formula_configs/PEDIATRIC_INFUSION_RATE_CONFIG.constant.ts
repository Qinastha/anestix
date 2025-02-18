import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const PEDIATRIC_INFUSION_RATE_CONFIG: FormulaConfig = {
  id: 'pediatricInfusion',
  label: 'calculators.pediatricInfusion.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mcg_kg_min',
      type: 'number',
    },
    {
      key: 'drugConcentration',
      label: 'calculators.drugConcentration',
      unit: 'units.pct',
      type: 'number',
    },
    {
      key: 'totalVolume',
      label: 'calculators.totalVolume',
      unit: 'units.ml',
      type: 'select',
      options: [
        { label: '20 ml', value: 20 },
        { label: '10 ml', value: 10 },
        { label: '50 ml', value: 50 },
        { label: '100 ml', value: 100 },
        { label: '200 ml', value: 200 },
      ],
    },
  ],
  calculate: (
    { weight, dosePerKg, drugConcentration, totalVolume },
    setResult
  ) => {
    /**
     * Формула расчёта:
     *
     * Скорость инфузии (мл/ч) =
     *   (масса (кг) × 60 × доза (мкг/кг/мин) / (концентрация препарата (%) × 10000)) × общий объём после разведения (мл)
     *
     * Пояснения:
     * 1. Масса (в кг) умножается на дозу (в мкг/кг/мин) и на 60 (чтобы получить мкг/ч).
     * 2. Концентрация препарата указывается в процентах. При 1% растворе:
     *      1% = 1 г/100 мл = 1000 мг/100 мл = 10 мг/мл = 10000 мкг/мл.
     *    Поэтому делим на (концентрация × 10000), чтобы получить объём чистого препарата (мл/ч).
     * 3. Умножая на общий объём после разведения, получаем скорость инфузии разведённого раствора (мл/ч).
     */

    // Расчёт общей дозы в мкг/ч:
    const totalDoseMcgPerHour = +weight * +dosePerKg * 60;

    // Определяем объём чистого препарата (мл/ч):
    const pureInfusionMlPerHour =
      totalDoseMcgPerHour / (+drugConcentration * 10000);

    // Итоговая скорость инфузии разведённого раствора:
    const infusionRateMlPerHour = pureInfusionMlPerHour * +totalVolume;

    setResult({
      infusionRate: {
        label: 'calculators.ivPerHr',
        value: Number(infusionRateMlPerHour.toFixed(2)),
        unit: 'units.ml_hr',
      },
    });
  },
  annotation: 'calculators.pediatricInfusion.annotation',
};
