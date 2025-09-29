"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { saveContactData } from "./save";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const offices = [
  {
    country: "NEPAL",
    title: "Headquarter - Nepal",
    address: "Kathmandu, Nepal",
  },
];

const Contact = () => {
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".contact-fade", {
        opacity: 0,
        y: 60,
        scale: 0.97,
        willChange: "transform, opacity",
      });
      tl.current && tl.current.kill();
      tl.current = gsap.timeline({ delay: 0.1 });
      tl.current.to(".contact-fade", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.18,
        onComplete: () => gsap.set(".contact-fade", { willChange: "auto" }),
      });
    });
    return () => {
      tl.current && tl.current.kill();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Contact Apsarify – Digital Agency Nepal | Start Your Project
        </title>
        <meta
          name="description"
          content="Contact Apsarify to discuss web development, app development, cloud, and AI solutions. Let's build your next big idea."
        />
        <meta
          property="og:title"
          content="Contact Apsarify – Digital Agency Nepal"
        />
        <meta
          property="og:description"
          content="Connect with Apsarify for digital solutions: web, app, cloud, and AI. Start your project today."
        />
        <meta property="og:image" content="/images/ABOUT.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apsarify.tech/contact" />
      </Head>
      <div className="h-screen bg-gradient-to-b from-black to-gray-900 px-4 pt-24 md:pt-28 pb-8 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto no-scrollbar p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <div className="contact-fade opacity-0 bg-[#232427] rounded-xl p-8 flex flex-col justify-center shadow-2xl border border-[#33353a] transition-all duration-1000">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8 tracking-wide leading-snug">
              YOUR VISION, OUR MISSION: <br /> LET&apos;S SHAPE SUCCESS
              TOGETHER.
            </h2>
            <form
              className="flex flex-col gap-5"
              action={async (formData) => {
                const res = await saveContactData(formData);
                // Basic client feedback via alert (could be replaced with state toast)
                if (res?.ok) {
                  alert("Submitted successfully");
                } else {
                  alert("Submission failed");
                }
              }}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition duration-1000"
              />
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition duration-1000"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition duration-1000"
              />
              <textarea
                placeholder="Describe Your Requirement"
                rows={4}
                name="description"
                className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition duration-1000 resize-none"
              />
              <button
                type="submit"
                className="mt-2 bg-white text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2 justify-center hover:bg-blue-500 hover:text-white transition-all duration-1000 shadow-lg"
              >
                Submit <FaArrowRight />
              </button>
            </form>
          </div>
          {/* Right: Offices */}
          <div className="contact-fade opacity-0 bg-[#232427] rounded-xl p-8 shadow-2xl border border-[#33353a] flex flex-col transition-all duration-1000">
            <span className="text-xs text-gray-400 tracking-widest mb-2">
              Get In Touch
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 leading-snug">
              CONNECT FOR EXCELLENCE: <br />
              <span className="font-normal">
                YOUR GATEWAY TO EXCEPTIONAL SOLUTIONS.
              </span>
            </h3>
            <div className="flex flex-col md:grid-cols-2 gap-1">
              {offices.map((office, idx) => (
                <>
                  <Image
                    className="text-4xl mb-2 "
                    src={`/images/${office.country.toLowerCase()}.png`}
                    alt={`${office.country} flag`}
                    width={48}
                    height={48}
                  />
                  <span className="text-white font-semibold">
                    {office.title}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {office.address}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
