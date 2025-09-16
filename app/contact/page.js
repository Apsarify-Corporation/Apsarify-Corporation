"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const offices = [
  {
    country: "NEPAL",
    title: "Headquarter - Nepal",
    address: "Kathmandu, Nepal",
  }
];

const Contact = () => {
  const tl = useRef();

  useEffect(() => {
    gsap.set(".contact-fade", { opacity: 0, y: 60, scale: 0.97 });
    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 0.7 });
    tl.current
      .to(".contact-fade", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.18,
      });
    return () => tl.current && tl.current.kill();
  }, []);

  return (
    <div className="min-h-[90vh]  bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div className="contact-fade bg-[#232427] rounded-xl p-8 flex flex-col justify-center shadow-2xl border border-[#33353a]">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8 tracking-wide leading-snug">
            YOUR VISION, OUR MISSION: <br /> LET&apos;S SHAPE SUCCESS TOGETHER.
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition"
            />
            <textarea
              placeholder="Describe Your Requirement"
              rows={4}
              className="bg-[#18191c] text-white px-4 py-3 rounded-md outline-none border border-[#33353a] focus:border-blue-400 transition resize-none"
            />
            <button
              type="submit"
              className="mt-2 bg-white text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2 justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-lg"
            >
              Submit <FaArrowRight />
            </button>
          </form>
        </div>
        {/* Right: Offices */}
        <div className="contact-fade bg-[#232427] rounded-xl p-8 shadow-2xl border border-[#33353a] flex flex-col">
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
                <span className="text-white font-semibold">{office.title}</span>
                <span className="text-gray-400 text-sm">{office.address}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
