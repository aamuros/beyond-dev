import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "beyond.dev — Custom Software Studio",
  description:
    "A senior software studio helping businesses design, build, and launch web apps, SaaS products, internal tools, automations, and AI-powered workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
