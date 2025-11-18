"use client";

import React from "react";
import Image from "next/image";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";

const MapSection = ({ data }: { data: MapSectionType }) => {
  const [activeLocation, setActiveLocation] = React.useState<number | null>(
    null
  );
  // const list: Location[] = [
  //   {
  //     id: 1,
  //     name: "UAE",
  //     description: "Neem Connect",
  //     x: 72,
  //     y: 28,
  //     image: "/assets/tempory/4ad21517e21620bcd4d9f5fedadce99309f70bd4.png",
  //   },
  //   {
  //     id: 2,
  //     name: "US",
  //     description: "Neem Connect",
  //     x: 20,
  //     y: 32,
  //     image: "/assets/tempory/4d292c43fb8f4e61048c37694258227d464e4551.png",
  //   },
  //   {
  //     id: 4,
  //     name: "US",
  //     description: "Neem Connect",
  //     x: 18,
  //     y: 29,
  //     image: "/assets/tempory/4d292c43fb8f4e61048c37694258227d464e4551.png",
  //   },
  //   {
  //     id: 3,
  //     name: "US",
  //     description: "Neem Connect",
  //     x: 9,
  //     y: 36,
  //     image: "/assets/tempory/4d292c43fb8f4e61048c37694258227d464e4551.png",
  //   },
  //   {
  //     id: 5,
  //     name: "India",
  //     description: "Coimbatore",
  //     x: 77.5,
  //     y: 47.5,
  //     image: "/assets/tempory/9afaeaa0a343634e1218348071057d4d22f80323.png",
  //   },
  //   {
  //     id: 6,
  //     name: "India",
  //     description: "Neem Connect",
  //     x: 76,
  //     y: 43.5,
  //     image: "/assets/tempory/9afaeaa0a343634e1218348071057d4d22f80323.png",
  //   },
  //   {
  //     id: 7,
  //     name: "India",
  //     description: "Neem Connect",
  //     x: 79,
  //     y: 43.5,
  //     image: "/assets/tempory/9afaeaa0a343634e1218348071057d4d22f80323.png",
  //   },
  //   {
  //     id: 8,
  //     name: "Netherlands",
  //     description: "Neem Connect",
  //     x: 57,
  //     y: 18.5,
  //     image: "/assets/tempory/94d292a2c797797d6cd81246220b21c618efc5a4.png",
  //   },
  //   {
  //     id: 9,
  //     name: "Philippines",
  //     description: "Neem Connect",
  //     x: 97,
  //     y: 54,
  //     image: "/assets/tempory/97c6b0ef8a7d05279036655955685e5d0001485f.png",
  //   },
  //   {
  //     id: 10,
  //     name: "Mexico",
  //     description: "Neem Connect",
  //     x: 12,
  //     y: 48,
  //     image: "/assets/tempory/481cc013cbeed078b133d204e9d695b416e4906c.png",
  //   },
  //   {
  //     id: 11,
  //     name: "Canada",
  //     description: "Neem Connect",
  //     x: 29,
  //     y: 22,
  //     image: "/assets/tempory/cd2183fa1b501189e1b99540a39d1ffb1559c390.png",
  //   },
  //   {
  //     id: 12,
  //     name: "Canada",
  //     description: "Neem Connect",
  //     x: 28,
  //     y: 26,
  //     image: "/assets/tempory/cd2183fa1b501189e1b99540a39d1ffb1559c390.png",
  //   },
  // ];
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
        <Button
          size="xl"
          arrow
          className="variant:default flex items-center justify-center max-w-3xl mx-auto mb-10"
        >
          {data?.buttonText}
        </Button>
      </div>
      <div className="relative aspect-[2/1] w-full">
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
                  className={`flex size-8 items-center justify-center transition-all duration-200 ${activeLocation === location.id
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
