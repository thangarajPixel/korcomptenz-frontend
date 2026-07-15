"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../loading";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100); // minimal delay for route transition

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Show minimal loading indicator instead of full-page blocker
  if (!loading) return null;

  return <Loader />;
}
