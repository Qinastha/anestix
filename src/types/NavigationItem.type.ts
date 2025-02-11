export interface NavigationSubItem {
  label: string;
  description: string;
  href: string;
}

export interface NavigationItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
  subItems?: NavigationSubItem[];
}
