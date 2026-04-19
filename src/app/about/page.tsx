"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function AboutPage() {
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
            { name: "Services", id: "services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <div id="about">
            <TextSplitAbout
                title="About Webild"
                description={[
                    "Founded on the belief that digital design should be both functional and beautiful, we've helped countless businesses establish their online presence.",                    "Our team of designers, developers, and strategists work in tandem to deliver high-quality, high-performance web solutions that meet your business needs.",                    "We don't just build websites; we build partnerships that last and digital experiences that drive growth."
                ]}
                useInvertedBackground={false}
            />
        </div>
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Services", href: "#services" },
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
