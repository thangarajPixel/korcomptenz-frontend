const statsData = {
  heading: "Trusted by our customers",
  subheading: "Join our Digital Technology",
  stats: [
    {
      value: "100",
      suffix: "+",
      label: "Successful Implementations",
    },
    {
      value: "100",
      suffix: "+",
      label: "Customers Worldwide",
    },
    {
      value: "15",
      suffix: "+",
      label: "Years of experience",
    },
  ],
};

export default function ClientCustomer() {
  return (
    <section className="bg-[#F8F8F8]  py-12">
      <div className="container-lg">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left side - Heading */}
          <div className="max-w-md">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              {statsData.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{statsData.subheading}</p>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {statsData.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-start border-l-2 border-gray-300 pl-6"
              >
                <div className="text-5xl font-bold tracking-tight lg:text-6xl">
                  <span className="text-gray-900">{stat.value}</span>
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
