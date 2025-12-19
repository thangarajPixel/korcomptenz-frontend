"use client";

import { Home } from "lucide-react";
import KorcomptenzImage from "../korcomptenz-image";
import ButtonLink from "../ui/button-link";

const NotFound = ({ data }: { data: NotFoundType }) => {
  return (
    <div className="flex flex-col  items-center  text-center">
      <KorcomptenzImage src={data.image} width={500} height={500} />
      <p className="text-foreground text-9xl max-w-5xl mx-auto font-bold">
        {data.description ||
          "Sorry, but we are not able to find the page you are looking for."}
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <ButtonLink
          link="/"
          buttonProps={{
            arrow: true,

            size: "xl",
          }}
        >
          <Home className="size-4" />
          {data.buttonText || "Go to Home"}
        </ButtonLink>
      </div>
    </div>
  );
};

export default NotFound;
