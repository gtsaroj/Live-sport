import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import ClarityInit from "@/components/clarity";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AllLiveSports - Live Sports Streaming",
    template: "%s | AllLiveSports",
  },
  description: {
    default: "Watch live, upcoming, and highlight matches across Football, Cricket, and Basketball",
    template: "%s | AllLiveSports",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <link rel="icon" href="/favicon.ico" /> {/* 👈 Add favicon here */}
        <meta name="description" content={metadata.description?.default} />
        <title>{metadata.title?.default}</title>
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClarityInit />
          <Analytics />
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8095278472617735"
        crossOrigin="anonymous"></script>
    </html>
  );
}
