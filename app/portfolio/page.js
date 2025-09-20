"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Apsarify AI Platform",
    desc: "A next-gen AI-powered SaaS platform for business automation and analytics.",
    image: "/images/portfolio1.jpg",
    link: "#",
    tags: ["AI", "SaaS", "Automation"],
  },
  {
    title: "E-Commerce Suite",
    desc: "Robust, scalable e-commerce solution with seamless payment and inventory integration.",
    image: "/images/portfolio2.jpg",
    link: "#",
    tags: ["E-Commerce", "Web", "Payments"],
  },
  {
    title: "Mobile Banking App",
    desc: "Secure, intuitive mobile banking for millions of users worldwide.",
    image: "/images/portfolio3.jpg",
    link: "#",
    tags: ["Fintech", "Mobile", "Security"],
  },
  {
    title: "Healthcare Portal",
    desc: "Patient-centric portal for appointments, records, and telemedicine.",
    image: "/images/portfolio4.jpg",
    link: "#",
    tags: ["Healthcare", "Portal", "Telemedicine"],
  },
];

const Portfolio = () => {
  const tl = useRef();

  useEffect(() => {
    gsap.set(".portfolio-fade", { opacity: 0, y: 60, scale: 0.97 });
    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 0.7 });
    tl.current
      .to(".portfolio-title", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "expo.out",
      })
      .to(
        ".portfolio-card",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.18,
        },
        "-=0.6"
      );
    return () => tl.current && tl.current.kill();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Apsarify</title>
        <meta
          name="description"
          content="See Apsarify's portfolio: AI platforms, e-commerce, fintech, healthcare, and more. Proven results for global clients."
        />
      </Head>
      <div className="pt-15 bg-gradient-to-b from-black h-screen to-gray-900 flex flex-col items-center justify-center px-4 py-10">
        {/* Title */}
        <div className="portfolio-fade portfolio-title opacity-0 flex flex-col items-center mb-12">
          <span className="text-xs text-gray-400 tracking-widest mb-2">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl leading-snug">
            PORTFOLIO: INNOVATION DELIVERED, IMPACT CREATED.
          </h2>
          <p className="text-gray-400 text-base mt-4 max-w-xl text-center">
            Explore a selection of our proudest projects, crafted with passion,
            precision, and purpose.
          </p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="portfolio-fade portfolio-card opacity-0 bg-[#232427] border border-[#33353a] rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer flex flex-col"
            >
              <div className="h-40 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
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
                <p className="text-gray-400 text-sm mb-4 flex-1">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-200 text-sm font-semibold mt-auto"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
