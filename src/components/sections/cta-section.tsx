import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <Container className="relative text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.15]">
            Have a project in mind? Let&apos;s talk about it.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Whether it&apos;s a thesis project, a business website, or a full
            custom application — tell us what you need and we&apos;ll figure out
            the best way to build it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Start a project
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="mailto:hello@beyond.dev"
            >
              Send us an email
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
