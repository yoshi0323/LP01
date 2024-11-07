import type { Metadata } from "next";
import { Abel, Noto_Sans_JP } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSansJP = Noto_Sans_JP({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "LPWS",
  description: "Lightweight Prompt Workbench System",
};

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${abel.className} ${notoSansJP.className} antialiased`}>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
