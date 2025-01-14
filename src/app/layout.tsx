import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ArenaQuote from "@/components/ArenaQuote";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Janthe",
  description: "Serial key presser! I play minecraft & factorio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <div className="min-h-screen px-3 py-2 sm:px-4 sm:py-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
            <div className="flex-1 max-w-[680px] mx-auto w-full">
              <header className="flex flex-col gap-3 mt-6 sm:mt-0 mb-8">
                <Link href="/" className="hover:opacity-80 transition-opacity w-fit">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                    Karan Janthe
                  </h1>
                </Link>
                <ArenaQuote />
              </header>
              
              <div className="flex flex-col gap-8">
                <Navigation />
                <main className="flex-1 pb-24">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
