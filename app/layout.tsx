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
    default: "Nap's Interior Decor | Luxury Interior Design",
    template: "%s | Nap's Interior Decor",
  },
  description:
    "Transforming spaces into masterpieces. Nap's Interior Decor specializes in luxury residential and commercial interior design — houses, apartments, kitchens, and beyond.",
  keywords: [
    "interior design", "luxury interior", "interior decorator",
    "home decor", "apartment design", "kitchen design",
    "Cameroon interior design", "Nap's Interior Decor",
  ],
  openGraph: {
    type: "website",
    siteName: "Nap's Interior Decor",
    title: "Nap's Interior Decor | Luxury Interior Design",
    description: "Transforming spaces into masterpieces.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nap's Interior Decor | Luxury Interior Design",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
