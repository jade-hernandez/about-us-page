import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

import type { ComponentType } from "react";
import { cn } from "../../utils/utils";
import Link from "../ui/Link";
import Button from "../ui/Button";

type TNavItem = {
  id: number | string;
  title: string;
  path: string;
};

type TSocialIcon = {
  id: string;
  icon: ComponentType<{ size: number; color: string }>;
  label: string;
  onClick?: () => void;
};

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  navItems: TNavItem[];
  socialIcons: TSocialIcon[];
  companyName?: string;
  showSocialIcons?: boolean;
  showCopyright?: boolean;
  initialYear?: number;
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      navItems,
      socialIcons,
      companyName,
      showSocialIcons = true,
      showCopyright = true,
      initialYear,
      className,
      ...props
    },
    ref
  ) => {
    const currentYear = new Date().getFullYear();
    const yearDisplay =
      initialYear && initialYear !== currentYear ? `${initialYear}-${currentYear}` : currentYear;

    return (
      <footer
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-4", className)}
        {...props}
      >
        {navItems.length > 0 && (
          <div className='flex items-center justify-center gap-4 lg:gap-6'>
            {navItems.map(({ path, id, title }) => (
              <Link
                key={id}
                href={path}
                variant='linkGray'
                size='md-link'
                className='p-0.5 focus:rounded focus:border focus:border-indigo-600 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]'
              >
                {title}
              </Link>
            ))}
          </div>
        )}

        <div className='flex flex-col items-center justify-center gap-4'>
          {showSocialIcons && socialIcons.length > 0 && (
            <div className='flex items-center justify-center gap-6'>
              {socialIcons.map(({ id, icon: Icon, label, onClick }) => (
                <Button
                  key={id}
                  variant='linkGray'
                  size='icon-md'
                  onClick={onClick}
                  aria-label={label}
                >
                  <Icon
                    size={24}
                    color='#A3A3A3'
                  />
                </Button>
              ))}
            </div>
          )}

          {showCopyright && (
            <p className='text-sm text-neutral-900'>
              &copy; {yearDisplay} {companyName}. All rights reserved.
            </p>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
