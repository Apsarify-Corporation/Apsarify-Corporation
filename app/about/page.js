"use client";
import React, { useEffect, useRef } from "react";
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
    <div className="bg-gradient-to-b from-black to-gray-900 min-h- p-5 [90vh] text-4xl font-bold text-center sm:overflow-y-hidden">
      <p className="text-sm font-light fadein text-gray-400 pt-8">Who we are</p>
      <h3 className="text-2xl md:text-3xl font-normal fadein">
        <span className="md:w-[40%] w-[90%] mx-auto block my-5 fadein font-thin">
          EPIC BEGININGS: UNVEILING OUR ESSENCE, CRAFTING FURURES WITH
          EXCELLENCE.
        </span>
      </h3>
      <div className="fadein flex flex-col lg:flex-row w-[95%] md:w-[80%] mx-auto my-10 text-sm font-light gap-8 items-center">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-5 mb-6 lg:mb-0">
          <img
            src="/images/ABOUT.png"
            alt="Team Working Together"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div
          className={`w-full lg:w-1/2 text-left pl-0 lg:pl-5 ${poppins.className}`}
        >
          <h5 className="text-xl font-normal mb-4">
            Empowering Progress: Our Story, Your Journey, Shared Excellence.
          </h5>
          <p className="my-5 font-thin">
            At Epic, we are more than just a company; we are a collective of
            visionaries, innovators, and problem-solvers dedicated to shaping
            the future. Founded on the principles of integrity, excellence, and
            collaboration, our journey began with a simple yet powerful idea: to
            create solutions that not only meet the needs of today but also
            anticipate the challenges of tomorrow.
          </p>
          <p className="my-5 font-thin">
            Our team is our greatest asset. Comprising experts from diverse
            fields, we bring together a wealth of knowledge and experience to
            tackle complex problems with creativity and precision. We believe in
            fostering a culture of continuous learning and growth, where every
            team member is empowered to contribute their unique skills and
            perspectives.
          </p>
          <p className="my-5 font-thin">
            At Epic, we are committed to making a positive impact on the world
            around us. Through sustainable practices, community engagement, and
            ethical business conduct, we strive to create value not just for our
            clients but for society as a whole. Join us on this exciting journey
            as we continue to push boundaries, break new ground, and turn
            visionary ideas into reality.
          </p>
        </div>
      </div>
      <div className="fadein p-5 align-middle text-center justify-center w-[98%] md:w-[80%] mx-auto h-auto my-10 text-sm font-light grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 bg-black rounded-xl">
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
  );
};

export default About;
