"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const services = [
  {
    number: "01",
    title: "ENTERPRISE SERVICE",
    subs: [
      {
        title: "Cloud Migration",
        desc: "Seamlessly move your workloads to the cloud with zero downtime.",
        img: "/images/bg.jpg",
      },
      {
        title: "DevOps & Automation",
        desc: "Automate delivery pipelines and accelerate release cycles.",
        img: "/images/bg.jpg",
      },
      {
        title: "Security & Compliance",
        desc: "Harden your stack and meet industry standards and policies.",
        img: "/images/bg.jpg",
      },
      {
        title: "Performance Optimization",
        desc: "Boost speed, scalability, and reliability across your systems.",
        img: "/images/bg.jpg",
      },
    ],
  },
  {
    number: "02",
    title: "EXPERTISE SERVICE",
    subs: [
      {
        title: "UI/UX Design",
        desc: "Human-centered design that converts and delights.",
        img: "/images/bg.jpg",
      },
      {
        title: "API Development",
        desc: "Robust, secure APIs powering your apps and integrations.",
        img: "/images/bg.jpg",
      },
      {
        title: "Microservices",
        desc: "Modular architectures for flexibility and scale.",
        img: "/images/bg.jpg",
      },
      {
        title: "QA & Testing",
        desc: "Automated and manual testing for quality at speed.",
        img: "/images/bg.jpg",
      },
    ],
  },
  {
    number: "03",
    title: "PROCESS",
    subs: [
      {
        title: "Discovery & Strategy",
        desc: "Align goals, define scope, and chart the delivery plan.",
        img: "/images/bg.jpg",
      },
      {
        title: "Agile Delivery",
        desc: "Iterative development with transparent progress.",
        img: "/images/bg.jpg",
      },
      {
        title: "CI/CD Pipelines",
        desc: "Faster, safer releases through continuous delivery.",
        img: "/images/bg.jpg",
      },
      {
        title: "Monitoring & Observability",
        desc: "Insights to detect, debug, and prevent incidents.",
        img: "/images/bg.jpg",
      },
    ],
  },
  {
    number: "04",
    title: "MOBILE APP DEVELOPMENT",
    subs: [
      {
        title: "iOS",
        desc: "Native iOS apps with Swift/SwiftUI.",
        img: "/images/bg.jpg",
      },
      {
        title: "Android",
        desc: "Native Android apps with Kotlin.",
        img: "/images/bg.jpg",
      },
      {
        title: "Flutter",
        desc: "Cross-platform apps from one codebase.",
        img: "/images/bg.jpg",
      },
      {
        title: "React Native",
        desc: "Fast, native-feel apps for iOS & Android.",
        img: "/images/bg.jpg",
      },
    ],
  },
];

