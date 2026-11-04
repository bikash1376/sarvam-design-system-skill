"use client";
import { COMPONENT_PREVIEWS } from "./components";
import * as B from "./brand";
import {
  AntiSlopPreview, BordersPreview, ColorPreview, ElevationPreview, GridPreview, IconographyPreview, IntroPreview,
  MotionPreview, RadiusPreview, SpacePreview, TypographyPreview,
} from "./foundations";

const PREVIEWS: Record<string, () => React.ReactNode> = {
  "": IntroPreview,
  color: ColorPreview, typography: TypographyPreview, space: SpacePreview, radius: RadiusPreview,
  "borders-and-lines": BordersPreview, elevation: ElevationPreview, motion: MotionPreview,
  iconography: IconographyPreview, grid: GridPreview, "anti-slop": AntiSlopPreview,
  ...COMPONENT_PREVIEWS,
  "brand-essence": B.BrandEssencePreview, "logo-usage": B.LogoUsagePreview, "motifs-and-glyphs": B.MotifsPreview,
  "gradients-and-light": B.GradientsPreview, "soft-glow-surfaces": B.SoftGlowPreview, "glyph-colour-depth": B.GlyphDepthPreview,
  "mandala-background": B.MandalaPreview, imagery: B.ImageryPreview, "voice-and-tone": B.VoicePreview, copywriting: B.CopywritingPreview,
  "icon-button": B.IconButtonPreview, navbar: B.NavbarPreview, footer: B.FooterPreview, eyebrow: B.EyebrowPreview,
  "section-header": B.SectionHeaderPreview, "pillar-list": B.PillarListPreview, testimonial: B.TestimonialPreview,
  "logo-marquee": B.LogoMarqueePreview, "integration-card": B.IntegrationCardPreview, panel: B.GlowPanelPreview,
  "cta-banner": COMPONENT_PREVIEWS.panel,
  "social-banners": B.SocialBannersPreview, "hero-layouts": B.HeroLayoutsPreview, "web-pages": B.WebPagesPreview,
};

/** Live preview for a docs page, rendered inside the `.sarvam` theme scope. */
export function Preview({ slug, foundation }: { slug: string; foundation?: boolean }) {
  const P = PREVIEWS[slug];
  if (!P) return null;
  return (
    <div className={foundation || slug === "" ? "sarvam" : "sarvam rounded-2xl border bg-[var(--sf)] p-6 sm:p-10"}>
      <P />
    </div>
  );
}
