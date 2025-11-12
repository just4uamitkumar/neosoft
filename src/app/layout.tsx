// layout.tsx (final version)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/(shared)/header";
import Footer from "./(components)/(shared)/footer";
import { ThemeProvider } from "./providers/themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoSoft",
  description: "NeoSoft Application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-800 transition-colors duration-200`}
      >
        <ThemeProvider>
          <Header />
          <main className="w-full max-w-full min-[1024px]:max-w-[900px] min-[1181px]:max-w-[1000px] min-[1367px]:max-w-[1200px] min-[1601px]:max-w-[1500px] mx-auto flex-grow w-full py-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}