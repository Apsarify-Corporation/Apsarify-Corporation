"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

// Product offerings (merged from products page)
const products = [
  {
    name: "Apsarify Commerce",
    blurb:
      "Headless commerce platform for blazing-fast storefronts and unified checkout.",
    bullets: ["Headless API", "Multi-store", "Payments"],
    href: "/contact?interest=Apsarify%20Commerce",
  },
  {
    name: "Apsarify CMS",
    blurb:
      "Content platform for marketers and devs with roles, workflows, and previews.",
    bullets: ["Roles", "Workflows", "Preview"],
    href: "/contact?interest=Apsarify%20CMS",
  },
  {
    name: "Apsarify AI Studio",
    blurb:
      "Embed AI assistants, RAG, and automations into your apps with guardrails.",
    bullets: ["RAG", "Workflows", "Guardrails"],
    href: "/contact?interest=Apsarify%20AI%20Studio",
  },
  {
    name: "Apsarify Cloud Edge",
    blurb:
      "Global edge deploys, image/CDN optimization, and observability out of the box.",
    bullets: ["Edge", "CDN", "Observability"],
    href: "/contact?interest=Apsarify%20Cloud%20Edge",
  },
];

const projects = [
  {
    title: "Apsarify AI Platform",
    desc: "A next-gen AI-powered SaaS platform for business automation and analytics.",
    image: "/images/bg.jpg",
    link: "#",
    tags: ["AI", "SaaS", "Automation"],
  },
  {
    title: "E-Commerce Suite",
    desc: "Robust, scalable e-commerce solution with seamless payment and inventory integration.",
    image: "/images/bg.jpg",
    link: "#",
    tags: ["E-Commerce", "Web", "Payments"],
  },
  {
    title: "Mobile Banking App",
    desc: "Secure, intuitive mobile banking for millions of users worldwide.",
    image: "/images/bg.jpg",
    link: "#",
    tags: ["Fintech", "Mobile", "Security"],
  },
  {
    title: "Healthcare Portal",
    desc: "Patient-centric portal for appointments, records, and telemedicine.",
    image: "/images/bg.jpg",
    link: "#",
    tags: ["Healthcare", "Portal", "Telemedicine"],
  },
];

const Portfolio = () => {
  const tl = useRef();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const baseDuration = prefersReduced ? 0 : 1;

    const prep = () => {
      gsap.set(
        [
          ".portfolio-title",
          ".product-section-title",
          ".case-section-title",
          ".product-card",
          ".portfolio-card",
        ],
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
        }
      );
      tl.current && tl.current.kill();
      tl.current = gsap.timeline({ delay: prefersReduced ? 0 : 0.15 });
      tl.current
        .to(".portfolio-title", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: baseDuration,
          ease: "expo.out",
        })
        .to(
          ".product-section-title",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            ease: "expo.out",
          },
          "-=0.6"
        )
        .to(
          ".product-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            ease: "expo.out",
            stagger: prefersReduced ? 0 : 0.15,
          },
          "-=0.4"
        )
        .to(
          ".case-section-title",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            ease: "expo.out",
          },
          "-=0.5"
        )
        .to(
          ".portfolio-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            ease: "expo.out",
            stagger: prefersReduced ? 0 : 0.18,
          },
          "-=0.4"
        );
    };

    // If navbar already finished (attribute set), start immediately; else wait for event
    const navEl = document.querySelector('nav[data-nav-ready="true"]');
    if (navEl) {
      prep();
    } else {
      const onNavReady = () => {
        prep();
        window.removeEventListener("navReady", onNavReady);
      };
      window.addEventListener("navReady", onNavReady);
    }
    return () => {
      tl.current && tl.current.kill();
      window.removeEventListener("navReady", () => {});
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Products & Portfolio | Apsarify – Solutions & Case Studies
        </title>
        <meta
          name="description"
          content="Explore Apsarify's product suite and real project portfolio – SaaS, AI, commerce, fintech, healthcare, and more. Request the solution you need."
        />
        <meta property="og:title" content="Products & Portfolio | Apsarify" />
        <meta
          property="og:description"
          content="See Apsarify's products and delivered projects. Discover what's possible and request a tailored solution."
        />
        <meta property="og:image" content="/images/ABOUT.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apsarify.tech/portfolio" />
      </Head>
      <div className="bg-gradient-to-b from-black to-gray-900 h-screen px-4 pt-24 md:pt-28 pb-8 flex flex-col">
        {/* Title */}
        <div className="portfolio-fade portfolio-title opacity-0 flex flex-col items-center mb-10">
          <span className="text-xs text-gray-400 tracking-widest mb-2">
            Products & Work
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center max-w-4xl leading-snug">
            BUILD WITH CONFIDENCE: PRODUCT SUITE & REAL-WORLD IMPACT
          </h1>
          <p className="text-gray-400 text-base mt-4 max-w-2xl text-center">
            Browse our platform offerings and the projects we&#39;ve delivered.
            Get inspired and request the exact solution you need.
          </p>
        </div>
        {/* Scrollable area */}
        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar hide-scrollbar max-w-7xl mx-auto space-y-16 pb-10">
          {/* Products Section */}
          <section aria-labelledby="products-heading" className="space-y-6">
            <div className="product-section-title opacity-0">
              <h2
                id="products-heading"
                className="text-white text-xl font-semibold tracking-wide mb-2"
              >
                Product Suite
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl">
                Modular platforms you can adopt individually or combine for an
                end-to-end stack.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="product-card opacity-0 bg-[#232427] border border-[#33353a] rounded-xl p-6 flex flex-col items-start shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-1000"
                >
                  <h3 className="text-white text-lg font-semibold mb-2 text-left">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 text-left">
                    {p.blurb}
                  </p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {p.bullets.map((b) => (
                      <span
                        key={b}
                        className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={p.href}
                    className="mt-auto inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition duration-1000"
                    aria-label={`Request details about ${p.name}`}
                  >
                    Request This
                  </Link>
                </div>
              ))}
            </div>
          </section>
          {/* Portfolio Section */}
          <section aria-labelledby="portfolio-heading" className="space-y-6">
            <div className="case-section-title opacity-0">
              <h2
                id="portfolio-heading"
                className="text-white text-xl font-semibold tracking-wide mb-2"
              >
                Case Studies
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl">
                A snapshot of solutions we&#39;ve engineered across industries.
                Want something similar? Request it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="portfolio-fade portfolio-card opacity-0 bg-[#232427] border border-[#33353a] rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-1000 flex flex-col"
                >
                  <div className="h-40 w-full rounded-t-xl">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      className="object-cover w-full h-full transition-transform duration-1000 hover:scale-110"
                      width={320}
                      height={160}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {proj.desc}
                    </p>
                    <div className="mt-auto flex items-center gap-4">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-200 text-sm font-semibold"
                      >
                        View <FaExternalLinkAlt size={14} />
                      </a>
                      <Link
                        href={`/contact?interest=${encodeURIComponent(
                          "Similar: " + proj.title
                        )}`}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition"
                        aria-label={`Request a similar project to ${proj.title}`}
                      >
                        Request Similar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
