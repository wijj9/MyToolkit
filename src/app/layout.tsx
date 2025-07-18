import "./globals.css";

import React from "react";
import { Fira_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import MainLayout from "@/components/wrappers/Main";
import QueryProvider from "@/providers/QueryProvider";
import DataProvider from "@/providers/DataProvider";

import type { Metadata } from "next";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Toolkit",
  description: "My daily toolkit",
  keywords:
    "opensource, toolkit, utilities, tools, components, developers, community",
  openGraph: {
    title: "My Toolkit",
    description: "My daily toolkit",
    type: "website",
    url: "https://opensourcetoolkit.com",
    siteName: "OpenSourceToolkit",
    images: [
      {
        url: "https://opensourcetoolkit.com/seo/1.png",
        width: 1200,
        height: 630,
        alt: "My Toolkit - Your go-to source for open-source tools.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Toolkit",
    description: "My daily toolkit.",
    images: ["https://opensourcetoolkit.com/seo/1.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-6Q3EJCYDZ6" />

      <body className={`${firaSans.className} dark antialiased`}>
        <QueryProvider>
          <DataProvider>
            <MainLayout>{children}</MainLayout>
          </DataProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
