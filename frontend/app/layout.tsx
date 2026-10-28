import { Manrope, DM_Mono, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import siteSettings from "../config/siteSettings.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined;

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// SEO
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "ForecastGuard AI | Medium-Range Forecast Reliability",
    // Route pages already use complete, branded titles.
    template: "%s",
  },
  description:
    "Assess medium-range weather forecast reliability with calibrated bust probabilities, regional risk analysis, and explainable diagnostics for India.",
  applicationName: "ForecastGuard AI",
  category: "Weather",
  icons: { icon: siteSettings.faviconUrl },
  openGraph: {
    type: "website",
    siteName: "ForecastGuard AI",
    title: "ForecastGuard AI | Medium-Range Forecast Reliability",
    description:
      "Operational weather forecast reliability analysis, regional risk, and explainable diagnostics for India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "ForecastGuard AI | Medium-Range Forecast Reliability",
    description:
      "Operational weather forecast reliability analysis, regional risk, and explainable diagnostics for India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased min-h-screen bg-[var(--noir-canvas)] text-[var(--noir-text)] selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}

