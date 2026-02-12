"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "Neon Nights EP",
    artist: "VXRA",
    category: "Mixing & Mastering",
    image: "/images/collage-1.png",
  },
  {
    title: "Frequencies",
    artist: "DJ Pulse",
    category: "Beat Production",
    image: "/images/collage-2.png",
  },
  {
    title: "Echoes Live",
    artist: "Luna Park",
    category: "Sound Design",
    image: "/images/collage-1.png",
  },
  {
    title: "Analog Dreams",
    artist: "The Collectors",
    category: "Full Production",
    image: "/images/collage-2.png",
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="portfolio" className="relative bg-background overflow-hidden">
      {/* Marquee Title */}
      <div ref={titleRef} className="py-16 lg:py-24 overflow-hidden">
        <div
          className={`transition-all duration-1000 ${
            titleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Row 1 - outline blue */}
          <div className="overflow-hidden py-2">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: "marquee-left 12s linear infinite" }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`outline-${i}`}
                  className="text-[14vw] lg:text-[12vw] font-bold uppercase tracking-tighter mx-2"
                  style={{
                    WebkitTextStroke: "2px hsl(217 94% 48%)",
                    color: "transparent",
                  }}
                >
                  Portfolio
                  <span className="mx-6" style={{
                    WebkitTextStroke: "2px hsl(55 79% 55%)",
                    color: "transparent",
                  }}>
                    {"*"}
                  </span>
                </span>
              ))}
            </div>
          </div>
          {/* Row 2 - filled blue, opposite direction */}
          <div className="overflow-hidden py-2">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: "marquee-right 16s linear infinite" }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`filled-${i}`}
                  className="text-[8vw] lg:text-[6vw] font-bold uppercase tracking-[0.15em] mx-4 text-secondary/20"
                >
                  Selected Works
                  <span className="mx-6 text-primary/15">{"///"}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div ref={gridRef} className="relative px-6 lg:px-10 pb-24">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/morado.png"
            alt=""
            fill
            className="object-cover opacity-61"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} by ${project.artist}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-110 brightness-75" : "scale-100 brightness-50"
                  }`}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span
                  className={`inline-block text-xs font-medium text-primary uppercase tracking-wider bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-70"
                  }`}
                >
                  {project.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mt-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.artist}
                </p>
              </div>

              {/* Hover border glow */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  hoveredIndex === index
                    ? "border-2 border-primary/40 shadow-[inset_0_0_30px_rgba(232,255,0,0.05)]"
                    : "border border-border/30"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative isotipo */}
      <div className="absolute bottom-8 right-8">
        <Image
          src="/images/isologo-blue.png"
          alt=""
          width={56}
          height={56}
          className="opacity-12"
        />
      </div>
    </section>
  );
}
