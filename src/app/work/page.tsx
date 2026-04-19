"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          navItems={[
            { name: "Work", id: "/work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <div id="work" className="pt-32 pb-20">
          <FeatureCardTwentySix
            title="Our Work"
            description="A selection of projects we've crafted for clients across industries."
            textboxLayout="default"
            useInvertedBackground={false}
            cardClassName="!h-auto aspect-video"
            features={[
              { title: "Umbra Skincare", description: "Luxury fragrance e-commerce", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp?_wi=1", imageAlt: "Umbra Skincare website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Luxuria Travel", description: "Bespoke luxury travel experiences", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp?_wi=1", imageAlt: "Luxuria Travel website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Dental Care", description: "Premier dental practice", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp?_wi=1", imageAlt: "Luxury Dental Care website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Summit Roofing", description: "Professional roofing services", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp?_wi=1", imageAlt: "Summit Roofing website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Dubai Real Estate", description: "Luxury property listings", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-5.webp?_wi=1", imageAlt: "Dubai Real Estate website", buttonIcon: ArrowUpRight, buttonHref: "#" },
            ]}
          />
        </div>
        <FooterBase
          logoText="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Work", href: "/work" }, { label: "Contact", href: "/contact" }] },
            { title: "Services", items: [{ label: "Web Development", href: "#" }, { label: "SEO", href: "#" }, { label: "Branding", href: "#" }, { label: "UI/UX Design", href: "#" }] },
            { title: "Connect", items: [{ label: "Twitter", href: "#" }, { label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }, { label: "Dribbble", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}