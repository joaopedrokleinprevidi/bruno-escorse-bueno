import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://brunoescorse.com/",
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date().toISOString(),
    },
  ];
}

