"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FooterBase from "@/components/sections/footer/FooterBase";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import { Target, Lightbulb, Factory, Cpu } from "lucide-react";

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
            title="Our Premium Services"
            description="Precision-engineered strategies to elevate your brand presence."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              { title: "Strategy", description: "Defining the vision, goals, and roadmap to position your brand for sustainable growth.", bentoComponent: "reveal-icon", icon: Target },
              { title: "Creative", description: "Conceptualizing unique identities and visual languages that resonate deeply with audiences.", bentoComponent: "reveal-icon", icon: Lightbulb },
              { title: "Production", description: "Expert execution of high-quality content, assets, and design artifacts that tell your story.", bentoComponent: "reveal-icon", icon: Factory },
              { title: "Digital", description: "Engineering robust, scalable digital experiences that convert and perform across all platforms.", bentoComponent: "reveal-icon", icon: Cpu },
            ]}
            className="max-w-7xl mx-auto"
          />
        </div>
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }] },
            { title: "Connect", items: [{ label: "Twitter", href: "#" }, { label: "LinkedIn", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
