"use client";

import { Mic, Sliders, Headphones, Music, Disc3, Users } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";


const services = [
  {
    icon: Mic,
    title: "Vocal Production",
    description:
      "From recording to tuning, we shape raw vocals into polished, expressive performances that cut through.",
  },
  {
    icon: Sliders,
    title: "Mixing",
    description:
      "We balance every element of your track to create depth, clarity, and the punch your music deserves.",
  },
  {
    icon: Headphones,
    title: "Mastering",
    description:
      "Final polish that makes your music sound incredible on any system, from club speakers to earbuds.",
  },
  {
    icon: Music,
    title: "Beat Production",
    description:
      "Custom instrumentals crafted from scratch to fit your unique sound, style, and creative vision.",
  },
  {
    icon: Disc3,
    title: "Sound Design",
    description:
      "Unique textures, effects, and sonic landscapes that set your music apart from everything else.",
  },
  {
    icon: Users,
    title: "Creative Direction",
    description:
      "Full collaboration from concept to release. We help bring your artistic vision to life, start to finish.",
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="services" className="relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.png"
          alt=""
          fill
          className="object-cover opacity-21"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/10 to-background" />
      </div>

      <div className="relative z-10 py-20 lg:py-28">
        {/* Header */}
        <div className="flex items-center justify-between px-6 lg:px-10 mb-12">
          <div>
            <span
              className={`text-xs text-primary uppercase tracking-[0.3em] font-medium transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              What we do
            </span>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight mt-2 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Services
            </h2>
          </div>
          <div
            className={`flex gap-3 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 px-6 lg:px-10 overflow-x-auto pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative flex-shrink-0 w-72 md:w-80 bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 group hover:border-primary/40 hover:bg-background/80 transition-all duration-500 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* onda.svg background illustration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[1.21] group-hover:opacity-[0.08] transition-opacity duration-500">
                <img
                  src="/images/onda.svg"
                  alt=""
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
