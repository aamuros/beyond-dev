import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Websites, custom systems, MVP development, and student projects — built from first scope to launch.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-44 lg:pb-16">
        <Container>
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight leading-[1.1] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              What We Build
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Software built around what you actually need.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <ServicesGrid />
      <CTASection />
    </>
  );
}
