"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <div className="flex">
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
        
      </body>
    </html>
  );
}
