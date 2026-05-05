"use client";

import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export function PricingCard({ plan }: { plan: PricingPlanType }) {
  return (
    <div
      className={
        "rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all bg-gray-200 hover:bg-gray-300"
      }
    >
      {plan?.name && (
        <h3 className="text-center text-5xl font-semibold text-slate-800 leading-tight  max-w-sm mx-auto">
          {plan?.name}
        </h3>
      )}

      <div className="text-center">
        <div className="text-6xl font-bold text-primary mb-2">
          ${plan?.price}
        </div>
        <p className="text-sm text-primary font-medium">{plan?.billing}</p>
      </div>
<DangerousHtml html={plan?.description} className="text-center text-slate-700 text-sm leading-relaxed max-w-xs"/>
     
      <ButtonLink
        link={plan?.button?.link || "#"}
        buttonProps={{
          variant: "default",
          className: "sm:h-16 h-12  px-8 has-[>svg]:px-4",
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
