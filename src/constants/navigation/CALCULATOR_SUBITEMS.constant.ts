import { NavigationSubItem } from '@/interfaces/NavigationItem.type';
import { DRUG_CALCULATOR_LINKS } from '@/constants/navigation/DRUG_CALCULATOR_LINKS.constant';
import { FORMULA_CALCULATOR_LINKS } from '@/constants/navigation/FORMULA_CALCULATOR_LINKS.constant';

export const CALCULATOR_SUBITEMS: NavigationSubItem[] = [
  {
    label: 'dashboard.subItems.drug-calculators.title',
    description: 'dashboard.subItems.drug-calculators.description',
    href: '/dashboard/calculators/drug-calculator',
    links: DRUG_CALCULATOR_LINKS,
  },
  {
    label: 'dashboard.subItems.formula-calculators.title',
    description: 'dashboard.subItems.formula-calculators.description',
    href: '/dashboard/calculators/formula-calculator',
    links: FORMULA_CALCULATOR_LINKS,
  },
];
