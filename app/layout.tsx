import { ReactNode } from "react";
import { Metadata } from "next";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import { TooltipProvider } from "@/components/ui/tooltip";

const NEXT_PUBLIC_SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
);

export const metadata: Metadata = {
  metadataBase: NEXT_PUBLIC_SITE_URL,
  openGraph: {
    images: [
      {
        url: "/light.png",
        width: 300,
        height: 100,
      },
    ],
  },
};

type RootLayoutProps = {
  children: Readonly<ReactNode>;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="bg">
      <body>
        <TooltipProvider>
          <ToastContainer />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}