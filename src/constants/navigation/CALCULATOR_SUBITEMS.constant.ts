import { NavigationSubItem } from '@/interfaces/NavigationItem.type';
import { DRUG_CALCULATOR_ITEMS } from '@/constants/navigation/DRUG_CALCULATOR_ITEMS.constant';

export const CALCULATOR_SUBITEMS: NavigationSubItem[] = [
  {
    label: 'dashboard.subItems.drug-calculators.title',
    description: 'dashboard.subItems.drug-calculators.description',
    href: '/dashboard/calculators/drug-calculator',
    links: DRUG_CALCULATOR_ITEMS,
  },
  {
    label: 'dashboard.subItems.formula-calculators.title',
    description: 'dashboard.subItems.formula-calculators.description',
    href: '/dashboard/calculators/formula-calculator',
  },
];
