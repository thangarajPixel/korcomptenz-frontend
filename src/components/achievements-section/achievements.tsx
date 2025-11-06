import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const Achievements = () => {
  return (
    <div className="container-md mt-10">
      <h1 className="text-center text-foreground text-5xl font-semibold">
        {" "}
        Achievements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <KorcomptenzImage
          src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_image_50_608edb7f12.png?updatedAt=2025-11-06T10%3A01%3A54.039Z"
          width={500}
          height={500}
          className="object-cover bg-light-gray p-5 rounded-2xl"
        />
        <KorcomptenzImage
          src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_image_51_6d9cbe2f81.png?updatedAt=2025-11-06T09%3A50%3A08.461Z"
          width={500}
          height={500}
          className="object-cover bg-light-gray p-5 rounded-2xl "
        />
        <div className="grid gap-2">
          <KorcomptenzImage
            src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_image_52_7872e33bb0.png?updatedAt=2025-11-06T09%3A50%3A08.102Z rounded-2xl"
            width={500}
            height={500}
            className="object-cover bg-light-gray p-5 rounded-2xl"
          />
          <KorcomptenzImage
            src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_image_52_1_ed748b1e82.png?updatedAt=2025-11-06T09%3A50%3A08.364Z"
            width={500}
            height={500}
            className="object-cover bg-light-gray p-5 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
