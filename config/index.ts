import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Owen Gray | Portfolio",
  description: "Student and future full stack software engineer. Building in a reality no one can fully explain.",
  keywords: [
    "owen gray",
    "portfolio",
    "full stack",
    "software engineer",
    "student",
    "nextjs",
    "react",
    "typescript",
    "space-portfolio",
  ] as Array<string>,
  authors: {
    name: "Owen Gray",
    url: "https://github.com/OG-Owen",
  },
} as const;
