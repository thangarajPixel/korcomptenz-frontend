import React from "react";
import { Header, Footer } from "./_utils";
import { getLayoutService } from '@/services'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await getLayoutService();
  return (
    <div className="flex min-h-svh  flex-col">
      <Header data={response} />
      <main className="flex-1">{children}</main>
      <Footer data={response} />
    </div>
  );
};

export default Layout;
