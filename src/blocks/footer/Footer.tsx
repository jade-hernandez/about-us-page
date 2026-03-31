import type { ComponentType } from "react";

import { Link } from "../../components/ui/Link";

import { cn } from "../../utils/utils";

const CURRENT_YEAR = 2026;

export type NavItem = {
  key: number | string;
  title: string;
  path: string;
};

export type SocialIcon = {
  key: string;
  icon: ComponentType;
  label: string;
  href: string;
};

type FooterProps = {
  navItems: NavItem[];
  socialIcons: SocialIcon[];
  companyName: string;
  className?: string;
};

function Footer({ navItems, socialIcons, companyName, className }: FooterProps) {
  return (
    <footer className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {navItems.length > 0 && (
        <nav aria-label='Footer navigation'>
          <div className='flex items-center justify-center gap-4 lg:gap-6'>
            {navItems.map(({ path, key, title }) => (
              <Link
                key={key}
                href={path}
                variant='linkGray'
                size='md-link'
                className='p-0.5 focus:rounded focus:border focus:border-indigo-600 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]'
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className='flex flex-col items-center justify-center gap-4'>
        {socialIcons.length > 0 && (
          <div className='flex items-center justify-center gap-6'>
            {socialIcons.map(({ key, icon: Icon, label, href }) => (
              <Link
                key={key}
                href={href}
                variant='linkGray'
                size='icon-md'
                aria-label={label}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon aria-hidden='true' />
              </Link>
            ))}
          </div>
        )}

        <p className='text-sm text-neutral-900'>
          &copy; {CURRENT_YEAR} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
