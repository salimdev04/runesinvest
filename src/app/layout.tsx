import type { Metadata } from "next";
import { Roboto, Orbitron } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
