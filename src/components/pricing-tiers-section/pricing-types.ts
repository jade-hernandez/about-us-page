export type BillingCycle = "month" | "year";

export type Variant = "default" | "highlighted";
export type ButtonVariant = "primary" | "secondary";

export interface PricingPlan {
  title: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  annualTotal: string;
  features: string[];
  isFeatured?: boolean;
  headingText?: string;
  variant?: Variant;
  buttonVariant?: ButtonVariant;
}
