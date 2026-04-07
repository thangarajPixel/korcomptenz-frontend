"use client";

import React, { useEffect, useState } from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from "@/services";
import ScrollTopButton from "../ui/scroll-top";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [layoutData, setLayoutData] = useState<LayoutType | null>(null);

  useEffect(() => {
    const load = async () => {
      const response = await getLayoutService();
      setLayoutData(response);
    };

    load();
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <Header data={layoutData} />
      <main className="flex-1">{children}</main>
      <Footer data={layoutData} />
      <ScrollTopButton />
    </div>
  );
}
