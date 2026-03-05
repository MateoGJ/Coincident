"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import WaveformPlayer from "@/components/waveformPlayer";

const mixMaster = [
  {
    genre: "Pop",
    before: "/audio/exsample.mp3",
    after: "/audio/exsample.mp3",
  },
  {
    genre: "R&B",
    before: "/audio/exsample.mp3",
    after: "/audio/exsample.mp3",
  },
  {
    genre: "Trap",
    before: "/audio/exsample.mp3",
    after: "/audio/exsample.mp3",
  },
];

const productions = [
  { genre: "Indie Pop", audio: "/audio/exsample.mp3" },
  { genre: "Latin Urban", audio: "/audio/exsample.mp3" },
  { genre: "Electronic", audio: "/audio/exsample.mp3" },
];

const youtubeVideos = [
  "fJZrK_mtn5A",
  "P0iBYlNTCrE",
  "sd5WIgwQNz0",
  "O38hUyXybsM",
  "60ItHLz5WEA",
];

export default function Portfolio() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation(0.1);

  const [videoIndex, setVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const nextVideo = () =>
    setVideoIndex((prev) => (prev + 1) % youtubeVideos.length);

  const prevVideo = () =>
    setVideoIndex((prev) =>
      prev === 0 ? youtubeVideos.length - 1 : prev - 1
    );

  return (
    <section id="portfolio" className="relative bg-background overflow-hidden">

      {/* ===== MARQUEE TITLE (SE MANTIENE IGUAL) ===== */}
      <div ref={titleRef} className="py-16 lg:py-24 overflow-hidden">
        <div
          className={`transition-all duration-1000 ${
            titleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
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
                  <span
                    className="mx-6"
                    style={{
                      WebkitTextStroke: "2px hsl(55 79% 55%)",
                      color: "transparent",
                    }}
                  >
                    {"*"}
                  </span>
                </span>
              ))}
            </div>
          </div>

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

      {/* ===== CONTENT ===== */}
      <div ref={contentRef} className="relative px-6 lg:px-10 pb-32">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/portfolioBG.png"
            alt=""
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 space-y-9">

          {/* ================= MIX & MASTER ================= */}
          <div
            className={`transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl font-bold mb-16">Mix & Master</h2>

            <div className="grid lg:grid-cols-3 gap-16">
              {mixMaster.map((item, index) => (
                <div key={index} className="space-y-8">
                  <p className="uppercase text-sm tracking-widest text-primary">
                    {item.genre}
                  </p>

                  <div className="space-y-6">
                    <WaveformPlayer
                      audio={item.before}
                      label="Before"
                      mutedStyle
                    />

                    <WaveformPlayer
                      audio={item.after}
                      label="After"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEPARADOR */}
          <div className="py-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>


          {/* ================= LOWER GRID ================= */}
          <div className="grid lg:grid-cols-2 gap-20 relative">

            {/* -------- PRODUCTION -------- */}
            
            {/* Separador vertical solo en desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

            <div>
              <h2 className="text-4xl font-bold mb-16">Production</h2>

              <div className="space-y-12">
                {productions.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <p className="w-32 uppercase text-sm tracking-widest text-primary">
                      {item.genre}
                    </p>

                    <div className="flex-1">
                      <WaveformPlayer audio={item.audio} label="Track" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* -------- CLIENT RELEASES -------- */}
            <div>
              <h2 className="text-4xl font-bold mb-16">
                Our Client Releases
              </h2>

              <div className="flex items-center gap-6">

                {/* Flecha izquierda */}
                <button
                  onClick={prevVideo}
                  className="text-primary text-3xl hover:scale-110 transition"
                >
                  ←
                </button>

                <div
                  onClick={() =>
                    setActiveVideo(youtubeVideos[videoIndex])
                  }
                  className="cursor-pointer aspect-video w-full bg-black rounded-xl overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideos[videoIndex]}/hqdefault.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Flecha derecha */}
                <button
                  onClick={nextVideo}
                  className="text-primary text-3xl hover:scale-110 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ISOTIPO ===== */}
      <div className="absolute bottom-8 right-8">
        <Image
          src="/images/azarSticker.svg"
          alt=""
          width={90}
          height={90}
          className="opacity-100"
        />
      </div>

      {/* ===== MODAL VIDEO ===== */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl aspect-video"
          >
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
