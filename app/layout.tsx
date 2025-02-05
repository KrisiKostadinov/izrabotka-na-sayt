import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import { TooltipProvider } from "@/components/ui/tooltip";

const NEXT_PUBLIC_SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: NEXT_PUBLIC_SITE_URL,
  openGraph: {
    images: "/light.png",
  },
};

type RootLayoutProps = {
  children: Readonly<ReactNode>;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="bg">
      <body>
        <main className="w-full min-h-screen">
          <TooltipProvider>
            <Navbar />
            <ToastContainer />
            {children}
          </TooltipProvider>
        </main>
      </body>
    </html>
  );
}
