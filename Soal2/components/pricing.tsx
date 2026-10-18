"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type Cycle = "monthly" | "yearly";

const plans = [
  {
    name: "Basic",
    description: "For the single shop that wants the numbers straight.",
    price: { monthly: 19, yearly: 15 },
    cta: "Start with Basic",
    href: "/login",
    featured: false,
    features: [
      { label: "Inbound goods tracking", included: true },
      { label: "Outbound goods tracking", included: true },
      { label: "Daily profit overview", included: true },
      { label: "1 warehouse, 3 users", included: true },
      { label: "Sales analytics charts", included: false },
      { label: "Excel export", included: false },
      { label: "AI revenue forecasting", included: false },
    ],
  },
  {
    name: "Business",
    description: "For teams growing past one counter and one van.",
    price: { monthly: 49, yearly: 39 },
    cta: "Choose Business",
    href: "/login",
    featured: true,
    features: [
      { label: "Everything in Basic", included: true },
      { label: "Sales analytics charts", included: true },
      { label: "24/7 priority support", included: true },
      { label: "Up to 5 warehouses", included: true },
      { label: "Excel export", included: false },
      { label: "AI revenue forecasting", included: false },
    ],
  },
  {
    name: "Entrepreneur",
    description: "For multi-branch operators who forecast ahead.",
    price: { monthly: 99, yearly: 79 },
    cta: "Talk to sales",
    href: "#contact",
    featured: false,
    features: [
      { label: "Everything in Business", included: true },
      { label: "Excel & CSV export", included: true },
      { label: "AI revenue forecasting", included: true },
      { label: "Unlimited warehouses & users", included: true },
      { label: "Dedicated onboarding", included: true },
      { label: "API access", included: true },
    ],
  },
];

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[60px] left-1/2 size-[800px] -translate-x-1/2 rounded-full bg-brand-soft opacity-70 blur-[45px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 py-24 lg:px-0">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="text-[11px] font-bold tracking-[1.8px] text-[#5B6474]">
            PRICING
          </span>
          <h2 className="max-w-[760px] font-heading text-[32px] leading-[1.18] font-bold tracking-[-1px] text-ink sm:text-[40px] sm:leading-[47px]">
            Simple plans, counted in boxes not seats.
          </h2>
          <p className="max-w-[560px] text-sm leading-6 text-muted-foreground sm:text-[14.5px]">
            Start with the stock you have today. Upgrade the moment your margins
            need a closer look.
          </p>

          <ToggleGroup
            type="single"
            value={cycle}
            onValueChange={(value) => {
              if (value) setCycle(value as Cycle);
            }}
            className="mt-2 rounded-[32px] border border-line bg-[#F1F5FD] p-1"
            spacing={1}
            aria-label="Billing cycle"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-auto rounded-[26px] px-[18px] py-[9px] text-xs font-bold text-[#6B7280] data-[state=on]:bg-white data-[state=on]:text-ink data-[state=on]:shadow-[0px_3px_10px_#0B2E6B1F]"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-auto rounded-[26px] px-[18px] py-[9px] text-xs font-semibold text-[#6B7280] data-[state=on]:bg-white data-[state=on]:text-ink data-[state=on]:shadow-[0px_3px_10px_#0B2E6B1F]"
            >
              Yearly · save 20%
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative h-full gap-0 rounded-[20px] bg-white p-6 pt-6 ring-1 ring-line sm:p-7",
                plan.featured
                  ? "shadow-[0px_24px_54px_#1F66F540] ring-2 ring-primary"
                  : "shadow-[0px_10px_26px_#0B2E6B12]",
              )}
            >
              <div className="mb-1 flex h-[26px] items-center">
                {plan.featured ? (
                  <Badge className="gap-1.5 rounded-[20px] bg-brand-soft px-2.5 py-1 text-[9.5px] font-bold tracking-[1.3px] text-primary">
                    <Sparkles className="size-3" />
                    MOST POPULAR
                  </Badge>
                ) : null}
              </div>

              <h3 className="font-heading text-xl font-semibold text-ink">
                {plan.name}
              </h3>
              <p className="mt-1.5 min-h-[40px] text-[12.5px] leading-5 text-muted-foreground">
                {plan.description}
              </p>

              <div className="flex items-end gap-1 pt-4">
                <span className="pb-1.5 font-heading text-xl font-semibold text-ink">
                  $
                </span>
                <span className="font-heading text-[46px] leading-none font-bold tracking-[-2px] text-ink">
                  {plan.price[cycle]}
                </span>
                <span className="pb-1.5 text-[12.5px] text-muted-foreground">
                  / month
                </span>
              </div>
              <p className="mt-1 text-[10.5px] text-[#6B7280]">
                {cycle === "monthly"
                  ? "billed monthly · cancel anytime"
                  : "billed yearly · save 20%"}
              </p>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className={cn(
                  "mt-4 h-11 w-full rounded-[9px] text-[13px] font-semibold",
                  !plan.featured &&
                    "border-[1.5px] border-cyan bg-white text-ink hover:bg-secondary",
                )}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>

              <div className="my-4 h-px w-full bg-line" />

              <span className="text-[9.5px] font-bold tracking-[1.3px] text-[#6B7280]">
                WHAT&apos;S INCLUDED
              </span>
              <ul className="mt-3 flex flex-col gap-[11px]">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-2.5"
                  >
                    {feature.included ? (
                      <Check
                        className="size-[15px] shrink-0 text-primary"
                        strokeWidth={2.4}
                      />
                    ) : (
                      <X className="size-[15px] shrink-0 text-[#C3CAD6]" />
                    )}
                    <span
                      className={cn(
                        "text-[12.5px]",
                        feature.included
                          ? "text-[#374151]"
                          : "text-[#A3ABB8]",
                      )}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="text-center text-[11.5px] text-[#5B6474]">
          All plans include unlimited products, barcode scanning, and a 14-day
          trial. Prices exclude VAT.
        </p>
      </div>
    </section>
  );
}
