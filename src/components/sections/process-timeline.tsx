import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business, map out the problem, define the scope, and decide what to build first.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create wireframes, user flows, and interface designs that clarify the product before any code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We write clean, tested code in short iterations with regular demos, keeping you involved throughout.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, test in production, handle edge cases, and make sure everything works reliably for real users.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We monitor usage, gather feedback, fix issues, and plan the next set of improvements based on real data.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              How we work
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              A clear, repeatable process that takes projects from idea to
              production.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="relative pt-10">
                    {/* Number circle */}
                    <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-xs font-mono text-accent">
                      {step.number}
                    </div>
                    <h3 className="text-base font-medium text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-xs font-mono text-accent shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-medium text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
