import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

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
			<body
				className={`${outfitSans.variable} antialiased`}
			>
				<Providers>
					<div className="flex min-h-svh  flex-col">
						<Header />
						<main className="flex-1">
							{children}
						</main>
						<footer>
							footer
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
