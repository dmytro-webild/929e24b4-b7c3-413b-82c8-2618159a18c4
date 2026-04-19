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
        <FooterBase
          logoText="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Work", href: "/work" },
                { label: "Contact", href: "/contact" },
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
                { label: "hello@portiers.co", href: "mailto:hello@portiers.co" },
                { label: "+90 501 093 77 77", href: "tel:+905010937777" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
              ],
            },
          ]}
          logoImageClassName="!h-20 !w-auto"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}