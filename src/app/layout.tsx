/*
 *  Copyright (c) 2025 Redcloud Development, Ltd.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 */

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
   title: "Christchurch Response Teams",
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return <html lang="en-nz">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        >
            {children}
        </body>
    </html>
}
