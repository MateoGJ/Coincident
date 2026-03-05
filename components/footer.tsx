import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 py-16 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          
          {/* Logo */}
          <a href="#hero" className="group">
            <Image
              src="/images/logoNormalFull.svg"
              alt="Coincident Studio"
              width={150}
              height={60}
              className="transition-all duration-500 group-hover:opacity-80 group-hover:scale-[1.02]"
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Works", href: "#portfolio" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Coincident Studio. All rights reserved.
          </p>
          <p className="text-primary text-xs text-muted-foreground/50">
            We craft the sound you imagined.
          </p>
        </div>
      </div>
    </footer>
  );
}
