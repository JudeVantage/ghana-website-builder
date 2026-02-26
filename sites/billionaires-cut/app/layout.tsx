import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billionaire's Cut | Premium Barbershop in Accra, Ghana",
  description: "Experience luxury grooming at Billionaire's Cut. Premium barbershop services in Adjiringano, Accra. Rated 5.0★ by 63 customers. Expert barbers, exclusive cuts.",
  keywords: "barbershop Accra, premium haircut Ghana, Adjiringano barber, luxury grooming, best barbershop Accra, Billionaire's Cut",
  authors: [{ name: "Billionaire's Cut" }],
  openGraph: {
    title: "Billionaire's Cut | Premium Barbershop in Accra",
    description: "Experience luxury grooming at Accra's finest barbershop. Rated 5.0★ by 63 customers.",
    url: "https://billionairescut.com",
    siteName: "Billionaire's Cut",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Billionaire's Cut Barbershop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billionaire's Cut | Premium Barbershop in Accra",
    description: "Experience luxury grooming at Accra's finest barbershop.",
    images: ["https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
