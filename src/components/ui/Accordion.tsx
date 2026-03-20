import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import { cn } from "../../utils/utils";

interface AccordionTriggerProps extends ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  children: ReactNode;
  iconOpen: ReactNode;
  iconClose: ReactNode;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, iconOpen, iconClose, ...props }, forwardedRef) => (
    <Accordion.Header className='flex'>
      <Accordion.Trigger
        className={cn(
          "group flex h-fit flex-1 cursor-pointer items-start justify-between gap-4 bg-white text-start text-lg font-medium text-neutral-900 outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className='relative flex h-6 w-12 items-start justify-center pt-1'>
          <span
            aria-hidden
            className='hidden size-6 group-data-[state=open]:block'
          >
            {iconClose}
          </span>
          <span
            aria-hidden
            className='block size-6 group-data-[state=open]:hidden'
          >
            {iconOpen}
          </span>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends ComponentPropsWithoutRef<typeof Accordion.Content> {
  children: ReactNode;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden bg-white text-base text-neutral-600",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className='pt-2 pr-10'>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export { AccordionTrigger, AccordionContent };
