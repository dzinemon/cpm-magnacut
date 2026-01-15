import type { Metadata } from "next"
import { Inter, Roboto_Condensed, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
})

const robotoCondensed = Roboto_Condensed({
	variable: "--font-roboto-condensed",
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	display: "swap",
})

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Knife Online | Functional Minimalism",
	description: "High-end tactical knives. Precision, Magnacut, Titanium.",
	icons: {
		icon: "/favicon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${robotoCondensed.variable} ${spaceMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
