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
        <h1 className="text-center text-foreground text-5xl font-semibold">
          {data.title}
        </h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data.list?.map((col, colIndex) => {
          const isSingle = col?.column?.length === 1;
          return (
            <div
              key={`col-${colIndex}`}
              className={`${colIndex === 2 ? "grid gap-2" : ""} flex flex-col ${
                isSingle ? "items-center justify-center" : ""
              }`}
            >
              {col.column?.map((item, itemIndex) => (
                <KorcomptenzImage
                  key={item.id || `item-${colIndex}-${itemIndex}`}
                  src={item.image}
                  width={isSingle ? 800 : 500}
                  height={isSingle ? 800 : 500}
                  className={`object-cover bg-light-gray p-5 rounded-2xl ${
                    isSingle ? "w-full max-w-xl" : ""
                  }`}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
