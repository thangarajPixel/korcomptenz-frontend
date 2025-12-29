import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import Link from "next/link";

const DomainSection = ({ domainData }: { domainData: DomainSectionType }) => {
  return (
    <section className="container-md" data-debug={"page-componets.domain-data"}>
      <div className="rounded-2xl  bg-custom-gray-6">
        <div className="flex items-start justify-center  pt-6 md:pt-20">
          <div className="border-b-4 hidden lg:block border-custom-gray-7 w-1/3 mt-4"></div>
          <h5 className="text-6xl md:text-9xl font-semibold text-foreground mx-4 py-4 lg:text-center">
            {domainData?.title}
          </h5>
          <div className="border-b-4 hidden lg:block border-custom-gray-7 w-1/3 mt-4"></div>
        </div>
        {domainData?.description && (
          <p className="lg:py-5 lg:px-36 text-center ">
            {domainData?.description}
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  p-6 md:p-10 ">
          {domainData?.slides?.map((slide) => {
            return (
              <div
                key={`slide-domain-${slide?.id}`}
                className={`bg-none flex flex-col gap-4 `}
              >
                <div className="py-3 md:py-0 ">
                  <KorcomptenzImage
                    src={slide?.image}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-4xl"
                  />
                </div>
                <div>
                  <p className="text-5xl font-semibold text-foreground break-words">
                    {slide?.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-foreground leading-6 break-words">
                    {slide?.description}
                  </p>
                </div>
                <div>
                  <Link href={slide?.link || "#"}>
                    {slide?.buttonText && (
                      <Button
                        arrow
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-transparent"
                      >
                        {slide?.buttonText}
                      </Button>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
