import type { Metadata } from "next";
import Link from "next/link";
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

// All fonts default to Times New Roman via globals.css

export const metadata: Metadata = {
  title: "Acsetra — AI Intelligence for Law Firms",
  description:
    "Acsetra accelerates M&A due diligence with accurate document analysis and task automation for law firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        {/* Sticky site header */}
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white" style={{fontFamily: 'Times New Roman, Times, serif'}}>
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            <div className="flex flex-col">
              <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-wider uppercase text-black">
                ACSETRA
              </Link>
              <span className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-neutral-500">
                Legal Intelligence Platform
              </span>
            </div>
            <div className="text-right">
              <div className="text-base sm:text-lg font-bold text-black">Contra</div>
              <div className="text-xs sm:text-sm text-neutral-500">
                Partnered with FTA, trusted IT since 1982
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
