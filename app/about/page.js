"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const About = () => {
  const tl = useRef();
  const pathname = usePathname();

  useEffect(() => {
    gsap.set(".fadein", { opacity: 0, y: 50 });

    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 1.5 });
    tl.current.to(".fadein", {
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
        <meta property="og:url" content="https://www.aps.org.np/about" />
      </Head>
      <div className="bg-gradient-to-b pt-10 from-black to-gray-900 min-h-screen px-5 text-4xl font-bold text-center sm:overflow-y-hidden">
        <p className="text-sm font-light fadein text-gray-400 pt-8">
          Who we are
        </p>
        <h3 className="text-xl md:text-3xl font-normal fadein">
          <span className="md:w-[40%] w-[90%] mx-auto block my-1 fadein font-thin">
            APSARIFY BEGINNINGS: UNVEILING OUR ESSENCE, CRAFTING FUTURES WITH
            EXCELLENCE.
          </span>
        </h3>
        <div className="fadein flex flex-col lg:flex-row w-[95%] md:w-[80%] mx-auto my-5 text-sm font-light gap-8 items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-5 mb-6 lg:mb-0">
            <Image
              src="/images/ABOUT.png"
              alt="Apsarify Team Working Together"
              className="w-full rounded-xl object-cover"
              width={500}
              height={300}
              priority={false}
            />
          </div>
          <div
            className={`w-full lg:w-1/2 text-left pl-0 lg:pl-5 ${poppins.className}`}
          >
            <h5 className="text-xl font-normal mb-4">
              Empowering Progress: Our Story, Your Journey.
            </h5>
            <p className="my-5 font-thin">
              Apsarify is a team of innovators and problem-solvers dedicated to
              building technology that shapes the future. We value integrity,
              excellence, and collaboration.
            </p>
            <p className="my-5 font-thin">
              Our diverse experts deliver creative solutions and foster a
              culture of continuous learning and growth.
            </p>
            <p className="my-5 font-thin">
              We strive to make a positive impact for our clients and society
              through sustainable, ethical practices.
            </p>
          </div>
        </div>
        <div className="fadein align-middle text-center justify-center p-3 w-[98%] md:w-[80%] mx-auto h-auto text-sm font-light grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 bg-black rounded-xl">
          <div className="border-gray-600 border-b md:border-b-0 md:border-r align-middle text-center justify-center flex flex-col py-4">
            <span className="font-bold text-3xl">400+</span>
            <h6 className="font-thin text-sm mt-2">Project Completed</h6>
          </div>
          <div className="border-gray-600 border-b md:border-b-0 md:border-r align-middle text-center justify-center flex flex-col py-4">
            <span className="font-bold text-3xl">15+</span>
            <h6 className="font-thin text-sm mt-2">Successful Year</h6>
          </div>
          <div className="border-gray-600 border-b md:border-b-0 md:border-r align-middle text-center justify-center flex flex-col py-4">
            <span className="font-bold text-3xl">98%</span>
            <h6 className="font-thin text-sm mt-2">Client Retention</h6>
          </div>
          <div className="align-middle text-center justify-center flex flex-col py-4">
            <span className="font-bold text-3xl">30+</span>
            <h6 className="font-thin text-sm mt-2">Countries</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
