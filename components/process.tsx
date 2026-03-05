"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    title: "Alignment",
    description:
      "Every project begins with clarity. You share your material, references and goals. We define the scope, timeline and creative direction so expectations are aligned from the start.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "We organize and evaluate the material in depth. Sessions are structured, technical details are reviewed, and a clear roadmap is established before any creative decisions are made.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "This is where precision meets intention. Whether it’s production, editing, mixing, mastering or vocal work, we focus on detail, balance and emotional impact. Every decision serves the final result.",
  },
  {
    number: "04",
    title: "Finalization",
    description:
      "After revisions and approval, we deliver optimized, release-ready files in the formats you need. Clean, professional and ready for distribution or publication.",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="relative bg-background px-6 py-24 lg:px-10 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/process-bg.png"
          alt=""
          fill
          className="object-cover opacity-1"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span
            className={`text-xs text-primary uppercase tracking-[0.3em] font-medium transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How it works
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight mt-2 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-background p-8 lg:p-10 group hover:bg-card transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <span className="text-5xl lg:text-6xl font-bold text-border group-hover:text-primary/30 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
