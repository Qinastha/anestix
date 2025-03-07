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
      minValue: 0,
    },
    {
      key: 'dosePerKg',
      label: 'calculators.dosePerKg',
      unit: 'units.mg_kg',
      type: 'number',
      optional: true,
      minValue: 0,
      maxDosage: 2.5,
      defaultValue: 2,
    },
    {
      key: 'tivaDosage',
      label: 'calculators.tivaAnestesiaDepth',
      unit: '',
      type: 'select',
      options: [
        { label: 'calculators.propofol.tiva.sedation', value: 4 },
        { label: 'calculators.propofol.tiva.lightPain', value: 6 },
        { label: 'calculators.propofol.tiva.laryngealMask', value: 8 },
        { label: 'calculators.propofol.tiva.moderatePain', value: 10 },
        { label: 'calculators.propofol.tiva.intubation', value: 12 },
        { label: 'calculators.propofol.tiva.strongPain', value: 14 },
        { label: 'calculators.propofol.tiva.deep', value: 16 },
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
        label: 'calculators.induction',
        value: Number(totalBolus.toFixed(2)),
        unit: 'units.mg',
      },
      tiva: {
        label: 'calculators.tivaDosePerHr',
        value: Number(tivaDoseMlPerHour.toFixed(1)),
        unit: 'units.ml_hr',
      },
    });
  },
  annotation: 'calculators.propofol.annotation',
};
