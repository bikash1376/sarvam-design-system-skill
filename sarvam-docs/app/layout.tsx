import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sarvam Design System", template: "%s · Sarvam Design System" },
  description: "Sarvam AI's brand and design system, written for humans and AI agents.",
  icons: { icon: "/assets/logos/sarvam-logo-black.svg" },
  robots: { index: false, follow: false }, // private preview: keep out of search engines
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* tokens.css is copied from the skill at build (scripts/sync.mjs) and loads the brand fonts */}
        <link rel="stylesheet" href="/tokens/tokens.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Source+Serif+4:wght@400;500&family=Noto+Sans+Devanagari:wght@400;500&family=Noto+Serif+Devanagari:wght@500&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
