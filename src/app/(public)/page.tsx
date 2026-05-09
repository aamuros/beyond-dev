export const dynamic = 'force-dynamic';
import { prisma } from "@/lib/prisma";
import { createMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { WhyUs } from "@/components/sections/why-us";
import { TeamCard } from "@/components/sections/team-card";
import { PricingCards } from "@/components/sections/pricing-cards";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = createMetadata({
  title: "beyond.dev — Custom Software Studio",
  description:
    "A software studio building websites, MVPs, internal tools, and custom systems — from first scope to launch.",
  path: "/",
});

export default async function HomePage() {
  const [caseStudies, teamMembers, testimonials] = await Promise.all([
    prisma.caseStudy.findMany({
      where: { published: true, featured: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.teamMember.findMany({
      orderBy: { order: "asc" },
    }),
    prisma.testimonial.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <ProcessTimeline />

      {/* Featured Case Studies */}
      {caseStudies.length > 0 && (
        <section id="work" className="py-20 md:py-28 lg:py-36">
          <Container>
            <ScrollReveal>
              <div className="max-w-2xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                  Featured work
                </h2>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                  Real projects, real outcomes. Here are a few we can talk about.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <ScrollReveal key={study.id} delay={i * 0.08}>
                  <CaseStudyCard
                    title={study.title}
                    slug={study.slug}
                    industry={study.industry}
                    summary={study.summary}
                    techStack={study.techStack}
                  />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <WhyUs />

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section id="team" className="py-20 md:py-28 lg:py-36">
          <Container>
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                  Meet our Team
                </h2>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                  The people behind beyond.dev. Builders, problem-solvers, and engineers who ship.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.id} delay={i * 0.08}>
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    avatarUrl={member.avatarUrl ?? undefined}
                  />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {testimonials.length > 0 && (
        <Testimonials
          testimonials={testimonials.map((t) => ({
            quote: t.quote,
            authorName: t.authorName,
            authorRole: t.authorRole,
            company: t.company,
          }))}
        />
      )}

      <PricingCards />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
