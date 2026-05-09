import { CheckIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Container } from "@/components/ui/container";

const plans = [
  {
    title: "Student Project",
    description: "For thesis, capstone, and academic projects.",
    featured: true,
    items: [
      "System design consultation",
      "Full-stack development",
      "Database design",
      "Documentation support",
      "Defense preparation guide",
      "Source code walkthrough",
    ],
    cta: "Get help with your project",
  },
  {
    title: "Small Business Website",
    description: "For local businesses needing a professional web presence.",
    featured: false,
    items: [
      "Responsive design",
      "Online catalog or menu",
      "Booking or contact system",
      "Social media integration",
      "SEO optimization",
      "Analytics setup",
    ],
    cta: "Build your website",
  },
  {
    title: "Custom App Build",
    description: "For businesses needing tailored software solutions.",
    featured: false,
    items: [
      "Discovery and scoping",
      "UX/UI design",
      "Full-stack development",
      "Authentication and roles",
      "Third-party integrations",
      "Deployment and handoff",
    ],
    cta: "Discuss your project",
  },
  {
    title: "Ongoing Partnership",
    description: "For continuous development and long-term support.",
    featured: false,
    items: [
      "Roadmap planning",
      "Feature development",
      "Bug fixes and maintenance",
      "Performance monitoring",
      "Technical consulting",
      "Priority support",
    ],
    cta: "Discuss a partnership",
  },
];

export function PricingCards() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              How we work
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Flexible engagement models based on what you need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.08}>
              <Card
                className={`h-full flex flex-col ${
                  plan.featured ? "border-accent/40" : ""
                }`}
              >
                {plan.featured && (
                  <span className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-text-primary">
                  {plan.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    size="md"
                    href="/contact"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
