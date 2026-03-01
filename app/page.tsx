import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Nap's Interior Decor | Luxury Interior Design",
  description: "Nap's Interior Decor — where luxury meets craftsmanship. Expert interior design for homes, apartments, kitchens, and commercial spaces in Cameroon.",
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
