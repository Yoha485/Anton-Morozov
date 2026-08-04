import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anton-morozov.dev"),
  title: "Anton Morozov Software Development",
  description:
    "Software developer in Warszawa, Poland. I design and build web applications for product companies in the EU — long-term, remote, B2B engagements.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anton Morozov Software Development",
    description:
      "Software developer in Warszawa, Poland. I design and build web applications for product companies in the EU — long-term, remote, B2B engagements.",
    url: "https://anton-morozov.dev",
    siteName: "Anton Morozov Software Development",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
