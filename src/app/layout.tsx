import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Live Sports",
    default:
      "Live Sports - Watch Football, Cricket, Basketball & Hockey Matches",
  },
  description:
    "Watch live football, cricket, basketball and hockey matches. Get updates on upcoming matches and highlights of recent games.",
  keywords: [
    "live sports",
    "football live",
    "cricket live",
    "basketball live",
    "hockey live",
    "sports streaming",
    "match highlights",
  ],
  metadataBase: new URL("https://alllivesports.vercel.app"),
  openGraph: {
    title: "Live Sports - Watch Live Matches Online",
    description:
      "Stream live football, cricket, basketball and hockey matches. Stay updated with upcoming fixtures and match highlights.",
    url: "https://alllivesports.vercel.app",
    siteName: "Live Sports",
    images: [
      {
        url: "https://alllivesports.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Live Sports - Watch Live Matches Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Sports - Watch Live Matches Online",
    description:
      "Stream live football, cricket, basketball and hockey matches. Stay updated with upcoming fixtures and match highlights.",
    images: ["https://alllivesports.vercel.app/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alllivesports.vercel.app",
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
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />
        <div className="w-screen flex  justify-center  ">
          <div className="w-full flex items-center max-w-[1500px] justify-center h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