const Service = () => {
  const tl = useRef();
  const pathname = usePathname();
  const [activeIdx, setActiveIdx] = useState(null);
  const panelRefs = useRef([]);
  const itemRefs = useRef([]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const closePanel = (i, onDone) => {
    const el = panelRefs.current[i];
    if (!el) return;
    const h = el.scrollHeight;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { height: h, opacity: 1 },
      {
        height: 0,
        opacity: 0.5,
        duration: prefersReduced ? 0 : 1,
        ease: "power3.inOut",
        onComplete: () => {
          onDone && onDone();
        },
      }
    );
  };

  const openPanel = (i) => {
    const el = panelRefs.current[i];
    if (!el) return;
    el.style.height = "auto";
    const h = el.scrollHeight;
    el.style.height = "0px";
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: h,
      opacity: 1,
      duration: prefersReduced ? 0 : 1,
      ease: "power3.inOut",
      onComplete: () => {
        el.style.height = "auto";
      },
    });
    const subs = el.querySelectorAll(".subitem");
    gsap.set(subs, { willChange: "transform, opacity" });
    gsap.fromTo(
      subs,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: prefersReduced ? 0 : 1,
        stagger: prefersReduced ? 0 : 0.08,
        ease: "power3.out",
        onComplete: () => gsap.set(subs, { willChange: "auto" }),
      }
    );
  };

  const fadeOutOthers = (idx, onDone) => {
    const others = itemRefs.current.filter((el, i) => el && i !== idx);
    if (!others.length) return onDone && onDone();
    gsap.set(others, { willChange: "transform, opacity" });
    gsap.to(others, {
      opacity: 0,
      y: 8,
      scale: 0.995,
      duration: prefersReduced ? 0 : 1,
      stagger: prefersReduced ? 0 : 0.05,
      ease: "power3.inOut",
      onComplete: () => {
        others.forEach((el) => (el.style.display = "none"));
        gsap.set(others, { willChange: "auto" });
        onDone && onDone();
      },
    });
  };

  const fadeInOthers = (excludeIdx = null) => {
    const others = itemRefs.current.filter((el, i) => el && i !== excludeIdx);
    others.forEach((el) => {
      el.style.display = "";
    });
    gsap.set(others, { willChange: "transform, opacity" });
    gsap.fromTo(
      others,
      { opacity: 0, y: 8, scale: 0.995 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: prefersReduced ? 0 : 1,
        stagger: prefersReduced ? 0 : 0.05,
        ease: "power3.out",
        onComplete: () => gsap.set(others, { willChange: "auto" }),
      }
    );
  };

  // Instantly reveal the other categories without animation
  const showOthersInstant = (excludeIdx = null) => {
    const others = itemRefs.current.filter((el, i) => el && i !== excludeIdx);
    others.forEach((el) => {
      gsap.killTweensOf(el);
      el.style.display = "";
    });
    gsap.set(others, { opacity: 1, y: 0, scale: 1, willChange: "auto" });
  };

  // Instantly hide other categories (except the one to open)
  const hideOthersInstant = (excludeIdx) => {
    const others = itemRefs.current.filter((el, i) => el && i !== excludeIdx);
    others.forEach((el) => {
      gsap.killTweensOf(el);
      el.style.display = "none";
      el.style.opacity = 0;
      el.style.transform = "translateY(0) scale(1)";
    });
  };

  // Instantly open a panel without animation
  const openPanelInstant = (i) => {
    const el = panelRefs.current[i];
    if (!el) return;
    el.style.height = "auto";
    el.style.opacity = 1;
    const subs = el.querySelectorAll(".subitem");
    gsap.set(subs, { clearProps: "all", opacity: 1, y: 0 });
  };

  const toggle = (i) => {
    if (activeIdx === i) {
      // Close current, then fade in others
      closePanel(i, () => {
        setActiveIdx(null);
        showOthersInstant(i);
      });
    } else if (activeIdx === null) {
      // Instantly hide others, then instantly open selected
      hideOthersInstant(i);
      setActiveIdx(i);
      openPanelInstant(i);
    } else {
      // Switch: close current -> instantly hide others -> instantly open new
      const prev = activeIdx;
      closePanel(prev, () => {
        setActiveIdx(null);
        hideOthersInstant(i);
        setActiveIdx(i);
        openPanelInstant(i);
      });
    }
  };

  useEffect(() => {
    gsap.set(".fadein", { opacity: 0, y: 50 });

    tl.current && tl.current.kill();
    tl.current = gsap.timeline({ delay: 1.2 });
    tl.current.to(".fadein", {
      y: 0,
      opacity: 1,
      duration: prefersReduced ? 0 : 1,
      ease: "power3.out",
      stagger: 0.12,
    });

    return () => {
      tl.current && tl.current.kill();
    };
  }, [pathname, prefersReduced]);

  return (
    <>
      <Head>
        <title>
          Web Services & App Development – Apsarify | Kathmandu, Nepal
        </title>
        <meta
          name="description"
          content="Apsarify offers web development, app development, cloud, and AI services for businesses in Nepal. Boost your digital presence with our expert team."
        />
        <meta
          property="og:title"
          content="Web Services & App Development – Apsarify"
        />
        <meta
          property="og:description"
          content="Apsarify offers web development, app development, cloud, and AI services for businesses in Nepal. Boost your digital presence with our expert team."
        />
        <meta property="og:image" content="/images/ABOUT.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apsarify.tech/services" />
      </Head>
      <div className="bg-gradient-to-b from-black to-gray-900 h-screen overflow-hidden overflow-x-hidden text-center font-bold px-2 pt-24 md:pt-28 pb-3 flex flex-col items-center">
        <p className="text-sm font-light fadein text-gray-400">Who we are</p>
        <h3 className="text-2xl md:text-3xl font-normal fadein mt-2 mb-3">
          <span className="block my-5 fadein font-thin max-w-3xl mx-auto">
            YOUR ASPIRATION, OUR EXPERTISE: TAILORED SERVICES FOR UNMATCHED
            EXCELLENCE.
          </span>
        </h3>
        {/* Scrollable content area within a fixed-height page to avoid body overflow */}
        <div className="w-full max-w-4xl mx-auto flex-1 min-h-0 overflow-y-auto overscroll-contain flex flex-col gap-4 px-1 no-scrollbar">
          {services.map((service, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={service.number}
                ref={(el) => (itemRefs.current[idx] = el)}
                className={`rounded-xl px-4 py-3 sm:py-4 fadein shadow-lg transition-all duration-1000 hover:shadow-2xl`}
              >
                <button
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(idx);
                    }
                  }}
                  aria-expanded={isActive}
                  aria-controls={`panel-${idx}`}
                  className="w-full flex flex-row justify-between items-center gap-4 text-left"
                >
                  <div className="flex flex-row gap-6 items-center">
                    <span className="text-3xl sm:text-4xl font-extrabold leading-none">
                      {service.number}
                    </span>
                    <h4
                      className={
                        "text-lg sm:text-2xl font-semibold bg-gradient-to-r px-2 from-white to-[#fafafa30] bg-clip-text text-transparent whitespace-normal " +
                        manrope.className
                      }
                    >
                      {service.title}
                    </h4>
                  </div>
                  <div
                    className={`cursor-pointer border-gray-700 border-2 rounded-full p-2 transition duration-1000 will-change-transform ${
                      isActive ? "bg-gray-800 rotate-90" : "hover:bg-gray-800"
                    }`}
                    aria-hidden
                  >
                    <Image
                      src="/images/Arrow.png"
                      alt=""
                      className="duration-1000 w-6 h-6"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </div>
                </button>

                {/* Panel */}
                <div
                  id={`panel-${idx}`}
                  ref={(el) => (panelRefs.current[idx] = el)}
                  style={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {service.subs?.map((sub) => (
                      <li
                        key={sub.title}
                        className="subitem rounded-lg border border-gray-800/70 bg-white/5 overflow-hidden hover:bg-white/10 transition duration-1000"
                      >
                        <div className="relative h-28 w-full">
                          <Image
                            src={sub.img}
                            alt={sub.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3 text-left">
                          <h5 className="text-sm font-semibold">{sub.title}</h5>
                          <p className="mt-1 text-xs text-gray-300">
                            {sub.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {activeIdx !== null && (
          <button
            onClick={() => {
              const current = activeIdx;
              if (current !== null) {
                closePanel(current, () => {
                  setActiveIdx(null);
                  showOthersInstant(current);
                });
              }
            }}
            className="mt-4 shrink-0 text-xs sm:text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition duration-1000"
            aria-label="Show all services"
          >
            Show all services
          </button>
        )}
      </div>
    </>
  );
};

export default Service;
