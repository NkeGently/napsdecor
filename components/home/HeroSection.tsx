"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

// ✅ Now using YOUR own images from public/images/works/
const heroImages = [
  { src: "/images/works/living-room-1.webp", alt: "Luxury living room by Nap's Interior Decor" },
  { src: "/images/works/kitchen-1.webp", alt: "Modern kitchen by Nap's Interior Decor" },
  { src: "/images/works/hero-1.webp", alt: "Elegant interior by Nap's Interior Decor" },
  { src: "/images/works/hero-2.webp", alt: "Beautiful space by Nap's Interior Decor" },
  { src: "/images/works/hero-3.webp", alt: "Stunning design by Nap's Interior Decor" },
];

export default function HeroSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);

  useEffect(() => {
    const slides = sliderRef.current?.querySelectorAll<HTMLElement>(".hero-slide");
    if (!slides) return;
    const interval = setInterval(() => {
      slides[currentRef.current].style.opacity = "0";
      currentRef.current = (currentRef.current + 1) % slides.length;
      slides[currentRef.current].style.opacity = "1";
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div ref={sliderRef} className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div key={i} className="hero-slide absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === 0 ? 1 : 0 }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
      <div className="absolute left-0 top-0 bottom-0 w-1 z-20" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6" style={{ animation: "fadeUp 0.8s ease forwards", opacity: 0 }}>
            <div className="w-12 h-px" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.4em] uppercase font-body" style={{ color: "var(--gold)" }}>Luxury Interior Design</span>
          </div>
          <h1 className="font-display font-light text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.8rem,7vw,6rem)", animation: "fadeUp 0.8s 0.2s ease forwards", opacity: 0 }}>
            Where Spaces<br />
            <em className="gold-shimmer not-italic">Become Art</em>
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ animation: "fadeUp 0.8s 0.4s ease forwards", opacity: 0 }}>
            We craft interiors that reflect who you are — houses, apartments, kitchens, offices. Every detail intentional. Every space unforgettable.
          </p>
          <div className="flex flex-wrap gap-4" style={{ animation: "fadeUp 0.8s 0.6s ease forwards", opacity: 0 }}>
            <Link href="/gallery" className="btn-gold-filled">View Our Projects <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-gold">Start Your Project</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={16} style={{ color: "var(--gold)" }} />
      </div>
    </section>
  );
}
