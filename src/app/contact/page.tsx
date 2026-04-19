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
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "/work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <div id="contact" className="pt-32 pb-20">
          <ContactSplit
            tag="Contact Us"
            title="Let's Connect"
            description="Ready to start your project or just have a question? Drop us a message and we'll be in touch."
            background={{ variant: "rotated-rays-animated" }}
            mediaPosition="right"
          />
        </div>
        <FooterBase
          logoText="Webild"
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