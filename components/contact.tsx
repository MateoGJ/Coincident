"use client";

import React from "react";
import { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-background px-6 py-24 lg:px-10 lg:py-32 overflow-hidden"
    >
      {/* Background decorative isotipo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/images/isologo.png"
          alt=""
          width={600}
          height={600}
          className="opacity-[0.02]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight text-balance transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {"Let's create"}
              <br />
              <span className="text-primary">something</span>
              <br />
              together.
            </h2>
            <p
              className={`mt-6 text-lg text-muted-foreground leading-relaxed max-w-md transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Ready to elevate your sound? Drop us a message and{" "}
              {"let's talk about your next project."}
            </p>

            {/* Contact info */}
            <div
              className={`mt-12 flex flex-col gap-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:hello@coincident.studio"
                  className="flex items-center gap-2 text-foreground font-medium mt-1 hover:text-primary transition-colors group"
                >
                  hello@coincident.studio
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Social
                </span>
                <div className="flex gap-6 mt-2">
                  {["Instagram", "Spotify", "YouTube"].map((name) => (
                    <a
                      key={name}
                      href="#"
                      className="text-sm text-foreground hover:text-primary transition-colors relative group"
                    >
                      {name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="group">
                <label
                  htmlFor="name"
                  className="text-primary block text-xs text-muted-foreground uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="text-primary block text-xs text-muted-foreground uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="text-primary w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="project"
                  className="text-primary block text-xs text-muted-foreground uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  value={formState.project}
                  onChange={(e) =>
                    setFormState({ ...formState, project: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="" className="bg-card text-foreground">
                    Select a service
                  </option>
                  <option value="mixing" className="bg-card text-foreground">
                    Mixing
                  </option>
                  <option value="mastering" className="bg-card text-foreground">
                    Mastering
                  </option>
                  <option value="production" className="bg-card text-foreground">
                    Beat Production
                  </option>
                  <option value="vocal" className="bg-card text-foreground">
                    Vocal Production
                  </option>
                  <option value="full" className="bg-card text-foreground">
                    Full Creative Collaboration
                  </option>
                  <option value="other" className="bg-card text-foreground">
                    Other
                  </option>
                </select>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="text-primary block text-xs text-muted-foreground uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className={`mt-4 flex items-center justify-center gap-3 w-full py-4 font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-500 ${
                  submitted
                    ? "bg-green-500 text-foreground"
                    : "bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(232,255,0,0.25)] hover:scale-[1.02]"
                }`}
              >
                {submitted ? (
                  "Message sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
