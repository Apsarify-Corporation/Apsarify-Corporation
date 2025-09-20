"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Poppins, Audiowide } from "next/font/google";
import gsap from "gsap";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.to(nav.current, {
      opacity: 1,
      y: 0,
      delay: 1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Squeezing effect for sidebar using gsap.to
  useEffect(() => {
    if (isMenuOpen && sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "right",
      });
    } else if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        scaleX: 0.8,
        opacity: 0.7,
        duration: 0.2,
        ease: "power2.in",
        transformOrigin: "right",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav
      className="flex px-5 py-5 w-full  items-center justify-between fixed z-50"
      ref={nav}
      style={{ opacity: 0, transform: "translateY(-50px)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 group"
        aria-label="Apsarify Home"
      >
        <Logo className="w-10 h-10" />
        <span
          className={`font-[400] text-xl ${audiowide.className} group-hover:text-blue-400 transition-colors`}
        >
          Apsarify
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className={`flex gap-10 font-light ${poppins.className}`}>
          <li className="w-15">
            <Link href="/">Home</Link>
          </li>
          <li className="w-15">
            <Link href="/about">About</Link>
          </li>
          <li className="w-15">
            <Link href="/services">Services</Link>
          </li>
          <li className="w-15">
            <Link href="/products">Products</Link>
          </li>
          <li className="w-15">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="text-sm cursor-pointer border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition">
          Work With Us
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-2xl z-50"
        aria-label="Open menu"
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
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-72 bg-black text-white z-50 flex flex-col md:hidden`}
        style={{
          transformOrigin: "right",
          display: isMenuOpen ? "flex" : "none", // Hide when closed
        }}
      >
        {/* Close Button */}
        <div className="flex justify-center mt-10 p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FaTimes size={24} />
          </button>
        </div>
        {/* Sidebar Content */}
        <div
          className={`flex flex-col items-center justify-center h-full gap-10 ${poppins.className}`}
        >
          <ul className="flex flex-col items-center gap-8 text-lg font-[500]">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
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
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="mt-10 text-sm border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Work With Us
          </button>
        </div>
      </div>
    </nav>
  );
}
