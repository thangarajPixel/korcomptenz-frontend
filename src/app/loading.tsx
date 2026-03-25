import type { ReactElement } from "react";
import Image from "next/image";

export default function Loader(): ReactElement {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="load-wrap">
        <Image
          src="/assets/loading.png"
          alt="Loading..."
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
