import { DrugCalculatorConfig } from '@/interfaces/DrugCalculator.type';

export const PROPOFOL_CONFIG: DrugCalculatorConfig = {
  id: 'propofol',
  label: 'propofol.label',
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
      unit: 'mg_kg',
      type: 'number',
      minValue: 0,
      maxDosage: 2.5,
      recDosage: 'propofol.recDosage',
      defaultValue: 2,
    },
    {
      key: 'tivaDosage',
      label: 'tivaAnestesiaDepth',
      unit: '',
      type: 'select',
      options: [
        { label: 'propofol.tiva.sedation', value: 4 },
        { label: 'propofol.tiva.lightPain', value: 6 },
        { label: 'propofol.tiva.laryngealMask', value: 8 },
        { label: 'propofol.tiva.moderatePain', value: 10 },
        { label: 'propofol.tiva.intubation', value: 12 },
        { label: 'propofol.tiva.strongPain', value: 14 },
        { label: 'propofol.tiva.deep', value: 16 },
      ],
    },
  ],
  calculate: ({ weight, dosePerKg, tivaDosage }, setResult) => {
    const totalBolus = +weight * +dosePerKg;

    // Calculate TIVA rate in ml/h based on a 10 mg/mL concentration
    const tivaDoseMlPerHour = (+weight * +tivaDosage) / 10;

    setResult({
      bolus: {
        label: 'induction',
        value: Number(totalBolus.toFixed(2)),
        unit: 'mg',
      },
      tiva: {
        label: 'tivaDosePerHr',
        value: Number(tivaDoseMlPerHour.toFixed(1)),
        unit: 'ml_hr',
      },
    });
  },
  annotation: 'propofol.annotation',
};
