import type { ReactElement } from "react";

export default function Loader(): ReactElement {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="load-wrap">
        <img src="/assets/loading.png" alt="Loading..." />
      </div>
    </div>
  );
}
