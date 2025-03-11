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
      optional: true,
      minValue: 0,
      maxDosage: 2.5,
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
    const dose = typeof dosePerKg === 'number' && dosePerKg > 0 ? dosePerKg : 2;

    // For induction bolus range ~1.5–2.5 mg/kg => pick ~2 mg/kg
    const totalBolus = +weight * dose;

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
