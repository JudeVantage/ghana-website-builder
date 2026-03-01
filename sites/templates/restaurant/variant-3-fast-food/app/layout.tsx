"use client";

import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>{`${siteConfig.businessName} | ${siteConfig.tagline}`}</title>
        <meta
          name="description"
          content={`${siteConfig.businessName} - ${siteConfig.hero.subtitle}`}
        />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
