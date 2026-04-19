"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          className="[&_img]:!h-20 [&_img]:!w-auto"
        />
        <div id="contact" className="pt-32 pb-20">
          <ContactSplit
            tag="Contact Us"
            title="Let's Connect"
            description="Ready to start your project or just have a question? Drop us a message and we'll be in touch."
            background={{ variant: "rotated-rays-animated" }}
            useInvertedBackground={false}
            mediaPosition="right"
          />
        </div>
        <FooterBase
          logoText="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
            { title: "Services", items: [{ label: "Strategy", href: "/services" }, { label: "Creative", href: "/services" }, { label: "Production", href: "/services" }, { label: "Digital", href: "/services" }] },
            { title: "Connect", items: [{ label: "hello@portiers.co", href: "mailto:hello@portiers.co" }, { label: "+90 501 093 77 77", href: "tel:+905010937777" }, { label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
          ]}
          logoImageClassName="!h-48 !w-auto mx-auto"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}