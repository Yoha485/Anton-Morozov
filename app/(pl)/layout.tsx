import "../globals.css";
import { fontClassName } from "../fonts";
import { buildMetadata } from "../metadata";
import { pl } from "../content";

export const metadata = buildMetadata(pl);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={fontClassName}>
      <body className="font-body">{children}</body>
    </html>
  );
}
