"use client";

import { Mic, Sliders, Headphones, Music, Disc3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: Music,
    bg: "/images/maschineSticker.svg",
    title: "Music Production",
    includes: [
      "Any genre",
      "Custom instrumentals",
      "Full compostion, production, mix and master",
      "Full stems delivery",
    ],
    description: `From a spark to a fully realized record. We shape ideas into sound worlds, building arrangements, textures and sonic identities that feel inevitable. Whether you’re starting from a voice memo, a demo, or a simple chord progression, we develop it into a fully produced track ready for release.`,
    price: "Up to $400",
  },
  {
    icon: Disc3,
    bg: "/images/ondaSticket.svg",
    title: "Audio Editing",
    includes: [
      "Noise reduction",
      "Dialogue cleanup",
      "Timing adjustments",
      "Restoration",
    ],
    description: `Precision you don’t notice, clarity you can feel. We refine performances at the microscopic level, tightening timing, enhancing feel and preserving emotion. Ideal for podcasts, voiceovers, interviews and recorded content that needs noise reduction, restoration, dialogue cleanup or seamless edits.`,
    price: "Reach out for more info",
  },
  {
    icon: Sliders,
    bg: "/images/mixerSticker.svg",
    title: "Mixing",
    includes: [
      "Level balancing",
      "EQ & Compression",
      "Spatial processing",
      "Creative automation",
    ],
    description: `Where everything finds its place. Depth, space, weight and movement are sculpted until the track breathes as one cohesive statement. Perfect for artists who already have their recordings and want their song to sound polished, balanced and competitive across streaming platforms.`,
    price: "Up to $300",
  },
  {
    icon: Headphones,
    bg: "/images/parlanteSticker.svg",
    title: "Mastering",
    includes: [
      "Final EQ shaping",
      "Stereo enhancement",
      "Loudness optimization",
      "Streaming-ready export",
    ],
    description: `The final elevation. We enhance impact, cohesion and translation across every system, ensuring your music feels finished and confident. Designed for singles, EPs or albums that need professional loudness, clarity and consistency before distribution.`,
    price: "Up to $150",
  },
  {
    icon: Mic,
    bg: "/images/estrellaMicSticker.svg",
    title: "Vocal Production",
    includes: [
      "Recording session",
      "Pitch correction",
      "Vocal editing",
      "Creative effects",
    ],
    description: `The voice is the narrative. We shape it with precision and intention, transforming raw recordings into powerful, controlled performances. From detailed editing and manual tuning to timing alignment, creative layering and digital harmonies, every element is crafted by hand. We refine, enhance and integrate the vocals into the mix so they feel present, emotional and undeniably polished.`,
    price: "Reach out for more info",
  },
];

function ServiceCard({ service, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-[380px] h-[220px] 
                bg-zinc-900/60 backdrop-blur-md 
                border border-white/10 
                rounded-2xl p-8 
                transition-all duration-300 
                relative overflow-hidden 
                hover:border-primary hover:bg-zinc-900/80"
    >
      <div className="flex justify-between items-center h-full">
        
        {/* Left Content */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 relative">
  
              {/* Glow */}
              <div className="absolute inset-0 rounded-lg bg-primary/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <service.icon className="w-6 h-6 text-primary relative z-10 transition-all duration-300 group-hover:scale-110" />
            </div>

            <h3 className="text-xl font-bold text-white">
              {service.title}
            </h3>
          </div>

          <p className="text-sm text-zinc-400">
            Click to see details
          </p>
        </div>

        {/* Right Illustration */}
        <div className="relative w-32 h-32 opacity-80">
          <Image
            src={service.bg}
            alt=""
            fill
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}


export default function Services() {
  const [activeService, setActiveService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/open.mp3");
    audioRef.current.volume = 1;
  }, []);

  useEffect(() => {
    if (activeService) {
      setShowModal(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }
  }, [activeService]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setActiveService(null), 400);
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.png"
          alt=""
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 px-6 lg:px-10">
        <div className="mb-16 ml-16">
          <span className="text-xs text-primary uppercase tracking-[0.3em]">
            What we do
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Services
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-wrap justify-center gap-12">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onClick={() => setActiveService(service)}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {services.slice(3).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onClick={() => setActiveService(service)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeService && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 flex items-center justify-center z-50 p-6 transition-all duration-500 ${
            showModal
              ? "opacity-100 backdrop-blur-xl bg-black/60"
              : "opacity-0 backdrop-blur-0 bg-black/0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative rounded-2xl p-10 max-w-lg w-full overflow-hidden transform transition-all duration-500 ${
              showModal
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-6"
            }`}
          >
            {/* Fondo teclas */}
            <div className="absolute inset-0">
              <Image
                src="/images/teclas.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>

            <div className="relative z-10 animate-[fadeUp_0.6s_ease] text-white">
              <h3 className="text-primary text-2xl font-bold mb-6">
                {activeService.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed mb-8">
                {activeService.description}
              </p>

              <ul className="space-y-3 mb-6 text-white/90">
                {activeService.includes.map((item: string) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <p className="text-lg font-semibold text-primary mb-6">
                {activeService.price}
              </p>

              <button
                onClick={closeModal}
                className="w-full py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
              >
                I like it!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style> */}
    </section>
  );
}
