import type { MetadataRoute } from "next"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/private/"],
    },
    sitemap: "http://thietkexaydungnhattien.com/sitemap.xml",
    host: "http://thietkexaydungnhattien.com",
  }
}
