export default function ClientCustomer({
  data,
}: {
  data: CustomerSectionType;
}) {
  return (
    <section className="bg-[#F8F8F8]  py-12">
      <div className="container-lg">
        <div className="flex flex-col  lg:flex-row lg:items-center lg:justify-between">
          {/* Left side - Heading */}
          <div className="">
            <h2 className="text-balance text-9xl font-bold  text-gray-900 ">
              {data?.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{data?.description}</p>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {data?.customerValues.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-start border-l-2 border-gray-300 pl-6"
              >
                <div className="text-8xl font-bold tracking-tight lg:text-6xl">
                  <span className="text-gray-900">{stat.title}</span>

                  <span className="text-blue-600">+</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 lg:text-base">
                  {stat?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
