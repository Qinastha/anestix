import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';
import { MedicalUnits } from '@/types/MedicalUnits.type';

export const NALOXONE_CONFIG: DrugCalculatorConfig = {
  id: 'naloxone',
  label: 'naloxone.label',
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
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      maxDosage: 3,
      recDosage: 'naloxone.recDosage',
      defaultValue: 1.5,
      options: [
        {
          label: 'unit_mcg_kg',
          value: 'mcg_kg',
          conversionFactor: 0.001,
        },
        {
          label: 'unit_mg_kg',
          value: 'mg_kg',
          conversionFactor: 1,
        },
      ],
    },
  ],
  calculate: ({ weight, dosePerKg, dosePerKg_unit }, setResult) => {
    const unit = dosePerKg_unit.toString().split('_')[0] as MedicalUnits;
    const total = +weight * +dosePerKg;

    setResult({
      bolus: {
        label: 'iv',
        value: Number(total.toFixed(2)),
        unit: unit,
      },
    });
  },
  annotation: 'naloxone.annotation',
};
