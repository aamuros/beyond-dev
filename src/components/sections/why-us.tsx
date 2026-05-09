import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    number: "01",
    title: "Product-minded engineering",
    description:
      "We help shape the right product, not just write code from tickets.",
  },
  {
    number: "02",
    title: "Senior execution",
    description:
      "You work directly with builders who understand architecture, design, implementation, and delivery.",
  },
  {
    number: "03",
    title: "Transparent delivery",
    description:
      "Clear milestones, demos, communication, and documentation throughout the project.",
  },
  {
    number: "04",
    title: "Built for scale",
    description:
      "Maintainable code, secure architecture, reliable deployment, and sensible technical decisions.",
  },
  {
    number: "05",
    title: "Business-first thinking",
    description:
      "Every feature is tied to a workflow, efficiency gain, revenue opportunity, or customer outcome.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              Why beyond.dev
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              We operate differently than typical agencies or freelancers.
            </p>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-border border-t border-border">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.number} delay={i * 0.06}>
              <div className="grid grid-cols-[40px_1fr] md:grid-cols-[40px_200px_1fr] gap-3 md:gap-8 py-6 md:py-8">
                <span className="text-sm font-mono text-text-faint pt-0.5">
                  {benefit.number}
                </span>
                <h3 className="text-base font-medium text-text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
