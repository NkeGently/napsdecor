"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", title: "Nap's Interior Decor - Home" },
  { label: "About", href: "/about", title: "About Nap's Interior Decor" },
  { label: "Gallery", href: "/gallery", title: "Interior Design Portfolio Gallery" },
  { label: "Contact", href: "/contact", title: "Contact Nap's Interior Decor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        padding: scrolled ? "14px 0" : "24px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" title="Nap's Interior Decor - Luxury Interior Design Cameroon" className="flex flex-col leading-none">
          <span className="gold-shimmer text-2xl font-display font-light" style={{ letterSpacing: "0.15em" }}>
            NAP&apos;S
          </span>
          <span className="text-[0.55rem] tracking-[0.4em] uppercase font-body font-light" style={{ color: "var(--text-muted)" }}>
            Interior Decor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.title}
              className="gold-underline text-[0.7rem] tracking-[0.25em] uppercase font-body transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 border flex items-center justify-center transition-all duration-300 hover:border-[var(--gold)]"
            style={{ borderColor: "var(--border)", color: "var(--gold)" }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link href="/contact" title="Get a free interior design quote" className="btn-gold text-xs">
            Get a Quote
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="w-9 h-9 border flex items-center justify-center" style={{ borderColor: "var(--border)", color: "var(--gold)" }}>
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ color: "var(--gold)" }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-8 flex flex-col gap-6" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.title}
              onClick={() => setOpen(false)}
              className="text-[0.75rem] tracking-[0.3em] uppercase font-body hover:text-[var(--gold)] transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" title="Get a free interior design quote" onClick={() => setOpen(false)} className="btn-gold text-center justify-center">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}