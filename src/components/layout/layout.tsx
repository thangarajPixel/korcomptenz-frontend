"use client";

import React from "react";
import { Header, Footer } from "./_utils";
import ScrollTopButton from "../ui/scroll-top";

interface LayoutProps {
  children: React.ReactNode;
  layoutData?: LayoutType | null;
}

export default function Layout({ children, layoutData }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      {layoutData && <Header data={layoutData} />}
      <main className="flex-1">{children}</main>
      {layoutData && <Footer data={layoutData} />}
      <ScrollTopButton />
    </div>
  );
}
