import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "../index.css";
import Providers from "@/components/providers";
import Layout from "@/components/layout";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "korcomptenz-frontend",
  description: "korcomptenz-frontend",
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/assets/logo.png" sizes="any" />
      <body
        className={`${outfitSans.variable} antialiased`}
      >
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
