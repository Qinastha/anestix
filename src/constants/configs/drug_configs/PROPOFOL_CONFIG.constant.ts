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
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mg_kg',
      type: 'number',
      optional: true,
      defaultValue: 2,
    },
    {
      key: 'infusionDosePerKg',
      label: 'calculators.infusionDosePerKg',
      unit: 'units.mg_kg_hr',
      type: 'number',
      optional: true,
      defaultValue: 5,
    },
  ],
  calculate: ({ weight, dosePerKg, infusionDosePerKg }, setResult) => {
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 2;
    const infusionDose =
      typeof infusionDosePerKg === 'number' && infusionDosePerKg > 0
        ? infusionDosePerKg
        : 5;

    // For induction bolus range ~1.5–2.5 mg/kg => pick ~2 mg/kg
    const totalBolus = weight * dose;

    //4 - 12,5 мг/кг/час – поддержание анестезии
    const infusionMgPerHour = weight * infusionDose;

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
