"use client";

import ButtonLink from "@/components/ui/button-link";

export function PricingCard({ plan }: { plan: PricingPlanType }) {
  return (
    <div
      className={
        "rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all bg-gray-200 hover:bg-gray-300"
      }
    >
      <h3 className="text-center text-xl font-semibold text-slate-800">
        {plan.name}
      </h3>

      <div className="text-center">
        <div className="text-5xl font-bold text-primary mb-2">
          ${plan.price}
        </div>
        <p className="text-sm text-emerald-700 font-medium">{plan.billing}</p>
      </div>

      <p className="text-center text-slate-700 text-sm leading-relaxed max-w-xs">
        {plan.description}
      </p>
      <ButtonLink
        link={plan?.button?.link || "#"}
        buttonProps={{
          variant: "ghost",
          className: "text-primary hover:text-primary/80",
          arrow: true,
        }}
      >
        {plan?.button?.text}
      </ButtonLink>
      {/* <Button size="xl" className="">
        {plan.buttonText}
      </Button> */}
    </div>
  );
}
