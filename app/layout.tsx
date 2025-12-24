import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sinceai.fi"),
  title: "Since AI Community - AI Developers & Hackathon Partnerships",
  description: "Join 500+ AI developers in Finland's most vibrant AI community. Partner with innovation leaders. Custom partnerships, real results.",
  keywords: ["AI community", "hackathon", "Finland", "developers", "machine learning", "artificial intelligence", "partnership"],
  authors: [{ name: "Since AI" }],
  openGraph: {
    title: "Since AI Community - AI Developers & Hackathon Partnerships",
    description: "Join 500+ AI developers. Partner with innovation leaders.",
    url: "https://sinceai.fi",
    siteName: "Since AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/logo/logo_full.png",
        width: 1200,
        height: 630,
        alt: "Since AI Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Since AI Community - AI Developers & Hackathon Partnerships",
    description: "Join 500+ AI developers. Partner with innovation leaders.",
    images: ["/assets/logo/logo_full.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
