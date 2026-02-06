"use client";

import React, { useEffect, useState } from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from "@/services";
import ScrollTopButton from "../ui/scroll-top";
import Loader from "@/app/loading";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [layoutData, setLayoutData] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    const load = async () => {
      const response = await getLayoutService();
      setLayoutData(response);

      // small delay for smooth UX
      setTimeout(() => setLoading(false), 600);
    };

    load();
  }, [pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-svh flex-col">
      <Header data={layoutData} />
      <main className="flex-1">{children}</main>
      <Footer data={layoutData} />
      <ScrollTopButton />
    </div>
  );
}
