"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { Home } from "lucide-react";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <KorcomptenzImage
        src="/images/404.png" 
        width={500}
        height={500}
        alt="404 Not Found"
      />

      <p className="text-foreground text-9xl max-w-5xl mx-auto font-bold">
        Sorry, but we are not able to find the page you are looking for.
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
          Go to Home
        </ButtonLink>
      </div>
    </div>
  );
};

export default NotFound;