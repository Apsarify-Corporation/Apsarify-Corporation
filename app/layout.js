"use client";
import { Manrope, Outfit, Poppins, Syne } from 'next/font/google';
import "./globals.css";
// Components
import Navbar from "../components/Navbar";
import React from "react";
const manrope = Manrope({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'], style: ['normal', 'italic'] });
const syne = Syne({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState("");
  return (
    <html lang="en">
      <body className={"bg-black text-white " + manrope.className}>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {children}
      </body>
    </html>
  );
}
