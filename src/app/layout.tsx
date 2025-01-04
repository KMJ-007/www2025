import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ArenaQuote from "@/components/ArenaQuote";
import Navigation from "@/components/Navigation";

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
        <div className="min-h-screen p-4">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 p-4">
            <div className="flex-1">
              <header className="flex flex-col gap-4 sm:mt-0 mt-12">
                <h1 className="text-4xl font-bold">
                  Karan Janthe
                </h1>
                <h2 className="text-xl text-[#ededed70]">
                  ARE YOU IN THE... <ArenaQuote />
                </h2>
              </header>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <Navigation />
                <main className="flex-1">
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
