import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = createMetadata({
  title: "Our Process",
  description:
    "A clear, repeatable process that takes projects from idea to production. Discover, Design, Build, Launch, Improve.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 lg:pt-44 lg:pb-16">
        <Container>
          <ScrollReveal>
            <h1
              className="text-text-primary font-semibold tracking-tight leading-[1.1] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              How We Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              A clear, repeatable process that takes projects from idea to
              production with full transparency at every step.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
