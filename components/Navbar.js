"use client";

import { Manrope, Outfit, Poppins, Syne, Audiowide } from "next/font/google";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex px-5 py-5 items-center justify-between">
      {/* Logo */}
      <h1 className={"font-[400] text-xl " + audiowide.className}>
        <Link href="/">Apsarify</Link>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 w-250 justify-between">
        <ul className={"flex gap-10 font-light " + poppins.className}>
          <li className="w-15 flex text-center align-center">
            <Link href="/" className="duration-1000 text-sm hover:font-[500]">
              Home
            </Link>
          </li>
          <li className="w-15 flex text-center align-center">
            <Link
              href="/about"
              className="duration-1000 text-sm hover:font-[500]"
            >
              About
            </Link>
          </li>
          <li className="w-15 flex text-center align-center">
            <Link
              href="/services"
              className="duration-1000 text-sm hover:font-[500]"
            >
              Services
            </Link>
          </li>
          <li className="w-15 flex text-center align-center">
            <Link
              href="/products"
              className="duration-1000 text-sm hover:font-[500]"
            >
              Products
            </Link>
          </li>
          <li className="w-20 flex text-center align-center">
            <Link
              href="/contact"
              className="duration-1000 text-sm hover:font-[500]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="text-sm cursor-pointer border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition">
          Work With Us
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-2xl"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-black text-white z-50 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={
            "flex flex-col items-center justify-center h-full gap-10 " +
            poppins.className
          }
        >
          <ul className="flex flex-col items-center gap-8 text-lg font-[500]">
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="mt-10 text-sm border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition">
            Work With Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
