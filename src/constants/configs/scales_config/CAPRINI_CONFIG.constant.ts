import { ScaleConfig } from '@/interfaces/Scale.type';

export const CAPRINI_CONFIG: ScaleConfig = {
  id: 'caprini',
  name: 'scale.caprini.name',
  description: 'scale.caprini.description',
  criteria: [
    // 1. Age, years
    {
      id: 'age',
      label: 'scale.caprini.criteria.age.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.age.option0' }, // ≤40
        { value: 1, description: 'scale.caprini.criteria.age.option1' }, // 41–60
        { value: 2, description: 'scale.caprini.criteria.age.option2' }, // 61–74
        { value: 3, description: 'scale.caprini.criteria.age.option3' }, // ≥75
      ],
    },
    // 2. Sex (no points assigned)
    // {
    //   id: 'sex',
    //   label: 'scale.caprini.criteria.sex.label',
    //   options: [
    //     { value: 0, description: 'scale.caprini.criteria.sex.male' },
    //     { value: 0, description: 'scale.caprini.criteria.sex.female' },
    //   ],
    // },
    // 3. Type of Surgery
    {
      id: 'surgery',
      label: 'scale.caprini.criteria.surgery.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.surgery.none' },
        { value: 1, description: 'scale.caprini.criteria.surgery.minor' },
        { value: 2, description: 'scale.caprini.criteria.surgery.major' },
        {
          value: 5,
          description: 'scale.caprini.criteria.surgery.arthroplasty',
        },
      ],
    },
    // 4. Recent (<1 month) Major Surgery
    {
      id: 'recentMajorSurgery',
      label: 'scale.caprini.criteria.recentMajorSurgery.label',
      options: [
        {
          value: 0,
          description: 'scale.caprini.criteria.recentMajorSurgery.no',
        },
        {
          value: 1,
          description: 'scale.caprini.criteria.recentMajorSurgery.yes',
        },
      ],
    },
    // 5. Congestive Heart Failure (CHF)
    {
      id: 'chf',
      label: 'scale.caprini.criteria.chf.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.chf.no' },
        { value: 1, description: 'scale.caprini.criteria.chf.yes' },
      ],
    },
    // 6. Sepsis
    {
      id: 'sepsis',
      label: 'scale.caprini.criteria.sepsis.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.sepsis.no' },
        { value: 1, description: 'scale.caprini.criteria.sepsis.yes' },
      ],
    },
    // 7. Pneumonia
    {
      id: 'pneumonia',
      label: 'scale.caprini.criteria.pneumonia.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.pneumonia.no' },
        { value: 1, description: 'scale.caprini.criteria.pneumonia.yes' },
      ],
    },
    // 8. Immobilizing Plaster Cast
    {
      id: 'plasterCast',
      label: 'scale.caprini.criteria.plasterCast.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.plasterCast.no' },
        { value: 2, description: 'scale.caprini.criteria.plasterCast.yes' },
      ],
    },
    // 9. Hip, Pelvis, or Leg Fracture
    {
      id: 'fracture',
      label: 'scale.caprini.criteria.fracture.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.fracture.no' },
        { value: 5, description: 'scale.caprini.criteria.fracture.yes' },
      ],
    },
    // 10. Stroke
    {
      id: 'stroke',
      label: 'scale.caprini.criteria.stroke.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.stroke.no' },
        { value: 5, description: 'scale.caprini.criteria.stroke.yes' },
      ],
    },
    // 11. Multiple Trauma
    {
      id: 'multipleTrauma',
      label: 'scale.caprini.criteria.multipleTrauma.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.multipleTrauma.no' },
        { value: 5, description: 'scale.caprini.criteria.multipleTrauma.yes' },
      ],
    },
    // 12. Acute Spinal Cord Injury Causing Paralysis
    {
      id: 'spinalInjury',
      label: 'scale.caprini.criteria.spinalInjury.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.spinalInjury.no' },
        { value: 5, description: 'scale.caprini.criteria.spinalInjury.yes' },
      ],
    },
    // 13. Varicose Veins
    {
      id: 'varicose',
      label: 'scale.caprini.criteria.varicose.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.varicose.no' },
        { value: 1, description: 'scale.caprini.criteria.varicose.yes' },
      ],
    },
    // 14. Current Swollen Legs
    {
      id: 'swollenLegs',
      label: 'scale.caprini.criteria.swollenLegs.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.swollenLegs.no' },
        { value: 1, description: 'scale.caprini.criteria.swollenLegs.yes' },
      ],
    },
    // 15. Current Central Venous Access
    {
      id: 'centralAccess',
      label: 'scale.caprini.criteria.centralAccess.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.centralAccess.no' },
        { value: 2, description: 'scale.caprini.criteria.centralAccess.yes' },
      ],
    },
    // 16. History of DVT/PE
    {
      id: 'dvtPe',
      label: 'scale.caprini.criteria.dvtPe.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.dvtPe.no' },
        { value: 3, description: 'scale.caprini.criteria.dvtPe.yes' },
      ],
    },
    // 17. Family History of Thrombosis
    {
      id: 'familyThrombosis',
      label: 'scale.caprini.criteria.familyThrombosis.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.familyThrombosis.no' },
        {
          value: 3,
          description: 'scale.caprini.criteria.familyThrombosis.yes',
        },
      ],
    },
    // 18. Positive Factor V Leiden
    {
      id: 'factorVLeiden',
      label: 'scale.caprini.criteria.factorVLeiden.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.factorVLeiden.no' },
        { value: 3, description: 'scale.caprini.criteria.factorVLeiden.yes' },
      ],
    },
    // 19. Positive Prothrombin 20210A
    {
      id: 'prothrombin',
      label: 'scale.caprini.criteria.prothrombin.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.prothrombin.no' },
        { value: 3, description: 'scale.caprini.criteria.prothrombin.yes' },
      ],
    },
    // 20. Elevated Serum Homocysteine
    {
      id: 'homocysteine',
      label: 'scale.caprini.criteria.homocysteine.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.homocysteine.no' },
        { value: 3, description: 'scale.caprini.criteria.homocysteine.yes' },
      ],
    },
    // 21. Positive Lupus Anticoagulant
    {
      id: 'lupusAnticoagulant',
      label: 'scale.caprini.criteria.lupusAnticoagulant.label',
      options: [
        {
          value: 0,
          description: 'scale.caprini.criteria.lupusAnticoagulant.no',
        },
        {
          value: 3,
          description: 'scale.caprini.criteria.lupusAnticoagulant.yes',
        },
      ],
    },
    // 22. Elevated Anticardiolipin Antibody
    {
      id: 'anticardiolipin',
      label: 'scale.caprini.criteria.anticardiolipin.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.anticardiolipin.no' },
        { value: 3, description: 'scale.caprini.criteria.anticardiolipin.yes' },
      ],
    },
    // 23. Heparin-induced Thrombocytopenia (HIT)
    {
      id: 'hit',
      label: 'scale.caprini.criteria.hit.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.hit.no' },
        { value: 3, description: 'scale.caprini.criteria.hit.yes' },
      ],
    },
    // 24. Other Congenital or Acquired Thrombophilia
    {
      id: 'otherThrombophilia',
      label: 'scale.caprini.criteria.otherThrombophilia.label',
      options: [
        {
          value: 0,
          description: 'scale.caprini.criteria.otherThrombophilia.no',
        },
        {
          value: 3,
          description: 'scale.caprini.criteria.otherThrombophilia.yes',
        },
      ],
    },
    // 25. Mobility
    {
      id: 'mobility',
      label: 'scale.caprini.criteria.mobility.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.mobility.normal' },
        { value: 1, description: 'scale.caprini.criteria.mobility.bedRest' },
        { value: 2, description: 'scale.caprini.criteria.mobility.confined' },
      ],
    },
    // 26. History of Inflammatory Bowel Disease
    {
      id: 'ibd',
      label: 'scale.caprini.criteria.ibd.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.ibd.no' },
        { value: 1, description: 'scale.caprini.criteria.ibd.yes' },
      ],
    },
    // 27. BMI >25
    {
      id: 'bmi',
      label: 'scale.caprini.criteria.bmi.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.bmi.no' },
        { value: 1, description: 'scale.caprini.criteria.bmi.yes' },
      ],
    },
    // 28. Acute Myocardial Infarction (MI)
    {
      id: 'mi',
      label: 'scale.caprini.criteria.mi.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.mi.no' },
        { value: 1, description: 'scale.caprini.criteria.mi.yes' },
      ],
    },
    // 29. Chronic Obstructive Pulmonary Disease (COPD)
    {
      id: 'copd',
      label: 'scale.caprini.criteria.copd.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.copd.no' },
        { value: 1, description: 'scale.caprini.criteria.copd.yes' },
      ],
    },
    // 30. Present or Previous Malignancy
    {
      id: 'malignancy',
      label: 'scale.caprini.criteria.malignancy.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.malignancy.no' },
        { value: 2, description: 'scale.caprini.criteria.malignancy.yes' },
      ],
    },
    // 31. Other Risk Factors
    {
      id: 'otherRiskFactors',
      label: 'scale.caprini.criteria.otherRiskFactors.label',
      options: [
        { value: 0, description: 'scale.caprini.criteria.otherRiskFactors.no' },
        {
          value: 1,
          description: 'scale.caprini.criteria.otherRiskFactors.yes',
        },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'scale.caprini.result.lowest' },
    { min: 1, max: 2, summaryText: 'scale.caprini.result.low' },
    { min: 3, max: 4, summaryText: 'scale.caprini.result.moderate' },
    { min: 5, max: 6, summaryText: 'scale.caprini.result.high' },
    { min: 7, max: 8, summaryText: 'scale.caprini.result.high2' },
    { min: 9, max: 99, summaryText: 'scale.caprini.result.highest' },
  ],
};
