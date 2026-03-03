import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://napsinteriordecor.vercel.app/sitemap.xml",
  };
}
