import {
  LightBulbIcon,
  UserGroupIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    title: "Product-minded engineering",
    description:
      "We help shape the right product, not just write code from tickets.",
    icon: LightBulbIcon,
  },
  {
    title: "Senior execution",
    description:
      "You work directly with builders who understand architecture, design, implementation, and delivery.",
    icon: UserGroupIcon,
  },
  {
    title: "Transparent delivery",
    description:
      "Clear milestones, demos, communication, and documentation throughout the project.",
    icon: EyeIcon,
  },
  {
    title: "Built for scale",
    description:
      "Maintainable code, secure architecture, reliable deployment, and sensible technical decisions.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Business-first thinking",
    description:
      "Every feature is tied to a workflow, efficiency gain, revenue opportunity, or customer outcome.",
    icon: ChartBarIcon,
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

        {/* 3+2 grid on desktop, 2+3 also works; using 3-col with last 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-border-strong hover:-translate-y-0.5 h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-text-primary mb-2">
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
