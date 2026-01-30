import type {Metadata} from "next";
import {Google_Sans} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Gemini Clone",
  description:
    "An AI-powered conversational interface built with Next.js, Tailwind CSS, and Framer Motion, inspired by Google Gemini.",
    icons:{
      icon:'/logo.png',
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
