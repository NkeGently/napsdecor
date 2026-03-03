import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Luxury Interior Design in Cameroon",
  description: "Nap's Interior Decor transforms homes and offices across Cameroon. View our portfolio of stunning interiors in Douala, Yaoundé and beyond.",
  alternates: { canonical: "https://napsinteriordecor.vercel.app" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <VideoShowcase />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
