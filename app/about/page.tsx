import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nap's Interior Decor — our story, philosophy, and passion for transforming spaces.",
};

const values = [
  "Uncompromising attention to detail",
  "Client vision always at the center",
  "Sustainable and timeless design choices",
  "Transparent, honest communication",
  "On-time delivery, every time",
  "Post-project support and satisfaction guarantee",
];

export default function AboutPage() {
  return (
    <div className="pt-24" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85" alt="About" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-primary) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-3" style={{ color: "var(--gold)" }}>Our Story</p>
          <h1 className="section-heading font-light" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--text-primary)" }}>
            About <em className="gold-shimmer not-italic">Us</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image src="/images/works/hero-1.webp" alt="Interior design" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full pointer-events-none" style={{ border: "1px solid var(--border)" }} />
            <div className="absolute top-8 -right-6 w-24 h-24 flex flex-col items-center justify-center" style={{ background: "var(--gold)" }}>
              <span className="font-display text-4xl font-light leading-none text-black">5+</span>
              <span className="text-[0.55rem] tracking-widest uppercase font-body text-black">Years</span>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>Who We Are</p>
            <h2 className="section-heading font-light mb-8 leading-tight" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--text-primary)" }}>
              Passion for Design,<br /><em className="not-italic" style={{ color: "var(--gold)" }}>Mastery in Craft</em>
            </h2>
            <div className="gold-line w-16 mb-8" />
            <div className="space-y-4 font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>Nap&apos;s Interior Decor was born from a deep love for beautiful spaces and the belief that every environment shapes how we feel, think, and live. Founded by Napoleon Arrak, the firm has grown into one of the most sought-after interior design studios in Cameroon.</p>
              <p>We specialize in residential and commercial interiors — from cozy apartments to sprawling homes, from sleek modern kitchens to breathtaking living spaces. Our approach blends global design trends with local sensibility.</p>
              <p>Every project begins with listening. We immerse ourselves in your vision, your habits, your aspirations — and translate all of that into spaces that exceed expectations.</p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold">Work With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>Our Values</p>
            <h2 className="section-heading font-light mb-4" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--text-primary)" }}>
              Why Clients<br /><em className="gold-shimmer not-italic">Trust Us</em>
            </h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              We don&apos;t just design interiors — we build lasting relationships. Our principles guide every decision, from the first consultation to the final reveal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
