import { Activity, Book, Calculator, Home, Pill } from 'lucide-react';
import { SidebarItem } from '@/types/SidebarItems.type';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: Home, label: 'sidebar.home', href: '/' },
  {
    icon: Calculator,
    label: 'sidebar.scale_calculators',
    subItems: [
      { label: 'sidebar.rass', href: '/calculators/rass' },
      { label: 'sidebar.four', href: '/calculators/four' },
    ],
  },
  {
    icon: Pill,
    label: 'sidebar.drug_calculators',
    subItems: [
      { label: 'sidebar.fentanyl', href: '/drug-calculators/fentanyl' },
    ],
  },
  {
    icon: Activity,
    label: 'sidebar.peripheral_nerve_block',
    subItems: [
      {
        label: 'sidebar.ultrasound_visualization',
        href: '/nerve-block/ultrasound',
      },
    ],
  },
  {
    icon: Book,
    label: 'sidebar.practical_skills',
    subItems: [{ label: 'sidebar.intubation', href: '/skills/intubation' }],
  },
];
