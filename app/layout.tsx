import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fluxen - Ambitious Brands Grow Faster",
  description: "Data-driven digital marketing that blends creativity with strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      // className={`${inter.variable} h-full antialiased`}
      className={`h-full antialiased`}
    >
      {/* <body className="min-h-full flex flex-col bg-white"> */}
      <body className={`${inter.variable} min-h-full flex flex-col bg-white`}>
        <Navbar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
