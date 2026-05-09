import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Container } from "@/components/ui/container";

const plans = [
  {
    title: "Student Project",
    description: "For thesis, capstone, and academic systems.",
    price: "₱15k",
    priceLabel: "Starting at",
    featured: true,
    items: [
      "System design",
      "Full-stack development",
      "Documentation support",
      "Source code walkthrough",
    ],
    cta: "Get started",
  },
  {
    title: "Website",
    description: "For business websites, portfolios, and landing pages.",
    price: "₱25–60k",
    priceLabel: "Typical range",
    featured: false,
    items: [
      "Responsive pages",
      "Contact or booking flow",
      "Basic SEO",
      "Deployment handoff",
    ],
    cta: "Build your website",
  },
  {
    title: "Custom Build",
    description: "For dashboards, portals, and workflow tools.",
    price: "₱80k+",
    priceLabel: "Depending on scope",
    featured: false,
    items: [
      "Discovery and scope",
      "UX/UI design",
      "Full-stack development",
      "Auth and integrations",
      "Deployment and handoff",
    ],
    cta: "Discuss your project",
  },
  {
    title: "Ongoing Support",
    description: "For continuous improvements after launch.",
    price: "Custom",
    priceLabel: "Monthly retainer",
    featured: false,
    items: [
      "Roadmap planning",
      "Feature development",
      "Bug fixes",
      "Performance monitoring",
      "Priority support",
    ],
    cta: "Let's talk",
  },
];

export function PricingCards() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              Simple pricing for focused builds.
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Start small, ship clearly, and scale when needed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.06}>
              <div
                className={`relative flex flex-col h-full rounded-xl p-6 md:p-7 transition-all duration-300 ${
                  plan.featured
                    ? "bg-surface-raised border border-[rgba(255,255,255,0.2)] pt-8"
                    : "bg-card border border-border hover:border-border-strong"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-surface-raised text-text-primary border border-[rgba(255,255,255,0.2)] whitespace-nowrap">
                    Most popular
                  </span>
                )}

                <h3 className="text-base font-semibold text-text-primary">
                  {plan.title}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-text-primary tracking-tight">
                    {plan.price}
                  </span>
                  {plan.priceLabel && (
                    <span className="text-sm text-text-muted">
                      {plan.priceLabel}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {plan.description}
                </p>

                <div className="my-5 h-px bg-border" />

                <ul className="space-y-2.5 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    size="md"
                    href="/contact"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
