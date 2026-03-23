"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from "@/services";
import ScrollTopButton from "../ui/scroll-top";
import Loader from "@/app/loading";

// Cache layout data with a 5-minute TTL
let cachedLayoutData: LayoutType | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [layoutData, setLayoutData] = useState<LayoutType | null>(null);

  const loadLayoutData = useCallback(async () => {
    const now = Date.now();

    // Use cached data if still valid
    if (cachedLayoutData && now - cacheTimestamp < CACHE_TTL) {
      setLayoutData(cachedLayoutData);
      return;
    }

    setLoading(true);
    try {
      const response = await getLayoutService();
      cachedLayoutData = response;
      cacheTimestamp = now;
      setLayoutData(response);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLayoutData();
  }, [loadLayoutData]);

  if (loading && !layoutData) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-svh flex-col">
      {layoutData && <Header data={layoutData} />}
      <main className="flex-1">{children}</main>
      {layoutData && <Footer data={layoutData} />}
      <ScrollTopButton />
    </div>
  );
}
