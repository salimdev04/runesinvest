import type { Metadata } from "next";
import { Roboto, Orbitron } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runes Academy",
  description: "THE ALPHA YOU NEED TO GET YOUR GENERATIONAL WEALTH WITH RUNES",
};

const roboto = Roboto({ weight: ['100', '300', '400', '700'], subsets: ['latin'], variable: '--font-roboto', })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
