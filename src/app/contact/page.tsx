"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSimple from "@/components/sections/footer/FooterSimple";

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