"use client";

import { useState } from "react";
import { X, Play } from "lucide-react";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Apartment", "Commercial"];

type MediaItem = {
  type: "image" | "video";
  category: string;
  title: string;
  src?: string;
  alt?: string;
  tiktokId?: string;
  thumbnail?: string;
};

const portfolio: MediaItem[] = [
  {
    type: "image",
    category: "Living Room",
    title: "Modern Luxury Living Room",
    src: "/images/works/living-room-1.webp",
    alt: "Modern luxury living room by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Living Room",
    title: "Contemporary Living Space",
    src: "/images/works/living-room-2.webp",
    alt: "Contemporary living space by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Kitchen",
    title: "Minimal Chef Kitchen",
    src: "/images/works/kitchen-1.webp",
    alt: "Minimal modern kitchen by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Kitchen",
    title: "Contemporary Kitchen Design",
    src: "/images/works/kitchen-2.webp",
    alt: "Contemporary kitchen design by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Bedroom",
    title: "Serene Master Suite",
    src: "/images/works/bedroom-1.webp",
    alt: "Serene master bedroom by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Apartment",
    title: "Studio Apartment Redefined",
    src: "/images/works/apartment-1.webp",
    alt: "Studio apartment redesign by Nap's Interior Decor",
  },
  {
    type: "image",
    category: "Commercial",
    title: "Executive Commercial Space",
    src: "/images/works/commercial.webp",
    alt: "Commercial interior design by Nap's Interior Decor",
  },
  {
    type: "video",
    category: "Commercial",
    title: "Commercial Interior Transformation",
    tiktokId: "7605339455310220562",
    thumbnail: "/images/works/video-thumb-1.webp",
  },
  {
    type: "video",
    category: "Appartment",
    title: "Appartment Interior Makeover",
    tiktokId: "7597500153087413511",
    thumbnail: "/images/works/video-thumb-2.webp",
  },
  {
    type: "video",
    category: "Apartment",
    title: "Full Apartment Redesign",
    tiktokId: "7582323145600666936",
    thumbnail: "/images/works/video-thumb-3.webp",
  },
];

function MediaCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const imgSrc = item.type === "image" ? item.src! : item.thumbnail!;
  const isVideoNoThumb = item.type === "video" && imgSrc.includes("video-thumb");

  return (
    <div
      className="cursor-pointer group overflow-hidden luxury-card"
      onClick={onClick}
    >
      {/* ✅ Fixed 4:3 aspect ratio — every card identical size */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {isVideoNoThumb ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: "var(--bg-card)" }}
          >
            <Play size={28} style={{ color: "var(--gold)" }} />
            <span className="font-body text-xs" style={{ color: "var(--text-faint)" }}>
              {item.title}
            </span>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={item.alt || item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          {item.type === "video" ? (
            <div
              className="w-14 h-14 border-2 flex items-center justify-center"
              style={{ borderColor: "var(--gold)" }}
            >
              <Play size={22} fill="var(--gold)" style={{ color: "var(--gold)", marginLeft: "2px" }} />
            </div>
          ) : (
            <span
              className="font-body text-xs tracking-widest uppercase px-4 py-2 border"
              style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
            >
              View
            </span>
          )}
        </div>

        {/* Video badge */}
        {item.type === "video" && !isVideoNoThumb && (
          <div className="absolute top-3 right-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.75)" }}
            >
              <Play size={12} fill="white" style={{ color: "white", marginLeft: "1px" }} />
            </div>
          </div>
        )}

        {/* Category badge on hover */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="font-body text-[0.6rem] tracking-widest uppercase px-2 py-1"
            style={{ background: "var(--gold)", color: "#0a0a0a" }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 py-3" style={{ background: "var(--bg-card)" }}>
        <p className="font-body text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
          {item.title}
        </p>
        <p
          className="font-body text-[0.6rem] tracking-widest uppercase mt-0.5"
          style={{ color: "var(--gold)" }}
        >
          {item.category}
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [videoActive, setVideoActive] = useState(false);

  const filtered =
    active === "All" ? portfolio : portfolio.filter((i) => i.category === active);

  const openLightbox = (item: MediaItem) => {
    setLightbox(item);
    setVideoActive(false);
  };

  return (
    <div className="pt-24 min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <div className="text-center py-16 px-6">
        <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>
          Our Portfolio
        </p>
        <h1
          className="section-heading font-light mb-4"
          style={{ fontSize: "clamp(3rem,7vw,6rem)", color: "var(--text-primary)" }}
        >
          Design <em className="gold-shimmer not-italic">Gallery</em>
        </h1>
        <div className="gold-line w-24 mx-auto mb-4" />
        <p className="font-body text-sm max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
          Browse our real work — photos and videos of spaces we&apos;ve transformed.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-xs tracking-[0.25em] uppercase font-body px-5 py-2 border transition-all duration-300"
              style={{
                borderColor: active === cat ? "var(--gold)" : "var(--border)",
                background: active === cat ? "var(--gold)" : "transparent",
                color: active === cat ? "#0a0a0a" : "var(--text-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Uniform grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 font-body" style={{ color: "var(--text-faint)" }}>
            No items in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <MediaCard key={i} item={item} onClick={() => openLightbox(item)} />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,10,0.96)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="Close"
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <X size={30} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : videoActive ? (
              <div className="video-wrapper">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${lightbox.tiktokId}`}
                  title={lightbox.title}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                className="relative cursor-pointer"
                style={{ aspectRatio: "16/9", background: "var(--bg-card)" }}
                onClick={() => setVideoActive(true)}
              >
                {lightbox.thumbnail && !lightbox.thumbnail.includes("video-thumb") && (
                  <img
                    src={lightbox.thumbnail}
                    alt={lightbox.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <div
                    className="w-20 h-20 border-2 flex items-center justify-center"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <Play
                      size={32}
                      fill="var(--gold)"
                      style={{ color: "var(--gold)", marginLeft: "3px" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <p className="font-display text-2xl font-light" style={{ color: "var(--text-primary)" }}>
                {lightbox.title}
              </p>
              <p
                className="font-body text-xs tracking-widest uppercase mt-1"
                style={{ color: "var(--gold)" }}
              >
                {lightbox.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}