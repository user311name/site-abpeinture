import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AB Peinture — Peinture & Rénovation à Toulouse",
  description:
    "Peinture intérieure, extérieure, façades et rénovation à Toulouse et en Haute-Garonne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div className="pageShell">{children}</div>
        <Footer />
      </body>
    </html>
  );
}