import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Websites",
    description:
      "Professional sites for businesses, portfolios, and online presence.",
  },
  {
    title: "Custom Systems",
    description:
      "Platforms, dashboards, and internal tools built around your workflow.",
  },
  {
    title: "MVP Development",
    description:
      "From product strategy to a launch-ready product with auth, billing, and admin tools.",
  },
  {
    title: "Student Projects",
    description:
      "End-to-end help for thesis and capstone projects, including documentation and defense prep.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-36">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
              What we build
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Software built around what you actually need.
            </p>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-border border-t border-border">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-12 py-6 md:py-8 group">
                <h3 className="text-base font-medium text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
