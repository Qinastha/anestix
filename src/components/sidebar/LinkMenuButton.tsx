import React from 'react';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { Link } from '@/i18n/navigation';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'use-intl';

interface LinkMenuButtonProps {
  title: string;
  href: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handleClose: () => void;
  isHomeLink?: boolean;
}

export const LinkMenuButton: React.FC<LinkMenuButtonProps> = ({
  title,
  href,
  Icon,
  handleClose,
  isHomeLink = false,
}) => {
  const tDash = useTranslations('Dashboard');
  return (
    <>
      <SidebarMenuButton asChild>
        <Link
          href={href}
          className={`flex flex-row items-center w-full ${isHomeLink ? 'mb-2' : 'text-muted-foreground animate-pulse'}`}
          onClick={() => handleClose()}
        >
          {Icon && <Icon className="h-4 w-4" />}
          <span
            className={`${isHomeLink ? 'text-lg font-serif' : 'text-md font-sans font-medium'}`}
          >
            {tDash(title)}
          </span>
        </Link>
      </SidebarMenuButton>
      {isHomeLink && <Separator />}
    </>
  );
};
