import {
  Activity,
  Book,
  Calculator,
  Home,
  TableOfContents,
} from 'lucide-react';
import { NavigationItem } from '@/types/NavigationItem.type';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: Home, description: '', title: 'dashboard.home', href: '/dashboard' },
  {
    icon: TableOfContents,
    title: 'dashboard.scale-list.title',
    description: 'dashboard.scale-list.description',
    href: '/dashboard/scale-list',
    subItems: [
      { label: 'dashboard.rass', href: '/dashboard/scale-list/rass' },
      { label: 'dashboard.four', href: '/dashboard/scale-list/four' },
      { label: 'dashboard.gcs', href: '/dashboard/scale-list/glasgow' },
      {
        label: 'dashboard.alderte',
        href: '/dashboard/scale-list/alderte',
      },
      { label: 'dashboard.sofa', href: '/dashboard/scale-list/sofa' },
      { label: 'dashboard.nihss', href: '/dashboard/scale-list/nihss' },
      { label: 'dashboard.apacheii', href: '/dashboard/scale-list/apacheii' },
    ],
  },
  {
    icon: Calculator,
    title: 'dashboard.calculators.title',
    description: 'dashboard.calculators.description',
    href: '/dashboard/calculators',
    subItems: [
      {
        label: 'dashboard.fentanyl',
        href: '/dashboard/calculators/fentanyl',
      },
    ],
  },
  {
    icon: Activity,
    title: 'dashboard.peripheral_nerve_block.title',
    description: 'dashboard.peripheral_nerve_block.description',
    href: '/dashboard/nerve-block',
    subItems: [
      {
        label: 'dashboard.ultrasound_visualization',
        href: '/dashboard/nerve-block/ultrasound',
      },
    ],
  },
  {
    icon: Book,
    title: 'dashboard.practical_skills.title',
    description: 'dashboard.practical_skills.description',
    href: '/dashboard/skills',
    subItems: [
      { label: 'dashboard.intubation', href: '/dashboard/skills/intubation' },
    ],
  },
];
