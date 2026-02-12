"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-background px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="max-w-5xl">
        <p
          className={`text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed text-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-bold">coincident</span> is a
          modern, digital-native music studio that blends artistic vision with
          technical precision.
        </p>
        <p
          className={`mt-6 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We help artists shape their sound, refine their ideas, and elevate
          their music through vocal production, mixing, mastering, and full
          creative collaboration.
        </p>

        <div
          className={`mt-10 flex items-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_rgba(232,255,0,0.3)] transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border border-foreground/30 text-foreground font-bold text-sm tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            Our Work
          </a>
        </div>
      </div>

      {/* Decorative isotipo */}
      <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16">
        <Image
          src="/images/isologo.png"
          alt=""
          width={80}
          height={80}
          className="opacity-[0.21]"
        />
      </div>
    </section>
  );
}
