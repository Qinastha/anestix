import { Activity, Book, Calculator, Home, Pill } from 'lucide-react';
import { NavigationItem } from '@/types/NavigationItem.type';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: Home, description: '', title: 'dashboard.home', href: '/' },
  {
    icon: Calculator,
    title: 'dashboard.scale_calculators.title',
    description: 'dashboard.scale_calculators.description',
    href: '/dashboard/scale-calculators',
    subItems: [
      { label: 'dashboard.rass', href: '/dashboard/scale-calculators/rass' },
      { label: 'dashboard.four', href: '/dashboard/scale-calculators/four' },
      { label: 'dashboard.gcs', href: '/dashboard/scale-calculators/glasgow' },
    ],
  },
  {
    icon: Pill,
    title: 'dashboard.drug_calculators.title',
    description: 'dashboard.drug_calculators.description',
    href: '/dashboard/drug-calculators',
    subItems: [
      {
        label: 'dashboard.fentanyl',
        href: '/dashboard/drug-calculators/fentanyl',
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
