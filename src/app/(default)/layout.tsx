import ServerLayout from "@/components/layout/server-layout";
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
    // render without layout data on error
  }

  return <ServerLayout data={layoutData}>{children}</ServerLayout>;
}
