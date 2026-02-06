"use client";

import Loader from "@/app/loading";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return <Loader />;
}
