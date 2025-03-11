import { ScoreConfig } from '@/interfaces/Scores.type';

export const CAPRINI_CONFIG: ScoreConfig = {
  id: 'caprini',
  name: 'caprini.name',
  description: 'caprini.description',
  criteria: [
    // 1. Age, years
    {
      id: 'age',
      label: 'caprini.criteria.age.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.age.option0' }, // ≤40
        { value: 1, description: 'caprini.criteria.age.option1' }, // 41–60
        { value: 2, description: 'caprini.criteria.age.option2' }, // 61–74
        { value: 3, description: 'caprini.criteria.age.option3' }, // ≥75
      ],
    },
    // 3. Type of Surgery
    {
      id: 'surgery',
      label: 'caprini.criteria.surgery.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.surgery.none' },
        { value: 1, description: 'caprini.criteria.surgery.minor' },
        { value: 2, description: 'caprini.criteria.surgery.major' },
        { value: 5, description: 'caprini.criteria.surgery.arthroplasty' },
      ],
    },
    // 4. Recent (<1 month) Major Surgery
    {
      id: 'recentMajorSurgery',
      label: 'caprini.criteria.recentMajorSurgery.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.recentMajorSurgery.no' },
        { value: 1, description: 'caprini.criteria.recentMajorSurgery.yes' },
      ],
    },
    // 5. Congestive Heart Failure (CHF)
    {
      id: 'chf',
      label: 'caprini.criteria.chf.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.chf.no' },
        { value: 1, description: 'caprini.criteria.chf.yes' },
      ],
    },
    // 6. Sepsis
    {
      id: 'sepsis',
      label: 'caprini.criteria.sepsis.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.sepsis.no' },
        { value: 1, description: 'caprini.criteria.sepsis.yes' },
      ],
    },
    // 7. Pneumonia
    {
      id: 'pneumonia',
      label: 'caprini.criteria.pneumonia.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.pneumonia.no' },
        { value: 1, description: 'caprini.criteria.pneumonia.yes' },
      ],
    },
    // 8. Immobilizing Plaster Cast
    {
      id: 'plasterCast',
      label: 'caprini.criteria.plasterCast.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.plasterCast.no' },
        { value: 2, description: 'caprini.criteria.plasterCast.yes' },
      ],
    },
    // 9. Hip, Pelvis, or Leg Fracture
    {
      id: 'fracture',
      label: 'caprini.criteria.fracture.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.fracture.no' },
        { value: 5, description: 'caprini.criteria.fracture.yes' },
      ],
    },
    // 10. Stroke
    {
      id: 'stroke',
      label: 'caprini.criteria.stroke.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.stroke.no' },
        { value: 5, description: 'caprini.criteria.stroke.yes' },
      ],
    },
    // 11. Multiple Trauma
    {
      id: 'multipleTrauma',
      label: 'caprini.criteria.multipleTrauma.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.multipleTrauma.no' },
        { value: 5, description: 'caprini.criteria.multipleTrauma.yes' },
      ],
    },
    // 12. Acute Spinal Cord Injury Causing Paralysis
    {
      id: 'spinalInjury',
      label: 'caprini.criteria.spinalInjury.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.spinalInjury.no' },
        { value: 5, description: 'caprini.criteria.spinalInjury.yes' },
      ],
    },
    // 13. Varicose Veins
    {
      id: 'varicose',
      label: 'caprini.criteria.varicose.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.varicose.no' },
        { value: 1, description: 'caprini.criteria.varicose.yes' },
      ],
    },
    // 14. Current Swollen Legs
    {
      id: 'swollenLegs',
      label: 'caprini.criteria.swollenLegs.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.swollenLegs.no' },
        { value: 1, description: 'caprini.criteria.swollenLegs.yes' },
      ],
    },
    // 15. Current Central Venous Access
    {
      id: 'centralAccess',
      label: 'caprini.criteria.centralAccess.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.centralAccess.no' },
        { value: 2, description: 'caprini.criteria.centralAccess.yes' },
      ],
    },
    // 16. History of DVT/PE
    {
      id: 'dvtPe',
      label: 'caprini.criteria.dvtPe.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.dvtPe.no' },
        { value: 3, description: 'caprini.criteria.dvtPe.yes' },
      ],
    },
    // 17. Family History of Thrombosis
    {
      id: 'familyThrombosis',
      label: 'caprini.criteria.familyThrombosis.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.familyThrombosis.no' },
        { value: 3, description: 'caprini.criteria.familyThrombosis.yes' },
      ],
    },
    // 18. Positive Factor V Leiden
    {
      id: 'factorVLeiden',
      label: 'caprini.criteria.factorVLeiden.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.factorVLeiden.no' },
        { value: 3, description: 'caprini.criteria.factorVLeiden.yes' },
      ],
    },
    // 19. Positive Prothrombin 20210A
    {
      id: 'prothrombin',
      label: 'caprini.criteria.prothrombin.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.prothrombin.no' },
        { value: 3, description: 'caprini.criteria.prothrombin.yes' },
      ],
    },
    // 20. Elevated Serum Homocysteine
    {
      id: 'homocysteine',
      label: 'caprini.criteria.homocysteine.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.homocysteine.no' },
        { value: 3, description: 'caprini.criteria.homocysteine.yes' },
      ],
    },
    // 21. Positive Lupus Anticoagulant
    {
      id: 'lupusAnticoagulant',
      label: 'caprini.criteria.lupusAnticoagulant.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.lupusAnticoagulant.no' },
        { value: 3, description: 'caprini.criteria.lupusAnticoagulant.yes' },
      ],
    },
    // 22. Elevated Anticardiolipin Antibody
    {
      id: 'anticardiolipin',
      label: 'caprini.criteria.anticardiolipin.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.anticardiolipin.no' },
        { value: 3, description: 'caprini.criteria.anticardiolipin.yes' },
      ],
    },
    // 23. Heparin-induced Thrombocytopenia (HIT)
    {
      id: 'hit',
      label: 'caprini.criteria.hit.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.hit.no' },
        { value: 3, description: 'caprini.criteria.hit.yes' },
      ],
    },
    // 24. Other Congenital or Acquired Thrombophilia
    {
      id: 'otherThrombophilia',
      label: 'caprini.criteria.otherThrombophilia.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.otherThrombophilia.no' },
        { value: 3, description: 'caprini.criteria.otherThrombophilia.yes' },
      ],
    },
    // 25. Mobility
    {
      id: 'mobility',
      label: 'caprini.criteria.mobility.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.mobility.normal' },
        { value: 1, description: 'caprini.criteria.mobility.bedRest' },
        { value: 2, description: 'caprini.criteria.mobility.confined' },
      ],
    },
    // 26. History of Inflammatory Bowel Disease
    {
      id: 'ibd',
      label: 'caprini.criteria.ibd.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.ibd.no' },
        { value: 1, description: 'caprini.criteria.ibd.yes' },
      ],
    },
    // 27. BMI >25
    {
      id: 'bmi',
      label: 'caprini.criteria.bmi.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.bmi.no' },
        { value: 1, description: 'caprini.criteria.bmi.yes' },
      ],
    },
    // 28. Acute Myocardial Infarction (MI)
    {
      id: 'mi',
      label: 'caprini.criteria.mi.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.mi.no' },
        { value: 1, description: 'caprini.criteria.mi.yes' },
      ],
    },
    // 29. Chronic Obstructive Pulmonary Disease (COPD)
    {
      id: 'copd',
      label: 'caprini.criteria.copd.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.copd.no' },
        { value: 1, description: 'caprini.criteria.copd.yes' },
      ],
    },
    // 30. Present or Previous Malignancy
    {
      id: 'malignancy',
      label: 'caprini.criteria.malignancy.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.malignancy.no' },
        { value: 2, description: 'caprini.criteria.malignancy.yes' },
      ],
    },
    // 31. Other Risk Factors
    {
      id: 'otherRiskFactors',
      label: 'caprini.criteria.otherRiskFactors.label',
      type: 'radio',
      options: [
        { value: 0, description: 'caprini.criteria.otherRiskFactors.no' },
        { value: 1, description: 'caprini.criteria.otherRiskFactors.yes' },
      ],
    },
  ],
  resultThresholds: [
    { min: 0, max: 0, summaryText: 'caprini.result.lowest' },
    { min: 1, max: 2, summaryText: 'caprini.result.low' },
    { min: 3, max: 4, summaryText: 'caprini.result.moderate' },
    { min: 5, max: 6, summaryText: 'caprini.result.high' },
    { min: 7, max: 8, summaryText: 'caprini.result.high2' },
    { min: 9, max: 99, summaryText: 'caprini.result.highest' },
  ],
};
