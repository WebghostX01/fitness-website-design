"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import Button from "../components/Button";

const YEARLY_DISCOUNT = 0.2;

const description = "Flexible membership options designed to match your goals own.";
const features = [
  "Unlimited access to gym floor during.",
  "Basic workout guidance from",
  "Locker room & shower facilities",
  "Access to basic workout guidelines",
  "Basic workout guidance",
  "Flexible training hours",
];

const plans = [
  { name: "Basic Plan", price: 49, description, features },
  { name: "Standard Plan", price: 69, description, features, highlight: true },
  { name: "Premium Plan", price: 99, description, features },
];

type Billing = "monthly" | "yearly";

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="px-12 pb-28 pt-24 text-white">
      <div className="text-center">
        <span className="font-display text-xs uppercase font-bold tracking-wide text-lime-400">
          Our pricing
        </span>
        <h2 className="font-display mt-4 font-bold text-5xl uppercase leading-[0.95] lg:text-6xl">
          Exclusive plans for
          <br />
          serious fitness goals
        </h2>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="font-display font-bold text-sm">Save 20%</span>
          <div className="flex rounded-full bg-white p-1 text-sm">
            {(["monthly", "yearly"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`rounded-full cursor-pointer px-4 py-1 capitalize transition ${
                  billing === option ? "bg-black text-white" : "text-black"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const price =
            billing === "yearly"
              ? Math.round(plan.price * (1 - YEARLY_DISCOUNT))
              : plan.price;
          const hl = plan.highlight;

          return (
            <article
              key={plan.name}
              className={`flex flex-col rounded-3xl  border p-2.5 ${
                hl ? "border-lime-400 bg-lime-400 text-black" : "border-white/10 bg-black text-white"
              }`}
            >
              {/* Header box */}
              <div
                className={`rounded-2xl border p-6 text-white ${
                  hl ? "border-black bg-black" : "border-white/10 bg-white/[0.06]"
                }`}
              >
                <h3 className="font-display text-xl font-bold uppercase">{plan.name}</h3>
                <p className="mt-3 max-w-[240px] text-sm leading-snug text-white/60">
                  {plan.description}
                </p>
              </div>

              <div className="px-2.5 pb-2.5 pt-8">
                <p className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-6xl leading-none">${price}/</span>
                  <span className={`text-sm ${hl ? "text-black/70" : "text-white/70"}`}>
                    month
                  </span>
                </p>

                <Button
                  href="#"
                  variant={hl ? "dark" : "light"}
                  icon
                  className="mt-7 w-full justify-between font-bold"
                >
                  Get started now
                </Button>

                <div
                  className={`my-6 border-t border-dashed ${
                    hl ? "border-black/25" : "border-white/20"
                  }`}
                />

                <p className="text-sm font-medium">What Includes:</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        hl ? "text-black" : "text-white/70"
                      }`}
                    >
                      <CircleCheck className="size-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}