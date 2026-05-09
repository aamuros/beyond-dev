import {
  AcademicCapIcon,
  BuildingStorefrontIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Container } from "@/components/ui/container";

const services = [
  {
    title: "Thesis & Capstone Projects",
    description:
      "End-to-end help for CS/IT students — from system design and development to documentation and defense preparation.",
    icon: AcademicCapIcon,
  },
  {
    title: "Small Business Websites",
    description:
      "Professional web presence, online catalogs, booking systems, and e-commerce solutions for local businesses.",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack platforms, portals, dashboards, and business tools designed around your workflow.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "SaaS MVP Development",
    description:
      "From product strategy and architecture to a launch-ready SaaS product with authentication, billing, and admin tools.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Internal Tools & Automation",
    description:
      "Replace spreadsheets, manual processes, and disconnected systems with purpose-built software and automated workflows.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Student Portfolio Sites",
    description:
      "Stand out in job applications with a professional portfolio website that showcases your projects and skills.",
    icon: UserIcon,
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
              From student projects to business systems — software built around
              what you actually need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <Card hover className="h-full group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
