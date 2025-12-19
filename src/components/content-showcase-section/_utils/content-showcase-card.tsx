import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import React from "react";

const ContentShowcaseCard = ({ list }: { list: ShowCaseCardType }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl relative h-[500px]">
        {/* Full background image */}
        <KorcomptenzImage
          src={list?.image}
          fill
          className="object-cover"
          priority
        />
        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0  right-0 p-6 m-3 rounded-2xl bg-white opacity-90 shadow-2xl">
          <h2 className="text-2xl font-bold text-black mb-2 line-clamp-2">
            {list?.title}{" "}
          </h2>
          <p className="text-sm mb-4 line-clamp-2">{list?.description}</p>
          {list?.buttonText && (
            <ButtonLink
              link={list?.buttonLink || `/blog/${list?.slug}`}
              buttonProps={{
                variant: "ghost",
                className: "text-primary hover:text-primary/80",
                arrow: true,
              }}
            >
              {list?.buttonText}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcaseCard;
