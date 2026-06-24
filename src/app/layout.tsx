import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VentureVerse AI — Startup Intelligence & Prediction",
  description: "VentureVerse AI is a premium SaaS startup intelligence platform that helps founders analyze and simulate startup ideas before launching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col lg:flex-row bg-navy text-cream overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 min-h-screen overflow-y-auto w-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}
