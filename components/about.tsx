"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 py-28 lg:px-10 lg:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/aboutFondoo.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 -z-10" />

      <div className="max-w-4xl">
        <p
          className={`text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-bold">coincident</span>  is a digital-native music 
          studio built at the intersection of art and  technical precision.

          <br /><br />

           We work with artists who care about identity, intention and detail.

          <br /><br />

          Operating remotely and globally, we collaborate with artists at different 
          stages of their journey, from developing raw ideas to delivering release-ready masters.

          <br /><br />

          <span className="text-primary font-bold">coincident</span> exists to translate vision into sound
           that feels inevitable.
        </p>

        <div
          className={`mt-14 flex items-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-primary text-black font-bold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_rgba(232,255,0,0.3)] transition-all duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border border-white/40 text-white font-bold text-sm tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            Our Work
          </a>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20">
        <Image
          src="/images/ojoSticket.svg"
          alt=""
          width={120}
          height={120}
          className="opacity-80"
        />
      </div>
    </section>
  );
}
