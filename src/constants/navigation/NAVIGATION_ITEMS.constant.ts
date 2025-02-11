import {
  Activity,
  Book,
  Calculator,
  Home,
  TableOfContents,
} from 'lucide-react';
import { NavigationItem } from '@/types/NavigationItem.type';
import { SCALE_SUBITEMS } from '@/constants/navigation/SCALE_SUBITEMS.constant';
import { CALCULATOR_SUBITEMS } from '@/constants/navigation/CALCULATOR_SUBITEMS.constant';
import { ULTRASOUND_SUBITEMS } from '@/constants/navigation/ULTRASOUND_SUBITEMS.constant';
import { SKILLS_SUBITEMS } from '@/constants/navigation/SKILLS_SUBITEMS.constant';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: Home, description: '', title: 'dashboard.home', href: '/dashboard' },
  {
    icon: TableOfContents,
    title: 'dashboard.scale-list.title',
    description: 'dashboard.scale-list.description',
    href: '/dashboard/scale-list',
    subItems: SCALE_SUBITEMS,
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
    title: 'dashboard.practical_skills.title',
    description: 'dashboard.practical_skills.description',
    href: '/dashboard/skills',
    subItems: SKILLS_SUBITEMS,
  },
];
