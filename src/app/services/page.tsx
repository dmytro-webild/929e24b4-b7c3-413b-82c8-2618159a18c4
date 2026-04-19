"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FooterBase from "@/components/sections/footer/FooterBase";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import { Search, Zap, Puzzle } from "lucide-react";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <div id="services" className="pt-32 pb-20">
            <FeatureBento
                title="Our Services"
                description="We offer a full suite of digital services to help your brand stand out online."
                textboxLayout="default"
                useInvertedBackground={false}
                animationType="slide-up"
                features={[
                    {
                        title: "SEO",                        description: "We optimize your website to rank higher on search engines and drive organic traffic.",                        bentoComponent: "marquee",                        centerIcon: Search,
                        variant: "text",                        texts: ["Keywords", "Backlinks", "Meta Tags", "Organic Traffic", "Rankings", "Analytics", "SERP", "Indexing"],
                    },
                    {
                        title: "Web Development",                        description: "Custom-built websites that are fast, responsive, and designed to convert.",                        bentoComponent: "media-stack",                        items: [
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "Web project - AgentFlow AI platform" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Web project - Architecture studio" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Web project - Summit Roofing" },
                        ],
                    },
                    {
                        title: "Branding",                        description: "Build a memorable brand identity that resonates with your audience.",                        bentoComponent: "media-stack",                        items: [
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=2", imageAlt: "Brand project 1" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=2", imageAlt: "Brand project 2" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp?_wi=2", imageAlt: "Brand project 3" },
                        ],
                    },
                ]}
            />
        </div>
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Web Development", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Design", href: "#" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
