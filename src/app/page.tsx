"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, ArrowUpRight, Target, Lightbulb, Factory, Cpu, TrendingUp, Award, Users } from "lucide-react";

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
        <HeroSplitDoubleCarousel
          title="We Build Digital Experiences"
          description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
          tag="Award-Winning Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Project", href: "#contact" },
            { text: "View Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp?_wi=1", imageAlt: "UI UX Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp?_wi=1", imageAlt: "SaaS platform" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Luxuria travel" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "Dental practice" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <div id="services">
          <FeatureBento
            title="Our Services"
            description="Premium digital solutions designed to scale your business."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              { title: "Strategy", description: "Defining the vision, goals, and roadmap.", bentoComponent: "reveal-icon", icon: Target },
              { title: "Creative", description: "Conceptualizing unique visual languages.", bentoComponent: "reveal-icon", icon: Lightbulb },
              { title: "Production", description: "Expert execution of high-quality content.", bentoComponent: "reveal-icon", icon: Factory },
              { title: "Digital", description: "Engineering robust, scalable experiences.", bentoComponent: "reveal-icon", icon: Cpu },
            ]}
            buttons={[{ text: "Explore Services", href: "/services" }]}
          />
        </div>
        <FeatureCardTwentySix
          title="Our Work"
          description="A selection of projects we've crafted for clients across industries."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Work", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            { title: "Umbra Skincare", description: "Luxury fragrance e-commerce", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp", imageAlt: "Umbra Skincare", buttonIcon: ArrowUpRight, buttonHref: "#" },
            { title: "Luxuria Travel", description: "Bespoke luxury travel experiences", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp", imageAlt: "Luxuria Travel", buttonIcon: ArrowUpRight, buttonHref: "#" },
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Webild completely transformed our online presence. The team delivered a stunning website that exceeded our expectations."
          rating={5}
          author="— Maria Santos, CEO at Luxuria Travel"
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Trusted by Industry Leaders"
          description="Years of experience building digital products that drive real results."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "100+", title: "Projects", description: "Successfully delivered", icon: Award },
            { id: "satisfaction", value: "99%", title: "Satisfaction", description: "Client satisfaction rate", icon: Users },
            { id: "years", value: "8+", title: "Years", description: "Of crafting experiences", icon: TrendingUp },
          ]}
        />
        <TeamCardFive
          title="Meet the Team"
          description="The creative minds behind your next project."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          team={[
            { id: "1", name: "Sarah Miller", role: "Lead Developer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", imageAlt: "Sarah Miller" },
            { id: "2", name: "Valentina Reyes", role: "Creative Director", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp", imageAlt: "Valentina Reyes" },
          ]}
        />
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How long does a typical project take?", content: "Most projects are completed within 2-4 weeks." },
            { id: "2", title: "What is your pricing structure?", content: "We offer project-based pricing tailored to your needs." },
          ]}
        />
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Transform Your Digital Presence?"
          description="Let's build something extraordinary together."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Start Your Project", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
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
