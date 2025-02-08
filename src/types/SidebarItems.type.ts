export interface SidebarSubItem {
  label: string;
  href: string;
}

export interface SidebarItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href?: string;
  subItems?: SidebarSubItem[];
}
