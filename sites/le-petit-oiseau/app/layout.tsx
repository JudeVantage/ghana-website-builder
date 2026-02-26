import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Petit Oiseau - French Dining in Accra",
  description: "Experience premium French-inspired cuisine in the heart of Accra. Where culinary artistry meets warm hospitality.",
  keywords: ["French restaurant", "fine dining", "Accra", "Ghana", "Le Petit Oiseau", "French cuisine"],
  openGraph: {
    title: "Le Petit Oiseau - French Dining in Accra",
    description: "Experience premium French-inspired cuisine in the heart of Accra",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
