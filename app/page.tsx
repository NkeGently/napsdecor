import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Luxury Interior Design in Cameroon | Nap's Interior Decor",
  description:
    "Nap's Interior Decor transforms homes and offices across Cameroon. Luxury interior design services in Douala, Yaoundé and beyond. Where spaces become art.",
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