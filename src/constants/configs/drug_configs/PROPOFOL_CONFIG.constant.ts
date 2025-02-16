import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const PROPOFOL_CONFIG: DrugCalculatorConfig = {
  id: 'propofol',
  label: 'calculators.propofol.label',
  parameters: [
    {
      key: 'weight',
      label: 'calculators.weight',
      unit: 'units.kg',
      type: 'number',
    },
  ],
  calculate: ({ weight }, setResult) => {
    // For induction bolus range ~1.5–2.5 mg/kg => pick ~2 mg/kg
    // (Though also used as infusion, here we treat the main usage as induction.)
    const AVERAGE_DOSE_MG_PER_KG = 2;
    const totalBolus = weight * AVERAGE_DOSE_MG_PER_KG;

    //4 - 12,5 мг/кг/час – поддержание анестезии
    const AVERAGE_MAINTENANCE_DOSE_MG_PER_KG_H = 5;
    const infusionMgPerHour = weight * AVERAGE_MAINTENANCE_DOSE_MG_PER_KG_H;

    // Convert mg/h to ml/h based on propofol's 10 mg/ml concentration
    const infusionMlPerHour = infusionMgPerHour / 10;

    setResult({
      bolus: {
        label: 'calculators.induction',
        value: Number(totalBolus.toFixed(2)),
        unit: 'units.mg',
      },
      mlPerHour: {
        label: 'calculators.infusion',
        value: Number(infusionMlPerHour.toFixed(1)),
        unit: 'units.ml_hr',
      },
      maintenance: {
        label: 'calculators.maintenanceDose',
        value: Number(infusionMgPerHour.toFixed(2)),
        unit: 'units.mg_hr',
      },
    });
  },
  annotation: 'calculators.propofol.annotation',
};
