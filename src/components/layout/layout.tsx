import React from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from "@/services";
import ScrollTopButton from "../ui/scroll-top";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await getLayoutService();
  // oxlint-disable-next-line no-console
  console.log(response, "layout");
  return (
    <div className="flex min-h-svh  flex-col">
      <Header data={response} />
      <main className="flex-1">{children}</main>
      <Footer data={response} />
      <ScrollTopButton />
    </div>
  );
};

export default Layout;
