"use client";
import { Manrope } from "next/font/google";
import Head from "next/head";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const tl = useRef();
  const pathname = usePathname();

  useEffect(() => {
    // Reset elements before animation in strict order: title -> subtitle -> buttons
    gsap.set([".hero-title", ".hero-subtitle"], { opacity: 0, y: 40 });
    gsap.set(".hero-ctas > *", { opacity: 0, y: 40 });

    tl.current && tl.current.kill();
    tl.current = gsap.timeline();

    tl.current
      .to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      })
      .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(".hero-ctas > *", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });

    return () => {
      tl.current && tl.current.kill();
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <title>
          APSARIFY - ELEVATE YOUR VISION, IGNITE TOMORROW&#39;S INNOVATION.
        </title>
        <meta
          name="description"
          content="Apsarify is a global digital agency delivering high-performance web, cloud, and AI solutions for forward-thinking businesses worldwide."
        />
        <meta
          property="og:title"
          content="Web Development & Cloud Innovation – Apsarify"
        />
        <meta
          property="og:description"
          content="Apsarify is a global digital agency delivering high-performance web, cloud, and AI solutions for forward-thinking businesses worldwide."
        />
        <meta property="og:image" content="/images/ABOUT.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apsarify.tech/" />
      </Head>
      <div className="bg-1 h-screen w-full bg-no-repeat bg-cover flex flex-col font-bold overflow-hidden relative items-center justify-center px-4">
        {/* Video Background */}
        <video
          src="/overlays/overlay.mp4"
          autoPlay
          loop
          muted
          className="opacity-30 absolute h-screen w-full object-cover top-0 left-0 z-0"
        />

        {/* Readability Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-0"
        />

        {/* Animated Heading */}
        <h1
          className={
            "hero-title z-10 text-5xl sm:text-6xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mx-auto bg-gradient-to-r px-3 from-white to-blue-300/70 bg-clip-text w-2/3 text-transparent text-center drop-shadow-lg opacity-0 " +
            manrope.className
          }
        >
          <span>{"ELEVATE YOUR VISION, IGNITE "}</span>
          <span>{"TOMORROW'S INNOVATION."}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle z-10 font-light text-lg sm:text-xl md:text-2xl text-center mt-4 mb-8 max-w-3xl mx-auto opacity-0 text-white/90">
          Empowering global brands with cutting-edge web, cloud, and AI
          solutions.
        </p>

        {/* Call To Actions */}
        <div className="hero-ctas z-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/services"
            aria-label="Explore services"
            className="opacity-0 inline-flex items-center justify-center rounded-full px-6 py-3 text-base md:text-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Apsarify"
            className="opacity-0 inline-flex items-center justify-center rounded-full px-6 py-3 text-base md:text-lg font-semibold bg-transparent border border-white/70 text-white hover:bg-white/10 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
