import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nap's Interior Decor completely transformed our apartment. What used to feel ordinary now feels like a five-star hotel. The attention to detail is exceptional.",
    author: "Madeleine K.", role: "Homeowner, Douala",
  },
  {
    quote: "I hired them for my restaurant redesign and the result blew my clients away. Bookings doubled within two months. Professional, creative, and incredibly talented.",
    author: "Jean-Pierre A.", role: "Restaurant Owner, Yaoundé",
  },
  {
    quote: "The kitchen they designed for us is the heart of our home now. Every morning feels like a luxury. Worth every franc and more.",
    author: "Christine N.", role: "Client, Cameroon",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>What Clients Say</p>
          <h2 className="section-heading font-light" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--text-primary)" }}>
            Client <em className="gold-shimmer not-italic">Voices</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="luxury-card p-8 relative">
              <Quote size={32} className="absolute top-6 right-6 opacity-20" fill="var(--gold)" style={{ color: "var(--gold)" }} />
              <p className="font-body text-sm leading-relaxed mb-8 italic" style={{ color: "var(--text-muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: "1px solid var(--border)" }}>
                  <span className="font-display text-lg" style={{ color: "var(--gold)" }}>{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium" style={{ color: "var(--text-primary)" }}>{t.author}</p>
                  <p className="font-body text-xs" style={{ color: "var(--text-faint)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
