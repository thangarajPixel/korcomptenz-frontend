"use client";

import React from "react";
import Image from "next/image";
import KorcomptenzImage from "../korcomptenz-image";

import ButtonLink from "../ui/button-link";

const MapSection = ({ data }: { data: MapSectionType }) => {
  const [activeLocation, setActiveLocation] = React.useState<number | null>(
    null
  );

  const handleClick = (locationId: number) => {
    setActiveLocation(activeLocation === locationId ? null : locationId);
  };
  return (
    <div className="relative container-md">
      <div className="items-center">
        <h5 className="text-foreground text-center font-semibold text-9xl mb-5">
          {data?.title}
        </h5>
        <p className="text-center text-[#6C6C6C] text-lg max-w-3xl mx-auto mb-5">
          {data?.description}
        </p>
        <ButtonLink
          link={data?.buttonLink || "#"}
          buttonProps={{
            className:
              "variant:default flex items-center justify-center max-w-3xl mx-auto mb-10",
            size: "xl",
            arrow: true,
          }}
        >
          {data?.buttonText}
        </ButtonLink>
      </div>
      <div className="relative aspect-2/1 w-full">
        <Image
          src={"/assets/map.png"}
          alt="World map"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0">
          {data?.list.map((location) => (
            <div
              key={location.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
            >
              <button
                type="button"
                onClick={() => handleClick(location.id)}
                className="group focus:outline-none"
                aria-label={`Location: ${location.title}`}
              >
                <div
                  className={`flex size-8 items-center justify-center transition-all duration-200 ${
                    activeLocation === location.id
                      ? "scale-125"
                      : "group-hover:scale-125"
                  }`}
                >
                  <KorcomptenzImage
                    src={location?.image}
                    width={24}
                    height={32}
                    className="object-cover size-5 sm:size-8"
                  />
                  {/* <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    className={`transition-all duration-200 ${activeLocation === location.id
                      ? 'fill-primary'
                      : 'fill-primary group-hover:fill-primary'
                      }`}
                  >
                    <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 12 32 12 32C12 32 24 18.617 24 12C24 5.383 18.617 0 12 0ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" />
                  </svg> */}
                </div>
              </button>
              {/* <Popover isOpen={activeLocation === location.id} onOpenChange={open => setActiveLocation(open ? location.id : null)}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    onClick={() => handleClick(location.id)}
                    className="group focus:outline-none"
                    aria-label={`Location: ${location.name}`}
                  >
                    <div
                      className={`flex size-8 items-center justify-center transition-all duration-200 ${activeLocation === location.id
                        ? 'scale-125'
                        : 'group-hover:scale-125'
                        }`}
                    >
                      <svg
                        width="24"
                        height="32"
                        viewBox="0 0 24 32"
                        fill="none"
                        className={`transition-all duration-200 ${activeLocation === location.id
                          ? 'fill-primary'
                          : 'fill-primary group-hover:fill-primary'
                          }`}
                      >
                        <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 12 32 12 32C12 32 24 18.617 24 12C24 5.383 18.617 0 12 0ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" />
                      </svg>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="max-w-[150px] rounded-lg border border-gray-200 bg-white p-3 shadow-lg sm:max-w-[250px]">
                  <div>
                    <div className="font-semibold">{location.name}</div>
                  </div>
                </PopoverContent>
              </Popover> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSection;
