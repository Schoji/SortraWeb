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
  title: "Sortra",
  description: "The ultimate file organization tool that sorts your files with simple drag-and-drop functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Sortra – File Organization Made Simple</title>
        <meta name="title" content="Sortra – File Organization Made Simple" />
        <meta name="description" content="Organize files effortlessly with Sortra – a fast, cross-platform file organization tool. Built with privacy and simplicity in mind." />

        <link rel="icon" type="image/x-icon" href="/logo.ico" />
        <meta name="keywords" content="Sortra, file organizer, file sorter, Tauri app, organize files, cross-platform app, open source file tool" />
        <meta name="author" content="Piotr Wittig" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
