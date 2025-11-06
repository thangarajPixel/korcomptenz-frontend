import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "../index.css";
import Providers from "@/components/providers";

export const dynamic = "force-dynamic";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "korcomptenz-frontend",
  description: "korcomptenz-frontend",
};

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
