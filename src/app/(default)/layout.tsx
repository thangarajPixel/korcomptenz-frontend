import Layout from "@/components/layout";
import React from "react";
import { getLayoutService } from "@/services";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let layoutData: LayoutType | null = null;

  try {
    layoutData = await getLayoutService();
  } catch {
    // Gracefully handle layout data fetch failure
  }

  return <Layout layoutData={layoutData}>{children}</Layout>;
}
