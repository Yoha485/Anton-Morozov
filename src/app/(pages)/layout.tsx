import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Navigation } from "@widgets/navigation";

import "../../../public/globals.css";
import clsx from "clsx";
import { BackgroundShape } from "@/src/widgets/backgroundShape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Morozov",
  description: "Morozov Anton Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          inter.className,
          "relative flex min-h-[100dvh] flex-col overflow-hidden bg-white text-black dark:bg-[#1a1a1a] dark:text-white",
        )}
      >
        <div className="z-[100]">
          <Navigation />
          {children}
        </div>
        
        <BackgroundShape />
      </body>
      {process.env.NODE_ENV !== "development" && <Analytics />}
    </html>
  );
}
