import { PricingCard } from "./pricing-card";

export function PricingSection({ data }: { data: PricingSectionType }) {
  return (
    <section className="w-full py-16 px-4 bg-white container-md">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {data?.title}
          </h2>
          <p className="text-slate-600 text-lg  mx-auto">{data?.subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {data.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
