import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stitch Google Repo",
  description: "Interactive 3D components with Spline and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
