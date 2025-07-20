import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "FormatX - PDF Tools & Editor",
  description: "Every tool you need to work with PDFs in one place. Merge, split, compress, convert, rotate, unlock, and watermark PDFs effortlessly.",
  keywords: ["PDF", "PDF tools", "PDF editor", "merge PDF", "split PDF", "compress PDF", "convert PDF"],
  authors: [{ name: "Yasir G." }],
  openGraph: {
    title: "FormatX - PDF Tools & Editor",
    description: "Every tool you need to work with PDFs in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormatX - PDF Tools & Editor",
    description: "Every tool you need to work with PDFs in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <HeaderWrapper />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
