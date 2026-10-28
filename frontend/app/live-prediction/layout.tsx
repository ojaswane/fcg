import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Weather Predictions by Indian City",
  description:
    "View current weather observations and short-term temperature predictions for selected cities across India.",
};

export default function LivePredictionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
