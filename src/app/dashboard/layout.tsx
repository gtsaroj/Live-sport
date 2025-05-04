import type React from "react";
import dynamic from "next/dynamic";
// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css";

// const inter = Inter({ subsets: ["latin"] });

// Lazy load dashboard layout
const DashboardLayout = dynamic(() => import("@/components/dashboard-layout").then(mod => mod.DashboardLayout), {
  loading: () => <div className="w-full h-screen bg-background" /> // Placeholder while loading
});

export const metadata = {
  title: "All Live Sports Dashboard",
  description: "Admin dashboard for managing sports content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
