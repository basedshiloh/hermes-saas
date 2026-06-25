import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { typescript: true });
  }
  return _stripe;
}

export const PLANS = {
  STARTER: {
    name: "Starter",
    priceId: process.env.STRIPE_STARTER_PRICE_ID ?? "",
    amount: 2900,
    currency: "eur",
  },
  PRO: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID ?? "",
    amount: 6900,
    currency: "eur",
  },
  BUSINESS: {
    name: "Business",
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID ?? "",
    amount: 14900,
    currency: "eur",
  },
} as const;

export type PlanKey = keyof typeof PLANS;
