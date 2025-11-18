const data = {
  title: "Who Should Attend?",
  partner: [
    {
      id: "1",
      name: "Neha Bhagat",
      description:
        "As Senior Director & Practice Head – Microsoft Dynamics at Korcomptenz Inc., Neha Bhagat leads transformative client solutions using Microsoft Dynamics 365 expertise.",
      logo: {
        url: "/assets/Neha-Bhagat.png",
        width: 50,
        height: 50,
      },
    },
  ],
};
export default function DemoExperts() {
  return (
    <section className="container-md rounded-4xl p-8">
      <h5 className="text-7xl font-semibold mb-12 text-balance text-center text-black">
        {data?.title}
      </h5>

      <div
        className={`grid gap-12 justify-items-center ${data?.partner?.length === 1
            ? "grid-cols-1 justify-center mx-auto max-w-3xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
      >
        {data?.partner?.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* <KorcomptenzImage
              src={partner?.logo}
              width={200}
              height={200}
              className="object-contain"
            /> */}
            <h2 className="text-2xl font-semibold text-black">
              {partner?.name}
            </h2>
            <p className="text-lg leading-relaxed text-foreground font-normal">
              {partner?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
