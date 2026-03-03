"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// ✅ These now read from your .env.local file automatically
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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

const services = [
  "Residential Home Design", "Apartment Interior", "Kitchen Design",
  "Bedroom Design", "Living & Dining Room", "Commercial Space",
  "Full Renovation", "Consultation Only",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ from_name: "", from_email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", from_email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--input-bg)",
    border: "1px solid var(--border)",
    padding: "12px 16px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-jost)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <div className="pt-24 min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div className="text-center py-16 px-6">
        <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>Reach Out</p>
        <h1 className="section-heading font-light mb-4" style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--text-primary)" }}>
          Let&apos;s <em className="gold-shimmer not-italic">Connect</em>
        </h1>
        <div className="gold-line w-24 mx-auto mb-6" />
        <p className="font-body text-sm max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          Whether you have a clear vision or just a spark of an idea — reach out. We&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: <Phone size={16} />, label: "Phone & WhatsApp", content: <a href="tel:+237678667222" className="hover:text-[var(--gold)] transition-colors" style={{ color: "var(--text-muted)" }}>+237 678 66 72 22</a> },
            { icon: <Mail size={16} />, label: "Email", content: <a href="mailto:arraknapoleon6@gmail.com" className="hover:text-[var(--gold)] transition-colors break-all" style={{ color: "var(--text-muted)" }}>arraknapoleon6@gmail.com</a> },
            { icon: <MapPin size={16} />, label: "Location", content: <span style={{ color: "var(--text-muted)" }}>Cameroon</span> },
          ].map(({ icon, label, content }) => (
            <div key={label} className="luxury-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ border: "1px solid var(--border)", color: "var(--gold)" }}>{icon}</div>
              <div>
                <p className="text-xs tracking-widest uppercase font-body mb-1" style={{ color: "var(--gold)" }}>{label}</p>
                <div className="font-body text-sm">{content}</div>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>Follow Our Work</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.tiktok.com/@arrahnapol" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 luxury-card px-4 py-3 text-sm font-body hover:text-[var(--gold)] transition-colors"
                style={{ color: "var(--text-muted)" }}>
                <TikTokIcon /> TikTok
              </a>
              <a href="https://www.facebook.com/share/1DN5WjdXd2/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 luxury-card px-4 py-3 text-sm font-body hover:text-[var(--gold)] transition-colors"
                style={{ color: "var(--text-muted)" }}>
                <FacebookIcon /> Facebook
              </a>
              <a href="https://wa.me/237678667222" target="_blank" rel="noopener noreferrer"
                className="luxury-card px-4 py-3 text-sm font-body hover:text-[var(--gold)] transition-colors"
                style={{ color: "var(--text-muted)" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 luxury-card p-8 md:p-10">
          <h2 className="section-heading text-3xl font-light mb-2" style={{ color: "var(--text-primary)" }}>Send a Message</h2>
          <p className="font-body text-sm mb-8" style={{ color: "var(--text-muted)" }}>We typically respond within 24 hours.</p>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle size={48} className="mb-4" style={{ color: "var(--gold)" }} />
              <h3 className="font-display text-2xl font-light mb-2" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
              <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              <button onClick={() => setStatus("idle")} className="btn-gold mt-8 text-xs">Send Another Message</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body mb-2" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                  <input name="from_name" required value={form.from_name} onChange={handleChange} placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body mb-2" style={{ color: "var(--text-muted)" }}>Email *</label>
                  <input name="from_email" type="email" required value={form.from_email} onChange={handleChange} placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body mb-2" style={{ color: "var(--text-muted)" }}>Phone / WhatsApp</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+237 ..."
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body mb-2" style={{ color: "var(--text-muted)" }}>Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                    onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}>
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase font-body mb-2" style={{ color: "var(--text-muted)" }}>Message *</label>
                <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your project, space size, budget range, timeline..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")} />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 font-body text-sm">
                  <AlertCircle size={16} /> Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-gold-filled w-full justify-center"
                style={{ opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
