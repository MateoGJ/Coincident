"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import WaveformPlayer from "@/components/waveformPlayer";

/* ========================= */
/* REVIEW CARD */
/* ========================= */

function ReviewCard({ review, isCenter, onClick }: any) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  /* Spotlight move */
  const handleMouseMove = (e: any) => {
    if (!spotlightRef.current) return;

    const rect = spotlightRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlightRef.current.style.background = `
      radial-gradient(
        160px circle at ${x}px ${y}px,
        rgba(9,97,234,0.25),
        transparent 70%
      )
    `;
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={isCenter ? handleMouseMove : undefined}
      animate={{
        scale: isCenter ? 1 : 0.85,
        opacity: isCenter ? 1 : 0.4,
      }}
      transition={{ duration: 0.6 }}
      className="relative w-[520px] p-12 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 cursor-pointer overflow-hidden"
    >
      {/* Spotlight only center */}
      {isCenter && (
        <div
          ref={spotlightRef}
          className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Avatar */}
      <div className="flex items-center gap-5 mb-6 relative z-10">
        <motion.div
          className="relative w-16 h-16 rounded-full overflow-hidden"
          whileHover={isCenter ? { scale: 1.25 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={review.image}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>

        <div>
          <p className="font-semibold text-lg">{review.name}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{review.country}</span>
            <Image
              src={review.flag}
              alt={review.country}
              width={22}
              height={15}
              className="shadow-sm"
            />
          </p>
        </div>
      </div>

      {/* 5 ESTRELLAS FIJAS */}
      <div className="mb-6 flex items-center gap-1 relative z-10 text-[#E8D834] text-2xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-muted-foreground leading-relaxed mb-10 relative z-10">
        {review.text}
      </p>

      {/* Player (solo centro) */}
      {isCenter && (
        <div className="relative z-10 mt-6">
          <WaveformPlayer
            audio={review.audio}
            label="Review"
          />
        </div>
      )}
    </motion.div>
  );
}

/* ========================= */
/* MAIN SECTION */
/* ========================= */

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + reviews.length) % reviews.length;
  const nextIndex = (index + 1) % reviews.length;

  const visible = [
    reviews[prevIndex],
    reviews[index],
    reviews[nextIndex],
  ];

  return (
    <section
      id="reviews"
      className="relative py-40 overflow-hidden bg-[#0b0b12]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={reviews[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={reviews[index].image}
            alt=""
            fill
            className="object-cover blur-3xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/85 -z-10" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-black via-black/70 to-transparent z-0" />
      
      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />

      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold">
          Artist Experiences
        </h2>
      </div>

      <div className="flex justify-center items-center gap-14">
        {visible.map((review, i) => {
          const isCenter = i === 1;

          return (
            <ReviewCard
              key={review.id}
              review={review}
              isCenter={isCenter}
              onClick={() => {
                if (!isCenter) {
                  const newIndex = reviews.findIndex(
                    (r) => r.id === review.id
                  );
                  setIndex(newIndex);
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}