import { IBM_Plex_Sans, Newsreader } from "next/font/google";

export const display = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const body = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const fontClassName = `${display.variable} ${body.variable}`;
