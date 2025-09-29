"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { FaLightbulb, FaHandshake, FaLeaf } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  const tl = useRef();
  const pathname = usePathname();

  useEffect(() => {
    // Ordered animations: overline -> title -> media -> body -> badges -> stats
    gsap.set(
      [
        ".about-overline",
        ".about-title",
        ".about-media",
        ".about-body",
        ".about-badges > *",
        ".about-stats .stat-card",
      ],
      { opacity: 0, y: 40 }
    );

    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 0.8 });
    tl.current
      .to(".about-overline", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        ".about-title",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.05"
      )
      .to(".about-media", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        ".about-body",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(".about-badges > *", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
      })
      .to(
        ".about-stats .stat-card",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        },
        "+=0.1"
      );

    return () => {
      tl.current && tl.current.kill();
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <title>
          About Apsarify – Digital Agency Nepal | Web & Cloud Experts
        </title>
        <meta
          name="description"
          content="Discover Apsarify, a Kathmandu-based digital agency delivering web, cloud, and AI solutions for businesses in Nepal and worldwide."
        />
        <meta
          property="og:title"
          content="About Apsarify – Digital Agency Nepal"
        />
        <meta
          property="og:description"
          content="Discover Apsarify, a Kathmandu-based digital agency delivering web, cloud, and AI solutions for businesses in Nepal and worldwide."
        />
        <meta property="og:image" content="/images/ABOUT.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apsarify.tech/about" />
      </Head>
      <div className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 sm:px-5 pt-20 sm:pt-24 pb-4 sm:pb-6 text-white grid grid-rows-[auto,1fr,auto]">
        {/* Decorative gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-32 right-10 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl"
        />

        {/* Overline */}
        <div className="about-overline text-center">
          <p className="text-xs sm:text-sm font-light text-gray-300 tracking-wider uppercase">
            Who we are
          </p>
          <span className="mt-2 block h-[2px] w-14 sm:w-16 mx-auto bg-gradient-to-r from-blue-400/70 to-violet-400/70 rounded" />
        </div>

        {/* Title */}
        <h1 className="about-title text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mt-3 sm:mt-6 bg-gradient-to-r from-white via-blue-200 to-violet-200 bg-clip-text text-transparent leading-tight">
          Building Solutions of Your Problems
        </h1>

        {/* Content */}
        <section className="min-h-0 overflow-hidden grid grid-cols-2 gap-4 sm:gap-8 items-stretch max-w-6xl mx-auto mt-5 sm:mt-8">
          {/* Media */}
          <div className="about-media relative col-span-2 md:col-span-1 min-h-[240px] sm:min-h-[300px] md:h-full">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-md"
            />
            <div className="relative h-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/images/ABOUT.png"
                alt="Apsarify team collaborating on a project"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Body */}
          <div
            className={`about-body min-h-0 overflow-hidden ${poppins.className} col-span-2 md:col-span-1`}
          >
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold">
              Empowering progress through technology
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 font-light">
              Apsarify is a team of innovators and problem-solvers dedicated to
              building technology that shapes the future. We value
              <span className="font-medium text-white"> integrity</span>,
              <span className="font-medium text-white"> excellence</span>, and
              <span className="font-medium text-white"> collaboration</span>.
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 font-light">
              Our diverse experts deliver creative solutions and foster a
              culture of continuous learning and growth.
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 font-light">
              We strive to make a positive impact for our clients and society
              through sustainable, ethical practices.
            </p>

            {/* Values badges */}
            <div className="about-badges mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs sm:text-sm bg-white/5 border border-white/10">
                <FaHandshake className="text-blue-300" aria-hidden /> Integrity
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs sm:text-sm bg-white/5 border border-white/10">
                <FaLightbulb className="text-yellow-300" aria-hidden />{" "}
                Excellence
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs sm:text-sm bg-white/5 border border-white/10">
                <FaLeaf className="text-emerald-300" aria-hidden /> Sustainable
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats grid grid-cols-2 md:grid-cols-4 place-items-center gap-3 sm:gap-5 max-w-6xl mx-auto mt-4 sm:mt-6">
          <div className="stat-card rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3 sm:p-5 text-center flex flex-col items-center justify-center min-h-24 sm:min-h-28 w-full">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              400+
            </span>
            <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Projects Completed
            </span>
          </div>
          <div className="stat-card rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3 sm:p-5 text-center flex flex-col items-center justify-center min-h-24 sm:min-h-28 w-full">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              15+
            </span>
            <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Successful Years
            </span>
          </div>
          <div className="stat-card rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3 sm:p-5 text-center flex flex-col items-center justify-center min-h-24 sm:min-h-28 w-full">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              98%
            </span>
            <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Client Retention
            </span>
          </div>
          <div className="stat-card rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-3 sm:p-5 text-center flex flex-col items-center justify-center min-h-24 sm:min-h-28 w-full">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              30+
            </span>
            <span className="block mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Countries
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
