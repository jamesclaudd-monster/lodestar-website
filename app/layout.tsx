import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "./site-shell";

export const metadata: Metadata = {
  title: "IUNGO Technology — AI & Software Engineering",
  description: "Global AI, software engineering and digital product delivery.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}