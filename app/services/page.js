"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const services = [
  { number: "01", title: "ENTERPRISE SERVICE" },
  { number: "02", title: "EXPERTISE SERVICE" },
  { number: "03", title: "PROCESS" },
  { number: "04", title: "MOBILE APP DEVELOPMENT" },
];

const Service = () => {
  const tl = useRef();
  const pathname = usePathname();

  useEffect(() => {
    gsap.set(".fadein", { opacity: 0, y: 50 });

    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 1.2 });
    tl.current.to(".fadein", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    return () => {
      tl.current && tl.current.kill();
    };
  }, [pathname]);

  return (
    <div className="bg-gradient-to-b pt-15 from-black to-gray-900 h-screen text-center font-bold px-2 py-10 flex flex-col items-center">
      <p className="text-sm font-light fadein text-gray-400 pt-4">Who we are</p>
      <h3 className="text-2xl md:text-3xl font-normal fadein mt-2 mb-8">
        <span className="block my-5 fadein font-thin max-w-3xl mx-auto">
          YOUR ASPIRATION, OUR EXPERTISE: TAILORED SERVICES FOR UNMATCHED
          EXCELLENCE.
        </span>
      </h3>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        {services.map((service, idx) => (
          <React.Fragment key={service.number}>
            <div className="flex flex-col sm:flex-row justify-between items-center rounded-xl px-4 py-5 fadein shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold">
                  {service.number}
                </span>
                <h4
                  className={
                    "text-lg sm:text-2xl font-semibold bg-gradient-to-r px-2 from-white to-[#fafafa30] bg-clip-text text-transparent " +
                    manrope.className
                  }
                >
                  {service.title}
                </h4>
              </div>
              <div className="mt-4 sm:mt-0 border-gray-700 border-2 cursor-pointer rounded-full p-2 hover:bg-gray-800 transition">
                <img
                  src="/images/Arrow.png"
                  alt=""
                  className="hover:rotate-90 duration-700 w-6 h-6"
                />
              </div>
            </div>
            {idx !== services.length - 1 && (
              <hr className="text-gray-700 fadein border-gray-700" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Service;
