import "../../globals.css";
import { fontClassName } from "../../fonts";
import { buildMetadata } from "../../metadata";
import { en } from "../../content";

export const metadata = buildMetadata(en);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClassName}>
      <body className="font-body">{children}</body>
    </html>
  );
}
