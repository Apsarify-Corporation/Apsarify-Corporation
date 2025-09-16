"use client";
import { Manrope } from 'next/font/google';
import "./globals.css";
// Components
import Navbar from "../components/Navbar";
import React from "react";
const manrope = Manrope({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={"bg-black text-white overflow-x-hidden " + manrope.className}>
        <Navbar className="fixed top-0 left-0 right-0 z-50" />
        {children}
      </body>
    </html>
  );
}
