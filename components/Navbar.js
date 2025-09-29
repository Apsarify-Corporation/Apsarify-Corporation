"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Poppins, Audiowide } from "next/font/google";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = useRef(null);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  // Initial navbar entrance animation (fires before page section animations)
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!nav.current) return;
    gsap.fromTo(
      nav.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        delay: 0,
        duration: prefersReduced ? 0 : 0.7,
        ease: "power3.out",
        onComplete: () => {
          // Mark nav ready & dispatch event for pages to sync their timelines
          try {
            nav.current?.setAttribute("data-nav-ready", "true");
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("navReady"));
            }
          } catch (_) {}
        },
      }
    );
  }, []);

  // Update navbar background on scroll (glassy when scrolled)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close with Escape when open
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Mobile sidebar slide animation using gsap
  useEffect(() => {
    if (!sidebarRef.current) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMenuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: prefersReduced ? 0 : 0.35,
        ease: "power2.out",
      });
      // Animate menu items
      gsap.fromTo(
        ".mobile-menu li",
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.25,
          stagger: prefersReduced ? 0 : 0.06,
          delay: prefersReduced ? 0 : 0.05,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".mobile-cta",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.25,
          delay: prefersReduced ? 0 : 0.2,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: prefersReduced ? 0 : 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const isActive = (path) => pathname === path;

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      ref={nav}
      style={{ opacity: 0, transform: "translateY(-50px)" }}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Apsarify Home"
        >
          <Logo className="w-10 h-10" />
          <span
            className={`font-[400] text-xl ${audiowide.className} bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent transition-colors`}
          >
            Apsarify
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className={`flex gap-8 font-light ${poppins.className}`}>
            <li>
              <Link
                href="/"
                className={`group relative ${
                  isActive("/")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                Home
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-transform duration-300 origin-left ${
                    isActive("/")
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`group relative ${
                  isActive("/about")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                About
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-transform duration-300 origin-left ${
                    isActive("/about")
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`group relative ${
                  isActive("/services")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                Services
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-transform duration-300 origin-left ${
                    isActive("/services")
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`group relative ${
                  isActive("/portfolio")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                Portfolio
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-transform duration-300 origin-left ${
                    isActive("/products")
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`group relative ${
                  isActive("/contact")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                Contact
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-transform duration-300 origin-left ${
                    isActive("/contact")
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            aria-label="Work with Apsarify"
            className="text-sm cursor-pointer rounded-full px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-sm hover:shadow-md hover:from-blue-400 hover:to-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
          >
            Work With Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-2xl z-50"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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
          id="mobile-menu"
          ref={sidebarRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className={`fixed top-0 right-0 h-screen w-72 bg-black/90 backdrop-blur text-white z-50 flex flex-col md:hidden border-l border-white/10`}
          style={{
            transform: "translateX(100%)",
            opacity: 0,
            pointerEvents: isMenuOpen ? "auto" : "none",
          }}
        >
          {/* Close Button */}
          <div className="flex justify-center mt-10 p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>
          {/* Sidebar Content */}
          <div
            className={`flex flex-col items-center justify-center h-full gap-10 ${poppins.className}`}
          >
            <ul className="mobile-menu flex flex-col items-center gap-8 text-lg font-[500]">
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
            <Link
              href="/contact"
              className="mobile-cta mt-4 text-sm rounded-full px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-sm hover:shadow-md hover:from-blue-400 hover:to-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
