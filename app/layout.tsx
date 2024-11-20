import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

import { METADATA } from "@/utils/metadata";

import AppSidebar from "@/components/ui/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { TouchProvider } from "@/context/touch-provider";
import { SharkDataProvider } from "@/context/shark-data-context";

const urbane = localFont({
  src: [
    {
      path: "./fonts/urbane-extra-light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/urbane-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/urbane-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/urbane-semi-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/urbane-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/urbane-heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = METADATA({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={` ${urbane.className} antialiased`}>
        <TouchProvider>
          <SharkDataProvider>
            <SidebarProvider>
              <AppSidebar>{children}</AppSidebar>
            </SidebarProvider>
          </SharkDataProvider>
        </TouchProvider>
      </body>
    </html>
  );
}
