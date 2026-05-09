import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    label: "Brief call",
    detail:
      "You tell us what you need. We ask questions, take notes, and figure out if we're the right fit — usually in under 30 minutes.",
  },
  {
    number: "2",
    label: "Scope document",
    detail:
      "We write up what we heard: the problem, the deliverables, the timeline, and the price. No surprises.",
  },
  {
    number: "3",
    label: "Kickoff",
    detail:
      "Once you approve the scope, we set up your project workspace and start building. You get updates and working demos every week.",
  },
];

export function ProjectStart() {
  return (
    <section className="py-20 md:py-28 lg:py-36 border-t border-border">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              How a project starts
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="flex gap-5 py-5 border-b border-border last:border-b-0">
                <span className="text-sm font-mono text-text-faint w-4 shrink-0 pt-0.5">
                  {step.number}
                </span>
                <div>
                  <p className="text-base font-medium text-text-primary">
                    {step.label}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-1">
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.25}>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/contact">
                Start a project
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
