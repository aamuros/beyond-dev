import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PricingCards } from "@/components/sections/pricing-cards";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for every project scope. Choose the right engagement model for your needs.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 pb-2 md:pt-36 md:pb-4 lg:pt-44 lg:pb-4">
        <Container>
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight text-center leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Simple, transparent pricing
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto text-center">
              No hidden fees. Pick an engagement model that fits your project.
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
