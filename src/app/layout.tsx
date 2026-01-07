import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "День Програміста 2026 🎉 | 7 січня",
  description: "Святкуємо День Програміста в Україні! Дізнайся цікаві факти про програмування та знайди 12 прихованих пасхалок.",
  keywords: ["День Програміста", "7 січня", "Україна", "програмування", "свято"],
  authors: [{ name: "IPD Team" }],
  openGraph: {
    title: "День Програміста 2026 🎉",
    description: "Святкуємо День Програміста в Україні! 7 січня",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
