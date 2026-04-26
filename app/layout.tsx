import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christovel Slat - Personal Web",
  description: "Backend-Focused Full Stack Developer Portfolio based in Indonesia. Specialized in Java, Spring Boot, React, and robust API Architectures.",
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
