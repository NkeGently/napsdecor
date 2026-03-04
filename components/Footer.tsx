import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.84 4.84 0 01-1.01-.08z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="py-16 text-center px-6" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <p className="font-display font-light mb-3" style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)", color: "var(--text-primary)" }}>
          Ready to Transform Your Space?
        </p>
        <p className="text-xs tracking-widest uppercase font-body mb-8" style={{ color: "var(--text-muted)" }}>
          Let&apos;s create something extraordinary together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/237678667222?text=Hello%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
            target="_blank" rel="noopener noreferrer"
            title="Chat with Nap's Interior Decor on WhatsApp"
            className="btn-gold-filled">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <Link href="/contact" title="Send a message to Nap's Interior Decor" className="btn-gold">
            Send a Message
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="gold-shimmer font-display text-3xl font-light tracking-widest mb-1">NAP&apos;S</p>
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-6" style={{ color: "var(--text-faint)" }}>Interior Decor</p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Crafting timeless interiors that speak of elegance, culture, and refined taste. Every space is a canvas — we paint it with purpose.
          </p>
          <div className="flex gap-3 mt-8">
            {[
              { href: "https://www.tiktok.com/@arrahnapol", icon: <TikTokIcon />, label: "TikTok", title: "Follow Nap's Interior Decor on TikTok" },
              { href: "https://www.facebook.com/share/1DN5WjdXd2/", icon: <FacebookIcon />, label: "Facebook", title: "Follow Nap's Interior Decor on Facebook" },
              { href: "https://wa.me/237678667222", icon: <WhatsAppIcon />, label: "WhatsApp", title: "Chat with Nap's Interior Decor on WhatsApp" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} title={s.title}
                className="w-9 h-9 flex items-center justify-center transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-6 font-body" style={{ color: "var(--gold)" }}>Navigation</p>
          <ul className="space-y-3">
            {[
              ["Home", "/", "Nap's Interior Decor Homepage"],
              ["About Us", "/about", "About Nap's Interior Decor"],
              ["Portfolio", "/gallery", "Interior Design Portfolio Gallery"],
              ["Contact", "/contact", "Contact Nap's Interior Decor"],
            ].map(([l, h, t]) => (
              <li key={h}>
                <Link href={h} title={t}
                  className="font-body text-sm gold-underline hover:text-[var(--gold)] transition-colors"
                  style={{ color: "var(--text-muted)" }}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-6 font-body" style={{ color: "var(--gold)" }}>Get In Touch</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-body" style={{ color: "var(--text-muted)" }}>
              <Phone size={14} style={{ color: "var(--gold)" }} className="shrink-0" />
              <a href="tel:+237678667222" title="Call Nap's Interior Decor" className="hover:text-[var(--gold)] transition-colors">+237 678 66 72 22</a>
            </li>
            <li className="flex items-center gap-3 text-sm font-body" style={{ color: "var(--text-muted)" }}>
              <Mail size={14} style={{ color: "var(--gold)" }} className="shrink-0" />
              <a href="mailto:arraknapoleon6@gmail.com" title="Email Nap's Interior Decor" className="hover:text-[var(--gold)] transition-colors break-all">arraknapoleon6@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 text-sm font-body" style={{ color: "var(--text-muted)" }}>
              <MapPin size={14} style={{ color: "var(--gold)" }} className="shrink-0 mt-0.5" />
              <span>Cameroon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="font-body text-xs tracking-widest" style={{ color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} Nap&apos;s Interior Decor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}