import React from "react";
import { Icons } from "./HomeIcons";

export default function Pricing() {
  const PLANS = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      desc: "Perfect for freelancers and solo founders starting out.",
      features: ["1 Admin User", "Track up to 50 Items", "Basic Invoicing", "Standard Support"],
      cta: "Create Account",
      highlight: false,
    },
    {
      name: "Business",
      price: "€29",
      period: "/month",
      desc: "For growing teams that need role management and deep insights.",
      features: [
        "5 Team Members (Roles)",
        "Unlimited Inventory",
        "Advanced Performance Stats",
        "Priority Email Support",
        "Custom Branding",
      ],
      cta: "Start Free Trial",
      highlight: true, // This card will pop
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Scalable solutions for large organizations with specific needs.",
      features: [
        "Unlimited Users",
        "Dedicated Account Manager",
        "API Access",
        "SLA & Custom Contracts",
        "On-premise Deployment",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  const handleLink = (planName: string) => {
    if (planName === "Enterprise") {
      window.location.href = "#contact";
    } else {
      window.open("https://dashboard.invotrack.de/register", "_blank");
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            Start for free, upgrade when you grow. No hidden fees.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight
                  ? "bg-slate-900 dark:bg-slate-800 border-slate-900 dark:border-slate-700 shadow-2xl scale-105 z-10"
                  : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-900"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.highlight ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    plan.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-brand-400" : "text-brand-600 dark:text-brand-400"
                      }`}
                    >
                      <Icons.Check />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => handleLink(plan.name)}
                className={`w-full py-3 rounded-xl font-semibold transition-all shadow-lg ${
                  plan.highlight
                    ? "bg-brand-600 hover:bg-brand-500 text-white shadow-brand-500/30"
                    : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}