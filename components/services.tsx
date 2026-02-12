"use client";

import { Mic, Sliders, Headphones, Music, Disc3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: Mic,
    title: "Vocal Production",
    includes: [
      "Recording session",
      "Pitch correction",
      "Vocal editing",
      "Creative effects",
    ],
    price: "Up to $250",
  },
  {
    icon: Sliders,
    title: "Mixing",
    includes: [
      "Level balancing",
      "EQ & Compression",
      "Spatial processing",
      "Creative automation",
    ],
    price: "Up to $300",
  },
  {
    icon: Headphones,
    title: "Mastering",
    includes: [
      "Final EQ shaping",
      "Stereo enhancement",
      "Loudness optimization",
      "Streaming-ready export",
    ],
    price: "Up to $150",
  },
  {
    icon: Music,
    title: "Beat Production",
    includes: [
      "Custom instrumental",
      "Arrangement",
      "Sound selection",
      "Full stems delivery",
    ],
    price: "Up to $400",
  },
  {
    icon: Disc3,
    title: "Sound Design",
    includes: [
      "Custom FX",
      "Atmospheres",
      "Textures",
      "Unique sonic identity",
    ],
    price: "Up to $200",
  },
];

function ServiceCard({ service, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-[380px] h-[240px] bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 transition-all duration-500 relative overflow-hidden hover:scale-[1.04] hover:border-primary hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
    >
      {/* Soft glow layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />

      {/* Animated onda */}
      <div className="absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 animate-[float_12s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-700">
          <Image
            src="/images/onda.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <service.icon className="w-7 h-7 text-primary" />
          </div>

          <h3 className="text-xl font-bold">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground">
          Click to see details
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/open2.mp3");
    audioRef.current.volume = 1; // sutil
  }, []);

  useEffect(() => {
    if (activeService) {
      setShowModal(true);

      // Play sound
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
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.png"
          alt=""
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Section Shadow Overlay */}
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

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
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
            className={`relative bg-background rounded-2xl p-10 max-w-lg w-full overflow-hidden transform transition-all duration-500 ${
              showModal
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-6"
            }`}
          >
            {/* Background teclas */}
            <div className="absolute inset-0">
              <Image
                src="/images/teclas.png"
                alt=""
                fill
                className="object-cover opacity-70"
              />
            </div>

            {/* Animated Logo */}
            <div className="absolute top-6 right-6 opacity-90 animate-[logoFloat_6s_ease-in-out_infinite]">
              <Image
                src="/images/isologo.png"
                alt=""
                width={45}
                height={45}
              />
            </div>

            <div className="relative z-10 animate-[fadeUp_0.6s_ease]">
              <h3 className="text-2xl font-bold mb-6">
                {activeService.title}
              </h3>

              <ul className="space-y-3 mb-6">
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

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes logoFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
