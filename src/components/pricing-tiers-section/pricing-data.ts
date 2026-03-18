import type { PricingPlan } from "./pricing-types";
import featureData from "./feature-data";

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    monthlyPrice: "9.99",
    annualPrice: "6.99",
    annualTotal: "84",
    features: featureData.basic,
    buttonVariant: "secondary"
  },
  {
    title: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    monthlyPrice: "19.99",
    annualPrice: "15.99",
    annualTotal: "192",
    features: featureData.standard,
    isFeatured: true,
    headingText: "Most Popular",
    variant: "highlighted"
  },
  {
    title: "Premium Plan",
    description: "Experience limitless living for power users",
    monthlyPrice: "29.99",
    annualPrice: "25.99",
    annualTotal: "312",
    features: featureData.premium,
    buttonVariant: "secondary"
  }
];

export default pricingPlans;
