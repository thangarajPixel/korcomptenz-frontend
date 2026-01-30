import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

interface AchievementSectionProps {
  data: AchievementsType;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="container-md mt-10">
      {data.title && (
        <h2 className="text-center text-foreground text-5xl font-semibold">
          {data.title}
        </h2>
      )}

      <div className="grid grid-cols-12 gap-6 mt-10">
        {data.list?.map((col, colIndex) => {
          const isSingle = col?.column?.length === 1;

          // Determine col-span based on isColumnFour and index
          let colSpanClass = "col-span-12 md:col-span-6 lg:col-span-4"; // default
          if (data.isColumnFour) {
            // Custom layout: 2 + 2 + 4 + 4
            switch (colIndex) {
              case 0:
              case 1:
                colSpanClass = "col-span-12 md:col-span-6 lg:col-span-2";
                break;
              case 2:
              case 3:
                colSpanClass = "col-span-12 md:col-span-6 lg:col-span-4";
                break;
              default:
                colSpanClass = "col-span-12 md:col-span-6 lg:col-span-3";
            }
          }

          return (
            <div
              key={`col-${colIndex}`}
              className={`${colSpanClass} flex flex-col ${isSingle ? "justify-center" : "gap-4"}`}
            >
              {col.column?.map((item, itemIndex) => (
                <div
                  key={item.id || `item-${colIndex}-${itemIndex}`}
                  className={`bg-[#F2F7F6] rounded-2xl flex items-center justify-center p-5 ${
                    isSingle ? "h-[320px]" : "h-[150px]"
                  }`}
                >
                  <KorcomptenzImage
                    src={item.image}
                    width={isSingle ? 700 : 500}
                    height={isSingle ? 700 : 300}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
