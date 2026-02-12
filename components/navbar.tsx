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
  { label: "Services", href: "#services" }, // 👈 agregar
  { label: "Works", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/images/isologo.png"
            alt="Coincident Studio"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-wide text-foreground">
              coincident
            </span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              studio
            </span>
          </div>
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

      {/* Mobile Menu - fullscreen overlay */}
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
        <Image
          src="/images/isologo.png"
          alt=""
          width={48}
          height={48}
          className="mt-8 opacity-21"
        />
      </div>
    </nav>
  );
}
