import {
  Activity,
  Book,
  Calculator,
  Home,
  TableOfContents,
} from 'lucide-react';
import { NavigationItem } from '@/interfaces/NavigationItem.type';
import { SCORE_SUBITEMS } from '@/constants/navigation/navigatation_subitems/SCORE_SUBITEMS.constant';
import { CALCULATOR_SUBITEMS } from '@/constants/navigation/navigatation_subitems/CALCULATOR_SUBITEMS.constant';
import { ULTRASOUND_SUBITEMS } from '@/constants/navigation/navigatation_subitems/ULTRASOUND_SUBITEMS.constant';
import { SKILLS_SUBITEMS } from '@/constants/navigation/navigatation_subitems/SKILLS_SUBITEMS.constant';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: Home, description: '', title: 'dashboard.home', href: '/dashboard' },
  {
    icon: TableOfContents,
    title: 'dashboard.score-list.title',
    description: 'dashboard.score-list.description',
    href: '/dashboard/scale-list',
    subItems: SCORE_SUBITEMS,
  },
  {
    icon: Calculator,
    title: 'dashboard.calculators.title',
    description: 'dashboard.calculators.description',
    href: '/dashboard/calculators',
    subItems: CALCULATOR_SUBITEMS,
  },
  {
    icon: Activity,
    title: 'dashboard.ultrasound.title',
    description: 'dashboard.ultrasound.description',
    href: '/dashboard/ultrasound',
    subItems: ULTRASOUND_SUBITEMS,
  },
  {
    icon: Book,
    title: 'dashboard.skills.title',
    description: 'dashboard.skills.description',
    href: '/dashboard/skills',
    subItems: SKILLS_SUBITEMS,
  },
];
