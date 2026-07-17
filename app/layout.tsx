import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Setare Studios — Floral Design",
  description: "Season-led, sculptural floral design for celebrations, gatherings, and beautiful everyday gestures in Northern Virginia.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Setare Studios — Floral Design", description: "Flowers, composed. Expressive floral design rooted in season and story.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
