import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nap's Interior Decor | Luxury Interior Design in Cameroon",
    template: "%s | Nap's Interior Decor Cameroon",
  },
  description:
    "Nap's Interior Decor — Cameroon's premier luxury interior design studio. We transform houses, apartments, offices and kitchens into stunning spaces across Douala, Yaoundé and all of Cameroon. Contact us today.",
  keywords: [
    // Brand
    "Nap's Interior Decor",
    "Naps Interior Decor Cameroon",
    // Core services
    "interior design Cameroon",
    "interior decorator Cameroon",
    "luxury interior design Cameroon",
    "interior design Douala",
    "interior design Yaoundé",
    "home decor Cameroon",
    "interior designer Douala",
    "interior designer Yaoundé",
    // Room types
    "kitchen design Cameroon",
    "bedroom design Cameroon",
    "living room design Cameroon",
    "apartment design Cameroon",
    "office interior design Cameroon",
    // French keywords (Cameroon is bilingual!)
    "décoration intérieure Cameroun",
    "design intérieur Douala",
    "décorateur intérieur Cameroun",
    "aménagement intérieur Cameroun",
    // General
    "luxury home decor",
    "residential interior design",
    "commercial interior design",
    "affordable interior design Cameroon",
  ],
  authors: [{ name: "Nap's Interior Decor" }],
  creator: "Nap's Interior Decor",
  publisher: "Nap's Interior Decor",
  metadataBase: new URL("https://napsinteriordecor.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CM",
    siteName: "Nap's Interior Decor",
    url: "https://napsinteriordecor.vercel.app",
    title: "Nap's Interior Decor | Luxury Interior Design in Cameroon",
    description:
      "Cameroon's premier luxury interior design studio. Transforming houses, apartments, kitchens and offices into breathtaking spaces across Douala, Yaoundé and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nap's Interior Decor - Luxury Interior Design Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nap's Interior Decor | Luxury Interior Design in Cameroon",
    description:
      "Cameroon's premier luxury interior design studio. Transforming spaces across Douala, Yaoundé and all of Cameroon.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "l_5JjPOCmlBsT4_tKUGV0uaQf_Q3XgWTSvZWhFezZ5Q",
  },
};