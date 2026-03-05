"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/21 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-4 group">
          
          {/* Logotipo */}
          <Image
            src="/images/logoNormalFull.svg"
            alt="Coincident Studio"
            width={120}
            height={60}
            className="transition-all duration-300 group-hover:opacity-90"
          />
        </a>

        {/* Tagline - hidden on mobile */}
        <p className="text-primary hidden lg:block text-xs text-muted-foreground font-medium tracking-wide uppercase border-l border-border pl-6 ml-6">
          We craft the sound you imagined
        </p>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-foreground border border-foreground/30 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-foreground relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="text-4xl font-bold text-foreground hover:text-primary transition-all duration-300"
            style={{
              transitionDelay: mobileOpen ? `${i * 100}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
            }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}

        {/* Logo abajo en mobile */}
        <Image
          src="/images/NormalLogotipo.png"
          alt=""
          width={160}
          height={50}
          className="mt-8 opacity-40"
        />
      </div>
    </nav>
  );
}
