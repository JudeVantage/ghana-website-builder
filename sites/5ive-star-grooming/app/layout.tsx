import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5IVE STAR GROOMING | Black Star Grooming Excellence | Premium Barbershop in East Legon, Ghana",
  description: "Experience Black Star grooming excellence at 5IVE STAR GROOMING. Where Ghana's finest gentlemen get refined. Premium barbershop services opposite UPSA, East Legon. Rated 4.8★ by 40 customers. Proudly Ghanaian.",
  keywords: "barbershop East Legon, premium haircut Ghana, UPSA barber, 5-star grooming, best barbershop Accra, 5IVE STAR GROOMING, Black Star Grooming, Ghanaian barbershop, luxury grooming Ghana",
  authors: [{ name: "5IVE STAR GROOMING" }],
  openGraph: {
    title: "5IVE STAR GROOMING | Black Star Grooming Excellence",
    description: "Where Ghana's finest gentlemen get refined. 5-star service, every time. Rated 4.8★ by 40 customers.",
    url: "https://5ivestargrooming.com",
    siteName: "5IVE STAR GROOMING",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/images/5star-logo.png",
        width: 1200,
        height: 630,
        alt: "5IVE STAR GROOMING - Black Star Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5IVE STAR GROOMING | Black Star Grooming Excellence",
    description: "Where Ghana's finest gentlemen get refined. Proudly Ghanaian.",
    images: ["/images/5star-logo.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
