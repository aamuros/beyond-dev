import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PricingCards } from "@/components/sections/pricing-cards";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = createMetadata({
  title: "Engagement Models",
  description:
    "Flexible engagement models for custom software development. Choose the right fit for your project scope and timeline.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-44 lg:pb-16">
        <Container>
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight leading-[1.1] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Engagement Models
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Flexible ways to work together, depending on your project scope,
              timeline, and budget.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <PricingCards />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
