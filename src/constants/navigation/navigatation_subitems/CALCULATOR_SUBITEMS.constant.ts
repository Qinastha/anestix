import { NavigationSubItem } from '@/interfaces/NavigationItem.type';
import { DRUG_CALCULATOR_LINKS } from '@/constants/navigation/navigation_links/DRUG_CALCULATOR_LINKS.constant';
import { FORMULA_CALCULATOR_LINKS } from '@/constants/navigation/navigation_links/FORMULA_CALCULATOR_LINKS.constant';

export const CALCULATOR_SUBITEMS: NavigationSubItem[] = [
  {
    label: 'drug-calculators.title',
    description: 'drug-calculators.description',
    href: '/dashboard/calculators/drug-calculator',
    links: DRUG_CALCULATOR_LINKS,
  },
  {
    label: 'formula-calculators.title',
    description: 'formula-calculators.description',
    href: '/dashboard/calculators/formula-calculator',
    links: FORMULA_CALCULATOR_LINKS,
  },
];
