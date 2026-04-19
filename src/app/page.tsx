"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ArrowUpRight, TrendingUp, Award, Users, Brain, PenTool, Wrench, Globe } from "lucide-react";

export default function WebAgency2Page() {
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
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="Webild"
            navItems={[
              { name: "Work", id: "work" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
          />
        </div>
        <div id="hero" data-section="hero">
          <HeroSplitKpi
            title="From Dream To Reality Services"
            description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
            tag="Award-Winning Agency"
            buttons={[
              { text: "Start Project", href: "/contact" },
              { text: "View Work", href: "/work" },
            ]}
            background={{ variant: "rotated-rays-animated" }}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1"
            kpis={[
                { value: "100+", label: "Projects Completed" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "3+", label: "Years of Excellence" }
            ]}
            enableKpiAnimation={true}
            imagePosition="right"
            mediaAnimation="none"
          />
        </div>
        <div id="services" data-section="services">
          <FeatureBento
            title="Our Services"
            description="Comprehensive solutions categorized for your business growth."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "All Services", href: "/services" }]}
            features={[
              {
                title: "Strategy", description: "Roadmapping, research, and brand positioning.", bentoComponent: { bentoComponent: "reveal-icon", icon: Brain },
              },
              {
                title: "Creative", description: "Visual identity, UI/UX, and art direction.", bentoComponent: { bentoComponent: "reveal-icon", icon: PenTool },
              },
              {
                title: "Production", description: "Development, content, and high-fidelity asset delivery.", bentoComponent: { bentoComponent: "reveal-icon", icon: Wrench },
              },
              {
                title: "Digital", description: "Robust web engineering, SEO, and performance optimization.", bentoComponent: { bentoComponent: "reveal-icon", icon: Globe },
              },
            ]}
          />
        </div>
        <div id="work" data-section="work">
          <FeatureCardTwentySix
            title="Our Work"
            description="A selection of projects we've crafted for clients across industries."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "View All Work", href: "/work" }]}
            features={[
              { title: "Umbra Skincare", description: "Luxury fragrance e-commerce", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp?_wi=2", imageAlt: "Umbra Skincare website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Luxuria Travel", description: "Bespoke luxury travel experiences", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp?_wi=2", imageAlt: "Luxuria Travel website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Dental Care", description: "Premier dental practice", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp?_wi=2", imageAlt: "Luxury Dental Care website", buttonIcon: ArrowUpRight, buttonHref: "#" },
              { title: "Summit Roofing", description: "Professional roofing services", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp?_wi=2", imageAlt: "Summit Roofing website", buttonIcon: ArrowUpRight, buttonHref: "#" },
            ]}
          />
        </div>
        <div id="metrics" data-section="metrics">
          <MetricCardOne
            title="Trusted by Industry Leaders"
            description="Years of experience building digital products that drive real results."
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            metrics={[
              { id: "projects", value: "100+", title: "Projects", description: "Successfully delivered across all industries", icon: Award },
              { id: "satisfaction", value: "99%", title: "Satisfaction", description: "Client satisfaction rate and counting", icon: Users },
              { id: "years", value: "3+", title: "Years", description: "Of crafting exceptional digital experiences", icon: TrendingUp },
            ]}
          />
        </div>
        <div id="team" data-section="team">
          <TeamCardFive
            title="Meet the Team"
            description="The creative minds behind your next project."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            team={[
              { id: "1", name: "Aslı Bozkurt", role: "Art Director & Graphic Designer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776625564855-ydqnp606.jpg" },
              { id: "2", name: "Mustafa Can Aladı", role: "Founder & Creative Director", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776625367023-os4d0ywd.png" },
              { id: "3", name: "Nehir Türkay", role: "Client & Brand Executive", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776625642052-mc0qoc0z.jpg" },
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Get in Touch"
            title="Ready to Transform Your Digital Presence?"
            description="Let's build something extraordinary together. Get in touch and let's discuss your next project."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Start Your Project", href: "/contact" },
              { text: "View Our Work", href: "/work" },
            ]}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterBase
            logoText="Webild"
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CXcyzSiT3oNai1DT9KTH3YAuVM/uploaded-1776623065949-0942gxbo.png"
            copyrightText="© 2026 | Webild"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Work", href: "/work" }, { label: "Contact", href: "/contact" }] },
              { title: "Services", items: [{ label: "Strategy", href: "/services" }, { label: "Creative", href: "/services" }, { label: "Production", href: "/services" }, { label: "Digital", href: "/services" }] },
              { title: "Connect", items: [{ label: "hello@portiers.co", href: "mailto:hello@portiers.co" }, { label: "+90 501 093 77 77", href: "tel:+905010937777" }, { label: "LinkedIn", href: "#" }, { label: "Instagram", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
