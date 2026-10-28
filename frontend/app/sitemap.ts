import type { MetadataRoute } from "next";

const routes = [
  "",
  "/alerts",
  "/archive",
  "/benchmarks",
  "/cockpit",
  "/diagnostics",
  "/insights",
  "/live-prediction",
  "/model",
  "/news",
  "/opendata",
  "/regimes",
  "/sandbox",
  "/simulation",
  "/wind-radar",
  "/windy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined;

  // Avoid publishing localhost or invented canonical URLs when the deploy URL is unknown.
  if (!baseUrl) return [];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : 0.7,
  }));
}
