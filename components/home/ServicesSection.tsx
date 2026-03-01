import Link from "next/link";
import { Home, Building2, UtensilsCrossed, Sofa, Paintbrush, Layers } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Homes", desc: "Full-home interior transformations balancing comfort with breathtaking aesthetics tailored to your lifestyle." },
  { icon: Building2, title: "Apartments", desc: "Maximizing every square meter with smart, beautiful design that turns compact living into luxurious experiences." },
  { icon: UtensilsCrossed, title: "Kitchen Design", desc: "Where culinary passion meets design excellence — functional, elegant kitchens built for modern living." },
  { icon: Sofa, title: "Living & Dining", desc: "Curated spaces for connection and comfort, featuring signature furniture selections and bespoke layouts." },
  { icon: Paintbrush, title: "Commercial Spaces", desc: "Offices, lobbies, and commercial interiors designed to impress clients and inspire the people within." },
  { icon: Layers, title: "Full Renovation", desc: "End-to-end renovation management — from concept to completion, we oversee every detail with precision." },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>What We Do</p>
          <h2 className="section-heading font-light mb-6" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--text-primary)" }}>
            Our <em className="gold-shimmer not-italic">Services</em>
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="luxury-card p-8 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ border: "1px solid var(--border)", color: "var(--gold)" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-light mb-3" style={{ color: "var(--text-primary)" }}>{svc.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{svc.desc}</p>
                <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--gold)" }} />
              </div>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <Link href="/contact" className="btn-gold">Discuss Your Project</Link>
        </div>
      </div>
    </section>
  );
}
