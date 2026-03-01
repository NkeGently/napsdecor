import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=1920&q=80" alt="Luxury interior" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.85)" }} />
      <div className="absolute inset-8 border pointer-events-none" style={{ borderColor: "var(--border)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase font-body mb-6" style={{ color: "var(--gold)" }}>Begin Your Journey</p>
        <h2 className="section-heading font-light mb-6 leading-tight text-white" style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)" }}>
          Your Dream Space<br /><em className="gold-shimmer not-italic">Awaits You</em>
        </h2>
        <div className="gold-line w-32 mx-auto mb-8" />
        <p className="font-body mb-12 text-lg max-w-xl mx-auto text-white/50">
          Let&apos;s sit down, understand your vision, and craft a space that moves you every single day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-gold-filled">Get a Free Consultation <ArrowRight size={16} /></Link>
          <Link href="/gallery" className="btn-gold" style={{ borderColor: "white", color: "white" }}>Explore Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
