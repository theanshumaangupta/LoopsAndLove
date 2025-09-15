import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
});


const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Loops And Love",
  description: "Developed by Anshumaan Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
