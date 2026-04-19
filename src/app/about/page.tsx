"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";

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
        <div id="about">
            <TextSplitAbout
                title="About Webild"
                description={[
                    "Founded on the belief that digital design should be both functional and beautiful, we've helped countless businesses establish their online presence.",                    "Our team of designers, developers, and strategists work in tandem to deliver high-quality, high-performance web solutions that meet your business needs.",                    "We don't just build websites; we build partnerships that last and digital experiences that drive growth."
                ]}
                useInvertedBackground={false}
            />
        </div>
        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="Webild"
            columns={[
              { items: [{ label: "Strategy", href: "#" }, { label: "Branding", href: "#" }] },
              { items: [{ label: "Creative", href: "#" }, { label: "Digital", href: "#" }] },
              { items: [{ label: "Start Project", href: "/contact" }] }
            ]}
            leftLink={{ text: "Privacy", href: "#" }}
            rightLink={{ text: "Terms", href: "#" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}