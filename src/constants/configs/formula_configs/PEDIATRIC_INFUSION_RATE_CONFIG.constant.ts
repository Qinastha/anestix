import { FormulaConfig } from '@/interfaces/FormulaCalculator.type';

export const PEDIATRIC_INFUSION_RATE_CONFIG: FormulaConfig = {
  id: 'pediatricInfusion',
  label: 'pediatricInfusion.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'dosePerKg',
      unit: 'mcg_kg_min',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'drugConcentration',
      label: 'drugConcentration',
      unit: 'pct',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'totalVolume',
      label: 'totalVolume',
      unit: 'ml',
      type: 'select',
      options: [
        { label: 'volume_20', value: 20 },
        { label: 'volume_10', value: 10 },
        { label: 'volume_50', value: 50 },
        { label: 'volume_100', value: 100 },
        { label: 'volume_200', value: 200 },
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
        label: 'ivPerHr',
        value: Number(infusionRateMlPerHour.toFixed(2)),
        unit: 'ml_hr',
      },
    });
  },
  annotation: 'pediatricInfusion.annotation',
};
