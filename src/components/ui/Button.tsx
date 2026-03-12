import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";
import { buttonVariants } from "./button-variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
