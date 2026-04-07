"use client";

import React, { useEffect, useRef, useState } from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from "@/services";
import ScrollTopButton from "../ui/scroll-top";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [layoutData, setLayoutData] = useState<LayoutType | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    getLayoutService().then(setLayoutData).catch(() => { });
  }, []);

  return (
    <div className="flex min-h-svh flex-col">
      <Header data={layoutData} />
      <main className="flex-1">{children}</main>
      <Footer data={layoutData} />
      <ScrollTopButton />
    </div>
  );
}
