import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christovel Slat - Personal Web",
  description: "Frontend-Focused Full Stack Developer Portfolio based in Indonesia. Specialized in React, Next.js, TypeScript, and modern UI Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
