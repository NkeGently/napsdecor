"use client";
import { useState } from "react";
import { Play } from "lucide-react";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  HOW TO ADD YOUR TIKTOK VIDEOS                              ║
 ║                                                              ║
 ║  1. Go to your TikTok video on desktop                       ║
 ║  2. Click Share → Copy Link                                  ║
 ║     It looks like: https://www.tiktok.com/@arrahnapol/video/7123456789 ║
 ║  3. The NUMBER at the end is your video ID                   ║
 ║  4. Paste that number in tiktokId below                      ║
 ║                                                              ║
 ║  HOW TO ADD THUMBNAIL IMAGES                                 ║
 ║  Put your image files in: public/images/works/               ║
 ║  Then reference as: /images/works/your-image.jpg             ║
 ╚══════════════════════════════════════════════════════════════╝
*/

const videos = [
  {
    tiktokId: "REPLACE_WITH_TIKTOK_VIDEO_ID_1",
    title: "Living Room Transformation",
    category: "Residential",
    description: "A stunning living room makeover blending modern luxury with timeless elegance.",
    // Replace with your own image: /images/works/video1-thumb.jpg
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    tiktokId: "REPLACE_WITH_TIKTOK_VIDEO_ID_2",
    title: "Kitchen & Dining Reveal",
    category: "Kitchen Design",
    description: "From bare walls to a world-class culinary space — see the complete transformation.",
    thumbnail: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  },
  {
    tiktokId: "REPLACE_WITH_TIKTOK_VIDEO_ID_3",
    title: "Full Apartment Redesign",
    category: "Apartment",
    description: "A complete apartment overhaul — every room reinvented with purpose and beauty.",
    thumbnail: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=800&q=80",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const [active, setActive] = useState(false);
  const embedUrl = `https://www.tiktok.com/embed/v2/${video.tiktokId}`;

  return (
    <div style={{ animation: `fadeUp 0.8s ${0.2 * index}s ease forwards`, opacity: 0 }}>
      <div className="luxury-card overflow-hidden group">
        {active ? (
          <div className="video-wrapper">
            <iframe src={embedUrl} title={video.title} allow="autoplay" allowFullScreen loading="lazy" />
          </div>
        ) : (
          <div
            className="relative cursor-pointer overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setActive(true)}
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 h-16 border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-gold"
                style={{ borderColor: "var(--gold)" }}>
                <Play size={24} fill="var(--gold)" style={{ color: "var(--gold)", marginLeft: "2px" }} />
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase px-3 py-1 font-body"
                style={{ color: "var(--gold)", border: "1px solid var(--border-hover)", background: "rgba(10,10,10,0.8)" }}>
                {video.category}
              </span>
            </div>
            {/* TikTok badge */}
            <div className="absolute bottom-4 right-4 opacity-70">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.84 4.84 0 01-1.01-.08z"/>
              </svg>
            </div>
          </div>
        )}
        <div className="p-5">
          <p className="font-display text-xl font-light mb-1" style={{ color: "var(--text-primary)" }}>{video.title}</p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-4" style={{ color: "var(--gold)" }}>Recent Works</p>
          <h2 className="section-heading font-light mb-6" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "var(--text-primary)" }}>
            Watch Us <em className="gold-shimmer not-italic">Work</em>
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-body text-sm max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Real projects. Real results. See our transformations come to life — delivered with care and mastery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => <VideoCard key={i} video={v} index={i} />)}
        </div>
       
      </div>
    </section>
  );
}
