"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-studio.jpg"
          alt="Music production studio equipment"
          fill
          className={`object-cover transition-all duration-[2000ms] ${
            loaded ? "opacity-12 scale-100" : "opacity-0 scale-105"
          }`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Top content */}
      <div className="relative z-10 px-6 pt-24 lg:px-10">
        <div
          className={`flex items-center gap-2 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-muted-foreground font-medium tracking-wide">
            now accepting projects
          </span>
        </div>
      </div>

      {/* Marquee Text - positioned at bottom */}
      <div className="relative z-10 flex flex-col justify-end min-h-[80vh]">
        {/* Row 1 - filled text, moving left */}
        <div className="overflow-hidden py-2">
          <div
            className={`flex whitespace-nowrap transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "marquee-left 15s linear infinite" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`filled-${i}`}
                className="text-[10vw] lg:text-[8vw] font-bold text-primary uppercase tracking-tighter mx-2"
              >
                SOUND FOR WORLD
                <span className="mx-4 text-secondary">{"///"}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - outline text, moving right */}
        <div className="overflow-hidden py-2">
          <div
            className={`flex whitespace-nowrap transition-all duration-1000 delay-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "marquee-right 18s linear infinite" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`outline-${i}`}
                className="text-[10vw] lg:text-[8vw] font-bold uppercase tracking-tighter mx-2"
                style={{
                  WebkitTextStroke: "2px hsl(55 79% 55%)",
                  color: "transparent",
                }}
              >
                SOUND FOR WORLD
                <span
                  className="mx-4"
                  style={{
                    WebkitTextStroke: "2px hsl(217 94% 48%)",
                    color: "transparent",
                  }}
                >
                  {"///"}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 3 - blue filled, moving left slower */}
        <div className="overflow-hidden py-2 mb-8">
          <div
            className={`flex whitespace-nowrap transition-all duration-1000 delay-[1300ms] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "marquee-left 25s linear infinite" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`blue-${i}`}
                className="text-[6vw] lg:text-[4vw] font-bold text-secondary/40 uppercase tracking-[0.2em] mx-4"
              >
                MIXING
                <span className="mx-6 text-primary/30">MASTERING</span>
                PRODUCTION
                <span className="mx-6 text-foreground/10">SOUND DESIGN</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Isotipo bottom right */}
      <div
        className={`absolute bottom-8 right-8 z-10 transition-all duration-1000 delay-[1500ms] ${
          loaded ? "opacity-30 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Image
          src="/images/isologo.png"
          alt=""
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}
