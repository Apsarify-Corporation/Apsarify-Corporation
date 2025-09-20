"use client";
import { Manrope } from "next/font/google";
import Head from "next/head";
import gsap from "gsap";
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
    // Reset all animated elements before animation
    gsap.set(".animate-home", { opacity: 0, y: 50 });

    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 1 });

    tl.current.to(".animate-home", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });

    return () => {
      tl.current && tl.current.kill();
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <title>
          Apsarify — Elevate Your Vision, Ignite Tomorrow&#39;s Innovation
        </title>
        <meta
          name="description"
          content="Apsarify: Full-stack web, cloud, and AI solutions. Elevate your business with innovative technology and expert services."
        />
      </Head>
      <div className="bg-1 h-screen pt-25 w-full bg-no-repeat bg-cover flex flex-col py-13 font-bold overflow-hidden relative">
        {/* Video Background */}
        <video
          src="/overlays/overlay.mp4"
          autoPlay
          loop
          muted
          className="opacity-30 absolute h-screen w-full object-cover top-0 left-0 z-0"
        />

        {/* Animated Heading */}
        <h2
          className={
            "z-10 text-4xl font-normal mx-auto bg-gradient-to-r px-3 from-white to-[#fafafa30] bg-clip-text text-transparent text-center animate-home opacity-0 " +
            manrope.className
          }
        >
          <span className="animate-home opacity-0">
            {"ELEVATE YOUR VISION, IGNITE "}
          </span>
          <span className="animate-home opacity-0">
            {"TOMORROW'S INNOVATION."}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="z-10 font-light text-md text-center my-5 overflow-hidden animate-home opacity-0">
          Crafting Digital Excellence for a Future <br /> Beyond Imagination.
        </p>
      </div>
    </>
  );
}
