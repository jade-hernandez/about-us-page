type FaqContent = {
  position: number;
  title: string;
  content: string;
};

const faqContentData: FaqContent[] = [
  {
    position: 0,
    title: "Are there any discounts available for long-term subscriptions?",
    content:
      "Yes! We offer a discount on annual subscriptions. If you choose an annual payment plan, you will receive a discount compared to monthly payments. This is a great way to enjoy all the features of our platform at a reduced cost."
  },
  {
    position: 1,
    title: "Can I change my subscription plan at any time?",
    content:
      "Absolutely! You can upgrade or downgrade your subscription at any time. Changes to your plan will take effect at the start of your next billing cycle."
  },
  {
    position: 2,
    title: "What forms of payment do you accept?",
    content:
      "We accept all major credit cards, including Visa, MasterCard, and American Express. We also accept payments through PayPal for added convenience."
  },
  {
    position: 3,
    title: "Do you offer any special pricing for educational institutions or non-profits?",
    content:
      "Yes, we support educational institutions and non-profit organizations by offering special discounted pricing. Please contact us for more details and to see if you qualify."
  },
  {
    position: 4,
    title: "What is your refund policy?",
    content:
      "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days of your subscription, you can cancel your plan and receive a full refund."
  },
  {
    position: 5,
    title: "Are there any additional fees apart from the subscription cost?",
    content:
      "No, there are no hidden fees. The subscription price is all-inclusive, covering full access to our library and all features listed in your chosen plan."
  }
];

export { faqContentData };
