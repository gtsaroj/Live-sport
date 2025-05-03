import type React from "react";
// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider"
import { DashboardLayout } from "@/components/dashboard-layout";
import "@/app/globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
