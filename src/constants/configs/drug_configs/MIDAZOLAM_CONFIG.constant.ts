import {
  DrugCalculatorConfig,
  DrugResult,
} from '@/interfaces/DrugCalculator.type';

export const MIDAZOLAM_CONFIG: DrugCalculatorConfig = {
  id: 'midazolam',
  label: 'midazolam.label',
  parameters: [
    {
      key: 'weight',
      label: 'weight',
      unit: 'kg',
      type: 'number',
      minValue: 0,
    },
    {
      key: 'age',
      label: 'age',
      unit: '',
      type: 'numberInUnits',
      minValue: 0,
      options: [
        { label: 'unit_years', value: 'years', conversionFactor: 1 },
        { label: 'unit_months', value: 'months', conversionFactor: 1 / 12 },
      ],
    },
  ],
  calculate: ({ weight, age, age_unit }, setResult) => {
    let result: DrugResult;
    const option = MIDAZOLAM_CONFIG.parameters
      .find((p) => p.key === 'age')
      ?.options?.find((o) => o.value === age_unit);
    const conversionFactor = option?.conversionFactor || 1;
    const ageInYears = +age * conversionFactor;

    // Pediatric Dosages
    if (ageInYears <= 12) {
      const sedationOralDose = Math.min(+weight * 0.5, 20);
      const sedationIMDose = +weight * 0.1;
      const statusEpilepticusBolusDose = +weight * 0.15;
      const statusEpilepticusInfusionDose = Math.min(+weight * 1, 5);

      let intranasalDose, sedationIVDose: number;
      if (ageInYears < 0.5) {
        intranasalDose = +weight * 0.2;
        sedationIVDose = +weight * 0.05;
      } else if (+age >= 0.5 && ageInYears < 6) {
        intranasalDose = +weight * 0.25;
        sedationIVDose = Math.min(+weight * 0.075, 6);
      } else {
        intranasalDose = +weight * 0.25;
        sedationIVDose = Math.min(+weight * 0.0375, 10);
      }

      result = {
        oral: {
          label: 'oralSedation',
          value: Number(sedationOralDose.toFixed(1)),
          unit: 'mg',
        },
        im: {
          label: 'imSedation',
          value: Number(sedationIMDose.toFixed(1)),
          unit: 'mg',
        },
        iv: {
          label: 'ivSedation',
          value: Number(sedationIVDose.toFixed(1)),
          unit: 'mg',
        },
        intranasal: {
          label: 'intranasal',
          value: Number(intranasalDose.toFixed(1)),
          unit: 'mg',
        },
        epiStatusBolus: {
          label: 'eplilepticBolus',
          value: Number(statusEpilepticusBolusDose.toFixed(1)),
          unit: 'mg',
        },
        epiStatusInfusion: {
          label: 'eplilepticInfusion',
          value: Number(statusEpilepticusInfusionDose.toFixed(3)),
          unit: 'mcg_min',
        },
      };
    } else {
      // Adult Dosages
      const inductionIVDose = +weight * 0.2;
      const premedicationIMDose = +weight * 0.07;
      const sedationIVDose = +weight * 0.05;

      result = {
        ivInduction: {
          label: 'ivInduction',
          value: Number(inductionIVDose.toFixed(1)),
          unit: 'mg',
        },
        imPremedication: {
          label: 'imPremed',
          value: Number(premedicationIMDose.toFixed(1)),
          unit: 'mg',
        },
        ivSedation: {
          label: 'ivSedation',
          value: Number(sedationIVDose.toFixed(1)),
          unit: 'mg',
        },
      };
    }

    setResult(result);
  },
  annotation: 'midazolam.annotation',
};
