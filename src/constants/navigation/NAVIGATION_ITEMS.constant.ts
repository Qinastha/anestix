import { Activity, Book, Calculator, TableOfContents } from 'lucide-react';
import { NavigationItem } from '@/interfaces/NavigationItem.type';
import { SCORE_SUBITEMS } from '@/constants/navigation/navigatation_subitems/SCORE_SUBITEMS.constant';
import { CALCULATOR_SUBITEMS } from '@/constants/navigation/navigatation_subitems/CALCULATOR_SUBITEMS.constant';
import { ULTRASOUND_SUBITEMS } from '@/constants/navigation/navigatation_subitems/ULTRASOUND_SUBITEMS.constant';
import { GUIDES_SUBITEMS } from '@/constants/navigation/navigatation_subitems/GUIDES_SUBITEMS.constant';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    icon: TableOfContents,
    title: 'score-list.title',
    description: 'score-list.description',
    href: '/dashboard/score-list',
    subItems: SCORE_SUBITEMS,
  },
  {
    icon: Calculator,
    title: 'calculators.title',
    description: 'calculators.description',
    href: '/dashboard/calculators',
    subItems: CALCULATOR_SUBITEMS,
  },
  {
    icon: Activity,
    title: 'ultrasound.title',
    description: 'ultrasound.description',
    href: '/dashboard/ultrasound',
    subItems: ULTRASOUND_SUBITEMS,
    underDev: true,
  },
  {
    icon: Book,
    title: 'guides.title',
    description: 'guides.description',
    href: '/dashboard/guides',
    subItems: GUIDES_SUBITEMS,
    underDev: true,
  },
];
