"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import { Brain, PenTool, Wrench, Globe } from "lucide-react";

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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          navItems={[
            { name: "Work", id: "/work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
          className="[&_img]:!h-20 [&_img]:!w-auto"
        />
        <div id="services" className="pt-32 pb-20">
            <FeatureBento
                title="Our Services"
                description="Comprehensive solutions categorized for your business growth."
                textboxLayout="default"
                useInvertedBackground={false}
                animationType="slide-up"
                features={[
                    {
                        title: "Strategy",                        description: "Roadmapping, research, and brand positioning.",                        bentoComponent: "reveal-icon",                        icon: Brain,
                    },
                    {
                        title: "Creative",                        description: "Visual identity, UI/UX, and art direction.",                        bentoComponent: "reveal-icon",                        icon: PenTool,
                    },
                    {
                        title: "Production",                        description: "Development, content, and high-fidelity asset delivery.",                        bentoComponent: "reveal-icon",                        icon: Wrench,
                    },
                    {
                        title: "Digital",                        description: "Robust web engineering, SEO, and performance optimization.",                        bentoComponent: "reveal-icon",                        icon: Globe,
                    },
                ]}
            />
        </div>
        <div id="footer" data-section="footer">
          <FooterSimple
            bottomLeftText="© 2026 | Webild"
            bottomRightText="All rights reserved."
            columns={[
              {
                title: "Webild",                items: [{ label: "Your Partner in Digital Growth" }]
              },
              {
                title: "Services",                items: [
                    { label: "Strategy", href: "#" },
                    { label: "Branding & Identity", href: "#" },
                    { label: "Creative Solutions", href: "#" },
                    { label: "Digital Marketing", href: "#" },
                    { label: "Social Media Management", href: "#" },
                    { label: "Video & Photography Production", href: "#" },
                    { label: "Web / App Design & Development", href: "#" },
                    { label: "Media Planning & Buying", href: "#" },
                    { label: "New Generation Technologies", href: "#" }
                ],
              },
              {
                title: "Connect",                items: [
                    { label: "Twitter", href: "#" },
                    { label: "LinkedIn", href: "#" },
                    { label: "Instagram", href: "#" },
                    { label: "Start a project", href: "/contact" }
                ],
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}