"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import {
  FaRegClock,
  FaShieldAlt,
  FaPuzzlePiece,
  FaDollarSign,
} from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cardData = [
  {
    icon: <FaRegClock size={40} />,
    title: "Deliver On Time",
    desc: "Timely precision, where promises meet performance, ensuring your project's success.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Security",
    desc: "Timely precision, where promises meet performance, ensuring your project's success.",
  },
  {
    icon: <FaPuzzlePiece size={40} />,
    title: "Flexibility",
    desc: "Timely precision, where promises meet performance, ensuring your project's success.",
  },
  {
    icon: <FaDollarSign size={40} />,
    title: "Pricing",
    desc: "Timely precision, where promises meet performance, ensuring your project's success.",
  },
];

const Products = () => {
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
    <div className="bg-gradient-to-b from-black p-5 to-gray-900 min-h-[90vh] text-center font-bold overflow-y-hidden">
      <p className="text-sm font-light fadein text-gray-400 pt-10">
        Our Products
      </p>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal fadein mt-2 mb-10">
        <span className="block my-5 fadein font-thin max-w-3xl mx-auto">
          EXCELLENCE REDEFINED: UNLEASHING TAILORED SOLUTIONS FOR YOUR SUCCESS
          JOURNEY.
        </span>
      </h3>
      <div className="fadein grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto my-10 text-sm font-light">
        {cardData.map((card, idx) => (
          <div
            key={card.title}
            className={`fadein bg-[#232427] border border-[#33353a] rounded-xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer ${poppins.className}`}
          >
            <div className="text-white mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              {card.title.split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="text-blue-400 font-bold">
                    {" "}
                    {word}{" "}
                  </span>
                ) : (
                  " " + word
                )
              )}
            </h3>
            <div className="w-12 h-[2px] bg-gray-700 mb-4" />
            <p className="text-gray-400 text-sm text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
